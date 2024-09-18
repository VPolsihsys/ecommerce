import React from 'react';
import '../Styles/global.css';

import Footer from '../Components/Footer';

const PrivacyPolicy = () => {
    return (
        <div>

            <div className="privacypolicy-container">
                <h1 className="privacypolicy-heading">Datenschutzrichtlinie</h1>
                <p className="privacypolicy-text">
                    Bei saepes verpflichten wir uns, Ihre Privatsphäre zu schützen und die Sicherheit Ihrer persönlichen Informationen zu gewährleisten. Diese Datenschutzrichtlinie erläutert, wie wir Ihre Informationen sammeln, verwenden, offenlegen und schützen, wenn Sie unsere Website oder Dienste nutzen.
                </p>
                <h2 className="privacypolicy-subheading">Informationen, die wir sammeln</h2>
                <p className="privacypolicy-text">
                    Wir sammeln personenbezogene Daten, die Sie uns zur Verfügung stellen, wenn Sie unsere Website oder Dienste nutzen, wie Ihren Namen, Ihre E-Mail-Adresse, Kontaktdaten und alle anderen Informationen, die Sie bereitstellen. Wir können auch Informationen automatisch erfassen, wenn Sie mit unserer Website interagieren, wie Ihre IP-Adresse, Browsertyp und Betriebssystem.
                </p>
                <h2 className="privacypolicy-subheading">Wie wir Ihre Informationen verwenden</h2>
                <p className="privacypolicy-text">
                    Die von uns gesammelten Informationen verwenden wir, um unsere Dienste bereitzustellen und zu verbessern, mit Ihnen zu kommunizieren und Ihr Erlebnis zu personalisieren. Dies kann das Senden von Marketingkommunikationen oder Werbeangeboten, die Analyse von Benutzertrends und die Optimierung unserer Website und Dienste umfassen. Wir können Ihre Informationen auch verwenden, um auf Ihre Anfragen zu antworten und Kundensupport bereitzustellen.
                </p>
                <h2 className="privacypolicy-subheading">Weitergabe Ihrer Informationen</h2>
                <p className="privacypolicy-text">
                    Wir können Ihre Informationen an Drittanbieter weitergeben, die uns bei der Betreibung unserer Website oder der Bereitstellung unserer Dienste unterstützen. Diese Dienstleister haben möglicherweise Zugriff auf Ihre persönlichen Informationen, um spezifische Aufgaben in unserem Auftrag auszuführen, und sind verpflichtet, sie nicht zu offenbaren oder für andere Zwecke zu verwenden. Wir können Ihre Informationen auch im Rahmen gesetzlicher Anforderungen, Gerichtsbeschlüsse oder behördlicher Anfragen offenlegen.
                </p>
                <h2 className="privacypolicy-subheading">Sicherheit Ihrer Informationen</h2>
                <p className="privacypolicy-text">
                    Wir ergreifen angemessene Maßnahmen, um Ihre persönlichen Informationen vor unbefugtem Zugriff, Nutzung oder Offenlegung zu schützen. Dazu gehören Sicherheitsmaßnahmen wie Verschlüsselung, Firewalls und sichere Serververbindungen. Es gibt jedoch keine absolute Sicherheit für die Übertragung über das Internet oder die elektronische Speicherung, sodass wir die absolute Sicherheit Ihrer Informationen nicht garantieren können.
                </p>
                <h2 className="privacypolicy-subheading">Änderungen dieser Richtlinie</h2>
                <p className="privacypolicy-text">
                    Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren, um Änderungen unserer Praktiken oder gesetzliche Anforderungen widerzuspiegeln. Über wesentliche Änderungen werden wir Sie informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen. Wir empfehlen Ihnen, diese Datenschutzrichtlinie regelmäßig auf etwaige Änderungen zu überprüfen.
                </p>
                <h2 className="privacypolicy-subheading">Kontaktieren Sie uns</h2>
                <p className="privacypolicy-text">
                    Wenn Sie Fragen oder Bedenken zu dieser Datenschutzrichtlinie oder unseren Praktiken haben, kontaktieren Sie uns bitte unter <a href="mailto:support@saepes.com">support@saepes.com</a>.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;