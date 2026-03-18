# React Native Product Explorer App

## Overview

This is a **React Native CLI-based mobile application** built as part of an assignment to demonstrate real-world app development practices.

The app fetches product data from a public API and provides features like search, pagination, navigation, and responsive UI.

---

## Features

* Product listing from API
* Search functionality with debouncing
* Infinite scrolling (pagination)
* Global state management using Redux Toolkit
* Performance optimized FlatList
* Fully responsive UI (supports multiple screen sizes)
* Image loading with fallback handling
* Pull-to-refresh support
* Error handling and empty states
* Navigation between screens (Home → Details)

---

## Tech Stack

* React Native (CLI)
* Redux Toolkit
* React Navigation
* JavaScript (ES6+)
* Fetch API
* Navigation

---

## Folder Structure

```
src/
 ├── api/            # API service layer
 ├── components/     # Reusable UI components
 ├── hooks/          # Custom hooks (debounce)
 ├── redux/          # Redux store & slices
 ├── screens/        # App screens
 ├── utils/          # Helpers (responsive scaling)
```

---

## APK Download

**Download APK:**
(Google Drive link):

https://drive.google.com/file/d/10bYWRX13aBF-vQM8jVAAXbC2BIM6Id7F/view?usp=sharing

> This APK can be installed directly on any Android device.

---

## How to Run Locally

### 1. Clone the repository

```
git clone https://github.com/Naveen05-lang/EDUCASE.git
cd EDUCASE
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Start Metro

```
npx react-native start
```

---

### 4. Run Android app

```
npx react-native run-android
```

---

## Key Technical Decisions

- **React Native + TypeScript**: Cross-platform mobile development with type safety
- **Redux Toolkit**: State management for product data, loading states, and pagination
- **React Navigation**: Native stack navigation for screen transitions
- **Responsive Design**: Custom scaling utility for consistent UI across devices
- **Debounced Search**: Custom hook to optimize search performance and reduce API calls
- **Error Handling**: Comprehensive error states with retry functionality
- **Image Fallback**: Graceful handling of failed image loads with placeholder
- **Pagination**: Infinite scroll with load-more functionality


## Deployment

In React Native (CLI), apps are not deployed via a public URL like web applications. Instead, they are distributed as installable builds such as APK (Android) or IPA (iOS).

For this assignment, I have provided:

* A production-ready APK file that can be installed directly on an Android device
* A complete GitHub repository with the source code

If required, this app can also be deployed to the Google Play Store or Apple App Store by configuring signing and store metadata.

---

## Improvements with More Time

- **Caching**: Implement persistent storage for offline product browsing
- **UI/UX Enhancements**: Add animations, better styling, dark mode support
- **Advanced Search**: Filter by category, price range, ratings
- **Favorites**: Allow users to save favorite products
- **Testing**: Add comprehensive unit and integration tests
- **Performance**: Implement virtualization for large lists, image optimization
- **Authentication**: User accounts and personalized experiences
- **Push Notifications**: Alerts for new products or price changes

## Conclusion

This project demonstrates the ability to build scalable, performant, and production-ready mobile applications using React Native.

---



