import "./landing.css";
import CountDown from "../components/countdown/countdown";
export default function Landing() {
  return (
    <main>
      <section id="landing-section1">
        <h1>We are under maintenance</h1>
        <p>Dont fret we will be back soon</p>
        <CountDown />
      </section>
    </main>
  );
}
