

import { useState } from 'preact/hooks'

import { motion as m } from 'framer-motion'

// > Assets Imports
import preactLogo from '@images/preact.svg'
import viteLogo from '@images/vite.svg'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <m.div 
      initial={{ opacity: 0, y: "100%" }} 
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      class="container flex flex-col w-full min-h-screen justify-center items-center align-middle z-5 animate-this 
			bg-transparent text-cultured not-selectable bg-red-800" 
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ viteLogo } class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      <a href="/about">
        About
      </a>
    </m.div>
  )
}
