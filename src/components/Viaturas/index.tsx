import React  from 'react';
import * as Eleven from './style'
import { View,Image,StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function(){
        return(
            <Eleven.Conteiner>
                  <Image source={require('../../images/carro.png')} style={estilo.Imagen} />
            </Eleven.Conteiner>
        )
}
const  estilo = StyleSheet.create({
        Imagen:{
            width:350,
            height:148,
        }

})
