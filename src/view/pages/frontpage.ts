import { getCurrentData } from "../../model/getCurrentData.js";
import { footer } from "../components/footer/footer.js";
import { navbar } from "../components/navbar/navbar.js";
import { nowPrice } from "../components/nowPrice/nowPrice.js";
import { pageHeading } from "../components/pageHeading/pageHeading.js";

export async function frontpage (){

    let data = await getCurrentData()

    if (!data){
        return `
            ${navbar()}
            ${pageHeading('Elprisen lige nu')}
            <p>Priserne kunne ikke hentes</p>
            ${footer()}
        `
    }

    const page = `
        ${navbar()}
        ${pageHeading('Elprisen lige nu')}
        ${nowPrice(data)}
        ${footer()}
        `
    return (page)
}