"use client"

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const Banner = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/img/hero3.png');
  background-size: cover;
  background-position: center;
`;
const AwardsSection = () => {
  return (
    <>
      <Banner></Banner>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-ctaBg">
        {/* Left side: Heading and Paragraph Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h2 className="text-4xl font-bold text-bg mb-4">The ITL Conference &#39;25 Awards</h2>
          <p className="text-lg text-bg max-w-[600px]">
            At the upcoming ITL Conference, we will be recognizing the remarkable achievements and
            contributions of internationally trained lawyers (ITLs) and the stakeholders, community partners
            and law firms that support them. These awards celebrate excellence, innovation, and leadership
            within the Canadian legal profession, fostering a culture of equity, diversity, inclusion, and
            collaboration.
          </p>
        </motion.div>
        {/* Right side: Awards Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <div className="overflow-y-auto max-h-[600px]">
            <h3 className="text-2xl font-semibold text-bg mb-4">Award Categories</h3>
            <ul>
              {/* Award Categories */}
              {/* You can map through the award categories here */}
              <li className="mb-8">
                <h4 className="text-lg font-semibold text-bg mb-2">1. Diversity Champion</h4>
                <p className="text-bg">
                  Honoring an individual or organization that has shown outstanding dedication to promoting equity,
                  diversity and inclusion within the legal profession, particularly in supporting internationally
                  trained lawyers. This can also be awarded to a law firm that has demonstrated outstanding
                  commitment to diversity and inclusion, particularly in supporting and advancing the careers of
                  internationally trained lawyers within their organization.
                </p>
              </li>
              {/* Repeat the same structure for other award categories */}
              <li className="mb-8">
                <h4 className="text-lg font-semibold text-bg mb-2">2. Community Impact Award</h4>
                <p className="text-bg">
                  Awarded to an ITL who has demonstrated exceptional
                  dedication to serving and making a positive impact in their local community through
                  advocacy, legal advocacy, pro bono work, or community initiatives. This will also be awarded
                  to an ITL who has displayed exemplary advocacy skills and commitment to justice, making a
                  significant impact in advocating for ITLs, their clients and communities.
                </p>
              </li>
              <li className="mb-8">
                <h4 className="text-lg font-semibold text-bg mb-2">3. Leadership in Legal Education Award</h4>
                <p className="text-bg">
                  Honoring an individual or institution that has
                  shown outstanding leadership and innovation in providing educational support and
                  resources for internationally trained lawyers to integrate into the Canadian legal profession.
                  This can also be awarded to an ITL who has made exceptional contributions to legal
                  scholarship through their research, publications, and academic endeavors within the
                  Canadian legal education system. This individual demonstrates excellence in advancing legal
                  knowledge, promoting critical thinking, and shaping discourse within their field of
                  expertise. Their scholarly work enhances the academic community, enriches legal education,
                  and contributes to the development of legal theory and practice in Canada.
                </p>
              </li>
              <li className="mb-8">
                <h4 className="text-lg font-semibold text-bg mb-2">4. Trailblazer in Technology Award:</h4>
                <p className="text-bg">
                  Recognizing an ITL who has leveraged technology and
                  innovation to advance the practice of law, improve access to justice, or enhance legal
                  services delivery in Canada. This also includes groundbreaking legal solutions developed or
                  implemented by an internationally trained lawyer or legal team to address complex
                  challenges in the Canadian legal landscape.
                </p>
              </li>
              <li className="mb-8">
                <h4 className="text-lg font-semibold text-bg mb-2">5. Lifetime Achievement Award</h4>
                <p className="text-bg">
                  Presented to an esteemed ITL who has made a lasting
                  impact on promoting diversity, equity, and inclusion within the Canadian legal profession
                  throughout their career.
                </p>
              </li>
              <li className="mb-8">
                <h4 className="text-lg font-semibold text-bg mb-2">6. Rising Star Award:</h4>
                <p className="text-bg">
                  Acknowledging an up-and-coming ITL who shows exceptional promise,
                  leadership, and dedication to advancing international law and diplomacy within the
                  Canadian legal context.
                </p>
              </li>
              <li className="mb-8">
                <h4 className="text-lg font-semibold text-bg mb-2">7. Mentorship Excellence Award:</h4>
                <p className="text-bg">
                  Presented to a law firm, individual or organization that
                  has excelled in providing mentorship programs and opportunities for internationally
                  trained lawyers to enhance their professional development and integration into the
                  Canadian legal profession.
                </p>
              </li>
              <li className="mb-8">
                <h4 className="text-lg font-semibold text-bg mb-2">8. Innovative Recruitment Award:</h4>
                <p className='text-bg'>
                  Awarded to a law firm that has implemented innovative
                  and effective strategies to recruit, retain, and support internationally trained lawyers within
                  their organization, fostering diversity and talent acquisition.
                </p>
              </li>
              <li className="mb-8">
                <h4 className="text-lg font-semibold text-bg mb-2">9. Entrepreneurial Excellence Award:</h4>
                <p className="text-bg">
                  This award honors an ITL who has demonstrated
                  exceptional entrepreneurial spirit, innovation, and leadership in the business sector.
                  Whether through founding a startup, leading a successful business venture, or driving
                  innovation within an established company, this individual exemplifies excellence in
                  business acumen, strategic thinking, and transformative leadership. Their entrepreneurial
                  endeavors contribute to economic growth, job creation, and industry innovation,
                  showcasing the valuable skills and expertise of internationally trained lawyers in the
                  Canadian business landscape.
                </p>
              </li>
              <li className="mb-8">
                <h4 className="text-lg font-semibold text-bg mb-2">10. The Nobel Award:</h4>
                <p className="text-bg">
                  This is the flagship award of the year. This award recognizes an
                  outstanding ITL who has shown exemplary leadership, advocacy, and dedication to
                  advancing the interests and rights of internationally trained lawyers within the Canadian
                  legal profession. This ITL would have displayed exceptional mentorship qualities and be a
                  model and exemplary ITL in the Canadian Legal community.
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AwardsSection;
