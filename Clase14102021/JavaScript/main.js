/*Programación reactiva: Modificar el DOM en tiempo real :)*/ 
var dataNum = '';
var screen = '';
var clicks ='0';
var resultado = '';

function nums (dataNum){
    if (screen==0) {
        screen = '';
    }

   screen =screen + dataNum;
    document.getElementById('screen').innerHTML = screen;
};

function borrar (){

    screen    = '0';
    resultado = null;
    document.getElementById('screen').innerHTML = screen;
}

function suma (){
    screen = parseFloat(screen);
    
    if (clicks == 0) {
        resultado = screen;
        console.log(screen);
    } else {
        resultado = resultado + screen;
        console.log(resultado);
    }

    screen    = '0';
    document.getElementById('screen').innerHTML = screen;
    document.getElementById('screen').innerHTML = resultado;
    clicks++;
    console.log(clicks);
}

function resta (){
    screen    = '0';
    document.getElementById('screen').innerHTML = screen;
    screen = parseFloat(screen);
    
    if (clicks == 0) {
        resultado = screen;
        console.log(screen);
    } else {
        resultado = resultado - screen;
        console.log(resultado);
    }

    screen    = '0';
    document.getElementById('screen').innerHTML = screen;
    document.getElementById('screen').innerHTML = resultado;
    clicks++;
    console.log(clicks);
}

function multiplicacion (){
    screen = parseFloat(screen);
    
    if (clicks == 0) {
        resultado = screen;
        console.log(screen);
    } else {
        resultado = resultado * screen;
        console.log(resultado);
    }

    screen    = '0';
    document.getElementById('screen').innerHTML = screen;
    document.getElementById('screen').innerHTML = resultado;
    clicks++;
    console.log(clicks);
}

function division (){
    screen = parseFloat(screen);
    
    if (clicks == 0) {
        resultado = screen;
        console.log(screen);
    } else {
        resultado = resultado / screen;
        console.log(resultado);
    }

    screen    = '0';
    document.getElementById('screen').innerHTML = screen;
    document.getElementById('screen').innerHTML = resultado;
    clicks++;
    console.log(clicks);
}