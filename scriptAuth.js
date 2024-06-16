// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Firestore = getFirestore(app);
const analytics = getAnalytics(app);

//Declaro Formulario
const registroForm = document.getElementById("registroForm");

//Declaro Datos
const inputtipoDocument = document.getElementById("tipoDocumento");
const inputnumeroDocumento = document.getElementById("numeroDocumento");
const inputnombres = document.getElementById("nombres");
const inputapellidoPaterno = document.getElementById("apellidoPaterno");
const inputapellidoMaterno = document.getElementById("apellidoMaterno");
const inputcorreoElectronico = document.getElementById("correoElectronico");
const inputcontrasena = document.getElementById("contrasena");
const inputconfirmarContrasena = document.getElementById("confirmarContrasena");

registroForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const tipoDocumento = inputtipoDocument.value;
    const numeroDocumento = inputnumeroDocumento.value;
    const nombres = inputnombres.value;
    const apellidoPaterno = inputapellidoPaterno.value;
    const apellidoMaterno = inputapellidoMaterno.value;
    const correoElectronico = inputcorreoElectronico.value;
    const contrasena = inputcontrasena.value;
    const confirmarContrasena = inputconfirmarContrasena.value;

    try {
        await addDoc(collection(Firestore, "DatosClientes"), {
            TipodeDocumento : tipoDocumento,
            NumerodeDocumento : numeroDocumento,
            Nombres : nombres,
            ApellidoPaterno : apellidoPaterno,
            ApellidoMaterno : apellidoMaterno,
            Email : correoElectronico,
            Contraseña : contrasena,
            ConfirmarContrasena : confirmarContrasena

        });
    } catch (error) {
        console.error("Error al agregar datos", error);
    }
});