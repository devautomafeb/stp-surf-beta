import { CoverContainer, CoverVariant } from "./styles";

interface CoverProps{
    variant: CoverVariant;
}

export function Cover(props: CoverProps){
    return(
        <CoverContainer variant = {props.variant} />
    )
}