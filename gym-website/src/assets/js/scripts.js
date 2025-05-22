// Importar lo necesario
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Configuración del proyecto
const firebaseConfig = {
  apiKey: "AIzaSyBSNkqpNBk8UAsSBfxUZvZ7VKf2Nn2sWOs",
  authDomain: "gym-website-d270f.firebaseapp.com",
  projectId: "gym-website-d270f",
  storageBucket: "gym-website-d270f.appspot.com",
  messagingSenderId: "207842263452",
  appId: "1:207842263452:web:b99cb7b8596d70e6560859"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Función para registrar compras en Firestore
async function registrarCompra(nombreProducto, precioProducto) {
  const usuario = auth.currentUser;

  if (!usuario) {
    alert("Debes iniciar sesión para realizar compras.");
    return;
  }

  try {
    await addDoc(collection(db, "compras"), {
      uid: usuario.uid,
      producto: nombreProducto,
      precio: precioProducto,
      fecha: serverTimestamp()
    });
    alert(`Compra registrada: ${nombreProducto} por ${precioProducto}€`);
  } catch (error) {
    console.error("Error al registrar la compra:", error);
    alert("No se pudo registrar la compra.");
  }
}

// ✅ Asociar eventos a botones con clase .comprar-btn
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".comprar-btn").forEach(boton => {
    boton.addEventListener("click", () => {
      const producto = boton.getAttribute("data-producto");
      const precio = parseFloat(boton.getAttribute("data-precio"));
      registrarCompra(producto, precio);
    });
  });
});
