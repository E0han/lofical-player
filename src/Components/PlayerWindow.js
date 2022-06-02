import { useEffect, useState } from "react";
const PlayerWindow = ({
    isPlay,
    setIsPlay,
    sound,
    lrcString
})=>{
    // const

    // fileReader.addEventListener('load', e=>{
    //     const data = lrcParser(e.target.result)
    // })
    

    // console.log(lyrics)
    const [currPos,setSoundSeek] = useState(0)
    const [go, setGo] = useState(0)
    let lyrics = new LRC(lrcString)
    const [currentLine, setCurrentLine] = useState("");
    // console.log(lyrics)

    useEffect(()=>{
        if(isPlay){
            const curr = lyrics.currentLine(Math.round(sound.seek(),2))
            if(curr!==null){
                setCurrentLine(curr.text)
            }
        }
        setGo(go+1)
    },[go]);
    return (
        <div className="player-window">
            <span className="player-window__lyrics">
                {currentLine}
            </span>
        </div>
    )
}

export default PlayerWindow;