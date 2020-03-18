import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from './components/ColorCounter'

const SquareScreen = () => {
    return (
        <View>
            <ColorCounter />
            <ColorCounter />
            <ColorCounter />
        </View>
    )
}

export default SquareScreen

const styles = StyleSheet.create({})
