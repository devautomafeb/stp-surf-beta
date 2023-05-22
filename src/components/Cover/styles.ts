import styled, {css} from 'styled-components';

import imageSurf from '../../assets/images/imagem01.jpg';
import imageArena from '../../assets/images/ArenaCapa2.jpg';
import imageBeachTennis from '../../assets/images/beachTennisCover.jpg';
import imageMuayThai from '../../assets/images/muay01.jpg';
import imageYoga from '../../assets/images/yoga02.jpg';
import imageFuncional from '../../assets/images/ArenaCapa2.jpg';

export type CoverVariant = 'surf' | 'arena'| 'beachtennis'| 'muayThai'| 'yoga'| 'funcional';

interface CoverVariantProps{
    variant: CoverVariant;
}

const coverVariants = {
    surf : imageSurf,
    arena: imageArena,
    beachtennis: imageBeachTennis,
    muayThai: imageMuayThai,
    yoga: imageYoga,
    funcional: imageFuncional
}

export const CoverContainer = styled.div<CoverVariantProps>`
    height: 100vh;
    width: auto;
    background-image:url(${(props) => coverVariants[props.variant]});
   // ${props => (css`background-image:url(${coverVariants[props.variant]})`)}
    background-size: cover;
    background-position: center;
    text-align: center;
`;