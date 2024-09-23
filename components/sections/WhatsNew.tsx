'use client';

import { motion } from 'framer-motion';

import { styles }  from '@/constants';  
import { newFeatures } from '@/constants';
import {  TitleText, TypingText } from '@/components/landing/CustomTexts';
import { planetVariants, staggerContainer, fadeIn } from '@/lib/motion';
import { NewFeatures } from '@/components/landing/NewFeatures';

const WhatsNew: React.FC = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" textStyles="text-center" />
        <TitleText title={<>What&apos;s new about Carbon Trading?</>} textStyles="text-center" />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
