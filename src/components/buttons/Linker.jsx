/* eslint-disable react/prop-types */

export const Linker = ({children}) => {
	return (
		<a
			href="#"
			className="text-primary-light hover:text-primary font-semibold">
                {children}
		</a>
	);
};
