import { getCurrentData } from "../../model/getCurrentData.ts";
import { footer } from "../components/footer/footer.ts";
import { hourList } from "../components/hourList/hourList.ts";
import { lowHigh } from "../components/lowHigh/lowHigh.ts";
import { navbar } from "../components/navbar/navbar.ts";
import { pageHeading } from "../components/pageHeading/pageHeading.ts";

export async function overviewpage (){

    let data = await getCurrentData()

    if (!data){
        return `
            ${navbar()}
            ${pageHeading('Oversigt')}
            <p>Priserne kunne ikke hentes</p>
            ${footer()}
        `
    }

    const page = `
        ${navbar()}
        ${pageHeading('Oversigt')}
        ${lowHigh(data)}
        ${hourList(data)}
        ${footer()}
    `

    return (page)
}