# ReactNativeStudies
### To config VisualStudio and its emulator:
* https://react-native.rocketseat.dev/android/linux/#kvm-extra
* https://react-native.rocketseat.dev/android/emulador

### Pré installation
- 1° check the node version;
- 2° if you are using linux, give permission to the folder (```sudo chmod -R 777```)
- 3° check if the port is available by running ```sudo lsof -i :8081``` and if there is a process running, get its PID and kill with ```kill -9 <PID>```. This is shown in the link: https://reactnative.dev/docs/troubleshooting#content
- 4° make sure your android studio is running.

### To start the project:
- 1° start the studio by running "studio.sh" into your bash;
- 2° start the project by running "npm start";
- 3° start the build for android by running "react-native run-android".

### Tips:
To see available devices run "adb devices";
If happens to fail when configuring the emulator and the error is about the KVM bios settings (just for LINUX) and using a Lenovo PC: https://support.lenovo.com/pt/en/solutions/ht500006

### ToDo:
The TicTacToe was developed in a codesandbox that was using a old version of the react native, so its not working in this project. Its necessary to change some tags.
