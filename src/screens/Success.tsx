import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


function Success({ navigation, route }: any) {
    const [success, setSuccess] = useState(false);

    const { data } = route.params;

    useEffect(() => {
        if (data.answer1 && data.answer2 && data.answer3) {
            setSuccess(true);
        } else {
            setSuccess(false);
        }
    }, [])
    return (
        <>
            <View style={styles.container}>
                <View style={styles.info}>
                    {
                        success ?
                        <Image
                            style={styles.infoImage}
                            source={require('../assets/images/success.png')}
                        />
                        :
                        <Image
                            style={styles.infoImage}
                            source={require('../assets/images/failed.png')}
                        />
                    }
                    <Text style={styles.infoTitle}>
                        David
                    </Text>
                    <Text style={styles.infoText}>
                        Health Check Passed
                    </Text>
                    <Text style={styles.infoDate}>
                        Sep 23, 2020
                    </Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Failed')}
                >
                    <View>
                        <Text style={styles.buttonText}>
                            Done
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    info: {
        alignItems: "center"
    },
    infoTitle: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 15,
    },
    infoText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    infoDate: {
        fontSize: 20,
        fontWeight: 'normal',
        marginTop: 18
    },
    infoImage: {

    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
    },
    button: {
        backgroundColor: '#409BFA',
        width: '90%',
        height: 60,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center"

    },
    buttonText: {
        color: '#fff',
        textAlign: "center",
        fontSize: 16
    }

});

export default Success;