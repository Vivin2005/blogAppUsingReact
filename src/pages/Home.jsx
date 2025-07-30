import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "React 2025 Roadmap",
    author: "Vivin S.R",
    date: "2025-07-30",
    time: "08:00 AM",
    content: "React is still king in 2025! Let’s break it down."
  },
  {
    id: 2,
    title: "Why Spring Boot is hot",
    author: "Vivin",
    date: "2025-07-28",
    time: "06:45 PM",
    content: "Spring Boot simplifies backend work. Here’s how it works..."
  }
];

function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h2>Latest Blog Posts</h2>
      {blogPosts.map(post => (
        <div key={post.id} style={{ marginBottom: "1.5rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>{post.title}</h3>
          <p>By <strong>{post.author}</strong> on {post.date}</p>
          <Link to={`/blog/${post.id}`}>Read More →</Link>
        </div>
      ))}
    </main>
  );
}

export default Home;
