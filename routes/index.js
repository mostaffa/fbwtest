var express = require('express');
var router = express.Router();
const os = require('os');
const converter = require('../modules/converter')
/* GET home page. */

const data = {
    hostname: os.hostname(),
    operatingSystemName: os.type(),
    operatingSystemPlatform: os.platform(),
    operatingSystemCPUArchitecture: os.arch(),
    operatingSystemRelease: os.release(),
    uptime: converter.toHHMMSS(os.uptime()),
    totalMemory: converter.convertByte(os.totalmem()),
    freeMemory: converter.convertByte(os.freemem()),
    cpus: os.cpus(),
    networks: os.networkInterfaces(),
    constants: os.constants,
    endian: os.endianness(),
    homedir: os.homedir(),
    tmpdir: os.tmpdir(),
    userInfo: os.userInfo(),
    node_version: process.versions,
    currentTime:new Date().getTime()
  }
router.get('/', function(req, res, next) {
  console.log(data.node_version)
  res.render('admin/admin', { title: 'Express', data:data,serverUpTime:converter.toHHMMSS(new Date().getTime()/1000 - data.currentTime/1000)});
});

module.exports = router;
