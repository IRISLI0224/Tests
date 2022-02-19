import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/P1">
        <button>P1</button>
      </Link>
      <Link to="/P2">
        <button>P2</button>
      </Link>
      <Link to="/P3">
        <button>P3</button>
      </Link>
    </>
  );
}
