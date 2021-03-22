import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();

  console.log(router.query.slug);

  return (
    <div>
      <h1>The Blog Posts</h1>
      {router.query.slug.map((post) => (
        <p>{post}</p>
      ))}
      {/* <p>The Post: {router.query.slug}</p> */}
    </div>
  );
}

export default BlogPostPage;
