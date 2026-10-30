import { getRegion } from "../../../model/region.ts";
import styles from "./footer.module.scss";

export function footer(){

    const region = getRegion() === "DK1" ? "Vest Danmark" : "Øst Danmark"

    return `
        <footer class="${styles.footerStyle}">
            <p>Priserne er <span>ex. moms</span> og afgifter</p>
            <p>Du vises lige nu priserne for <span>${region}</span></p>
        </footer>
    `
}