import { APIEvent, json } from "solid-start";

const cheeses = [{ name: "Gouda" }, { name: "Brie" }, { name: "Munster" }];

// this route ONLY returns this data, does not render a page
export async function GET() {
  return json(cheeses);
}

// posting new cheeses to your object
export async function POST({ request }: APIEvent) {
  const body = await new Response(request.body).json();

  cheeses.push(body);

  return json({ message: "complete" });
}
