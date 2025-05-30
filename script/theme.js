const themeBtn = document.getElementById("theme-btn");

const colors = [
  "bg-violet-50",
  "bg-blue-50",
  "bg-pink-50",
  "bg-green-50",
  "bg-yellow-50",
  "bg-rose-50",
  "bg-orange-50",
  "bg-emerald-50",
  "bg-sky-50",
  "bg-lime-50"
];

let currentColorIndex = 0;

themeBtn.addEventListener("click", function () {
  const body = document.body;

  body.classList.remove(colors[currentColorIndex]);

  currentColorIndex = (currentColorIndex + 1) % colors.length;

  body.classList.add(colors[currentColorIndex]);
});
