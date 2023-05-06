const fs = require('fs');
const util = require('util');
var nativefier = require('nativefier').default;

var options = {
    name: 'YouTube',
    targetUrl: 'https://www.youtube.com/',
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
        "ProductName": "YouTube",
        "InternalName": "youtube"
    }
};

nativefier(options, function (error, appPath) {
    if (error) {
        var log_file_error = fs.createWriteStream(__dirname + './error.log', { flags: 'a' });
        console.log('Caught exception: ' + error);
        log_file_error.write(util.format('Caught exception: ' + error) + '\n');
        return;
    }
    console.log('App has been nativefied to', appPath);
});