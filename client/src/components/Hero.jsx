import "./Hero.css";
function Hero(){
    return(
        <section className="hero" id="home">
            <div className="container hero-inner">
                <div className="hero-text">
                    <p className="hero-greeting">Hi,I'm</p>
                    <h1 className="hero-name">Mansi Verma</h1>
                    <h2 className="hero-title">Mern stack Devloper</h2>
                    <p className="hero-tagline">I build simple,fast web apps with React and Node.js-and I'm 
                        looking  for my first rile as a full-stack devloper
                    </p>
                    <div className="hero-buttons">
                        <a herf="#projects" className="btn btn-primary">
                            See my projects
                        </a>
                        <a herf="#contact" className="btn btn-outline">
                            Contact me
                        </a>
                    </div>
                </div>
                <div className="hero-photo">
                    <img src="/profile.jpeg" alt="Mansi Verma"/>
                </div>
            </div>
        </section>
    );
}
export default Hero;