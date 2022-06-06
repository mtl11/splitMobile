import { StyleSheet } from "react-native";
import color from '../constants/color';
import fonts from '../constants/fonts';
export default StyleSheet.create({
    headerName:{
        fontSize: 50,
        fontFamily: fonts.mainLightBold
    },
    authContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width:'80%',
        height:'25%',
        marginTop: '5%',
        justifyContent: "space-evenly",
        borderWidth:2,
        borderRadius: 45,
        backgroundColor: color.primary,
    },
    authContainer2:{
        flexDirection: 'row',
        alignItems: 'center',
        width:'80%',
        height:'25%',
        justifyContent: "center",
    },
    infoContainer:{
        height:"80%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
        height:"25%"
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      alignContent:"center"
    },
    titleText:{
        fontSize: 20,
        padding:2,
        fontFamily: fonts.main
    },
    img:{
        height: 150,
        width: 150,
    },
    titleImg:{
        justifyContent:'center',
        alignContent:"center",
        textAlign: 'center',
        borderWidth:1
    },
    signUpText:{
        fontWeight: "bold",
        fontFamily: fonts.mainBold
    },
    signUpTextNoBold:{
        fontFamily: fonts.main
    },
    userInput: {
        flexDirection: 'row',
        padding: 8,
        fontSize: 20,
        marginBottom: 12,
        marginTop: 12,
        backgroundColor: color.primaryGray,
    },
    smallText: {
        fontSize: 20,
        fontFamily: fonts.main
    },
    dialogBox:{
        width:'90%',
        paddingTop: "20%"
    }
    });