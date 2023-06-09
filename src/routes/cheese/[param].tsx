import { useParams, json, APIEvent, useSearchParams } from "solid-start";

type CheeseParamProps = {
  name: string;
};

export default function CheeseParam(props: CheeseParamProps) {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.lmao);
  return <h1>The {params.param} page</h1>;
}

export async function POST({ request, params }: APIEvent) {
  const query = new URLSearchParams(request.url.split("?")[1]);

  return json({
    params,
    query: { bread: query.get("bread"), vegetables: query.get("vegetables") },
  });
}
