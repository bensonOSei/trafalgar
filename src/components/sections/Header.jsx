import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo (2).svg";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export const Header = () => {
	const navCtr = useRef();
	// const [navOpen, setNavOpen] = useState(false);

	const openNav = () => {
		navCtr.current.classList.remove("hidden");
		navCtr.current.classList.add("flex");
	};

	const closeNav = () => {
		navCtr.current.classList.remove("flex");
		navCtr.current.classList.add("hidden");
	}
	return (
		<header className="flex flex-row items-center justify-between py-5 ">
			<div className=" w-32 h-10">
				<img
					src={logo}
					alt="logo"
					className="w-full h-full object-contain"
				/>
			</div>
			<nav
				ref={navCtr}
				className="fixed md:relative top-0 left-0 w-full md:w-auto h-full md:bg-inherit bg-gray-200 hidden md:flex md:flex-row flex-col md:items-center md:justify-center gap-7 p-24 md:p-0 ">
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

				<button 
				onClick={closeNav}
				className="absolute top-10 right-10 text-2xl inline sm:hidden ">
					<FontAwesomeIcon icon={faTimes} />
				</button>
			</nav>

			<button
				className="text-lg inline-block sm:hidden active:outline-none"
				onClick={openNav}>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</header>
	);
};
