import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        marginBottom: 0,
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    indexRowView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignContent: 'center',
        justifyContent: 'center'
    },
    indexVerticalText: {
        color: 'black',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        textAlignVertical: 'center'
    },
    indexText: {
        color: 'black',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    indexSimpleView: {
        flex: 1,
        backgroundColor: 'transparent',
        alignContent: 'center',
        justifyContent: 'center'
    },


    rowView: {
        flexDirection: 'row',
        marginBottom: 10,
        alignContent: 'center',
        justifyContent: 'center'
    },

    cellTouchableHighlight: {
        borderRadius: 10,
        margin: 10,
        alignContent: 'center',
        justifyContent: 'center'
    },

    cellText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    modalAlignment: {
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },

    replayButton: {
        backgroundColor: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    replayText: {
        color: 'white',
    },

    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
      },
      card: {
        width: 300,
        padding: 30,
        borderRadius: 15,
        backgroundColor: "white",
        alignItems: "center",
      },
      score: {
        fontSize: 27
      },
      btn: {
        marginVertical: 10
      }


});