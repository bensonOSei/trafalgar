/* eslint-disable react/prop-types */

export const SolidButton = ({ text }) => {
	return (
		<a
			href="#"
			className="px-10 bg-primary text-white p-3 rounded-3xl hover:bg-primary-dark transition-all font-semibold">
			{text}
		</a>
	);
};
