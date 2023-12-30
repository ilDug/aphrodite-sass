import { createPopper, Instance, Options } from "@popperjs/core";

export function applyTooltip() {
    const tooltips = [...document.querySelectorAll("[data-tooltip]")];
    tooltips.forEach((el) => createTooltip(el));
}




export function createTooltip(ref: Element): Instance{
    const popperOptions: Options = {
        placement: "top",
        modifiers: [
            { name: "offset", options: { offset: [0, 2] } },
            { name: "eventListeners", enabled: true },
        ],
        strategy: "absolute",
    };

    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.innerText = ref.getAttribute("data-tooltip");
    ref.insertAdjacentElement("afterend", tooltip);

    const popperInstance = createPopper(ref, tooltip, popperOptions);

    ref.addEventListener("mouseenter", (ev) => popperInstance.update());

    return popperInstance
}
