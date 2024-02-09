import {Swiper,SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/swiper.css'
export function Photo() {
    return(
        <>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{backgroundColor:'pink'}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{backgroundColor:'orange'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{backgroundColor:'yellow'}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{backgroundColor:'lightgreen'}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{backgroundColor:'lightblue'}}>Slide 5</SwiperSlide>
      </Swiper>
        </>
    )
}