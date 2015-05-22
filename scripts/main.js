var stage, preload;

//Containers que serão as telas da plataforma
var telaInicial;

//Carrega TODOS os arquivos do projeto e chama a função 'init()'
function carregarArquivos()
{
    preload = new createjs.LoadQueue();
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
            {id: "carta_vidro_objeto", src: "images/carta_vidro_objeto.png"}
        ]);
}

function init()
{
    stage = new createjs.Stage("canvas");
    var bm = new createjs.Bitmap(preload.getResult("carta_papel"));
    
    stage.addChild(bm);
    stage.update();
    
}

createjs.Ticker.addEventListener("tick", tick);
function tick() {stage.update();}


//    document.getElementById("centro").appendChild(html);