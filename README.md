# 🛒 ToolsStore - E-commerce App

Aplicación web tipo e-commerce desarrollada con Angular, enfocada en la venta de productos tecnológicos, accesorios y herramientas industriales.

Este proyecto implementa buenas prácticas de desarrollo frontend moderno, manejo de estado con signals y experiencia de usuario optimizada.

---

## 🚀 Demo

🔗 Próximamente desplegado en Vercel / Netlify

---

## 🧠 Características principales

- 📦 Listado dinámico de productos desde API
- 🛍️ Carrito de compras con estado global
- 🔔 Notificaciones UX (toast) al agregar productos
- ⏳ Loading state con spinner
- 📱 Diseño responsive (mobile-first)
- 💬 Botón de contacto vía WhatsApp
- 📄 Página de detalle de producto
- 🧩 Arquitectura modular (Angular standalone components)

---

## 🛠️ Tecnologías utilizadas

### Frontend
- Angular 17 (Standalone Components)
- TypeScript
- TailwindCSS
- Signals (state management)

### Backend
- Node.js
- Express
- Supabase (PostgreSQL)

---

## 📁 Estructura del proyecto
src/app/
│
├── domains/
│ ├── products/ # Listado y detalle de productos
│ └── shared/ # Componentes, servicios, modelos reutilizables
│
├── components/ # UI global
├── services/ # Lógica de negocio
└── models/ # Tipado de datos


---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd store

2. Instalar dependencias
npm install
3. Ejecutar en desarrollo
ng serve

Ir a:

http://localhost:4200
🔌 Backend

El frontend consume una API construida con Express y Supabase.

Endpoints principales:

GET /products
GET /products/:id
GET /categories
🧪 Estado del proyecto

🟡 En desarrollo

Próximas funcionalidades:

🧾 Checkout con formulario de cliente
💾 Persistencia de órdenes en base de datos
📩 Notificación por correo
💳 Integración de pagos
📊 Panel administrativo (opcional)
🎯 Objetivo del proyecto

Este proyecto hace parte de mi portafolio como:

Ingeniero de telecomunicaciones
Desarrollador Full Stack
Analista de datos

Buscando demostrar habilidades en:

Desarrollo frontend moderno
Integración con APIs
Experiencia de usuario (UX/UI)
Arquitectura escalable

🤝 Contribuciones

Las contribuciones son bienvenidas.
Puedes hacer fork del proyecto y enviar un pull request.

📬 Contacto

Si tienes preguntas o quieres colaborar:

WhatsApp: disponible en la aplicación
Email: (agrega tu correo aquí)
📄 Licencia

Este proyecto es de uso personal.
