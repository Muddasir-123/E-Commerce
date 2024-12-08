import Nav1 from "../components/assets/nav1"
import Home from "../components/assets/home3"
import Feature3 from '../components/assets/feature3'
import Sign2 from "../components/assets/sign2"
import Feature1 from "../components/assets/feature"
import Footer from "../components/assets/footer1"
import { Listing1 } from "../components/assets/listing1"
import { Listing2 } from "../components/assets/listing2"
export default function HomePage(){
    return (
        <div>
            <Nav1 />
            <Home />
            <Feature3 />
            <Listing2 />
            <Listing1 />
            <Sign2 />
            <Feature1 />
            <Footer />
        </div>
    )
}