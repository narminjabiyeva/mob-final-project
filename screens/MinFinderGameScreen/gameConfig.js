import { AsyncStorage } from 'react-native';

export default {
    bestScore: 0,

    async init() {
        await AsyncStorage.getItem("bestScore").then((value) => {
            if (value != null) {
                this.bestScore = parseInt(value);
            }
        });
    },

    async updateBestScore(newVal) {
        this.bestScore = newVal;
        await AsyncStorage.setItem("bestScore", newVal.toString());
    }
}