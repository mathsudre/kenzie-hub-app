import * as yup from 'yup';
import { ContainerForm, ContainerModal, Button  } from './styles';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { ApiContext } from '../../../Providers/ApiRequests'



const NewTech = () => {
    const { onCreate, show, setShow } = useContext(ApiContext);

    const schema = yup.object().shape({      
        title: yup.string().required("Titulo obrigatório"),
        status: yup.string().required("Status obrigatório")        
    }); 
  
    const { register, handleSubmit,formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

     
    
    return (
    <ContainerModal visible={show} >
        <ContainerForm>
            <div className='header'>
                  <h3>Cadastrar Tecnologia</h3>

                 <AiFillCloseCircle 
                 size={'1.5em'} 
                 onClick={()=>setShow('none')}
                 style={{cursor:'pointer'}}
                 />

            </div>
              
                
            <form onSubmit={handleSubmit(onCreate)}>

                <div className='boxInputs'> 
                  <label htmlFor='title'>Titulo <span >{errors.title?.message}</span></label>
                  <input id='title' type="text" placeholder="Ex: React" 
                    {...register("title")}/>
                </div>

              <label className='select'>
                  <span>Selecionar Status</span>              
                <div className='custom-select'>
                    <select {...register('status')} className='custom'>                        
                    <option value='Iniciante'>👨‍🎓 Iniciante 👩‍🎓</option>
                    <option value='Intermediário'>👨‍💼 Intermediário 👩‍💼</option>
                    <option value='Avançado'>👨‍🏫 Avançado 👩‍🏫 </option>                        
                    </select>
                </div>
              </label>

              <Button type='submit'>Cadastrar Tecnologia</Button>
            </form>


               
              
        </ContainerForm> 
    </ContainerModal>
        
    )
}

export default NewTech