import { Question1 } from "./Question1";
import { Question10 } from "./Question10";
import { Question11 } from "./Question11";
import { Question12 } from "./Question12";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";
import { Question4 } from "./Question4";
import { Question7 } from "./Question7";
import { Question8 } from "./Question8";
import { Question9 } from "./Question9";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Question1 /> */}
      <div style={{ display: "block" }}>
        <Question2 />
      </div>
      <div style={{ display: "block" }}>
        <Question3 />
      </div>
      <div style={{ display: "block" }}>
        <Question4 />
      </div>
      <div style={{ display: "block" }}>
        Question 5 and 6 are predict output
      </div>
      <div style={{ display: "block" }}>
        <Question7 />
      </div>
      <div style={{ display: "block" }}>
        <Question8 />
      </div>
      <div style={{ display: "block" }}>
        <Question9 />
      </div>
      <div style={{ display: "block" }}>
        <Question10 />
      </div>
      <div style={{ display: "block" }}>
        <Question11 />
      </div>
      <div style={{ display: "block" }}>
        <Question12 />
      </div>
    </div>
  );
}
