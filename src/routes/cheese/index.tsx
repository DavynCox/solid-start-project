import { APIEvent, Title } from "solid-start";
import { A } from "solid-start";
import { json } from "solid-start";

type CheeseProps = {
    name: string;
}

export default function Cheese(props: CheeseProps) {
  return (
    <div>
      <Title>Cheese</Title>
      <h1>Bruh idk I just need to figure this out</h1>
      <A href="/cheese/test/">Test Cheese</A>
    </div>
  );
}

// Can't do get routes when you return UI components, however you can do everything else
export async function POST({request}: APIEvent) {

  const body = await new Response(request.body).json()

  return json(body);
}

export async function PUT() {
  return json({message: "This is the put route"});
}

export async function DELETE() {
  return json({message: "This is the delete route"});
}