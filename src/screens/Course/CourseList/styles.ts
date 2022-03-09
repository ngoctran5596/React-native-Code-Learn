import { FONTS, height, SIZES } from "@theme/theme";
import { StyleSheet, useWindowDimensions } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 22
    },
    modalHeader: {
       
        flexDirection: 'row',
        alignItems:'flex-end',
    },
    modalView: {
        flex: 1,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding:SIZES.padding
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        position: "absolute",
        right: 0,
        top: 0,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        width:'100%',
        textAlign: 'center',
        ...FONTS.h1
    }

})


export default styles;