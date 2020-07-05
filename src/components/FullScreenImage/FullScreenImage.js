import React from "react";
import { View, Animated, Dimensions } from "react-native";
import { styles } from "./styles";
const { width } = Dimensions.get("screen");

const FullScreenImage = (props) => {
  const { data } = props.route.params;
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
    <View style={styles.fullImgContainer}>
      <View style={styles.imgContainer}>
        <Animated.Image
          source={{ uri: data.miniImage }}
          style={{
            opacity: thumbnailAnimated,
            width: width,
            height: (data.height / data.width) * width,
          }}
          onLoad={handleThumbnailLoad}
          blurRadius={1}
        />
        <Animated.Image
          source={{ uri: data.fullImage }}
          style={[
            styles.imageOverlay,
            {
              opacity: imageAnimated,
              width: width,
              height: (data.height / data.width) * width,
            },
          ]}
          onLoad={onImageLoad}
        />
      </View>
    </View>
  );
};

export default FullScreenImage;
