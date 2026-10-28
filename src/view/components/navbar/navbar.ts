export function navbar(){
    const paths = [
        {link: "#home", text: "Lige nu"},
        {link: "#history", text: "Historik"}, 
        {link: "#overview", text: "Oversigt"}
    ]

    let navbar = `
        <nav classname="navStyle">
        ${paths.map((path) => 
            `<a href=${path.link}>${path.text}</a>`
        ).join('')}
        </nav>
    `

    return navbar
}