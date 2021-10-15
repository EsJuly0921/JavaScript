/*Programación reactiva: Modificar el DOM en tiempo real :)*/ 
var dataNum = '';
var resultado = '';

function nums (dataNum){
    if (resultado==0) {
        resultado = '';
    }

    resultado = resultado + dataNum;
    document.getElementById('screen').innerHTML = resultado;
};

function borrar (){

    resultado = '0';
    document.getElementById('screen').innerHTML = resultado;
}