// const QRCode = require("easyqrcodejs-nodejs");
import QRCode from "easyqrcodejs-nodejs";
import { v4 as uuidv4 } from "uuid";
import { pollitos, monstruitos, heladitos, neutro, test } from "./variables.js";
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
    quietZone: 5,
    quietZoneColor: "white",

    // ====== Logo
    logo: current.logo, // Relative address, relative to `easy.qrcode.min.js`
    logoWidth: 950, // fixed logo width. default is `width/3.5`
    logoHeight: 950, // fixed logo height. default is `heigth/3.5`
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

    // ==== CORS

    // crossOrigin: null, // String which specifies the CORS setting to use when retrieving the image. null means that the crossOrigin attribute is not set.

    // =====  Drawing method

    // drawer: 'svg', // Which drawing method to use. 'canvas', 'svg'. default is 'canvas'

    // =====  UTF-8 without BOM
    utf8WithoutBOM: true,
  };
};

// It generates 1 QR code
const generate = function (name = "test", design = test, url = test.url, path = '') {
  // New instance with options
  var qrcode = new QRCode(options_object(design, url));

  //  Save PNG to file
  // Use png over svg cause svg use different configs
  console.log("AIUDAAA")
  console.log(path)
  qrcode
    .saveImage({
      path: path + "q-" + name + ".png", // file path
    })
    .then((data) => {
      console.log(`${name} has been Created!`);
    });
};

// It generates many QR code of a design
const generateManyOf = (cant, design, path) => {
  for (let index = 0; index < cant; index++) {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const myuuid = uuidv4();
    const name = myuuid + "=" + timestamp + "-" + design.name;
    const fullUrl = basicURL + name;

    generate(name, design, fullUrl, path);
  }
};

function build(cant) {
  // It generates many QR code of each design for XS size
  const xs = 'xs'
  designs.forEach((design) => {
    let path = "generated" + "/" + design.name + "/" + xs + '/'
    generateManyOf(cant, design, path);
  });

  // It generates many QR code of each design for S size
  const s = 's'
  designs.forEach((design) => {
    let path = "generated" + "/" + design.name + "/" + s + '/'
    generateManyOf(cant, design, path);
  });

  const ml = 'ml'
  designs.forEach((design) => {
    let path = "generated" + "/" + design.name + "/" + ml + '/'
    generateManyOf(cant, design, path);
  });
}

//Use this to remove all the generated QRs
clean()

//Use this to build an amount of QRs
// generate()
// build(1);
