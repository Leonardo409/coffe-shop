import hero from "../assets/Home.jpg";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <img className="landing-hero" src={hero}></img>
        <div className="hero-copy section">
            <h3>CAFE ON <br />ELEVENTH</h3>
            <h1>Wholesome <br></br>
                goodness is here.</h1>
        </div>
      </div>
    </>
  );
}
