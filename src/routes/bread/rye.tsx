import server$ from "solid-start/server";

// this only logs on the server, not on the client
// https://start.solidjs.com/api/server
export const logOnServer = server$(async (message) => {
  console.log(message);
});

export default function Rye() {
  return <h1 onClick={() => logOnServer("rye")}>Rye</h1>;
}
