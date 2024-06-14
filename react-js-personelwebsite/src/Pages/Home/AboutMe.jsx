export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about-me.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            From my childhood, I've been interested in computers, and I want to continue this interest academically and professionally.
            I'm currently working on various projects. For example, I'm developing a JavaFX game and building a microcontroller-based game machine. Additionally, I'm developing optimization software for a company conducting natural resource exploration and extraction operations. Furthermore, to improve my knowledge of data structures and algorithms, I'm working on a project that analyzes user data through the Twitter API.
            </p>
            <p className="hero--section-description">
            I have experience in technologies such as Java, Spring Boot, Node.js, Flask, and MySQL, and I develop web and software projects using these technologies. I also aim to specialize in artificial intelligence in the future and plan to work on projects in this field as well.
            </p>
          </div>
        </div>
      </section>
    );
  }