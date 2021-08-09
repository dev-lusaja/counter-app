import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string,
    position?: 'bottomRight' | 'bottomLeft'
    onPress: () => void
}

export const Fab = ({title, onPress, position='bottomRight'}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ onPress }
                style={position === 'bottomRight' ? styles.fabPositionBottomRight : styles.fabPositionBottomLeft}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={position === 'bottomRight' ? styles.fabPositionBottomRight : styles.fabPositionBottomLeft}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#B0BEC5', false, 35) }
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return Platform.OS === 'ios' ? ios() : android();
}

const styles = StyleSheet.create({
    fab: {
        borderRadius: 100,
        backgroundColor: '#00695C',
        width: 70,
        height: 70,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    fabText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },
    fabPositionBottomRight: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabPositionBottomLeft: {
        position: 'absolute',
        bottom: 25,
        left: 25
    }
})