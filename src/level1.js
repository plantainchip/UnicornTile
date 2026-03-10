import kaplay from "kaplay";
import "kaplay/global";

export default function () {



    add([
        sprite("4x4"),
        pos(44, 17),
    ])


    const unicorn = add([
        sprite("unicorn"),
        pos(48, 34),
        z(2),
        area({ shape: new Rect(vec2(2, 6), 10, 10), isSensor: true }),
        "unicorn"
    ]);

    let unicornPrevPositionsX = [unicorn.pos.x] //saving x coordinate
    let unicornPrevPositionsY = [unicorn.pos.y] //saving x coordinate
    let unicornMovesCounter = 0


    const star = add([
        sprite("star"),
        pos(96, 21),
        z(1),
        "star"
    ]);

    const fly = add([
        sprite("fly"),
        pos(80, 21),
        patrol({
            waypoints:[
                vec2(80,21),
                vec2(80,38),
                vec2(100,38),

            ],
            speed: 3,
            endBehavior:"ping-pong",
        }),
        z(1),
        "fly"
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
    const wTileCounter = add([
        sprite("wtile"),
        pos(48, 128),
        area({ isSensor: true }),
        "wTile"
    ])

    const aTileCounter = add([
        sprite("atile"),
        pos(64, 128),
        area({ isSensor: true }),
        "aTile"
    ])

    const sTileCounter = add([
        sprite("stile"),
        pos(80, 128),
        area({ isSensor: true }),
        "sTile"
    ])

    const dTileCounter = add([
        sprite("dtile"),
        pos(96, 128),
        area({ isSensor: true }),
        "dTile"
    ])


    const dTileRestart = add([
        sprite("dtile"),
        pos(0, 160),
        area({ isSensor: true }),
        "dTile"
    ])

    let willUnicornMove = true;

    onKeyPress("w", () => {
        for (let i = unicornMovesCounter; i >= 0; i--) {
            if (unicornPrevPositionsX[i] == unicorn.pos.x && unicornPrevPositionsY[i] == unicorn.pos.y - 16) {
                willUnicornMove = false
            }
        }
        // if unicorn go out of bounds
        if (unicorn.pos.y - 16 < 16) {
            willUnicornMove = false
        }
        if (willUnicornMove) {
            wTile()
            tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y - 16), 0.2, (p) => unicorn.pos = p)
            unicornPrevPositionsX.push(unicorn.pos.x)
            unicornPrevPositionsY.push(unicorn.pos.y - 16)
            unicornMovesCounter += 1
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
        if (unicorn.pos.x - 16 < 48) {
            willUnicornMove = false
        }
        if (willUnicornMove) {
            aTile()
            tween(unicorn.pos, vec2(unicorn.pos.x - 16, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            unicornPrevPositionsX.push(unicorn.pos.x - 16)
            unicornPrevPositionsY.push(unicorn.pos.y)
            unicornMovesCounter += 1
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
        if (unicorn.pos.y + 16 > 66) {
            willUnicornMove = false
        }
        if (willUnicornMove) {
            sTile()
            tween(unicorn.pos, vec2(unicorn.pos.x, unicorn.pos.y + 16), 0.2, (p) => unicorn.pos = p)
            unicornPrevPositionsX.push(unicorn.pos.x)
            unicornPrevPositionsY.push(unicorn.pos.y + 16)
            unicornMovesCounter += 1
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
        if (unicorn.pos.x + 16 > 96) {
            willUnicornMove = false
        }
        if (willUnicornMove) {
            dTile()
            tween(unicorn.pos, vec2(unicorn.pos.x + 16, unicorn.pos.y), 0.2, (p) => unicorn.pos = p)
            unicornPrevPositionsX.push(unicorn.pos.x + 16)
            unicornPrevPositionsY.push(unicorn.pos.y)
            unicornMovesCounter += 1
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

    onKeyPress("r",()=>{
        go("level1" );
    })

}