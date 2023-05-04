import { AdditionalSections } from "./AdditionalSections";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { ArticlesSection } from "../sections/ArticlesSection";

export const Main = () => {
	return (
		<main className="mb-20">
			<Hero />
			<Services />
			<AdditionalSections />
			<Testimonials />
			<ArticlesSection />
		</main>
	);
};
