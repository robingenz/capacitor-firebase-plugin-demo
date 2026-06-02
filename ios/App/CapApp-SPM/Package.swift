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
        .package(name: "CapacitorFilesystem", path: "../../../node_modules/@capacitor/filesystem"),
        .package(name: "CapacitorHaptics", path: "../../../node_modules/@capacitor/haptics"),
        .package(name: "CapacitorKeyboard", path: "../../../node_modules/@capacitor/keyboard"),
        .package(name: "CapacitorStatusBar", path: "../../../node_modules/@capacitor/status-bar"),
        .package(name: "CapawesomeTeamCapacitorFileOpener", path: "../../../node_modules/@capawesome-team/capacitor-file-opener"),
        .package(name: "CapawesomeCapacitorFilePicker", path: "../../../node_modules/@capawesome/capacitor-file-picker"),
        .package(name: "CapawesomeCapacitorFirebaseAnalytics", path: "../../../node_modules/@capawesome/capacitor-firebase-analytics"),
        .package(name: "CapawesomeCapacitorFirebaseApp", path: "../../../node_modules/@capawesome/capacitor-firebase-app"),
        .package(name: "CapawesomeCapacitorFirebaseAppCheck", path: "../../../node_modules/@capawesome/capacitor-firebase-app-check"),
        .package(name: "CapawesomeCapacitorFirebaseCrashlytics", path: "../../../node_modules/@capawesome/capacitor-firebase-crashlytics"),
        .package(name: "CapawesomeCapacitorFirebaseFirestore", path: "../../../node_modules/@capawesome/capacitor-firebase-firestore"),
        .package(name: "CapawesomeCapacitorFirebaseFunctions", path: "../../../node_modules/@capawesome/capacitor-firebase-functions"),
        .package(name: "CapawesomeCapacitorFirebaseMessaging", path: "../../../node_modules/@capawesome/capacitor-firebase-messaging"),
        .package(name: "CapawesomeCapacitorFirebasePerformance", path: "../../../node_modules/@capawesome/capacitor-firebase-performance"),
        .package(name: "CapawesomeCapacitorFirebaseRemoteConfig", path: "../../../node_modules/@capawesome/capacitor-firebase-remote-config"),
        .package(name: "CapawesomeCapacitorFirebaseStorage", path: "../../../node_modules/@capawesome/capacitor-firebase-storage")
    ],
    targets: [
        .target(
            name: "CapApp-SPM",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                .product(name: "CapacitorFilesystem", package: "CapacitorFilesystem"),
                .product(name: "CapacitorHaptics", package: "CapacitorHaptics"),
                .product(name: "CapacitorKeyboard", package: "CapacitorKeyboard"),
                .product(name: "CapacitorStatusBar", package: "CapacitorStatusBar"),
                .product(name: "CapawesomeTeamCapacitorFileOpener", package: "CapawesomeTeamCapacitorFileOpener"),
                .product(name: "CapawesomeCapacitorFilePicker", package: "CapawesomeCapacitorFilePicker"),
                .product(name: "CapawesomeCapacitorFirebaseAnalytics", package: "CapawesomeCapacitorFirebaseAnalytics"),
                .product(name: "CapawesomeCapacitorFirebaseApp", package: "CapawesomeCapacitorFirebaseApp"),
                .product(name: "CapawesomeCapacitorFirebaseAppCheck", package: "CapawesomeCapacitorFirebaseAppCheck"),
                .product(name: "CapawesomeCapacitorFirebaseCrashlytics", package: "CapawesomeCapacitorFirebaseCrashlytics"),
                .product(name: "CapawesomeCapacitorFirebaseFirestore", package: "CapawesomeCapacitorFirebaseFirestore"),
                .product(name: "CapawesomeCapacitorFirebaseFunctions", package: "CapawesomeCapacitorFirebaseFunctions"),
                .product(name: "CapawesomeCapacitorFirebaseMessaging", package: "CapawesomeCapacitorFirebaseMessaging"),
                .product(name: "CapawesomeCapacitorFirebasePerformance", package: "CapawesomeCapacitorFirebasePerformance"),
                .product(name: "CapawesomeCapacitorFirebaseRemoteConfig", package: "CapawesomeCapacitorFirebaseRemoteConfig"),
                .product(name: "CapawesomeCapacitorFirebaseStorage", package: "CapawesomeCapacitorFirebaseStorage")
            ]
        )
    ]
)
