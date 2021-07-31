console.log('-------------завдання 1-------------');

let city: string;
city = 'Київ';
city = 'Львів';
let address: string = city;
console.log(address);




console.log('-------------завдання 2-------------');

let num: number = +prompt('Парні та непарні числа');
let All: string | number = num % 2 == 0 ? `Парне число => ${num}` : `Непарне число => ${num}`;
console.log(All = num == 0 ? `число=> ${num}` : All);
 


console.log('-------------завдання 3-------------');

let kilk = [9, 2, 3, 22, 12];
let maxNum = kilk[0];
kilk.forEach(max);

function max(arr) {
    if (arr > maxNum) {
        maxNum = arr;
    };
};
console.log('Найбільше передане число => ',maxNum);




console.log('-------------завдання 4-------------');

let SQRT: number | string = +prompt('Квадратний корінь');
let getSqrt = (NUM) => {
    if (SQRT > 0) {
        return `Корінь з ${SQRT} => ${Math.sqrt(NUM)}`;
    }
    else if (SQRT == '') {
        console.log(SQRT);
        return 'Ви нічого не ввели'
    }
    else if (SQRT < 0) {
        return 'Введіть додатнє число'
    }
    else {
        return 'Ви ввели не число';
    }

};
console.log(getSqrt(SQRT)); 




console.log('-------------завдання 5-------------');



let ADD: Element = document.querySelector('.btn-warning');
let RESET: Element = document.querySelector('.btn-danger');
let WORDS = (<HTMLInputElement>document.getElementById('input_word'));
let BED_WORD: Element = document.querySelector('.word');
let AREA = (<HTMLInputElement>document.getElementById('floatingTextarea2'));
let CONFIRM: Element = document.querySelector('.btn-success');
let bad = [];
let Area_text = [];

let RETURN = () => {
    BED_WORD.textContent = bad.join(' ');
    WORDS.value = '';
   
};

ADD.addEventListener('click', () => {
    bad.push(WORDS.value);
    RETURN();
});

RESET.addEventListener('click', () => {
    bad = [];
    RETURN();
    Area_text = [];
    AREA.value = '';
});

CONFIRM.addEventListener('click', () => {
    Area_text = AREA.value.split(' ');
    let word_top: string;
    let word_text: string;
    let anonim: string = '';
    bad.forEach(function (elem) {
        word_top = elem;
        Area_text.forEach(function (elem, yy) {
            word_text = elem;
            if (word_top == word_text) {
                for(let i=0;i<Area_text[yy].length;i++){
                    anonim += '*';
                }; 
                Area_text.splice(yy,1,anonim);
                anonim = '';
            };
        });
    });
    AREA.value = Area_text.join(' ');
});
