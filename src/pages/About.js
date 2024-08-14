import AboutContent from "./components/AboutContent";
import Breadcrumb from "./components/BreadCrumb";
import Map from "./components/Map";
import SectionTitle from "./components/SectionTitle";

function About() {
    return (
        <div>
            <Breadcrumb items={["Home", "About"]} />
            <SectionTitle title={"About Us"} />
            <AboutContent />
            <SectionTitle title={"Our Location"} />
            <Map />
        </div>
    );
}

export default About;