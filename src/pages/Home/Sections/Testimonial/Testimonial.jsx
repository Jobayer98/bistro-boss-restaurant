// Import Swiper React components
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useFetch from "../../../../hooks/useFetch";
// import TestimonialRating from "./Rating/Rating";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const { data: reviews } = useFetch("http://localhost:3000/reviews");

  return (
    <section className="mt-24">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Clients Say"}
      />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper text-center font-['Inter']"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                className="mx-auto"
              />
              <FaQuoteLeft className=" text-5xl mx-auto my-6" />
            </div>
            <p className="w-[80%] mx-auto">{review.details}</p>
            <h1 className="text-2xl mt-4 text-[#cd9004]">{review.name}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
