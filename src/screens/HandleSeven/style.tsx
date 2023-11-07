import styled from "styled-components/native";

export const Container = styled.ScrollView`
    width: 100%;
    height: 100vh;
    flex: 1;
`;
export const Header = styled.View`
    width: 100%;
    height: 450px;
    background-color:#1e1e33;
    border-bottom-left-radius: 50px;
    flex-direction: column;
`
export const BoxTxt = styled.View`
    width: 100%;
    height: max-content;
    padding: 60px 0 0 0;
    flex-direction: row;
    align-items: center;
`
export const CenterTxt = styled.View`
    width: 100%;
    height: max-content;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`
export const ImgView = styled.View`
    width: 250px;
    height: 400px;
    background-color: #00f;
    margin-right: 20px;
    display: flex;
`