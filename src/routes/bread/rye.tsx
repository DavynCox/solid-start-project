import { logOnServer } from "~/lib/rpc";

export default function Rye() {
  return <h1 onClick={() => logOnServer("rye")}>Rye</h1>;
}
