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
        "marginTop": 8,
        "marginLeft": 12
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
        "borderColor": "white !important",
        "borderRadius": "16px !important",
        "paddingTop": 5,
        "height": 50,
        "lineHeight": "1.6em !important"
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
    "TransparentText": {
        "color": "#002B5F"
    },
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
    "getDivingBackground": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": "",
        "paddingLeft": "!important"
    },
    "nfo-icon1": {
        "textAlign": "center",
        "borderRadius": 4,
        "height": 195
    },
    "whiteText": {
        "color": "white"
    },
    "bookNowSecondaryButton": {
        "marginTop": 40
    },
    "brandIcon": {
        "height": 100,
        "width": "auto !important"
    },
    "getOffersSection": {
        "marginTop": 50
    },
    "offersItem": {
        "backgroundSize": "cover !important",
        "backgroundPosition": "center !important",
        "backgroundRepeat": "no-repeat !important",
        "width": "100%",
        "height": 400
    },
    "paragraphOffers": {
        "fontSize": 1.61,
        "fontWeight": "500",
        "color": "white"
    },
    "imageBanner": {
        "height": "60%",
        "width": "100%",
        "backgroundImage": "url(\"../img/get-50-off-party.png\")",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "offersCard": {
        "backgroundColor": "white",
        "height": "40%"
    },
    "cardTextContainer": {
        "height": "60%",
        "width": "100%"
    },
    "cardText": {
        "paddingTop": 10
    },
    "cardButtonContainer": {
        "backgroundColor": "white",
        "height": "40%"
    },
    "owl-prev owl-next": {},
    "owl-prev": {
        "color": "white !important",
        "fontSize": "30px !important",
        "float": "left !important",
        "position": "absolute !important",
        "top": 200,
        "left": -38
    },
    "owl-next": {
        "color": "white !important",
        "fontSize": "30px !important",
        "float": "left !important",
        "position": "absolute !important",
        "top": 200,
        "right": -38
    },
    "partnerImage": {
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "scubaDogs": {
        "marginLeft": 137
    }
});