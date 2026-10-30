import { getRegion, saveRegion } from "../../../model/region.ts";
import styles from "./settingsForm.module.scss";

export function settingsForm(){

    const region = getRegion()

    return `
        <div class="${styles.settingsStyle}">
            <label>
                Priser inkl. moms
                <input type="checkbox">
            </label>
            <label>
                Laveste pris alarm
                <input type="checkbox">
            </label>
            <label>
                Vælg region
                <select id="region">
                    <option value="DK2" ${region === "DK2" ? "selected" : ""}>Region Øst</option>
                    <option value="DK1" ${region === "DK1" ? "selected" : ""}>Region Vest</option>
                </select>
            </label>
        </div>
    `
}

document.addEventListener("change", (event) => {

    const select = event.target as HTMLSelectElement

    if (select.id !== "region"){
        return
    }

    saveRegion(select.value)

    location.reload()
})