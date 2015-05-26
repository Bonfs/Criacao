//Autor: Lucas Paulino 
//Modificado por Matheus Bonfim
var imagens = [];
var sombrans = [];
function jogoDasFormas()
{
    var container = new createjs.Container();
    var fundo = new createjs.Bitmap(preload.getResult("encaixe_fundo"));
    var urso = new createjs.Bitmap(preload.getResult("encaixe_urso"));
    urso.name = "urso";
    urso.colou = false;
    urso.x = 600;
    urso.y = 550;
    
    container.addChild(fundo);
    container.addChild(urso);
    
    return container;
}


function arrastar(evt){
        var o = evt.target;    
        if(evt.type == "mousedown")
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
            if(evt.target.bitmapCollide(forma))
            {

                evt.target.x = forma.x;
                evt.target.y = forma.y;
                evt.target.colou = true;
                container.removeChild(objeto);
                container.removeChild(forma);
                forma2.x = can.width/2 - forma2.getBounds().width*1.5;
                forma2.y = can.height/2 - forma2.getBounds().height;
                con.addChild(forma2);
		  }
        }
	}
		