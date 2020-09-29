import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

import {CustomBtn, CustomHeader, CustomText} from "../../components";
import store from "../../store";
import {changeProfilePhoto, logout} from "../../store/userCredentials";
import fbApp from "../../store/firebase";
import {Nav} from "../../navigation/Nav";
import {CustomLinear} from "../../components/customLinear";
import {COLORS} from "../../styles/colors";
import {BackgroundBubbles} from "../../components/background-bubbles";
import {WarningModal} from "../../components/warningModal";

import WomanWithMask1 from './images/3972kl384.jpg';
import WomanWithMask2 from './images/3972uj384.jpg';
import WomanWithMask3 from './images/39723kdls84.jpg';
import WomanWithMask4 from './images/39723kl84.jpg';
import ManWithMask1 from './images/397238jds4.jpg';
import WomanWithMask5 from './images/3972384.jpg';
import ManBeautiful from './images/71764030-stock-vector-portrait-of-a-young-beautiful-man.jpg';
import ManAttractive from './images/animation-portrait-young-attractive-bearded-man-stylish-hairstyle-animation-portrait-young-attractive-bearded-106384527.jpg';
import Woman1 from './images/woman1.png';
import Woman2 from './images/woman2.png';
import Woman3 from './images/woman3.png';
import Woman4 from './images/woman4.png';
import Woman5 from './images/woman5.png';
import Woman6 from './images/woman6.png';
import Woman7 from './images/avatar.png';
import Woman8 from './images/hijab-style-beautiful-arabic-muslim-woman-vector-20077175.jpg';
import Woman9 from './images/iss_18508_00897.jpg';
import Woman10 from './images/Pfu8n2SD_400x400.jpg';
import Woman11 from './images/woman-thinking-vector-21811083.jpg';
import Man1 from './images/face-man-vector-304949.jpg';
import Man2 from './images/man-hair-vector-31.jpg';
import Man3 from './images/stylish-man-vector-illustration_82875-63.jpg';
import Man4 from './images/портрет-анимации-молодого-привлекательного-человека-с-стильным-106384340.jpg';
import DefaultImg from './images/images.png';


const windowSize = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};
export const ProfileScreen = ({navigation}) => {
    const [showModal, setShowModal] = useState(false);
    const [showSignOutModal, setShowSignOutModal] = useState(false);
    const [message, setMessage] = useState(null);
    const [temp, setTemp] = useState(null);
    const [changePhoto, setChangePhoto] = useState(false);
    const [chosenPhoto, setChosenPhoto] = useState(store.getState().userCredentials.img || DefaultImg);
    const photoList = [
        Woman1, Woman2, Woman3, Woman4, Woman5, Woman6, Woman7, Woman8, Woman9, Woman10, Woman11, WomanWithMask1, WomanWithMask2,WomanWithMask3, WomanWithMask4, WomanWithMask4, WomanWithMask5, Man1, Man2, Man3, Man4, ManAttractive, ManBeautiful, ManWithMask1
    ];
    const SignOut = () => {
        setShowSignOutModal(true);
    };
    const yes = () => {
        setShowSignOutModal(false);
        store.dispatch(logout());
        navigation.navigate('Home');
    };
    const no = () =>{
        setShowSignOutModal(false);
    };
    const closeModal = () => {
      setShowModal(false);
      setChangePhoto(false);
    };
    const confirm = (item) =>{
        setMessage("Are you sure to choose this photo?");
        setShowModal(true);
        setTemp(item);
    };
    const choose = () => {
        setPhoto(temp);
        setShowModal(false);
    };
    const setPhoto = (item) => {
        setChosenPhoto(item);
        setChangePhoto(false);
        fbApp.auth.currentUser.updateProfile({photoURL: item});
        store.dispatch(changeProfilePhoto({img: item}));
    };
    return (
        <CustomLinear>
            <BackgroundBubbles/>
            <CustomHeader name={"My Profile"} navigation={navigation} back={false} />
            <ScrollView style={styles.container}>
            <View style={styles.imageWrapper}><Image source={chosenPhoto} style={styles.profileImg}/></View>
            <CustomText style={styles.name} weight={"semi"}>{store.getState().userCredentials.fullName}</CustomText>

                <View >
                    <CustomBtn style={styles.btn} onPress={() => setChangePhoto(true)} title={"Change photo"} color={COLORS.secondWarning}/>
                    <CustomBtn style={styles.btn} title={"Sign out"} onPress={() => SignOut()} color={COLORS.secondWarning}/>
                </View>
                { changePhoto &&
                <View style={styles.gallery}>
                    <View style={styles.galleryHdr}>
                        <CustomText style={styles.galleryTitle}>Choose profile photo</CustomText>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <View style={styles.iconContainer}>
                                <CustomText weight={"bold"} style={styles.Icon}>X</CustomText>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <ScrollView>
                        <View style={styles.imageContainer}>
                            {photoList.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() =>confirm(item)}>
                                    <View>
                                        <Image source={item} style={styles.galleryImage}/>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
                }

        </ScrollView>
            <Nav navigation={navigation} />
            {showModal && <WarningModal message={message} functionality={[{button: 'Cancel', onPress: closeModal},{button: 'Choose', onPress: choose}]}/>}
            {showSignOutModal && <WarningModal
                message={"Are you sure, you want to sign out?"}
                functionality={[{button: 'Yes', onPress: yes, smile: 'sad-tear'},{button: 'No', onPress: no, smile: 'smile'}]}/>}
        </CustomLinear>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       zIndex: 2,
   },
    gallery: {
        position: 'absolute',
        backgroundColor: 'white',
        height: '100%',
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    galleryImage: {
       width: (windowSize.width-100)/2.6,
        height: (windowSize.height-100)/3.8,
        marginTop: 10
    },
    galleryHdr: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        marginHorizontal: 15,
        marginVertical: 10,
        borderBottomColor: '#74B9FF',
        borderBottomWidth: 1,
        paddingBottom: 2

    },
    galleryTitle: {
        fontSize: 20
    },
    iconContainer: {
        backgroundColor: COLORS.mainWarning,
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center"
    },
    Icon: {
        fontSize: 25,
        color: 'white',
    },
    profileImg: {
        width: 220,
        height: 220,
        borderRadius: 250,
    },
    name: {
       alignSelf: "center",
       marginTop: 20,
       marginBottom: 15,
        fontSize: 24,
        color: 'white'
    },
    checkContainer: {
        backgroundColor: 'rgba(50,50,50,0.5)',
    },
    btn: {
        width: "50%",
        alignSelf: "center",
        marginVertical: 10
    },
    imageWrapper: {
       // borderWidth: 2,
       //  borderColor: 'white',
        borderRadius: 250,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        alignSelf: "center",
        marginTop: 70
    },
    close: {
       position: 'absolute',
        top: 0,
        fontSize: 36,
    }
});
