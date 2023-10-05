import React from 'react';
import "./Banner.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <div className="container">
                <div className="banner-carousel-wrapper">
                    <Swiper
                        pagination={true}
                        navigation={true}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        loop={true}
                        draggable={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="banner-swiper"
                    >
                        <SwiperSlide>
                            <img src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/1.f750064639be81611932305b288222c1.svg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/2.988a32fc2cb5183ecf3d0abd56d8d4d7.svg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Banner