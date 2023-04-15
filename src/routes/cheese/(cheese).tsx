import { createResource, For } from "solid-js";
import { APIEvent, Title } from "solid-start";
import {
  json,
  useRouteData,
  A,
  createRouteAction,
  createRouteData,
} from "solid-start";
import CreateCheese from "~/components/CreateCheese";

type CheeseProps = {
  name: string;
};

type Cheese = {
  name: string;
};

// This is for SSR, does route data fetching before page is loaded
// https://start.solidjs.com/core-concepts/data-loading
export function routeData() {
  const cheeses = createRouteData(async () => {
    const response = await fetch("http://localhost:3000/cheese/cheeses");
    return (await response.json()) as Cheese[];
  });

  return { cheeses };
}

export default function Cheese(props: CheeseProps) {
  const { cheeses } = useRouteData<typeof routeData>();

  console.log(cheeses());

  return (
    <div>
      <Title>Cheese</Title>
      <h1>Bruh idk I just need to figure this out</h1>
      <For each={cheeses()}>
        {(cheese) => <A href={`/cheese/${cheese.name}`}>{cheese.name}</A>}
      </For>
      <CreateCheese />
    </div>
  );
}

// Can't do get routes when you return UI components, however you can do everything else
export async function POST({ request }: APIEvent) {
  const body = await new Response(request.body).json();

  return json(body);
}

export async function PUT() {
  return json({ message: "This is the put route" });
}

export async function DELETE() {
  return json({ message: "This is the delete route" });
}
