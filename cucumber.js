// // module.exports = {
// //     default: '--require features/**/*.js --format progress-bar'
// // };
// module.exports = {
//   default: {
//     require: ['features/step-definitions/*.js'],
//     //format: ['allure-cucumberjs']
//   }
// };

module.exports = {
  default: {
    require: ['features/step-definitions/*.js'],
    //format: ['./reporter.js']
    timeout: 72000
  }
};



