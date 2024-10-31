import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import TaskList from "./screens/TaskList";
import AddJobScreen from "./screens/AddJobScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import store from "./utils/saga/store";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="TaskList" component={TaskList} options={{ title: 'Jobs' }} />
                    <Stack.Screen name="AddJobScreen" component={AddJobScreen} options={{ title: 'Add Job' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
