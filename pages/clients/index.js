import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "killer", name: "Killer" },
    { id: "coder", name: "Coder" },
    { id: "killercoder", name: "KillerCoder" },
    { id: "nuno", name: "Nuno" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <p>Static:</p>
      <ul>
        <li>
          <Link href="/clients/Killer">Killer</Link>
        </li>
        <li>
          <Link href="/clients/Coder">Coder</Link>
        </li>
        <li>
          <Link href="/clients/KillerCoder">KillerCoder</Link>
        </li>
      </ul>

      <p>Dynamic:</p>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
