import { getCurrentData } from "../../model/getCurrentData.js";
import { navbar } from "../components/navbar/navbar.js";
import { pageHeading } from "../components/pageHeading/pageHeading.js";

export async function frontpage (){

    let data = await getCurrentData()
    console.log("Frontpage products: ", data)

    const page = `
        ${navbar()}
        ${pageHeading('Lige nu')}
        ${data && data.products.map((item: { title: any; }) => `<p>${item.title}</p>`).join('')}
        `
    return (page)
}