import React from 'react';
import { TouchableOpacity, View,Text,StyleSheet } from 'react-native';
import * as Batu from './style'

// import { Container } from './styles';

export default function(){
    return(
        <Batu.Conteiner>
            <TouchableOpacity style={Estilos.btn}>
                <Text style={Estilos.txt}> Continuar</Text>
            </TouchableOpacity>
        </Batu.Conteiner>
    )
}
const Estilos = StyleSheet.create({
    btn:{
        width:'100%',
        height:49,
        alignItems:'center',
        justifyContent:'center',
        
    },
    txt:{
        color:'#fff',
        fontWeight:'600',
    }


})
