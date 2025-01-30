// Configuration file for the site
const config = {
    siteTitle: "My Secure File Storage",
    adminUsername: "admin",
    adminPassword: "password123",  // Change this!
    maxFileSizeMB: 5,  // Max file upload size (in MB)
};

// Function to check login credentials
function checkLogin(username, password) {
    return username === config.adminUsername && password === config.adminPassword;
}

// Function to enforce file size limit
function isFileSizeValid(file) {
    return file.size / (1024 * 1024) <= config.maxFileSizeMB;
}
