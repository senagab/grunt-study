document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('form-sorteador').addEventListener('submit', function (evento){
        evento.preventDefault();
        let numeromax = document.getElementById('numero-maximo').value;
        numeromax = parseInt(numeromax);

        let numerorandom = Math.random() * numeromax;
        numerorandom = Math.floor(numerorandom + 1);
        // alert(numerorandom);

        document.getElementById('resultado-valor').innerText = numerorandom;
        document.querySelector('.resultado').style.display = 'block';
    })
})