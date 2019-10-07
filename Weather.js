import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Mist: {
    iconName: "weather-rainy",
    gradient: ["#a8c0ff", "#3f2b96"],
    subtitle: "Have a Good Day!!"
  },
  Thunderstorm: {
    iconName: "weather-hurricane",
    gradient: ["#0f9b0f", "#000000"],
    subtitle: "Have a Good Day!!"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#45a247", "#283c86"],
    subtitle: "Have a Good Day!!"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#f2fcfe", "#1c92d2"],
    subtitle: "Have a Good Day!!"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#06beb6", "#48b1bf"],
    subtitle: "Have a Good Day!!"
  },
  Atmosphere: {
    iconName: "weather-sunset",
    gradient: ["#fffcdc", "#d9a7c7"],
    subtitle: "Have a Good Day!!"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#fdbb2d", "#22c1c3"],
    subtitle: "Have a Good Day!!"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D3CBB8", "#6D6027"],
    subtitle: "Have a Good Day!!"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#c0392b", "#8e44ad"],
    subtitle: "Have a Good Day!!"
  },
  Mist: {
    iconName: "weather-snowy-rainy",
    gradient: ["#38ef7d", "#11998e"],
    subtitle: "Have a Good Day!!"
  },
  Dust: {
    iconName: "weather-cloudy",
    gradient: ["#DECBA4", "#3E5151"],
    subtitle: "Have a Good Day!!"
  },
  Fog: {
    iconName: "weather-cloudy",
    gradient: ["#DECBA4", "#3E5151"],
    subtitle: "Have a Good Day!!"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
    "Fog"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 36,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600"
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start"
  }
});
