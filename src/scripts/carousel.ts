export function applyCarousel(carouselId: string) {
    const carousel = document.getElementById(carouselId)!;
    const next = carousel.querySelector(".commands .next-slide")! as HTMLAnchorElement;
    const previous = carousel.querySelector(".commands .prev-slide")! as HTMLAnchorElement;
    const slides = [...carousel.querySelectorAll(".slide")];
    let active: number = 0;

    const classCtrl = (slide, i) => slide.classList[i == active ? "add" : "remove"]("active");

    next.addEventListener("click", (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        active = active == slides.length - 1 ? 0 : active + 1;
        slides.forEach(classCtrl);
    });

    previous.addEventListener("click", (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        active = active == 0 ? slides.length - 1 : active - 1;
        slides.forEach(classCtrl);
    });
}