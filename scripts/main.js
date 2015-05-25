var stage, preload, nome;

//Containers que serão as telas da plataforma
//var telaInicial;

//Carrega TODOS os arquivos do projeto e chama a função 'init()'
function carregarArquivos()
{
    preload = new createjs.LoadQueue();
    preload.installPlugin(createjs.Sound);
    createjs.Sound.alternateExtensions = ["mp3"];
    //preload.installPlugin(createjs.Sound);
    preload.on("complete", init, this);
    preload.loadManifest([
            {id: "carta_metal", src: "images/carta_metal.png"},
            {id: "carta_organico", src: "images/carta_organico.png"},
            {id: "carta_papel", src: "images/carta_papel.png"},
            {id: "carta_plastico", src: "images/carta_plastico.png"},
            {id: "carta_vidro", src: "images/carta_vidro.png"},
            {id: "carta_metal_objeto", src: "images/carta_metal_objeto.png"},
            {id: "carta_organico_objeto", src: "images/carta_organico_objeto.png"},
            {id: "carta_papel_objeto", src: "images/carta_papel_objeto.png"},
            {id: "carta_plastico_objeto", src: "images/carta_plastico_objeto.png"},
            {id: "carta_vidro_objeto", src: "images/carta_vidro_objeto.png"},
            {id: "btn-play", src: "images/btn-play.png"},
            {id: "telaInicialBG", src: "images/telaInicial.jpg"},
            {id: "tela_avatar", src: "images/placeholder_Selecao.png"},
            {id: "sala1_bau", src: "images/bau.png"},
            {id: "sala1_jogoMemoria", src: "images/jogo_da_memoria.png"},
            {id: "sala1", src: "images/sala1.png"},
            {id: "retrato", src: "images/retrato.png"},
            {id: "memoria", src: "images/minijo-memoria.png"},
            {id: "memoria_btn", src: "images/memoria_btnVolta.png"},
            {id: "sound_telaInicial", src: "sons/bg_telaInicial.mp3"}
        ]);
     //createjs.Sound.registerSound(preload.getResult("sound_telaInicial"));
}

function init()
{
    
    stage = new createjs.Stage("canvas");
    stage.addChild(tela_inicial());
    stage.update();
    createjs.Ticker.addEventListener("tick", tick);
}


function tick() {stage.update();}

//Tela inical de play------------------*
function tela_inicial()
{
    var container = new createjs.Container();
    createjs.Sound.play("sound_telaInicial",{loop:-1, volume: 0.6});
    
    var background = new createjs.Bitmap(preload.getResult("telaInicialBG"));
    var play_inicial = new createjs.Bitmap(preload.getResult("btn-play"));
    play_inicial.on("click", evtTela_inicial);
    play_inicial.x = 523;
    play_inicial.y = 486;
    
    container.addChild(background);
    container.addChild(play_inicial);
    
    return container;
}

function evtTela_inicial(evt)
{
    if(evt.type = "click")
        trocaTela(telaAvatar());
}
//------------------------------------*

//Tela de criação do personagem(avatar)
function telaAvatar()
{
    var container = new createjs.Container();
    
    var background = new createjs.Bitmap(preload.getResult("tela_avatar"));
    var play_avancar = new createjs.Bitmap(preload.getResult("btn-play"));
    play_avancar.on("click", evt_telaAvatar);
    play_avancar.x = 950;
    play_avancar.y = 770;
    
    var input = document.createElement('input');
    input.id = 'input';
    input.style.height = '20px';
    input.style.width = '200px';
    //input.style.position = "absolute";
    input.style.top = 0;
    input.style.left = 0;
    document.getElementById("centro").appendChild(input);
    var html = new createjs.DOMElement(input);
    html.x = 800;//485; não entendi as coordenadas do input =/
    html.y = 840;
    
    container.addChild(background);
    container.addChild(play_avancar);
    container.addChild(html);
    
    return container;
}

function evt_telaAvatar(evt)
{
    if(document.getElementById("input").value != "" && evt.type == "click")
    {
        nome = document.getElementById("input").value
        document.getElementById("input").style.visibility = "hidden";
        trocaTela(sala1());
    }
}

//------------------------------------*



//Tela da primeira área(sala1)
function sala1()
{
    var container = new createjs.Container();
    var background = new createjs.Bitmap(preload.getResult("sala1"));
    var bau = new createjs.Bitmap(preload.getResult("sala1_bau"));
    bau.scaleX = 0.8;
    bau.scaleY = 0.8;
    bau.x = 430;
    bau.y = 425;
    var jogo = new createjs.Bitmap(preload.getResult("sala1_jogoMemoria"));
    jogo.on("click", evt_chamaJogoDaMemoria);
    jogo.x = 940;
    jogo.y = 530;
    
    container.addChild(background);
    container.addChild(bau);
    container.addChild(jogo);
    container.addChild(retrato());
    return container;
}

function evt_chamaJogoDaMemoria(evt)
{
    if(evt.type == "click")
        trocaTela(jogoDaMemoria());
}

//------------------------------------*

function trocaTela(cont)
{
    stage.removeAllChildren()
    stage.addChild(cont);
}

function retrato()
{
    var container = new createjs.Container();
    var background = new createjs.Bitmap(preload.getResult("retrato"));
    
    var nomeCrianca = new createjs.Text(nome.toUpperCase(), "40px Arial", "#000");
    nomeCrianca.x = 750;
    nomeCrianca.y = 850;
    
    container.addChild(background);
    container.addChild(nomeCrianca);
    
    return container;
}
//    document.getElementById("centro").appendChild(html);