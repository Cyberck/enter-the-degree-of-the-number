

let number = +prompt('Enter number'),
    stepen = +prompt('Enter the degree of the number');

    let answer = 1;

    for(let i = 0; i < stepen; i++) {
        answer = answer * number
    }

    alert(answer);