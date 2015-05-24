var container;
var cartas_viradas = 0;
var memoria = [];

var img_enderecos_simbolos, img_enderecos_objetos;

function jogoDaMemoria()
{
    var flipSound = "flipSound";
    
     img_enderecos_simbolos = [preload.getResult("carta_metal"), 
                               preload.getResult("carta_papel"), 
                               preload.getResult("carta_plastico"), 
                               preload.getResult("carta_vidro"),
                               preload.getResult("carta_organico")
                              ];       
     
    img_enderecos_objetos  = [preload.getResult("carta_metal_objeto"),
                              preload.getResult("carta_papel_objeto"),
                              preload.getResult("carta_plastico_objeto"),
                              preload.getResult("carta_vidro_objeto"),
                              preload.getResult("carta_organico_objeto")
                             ];


    //simbolos
    var carta1, carta2, carta3, carta4, carta5;
    var carta_simbolos = [carta1, carta2, carta3, carta4, carta5];
    var carta_objetos =  [carta2, carta2, carta3, carta4, carta5];
    
    
    container = new createjs.Container();
    container.addChild(retrato());
    shuffle(carta_simbolos, carta_objetos);
    
    return container;
}


function shuffle(cs, co)
{
     //Um array para as cartas simbolos e objetos
    var pos = [[0, 25], [250, 25], [500, 25], [750, 25], [1000, 25],
               [0, 350], [250, 350], [500, 350], [750, 350], [1000, 350]];
    var i = 0, j, card, cardE;
    for(i; i < cs.length; i++)
    {
        var data = {
                     images: [img_enderecos_objetos[i]],
                     frames: [
				                // x, y, width, height, imageIndex*, regX*, regY*
				                [2, 48, 95, 166],
				                [105, 44, 93, 173],
				                [218, 39, 63, 178],
				                [338, 39, 30, 185],
				                [437, 39, 24, 185],
				                [520, 43, 62, 178],
				                [604, 44, 93, 173],
			                 	[702, 48, 95, 166]
			                 	],
                     framerate: 24,
                     animations: {
			                         back:[0],	
		                             flip:[0, 7, "front"],
			                         flipvolta:{
				                     frames: [7, 6, 5, 4, 3, 2, 1, 0],
				                     next: "back"
			                          },
			                         front:[7]
		    }                                        
        };
        
        var data2 = {
                     images: [img_enderecos_simbolos[i]],
                     frames: [
				                // x, y, width, height, imageIndex*, regX*, regY*
				                [2, 48, 95, 166],
				                [105, 44, 93, 173],
				                [218, 39, 63, 178],
				                [338, 39, 30, 185],
				                [437, 39, 24, 185],
				                [520, 43, 62, 178],
				                [604, 44, 93, 173],
			                 	[702, 48, 95, 166]
			                 	],
                     framerate: 24,
                     animations: {
			                         back:[0],	
		                             flip:[0, 7, "front"],
			                         flipvolta:{
				                     frames: [7, 6, 5, 4, 3, 2, 1, 0],
				                     next: "back"
			                          },
			                         front:[7]
		    }                                        
        };
           
            j = Math.floor(Math.random() * pos.length);
            card = new Carta();
            card.setXY(pos[j]);
            card.setCarta(data);
            card.setCartaAnimation();
            card.setValor(i);
            pos.splice(j, 1);
            
            j = Math.floor(Math.random() * pos.length);
            cardE = new Carta();
            cardE.setXY(pos[j]);
            cardE.setCarta(data2);
            cardE.setCartaAnimation();
            cardE.setValor(i);
            pos.splice(j, 1);
            
            
            container.addChild(card._carta_animation);
            container.addChild(cardE._carta_animation);
            card._carta_animation.on("click", atualizaCartas);
            cardE._carta_animation.on("click", atualizaCartas);        
        
    }
}

function atualizaCartas(evt)
{
    
    if(evt.type == "click" && !evt.target.pai._marcada && cartas_viradas<2)
    {
        if(cartas_viradas == 0)
        {
            cartas_viradas++;
            memoria.push(evt.target.pai);            
            evt.target.pai.setMarcada(true);
            evt.target.pai.setAnimation("flip");
            //playSoundCarta();
        }
        else if(cartas_viradas == 1)
        {
            cartas_viradas++;
            memoria.push(evt.target.pai);            
            evt.target.pai.setMarcada(true);
            evt.target.pai.setAnimation("flip");
            //playSoundCarta();
            if(memoria[0]._valor == memoria[1]._valor)
            {
                cartas_viradas = 0;
                memoria = [];
            }
            else if (memoria[0]._valor != memoria[1]._valor)
            {
                setTimeout(timer_JogoDaMemoria, 700);
            }
        }
    }
    stage.update();
        
}

function timer_JogoDaMemoria() 
{
    memoria[0].setMarcada(false);
    memoria[1].setMarcada(false);
    memoria[0].setAnimation();
    memoria[1].setAnimation();
    cartas_viradas = 0;
    memoria = [];     
}

//function playSoundCarta()
//{
//    console.loog("teste");
//    createjs.Sound.play(flipSound);
//}
