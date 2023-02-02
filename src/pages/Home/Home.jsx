import { useRef } from "react";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import AboutSection from "./components/AboutSection/AboutSection";
import WorkSection from "./components/WorkSection/WorkSection";
import ContactSection from "./components/ContactSection/ContactSection";

const Home = () => {
    const aboutSectionRef = useRef(null);
    return (
        <>
            <div id="middle-row-narrow">
                <HeaderSection aboutSectionRef={aboutSectionRef}/>
                <AboutSection ref={aboutSectionRef}/>
                <WorkSection />
                <ContactSection />
            </div>
        </>
    );
};

export default Home;