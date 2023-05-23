function processar() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')

    if (num.value.length == 0) {
        window.alert('Campo vazio!!')
    } else {
        let numero= Number(num.value)
        let num_mes= numero
        switch (num_mes) {
            case 1:
                res.innerHTML += ('Janeiro');
                break;
            case 2:
                res.innerHTML += ('Fevereiro')
                break;
            case 3:
                res.innerHTML += ('Março')
                break;
            case 4: 
                res.innerHTML +=('Abril')
                break;
            case 5: 
                res.innerHTML += ('Maio')
                break;
            case 6:
                res.innerHTML += ('Junho')
                break;
            case 7:
                res.innerHTML += ('Julho')
                break;
            case 8:
                res.innerHTML += ('Agosto')
                break;
            case 9:
                res.innerHTML += ('Setembro')
                break;
            case 10:
                res.innerHTML += ('Outubro')
                break;
            case 11:
                res.innerHTML += ('Novembro')
                break;
            case 12:
                res.innerHTML += ('Dezembro')
                break;
            default:
                window.alert('Digite um mês valido.')
        }
    }
}