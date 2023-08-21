import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <header>
      <nav
        className=""
        style={{ display: "grid", placeItems: "center", paddingTop: "2rem" }}
      >
        <h1 className="kits">
          <Link
            href="/"
            style={{ color: "black", textDecoration: "none", fontSize: "2rem" }}
          >
            wikii search
          </Link>
        </h1>
        <Search />
      </nav>
    </header>
  );
}
