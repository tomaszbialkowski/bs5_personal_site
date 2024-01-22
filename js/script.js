// Add custom JavaScript here
function runTypingEffect() {
  const text = "WhiteCowSky";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 130;

  typetext(text, typingElement, typingDelay);
}

function typetext(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
