---
title: Instructions
layout: page
permalink: /instructions
---

 * Download and install NodeJS and Python.
 * Run the following command(s) in your terminal to clone the repository and install the base dependencies:

    * **Windows**: 

    ```sh
    git clone https://github.com/PhantomNimbi/Native-Apps-Compiler Native-Apps-Compiler
    cd Native-Apps-Compiler && npm i
    pip3 install --upgrade pip
    python3 -m venv venv && venv/Scripts/Activate
    pip -r requirements.txt
    ```

    * **Linux**:

    ```sh
    git clone https://github.com/PhantomNimbi/Native-Apps-Compiler Native-Apps-Compiler
    cd Native-Apps-Compiler && npm i
    pip3 install --upgrade pip
    python3 -m venv venv && venv/bin/ ./activate
    pip -r requirements.txt
    ```

    * **OSX**: 

    ```sh
    git clone https://github.com/PhantomNimbi/Native-Apps-Compiler Native-Apps-Compiler
    cd Native-Apps-Compiler && npm i
    pip3 install --user --upgrade pip
    pip3 install --user virtualenv
    python3 -m venv venv
    source venv/bin/activate
    pip -r requirements.txt
    ```

 * Refer to the following list of apps for the command to build your desired app(s):

**Available Apps**:<br />

  * **YouTube**: 
  ```sh
  npm run YouTube
  ```
  * **YT Music**: 
  ```sh
  npm run YT-Music
  ```
  * **PH Viewer**: 
  ```sh
  npm run PH-Viewer
  ```
  * **G123**: 
  ```sh
  npm run G123
  ```
  * **Netflix**: 
    * **Windows**:
    ```sh
    npm run Netflix && npm run sign-app "apps/Netflix-win32-x64"
    ```
    * **Linux**: 
    ```sh
    npm run Netflix && npm run sign-app 'apps/Netflix-linux-x64'
    ```
    * **OSX**: 
    ```sh
    npm run Netflix && npm run sign-app 'apps/Netflix-darwin-x64'
    ```
* **Hulu**: 
    * **Windows**: 
    ```sh
    npm run Hulu && npm run sign-app "apps/Hulu-win32-x64"
    ```
    * **Linux**: 
    ```sh
    npm run Hulu && npm run sign-app 'apps/Hulu-linux-x64'
    ```
    * **OSX**: 
    ```sh
    npm run Hulu && npm run sign-app 'apps/Hulu-darwin-x64'
    ```
* **HBO Max**: 
    * **Windows**: 
    ```sh
    npm run Max && npm run sign-app "apps/Max-win32-x64"
    ```
    * **Linux**: 
    ```sh
    npm run Max && npm run sign-app 'apps/Max-linux-x64'
    ```
    * **OSX**: 
    ```sh
    npm run Max && npm run sign-app 'apps/Max-darwin-x64'
    ```
* **Spotify**: 
    * **Windows**: 
    ```sh
    npm run Spotify && npm run sign-app "apps/Spotify-win32-x64"
    ```
    * **Linux**: 
    ```sh
    npm run Spotify && npm run sign-app 'apps/Spotify-linux-x64'
    ```
    * **OSX**: 
    ```sh
    npm run Spotify && npm run sign-app 'apps/Spotify-darwin-x64'
    ```

The above list is **NOT** final. If you don't see the website you desire an app for in the list, let us know via the discussions section on our github page and we will look into adding it to our list of supported websites. 

You can find our github page at: [PhantomNimbi/Native-Apps-Compiler][URL1].

[URL1]: https://github.com/PhantomNimbi/Native-Apps-Compiler