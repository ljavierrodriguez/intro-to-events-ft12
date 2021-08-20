window.onload = function(){
    //alert("Pagina totalmente cargada!");

    let box = document.querySelectorAll('.box');

    // nombre del evento y nombre funcion a ejecutar
    box[0].addEventListener('click', function(evento){
        saludo(evento);
        addBox();
    });

    box[0].addEventListener('mouseout', function(e){
        e.target.style.backgroundColor = '#ccc';
    });
    // nombre del evento y nombre funcion a ejecutar
    /* box.addEventListener('click', saludo); */ 
    
}


function saludo(evento){
    //console.log(evento);
    //console.log(evento.target);
    let box = evento.target;
    box.style.backgroundColor = 'red';
    //alert("Hola desde el evento click");
}

function addBox(){
    let divBox = document.createElement('div');
    divBox.classList.add('box');
    divBox.addEventListener('click', function(evento){
        saludo(evento);
        addBox();
    })
    divBox.addEventListener('mouseout', function(e){
        e.target.style.backgroundColor = '#ccc';
    });
    document.body.appendChild(divBox); 
}
