import { FontAsH1, FontAsH2, FontAsH3, Img, PricesContainer, PricesContainerSuper } from "./styles";

import logo from "../../assets/images/Screenshot_20230523_225823_WhatsApp-removebg-preview.png";
import { FaMoneyBillWave, FaRegCalendarAlt } from "react-icons/fa";
import React from "react";


interface PricesProps {
    variant?: React.ReactNode;
}

function SurfPrices() {
    return (
        <PricesContainerSuper>

            <PricesContainer>
                <img src={logo} style={{ height: '100px' }} />
                <FontAsH1><FaRegCalendarAlt />  Horários:</FontAsH1>
                <FontAsH2>Segundas e Quartas:</FontAsH2>
                <FontAsH3>8:00 às 09:00</FontAsH3>
                <FontAsH2>Terça, Quinta e Sexta:</FontAsH2>
                <FontAsH3>6:30 às 07:30</FontAsH3>
                <FontAsH3>8:00 às 09:00</FontAsH3>
                <FontAsH2>Sábado e Domingo:</FontAsH2>
                <FontAsH3>7:00 às 08:00</FontAsH3>
                <FontAsH3>8:00 às 09:00</FontAsH3>
                <FontAsH3>9:30 às 10:30</FontAsH3>
            </PricesContainer>
            <Img src={logo} />
            <PricesContainer>
                <img src={logo} style={{ height: '100px' }} />
                <FontAsH1><FaMoneyBillWave />  Planos:</FontAsH1>
                <FontAsH2>2X na semana: </FontAsH2>
                <FontAsH3>R$ 350,00/mês </FontAsH3>
                <FontAsH2>3X na semana: </FontAsH2>
                <FontAsH3>R$ 480,00/mês </FontAsH3>
                <FontAsH2>Aula Particular: </FontAsH2>
                <FontAsH3>R$ 150,00 </FontAsH3>
                <FontAsH2>Pacote com 5 aulas: </FontAsH2>
                <FontAsH3>R$400,00 </FontAsH3>
            </PricesContainer>

        </PricesContainerSuper>)
}

function BeachPrices() {
    return (
        <PricesContainerSuper>
            <PricesContainer>
                <img src={logo} style={{ height: '100px' }} />
                <FontAsH1><FaRegCalendarAlt />  Horários:</FontAsH1>
                <FontAsH2>Segundas e Quartas:</FontAsH2>
                <FontAsH3>7:00 às 08:00</FontAsH3>
                <FontAsH2>Terça e Quinta:</FontAsH2>
                <FontAsH3>18:30 às 19:30</FontAsH3>
            </PricesContainer>
            <Img src={logo} />
            <PricesContainer>
                <img src={logo} style={{ height: '100px' }} />
                <FontAsH1><FaMoneyBillWave />  Planos:</FontAsH1>
                <FontAsH2>2X na semana: </FontAsH2>
                <FontAsH3>R$ 350,00/mês </FontAsH3>
                <FontAsH2>Livre: </FontAsH2>
                <FontAsH3>R$ 480,00/mês </FontAsH3>
            </PricesContainer>
        </PricesContainerSuper>)
}

function Beach() {
    return(
    <PricesContainerSuper>
        <PricesContainer>
            <img src={logo} style={{ height: '100px' }} />
            <FontAsH1><FaRegCalendarAlt />  Horários:</FontAsH1>
            <FontAsH2>Sexta-Feira:</FontAsH2>
            <FontAsH3>06:30 às 07:30</FontAsH3>
        </PricesContainer>
        <Img src={logo} />
        <PricesContainer>
            <img src={logo} style={{ height: '100px' }} />
            <FontAsH1><FaMoneyBillWave />  Plano:</FontAsH1>
            <FontAsH3>R$ 180,00/mês </FontAsH3>
        </PricesContainer>
    </PricesContainerSuper>)
}

function Yoga() {
    return(
    <PricesContainerSuper>
        <PricesContainer>
            <img src={logo} style={{ height: '100px' }} />
            <FontAsH1><FaRegCalendarAlt />  Horários:</FontAsH1>
            <FontAsH2>Sexta-Feira:</FontAsH2>
            <FontAsH3>06:30 às 07:30</FontAsH3>
        </PricesContainer>
        <Img src={logo} />
        <PricesContainer>
            <img src={logo} style={{ height: '100px' }} />
            <FontAsH1><FaMoneyBillWave />  Plano:</FontAsH1>
            <FontAsH3>R$ 180,00/mês </FontAsH3>
        </PricesContainer>
    </PricesContainerSuper>)
}

function Funcional() {
    return(<PricesContainerSuper>
        <PricesContainer>
            <img src={logo} style={{ height: '100px' }} />
            <FontAsH1><FaRegCalendarAlt />  Horários:</FontAsH1>
            <FontAsH2>Segunda e Quinta:</FontAsH2>
            <FontAsH3>07:00 às 08:00</FontAsH3>
            <FontAsH2>Sábado:</FontAsH2>
            <FontAsH3>07:30 às 08:30</FontAsH3>
        </PricesContainer>
        <Img src={logo} />
        <PricesContainer>
            <img src={logo} style={{ height: '100px' }} />
            <FontAsH1><FaMoneyBillWave />  Planos:</FontAsH1>
            <FontAsH2>2X na semana: </FontAsH2>
            <FontAsH3>R$ 220,0/mês </FontAsH3>
            <FontAsH2>Livre: </FontAsH2>
            <FontAsH3>R$ 390/mês </FontAsH3>
        </PricesContainer>
    </PricesContainerSuper>)
}

function MuayThai() {
    return(<PricesContainerSuper>
        <PricesContainer>
            <img src={logo} style={{ height: '100px' }} />
            <FontAsH1><FaRegCalendarAlt />  Horários:</FontAsH1>
            <FontAsH2>Terça e Quinta:</FontAsH2>
            <FontAsH3>18:30 às 19:30</FontAsH3>
            <FontAsH2>Quarta e Sexta:</FontAsH2>
            <FontAsH3>08:00 às 09:00</FontAsH3>
        </PricesContainer>
        <Img src={logo} />
        <PricesContainer>
            <img src={logo} style={{ height: '100px' }} />
            <FontAsH1><FaMoneyBillWave />  Planos:</FontAsH1>
            <FontAsH2>2X na semana: </FontAsH2>
            <FontAsH3>R$ 220,0/mês </FontAsH3>
            <FontAsH2>Livre: </FontAsH2>
            <FontAsH3>R$ 390/mês </FontAsH3>
        </PricesContainer>
    </PricesContainerSuper>)
}

function handlePrice(variantPrice: React.ReactNode) {

    if (variantPrice === 'surf') {
        return (
            <SurfPrices />
        )
    } else if (variantPrice === "funcional") {
        return (
            <Funcional />
        )
    }
    else if (variantPrice === "muayThai") {
        return (
            <MuayThai />
        )
    }
    else if (variantPrice === "yoga") {
        return (
            <Yoga />
        )
    }
    else if (variantPrice === "beach") {
        return (
            <Beach />
        )
    } else {
        return (<div>Não encontrado</div>)
    }
}

export function Prices(props: PricesProps) {
    const variantPrice = props.variant;
    return (
        <>
            {handlePrice(variantPrice)}
        </>
    )

}
