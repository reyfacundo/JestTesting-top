export function reverseString(string){
    const splitted = string.split('');
    let word = '';
    for (let index = splitted.length-1; index >= 0; index--) {
        word += splitted[index];
    }
    return word

}