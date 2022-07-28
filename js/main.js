const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  if (language == "es") {
    document.getElementById("en").style.visibility = "visible";
    document.getElementById("es").style.visibility = "hidden";
  } else {
    document.getElementById("es").style.visibility = "visible";
    document.getElementById("en").style.visibility = "hidden";
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
