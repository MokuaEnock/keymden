import "./landing.css";
import undraw from "../../src/assets/undraw.svg";

import CountDown from "../components/countdown/countdown";
export default function Landing() {
  return (
    <main>
      <section id="landing-section1">
        <img src={undraw} alt="illustartion" className="illustration" />
        <h1>We're under maintenance</h1>
        <p>
          Please check back soon just putting little touch up on some pretty
          updates
        </p>


        <CountDown />
      </section>
    </main>
  );
}
