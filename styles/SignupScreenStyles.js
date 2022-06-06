import { StyleSheet } from "react-native";
import color from '../constants/color';
import fonts from '../constants/fonts';

export default StyleSheet.create({
    button: {
        fontSize: 20,
        fontFamily: fonts.main
    },
    cancelButton: {
        fontSize: 20,
        fontFamily: fonts.mainBold
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    buttonContainer:{
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '3%',
        marginTop: '12%',
        justifyContent: "space-evenly",
        borderWidth:2,
        borderRadius: 45,
        backgroundColor: color.primary
    },
    dialogBox:{
        paddingHorizontal:'3%',
        justifyContent:'space-between'
    },
    bigText:{
        fontSize:30,
        fontFamily: fonts.mainBold
    },
    userInput: {
        borderWidth: 1.5,
        borderColor: color.primary,
        padding: '3%',
        paddingHorizontal: 16,
        fontSize: 20,
        marginBottom: 12,
        marginTop: 12,
        borderRadius: 45,
        fontFamily: fonts.main
    },
    smallText: {
        fontSize: 20,
        marginTop:"10%",
        fontFamily: fonts.main
    },
    buttonContainerCancel:{
        alignItems: 'center',
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
        width:'100%',
        marginTop: '5%',
        justifyContent: "space-evenly",
        padding: '3.5%'
    }
})
