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


/* --- Render helper: convert Markdown-style fences to <pre><code> for Prism --- */
function renderAnswerHTML(input) {
  if (!input) return "<em>No answer yet.</em>";

  // Convert ```lang ... ``` into <pre><code class="language-lang">...</code></pre>
  // The answers use <br> inside code, so we translate <br> -> \n within fences.
  const converted = input.replace(/```(\w+)?<br?>([\s\S]*?)```/gi, (_, lang = "", codePart) => {
    const language = lang.trim() || "plaintext";
    // Turn <br> into real newlines for code blocks
    const codeWithNewlines = codePart
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/&nbsp;/g, " ");

    // Escape HTML so code renders safely
    const escaped = codeWithNewlines
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return `<pre class="language-${language} line-numbers"><code class="language-${language}">${escaped}</code></pre>`;
  });

  return converted;
}

/* --- Find question/answer by number across categories --- */
function findQA(num) {
  let categoryFound = null, questionText = null, answerHTML = null;

  for (const [cat, map] of Object.entries(questions)) {
    if (Object.prototype.hasOwnProperty.call(map, num)) {
      categoryFound = cat;
      questionText = map[num];
      break;
    }
  }
  if (categoryFound && answers[categoryFound] && answers[categoryFound][num]) {
    answerHTML = answers[categoryFound][num];
  }
  return { category: categoryFound, questionText, answerHTML };
}

/* --- Show the answer on question.html --- */
function showAnswer(num) {
  const { questionText, answerHTML } = findQA(num);
  const titleEl = document.getElementById("questionTitle");
  const answerEl = document.getElementById("answer");

  if (!questionText) {
    titleEl.textContent = `#${num}`;
    answerEl.innerHTML = "<em>Question not found.</em>";
    return;
  }

  titleEl.textContent = `${num}. ${questionText}`;
  answerEl.innerHTML = renderAnswerHTML(answerHTML);

  // Kick Prism after injecting the HTML
  if (window.Prism) {
    Prism.highlightAllUnder(answerEl);
  }
}
