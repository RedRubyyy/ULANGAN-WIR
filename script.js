const dataOverview_x = $('#data-overview-x');
const dataOverview_y = $('#data-overview-y');
const resetButton = $('#reset-data-btn');

const independentAdd = $('#btn-add-independent');
const dependentAdd = $('#btn-add-dependent');

const inputData = $('#data-input');

const optionButton = $('#calculated-option-btn')
const optionCalculate = $$('.btn-calculate')

const resulteElement = $('#result-string')
const innerOverview = {
    independent : [],
    dependent : []
};

function updateOverview () {
    const onData = innerOverview.independent.length != 0 || innerOverview.dependent.length !=0
    if (onData) {
        optionButton.disabled = false
    }
    const {independent , dependent} = innerOverview;
    if(dependent.length == 0) {
        dataOverview_y.value = '';
    } else {
        dataOverview_y.value = `[${innerOverview.dependent.join(' | ')}]`;
    }
    if (independent.length == 0) {
        dataOverview_x.value = '';
    } else {
        dataOverview_x.value = `[${innerOverview.independent.join(' | ')}]`;
    }
    
    
};

resetButton.event('click' , function () {
    innerOverview.independent = [];
    innerOverview.dependent = []
    optionButton.disabled = true
    updateOverview()
});


dependentAdd.event('click' , function ()  {
    if (inputData.value == '') {
        return alert('Enter you data frist.')
    }
    const value = inputData.value.split('_');
    const result = numberOnArray(value);
    if (!result) {
        return alert('Detector Alphabet');
    }
    innerOverview.dependent = result;
    updateOverview()
})

independentAdd.event('click' , function () {
    if (inputData.value == '') {
        return alert('Enter you data frist.')
    }
    const value = inputData.value.split('_');
    const result = numberOnArray(value);
    if (!result) {
        return alert('Detector Alphabet');
    }
    innerOverview.independent = result;
    updateOverview()
})

function numberDetector (string) {
    const splitString = string.split('');
    const numbers = '1234567890'
    
    const result = splitString.every(string => {
        return numbers.includes(string)
    })
    return result
}

function numberOnArray (Arrays) {
    let detector = true
    Arrays.forEach(string => {
        detector = numberDetector(string);
    });
    if (!detector) {
        return false;
    }
    return Arrays.map(string => {
        return Number(string);
    })
}

optionCalculate.forEach((element , index)=> {
    element.event('click' , function () {
        calculate(index)
    })
});


function calculate (index) {
    const functionIndex = [SSxx , SSyy , SSxy];
    const result = functionIndex[index]();
    resulteElement.innerHTML = result

}

function SSxy () {
    
    const sigmaX = innerOverview.independent.reduce((acc , curr) => acc + curr);
    const sigmaY = innerOverview.dependent.reduce((acc , curr) => acc + curr)
    let sigmaXY = 0;

    innerOverview.independent.forEach((element , index) => {
        sigmaXY += element * innerOverview.dependent[index];
    })

    const result = (sigmaXY - ((sigmaX * sigmaY) / innerOverview.dependent.length).toFixed(2)).toFixed(2);
    return `Result : Independent x terhadap ratanya dan Dependent Y terhadap ratanya adalah (SSxy) : ${result}`;
}

function SSxx () {
    const sigmaX = innerOverview.independent.reduce((acc , curr) => acc + curr);
    const sigmaX2 = innerOverview.independent.map(element => element * element).reduce((acc , curr) => acc + curr)
    const result = (sigmaX2 - ((sigmaX * sigmaX) / innerOverview.independent.length).toFixed(2)).toFixed(2)
    return `Result : Independent x terhadap ratanya (SSxx) : ${result}`;
}

function SSyy () {
    const sigmaY = innerOverview.dependent.reduce((acc , curr) => acc + curr);
    const sigmaY2 = innerOverview.dependent.map(element => element * element).reduce((acc , curr) => acc + curr);
    const result = (sigmaY2 - ((sigmaY * sigmaY) / innerOverview.dependent.length).toFixed(2)).toFixed(2);
    return `Result : Dependent y terhadap ratanya (SSyy) : ${result}`;
};