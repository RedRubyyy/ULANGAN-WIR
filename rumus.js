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
    return (nKali.toFixed(3) * Mo).toFixed(2)
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
    const bungaN = (n * (i * Mo)).toFixed(3)
    return Mo + bungaN
}

const calcu1 = document.getElementById('value-1');
const calcu2 = document.getElementById('value-2');
const pangkat = document.getElementById('pangkat');
const btnCalc = document.getElementById('hitung-clac');
const resultCalc = document.getElementById('result-calc');

btnCalc.addEventListener('click' , function () {
    const value = {
        value1 : Number(calcu1.value),
        value2 : Number(calcu2.value),
        pangkat : Number(pangkat.value)
    }
    resultCalc.innerHTML = hitungKuadrat(value)
})

function hitungKuadrat ({value1 , value2 , pangkat}) {
    let result = (value1 + value2)
    for (let i = 1 ; i < pangkat; i++) {
        result = result * (value1 + value2)
    }
    return `(${value1} + ${value2}) pangakat ${pangkat} adalah ${result.toFixed(3)}`
}

const inputs = [tabunganAwalM , presentaseM , nM , 
tabunganAwalT , presentaseT , nT , calcu1 , calcu2 , pangkat]
const resultElement = [resultMajemuk , resultT , resultCalc]