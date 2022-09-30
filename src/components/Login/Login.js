import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../images/loginImages';
import { fetchUsers, selectUsers, setInitialUser } from '../../store/slices/usersSlice/usersSlice';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import passEye from '../../hoc/passEye';
import './Login.css'

function Login({show, toggleShowPass}) {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(selectUsers) 
    const formRef = useRef(null)

    useEffect(() => {
        console.log(users.initialUser);
        if(users.initialUser.username === formRef.current[0].value && formRef.current[1].value === users.initialUser.password) {
            navigate('/inst')
            formRef.current[0].value = '';
            formRef.current[1].value = '';
        }
    },[users.initialUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formRef.current[0].value);
        console.log(formRef.current[1].value);

        dispatch(setInitialUser({log: formRef.current[0].value,pass: formRef.current[1].value}))
          
        
    }


    useEffect(() => {
        if(!users.data.length) {
            dispatch(fetchUsers())
        }
    },[])
    return(
        <div className='login'>
            <form onSubmit={handleSubmit} ref={formRef}>
                <img src={loginImage.loginImage} alt=''/>
                <input type='text' placeholder='Login'/>
                <p>
                    <input type={show ? 'text' : 'password'} placeholder='Password' />
                    {
                        show ?
                        <AiOutlineEyeInvisible className='pass-icon' onClick={toggleShowPass}/>
                        :
                        <AiOutlineEye className='pass-icon' onClick={toggleShowPass}/>
                    }
                </p>
                <button style={{cursor: 'pointer'}}>Login</button>
            </form>
        </div>
    )
}

export default passEye(Login)