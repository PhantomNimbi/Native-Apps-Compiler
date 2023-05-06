var nativefier = require('nativefier').default;

var options = {
    name: 'Proton Mail',
    targetUrl: 'http://mail.proton.me/',
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
    browserWindowOptions: {
        "webPreferences":
        {
            "webviewTag": true,
            "nodeIntegration": true,
            "nodeIntegrationInSubFrames": true
        }
    },
    fileDownloadOptions: {
        saveAs: true,
    },
    win32metadata: {
        "ProductName": "Proton Mail",
        "InternalName": "proton-mail",
        "Author": "Joshua Lewis",
        "CompanyName": "Joshua Lewis"
    },
    oldBuildWarningText: 'You\'re app needs to be updated. Please run the upgrade script.'
};

nativefier(options, function (error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});