class Parede {
    constructor(posicaoX, posicaoY, largura, altura){
        var config = {
            isStatic: true
        }
        this.corpo = Bodies.rectangle(posicaoX, posicaoY, largura, altura, config);
        this.largura = largura;
        this.altura = altura;
        World.add(world, this.corpo);
    }

    desenhar(){
        var pos = this.corpo.position;

        push();
        //rectMode(CENTER);        
        fill("Aqua");
        stroke("LawnGreen");
        rect(pos.x, pos.y, this.largura, this.altura);
        pop();
    }

}