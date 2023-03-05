
import { h } from 'preact'

import { motion as m } from 'framer-motion'
import ScrollVelocity from '@/components/header/scrollVelocity'

export default function Standing() {

  return (
    <m.div 
      initial={{ opacity: 0, y: "100%" }} 
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
			class="container flex flex-col w-full min-h-screen justify-center items-center align-middle z-5 animate-this 
			bg-transparent text-cultured not-selectable" 
		>
      <h1>Standing</h1>
    </m.div>
  )
}