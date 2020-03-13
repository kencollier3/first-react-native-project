import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from './components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
           <ImageDetail title={'Forest'} score={'Image score - 9'} imgSource={require('../../assets/forest.jpg')}/>                   
           <ImageDetail title={'Beach'} score={'Image score - 7.4'} imgSource={require('../../assets/beach.jpg')}/>                   
           <ImageDetail title={'Mountain'} score={'Image score - 8.5'} imgSource={require('../../assets/mountain.jpg')}/>                   
        </View>
    )
}

const styles = StyleSheet.create({

});
export default ImageScreen