import React, { useContext } from 'react'
import styles from './Garden.module.sass'
import Field from './Field/Field'
import Coins from './Coins/Coins'
import { HarvestTimeContext } from '../../context/context'



const Garden = () => {
    const  {gameState}  = useContext(HarvestTimeContext)
    const { fields } = gameState
    return (
        <div className={styles.container}>
            <Coins />
            <div className={styles.fieldsBorder}>
                <div className={styles.fields}>
                    {fields.map( f => <Field field={f}/>)}
                </div>
            </div>
        </div>
    )
}

export default Garden
