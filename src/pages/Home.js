import './Home.css';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <h1>Herzlich Willkommen beim BalanceRaum</h1>
                    <p className="hero-subtitle">Bewusst bewegen, ausgeglichen leben</p>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <div className="intro-content">
                        <h2>Herzlich Willkommen beim BalanceRaum</h2>
                        <p>
                            Harmonie und Beweglichkeit sind ganz entscheidende Faktoren, wenn es um unser
                            tägliches Wohlbefinden geht. Diese aufrecht zu erhalten bzw. zu verbessern, um
                            Ihr Wohlbefinden und somit Ihre Lebensqualität mit Ihnen gemeinsam zu steigern,
                            das haben wir uns zur Aufgabe gemacht.
                        </p>
                        <p>
                            Wir haben ein offenes Ohr für Ihre Beschwerden und werden diese mit unserem
                            erworbenen Wissen und den Erfahrungen analysieren. Hierbei betrachten wir den
                            gesamten Körper und beziehen auch den Alltag mit ein, denn manchmal liegen die
                            Ursachen an anderer Stelle, als auf den ersten Blick vermutet.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gray">
                <div className="container">
                    <div className="features">
                        <div className="feature-card">
                            <h3>Über uns</h3>
                            <p>Lernen Sie unser Team und unsere Philosophie kennen.</p>
                            <a href="/about" className="btn">Mehr erfahren</a>
                        </div>

                        <div className="feature-card">
                            <h3>Angebot und Preise</h3>
                            <p>Wir haben ein offenes Ohr für Ihre Beschwerden und werden diese mit unserem erworbenen Wissen und den Erfahrungen analysieren.</p>
                            <a href="/services" className="btn">Zum Angebot</a>
                        </div>

                        <div className="feature-card">
                            <h3>Lageplan</h3>
                            <p>Finden Sie uns in Sünikon - barrierefrei und gut erreichbar.</p>
                            <a href="/location" className="btn">Zur Anfahrt</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;