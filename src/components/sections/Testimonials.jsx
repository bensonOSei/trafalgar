import { SectionHeader } from "../headings/SectionHeader";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Testimonials = () => {
	return (
		<section className="p-24 flex items-center justify-center w-full max-w-7xl">
			<div className=" bg-gradient-to-b from-primary-light to-primary-dark w-full max-w-4xl p-8 rounded-xl">
				<SectionHeader
					title="What our customers are saying"
					className="items-center text-center justify-center text-white"
					theme="white"
				/>

				<Swiper
					modules={[Pagination, Navigation]}
					spaceBetween={30}
					slidesPerView={1}
					pagination={{ clickable: true }}
					navigation={true}
					loop={true}
					className="w-full max-w-5xl "
					>
					<SwiperSlide className="flex gap-2 items-center py-8">
						<div className="flex items-center gap-3 w-full ">
							<div className="w-20 h-20 bg-white rounded-full "></div>
							<div className="flex flex-col">
								<h3 className="text-white font-semibold">
									Edward Newgate
								</h3>
								<p className="text-white text-sm">
									Founder Circle
								</p>
							</div>
						</div>
						<p className="text-white text-sm">
							“Our dedicated patient engagement app and web portal
							allow you to access information instantaneously (no
							tedeous form, long calls, or administrative hassle)
							and securely”
						</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};
