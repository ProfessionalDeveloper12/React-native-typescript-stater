import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function Qestion3({ navigation, route }: any) {
    const { data } = route.params

    const onNo = () => {
        navigation.navigate('Success', {data: {...data, answer3: true}});
    }
    const onYes = () => {
        navigation.navigate('Success', {data: {...data, answer3: false}});
    }
    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text style={styles.questionText}>
                    To the best of your knowledge have you been in close proximity, in the last 14 days, to any individual who tested positive for COVID-19?                </Text>
            </View>
            <View style={styles.bouttons}>
                <TouchableOpacity
                    onPress={() => onNo()}
                >
                    <Image
                        style={styles.noButton}
                        source={require('../assets/images/NOAnswer.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onYes()}
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

export default Qestion3;