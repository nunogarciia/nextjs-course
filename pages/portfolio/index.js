import Link from "next/link";

function PortfolioPage() {
  return (
    <div>
      <h1>The Portfolio Page</h1>

      <ul>
        <li>
          <Link href="/portfolio/list">List</Link>
        </li>
        <li>
          <Link href="/portfolio/KillerCoder">Portfolio with custom ID</Link>
        </li>
      </ul>
    </div>
  );
}

export default PortfolioPage;
