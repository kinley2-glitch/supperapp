import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Home } from "./home/home";
import { Sell } from "./sell/sell";
import { Favorite } from "./favorite/favorite";
import { Profile } from "./profile/profile";

const HomeScreen = () => {
  return <Home />;
};

const SellScreen = () => {
  return <Sell />;
};

const FavoriteScreen = () => {
  return <Favorite />;
};

const ProfileScreen = () => {
  return <Profile />;
};

const Tab = createBottomTabNavigator();
export const Main = () => {
  return (
    <View className="flex-1">
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Sell"
            component={SellScreen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="shopping-cart" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Favorite"
            component={FavoriteScreen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="heart" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="user" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
