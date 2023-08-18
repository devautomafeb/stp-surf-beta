
import { Cover } from "../../components/Cover";
import { Header } from '../../components/Header';
import { TextCard } from "../../components/TextCard";
import { MainVideo } from "../../components/MainVideo";

import { FontAsH3, FontBold, Container, Title } from "./styles";

import prancha from '../../assets/images/prancha.jpg';
import surfista01 from '../../assets/images/surfista01.jpg';
import video01 from '../../assets/videos/video01.mp4';
import { Teacher } from "../../components/Teacher";

import professor01 from '../../assets/images/professor01.jpg';
import professor02 from '../../assets/images/professor02.jpg';
import professor033 from '../../assets/images/professor033.jpg';
import professor04 from '../../assets/images/professor04.jpg';
import { Prices } from "../../components/Prices";
import { MapView } from "../../components/MapView";
import { Footer } from "../../components/Footer";
import WhatsButton from "../../components/WhatsButton";

export function Surf() {

    const textA = <FontAsH3> A STP surgiu com a pegada de <FontBold>fazer diferente.
    </FontBold> Reunimos os melhores professores da Barra da Tijuca,
        <FontBold> com seus mais de 15 anos</FontBold> de experiência e melhoramos tudo o que foi possível quando
        se trata de aulas de surf. Nasceu então uma escola de surf em que <FontBold>o foco é o aluno.
        </FontBold> Aqui,
        temos aulas de domingo a domingo, e você escolhe o dia e horário que quer fazer sua aula,
        mesmo que isso mude o tempo todo, basta se confirmar na aula até o dia anterior.
        É isso mesmo, não temos turmas certas e definidas.
        <FontBold> Você faz sua aula quando quiser!</FontBold></FontAsH3>

    const textB = <FontAsH3><FontBold>Adicionamos a isso uma cobertura profissional de
        fotos e vídeos</FontBold> para você acompanhar sua evolução e postar à vontade.Ta esperando o
        que?! <FontBold>Vem pra STP!</FontBold></FontAsH3>

    return (
        <div>
            <Header headerVariant='surf' />
            <Cover variant='surf' />
            <TextCard variantText={"toLeft"} textToWrite={textA} dirImg={prancha} />
            <TextCard variantText={"toRight"} textToWrite={textB} dirImg={surfista01} />
            <MainVideo dirVideo={video01} kind={'surf'} />

            <Container>
                <Title>Nossos instrutores</Title>
                <Teacher name={"Rafael Maia,"} nickName={'o Rafa'} dirImg={professor01} />
                <Teacher name={"Gabriel Vasconcellos,"} nickName={'o Biel'} dirImg={professor02} />
                <Teacher name={"Lucas Guigues,"} nickName={'o Curió'} dirImg={professor033} />
                <Teacher name={"João Felipe Amaral,"} nickName={'o João'} dirImg={professor04} />
            </Container>

            <Container>
                <Prices variant={'surf'} />
            </Container>

            <Container>
                <MapView variantImage={"surf"}/>
            </Container>
            <WhatsButton />
            <Footer FooterVariant={"surf"} />

        </div >
    )
}
