import React from 'react'
import '../Styles/global.css';
import Footer from '../Components/Footer';

const Terms = () => {
    return (
        <div>
            <div className="termsandconditions-container">
                <h1 className="termsandconditions-heading">Geschäftsbedingungen</h1>
                <p className="termsandconditions-text">
                    Willkommen bei saepes. Diese Geschäftsbedingungen umreißen die
                    Regeln und Vorschriften für die Nutzung unserer Website und Dienstleistungen.
                    Durch den Zugriff auf diese Website und die Nutzung unserer Dienste akzeptieren Sie diese Bedingungen
                    und Konditionen vollständig. Setzen Sie die Nutzung der Website von saepes nicht fort
                    wenn Sie nicht alle auf dieser Seite angegebenen Bedingungen und Konditionen akzeptieren.
                </p>
                <h2 className="termsandconditions-subheading">1. Geistiges Eigentum</h2>
                <p className="termsandconditions-text">
                    Sofern nicht anders angegeben, besitzt saepes und/oder seine Lizenzgeber die
                    geistigen Eigentumsrechte an sämtlichem Material auf dieser Website. Alle
                    geistigen Eigentumsrechte bleiben vorbehalten. Sie dürfen Seiten anzeigen und/oder drucken
                    von https://saepes.com für Ihren persönlichen Gebrauch unterliegt
                    Einschränkungen, die in diesen Bedingungen festgelegt sind.
                </p>
                <h2 className="termsandconditions-subheading">2. Einschränkungen</h2>
                <p className="termsandconditions-text">
                    Ihnen ist ausdrücklich untersagt, folgendes zu tun:
                    - Veröffentlichen jeglichen Website-Materials in anderen Medien;
                    - Verkaufen, unterlizenzieren und/oder anderweitig kommerzialisieren jegliches Website-Material;
                    - Diese Website auf eine Weise verwenden, die oder die schädlich sein kann für diese Website;
                    - Diese Website auf eine Weise verwenden, die sich auf den Zugang von Benutzern zu dieser Website auswirkt;
                    - Diese Website entgegen geltender Gesetze und Vorschriften verwenden oder auf eine Weise, die
                    könnte der Website, einer Person oder einer Geschäftseinheit Schaden zufügen.
                </p>
                <h2 className="termsandconditions-subheading">3. Haftungsausschluss</h2>
                <p className="termsandconditions-text">
                    Soweit gesetzlich zulässig, schließen wir jegliche
                    Darstellungen, Garantien und Bedingungen in Bezug auf unsere Website und
                    die Nutzung dieser Website aus. Nichts in diesem Haftungsausschluss wird:
                    - Unsere oder Ihre Haftung für Tod oder Körperverletzung einschränken oder ausschließen;
                    - Unsere oder Ihre Haftung für Betrug oder betrügerische
                    Falschdarstellung einschränken oder ausschließen;
                    - Unsere oder Ihre Haftung in irgendeiner Weise beschränken, die nicht zulässig ist
                    gemäß geltendem Recht.
                </p>
                <h2 className="termsandconditions-subheading">4. Änderung der Bedingungen</h2>
                <p className="termsandconditions-text">
                    Saepes ist berechtigt, diese Bedingungen und Konditionen jederzeit zu überarbeiten
                    wie es für angemessen erachtet wird, und durch die Nutzung dieser Website wird erwartet, dass Sie dies tun
                    überprüfen Sie diese Bedingungen und Konditionen regelmäßig.
                </p>
                <h2 className="termsandconditions-subheading">5. Recht & Gerichtsstand</h2>
                <p className="termsandconditions-text">
                    Diese Bedingungen und Konditionen unterliegen dem Recht und werden ausgelegt gemäß
                    mit den Gesetzen Pakistans, und alle Streitigkeiten im Zusammenhang mit diesen Bedingungen und
                    Bedingungen unterliegen der ausschließlichen Gerichtsbarkeit der Gerichte
                    von Pakistan.
                </p>
                <h2 className="termsandconditions-subheading">6. Kontaktiere uns</h2>
                <p className="termsandconditions-text">
                    Wenn Sie Fragen oder Bedenken zu diesen Geschäftsbedingungen haben,
                    kontaktieren Sie uns bitte unter <a href="mailto:info@saepes.com">info@saepes.com</a> .
                </p>
            </div>

            <Footer />

        </div>
    )
}

export default Terms;