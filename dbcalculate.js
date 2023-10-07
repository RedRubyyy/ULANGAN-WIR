const option = document.getElementById('option-result');

option.addEventListener('change' , function () {
    option.value = this.value;
})

function inner ({a , b , n}) {
return function () {
    let result;
    let message;
    switch (option.value) {
      case 'HITUNG SUKU KE-N (ARITMATIKA)' : {
        result = a + (n - 1) * b;
        message = `${a} + (${n} - 1) x ${b} = ${result} <br> jadi suku ke - ${n} adalah ${result}`;
      } break;
      case 'HITUNG SUKU KE-N (GEOMETRI)' : {
        result = a * geometri(b , n-1);
        message = `${a} x ${b} pangkat (${n} - 1 ) = ${result} <br> jadi suku ke - ${n} adalah ${result}`;
      } break;
      case 'HITUNG N SUKU PERTAMA (GEOMETRI)' : {
        const rumus = rumusLine('geometri');
        result = rumus ({a , b , n})
        message = `Jumlah ${n} suku pertama adalah ${result}`
      } break;
      case 'HITUNG N SUKU PERTAMA (ARITMATIKA)' : {
        const rumus = rumusLine('aritmatika');
        result = rumus ({a , b , n})
        message = `Jumlah ${n} suku pertama adalah ${result}`
      } break;
    }
        return {message , result};
    }
}

function geometri (a , p) {
    let ress = a;
    for (let i = 1 ; i < p ; i++) {
        ress = ress * a
    }
    return (ress)
}
function rumusLine (type) {
 if (type == 'geometri') {
    console.log('ok')
    return function ({a , b , n}) {
     if (a < 1 ) {
        const up = a * (1 - geometri(b , n))
        const bot = (1-b)
        console.log({a , b , n})
        return up / bot;
     }
     if (a > 1 ){
        const up = a * (geometri(b , n) -1)
        const bot = (b - 1);
        console.log({a , b , n})
        console.log({up , bot})
        return up / bot;
     }
     
    }
 }
 if (type == 'aritmatika') {
    return function ({a, b , n}) {
        console.log({a , b , n})
        const pembagi = n/2
        const ddkurung = 2*a+(n-1)*b
        return pembagi * ddkurung;
    }
 }
}