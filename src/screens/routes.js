import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from "./home";
import information from './tidoDeViatura'
import Maap from './Map one'
import maap from './Map two'
import location from './location'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={home}/>
            <Tab.Screen name="Map" component={Maap}/>
            <Tab.Screen name="Map" component={maap}/>
            <Tab.Screen name="localization" component={location}/>
        </Tab.Navigator>
    )

}