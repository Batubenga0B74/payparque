import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Feather, Entypo,FontAwesome} from '@expo/vector-icons';
import * as  Naiten from './styele'
// import { Container } from './styles';
export default function(){
    return(
       <Naiten.Conteiner>
          <Naiten.Cardone>
            <FontAwesome name='car' size={35}/>
            <Text>Carro</Text>
            </Naiten.Cardone>

          <Naiten.Cardone style={Modelo.Fundo1}>
          <FontAwesome name='bus' size={35}/>
          <Text>Autocarro</Text>
          </Naiten.Cardone>

          <Naiten.Cardone style={Modelo.Fundo2}>
          <FontAwesome name='motorcycle' size={35}/>
          <Text>Motorizada</Text>
          </Naiten.Cardone>
       </Naiten.Conteiner>
       
    )
}

const Modelo = StyleSheet.create({
        Fundo1:{
            backgroundColor:'#FFC300',   
        },
        Fundo2:{
            backgroundColor:'#A3C2F0',   
        }

})
