function changeScore(id, amount) {
     const scoreEl = document.getElementById(id);
     let score = parseInt(scoreEl.textContent);
     score += amount;
     scoreEl.textContent = score;
}

function saveScores() {
  const scores = {};
  document.querySelectorAll('.player').forEach(player => {
    const name = player.querySelector('.name').textContent;
    const score = player.querySelector('.score').textContent;
    scores[name] = score;
  });
  localStorage.setItem('scores', JSON.stringify(scores));
  alert('Eredmények elmentve!');
}

function loadScores() {
  const saved = JSON.parse(localStorage.getItem('scores'));
  if (saved) {
    for (const [name, score] of Object.entries(saved)) {
      const player = [...document.querySelectorAll('.player')]
        .find(p => p.querySelector('.name').textContent === name);
      if (player) player.querySelector('.score').textContent = score;
    }
  }
}

