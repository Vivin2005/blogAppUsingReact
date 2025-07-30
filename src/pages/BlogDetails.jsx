import { useParams } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "React 2025 Roadmap",
    author: "Vivin S.R",
    date: "2025-07-30",
    time: "08:00 AM",
    content: "React is still king in 2025! Let’s break it down. Here are the top things you need to master: JSX, Hooks, Suspense, and Server Components. Also, Vite is replacing CRA. Stay updated!"
  },
  {
    id: 2,
    title: "Why Spring Boot is hot",
    author: "Vivin",
    date: "2025-07-28",
    time: "06:45 PM",
    content: "Spring Boot makes Java dev easier. Built-in dependency injection, auto configs, and REST API support make it an enterprise favorite."
  }
];

function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) return <p style={{ padding: "2rem" }}>Post not found.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{post.title}</h2>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {post.date} at {post.time}</p>
      <hr />
      <p style={{ marginTop: "1rem" }}>{post.content}</p>
    </div>
  );
}

export default BlogDetails;
