import React, { useEffect } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styled from 'styled-components'
import WOW from 'wowjs'
import 'animate.css'


const TxtData = [
  {
    title: "제목1",
    desc: "부제목",
    desc2: "하고싶은 말..."
  },
  {
    title: "제목2",
    desc: "부제목",
    desc2: "하고싶은 말..."
  },
  {
    title: "제목3",
    desc: "부제목",
    desc2: "하고싶은 말..."
  },
  {
    title: "제목4",
    desc: "부제목",
    desc2: "하고싶은 말..."
  },
  {
    title: "제목5",
    desc: "부제목",
    desc2: "하고싶은 말..."
  }
]
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

  useEffect(()=>{
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animate__animated",
      live: false,
      mobile: true
    }).init();
  },[])

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
        // onSwiper={(swiper)=>{console.log(swiper)}}
        onSlideChange={
          ()=>{
            new WOW.WOW({
              live: false
            }).init()
          }
        }
      >
      {TxtData.map((e,i)=>{
        return(
          <StyleSlide key={i}>
            <img src={`./images/image${i+1}.${i===4 ? 'jpg' : 'png'}`} alt="slide" />
            <DescContent>
              <h3 className='wow animate__lightSpeedInLeft' data-wow-duration="1s">{e.title}</h3>
              <p className='wow animate__lightSpeedInLeft' data-wow-duration="1s" data-wow-delay="0.3s">{e.desc}</p>
              <p className='wow animate__lightSpeedInLeft' data-wow-duration="1s" data-wow-delay="0.6s">{e.desc2}</p>
            </DescContent>
          </StyleSlide>
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