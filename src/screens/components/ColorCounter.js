import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

const ColorCounter = ({color}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`}></Button>
            <Button title={`Decrease ${color}`}></Button>
        </View>
    )
}

export default ColorCounter

const styles = StyleSheet.create({})
