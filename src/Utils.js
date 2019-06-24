export const hasAnyOfWrd = (words, textToSearch) => {
    const arr = words.split(' ')
    let flag = false
    const arrL = arr.length
    for (let i = 0; i < arrL; i++) {
        if (textToSearch.indexOf(arr[i]) >= 0) {
            flag = true
            break
        }
    }
    return flag
}