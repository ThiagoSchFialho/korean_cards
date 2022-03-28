import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listSelection: {
        height: '100%',
        paddingVertical: 30,
        backgroundColor: '#905ca0'
    },
    listMenu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
        marginBottom: 40,
        marginHorizontal: 50,
        justifyContent: 'space-between'
    },
    listContainer: {
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 50,
        borderRadius: 20,
        marginBottom: 50,
        width: '41%',
        height: 110,
    },
    list: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 105,
    },
    text: {
        fontSize: 17,
        fontFamily: 'Poppins_500Medium',
        lineHeight: 110,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: 'black'
    }
});

export default styles;