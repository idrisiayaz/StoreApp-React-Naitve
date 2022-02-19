import React from 'react';
import {View, Dimensions} from 'react-native';
import { Content, Left, Body, ListItem, Thumbnail, Text } from 'native-base';

var {width} = Dimensions.get("window");

export default function SearchedProduct(props) {
    const {productsFiltered} = props;
    return (
        <Content style={{width: width}}>
        {productsFiltered.length > 0 ? (
            productsFiltered.map((item) => (
            <ListItem 
                onPress={() => { 
                    props.navigation.navigate("Product Detail", {item: item})
                }}
                key={item.id} 
                avatar>

                <Left>
                    <Thumbnail 
                       source={{uri: item.image ? item.image : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"}}
                     />
                </Left>    
                <Body>
                    <Text>{item.name}</Text>
                    <Text note>{item.description}</Text>
                </Body>   
            </ListItem>
            ))
        ) : (
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text style={{ alignSelf: 'center' }}>
                    No products available
                </Text>
            </View>
        )}
        </Content>
    )
}