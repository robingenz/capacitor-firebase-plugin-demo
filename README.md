# capacitor-firebase-plugin-demo

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/robingenz/capacitor-firebase-plugin-demo/ci.yml?branch=main)](https://github.com/robingenz/capacitor-firebase-plugin-demo/actions)

<!-- [![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/robingenz/capacitor-firebase-plugin-demo?color=brightgreen&label=version)](https://github.com/robingenz/capacitor-firebase-plugin-demo/releases) -->

⚡️ Simple Ionic Angular app to demonstrate the use of certain Capacitor plugins.

## Plugins

The following plugins are included:

- [capacitor-firebase/analytics](https://github.com/capawesome-team/capacitor-firebase)
- [capacitor-firebase/app](https://github.com/capawesome-team/capacitor-firebase)
- [capacitor-firebase/app-check](https://github.com/capawesome-team/capacitor-firebase)
- [capacitor-firebase/crashlytics](https://github.com/capawesome-team/capacitor-firebase)
- [capacitor-firebase/messaging](https://github.com/capawesome-team/capacitor-firebase)
- [capacitor-firebase/performance](https://github.com/capawesome-team/capacitor-firebase)

## Development Setup 💻

### Prerequisites

- Install [Node.js](https://nodejs.org) which includes [Node Package Manager](https://www.npmjs.com/get-npm)
- Android development: Install [Android Studio](https://developer.android.com/studio)
- iOS development: Install [XCode](https://apps.apple.com/de/app/xcode/id497799835?mt=12)

### Getting Started

Clone this repository:

```
git clone https://github.com/robingenz/capacitor-firebase-plugin-demo.git
```

Change to the root directory of the project:

```
cd capacitor-firebase-plugin-demo
```

Install all dependencies:

```
npm i
```

Add a Firebase configuration file ([Android](https://firebase.google.com/docs/android/setup#add-config-file) / [iOS](https://firebase.google.com/docs/ios/setup#add-config-file)).
On the Web, you need to update the `src/environment/environment.ts` and `src/environment/environment.prod.ts` files with your config values from the Firebase Console.

Prepare and launch the Android app:

```
npx ionic cap sync android
npx ionic cap run android
```

Prepare and launch the iOS app:

```
npx ionic cap sync ios
npx ionic cap run ios
```

This project uses [Ionic](https://ionicframework.com/) as app development platform and the [Ionic CLI](https://ionicframework.com/docs/cli).

<!-- ## Changelog

See [CHANGELOG.md](https://github.com/robingenz/capacitor-firebase-plugin-demo/blob/main/CHANGELOG.md). -->

## License

See [LICENSE](https://github.com/robingenz/capacitor-firebase-plugin-demo/blob/main/LICENSE).
