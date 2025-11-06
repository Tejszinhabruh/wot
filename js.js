function changeScore(id, value) {
  const scoreElement = document.getElementById(id);
  let score = parseInt(scoreElement.textContent) || 0;
  score += value;
  scoreElement.textContent = score;
  saveScores();
}



function saveScores() {
  const scores = {};
  document.querySelectorAll('.score').forEach(el => {
    scores[el.id] = parseInt(el.textContent);
  });
  localStorage.setItem('scores', JSON.stringify(scores));
}


function loadScores() {
  const saved = localStorage.getItem('scores');
  if (saved) {
    const scores = JSON.parse(saved);
    for (const id in scores) {
      const el = document.getElementById(id);
      if (el) el.textContent = scores[id];
    }
  }
}
window.addEventListener('DOMContentLoaded', loadScores);
