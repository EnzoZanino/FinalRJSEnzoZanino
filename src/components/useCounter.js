import { useState } from "react"

// export const useCounter = (.........) => {.... 
                                        //   return ...} 

// EN EL IMPORT -->> import useCounter from '../useCounter'
// const {count, increment, decrement, reset} = useCounter(0, 1, 10)



const useCounter = (initial = 0, min, max) => {
    if(initial < min || initial > max) initial = min

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > min) setCount (prev => prev -1)
    }

    const increment = () => {
        if(count < max) setCount (prev => prev +1)
    }

    const reset = () => {
        setCount(initial)
    }

    return {count, decrement, increment, reset}
}

export default useCounter