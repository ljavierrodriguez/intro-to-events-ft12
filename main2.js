window.onload = function(){
    let box = document.querySelector('#box');
    let texto = document.querySelector('#texto');

    texto.addEventListener('keyup', function(e){ // keyup, keypress, keydown
        //console.log(e.target.value);
        box.innerHTML = e.target.value;
    })
    /* texto.addEventListener('change', function(e){
        console.log(e.target.value);
    })

    texto.addEventListener('focus', function(e){
        console.log(e.target);
    })
    texto.addEventListener('blur', function(e){
        console.log(e.target);
    }) */

    let myForm = document.querySelector('#myForm');
    myForm.addEventListener('submit', function(e){
        e.preventDefault();

        console.log(e)
        console.log(e.target.email);

        //e.target.submit(); // funcion para enviar el formulario
    });

}