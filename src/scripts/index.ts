declare const ENV: { VERSION: string };
import "../styles/styles.scss";
import { applyCarousel } from "./carousel";
import { applyExpBox } from "./expansion-box";
import { applyNavbar } from "./navbar";
import { applyOffcanvas } from "./offcanvas";

/** RUN **************************** */
window.onload = async () => {
    console.log(window.location.href)

    applyExpBox();
    applyNavbar('nav');
    applyOffcanvas('offcanvas');
}