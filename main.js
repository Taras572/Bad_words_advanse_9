console.log('-------------завдання 1-------------');
var city;
city = 'Київ';
city = 'Львів';
var address = city;
console.log(address);
console.log('-------------завдання 2-------------');
var num = +prompt('Парні та непарні числа');
var All = num % 2 == 0 ? "\u041F\u0430\u0440\u043D\u0435 \u0447\u0438\u0441\u043B\u043E => " + num : "\u041D\u0435\u043F\u0430\u0440\u043D\u0435 \u0447\u0438\u0441\u043B\u043E => " + num;
console.log(All = num == 0 ? "\u0447\u0438\u0441\u043B\u043E=> " + num : All);
console.log('-------------завдання 3-------------');
var kilk = [9, 2, 3, 22, 12];
var maxNum = kilk[0];
kilk.forEach(max);
function max(arr) {
    if (arr > maxNum) {
        maxNum = arr;
    }
    ;
}
;
console.log('Найбільше передане число => ', maxNum);
console.log('-------------завдання 4-------------');
var SQRT = +prompt('Квадратний корінь');
var getSqrt = function (NUM) {
    if (SQRT > 0) {
        return "\u041A\u043E\u0440\u0456\u043D\u044C \u0437 " + SQRT + " => " + Math.sqrt(NUM);
    }
    else if (SQRT == '') {
        console.log(SQRT);
        return 'Ви нічого не ввели';
    }
    else if (SQRT < 0) {
        return 'Введіть додатнє число';
    }
    else {
        return 'Ви ввели не число';
    }
};
console.log(getSqrt(SQRT));
console.log('-------------завдання 5-------------');
var ADD = document.querySelector('.btn-warning');
var RESET = document.querySelector('.btn-danger');
var WORDS = document.getElementById('input_word');
var BED_WORD = document.querySelector('.word');
var AREA = document.getElementById('floatingTextarea2');
var CONFIRM = document.querySelector('.btn-success');
var bad = [];
var Area_text = [];
var RETURN = function () {
    BED_WORD.textContent = bad.join(' ');
    WORDS.value = '';
};
ADD.addEventListener('click', function () {
    bad.push(WORDS.value);
    RETURN();
});
RESET.addEventListener('click', function () {
    bad = [];
    RETURN();
    Area_text = [];
    AREA.value = '';
});
CONFIRM.addEventListener('click', function () {
    Area_text = AREA.value.split(' ');
    var word_top;
    var word_text;
    var anonim = '';
    bad.forEach(function (elem) {
        word_top = elem;
        Area_text.forEach(function (elem, yy) {
            word_text = elem;
            if (word_top == word_text) {
                for (var i = 0; i < Area_text[yy].length; i++) {
                    anonim += '*';
                }
                ;
                Area_text.splice(yy, 1, anonim);
                anonim = '';
            }
            ;
        });
    });
    AREA.value = Area_text.join(' ');
});
