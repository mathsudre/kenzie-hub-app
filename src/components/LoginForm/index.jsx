import * as yup from 'yup';
import { ContainerForm,Button  } from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { ApiContext } from '../../Providers/ApiRequests'




const LoginForm = () => {  
    const { onLogin } = useContext(ApiContext);
    
    const [showPassword, setShowPassword] = useState('password'); 
    const handleClick = () => {
    setShowPassword(showPassword === 'password'?'text':'password');   
    }
    
    const schema = yup.object().shape({      
        email: yup.string().email().required("Email obrigatório"),
        password: yup.string().required("Senha obrigatória")        
      }); 

  
    const { register, handleSubmit,formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

   
    return (
        <ContainerForm>
                <h3>Login</h3>

                <form onSubmit={handleSubmit(onLogin)}>

                <div className='boxInputs'> 
                    <label htmlFor='email'>Email  <span >{errors.email?.message}</span></label>
                    <input id='email' type="text" placeholder="Ex:kenzie@gmail.com" 
                    {...register("email")}/>
                </div>

                <div className='boxInputs'> 
                    <label htmlFor='senha'>Senha <span >{errors.password?.message}</span></label>

                    <div className='inputPassword'>
                    <input id='senha' type={showPassword} placeholder="Digite sua senha..." 
                    {...register("password")}
                    />
                   { showPassword === 'password' ? 
                   <AiOutlineEyeInvisible size={'1.5em'}  onClick={handleClick}/> 
                   : 
                   <AiOutlineEye size={'1.5em'} className='iconEye' onClick={handleClick}/>} 
                    </div>
                   
                </div>

                <Button type='submit'>Entrar</Button>
                </form>


                <section className='sectionRegister'>
                    <p>Ainda não possui uma conta?</p>
                <Link to='/register'>Cadastre-se</Link>
                </section>
                <Link to='/' className='linkHome'> Home </Link>
        </ContainerForm>
    );
}

export default LoginForm;
