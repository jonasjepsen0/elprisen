import { navbar } from "../components/navbar/navbar.ts";
import { pageHeading } from "../components/pageHeading/pageHeading.ts";

export function historypage (){

    const page = `
        ${navbar()}
        ${pageHeading('Historik')}
    `

    return (page)
}