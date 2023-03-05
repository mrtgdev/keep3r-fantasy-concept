
import { h } from 'preact'
import { useRef } from 'preact/hooks';

import {
    motion as m,
    useMotionValue, useTransform, 
    useVelocity, useSpring, 
    useScroll, useAnimationFrame 
} from 'framer-motion'

import { wrap } from '@motionone/utils'

// Interface PraallaxProps
interface ParallaxProps {
    children: string;
    baseVelocity?: number;
}

// Interface ScrollVelocityProps
interface ScrollVelocityProps {
    stringOne: string;
    stringTwo: string;
}

/**
 * ParallaxText --> Component
 * @param offset 
 * @returns 
 */
function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 20], {
      clamp: false
    });
  
    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
  
    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
  
      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
      baseX.set(baseX.get() + moveBy);
    });
  
    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four offset (100% / 4). This would also want deriving from the
     * dynamically generated number of offset.
     */
    return (
      <div class="w-full flex flex-nowrap overflow-hidden leading-none m-0 whitespace-nowrap justify-center items-center">
        <m.div class="relative flex flex-row flex-nowrap whitespace-nowrap font-bold uppercase text-sm gap-2" style={{ x }}>
          <span class="block">{children}</span>
          <span class="block">{children}</span>
          <span class="block">{children}</span>
          <span class="block">{children}</span>
          <span class="block">{children}</span>
          <span class="block">{children}</span>
          <span class="block">{children}</span>
          <span class="block">{children}</span>
        </m.div>
      </div>
    );
  }

export default function ScrollVelocity({ stringOne, stringTwo }: ScrollVelocityProps) {
    return (
        <section class="flex flex-col w-auto h-auto justify-center items-center z-15">
            <ParallaxText baseVelocity={-5}>{ stringOne }</ParallaxText>
            <ParallaxText baseVelocity={5}>{ stringTwo }</ParallaxText>
        </section>
    )
}