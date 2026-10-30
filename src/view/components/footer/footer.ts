import styles from "./footer.module.scss";

export function footer(){
    return `
        <footer class="${styles.footerStyle}">
            <p>Priserne er <span>ex. moms</span> og afgifter</p>
            <p>Du vises lige nu priserne for <span>Øst Danmark</span></p>
        </footer>
    `
}