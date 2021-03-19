import React, { useContext } from 'react'
import styles from './Seed.module.sass'

import { HarvestTimeContext } from '../../../context/context'

const Seed = ( { item }) => {
    const { gameState, chooseItem } = useContext(HarvestTimeContext)
    return (
        <div className={gameState.active === item.id ? styles.activeItem : styles.item} onClick={() => chooseItem(item.id)}>
            <h2>{item.name}</h2>
            <div>Image</div>
            <h2>{item.count}</h2>
        </div>
    )
}

export default Seed
