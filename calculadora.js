let op = function () {
    alert("Escolha uma opção antes");
}

function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    if (num2 != 0) {
        return num1 / num2;;                
    } else {           
    return "Erro, Numero divisível por zero";
    }
    
}

function mult(num1, num2) {
    return num1 * num2;
}


function operation() {
    const answer = document.getElementById('answer');
    const select = document.getElementById('operation');

    const selectedOperation = select.selectedIndex;

    switch (selectedOperation) {
        case 1:
            answer.innerText = 'Adição';
            answer3.innerText = '  +  '
            op = sum;
            break;
        case 2:
            answer.innerText = 'Subtração';
            answer3.innerText = '  -  '
            op = sub;
            break;
        case 3:
            answer.innerText = 'Divisão';
            answer3.innerText = '  /  '
            op = div
            break;
        case 4:
            answer.innerText = 'Multiplicação';
            answer3.innerText = '  X  '
            op = mult;
            break;
        default:
            break;
    }
}

function calculate() {
    // referências aos elementos
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const answer = document.getElementById('answer');

    // valores dos inputs
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const resp = op(num1, num2);

    answer2.innerText = resp;
}