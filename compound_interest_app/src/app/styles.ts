import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1f62d6',
    },
    form: {
        gap: 15,
    },
    responses: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
        gap: 15,
    },
    resetButton: {
        marginTop: 30,
        backgroundColor: '#FF5252',
        padding: 10,
        borderRadius: 15,
        width: 150,
    },
});