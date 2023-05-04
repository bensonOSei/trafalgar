import { Linker } from "../buttons/Linker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export const ArticleCard = ( { title, snippet} ) => {
	return (
		<div className="flex flex-col w-80 items-center gap-7 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
			<div className="w-full h-52 bg-slate-100"></div>
			<div className="p-6">
				<h3 className="font-bold mb-3">
					{title}
				</h3>
				<p className="text-slate-500 mb-3">
                    {snippet}
				</p>
				<Linker>
					Read more
					<FontAwesomeIcon
						icon={faArrowRight}
						className="ml-2"
					/>
				</Linker>
			</div>
		</div>
	);
};
