import { getCurrentData } from "../../model/getCurrentData.ts";
import { footer } from "../components/footer/footer.ts";
import { hourList } from "../components/hourList/hourList.ts";
import { lowHigh } from "../components/lowHigh/lowHigh.ts";
import { navbar } from "../components/navbar/navbar.ts";
import { nowPrice } from "../components/nowPrice/nowPrice.ts";
import { pageHeading } from "../components/pageHeading/pageHeading.ts";
import { historyContent } from "./historypage.ts";
import styles from "./dashboardpage.module.scss";

export async function dashboardpage (){

    let data = await getCurrentData()

    if (!data){
        return `
            ${navbar()}
            <p>Priserne kunne ikke hentes</p>
            ${footer()}
        `
    }

    const page = `
        ${navbar()}
        <div class="${styles.dashboardStyle}">
            <section>
                ${pageHeading('Elprisen lige nu')}
                ${nowPrice(data)}
                ${lowHigh(data)}
                ${footer()}
            </section>
            <section>
                ${pageHeading('Oversigt')}
                ${hourList(data)}
            </section>
            <section>
                ${pageHeading('Historik')}
                ${await historyContent()}
            </section>
        </div>
    `

    return (page)
}