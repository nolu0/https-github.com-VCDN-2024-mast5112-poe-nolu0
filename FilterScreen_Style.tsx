import { StyleSheet } from "react-native";

const FilterScreen_Style = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
    },
    listView: {
        width: '85%',
        height: 550,
        marginTop: 30,
        backgroundColor: '#ECECEC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 10
    },
    dropDownView: {
        padding: 12,
        marginTop: -105
    },
    heading: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    headingContainer: {
        backgroundColor: '#BDB5D5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
    },
})