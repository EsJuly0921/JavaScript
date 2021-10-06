/*document.getElementById('app');
document.getElementsByClassName('app')[0]
document.getElementsByTagName('div') [0]*/

var element = document.createElement('h1');
var container = document.getElementsByTagName('div')[1];

element.innerHTML = 'Hola Mundo :3';

/*container.appendChild(element);*/

/*closePopUp(); <--- Para ejecutar la función*/
function closePopUp(){
    document.getElementById('containerPopUp').style.display = 'none';
    console.log('Hola Mundo :3');
}