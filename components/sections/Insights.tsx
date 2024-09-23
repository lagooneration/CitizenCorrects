'use client';

import { motion } from 'framer-motion';

import { styles }  from '@/constants';  
import { insights } from '@/constants';
import { staggerContainer } from '@/lib/motion';
import { TitleText, TypingText } from '@/components/landing/CustomTexts';
import { InsightCard } from '@/components/landing/InsightCard';

const Insights: React.FC = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about Carbon Credits" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <a href={item.link} key={`insight-${index}`} target="_blank" rel="noopener noreferrer">
            <InsightCard {...item} index={index + 1} />
          </a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
