import React, {useState} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import {CustomBtn, CustomHeader, CustomText} from "../../components";
import {signIn} from "../../store/userCredentials";
import store from "../../store";
import {BackgroundBubbles} from "../../components/background-bubbles";
import {WarningModal} from "../../components/warningModal";
import {CustomLinear} from "../../components/customLinear";
import {COLORS} from "../../styles/colors";
import fbApp from "../../store/firebase";
const windowSize = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};
export const LoginScreen = ({navigation}) => {
    const [showError, setShowError] = useState(false);
    const [isLogIn, setIsLogIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const Navigate = () => {
      navigation.navigate("Home")
    };


    const register = () =>{
        !isLogIn && userData.name.trim() === "" ? setErrorMsg("Name field is required"):
            (isLogIn ? fbApp.auth.signInWithEmailAndPassword(userData.email, userData.password).then(res => {
                store.dispatch(signIn({fullName: fbApp.auth.currentUser.displayName, mail: userData.email, password: userData.password, img: fbApp.auth.currentUser.photoURL}));
                Navigate();
                }).catch(err => {
                    setErrorMsg(err.message);
                    setShowError(true);
                })
                :

        fbApp.auth.createUserWithEmailAndPassword(userData.email, userData.password).then(res =>
        {
            fbApp.auth.currentUser.updateProfile({displayName: userData.name});
            store.dispatch(signIn({fullName: userData.name, mail: userData.email, password: userData.password, img: null}));
            Navigate();
        }).catch(err => {
            setErrorMsg(err.message);
            setShowError(true);
        }));
    };


    const forgotPassword = () => {
      fbApp.auth.sendPasswordResetEmail(userData.email).then().catch(err => setErrorMsg(err.message));
      setErrorMsg("Password reset email was sent to your mail address.\n Please check your email and sign in again!");
      setShowError(true);
    };

    const closeError = () => {
        setShowError(false);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <CustomLinear>
                <BackgroundBubbles/>
                <CustomHeader navigation={navigation} back={true}/>
                <View style={styles.container}>
                {showError && <WarningModal message={errorMsg} functionality={[{button: 'Close' , onPress : closeError}]}/>}
                <View style={styles.wrapper}>
                    <View >
                        <CustomText style={styles.pageTitle} weight={"semi"}>{isLogIn ? "Sign In" : "Sign Up"}</CustomText>

                        <View>
                            {!isLogIn && <TextInput placeholder={"name"} style={styles.input} onChangeText={value => setUserData({...userData, name: value}) }/>}
                            <TextInput placeholder={"Email"} style={styles.input} onChangeText={value => setUserData({...userData, email: value})} required={true} keyboardType={'email-address'}/>
                            <TextInput placeholder={"Password"} secureTextEntry={true} style={styles.input} onChangeText={value => setUserData({...userData, password: value})} required={true} minLengh={6}/>
                        </View>

                        <View style={styles.linkContainer}>
                            <CustomText style={styles.question}>{isLogIn ? "Don't you have account yet?" : "Do you have account?"}</CustomText>
                            <TouchableOpacity onPress={() => setIsLogIn(!isLogIn)}>
                                <CustomText style={styles.authLink}>{isLogIn ? "Sign Up" : "Sign In"}</CustomText>
                            </TouchableOpacity>
                        </View>
                        {isLogIn &&
                            <TouchableOpacity onPress={forgotPassword}>
                                <CustomText style={styles.forgot}>Forgot password?</CustomText>
                            </TouchableOpacity>
                        }
                        <CustomBtn title={isLogIn ? "Sign In" : "Sign Up"} style={styles.button} onPress={register}
                        color={COLORS.secondWarning}/>
                    </View>
                </View>
            </View>
        </CustomLinear>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        width: '80%',
    },
    pageTitle:{
        fontSize: 50,
        textAlign: "center",
        color: 'white',
        marginBottom: 20,
    },
    input: {
        borderRadius: 6,
        // borderColor: 'rgba(50,50,50,0.5)',
        // borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'white'
    },
    question:{
        textAlign: "center",
        fontSize: 14,
        marginVertical: 10,
    },
    authLink: {
        textAlign: "center",
        fontSize: 20,
        textDecorationLine: "underline",
        color: COLORS.purple,
        marginVertical: 10,

    },
    button: {
        marginVertical: 10,
        width: "50%",
        alignSelf: "center"
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    forgot: {
        marginVertical: 10,
    },
});
