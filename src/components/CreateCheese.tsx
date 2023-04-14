import { createRouteAction } from "solid-start";

type CreateCheese = {};

export default function CreateCheese(props: CreateCheese) {
  const [, { Form }] = createRouteAction(async (formData: FormData) => {
    await fetch("/cheese/cheeses", {
      method: "post",
      body: JSON.stringify({ name: formData.get("name") }),
    });
  });

  return (
    <div>
      <Form>
        <input type="text" name="name" />
        <input type="submit" />
      </Form>
    </div>
  );
}
