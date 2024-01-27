import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import AppContextProvider from "./AppContextProvider";
import ListView from "./screens/list-view/listView";
import EntryView from "./screens/entry-view/entryView";

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListView">
          <Stack.Screen name="ListView" component={ListView} />
          <Stack.Screen name="EntryView" component={EntryView} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}