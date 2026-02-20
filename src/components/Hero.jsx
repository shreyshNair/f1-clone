import AnimatedSection from './AnimatedSection';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div
                    className="hero-image hero-image-animated"
                    style={{
                        backgroundImage: `url('https://media.formula1.com/image/upload/t_16by9Centre/c_fit,h_1200/q_auto/v1740000000/fom-website/2026/Ferrari/GettyImages-2257207523.webp')`,
                    }}
                >
                    <div className="hero-overlay">
                        <AnimatedSection animation="fade-up" delay={200}>
                            <span className="hero-tag">FEATURED</span>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-up" delay={400}>
                            <h1 className="hero-title">
                                Hamilton buoyed by &lsquo;really productive&rsquo; start in Barcelona
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-up" delay={600}>
                            <p className="hero-description">
                                Lewis Hamilton reflects on his first run in the Ferrari SF-26 at the Barcelona Shakedown
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
