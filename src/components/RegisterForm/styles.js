import styled from "styled-components";


export const ContainerFormReg = styled.div`
    width: 90%;   
    max-width: 369px;  
    max-height: 980px;
    background-color: var(--color-gray-2);    
    border-radius: 8px;   
    padding: 18px;
    margin-top: 130px;    
    display: flex;
    flex-direction: column;   
    align-items: center;
    gap: 4px;
    position: absolute;
    top: 0;

    h3{
        color: var(--color-gray-0);
    }
    
    span{
        color: var(--color-gray-1);
        font-weight: 400;
        font-size: 12px;
    }
   

    form{
        width:100%;
        height: 95%;
        display: flex;
        flex-direction: column;
        gap: 4px;
     
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
                gap:30px;

                span{
                    color: var(--color-negative);
                    font-weight: bold;    
                }
            }

            input{
                height: 44px;
                color: var(--color-gray-0);
                background-color: var(--color-gray-3);
                border: 1.2182px solid transparent;                
                border-radius: 4px;
                padding: 0px 18px;
                font-weight: 400;
                font-size: 16.2426px;
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
        
            -webkit-appearance: none;
            -moz-appearance: none;
                appearance: none;                     
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
        }
    }
    
`;


export const Button = styled.button`
    width: 100%;
    height:48px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-gray-0);
    background-color: rgba(89, 50, 63, 1);
    transition: 1s;

    &:hover{
        background-color: var(--color-primary);
        animation:pulse 1.5s infinite;        
    }

`;