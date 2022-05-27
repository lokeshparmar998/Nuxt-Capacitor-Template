/* capacitor v3 */
import { Capacitor } from "@capacitor/core";
import { Storage } from "@capacitor/storage";
import { Device } from "@capacitor/device";
import { Toast } from "@capacitor/toast";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { App } from "@capacitor/app";

import { Clipboard } from "@capacitor/clipboard";
import { Geolocation } from "@capacitor/geolocation";
import { Camera, CameraResultType } from "@capacitor/camera";
import { PushNotifications } from "@capacitor/push-notifications";

// toast function
async function showNativeToast(text) {
  await Toast.show({
    text: text,
  });
}
async function showNativeToastLong(text) {
  await Toast.show({
    text: text,
    duration: "long",
    position: "center",
  });
}

// set storage
async function setStorage(key, value) {
  await Storage.set({
    key: key,
    value: value,
  });
}

export default ({ app, store }, inject) => {
  inject("raiseToast", (message, context) => {
    if (Capacitor.isNativePlatform()) showNativeToast(message);
    else
      context.$toast.show(message, {
        position: "top-center",
        duration: 2000,
      });
  });
  inject("raiseToastLong", (message, context) => {
    if (Capacitor.isNativePlatform()) showNativeToastLong(message);
    else
      context.$toast.show(message, {
        position: "top-center",
        duration: 5000,
      });
  });

  inject("setStorage", (key, value) => {
    setStorage(key, value);
  });
  inject("getStorage", async (key) => {
    const { value } = await Storage.get({ key: key });
    return value;
  });
  inject("clearStorage", async () => {
    await Storage.clear();
  });

  inject("getDeviceInfo", async () => {
    let obj = await Device.getInfo();
    let uuid = await Device.getId();
    obj.uuid = uuid.uuid;
    return obj;
  });

  inject("copyToClipboard", (text) => {
    Clipboard.write({
      string: text,
    });
  });
  inject("launchHaptic", () => {
    Haptics.vibrate();
  });

  inject("getGeolocation", async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates.coords;
  });
  inject("captureCameraImage", async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    });
    return image;
  });

  inject("checkCapacitorPluginAvailability", (pluginName) => {
    return Capacitor.isPluginAvailable(pluginName);
  });

  inject("pushNotificationsRemoveListner", () => {
    PushNotifications.removeAllListeners();
  });

  inject("checkNativeDevice", () => {
    return Capacitor.isNativePlatform();
  });

  inject("checkPermission", (permissionName) => {
    if (permissionName == "geolocation") {
      return Geolocation.checkPermissions();
    } else if (permissionName == "notification") {
      return PushNotifications.checkPermissions();
    }
  });

  inject("requestPermissions", (permissionName) => {
    if (permissionName == "geolocation") {
      return Geolocation.requestPermissions();
    } else if (permissionName == "notification") {
      return PushNotifications.requestPermissions();
    }
  });
};
