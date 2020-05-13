const convertByte = (byte)=>{
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
 if (byte == 0) return '0 Byte';
 var i = parseInt(Math.floor(Math.log(byte) / Math.log(1024)));
 return Math.round(byte / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

const toHHMMSS = (sec)=>{
    var sec_num = parseInt(sec, 10); // don't forget the second param
    var day = Math.floor(sec_num/86400);
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60) - (day *86400);
  if (day < 10) {day = "0" + day;}
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return day + ":"+ hours+':'+minutes+':'+seconds;
  // return `(${day}) D, (${hours}) H, (${minutes}) M, (${seconds}) S`
}

module.exports = {convertByte, toHHMMSS}