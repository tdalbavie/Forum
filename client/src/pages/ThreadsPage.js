import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Navbar from '../components/Navbar';
const ThreadsPage = () => {
  const [threads, setThreads] = useState([]);
  const { categoryId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    fetchThreads();
  }, [categoryId]);

  const fetchThreads = async () => {
    const response = await fetch(`http://localhost:9000/categories/${categoryId}/threads`);
    if(response.ok){
      const data = await response.json();
      setThreads(data);
    }
  };

  const handleCreateThread = async () => {
    const threadTitle = prompt("Enter the title for the new thread:");
    if (threadTitle && user?._id) { // Check for user ID existence
      try {
        const response = await fetch('http://localhost:9000/threads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: threadTitle,
            categoryId,
            authorId: user._id, // Send author ID
          }),
        });
        if(response.ok){
          const newThread = await response.json();
          fetchThreads(); // Refresh threads list
          navigate(`/Threads/${newThread._id}/Posts`); // Navigate to the new thread's posts
        } else {
          alert('Failed to create thread. Please try again.');
        }
      } catch (error) {
        console.error('Failed to create thread:', error);
        alert('Failed to create thread. Please try again.');
      }
    }
  };

  const handleDeleteThread = async (threadId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this thread?");
    if (confirmDelete && user.role === 'admin') {
      try {
        await fetch(`http://localhost:9000/threads/${threadId}`, {
          method: 'DELETE',
        });
        fetchThreads(); // Refresh threads list after deletion
      } catch (error) {
        console.error("Failed to delete thread:", error);
        alert('Failed to delete thread. Please try again.');
      }
    }
  };

  return (
    <>
    <Navbar />
    <div style={{ paddingTop: '60px' }}>
      <div>
        <h1>Threads</h1>
        {user && <button onClick={handleCreateThread}>Create New Thread</button>}
        <ul>
          {threads.map(thread => (
            <li key={thread._id}>
              {/* Navigate to the thread's PostsPage on click */}
              <a href="#" onClick={() => navigate(`/Threads/${thread._id}/Posts`)}>
                {thread.title}
              </a>
              {user && user.role === 'admin' && (
                <button onClick={() => handleDeleteThread(thread._id)}>Delete</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default ThreadsPage;
