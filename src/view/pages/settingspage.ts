import { footer } from "../components/footer/footer.ts";
import { navbar } from "../components/navbar/navbar.ts";
import { pageHeading } from "../components/pageHeading/pageHeading.ts";
import { settingsForm } from "../components/settingsForm/settingsForm.ts";

export function settingspage (){

    const page = `
        ${navbar()}
        ${pageHeading('Indstillinger')}
        ${settingsForm()}
        ${footer()}
    `

    return (page)
}