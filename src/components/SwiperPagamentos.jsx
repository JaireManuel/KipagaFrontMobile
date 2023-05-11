// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';

const SwiperPagamentos = () => {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={5}
    slidesPerView={2}
    autoplay={true}

    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide> <IonCard>
      <IonCardHeader>
      <h4>ENDE</h4>

      <h5>Energia</h5>
      </IonCardHeader>

      <IonCardContent>
      </IonCardContent>
    </IonCard></SwiperSlide>
    <SwiperSlide> <IonCard>
      <IonCardHeader>
      <h4>Shoprite</h4>

      <h5>Mercado</h5>
      </IonCardHeader>

      <IonCardContent>
      </IonCardContent>
    </IonCard></SwiperSlide>
    <SwiperSlide> <IonCard>
      <IonCardHeader>
      <h4>Cinavazuka</h4>

      <h5>Design</h5>
      </IonCardHeader>

      <IonCardContent>
      </IonCardContent>
    </IonCard></SwiperSlide>
    <SwiperSlide> <IonCard>
      <IonCardHeader>
        <h4>ErySolution</h4>
        <h5>Computação</h5>
      </IonCardHeader>

      <IonCardContent>
      </IonCardContent>
    </IonCard></SwiperSlide>
    ...
  </Swiper>
  );
};

export default SwiperPagamentos;