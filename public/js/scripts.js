// public/js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM is fully loaded.');
  console.log('JavaScript is working!');

  // Typing effect code
  var phrases = [
      "Hi, I'm Elayna. Welcome to my portfolio.",
      "I am a recent graduate from San Jose State.",
      "Incoming EE masters student at Santa Clara University.",
      "Click the dropdown above to learn more about me."
  ];

  var index = 0;
  var currentText = '';
  var letter = '';

  function type() {
      currentText = phrases[index];
      letter = currentText.slice(0, ++letter.length);
      document.getElementById('typing-text').textContent = letter;

      if (letter.length === currentText.length) {
          index++;
          letter = '';
          setTimeout(type, 2000); // Delay between phrases
      } else {
          setTimeout(type, 100); // Typing speed
      }
  }

  type();
});
