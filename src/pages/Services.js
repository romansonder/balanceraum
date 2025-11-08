import './Services.css';

function Services() {
    return (
        <div className="services">
            <section className="page-header">
                <div className="container">
                    <h1>Angebot und Preise</h1>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <div className="services-intro">
                        <p>
                            Physiotherapie ist eine Leistung, die bei Krankheit oder Unfall <strong>vom Arzt verordnet</strong> und
                            von der Grundversicherung der Krankenkasse oder der Unfallversicherung (UVG) bezahlt wird.
                            Bitte beachten Sie, dass das Verordnungsdatum vom Arzt nicht älter als fünf Wochen sein darf.
                        </p>
                    </div>

                    <div className="pricing-box">
                        <h3>Preise Selbstzahler (ohne Verordnung)</h3>
                        <div className="price-list">
                            <div className="price-item">
                                <span className="duration">25 min</span>
                                <span className="price">60 CHF</span>
                            </div>
                            <div className="price-item">
                                <span className="duration">40 min</span>
                                <span className="price">85 CHF</span>
                            </div>
                            <div className="price-item">
                                <span className="duration">55 min</span>
                                <span className="price">115 CHF</span>
                            </div>
                        </div>
                        <p className="price-note">Physio Behandlung, klassische Massage, therapeutische Massage, Lymphdrainage</p>
                    </div>
                </div>
            </section>

            <section className="section section-gray">
                <div className="container">
                    <div className="service-list">
                        <div className="service-item">
                            <h3>Manuelle Lymphdrainage</h3>
                            <p>
                                Ist der lymphatisch venöse Rückfluss gestört, bleibt Flüssigkeit im Gewebe und es bildet
                                sich ein Ödem (Schwellung). Bei länger andauernder oder übermässiger Schwellung nach z.B.
                                Verletzung, Operation, Lymphknotenentfernung oder angeborener Lymphdefekte wird durch
                                manuelle Lymphdrainage der Lymphabfluss aktiviert bzw. die Entstauung (Drainage) des Gewebes
                                durch bestimmte physiotherapeutische Techniken gefördert.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>Manuelle Therapie</h3>
                            <p>
                                Die manuelle Therapie ist eine spezielle Weiterbildung, die sich der Untersuchung und
                                Behandlung von Funktionsstörungen des Bewegungsapparates (Gelenke, Muskeln, Nerven) widmet.
                                Die Folgeerscheinungen, also das Beschwerdebild, lässt sich auf Störungen der Bewegungsabläufe
                                innerhalb eines Gelenks zurückführen. Diese Störungen werden durch gezielte Handgriffe (manuell)
                                behandelt. Somit steht neben der Schmerzlinderung die Wiederherstellung der Beweglichkeit von
                                Gelenken, die im Grunde noch intakt, jedoch in ihrer Funktion eingeschränkt sind im Fokus.
                                Ergänzt wird diese Therapie mit passenden Übungen, um den Erfolg auch längerfristig halten zu können.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>Craniomandibuläre Dysfunktionen/Kiefergelenkstherapie</h3>
                            <p>
                                Craniomandibuläre Dysfunktion bezeichnet eine Fehlregulation der Muskel- oder Gelenksfunktion
                                der Kiefergelenke, die durch ein gestörtes Zusammenspiel der Muskeln, Sehnen und Gelenke ausgelöst
                                wird. Das Kiefergelenk hat in den letzten Jahren in der Therapie an Bedeutung gewonnen, denn diese
                                Fehlregulationen können abgesehen von Schmerzhaftigkeit auch Ursache für verschiedene andere
                                Beschwerden sein, wie z.B. Schwindelgefühl, Kopfschmerzen, Nackenbeschwerden, Schluckbeschwerden,
                                Tinnitus (Ohrgeräusche) und weitere.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>Viscero fasziale Therapie</h3>
                            <p>
                                Auch unsere Faszien und Organe haben einen wesentlichen Einfluss auf unser Befinden und stehen
                                in Wechselwirkung mit dem gesamten Körper. Ist Beispielsweise der Darm unter Spannung, kann sich
                                diese Spannung über seine Verbindung zur Wirbelsäule auch auf den Bewegungsapparat auswirken und
                                Rückenschmerzen auslösen. Aber auch die andere Richtung ist denkbar, so kann beispielsweise eine
                                schlechte Haltung wie bei einer skoliotischen Wirbelsäule die Lungenfunktion einschränken. Ziel
                                ist es in der Therapie die Mobilität und Flexibilität der inneren Organe wieder herzustellen und
                                dadurch bei z.B. Sodbrennen, Darmträgheit, Lungenproblemen, anhaltenden Rückenschmerzen usw. zu helfen.
                            </p>
                        </div>

                        <div className="service-item">
                            <h3>Kinesio Taping</h3>
                            <p>
                                Beim Tapen wird ein elastisches Band auf die Haut geklebt. Hierdurch wird der Stoffwechsel angeregt,
                                also findet unter dem Tape eine Mehrdurchblutung statt. Es massiert die darunterliegenden
                                Gewebsschichten, weshalb es gut bei Narbentherapie eingesetzt werden kann. Zudem fördert es den
                                Lymphabfluss, hat einen schmerzlindernden Effekt und unterstützt Muskel- und Gelenksfunktionen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;