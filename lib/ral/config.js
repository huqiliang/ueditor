'use strict';

module.exports.PIC_UPLOAD = {
    https: false,
    path: 'yourpath',      // API路径
    protocol: 'http',
    method: 'POST',
    pack: 'formdata',
    unpack: 'json',
    balance: 'random',
    timeout: 100000,
    server: [{
        host: 'yourhose',      //host
        port: youport              //端口
    }]
};