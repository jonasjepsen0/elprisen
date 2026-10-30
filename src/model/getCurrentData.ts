import { API_URL } from "../data/api";
import { getRegion } from "./region";

export async function getCurrentData(date = new Date(), region = getRegion()){

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    try {
        let response = await fetch(
            `${API_URL}/${year}/${month}-${day}_${region}.json`
        )

        if (!response.ok){
            return null
        }

        let jsonData = await response.json()

        return jsonData
    } catch {
        return null
    }
}