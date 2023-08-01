import { View, SafeAreaView } from "react-native";
import React from "react";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
          <HeaderTab />
          <SearchBar />
        </View>
        <Categories />
      </SafeAreaView>
    </>
  );
};

export default Home;
