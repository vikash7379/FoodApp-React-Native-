import { View, Text, Image, FlatList } from "react-native";
import React from "react";

const data = [
  {
    id: 1,
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    id: 2,
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    id: 3,
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    id: 4,
    image: require("../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    id: 5,
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    id: 6,
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    id: 7,
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    id: 8,
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

const renderItems = ({ item }) => {
  return (
    <View style={{ alignItems: "center", marginRight: 30 }}>
      <Image
        source={item.image}
        style={{ width: 50, height: 40, resizeMode: "contain" }}
      />
      <Text style={{ fontSize: 12, fontWeight: "900",marginTop:3 }}>{item.text}</Text>
    </View>
  );
};

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#FFF",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <FlatList
        horizontal
        data={data}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Categories;
