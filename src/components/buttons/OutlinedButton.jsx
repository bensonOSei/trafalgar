/* eslint-disable react/prop-types */

export const OutlinedButton = ({ text, icon }) => {
	return (
		<a
			href="#"
			className="px-10 outline outline-1 outline-primary text-primary hover:text-white p-3 rounded-3xl hover:bg-primary transition-all font-semibold">
			{text} {icon}
		</a>
	);
};
