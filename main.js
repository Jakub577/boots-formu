
const wart = new Array

function przycisk(){

    const imie = document.getElementById('inputOdImienia').value

    const nazwisko = document.getElementById('inputOdNazwiska').value
    const mail = document.getElementById('inputOdMeila').value
    const numerTel = document.getElementById('inputOdNumeru').value
    const wiadomosc = document.getElementById('inpputOdWiadomości').value


    if(imie.length > 2) {
        document.getElementById('imie-error').style = 'color:green'

    }
    else {
        document.getElementById('imie-error').style = 'color:red;'
    }   
    if(nazwisko.length > 3) {
        document.getElementById('nazwisko-error').style = 'color:green'
    }
    else {
        document.getElementById('nazwisko-error').style = 'color:red;'
    }
    if(mail.indexOf('@') > -1 ) {
        document.getElementById('email-error').style = 'color:green;'


    }
    else {
        document.getElementById('email-error').style = 'color:red;'
    }
    if (numerTel.indexOf('1','2','3','4','5','6','7','8','9','0')) {
        document.getElementById('numer-error').style = 'color:green;'
    }
    else {
        document.getElementById('numer-error').style = 'color:red;'
    }
    if (wiadomosc.length > 10) {
        document.getElementById('mess-error').style = 'color:green;'
    }
    else {
        document.getElementById('mess-error').style = 'color:red;'
    }
}
