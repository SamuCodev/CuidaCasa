<div align="center">

# 🏠 CuidaCasa

**`v0.4.0`**

Plataforma de servicios para el hogar

</div>

---

CuidaCasa es una PWA que conecta clientes con proveedores independientes de servicios para el hogar (limpieza, plomería, electricidad, jardinería) en Colombia — con solicitud geolocalizada, seguimiento en tiempo real y pago en línea. Proyecto formativo del Tecnólogo en Análisis y Desarrollo de Software (SENA).

## Tecnologías

**Frontend:** React 19 · Vite · React Router v7 · Leaflet / react-leaflet · @tabler/icons-react · CSS (custom properties, BEM) · vite-plugin-pwa

**Backend:** FastAPI · SQLAlchemy · Alembic · PostgreSQL

## Versionado

* ✅ **v0.1.0** — Estructura visual base: pantallas Home, Servicios, Solicitudes, Perfil, Login y Registro. Sistema de diseño con tokens CSS, tema oscuro y metodología BEM.
* ✅ **v0.2.0** — Enrutamiento con React Router (patrón Layout + Outlet) y soporte responsive para pantallas grandes.
* ✅ **v0.3.0** — Mapa interactivo integrado con Leaflet / OpenStreetMap. Configuración de PWA (manifest, íconos, `vite-plugin-pwa`).
* 🚧 **v0.4.0** — Backend inicial: FastAPI + PostgreSQL. Modelo `Usuario` en SQLAlchemy con su primera migración de Alembic ya aplicada. CRUD de usuarios funcionando en memoria, aún sin conectar a la base de datos real.
* ⏳ **v0.5.0** — Autenticación real de punta a punta: registro con verificación de correo, login por rol, conexión del CRUD a PostgreSQL.
* ⏳ **v0.6.0** — Estado e interactividad en el frontend (`useState`), reemplazando los datos mock por consumo real de la API.
* ⏳ **v0.7.0** — Modelos y endpoints completos para `CategoriaServicio` y `Solicitud`: publicar, listar y gestionar solicitudes de servicio.
* ⏳ **v0.8.0** — Geolocalización conectada de verdad: búsqueda de proveedores cercanos desde el backend (RF04).
* ⏳ **v0.9.0** — Cotización y pago en línea mediante pasarela en modo sandbox (RF06).
* ⏳ **v1.0.0** — Funcionamiento básico completo: ciclo de vida de una solicitud de principio a fin (publicar, aceptar/rechazar, cancelar, pagar), seguimiento del estado en tiempo real (RF08) e historial de servicios (RF10).
* ⏳ **v2.0.0** — Calificaciones y comentarios (RF09), validación de instalación de la PWA en dispositivos móviles, panel básico de administrador.
* ⏳ **v3.0.0** — Endurecimiento del sistema: pruebas automatizadas, manejo de errores robusto, y preparación para despliegue.

## Correr el proyecto

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt   # o el gestor de entornos que uses
uvicorn main:app --reload
```

## Documentación

SRS completo (IEEE 830), casos de uso, historias de usuario, backlog priorizado y matriz de trazabilidad en el espacio de Notion del proyecto.

## Equipo

Samuel Andrés David Osorio
Instructor: Ing. Luis Eladio Porras Camargo — Ficha 3408700
