import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const IndividualBlogPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [slug]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default IndividualBlogPage;
