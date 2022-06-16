let buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    e.preventDefault();

    let overly = document.createElement("span");
    overly.classList.add("overly");

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    overly.style.left = x + "px";
    overly.style.top = y + "px";

    e.target.appendChild(overly);

    setTimeout(() => {
      overly.remove();
    }, 500);
  });
}
