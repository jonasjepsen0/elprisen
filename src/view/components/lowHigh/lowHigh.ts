import styles from "./lowHigh.module.scss";

export function lowHigh(data: { DKK_per_kWh: number; }[]){

    const prices = data.map((item) => item.DKK_per_kWh)

    const lowest = Math.min(...prices)
    const highest = Math.max(...prices)

    return `
        <div class="${styles.lowHighStyle}">
            <div>
                <div class="${styles.circle}">
                    <p>${lowest.toFixed(3)} kr</p>
                    <p class="${styles.unit}">pr. kWh</p>
                </div>
                <p>Laveste pris</p>
            </div>
            <div>
                <div class="${styles.circle}">
                    <p>${highest.toFixed(3)} kr</p>
                    <p class="${styles.unit}">pr. kWh</p>
                </div>
                <p>Højeste pris</p>
            </div>
        </div>
    `
}