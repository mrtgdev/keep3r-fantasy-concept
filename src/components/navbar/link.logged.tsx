
import { h } from 'preact'
import { Link } from 'preact-router/match'

interface LinkProfileProps {
    path: string;
    icon: string;
    name: string;
    key: string;
}

export default function LinkProfile({ path, icon, name, key }: LinkProfileProps) {
    return (
        <Link activeClassName='text-light-green font-bold' href={path}>
            <i id='icon' class={`text-2xl md:text-2xl lg:text-3xl font-thin ${icon}`} />
            <p id='name' class='hidden hover:visible'>{ name }</p>
        </Link>
    )
}