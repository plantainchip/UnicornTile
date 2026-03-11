import kaplay from "kaplay";
import "kaplay/global";

export default function () {

    add([
        sprite("6x6"),
        anchor("center"),
        pos(width() / 2, 67),
    ])

    const unicorn = add([
        sprite("unicorn"),
        pos(112, 13),
        z(2),
        area({ shape: new Rect(vec2(2, 6), 10, 10), isSensor: true }),
        "unicorn"
    ]);

    let unicornPrevPositionsX = [unicorn.pos.x] //saving x coordinate
    let unicornPrevPositionsY = [unicorn.pos.y] //saving x coordinate
    let unicornMovesCounter = 0

    const star = add([
        sprite("star"),
        pos(112, 64),
        area({
            shape: new Rect(vec2(6, 6), 2, 2),
            isSensor: true,
        }),
        z(1),
        "star"
    ]);

    const zap = add([
        sprite("zap"),
        pos(width()/2, 0),
        anchor("bot"),
        z(3),
        "zap"
    ]);

    const hole1 = add([
        sprite("whitetilehole"),
        pos(112, 48),
        area({ isSensor: true }),
        "hole"
    ])

    const hole2 = add([
        sprite("blacktilehole"),
        pos(96, 48),
        area({ isSensor: true }),
        "hole"
    ])

    add([
        sprite("whitetilehole"),
        pos(96, 63),
        area({ isSensor: true }),
        "hole"
    ])

    const addball = add([
        sprite("addball"),
        pos(32, 80),
        area({
            shape: new Rect(vec2(3, 3), 8, 8),
            isSensor: true,
        }),
        "addball"
    ]);

    const lightning = add([
        sprite("lightning"),
        pos(64, 80),
        area({
            shape: new Rect(vec2(3, 3), 8, 8),
            isSensor: true,
        }),
        "addball"
    ]);

    const fly = add([
        sprite("fly"),
        pos(80, 21),
        area({
            shape: new Rect(vec2(3, 3), 8, 8),
            isSensor: true,
        }),
        patrol({
            waypoints: [
                vec2(80, 13),
                vec2(80, 34),
                vec2(100, 32),

            ],
            speed: 8,
            endBehavior: "ping-pong",
        }),
        z(1),
        "fly"
    ]);

    const fly2 = add([
        sprite("fly"),
        pos(32, 21),
        area({
            shape: new Rect(vec2(3, 3), 8, 8),
            isSensor: true,
        }),
        patrol({
            waypoints: [
                vec2(32, 48),
                vec2(88, 48),

            ],
            speed: 8,
            endBehavior: "ping-pong",
        }),
        z(1),
        "fly2"
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


    // wasd tile counter
    const tileCounter = add([
        sprite("tile-hand"),
        pos(width() / 2, 144),
        anchor("center"),
        area({ isSensor: true }),
        "tile-hand"
    ])

    // tile counters

    const wLabel = add([
        text("2", {
            size: 16,
            font: "tiny5",
        }),
        pos(53, 145),
        color(43, 40, 41),
        { value: 2 }
    ])
    const aLabel = add([
        text("5", {
            size: 16,
            font: "tiny5",
        }),
        pos(69, 145),
        color(43, 40, 41),
        { value: 5 }
    ])
    const sLabel = add([
        text("5", {
            size: 16,
            font: "tiny5",
        }),
        pos(85, 145),
        color(43, 40, 41),
        { value: 5 }
    ])
    const dLabel = add([
        text("0", {
            size: 16,
            font: "tiny5",
        }),
        pos(101, 145),
        color(43, 40, 41),
        { value: 0 }
    ])

    const rTileRestart = add([
        sprite("rtile"),
        pos(0, 160),
        area({ isSensor: true }),
        "rTile"
    ])
    const qTileQuit = add([
        sprite("qtile"),
        pos(0, 0),
        area({ isSensor: true }),
        "qTile"
    ])

    let willUnicornMove = true;

    onKeyPress("w", () => {
        for (let i = unicornMovesCounter; i >= 0; i--) {
            if (unicornPrevPositionsX[i] == unicorn.pos.x && unicornPrevPositionsY[i] == unicorn.pos.y - 16) {
                willUnicornMove = false
            }
        }

        // if unicorn go out of bounds
        if (unicorn.pos.y - 16 < 13) {
            willUnicornMove = false
        }
        //if unicorn out of moves
        if (wLabel.value == 0) {
            willUnicornMove = false
        }

        if (willUnicornMove) {
            wTile()
            tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y - 16), 0.2, (p) => unicorn.pos = p)
            unicornPrevPositionsX.push(unicorn.pos.x)
            unicornPrevPositionsY.push(unicorn.pos.y - 16)
            unicornMovesCounter += 1
            wLabel.value -= 1
            wLabel.text = wLabel.value
        } else {
            tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            shake(0.5)
            willUnicornMove = true;
        }
    });

    onKeyPress("a", () => {
        for (let i = unicornMovesCounter; i >= 0; i--) {
            if (unicornPrevPositionsX[i] == unicorn.pos.x - 16 && unicornPrevPositionsY[i] == unicorn.pos.y) {
                willUnicornMove = false
            }
        }
        // if unicorn go out of bounds
        if (unicorn.pos.x - 16 < 32) {
            willUnicornMove = false
        }
        //if unicorn out of moves
        if (aLabel.value == 0) {
            willUnicornMove = false
        }

        if (willUnicornMove) {
            aTile()
            tween(unicorn.pos, vec2(unicorn.pos.x - 16, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            unicornPrevPositionsX.push(unicorn.pos.x - 16)
            unicornPrevPositionsY.push(unicorn.pos.y)
            unicornMovesCounter += 1
            aLabel.value -= 1
            aLabel.text = aLabel.value
        } else {
            tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            shake(0.5)
            willUnicornMove = true;
        }
    });

    onKeyPress("s", () => {
        for (let i = unicornMovesCounter; i >= 0; i--) {
            if (unicornPrevPositionsX[i] == unicorn.pos.x && unicornPrevPositionsY[i] == unicorn.pos.y + 16) {
                willUnicornMove = false
            }
        }

        // if unicorn go out of bounds
        if (unicorn.pos.y + 16 > 93) {
            willUnicornMove = false
        }
        //if unicorn out of moves
        if (sLabel.value == 0) {
            willUnicornMove = false
        }

        if (willUnicornMove) {
            sTile()
            tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y + 16), 0.2, (p) => unicorn.pos = p)
            unicornPrevPositionsX.push(unicorn.pos.x)
            unicornPrevPositionsY.push(unicorn.pos.y + 16)
            unicornMovesCounter += 1
            sLabel.value -= 1
            sLabel.text = sLabel.value
        } else {
            tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            shake(0.5)
            willUnicornMove = true;
        }
    });

    onKeyPress("d", () => {
        for (let i = unicornMovesCounter; i >= 0; i--) {
            if (unicornPrevPositionsX[i] == unicorn.pos.x + 16 && unicornPrevPositionsY[i] == unicorn.pos.y) {
                willUnicornMove = false
            }
        }
        // if unicorn go out of bounds
        if (unicorn.pos.x + 16 > 112) {
            willUnicornMove = false
        }
        //if unicorn out of moves
        if (dLabel.value == 0) {
            willUnicornMove = false
        }

        if (willUnicornMove) {
            dTile()
            tween(unicorn.pos, vec2(unicorn.pos.x + 16, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            unicornPrevPositionsX.push(unicorn.pos.x + 16)
            unicornPrevPositionsY.push(unicorn.pos.y)
            unicornMovesCounter += 1
            dLabel.value -= 1
            dLabel.text = dLabel.value
        } else {
            tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            shake(0.5)
            willUnicornMove = true;
        }
    });

    onKeyPress("space", () => {
        console.log(unicornPrevPositionsX)
        console.log(unicornPrevPositionsY)
        console.log(unicornMovesCounter)
    })

    onKeyPress("r", () => {
        go("level2");
    })
    onKeyPress("q", () => {
        go("levelselection");
    })

    unicorn.onCollide("addball",()=>{
        dLabel.value = 5
        dLabel.text = dLabel.value
    })

    unicorn.onCollide("fly", () => {
        tween(zap.pos, vec2(width()/2+18, height()/2), 1, (p) => zap.pos = p)
        shake(12)
        wait(2, () => {
            go("level2");
        })
        
    })

    unicorn.onCollide("star", () => {
        wait(2, () => {
            go("levelselection");
        })
    })

    unicorn.onCollide("hole", () => {
        tween(zap.pos, vec2(width()/2+18, height()/2), 1, (p) => zap.pos = p)
        shake(12)
        wait(2, () => {
            go("level2");
        })
    })



}