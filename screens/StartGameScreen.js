import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredtext) {
        setEnteredNumber(enteredtext);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', "Number has to be a number between 1 and 99",
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }

        console.log('valid number');
    }


    return (
        <View style={styles.inutContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inutContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4, // shadow android
        shadowColor: 'black', // ios android
        shadowOffset: { width: 0, height: 2 }, // ios android
        shadowRadius: 6, // ios android
        shadowOpacity: 0.5, // ios android
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});