# Contributing Guidelines


 * Create a `.js` file in the `scripts` folder and name it after your app.
 * Add the following fields to your new `.js` file and edit them as needed: 

```js
const fs = require('fs');
const util = require('util');
var nativefier = require('nativefier').default;

var options = {
    name: '',
    targetUrl: '',
    version: '',
    appVersion: '',
    buildVersion: '',
    backgroundColor: '',
    out: './apps',
    overwrite: true,
    asar: true,
    counter: true,
    bounce: true,
    width: 1280,
    height: 800,
    showMenuBar: false,
    fastQuit: true,
    userAgent: '',
    ignoreCertificate: false,
    ignoreGpuBlacklist: false,
    enableEs3Apis: true,
    internalUrls: '',
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
        "ProductName": "",
        "InternalName": ""
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
```

 * Edit the [Apps][URL1] section of the [README][URL2] to include your app and the command to run the build script.
 * Edit the scripts section of the [package.json][URL3] with the command to run your build script.

 [URL1]: ./README.md#Apps
 [URL2]: ./README.md
 [URL3]: ./package.json