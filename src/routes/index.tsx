import { Title } from "solid-start";
import beanImg from "../assets/bean.jpeg";
import homepageImg from "../assets/homepageImg.png";

export default function Home() {
  return (
    <main>
      <Title>Recipes</Title>
      <h1>Solid Start Recipe App</h1>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "center",
        }}
      >
        <b>Welcome to my Solid Start demo app!</b>
        <span style={{ "padding-top": "20px" }}>
          I am making this app to teach myself how the new Solid Start framework
          works. I am focusing on building a simple reactive app that uses a
          Django REST API as a backend.
        </span>
        <span style={{ "margin-top": "10px" }}>
          Starting small is usually the best option, so this app is just for
          posting and viewing recipes.
        </span>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank">
          <img
            src={homepageImg}
            style={{ width: "600px", "padding-top": "20px" }}
          />
        </a>
      </div>
    </main>
  );
}
