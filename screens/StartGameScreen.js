import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function StartGameScreen() {
    return (
        <View style={styles.inutContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inutContainer: {
        marginTop: 50,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
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
    }
});