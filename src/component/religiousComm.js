import React, { useState } from 'react';

export default function ReligiousCommunity() {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    if (postContent.trim() !== '') {
      // Create a new post object with content and initial like count
      const newPost = {
        content: postContent,
        likes: 0
      };
      // Add the new post to the list of posts
      setPosts([...posts, newPost]);
      // Clear the post input field
      setPostContent('');
    }
  };

  const handleLikeClick = (index) => {
    // Increment the like count of the post at the specified index
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h2>Religious Community</h2>
      <p>Welcome to our religious community! Here, like-minded people in Christ can post religious subjects and interact with each other.</p>
      
      {/* Input box for posting */}
      <div>
        <textarea
          value={postContent}
          onChange={handlePostChange}
          placeholder="Write your post here..."
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      
      {/* Displaying posts */}
      <div>
        {posts.map((post, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <p>{post.content}</p>
            <button onClick={() => handleLikeClick(index)}>
              Like ({post.likes})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
