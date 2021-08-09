import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {

    const [counter, setCounter] = useState(0)

    const onPress = (value: number) => {
        setCounter(counter + value);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                { counter }
            </Text>

            <Fab 
                title='+1'
                onPress={() => onPress(1)}    
            />

            <Fab
                title='-1'
                onPress={() => onPress(-1)}
                position='bottomLeft'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EEEEEE'
    },
    title: {
        textAlign: 'center',
        fontSize: 100,
        color: '#212121',
        fontWeight: 'bold'
    }
})