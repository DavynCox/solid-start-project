import { useParams, json, APIEvent } from "solid-start";

type CheeseParamProps = {
    name: string,
}

export default function CheeseParam(props: CheeseParamProps) {
    const params = useParams();
    return (
        <h1>The {params.param} page</h1>
    )
}

export async function POST({request, params}: APIEvent) {
    const query = new URLSearchParams(request.url.split("?")[1])
    
    return json({params, query: {bread: query.get("bread"), vegetables: query.get("vegetables")}});
}