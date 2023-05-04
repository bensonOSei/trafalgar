import searchIcon from "../../assets/search.png";
import pill from "../../assets/pill.png";
import phone from "../../assets/phone.png";
import deatiledChart from "../../assets/med_chart.png";
import medKit from "../../assets/med_kit.png";
import chart from "../../assets/chart.png";

import { ServiceCard } from "../cards/ServiceCard";
import { OutlinedButton } from "../buttons/OutlinedButton";
import { SectionHeader } from "../headings/SectionHeader";

export const Services = () => {
	return (
		<section className="mt-1 md:mt-24 flex flex-col items-center">
			<SectionHeader
				title="Our Services"
				subTitle="We provide to you the best choiches for you. 
                Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors 
                you can consult with us which type of service is suitable for your health"
				className="text-center items-center"
			/>

			<div className="flex flex-wrap justify-center p-4 gap-7 mt-10 mb-4">
				<ServiceCard
					title="Search doctor"
					icon={searchIcon}
					text="Choose your doctor from thousands of specialist,
                general, and trusted hospitals"
				/>

				<ServiceCard
					title="Online pharmacy"
					icon={pill}
					text="Buy  your medicines with our mobile application with a simple delivery system"
				/>

				<ServiceCard
					title="Consultation"
					icon={phone}
					text="Free consultation with our trusted doctors and get the best recomendations"
				/>

				<ServiceCard
					title="Details info"
					icon={deatiledChart}
					text="Free consultation with our trusted doctors and get the best recomendations"
				/>

				<ServiceCard
					title="Emergency care"
					icon={medKit}
					text="You can get 24/7 urgent care for yourself or your children and your lovely family"
				/>

				<ServiceCard
					title="Tracking"
					icon={chart}
					text="Track and save your medical history and health data "
				/>
			</div>

			<OutlinedButton text="Learn more" />
		</section>
	);
};
