import { CardVideo, Logo, Video, Img } from "./styles";

import logo from "../../assets/images/Screenshot_20230523_225823_WhatsApp-removebg-preview.png";

interface VideoProps {
    dirVideo: any;
}

export function MainVideo(props: VideoProps) {
    return (
        <CardVideo >

                <Logo><Img src={logo} /></Logo>
                <Video width="90%" height="75%" controls>
                    <source src={props.dirVideo}></source>
                </Video>

        </CardVideo>
    )
}
