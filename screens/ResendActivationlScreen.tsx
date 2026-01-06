import {StyleSheet, View} from "react-native";

import Text from '../components/Text';
import Button from "../components/Button";
import Image from "../components/Image";
import useColors from "@boneframework/native-components/hooks/useColors";


function ResendActivationScreen({tokenError, submitCallback, logosource}) {
    const colors = useColors();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        logo: {
            width: 150,
            height: 105,
            alignSelf: "center",
            marginTop: 50,
            marginBottom: 20,
        },
        resendText: {
            color: colors.white,
            fontSize: 17,
            marginBottom: 20,
            textAlign: 'center'
        },
        tokenError: {
            color: colors.white,
            fontSize: 25,
            marginBottom: 10,
            textAlign: 'center'
        },
    })

    if (!logosource) {
        logosource = require('../assets/logo.png');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logosource} />
            <Text style={styles.tokenError}>{tokenError}</Text>
            <Text style={styles.resendText}>You will need a fresh acivation email in order to continue creating your account.</Text>
            <Button color={'primary'} title={'Resend email'} onPress={submitCallback}/>
        </View>
    );
}

export default ResendActivationScreen;


