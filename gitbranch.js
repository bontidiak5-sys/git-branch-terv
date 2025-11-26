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
const form = document.getElementById('halmazForm');
const eredmenyDiv = document.getElementById('eredmeny');
const canvas = document.getElementById('vennCanvas');
const ctx = canvas.getContext('2d');

document.getElementById('calculateBtn').addEventListener('click', function() {
    const a = halmazBeolvas(document.getElementById('halmazA').value);
    const b = halmazBeolvas(document.getElementById('halmazB').value);
    const muvelet = document.getElementById('muvelet').value;
    let result = [];
    if (muvelet === 'egyesites') result = egyesites(a, b);
    else if (muvelet === 'metszet') result = metszet(a, b);
    else if (muvelet === 'kulonseg') result = kulonseg(a, b);
    eredmenyDiv.textContent = result.length ? result.join(', ') : 'Nincs eredmény';
    drawVenn(a, b, result, muvelet);
});
function drawVenn(a, b, result, muvelet) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Körök
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = '#4a90e2';
    ctx.beginPath(); ctx.arc(130, 100, 70, 0, 2 * Math.PI); ctx.fill();
    ctx.fillStyle = '#e94e77';
    ctx.beginPath(); ctx.arc(230, 100, 70, 0, 2 * Math.PI); ctx.fill();
    ctx.globalAlpha = 1.0;
    // Halmaz elemek
    ctx.font = '16px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText('A: ' + a.join(', '), 60, 30);
    ctx.fillText('B: ' + b.join(', '), 220, 30);
    // Eredmény
    ctx.fillStyle = '#222';
    ctx.fillText('Eredmény: ' + result.join(', '), 100, 180);
    // Művelet
    ctx.fillStyle = '#666';
    ctx.fillText('Művelet: ' + muvelet, 160, 195);
