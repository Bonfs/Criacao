//Autor: Lucas Paulino 
//Modificado por Matheus Bonfim
var imagens = [], urso, urso_sombra, boneca, boneca_sombra, carro, carro_sombra, containerE;
var sombras = [];
function jogoDasFormas()
{
    containerE = new createjs.Container();
    var fundo = new createjs.Bitmap(preload.getResult("encaixe_fundo"));
    
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
    boneca.on("click", arrastar);
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
    
    containerE.addChild(fundo);
    containerE.addChild(retrato());
    containerE.addChild(urso);
    containerE.addChild(carro);
    containerE.addChild(boneca);
    containerE.addChild(urso_sombra);
    
    return containerE;
}


function arrastar(evt)
{
        var o = evt.target;    
        //console.log(evt.type);
        if(evt.type == "click")
        {
            
            o.parent.addChild(o);
            o.offset = {x: o.x - evt.stageX, y: o.y - evt.stageY};
        }
        else if(evt.type == "pressmove")
        {
            if(!evt.target.colou)
            {
                o.x = evt.stageX + o.offset.x;
                o.y = evt.stageY + o.offset.y;
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
                //imagens.splice(0,1);
                sombras.splice(0,1);
                //forma2.x = can.width/2 - forma2.getBounds().width*1.5;
                //forma2.y = can.height/2 - forma2.getBounds().height;
                //containerE.addChild(imagens[0]);
                containerE.addChild(sombras[0]);
                stage.update();
		  }
        }
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

function timer_jogoDasFormas()
{
    evt.target.x = sombras[0].x;
    evt.target.y = sombras[0].y;
    evt.target.colou = true;
    containerE.removeChild(evt.target);
    containerE.removeChild(sombras[0]);
    imagens.splice(0,1);
    sombras.splice(0,1);
    containerE.addChild(imagens[0]);
    containerE.addChild(sombras[0]);
    stage.update();
}