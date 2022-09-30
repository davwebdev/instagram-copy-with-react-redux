import { useCallback, useState } from 'react'

const passEye = (Component) => {
    return (props) => {
        const [show, setShow] = useState(false);
        const toggleShowPass = useCallback(() => {
            setShow(prev => !prev)
        }, [])
        return <Component {...props} {...{show, toggleShowPass}} />
    }
}

export default passEye