// --- Splash logic: show only once per tab/session on the main page ---
(function initSplashOncePerSession() {
  const splash = document.getElementById('splash');
  if (!splash) return; // no splash on this page

  const KEY = 'sawSplashV1';         // bump this string if you ever want to force-show again
  const body = document.body;
  const DELAY_MS = 600;              // visible time (fast)
  const FADE_MS  = 250;              // fade time (match CSS)

  // If we've already shown it this session, remove immediately
  if (sessionStorage.getItem(KEY) === '1') {
    splash.remove();
    return;
  }

  // First time this tab sees the page: lock scroll, then schedule fade
  body.classList.add('splash-active');

  // Mark as shown right away so back/forward nav in this tab won't show it again
  sessionStorage.setItem(KEY, '1');

  setTimeout(() => {
    splash.classList.add('splash--hide');
    setTimeout(() => {
      splash.remove();
      body.classList.remove('splash-active');
    }, FADE_MS);
  }, DELAY_MS);
})();


function showAnswer(questionNumber) {
  let question = "";
  let answer = "";

  for (const category in questions) {
    if (questions[category][questionNumber]) {
      question = questions[category][questionNumber];
      break;
    }
  }

  for (const category in answers) {
    if (answers[category] && answers[category][questionNumber]) {
      answer = answers[category][questionNumber];
      break;
    }
  }

  document.getElementById("questionTitle").textContent = `${questionNumber}. ${question}`;
  document.getElementById("answer").innerHTML = answer;

}



