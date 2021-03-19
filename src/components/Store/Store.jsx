import React, { useState, useContext } from 'react'
import styles from './Store.module.sass'
import StoreItem from './StoreItem/StoreItem'

import { HarvestTimeContext } from '../../context/context'

const Store = () => {
    const { gameState } = useContext(HarvestTimeContext)
    const level = gameState.exp.level
    const seeds = gameState.store.seeds

    const [isStoreOpen, setStoreOpen] = useState(false)

    return (
        <div className={isStoreOpen ? styles.containerOpened : styles.containerClosed}>
            <button onClick={() => setStoreOpen(!isStoreOpen)} className={styles.openStoreButton}>Open</button>

            <div className={styles.header}>
                <h1>Store</h1>
            </div>
            <div className={styles.shelfs}>
                {seeds.map(s => level >= s.levelReq ? <StoreItem seed={s} /> : null)}
            </div>
        </div>
    )
}

export default Store
