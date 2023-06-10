import { CardText, Img, TextVariant } from "./styles";

interface TextProps {
    variantText?: TextVariant;
    textToWrite?: React.ReactNode;
    dirImg?:any;
}

export function TextCard(props: TextProps) {
    return (
        <CardText variant = {props.variantText}>
            <Img src = {props.dirImg} variant = {props.variantText} />
            {props.textToWrite} 
        </CardText>
    )
}