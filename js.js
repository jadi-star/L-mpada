const turnOn = document.querySelector('#turnOn');
const turnOff = document.querySelector('#turnOff');
const lampada = document.querySelector('#lampada');

function isLampadaBroken(){
    return lampada.src.indexOf('quebrada') > -1


}

function lampOn() {

    if(! isLampadaBroken()){

    lampada.src = '../img/ligada.jpg';
  }
}

function lampOff(){
    if(! isLampadaBroken()){

    lampada.src = '../img/desligada.jpg';
    }
}

function lampBroken(){

   
    lampada.src = './img/quebrada.jpg';

}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lampada.addEventListener('dblclick',lampBroken)
