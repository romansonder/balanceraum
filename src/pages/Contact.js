import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <section className="section section-white">
                <div className="container">
                    <h2>&nbsp;</h2>
                    <h3>Fragen, Wünsche oder Anregungen?</h3>
                    <p>Sie haben Fragen, Wünsche oder Anregungen zu unseren Angeboten?<br />
                        Nehmen Sie bitte direkt Kontakt mit uns auf. Wir freuen uns, wenn wir Ihnen weiterhelfen können!</p>
                    <p><strong>Sollten wir nicht direkt erreichbar sein, befinden wir uns gerade in einer Behandlung. Hinterlassen Sie uns bitte eine Nachricht und wir werden uns schnellstmöglich bei Ihnen melden.</strong></p>

                    <h3>Öffnungszeiten</h3>
                    <p>Montag bis Freitag nach Vereinbarung.</p>

                    <div className="contact-info">
                        <p>THERAPIEpunkt Sünikon</p>
                        <p>Lena Smieszek<br />
                            Wehntalerstrasse 48<br />
                            8162 Steinmaur (Sünikon)</p>
                        <p>Telefon: <a href="tel:0435406569">043 540 65 69</a><br />
                            E-Mail: <a href="mailto:info@therapiepunkt-suenikon.ch">info@therapiepunkt-suenikon.ch</a></p>
                    </div>
                </div>
            </section>

            <section className="section section-gray">
                <div className="container">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.5!2d8.465!3d47.515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMwJzU0LjAiTiA4wrAyNyc1NC4wIkU!5e0!3m2!1sde!2sch!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps Location">
                        </iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
