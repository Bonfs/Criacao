//Classe responsável pelas cartas do jogo da memória
function Carta()
{}

//Atributos
Carta.prototype._marcada = false;           //posição atual da carta, não-virada = false | virada = true
Carta.prototype._carta = null;              //spritesheet
Carta.prototype._carta_animation = null;    //sprite[back, front, flip, flipvolta]
Carta.prototype._valor = null;              //valor da carta para comparação   
Carta.prototype.x = null;                   //posição x de cada carta
Carta.prototype.y = null;                   //posição y de cada carta
Carta.prototype.som = null;                 //som que cada carta faz ao ser virada

//defini o x e o y da carta no stage
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
//defini o valor da carta
Carta.prototype.setValor = function(val)
{
    this._valor = val;
}
//define se a carta foi virada ou não
Carta.prototype.setMarcada = function(m)
{
    this._marcada = m;
}

Carta.prototype.setCarta = function(card)
{
    //card sera um objeto com o sprite sheet e todas as informações da animação
    this._carta = new createjs.SpriteSheet(card);
}
//prepara a carta para ser adicionada ao palco
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
//troca a animação da carta
Carta.prototype.setAnimation = function()
{
        if(this._marcada)  
            this._carta_animation.gotoAndPlay("flip");
        else
            this._carta_animation.gotoAndPlay("flipvolta");
}