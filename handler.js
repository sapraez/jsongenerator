'use strict';

const json = require('./datos.json');
const Candidate = require('./newjson');
const fs = require('fs');



module.exports.helloWorld = (event, context, callback) => {
  let arr2 = [];

  function jsonCreator(element,countryCode) {
    let mobile = "";
    mobile = element.mobile.toString();
    let dto = {id: Number, email: String, phone: String, pais: String};
    if (mobile.includes("+")) {
      dto.id=element.record_id;
      dto.email=element.Correo;
      dto.phone=mobile;
      dto.pais=element.pais;
      arr2.push(dto);
    } else {
      dto.id=element.record_id;
      dto.email=element.Correo;
      dto.phone=countryCode+mobile;
      dto.pais=element.pais;
      arr2.push(dto);
    }
  }
  
  json.forEach(element => {

    switch(true) {
      case /^col*/i.test(element.pais):
        jsonCreator(element,"+57")
        break;
      case /^ecu*/i.test(element.pais):
        jsonCreator(element,"+593")
        break;
      case /^peru*/i.test(element.pais):
        jsonCreator(element,"+51")
        break;
      case /^alemania*/i.test(element.pais):
        jsonCreator(element,"+49")
        break;
      case /^argentina*/i.test(element.pais):
        jsonCreator(element,"+54")
        break;
      case /^vene*/i.test(element.pais):
        jsonCreator(element,"+58")
        break;
      case /^parag*/i.test(element.pais):
        jsonCreator(element,"+595")
        break;
      case /^panama*/i.test(element.pais):
        jsonCreator(element,"+507")
        break;
      case /^bra*/i.test(element.pais):
        jsonCreator(element,"+55")
        break;
      case /^mex*/i.test(element.pais):
        jsonCreator(element,"+52")
        break;
      case /^guate*/i.test(element.pais):
        jsonCreator(element,"+502")
        break;
      case /^españ*/i.test(element.pais):
        jsonCreator(element,"+34")
        break;
      case /^estados*/i.test(element.pais):
        jsonCreator(element,"+1")
        break;
      case /^bolivia*/i.test(element.pais):
        jsonCreator(element,"+591")
        break;
      case /^hodura*/i.test(element.pais):
        jsonCreator(element,"+504")
        break;
      case /^nicara*/i.test(element.pais):
        jsonCreator(element,"+505")
        break;
      case /^bogot*/i.test(element.pais):
        jsonCreator(element,"+57")
        break;
      case /^bucara*/i.test(element.pais):
        jsonCreator(element,"+57")
        break;
      case /^cucu*/i.test(element.pais):
        jsonCreator(element,"+57")
        break;
      case /^canad*/i.test(element.pais):
        jsonCreator(element,"+1")
        break;
      case /^cali*/i.test(element.pais):
        jsonCreator(element,"+57")
        break;
      case /^bulgari*/i.test(element.pais):
        jsonCreator(element,"+359")
        break;
      case /^cuba*/i.test(element.pais):
        jsonCreator(element,"+53")
        break;
      case /^chile*/i.test(element.pais):
        jsonCreator(element,"+56")
        break;
      case /^republica*/i.test(element.pais):
        jsonCreator(element,"+1")
        break;
      default:
        //count3++;
        break;
    }
  });
  console.log("SUMA: ",arr2.length);
  let dictstring = JSON.stringify(arr2);
  fs.writeFile("nuevosRegistros.json", dictstring);
  return 'ok';
};
