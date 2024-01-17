// const QRCode = require("easyqrcodejs-nodejs");
import QRCode from "easyqrcodejs-nodejs";
import { v4 as uuidv4 } from "uuid";
import { pollitos, monstruitos, heladitos, neutro } from "./variables.js";
import { clean } from "./cleaner.js";

//env variables
const basicURL = "https://app.guapetones.ar/pets/";
const designs = [pollitos, heladitos, monstruitos, neutro];

// Options builder DO NOT TOUCH
const options_object = (current, url) => {
  return {
    text: url,
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
};

// It generates 1 QR code
const generate = function (name = "test", design = neutro, url) {
  console.log("yeii");
  // New instance with options
  var qrcode = new QRCode(options_object(design, url));
  console.log("1");

  //  Save SVG to file
  qrcode
    .saveSVG({
      path: "generated" + "/" + design.name + "/" + "q-" + name + ".svg", // file path
    })
    .then((data) => {
      console.log(`${name} has been Created!`);
    });
  console.log("2");
};

// It generates many QR code of a design
const generateManyOf = (cant, design) => {
  for (let index = 0; index < cant; index++) {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const myuuid = uuidv4();
    const name = myuuid + "=" + timestamp + "-" + design.name;
    const fullUrl = basicURL + name;

    generate(name, design, fullUrl);
  }
};

function build(cant) {
  // It generates many QR code of each design
  designs.forEach((design) => {
    generateManyOf(cant, design);
  });
}

//Use this to build an amount of QRs
build(1)

//Use this to remove all the generated QRs
// clean()
