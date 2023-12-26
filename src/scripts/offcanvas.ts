export function applyOffcanvas(offcanvasId: string) {
    const oc = document.getElementById(offcanvasId);
    const closeBtns = [...document.querySelectorAll("[oc-close]")];
    const openBtns = [...document.querySelectorAll("[oc-open]")];

    const action = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        oc.toggleAttribute("data-show");
    };
    closeBtns.forEach(el => el.addEventListener("click", action));
    openBtns.forEach(el => el.addEventListener("click", action));
}