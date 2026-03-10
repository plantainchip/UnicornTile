import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix
import levelselection from "./level-selection"
import level1 from "./level1"

kaplay({
    width: 160,
    height: 176,
    scale: 4,
})
setBackground(222, 226, 228)

debug.inspect = true

// loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("unicorn", "/sprites/unicorn-piece.png");
loadSprite("lightning", "/sprites/lightning-piece.png");
loadSprite("hazard", "/sprites/hazard-piece.png");
loadSprite("fly", "/sprites/fly-piece.png");
loadSprite("star", "/sprites/star-piece.png");
loadSprite("wtile", "/sprites/w-tile.png");
loadSprite("atile", "/sprites/a-tile.png");
loadSprite("stile", "/sprites/s-tile.png");
loadSprite("dtile", "/sprites/d-tile.png");
loadSprite("4x4", "/sprites/4x4board.png");
loadSprite("6x6", "/sprites/6x6board.png");
loadSprite("title_screen", "/sprites/title_screen.png");



scene("levelselection",levelselection);
scene("level1",level1)


scene("start",()=>{
    add([sprite("title_screen")])
    onKeyPress((key) => {
        go("levelselection" );
    })
})

onLoad(() => go("start"))

