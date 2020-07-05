import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

const OwnerData = ({ username, i }) => {
  return (
    <View style={styles.inline}>
      <Feather name="user" size={20} color="#0099ff" />
      <Text style={styles.descriptionText} key={(i + 20).toString()}>
        {username}
      </Text>
    </View>
  );
};

export default OwnerData;
