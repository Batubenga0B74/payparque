import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather, Entypo} from '@expo/vector-icons';
import * as Seven from './style'
export default function(){
    return(
        <Seven.Container>
            <View style={{width:'100%',height:550}}>
                <Seven.Header>
                    <Seven.BoxTxt>
                        <TouchableOpacity>
                            <Feather name='x' size={32} color={'#fff'} style={estilos.img}/>
                        </TouchableOpacity>
                        <Text style={estilos.txt1}>Carteira</Text>
                    </Seven.BoxTxt>
                    <Seven.CenterTxt>
                        <Entypo name='wallet' size={40} color='#fff'/>
                        <Text style={estilos.txt2}>Preço total</Text>
                        <View style={estilos.boxes}>
                            <Text style={estilos.txt3}>KZ205000.00</Text>
                            <Entypo name='plus' size={40} color='#fff' style={estilos.plus}/>
                        </View>
                    </Seven.CenterTxt>
                    <View style={estilos.roll}>
                        <Text style={estilos.txtCD}>Os teus cartões</Text>
                        <ScrollView horizontal={true} style={{marginTop:12,paddingLeft:20, width:'100%',zIndex:100}}>

                            <Entypo name='plus' size={40} color='#fff' style={estilos.plus2}/>
                            <Image source={require('./5.png')} style={estilos.imgmg}/>

                            <Image source={require('./1.png')} style={estilos.imgmg}/>
                            <Image source={require('./2.png')} style={estilos.imgmg}/>
                            <Image source={require('./1.png')} style={estilos.imgmg}/>
                            <Image source={require('./2.png')} style={estilos.imgmg}/>
                            <Image source={require('./1.png')} style={estilos.imgmg}/>

                            
                        </ScrollView>
                    </View>
                </Seven.Header>
            </View>
        </Seven.Container>
    )
}
const estilos = StyleSheet.create({
    txt1:{
        fontSize:25, 
        marginLeft:80,
        color:'#fff',
        fontWeight:'500'
    },
    img:{
        marginLeft:30,
        borderWidth:1,
        borderColor:'transparent',
        borderStyle:'solid',
        padding:10,
        borderRadius:5,
        backgroundColor:'#191929',
    },
    txt2:{
        fontSize:25,
        marginTop:10,
        color:'#dedededf',
    },
    txt3:{
        fontSize:30,
        color:'#fff',
    },
    boxes:{
        flexDirection:'row',
        marginTop:15,
        width:'63%',
        justifyContent:'space-between'
    },
    plus:{
        borderRadius:100,
        backgroundColor:'#00f'
    },
    roll:{
        position:'absolute',
        width:'100%',
        height:200,
        bottom:-100,
    },
    txtCD:{
        fontSize:20,
        color:'#fff',
        marginLeft:30
    },
    plus2:{
        backgroundColor:'#ff0',
        paddingTop:50,
        marginRight:20,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:10
    },
    imgmg:{
        width: 250,
        height: 400,
        resizeMode:'contain',
        marginTop:-120,
        marginRight:20
    }
})