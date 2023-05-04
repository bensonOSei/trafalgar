import herIllustration from "../../assets/illustration.png";
import { SolidButton } from "../buttons/SolidButton";

export const Hero = () => {
	return (
		<section className="flex flex-col md:flex-row  items-center mb-4 md:mt-20">
			<div className="flex flex-col items-start gap-4 md:pr-7">
				<h1 className="font-bold text-5xl ">
					Virtual healthcare for you
				</h1>
				<p className="text-slate-500">
					Trafalgar provides progressive, and affordable healthcare,
					accessible on mobile and online for everyone
				</p>
                <SolidButton text="Consult today" />
			</div>

			<div>
				<img
					src={herIllustration}
					alt="hero illustration"
				/>
			</div>
		</section>
	);
};
