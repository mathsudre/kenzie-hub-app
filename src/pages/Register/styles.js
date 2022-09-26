import styled from 'styled-components';



export const RegisterDiv = styled.div`    
    width: 100%;
    height: 170vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        height: 140vh;
    }

    .logoContainer{
        position:absolute;
        width: 90%;   
        max-width: 369px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;      
        top: 2%;
    }

    .linkComeBack{
        padding: 13px;
        font-weight: 600;
        font-size: 16px;
        color: var(--color-gray-0);
        background-color: var(--color-gray-2);
        text-decoration: none;
        border-radius: 4px;
        transition: 1s;

        &:hover{
            background-color: var(--color-gray-1);
            animation:pulse 1.5s infinite;  
        }
    }
`;