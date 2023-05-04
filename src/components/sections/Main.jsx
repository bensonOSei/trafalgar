import { AdditionalSections } from "./AdditionalSections";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";

export const Main = () => {
	return (
		<main>
			<Hero />
			<Services />
			<AdditionalSections />
			<Testimonials />
		</main>
	);
};
