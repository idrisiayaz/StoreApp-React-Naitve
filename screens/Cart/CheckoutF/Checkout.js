import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Item, Picker } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import FormContainer from "../../../Shared/Form/FormContainer";
import Input from "../../../Shared/Form/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { connect } from "react-redux";

const countries = require("../../../assets/data/countries.json");

function Checkout(props) {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems);
    return () => {
      setOrderItems();
    };
  }, []);

  function checkOut() {
    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      ShippingAddress1: address,
      ShippingAddress2: address2,
      zip,
    };
    props.navigation.navigate("Payment", { order: order });
  }

  return (
    <View>
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        extraHeight={200}
        enableOnAndroid={true}
      >
        <FormContainer title={"Shipping Address"}>
          <Input
            placeholder={"Phone"}
            name={"phone"}
            value={phone}
            keyboardType={"numeric"}
            onChangeText={(text) => setPhone(text)}
          />
          <Input
            placeholder={"Shipping Address 1"}
            name={"ShippingAddress1"}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <Input
            placeholder={"Shipping Address 2"}
            name={"ShippingAddress2"}
            value={address2}
            onChangeText={(text) => setAddress2(text)}
          />
          <Input
            placeholder={"City"}
            name={"city"}
            value={city}
            onChangeText={(text) => setCity(text)}
          />
          <Input
            placeholder={"Zip Code"}
            name={"zip"}
            value={zip}
            keyboardType={"numeric"}
            onChangeText={(text) => setZip(text)}
          />
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" color={"#007aff"} />}
              style={{ width: undefined }}
              selectedValue={country}
              placeholder="Country"
              placeholderStyle={{ color: "#007aff" }}
              placeholderIconColor="#007aff"
              onValueChange={(e) => setCountry(e)}
            >
              {countries.map((c) => {
                return (
                  <Picker.Item key={c.code} label={c.name} value={c.name} />
                );
              })}
            </Picker>
          </Item>
          <View style={{ width: "80%", alignItems: "center", margin: 20}}>
            <Button title="Confirm" onPress={() => checkOut()} color="#3F51B5"/>
          </View>
        </FormContainer>
      </KeyboardAwareScrollView>
    </View>
  );
}

function mapStateToProps(state) {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
}

export default connect(mapStateToProps)(Checkout);
