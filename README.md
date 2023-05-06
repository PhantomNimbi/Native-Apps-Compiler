# Native Apps Compiler
Native app auto compiler using nativefier

## Requirements

 * **NodeJS**: [Download][URL1]
 * **Python**: [Download][URL2]

## Compatible OS

 * **Windows**
 * **Linux**
 * **OSX**

## Instructions

 * Download and install NodeJS and Python from the links above.
 * Run the commands to install and setup Castlabs EVS:

    ```py
    python -m pip install --upgrade castlabs-evs
    python3 -m castlabs_evs.account signup
    ```
 * Clone the repo to a location of your choosing with the following command: 
    ```cmd
    git clone https://github.com/PhantomNimbi/Native-Apps-Compiler
    ```
 * CD into the base folder and run `npm i` to install the base dependencies.
 * Refer to the list of available apps for the command to build your desired app(s). 

## Apps

  * **YouTube**: 
  ```js
  npm run YouTube
  ```
  * **YT Music**: 
  ```js
  npm run YT-Music
  ```
  * **PH Viewer**: 
  ```js
  npm run PH-Viewer
  ```
  * **G123**: 
  ```js
  npm run G123
  ```,
  * **Netflix**: 
    * **Windows**:
    ```js
    npm run Netflix && npm run sign-app "apps/Netflix-win32-x64"
    ```
    * **Linux**: 
    ```js
    npm run Netflix && npm run sign-app 'apps/Netflix-wlinux-x64'
    ```
    * **OSX**: 
    ```js
    npm run Netflix && npm run sign-app 'apps/Netflix-darwin-x64'
    ```
* **Hulu**: 
    * **Windows**: 
    ```js
    npm run Hulu && npm run sign-app "apps/Hulu-win32-x64"
    ```
    * **Linux**: 
    ```js
    npm run Hulu && npm run sign-app 'apps/Hulu-wlinux-x64'
    ```
    * **OSX**: 
    ```js
    npm run Hulu && npm run sign-app 'apps/Hulu-darwin-x64'
    ```
* **HBO Max**: 
    * **Windows**: 
    ```js
    npm run HBO-Max && npm run sign-app "apps/HBO Max-win32-x64"
    ```
    * **Linux**: 
    ```js
    npm run HBO-Max && npm run sign-app 'apps/HBO Max-wlinux-x64'
    ```
    * **OSX**: 
    ```js
    npm run HBO-Max && npm run sign-app 'apps/HBO Max-darwin-x64'
    ```
* **Spotify**: 
    * **Windows**: 
    ```js
    npm run Spotify && npm run sign-app "apps/Spotify-win32-x64"
    ```
    * **Linux**: 
    ```js
    npm run Spotify && npm run sign-app 'apps/Spotify-wlinux-x64'
    ```
    * **OSX**: 
    ```js
    npm run Spotify && npm run sign-app 'apps/Spotify-darwin-x64'
    ```

[URL1]: https://nodejs.org
[URL2]: https://python.org