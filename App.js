import React from "react";
import InitialStack from "./Routes/initialStack";

export default function App() {
  return <InitialStack />;
}

// import React, { useCallback, useEffect, useState } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import Feather from "react-native-vector-icons/Feather";
// import * as SplashScreen from "expo-splash-screen";

// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Keep the splash screen visible while we fetch resources
//         await SplashScreen.preventAutoHideAsync();
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View
//       style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//       onLayout={onLayoutRootView}
//     >
//       <Text>SplashScreen Demo!</Text>
//       <Feather name="file-text" size={30} />
//     </View>
//   );
// }
