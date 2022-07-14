import { Wrapper } from "./styles";
import {VscChromeClose} from 'react-icons/vsc';
import { IntOptions, IntTrailer } from "./interface";
import {CgPlayPause,CgPlayButton} from 'react-icons/cg';
import {RiDownload2Fill, RiVolumeDownLine} from 'react-icons/ri';
import { useState } from "react";
const Trailer = ({movie}:IntTrailer) => {
    const [isPlay,setPlay] = useState(false)
    return(
        <Wrapper>
            <figure>
               <video autoPlay loop controls>
                    <source src={movie}/>
               </video>
            </figure>
            <div className="controls">
                <div className="progress">
                    <span className="bar"/>
                </div>
                <div className="buttons">
                    <div className="button play" onClick={() => setPlay(!isPlay)}>
                        {
                            isPlay ?
                            <CgPlayPause/> :
                            <CgPlayButton/>
                        }
                    </div>
                    <div className="button mute">
                        <RiVolumeDownLine/>
                    </div>
                    <div className="button close">
                        <VscChromeClose/>
                    </div>
                    <div className="button download">
                        <RiDownload2Fill/>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
export default Trailer;