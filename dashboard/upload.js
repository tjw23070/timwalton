document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "../auth/login.html";
    }

    loadFiles();
});

function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");

    if (fileInput.files.length === 0) {
        alert("Please select a file to upload.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const fileData = {
            name: file.name,
            content: e.target.result
        };

        let storedFiles = JSON.parse(localStorage.getItem("files")) || [];
        storedFiles.push(fileData);
        localStorage.setItem("files", JSON.stringify(storedFiles));

        loadFiles();
    };

    reader.readAsDataURL(file);
}

function loadFiles() {
    const fileList = document.getElementById("fileList");
    fileList.innerHTML = "";

    let storedFiles = JSON.parse(localStorage.getItem("files")) || [];

    storedFiles.forEach((file, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${file.content}" download="${file.name}">${file.name}</a>
                              <button onclick="deleteFile(${index})">Delete</button>`;
        fileList.appendChild(listItem);
    });
}

function deleteFile(index) {
    let storedFiles = JSON.parse(localStorage.getItem("files")) || [];
    storedFiles.splice(index, 1);
    localStorage.setItem("files", JSON.stringify(storedFiles));
    loadFiles();
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "../index.html";
}
