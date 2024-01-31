/**
* Prize setting
* Type: The unique logo, 0 is the positioning symbol of the default special prize, other prizes are not available
* Count: Number of prizes
* Title: Prize description
* Text: Title of prizes
* IMG: Picture address
*/
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "Giải may mắn"
  },
  {
    type: 1,
    count: 2,
    text: "Giải đặc biệt",
    title: "Một phần quà bí mật",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 5,
    text: "Giải nhất",
    title: "Mac Pro",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 6,
    text: "Giải nhì",
    title: "Điện thoại Mate30",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 7,
    text: "Giải ba",
    title: "Ipad Mini5",
    img: "../img/ipad.jpg"
  },
  {
    type: 5,
    count: 8,
    text: "Giải phong cách",
    title: "Flycam DJI",
    img: "../img/spark.jpg"
  },
  {
    type: 6,
    count: 8,
    text: "Giải tương lai tri thức",
    title: "Kindle",
    img: "../img/kindle.jpg"
  },
  {
    type: 7,
    count: 11,
    text: "Giải niềm vui quanh ta",
    title: "Tai nghe bluetooth",
    img: "../img/edifier.jpg"
  }
];

/**
 * The number of prizes for one time corresponds to Prizes
 */
const EACH_COUNT = [1, 1, 5, 6, 7, 8, 9, 10];

/**
 * Card company name identification
 */
const COMPANY = "Tan Son Nhat Golf Course";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
