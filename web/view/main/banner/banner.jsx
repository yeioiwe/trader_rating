'use client'
import { usePagesGetImagesBanner } from '@/shared/config/api/pages/pages';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import { Box, CircularProgress } from '@mui/material';

export function Banner() {
  const { data: images, isPending } = usePagesGetImagesBanner()
  const router = useRouter()

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  if (isPending) return <BannerSkeleton />;
  if (images === undefined) return null;
  if (images.items.length === 0) return null;

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {images.items.map((s, i) => <SwiperSlide key={i} onClick={() => router.push(s.url)}>
          <img src={s.image} />
        </SwiperSlide>)}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

const BannerSkeleton = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={350} bgcolor={'#ECF2FF'} borderRadius={'8px'}>
      <CircularProgress />
    </Box>
  );
}