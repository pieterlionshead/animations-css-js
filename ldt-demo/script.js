const restartButton = document.getElementById("restart");
const body = document.body;

const restartAnimation = () => {
  body.classList.remove("restarting");
  // Force reflow to reset animations
  void body.offsetHeight;
  body.classList.add("restarting");
};

restartButton?.addEventListener("click", restartAnimation);

// start in active state
body.classList.add("restarting");
