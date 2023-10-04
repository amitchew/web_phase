import { useState } from 'react';
import { useRouter } from 'next/router';

const CreateNewBlogPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    if (response.status === 201) {
      router.push('/');
    }
  };

  return (
    <div>
      <h1>Create New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreateNewBlogPage;
