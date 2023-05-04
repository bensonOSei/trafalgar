import { ArticleCard } from "../cards/ArticleCard";
import { SectionHeader } from "../headings/SectionHeader";
import imageOne from "../../assets/pic1.png";
import imageTwo from "../../assets/pic2.png";
import imageThree from "../../assets/pic3.png";
import { OutlinedButton } from "../buttons/OutlinedButton";

export const ArticlesSection = () => {
	return (
		<section className="flex flex-col items-center gap-10">
			<SectionHeader
				title="Check out our latest article"
				className="text-center items-center"
			/>
			<div className="flex flex-wrap justify-evenly w-full ">
				<ArticleCard
					title="Disease detection, check up in the laboratory"
					snippet="In this case, the role of the health laboratory is very important to do a disease detection..."
					image={imageOne}
				/>
				<ArticleCard
					title="Herbal medicines that are safe for consumption"
					snippet="Herbal medicine is very widely used at this time because of its very good for your health..."
					image={imageTwo}
				/>
				<ArticleCard
					title="Natural care for healthy facial skin"
					snippet="A healthy lifestyle should start from now and also for your skin health. There are some..."
					image={imageThree}
				/>
			</div>

			<OutlinedButton text="View all" />
		</section>
	);
};
