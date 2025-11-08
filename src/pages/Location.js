import './Location.css';

function Location() {
    return (
        <div className="location">
            <section className="page-header">
                <div className="container">
                    <h1>Lageplan</h1>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <div className="location-content">
                        <div className="location-info">
                            <h2>So finden Sie uns</h2>
                            <p>
                                Die Praxis befindet sich direkt an der Wehntaler Strasse und ist barrierefrei zugänglich.
                            </p>
                            <p>
                                In ca. 800 m Fussweg erreichen Sie den Bahnhof Steinmaur.
                            </p>
                            <p>
                                Direkt um das Haus finden Sie ausgeschilderte Parkmöglichkeiten. Aus Achtsamkeit
                                gegenüber den anderen Mietern möchten wir Sie bitten, ausschliesslich die
                                gekennzeichneten Parkplätze zu nutzen.
                            </p>
                        </div>

                        <div className="contact-details">
                            <h3>Kontaktinformationen</h3>
                            <div className="contact-item">
                                <strong>Adresse:</strong>
                                <p>BalanceRaum<br />
                                    Wehntaler Strasse<br />
                                    Sünikon</p>
                            </div>

                            <div className="contact-item">
                                <strong>Telefon:</strong>
                                <p><a href="tel:0435406569">043 540 65 69</a></p>
                            </div>

                            <div className="contact-item">
                                <strong>E-Mail:</strong>
                                <p><a href="mailto:info@balanceraum.ch">info@balanceraum.ch</a></p>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            <div className="map-note">
                                <p>🗺️ Karte wird hier angezeigt</p>
                                <p className="map-hint">
                                    Integrieren Sie hier eine Google Maps Einbettung oder ein Bild des Lageplans
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Location;