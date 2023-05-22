import { Img, Logo } from "../../components/MainVideo/styles";
import { ChooseButton, ChooseContainer } from "./styles";

import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { FontAsH1 } from "./styles";

export function Choose() {
    return (
        <ChooseContainer>
            <Logo><Img src={logo} style={{marginBottom:'20px'}} /></Logo>
            <ChooseButton>
                <Link to='/surf'style={{textDecoration:'none'}}>
                   
                    <FontAsH1>Surf</FontAsH1>
                </Link>
            </ChooseButton>
            <ChooseButton>
                <Link to='/funcional' style={{textDecoration:'none'}}>
                
                    <FontAsH1>Funcional     </FontAsH1>
                </Link>
            </ChooseButton>
            <ChooseButton>
                <Link to='/muaythai'style={{textDecoration:'none'}}>
 
                    <FontAsH1>Muay Thai    </FontAsH1>
                </Link>
            </ChooseButton>
            
            <ChooseButton>
                <Link to='/yoga'style={{textDecoration:'none'}}>

                    <FontAsH1>Yoga         </FontAsH1>
                </Link>
            </ChooseButton>
            <ChooseButton>
                <a href='https://www.instagram.com/arena.stp/' style={{textDecoration:'none'}}>
                    <FontAsH1>Instagram         </FontAsH1>
                </a>
            </ChooseButton>
            <ChooseButton>
                <a href={"https://www.google.com/maps/place/STP+SURF+SCHOOL/@-23.0123575,-43.3216017,15z/data=!4m12!1m6!3m5!1s0x0:0x6c0df6fb06314508!2sSTP+SURF+SCHOOL!8m2!3d-23.0123575!4d-43.3216017!3m4!1s0x0:0x6c0df6fb06314508!8m2!3d-23.0123575!4d-43.3216017"}
                style={{textDecoration:'none'}}>
                    <FontAsH1>Localização         </FontAsH1>
                </a>
            </ChooseButton>
        </ChooseContainer>
    )
}