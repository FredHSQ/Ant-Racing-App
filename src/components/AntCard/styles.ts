import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5
    },
    antImage: {
        height: 60,
        width: 60,
        resizeMode: "stretch"
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    subTitle: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    },
    informationContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start"
    },
})