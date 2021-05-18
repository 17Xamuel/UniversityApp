import React from "react";
import InitialStack from "./Routes/initialStack";

export default function App() {
  return <InitialStack />;
  // async function getStorage() {
  //   try {
  //     const value = await AsyncStorage.getItem("hasBoarding");
  //     return value;
  //   } catch (error) {
  //     if (error) {
  //       Alert.alert(
  //         "App Crash",
  //         "Your App Crashed Due to initialization Error, Try Unistalling and Install Again",
  //         [
  //           {
  //             text: "Ok",
  //             onPress: () => {
  //               BackHandler.exitApp();
  //             },
  //           },
  //         ]
  //       );
  //     }
  //   }
  // }
  // getStorage().then((value) => {
  //   if (value) {
  //     return (
  //       <View>
  //         <Text>Xamuel</Text>
  //       </View>
  //     );
  //   } else {

  //   }
  // });
  // // if (!getStorage()) {
  //   return <InitialStack />;
  // } else {
  //   return (
  //     <View>
  //       <Text>Xamuel</Text>
  //     </View>
  //   );
  // }
  // return <Attend />;
  // return <DrawerScreen />;
}
