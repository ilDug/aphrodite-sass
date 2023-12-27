import { createPopper, Options } from '@popperjs/core';

export function applyTooltip() {
    const tooltips = [...document.querySelectorAll('[data-tooltip]')];

    const popperOptions: Options = {
        placement: 'top',
        modifiers: [
            { name: 'offset', options: { offset: [0, 2] } },
            { name: 'eventListeners', enabled: true },
        ],
        strategy: 'absolute'
    }

    tooltips.forEach(el => {
        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.innerText = el.getAttribute('data-tooltip');
        el.insertAdjacentElement('afterend', tooltip);

        const popperInstance = createPopper(el, tooltip, popperOptions);

        el.addEventListener('mouseenter', ev => popperInstance.update())

    })

}