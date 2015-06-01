var stage, preload, nome;
var msala1 = false;

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
            {id: "btn-play2", src: "images/btn-play2.png"},
            {id: "telaInicialBG", src: "images/telaInicial.jpg"},
            {id: "tela_avatar", src: "images/placeholder_Selecao.png"},
            {id: "sala1_bau", src: "images/bau.png"},
            {id: "sala1_jogoMemoria", src: "images/jogo_da_memoria.png"},
            {id: "sala1_bola", src: "images/bolamove2.png"},
            {id: "sala1_trem", src: "images/trenzinhoanimacao.png"},
            {id: "sala1_boneca", src: "images/bonecaanimacao.png"},
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
            {id: "encaixe_btn", src: "images/encaixe_btnVolta.png"},
            {id: "sound_telaInicial", src: "sons/bg_telaInicial.mp3"},
            {id: "sound_sala1", src: "sons/musica_de_fundo3.mp3"},
            {id: "sound_sala2", src: "sons/musica_de_fundo2.mp3"},
            {id: "sound_sala3", src: "sons/musica_de_fundo1.mp3"},
            {id: "sound_flipCarta", src: "sons/page-flip-01a.mp3"},
            {id: "sound_trem", src: "sons/trenzinhoanimacao.mp3"},
            {id: "sound_memoriaFim", src: "sons/acerto_jogo_da memoria.mp3"},
            {id: "sound_encaixe", src: "sons/acerto_bau.mp3"},
            {id: "sound_bolaQuicando", src: "sons/bolaQuicando.mp3"}
        ]);
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
    var play_avancar = new createjs.Bitmap(preload.getResult("btn-play2"));
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
    html.x = 750;//485; não entendi as coordenadas do input =/
    html.y = 880;
    
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
    
    if(!msala1)
    {
        createjs.Sound.stop();
        createjs.Sound.play("sound_sala1",{loop:-1, volume: 0.6});
        msala1 = true;
    }
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
            [0, 0, 128, 128, 0, -241, -140],
            [128, 0, 128, 128, 0, -241, -140],
            [256, 0, 128, 128, 0, -241, -140],
            [384, 0, 128, 128, 0, -241, -140],
            [512, 0, 128, 128, 0, -241, -140],
            [640, 0, 128, 128, 0, -241, -140],
            [768, 0, 128, 128, 0, -241, -140],
            [896, 0, 128, 128, 0, -241, -140],
            [1024, 0, 128, 128, 0, -241, -140],
            [1152, 0, 128, 128, 0, -241, -140],
            [1280, 0, 128, 128, 0, -241, -140],
            [1408, 0, 128, 128, 0, -241, -140],
            [1536, 0, 128, 128, 0, -241, -140],
            [1664, 0, 128, 128, 0, -241, -140],
            [1792, 0, 128, 128, 0, -241, -140],
            [0, 128, 128, 128, 0, -241, -140],
            [128, 128, 128, 128, 0, -241, -140],
            [256, 128, 128, 128, 0, -241, -140],
            [384, 128, 128, 128, 0, -241, -140],
            [512, 128, 128, 128, 0, -241, -140]
        ],
        "animations":{
            movendo:[0, 19, "parado"],
            parado:[0]
        }
    }
    var bolaSheet = new createjs.SpriteSheet(bola);
    var bolaAnima = new createjs.Sprite(bolaSheet, "parado");
    bolaAnima.on("click", evt_animaBola);
    bolaAnima.x = 50;
    bolaAnima.y = 500;
    
    var tremData = {
        "framerate":30,
        "images":[preload.getResult("sala1_trem")],
        "frames":[
            [0, 0, 128, 64, 0, -176, -393],
            [128, 0, 128, 64, 0, -176, -393],
            [256, 0, 128, 64, 0, -176, -393],
            [384, 0, 128, 64, 0, -176, -393],
            [512, 0, 128, 64, 0, -176, -393],
            [640, 0, 128, 64, 0, -176, -393],
            [768, 0, 128, 64, 0, -176, -393],
            [896, 0, 128, 64, 0, -176, -393],
            [1024, 0, 128, 64, 0, -176, -393],
            [1152, 0, 128, 64, 0, -176, -393],
            [1280, 0, 128, 64, 0, -176, -393],
            [1408, 0, 128, 64, 0, -176, -393],
            [1536, 0, 128, 64, 0, -176, -393],
            [1664, 0, 128, 64, 0, -176, -393],
            [1792, 0, 128, 64, 0, -176, -393],
            [0, 64, 128, 64, 0, -176, -393],
            [128, 64, 128, 64, 0, -176, -393],
            [256, 64, 128, 64, 0, -176, -393],
            [384, 64, 128, 64, 0, -176, -393],
            [512, 64, 128, 64, 0, -176, -393],
            [640, 64, 128, 64, 0, -176, -393],
            [768, 64, 128, 64, 0, -176, -393],
            [896, 64, 128, 64, 0, -176, -393],
            [1024, 64, 128, 64, 0, -176, -393],
            [1152, 64, 128, 64, 0, -176, -393],
            [1280, 64, 128, 64, 0, -176, -393],
            [1408, 64, 128, 64, 0, -176, -393],
            [1536, 64, 128, 64, 0, -176, -393],
            [1664, 64, 128, 64, 0, -176, -393],
            [1792, 64, 128, 64, 0, -176, -393],
            [0, 128, 128, 64, 0, -176, -393],
            [128, 128, 128, 64, 0, -176, -393],
            [256, 128, 128, 64, 0, -176, -393],
            [384, 128, 128, 64, 0, -176, -393],
            [512, 128, 128, 64, 0, -176, -393]
        ],
        "animations":{
            parado: [0],
            movendo: [0, 34, "parado"]
         }
        }
    var tremFrames = new createjs.SpriteSheet(tremData);
    var tremAnima = new createjs.Sprite(tremFrames, "parado");
    tremAnima.x = -30;
    tremAnima.y = 10;
    tremAnima.on("click", evt_animaTrem);
    
    
    var bonecaData = {
            "framerate":24,
            "images":[preload.getResult("sala1_boneca")],
            "frames":[
            [0, 0, 64, 64, 0, -398, -363],
            [64, 0, 64, 64, 0, -398, -363],
            [128, 0, 64, 64, 0, -398, -363],
            [192, 0, 64, 64, 0, -398, -363],
            [256, 0, 64, 64, 0, -398, -363],
            [320, 0, 64, 64, 0, -398, -363],
            [384, 0, 64, 64, 0, -398, -363],
            [448, 0, 64, 64, 0, -398, -363],
            [512, 0, 64, 64, 0, -398, -363],
            [576, 0, 64, 64, 0, -398, -363],
            [640, 0, 64, 64, 0, -398, -363],
            [704, 0, 64, 64, 0, -398, -363],
            [768, 0, 64, 64, 0, -398, -363],
            [832, 0, 64, 64, 0, -398, -363],
            [896, 0, 64, 64, 0, -398, -363],
            [0, 64, 64, 64, 0, -398, -363],
            [64, 64, 64, 64, 0, -398, -363],
            [128, 64, 64, 64, 0, -398, -363],
            [192, 64, 64, 64, 0, -398, -363],
            [256, 64, 64, 64, 0, -398, -363],
            [320, 64, 64, 64, 0, -398, -363],
            [384, 64, 64, 64, 0, -398, -363],
            [448, 64, 64, 64, 0, -398, -363],
            [512, 64, 64, 64, 0, -398, -363],
            [576, 64, 64, 64, 0, -398, -363],
            [640, 64, 64, 64, 0, -398, -363],
            [704, 64, 64, 64, 0, -398, -363],
            [768, 64, 64, 64, 0, -398, -363],
            [832, 64, 64, 64, 0, -398, -363],
            [896, 64, 64, 64, 0, -398, -363],
            [0, 128, 64, 64, 0, -398, -363],
            [64, 128, 64, 64, 0, -398, -363],
            [128, 128, 64, 64, 0, -398, -363],
            [192, 128, 64, 64, 0, -398, -363],
            [256, 128, 64, 64, 0, -398, -363],
            [320, 128, 64, 64, 0, -398, -363],
            [384, 128, 64, 64, 0, -398, -363],
            [448, 128, 64, 64, 0, -398, -363],
            [512, 128, 64, 64, 0, -398, -363],
            [576, 128, 64, 64, 0, -398, -363]
            ],
            "animations":{
                parado: [0],
                movendo: [0, 39, "parado"]
            }
        }
    var bonecaFrames = new createjs.SpriteSheet(bonecaData);
    var bonecaAnima = new createjs.Sprite(bonecaFrames, "parado");
    bonecaAnima.on("click", evt_animaBoneca);
    
    container.addChild(background);
    container.addChild(bau);
    container.addChild(jogo);
    container.addChild(bolaAnima);
    container.addChild(bonecaAnima);
    container.addChild(tremAnima);
    container.addChild(retrato());
    return container;
}

function evt_animaBola(evt)
{
    if(evt.type == "click")//sound_bolaQuicando
    {
        evt.target.gotoAndPlay("movendo");
        createjs.Sound.play("sound_bolaQuicando");
    }
}

function evt_animaBoneca(evt)
{
    if(evt.type == "click")
        evt.target.gotoAndPlay("movendo");
}

function evt_animaTrem(evt)
{
    if(evt.type == "click")
    {
        evt.target.gotoAndPlay("movendo");
        createjs.Sound.play("sound_trem");
    }
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
    nomeCrianca.x = 700;
    nomeCrianca.y = 855;
    
    container.addChild(background);
    container.addChild(nomeCrianca);
    
    return container;
}
//    document.getElementById("centro").appendChild(html);