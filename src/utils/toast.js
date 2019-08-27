import { Toast } from "native-base";
import { TOAST_DURATION } from "../constants/config";
import I18n from "../i18n/i18n";

const success = (content) => {
  Toast.show({
    text: content,
    buttonText: I18n.t("TOAST_BUTTON_success"),
    type: "success",
    duration: TOAST_DURATION
  });
};

const warning = (content) => {
  Toast.show({
    text: content,
    buttonText: I18n.t("TOAST_BUTTON_warning"),
    type: "warning",
    duration: TOAST_DURATION
  });
};

const danger = (content) => {
  Toast.show({
    text: content,
    buttonText: I18n.t("TOAST_BUTTON_danger"),
    type: "danger",
    duration: TOAST_DURATION
  });
};

const normal = (content) => {
  Toast.show({
    text: content,
    buttonText: I18n.t("TOAST_BUTTON_default"),
    duration: TOAST_DURATION
  });
};

export default {
  success,
  warning,
  danger,
  normal
};
