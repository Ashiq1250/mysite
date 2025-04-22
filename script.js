function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}
function copyGmail(event) {
  event.preventDefault();
  const gmail = "zihadeazom@gmail.com";
  navigator.clipboard.writeText(gmail).then(() => {
    const toast = document.getElementById("copied-toast");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  });
}

// Typewriter Effect
let texts = ["WEB 3.0 DEVELOPER", "DESIGNER", "Blockchain DEVELOPER"];

function startTypewriterEffect() {
  const texts = ["WEB 3.0 DEVELOPER", "DESIGNER", "Blockchain DEVELOPER"];
  let speed = 100;
  const textElement = document.querySelector(".typewriter-text");
  let textIndex = 0;
  let charIndex = 0;

  function typeWriter() {
    if (charIndex < texts[textIndex].length) {
      textElement.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(eraseText, 1000);
    }
  }

  function eraseText() {
    if (textElement.innerHTML.length > 0) {
      textElement.innerHTML = textElement.innerHTML.slice(0, -1);
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      charIndex = 0;
      setTimeout(typeWriter, 500);
    }
  }

  typeWriter();
}

window.onload = startTypewriterEffect;
