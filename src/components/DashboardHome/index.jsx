import { DashContainer, DashHeader, InfoUser, TechContainer, ContainerEmpty } from './styles';
import { useNavigate, Navigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { useEffect,useRef,useState} from 'react';
import { motion } from 'framer-motion';
import Logo from '../../assets/img/Logo.png';
import lottie from 'lottie-web';
import NewTech from '../../components/Modals/NewTech';
import EditTech from '../../components/Modals/EditTech';
import { useContext } from "react";
import { ApiContext } from '../../Providers/ApiRequests'



const DashboardHome = () => {
    const navigate = useNavigate();
    const dataUser = JSON.parse(localStorage.getItem('@kenzie_hub:USERID'))
        

    const {
        setEditModal,
        setIdTech,         
        setTitle,
        techs,
        setShow,        
        user,           
        loading
        } = useContext(ApiContext);

    const [userNameCourse, setUserNameCourse] = useState([])
    
       
    useEffect(()=>{
        if(dataUser){
            setUserNameCourse([...userNameCourse, dataUser.name, dataUser.course_module]);            
        }        
    },[])    
        
       

    const Logout = () => {
        navigate("/login", { replace: true });
        localStorage.removeItem('@kenzie_hub:USERID');
        localStorage.removeItem('@kenzie_hub:TOKEN');        
    }
   
    
    const container = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,  
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets5.lottiefiles.com/private_files/lf30_enlfzw3u.json'
          
        });
        return () => lottie.destroy()        
    },[])

    const value = techs.length === 0 ? 'flex' : 'none'; 

    if(loading)return <DashContainer>
    <DashHeader>
    </DashHeader>
    <InfoUser>       
    </InfoUser>
    <TechContainer>      
       <motion.ul layout>           
        <ContainerEmpty ref={container}></ContainerEmpty>
       </motion.ul>
    </TechContainer>  
    </DashContainer>
    
    return user ?   
        <DashContainer>
            <DashHeader>

            <section className='subHeader'>

            <img src={Logo} alt="Logo"/>
            <button className='linkLogout' onClick={Logout} > Sair </button>

            </section>      

            </DashHeader>

            <InfoUser>
                <div>
                <h3>   { userNameCourse[0] } </h3>
                <span> { userNameCourse[1] } </span> 
                </div>
               

                <div>                
               
               <h4>Tecnologias</h4>
               <button type='button' onClick={()=>setShow("flex")}>+</button>              
               
                </div>
            </InfoUser>

            <TechContainer>
               
                <motion.ul layout>

                    
                {
                techs.map((tech,index) => 
            <li
                    
                key={index}>

                <h4>{tech.title}</h4> 

                    <span>
                    {tech.status} 
                    <FaEdit size={'1.3em'}
                    onClick={()=>{
                    setEditModal("flex")
                    setIdTech(tech.id)
                    setTitle(tech.title)                    
                    }}
                    style={{cursor:'pointer'}}
                    /> 
                    </span>
            </li>  
            )}

                <ContainerEmpty display={value} ref={container}></ContainerEmpty>       

                </motion.ul>

            </TechContainer>
                <NewTech/>
                <EditTech/>
           
        </DashContainer>
        :
        <Navigate to="/login" replace/>
}

export default DashboardHome;
