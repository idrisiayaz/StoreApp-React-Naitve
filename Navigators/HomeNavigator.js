import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductContainer from '../screens/Products/ProductsContainer';
import SingleProduct from '../screens/Products/SingleProduct';

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="ProductContainer"
                component={ProductContainer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Product Detail"
                component={SingleProduct}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />
}