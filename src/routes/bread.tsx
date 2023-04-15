import { Outlet } from "solid-start";

type Bread = {};

// Nested routing using <Outlet />
export default function Breads(props: Bread) {
  return (
    <div>
      <h1>Above</h1>
      <Outlet />
      <h1>Below</h1>
    </div>
  );
}
