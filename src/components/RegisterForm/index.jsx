import * as yup from 'yup';
import { ContainerFormReg, Button } from './styles';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { ApiContext } from '../../Providers/ApiRequests'


const RegisterForm = () => {
    const { onRegister } = useContext(ApiContext);
   
    const charEspecial = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/;

    const schema = yup.object().shape({      
    email: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório').min(8, 'Sua senha deve ter entre 8-20 caracteres').matches(charEspecial, "Não possui caracteres especiais"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null],'Confirmação de senha inválida').required('Campo obrigatório'),
    name: yup.string().required("Campo obrigatório"),  
    bio: yup.string().required("Campo obrigatório"), 
    contact: yup.string().required("Campo obrigatório"),  
    course_module:yup.string().required("Escolha uma opção")        
    })
 
    const { register, handleSubmit,formState: { errors } } = useForm({
        resolver: yupResolver(schema)       
    })    
    
     
   
    return(
        
        <ContainerFormReg>
                <h3>Crie sua conta</h3>
                    <span>Rapido e grátis, vamos nessa</span>
                <form onSubmit={handleSubmit(onRegister)}>

                <div className='boxInputs'> 
                    <label htmlFor='name'>Nome 
                    <span>{errors.name?.message}</span> 
                    </label>
                    <input   {...register('name')} id='name' type='text' placeholder='Digite aqui seu nome' />
                </div>    

                <div className='boxInputs'> 
                    <label htmlFor='email'>Email 
                    <span >{errors.email?.message}</span>
                    </label>
                    <input  {...register('email')} id='email' type='email' placeholder='Ex:kenzie@gmail.com' />
                </div>

                <div className='boxInputs'> 
                    <label htmlFor='password'>Senha 
                    <span >{errors.password?.message}</span>
                    </label>                    
                    <input  {...register('password')} id='password' type='password' placeholder='Digite sua senha...' />
                </div>

                <div className='boxInputs'> 
                    <label htmlFor='repeatPassword'>Confirmar Senha 
                    <span >{errors.confirmPassword?.message}</span>
                    </label>                    
                    <input  {...register('confirmPassword')} id='repeatPassword' type='password' placeholder='Digite novamente sua senha...'/>
                </div>

                <div className='boxInputs'> 
                    <label htmlFor='bio'>Bio 
                    <span >{errors.bio?.message}</span>
                    </label>                    
                    <input  {...register('bio')} id='bio' type='text' placeholder='Fale sobre ...' />
                </div>

                <div className='boxInputs'> 
                    <label htmlFor='contato'>Contato 
                    <span >{errors.contact?.message}</span>
                    </label>                    
                    <input {...register('contact')} id='contato' type='text' placeholder='Opção de contato' />
                </div>

              
                <label className='select'>
                <span>Selecionar módulo</span>              
                <div className='custom-select'>
                    <select {...register('course_module')} className='custom'>                        
                       <option value='Primeiro módulo (Introdução ao Frontend)'> 🎨 Primeiro módulo (Introdução ao Frontend)</option>
                        <option value='Segundo módulo (Frontend Avançado)'> 👨‍🎨 Segundo módulo (Front end Avançado) 👩‍🎨</option>
                        <option value='Terceiro módulo (Introdução ao Backend)'> 🔒 Terceiro módulo (Introdução ao Backend)</option>
                        <option value='Quarto módulo (Backend Avançado)'> 🔐 Quarto módulo (Backend Avançado)</option>
                    </select>
                </div>
                </label>
                <Button  type='submit'>Cadastrar</Button>                
                </form>            
                
              
        </ContainerFormReg>
        
        
    );
}

export default RegisterForm;            
