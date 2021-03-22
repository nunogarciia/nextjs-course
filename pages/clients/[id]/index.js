import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // Load data...
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: {
        id: "killer",
        clientProjectId: "projecta",
      },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <p>Client given: {router.query.id}</p>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
