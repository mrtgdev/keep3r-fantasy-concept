
// layout/main.tsx

import { h, render } from 'preact'

import { AnimatePresence } from 'framer-motion'
import AnimatedCursor from 'react-animated-cursor'

// > Components Imports
import Navbar from '@components/navbar/logged'
import Header from '@components/header/logged'
import Container from '@components/container/logged'

// --> export default Main Layout
const MainLayout = () => {
    return (
        <>
            <AnimatedCursor 
                color='255, 255, 255'
                innerSize={42}
                outerSize={0}
                innerScale={2}
                outerScale={1.7}
                outerAlpha={0}
                innerStyle={{
                    backgroundColor: 'rgba(102, 102, 102, 0.09)'
                }}
            />
            <Header />
            <Navbar />
            <div class="container flex flex-col max-w-screen-2xl min-h-screen bg-transparent justify-center items-center m-auto ">
                <AnimatePresence>
                    <Container />
                </AnimatePresence>
            </div>
        </>
    )
}

render(<MainLayout />,
document.getElementById('app') as HTMLElement )
