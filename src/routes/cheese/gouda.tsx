import { Title } from "solid-start";

type CheeseProps = {
    name: string;
}

export default function Ghouda(props: CheeseProps) {
  return (
    <main>
      <Title>Ghouda Cheese</Title>
      <h1>Gouda is based</h1>
    </main>
  );
}
