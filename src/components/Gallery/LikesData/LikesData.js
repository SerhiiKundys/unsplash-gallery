import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const LikesData = ({ likes }) => {
  return (
    <View style={styles.inline}>
      <AntDesign name="like2" size={20} color="#0099ff" />
      <Text style={styles.likesNum}>{likes}</Text>
    </View>
  );
};

export default LikesData;
