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

