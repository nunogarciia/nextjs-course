import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The Project Page for a Specific Project for a selected Client</h1>
      <p>Project ID: {router.query.clientProjectId}</p>
    </div>
  );
}

export default SelectedClientProjectPage;
