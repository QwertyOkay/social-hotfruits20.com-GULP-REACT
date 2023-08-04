(() => {
  const form = document.querySelector("[data-register]");
  const registrationModalBackdrop = document.querySelector("[data-backdrop]");

  // Show formData and close modal by submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    toggleRegistrationModal();

    form.reset();

    document.getElementById("gameFrame").src =
      "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=USD&gameSymbol=vs20fruitsw";
  });

  function toggleRegistrationModal() {
    registrationModalBackdrop.classList.toggle("is-hidden");
  }

  // Hide modal by click on backdrop
  registrationModalBackdrop.addEventListener("click", hideModalWindowOnBlur);

  function hideModalWindowOnBlur(e) {
    if (e.target === e.currentTarget) {
      toggleRegistrationModal();
    }
  }
})();
