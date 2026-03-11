import kaplay from "kaplay";
import "kaplay/global";

export default function(){
    const lvl1Btn= add([
        sprite("1tile"),
        pos(width()/2, 60),
        anchor("center"),
        "lvlButton"
    ])

    const lvl2Btn = add([
        sprite("2tile"),
        pos(width()/2, 90),
        anchor("center"),
        "lvl2Button"
    ])

    const lvl3Btn = add([
        sprite("3tile"),
        pos(width()/2, 120),
        anchor("center"),
        "lvl3Button"
    ])

    const selection = add([
        sprite("outline"),
        pos(width()/2, 60),
        anchor("center"),
        area({isSensor:true}),
        "selection"
    ])

    onKeyPress("w",()=>{
        if(selection.pos.y == 60){

        } else {
            selection.moveTo(selection.pos.x,selection.pos.y-30)
        }
        
    })

    onKeyPress("s",()=>{
        if(selection.pos.y == 120){

        } else {
            selection.moveTo(selection.pos.x,selection.pos.y+30)
        }
        
    })
    
    onKeyPress("e",() => {
        if(selection.pos.y == 60){
            go("level1" );
        }
        if(selection.pos.y == 90){
            go("level2" );
        }
        if(selection.pos.y == 120){
            go("level1" );
        }
    })
    
    
    
}