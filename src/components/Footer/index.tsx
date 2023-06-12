import { FooterContainer, footerVariant, FooterImg,FooterSocial, FooterList, FooterTools, FooterLogo, Ul } from "./styles";
import { FaInstagram, FaFacebookF, FaArrowCircleRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FontAsH2 } from "../Prices/styles";

interface FooterProps {
    FooterVariant: footerVariant;
}

export function Footer(props: FooterProps) {
    return (
        <FooterContainer>
            <FooterSocial>
                <Ul>
                    {(props.FooterVariant == 'surf')?(
                        <a href='https://www.instagram.com/stp.surfschool/'><FooterList><FaInstagram size = {'2rem'}/></FooterList></a>
                    ):(
                        <a href='https://www.instagram.com/arena.stp/'><FooterList><FaInstagram size = {'2rem'} /></FooterList></a>
                    )}
                </Ul>
            </FooterSocial>
            
            <FooterLogo>
                <FooterImg footerVariant = {props.FooterVariant} />
            </FooterLogo>

            <FooterTools>
            <Ul>
            
                <Link to='/'>
                    <FaArrowCircleRight size = {'1.6rem'} color={'white'} />
                </Link>
            
            </Ul>
            </FooterTools>
            
        </FooterContainer>
    )
} 