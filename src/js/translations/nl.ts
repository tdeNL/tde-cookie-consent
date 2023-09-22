import type { ContentType } from '@js/_types/content';

export default {
  splash: {
    title: 'Mogen we even je aandacht?',
    desc: 'Om een persoonlijke ervaring te bieden en onze website te verbeteren, plaatsen wij cookies.',
    buttons: {
      manage: 'Beheer cookies',
      accept: 'Ik accepteer cookies',
    },
  },
  manage: {
    title: 'Cookie instellingen',
    desc: `Wij laten je graag een goede website zien, afgestemd op jouw voorkeuren.
        Wil je dit ook? Zet dan de onderstaande onderdelen op 'Aan'.
        Hiermee geef je ons toestemming om je door middel van het gebruik van cookies en andere technieken een persoonlijke ervaring te bieden.`,
    switches: {
      on: 'Aan',
      off: 'Uit',
    },
    buttons: {
      all: 'Overal toestemming voor geven',
      save: 'Keuze opslaan',
    },
    error: 'Je hebt nog niet op alle vragen antwoord gegeven. Geef hierboven jouw voorkeur aan.',
    footer: 'Je keuze is altijd te wijzigen via onze cookie instellingen.',
  },
  notification: {
    title: 'Accepteer (meer) cookies om deze content te zien',
    desc: `Deze content is niet zichtbaar omdat er met een externe data ingeladen wordt waarmee cookies geplaatst kunnen worden.
        Je hebt ons nog geen toestemming gegeven om deze cookies te mogen plaatsen.`,
    button: 'Wijzig cookievoorkeuren',
  },
} as ContentType;