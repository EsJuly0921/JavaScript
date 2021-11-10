
/*for (let index = 0; index < document.getElementsByTagName('span').length; index++) {
    
    document.getElementsByTagName('span')[index].addEventListener('click', mensaje);
    
}*/


/*function mensaje(){

    /*event.target.style.display = 'none'; <--- Intrucción para desaparecer el elemento seleccionado.*/
    /*event.target.style.backgroundColor = 'darkgrey';
    if (event.target.tagName == 'MAIN') {

        event.target.style.backgroundColor = 'darkgrey';
    }

    this.style.backgroundColor = 'darkgrey';
    console.log(this);
    console.log(event);
}*/

function mensaje(){ 
    /*event.target.children[1].style.backgroundColor = 'darkgrey';*/
    console.log(event);
}

const keyDown = () => {
    console.log(event);
}

let personaje = document.getElementById('char');
document.addEventListener('keydown', keyDown);

