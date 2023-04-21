import Header from '../components/surfschool/Header';
import Footer from '../components/surfschool/Footer';

import PartOne from '../components/surfschool/PartOne';
import PartTwo from '../components/surfschool/PartTwo';
import PartThree from '../components/surfschool//PartThree';
import PartFour from '../components/surfschool/PartFour';
import PartFive from '../components/surfschool//PartFive';
import PartSix from '../components/surfschool/PartSix';
import WhatsButton from '../components/surfschool/WhatsButton';


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