import { pageHeading } from "../pageHeading/pageHeading.ts";
import { settingsForm } from "../settingsForm/settingsForm.ts";
import styles from "./settingsModal.module.scss";

export function settingsModal(){
    return `
        <div class="${styles.overlay}">
            <div class="${styles.modalStyle}">
                <a href="#home" class="${styles.close}"><i class="fa-regular fa-circle-xmark"></i></a>
                ${pageHeading('Indstillinger')}
                ${settingsForm()}
            </div>
        </div>
    `
}