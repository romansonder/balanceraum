import './Home.css';
import { useState, useEffect } from 'react';

function Home() {
    const images = [
        `${process.env.PUBLIC_URL}/images/Lena_Praxis-4853-Bearbeitet.jpg`,
        `${process.env.PUBLIC_URL}/images/Lena_Praxis-4893-Bearbeitet.jpg`,
        `${process.env.PUBLIC_URL}/images/Logo_Therapiepunkt_Suenikon_CMYK_1.jpg`
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentImageIndex(index);
    };

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

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
                    <div className="image-slider">
                        <div className="slider-container">
                            <button className="slider-arrow slider-arrow-left" onClick={goToPrevious}>
                                &#10094;
                            </button>

                            <div className="slider-image-wrapper">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={`Slide ${currentImageIndex + 1}`}
                                    className="slider-image"
                                />
                            </div>

                            <button className="slider-arrow slider-arrow-right" onClick={goToNext}>
                                &#10095;
                            </button>
                        </div>

                        <div className="slider-dots">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`slider-dot ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
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