import AnimatedSection from './AnimatedSection';

function Footer() {
    return (
        <AnimatedSection animation="fade-up">
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>F1</h4>
                            <a href="#">Schedule</a>
                            <a href="#">Drivers</a>
                            <a href="#">News</a>
                            <a href="#">Teams</a>
                        </div>
                        <div className="footer-column">
                            <h4>Fantasy &amp; Gaming</h4>
                            <a href="#">Esports</a>
                            <a href="#">Fantasy</a>
                            <a href="#">F1 25</a>
                            <a href="#">F1 Manager 24</a>
                        </div>
                        <div className="footer-column">
                            <h4>More</h4>
                            <a href="#">Cookie Preferences</a>
                            <a href="#">Help Shape the F1 Website</a>
                        </div>
                    </div>
                    <div className="footer-social">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">X</a>
                        <a href="#" className="social-link">Instagram</a>
                        <a href="#" className="social-link">YouTube</a>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2003-2026 Formula One World Championship Limited</p>
                    </div>
                </div>
            </footer>
        </AnimatedSection>
    );
}

export default Footer;
