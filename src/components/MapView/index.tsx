import { FontAsH3, FontAsLink, Img, Informations, MapContainer } from "./styles";

import galerinha from '../../assets/images/galerinha.jpg';
import local from '../../assets/images/local.jpg';
import maps from '../../assets/images/maps.jpg';
import { FaArrowCircleRight, FaInstagram } from 'react-icons/fa';

interface ImageProps {
    variantImage?: any;
}

export function MapView(props:ImageProps) {
    return (
        <MapContainer>
            <Informations>
                <Img src={(props.variantImage =='surf')?(local):(galerinha)} style={(props.variantImage !=='surf')?{height: 'auto', width:'70vw'}:{height: 'auto', width:'35vw'}}/>
                <FontAsH3>
                    <FontAsH3>
                        <FontAsLink href='https://www.instagram.com/stp.surfschool/'>
                            <FaInstagram /> Conheça nosso Instagram
                        </FontAsLink>
                    </FontAsH3>
                </FontAsH3>
            </Informations>
            <Informations>
            <Img src={maps} hidden={(props.variantImage =='surf')?(false):(true)}/>

                <FontAsH3>
                    <FontAsLink href={"https://www.google.com/maps/place/STP+SURF+SCHOOL/@-23.0123575,-43.3216017,15z/data=!4m12!1m6!3m5!1s0x0:0x6c0df6fb06314508!2sSTP+SURF+SCHOOL!8m2!3d-23.0123575!4d-43.3216017!3m4!1s0x0:0x6c0df6fb06314508!8m2!3d-23.0123575!4d-43.3216017"}> <FaArrowCircleRight /> Abrir navegação.</FontAsLink>
                </FontAsH3>
            </Informations>

        </MapContainer>
    )
}