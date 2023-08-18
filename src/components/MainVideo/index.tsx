import { CardVideo, Logo, Video, Img } from "./styles";

import logoSurf from '../../assets/images/Logo.png';
import logoArena from '../../assets/images/arenaLogo01.png';

interface VideoProps {
    dirVideo: any;
    kind: any;
}

export function MainVideo(props: VideoProps) {
    return (
        <CardVideo >

            <Logo><Img src={
                (props.kind == 'arena') ? (
                    logoArena
                ) : (
                    logoSurf)
            }
            /></Logo>
            <Video width="90%" height="75%" controls>
                <source src={props.dirVideo}></source>
            </Video>

        </CardVideo>
    )
}
