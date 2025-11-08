import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content section">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-section">
                            <h3>Inhaber</h3>
                            <p>Lena Smieszek</p>
                            <p><strong>TELEFON</strong> <a href="tel:0435406569">043 540 65 69</a></p>
                            <p><strong>MAIL</strong> <a href="mailto:info@balanceraum.ch">info@balanceraum.ch</a></p>
                            <p><strong>WEB</strong> <a href="https://www.balanceraum.ch">www.balanceraum.ch</a></p>
                        </div>

                        <div className="footer-section">
                            <h3>Links</h3>
                            <p><a href="/contact">Kontakt</a></p>
                            <p><a href="/impressum">Impressum</a></p>
                            <p><a href="/datenschutz">Datenschutzerklärung</a></p>
                        </div>

                        <div className="footer-section">
                            <h3>Externe Links</h3>
                            <p><a href="https://www.yoga-morena.com/" target="_blank" rel="noopener noreferrer">Yoga Morena</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© 2023 BalanceRaum | <a href="/datenschutz">Datenschutzerklärung</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;