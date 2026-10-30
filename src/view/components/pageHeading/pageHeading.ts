import styles from "./pageHeading.module.scss";

export function pageHeading(text: any){
    return `<h1 class="${styles.headingStyle}">${text}</h1>`
}