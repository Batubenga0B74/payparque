import styled from "styled-components/native";

 export const MenuCaixa = styled.View`
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 height: 8%;
 width: 95%;
 top: 93px;
 margin-left: 10px;
 
`;
export const PesQuisandolocal = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    top: 100px;
    align-items: center;
    width: 95%;
    height: 49px;
    border-radius: 6px;
    border: 1px;
   
`
export const  Temas = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80px;
    top: 280px;
    font-weight: 800;

`
 export const Listatema = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100px;
    top: 320px;
    color: #9C9898;

    
 `
   export const theme = {
    colors:{
        primary:'#000',
        text: '#fff',
        primaryHover:'#FF55',
        primaryActive: '#FFAA',
    },
  };

   export const Botao = styled.View`
   width: 90%;
   background-color: black;
   
  
  `
 