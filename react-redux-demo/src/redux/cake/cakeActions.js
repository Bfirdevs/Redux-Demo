import { BUY_CAKE } from './cakeTypes'



// buy cake function returns an action whihch is type property
export const buyCake = (number=1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}

