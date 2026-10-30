export function getRegion(){
    return localStorage.getItem("region") || "DK2"
}

export function saveRegion(region: string){
    localStorage.setItem("region", region)
}