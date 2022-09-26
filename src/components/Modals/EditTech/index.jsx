import * as yup from 'yup';
import { ContainerForm, ContainerModal, Button  } from './styles';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { ApiContext } from '../../../Providers/ApiRequests'


const EditTech = () => {
    const {
        onDelete,
        onEdit,
        editModal,
        setEditModal,
        idTech,
        titleTech} = useContext(ApiContext);    
               

    const schema = yup.object().shape({      
        title: yup.string(),
        status: yup.string().required("Status obrigatório")        
    }); 
  
    const { register, handleSubmit,formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    
    
    return (
    <ContainerModal layout={editModal} >
        <ContainerForm>
            <div className='header'>
                 <h3>Editar Tecnologia</h3>

                 <AiFillCloseCircle 
                 size={'1.5em'} 
                 onClick={()=> setEditModal('none')}
                 style={{cursor:'pointer'}}
                 />

            </div>
              
                
            <form onSubmit={(e)=> e.preventDefault()}>

                <div className='boxInputs'> 
                  <label htmlFor='title'>Titulo <span >{errors.title?.message}</span></label>
                  <input 
                  id='title' 
                  type="text" 
                  placeholder="Ex: React"
                  value={titleTech} 
                  {...register("title")}
                  />
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

              <div className='buttonSection'>
                <Button 
                width={'60%'}
                backColor={'var(--color-primary-negative)'}
                hover={'var(--color-primary-focus)'} 
                type='submit'
                onClick={handleSubmit(onEdit)}
                >Salvar alterações</Button>

                <Button 
                width={'30%'}
                backColor={'var(--color-gray-1)'}
                hover={'var(--color-gray-2)'}  
                type='submit'
                onClick={()=>onDelete(idTech)}
                >Excluir</Button>

              </div>

              
            </form>
              
        </ContainerForm> 
    </ContainerModal>
        
    )
}

export default EditTech