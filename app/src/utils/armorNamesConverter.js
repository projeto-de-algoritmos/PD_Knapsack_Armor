const converter = {
    "chestplate": "Peitoral",
    "boots": "Botas",
    "leggings": "Calça",
    "helmet": "Capacete"
}

export function convertArmorNames(str){
    return converter[str]
}