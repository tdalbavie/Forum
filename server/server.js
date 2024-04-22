require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const User = require('./modules/User.js');
const Category = require('./modules/Category.js');
const Thread = require('./modules/Thread.js');
const Post = require('./modules/Post.js');
const bcrypt = require('bcryptjs');
const cors = require('cors');

//Wyatt Recipe Addition:
const Recipe = require('./modules/Recipe'); // Adjust the path as necessary

const app = express();
const router = express.Router();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));
app.use(router);


// Connect to MongoDB Atlas.
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Forum!');
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Signup endpoint.
router.post('/signup', async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let user = new User({ username, password: hashedPassword, firstName, lastName });
    user = await user.save();

    const userResponse = { ...user._doc, password: undefined }; // Remove password from response
    res.status(201).json(userResponse);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});


// Login endpoint.
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      // Create a response object excluding the password
      const userResponse = { 
        _id: user._id, 
        username: user.username, 
        firstName: user.firstName, 
        lastName: user.lastName,
        role: user.role
      };
      res.json(userResponse); // Send the response object
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Error logging in");
  }
});


// Endpoint to create a Category (Admin only).
router.post('/categories', async (req, res) => {
  if (req.body.userRole !== 'admin') {
    return res.status(403).send('Only admins can create categories.');
  }

  try {
    const category = new Category({
      title: req.body.title,
      description: req.body.description,
    });
    await category.save();

    const threadPage = new Thread({
      title: `Welcome to the ${category.title} category!`,
      categoryId: category._id,
      // authorId is not provided for system-generated thread page
    });
    await threadPage.save();

    // Optionally, update the category with the threadPage reference if necessary
    // ...

    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating category with thread page:", error);
    res.status(500).send("Error creating category with thread page");
  }
});


// Endpoint to delete a category (Admin only).
router.delete('/categories/:categoryId', async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.categoryId);
    res.send("Category deleted successfully.");
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).send("Error deleting category");
  }
});


// Endpoint to list all Categories.
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Error fetching categories");
  }
});


// Endpoint to create a thread.
router.post('/threads', async (req, res) => {
  try {
    const { title, categoryId, authorId } = req.body;

    // Optional: Check if the category exists
    const categoryExists = await Category.findById(categoryId);
    if (!categoryExists) {
      return res.status(404).send("Category not found");
    }

    // Create the thread
    const thread = new Thread({
      title,
      categoryId,
      authorId, // This might be optional depending on your logic
    });

    await thread.save();

    // Check if authorId is provided (indicating a user-created thread)
    // and create a post only in that case.
    if (authorId) {
      // Create the first post for the thread (e.g., a welcome or introductory post)
      const post = new Post({
        content: "This is the start of the thread. Feel free to contribute!",
        threadId: thread._id,
        authorId: authorId,
        username: req.body.username, // Assuming username is also provided
      });

      await post.save();
    }

    res.status(201).json(thread);
  } catch (error) {
    console.error("Error creating thread:", error);
    res.status(500).send("Error creating thread");
  }
});



// Endpoint to delete a thread (Admin only).
router.delete('/threads/:threadId', async (req, res) => {
  try {
    await Thread.findByIdAndDelete(req.params.threadId);
    res.send("Thread deleted successfully.");
  } catch (error) {
    console.error("Error deleting thread:", error);
    res.status(500).send("Error deleting thread");
  }
});



// Endpoint to list threads by category.
router.get('/categories/:categoryId/threads', async (req, res) => {
  try {
    const threads = await Thread.find({ categoryId: req.params.categoryId });
    res.json(threads);
  } catch (error) {
    console.error("Error fetching threads:", error);
    res.status(500).send("Error fetching threads");
  }
});


// Endpoint to create a post.
router.post('/posts', async (req, res) => {
  // Assuming username is included in the request body along with other post details
  const { content, threadId, authorId, username } = req.body;

  try {
    const post = new Post({
      content,
      threadId,
      authorId,
      username,
      deleted: false,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send("Error creating post");
  }
});


// Endpoint to delete posts.
router.patch('/posts/:postId/delete', async (req, res) => {
  try {
    // Soft-delete the post by setting its deleted flag to true
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      { $set: { content: "This post has been deleted.", deleted: true } },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).send("Error deleting post");
  }
});


// Endpoint to edit posts.
router.patch('/posts/:postId', async (req, res) => {
  const { content } = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      { $set: { content } },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).send("Error updating post");
  }
});



// Endpoint to list posts by thread.
router.get('/threads/:threadId/posts', async (req, res) => {
  try {
    const posts = await Post.find({ threadId: req.params.threadId });
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send("Error fetching posts");
  }
});


//RECIPE:
//Enpoint to create recipe
router.post('/recipes', async (req, res) => {
  try {
    let recipe = new Recipe(req.body);
    recipe = await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).send("Error creating recipe");
  }
});

// Endpoint to get all recipes
router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 }); // Sort by newest first
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).send("Error fetching recipes");
  }
});

// Endpoint to get a single recipe by ID
router.get('/recipes/:recipeId', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).send('Recipe not found');
    }
  } catch (error) {
    console.error("Error fetching recipe:", error);
    res.status(500).send("Error fetching recipe");
  }
});
