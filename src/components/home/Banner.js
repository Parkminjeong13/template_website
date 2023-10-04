import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styled from 'styled-components'


const StyleSlide = styled(SwiperSlide)`
  position: relative;
  img{width: 100%; height: auto;}
`

const DescContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  h3{
    text-align: center;
    font-size: 48px;
    @media screen and (max-width: 768px){
      font-size: 16px;
    }
    @media screen and (max-width: 1280px){
      font-size: 30px;
    }
  }
  p{
    font-size: 24px;
    text-align: center; font-weight: bold;
    @media screen and (max-width: 768px){
      font-size: 14px;
    }
    @media screen and (max-width: 1280px){
      font-size: 20px;
    }
  }
`
function Banner() {
  return (
    <>
      <Swiper
        autoplay={{
          delay : 3000,
          disableOnInteraction: false
        }}
        loop={true}
        slidesPerView={1}
        navigation={{clickable: true}}
        pagination={{clickable: true}}
        modules={[Autoplay, Navigation, Pagination]}
      >
      {Array(5).fill().map((_,i)=>{
        return(
          <SwiperSlide key={i}>
            <img src={`./images/image${i+1}.${i===4 ? 'jpg' : 'png'}`} alt="slide" />
            <DescContent>
              <h3>강조하는 제목 {i}</h3>
            </DescContent>
          </SwiperSlide>
        )
      })}
        {/* <SwiperSlide>
          <img src="./images/image1.png" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/image2.png" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/image3.png" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/image4.png" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/image5.jpg" alt="slide" />
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default Banner