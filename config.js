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
const app = initializeApp(firebaseConfig);
