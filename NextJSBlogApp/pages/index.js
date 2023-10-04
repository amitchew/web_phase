import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Homepage = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleClick = (slug) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => handleClick(post.slug)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
