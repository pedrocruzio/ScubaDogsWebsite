import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "navbarImage": {
        "height": 54,
        "width": "auto",
        "marginTop": -20
    },
    "body": {
        "fontFamily": "'Lato', sans-serif"
    },
    "titleBold": {
        "fontWeight": "400"
    },
    "svgGetLogos": {
        "height": "72px !important"
    },
    "topCol": {
        "marginBottom": 30
    },
    "titleButton": {
        "fontSize": 24,
        "background": "white !important",
        "color": "black !important",
        "borderColor": "white !important"
    },
    "MultiCarousel": {
        "float": "left",
        "overflow": "hidden",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "width": "100%",
        "position": "relative"
    },
    "MultiCarousel MultiCarousel-inner": {
        "transition": "1s ease all",
        "float": "left"
    },
    "MultiCarousel MultiCarousel-inner item": {
        "float": "left"
    },
    "MultiCarousel MultiCarousel-inner item>div": {
        "textAlign": "center",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "color": "#666",
        "height": 282,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "pad15": {
        "backgroundImage": "url(\"../img/get-50-off.png\")",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "backgroundSize": "cover"
    },
    "MultiCarousel leftLst": {
        "position": "absolute",
        "borderRadius": "50%",
        "top": "calc(50% - 20px)",
        "left": 0
    },
    "MultiCarousel rightLst": {
        "position": "absolute",
        "borderRadius": "50%",
        "top": "calc(50% - 20px)",
        "right": 0
    },
    "MultiCarousel leftLstover": {
        "pointerEvents": "none",
        "background": "#ccc"
    },
    "MultiCarousel rightLstover": {
        "pointerEvents": "none",
        "background": "#ccc"
    },
    "lead": {
        "fontSize": 23,
        "color": "white",
        "fontWeight": "400"
    },
    "TransparentText": {},
    "productFirstRow": {
        "marginTop": 30
    },
    "greenText": {
        "color": "#26A022",
        "fontWeight": "500"
    },
    "blueText": {
        "color": "#2544B1",
        "fontWeight": "500"
    },
    "blueLightText": {
        "color": "#2CC3D9",
        "fontWeight": "500"
    },
    "redText": {
        "color": "#FF2A36",
        "fontWeight": "500"
    },
    "yellowText": {
        "color": "#FA9A3D",
        "fontWeight": "500"
    },
    "blackText": {
        "color": "black",
        "fontWeight": "500"
    },
    "nfo-icon1": {
        "textAlign": "center",
        "borderRadius": 4,
        "height": 195
    }
});