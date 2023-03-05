
// layout/main.tsx

import { h, render } from 'preact'

import { AnimatePresence } from 'framer-motion'

// > Components Imports
import Navbar from '@components/navbar/logged'
import Header from '@components/header/logged'
import Container from '@components/container/logged'

// > Remixicon Imports
import 'remixicon/fonts/remixicon.css'

// --> export default Main Layout
const MainLayout = () => {
    return (
        <>
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
