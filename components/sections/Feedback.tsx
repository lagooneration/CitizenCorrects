'use client';

import { motion } from 'framer-motion';

import { styles }  from '@/constants';  
import { fadeIn, staggerContainer, zoomIn } from '@/lib/motion';

const Feedback: React.FC = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Green Credit Programme
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Implementation Rules 2023
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[22px] text-[16px] sm:leading-[45.6px] leading-[39.6px] text-white">
          &quot;The Ministry of Environment and Forests has put forward a pioneering initiative called the Green Credit Programme, aimed at incentivising environmentally conscious practices known as &apos;LiFE&apos; (Lifestyle for Environment).&quot;
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/news2.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp2.png"
            alt="stamp"
            className="w-[185px] h-[255px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
