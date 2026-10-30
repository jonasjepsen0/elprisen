import { getCurrentData } from "../../model/getCurrentData.ts";
import { footer } from "../components/footer/footer.ts";
import { hourList } from "../components/hourList/hourList.ts";
import { navbar } from "../components/navbar/navbar.ts";
import { pageHeading } from "../components/pageHeading/pageHeading.ts";
import styles from "./historypage.module.scss";

function inputDate(date: Date){
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
}

async function priceList(date: Date){

    let data = await getCurrentData(date)

    if (!data){
        return `<p>Priserne kunne ikke hentes</p>`
    }

    return `
        <p class="${styles.dateText}">Elpriserne d. ${inputDate(date).split("-").reverse().join("-")}</p>
        ${hourList(data)}
    `
}

export async function historyContent(){

    const today = new Date()

    const boutaWeekAgo = new Date()
    boutaWeekAgo.setDate(today.getDate() - 7)

    return `
        <div class="${styles.dateStyle}">
            <input type="date" id="historyDate" value="${inputDate(today)}" min="${inputDate(boutaWeekAgo)}" max="${inputDate(today)}">
            <i class="fa-solid fa-calendar-days"></i>
        </div>
        <div id="historyPrices">
            ${await priceList(today)}
        </div>
    `
}

export async function historypage (){

    const page = `
        ${navbar()}
        ${pageHeading('Historik')}
        ${await historyContent()}
        ${footer()}
    `

    return (page)
}

document.addEventListener("change", async (event) => {

    const input = event.target as HTMLInputElement

    if (input.id !== "historyDate" || input.value < input.min || input.value > input.max){
        return
    }

    const prices = document.getElementById("historyPrices") as HTMLElement

    prices.innerHTML = await priceList(new Date(`${input.value}T00:00`))
})