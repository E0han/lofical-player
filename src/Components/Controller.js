import { Col } from "react-bootstrap";
import {PlayCircleOutlined, PauseCircleOutlined, FastForwardOutlined, FastBackwardOutlined} from "@ant-design/icons"



const PlayerController = ({
    isPlay,
    setIsPlay,
    play,
    pause
})=>{

    const handlePlay = ()=>{
        setIsPlay(true);
        play()
    }
    const handlePause = ()=>{
        setIsPlay(false);
        pause()
    }
    return(
        <div className="player-controller">
            <Col lg={3} md={3} xs={3}>

            </Col>
            <Col lg={2} md={2} xs={2}>
                <FastBackwardOutlined className="player-controller__back-button player-controller__animation"/>
            </Col>
            <Col lg={2} md={2} xs={2}>
                {
                    !isPlay
                    ?<PlayCircleOutlined className="player-controller__play-button player-controller__animation" onClick={()=> handlePlay()}/>
                    :<PauseCircleOutlined className="player-controller__play-button player-controller__animation" onClick={()=> handlePause()}/>
                }
                </Col>
            <Col lg={2} md={2} xs={2}>
                <FastForwardOutlined className="player-controller__forward-button player-controller__animation"/>
            </Col>
            <Col lg={3} md={3} xs={3}>
                
            </Col>
        </div>
    )
}

export default PlayerController;
