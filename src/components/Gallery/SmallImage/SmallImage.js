import React from "react";
import { TouchableOpacity, Animated, Dimensions, Image } from "react-native";
const { width } = Dimensions.get("screen");

const SmallImage = (props) => {
  thumbnailAnimated = new Animated.Value(0);
  imageAnimated = new Animated.Value(0);
  handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.push("FullScreenImage", {
          data: props.data,
        })
      }
    >
      <Image
        source={{ uri: props.data.miniImage }}
        style={{
          width: width * 0.25,
          height: (props.data.height / props.data.width) * width * 0.25,
        }}
      />
    </TouchableOpacity>
  );
};

export default SmallImage;
