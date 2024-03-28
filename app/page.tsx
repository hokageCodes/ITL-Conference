"use client"
import LandingFaqSection from '@/components/faq/FAQSection';
import React, { Suspense, lazy } from 'react';
const Hero = React.lazy(() => import('@/components/hero/Hero'));
const PartnersSection = React.lazy(() => import('@/components/partners/PartnersSection'));
const AboutSection = React.lazy(() => import('@/components/about-us/About'));
const WhyAttendSection = React.lazy(() => import('@/components/why-attend/WhyAttend'));
const SpeakerIntroSection = React.lazy(() => import('@/components/speaker/SpeakerSection'));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PartnersSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <WhyAttendSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <SpeakerIntroSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingFaqSection />
      </Suspense>
    </>
  );
}
