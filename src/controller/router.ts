import { settingsModal } from "../view/components/settingsModal/settingsModal.ts";
import { dashboardpage } from "../view/pages/dashboardpage.ts";
import { frontpage } from "../view/pages/frontpage.ts";
import { historypage } from "../view/pages/historypage.ts";
import { notfoundpage } from "../view/pages/notfoundpage.ts";
import { overviewpage } from "../view/pages/overviewpage.ts";
import { settingspage } from "../view/pages/settingspage.ts";

const root = document.getElementById("root") as HTMLElement

const desktop = window.matchMedia("(min-width: 1024px)")

const routes = [
    {path: "home", html: frontpage},
    {path: "history", html: historypage},
    {path: "404", html: notfoundpage},
    {path: "overview", html: overviewpage},
    {path: "settings", html: settingspage}
]

let currentRoute = null

export async function router(){
    const path = location.hash.slice(1);

    if (path === ""){
        location.hash = "home"
        return
    }

    if (desktop.matches){
        root.innerHTML = ""

        root.innerHTML = await dashboardpage()

        if (path === "settings"){
            root.innerHTML += settingsModal()
        }
        return
    }

    currentRoute = routes.find((el) => el.path === path)

    if (!currentRoute){
        currentRoute = routes[0]
    }


    root.innerHTML = ""

    root.innerHTML = await currentRoute.html()
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router)
desktop.addEventListener('change', router)