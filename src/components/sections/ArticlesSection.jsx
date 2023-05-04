import { ArticleCard } from "../cards/ArticleCard";
import { SectionHeader } from "../headings/SectionHeader";

export const ArticlesSection = () => {
	return (
		<section>
			<SectionHeader
				title="Check out our latest article"
				className="text-center items-center"
			/>
			<div className="flex flex-wrap items-center justify-evenly gap-3" >
				<ArticleCard
					title="Disease detection, check up in the laboratory"
					snippet="In this case, the role of the health laboratory is very important to do a disease detection..."
				/>
				<ArticleCard
					title="Herbal medicines that are safe for consumption"
					snippet="Herbal medicine is very widely used at this time because of its very good for your health..."
				/>
                <ArticleCard
                    title="Natural care for healthy facial skin"
                    snippet="A healthy lifestyle should start from now and also for your skin health. There are some..."
                />
			</div>
		</section>
	);
};
