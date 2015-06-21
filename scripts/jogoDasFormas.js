//Autor: Lucas Paulino 
//Modificado por Matheus Bonfim
var imagens = [], urso, urso_sombra, boneca, boneca_sombra, carro, carro_sombra, containerE, tutoVideoBau;
var animacoes = [];
var sombras = [];
var executouBau = false;
function jogoDasFormas()
{
    sombras = [];
    containerE = new createjs.Container();
    var fundo = new createjs.Bitmap(preload.getResult("encaixe_fundo"));
    
    var btn = new createjs.Bitmap(preload.getResult("memoria_btn"));
    btn.on("click", evt_voltaSala1);
    
    boneca_sombra = new createjs.Bitmap(preload.getResult("encaixe_boneca_sombra"));
    boneca_sombra.scaleX = 0.6;
    boneca_sombra.scaleY = 0.6;
    boneca_sombra.name = "boneca";
    boneca_sombra.x = 350;
    boneca_sombra.y = 270;
    
    carro_sombra = new createjs.Bitmap(preload.getResult("encaixe_carro_sombra"));
    carro_sombra.scaleX = 0.7;
    carro_sombra.scaleY = 0.7;
    carro_sombra.name = "carro";
    carro_sombra.x = 350;
    carro_sombra.y = 320;
    
    urso_sombra = new createjs.Bitmap(preload.getResult("encaixe_urso_sombra"));
    urso_sombra.scaleX = 0.6;
    urso_sombra.scaleY = 0.6;
    urso_sombra.name = "urso";
    urso_sombra.x = 350;
    urso_sombra.y = 270;
    
    urso = new createjs.Bitmap(preload.getResult("encaixe_urso"));
    urso.scaleX = 0.6;
    urso.scaleY = 0.6;
    //urso.offset = {x: -100, y: -100};
    urso.on("click", arrastar);
    urso.on("pressmove", arrastar);
    urso.on("pressup", arrastar);
    urso.name = "urso";
    urso.colou = false;
    urso.x = 600;
    urso.y = 550;
    urso.bitmapCollide = bitmapCollide;
    
    carro = new createjs.Bitmap(preload.getResult("encaixe_carro"));
    carro.scaleX = 0.7;
    carro.scaleY = 0.7;
    //carro.offset = {x: -100, y: -100};
    carro.on("click", arrastar);
    carro.on("pressmove", arrastar);
    carro.on("pressup", arrastar);
    carro.name = "carro";
    carro.colou = false;
    carro.x = 800;
    carro.y = 430;
    carro.bitmapCollide = bitmapCollide;
    
    boneca = new createjs.Bitmap(preload.getResult("encaixe_boneca"));
    boneca.scaleX = 0.6;
    boneca.scaleY = 0.6;
    //boneca.offset = {};
    //boneca.offset.x = -100;
   // boneca.offset.y = -100;
   // boneca.on("click", arrastar);
    boneca.on("pressmove", arrastar);
    boneca.on("pressup", arrastar);
    boneca.name = "boneca";
    boneca.colou = false;
    boneca.x = 350;
    boneca.y = 600;
    boneca.bitmapCollide = bitmapCollide;
    
    imagens.push(urso);
    imagens.push(carro);
    imagens.push(boneca);
    
    sombras.push(urso_sombra);
    sombras.push(carro_sombra);
    sombras.push(boneca_sombra);
    
    var dadosUrso = {
         "framerate": 2,
         "images": [
                    preload.getResult("encaixe_urso_anima1"),
                    preload.getResult("encaixe_urso_anima2"),
                    preload.getResult("encaixe_urso_anima3"),
                    preload.getResult("encaixe_urso_anima4")],
         "frames":[
                    [146, 175, 593, 576, 0],
                    [146, 175, 593, 576, 1],
                    [146, 175, 593, 576, 2],
                    [146, 175, 593, 576, 3]],
        "animations":{
                    guardar: [0, 3, false]
                    
        }
    };
    var ursoSprite = new createjs.SpriteSheet(dadosUrso);
    animacoes[0] = new createjs.Sprite(ursoSprite, "guardar"); 
    animacoes[0].x = 147;
    animacoes[0].y = 175;
    
    var dadosCarro = {
        "framerate": 2,
         "images": [
                    preload.getResult("encaixe_carro_anima1"),
                    preload.getResult("encaixe_carro_anima2"),
                    preload.getResult("encaixe_carro_anima3"),
                    preload.getResult("encaixe_carro_anima4")],
         "frames":[
                    [146, 175, 593, 576, 0],
                    [146, 175, 593, 576, 1],
                    [146, 175, 593, 576, 2],
                    [146, 175, 593, 576, 3]],
        "animations":{
                    guardar: [0, 3, false]
                    
        }
    }
    var carroSprite = new createjs.SpriteSheet(dadosCarro);
    animacoes[1] = new createjs.Sprite(carroSprite, "guardar");
    animacoes[1].x = 147;
    animacoes[1].y = 175;
    //boneca_anima1
    var dadosBoneca = {
        "framerate": 2,
         "images": [
                    preload.getResult("encaixe_boneca_anima1"),
                    preload.getResult("encaixe_boneca_anima2"),
                    preload.getResult("encaixe_boneca_anima3"),
                    preload.getResult("encaixe_boneca_anima4")],
         "frames":[
                    [146, 175, 593, 576, 0],
                    [146, 175, 593, 576, 1],
                    [146, 175, 593, 576, 2],
                    [146, 175, 593, 576, 3]],
        "animations":{
                    guardar: [0, 3, false]
                    
        }
    }
    var bonecaSprite = new createjs.SpriteSheet(dadosBoneca);
    animacoes[2] = new createjs.Sprite(bonecaSprite, "guardar");
    animacoes[2].x = 147;
    animacoes[2].y = 175;
    
    var video = document.createElement('video');
    video.src = "video/Tutorial-JogodoBau.mp4";
    video.autoplay = !executouBau;
    tutoVideoBau = new createjs.Bitmap(video);
        
    
    containerE.addChild(fundo);
    containerE.addChild(btn);
    //containerE.addChild(retrato());
    containerE.addChild(urso_sombra);
    containerE.addChild(urso);
    containerE.addChild(carro);
    containerE.addChild(boneca);
    if(!executouBau)
    {
        containerE.addChild(tutoVideoBau);
        setTimeout(removeVideoBau, 10000);
    }
    
    
    return containerE;
}


function arrastar(evt)
{
        var o = evt.target;    
        
        if(evt.type == "click")
        {
            evt.target.parent.addChild(evt.target);
            evt.target.offset = {x: evt.target.x - evt.stageX, y: evt.target.y - evt.stageY};
            console.log(evt.offset);
        }
        else if(evt.type == "pressmove")
        {
            if(!evt.target.colou)
            {
                evt.target.x = evt.stageX - 100;
                evt.target.y = evt.stageY  - 90;
                //stage.update();
                update = true;
		  }
        }
        else if(evt.type == "pressup")
        {
            if(evt.target.bitmapCollide(sombras[0]) && evt.target.name == sombras[0].name)
            {

                evt.target.x = sombras[0].x;
                evt.target.y = sombras[0].y;
                evt.target.colou = true;
                containerE.removeChild(evt.target);
                containerE.removeChild(sombras[0]);
                createjs.Sound.play("sound_encaixe",{volume: 0.5});
                //imagens.splice(0,1);
//                sombras.splice(0,1);
//                if(sombras.length != 0)
//                {
//                    containerE.addChildAt(sombras[0], 1);
//                    console.log("teste");
//                }
//                stage.update();
                containerE.addChildAt(animacoes[0], 1)
                setTimeout(timer_jogoDasFormas, 1000, evt.target);
		  }
        }
        //stage.update();
	}

function bitmapCollide(bitma)
{
        var x_min = this.x;
		var x_max = this.x + this.getBounds().width/2;
		var y_min = this.y;
		var y_max = this.y + this.getBounds().height/2;

		var o_x_min = bitma.x;
		var o_x_max = bitma.x + bitma.getBounds().width/2;
		var o_y_min = bitma.y;
		var o_y_max = bitma.y + bitma.getBounds().height/2;

		var bateX = false;

		if((x_min <= o_x_min) && (x_max >= o_x_min))
			bateX = true;

		if((x_min <= o_x_max) && (x_max >= o_x_max))
			bateX = true;

		if(bateX)
		{
			if((y_min <= o_y_min) && (y_max >= o_y_min))
				return true;

			if((y_min <= o_y_max) && (y_max >= o_y_max))
				return true;
		}

		return false;
}

function timer_jogoDasFormas(toy)
{
    //containerE.removeChild(toy);
    //containerE.removeChild(sombras[0]);
    sombras.splice(0,1);
    if(sombras.length != 0)
    {
        containerE.removeChild(animacoes[0]);
        containerE.addChildAt(sombras[0], 1);
       
        //console.log("teste");
    }
    animacoes.splice(0, 1);
    stage.update();
}

function removeVideoBau(params) 
{
    containerE.removeChild(tutoVideoBau);
    executouBau = true;
}