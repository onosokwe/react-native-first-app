import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;
const SvgBg = '';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImage: {
        marginTop: 40,
        marginBottom: 10,
        width: 70,
        height: 70
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#f22800",
        marginBottom: 40
    },
    pageText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#f22800",
        marginVertical: 20,
        marginBottom: 40
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderBottomColor: '#f22800',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 10,
        paddingHorizontal: 0,
        fontSize: 15,
        color: '#888',
        marginVertical: 10,
        marginHorizontal: 20
    },
    button: {
        backgroundColor: '#f22800',
        width: 300,
        borderRadius: 0,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    btnLink: {
        color: "#f22800",
        fontSize: 12
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    button2: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    logo2: {
        width: height_logo,
        height: height_logo
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        flex: 1,
        backgroundColor: '#009387'
    }

});