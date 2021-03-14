import React, { useState, useEffect } from 'react'
import styles from './Store.module.sass'

const Store = () => {

    const [isStoreOpen, setStoreOpen] = useState(false)

    useEffect(() => {
        console.log(isStoreOpen)
    }, [isStoreOpen])

    return (
        <div className={isStoreOpen ? styles.containerOpened : styles.containerClosed}>
            <button onClick={() => setStoreOpen(!isStoreOpen)} className={styles.openStoreButton}>Open</button>
        </div>
    )
}

export default Store
