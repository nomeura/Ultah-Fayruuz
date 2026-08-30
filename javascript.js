const pertanyaan = [
  {
    question: "when is our first kiss?",
    answer: "12/04/2026",
  }
]


function checkAnswer(userAnswer) {
  const correctAnswer = pertanyaan[0].answer.toLowerCase();
  if (userAnswer.toLowerCase() === correctAnswer) {
    alert("Beneeerrr 😙😙");
    pageTwo();
  } else {
    alert("No, noo, coba lagiiii 😠");
  }
}