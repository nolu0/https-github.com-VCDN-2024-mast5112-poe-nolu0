import { StyleSheet} from "react-native";

 const HomeScreen_Style = StyleSheet.create({
    buttonsView: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    SummaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -40
    },
    text: {
        fontSize: 20,
        fontWeight: "500"
    },
    summaryHeadings: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    summaryText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#583E69',
    },
    summaryContainer: {
        backgroundColor: '#ECECEC',
        padding: 15,
        borderRadius: 10,
        marginTop: -10,
        alignItems: 'flex-start',
        width: 300,
    },
    AverageCaloryContainer: {
        backgroundColor: '#ECECEC',
        padding: 15,
        borderRadius: 10,
        alignItems: 'flex-start',
        width: 240,
        marginLeft: 20,
    },
    summaryContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#CBC3E3',
        paddingVertical: 15,
        paddingHorizontal: 0,
        borderRadius: 40,
        marginVertical: 10,
        alignItems: 'center',
        marginTop: 30,
        width: 250,
    },
    filterButton: {
        backgroundColor: '#CBC3E3',
        paddingVertical: 15,
        paddingHorizontal: 0,
        borderRadius: 40,
        marginVertical: 10,
        alignItems: 'center',
        marginTop: 30,
        width: 250,
        marginLeft: 5
    },
    headingContainer: {
        backgroundColor: '#BDB5D5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
        width: '100%'
    },
    trackerName: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#5B3E966',
    },
    listView: {
        marginTop: 20,
        width: '100%',
        height: 620,
        borderRadius: 10,
        backgroundColor: '#ECECEC'
    },
    listStyle: {
        maxHeight: 800
    },
    itemContainer: {
        flex: 1,
        padding: 20,
        marginVertical: -5,
        marginBottom: -50,
        backgroundColor: 'white'
    },

})