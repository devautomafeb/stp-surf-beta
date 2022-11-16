import Header from '../components/Header';
import Footer from '../components/Footer';

import PartOne from '../components/PartOne';
import PartTwo from '../components/PartTwo';
import PartThree from '../components/PartThree';
import PartFour from '../components/PartFour';
import PartFive from '../components/PartFive';
import PartSix from '../components/PartSix';
import WhatsButton from '../components/WhatsButton';


function FirstPage() {
    return (
        <div>
            <Header />
            <WhatsButton />
            <PartOne />
            <PartTwo />
            <PartThree />
            <PartFour />
            <PartFive />
            <PartSix />
            <Footer />
        </div>
    )
}

export default FirstPage