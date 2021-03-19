const contextReducer = (state, action) => {
let newState = {...state}
    switch (action.type) {
        case 'UNLOCK_FIELD':
            let field = newState.fields[action.payload-1]
            if (state.coins >= field.price){
                field.locked = false
                newState.coins -= field.price
                localStorage.setItem('gameState', JSON.stringify(newState))
                return newState
            } else {
                console.log("You don't have enough money!")
                return state
            }

        case 'BUY_SEED':
            newState.store.seeds[action.payload-1].count += 1
            newState.coins -= state.store.seeds[action.payload-1].price
            localStorage.setItem('gameState', JSON.stringify(newState))
            return newState

        case 'TIMER':
            // for (let i=0; i<state.fields.length; i++){
            //     if(state.fields[i].harvestTime){
            //         let currentTime = new Date()
            //         let remaining = state.fields[i].harvestDate - currentTime
            //         console.log(remaining)
            //         if (remaining < 0) {
            //             newState.fields[i].remainingTime = 0
            //         } else {
            //             newState.fields[i].remainingTime = Math.round(remaining / 1000)
            //         }
            //     }
            // }
            // localStorage.setItem('gameState', JSON.stringify(newState))
            for (let i=0; i<state.fields.length; i++){
                if(state.fields[i].harvestTime){
                    let currentTime = new Date()
                    let remaining = Math.floor((state.fields[i].harvestTime - currentTime.getTime()) / 1000)
                    if (remaining <= 0) {
                        newState.fields[i].remainingTime = 0
                    } else {
                        newState.fields[i].remainingTime = remaining
                    }
                }
            }
            localStorage.setItem('gameState', JSON.stringify(newState))
            return newState

        case 'CHOOSE_ITEM':
            if(newState.active === action.payload){
                newState.active = 0
            } else {
                newState.active = action.payload
            }
            localStorage.setItem('gameState', JSON.stringify(newState))
            return newState

        case 'PLANT_SEED':
            if (state.active) {
                let fieldID = action.payload-1
                newState.fields[fieldID].occupiedBy = state.active
                let harvestDate = new Date()
                // harvestDate.setMinutes(harvestDate.getMinutes() + state.store.seeds[state.active-1].time)
                harvestDate = harvestDate.getTime() + state.store.seeds[state.active-1].time * 60000
                newState.fields[fieldID].harvestTime = harvestDate
                newState.store.seeds[state.active - 1].count -= 1
                localStorage.setItem('gameState', JSON.stringify(newState))
                return newState
            } else{
                return state
            }
        case 'HARVEST_CROP':
            newState.storage.crops[state.fields[action.payload-1].occupiedBy - 1].count += 1
            newState.fields[action.payload-1].harvestTime = 0
            newState.fields[action.payload-1].occupiedBy = 0
            localStorage.setItem('gameState', JSON.stringify(newState))
            return newState
            
    }
}

export default contextReducer