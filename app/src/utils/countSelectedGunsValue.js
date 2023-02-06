export function countSelectedGunsValue(guns){
    var gunsValue = 0;
    for (const key in guns){
        gunsValue += guns[key].price
    }
    return gunsValue
}