import { createContext, useState, useEffect } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export const ApiContext = createContext({});

export function ApiProvider({ children }) {

    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('@kenzie_hub:TOKEN'))    
    const [editModal,setEditModal] = useState('none');
    const [idTech, setIdTech] = useState('');
    const [titleTech, setTitle] = useState('');
    const [techs, setTechs] = useState([]);    
    const [show, setShow] = useState('none');
    const [loading, setLoading] = useState(true);    
    const [user, setUser] = useState(null);
       
  
    const userInfo = JSON.parse(localStorage.getItem('@kenzie_hub:USERID'))

    useEffect(() => {
        

        const loadTechs = async () => {
            if(userInfo){
                try{
                    await api.get(`/users/${userInfo.id}`).then(res => {            
                    setTechs(res.data.techs)
                    return res         
                })
                }catch(err){
                    console.log(err)
                }
            }
        }

        loadTechs()
       
    },[show,editModal,user])

    useEffect(()=>{
        const loadUser = async () =>{
            const tokenUser = JSON.parse(localStorage.getItem('@kenzie_hub:TOKEN'))

            if(tokenUser){
            try{                              
            const {data} = await api.get('/profile', {
                headers: {
                    Authorization: `Bearer ${tokenUser}`
                }
            })              
            setUser(data);

            }catch(err){
                console.log(err)
            }              
                        
            }

            setLoading(false)
        }

        loadUser()
        
    },[user])


    const onLogin = async (info) => {
        const id = toast.loading("Por favor espere...")
        const response = await api.post('/sessions', info)
          .then(res => {          
            toast.update(id, {render: "Login efetuado !", type: "success", isLoading: false, autoClose: 1500,hideProgressBar: false})
            if(res.data.token){
            localStorage.setItem('@kenzie_hub:USERID', JSON.stringify(res.data.user));
            localStorage.setItem('@kenzie_hub:TOKEN', JSON.stringify(res.data.token));
            setUser(res.data.user)            
            setTimeout(() => navigate("/dashboard", { replace: true }), 1800);
            }                               
            return res 
        }).catch(err => {
               toast.update(id, {render: "Email ou senha inválidos !", type: "error", isLoading: false,autoClose: 1500,hideProgressBar: false });
               return err
        });

        return response
    }

    const onRegister = async (info) => {
        const id = toast.loading("Por favor espere...")
        const response = await api.post('/users', info)
          .then(res => {
            if(res.statusText==='Created'){
                toast.update(id, {render: "Registro concluído !", type: "success", isLoading: false, autoClose: 1500,hideProgressBar: false})
                setTimeout(() => navigate("/login", { replace: true }), 1800)
            }                         
            return res 
        }).catch(err => {           
               toast.update(id, {render: `${err.response.data.message} !`, type: "error", isLoading: false,autoClose: 1500, hideProgressBar: false }) 
            return err
        });
        
        return response
    }
    

    const onEdit = async (data) => {
        const response = await api.put(`/users/techs/${idTech}`,data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            toast.success('Editado com sucesso!')
            setEditModal('none')
            return res           
        }).catch(err => {
            toast.error('Erro ao editar tecnologia!')
            return err
        })
        return response
        
    }


    const onCreate = (data) => {
        const response = api.post('/users/techs', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            toast.success('Tecnologia criada com sucesso!')
            setShow('none')           
        }).catch(err => {
            toast.error('Erro ao criar tecnologia!')
        })
        return response
        
    }


    const onDelete = async (idTech) => {
        const response = await api.delete(`/users/techs/${idTech}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            toast.success('Deletado com sucesso!')
            setEditModal('none')
            return res           
        }).catch(err => {
            toast.error('Erro ao deletar!')
            return err
        })

        return response        
    }


    return(
        <ApiContext.Provider value={{
            onLogin, 
            onRegister,
            onCreate, 
            onDelete,
            onEdit,           
            navigate,           
            setEditModal,            
            setIdTech, 
            setTitle,           
            setTechs,            
            setShow, 
            idTech,
            titleTech, 
            techs, 
            show, 
            token,             
            editModal,                       
            user,           
            loading
            }}>
             {children}
        </ApiContext.Provider>          
    )
}