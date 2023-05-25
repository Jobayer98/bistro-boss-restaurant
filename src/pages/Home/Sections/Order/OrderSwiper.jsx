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
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={soup} alt="soup" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={pizza} alt="pizza" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={dessert} alt="dessert" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={salad} alt="salad" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={pizza} alt="pizza" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={dessert} alt="dessert" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-72 " loading="lazy" src={salad} alt="salad" />
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderSwiper;
