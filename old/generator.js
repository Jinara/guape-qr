function imgQR(qrCanvas, centerImage, factor) {
  var h = qrCanvas.height;
  //Center size
  var cs = h * factor;
  //Center offset
  var co = (h - cs) / 2;
  var ctx = qrCanvas.getContext("2d");
  ctx.drawImage(
    centerImage,
    0,
    0,
    centerImage.width,
    centerImage.height,
    co,
    co,
    cs,
    cs
  );
}

function downloadQRcode() {
  // Download the png image or svg file
  // The '.png' or '.svg' suffix will be added to filename automatically
  var fileName = "1";
  qrcode.download(fileName);
}

const pollitos = {
  titleColor: "#1bb0be",
  subTitleColor: "#dd3769",
  logo: "pollito.png",
};

const heladitos = {
  titleColor: "#cc6176",
  subTitleColor: "#8f687f",
  logo: "heladito.png",
};

const monstruitos = {
  titleColor: "#7475a4",
  subTitleColor: "#f8c153",
  logo: "monstruito.png",
};

const neutro1 = {
  titleColor: "#7dc7c4",
  subTitleColor: "#9e7fb7",
  logo: "neutro1.png",
};

const neutro2 = {
  titleColor: "#cfd36a",
  subTitleColor: "#9e7fb7",
  logo: "neutro2.png",
};

const neutro3 = {
  titleColor: "#68458c",
  subTitleColor: "#8b8c37",
  logo: "neutro3.png",
};

const current = neutro3;

const options_object = {
  text: "https://www.guapetones.ar",
  width: 1000,
  height: 1000,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,

  // ====== Quiet Zone
  quietZone: 2,
  quietZoneColor: "white",

  // ====== Logo
  logo: current.logo, // Relative address, relative to `easy.qrcode.min.js`
  logoWidth: 640, // fixed logo width. default is `width/3.5`
  logoHeight: 640, // fixed logo height. default is `heigth/3.5`
  // logoMaxWidth: undefined, // Maximum logo width. if set will ignore `logoWidth` value
  // logoMaxHeight: undefined, // Maximum logo height. if set will ignore `logoHeight` value
  logoBackgroundColor: "#fff", // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
  logoBackgroundTransparent: true, // Whether use transparent image, default is false

  // ====== Title
  title: "ESCANEAME", // content
  titleFont: "normal normal bold 170px Urbanist", //font. default is "bold 16px Arial"
  titleColor: current.titleColor, // color. default is "#000"
  titleBackgroundColor: "white", // background color. default is "#fff"
  titleHeight: 360, // height, including subTitle. default is 0
  titleTop: 140, // draws y coordinates. default is 30

  // ====== SubTitle
  subTitle: "Estoy perdido", // content
  subTitleFont: "normal normal normal 155px Urbanist", // font. default is "14px Arial"
  subTitleColor: current.subTitleColor, // color. default is "4F4F4F"
  subTitleTop: 290, // draws y coordinates. default is 0

  /*

   */
  // ===== Event Handler
  /*
  onRenderingStart: undefined,
  onRenderingEnd: undefined,
  */

  // ===== Versions
  /*
  version: 0, // The symbol versions of QR Code range from Version 1 to Version 40. default 0 means automatically choose the closest version based on the text length.
  */

  // ===== Binary(hex) data mode
  /*
  binary: false, // Whether it is binary mode, default is text mode. 
  */

  // ===== Tooltip
  /*
  tooltip: false, // Whether set the QRCode Text as the title attribute value of the QRCode div
  */

  // ==== CORS

  crossOrigin: null, // String which specifies the CORS setting to use when retrieving the image. null means that the crossOrigin attribute is not set.

  // =====  Drawing method

  // drawer: 'svg', // Which drawing method to use. 'canvas', 'svg'. default is 'canvas'

  // =====  UTF-8 without BOM
  utf8WithoutBOM: true,
};

// const icon = new Image();

// icon.onload = function () {
//   var qrcode = new QRCode(document.getElementById("qrcode"), options_object );

//   imgQR(qrcode._oDrawing._elCanvas, this, 0.2);
// }

// icon.src = "./holi2.png";

const DOM_object = document.getElementById("qrcode");
var qrcode = new QRCode(DOM_object, options_object);
// qrcode.download("3");
