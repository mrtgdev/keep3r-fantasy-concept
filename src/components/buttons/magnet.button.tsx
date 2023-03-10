
// Magnet Button Component

import { h, ComponentChild } from 'preact'
import { useEffect } from 'preact/hooks'

export default function MagnetButton( props: { children: ComponentChild[] } ) {

    useEffect(() => {
        let magnetBtn = document.getElementById("magnet")

        if ( magnetBtn ) {
            magnetBtn.addEventListener( "mousemove", function( event ) {
                let position = magnetBtn.getBoundingClientRect()
                let x = event.pageX - position.left - magnetBtn.offsetWidth / 2
                let y = event.pageY - position.top - magnetBtn.offsetHeight / 2
                magnetBtn.children[0].style.transform = `translate(${x * 0.3}px, ${y * 0.6}px)`
            })
            
            magnetBtn.addEventListener( "mouseout", function( event ){
                magnetBtn.children[0].style.transform = `translate( 0px, 0px )`
            })
        }
    })

    return (
        <div id='magnet' class='relative w-full h-full justify-center items-center align-middle z-20 border-4 border-white'>
            <div class='relative w-full h-auto flex flex-block justify-center items-center transition-all duration-100'>
                { props.children }
            </div>
        </div>
    )
}