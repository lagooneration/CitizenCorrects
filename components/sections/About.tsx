'use client';

import { motion } from 'framer-motion';
import { TypingText } from '@/components/landing/CustomTexts';

import { styles }  from '@/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

const About: React.FC = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Citizen Co" textStyles="text-center text-gray-500" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-gray-500"
      >
        Citizen corrects is India&apos;s first
        <span className="font-extrabold text-white">{' '}carbon credits marketplace</span>, where you can trade carbon offsets
        seamlessly throughout the globe.{' '} Get your carbon credits issued by certified energy auditors authorized by
        <span className="font-extrabold text-lime-400">
          {' '}(BEE)
        </span>{' '}
        Bureau of Energy Efficiency and sell at a higher price of your own rate if you can provide reliablity monitoring
        solutions throught the years of the issued claim.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
