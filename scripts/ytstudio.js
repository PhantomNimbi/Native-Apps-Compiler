var nativefier = require('nativefier').default;

var options = {
    name: 'YouTube Studio',
    targetUrl: 'https://studio.youtube.com/',
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
    verbose: true,
    fileDownloadOptions: {
        saveAs: true,
    },
    win32metadata: {
        "ProductName": "YouTube Studio",
        "InternalName": "youtube-studio"
    }
};

nativefier(options, function (error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});