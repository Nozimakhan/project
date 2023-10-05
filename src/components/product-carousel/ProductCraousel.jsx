import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './ProductCraousel.scss';
import ProductCard from '../product-card/ProductCard';

const ProductCraousel = ({ categoryData }) => {
    console.log(categoryData.allRefinedProducts)
    return (
        <div>
            <Swiper
            breakpoints={{
                360: {
                    width: 360,
                    slidesPerView: 1.1,
                },
                460: {
                    width: 460,
                    slidesPerView: 1.7,
                },
                560: {
                    width: 560,
                    slidesPerView: 1.9,
                },
                760: {
                    width: 760,
                    slidesPerView: 3,
                }
            }}
                slidesPerView={8}
                spaceBetween={10}
                slidesPerGroup={1}
                autoplay={{delay: 1000}}
                loop={true}
                draggable={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    categoryData.allRefinedProducts.map(product =>
                        <SwiperSlide key={product._id}>
                            <ProductCard productData={product} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default ProductCraousel 