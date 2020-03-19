import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetail = props => {
  return (
    <View>
      <Image source={props.imgSource} />
      <Text>{props.title}</Text>
      <Text>{props.score}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
