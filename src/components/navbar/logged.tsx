

// --> navbar.tsx
import { h } from 'preact'
import { Link } from 'preact-router/match'

// > Components Imports
import LinkProfile from '@components/navbar/link.profile'
import LinkLogged from '@components/navbar/link.logged'

const navigation = [
    { id: 1, key: 'home', name: 'Inicio', path: '/', class: 'ri-home-6-fill' },
    { id: 2, key: 'market', name: 'Mercado', path: '/market', class: 'ri-arrow-left-right-line' },
    { id: 3, key: 'team', name: 'Alineación', path: '/team', class: 'ri-team-fill' },
    { id: 4, key: 'standing', name: 'Tabla', path: '/standing', class: 'ri-trophy-fill' },
    { id: 5, key: 'profile', name: 'Perfil del Usuario', path: '/profile', class: 'ri-settings-2-fill' }
]

export default function Navbar() {
    return (
        <nav id='bottom-navigation' class='fixed w-full h-auto py-auto bottom-0 lg:bottom-8 lg:px-32 xl:px-44 justify-center items-center m-auto transition-all duration-300 z-20'>
            <div id='items-navigation' class='flex max-w-screen-lg h-20 pb-12 py-4 lg:py-8 px-4 md:px-8 justify-center items-center align-middle m-auto 
                text-slate-300 text-center font-extrabold bg-black lg:rounded-xl'>
                <ul class='inline-flex flex-row gap-12 md:gap-14 lg:gap-20 justify-center items-center align-middle'>
                    { navigation.map((link) => (
                        <li key={ link.key } class='flex flex-row w-auto h-auto justify-center items-center align-middle 
                        hover:text-mindaro hover:opacity-100 hover:scale-110 transition-all duration-300'>
                            { link.key === 'profile' 
                                ? ( <LinkProfile key={ link.key } path={ link.path } name={ link.name } /> ) 
                                : ( <LinkLogged key={ link.key } path={ link.path } icon={ link.class } name={ link.name } /> )
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}