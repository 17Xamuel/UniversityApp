import InitialStack from "./Routes/initialStack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  return <InitialStack isLoadingFirstTime={true} />;
}
// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);
//   const [isLoadingFirstTime, setIsLoadingFirstTime] = useState(true);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         const value = await AsyncStorage.getItem("isLoadingFirstTime");
//         if (value !== null) {
//           setIsLoadingFirstTime(false);
//         }

//         await SplashScreen.preventAutoHideAsync();
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

//   return <InitialStack isLoadingFirstTime={isLoadingFirstTime} />;
// }
