const fs = require('fs');
const util = require('util');
const winston = require('winston');
var nativefier = require('nativefier').default;

var options = {
    name: 'G123',
    targetUrl: 'https://g123.jp/?lang=en',
    version: '1.0.0',
    appVersion: '1.0.0',
    buildVersion: '1.0.0',
    backgroundColor: '#333333',
    out: './apps',
    overwrite: true,
    asar: true,
    counter: true,
    bounce: true,
    width: 1280,
    height: 800,
    showMenuBar: false,
    fastQuit: true,
    userAgent: 'firefox',
    ignoreCertificate: false,
    ignoreGpuBlacklist: false,
    enableEs3Apis: true,
    internalUrls: '.*?',
    blockExternalUrls: true,
    widevine: false,
    insecure: false,
    honest: false,
    zoom: 1.0,
    singleInstance: true,
    clearCache: false,
    verbose: false,
    fileDownloadOptions: {
        saveAs: true,
    },
    win32metadata: {
        "ProductName": "G123",
        "InternalName": "g123"
    }
};

nativefier(options, function (error, appPath) {
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' }),
        ],
    });

    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
    
    if (error) {
        console.error(error);
    }

    console.log('App has been nativefied to', appPath);
});