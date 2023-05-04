import logo from "../../assets/logo (1).svg";

export const Footer = () => {
	return (
		<footer className="flex flex-row items-stretch justify-evenly bg-gradient-to-b from-primary-light to-primary-dark text-white p-24">
			<div className="flex flex-col gap-3 w-96 justify-evenly">
				<div>
					<img
						src={logo}
						alt="Logo"
					/>
				</div>
				<p>
					Trafalgar provides progressive, and affordable healthcare,
					accessible on mobile and online for everyone
				</p>
				<p>©Trafalgar PTY LTD 2020. All rights reserved</p>
			</div>

			<div>
				<h3 className="font-bold text-lg mb-2">Company</h3>
				<nav className="flex flex-col gap-4">
					<a
						href="#"
						className="hover:text-slate-200">
						About
					</a>
					<a
						href="#"
						className="hover:text-slate-200">
						Testimonials
					</a>
					<a
						href="#"
						className="hover:text-slate-200">
						Find a doctor
					</a>
					<a
						href="#"
						className="hover:text-slate-200">
						Apps
					</a>
				</nav>
			</div>

			<div>
				<h3 className="font-bold text-lg mb-2">Region</h3>
				<nav className="flex flex-col gap-4">
					<a
						href="#"
						className="hover:text-slate-200">
						Indonesia
					</a>
					<a
						href="#"
						className="hover:text-slate-200">
						Singapore
					</a>
					<a
						href="#"
						className="hover:text-slate-200">
						Hong Kong
					</a>
					<a
						href="#"
						className="hover:text-slate-200">
						Canada
					</a>
				</nav>
			</div>

			<div>
				<h3 className="font-bold text-lg mb-2">Help</h3>
				<nav className="flex flex-col gap-4">
					<a
						href="#"
						className="hover:text-slate-200">
						Help center
					</a>
					<a
						href="#"
						className="hover:text-slate-200">
						Contact
					</a>
					<a
						href="#"
						className="hover:text-slate-200">
						Instructions
					</a>
					<a
						href="#"
						className="hover:text-slate-200">
						How it works
					</a>
				</nav>
			</div>
		</footer>
	);
};
