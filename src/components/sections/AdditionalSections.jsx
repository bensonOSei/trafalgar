import illustration from "../../assets/section-illus.png";
import illustrationTwo from "../../assets/hero-ill.png";
import { SplitSection } from "./SplitSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const AdditionalSections = () => {
	return (
        <>
            <SplitSection
                illustration={illustration}
                headerTitle = "Leading healthcare providers"
                headerSubTitle = "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
                buttonText ={`Learn more`}
                direction = "reverse"
             />

            <SplitSection
                illustration={illustrationTwo}
                headerTitle = "Download our mobile apps"
                headerSubTitle = "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
                icon ={<FontAwesomeIcon icon={faArrowDown} className="ml-2" />}
                buttonText ={`Download`}
            />
        </>
	);
};
