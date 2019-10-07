import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "f4a8509a4900303ce6991b034ee17a43";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp: temp
    });
  };
  getLocation = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      console.log(status);
      if (status === "granted") {
        const {
          coords: { latitude, longitude }
        } = await Location.getCurrentPositionAsync({});
        //TODO:send to API get Weather.
        console.log(latitude, longitude);
        this.getWeather(latitude, longitude);
      } else {
        Alert.alert("Permission does not granted");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Can't find you.", "So sad!!!!");
    }
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
