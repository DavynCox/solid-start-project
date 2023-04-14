import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import danger from "../assets/danger.png";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Bro come on what are you doing here!?</h1>
      <div style={{display: "flex", "flex-direction": "column", "justify-content": "center"}}>
        <p>
          You are stumbling around in dark places you aren't familiar with, continue to explore at your own risk.
        </p>
        <a href="https://youtu.be/wJWksPWDKOc" target="blank">
          <img src={danger}/>
        </a>
        <span style={{"padding-top": "20px"}}>**You should check this one out too, made by one guy, 6 and a half hours of insanity.</span>
      </div>
    </main>
  );
}
