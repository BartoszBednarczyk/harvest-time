import React, { useContext } from 'react'
import styles from './Coins.module.sass'

import { HarvestTimeContext } from '../../../context/context'

const Coins = () => {

    const { gameState } = useContext(HarvestTimeContext)
    const { coins, exp } = gameState
    const level = exp.level
    
    return (
        <div className={styles.container}>
            <p>{coins}</p>
            <p>{level}</p>
        </div>
    )
}

export default Coins
