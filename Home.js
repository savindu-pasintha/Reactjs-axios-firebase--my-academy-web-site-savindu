//import NavigationBar from './CommonFiles/NavigationBar';
import Footer from './CommonFiles/footer';
import Acheive from './Acheive';
import Freeonlinenaterial from './Freonlinematerial';
import ControlledCarousel from './carosal';
import CardListloop from './CardListloop';

export default function Home() {
    return (
        <div>
            <ControlledCarousel />
            <Acheive />
            <Freeonlinenaterial />
            <CardListloop />
            <Footer />
        </div>
    );
}