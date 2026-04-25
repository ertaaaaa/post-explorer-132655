function PostCard({ post }) {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
            <p><strong>ID:</strong> {post.id}</p>
        </div>
    );
}

export default PostCard;