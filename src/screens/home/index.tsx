import React from 'react';
import { Button, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { StyleSheet,Text } from 'react-native';
import { MenuCaixa } from './style';
import { PesQuisandolocal } from './style';
import { Temas ,  Listatema, } from './style';
 export default function (){
    return(
        <View style = {styles.container}>

            <MenuCaixa>
              <TouchableOpacity style={styles.head}>
              <Feather  name='menu' color='#000' size={28}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.head}>
           
            <Feather name='bell' color= '#000' size={28}/>
            </TouchableOpacity>
            </MenuCaixa>

           <PesQuisandolocal>
           <View style = {styles.buscar}> 
           <TextInput
            placeholder='introduza a sua localização' 
            style={styles.inp}/>
            <Feather name='search' color='#000' size={24}/>
            </View>
           </PesQuisandolocal> 
           <Temas>
            <Text style = {styles.testo}>Nos ajuada a encontrar</Text>
            <Text  style = {styles.testo}>o melhor lugar para</Text>
            <Text style = {styles.testo}>Si</Text>
           </Temas>
          <Listatema>
               <Text>Ativa os serviços de localizacao para que possamos</Text>
               <Text>mostrar-lhe os parques de estacionamento perto </Text>
               <Text> da sua localizacao atual</Text>
          </Listatema>
          <TouchableOpacity style = {styles.button}>
              <Text style = {styles.txtbtn}>Ativar localização</Text>
          </TouchableOpacity>
        </View>
    )
 };
 const styles = StyleSheet.create({
    container: {
      flex:1,
      width:'100%', 
    },
    buscar: {
      left:'2%',
      flexDirection:'row',
      alignItems:'center',
      width:'95%',
      height:50,
      justifyContent:'space-between',
    },
    testo:{
      fontSize:24,
      fontWeight:'800',
      fontFamily:'Manrope',
      color:'#240046',
    },
    subtext:{
      fontSize:8,
      color:'#9c9898'
    },
    button:{
      alignSelf:'center',
      flexDirection:'row',
      display:'flex',
      alignItems:"center",
      justifyContent:'center',
      top:350,
      backgroundColor:'#240046',
      padding:10,
      width: 181,
      height:35,
      borderRadius:10,
    },
    txtbtn :{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
       color:'#fff',
       top:-2,
    },
    head:{
      flexDirection:"row",
      alignItems:'center',
      justifyContent:'space-between',
      height:8000,
      width:30,
      top:-30,
      marginLeft:10,

    },
    inp:{
      width:'90%',
      height:'100%',
    }
  });
 