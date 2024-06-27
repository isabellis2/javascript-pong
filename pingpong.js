//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);

}

function draw(){
        //aqui vou por a cor da "mesa"
        //A cor da mesa é em rbg
        background(25,25,112);
        
        //chamando a função
        criaBolinha( xBolinha, yBolinha, tamBolinha);
}

    //função bolinha
    function criarBolinha(xBolinha,yBolinha,tamBolinha){
        circle (xBolinha,yBolinha,tambolinha);
    }