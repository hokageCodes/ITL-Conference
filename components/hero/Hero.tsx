"use client";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

import Image from 'next/image';


// Styled components
const Timer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const TimerSegment = styled.div`
  background: #FEFBF6;
  color: #7F5283;
  font-family: 'Courier New', Courier, monospace;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    display: block;
    margin-top: 5px;
    font-size: 1rem; // Adjust size of the label text if needed
    color: #7F5283;
  }

  .timer-value {
    font-size: 2rem;
  }

  .timer-label {
    font-size: 0.75rem; // Smaller text for the label
    text-transform: uppercase; // Optional: makes the label text uppercase
    margin-top: 4px; // Space between number and label
  }
`;

// No changes needed for Timer styled component



interface TimerState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Hero = () => {
  const [timer, setTimer] = useState<TimerState>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const updateTimer = () => {
    const eventDate = new Date('June 19, 2025 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const timeLeft = eventDate - currentTime;

    const formatWithLeadingZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

    setTimer({
      days: formatWithLeadingZero(Math.floor(timeLeft / (1000 * 60 * 60 * 24))),
      hours: formatWithLeadingZero(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
      minutes: formatWithLeadingZero(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: formatWithLeadingZero(Math.floor((timeLeft % (1000 * 60)) / 1000)),
    });
  };

  useEffect(() => {
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      >

      <div className="relative bg-[#331D2C] text-[#EFE1D1] h-screen">
        <Swiper
          autoplay
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          className="w-full h-full">
          {/* Dynamically generate SwiperSlides based on your content */}
          <SwiperSlide className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left h-full">
            <div className="mt-[180px] z-10 max-w-lg mx-auto md:mx-0 md:ml-20 space-y-4 bg-opacity-80 bg-[#3D3C42] p-6 rounded-lg shadow-lg text-[#FEFBF6]">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold">
                THE ITL CONFERENCE &#39;25
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl">
                Crossing Borders, Breaking Barriers.
              </p>
              <p className="text-md sm:text-lg lg:text-xl font-semibold">April 3-5, 2025 - Calgary, Alberta</p>
              {/* Timer Display */}
              <Timer>
                  <TimerSegment>
                    <div className="timer-value">{timer.days}</div>
                    <div className="timer-label">Days</div>
                  </TimerSegment>
                  <TimerSegment>
                    <div className="timer-value">{timer.hours}</div>
                    <div className="timer-label">Hours</div>
                  </TimerSegment>
                  <TimerSegment>
                    <div className="timer-value">{timer.minutes}</div>
                    <div className="timer-label">Mins</div>
                  </TimerSegment>
                  <TimerSegment>
                    <div className="timer-value">{timer.seconds}</div>
                    <div className="timer-label">Secs</div>
                  </TimerSegment>
                </Timer>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
                <a href="/pre-register" className="bg-[#FEFBF6] hover:bg-ctaBg hover:text-bg text-textPrimary font-bold py-3 px-6 rounded-lg transition-colors duration-300 mb-4 sm:mb-0">Pre Register Now</a>
                <a href="/pre-register" className="border border-[#A78295] hover:bg-ctaBg hover:text-bg text-bg font-bold py-3 px-6 rounded-lg transition-colors duration-300">Become a Sponsor</a>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <Image src="/img/hero1.png" alt="Conference Overview" layout="fill" objectFit="cover" objectPosition="center" className=""/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left h-full">
            <div className="mt-[180px] z-10 max-w-lg mx-auto md:mx-0 md:ml-20 space-y-4 bg-opacity-80 bg-[#3D3C42] p-6 rounded-lg shadow-lg text-[#FEFBF6]">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold">
                THE ITL CONFERENCE &#39;25
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl">
                Crossing Borders, Breaking Barriers.
              </p>
              <p className="text-md sm:text-lg lg:text-xl font-semibold">April 3-5, 2025 - Calgary, Alberta</p>
              {/* Timer Display */}
              <Timer>
                  <TimerSegment>
                    <div className="timer-value">{timer.days}</div>
                    <div className="timer-label">Days</div>
                  </TimerSegment>
                  <TimerSegment>
                    <div className="timer-value">{timer.hours}</div>
                    <div className="timer-label">Hours</div>
                  </TimerSegment>
                  <TimerSegment>
                    <div className="timer-value">{timer.minutes}</div>
                    <div className="timer-label">Mins</div>
                  </TimerSegment>
                  <TimerSegment>
                    <div className="timer-value">{timer.seconds}</div>
                    <div className="timer-label">Secs</div>
                  </TimerSegment>
                </Timer>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
              <a href="#" className="bg-[#FEFBF6] hover:bg-ctaBg hover:text-bg text-textPrimary font-bold py-3 px-6 rounded-lg transition-colors duration-300 mb-4 sm:mb-0">Pre Register Now</a>
                <a href="#" className="border border-[#A78295] hover:bg-ctaBg hover:text-bg text-bg font-bold py-3 px-6 rounded-lg transition-colors duration-300">Become a Sponsor</a>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <Image src="/img/hero3.png" alt="Conference Overview" layout="fill" objectFit="cover" objectPosition="center" className=""/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left h-full">
            <div className="mt-[180px] z-10 max-w-lg mx-auto md:mx-0 md:ml-20 space-y-4 bg-opacity-80 bg-[#3D3C42] p-6 rounded-lg shadow-lg text-[#FEFBF6]">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold">
                THE ITL CONFERENCE &#39;25
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl">
                Crossing Borders, Breaking Barriers.
              </p>
              <p className="text-md sm:text-lg lg:text-xl font-semibold">April 3-5, 2025 - Calgary, Alberta</p>
              {/* Timer Display */}
              <Timer>
                  <TimerSegment>
                    <div className="timer-value">{timer.days}</div>
                    <div className="timer-label">Days</div>
                  </TimerSegment>
                  <TimerSegment>
                    <div className="timer-value">{timer.hours}</div>
                    <div className="timer-label">Hours</div>
                  </TimerSegment>
                  <TimerSegment>
                    <div className="timer-value">{timer.minutes}</div>
                    <div className="timer-label">Mins</div>
                  </TimerSegment>
                  <TimerSegment>
                    <div className="timer-value">{timer.seconds}</div>
                    <div className="timer-label">Secs</div>
                  </TimerSegment>
                </Timer>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
              <a href="#" className="bg-[#FEFBF6] hover:bg-ctaBg hover:text-bg text-textPrimary font-bold py-3 px-6 rounded-lg transition-colors duration-300 mb-4 sm:mb-0">Pre Register Now</a>
                <a href="#" className="border border-[#A78295] hover:bg-ctaBg hover:text-bg text-bg font-bold py-3 px-6 rounded-lg transition-colors duration-300">Become a Sponsor</a>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <Image src="/img/hero2.png" alt="Conference Overview" layout="fill" objectFit="cover" objectPosition="center" className=""/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Hero;
