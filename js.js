function changeScore(id, amount) {
     const scoreEl = document.getElementById(id);
     let score = parseInt(scoreEl.textContent);
     score += amount;
     scoreEl.textContent = score;
}

const observer = new MutationObserver(() => {
  clearTimeout(window.autosaveTimer);
  window.autosaveTimer = setTimeout(saveToLocalStorage, 500);
});

observer.observe(document.getElementById('board'), {
  childList: true,
  subtree: true,
  characterData: true
});

