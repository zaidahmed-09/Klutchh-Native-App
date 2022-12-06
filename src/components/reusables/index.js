import { TouchableOpacity,Text } from "react-native";
import styled from "styled-components";

export const GlobalButton = styled(TouchableOpacity)`
background-color: #FF326A;
border-radius: 8px;
height: 44px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
` 
export const TextWhite = styled(Text)`
color: white;
font-size: 16px;
font-family: Inter-SemiBold;
` 


export const GlobalButtonInactive = styled(TouchableOpacity)`
background-color: #FFFFFF20;
border-width: 1px;
border-color:  #FFFFFF30;
border-radius: 8px;
height: 44px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
` 