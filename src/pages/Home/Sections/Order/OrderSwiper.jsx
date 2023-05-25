import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import salad from "../../../../assets/home/salad.jpg";
import soup from "../../../../assets/home/soup.jpg";
import pizza from "../../../../assets/home/pizza.jpg";
import dessert from "../../../../assets/home/dessert.jpg";

const OrderSwiper = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={salad} alt="salad" />
        <p className="text-xl font-semibold text-white -mt-12 text-center uppercase">
          Salad
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={soup} alt="soup" />
        <p className="text-xl font-semibold text-white -mt-12 text-center uppercase">
          Soup
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={pizza} alt="pizza" />
        <p className="text-xl font-semibold text-white -mt-12 text-center">
          pizza
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={dessert} alt="dessert" />
        <p className="text-xl font-semibold text-white -mt-12 text-center">
          dessert
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={salad} alt="salad" />
        <p className="text-xl font-semibold text-white -mt-12 text-center">
          Salad
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderSwiper;
