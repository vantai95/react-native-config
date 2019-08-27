import { createStackNavigator } from "react-navigation";

import AuthenticateContainer from "../../containers/auths/authentication";
import ForgetPasswordScreen from "../../screens/auths/forgetPassword";

const AuthStack = createStackNavigator(
    {
        Authenticate: AuthenticateContainer,
        ForgetPassword: ForgetPasswordScreen
    },
    {
        headerMode: "none"
    }
);

export default AuthStack;
