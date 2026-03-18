# Educase

A React Native mobile application for browsing and searching products.

## App Functionality

Educase is a product catalog app that allows users to:
- Browse a paginated list of products fetched from a dummy API
- Search products by title with real-time filtering
- View detailed product information including images, descriptions, and pricing
- Pull-to-refresh to reload the product list
- Navigate between home list and product detail screens

## How to Run the Project

### Prerequisites
- Node.js >= 22.11.0
- React Native development environment set up (Android Studio for Android, Xcode for iOS)
- For iOS: Ruby bundler and CocoaPods

### Installation
1. Clone the repository and navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start Metro bundler:
   ```bash
   npm start
   ```

2. In a new terminal, run on Android:
   ```bash
   npm run android
   ```

3. Or run on iOS (first time setup):
   ```bash
   bundle install
   bundle exec pod install
   npm run ios
   ```

## Key Technical Decisions

- **React Native + TypeScript**: Cross-platform mobile development with type safety
- **Redux Toolkit**: State management for product data, loading states, and pagination
- **React Navigation**: Native stack navigation for screen transitions
- **Responsive Design**: Custom scaling utility for consistent UI across devices
- **Debounced Search**: Custom hook to optimize search performance and reduce API calls
- **Error Handling**: Comprehensive error states with retry functionality
- **Image Fallback**: Graceful handling of failed image loads with placeholder
- **Pagination**: Infinite scroll with load-more functionality

## Improvements with More Time

- **Caching**: Implement persistent storage for offline product browsing
- **UI/UX Enhancements**: Add animations, better styling, dark mode support
- **Advanced Search**: Filter by category, price range, ratings
- **Favorites**: Allow users to save favorite products
- **Testing**: Add comprehensive unit and integration tests
- **Performance**: Implement virtualization for large lists, image optimization
- **Authentication**: User accounts and personalized experiences
- **Push Notifications**: Alerts for new products or price changes


