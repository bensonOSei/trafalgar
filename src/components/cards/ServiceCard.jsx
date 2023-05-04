/* eslint-disable react/prop-types */
export const ServiceCard = ({ icon, text, title }) => {
	return (
		<div className="flex flex-col gap-3 bg-white py-6 px-7 w-80 rounded-2xl shadow-2xl hover:shadow-xl hover:translate-y-1 transition-all cursor-pointer">
			<div className=" w-20 h-20" >
				<img
                    className="w-full h-full object-contain"
					src={icon}
					alt={icon}
				/>
			</div>
			<h3 className="font-bold">{title}</h3>
			<p className="text-slate-500 ">{text}</p>
		</div>
	);
};
