import { Title } from "solid-start";
import beanImg from "../assets/bean.jpeg";

export default function Home() {
  return (
    <main>
      <Title>Welcome</Title>
      <h1>You Stumbled Upon my Repo!</h1>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "center",
        }}
      >
        <b>Welcome to Davyn's Big Solid Start Adventure.</b>
        <span style={{ "padding-top": "20px" }}>
          Idk what I'm going to do here but I think I will eventually make this
          the frontend for my Django Recipe API
        </span>
        <a href="https://www.youtube.com/watch?v=qyYHWkVWQ4o" target="blank">
          <img
            src={beanImg}
            style={{ width: "750px", "padding-top": "20px" }}
          />
        </a>
        <span style={{ "padding-top": "20px" }}>
          If you have an hour and a half, you should check this movie out. It
          was made by one guy, like Tame Impala!
        </span>
      </div>
    </main>
  );
}
