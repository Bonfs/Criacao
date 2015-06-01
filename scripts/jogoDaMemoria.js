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
    var fundo = new createjs.Bitmap(preload.getResult("memoria"));
    var btn = new createjs.Bitmap(preload.getResult("memoria_btn"));
    btn.on("click", evt_voltaSala1);
    container.addChild(fundo);
    container.addChild(btn);
    container.addChild(retrato());
    shuffle(carta_simbolos, carta_objetos);
    
    return container;
}

function evt_voltaSala1(evt)
{
    cartas_viradas = 0;
    if(evt.type == "click")
        trocaTela(sala1());
}

function shuffle(cs, co)
{
     //Um array para as cartas simbolos e objetos
    var pos = [[50.8, 25], [296.6, 25], [542.4, 25], [788.2, 25], [1034, 25],
               [50.8, 350],[296.6, 350], [542.4, 350], [788.2, 350], [1034, 350]];
    var i = 0, j, card, cardE;
    for(i; i < cs.length; i++)
    {
        var data = {
                     images: [img_enderecos_objetos[i]],
                     frames: [
				                // x, y, width, height, imageIndex*, regX*, regY*
				                [67, 45, 150, 210],
				                [234, 45, 150, 210],
				                [400, 45, 104, 210],
				                [535, 45, 46, 210],
				                [623, 45, 46, 210],
				                [698, 45, 104, 210],
				                [820, 45, 150, 210],
			                 	[988, 40, 150, 210]
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
				                [67, 45, 150, 210],
				                [234, 45, 150, 210],
				                [400, 45, 104, 210],
				                [535, 45, 46, 210],
				                [623, 45, 46, 210],
				                [698, 45, 104, 210],
				                [820, 45, 150, 210],
			                 	[988, 40, 150, 210]
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
            playSoundCarta();
        }
        else if(cartas_viradas == 1)
        {
            cartas_viradas++;
            memoria.push(evt.target.pai);            
            evt.target.pai.setMarcada(true);
            evt.target.pai.setAnimation("flip");
            playSoundCarta();
            if(memoria[0]._valor == memoria[1]._valor)
            {
                cartas_viradas = 0;
                memoria = [];
                createjs.Sound.play("sound_memoriaFim",{volume: 0.5});
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

function playSoundCarta()
{
    createjs.Sound.play("sound_flipCarta",{volume:0.3});
}
