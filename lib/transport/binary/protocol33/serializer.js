"use strict";

var serializer;
var encodeRecordData;
try {
  serializer = require('./serializer-binary');


  encodeRecordData = function (content) {
    return serializer.serializeDocument(content);
  };
} catch (e) {
  
  serializer = require('./serializer-csv');
  encodeRecordData = function (content) {
    var buffer = serializer.serializeDocument(content);
    return new Buffer(buffer, 'utf8');
  };
}


exports.serializeDocument = serializer.serializeDocument;
exports.serializeValue = function () {

};
exports.encodeRecordData = encodeRecordData;



