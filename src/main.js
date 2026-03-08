import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

kaplay({
    width: 160,
    height: 144,
    scale: 4,
})
setBackground(222, 226, 228)

debug.inspect = false

// loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("unicorn", "/sprites/unicorn-piece.png");
loadSprite("lightning", "/sprites/lightning-piece.png");
loadSprite("wtile", "/sprites/w-tile.png");
loadSprite("atile", "/sprites/a-tile.png");
loadSprite("stile", "/sprites/s-tile.png");
loadSprite("dtile", "/sprites/d-tile.png");
loadSprite("4x4", "/sprites/4x4board.png");



add([
    sprite("4x4"),
    pos(center()),
    anchor("center")
])

const unicorn = add([
    sprite("unicorn"),
    pos(48, 34),
    z(1),
    area({shape: new Rect(vec2(2,6), 10, 10),isSensor: true }),
    "unicorn"
]);

let unicornPrevPositionsX = [unicorn.pos.x] //saving x coordinate
let unicornPrevPositionsY = [unicorn.pos.y] //saving x coordinate
let unicornMovesCounter = 0

const lightning = add([
    sprite("lightning"),
    pos(80, 37),
    z(1)
]);

function wTile() {
    const wTile = add([
        sprite("wtile"),
        pos(unicorn.pos.x, unicorn.pos.y + 3),
        area({ isSensor: true }),
        "wTile"

    ])
}

function aTile() {
    const aTile = add([
        sprite("atile"),
        pos(unicorn.pos.x, unicorn.pos.y + 3),
        area({ isSensor: true }),
        "aTile"
    ])
}

function sTile() {
    const sTile = add([
        sprite("stile"),
        pos(unicorn.pos.x, unicorn.pos.y + 3),
        area({ isSensor: true }),
        "sTile"
    ])
}

function dTile() {
    const dTile = add([
        sprite("dtile"),
        pos(unicorn.pos.x, unicorn.pos.y + 3),
        area({ isSensor: true }),
        "dTile"

    ])
}


let willUnicornMove = true;

onKeyPress("w", () => {
    // unicorn.moveTo(vec2(unicorn.pos.x,unicorn.pos.y-20))
    for(let i=unicornMovesCounter;i>=0;i--){
        console.log("step "+ i + ":" + unicornPrevPositionsX[i] + " " +unicornPrevPositionsY[i])
        if(unicornPrevPositionsX[i] == unicorn.pos.x && unicornPrevPositionsY[i]== unicorn.pos.y-16){
            // tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            willUnicornMove = false
        }
    }
    if(willUnicornMove){
        wTile()
        tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y - 16), 0.2, (p) => unicorn.pos = p)
        unicornPrevPositionsX.push(unicorn.pos.x)
        unicornPrevPositionsY.push(unicorn.pos.y-16)
        unicornMovesCounter += 1
    } else {
        tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
        shake(0.5)
        willUnicornMove = true;
    }
    
});

onKeyPress("a", () => {
    // unicorn.moveTo(vec2(unicorn.pos.x-20,unicorn.pos.y))
    for(let i=unicornMovesCounter;i>=0;i--){
        console.log("step "+ i + ":" + unicornPrevPositionsX[i] + " " +unicornPrevPositionsY[i])
        if(unicornPrevPositionsX[i] == unicorn.pos.x-16 && unicornPrevPositionsY[i]== unicorn.pos.y){
            // tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            willUnicornMove = false
        }
    }
    if(willUnicornMove){
        aTile()
        tween(unicorn.pos, vec2(unicorn.pos.x - 16, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
        unicornPrevPositionsX.push(unicorn.pos.x-16)
        unicornPrevPositionsY.push(unicorn.pos.y)
        unicornMovesCounter += 1
    } else {
        tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
        shake(0.5)
        willUnicornMove = true;
    }
});

onKeyPress("s", () => {
    for(let i=unicornMovesCounter;i>=0;i--){
        console.log("step "+ i + ":" + unicornPrevPositionsX[i] + " " +unicornPrevPositionsY[i])
        if(unicornPrevPositionsX[i] == unicorn.pos.x && unicornPrevPositionsY[i]== unicorn.pos.y+16){
            // tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            willUnicornMove = false
        }
    }
    if(willUnicornMove){
        sTile()
        tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y + 16), 0.2, (p) => unicorn.pos = p)
        unicornPrevPositionsX.push(unicorn.pos.x)
        unicornPrevPositionsY.push(unicorn.pos.y+16)
        unicornMovesCounter += 1
    } else {
        tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
        shake(0.5)
        willUnicornMove = true;
    }
});

onKeyPress("d", () => {
    // unicorn.moveTo(vec2(unicorn.pos.x+20,unicorn.pos.y))
    for(let i=unicornMovesCounter;i>=0;i--){
        console.log("step "+ i + ":" + unicornPrevPositionsX[i] + " " +unicornPrevPositionsY[i])
        if(unicornPrevPositionsX[i] == unicorn.pos.x+16 && unicornPrevPositionsY[i]== unicorn.pos.y){
            // tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            willUnicornMove = false
        }
    }
    if(willUnicornMove){
        dTile()
        tween(unicorn.pos, vec2(unicorn.pos.x+16, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
        unicornPrevPositionsX.push(unicorn.pos.x+16)
        unicornPrevPositionsY.push(unicorn.pos.y)
        unicornMovesCounter += 1
    } else {
        tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
        shake(0.5)
        willUnicornMove = true;
    }
});

onKeyPress("space",()=>{
    console.log(unicornPrevPositionsX)
    console.log(unicornPrevPositionsY)
    console.log(unicornMovesCounter)
})