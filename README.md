---
name: 'About'
layout: 'page'
permalink: '/README/'
---
# Requirements

 * **NodeJS**: [Download][URL1]
 * **Python**: [Download][URL2]

# Supported OS

 * **Windows**
 * **Linux**
 * **OSX**

# Instructions

 * Download and install NodeJS and Python from the links above.
 * Run the following command(s) in your terminal to install and setup Castlabs EVS:
 
 ```sh
 python -m pip install --upgrade castlabs-evs
 python3 -m castlabs_evs.account signup
 ```

 * Run the following command(s) in your terminal to clone the repository and install the base dependencies:

 ```sh
 git clone https://github.com/PhantomNimbi/Native-Apps-Compiler Native-Apps-Compiler
 cd Native-Apps-Compiler && npm i
 ```
 * Refer to the list of available apps for the command to build your desired app(s). 

# Apps

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
    npm run HBO-Max && npm run sign-app "apps/HBO Max-win32-x64"
    ```
    * **Linux**: 
    ```sh
    npm run HBO-Max && npm run sign-app 'apps/HBO Max-linux-x64'
    ```
    * **OSX**: 
    ```sh
    npm run HBO-Max && npm run sign-app 'apps/HBO Max-darwin-x64'
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

[URL1]: https://nodejs.org
[URL2]: https://python.org