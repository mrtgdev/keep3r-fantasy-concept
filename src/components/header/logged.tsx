
import { h } from 'preact'
import { useEffect } from 'preact/hooks'

// > Assets Imports
import bgLogo from '@images/favicon.png'
import coin from '@images/icon-coin.png'
import ScrollVelocity from './scrollVelocity'

const currency = '20,5M'
const boosts = 2
const code = '0000'
const nameLeague = 'Liga de Prueba'
const namePlayerTeam = 'Equipo de Prueba'

const weekMatch = 'Jornada 9'

export default function Header({}) {

    let isEnableBackToPrincipalPages = true

    return (
        <header id='container-header' class='absolute flex flex-col top-0 w-full justify-center items-center m-auto 
            pt-6 lg:pt-8 gap-4 transition-all duration-300 z-20 text-cultured'>
            <a id='back-button' type='button' class={` ${ isEnableBackToPrincipalPages ? 'flex' : 'hidden' } w-full px-6 justify-start items-center align-middle 
                text-sm font-semibold transition-all duration-500`}>
                &lt; Back
            </a>
            <div id='container-info-player' class='flex flex-row w-full px-6 justify-between items-center align-middle gap-2'>
                <h1 id='team-name' class='flex justify-start text-lg items-center font-bold uppercase py-2'>
                    { namePlayerTeam }
                </h1>
                <div id='currency-player' class='flex flex-shrink justify-center items-center align-middle'>
                    <div class='inline-flex w-auto justify-center items-center align-middle gap-2 px-2 p-2 rounded-lg bg-slate-900 bg-opacity-30 backdrop-blur-sm'>
                        <img src={ coin } alt='coin' class='block w-4 h-4' />
                        <h1 class='text-sm font-semibold '>{ currency }</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}
