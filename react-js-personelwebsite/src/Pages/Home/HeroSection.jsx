export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Enes</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Computer Engineer</span>{" "}
            <br />
            Student
          </h1>
          <p className="hero--section-description">
          Hello! I am a computer engineering student at Kocaeli University. 
            <br />  I have a great interest in programming, software development, web development, and artificial intelligence.
            
          </p>
        </div>
        

      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}