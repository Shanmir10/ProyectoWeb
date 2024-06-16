import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";


const firebaseConfig = {
    apiKey: "AIzaSyC9-0wfVwduQSZW0LnytRLqzcZiUcFiYe4",
    authDomain: "procampoweb-3bf5a.firebaseapp.com",
    databaseURL: "https://procampoweb-3bf5a-default-rtdb.firebaseio.com",
    projectId: "procampoweb-3bf5a",
    storageBucket: "procampoweb-3bf5a.appspot.com",
    messagingSenderId: "163347514345",
    appId: "1:163347514345:web:50825a06872e8bd2fa8178",
    measurementId: "G-HEQXXD58ZZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Firestore = getFirestore(app);

const Clientes = document.getElementById("Clientes");

const inputdni = document.getElementById("dni");

Clientes.addEventListener("submit", async function (event) {
    event.preventDefault();

    const dni = inputdni.value;

    try {
        await addDoc(collection(Firestore, "Clientes"), {
            Usuarios : dni
        });
    }   catch (error) {
        console.error("Error al agregar datos", error);
    }
});