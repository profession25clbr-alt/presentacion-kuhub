# KuHub — Presentación

Presentación interactiva del sistema **KuHub** (gestión de bodega, recetas y pedidos para la Escuela de Gastronomía de DuocUC), construida como una aplicación standalone con React + Vite. Se usa para defender el proyecto: cada slide es un componente de React y se navega con teclado, clic o puntos de navegación.

> El sistema KuHub en sí (backend, frontend y despliegue) está en el repositorio `KuHubProject`; este repositorio contiene **solo la presentación**.

---

## Tabla de contenidos

- [Slides](#slides)
- [Navegación](#navegación)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Requisitos previos](#requisitos-previos)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Cómo agregar o editar un slide](#cómo-agregar-o-editar-un-slide)
- [Autores](#autores)
- [Licencia](#licencia)

---

## Slides

| # | Slide | Contenido |
|---|---|---|
| 1 | **Apertura** | Presentación del cliente (Escuela de Gastronomía DuocUC) y del equipo de desarrollo |
| 2 | **Problema** | Causas y efectos (diagrama Ishikawa) de la gestión manual en Excel |
| 3 | **Objetivos** | Objetivo general y específicos |
| 4 | **Alcance** | Entregables, supuestos y restricciones del proyecto y del producto |
| 5 | **Metodología** | Ciclo iterativo con el cliente |
| 6 | **Arquitectura** | Arquitectura, roles y seguridad |
| 7 | **Tecnología** | Justificación de Cloud y requerimientos |
| 8 | **Flujo** | Flujo del proceso y demostración |
| 9 | **Pruebas** | Plan de pruebas y resultados (125 tests con Vitest) |
| 10 | **Conclusiones** | Reflexión final del equipo |

---

## Navegación

- **Flechas del teclado** `←` `→` `↑` `↓`.
- **Clic** en la mitad derecha de la pantalla para avanzar, en la izquierda para retroceder.
- **Puntos** en la parte inferior para ir directo a un slide.

---

## Tecnologías utilizadas

| Tecnología | Versión | Rol |
|---|---|---|
| React | 18.3 | Framework UI |
| TypeScript | 5.7 | Tipado estático |
| Vite | 6.0 | Build tool y servidor de desarrollo |
| Tailwind CSS | 4.1 (plugin `@tailwindcss/vite`) | Estilos |
| Framer Motion | 11.18 | Transiciones entre slides y animaciones |
| HeroUI (`@heroui/react`) | 2.8 | Componentes de interfaz |
| @iconify/react | 6.0 | Íconos |

---

## Requisitos previos

- **Node.js** (versión LTS reciente) y **npm**.

---

## Instalación y ejecución

```bash
git clone https://github.com/profession25clbr-alt/presentacion-kuhub.git
cd presentacion-kuhub
npm install

npm run dev       # servidor de desarrollo con recarga en caliente
npm run build     # tsc --noCheck + vite build → dist/
npm run preview   # sirve dist/ localmente
```

El resultado de `npm run build` es un sitio estático (`dist/`) que se puede abrir desde cualquier hosting de archivos estáticos.

---

## Estructura del proyecto

```
presentacion-kuhub/
├── index.html
├── src/
│   ├── main.tsx                # arranque de React
│   ├── App.tsx                 # monta la presentación
│   ├── PresentacionPage.tsx    # todos los slides + lista SLIDES + navegación
│   ├── index.css               # Tailwind y estilos globales
│   └── assets/Logo_DuocUC.webp
├── vite.config.ts, tsconfig.json
└── package.json
```

---

## Cómo agregar o editar un slide

Cada slide es un componente dentro de `src/PresentacionPage.tsx`. El orden y los puntos de navegación salen de la constante `SLIDES` (`id`, `label` y `component`): para agregar uno, crear el componente y sumar su entrada en esa lista en la posición deseada.

---

## Autores

| Nombre | Área | Responsabilidades |
|---|---|---|
| **Matheus de Lara** | Fullstack | Diseño y desarrollo de la presentación. |

Equipo del proyecto KuHub: ver el slide de Apertura.

---

## Licencia

Código propietario. Todos los derechos reservados.
