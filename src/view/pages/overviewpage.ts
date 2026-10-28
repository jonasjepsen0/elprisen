import { navbar } from "../components/navbar/navbar.ts";
import { pageHeading } from "../components/pageHeading/pageHeading.ts";

export function overviewpage (){

    const page = `
        ${navbar()}
        ${pageHeading('Oversigt')}
    `

    return (page)
}