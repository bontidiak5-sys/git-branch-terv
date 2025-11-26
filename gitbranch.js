function halmazBeolvas(szoveg) {
    return Array.from(new Set(
        szoveg.split(',')
            .map(e => e.trim())
            .filter(e => e !== '')
            .map(Number)
            .filter(e => !isNaN(e))
    ));
}
function egyesites(a, b) {
    return Array.from(new Set([...a, ...b]));
}
function metszet(a, b) {
    return a.filter(x => b.includes(x));
}
function kulonseg(a, b) {
    return a.filter(x => !b.includes(x));
}

