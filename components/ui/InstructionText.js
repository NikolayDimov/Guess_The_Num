import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Colors from "../../constants/colors";


function IntructionText({ children, style }) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
};

export default IntructionText;


const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    },

});