import React, { useContext } from 'react'
import styles from './StoreItem.module.sass'

import { HarvestTimeContext } from '../../../context/context'

const StoreItem = ({ seed }) => {
    const { buySeed, gameState } = useContext(HarvestTimeContext)
    const coins = gameState.coins
    return (
        <div className={styles.item} onClick={() => seed.price <= coins && buySeed(seed.id)}>
            <h2>{seed.name}</h2>
            <div>Image</div>
            <h2>{seed.price}</h2>
        </div>
    )
}

export default StoreItem
