(() => {
  const form = document.querySelector("[data-register]");
  const registrationModalBackdrop = document.querySelector("[data-backdrop]");

  // Show formData and close modal by submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    toggleRegistrationModal();

    form.reset();

    document.getElementById("gameFrame").src =
      "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=fireflyfrenzy&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True";
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
