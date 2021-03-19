import React, { useContext } from 'react'
import styles from './Field.module.sass'

import { HarvestTimeContext } from '../../../context/context'

const Field = ({ field }) => {
    const { unlockField, gameState, plantSeed, timer, harvestCrop } = useContext(HarvestTimeContext)
    const { active } = gameState

    const checkIfFieldBought = () => {
        if (field.locked) {
            return  <div className={styles.containerLocked}>
                        <button onClick={() => unlockField(field.id)}>${field.price}</button>
                    </div>
        } else {
            return checkIfFieldOccupied()
        }
    }

    const checkIfFieldOccupied = () => {
        if(field.occupiedBy) {
            return checkIfFieldReady()
        } else {
            return  <div className={active ? styles.container : styles.containerNotActive}
                        onClick={() => (checkIfPlayerHasSeed() && (plantSeed(field.id), timer()) )}>
                        {field.id}
                    </div>
        }
    }

    const checkIfFieldReady = () => {
        if(field.remainingTime == 0) {
            return  <div className={styles.container} onClick={() => harvestCrop(field.id)}>
                        <h1>{gameState.store.seeds[field.occupiedBy-1].name}</h1>
                        <h2>Ready</h2>
                    </div>
        } else {
            return  <div className={styles.containerNotActive}>
                        <h1>{gameState.store.seeds[field.occupiedBy-1].name}</h1>
                        <h2>{field.remainingTime}</h2>
                    </div>
        }
    }
    const checkIfPlayerHasSeed = () => {
        if (gameState.store.seeds[gameState.active - 1].count >= 1) {
            return true
        } else {
            return false
        }
    }
    return (
        checkIfFieldBought()
    )
}

export default Field
