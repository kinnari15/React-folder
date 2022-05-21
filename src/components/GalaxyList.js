import React from 'react'
import Galaxy from './Galaxy'
function GalaxyList() {
const galaxyList = [
    {
        id:1,
        name: 'Milkyway',
        blackhole: 'Yes!'
    },
    {
        id:2,
        name: 'Andromeda',
        blackhole: 'Not sure!'  
    },
    {
    id:2,
    name: 'Messier',
    blackhole: 'Yep absolutely!' 
    }
]
const gList = galaxyList.map(galaxy => <Galaxy galaxy={galaxy} />)
return <div>{gList}</div>
}

export default GalaxyList