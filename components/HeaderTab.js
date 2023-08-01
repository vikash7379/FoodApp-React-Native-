import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const HeaderTab = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.container}>
      <HeaderButton
        text={"Delivery"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text={"Pickup"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({
  text,
  setActiveTab,
  activeTab,
}) => (
  <TouchableOpacity
    style={{
      ...styles.btnContainer,
      backgroundColor: activeTab === text ? "black" : "white",
    }}
    onPress={() => setActiveTab(text)}
  >
    <Text style={{ color: activeTab === text ? "white" : "black", fontSize : 15, fontWeight : '900' }}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
  },
  btnContainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
});

export default HeaderTab;
