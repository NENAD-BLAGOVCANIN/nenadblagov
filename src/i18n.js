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
          }
        }
      },
      sr: {
        translation: {
          heroSection: {
            title: "Inovativni Full Stack softverski programer: Pretvorimo vaše ideje u stvarnost.",
            description: "Inovativni softverski inženjer sa iskustvom u mnogim oblastima računarstva. Radio sam na velikom broju projekata u mobilnom i veb razvoju. Posvećen sam radu kao saradnik i pozitivan član tima, težići da iskoristim svoje znanje i stručnost za optimalne inženjerske rezultate.",
            contactMe: "Kontaktirajte me",
            availableForWork: "Trenutno dostupan za posao"
          },
          techStack: {
            headline: "Tehnološki Stack",
            experienceLevel: "Nivo iskustva",
            expert: "Ekspert",
            intermediate: "Srednji nivo"
          }
        }
      }
    }
  });

export default i18n;
