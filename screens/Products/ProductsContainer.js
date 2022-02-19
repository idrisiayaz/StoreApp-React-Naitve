import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Keyboard,
  ScrollView,
  Dimensions,
} from "react-native";
import { Container, Header, Icon, Input, Text } from "native-base";

import ProductList from "./ProductList";
import SearchedProduct from "./SearchedProduct";
import Banner from "../../Shared/Banner";
import CategoryFilter from "./CategoryFilter";

const data = require("../../assets/data/products.json");
const productCategories = require("../../assets/data/categories.json");

var { height } = Dimensions.get("window");

export default function ProductContainer(props) {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(productCategories);
    setProductsCtg(data);
    setActive(-1);
    setInitialState(data);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive();
      setInitialState();
    };
  }, []);

  function searchProduct(text) {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  }

  function openList() {
    setFocus(true);
  }

  function onBlur() {
    setFocus(false);
    Keyboard.dismiss();
  }

  function changeCtg(ctg) {
    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => i.category.$oid === ctg),
              setActive(true)
            ),
          ];
    }
  }

  return (
    <Container>
      <Header
        style={{
          backgroundColor: "white",
          borderRadius: 70,
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Icon
          name="ios-search"
          style={{ marginTop: 12, borderRadius: 50, marginLeft: 5 }}
        />
        <Input
          placeholder="Search"
          style={{
            margin: 0,
            marginTop: 2,
            marginLeft: 5,
            backgroundColor: "white",
            height: 30,
            marginTop: 12,
          }}
          onFocus={openList}
          onChangeText={(text) => {
            searchProduct(text);
          }}
        />
        {focus == true ? (
          <Icon
            name="ios-close"
            onPress={onBlur}
            style={{ marginTop: 12, borderRadius: 50, marginRight: 5 }}
          />
        ) : null}
      </Header>
      {focus == true ? (
        <SearchedProduct
          productsFiltered={productsFiltered}
          navigation={props.navigation}
        />
      ) : (
        <ScrollView>
          <View>
            <View>
              <Banner />
            </View>
            <View>
              <CategoryFilter
                categories={categories}
                categoryFilter={changeCtg}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </View>
            {productsCtg.length > 0 ? (
              <View style={styles.listContainer}>
                {productsCtg.map((item) => {
                  return (
                    <ProductList
                      navigation={props.navigation}
                      key={item._id}
                      item={item}
                    />
                  );
                })}
              </View>
            ) : (
              <View style={[styles.center, { height: height / 2 }]}>
                <Text>No products found</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
