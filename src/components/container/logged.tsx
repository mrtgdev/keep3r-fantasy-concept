
import { h } from 'preact'
import { Route, Router } from 'preact-router'

// > Pages Imports
import Home from '@pages/logged/home'
import Market from '@pages/logged/market'
import Team from '@pages/logged/team'
import Standing from '@pages/logged/standing'
import Profile from '@pages/logged/profile'

export default function Container() {
    return (
        <Router>
            <Route path='/' component={ Home } />
            <Route path='/market' component={ Market } />
            <Route path='/team' component={ Team } />
            <Route path='/standing' component={ Standing } />
            <Route path='/profile' component={ Profile } />
        </Router>
    )
}