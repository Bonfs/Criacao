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
            {id: "sala1_bola", src: "images/bolamove2.png"},
            {id: "sala1", src: "images/sala1.png"},
            {id: "retrato", src: "images/retrato.png"},
            {id: "memoria", src: "images/minijo-memoria.png"},
            {id: "memoria_btn", src: "images/memoria_btnVolta.png"},
            {id: "encaixe_fundo", src: "images/mini-jogo-bau.png"},
            {id: "encaixe_urso", src: "images/ursinho.png"},
            {id: "encaixe_urso_sombra", src: "images/ursinho sombra.png"},
            {id: "encaixe_boneca", src: "images/boneca.png"},
            {id: "encaixe_boneca_sombra", src: "images/boneca sombra.png"},
            {id: "encaixe_carro", src: "images/carro.png"},
            {id: "encaixe_carro_sombra", src: "images/carro sombra.png"},
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
    //createjs.Sound.play("sound_telaInicial",{loop:-1, volume: 0.6});
    
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
    bau.on("click", evt_chamaJogoDasFormas);
    bau.scaleX = 0.8;
    bau.scaleY = 0.8;
    bau.x = 430;
    bau.y = 425;
    var jogo = new createjs.Bitmap(preload.getResult("sala1_jogoMemoria"));
    jogo.on("click", evt_chamaJogoDaMemoria);
    jogo.x = 940;
    jogo.y = 530;
    
    var bola = {
        "framerate":24,
        "images":[preload.getResult("sala1_bola")],
        "frames":[
            [0, 0, 256, 256, 0, -142, -123],
            [256, 0, 256, 256, 0, -142, -123],
            [512, 0, 256, 256, 0, -142, -123],
            [768, 0, 256, 256, 0, -142, -123],
            [1024, 0, 256, 256, 0, -142, -123],
            [1280, 0, 256, 256, 0, -142, -123],
            [1536, 0, 256, 256, 0, -142, -123],
            [1792, 0, 256, 256, 0, -142, -123],
            [2048, 0, 256, 256, 0, -142, -123],
            [2304, 0, 256, 256, 0, -142, -123],
            [2560, 0, 256, 256, 0, -142, -123],
            [2816, 0, 256, 256, 0, -142, -123],
            [3072, 0, 256, 256, 0, -142, -123],
            [3328, 0, 256, 256, 0, -142, -123],
            [3584, 0, 256, 256, 0, -142, -123],
            [0, 256, 256, 256, 0, -142, -123],
            [256, 256, 256, 256, 0, -142, -123],
            [512, 256, 256, 256, 0, -142, -123],
            [768, 256, 256, 256, 0, -142, -123],
            [1024, 256, 256, 256, 0, -142, -123],
            [1280, 256, 256, 256, 0, -142, -123],
            [1536, 256, 256, 256, 0, -142, -123],
            [1792, 256, 256, 256, 0, -142, -123],
            [2048, 256, 256, 256, 0, -142, -123],
            [2304, 256, 256, 256, 0, -142, -123],
            [2560, 256, 256, 256, 0, -142, -123],
            [2816, 256, 256, 256, 0, -142, -123],
            [3072, 256, 256, 256, 0, -142, -123],
            [3328, 256, 256, 256, 0, -142, -123],
            [3584, 256, 256, 256, 0, -142, -123],
            [0, 512, 256, 256, 0, -142, -123],
            [256, 512, 256, 256, 0, -142, -123],
            [512, 512, 256, 256, 0, -142, -123],
            [768, 512, 256, 256, 0, -142, -123],
            [1024, 512, 256, 256, 0, -142, -123]
        ],
        "animations":{
            bolaGirando:[0, 34, "bolaParada"],
            bolaParada:[0]
        }
    }
    var bolaSheet = new createjs.SpriteSheet(bola);
    var bolaAnima = new createjs.Sprite(bolaSheet, "bolaParada");
    bolaAnima.on("click", evt_animaBola);
    bolaAnima.x = 50;
    bolaAnima.y = 500;
    
    container.addChild(background);
    container.addChild(bau);
    container.addChild(jogo);
    container.addChild(bolaAnima);
    container.addChild(retrato());
    return container;
}

function evt_animaBola(evt)
{
    if(evt.type == "click")
        evt.target.gotoAndPlay("bolaGirando");
}

function evt_chamaJogoDaMemoria(evt)
{
    if(evt.type == "click")
        trocaTela(jogoDaMemoria());
}

function evt_chamaJogoDasFormas(evt)
{
    if(evt.type == "click")
        trocaTela(jogoDasFormas());
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
    //background.scaleX = 0.5;
    //background.scaleY = 0.5;
    //background.x = stage.canvas.width/2;
    //background.y = stage.canvas.height/2;
    
    var nomeCrianca = new createjs.Text(nome.toUpperCase(), "40px Arial", "#000");
    nomeCrianca.x = 750;
    nomeCrianca.y = 850;
    
    container.addChild(background);
    container.addChild(nomeCrianca);
    
    return container;
}
//    document.getElementById("centro").appendChild(html);