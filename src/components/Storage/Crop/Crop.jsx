import React, { useContext } from 'react'
import styles from './Crop.module.sass'

import { HarvestTimeContext } from '../../../context/context'

const Crop = ( { item }) => {
    const { gameState } = useContext(HarvestTimeContext)
    return (
        <div className={styles.item} >
            <h2>{item.name}</h2>
            <div>Image</div>
            <h2>{item.count}</h2>
        </div>
    )
}

export default Crop
