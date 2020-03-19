import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => (
        <View>
                <Button onPress={() => navigation.navigate('Components')} title="Go to components demo" />
                <TouchableOpacity onPress={() => navigation.navigate('List')}>
                        <Text>Go to list demo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Image')}>
                        <Text>Go to image demo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
                        <Text>Go to counter demo</Text>
                </TouchableOpacity>
                <Button title="Go to color demo" onPress={() => navigation.navigate('Color')}></Button>
                <Button title="Go to square demo" onPress={() => navigation.navigate('Square')}></Button>
        </View>
);

const styles = StyleSheet.create({
        text: {
                fontSize: 30,
        },
});

export default HomeScreen;
