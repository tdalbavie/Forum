import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Navbar from '../components/Navbar';
import './PostsPage.css'; // Make sure your CSS is linked

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const { threadId } = useParams();
  const { user } = useUser();
  const textareaRef = useRef(null); // Use useRef for referencing DOM elements

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
          authorId: user._id,
          username: user.username,
        }),
      });
      setNewPostContent('');
      await fetchPosts();
      scrollToTextarea(); // Scroll to the textarea after posting
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  const scrollToTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.scrollIntoView({ behavior: 'smooth' });
      textareaRef.current.focus();
    }
  };

  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:9000/posts/${postId}/delete`, { method: 'PATCH' });
      fetchPosts();
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
      fetchPosts();
    } catch (error) {
      console.error('Failed to edit post:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Posts</h2>
        {posts.map(post => (
          <div key={post._id} className="post-item">
            <button className="button delete-button" onClick={() => handleDelete(post._id)}>Delete</button>
            <strong>{post.username}:</strong>
            <div className="post-content">{post.deleted ? "This post has been deleted." : post.content}</div>
            {user && (user.role === 'admin' || user.username === post.username) && !post.deleted && (
              <div className="post-controls">
                <button className="button edit-button" onClick={() => handleEdit(post._id)}>Edit</button>
              </div>
            )}
          </div>
        ))}
        <div>
          <textarea
            ref={textareaRef}
            className="textarea"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="Write your post here..."
          />
          <button className="button" onClick={handleCreatePost}>Post</button>
        </div>
      </div>
    </>
  );
};

export default PostsPage;
