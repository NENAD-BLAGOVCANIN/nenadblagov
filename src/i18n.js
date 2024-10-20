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
            availableForWork: "Currently available for work"
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
      }
    }
  });

export default i18n;
