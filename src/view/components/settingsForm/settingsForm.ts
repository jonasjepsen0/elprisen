import styles from "./settingsForm.module.scss";

export function settingsForm(){
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
                <select>
                    <option value="DK2">Region Øst</option>
                    <option value="DK1">Region Vest</option>
                </select>
            </label>
        </div>
    `
}