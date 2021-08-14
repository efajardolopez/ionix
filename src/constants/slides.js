import { PermissionsAndroid } from "react-native";
/**
 * Definición de arreglo de slides, cuya información nos servirá para desplegar título/descripción
 * y solicitar el permiso correspondiente
 */
const slides = [
  {
    key: "0",
    title: "Camera Access",
    image: require("../assets/img/camera.png"),
    description: "Please allow access to your camera to take photos",
    permission: PermissionsAndroid.PERMISSIONS.CAMERA,
  },
  {
    key: "1",
    image: require("../assets/img/notification.png"),
    title: "Enable push notifications",
    description:
      "Enable push notifications to let send you personal news and updates.",
    permission: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  },
  {
    key: "2",
    image: require("../assets/img/location.png"),
    title: "Enable location services",
    description:
      "We wants to access your location only to provide a better experience by helping you find new friends nearby.",
    permission: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  },
];

export default slides;
