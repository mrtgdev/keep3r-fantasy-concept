
import { h } from 'preact'
import { Link } from 'preact-router/match'

import avatar from '@/assets/images/avatar-example.png'

interface LinkProfileProps {
    path: string;
    name: string;
    key: string;
}

export default function LinkProfile({ path, name, key }: LinkProfileProps) {
    return (
        <Link activeClassName='text-primary font-bold' href={path}>
            <img src={ avatar } class='flex w-8 h-8 justify-center items-center rounded z-10' />
        </Link>
    )
}