export function capitalize(string){
    const regex = /[a-zA-Z]+/;
    let trimmedString = string.trim();
    if(trimmedString.match(regex) == null) return "empty/invalid string";
    trimmedString = trimmedString.match(regex)[0]

    let firstLetter = trimmedString[0].toUpperCase();
    const rest = trimmedString.slice(1)
    
    return firstLetter + rest
}