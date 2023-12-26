export function applyExpBox() {
    const expBoxes = [...document.querySelectorAll(".exp-box")];

    expBoxes.forEach((box) => {
        box
            .querySelector(".exp-header")
            .addEventListener("click", (e) => {
                box.toggleAttribute("data-show");
            });
    });
}