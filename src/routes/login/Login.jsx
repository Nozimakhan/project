import './Login.scss';
import loginImg from '../../assets/images/login.svg';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { AiOutlineLoading } from 'react-icons/ai';
import styled from 'styled-components';
import { instance } from '../../api/axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const Eye = styled(FiEye)`
    font-size: 22px;
`
const EyeOff = styled(FiEyeOff)`
    font-size: 22px;
`

const Login = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const form = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordOpen, setisPasswordOpen] = useState(false);

    function loginUser(e) {
        e.preventDefault();

        setIsLoading(true);

        instance.post("/auth/login",
            {
                username,
                password
            }
        ).then(response => {
            if (response.data.token) {
                setIsLoading(false)
                toast.success(response.data.message);
                dispatch({type: "LOGIN_USER", payload: response.data})
            }
        }).catch(err => {
            setIsLoading(false)
            toast.error(err.response.data.message)
        })
        setUsername("");
        setPassword("");
    }

    return (
        <div className='login'>
            <div className="login-main">
                <form ref={form} onSubmit={loginUser}>
                    <h1>{t("login.text")}</h1>
                    <input autoComplete='username' className='input' type="text" placeholder={t("username.text")} value={username} required onChange={(e) => setUsername(e.target.value)} />
                    <div className="password-wrapper">
                        <input autoComplete='password' type={isPasswordOpen ? "text" : "password"} placeholder={t("password.text")} value={password} required minLength={8} onChange={(e) => setPassword(e.target.value)} />
                        {isPasswordOpen ? <EyeOff style={{ paddingRight: 15 }} onClick={() => setisPasswordOpen(false)} /> : <Eye style={{ paddingRight: 15 }} onClick={() => setisPasswordOpen(true)} />}
                    </div>
                    <button disabled={isLoading ? true : false}>{isLoading && <AiOutlineLoading className='loading-icon' />} {isLoading ? "" : "Кириш"}</button>
                </form>
                <Link to={"/"}>{t("subnavbar.main")}</Link>
            </div>
            <div className="login-image">
                <img src={loginImg} alt="" />
            </div>
        </div>
    )
}

export default Login