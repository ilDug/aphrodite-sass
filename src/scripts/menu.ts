import { createPopper, Options } from '@popperjs/core';


export function applyMenu() {
    const menuRefs = [...document.querySelectorAll(".menu-ref")];

    menuRefs.forEach(ref => {
        const dorpdown = ref.nextElementSibling as HTMLElement
        const popperOptions: Options = {
            placement: 'bottom-start',
            modifiers: [
                { name: 'offset', options: { offset: [0, 2] } },
                { name: 'eventListeners', enabled: true },
            ],
            strategy: 'absolute'
        }

        const popperInstance = createPopper(ref, dorpdown, popperOptions);

        ref.addEventListener('click', ev => {
            ref.setAttribute('data-expanded', '')
            popperInstance.update();
        })

        //chiude il dorpdown
        document.addEventListener('click', ev => {
            if (ref == ev.target) return;
            ref.removeAttribute('data-expanded')
        })
    })
}