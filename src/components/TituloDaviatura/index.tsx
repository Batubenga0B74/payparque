import React from "react";
import { View, Text ,StyleSheet} from "react-native";
import * as Oiten from './style'

export default function (){
    return(
        <Oiten.Titulo>
            <Text style={estilos.Texto1}>Selecione o</Text>
            <Text style={estilos.texto2}> Tipo de viatura</Text>
        </Oiten.Titulo>
    )
}
const estilos = StyleSheet.create({
    Texto1:{
        fontWeight:'400',
        fontSize:35,
        lineHeight:70,
    },
    texto2:{
        fontWeight:'800',
        fontSize:35,
        flexDirection:'row',
        lineHeight:60,
        bottom:25,
        right:5,
    }
})