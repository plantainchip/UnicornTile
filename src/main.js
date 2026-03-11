import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix
import levelselection from "./level-selection"
import level1 from "./level1"
import level2 from "./level2"


kaplay({
    width: 160,
    height: 176,
    scale: 4,
})
setBackground(222, 226, 228)

debug.inspect = false

// loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("unicorn", "/sprites/unicorn-piece.png");
loadSprite("lightning", "/sprites/lightning-piece.png");
loadSprite("hazard", "/sprites/hazard-piece.png");
loadSprite("fly", "/sprites/fly-piece.png");
loadSprite("star", "/sprites/star-piece.png");
loadSprite("addball", "/sprites/add-ball.png");
loadSprite("zap", "/sprites/zap.png");
loadSprite("wtile", "/sprites/w-tile.png");
loadSprite("atile", "/sprites/a-tile.png");
loadSprite("stile", "/sprites/s-tile.png");
loadSprite("dtile", "/sprites/d-tile.png");
loadSprite("rtile", "/sprites/r-tile.png");
loadSprite("qtile", "/sprites/q-tile.png");
loadSprite("1tile", "/sprites/1tile.png");
loadSprite("2tile", "/sprites/2tile.png");
loadSprite("3tile", "/sprites/3tile.png");
loadSprite("blacktilehole", "/sprites/black-tile-hole.png");
loadSprite("whitetilehole", "/sprites/white-tile-hole.png");
loadSprite("tile-hand", "/sprites/tile-hand.png");
loadFont("micro5","sprites/Micro5-Regular.ttf",{filter:"nearest"});
loadFont("tiny5","sprites/Tiny5-Regular.ttf",{filter:"nearest"});
loadSprite("4x4", "/sprites/4x4board.png");
loadSprite("6x6", "/sprites/6x6board.png");
loadSprite("outline", "/sprites/outline.png");
loadSprite("title_screen", "/sprites/title_screen.png");



scene("levelselection",levelselection);
scene("level1",level1);
scene("level2",level2);



scene("start",()=>{
    add([sprite("title_screen")])
    onKeyPress((key) => {
        go("levelselection" );
    })
})

onLoad(() => go("start"))

