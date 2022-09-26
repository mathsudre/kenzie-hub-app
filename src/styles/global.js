import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    :root{
        --color-primary:#FF577F;
        --color-primary-focus:#FF427F;
        --color-primary-negative:#59323F;

        /* gray tones */
        --color-gray-0:#F8F9FA;
        --color-gray-1:#868E96;
        --color-gray-2:#343B41;
        --color-gray-3:#212529;
        --color-gray-4:#121214;

        /* feedback pallete */
        --color-sucess:#3FE864;
        --color-negative:#E83F5B;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style-type: none;
        font-family: 'Inter', sans-serif;
    }

    body,html{
        width: 100vw;
        min-height: 100vh; 
        background: var(--color-gray-4);
        overflow: hidden visible;
        background-image: url('https://flevix.com/wp-content/uploads/2020/01/Fade-In-Background.svg');     
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        overflow-y: auto;       
        overflow-x: hidden;   
    }

    button{
        cursor: pointer;        
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
    }

    ::-webkit-scrollbar {       
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: var(--color-gray-2);
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: var(--color-gray-1);
        border-radius: 15px;
    }

    input{
        border: 1.2182px solid transparent;
    }
               
    input:focus{
        border: 1.2182px solid var(--color-gray-0);
    }

    select{
        cursor: pointer;
    }
    
    option{
        cursor: pointer;
    }

   
`;