import styled from 'styled-components';





export const Container = styled.div`
    display: flex; 
    align-items: center;   
    width: 100%;
    height: 100%;    
    color: var(--color-gray-0);    
    overflow: hidden visible;
 
    .subContainer{      
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
               

        .content{
        position: relative;
        right: 38%;        
        }

        .content h1{
            width: 280px;
            position:absolute;
            font-size: 3rem;            
        }

        .content h1:nth-child(1){
            color:transparent;    
            -webkit-text-stroke: 2px var(--color-primary);
        }

        .content h1:nth-child(2){
      
        color:var(--color-primary);
        animation: animate 4s ease-in-out infinite;
        }

        @keyframes animate{

            0%,100%{
            clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
            }

            50%{
            clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
            }
        }


        @media(min-width: 768px) and (max-width: 1024px){
            .content{
                right: 14%;    
            }
        }
    }
    
    .learnAnimation{
        width: 400px;
    }

    .infoContainer{       
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 40px;


    }

            .LoginCadastro {  
            position: relative;
            overflow: hidden;
            background-color: transparent;            
            transition: .8s;
            z-index: 1;
            }

            .LoginCadastro::before{
            content: '';
            width: 0;
            height: 300%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(55deg);
            background-color: var(--color-primary);
            transition: .5s ease;
            display: block;
            z-index: -1;
            opacity: .5;
            }

            .LoginCadastro:hover::before {
            width: 150%;
            }

            .LoginCadastro:hover {
            color: var(--color-gray-4);
            }





    .LoginCadastro{ 
        width: 400px;
        height: 300px;
        margin: 10px;       
        padding: 50px;        

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 8px;
       
        background: rgba(177,9,118,0.15);
        box-shadow: 0 8px 32px 0 rgba(31,38,135,0.15);
        backdrop-filter: blur( 20px );
        -webkit-backdrop-filter: blur( 20px );
        border-radius: 6px;       
        

        p{
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 50px;
            font-style: italic;
            color: var(--color-gray-0);         
            font-weight: bold;  
        }

        a{
            text-decoration: none;
            color: var(--color-gray-4);         
            font-weight: bold;             
            padding: 8px;
            font-style: initial;
            border-radius: 8px;
            background-color: var(--color-primary);
            transition: .5s;

            &:hover{
                background-color: var(--color-primary-focus);
                animation:pulse 1s infinite;              
                color: var(--color-gray-0)
            }
        }

        span{
            font-weight: bold;
            color: var(--color-primary);
        }
        
    }
`;

