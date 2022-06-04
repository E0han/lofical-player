import { useEffect, useState } from "react";
import { ReactComponent as LoficalLogo} from "../assets/img/logo/lofical.svg"
import 'css-doodle';

const PlayerWindow = ({
    setSongInfo,
    songInfo,
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
    // const [go, setGo] = useState(0)
    let lyrics = new LRC(lrcString)
    const [currentLine, setCurrentLine] = useState("");

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(isPlay){
                console.log(sound)
                const curr = lyrics.currentLine(Math.round(sound.seek(),2))
                if(curr!==null){
                    setCurrentLine(curr.text)
                }
            }
        }, 500);
        return ()=> clearInterval(interval)
        
    },[isPlay]);
    return (
        <div className="player-window">
            {
                isPlay
                ?
                <span className="player-window__lyrics">
                    {currentLine}
                </span>
                :
                <div className="player-window__main_logo waving">
                    <LoficalLogo/>
                </div>
            }
        </div>
    )
}

export default PlayerWindow;