const tabunganAwalM = document.getElementById('Mo-majemuk');
const presentaseM = document.getElementById('i-majemuk');
const nM = document.getElementById('n-majemuk');
const resultMajemuk = document.getElementById('result-majemuk')

const buttonM = document.getElementById('hitung-majemuk');
buttonM.addEventListener('click' , function () {
    const value = {
        Mo : Number(tabunganAwalM.value),
        i : Number(presentaseM.value),
        n : Number(nM.value)
    };
    const res = hitungBungaMajemuk(value)
    resultMajemuk.innerHTML = `Tabungan akhir dengan Bunga majemuk adalah Rp ${res}`
})

function hitungBungaMajemuk ({Mo , i , n}) {
    let nKali = (i + 1);
    for (let k = 1 ; k < n; k++) {
        nKali = nKali * (i + 1)
    }
    return nKali * Mo
}


const tabunganAwalT = document.getElementById('Mo-t');
const presentaseT = document.getElementById('i-t');
const nT = document.getElementById('n-t');
const resultT = document.getElementById('result-t');

const buttonT = document.getElementById('hitung-t');
buttonT.addEventListener('click' , function () {
    const value = {
        Mo : Number(tabunganAwalT.value),
        i : Number(presentaseT.value),
        n : Number(nT.value)
    }
    const res = hitungBungaTunggal(value)
    resultT.innerHTML = `Tabungan akhir dengan Bunga tunggal adalah Rp ${res}`
})

function hitungBungaTunggal ({Mo , i , n}) {
    const bungaN = Mo * (i * n)
    return Mo + bungaN
}

const inputs = [tabunganAwalM , presentaseM , nM , 
tabunganAwalT , presentaseT , nT]
const resultElement = [resultMajemuk , resultT]