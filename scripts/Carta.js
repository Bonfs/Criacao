function Carta()
{}

//Atributos
Carta.prototype._marcada = false;        //verifica se a carta foi virad;
Carta.prototype._carta = null;            //spritesheet
Carta.prototype._carta_animation = null;  //sprite[back, front, flip, flipvolta]
Carta.prototype._valor = null;            //valor da carta para comparação   
Carta.prototype.x = null;
Carta.prototype.y = null;


//Métodos(não tem 'GET')
Carta.prototype.setXY = function(array)
{
    if(typeof array == "object")
    {
        this.x = array[0];
        this.y = array[1];
    }
    else
        return undefined;
}

Carta.prototype.setValor = function(val)
{
    this._valor = val;
}

Carta.prototype.setMarcada = function(m)
{
    this._marcada = m;
}

Carta.prototype.setCarta = function(card)
{
    //card sera um objeto com o sprite sheet e todas as informações da animação
    this._carta = new createjs.SpriteSheet(card);
}

Carta.prototype.setCartaAnimation = function()
{
    //animação default da carta será back('costas' da carta)
    if(this._carta != null)
    {
        this._carta_animation = new createjs.Sprite(this._carta, "back");
        this._carta_animation.scaleX = 1.3;
        this._carta_animation.scaleY = 1.3;
        this._carta_animation.pai = this;
        this._carta_animation.x = this.x;
        this._carta_animation.y = this.y;
    }
    else
        return null;    
}

Carta.prototype.setAnimation = function()
{
        if(this._marcada)  
            this._carta_animation.gotoAndPlay("flip");
        else
            this._carta_animation.gotoAndPlay("flipvolta");
}