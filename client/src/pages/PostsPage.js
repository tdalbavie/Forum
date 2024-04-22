import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useParams } from 'react-router-dom';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const { threadId } = useParams();
  const { user } = useUser();

  useEffect(() => {
    fetchPosts();
  }, [threadId]);

  const fetchPosts = async () => {
    const response = await fetch(`http://localhost:9000/threads/${threadId}/posts`);
    const data = await response.json();
    setPosts(data);
  };

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;
    try {
      await fetch('http://localhost:9000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newPostContent,
          threadId,
          authorId: user._id, // Assuming you have the user's ID
          username: user.username,
        }),
      });
      setNewPostContent('');
      fetchPosts();
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:9000/posts/${postId}/delete`, {
        method: 'PATCH',
      });
      fetchPosts(); // Refresh posts list after deletion
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const handleEdit = async (postId) => {
    const newContent = prompt('Enter the new content for the post:');
    if (newContent == null || newContent.trim() === '') return;

    try {
      await fetch(`http://localhost:9000/posts/${postId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newContent }),
      });
      fetchPosts(); // Refresh posts list after editing
    } catch (error) {
      console.error('Failed to edit post:', error);
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      {user && (
        <div>
          <textarea
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="Write your post here..."
          />
          <button onClick={handleCreatePost}>Post</button>
        </div>
      )}
      {posts.map(post => (
        <div key={post._id}>
          <strong>{post.username}:</strong> {post.deleted ? "This post has been deleted." : post.content}
          {user && (user.role === 'admin' || user.username === post.username) && !post.deleted && (
            <>
              <button onClick={() => handleEdit(post._id)}>Edit</button>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
