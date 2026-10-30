import logo from "../../../assets/appIcons/mainIcon.svg";
import styles from "./navbar.module.scss";

export function navbar(){
    const paths = [
        {link: "#overview", text: "Oversigt"},
        {link: "#home", text: "Lige nu"},
        {link: "#history", text: "Historik"}
    ]

    let navbar = `
        <nav class="${styles.navStyle}">
        <img src="${logo}" alt="Elprisen">
        <span class="${styles.title}">ELPrisen.nu</span>
        ${paths.map((path) => 
            `<a href=${path.link} class="${path.link === location.hash ? styles.active : ""}">${path.text}</a>`
        ).join('')}
        <a href="#settings" class="${styles.settings}"><i class="fa-solid fa-gear"></i></a>
        </nav>
    `

    return navbar
}