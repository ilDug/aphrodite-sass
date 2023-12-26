export function applyNavbar(navId: string) {
    const nav = document.getElementById(navId);
    const closeBtns = [...document.querySelectorAll("[nav-close]")];
    const openBtns = [...document.querySelectorAll("[nav-open]")];

    const action = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        nav.toggleAttribute("data-show");
    };
    closeBtns.forEach(el => el.addEventListener('click', action));
    openBtns.forEach(el => el.addEventListener('click', action));
}