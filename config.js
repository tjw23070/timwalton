// Function to enforce file size limit
function isFileSizeValid(file) {
    return file.size / (1024 * 1024) <= config.maxFileSizeMB;
}

const firebaseConfig = {
  apiKey: "AIzaSyBCfkxWYFn5exq5fhdePGKvymsLZevoqHo",
  authDomain: "storage-13e02.firebaseapp.com",
  projectId: "storage-13e02",
  storageBucket: "storage-13e02.firebasestorage.app",
  messagingSenderId: "501311603008",
  appId: "1:501311603008:web:e17953cf00537751743aa5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();

// Basic App Configuration
const appConfig = {
    siteTitle: "My Secure File Storage",
    maxFileSizeMB: 10,  // Max file upload size (in MB)
    allowFileTypes: ["image/png", "image/jpeg", "application/pdf", "text/plain"], // Allowed file types
};

// Function to check file type
function isFileTypeAllowed(file) {
    return appConfig.allowFileTypes.includes(file.type);
}

// Function to enforce file size limit
function isFileSizeValid(file) {
    return file.size / (1024 * 1024) <= appConfig.maxFileSizeMB;
}

// Function to securely generate unique file names (Prevents guessing attacks)
function generateSecureFileName(originalName) {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 8);
    const fileExtension = originalName.split('.').pop();
    return `${timestamp}-${randomString}.${fileExtension}`;
}

// Function to check login credentials (Basic Authentication)
function checkLogin(username, password) {
    const validUser = "admin";
    const validPass = "password123"; // Change this for security

    return username === validUser && password === validPass;
}
