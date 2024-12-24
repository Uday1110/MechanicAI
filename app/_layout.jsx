// // import { useEffect } from "react";
// // import { useFonts } from "expo-font";
// // import "react-native-url-polyfill/auto";
// // import { SplashScreen, Stack } from "expo-router";
// // import GlobalProvider from "../context/GlobalProvider";
// // import TabsNavigator from "./(tabs)/TabsNavigator";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import History from "D:/Uday/Project 3-1/MyApp/app/(tabs)/history.jsx";
// // import Chatbot from "D:/Uday/Project 3-1/MyApp/app/(tabs)/chatbot.jsx";

// // // Prevent the splash screen from auto-hiding before asset loading is complete.
// // SplashScreen.preventAutoHideAsync();

// // const RootLayout = () => {
// //   const [fontsLoaded, error] = useFonts({
// //     "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
// //     "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
// //     "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
// //     "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
// //     "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
// //     "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
// //     "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
// //     "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
// //     "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
// //   });

// //   useEffect(() => {
// //     if (error) throw error;

// //     if (fontsLoaded) {
// //       SplashScreen.hideAsync();
// //     }
// //   }, [fontsLoaded, error]);

// //   if (!fontsLoaded) {
// //     return null;
// //   }

// //   if (!fontsLoaded && !error) {
// //     return null;
// //   }

// //   return (
// //     <GlobalProvider>
// //       <NavigationContainer>
// //         <Stack>
// //           <Stack.Screen
// //             name="(tabs)"
// //             component={TabsNavigator}
// //             options={{ headerShown: false }}
// //           />
// //           <Stack.Screen name="(auth)" options={{ headerShown: false }} />
// //           <Stack.Screen name="index" options={{ headerShown: false }} />
// //           <Stack.Screen
// //             name="search/[query]"
// //             options={{ headerShown: false }}
// //           />
// //         </Stack>
// //       </NavigationContainer>
// //     </GlobalProvider>
// //   );
// // };

// // export default RootLayout;

// // import { useEffect } from "react";
// // import { useFonts } from "expo-font";
// // import "react-native-url-polyfill/auto";
// // import { SplashScreen, Stack } from "expo-router";
// // import GlobalProvider from "../context/GlobalProvider";
// // import { NavigationContainer } from "@react-navigation/native";
// // import TabsNavigator from "./(tabs)/TabsNavigator";

// // // Prevent the splash screen from auto-hiding before asset loading is complete.
// // SplashScreen.preventAutoHideAsync();

// // const RootLayout = () => {
// //   const [fontsLoaded, error] = useFonts({
// //     "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
// //     "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
// //     "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
// //     "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
// //     "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
// //     "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
// //     "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
// //     "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
// //     "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
// //   });

// //   useEffect(() => {
// //     if (error) throw error;

// //     if (fontsLoaded) {
// //       SplashScreen.hideAsync();
// //     }
// //   }, [fontsLoaded, error]);

// //   if (!fontsLoaded) {
// //     return null;
// //   }

// //   return (
// //     // <NavigationContainer>
// //     <GlobalProvider>
// //       <Stack>
// //         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
// //         <Stack.Screen name="(auth)" options={{ headerShown: false }} />
// //         <Stack.Screen name="index" options={{ headerShown: false }} />
// //         <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
// //       </Stack>
// //     </GlobalProvider>
// //     // </NavigationContainer>
// //   );
// // };

// // export default RootLayout;

// import { useEffect } from "react";
// import { useFonts } from "expo-font";
// import "react-native-url-polyfill/auto";
// import { SplashScreen, Stack } from "expo-router";
// import GlobalProvider from "../context/GlobalProvider";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import History from "D:/Uday/Project 3-1/MyApp/app/(tabs)/history.jsx";
// // import Chatbot from "D:/Uday/Project 3-1/MyApp/app/(tabs)/chatbot.jsx";
// // import Home from "D:/Uday/Project 3-1/MyApp/app/(tabs)/home.jsx";
// // import Profile from "D:/Uday/Project 3-1/MyApp/app/(tabs)/profile.jsx";

// import History from "./(tabs)/history";
// import Chatbot from "./(tabs)/chatbot";
// import Home from "./(tabs)/home";
// import Profile from "./(tabs)/profile";

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// const RootLayout = () => {
//   const [fontsLoaded, error] = useFonts({
//     "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
//     "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
//     "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
//     "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
//     "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
//     "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
//     "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
//     "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
//     "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
//   });

//   useEffect(() => {
//     if (error) throw error;

//     if (fontsLoaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, error]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   if (!fontsLoaded && !error) {
//     return null;
//   }

//   return (
//     <GlobalProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           {/* <Stack> */}
//           <Stack.Screen name="History" component={History} />
//           <Stack.Screen name="ChatBot" component={Chatbot} />
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Profile" component={Profile} />
//           <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//           <Stack.Screen name="index" options={{ headerShown: false }} />
//           <Stack.Screen
//             name="search/[query]"
//             options={{ headerShown: false }}
//           />
//           {/* </Stack> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </GlobalProvider>
//   );
// };

// export default RootLayout;

import { useEffect } from "react";
import { useFonts } from "expo-font";
import "react-native-url-polyfill/auto";
import { SplashScreen, Stack } from "expo-router";

import GlobalProvider from "../context/GlobalProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;
