import styles from "./hourList.module.scss";

export function hourList(data: { time_start: string; DKK_per_kWh: number; }[]){
    return `
        <ul class="${styles.listStyle}">
            ${data.map((item) =>
                `<li><span>kl. ${item.time_start.slice(11, 13)}.00</span><span>${item.DKK_per_kWh.toFixed(3)} kr</span></li>`
            ).join('')}
        </ul>
    `
}