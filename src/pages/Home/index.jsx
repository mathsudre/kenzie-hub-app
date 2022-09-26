import AnimatedPage from '../../components/AnimatedPage';
import lottie from 'lottie-web';
import { Container } from './styles';
import { useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    
    const container = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,  
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets6.lottiefiles.com/packages/lf20_mxcxrrms.json'
          });
        return () => lottie.destroy()        
    },[])

     
  
    return (
        <AnimatedPage>
        <Container>
            <div  className='subContainer'>                
                
                     <div className='content'>
                        <h1>Kenzie Hub</h1>
                        <h1>Kenzie Hub</h1>
                    </div>
                                 
                <div className='infoContainer'>
                    
                    <div ref={container} className='learnAnimation'></div>

                    <section                   
                    className='LoginCadastro'>
                       
                        <p>
                            Somos uma plataforma que desde 2019, ajuda alunos a se organizarem e administrar melhor suas tecnologias.
                            
                            <Link to='/register'>Cadastre-se </Link>
                        </p>

                                <span>OU</span>

                        <Link to='/login'>Acesse seu Hub </Link>

                        
                    </section>                    

                </div>
               

            </div>          
             
        </Container> 
        </AnimatedPage>
        
    );
}

export default Home;
