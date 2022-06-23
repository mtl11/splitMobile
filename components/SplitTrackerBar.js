// import { StyleSheet, FlatList, View , Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
// import React, { useState } from 'react';
// import color from '../constants/color';
// import { Ionicons } from '@expo/vector-icons';

// const SplitTrackerBar = props =>{
//     const [currentPage, setCurrentPage] = useState(1);
//     const DATA = [
//         // {
//         //   id: '1',
//         // },
//         // {
//         //   id: '2',
//         // },
//         {
//           id: '3',
//         },
//     ];

//     const changePage = (val) => {
//        if(currentPage !=DATA.length){
//            if (val>0) setCurrentPage(currentPage.valueOf()+1);
          
//        }
//        if( currentPage !=1){
//             if (val<0) setCurrentPage(currentPage.valueOf()-1);
//        }
//        console.log(currentPage);
//     //    console.log(DATA.length);
//     }

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={()=>{changePage(-1)}}>
//                 <Ionicons name="md-caret-back" size={30} color="black" />
//             </TouchableOpacity>
//             {DATA.map((item)=>{
//                 return(
//                 item.id == currentPage ? <View style={styles.pageCircleSelected}>
//                 </View> : <View style={styles.pageCircle}></View>)
//             })}
//             <TouchableOpacity onPress={()=>{changePage(+1)}}>
//                 <Ionicons name="md-caret-forward" size={30} color="black" />
//             </TouchableOpacity>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         padding: "5%",
//         alignItems: 'center',
//         flexDirection: "row",
//         justifyContent: 'center'
//         // alignContent: ""
//     },
//     pageCircle:{
//         opacity: .3,
//         backgroundColor: 'black',
//         borderRadius:45,
//         padding: 10,
//         marginHorizontal: 8,
//     },
//     pageCircleSelected:{
//         backgroundColor: color.primary,
//         borderRadius:45,
//         padding: 10,
//         marginHorizontal: 8,
//     }
// })

// export default SplitTrackerBar;