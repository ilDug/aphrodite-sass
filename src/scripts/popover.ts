import { Placement, createPopper, Options, offset, Instance } from "@popperjs/core";

export type PopoverOptions = {
    offset?: number[];
    placement: Placement;
};

export class Popover {
    constructor(
        private reference: HTMLElement | Element,
        popHTML: string,
        options: PopoverOptions
    ) {
        /** crea l'elemnto popover e lo inserisce nel DOM */
        const popover = document.createElement("div");
        popover.classList.add("popover");
        popover.innerHTML = popHTML;
        reference.insertAdjacentElement("afterend", popover);

        const opts = this.#generatePopperOptions(options);
        this.popperInstance = createPopper(reference, popover, opts);
    }

    popperInstance: Instance;

    /** genera le opzioni necessarie alla creazione di POPPER */
    #generatePopperOptions(o: PopoverOptions): Options {
        return {
            placement: o.placement,
            modifiers: [{ name: offset, options: { offset: o.offset ?? [0, 0] } }],
            strategy: 'absolute'
        };
    }

    /** mostra il popover */
    show(): void {
        this.reference.setAttribute('data-popover', '');
        this.popperInstance.update();
    }

    /** nasconde il popover */
    hide(): void {
        this.reference.removeAttribute('data-popover');
    }
}
