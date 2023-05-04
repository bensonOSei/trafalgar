import logo from "../../assets/logo.png";

export const Header = () => {
	return (
		<header className="flex flex-row items-center justify-between py-5 ">
			<div className="">
				<img
					src={logo}
					alt="logo"
				/>
			</div>
			<nav>
				<a
					href="#"
					className="px-3 text-tertiary font-bold">
					Home
				</a>
				<a
					href="#"
					className="px-3 text-slate-500 hover:text-primary transition-all duration-100 ease-in-out">
					Find a doctor
				</a>
				<a
					href="#"
					className="px-3 text-slate-500 hover:text-primary transition-all duration-100 ease-in-out">
					Apps
				</a>
				<a
					href="#"
					className="px-3 text-slate-500 hover:text-primary transition-all duration-100 ease-in-out">
					Testimonials
				</a>
				<a
					href="#"
					className="px-3 text-slate-500 hover:text-primary transition-all duration-100 ease-in-out">
					About us
				</a>
			</nav>
		</header>
	);
};
