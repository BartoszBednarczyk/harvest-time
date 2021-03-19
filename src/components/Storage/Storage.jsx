import React, { useState, useContext } from 'react'
import styles from './Storage.module.sass'
import Seed from './Seed/Seed'
import Crop from './Crop/Crop'
import { HarvestTimeContext } from '../../context/context'

const Storage = () => {
    const [isStorageOpen, setStorageOpen] = useState(false)

    const { gameState } = useContext(HarvestTimeContext)
    const level = gameState.exp.level
    const seeds = gameState.store.seeds
    const crops = gameState.storage.crops

    return (
        <div className={isStorageOpen ? styles.containerOpened : styles.containerClosed}>
            <button onClick={() => setStorageOpen(!isStorageOpen)} className={styles.openStorageButton}>Open</button>

            <div className={styles.header}>
                <h1>Storage</h1>
            </div>
            <div className={styles.subHeader}>
                <h2>Seeds</h2>
            </div>
            <div className={styles.shelfs}>
                {seeds.map(s => level >= s.levelReq ? <Seed item={s} /> : null)}
            </div>
            <div className={styles.subHeader}>
                <h2>Crops</h2>
            </div>
            <div className={styles.shelfs}>
                {crops.map(s => level >= s.levelReq ? <Crop item={s} /> : null)}
            </div>
        </div>
    )
}

export default Storage
