/* eslint-disable react/prop-types */

export const SectionHeader = ({ className, title, subTitle, theme }) => {
	return (
		<div className={`flex flex-col gap-4 mb-4 ${className}`}>
			<h2 className="font-bold text-2xl">{title}</h2>
			<div className={` w-10 h-0.5 bg-${theme === undefined ? "black" : theme  }`}></div>
			<p className="text-slate-500">{subTitle}</p>
		</div>
	);
};
