import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            home: "Home",
            myWork: "My Work",
            contact: "Contact",
            about: "About",
          },
          heroSection: {
            title: "Innovative Full Stack Software Developer: Let's turn your ideas into reality.",
            description: "Innovative software engineer with experience in many areas of computer science. I had worked on a large number of projects in mobile and web development. I am committed to working as a collaborative and positive team member, striving to utilize my knowledge and expertise for optimal engineering results.",
            contactMe: "Contact me",
            bookACall: "Book a call",
            availableForWork: "Available for work"
          },
          techStack: {
            headline: "Tech Stack",
            experienceLevel: "Experience level",
            expert: "Expert",
            intermediate: "Intermediate"
          },
          workExperience: {
            headline: "Work experience",
            nexyoWorkDescriptionPart1: "In 2024 I worked as a full stack software developer for a company called Nexyo.ag and with their partners Beebucket. I built their frontend application using ReactJS, and worked with ElasticSearch as our backend. I implemented searching functionality and filtering functionalities on the project.",
            nexyoWorkDescriptionPart2: "I had a very good time working with these guys, and with their permission I might share the link to the project in the future.",
            empriumWorkDescription: "In 2023 I worked as a django developer for a company called Emprium. I built their application using Django in a dockerized environment. On this project I mostly worked on the frontend and built and styled all their pages and widgets.",
            singularityWorkDescription: "During my time at Singularity.is, I contributed to several high-profile projects that required strong problem-solving skills, attention to detail, and the ability to work collaboratively with cross-functional teams. For example, I was instrumental in developing a real-time chat application using React, Node.js, and Socket.io that allowed users to communicate with each other seamlessly.",
            freelanceWorkDescription: "As a freelance full-stack web developer on Fiverr, I successfully collaborated with diverse clients to deliver tailored web solutions. Proficient in both front-end and back-end development, I designed and implemented responsive, user-friendly websites that met the unique requirements of each project. My responsibilities included understanding client needs, proposing technical solutions, and delivering high-quality code within specified timelines. I honed my skills in problem-solving, communication, and adaptability while managing multiple projects simultaneously. This experience not only expanded my technical expertise but also enhanced my ability to thrive in a dynamic and client-centric environment.",
          },
          contact: {
            headline: "Let's work together!",
            subtext: "Feel free to contact me and I'll reply very soon.",
            name: "Name",
            email: "Email",
            message: "Message",
            messagePlaceholder: "Write your message..."
          }
        }
      },
      sr: {
        translation: {
          header: {
            home: "Početna",
            myWork: "Moj rad",
            contact: "Kontakt",
            about: "O meni",
          },
          heroSection: {
            title: "Inovativni Full Stack Softverski Developer: Pretvorimo Vaše ideje u stvarnost.",
            description: "Inovativni softverski inženjer sa iskustvom u mnogim oblastima računarskih nauka. Radio sam na velikom broju projekata u mobilnom i veb razvoju. Posvećen sam radu kao kooperativan i pozitivan član tima, težići da iskoristim svoje znanje i stručnost za optimalne inženjerske rezultate.",
            contactMe: "Kontaktirajte me",
            availableForWork: "Trenutno dostupan za rad"
          },
          techStack: {
            headline: "Tehnološki Stak",
            experienceLevel: "Nivo iskustva",
            expert: "Ekspert",
            intermediate: "Srednji"
          },
          workExperience: {
            headline: "Radno iskustvo",
            nexyoWorkDescriptionPart1: "Tokom 2024. radio sam kao full stack softverski developer za kompaniju Nexyo.ag i njihove partnere Beebucket. Izgradio sam njihov frontend koristeći ReactJS i radio sa ElasticSearch-om na backendu. Implementirao sam funkcionalnost pretrage i filtriranja na projektu.",
            nexyoWorkDescriptionPart2: "Imao sam veoma dobro iskustvo radeći sa ovim timom, i uz njihovu dozvolu možda ću u budućnosti podeliti link do projekta.",
            empriumWorkDescription: "Tokom 2023. radio sam kao Django developer za kompaniju Emprium. Izgradio sam njihovu aplikaciju koristeći Django u dockerizovanom okruženju. Na ovom projektu uglavnom sam radio na frontend-u i stilizovao sve stranice i widgete.",
            singularityWorkDescription: "Tokom mog rada u kompaniji Singularity.is, doprineo sam nekoliko visokoprofilnim projektima koji su zahtevali jake veštine rešavanja problema, pažnju na detalje i sposobnost rada u timovima sa različitim funkcijama. Na primer, bio sam ključan u razvoju aplikacije za real-time chat koristeći React, Node.js i Socket.io, koja je omogućila korisnicima da nesmetano komuniciraju jedni s drugima.",
            freelanceWorkDescription: "Kao freelance full-stack veb developer na Fiverru, uspešno sam sarađivao sa raznolikim klijentima kako bih isporučio prilagođena veb rešenja. Vešt u frontend i backend razvoju, dizajnirao sam i implementirao responzivne, korisnički prilagođene vebsajtove koji su ispunili jedinstvene zahteve svakog projekta. Moje odgovornosti uključivale su razumevanje potreba klijenata, predlaganje tehničkih rešenja i isporuku visokokvalitetnog koda u zadatim rokovima. Ova iskustva ne samo da su proširila moju tehničku stručnost, već su unapredila moju sposobnost da napredujem u dinamičnom i klijent-usmerenom okruženju.",
          },
          contact: {
            headline: "Hajde da radimo zajedno!",
            subtext: "Slobodno me kontaktirajte, odgovoriću uskoro.",
            name: "Ime",
            email: "Email",
            message: "Poruka",
            messagePlaceholder: "Napišite vašu poruku..."
          }
        }
      },
      de: {
        "translation": {
          "header": {
            "home": "Startseite",
            "myWork": "Meine Arbeit",
            "contact": "Kontakt",
            "about": "Über mich"
          },
          "heroSection": {
            "title": "Innovativer Full Stack Softwareentwickler: Lassen Sie uns Ihre Ideen in die Realität umsetzen.",
            "description": "Innovativer Softwareentwickler mit Erfahrung in vielen Bereichen der Informatik. Ich habe an einer Vielzahl von Projekten in der mobilen und Web-Entwicklung gearbeitet. Ich bin bestrebt, als kooperatives und positives Teammitglied zu arbeiten und mein Wissen und meine Expertise für optimale technische Ergebnisse einzusetzen.",
            "contactMe": "Kontaktieren Sie mich",
            "availableForWork": "Derzeit verfügbar für Arbeit"
          },
          "techStack": {
            "headline": "Technologiestack",
            "experienceLevel": "Erfahrungslevel",
            "expert": "Experte",
            "intermediate": "Mittelstufe"
          },
          "workExperience": {
            "headline": "Berufserfahrung",
            "nexyoWorkDescriptionPart1": "2024 arbeitete ich als Full Stack Softwareentwickler für ein Unternehmen namens Nexyo.ag und mit deren Partner Beebucket. Ich baute ihre Frontend-Anwendung mit ReactJS und arbeitete mit ElasticSearch als Backend. Ich implementierte Such- und Filterfunktionen im Projekt.",
            "nexyoWorkDescriptionPart2": "Ich hatte eine sehr gute Zeit mit diesen Leuten, und mit ihrer Erlaubnis werde ich möglicherweise den Link zum Projekt in Zukunft teilen.",
            "empriumWorkDescription": "2023 arbeitete ich als Django-Entwickler für ein Unternehmen namens Emprium. Ich baute ihre Anwendung in einer Docker-Umgebung unter Verwendung von Django. In diesem Projekt arbeitete ich hauptsächlich am Frontend und erstellte und gestaltete alle ihre Seiten und Widgets.",
            "singularityWorkDescription": "Während meiner Zeit bei Singularity.is trug ich zu mehreren hochkarätigen Projekten bei, die starke Problemlösungsfähigkeiten, Detailgenauigkeit und die Fähigkeit zur Zusammenarbeit in funktionsübergreifenden Teams erforderten. Beispielsweise war ich maßgeblich an der Entwicklung einer Echtzeit-Chat-Anwendung mit React, Node.js und Socket.io beteiligt, die es den Benutzern ermöglichte, nahtlos miteinander zu kommunizieren.",
            "freelanceWorkDescription": "Als freiberuflicher Full-Stack-Webentwickler auf Fiverr habe ich erfolgreich mit verschiedenen Kunden zusammengearbeitet, um maßgeschneiderte Weblösungen zu liefern. Versiert in der Frontend- und Backend-Entwicklung, entwarf und implementierte ich responsive, benutzerfreundliche Websites, die den einzigartigen Anforderungen jedes Projekts gerecht wurden. Meine Aufgaben bestanden darin, die Bedürfnisse der Kunden zu verstehen, technische Lösungen vorzuschlagen und hochwertigen Code innerhalb der vorgegebenen Zeiträume zu liefern. Diese Erfahrungen erweiterten nicht nur meine technische Expertise, sondern verbesserten auch meine Fähigkeit, in einer dynamischen und kundenorientierten Umgebung erfolgreich zu sein."
          },
          "contact": {
            "headline": "Lassen Sie uns zusammenarbeiten!",
            "subtext": "Fühlen Sie sich frei, mich zu kontaktieren und ich werde bald antworten.",
            "name": "Name",
            "email": "E-Mail",
            "message": "Nachricht",
            "messagePlaceholder": "Schreiben Sie Ihre Nachricht..."
          }
        }
      },
      it: {
        "translation": {
          "header": {
            "home": "Home",
            "myWork": "Il mio lavoro",
            "contact": "Contatto",
            "about": "Chi sono"
          },
          "heroSection": {
            "title": "Sviluppatore Software Full Stack Innovativo: Trasformiamo le tue idee in realtà.",
            "description": "Sviluppatore software innovativo con esperienza in molte aree dell'informatica. Ho lavorato su un gran numero di progetti nello sviluppo web e mobile. Sono impegnato a lavorare come membro collaborativo e positivo del team, cercando di utilizzare le mie conoscenze ed esperienze per ottenere i migliori risultati ingegneristici.",
            "contactMe": "Contattami",
            "availableForWork": "Attualmente disponibile per lavoro"
          },
          "techStack": {
            "headline": "Tecnologie",
            "experienceLevel": "Livello di esperienza",
            "expert": "Esperto",
            "intermediate": "Intermedio"
          },
          "workExperience": {
            "headline": "Esperienze di lavoro",
            "nexyoWorkDescriptionPart1": "Nel 2024 ho lavorato come sviluppatore software full stack per un'azienda chiamata Nexyo.ag e con i loro partner Beebucket. Ho sviluppato la loro applicazione frontend utilizzando ReactJS e ho lavorato con ElasticSearch come backend. Ho implementato funzionalità di ricerca e filtro nel progetto.",
            "nexyoWorkDescriptionPart2": "Mi sono trovato molto bene a lavorare con loro, e con il loro permesso potrei condividere il link al progetto in futuro.",
            "empriumWorkDescription": "Nel 2023 ho lavorato come sviluppatore Django per un'azienda chiamata Emprium. Ho sviluppato la loro applicazione utilizzando Django in un ambiente dockerizzato. In questo progetto ho lavorato principalmente al frontend e ho costruito e stilizzato tutte le loro pagine e widget.",
            "singularityWorkDescription": "Durante la mia esperienza in Singularity.is, ho contribuito a diversi progetti di alto profilo che richiedevano forti capacità di problem-solving, attenzione ai dettagli e la capacità di lavorare in team multidisciplinari. Ad esempio, sono stato fondamentale nello sviluppo di un'applicazione di chat in tempo reale utilizzando React, Node.js e Socket.io, che ha permesso agli utenti di comunicare tra loro senza interruzioni.",
            "freelanceWorkDescription": "Come sviluppatore web full-stack freelance su Fiverr, ho collaborato con successo con clienti diversi per fornire soluzioni web personalizzate. Esperto nello sviluppo sia frontend che backend, ho progettato e implementato siti web responsive e user-friendly che soddisfavano i requisiti unici di ogni progetto. Le mie responsabilità includevano comprendere le esigenze del cliente, proporre soluzioni tecniche e consegnare codice di alta qualità nei tempi prestabiliti. Questa esperienza non solo ha ampliato la mia esperienza tecnica, ma ha anche migliorato la mia capacità di eccellere in un ambiente dinamico e orientato al cliente."
          },
          "contact": {
            "headline": "Lavoriamo insieme!",
            "subtext": "Sentiti libero di contattarmi e ti risponderò presto.",
            "name": "Nome",
            "email": "Email",
            "message": "Messaggio",
            "messagePlaceholder": "Scrivi il tuo messaggio..."
          }
        }
      }
    }
  });

export default i18n;
