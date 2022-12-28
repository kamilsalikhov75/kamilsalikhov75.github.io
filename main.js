const wordTranslate = {
  en: {
    word: "Word",
    transcription: "/wɜːd/",
    description: "[countable] a single unit of language that means something and can be spoken or written[countable] a single unit of language that means something and can be spoken or written[countable] a single unit of language that means something and can be spoken or written"
  },
  ru: {
    word: "Слово",
    transcription: "СЛОВО",
    description: "Единица языка, служащая длянаименования понятий, предметов, лиц, действий, состояний, признаков,связей, отношений, оценок"
  },
  default: {
    word: "",
    transcription: "",
    description: ""
  }
};

let lang = "en"

const element = {
  button: {
    heart: document.getElementById("heartButton"),
    translate: document.getElementById("translateButton"),
    description: document.getElementById("descriptionButton")
  },
  wordBlock: document.querySelector(".card__word-block"),
  cardBottom: document.querySelector(".card__bottom"),
  cardWord: document.querySelector(".card__word"),
  cardTranscription: document.getElementById("wordTranscription"),
  cardDescription: document.getElementById("wordDescription"),
  card: document.querySelector(".card"),
}

window.onload = () => {
  translateCard(lang)
}

element.button.heart.addEventListener('click', () => {
  element.button.heart.classList.toggle("card__button--active-heart")
})

element.button.description.addEventListener("click", () => {
  element.button.description.classList.toggle("card__button--active-arrow");
  element.wordBlock.classList.toggle("card__word-block--active");
  element.cardBottom.classList.toggle("card__bottom--active")
})

element.button.translate.addEventListener("click", () => {
  if (lang === 'en') {
    lang = 'ru'
  } else {
    lang = 'en'
  }
  element.card.classList.toggle("card--active")
  translateCard(lang);
})

function translateCard(lang) {
  const translate = wordTranslate[lang];
  element.cardWord.textContent = translate.word;
  element.cardTranscription.textContent = translate.transcription;
  element.cardDescription.textContent = translate.description;
}
