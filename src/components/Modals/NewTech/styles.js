import styled from "styled-components";


export const ContainerForm = styled.div`
    width: 90%;   
    max-width: 369px;
    height: 342px;
    background-color: var(--color-gray-3);    
    border-radius: 8px;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    animation: fadeIn 2s;

    .header{
        width: 100%;
        height: 50px;        
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 17px;
        background-color: var(--color-gray-2);

        h3{
            font-weight: 700;
            font-size: 14.5px;
            color: var(--color-gray-0);
        }


    }
   

    form{
        width:90%;
        height: 350px;
        margin-top: 10px;
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
                background-color: var(--color-gray-2);
                border: 1.2182px solid transparent;                
                border-radius: 4px;
                padding: 0px 18px;
                font-weight: 400;
                font-size: 16.2426px;
                border: 1.2182px solid transparent;

                &:focus{
                    border: 1.2182px solid var(--color-gray-0);
                }
            }
            

        }

        .select{
        width: 100%;
        margin-bottom: 9%;        
        display: flex;
        flex-direction: column;
        gap: 8px;
        
        
        span{
        font-size: 12.182px;
        color: var(--color-gray-0);       
        }
        
        .custom-select{
            border: none;
            outline: none;
        }

        select{
            color: var(--color-gray-1);
            background-color: var(--color-gray-3);
            border: none;
            outline: none;
            width: 100%;
            height: 40px;
            padding: 0px 18px;
            background-image: url('https://www.citypng.com/public/uploads/preview/white-double-arrow-to-down-icon-hd-png-11639648464vwffjnm1lo.png');
            background-repeat: no-repeat;
            background-position: 98.8%;
            background-size: 25px;
            border-radius: 4px;
            border: 1.2182px solid transparent;
        
            -webkit-appearance: none;
            -moz-appearance: none;
                appearance: none;
                
                &:focus{
                    border: 1.2182px solid var(--color-gray-0);
                }
        }
        option{
        color: var(--color-gray-0);
        background-color: var(--color-gray-3);
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

   
`;

export const ContainerModal = styled.div`
    width: 100%;
    height: 150vh;
    display:  ${props => props.visible === 'flex' ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.55);     
    position: absolute;    
    z-index: 100; 

`;


export const Button = styled.button`
    width: 100%;
    height:48px;
    margin-bottom: 10%;

    font-size: 16px;
    font-weight: 400;

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