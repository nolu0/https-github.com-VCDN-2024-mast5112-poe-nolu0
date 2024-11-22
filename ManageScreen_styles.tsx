import { StyleSheet } from "react-native";

export const ManageWorkout_Styles = StyleSheet.create({
    removeListView: {
        width: '95%',
        height: 480,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
    },
    removeItemContainer: {
        flex: 1,
        width: 540,
        backgroundColor: '#BDB5D5',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 10,
        marginLeft: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    Heading: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    removeButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 80,
    },
    userInputView: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '90%',
        marginVertical: 5,
        backgroundColor: '#CBC3E3',
        padding: 15,
        marginTop: 40,
        marginBottom: 50,
        borderRadius: 10,
        marginLeft: 30
    },
    saveButtonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    saveButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 30,
        marginVertical: 10,
        alignItems: 'center',
        marginTop: 40,
        width: 130
    }
})