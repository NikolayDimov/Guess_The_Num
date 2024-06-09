import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const diviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: diviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // shadow android
        shadowColor: 'black', // ios android
        shadowOffset: { width: 0, height: 2 }, // ios android
        shadowRadius: 6, // ios android
        shadowOpacity: 0.5, // ios android
    },
});