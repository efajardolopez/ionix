import { PermissionsAndroid } from "react-native";
/**
 * Definición de arreglo de slides, cuya información nos servirá para desplegar título/descripción
 * y solicitar el permiso correspondiente
 */

const CameraImage = require("../assets/img/camera.png");
const NotificationImage = require("../assets/img/notification.png");
const LocationImage = require("../assets/img/location.png");

const slides = [
  {
    key: "0",
    title: "Camera Access",
    image: CameraImage,
    description: "Please allow access to your camera to take photos",
    permission: PermissionsAndroid.PERMISSIONS.CAMERA,
  },
  {
    key: "1",
    image: NotificationImage,
    title: "Enable push notifications",
    description:
      "Enable push notifications to let send you personal news and updates.",
    permission: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  },
  {
    key: "2",
    image: LocationImage,
    title: "Enable location services",
    description:
      "We wants to access your location only to provide a better experience by helping you find new friends nearby.",
    permission: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  },
];

export default slides;
