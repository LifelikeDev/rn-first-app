import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductListing from "./screens/productListing";
import Favourites from "./screens/favourites";
import ProductDetails from "./screens/productDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductContext from "./context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Product List",
        }}
        name="productListing"
        component={ProductListing}
      />
      <Tab.Screen
        options={{
          title: "Favourites",
        }}
        name="favourites"
        component={Favourites}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ProductContext>
      {/* view */}
      <View style={styles.container}>
        <StatusBar style="auto" />

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="bottomTabs"
              component={BottomTabs}
            />
            <Stack.Screen
              options={{
                title: "Product Details",
              }}
              name="productDetails"
              component={ProductDetails}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      {/* view */}
    </ProductContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
