import styles from "./nowPrice.module.scss";

export function nowPrice(data: { DKK_per_kWh: number; time_start: string; time_end: string; }[]){

    const now = new Date()

    const current = data.find((item) =>
        new Date(item.time_start) <= now && now < new Date(item.time_end)
    )

    if (!current){
        return `<p>Priserne kunne ikke hentes</p>`
    }

    return `
        <div class="${styles.circle}">
            <p class="${styles.price}">${current.DKK_per_kWh.toFixed(3)} kr</p>
            <p>pr. kWh</p>
        </div>
        <p class="${styles.time}">${current.time_start.slice(11, 13)}.00 - ${current.time_end.slice(11, 13)}.00</p>
    `
}