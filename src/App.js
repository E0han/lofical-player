import AppLayout from "./Layout/AppLayout";
import './App.css';
import PlayerController from "./Components/Controller";
import PlayerWindow from "./Components/PlayerWindow";
import {useEffect, useState} from "react";
import testSong from "./assets/songs/test/JJ-Lin-Lose-Control.mp3";
import testLyrics from "./assets/songs/test/JJ-Lin-Lose-Control.lrc"
import useSound from "use-sound";

function App() {
  const [isPlay, setIsPlay] = useState(false);//是否播放in
  const [lrcString, setLrcString] = useState("");//歌词
  const [play, {stop,pause,duration,sound}] = useSound(testSong);
  
  useEffect(async ()=>{
    const res = await fetch(testLyrics).then(
      response => response.text()
    )
    setLrcString(res)
  },[])
  return (
      <AppLayout>
        <PlayerWindow isPlay={isPlay} setIsPlay={setIsPlay} sound={sound} lrcString={lrcString}/>
        <PlayerController isPlay={isPlay} setIsPlay={setIsPlay} play={play} pause={pause}/>
      </AppLayout>
  )
}

export default App;