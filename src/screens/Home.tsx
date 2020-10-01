import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/ba-logo.png')}
                />
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>Covid 19</Text>
                    <Text style={styles.title}>Health Check</Text>
                    <Text style={styles.description}>Please answer the following questions related to your health and Covid 19.</Text>

                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Question1')}
                    >
                        <View>
                            <Text style={styles.buttonText}>
                                Begin
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    logoContainer: {
        flex: 2,
        justifyContent: "flex-end",
    },
    logo: {

    },
    content: {
        flex: 3,
        padding: 15,
        justifyContent: "space-between"
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 20,
        fontWeight: 'normal',
        marginTop: 30
    },
    button: {
        backgroundColor: '#409BFA',
        width: 300,
        height: 60,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: '#fff',
        textAlign: "center",
        fontSize: 26
    }

});

export default HomeScreen;