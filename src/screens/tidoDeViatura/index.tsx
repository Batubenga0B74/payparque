import React from 'react';
import { View,Text } from 'react-native';
import * as Seventen from './style'
import TituloDaviatura from '../../components/TituloDaviatura';
import EscolhaTipo from '../../components/EscolhaTipo';
import Viaturas from '../../components/Viaturas';
import Botton from '../../components/Botton';
export default function(){

    return(
        <Seventen.Conteiner>
            <TituloDaviatura/>
            <EscolhaTipo/>
            <Viaturas/>
            <Botton/>
        </Seventen.Conteiner>
    )
}