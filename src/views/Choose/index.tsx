import { Img, Logo } from "../../components/MainVideo/styles";
import { ChooseButton, ChooseContainer } from "./styles";

import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { FontAsH1 } from "./styles";

export function Choose() {
    return (
        <ChooseContainer>
            <Logo><Img src={logo} style={{marginBottom:'20px'}} /></Logo>
            
                <Link to='/surf'style={{textDecoration:'none'}}>
                   
                 <ChooseButton>  
                     <FontAsH1>Surf</FontAsH1>
               
              </ChooseButton>       
            </Link>
            
            
                <Link to='/funcional' style={{textDecoration:'none'}}>
                <ChooseButton>
                    <FontAsH1>Funcional     </FontAsH1>
               </ChooseButton>
                    </Link>
           
            
                <Link to='/muaythai'style={{textDecoration:'none'}}>
 <ChooseButton>
                    <FontAsH1>Muay-Thai    </FontAsH1>
   </ChooseButton>             
     </Link>
            

 
            
            
                <Link to='/yoga'style={{textDecoration:'none'}}>
          <ChooseButton>
                    <FontAsH1>Yoga         </FontAsH1>
           </ChooseButton>  
                </Link>
            
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
