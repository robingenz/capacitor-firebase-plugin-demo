// swift-tools-version: 5.9
import PackageDescription

// DO NOT MODIFY THIS FILE - managed by Capacitor CLI commands
let package = Package(
    name: "CapApp-SPM",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapApp-SPM",
            targets: ["CapApp-SPM"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", exact: "8.1.0"),
        .package(name: "CapacitorFirebaseAnalytics", path: "../../../node_modules/@capacitor-firebase/analytics"),
        .package(name: "CapacitorFirebaseApp", path: "../../../node_modules/@capacitor-firebase/app"),
        .package(name: "CapacitorFirebaseAppCheck", path: "../../../node_modules/@capacitor-firebase/app-check"),
        .package(name: "CapacitorFirebaseCrashlytics", path: "../../../node_modules/@capacitor-firebase/crashlytics"),
        .package(name: "CapacitorFirebaseFirestore", path: "../../../node_modules/@capacitor-firebase/firestore"),
        .package(name: "CapacitorFirebaseFunctions", path: "../../../node_modules/@capacitor-firebase/functions"),
        .package(name: "CapacitorFirebaseMessaging", path: "../../../node_modules/@capacitor-firebase/messaging"),
        .package(name: "CapacitorFirebasePerformance", path: "../../../node_modules/@capacitor-firebase/performance"),
        .package(name: "CapacitorFirebaseRemoteConfig", path: "../../../node_modules/@capacitor-firebase/remote-config"),
        .package(name: "CapacitorFirebaseStorage", path: "../../../node_modules/@capacitor-firebase/storage"),
        .package(name: "CapacitorApp", path: "../../../node_modules/@capacitor/app"),
        .package(name: "CapacitorFilesystem", path: "../../../node_modules/@capacitor/filesystem"),
        .package(name: "CapacitorHaptics", path: "../../../node_modules/@capacitor/haptics"),
        .package(name: "CapacitorKeyboard", path: "../../../node_modules/@capacitor/keyboard"),
        .package(name: "CapacitorStatusBar", path: "../../../node_modules/@capacitor/status-bar"),
        .package(name: "CapawesomeTeamCapacitorFileOpener", path: "../../../node_modules/@capawesome-team/capacitor-file-opener"),
        .package(name: "CapawesomeCapacitorFilePicker", path: "../../../node_modules/@capawesome/capacitor-file-picker")
    ],
    targets: [
        .target(
            name: "CapApp-SPM",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                .product(name: "CapacitorFirebaseAnalytics", package: "CapacitorFirebaseAnalytics"),
                .product(name: "CapacitorFirebaseApp", package: "CapacitorFirebaseApp"),
                .product(name: "CapacitorFirebaseAppCheck", package: "CapacitorFirebaseAppCheck"),
                .product(name: "CapacitorFirebaseCrashlytics", package: "CapacitorFirebaseCrashlytics"),
                .product(name: "CapacitorFirebaseFirestore", package: "CapacitorFirebaseFirestore"),
                .product(name: "CapacitorFirebaseFunctions", package: "CapacitorFirebaseFunctions"),
                .product(name: "CapacitorFirebaseMessaging", package: "CapacitorFirebaseMessaging"),
                .product(name: "CapacitorFirebasePerformance", package: "CapacitorFirebasePerformance"),
                .product(name: "CapacitorFirebaseRemoteConfig", package: "CapacitorFirebaseRemoteConfig"),
                .product(name: "CapacitorFirebaseStorage", package: "CapacitorFirebaseStorage"),
                .product(name: "CapacitorApp", package: "CapacitorApp"),
                .product(name: "CapacitorFilesystem", package: "CapacitorFilesystem"),
                .product(name: "CapacitorHaptics", package: "CapacitorHaptics"),
                .product(name: "CapacitorKeyboard", package: "CapacitorKeyboard"),
                .product(name: "CapacitorStatusBar", package: "CapacitorStatusBar"),
                .product(name: "CapawesomeTeamCapacitorFileOpener", package: "CapawesomeTeamCapacitorFileOpener"),
                .product(name: "CapawesomeCapacitorFilePicker", package: "CapawesomeCapacitorFilePicker")
            ]
        )
    ]
)
