var stage, preload, nome, play_avancar;
var msala1 = false;
var borda = new createjs.Shape();
borda.graphics.beginStroke("#A03B89");//#C1272D #A4A1F0 #A03B89 #ED87D5 #f62a32
borda.graphics.setStrokeStyle(6);
borda.graphics.drawEllipse(0,0,292, 307);
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
            {id: "tela_inicial0", src: "images/telaInicial/tela_inicial_0.jpg"},
            {id: "tela_inicial1", src: "images/telaInicial/tela_inicial_1.jpg"},
            {id: "tela_inicial2", src: "images/telaInicial/tela_inicial_2.jpg"},
            {id: "tela_inicial3", src: "images/telaInicial/tela_inicial_3.jpg"},
            {id: "tela_inicial4", src: "images/telaInicial/tela_inicial_4.jpg"},
            {id: "tela_inicial5", src: "images/telaInicial/tela_inicial_5.jpg"},
            {id: "tela_inicial6", src: "images/telaInicial/tela_inicial_6.jpg"},
            {id: "tela_inicial7", src: "images/telaInicial/tela_inicial_7.jpg"},
            {id: "tela_inicial8", src: "images/telaInicial/tela_inicial_8.jpg"},
            {id: "tela_inicial9", src: "images/telaInicial/tela_inicial_9.jpg"},
            {id: "tela_inicial10", src: "images/telaInicial/tela_inicial_10.jpg"},
            {id: "tela_inicial11", src: "images/telaInicial/tela_inicial_11.jpg"},
            {id: "tela_inicial12", src: "images/telaInicial/tela_inicial_12.jpg"},
            {id: "tela_inicial13", src: "images/telaInicial/tela_inicial_13.jpg"},
            {id: "tela_inicial14", src: "images/telaInicial/tela_inicial_14.jpg"},
            {id: "tela_inicial15", src: "images/telaInicial/tela_inicial_15.jpg"},
            {id: "tela_inicial16", src: "images/telaInicial/tela_inicial_16.jpg"},
            {id: "tela_inicial17", src: "images/telaInicial/tela_inicial_17.jpg"},
            {id: "tela_inicial18", src: "images/telaInicial/tela_inicial_18.jpg"},
            {id: "tela_inicial19", src: "images/telaInicial/tela_inicial_19.jpg"},
            {id: "tela_inicial20", src: "images/telaInicial/tela_inicial_20.jpg"},
            {id: "tela_inicial21", src: "images/telaInicial/tela_inicial_21.jpg"},
            {id: "tela_inicial22", src: "images/telaInicial/tela_inicial_22.jpg"},
            {id: "tela_inicial23", src: "images/telaInicial/tela_inicial_23.jpg"},
            {id: "tela_inicial24", src: "images/telaInicial/tela_inicial_24.jpg"},
            {id: "tela_inicial25", src: "images/telaInicial/tela_inicial_25.jpg"},
            {id: "tela_inicial26", src: "images/telaInicial/tela_inicial_26.jpg"},
            {id: "tela_inicial27", src: "images/telaInicial/tela_inicial_27.jpg"},
            {id: "tela_inicial28", src: "images/telaInicial/tela_inicial_28.jpg"},
            {id: "tela_inicial29", src: "images/telaInicial/tela_inicial_29.jpg"},
            {id: "tela_inicial30", src: "images/telaInicial/tela_inicial_30.jpg"},
            {id: "tela_inicial31", src: "images/telaInicial/tela_inicial_31.jpg"},
            {id: "tela_inicial32", src: "images/telaInicial/tela_inicial_32.jpg"},
            {id: "tela_inicial33", src: "images/telaInicial/tela_inicial_33.jpg"},
            {id: "tela_inicial34", src: "images/telaInicial/tela_inicial_34.jpg"},
            {id: "tela_inicial35", src: "images/telaInicial/tela_inicial_35.jpg"},
            {id: "tela_inicial36", src: "images/telaInicial/tela_inicial_36.jpg"},
            {id: "tela_inicial37", src: "images/telaInicial/tela_inicial_37.jpg"},
            {id: "tela_inicial38", src: "images/telaInicial/tela_inicial_38.jpg"},
            {id: "tela_inicial39", src: "images/telaInicial/tela_inicial_39.jpg"},
            {id: "tela_inicial40", src: "images/telaInicial/tela_inicial_40.jpg"},
            {id: "tela_inicial41", src: "images/telaInicial/tela_inicial_41.jpg"},
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
            {id: "tela_avatar_barra", src: "images/barra.png"},
            {id: "tela_avatar_crianca1", src: "images/Escolher-Avatar02.png"},
            {id: "tela_avatar_crianca2", src: "images/Escolher-Avatar01.png"},
            {id: "tela_avatar_crianca3", src: "images/Escolher-Avatar03.png"},
            {id: "tela_avatar_crianca4", src: "images/Escolher-Avatar04.png"},
            {id: "tela_avatar_crianca5", src: "images/Escolher-Avatar05.png"},
            {id: "tela_avatar_crianca6", src: "images/Escolher-Avatar06.png"},
            {id: "sala1_bau", src: "images/bau.png"},
            {id: "sala1_jogoMemoria", src: "images/jogo_da_memoria.png"},
            {id: "sala1_bola", src: "images/bolamove2.png"},
            {id: "sala1_trem", src: "images/trenzinhoanimacao.png"},
            {id: "sala1_boneca", src: "images/bonecaanimacao.png"},
            {id: "sala1", src: "images/sala1.png"},
            {id: "retrato", src: "images/retrato.png"},
            {id: "retrato_valor1", src: "images/icon-personagem-01.png"},
            {id: "retrato_valor2", src: "images/icon-personagem-02.png"},
            {id: "retrato_valor3", src: "images/icon-personagem-03.png"},
            {id: "retrato_valor4", src: "images/icon-personagem-04.png"},
            {id: "retrato_valor5", src: "images/icon-personagem-05.png"},
            {id: "retrato_valor6", src: "images/icon-personagem-06.png"},
            {id: "memoria", src: "images/minijo-memoria.png"},
            {id: "memoria_btn", src: "images/memoria_btnVolta.png"},
            {id: "encaixe_fundo", src: "images/mini-jogo-bau.png"},
            {id: "encaixe_urso", src: "images/ursinho.png"},
            {id: "encaixe_urso_anima1", src: "images/urso1.png"},
            {id: "encaixe_urso_anima2", src: "images/urso2.png"},
            {id: "encaixe_urso_anima3", src: "images/urso3.png"},
            {id: "encaixe_urso_anima4", src: "images/urso4.png"},
            {id: "encaixe_urso_sombra", src: "images/ursinho sombra.png"},
            {id: "encaixe_boneca", src: "images/boneca.png"},
            {id: "encaixe_boneca_anima1", src: "images/boneca1.png"},
            {id: "encaixe_boneca_anima2", src: "images/boneca2.png"},
            {id: "encaixe_boneca_anima3", src: "images/boneca3.png"},
            {id: "encaixe_boneca_anima4", src: "images/boneca4.png"},
            {id: "encaixe_boneca_sombra", src: "images/boneca sombra.png"},
            {id: "encaixe_carro", src: "images/carro.png"},
            {id: "encaixe_carro_anima1", src: "images/carro1.png"},
            {id: "encaixe_carro_anima2", src: "images/carro2.png"},
            {id: "encaixe_carro_anima3", src: "images/carro3.png"},
            {id: "encaixe_carro_anima4", src: "images/carro4.png"},
            {id: "encaixe_carro_sombra", src: "images/carro sombra.png"},
            {id: "encaixe_btn", src: "images/encaixe_btnVolta.png"},
            {id: "sound_telaInicial", src: "sons/telainicialaudio.mp3"},
            {id: "sound_telaInicial2", src: "sons/bg_telaInicial.mp3"},
            {id: "sound_sala1", src: "sons/musica_de_fundo3.mp3"},
            {id: "sound_sala2", src: "sons/musica_de_fundo2.mp3"},
            {id: "sound_sala3", src: "sons/musica_de_fundo1.mp3"},
            {id: "sound_flipCarta", src: "sons/page-flip-01a.mp3"},
            {id: "sound_trem", src: "sons/trenzinhoanimacao.mp3"},
            {id: "sound_memoriaFim", src: "sons/acerto_jogo_da memoria.mp3"},
            {id: "sound_encaixe", src: "sons/acerto_bau.mp3"},
            {id: "sound_bolaQuicando", src: "sons/bolaQuicando.mp3"},
            {id: "sound_metal", src: "sons/metal.mp3"},
            {id: "sound_papel", src: "sons/papel.mp3"},
            {id: "sound_plastico", src: "sons/plastico.mp3"},
            {id: "sound_residuo_organico", src: "sons/residuo_organico.mp3"},
            {id: "sound_vidro", src: "sons/vidro.mp3"}
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
    setTimeout(timer_telaInicial, 3500);
    var container = new createjs.Container();
    createjs.Sound.play("sound_telaInicial",{volume: 0.6});
    createjs.Sound.play("sound_telaInicial2",{volume: 0.4, delay: 3500, loop: -1});
    var bgData = {
            "framerate":24,
            "images":[
                preload.getResult("tela_inicial0"),
                preload.getResult("tela_inicial1"),
                preload.getResult("tela_inicial2"),
                preload.getResult("tela_inicial3"),
                preload.getResult("tela_inicial4"),
                preload.getResult("tela_inicial5"),
                preload.getResult("tela_inicial6"),
                preload.getResult("tela_inicial7"),
                preload.getResult("tela_inicial8"),
                preload.getResult("tela_inicial9"),
                preload.getResult("tela_inicial10"),
                preload.getResult("tela_inicial11"),
                preload.getResult("tela_inicial12"),
                preload.getResult("tela_inicial13"),
                preload.getResult("tela_inicial14"),
                preload.getResult("tela_inicial15"),
                preload.getResult("tela_inicial16"),
                preload.getResult("tela_inicial17"),
                preload.getResult("tela_inicial18"),
                preload.getResult("tela_inicial19"),
                preload.getResult("tela_inicial20"),
                preload.getResult("tela_inicial21"),
                preload.getResult("tela_inicial22"),
                preload.getResult("tela_inicial23"),
                preload.getResult("tela_inicial24"),
                preload.getResult("tela_inicial25"),
                preload.getResult("tela_inicial26"),
                preload.getResult("tela_inicial27"),
                preload.getResult("tela_inicial28"),
                preload.getResult("tela_inicial29"),
                preload.getResult("tela_inicial30"),
                preload.getResult("tela_inicial31"),
                preload.getResult("tela_inicial32"),
                preload.getResult("tela_inicial33"),
                preload.getResult("tela_inicial34"),
                preload.getResult("tela_inicial35"),
                preload.getResult("tela_inicial36"),
                preload.getResult("tela_inicial37"),
                preload.getResult("tela_inicial38"),
                preload.getResult("tela_inicial39"),
                preload.getResult("tela_inicial40"),
                preload.getResult("tela_inicial41")
            ],
            "frames":[
                [0, 0, 2048, 1024, 0, 0, 0],
                [0, 1024, 2048, 1024, 0, 0, 0],
                [0, 0, 2048, 1024, 1, 0, 0],
                [0, 1024, 2048, 1024, 1, 0, 0],
                [0, 0, 2048, 1024, 2, 0, 0],
                [0, 1024, 2048, 1024, 2, 0, 0],
                [0, 0, 2048, 1024, 3, 0, 0],
                [0, 1024, 2048, 1024, 3, 0, 0],
                [0, 0, 2048, 1024, 4, 0, 0],
                [0, 1024, 2048, 1024, 4, 0, 0],
                [0, 0, 2048, 1024, 5, 0, 0],
                [0, 1024, 2048, 1024, 5, 0, 0],
                [0, 0, 2048, 1024, 6, 0, 0],
                [0, 1024, 2048, 1024, 6, 0, 0],
                [0, 0, 2048, 1024, 7, 0, 0],
                [0, 1024, 2048, 1024, 7, 0, 0],
                [0, 0, 2048, 1024, 8, 0, 0],
                [0, 1024, 2048, 1024, 8, 0, 0],
                [0, 0, 2048, 1024, 9, 0, 0],
                [0, 1024, 2048, 1024, 9, 0, 0],
                [0, 0, 2048, 1024, 10, 0, 0],
                [0, 1024, 2048, 1024, 10, 0, 0],
                [0, 0, 2048, 1024, 11, 0, 0],
                [0, 1024, 2048, 1024, 11, 0, 0],
                [0, 0, 2048, 1024, 12, 0, 0],
                [0, 1024, 2048, 1024, 12, 0, 0],
                [0, 0, 2048, 1024, 13, 0, 0],
                [0, 1024, 2048, 1024, 13, 0, 0],
                [0, 0, 2048, 1024, 14, 0, 0],
                [0, 1024, 2048, 1024, 14, 0, 0],
                [0, 0, 2048, 1024, 15, 0, 0],
                [0, 1024, 2048, 1024, 15, 0, 0],
                [0, 0, 2048, 1024, 16, 0, 0],
                [0, 1024, 2048, 1024, 16, 0, 0],
                [0, 0, 2048, 1024, 17, 0, 0],
                [0, 1024, 2048, 1024, 17, 0, 0],
                [0, 0, 2048, 1024, 18, 0, 0],
                [0, 1024, 2048, 1024, 18, 0, 0],
                [0, 0, 2048, 1024, 19, 0, 0],
                [0, 1024, 2048, 1024, 19, 0, 0],
                [0, 0, 2048, 1024, 20, 0, 0],
                [0, 1024, 2048, 1024, 20, 0, 0],
                [0, 0, 2048, 1024, 21, 0, 0],
                [0, 1024, 2048, 1024, 21, 0, 0],
                [0, 0, 2048, 1024, 22, 0, 0],
                [0, 1024, 2048, 1024, 22, 0, 0],
                [0, 0, 2048, 1024, 23, 0, 0],
                [0, 1024, 2048, 1024, 23, 0, 0],
                [0, 0, 2048, 1024, 24, 0, 0],
                [0, 1024, 2048, 1024, 24, 0, 0],
                [0, 0, 2048, 1024, 25, 0, 0],
                [0, 1024, 2048, 1024, 25, 0, 0],
                [0, 0, 2048, 1024, 26, 0, 0],
                [0, 1024, 2048, 1024, 26, 0, 0],
                [0, 0, 2048, 1024, 27, 0, 0],
                [0, 1024, 2048, 1024, 27, 0, 0],
                [0, 0, 2048, 1024, 28, 0, 0],
                [0, 1024, 2048, 1024, 28, 0, 0],
                [0, 0, 2048, 1024, 29, 0, 0],
                [0, 1024, 2048, 1024, 29, 0, 0],
                [0, 0, 2048, 1024, 30, 0, 0],
                [0, 1024, 2048, 1024, 30, 0, 0],
                [0, 0, 2048, 1024, 31, 0, 0],
                [0, 1024, 2048, 1024, 31, 0, 0],
                [0, 0, 2048, 1024, 32, 0, 0],
                [0, 1024, 2048, 1024, 32, 0, 0],
                [0, 0, 2048, 1024, 33, 0, 0],
                [0, 1024, 2048, 1024, 33, 0, 0],
                [0, 0, 2048, 1024, 34, 0, 0],
                [0, 1024, 2048, 1024, 34, 0, 0],
                [0, 0, 2048, 1024, 35, 0, 0],
                [0, 1024, 2048, 1024, 35, 0, 0],
                [0, 0, 2048, 1024, 36, 0, 0],
                [0, 1024, 2048, 1024, 36, 0, 0],
                [0, 0, 2048, 1024, 37, 0, 0],
                [0, 1024, 2048, 1024, 37, 0, 0],
                [0, 0, 2048, 1024, 38, 0, 0],
                [0, 1024, 2048, 1024, 38, 0, 0],
                [0, 0, 2048, 1024, 39, 0, 0],
                [0, 1024, 2048, 1024, 39, 0, 0],
                [0, 0, 2048, 1024, 40, 0, 0],
                [0, 1024, 2048, 1024, 40, 0, 0],
                [0, 0, 2048, 1024, 41, 0, 0],
                [0, 1024, 2048, 1024, 41, 0, 0]
            ],
            "animations":{
                anima: [0, 81, false]
              }
            };
    var background = new createjs.Bitmap(preload.getResult("telaInicialBG"));
    var backgroundFrames = new createjs.SpriteSheet(bgData);
    var bg = new createjs.Sprite(backgroundFrames, "anima");
    
    
    
    container.addChild(bg);
    //container.addChild(play_inicial);
    
    return container;
}

function evtTela_inicial(evt)
{
    if(evt.type = "click")
        trocaTela(telaAvatar());
}

function timer_telaInicial()
{
    var play_inicial = new createjs.Bitmap(preload.getResult("btn-play"));
    play_inicial.on("click", evtTela_inicial);
    play_inicial.y = 1;
    play_inicial.x = 1;
    stage.addChild(play_inicial);
}
//------------------------------------*

//Tela de criação do personagem(avatar)
function telaAvatar()
{
    container = new createjs.Container();
    
    var background = new createjs.Bitmap(preload.getResult("tela_avatar"));//cor do fundo 9AED87
    play_avancar = new createjs.Bitmap(preload.getResult("btn-play2"));
    play_avancar.on("click", evt_telaAvatar);
    var barra = new createjs.Bitmap(preload.getResult("tela_avatar_barra")); 
    var crianca1 = new createjs.Bitmap(preload.getResult("tela_avatar_crianca1"));
    crianca1.valor = 1;
    crianca1.on("click", evt_selecaoAvatar);
    console.log(crianca1.x);
    var crianca2 = new createjs.Bitmap(preload.getResult("tela_avatar_crianca2"));
    crianca2.valor = 2;
    crianca2.on("click", evt_selecaoAvatar);
    var crianca3 = new createjs.Bitmap(preload.getResult("tela_avatar_crianca3"));
    crianca3.valor = 3;
    crianca3.on("click", evt_selecaoAvatar);
    var crianca4 = new createjs.Bitmap(preload.getResult("tela_avatar_crianca4"));
    crianca4.valor = 4;
    crianca4.on("click", evt_selecaoAvatar);
    var crianca5 = new createjs.Bitmap(preload.getResult("tela_avatar_crianca5"));
    crianca5.valor = 5;
    crianca5.on("click", evt_selecaoAvatar);
    var crianca6 = new createjs.Bitmap(preload.getResult("tela_avatar_crianca6"));
    crianca6.valor = 6;
    crianca6.on("click", evt_selecaoAvatar);
    
    var input = document.createElement('input');
    input.id = 'input';
    input.style.height = '50px';
    input.style.width = '500px';
    input.style.position = "absolute";
    input.placeholder = "NOME";
    input.autofocus;
    input.style.top = 0;
    input.style.left = 0;
    document.getElementById("centro").appendChild(input);
    var html = new createjs.DOMElement(input);
    html.x = 635;//485; não entendi as coordenadas do input =/
    html.y = 825;
    
    container.addChild(background);
    container.addChild(barra);
    container.addChild(play_avancar);
    container.addChild(crianca1);
    container.addChild(crianca2);
    container.addChild(crianca3);
    container.addChild(crianca4);
    container.addChild(crianca5);
    container.addChild(crianca6);
    container.addChild(html);
    
    return container;
}

function evt_telaAvatar(evt)
{
    if(document.getElementById("input").value != "" && evt.type == "click" && play_avancar.valor != undefined)
    {
        nome = document.getElementById("input").value
        document.getElementById("input").style.visibility = "hidden";
        trocaTela(sala1());
    }
}

function evt_selecaoAvatar(evt)
{
    play_avancar.valor = evt.target.valor;
    if(!container.contains(borda))
        container.addChild(borda);
    switch(play_avancar.valor)
    {
        case 1:
            borda.x = 100;
            borda.y = 67;
        break;
        case 2:
            borda.x = 491;
            borda.y = 67;
        break;
        case 3:
            borda.x = 884;
            borda.y = 67;
        break;
        case 4:
            borda.x = 100;
            borda.y = 405;
        break;
        case 5:
            borda.x = 491;
            borda.y = 405;
        break;
        case 6:
            borda.x = 884;
            borda.y = 405;
        break;
    }
    //console.log(evt.target.valor);
}

//------------------------------------*



//Tela da primeira área(sala1)
function sala1()
{
    
    if(!msala1)
    {
        createjs.Sound.stop();
        createjs.Sound.play("sound_sala1",{loop:-1, volume: 0.8});
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
    bolaAnima.scaleX = 1.5;
    bolaAnima.scaleY = 1.5;
    bolaAnima.on("click", evt_animaBola);
    bolaAnima.x = -170;
    bolaAnima.y = 360;
    
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
    tremAnima.scaleX = 1.8;
    tremAnima.scaleY = 1.8;
    tremAnima.x = 130;
    tremAnima.y = -30;
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
    bonecaAnima.scaleX = 1.7;
    bonecaAnima.scaleY = 1.7;
    bonecaAnima.x = -600;
    bonecaAnima.y = -90;
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
    var background = new createjs.Bitmap(preload.getResult("retrato_valor"+play_avancar.valor));
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