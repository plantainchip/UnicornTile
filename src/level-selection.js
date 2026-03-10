import kaplay from "kaplay";
import "kaplay/global";

export default function(){
    const lvl1Btn = add([
        rect(60,16),
        pos(width()/2, 60),
        anchor("center"),
        area({isSensor:true}),
        "lvl1Button"
    ])

    const lvl2Btn = add([
        rect(60,16),
        pos(width()/2, 90),
        anchor("center"),
        "lvl2Button"
    ])

    const lvl3Btn = add([
        rect(60,16),
        pos(width()/2, 120),
        anchor("center"),
        "lvl3Button"
    ])

    const selection = add([
        rect(60,16),
        pos(width()/2, 60),
        anchor("center"),
        color(BLUE),
        area({isSensor:true}),
        "selection"
    ])

    onKeyPress("w",()=>{
        selection.moveTo(selection.pos.x,selection.pos.y-30)
    })

    onKeyPress("s",()=>{
        selection.moveTo(selection.pos.x,selection.pos.y+30)
    })
    
    onKeyPress("p",() => {
        go("level1" );
    })
    
    
    
}