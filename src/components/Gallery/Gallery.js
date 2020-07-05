import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Button, ActivityIndicator } from "react-native";
import { fetchData, firstLoad } from "../../redux/actions";
import { connect, useSelector } from "react-redux";
import { styles } from "./styles";
import OwnerData from "./OwnerData/OwnerData";
import LikesData from "./LikesData/LikesData";
import SmallImage from "./SmallImage/SmallImage";

const Gallery = (props) => {
  let isFirstLoad = useSelector((state) => state.firstLoad);
  useEffect(() => {
    if (isFirstLoad) {
      props.firstLoad();
      props.fetchData(props.page + 1);
    }
  });
  return (
    <ScrollView>
      <StatusBar style="light" />
      <View style={styles.container}>
        {props.isFetching ? (
          <ActivityIndicator
            size="large"
            color="#0099ff"
            style={styles.activityIndicator}
          />
        ) : (
          <View>
            {props.posts.map((post, i) => (
              <View style={styles.postsContainer} key={i}>
                <SmallImage navigation={props.navigation} data={post} />
                <View style={styles.description}>
                  <OwnerData username={post.username} />
                  <LikesData likes={post.likes} />
                </View>
              </View>
            ))}
            <View style={styles.pagination}>
              {props.page !== 1 && (
                <Button
                  title="Previous"
                  onPress={() => props.fetchData(props.page - 1)}
                />
              )}
              <Button
                title="Next"
                onPress={() => props.fetchData(props.page + 1)}
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    page: state.page,
    isFetching: state.isFetching,
    error: state.error,
  };
}

export default connect(mapStateToProps, { fetchData, firstLoad })(Gallery);
