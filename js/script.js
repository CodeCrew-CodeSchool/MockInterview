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
  //document.getElementById("answer").textContent = answer || "Answer not found.";
  document.getElementById("answer").innerHTML = answer;

}
