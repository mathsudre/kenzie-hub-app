import styled from "styled-components";

export const DashContainer = styled.div`
    width: 100%;
    height: 150vh;   
    display: flex;
    flex-direction: column; 
    align-items: center;
`;

export const DashHeader = styled.header`
    width: 100%;
    height: 72px;   
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeInDown 1s;

    .subHeader{
        width: 100%;
        height: 72px;               
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
                

        button{  
            display: flex;
            align-items: center;
            height: 32px;
            padding: 0px 16.2426px;
            font-size: 12px;           
            text-decoration: none;
            color: var(--color-gray-0);
            background-color: var(--color-gray-2);
            border: none;
            border-radius: 4px;
            transition: 1s;

            &:hover{
                animation: pulse 1.5s infinite;
                background-color: var(--color-gray-1);
            }
        }
    }

    @media (min-width: 768px){
        .subHeader{
            width: 60%;
            padding: 0px;
        }
    }

`;

export const InfoUser = styled.section`
    width: 320px;
    height: 131px;       
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    animation: fadeInLeft 1s;

    @media (min-width: 768px){
        width: 60%;        
        justify-content: space-between;
        align-items: center;
    }

    h3{
        color: var(--color-gray-0);
        display: flex;
        align-items: center;
    }

    span{
        font-size: 12px;
        color: var(--color-gray-1);
        font-weight: bold;
    }

    div{
        width: 100%;
        height: 53px;        
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 13px;

        @media(min-width: 400px){
           
               padding: 0px ;
        }        

        button{
            display: flex;
            align-items: center;
            height: 32px;
            padding: 0px 13px;
            font-size: 20px;           
            color: var(--color-gray-0);
            background-color: var(--color-gray-2);
            border-radius: 4px;
            transition: 1s;
            border:none;

            &:hover{
                animation: pulse 1.5s infinite;
                background-color: var(--color-gray-1);
            }
        }

        h4{
            color: var(--color-gray-0);
        }
    }
`;


export const TechContainer = styled.main`        
    width: 313px;
    height: 60%;
    padding: 22px 23px 26px 24px;
    background-color: var(--color-gray-3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;    

    @media (min-width: 768px){
        width: 60%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    

    ul{
        width: 100%;
        max-height: 100%;
        display: flex;
        padding: 5px 3px;        
        border-radius: 8px;
        gap: 16px;
        flex-wrap: wrap;
        overflow-y: auto;

        li{
            width: 100%;
            height: 48px;
            border-radius: 8px;
            background-color: var(--color-gray-4);
            color: var(--color-gray-0);
            padding: 13px 22px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: 1s;
            animation: fadeInLeft 1s;

            &:hover{
                background-color: var(--color-gray-1);
                color: var(--color-gray-0);
               
            }
            &:hover span{                
                color: var(--color-gray-0);
            }

            h4{
                font-size: 13px;
            }

            span{
                font-size: 12px;
                color: var(--color-gray-1);
                display: flex;
                align-items: center;
                gap: 14px;
                
            }
        }
    }
`;


export const ContainerEmpty = styled.div`
    width: 100%;
    margin: 0 auto;
    display: ${props => props.display};

    @media (min-width: 780px){
        width: 56%;
    }
`;