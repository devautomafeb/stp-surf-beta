import { HeaderContainer, headerVariant, HeaderImg,HeaderSocial, HeaderList, HeaderTools, HeaderLogo } from "./styles";
import { FaInstagram, FaFacebookF, FaArrowCircleRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

interface HeaderProps {
    headerVariant: headerVariant;
}

export function Header(props: HeaderProps) {
    return (
        <HeaderContainer>
            <HeaderSocial>
                <ul>
                    {(props.headerVariant == 'surf')?(
                        <a href='https://www.instagram.com/stp.surfschool/'><HeaderList><FaInstagram  size = {'2.2rem'}/></HeaderList></a>
                    ):(
                        <a href='https://www.instagram.com/arena.stp/'><HeaderList><FaInstagram  size = {'2.2rem'}/></HeaderList></a>
                    )}
                </ul>
            </HeaderSocial>
            <HeaderLogo>
                <HeaderImg headerVariant = {props.headerVariant} />
            </HeaderLogo>
            <HeaderTools>
            <ul>
                <Link to='/'>
                    <FaArrowCircleRight size = {'1.2rem'} color={'#1e4f61'} />
                    <HeaderList>Home</HeaderList>
                </Link>
            </ul>
            </HeaderTools>
        </HeaderContainer>
    )
} 