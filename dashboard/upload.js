document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "../auth/login.html";
    }
    loadFiles();
});

function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    if (fileInput.files.length === 0) {
        alert("Please select a file to upload.");
        return;
    }

    const file = fileInput.files[0];
    const userId = localStorage.getItem("userId") || "guest";
    const storageRef = storage.ref(`uploads/${userId}/${file.name}`);

    const uploadTask = storageRef.put(file);

    uploadTask.on('state_changed',
        (snapshot) => {
            console.log("Uploading: " + snapshot.bytesTransferred);
        },
        (error) => {
            console.error("Upload failed:", error);
        },
        () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                db.collection("files").add({
                    userId: userId,
                    name: file.name,
                    url: downloadURL,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                loadFiles();
            });
        }
    );
}

function loadFiles() {
    const fileList = document.getElementById("fileList");
    fileList.innerHTML = "";
    const userId = localStorage.getItem("userId") || "guest";

    db.collection("files").where("userId", "==", userId).orderBy("timestamp", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const file = doc.data();
                let listItem = document.createElement("li");
                listItem.innerHTML = `<a href="${file.url}" target="_blank">${file.name}</a>
                                      <button onclick="deleteFile('${doc.id}')">Delete</button>`;
                fileList.appendChild(listItem);
            });
        });
}

function deleteFile(fileId) {
    db.collection("files").doc(fileId).delete().then(() => {
        loadFiles();
    }).catch((error) => {
        console.error("Error deleting file:", error);
    });
}

function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userId");
    window.location.href = "../index.html";
}
