import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Qestion1 = ({ navigation }: any) => {
  
    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text style={styles.questionText}>
                    Have you or anyone in your household had a sore throat, cough, chills, body aches, shortness of breath, loss of smell, loss of taste, fever at or greater than 100° Fahrenheit (38° Celcius) in the last 14 days?
                </Text>
            </View>
            <View style={styles.bouttons}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Question2', { data: {answer1: true} })}
                >
                    <Image
                        style={styles.noButton}
                        source={require('../assets/images/NOAnswer.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Question2', { data: { answer1: false } })}
                >
                    <Image
                        style={styles.noButton}
                        source={require('../assets/images/YESAnswer.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    question: {
        flex: 3,
        justifyContent: "flex-end"
    },
    questionText: {
        fontSize: 22,
        padding: 15,
        lineHeight: 36
    },
    bouttons: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 2,
        paddingTop: 20
    },
    noButton: {
        marginRight: 8
    },
    yesButton: {
        marginLeft: 8
    }
});

export default Qestion1;