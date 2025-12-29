// Minimal behavior: flip card on Show Answer, toggle theme
document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('card');
  const showBtn = document.getElementById('showBtn');
  const themeBtn = document.getElementById('themeBtn');
  const position = document.getElementById('position');

  function setShowText(flipped){
    showBtn.textContent = flipped ? 'Hide Answer' : 'Show Answer';
  }

  // Restore theme from localStorage
  const savedTheme = localStorage.getItem('flashcardTheme');
  if (savedTheme === 'amber') document.body.classList.add('theme-amber');

  // Show / hide answer (flip)
  showBtn.addEventListener('click', () => {
    const isFlipped = card.classList.toggle('flipped');
    setShowText(isFlipped);
  });

  // Theme toggle
  if (themeBtn){
    themeBtn.addEventListener('click', () => {
      const isAmber = document.body.classList.toggle('theme-amber');
      localStorage.setItem('flashcardTheme', isAmber ? 'amber' : 'default');
    });
  }

  // Small helper for position text if cards are provided by other code
  if (position && !position.textContent.trim()){
    position.textContent = '';
  }
});
