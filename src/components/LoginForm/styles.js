import styled from "styled-components";


export const ContainerForm = styled.div`
    width: 90%;   
    max-width: 369px;
    height: 509px;
    background-color: var(--color-gray-2);    
    border-radius: 8px;   
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h3{
        font-weight: 700;
        font-size: 14.5px;
        color: var(--color-gray-0);
    }

    form{
        width:100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        gap: 20px;
       
        .boxInputs{
            width: 100%;
            height: 75px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            label{
                font-size: 12.182px;
                color: var(--color-gray-0);
                display: flex;
                align-items: center;
                gap: 25px;

                span{
                    color: var(--color-negative);
                    font-weight: bold;                    
                }
            }

            input{
                height: 48px;
                color: var(--color-gray-0);
                background-color: var(--color-gray-3);
                border: 1.2182px solid transparent;                
                border-radius: 4px;
                padding: 0px 18px;
                font-weight: 400;
                font-size: 16.2426px;
            }

            .inputPassword{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap:30px;
                background-color: var(--color-gray-3);
                border: 1.2182px solid transparent;
                border-radius: 4px;                

                .iconEye{
                   color: var(--color-gray-0);
                   cursor: pointer;                   
                }
            }

            #senha{
                border: none;
            }

        }
    }

    .sectionRegister{
        width: 100%;

        p{
            width: 100%;
            height:48px;
            display: flex;
            justify-content: center;
            align-items: center;
            
            font-weight: 600;
            font-size: 12px;

            color: var(--color-gray-1);
        }

        a{
            width: 100%;
            height:48px;
            text-decoration: none;

            display: flex;
            justify-content: center;
            align-items: center;

            color: var(--color-gray-0);
            background-color: var(--color-gray-1);

            border-radius: 4.06066px;
            transition: 1s;

            &:hover{
                background-color: var(--color-gray-3);
                animation:pulse 1.5s infinite;              
                color: var(--color-gray-0)
            }
        }
    }

    .linkHome{
        font-weight: 600;
        font-size: 16px;
        color:  var(--color-primary);
        text-decoration: none;
        margin-top: 3%;
    }
`;


export const Button = styled.button`
    width: 100%;
    height:48px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-gray-0);
    background-color: var(--color-primary);
    transition: 1s;

    &:hover{
        animation: pulse 1.5s infinite;
        background-color: var(--color-negative);
    }
`;