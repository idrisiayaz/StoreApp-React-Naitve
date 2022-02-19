import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../../Redux/Actions/cartActions";

var { height, width } = Dimensions.get("window");

function Confirm(props) {
  function confirmOrder() {
      setTimeout(() => {
          props.clearCart();
          props.navigation.navigate("Cart")
      }, 500)
  }

  const confirm = props.route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          Confirm Order
        </Text>
        {confirm ? (
          <View
            style={{
              borderWidth: 1,
              borderColor: "#3F51B5",
              backgroundColor: "gainsboro",
            }}
          >
            <Text style={styles.title}>Shipping to: </Text>
            <View style={{ padding: 8 }}>
              <Text>Address: {confirm.order.order.ShippingAddress1}</Text>
              <Text>Address2 : {confirm.order.order.ShippingAddress2}</Text>
              <Text>City: {confirm.order.order.city}</Text>
              <Text>pincode: {confirm.order.order.zip}</Text>
              <Text>Country: {confirm.order.order.country}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>
            {confirm.order.order.orderItems.map((x) => {
              return (
                <ListItem style={styles.listItem} key={x.product.name} avatar>
                  <Left>
                    <Thumbnail
                      source={{
                        uri: x.product.image
                          ? x.product.image
                          : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                      }}
                    />
                  </Left>
                  <Body style={styles.body}>
                    <Left>
                      <Text>{x.product.name}</Text>
                    </Left>
                    <Right>
                      <Text>₹ {x.product.price}</Text>
                    </Right>
                  </Body>
                </ListItem>
              );
            })}
          </View>
        ) : null}
        <View style={{ alignItems: "center", margin: 20 }}>
          <Button title={"Place order"} color="red" onPress={confirmOrder} />
        </View>
      </View>
    </ScrollView>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
}

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  title: {
    margin: 8,
    fontSize: 26,
    fontWeight: "bold",
  },
  listItem: {
    width: width / 1.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gainsboro",
  },
  body: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default connect(null, mapDispatchToProps)(Confirm)