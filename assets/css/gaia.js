import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontSize": 14,
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%"
    },
    "body": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontSize": "100%",
        "position": "relative"
    },
    "h1": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontSize": 3,
        "lineHeight": 1.213483146,
        "fontWeight": "bold"
    },
    "h2": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontSize": 2.4,
        "lineHeight": 1.25,
        "marginTop": 0.4,
        "marginRight": 0,
        "marginBottom": 0.4,
        "marginLeft": 0,
        "fontWeight": "bold"
    },
    "h3": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontSize": 1.61,
        "lineHeight": 1.05,
        "marginTop": 15,
        "marginBottom": 15
    },
    "h4": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontSize": 1.3,
        "lineHeight": 1.714285714
    },
    "h5": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontSize": 1.2
    },
    "h6": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased"
    },
    "content-blog p": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontSize": 18,
        "marginBottom": 30
    },
    "h1 a": {
        "fontSize": "inherit"
    },
    "h2 a": {
        "fontSize": "inherit"
    },
    "h3 a": {
        "fontSize": "inherit"
    },
    "h4 a": {
        "fontSize": "inherit"
    },
    "h5 a": {
        "fontSize": "inherit"
    },
    "h6 a": {
        "fontSize": "inherit"
    },
    "content-blog p a": {
        "fontSize": "inherit"
    },
    "content-blog": {
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 30,
        "paddingLeft": 0
    },
    "p": {
        "fontSize": 14,
        "lineHeight": 1.6,
        "fontWeight": "400",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.75,
        "marginLeft": 0
    },
    "label": {},
    "btn": {
        "WebkitTransition": "all 150ms ease-out",
        "MozTransition": "all 150ms ease-out",
        "OTransition": "all 150ms ease-out",
        "MsTransition": "all 150ms ease-out",
        "transition": "all 150ms ease-out",
        "borderWidth": 1,
        "backgroundColor": "transparent",
        "fontWeight": "600",
        "borderRadius": 3,
        "fontSize": 12,
        "lineHeight": 8,
        "opacity": 0.8,
        "filter": "alpha(opacity=80)",
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "borderColor": "#888888",
        "color": "#888888",
        "textTransform": "uppercase"
    },
    "form-control": {
        "WebkitTransition": "all 300ms linear",
        "MozTransition": "all 300ms linear",
        "OTransition": "all 300ms linear",
        "MsTransition": "all 300ms linear",
        "transition": "all 300ms linear",
        "marginBottom": 1.875,
        "borderColor": "#d0cdbc",
        "backgroundColor": "#FFFFFF",
        "border": "1px solid #E3E3E3",
        "borderRadius": 4,
        "color": "#444444",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "height": 40,
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "title h5": {},
    "navbar": {
        "WebkitTransition": "all 300ms linear",
        "MozTransition": "all 300ms linear",
        "OTransition": "all 300ms linear",
        "MsTransition": "all 300ms linear",
        "transition": "all 300ms linear",
        "border": 0,
        "fontSize": 16
    },
    "brand": {},
    "btn-simple": {
        "border": 0,
        "fontSize": 14,
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20
    },
    "a": {
        "color": "#777777",
        "opacity": 0.7,
        "fontSize": 14,
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear"
    },
    "td-name": {},
    "td": {},
    "small": {},
    "media h5": {},
    "subtitle": {},
    "a:hover": {
        "color": "#777777",
        "opacity": 1,
        "textDecoration": "none"
    },
    "title": {
        "textAlign": "center",
        "marginBottom": 50
    },
    "title p": {
        "color": "#777777"
    },
    "title-modern": {
        "fontWeight": "100"
    },
    "text-gray": {
        "color": "#777777"
    },
    "text-primary": {
        "color": "#c5a47e !important"
    },
    "text-info": {
        "color": "#00abc0 !important"
    },
    "text-success": {
        "color": "#7accb8 !important"
    },
    "text-warning": {
        "color": "#f88f58 !important"
    },
    "text-danger": {
        "color": "#e78b90 !important"
    },
    "text-gold": {
        "color": "#c5a47e"
    },
    "title-gold": {
        "color": "#c5a47e"
    },
    "quotes": {
        "position": "relative",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "quotes:before": {
        "position": "absolute",
        "fontSize": 40,
        "color": "#777777",
        "lineHeight": 0,
        "content": "\\201C",
        "left": 0,
        "top": 5
    },
    "quotes:after": {
        "position": "absolute",
        "fontSize": 40,
        "color": "#777777",
        "lineHeight": 0,
        "content": "\\201D",
        "right": 0,
        "bottom": -10
    },
    "separator": {
        "color": "#c5a47e",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto",
        "maxWidth": 240,
        "textAlign": "center",
        "position": "relative"
    },
    "separator:before": {
        "display": "block",
        "width": "40%",
        "content": " ",
        "marginTop": 10,
        "border": "1px solid #c5a47e",
        "float": "left"
    },
    "separator:after": {
        "display": "block",
        "width": "40%",
        "content": " ",
        "marginTop": 10,
        "border": "1px solid #c5a47e",
        "float": "right"
    },
    "separator-danger": {
        "color": "#e78b90"
    },
    "separator-danger:before": {
        "borderColor": "#e78b90"
    },
    "separator-danger:after": {
        "borderColor": "#e78b90"
    },
    "pdescription": {
        "fontSize": 16,
        "color": "#777777"
    },
    "a:focus": {
        "textDecoration": "none",
        "outline": 0
    },
    "a:active": {
        "outline": 0
    },
    "button::-moz-focus-inner": {
        "outline": 0
    },
    "input[type=\"reset\"]::-moz-focus-inner": {
        "outline": 0
    },
    "input[type=\"button\"]::-moz-focus-inner": {
        "outline": 0
    },
    "input[type=\"submit\"]::-moz-focus-inner": {
        "outline": 0
    },
    "select::-moz-focus-inner": {
        "outline": 0
    },
    "input[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner": {
        "outline": 0
    },
    "ui-slider-handle:focus": {
        "outline": "0 !important"
    },
    "navbar-toggle": {
        "outline": "0 !important",
        "marginTop": 19,
        "marginBottom": 19,
        "border": 0
    },
    "input-group-addon": {
        "WebkitTransition": "all 300ms linear",
        "MozTransition": "all 300ms linear",
        "OTransition": "all 300ms linear",
        "MsTransition": "all 300ms linear",
        "transition": "all 300ms linear",
        "backgroundColor": "#FFFFFF",
        "border": "1px solid #E3E3E3",
        "borderRadius": 4
    },
    "tagsinput": {
        "WebkitTransition": "all 300ms linear",
        "MozTransition": "all 300ms linear",
        "OTransition": "all 300ms linear",
        "MsTransition": "all 300ms linear",
        "transition": "all 300ms linear"
    },
    "navbar alert": {
        "WebkitTransition": "all 300ms linear",
        "MozTransition": "all 300ms linear",
        "OTransition": "all 300ms linear",
        "MsTransition": "all 300ms linear",
        "transition": "all 300ms linear"
    },
    "tagsinput tag": {
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear"
    },
    "tagsinput-remove-link": {
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear"
    },
    "filter": {
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear",
        "position": "relative",
        "height": "100%",
        "color": "#FFFFFF"
    },
    "btn-hover": {
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear"
    },
    "[data-toggle=\"collapse\"] i": {
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear"
    },
    "body > navbar-collapse a": {
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear"
    },
    "btn-morphing fa": {
        "WebkitTransition": "all 370ms linear",
        "MozTransition": "all 370ms linear",
        "OTransition": "all 370ms linear",
        "MsTransition": "all 370ms linear",
        "transition": "all 370ms linear"
    },
    "btn-morphing circle": {
        "WebkitTransition": "all 370ms linear",
        "MozTransition": "all 370ms linear",
        "OTransition": "all 370ms linear",
        "MsTransition": "all 370ms linear",
        "transition": "all 370ms linear"
    },
    "gsdk-collapse": {
        "WebkitTransition": "all 370ms linear",
        "MozTransition": "all 370ms linear",
        "OTransition": "all 370ms linear",
        "MsTransition": "all 370ms linear",
        "transition": "all 370ms linear"
    },
    "fa": {
        "width": 18,
        "textAlign": "center"
    },
    "margin-top": {
        "marginTop": 50
    },
    "better-browser": {
        "maxWidth": 700,
        "marginTop": 200,
        "marginRight": "auto",
        "marginBottom": 200,
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "better-browser div": {
        "marginBottom": 10
    },
    "info-icon": {
        "textAlign": "center",
        "border": "2px solid #ddd",
        "borderRadius": 4,
        "height": 195
    },
    "info-icon icon": {
        "fontSize": 62,
        "lineHeight": 66,
        "color": "#c5a47e",
        "marginBottom": 10
    },
    "info-icon description": {
        "marginTop": 15,
        "color": "#777777"
    },
    "avatar": {
        "border": "3px solid #c5a47e",
        "borderRadius": "50%",
        "overflow": "hidden",
        "maxWidth": 110,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "avatar img": {
        "width": "100%",
        "height": "auto"
    },
    "avatar-danger": {
        "borderColor": "#e78b90"
    },
    "*::selection": {
        "background": "#e78b90",
        "color": "#FFFFFF"
    },
    "zoomOut": {
        "WebkitAnimationName": "zoomOut",
        "animationName": "zoomOut"
    },
    "loading": {
        "position": "fixed",
        "top": 0,
        "width": "100%",
        "height": "100%",
        "background": "white",
        "zIndex": 1032,
        "opacity": 1,
        "transition": "opacity 0.5s cubic-bezier(0.7, 0, 0.3, 1)"
    },
    "loadinghide": {
        "display": "none"
    },
    "loading loading-container": {
        "zIndex": 1033,
        "display": "block",
        "position": "relative",
        "textAlign": "center",
        "top": "50%",
        "left": "50%",
        "WebkitTransform": "translate(-50%, -50%)",
        "MozTransform": "translate(-50%, -50%)",
        "OTransform": "translate(-50%, -50%)",
        "MsTransform": "translate(-50%, -50%)",
        "transform": "translate(-50%, -50%)"
    },
    "loading loading-container loader": {
        "width": 40
    },
    "loading loading-container p": {
        "fontSize": 30,
        "marginBottom": 30
    },
    "btn-black i": {
        "position": "absolute",
        "top": 14,
        "right": 0.25,
        "opacity": 0,
        "WebkitTransition": "all 150ms ease-out",
        "MozTransition": "all 150ms ease-out",
        "OTransition": "all 150ms ease-out",
        "MsTransition": "all 150ms ease-out",
        "transition": "all 150ms ease-out"
    },
    "btn-black:hover i": {
        "right": 26,
        "opacity": 1
    },
    "btn-black:focus i": {
        "right": 26,
        "opacity": 1
    },
    "form-control:focus": {
        "borderColor": "#777777",
        "backgroundColor": "#FFFFFF",
        "border": "1px solid #777777",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "list-logos a img:first-child": {
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear"
    },
    "section-clients-3 clients-carousel li img:first-child": {
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "WebkitTransform": "translate(-50%, -50%)",
        "MozTransform": "translate(-50%, -50%)",
        "OTransform": "translate(-50%, -50%)",
        "MsTransform": "translate(-50%, -50%)",
        "transform": "translate(-50%, -50%)",
        "opacity": 1,
        "zIndex": 2
    },
    "project-content icon-close i": {
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear"
    },
    "nav-text > liactive a": {
        "WebkitTransition": "all 150ms linear",
        "MozTransition": "all 150ms linear",
        "OTransition": "all 150ms linear",
        "MsTransition": "all 150ms linear",
        "transition": "all 150ms linear"
    },
    "form-control::-webkit-placeholder": {
        "WebkitTransition": "all 150ms ease-out",
        "MozTransition": "all 150ms ease-out",
        "OTransition": "all 150ms ease-out",
        "MsTransition": "all 150ms ease-out",
        "transition": "all 150ms ease-out"
    },
    "body-layer": {
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "bottom": 0,
        "zIndex": 1030,
        "backgroundColor": "rgba(0, 0, 0, 0.1)",
        "visibility": "hidden",
        "transition": "all .1s ease"
    },
    "body-layer open": {
        "visibility": "visible"
    },
    "card icon": {
        "fontSize": 75,
        "lineHeight": 75
    },
    "card icon ~ h3": {
        "marginTop": 5,
        "marginBottom": 0
    },
    "navbar navbar-nav > li > abtn": {
        "borderWidth": 1,
        "backgroundColor": "transparent",
        "fontWeight": "600",
        "borderRadius": 3,
        "fontSize": 12,
        "lineHeight": 8,
        "opacity": 0.8,
        "filter": "alpha(opacity=80)",
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "borderColor": "#888888",
        "color": "#888888",
        "textTransform": "uppercase",
        "marginTop": 15,
        "marginRight": 3,
        "marginBottom": 15,
        "marginLeft": 3
    },
    "btn:hover": {
        "backgroundColor": "transparent",
        "color": "#777777",
        "borderColor": "#777777",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "outline": "0 !important"
    },
    "btn:focus": {
        "backgroundColor": "transparent",
        "color": "#777777",
        "borderColor": "#777777",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "outline": "0 !important"
    },
    "btn:active": {
        "backgroundColor": "transparent",
        "color": "#777777",
        "borderColor": "#777777",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "btnactive": {
        "backgroundColor": "transparent",
        "color": "#777777",
        "borderColor": "#777777",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "open > btndropdown-toggle": {
        "backgroundColor": "transparent",
        "color": "#777777",
        "borderColor": "#777777",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "navbar navbar-nav > li > abtn:hover": {
        "backgroundColor": "transparent",
        "color": "#777777",
        "borderColor": "#777777",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "outline": "0 !important"
    },
    "navbar navbar-nav > li > abtn:focus": {
        "backgroundColor": "transparent",
        "color": "#777777",
        "borderColor": "#777777",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "outline": "0 !important"
    },
    "navbar navbar-nav > li > abtn:active": {
        "backgroundColor": "transparent",
        "color": "#777777",
        "borderColor": "#777777",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "navbar navbar-nav > li > abtnactive": {
        "backgroundColor": "transparent",
        "color": "#777777",
        "borderColor": "#777777",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "open >navbar navbar-nav > li > abtndropdown-toggle": {
        "backgroundColor": "transparent",
        "color": "#777777",
        "borderColor": "#777777",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "outline": "0 !important"
    },
    "btn:disabled": {
        "backgroundColor": "transparent",
        "borderColor": "#888888",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "btn[disabled]": {
        "backgroundColor": "transparent",
        "borderColor": "#888888",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "btndisabled": {
        "backgroundColor": "transparent",
        "borderColor": "#888888",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "navbar navbar-nav > li > abtn:disabled": {
        "backgroundColor": "transparent",
        "borderColor": "#888888"
    },
    "navbar navbar-nav > li > abtn[disabled]": {
        "backgroundColor": "transparent",
        "borderColor": "#888888"
    },
    "navbar navbar-nav > li > abtndisabled": {
        "backgroundColor": "transparent",
        "borderColor": "#888888"
    },
    "btnbtn-fill": {
        "color": "#FFFFFF",
        "backgroundColor": "#888888",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "navbar navbar-nav > li > abtnbtn-fill": {
        "color": "#FFFFFF",
        "backgroundColor": "#888888",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "btnbtn-fill:hover": {
        "backgroundColor": "#777777",
        "color": "#FFFFFF"
    },
    "btnbtn-fill:focus": {
        "backgroundColor": "#777777",
        "color": "#FFFFFF"
    },
    "btnbtn-fill:active": {
        "backgroundColor": "#777777",
        "color": "#FFFFFF"
    },
    "btnbtn-fillactive": {
        "backgroundColor": "#777777",
        "color": "#FFFFFF"
    },
    "open > btnbtn-filldropdown-toggle": {
        "backgroundColor": "#777777",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-fill:hover": {
        "backgroundColor": "#777777",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-fill:focus": {
        "backgroundColor": "#777777",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-fill:active": {
        "backgroundColor": "#777777",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-fillactive": {
        "backgroundColor": "#777777",
        "color": "#FFFFFF"
    },
    "open >navbar navbar-nav > li > abtnbtn-filldropdown-toggle": {
        "backgroundColor": "#777777",
        "color": "#FFFFFF"
    },
    "btnbtn-fill caret": {
        "borderTopColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtnbtn-fill caret": {
        "borderTopColor": "#FFFFFF"
    },
    "btn caret": {
        "borderTopColor": "#888888"
    },
    "navbar navbar-nav > li > abtn caret": {
        "borderTopColor": "#888888"
    },
    "btnbtn-icon": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "navbar navbar-nav > li > abtnbtn-icon": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "btn-danger": {
        "borderColor": "#e78b90",
        "color": "#e78b90"
    },
    "navbar navbar-nav > li > abtn-danger": {
        "borderColor": "#e78b90",
        "color": "#e78b90"
    },
    "btn-danger:hover": {
        "backgroundColor": "transparent",
        "color": "#e47a80",
        "borderColor": "#e47a80"
    },
    "btn-danger:focus": {
        "backgroundColor": "transparent",
        "color": "#e47a80",
        "borderColor": "#e47a80"
    },
    "btn-danger:active": {
        "backgroundColor": "transparent",
        "color": "#e47a80",
        "borderColor": "#e47a80"
    },
    "btn-dangeractive": {
        "backgroundColor": "transparent",
        "color": "#e47a80",
        "borderColor": "#e47a80"
    },
    "open > btn-dangerdropdown-toggle": {
        "backgroundColor": "transparent",
        "color": "#e47a80",
        "borderColor": "#e47a80"
    },
    "navbar navbar-nav > li > abtn-danger:hover": {
        "backgroundColor": "transparent",
        "color": "#e47a80",
        "borderColor": "#e47a80"
    },
    "navbar navbar-nav > li > abtn-danger:focus": {
        "backgroundColor": "transparent",
        "color": "#e47a80",
        "borderColor": "#e47a80"
    },
    "navbar navbar-nav > li > abtn-danger:active": {
        "backgroundColor": "transparent",
        "color": "#e47a80",
        "borderColor": "#e47a80"
    },
    "navbar navbar-nav > li > abtn-dangeractive": {
        "backgroundColor": "transparent",
        "color": "#e47a80",
        "borderColor": "#e47a80"
    },
    "open >navbar navbar-nav > li > abtn-dangerdropdown-toggle": {
        "backgroundColor": "transparent",
        "color": "#e47a80",
        "borderColor": "#e47a80"
    },
    "btn-danger:disabled": {
        "backgroundColor": "transparent",
        "borderColor": "#e78b90"
    },
    "btn-danger[disabled]": {
        "backgroundColor": "transparent",
        "borderColor": "#e78b90"
    },
    "btn-dangerdisabled": {
        "backgroundColor": "transparent",
        "borderColor": "#e78b90"
    },
    "navbar navbar-nav > li > abtn-danger:disabled": {
        "backgroundColor": "transparent",
        "borderColor": "#e78b90"
    },
    "navbar navbar-nav > li > abtn-danger[disabled]": {
        "backgroundColor": "transparent",
        "borderColor": "#e78b90"
    },
    "navbar navbar-nav > li > abtn-dangerdisabled": {
        "backgroundColor": "transparent",
        "borderColor": "#e78b90"
    },
    "btn-dangerbtn-fill": {
        "color": "#FFFFFF",
        "backgroundColor": "#e78b90",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "navbar navbar-nav > li > abtn-dangerbtn-fill": {
        "color": "#FFFFFF",
        "backgroundColor": "#e78b90",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "btn-dangerbtn-fill:hover": {
        "backgroundColor": "#e47a80",
        "color": "#FFFFFF"
    },
    "btn-dangerbtn-fill:focus": {
        "backgroundColor": "#e47a80",
        "color": "#FFFFFF"
    },
    "btn-dangerbtn-fill:active": {
        "backgroundColor": "#e47a80",
        "color": "#FFFFFF"
    },
    "btn-dangerbtn-fillactive": {
        "backgroundColor": "#e47a80",
        "color": "#FFFFFF"
    },
    "open > btn-dangerbtn-filldropdown-toggle": {
        "backgroundColor": "#e47a80",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-dangerbtn-fill:hover": {
        "backgroundColor": "#e47a80",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-dangerbtn-fill:focus": {
        "backgroundColor": "#e47a80",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-dangerbtn-fill:active": {
        "backgroundColor": "#e47a80",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-dangerbtn-fillactive": {
        "backgroundColor": "#e47a80",
        "color": "#FFFFFF"
    },
    "open >navbar navbar-nav > li > abtn-dangerbtn-filldropdown-toggle": {
        "backgroundColor": "#e47a80",
        "color": "#FFFFFF"
    },
    "btn-dangerbtn-fill caret": {
        "borderTopColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-dangerbtn-fill caret": {
        "borderTopColor": "#FFFFFF"
    },
    "btn-danger caret": {
        "borderTopColor": "#e78b90"
    },
    "navbar navbar-nav > li > abtn-danger caret": {
        "borderTopColor": "#e78b90"
    },
    "btn-black": {
        "borderColor": "#333333",
        "color": "#333333"
    },
    "navbar navbar-nav > li > abtn-black": {
        "borderColor": "#333333",
        "color": "#333333"
    },
    "btn-black:hover": {
        "backgroundColor": "transparent",
        "color": "#393b3d",
        "borderColor": "#393b3d"
    },
    "btn-black:focus": {
        "backgroundColor": "transparent",
        "color": "#393b3d",
        "borderColor": "#393b3d"
    },
    "btn-black:active": {
        "backgroundColor": "transparent",
        "color": "#393b3d",
        "borderColor": "#393b3d"
    },
    "btn-blackactive": {
        "backgroundColor": "transparent",
        "color": "#393b3d",
        "borderColor": "#393b3d"
    },
    "open > btn-blackdropdown-toggle": {
        "backgroundColor": "transparent",
        "color": "#393b3d",
        "borderColor": "#393b3d"
    },
    "navbar navbar-nav > li > abtn-black:hover": {
        "backgroundColor": "transparent",
        "color": "#393b3d",
        "borderColor": "#393b3d"
    },
    "navbar navbar-nav > li > abtn-black:focus": {
        "backgroundColor": "transparent",
        "color": "#393b3d",
        "borderColor": "#393b3d"
    },
    "navbar navbar-nav > li > abtn-black:active": {
        "backgroundColor": "transparent",
        "color": "#393b3d",
        "borderColor": "#393b3d"
    },
    "navbar navbar-nav > li > abtn-blackactive": {
        "backgroundColor": "transparent",
        "color": "#393b3d",
        "borderColor": "#393b3d"
    },
    "open >navbar navbar-nav > li > abtn-blackdropdown-toggle": {
        "backgroundColor": "transparent",
        "color": "#393b3d",
        "borderColor": "#393b3d"
    },
    "btn-black:disabled": {
        "backgroundColor": "transparent",
        "borderColor": "#333333"
    },
    "btn-black[disabled]": {
        "backgroundColor": "transparent",
        "borderColor": "#333333"
    },
    "btn-blackdisabled": {
        "backgroundColor": "transparent",
        "borderColor": "#333333"
    },
    "navbar navbar-nav > li > abtn-black:disabled": {
        "backgroundColor": "transparent",
        "borderColor": "#333333"
    },
    "navbar navbar-nav > li > abtn-black[disabled]": {
        "backgroundColor": "transparent",
        "borderColor": "#333333"
    },
    "navbar navbar-nav > li > abtn-blackdisabled": {
        "backgroundColor": "transparent",
        "borderColor": "#333333"
    },
    "btn-blackbtn-fill": {
        "color": "#FFFFFF",
        "backgroundColor": "#333333",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "navbar navbar-nav > li > abtn-blackbtn-fill": {
        "color": "#FFFFFF",
        "backgroundColor": "#333333",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "btn-blackbtn-fill:hover": {
        "backgroundColor": "#393b3d",
        "color": "#FFFFFF"
    },
    "btn-blackbtn-fill:focus": {
        "backgroundColor": "#393b3d",
        "color": "#FFFFFF"
    },
    "btn-blackbtn-fill:active": {
        "backgroundColor": "#393b3d",
        "color": "#FFFFFF"
    },
    "btn-blackbtn-fillactive": {
        "backgroundColor": "#393b3d",
        "color": "#FFFFFF"
    },
    "open > btn-blackbtn-filldropdown-toggle": {
        "backgroundColor": "#393b3d",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-blackbtn-fill:hover": {
        "backgroundColor": "#393b3d",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-blackbtn-fill:focus": {
        "backgroundColor": "#393b3d",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-blackbtn-fill:active": {
        "backgroundColor": "#393b3d",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-blackbtn-fillactive": {
        "backgroundColor": "#393b3d",
        "color": "#FFFFFF"
    },
    "open >navbar navbar-nav > li > abtn-blackbtn-filldropdown-toggle": {
        "backgroundColor": "#393b3d",
        "color": "#FFFFFF"
    },
    "btn-blackbtn-fill caret": {
        "borderTopColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-blackbtn-fill caret": {
        "borderTopColor": "#FFFFFF"
    },
    "btn-black caret": {
        "borderTopColor": "#333333"
    },
    "navbar navbar-nav > li > abtn-black caret": {
        "borderTopColor": "#333333"
    },
    "btn-white": {
        "borderColor": "#EF222B",
        "color": "#EF222B",
        "opacity": 1
    },
    "navbar navbar-nav > li > abtn-white": {
        "borderColor": "#EF222B",
        "color": "#EF222B",
        "opacity": 1
    },
    "btn-white:hover": {
        "backgroundColor": "transparent",
        "color": "#FFFFFF",
        "borderColor": "#FFFFFF"
    },
    "btn-white:focus": {
        "backgroundColor": "transparent",
        "color": "#FFFFFF",
        "borderColor": "#FFFFFF"
    },
    "btn-white:active": {
        "backgroundColor": "#FFFFFF",
        "color": "#888888",
        "borderColor": "#FFFFFF"
    },
    "btn-whiteactive": {
        "backgroundColor": "#FFFFFF",
        "color": "#888888",
        "borderColor": "#FFFFFF"
    },
    "open > btn-whitedropdown-toggle": {
        "backgroundColor": "#FFFFFF",
        "color": "#888888",
        "borderColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-white:hover": {
        "backgroundColor": "transparent",
        "color": "#FFFFFF",
        "borderColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-white:focus": {
        "backgroundColor": "transparent",
        "color": "#FFFFFF",
        "borderColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-white:active": {
        "backgroundColor": "#FFFFFF",
        "color": "#888888",
        "borderColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-whiteactive": {
        "backgroundColor": "#FFFFFF",
        "color": "#888888",
        "borderColor": "#FFFFFF"
    },
    "open >navbar navbar-nav > li > abtn-whitedropdown-toggle": {
        "backgroundColor": "#FFFFFF",
        "color": "#888888",
        "borderColor": "#FFFFFF"
    },
    "btn-white:disabled": {
        "backgroundColor": "transparent",
        "borderColor": "#FFFFFF"
    },
    "btn-white[disabled]": {
        "backgroundColor": "transparent",
        "borderColor": "#FFFFFF"
    },
    "btn-whitedisabled": {
        "backgroundColor": "transparent",
        "borderColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-white:disabled": {
        "backgroundColor": "transparent",
        "borderColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-white[disabled]": {
        "backgroundColor": "transparent",
        "borderColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-whitedisabled": {
        "backgroundColor": "transparent",
        "borderColor": "#FFFFFF"
    },
    "btn-whitebtn-fill": {
        "color": "#FFFFFF",
        "backgroundColor": "#EF222B",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "borderRadius": 2
    },
    "navbar navbar-nav > li > abtn-whitebtn-fill": {
        "color": "#FFFFFF",
        "backgroundColor": "#EF222B",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "borderRadius": 2
    },
    "btn-whitebtn-fill:hover": {
        "backgroundColor": "#FFFFFF",
        "color": "#888888",
        "opacity": 1
    },
    "btn-whitebtn-fill:focus": {
        "backgroundColor": "#FFFFFF",
        "color": "#888888",
        "opacity": 1
    },
    "btn-whitebtn-fill:active": {
        "backgroundColor": "#FFFFFF",
        "color": "#FFFFFF"
    },
    "btn-whitebtn-fillactive": {
        "backgroundColor": "#FFFFFF",
        "color": "#FFFFFF"
    },
    "open > btn-whitebtn-filldropdown-toggle": {
        "backgroundColor": "#FFFFFF",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-whitebtn-fill:hover": {
        "backgroundColor": "#FFFFFF",
        "color": "#888888",
        "opacity": 1
    },
    "navbar navbar-nav > li > abtn-whitebtn-fill:focus": {
        "backgroundColor": "#FFFFFF",
        "color": "#888888",
        "opacity": 1
    },
    "navbar navbar-nav > li > abtn-whitebtn-fill:active": {
        "backgroundColor": "#FFFFFF",
        "color": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-whitebtn-fillactive": {
        "backgroundColor": "#FFFFFF",
        "color": "#FFFFFF"
    },
    "open >navbar navbar-nav > li > abtn-whitebtn-filldropdown-toggle": {
        "backgroundColor": "#FFFFFF",
        "color": "#FFFFFF"
    },
    "btn-whitebtn-fill caret": {
        "borderTopColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-whitebtn-fill caret": {
        "borderTopColor": "#FFFFFF"
    },
    "btn-white caret": {
        "borderTopColor": "#FFFFFF"
    },
    "navbar navbar-nav > li > abtn-white caret": {
        "borderTopColor": "#FFFFFF"
    },
    "btn-whitebtn-simple:active": {
        "backgroundColor": "transparent"
    },
    "btn-whitebtn-simpleactive": {
        "backgroundColor": "transparent"
    },
    "navbar navbar-nav > li > abtn-whitebtn-simple:active": {
        "backgroundColor": "transparent"
    },
    "navbar navbar-nav > li > abtn-whitebtn-simpleactive": {
        "backgroundColor": "transparent"
    },
    "btn-round": {
        "borderWidth": 1,
        "borderRadius": "30px !important",
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20
    },
    "btn-roundbtn-icon": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "btn-simplebtn-icon": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "btn-lg": {
        "fontSize": 14,
        "borderRadius": 4,
        "paddingTop": 16,
        "paddingRight": 32,
        "paddingBottom": 16,
        "paddingLeft": 32
    },
    "btn-lgbtn-round": {
        "paddingTop": 17,
        "paddingRight": 32,
        "paddingBottom": 17,
        "paddingLeft": 32
    },
    "btn-lgbtn-simple": {
        "paddingTop": 18,
        "paddingRight": 32,
        "paddingBottom": 18,
        "paddingLeft": 32
    },
    "btn-sm": {
        "fontSize": 12,
        "borderRadius": 3,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10
    },
    "btn-smbtn-round": {
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10
    },
    "btn-smbtn-simple": {
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10
    },
    "btn-xs": {
        "fontSize": 10,
        "borderRadius": 3,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10
    },
    "btn-xsbtn-round": {
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10
    },
    "btn-xsbtn-simple": {
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10
    },
    "btn-wd": {
        "minWidth": 140
    },
    "form-control::-moz-placeholder": {
        "color": "#DDDDDD",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "WebkitFontSmoothing": "antialiased"
    },
    "form-control:-moz-placeholder": {
        "color": "#DDDDDD",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "WebkitFontSmoothing": "antialiased"
    },
    "form-control::-webkit-input-placeholder": {
        "color": "#DDDDDD",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "WebkitFontSmoothing": "antialiased"
    },
    "form-control:-ms-input-placeholder": {
        "color": "#DDDDDD",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "WebkitFontSmoothing": "antialiased"
    },
    "has-success form-control": {
        "borderColor": "#E3E3E3",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "color": "#7accb8"
    },
    "has-error form-control": {
        "borderColor": "#E3E3E3",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "color": "#e78b90"
    },
    "has-success form-control:focus": {
        "borderColor": "#7accb8",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-error form-control:focus": {
        "borderColor": "#e78b90",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "form-control + form-control-feedback": {
        "borderRadius": 6,
        "fontSize": 14,
        "marginTop": -7,
        "position": "absolute",
        "right": 10,
        "top": "50%",
        "verticalAlign": "middle"
    },
    "open form-control": {
        "borderRadius": "4px 4px 0 0",
        "borderBottomColor": "transparent"
    },
    "input-lg": {
        "height": 55,
        "paddingTop": 16,
        "paddingRight": 32,
        "paddingBottom": 16,
        "paddingLeft": 32
    },
    "has-error form-control-feedback": {
        "color": "#e78b90"
    },
    "has-success form-control-feedback": {
        "color": "#7accb8"
    },
    "has-success input-group-addon": {
        "backgroundColor": "#FFFFFF",
        "border": "1px solid #E3E3E3"
    },
    "has-error input-group-addon": {
        "backgroundColor": "#FFFFFF",
        "border": "1px solid #E3E3E3"
    },
    "has-error form-control:focus + input-group-addon": {
        "borderColor": "#e78b90",
        "color": "#e78b90"
    },
    "has-success form-control:focus + input-group-addon": {
        "borderColor": "#7accb8",
        "color": "#7accb8"
    },
    "form-control:focus + input-group-addon": {
        "backgroundColor": "#FFFFFF",
        "borderColor": "#777777"
    },
    "form-control:focus ~ input-group-addon": {
        "backgroundColor": "#FFFFFF",
        "borderColor": "#777777"
    },
    "input-group form-control:first-child": {
        "borderRight": "0 none"
    },
    "input-group-addon:first-child": {
        "borderRight": "0 none"
    },
    "input-group-btn:first-child > btn": {
        "borderRight": "0 none"
    },
    "input-group-btn:first-child > dropdown-toggle": {
        "borderRight": "0 none"
    },
    "input-group-btn:last-child > btn:not(:last-child):not(dropdown-toggle)": {
        "borderRight": "0 none"
    },
    "input-group form-control:last-child": {
        "borderLeft": "0 none"
    },
    "input-group-addon:last-child": {
        "borderLeft": "0 none"
    },
    "input-group-btn:last-child > btn": {
        "borderLeft": "0 none"
    },
    "input-group-btn:last-child > dropdown-toggle": {
        "borderLeft": "0 none"
    },
    "input-group-btn:first-child > btn:not(:first-child)": {
        "borderLeft": "0 none"
    },
    "form-control[disabled]": {
        "backgroundColor": "#E3E3E3",
        "color": "#888888",
        "cursor": "not-allowed"
    },
    "form-control[readonly]": {
        "backgroundColor": "#E3E3E3",
        "color": "#888888",
        "cursor": "not-allowed"
    },
    "fieldset[disabled] form-control": {
        "backgroundColor": "#E3E3E3",
        "color": "#888888",
        "cursor": "not-allowed"
    },
    "form-control-plain": {
        "borderTop": "none",
        "borderLeft": "none",
        "borderRight": "none",
        "borderRadius": 0,
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 8,
        "paddingLeft": 0,
        "fontSize": 16,
        "backgroundColor": "transparent",
        "borderColor": "#E3E3E3",
        "resize": "vertical"
    },
    "form-control-plain:focus": {
        "backgroundColor": "transparent",
        "border": 0,
        "borderBottom": "1px solid #777"
    },
    "form-control:focus::-webkit-input-placeholder": {
        "color": "rgba(119, 119, 119, 0.3)"
    },
    "section": {
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "position": "relative",
        "backgroundColor": "#FFFFFF"
    },
    "section-gray": {
        "backgroundColor": "#EEEEEE",
        "paddingTop": 70,
        "paddingRight": 0,
        "paddingBottom": 70,
        "paddingLeft": 0
    },
    "section-white": {
        "backgroundColor": "#FFFFFF",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "section title-area": {
        "maxWidth": 760,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 70,
        "marginLeft": "auto",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "textAlign": "center"
    },
    "section title-area description": {
        "fontSize": 16,
        "color": "#777777"
    },
    "section [class*=\"col-\"] title-area": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "section text-area": {
        "paddingTop": 4.375,
        "paddingRight": 0,
        "paddingBottom": 4.375,
        "paddingLeft": 0,
        "position": "relative",
        "zIndex": 3,
        "display": "block"
    },
    "section text-area description": {
        "fontSize": 16,
        "color": "#777777"
    },
    "section text-area description p": {
        "fontSize": 16,
        "color": "#777777"
    },
    "section parallax": {
        "width": "100%",
        "height": 100 * vh,
        "overflow": "hidden",
        "display": "block",
        "position": "relative"
    },
    "section static-image": {
        "width": "100%",
        "height": 100 * vh,
        "overflow": "hidden",
        "display": "block",
        "position": "relative"
    },
    "section parallax > img": {
        "minWidth": "100%",
        "minHeight": "100%",
        "width": "auto",
        "height": "auto",
        "position": "relative",
        "zIndex": 1
    },
    "section parallax filter > img": {
        "minWidth": "100%",
        "minHeight": "100%",
        "width": "auto",
        "height": "auto",
        "position": "relative",
        "zIndex": 1
    },
    "section static-image > img": {
        "minWidth": "100%",
        "minHeight": "100%",
        "width": "auto",
        "height": "auto",
        "position": "relative",
        "zIndex": 1
    },
    "section static-image filter > img": {
        "minWidth": "100%",
        "minHeight": "100%",
        "width": "auto",
        "height": "auto",
        "position": "relative",
        "zIndex": 1
    },
    "section parallax-small": {
        "height": 65 * vh
    },
    "section responsive-background": {
        "position": "relative",
        "backgroundColor": "#c5a47e",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "zIndex": 1,
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "height": 80 * vh
    },
    "section nav > li": {
        "display": "inline-block"
    },
    "section-contact-form": {
        "paddingTop": 110
    },
    "section-contact-form title-area": {
        "marginBottom": 15
    },
    "section-contact-form social-buttons": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0,
        "marginTop": 0,
        "border": "none"
    },
    "gradient-image": {
        "position": "relative",
        "width": "100%",
        "height": "100%",
        "zIndex": 2
    },
    "gradient-image:after": {
        "position": "absolute",
        "zIndex": 3,
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": 300,
        "content": "''",
        "background": "linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0.95) 22%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.7) 65%, rgba(255, 255, 255, 0) 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 )"
    },
    "section-our-team text-area": {
        "paddingBottom": 0
    },
    "filter:before": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "display": "block",
        "zIndex": 3,
        "content": "",
        "opacity": 0.7,
        "background": "#333"
    },
    "filter title-area description": {
        "color": "#FFFFFF"
    },
    "filter separator": {
        "color": "#FFFFFF"
    },
    "filter separator:before": {
        "borderColor": "#FFFFFF"
    },
    "filter separator:after": {
        "borderColor": "#FFFFFF"
    },
    "filterfilter-color-black:before": {
        "background": "#333"
    },
    "filterfilter-color-gold:before": {
        "background": "#bd986c"
    },
    "filterfilter-color-green:before": {
        "background": "#55bea4"
    },
    "filterfilter-color-blue:before": {
        "background": "#008b9c"
    },
    "filterfilter-color-purple:before": {
        "background": "#50236F"
    },
    "filterfilter-color-red:before": {},
    "filterfilter-gradient-black:before": {
        "background": "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f1c2c', endColorstr='#928dab',GradientType=1 )"
    },
    "filterfilter-gradient-gold:before": {
        "background": "linear-gradient(135deg, #dfd48b 0%, #ec6565 100%)"
    },
    "filterfilter-gradient-green:before": {
        "background": "linear-gradient(135deg, #71c491 0%, #465556 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#71c491', endColorstr='#465556',GradientType=1 )"
    },
    "filterfilter-gradient-blue:before": {
        "background": "linear-gradient(135deg, #085078 0%, #87d7db 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#085078', endColorstr='#87d7db',GradientType=1 )"
    },
    "filterfilter-gradient-purple:before": {
        "background": "linear-gradient(135deg, #6b39ac 0%, #c8fece 100%)"
    },
    "section-numbers text-area": {
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "section-white static-image:after": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": 100 * vh,
        "zIndex": 2,
        "content": "",
        "opacity": 0.95,
        "background": "#FFFFFF"
    },
    "section-signup form-control": {
        "textAlign": "center"
    },
    "section-signup btn": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "section-pricing": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "section-pricing container > content": {
        "marginTop": 115,
        "position": "relative",
        "zIndex": 3
    },
    "section-small parallax image": {
        "height": "100vh !important"
    },
    "section-small static-image image": {
        "height": "100vh !important"
    },
    "section-get-started parallax image": {
        "height": "100vh !important"
    },
    "section-get-started static-image image": {
        "height": "100vh !important"
    },
    "section-info": {
        "paddingTop": 100
    },
    "section-cards card a": {
        "opacity": 0.93
    },
    "section-we-do h3": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "section-we-do h5": {
        "marginBottom": 0
    },
    "section-we-do p": {
        "color": "#777777"
    },
    "section-we-do title": {
        "marginBottom": 70
    },
    "section-we-do-presentation": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0
    },
    "section-info-presentation": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden"
    },
    "section-info-presentation info-pricing:first-child": {
        "marginTop": 90
    },
    "section-info-presentation image-container": {
        "height": 100 * vh,
        "width": "auto",
        "position": "relative"
    },
    "section-info-presentation image-container img": {
        "width": "auto",
        "height": "100%",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "nav > li > a:hover": {
        "backgroundColor": "transparent"
    },
    "nav > li > a:focus": {
        "backgroundColor": "transparent"
    },
    "nav > social-links > a": {
        "display": "inline-block"
    },
    "navbar navbar-brand": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "fontSize": 20,
        "lineHeight": 22
    },
    "navbar navbar-nav > li > a": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "marginTop": 15,
        "marginRight": 3,
        "marginBottom": 15,
        "marginLeft": 3,
        "lineHeight": 18
    },
    "navbar navbar-nav > social-links > a": {
        "paddingTop": 10,
        "paddingRight": 5,
        "paddingBottom": 10,
        "paddingLeft": 5
    },
    "navbar navbar-navnavbar-uppercase > li > a": {
        "textTransform": "uppercase",
        "fontSize": 12,
        "letterSpacing": 0,
        "fontWeight": "600"
    },
    "navbar navbar-nav > li > abtn-round": {
        "marginTop": 16,
        "marginRight": 3,
        "marginBottom": 16,
        "marginLeft": 3
    },
    "navbar navbar-nav > li > a [class^=\"fa\"]": {
        "fontSize": 18,
        "position": "relative",
        "top": 1,
        "marginTop": -3
    },
    "navbar btn": {
        "marginTop": 15,
        "marginRight": 3,
        "marginBottom": 15,
        "marginLeft": 3,
        "fontSize": 14
    },
    "navbar btn-simple": {
        "fontSize": 16
    },
    "navbar-default": {
        "backgroundColor": "white",
        "borderBottom": "1px solid rgba(0, 0, 0, 0.1)"
    },
    "navbar-default navbar-nav > li > a:not(btn)": {
        "color": "#434547"
    },
    "navbar-default navbar-nav > active > a": {
        "backgroundColor": "transparent",
        "borderRadius": 3,
        "color": "#434547",
        "opacity": 0.85,
        "filter": "alpha(opacity=85)"
    },
    "navbar-default navbar-nav > active > a:not(btn):hover": {
        "backgroundColor": "transparent",
        "borderRadius": 3,
        "color": "#434547",
        "opacity": 0.85,
        "filter": "alpha(opacity=85)"
    },
    "navbar-default navbar-nav > active > a:not(btn):focus": {
        "backgroundColor": "transparent",
        "borderRadius": 3,
        "color": "#434547",
        "opacity": 0.85,
        "filter": "alpha(opacity=85)"
    },
    "navbar-default navbar-nav > li > a:not(btn):hover": {
        "backgroundColor": "transparent",
        "borderRadius": 3,
        "color": "#434547",
        "opacity": 0.85,
        "filter": "alpha(opacity=85)"
    },
    "navbar-default navbar-nav > li > a:not(btn):focus": {
        "backgroundColor": "transparent",
        "borderRadius": 3,
        "color": "#434547",
        "opacity": 0.85,
        "filter": "alpha(opacity=85)"
    },
    "navbar-default navbar-nav > dropdown > a:hover caret": {
        "borderBottomColor": "#333333",
        "borderTopColor": "#333333"
    },
    "navbar-default navbar-nav > dropdown > a:focus caret": {
        "borderBottomColor": "#333333",
        "borderTopColor": "#333333"
    },
    "navbar-default navbar-nav > open > a": {
        "backgroundColor": "transparent",
        "color": "#c5a47e"
    },
    "navbar-default navbar-nav > open > a:hover": {
        "backgroundColor": "transparent",
        "color": "#c5a47e"
    },
    "navbar-default navbar-nav > open > a:focus": {
        "backgroundColor": "transparent",
        "color": "#c5a47e"
    },
    "navbar-default navbar-nav navbar-toggle:hover": {
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav navbar-toggle:focus": {
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-brand": {
        "color": "#434547",
        "opacity": 1
    },
    "navbar-default:not(navbar-transparent) btn-default:hover": {
        "color": "#c5a47e",
        "borderColor": "#c5a47e"
    },
    "navbar-default:not(navbar-transparent) btn-neutral": {
        "color": "#777777"
    },
    "navbar-default:not(navbar-transparent) btn-neutral:hover": {
        "color": "#777777"
    },
    "navbar-default:not(navbar-transparent) btn-neutral:active": {
        "color": "#777777"
    },
    "navbar-default navbar-toggle:hover": {
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-toggle:focus": {
        "backgroundColor": "transparent"
    },
    "navbar-transparent": {
        "paddingTop": 15,
        "backgroundColor": "transparent",
        "borderBottom": "1px solid transparent"
    },
    "navbar-toggle icon-bar": {
        "backgroundColor": "#FFFFFF"
    },
    "navbar-toggle navbar-collapse": {
        "borderColor": "transparent"
    },
    "navbar-toggle navbar-form": {
        "borderColor": "transparent"
    },
    "navbar-togglenavbar-default navbar-toggle:hover": {
        "backgroundColor": "transparent"
    },
    "navbar-togglenavbar-default navbar-toggle:focus": {
        "backgroundColor": "transparent"
    },
    "navbar-transparent navbar-toggle icon-bar": {
        "backgroundColor": "#FFFFFF"
    },
    "navbarnavbar-fixed-top": {
        "transition": "all .5s .1s"
    },
    "footer": {
        "backgroundColor": "#FFFFFF",
        "lineHeight": 20,
        "overflow": "hidden"
    },
    "footer nav > ul": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontWeight": "normal"
    },
    "footer nav > ul a:not(btn)": {
        "color": "#777777",
        "display": "block",
        "marginBottom": 3
    },
    "footer nav > ul a:not(btn):hover": {
        "color": "#777777"
    },
    "footer nav > ul a:not(btn):focus": {
        "color": "#777777"
    },
    "footer social-area": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0
    },
    "footer social-area h5": {
        "paddingBottom": 15
    },
    "footer social-area > a:not(btn)": {
        "color": "#777777",
        "display": "inline-block",
        "verticalAlign": "top",
        "paddingTop": 10,
        "paddingRight": 5,
        "paddingBottom": 10,
        "paddingLeft": 5,
        "fontSize": 18,
        "fontWeight": "normal",
        "lineHeight": 20,
        "textAlign": "center"
    },
    "footer social-area > a:not(btn):hover": {
        "color": "#777777"
    },
    "footer social-area > a:not(btn):focus": {
        "color": "#777777"
    },
    "footer copyright": {
        "color": "#777777",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "marginTop": 15,
        "marginRight": 3,
        "marginBottom": 15,
        "marginLeft": 3,
        "lineHeight": 20,
        "textAlign": "center"
    },
    "footer hr": {
        "borderColor": "#DDDDDD"
    },
    "footer title": {
        "color": "#777777",
        "textAlign": "left",
        "marginBottom": 10,
        "fontSize": 15,
        "fontWeight": "bold"
    },
    "footer btn-social": {
        "color": "#9A9A9A"
    },
    "footer:not(footer-big) nav > ul": {
        "fontSize": 16
    },
    "footer:not(footer-big) nav > ul li": {
        "marginLeft": 20,
        "float": "left"
    },
    "footer:not(footer-big) nav > ul a": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "marginTop": 15,
        "marginRight": 10,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "footer-color-gray": {
        "backgroundColor": "#F5F5F5"
    },
    "footer-color-black": {
        "backgroundColor": "rgba(30, 30, 30, 0.97)",
        "color": "#DDDDDD"
    },
    "footer-transparent": {
        "backgroundColor": "rgba(30, 30, 30, 0.97)",
        "color": "#DDDDDD",
        "backgroundAttachment": "fixed",
        "backgroundSize": "cover",
        "position": "relative"
    },
    "footer-color-black nav > ul a": {
        "color": "#FFFFFF"
    },
    "footer-transparent nav > ul a": {
        "color": "#FFFFFF"
    },
    "footer-color-black nav > ul a:hover": {
        "color": "#777777"
    },
    "footer-color-black nav > ul a:focus": {
        "color": "#777777"
    },
    "footer-transparent nav > ul a:hover": {
        "color": "#777777"
    },
    "footer-transparent nav > ul a:focus": {
        "color": "#777777"
    },
    "footer-color-black social-area > a:not(btn)": {
        "color": "#FFFFFF"
    },
    "footer-transparent social-area > a:not(btn)": {
        "color": "#FFFFFF"
    },
    "footer-color-black social-area > a:not(btn):hover": {
        "color": "#777777"
    },
    "footer-color-black social-area > a:not(btn):focus": {
        "color": "#777777"
    },
    "footer-transparent social-area > a:not(btn):hover": {
        "color": "#777777"
    },
    "footer-transparent social-area > a:not(btn):focus": {
        "color": "#777777"
    },
    "footer-color-black btn-social": {
        "color": "#FFFFFF"
    },
    "footer-transparent btn-social": {
        "color": "#FFFFFF"
    },
    "footer-color-black hr": {
        "borderColor": "#444444"
    },
    "footer-transparent hr": {
        "borderColor": "#444444"
    },
    "footer-color-black title": {
        "color": "#DDDDDD"
    },
    "footer-transparent title": {
        "color": "#DDDDDD"
    },
    "footer-transparent container": {
        "zIndex": 2,
        "position": "relative"
    },
    "footer-transparent::after": {
        "top": 0,
        "left": 0,
        "height": "100%",
        "width": "100%",
        "position": "absolute",
        "backgroundColor": "rgba(17, 17, 17, 0.8)",
        "display": "block",
        "content": "",
        "zIndex": 1
    },
    "footer-big": {
        "paddingTop": 30
    },
    "footer-big hr": {
        "marginBottom": 10,
        "marginTop": 10
    },
    "footer-big container > hr": {
        "marginTop": 50
    },
    "footer-big copyright": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "footer-big social-area > *": {
        "marginTop": 0,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 15
    },
    "footer-big nav > ul": {
        "width": "100%",
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontWeight": "normal"
    },
    "footer-big nav > ul li": {
        "float": "none"
    },
    "footer-big nav > ul btn": {
        "marginBottom": 5
    },
    "footer-big nav > ul btn-socialbtn-simple": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0
    },
    "footer-big form-group": {
        "marginTop": 15
    },
    "footer-big numbers h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "social-line": {
        "paddingTop": 16,
        "paddingRight": 0,
        "paddingBottom": 16,
        "paddingLeft": 0,
        "backgroundColor": "#FFFFFF"
    },
    "social-line title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 40,
        "fontSize": 22
    },
    "social-line btn": {
        "width": "100%"
    },
    "social-line-black": {
        "backgroundColor": "rgba(30, 30, 30, 0.97)",
        "color": "#FFFFFF"
    },
    "label-primary": {
        "backgroundColor": "#c5a47e"
    },
    "label-info": {
        "backgroundColor": "#00abc0"
    },
    "label-success": {
        "backgroundColor": "#7accb8"
    },
    "label-warning": {
        "backgroundColor": "#f88f58"
    },
    "label-danger": {
        "backgroundColor": "#e78b90"
    },
    "btn-social": {
        "opacity": 0.85,
        "paddingTop": 8,
        "paddingRight": 9,
        "paddingBottom": 8,
        "paddingLeft": 9
    },
    "btn-social fa": {
        "fontSize": 18,
        "top": -1,
        "verticalAlign": "middle",
        "display": "inline-block",
        "position": "relative"
    },
    "btn-socialbtn-round": {
        "paddingTop": 9,
        "paddingRight": 10,
        "paddingBottom": 9,
        "paddingLeft": 10
    },
    "btn-socialbtn-simple": {
        "paddingTop": 9,
        "paddingRight": 5,
        "paddingBottom": 9,
        "paddingLeft": 5,
        "fontSize": 14
    },
    "btn-socialbtn-simple fa": {
        "fontSize": 20,
        "position": "relative",
        "top": -2,
        "width": 24
    },
    "dropdown-menu": {
        "visibility": "hidden",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderRadius": 4,
        "display": "block",
        "zIndex": 9000,
        "position": "absolute",
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "WebkitBoxShadow": "1px 2px 3px rgba(0, 0, 0, 0.125)",
        "boxShadow": "1px 2px 3px rgba(0, 0, 0, 0.125)",
        "WebkitTransform": "translate3d(0, -20px, 0)",
        "MozTransform": "translate3d(0, -20px, 0)",
        "OTransform": "translate3d(0, -20px, 0)",
        "MsTransform": "translate3d(0, -20px, 0)",
        "transform": "translate3d(0, -20px, 0)",
        "WebkitTransition": "all 370ms cubic-bezier(0.34, 1.61, 0.7, 1)",
        "MozTransition": "all 370ms cubic-bezier(0.34, 1.61, 0.7, 1)",
        "OTransition": "all 370ms cubic-bezier(0.34, 1.61, 0.7, 1)",
        "MsTransition": "all 370ms cubic-bezier(0.34, 1.61, 0.7, 1)",
        "transition": "all 370ms cubic-bezier(0.34, 1.61, 0.7, 1)"
    },
    "open dropdown-menu": {
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "visibility": "visible",
        "WebkitTransform": "translate3d(0, 0px, 0)",
        "MozTransform": "translate3d(0, 0px, 0)",
        "OTransform": "translate3d(0, 0px, 0)",
        "MsTransform": "translate3d(0, 0px, 0)",
        "transform": "translate3d(0, 0px, 0)"
    },
    "navbar-nav > li > dropdown-menu": {
        "borderRadius": 4,
        "marginTop": -5
    },
    "navbar-nav > li > dropdown-menu:before": {
        "borderBottom": "11px solid rgba(0, 0, 0, 0.2)",
        "borderLeft": "11px solid transparent",
        "borderRight": "11px solid transparent",
        "content": "",
        "display": "inline-block",
        "position": "absolute",
        "left": 12,
        "top": -11
    },
    "navbar-nav > li > dropdown-menu:after": {
        "borderBottom": "11px solid #FFFFFF",
        "borderLeft": "11px solid transparent",
        "borderRight": "11px solid transparent",
        "content": "",
        "display": "inline-block",
        "position": "absolute",
        "left": 12,
        "top": -10
    },
    "navbar-navnavbar-right > li > dropdown-menu:before": {
        "left": "auto",
        "right": 12
    },
    "navbar-navnavbar-right > li > dropdown-menu:after": {
        "left": "auto",
        "right": 12
    },
    "dropdown-menu > li > a": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#434547",
        "textTransform": "uppercase",
        "fontWeight": "600",
        "fontSize": 12,
        "lineHeight": 13,
        "borderBottom": "1px solid #EEEEEE"
    },
    "dropdown-menu > li > a img": {
        "marginTop": -3
    },
    "dropdown-menu > li > a:hover": {
        "backgroundColor": "#FFFFFF",
        "color": "#c5a47e",
        "opacity": 1,
        "textDecoration": "none"
    },
    "dropdown-menu > li > a:focus": {
        "backgroundColor": "#FFFFFF",
        "color": "#c5a47e",
        "opacity": 1,
        "textDecoration": "none",
        "outline": "0 !important"
    },
    "dropdown-menu > li:last-child > a": {
        "borderBottom": 0,
        "borderBottomLeftRadius": 4,
        "borderBottomRightRadius": 4
    },
    "btn-groupselect dropdown-menu": {
        "minWidth": "100%"
    },
    "dropdown-menu > li:first-child > a": {
        "borderTopLeftRadius": 4,
        "borderTopRightRadius": 4
    },
    "select dropdown-menu > li:first-child > a": {
        "borderRadius": 0,
        "borderBottom": "0 none"
    },
    "dropdown-menudropdown-info > li > a:hover": {
        "color": "#00abc0"
    },
    "dropdown-menudropdown-info > li > a:focus": {
        "color": "#00abc0"
    },
    "dropdown-menudropdown-success > li > a:hover": {
        "color": "#7accb8"
    },
    "dropdown-menudropdown-success > li > a:focus": {
        "color": "#7accb8"
    },
    "dropdown-menudropdown-danger > li > a:hover": {
        "color": "#e78b90"
    },
    "dropdown-menudropdown-danger > li > a:focus": {
        "color": "#e78b90"
    },
    "dropdown-menudropdown-warning > li > a:hover": {
        "color": "#f88f58"
    },
    "dropdown-menudropdown-warning > li > a:focus": {
        "color": "#f88f58"
    },
    "dropdown-menudropdown-black > li > a:hover": {
        "color": "#333333"
    },
    "dropdown-menudropdown-black > li > a:focus": {
        "color": "#333333"
    },
    "dropdown-with-icons > li > a": {
        "paddingLeft": 0,
        "lineHeight": 28
    },
    "dropdown-with-icons i": {
        "textAlign": "center",
        "lineHeight": 28,
        "float": "left"
    },
    "dropdown-with-icons i[class^=\"pe-\"]": {
        "fontSize": 24,
        "width": 46
    },
    "dropdown-with-icons i[class^=\"fa\"]": {
        "fontSize": 14,
        "width": 38
    },
    "card": {
        "background": "#fff",
        "boxShadow": "0 32px 44px -24px rgba(0, 0, 0, 0.23), 0 20px 25px 0px rgba(0, 0, 0, 0.12), 0 15px 10px -10px rgba(0, 0, 0, 0.2)",
        "borderRadius": 6,
        "marginBottom": 30,
        "WebkitTransition": "all 370ms cubic-bezier(0.34, 1.61, 0.7, 1)",
        "MozTransition": "all 370ms cubic-bezier(0.34, 1.61, 0.7, 1)",
        "OTransition": "all 370ms cubic-bezier(0.34, 1.61, 0.7, 1)",
        "MsTransition": "all 370ms cubic-bezier(0.34, 1.61, 0.7, 1)",
        "transition": "all 370ms cubic-bezier(0.34, 1.61, 0.7, 1)"
    },
    "card:not(card-plain):not(card-price):hover": {
        "WebkitTransform": "scale(1.03)",
        "MozTransform": "scale(1.03)",
        "OTransform": "scale(1.03)",
        "MsTransform": "scale(1.03)",
        "transform": "scale(1.03)",
        "boxShadow": "0 26px 50px -10px rgba(0, 0, 0, 0.38), 0 10px 20px 0px rgba(0, 0, 0, 0.2), 0 15px 10px -10px rgba(0, 0, 0, 0.2)"
    },
    "card subtitle-black": {
        "color": "#141414"
    },
    "card a": {
        "opacity": 0.85
    },
    "card:hover header": {
        "opacity": 1
    },
    "card h2": {
        "marginTop": 0
    },
    "card img": {
        "maxWidth": "100%"
    },
    "card header img": {
        "borderRadius": "4px 4px 0 0",
        "width": "100%"
    },
    "card image-header": {
        "width": "100%",
        "borderRadius": "4px 4px 0 0"
    },
    "card image-headerimage-full": {
        "borderRadius": 4
    },
    "card header imgimage-full": {
        "borderRadius": 4
    },
    "card row image-header": {
        "width": "100%",
        "borderRadius": 4
    },
    "card row header img": {
        "width": "100%",
        "borderRadius": 4
    },
    "card btn": {
        "marginTop": 15
    },
    "card > img": {
        "borderRadius": 4
    },
    "card title": {
        "marginBottom": 5,
        "color": "#333333"
    },
    "card description": {
        "fontSize": 13
    },
    "card-member": {
        "display": "block",
        "textAlign": "center",
        "marginBottom": 20
    },
    "card-member content": {
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25
    },
    "card-member > img": {
        "background": "none repeat scroll 0 0 transparent",
        "height": "auto",
        "width": 120,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "card-white": {
        "background": "#FFFFFF"
    },
    "card-plain": {
        "borderRadius": 0,
        "boxShadow": "none",
        "background": "none"
    },
    "card-plain image-header": {
        "borderRadius": 4
    },
    "section-header": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "section-header-blog": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "section-presentation-page": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "section-header container": {
        "zIndex": 3,
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "display": "block",
        "top": 0
    },
    "section-header-blog container": {
        "zIndex": 3,
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "display": "block",
        "top": 0
    },
    "section-presentation-page container": {
        "zIndex": 3,
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "display": "block",
        "top": 0,
        "marginTop": 4 * vh
    },
    "section-header content": {
        "position": "relative",
        "color": "white",
        "textAlign": "center",
        "textShadow": "0px 1px 5px rgba(0, 0, 0, 0.2)",
        "verticalAlign": "center",
        "lineHeight": 1.7,
        "top": "44%",
        "WebkitTransform": "translateY(-50%)",
        "MsTransform": "translateY(-50%)",
        "transform": "translateY(-50%)"
    },
    "section-header-blog content": {
        "position": "relative",
        "color": "white",
        "textAlign": "center",
        "textShadow": "0px 1px 5px rgba(0, 0, 0, 0.2)",
        "verticalAlign": "center",
        "lineHeight": 1.7,
        "top": "44%",
        "WebkitTransform": "translateY(-50%)",
        "MsTransform": "translateY(-50%)",
        "transform": "translateY(-50%)"
    },
    "section-presentation-page content": {
        "position": "relative",
        "color": "white",
        "textAlign": "center",
        "textShadow": "0px 1px 5px rgba(0, 0, 0, 0.2)",
        "verticalAlign": "center",
        "lineHeight": 1.7,
        "top": "44%",
        "WebkitTransform": "translateY(-50%)",
        "MsTransform": "translateY(-50%)",
        "transform": "translateY(-50%)"
    },
    "section-header btn": {
        "textShadow": "none"
    },
    "section-header-blog btn": {
        "textShadow": "none"
    },
    "section-presentation-page btn": {
        "textShadow": "none"
    },
    "section-header h1": {
        "fontWeight": "200",
        "fontSize": 3.6,
        "textShadow": "-2px 2px 0px rgba(0, 0, 0, 0.3), -2px 4px 2px rgba(0, 0, 0, 0.1)"
    },
    "section-header-blog h1": {
        "fontWeight": "200",
        "fontSize": 3.6,
        "textShadow": "-2px 2px 0px rgba(0, 0, 0, 0.3), -2px 4px 2px rgba(0, 0, 0, 0.1)"
    },
    "section-presentation-page h1": {
        "fontWeight": "200",
        "fontSize": 3.6,
        "textShadow": "-2px 2px 0px rgba(0, 0, 0, 0.3), -2px 4px 2px rgba(0, 0, 0, 0.1)"
    },
    "section-header h5": {
        "fontSize": 1.3,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0.5,
        "marginLeft": "auto",
        "lineHeight": 1.5,
        "letterSpacing": 0.125,
        "textShadow": "0px 0px 1px rgba(0, 0, 0, 0.5)"
    },
    "section-header-blog h5": {
        "fontSize": 1.3,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0.5,
        "marginLeft": "auto",
        "lineHeight": 1.5,
        "letterSpacing": 0.125,
        "textShadow": "0px 0px 1px rgba(0, 0, 0, 0.5)"
    },
    "section-presentation-page h5": {
        "fontSize": 1.3,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0.5,
        "marginLeft": "auto",
        "lineHeight": 1.5,
        "letterSpacing": 0.125,
        "textShadow": "0px 0px 1px rgba(0, 0, 0, 0.5)"
    },
    "section-header p": {
        "letterSpacing": 0.1,
        "textTransform": "uppercase",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0
    },
    "section-header-blog p": {
        "letterSpacing": 0.1,
        "textTransform": "uppercase",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0
    },
    "section-presentation-page p": {
        "letterSpacing": 0.1,
        "textTransform": "uppercase",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0
    },
    "section-header p span": {
        "textTransform": "lowercase"
    },
    "section-header-blog p span": {
        "textTransform": "lowercase"
    },
    "section-presentation-page p span": {
        "textTransform": "lowercase"
    },
    "section-header separator": {
        "color": "#fff",
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto"
    },
    "section-header-blog separator": {
        "color": "#fff",
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto"
    },
    "section-presentation-page separator": {
        "color": "#fff",
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto"
    },
    "section-header separatorline-separator:before": {
        "borderColor": "white"
    },
    "section-header separatorline-separator:after": {
        "borderColor": "white"
    },
    "section-header-blog separatorline-separator:before": {
        "borderColor": "white"
    },
    "section-header-blog separatorline-separator:after": {
        "borderColor": "white"
    },
    "section-presentation-page separatorline-separator:before": {
        "borderColor": "white"
    },
    "section-presentation-page separatorline-separator:after": {
        "borderColor": "white"
    },
    "section-header-small parallax": {
        "minHeight": 50 * vh,
        "height": "auto"
    },
    "section-header-small static-image": {
        "minHeight": 50 * vh,
        "height": "auto"
    },
    "section-clients-1 logo": {
        "position": "relative",
        "marginBottom": 30
    },
    "section-clients-2 nav-text": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "section-clients-2 nav-text li": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "section-clients-2 nav-text li a": {
        "opacity": 0.9,
        "color": "#343434",
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0
    },
    "section-clients-2 nav-text li a img": {
        "width": 120
    },
    "section-clients-2 nav-text > liactive a": {
        "color": "#c5a47e !important",
        "borderBottom": "2px solid #c5a47e"
    },
    "section-clients-2 nav-text > liactive a img:first-child": {
        "opacity": 0
    },
    "section-clients-2 tab-content": {
        "textAlign": "center",
        "maxWidth": 760,
        "minHeight": 130
    },
    "section-clients-2 tab-content plarge": {
        "color": "#777777"
    },
    "section-clients-3 nbs-flexisel-inner:before": {
        "position": "absolute",
        "top": 0,
        "width": "6%",
        "height": 50,
        "display": "block",
        "zIndex": 3,
        "content": "",
        "background": "linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='$left-color', endColorstr='$right-color',GradientType=1 )",
        "left": 0
    },
    "section-clients-3 nbs-flexisel-inner:after": {
        "position": "absolute",
        "top": 0,
        "width": "6%",
        "height": 50,
        "display": "block",
        "zIndex": 3,
        "content": "",
        "background": "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='$left-color', endColorstr='$right-color',GradientType=1 )",
        "right": 0
    },
    "section-clients-3 clients-carousel li": {
        "position": "relative"
    },
    "section-clients-3 clients-carousel li img": {
        "width": "50%",
        "cursor": "pointer",
        "position": "relative",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "maxHeight": 50,
        "maxWidth": 200
    },
    "section-clients-3 clients-carousel li img:first-child:hover": {
        "opacity": 0
    },
    "section-clients-3 nbs-flexisel-nav-left": {
        "fontSize": 30
    },
    "section-clients-3 nbs-flexisel-nav-right": {
        "fontSize": 30
    },
    "list-logos img": {
        "maxWidth": 120,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "display": "block"
    },
    "list-logos active client-logo": {
        "color": "#c5a47e"
    },
    "list-logos a": {
        "opacity": 0.9,
        "color": "#333333"
    },
    "list-logos-info active client-logo": {
        "color": "#00abc0"
    },
    "list-logos-success active client-logo": {
        "color": "#7accb8"
    },
    "list-logos-warning active client-logo": {
        "color": "#f88f58"
    },
    "list-logos-danger active client-logo": {
        "color": "#e78b90"
    },
    "client-logo": {
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 15
    },
    "client-logo i": {
        "fontSize": 35,
        "width": "auto",
        "marginBottom": 5
    },
    "client-logo h3": {},
    "section-team-1": {
        "paddingTop": 0
    },
    "section-team-1 container": {
        "position": "absolute",
        "width": "100%",
        "top": 0
    },
    "section-team-1 text-area": {
        "backgroundColor": "transparent",
        "maxWidth": 760,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "section-team-1 p": {
        "color": "#555"
    },
    "section-team-1 static-image img": {
        "width": "100%"
    },
    "section-team-2": {
        "paddingTop": 0
    },
    "section-team-2 team-text": {
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 75,
        "paddingLeft": 0
    },
    "section-team-2 team": {
        "display": "block",
        "position": "relative"
    },
    "section-team-2 team member": {
        "borderRadius": "50%",
        "display": "block",
        "textAlign": "center"
    },
    "section-team-2 team member p": {
        "fontSize": 1
    },
    "section-team-2 team member social-buttons": {
        "display": "inline-block",
        "paddingTop": 15,
        "paddingRight": 35,
        "paddingBottom": 15,
        "paddingLeft": 35
    },
    "section-team-2 team member img": {
        "background": "none repeat scroll 0 0 transparent",
        "height": "auto",
        "width": 120,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "section-team-2 team description": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "section-team-3 team": {
        "marginBottom": 50
    },
    "section-team-3 team member": {
        "textAlign": "center"
    },
    "section-team-3 team member big-text": {
        "marginBottom": 20
    },
    "section-team-3 team member img": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "section-team-3 team member first-name": {
        "minWidth": "65%",
        "paddingTop": 9,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "borderTop": "1px solid #e3e3e3",
        "borderBottom": "1px solid #e3e3e3",
        "fontSize": 18,
        "verticalAlign": "middle",
        "marginTop": 35,
        "float": "right"
    },
    "section-team-3 team member last-name": {
        "minWidth": "65%",
        "paddingTop": 9,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "borderTop": "1px solid #e3e3e3",
        "borderBottom": "1px solid #e3e3e3",
        "fontSize": 18,
        "verticalAlign": "middle",
        "marginTop": 35,
        "float": "left"
    },
    "section-team-3 team member motto": {
        "position": "relative",
        "textTransform": "none",
        "color": "#c5a47e",
        "maxWidth": "55%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "section-team-3 team member motto h3": {
        "fontSize": 22
    },
    "section-team-4": {
        "paddingTop": 5
    },
    "section-team-4 team": {
        "textAlign": "center",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "section-team-4 team member": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "section-team-4 team member img": {
        "width": 120,
        "height": 120,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "section-team-4 team member description": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "section-team-4 team member description details": {
        "fontSize": 14
    },
    "section-team-4 team member description details i": {
        "color": "#777777"
    },
    "img-circleimg-profile": {
        "width": 120,
        "height": 120
    },
    "description": {
        "marginBottom": 20
    },
    "big-text": {
        "fontSize": 18,
        "lineHeight": 25,
        "fontWeight": "600",
        "textTransform": "uppercase",
        "marginBottom": 0
    },
    "small-text": {
        "color": "#777777",
        "textAlign": "center"
    },
    "social-buttons": {
        "marginTop": -20,
        "borderTop": "1px solid #DDDDDD",
        "textAlign": "center"
    },
    "scroller": {
        "WebkitTransition": "all 0.4s ease-out",
        "MozTransition": "all 0.4s ease-out",
        "MsTransition": "all 0.4s ease-out",
        "OTransition": "all 0.4s ease-out",
        "transition": "all 0.4s ease-out"
    },
    "address h4": {
        "fontSize": 1.6
    },
    "address p": {
        "fontSize": 1
    },
    "section-contact-1 h4": {
        "marginBottom": 5
    },
    "section-contact-2 h4": {
        "marginBottom": 5
    },
    "section-contact-3 h4": {
        "marginBottom": 5
    },
    "section-contact-1 form-control": {
        "borderTop": "none",
        "borderLeft": "none",
        "borderRight": "none",
        "borderRadius": 0,
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 8,
        "paddingLeft": 0,
        "fontSize": 16
    },
    "section-contact-1 form-control:focus": {
        "borderTop": "none",
        "borderLeft": "none",
        "borderRight": "none",
        "borderRadius": 0,
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 8,
        "paddingLeft": 0,
        "fontSize": 16
    },
    "section-contact-1 contact-form": {
        "marginTop": 90
    },
    "section-contact-2 contact-form": {
        "marginTop": 20
    },
    "section-contact-2 label": {
        "fontWeight": "400",
        "fontSize": 16
    },
    "section-contact-3": {
        "position": "relative",
        "overflow": "hidden",
        "marginTop": 30,
        "paddingBottom": 0
    },
    "section-contact-3 contact-container": {
        "position": "relative"
    },
    "section-contact-3 contact-container address-container": {
        "position": "absolute",
        "left": 0,
        "width": "40%",
        "height": 570,
        "backgroundColor": "rgba(255, 255, 255, 0.75)",
        "zIndex": 3,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 60
    },
    "section-contact-3 contact-container address-container address": {
        "textAlign": "center"
    },
    "section-contact-3 contact-container map": {
        "position": "relative",
        "width": "100%",
        "top": 0,
        "left": 0,
        "height": 570,
        "overflow": "hidden",
        "display": "block"
    },
    "section-contact-3 contact-container map big-map": {
        "height": "100%",
        "width": "100%",
        "display": "block"
    },
    "section-closure": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden"
    },
    "section-closure static-image": {
        "position": "absolute",
        "zIndex": 1
    },
    "section-closure container": {
        "position": "relative",
        "zIndex": 2,
        "paddingTop": 150,
        "paddingRight": 0,
        "paddingBottom": 150,
        "paddingLeft": 0
    },
    "section-closure text-area": {
        "backgroundColor": "transparent",
        "color": "#FFFFFF"
    },
    "section image": {
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "width": "100%",
        "height": 100 * vh,
        "zIndex": 2,
        "position": "absolute",
        "display": "block"
    },
    "section-get-started": {
        "paddingBottom": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "section-header-freebie": {
        "paddingBottom": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "section-our-team-freebie": {
        "paddingBottom": 0
    },
    "section-get-started container": {
        "position": "relative",
        "zIndex": 100,
        "display": "block",
        "marginTop": 15 * vh,
        "textAlign": "center",
        "marginRight": "auto",
        "marginBottom": 15 * vh,
        "marginLeft": "auto"
    },
    "section-header-freebie container": {
        "position": "relative",
        "zIndex": 100,
        "display": "block",
        "marginTop": 30 * vh,
        "textAlign": "center"
    },
    "section-our-team-freebie container": {
        "position": "relative",
        "zIndex": 100,
        "display": "block",
        "marginTop": 14 * vh,
        "textAlign": "center",
        "marginBottom": 14 * vh
    },
    "section-get-started title-header": {
        "textTransform": "none"
    },
    "section-header-freebie title-header": {
        "textTransform": "none"
    },
    "section-our-team-freebie title-header": {
        "textTransform": "none"
    },
    "section-get-started button-contact": {
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 17,
        "paddingLeft": 0
    },
    "section-header-freebie button-contact": {
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 17,
        "paddingLeft": 0
    },
    "section-our-team-freebie button-contact": {
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 17,
        "paddingLeft": 0
    },
    "section-get-started text-description": {
        "color": "#fff",
        "marginTop": 40,
        "marginRight": "auto",
        "marginBottom": 40,
        "marginLeft": "auto",
        "maxWidth": 760
    },
    "section-header-freebie text-description": {
        "color": "#fff",
        "marginTop": 40,
        "marginRight": "auto",
        "marginBottom": 40,
        "marginLeft": "auto",
        "maxWidth": 760
    },
    "section-our-team-freebie text-description": {
        "color": "#fff",
        "marginTop": 40,
        "marginRight": "auto",
        "marginBottom": 40,
        "marginLeft": "auto",
        "maxWidth": 760
    },
    "section-get-started text-white": {
        "color": "#fff"
    },
    "section-header-freebie text-white": {
        "color": "#fff"
    },
    "section-our-team-freebie text-white": {
        "color": "#fff"
    },
    "section-get-started text-gold": {
        "color": "#c5a47e"
    },
    "section-header-freebie text-gold": {
        "color": "#c5a47e"
    },
    "section-our-team-freebie text-gold": {
        "color": "#c5a47e"
    },
    "section-get-started parallax": {
        "height": "auto"
    },
    "section-get-started static-image": {
        "height": "auto"
    },
    "section-header-freebie parallax": {
        "height": "auto"
    },
    "section-header-freebie static-image": {
        "height": "auto"
    },
    "section-our-team-freebie parallax": {
        "height": "auto"
    },
    "section-our-team-freebie static-image": {
        "height": "auto"
    },
    "section-get-started image": {
        "height": "100%"
    },
    "section-header-freebie image": {
        "height": "100%"
    },
    "section-our-team-freebie image": {
        "height": "100%"
    },
    "section-contact-4 parallax": {
        "height": 450
    },
    "section-our-services parallax": {
        "height": 450
    },
    "section-our-projects-fluid row [class^=\"col-\"]": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "section-our-projects-fluid row [class^=\"col-\"] project": {
        "marginBottom": 0
    },
    "section-our-projects project": {
        "marginBottom": 30
    },
    "member description": {
        "minHeight": 100
    },
    "section-our-clients-freebie nav-text": {
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "section-our-clients nav-text": {
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "section-our-clients-freebie nav-text li": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "section-our-clients nav-text li": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "section-our-clients nav-text li a img": {
        "width": 120
    },
    "section-our-clients-freebie tab-content": {
        "textAlign": "center",
        "maxWidth": 760,
        "minHeight": 130,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "section-our-clients tab-content": {
        "textAlign": "center",
        "maxWidth": 760,
        "minHeight": 130,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "section-our-clients-freebie tab-content plarge": {
        "color": "#777777"
    },
    "section-our-clients tab-content plarge": {
        "color": "#777777"
    },
    "section-contact-4": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "card p": {
        "minHeight": 0
    },
    "section-our-clients-freebie list-logos img": {
        "position": "inherit",
        "top": 0,
        "left": 0,
        "opacity": "none",
        "WebkitTransform": "none",
        "transform": "none"
    },
    "section-our-clients-freebie list-logos img:hover": {
        "opacity": 1,
        "boxShadow": "0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    "section-our-clients-freebie nav-text > liactive a": {
        "borderBottom": 0,
        "opacity": 1
    },
    "section-our-clients-freebie nav-text > liactive a image-clients img": {
        "opacity": 1,
        "boxShadow": "0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    "image-clients": {
        "width": 90,
        "marginTop": 0,
        "marginRight": 8,
        "marginBottom": 0,
        "marginLeft": 8
    },
    "image-clients img": {
        "width": "100%"
    },
    "author img": {
        "width": "100%"
    },
    "fa-pay": {
        "fontSize": "30px !important",
        "display": "inline-block",
        "marginTop": 5,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1,
        "width": "auto",
        "color": "#FFFFFF"
    },
    "share-area": {
        "marginTop": 80
    },
    "bodyClick": {
        "height": "100%",
        "width": "100%",
        "position": "fixed",
        "opacity": 0,
        "top": 0,
        "left": "auto",
        "right": 300,
        "content": "",
        "zIndex": 1029,
        "overflowX": "hidden"
    },
    "navbar-header": {
        "WebkitTransform": "translate3d(0px, 0, 0)",
        "MozTransform": "translate3d(0px, 0, 0)",
        "OTransform": "translate3d(0px, 0, 0)",
        "MsTransform": "translate3d(0px, 0, 0)",
        "transform": "translate3d(0px, 0, 0)",
        "WebkitTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "MozTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "OTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "MsTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "transition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "position": "relative"
    },
    "navbar-burger navbar-collapse": {
        "position": "fixed",
        "display": "block",
        "top": 0,
        "height": "100vh !important",
        "width": 300,
        "right": 0,
        "zIndex": 1032,
        "visibility": "visible",
        "backgroundColor": "#999",
        "overflowY": "visible",
        "borderTop": "none",
        "textAlign": "left",
        "borderLeft": "1px solid #e3e3e3",
        "paddingRight": 0,
        "paddingLeft": 40,
        "maxHeight": "none !important",
        "WebkitTransform": "translate3d(300px, 0, 0)",
        "MozTransform": "translate3d(300px, 0, 0)",
        "OTransform": "translate3d(300px, 0, 0)",
        "MsTransform": "translate3d(300px, 0, 0)",
        "transform": "translate3d(300px, 0, 0)",
        "WebkitTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "MozTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "OTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "MsTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "transition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)"
    },
    "navbar-burger navbar-collapse > ul": {
        "position": "relative",
        "zIndex": 3,
        "overflowY": "auto",
        "height": "100%"
    },
    "navbar-burger navbar-collapse nav > li": {
        "borderBottom": "1px solid #e5e5e5",
        "display": "block",
        "width": "100%"
    },
    "navbar-burger navbar-collapse nav > li:last-child": {
        "borderBottom": 0
    },
    "navbar-burger navbar-collapse nav > li > a": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#434547",
        "textTransform": "uppercase",
        "fontWeight": "600",
        "fontSize": 13,
        "lineHeight": 13,
        "paddingTop": 24,
        "paddingRight": 0,
        "paddingBottom": 24,
        "paddingLeft": 0
    },
    "navbar-burger navbar-collapse nav > li > a:hover": {
        "color": "#c5a47e"
    },
    "navbar-burger navbar-collapse nav > li > aactive": {
        "color": "#c5a47e"
    },
    "navbar-burger navbar-collapse nav > lisocial-links": {
        "textAlign": "center",
        "marginLeft": -40
    },
    "navbar-burger navbar-collapse nav > lisocial-links > a": {
        "fontSize": 18,
        "paddingTop": 24,
        "paddingRight": 15,
        "paddingBottom": 24,
        "paddingLeft": 15
    },
    "navbar-burger navbar-collapse::after": {
        "top": 0,
        "left": 0,
        "height": "100%",
        "width": "100%",
        "position": "absolute",
        "backgroundColor": "#FFFFFF",
        "display": "block",
        "content": "",
        "zIndex": 1
    },
    "navbar-burger navbar-collapsehas-image::after": {
        "top": 0,
        "left": 0,
        "height": "100%",
        "width": "100%",
        "position": "absolute",
        "backgroundColor": "rgba(17, 17, 17, 0.8)",
        "display": "block",
        "content": "",
        "zIndex": 1
    },
    "navbar-burger navbar-collapse active > a": {
        "color": "#434547"
    },
    "navbar-burger navbar-collapse dropdown dropdown-menu > li > a": {
        "color": "#434547"
    },
    "navbar-burger navbar-collapse active > a:hover": {
        "color": "#c5a47e"
    },
    "navbar-burger navbar-collapse active > a:focus": {
        "color": "#c5a47e"
    },
    "navbar-burger navbar-collapse dropdown dropdown-menu > li > a:hover": {
        "color": "#c5a47e"
    },
    "navbar-burger navbar-collapse dropdown dropdown-menu > li > a:focus": {
        "color": "#c5a47e"
    },
    "navbar-burger navbar-nav > li > dropdown-menu:after": {
        "display": "none"
    },
    "navbar-burger navbar-nav > li > dropdown-menu:before": {
        "display": "none"
    },
    "navbar-burger dropdown-menu": {
        "float": "none",
        "width": "auto",
        "marginTop": 0,
        "backgroundColor": "transparent",
        "border": 0,
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "WebkitTransition": "none",
        "MozTransition": "none",
        "OTransition": "none",
        "MsTransition": "none",
        "transition": "none"
    },
    "navbar-burger open dropdown-menu": {
        "position": "static"
    },
    "navbar-burger navbar-toggle icon-bar": {
        "display": "block",
        "position": "relative",
        "width": 24,
        "height": 2,
        "borderRadius": 1
    },
    "navbar-burgernavbar-transparent navbar-toggle icon-bar": {
        "background": "#fff"
    },
    "navbar-burger navbar-header navbar-toggle": {
        "marginTop": 12,
        "marginBottom": 8,
        "width": 40,
        "height": 40
    },
    "navbar-burger bar1": {
        "outline": "1px solid transparent",
        "top": 0,
        "WebkitAnimation": "topbar-back 500ms linear 0s",
        "MozAnimation": "topbar-back 500ms linear 0s",
        "animation": "topbar-back 500ms 0s",
        "WebkitAnimationFillMode": "forwards",
        "MozAnimationFillMode": "forwards",
        "animationFillMode": "forwards"
    },
    "navbar-burger bar2": {
        "outline": "1px solid transparent",
        "opacity": 1
    },
    "navbar-burger bar3": {
        "outline": "1px solid transparent",
        "bottom": 0,
        "WebkitAnimation": "bottombar-back 500ms linear 0s",
        "MozAnimation": "bottombar-back 500ms linear 0s",
        "animation": "bottombar-back 500ms 0s",
        "WebkitAnimationFillMode": "forwards",
        "MozAnimationFillMode": "forwards",
        "animationFillMode": "forwards"
    },
    "navbar-burger toggled bar1": {
        "top": 6,
        "WebkitAnimation": "topbar-x 500ms linear 0s",
        "MozAnimation": "topbar-x 500ms linear 0s",
        "animation": "topbar-x 500ms 0s",
        "WebkitAnimationFillMode": "forwards",
        "MozAnimationFillMode": "forwards",
        "animationFillMode": "forwards"
    },
    "navbar-burger toggled bar2": {
        "opacity": 0
    },
    "navbar-burger toggled bar3": {
        "bottom": 6,
        "WebkitAnimation": "bottombar-x 500ms linear 0s",
        "MozAnimation": "bottombar-x 500ms linear 0s",
        "animation": "bottombar-x 500ms 0s",
        "WebkitAnimationFillMode": "forwards",
        "MozAnimationFillMode": "forwards",
        "animationFillMode": "forwards"
    },
    "wrapper": {
        "WebkitTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "MozTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "OTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "MsTransition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "transition": "all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)",
        "left": 0,
        "backgroundColor": "white"
    },
    "wrappertransition": {
        "WebkitTransform": "translate3d(0px, 0, 0)",
        "MozTransform": "translate3d(0px, 0, 0)",
        "OTransform": "translate3d(0px, 0, 0)",
        "MsTransform": "translate3d(0px, 0, 0)",
        "transform": "translate3d(0px, 0, 0)"
    },
    "nav-open wrapper": {
        "WebkitTransform": "translate3d(-150px, 0, 0)",
        "MozTransform": "translate3d(-150px, 0, 0)",
        "OTransform": "translate3d(-150px, 0, 0)",
        "MsTransform": "translate3d(-150px, 0, 0)",
        "transform": "translate3d(-150px, 0, 0)"
    },
    "nav-open navbar navbar-header": {
        "WebkitTransform": "translate3d(-200px, 0, 0)",
        "MozTransform": "translate3d(-200px, 0, 0)",
        "OTransform": "translate3d(-200px, 0, 0)",
        "MsTransform": "translate3d(-200px, 0, 0)",
        "transform": "translate3d(-200px, 0, 0)"
    }
});