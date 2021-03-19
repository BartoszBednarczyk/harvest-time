import React, { useReducer, createContext } from 'react'

import contextReducer from './contextReducer'

var initialState = JSON.parse(localStorage.getItem('gameState')) ||
 {
     fields: [
     {id: 1, locked: false, price: 0, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 2, locked: false, price: 0, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 3, locked: false, price: 0, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 4, locked: false, price: 0, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 5, locked: false, price: 0, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 6, locked: false, price: 0, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 7, locked: false, price: 0, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 8, locked: false, price: 0, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 9, locked: false, price: 0, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 10, locked: false, price: 0, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 11, locked: true, price: 150, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 12, locked: true, price: 300, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 13, locked: true, price: 500, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 14, locked: true, price: 1000, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 15, locked: true, price: 1500, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 16, locked: true, price: 2000, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 17, locked: true, price: 3000, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 18, locked: true, price: 5000, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 19, locked: true, price: 10000, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 20, locked: true, price: 20000, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 21, locked: true, price: 50000, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 22, locked: true, price: 100000, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 23, locked: true, price: 200000, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 24, locked: true, price: 500000, occupiedBy: 0, harvestTime: 0, remainingTime: 0},
     {id: 25, locked: true, price: 1000000, occupiedBy: 0, harvestTime: 0, remainingTime: 0}   
     ],
     coins: 1000,
     exp: {
         level: 1,
         experience: 0,
         experienceGates: [0, 100, 250, 500, 1000, 2000, 5000, 10000, 25000, 5000]
     },
     store: {
        seeds: [
            {
                id: 1,
                name: "wheat",
                price: 1,
                levelReq: 1,
                count: 0,
                time: 2
            },
            {
                id: 2,
                name: "corn",
                price: 5,
                levelReq: 1,
                count: 0,
                time: 10
            }
        ]
     },
     storage: {
         crops: [
             {
                 id: 1,
                 name: "wheat",
                 levelReq: 1,
                 count: 0
             }, {
                id: 2,
                name: "corn",
                levelReq: 1,
                count: 0
            }
        ]
     },
     active: 0
  }

export const HarvestTimeContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [gameState, dispatch] = useReducer(contextReducer, initialState)

    const unlockField = (id) => {
        dispatch({type: "UNLOCK_FIELD", payload: id })
    }

    const buySeed = (id) => {
        dispatch({type: "BUY_SEED", payload: id})
    }
    
    const timer = () => {
        dispatch({type: "TIMER"})
    }

    const chooseItem = (id) => {
        dispatch({type: "CHOOSE_ITEM", payload: id})
    }

    const plantSeed = (id) => {
        dispatch({type: "PLANT_SEED", payload: id})
    }

    const harvestCrop = (id) => {
        dispatch({type: "HARVEST_CROP", payload: id})
    }

    return(
        <HarvestTimeContext.Provider value={{
        gameState,
        unlockField, 
        buySeed, 
        timer, 
        chooseItem, 
        plantSeed, 
        timer, 
        harvestCrop}}>
            {children}
        </HarvestTimeContext.Provider>
    )
}