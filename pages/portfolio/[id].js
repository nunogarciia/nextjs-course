import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  console.log(router.query.id);

  // Send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <p>ID: {router.query.id}</p>
    </div>
  );
}

export default PortfolioProjectPage;
