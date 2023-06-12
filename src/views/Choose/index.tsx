import { Img, Logo } from "../../components/MainVideo/styles";
import { ChooseButton, ChooseContainer, ChooseContainer2, FotoIniVariant } from "./styles";

import logo from "../../assets/images/logooo.png";
import func4 from '../../assets/images/func4.png';
import boxe4 from '../../assets/images/boxe4.png';
import beach4 from '../../assets/images/beach4.png';
import yoga4 from '../../assets/images/yoga4.png';

import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { MdSurfing } from "react-icons/md";

import { Link } from "react-router-dom";
import { FontAsH1 } from "./styles";

interface FotoIniProps{
    variant: FotoIniVariant;
}

export function Choose() {
    return (
        <ChooseContainer variant="sea">
        <ChooseContainer2>
            <Logo><Img src={logo}/></Logo>

            <Link to='/surf' style={{ textDecoration: 'none' }}>

                <ChooseButton>
                    <MdSurfing size={'4rem'} color={'#d7d7d7'} style={{padding:'20px'}} />
                    <FontAsH1>Surf</FontAsH1>
                    <MdSurfing size={'4rem'} color={'#d7d7d7'} style={{padding:'20px'}}/>
                </ChooseButton>
            </Link>


            <Link to='/funcional' style={{ textDecoration: 'none' }}>
                <ChooseButton>
                    <Img src={func4} style={{ color: '#d7d7d7',height:'100px',padding:'20px' }} />
                    <FontAsH1>Funcional     </FontAsH1>
                    <Img src={func4} style={{ color: '#d7d7d7',height:'100px',padding:'20px' }} />
                </ChooseButton>
            </Link>


            <Link to='/muaythai' style={{ textDecoration: 'none' }}>
                <ChooseButton>
                    <Img src={boxe4} style={{ color: '#d7d7d7',height:'100px',padding:'20px' }} />
                    <FontAsH1>Muay-Thai    </FontAsH1>
                    <Img src={boxe4} style={{ color: '#d7d7d7',height:'100px',padding:'20px' }} />
                </ChooseButton>
            </Link>

            <Link to='/yoga' style={{ textDecoration: 'none' }}>
                <ChooseButton>
                    <Img src={yoga4} style={{ color: '#d7d7d7',height:'100px',padding:'20px' }} />
                    <FontAsH1>Yoga         </FontAsH1>
                    <Img src={yoga4} style={{ color: '#d7d7d7',height:'100px',padding:'20px' }} />
                </ChooseButton>
            </Link>

            <Link to='/beach' style={{ textDecoration: 'none' }}>
                <ChooseButton>
                    <Img src={beach4} style={{ color: '#d7d7d7',height:'100px',padding:'20px' }} />
                    <FontAsH1>Beach Tennis         </FontAsH1>
                    <Img src={beach4} style={{ color: '#d7d7d7',height:'100px',padding:'20px' }} />
                </ChooseButton>
            </Link>

            <a href='https://www.instagram.com/arena.stp/' style={{ textDecoration: 'none' }}>
                <ChooseButton>
                    <FaInstagram size={'4rem'} color={'#d7d7d7'} style={{padding:'20px'}}/>

                    <FontAsH1>Instagram         </FontAsH1>

                    <FaInstagram size={'4rem'} color={'#d7d7d7'} style={{padding:'20px'}}/>
                </ChooseButton>
            </a>


            <a href={"https://www.google.com/maps/place/STP+SURF+SCHOOL/@-23.0123575,-43.3216017,15z/data=!4m12!1m6!3m5!1s0x0:0x6c0df6fb06314508!2sSTP+SURF+SCHOOL!8m2!3d-23.0123575!4d-43.3216017!3m4!1s0x0:0x6c0df6fb06314508!8m2!3d-23.0123575!4d-43.3216017"}
                style={{ textDecoration: 'none' }}>
                <ChooseButton>
                    <FaMapMarkerAlt size={'4rem'} color={'#d7d7d7'} style={{padding:'20px'}} />
                    <FontAsH1>Localização         </FontAsH1>
                    <FaMapMarkerAlt size={'4rem'} color={'#d7d7d7'} style={{padding:'20px'}} />
                </ChooseButton>
            </a>
        </ChooseContainer2>
        </ChooseContainer>
    )
}
