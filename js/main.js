const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  if (language == "es") {
    document.getElementById("en").style.display = "block";
    document.getElementById("es").style.display = "none";
  } else {
    document.getElementById("es").style.display = "block";
    document.getElementById("en").style.display = "none";
  }
  const requestJSON = await fetch(`../langueges/${language}.json`);
  const texts = await requestJSON.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});
