import AnimatedPage from '../../components/AnimatedPage';
import RegisterForm from '../../components/RegisterForm';
import Logo  from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import { RegisterDiv } from './styles';


const Register = () => {
    return (
        <AnimatedPage>
            <RegisterDiv>
        <section className='logoContainer'>
        <img src={Logo} alt="Logo"/>
        <Link to='/' className='linkComeBack'> Voltar </Link>
        </section>  
            <RegisterForm/>
          
            </RegisterDiv>           
        </AnimatedPage>
      
    );
}

export default Register;