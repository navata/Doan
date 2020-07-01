import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    bottomView: {
        backgroundColor: 'white'
    },
    inputText: {
        paddingVertical: 5,
        color: '#3c3c3c',
        marginLeft: 10,
        fontSize: 14,
        textAlign: 'left'
    },
    inputView:{
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'flex-start',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderColor: '#3c3c3c',
        overflow: 'hidden',
    },
    btnSave: {
        backgroundColor: '#00ACC1',
        paddingHorizontal: 30,
        height: 30,
        justifyContent: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        alignSelf: 'center',
        marginTop: 15
    },

    textSave: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 5
    }
});