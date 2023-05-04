/* eslint-disable react/prop-types */
import { OutlinedButton } from "../buttons/OutlinedButton";
import { SectionHeader } from "../headings/SectionHeader";

export const SplitSection = ({illustration, headerTitle, headerSubTitle, buttonText, direction, icon}) => {
	return (
		<section className={`mt-24 flex flex-row${direction === "reverse" && "-reverse"} items-center`}>
			<div className="w-full p-32">
				<div className="flex flex-col gap-3 items-start">
					<SectionHeader
						title={headerTitle}
						subTitle={headerSubTitle}
						className=" items-start"
					/>
					<OutlinedButton text={buttonText} icon={icon} />
				</div>
			</div>

			<div className="w-full">
				<img
					src={illustration}
					alt="illustration"
				/>
			</div>
		</section>
	);
};
