import AnimatedPage from '../../components/AnimatedPage';
import Logo  from '../../assets/img/Logo.png';
import LoginForm from '../../components/LoginForm';
import{ LoginDiv } from './styles';



const Login = () => {
    return (
        <AnimatedPage>
        <LoginDiv>
            
            <img src={Logo} alt="Logo"/>
            <LoginForm/>           

        </LoginDiv>  
        </AnimatedPage>
       
    );
}

export default Login;