const LANGUAGE_KEY = "tracefence-lang";

function setLanguage(lang) {
  document.documentElement.dataset.lang = lang;
  localStorage.setItem(LANGUAGE_KEY, lang);
  document.querySelectorAll("[data-lang-button]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langButton === lang);
  });
}

function initLanguage() {
  const preferred = new URLSearchParams(location.search).get("lang")
    || localStorage.getItem(LANGUAGE_KEY)
    || (navigator.language && navigator.language.startsWith("zh") ? "zh" : "en");
  setLanguage(preferred === "zh" ? "zh" : "en");
  document.querySelectorAll("[data-lang-button]").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.langButton));
  });
}

document.addEventListener("DOMContentLoaded", initLanguage);

