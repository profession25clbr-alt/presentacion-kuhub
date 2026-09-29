import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import logoDuoc from './assets/Logo_DuocUC.webp';

type Direction = 1 | -1;

const slideVariants = {
  enter: (dir: Direction) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit:   (dir: Direction) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }),
};

// ─── Slide 1: Apertura y presentación del cliente ─────────────────────────────

const integrantes = [
  { nombre: 'Matheus de Lara',  rol: 'Fullstack · Arquitectura · Infraestructura' },
  { nombre: 'Francisco Gomez',  rol: 'Backend · Base de datos · Cliente' },
  { nombre: 'Benjamin Aravena', rol: 'Frontend · UX · Diseño' },
];

const SlideApertura: React.FC = () => (
  <div className="flex h-full bg-white text-[#1A1A1A] relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFB800]/8 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFB800]/5 rounded-full -translate-x-1/3 translate-y-1/3" />
    </div>

    <motion.div
      className="relative z-10 flex flex-col justify-center flex-1 px-16 gap-7"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <img src={logoDuoc} alt="DuocUC" className="h-14 w-auto object-contain self-start" />

      <Chip className="w-fit bg-[#FFB800]/20 text-[#1A1A1A] text-sm" size="md">Apertura y Presentación del Cliente</Chip>

      <div>
        <h1 className="text-7xl font-black tracking-tight text-[#1A1A1A] leading-none">KuHub</h1>
        <p className="mt-4 text-2xl font-light text-gray-500 leading-snug">
          Sistema de Gestión de<br />Bodega e Inventario
        </p>
      </div>

      <div className="w-20 h-1.5 bg-[#FFB800] rounded-full" />

      <div className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 max-w-md">
        <div className="w-11 h-11 rounded-2xl bg-[#FFB800]/15 flex items-center justify-center flex-shrink-0">
          <Icon icon="lucide:chef-hat" width={22} color="#B8860B" />
        </div>
        <div>
          <p className="text-base font-bold text-[#1A1A1A]">Cliente: Escuela de Gastronomía</p>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">DuocUC — gestión de insumos y bodega para las prácticas de cocina de la escuela.</p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-gray-400 text-base">Escuela de Gastronomía · DuocUC</span>
        <span className="text-gray-300 text-sm">Taller de Proyecto · v1.0.8 · 2026</span>
      </div>
    </motion.div>

    <div className="relative z-10 w-px bg-gray-100 my-16" />

    <motion.div
      className="relative z-10 flex flex-col justify-center w-[380px] px-12 gap-6"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <div className="mb-2">
        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Equipo de desarrollo</p>
        <div className="w-8 h-0.5 bg-[#FFB800]" />
      </div>

      {integrantes.map((p, i) => (
        <motion.div
          key={p.nombre}
          className="flex items-start gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + 0.15 * i }}
        >
          <div className="w-10 h-10 rounded-full bg-[#FFB800]/15 border border-[#FFB800]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon icon="lucide:user" width={18} color="#B8860B" />
          </div>
          <div>
            <p className="text-base font-bold text-[#1A1A1A]">{p.nombre}</p>
            <p className="text-sm text-gray-400 mt-0.5">{p.rol}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

// ─── Slide 2: Problema con causas y efectos (Ishikawa) ─────────────────────────

const causasIshikawa = [
  {
    categoria: 'Proceso',
    icon: 'lucide:calendar-x',
    color: '#8B5CF6',
    causas: ['Pedidos limitados a 2 semanas por dificultad de consolidar datos', 'Sin control formal de sobrantes ni mermas'],
  },
  {
    categoria: 'Herramientas',
    icon: 'lucide:files',
    color: '#3B82F6',
    causas: ['Cada área con su propio Excel, sin conexión entre sí', 'Sin plataforma centralizada de gestión'],
  },
  {
    categoria: 'Datos',
    icon: 'lucide:table-2',
    color: '#EF4444',
    causas: ['Inventario en columnas manuales, sin historial estructurado', 'Stock real desconocido en todo momento'],
  },
  {
    categoria: 'Personas',
    icon: 'lucide:scan-eye',
    color: '#10B981',
    causas: ['Verificación física constante por falta de confianza en los registros', 'Dependencia de una sola persona para consolidar información'],
  },
];

const SlideProblemaCausaEfecto: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full bg-white px-12 py-8">
    <motion.div className="w-full max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-6 text-center">
        <Chip className="mb-3 bg-[#FFB800]/20 text-[#1A1A1A] text-base" size="md">¿Por qué se desarrolló KuHub?</Chip>
        <h2 className="text-5xl font-bold text-[#1A1A1A]">Problema con Causas y Efectos</h2>
        <p className="mt-3 text-xl text-gray-500">Diagrama de causa-efecto: gestión manual y desconectada en Excel</p>
      </div>

      <div className="flex items-center gap-5">
        <div className="grid grid-cols-2 gap-4 flex-1">
          {causasIshikawa.map((c, i) => (
            <motion.div
              key={c.categoria}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.12 * (i + 1) }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${c.color}15` }}>
                  <Icon icon={c.icon} width={22} color={c.color} />
                </div>
                <span className="text-lg font-bold" style={{ color: c.color }}>{c.categoria}</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {c.causas.map((causa) => (
                  <li key={causa} className="text-base text-gray-600 leading-snug flex gap-2">
                    <span className="flex-shrink-0" style={{ color: c.color }}>·</span>{causa}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }} className="flex-shrink-0">
          <Icon icon="lucide:arrow-right" width={36} color="#D1D5DB" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.7 }}
          className="w-[240px] flex-shrink-0 bg-[#FFB800]/10 border-2 border-[#FFB800]/40 rounded-2xl p-6"
        >
          <div className="w-12 h-12 rounded-xl bg-[#FFB800]/25 flex items-center justify-center mb-3">
            <Icon icon="lucide:alert-triangle" width={24} color="#B8860B" />
          </div>
          <p className="text-lg font-bold text-[#1A1A1A] leading-snug">Gestión ineficiente del inventario y los pedidos</p>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

// ─── Slide 3: Objetivo general y específicos ───────────────────────────────────

const objetivosEspecificos = [
  { icon: 'lucide:book-open',       titulo: 'Administración de Insumos',      desc: 'Lista de insumos designados para cada asignatura.',            color: '#3B82F6' },
  { icon: 'lucide:file-plus',       titulo: 'Generación de Solicitudes',      desc: 'Solicitudes semanales creadas por los docentes.',               color: '#F59E0B' },
  { icon: 'lucide:layers',          titulo: 'Consolidado Semanal',            desc: 'Consolidado de solicitudes en el rango de la semana.',          color: '#8B5CF6' },
  { icon: 'lucide:truck',           titulo: 'Pedidos a Proveedores',          desc: 'Generación y seguimiento de pedidos a proveedores.',            color: '#EF4444' },
  { icon: 'lucide:package',         titulo: 'Administración de Inventario',   desc: 'Control de stock con trazabilidad de movimientos.',             color: '#10B981' },
  { icon: 'lucide:calendar-check',  titulo: 'Gestión de Pedidos Diarios',     desc: 'Seguimiento y entrega de pedidos día a día en bodega.',         color: '#5BC2E7' },
];

const SlideObjetivos: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full bg-white px-12 py-8">
    <motion.div className="w-full max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-5 text-center">
        <Chip className="mb-3 bg-[#FFB800]/20 text-[#1A1A1A] text-sm" size="md">Objetivos</Chip>
        <h2 className="text-5xl font-bold text-[#1A1A1A]">Objetivo General y Específicos</h2>
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="flex items-start gap-4 bg-[#FFB800]/8 border border-[#FFB800]/25 rounded-2xl p-5 mb-5">
        <div className="w-11 h-11 rounded-2xl bg-[#FFB800]/20 flex items-center justify-center flex-shrink-0">
          <Icon icon="lucide:target" width={22} color="#B8860B" />
        </div>
        <div>
          <p className="text-xs text-[#B8860B] uppercase font-bold tracking-wider mb-1">Objetivo general</p>
          <p className="text-base text-[#1A1A1A] leading-relaxed">
            Desarrollar un sistema de gestión de bodega e inventario que centralice y automatice los procesos hoy manejados manualmente en múltiples hojas de cálculo Excel por la Escuela de Gastronomía de DuocUC.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-4">
        {objetivosEspecificos.map((o, i) => (
          <motion.div key={o.titulo} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.08 * (i + 3) }}
            className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${o.color}15` }}>
              <Icon icon={o.icon} width={20} color={o.color} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1A1A1A] leading-snug">{o.titulo}</p>
              <p className="mt-1 text-xs text-gray-500 leading-relaxed">{o.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

// ─── Slide 4: Alcance del proyecto y del producto ──────────────────────────────

const alcanceColumnas = [
  {
    titulo: 'Entregables', icon: 'lucide:package-check', color: '#10B981',
    items: ['Sistema web (frontend + backend) funcional', 'Informes automáticos para proveedores', 'Documentación técnica y de usuario', 'Suite de pruebas automatizadas'],
  },
  {
    titulo: 'Supuestos', icon: 'lucide:circle-check', color: '#3B82F6',
    items: ['El personal cuenta con conexión a internet estable', 'Se realiza capacitación al equipo de bodega y docentes', 'Los datos históricos en Excel se migran manualmente al inicio'],
  },
  {
    titulo: 'Restricciones', icon: 'lucide:octagon-alert', color: '#EF4444',
    items: ['Alcance acotado a bodega e inventario, no a otros procesos de DuocUC', 'Tiempo de desarrollo limitado al periodo del taller de proyecto', 'Infraestructura Cloud con presupuesto acotado (Lightsail AWS)'],
  },
];

const SlideAlcance: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full bg-white px-12 py-8">
    <motion.div className="w-full max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-8 text-center">
        <Chip className="mb-3 bg-[#FFB800]/20 text-[#1A1A1A] text-sm" size="md">Alcance</Chip>
        <h2 className="text-5xl font-bold text-[#1A1A1A]">Alcance del Proyecto y del Producto</h2>
        <p className="mt-3 text-xl text-gray-500">Entregables, supuestos y restricciones</p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {alcanceColumnas.map((col, i) => (
          <motion.div key={col.titulo} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.12 * (i + 1) }}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${col.color}15` }}>
                <Icon icon={col.icon} width={22} color={col.color} />
              </div>
              <p className="text-lg font-bold text-[#1A1A1A]">{col.titulo}</p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {col.items.map((item) => (
                <li key={item} className="text-sm text-gray-500 leading-relaxed flex gap-2">
                  <Icon icon="lucide:minus" width={14} color={col.color} className="flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

// ─── Slide 5: Metodología y plan de trabajo ────────────────────────────────────

const metodoPasos = [
  {
    num: '01',
    icon: 'lucide:users',
    titulo: 'Reunión Semanal con el Cliente',
    desc: 'Encuentro directo para recolectar información completa o parcial del módulo en ejecución, asegurando que el desarrollo responda a la necesidad real.',
    color: '#5BC2E7',
  },
  {
    num: '02',
    icon: 'lucide:search',
    titulo: 'Búsqueda de la Solución',
    desc: 'Análisis del problema planteado por el cliente y definición de cómo resolverlo a través del sistema, priorizando lo que genera mayor valor.',
    color: '#F59E0B',
  },
  {
    num: '03',
    icon: 'lucide:calendar-check',
    titulo: 'Planificación Conjunta',
    desc: 'Planificación del módulo en conjunto con el cliente, alineando expectativas, alcance y tiempos de entrega de forma colaborativa.',
    color: '#43B02A',
  },
  {
    num: '04',
    icon: 'lucide:lightbulb',
    titulo: 'Mejoras como Sugerencias',
    desc: 'Presentación de mejoras implementadas al cliente como sugerencias. Su feedback cierra el ciclo e inicia el siguiente módulo.',
    color: '#FF585D',
  },
];

const SlideMetodologia: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full bg-white px-12 py-10">
    <motion.div className="w-full max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

      <div className="mb-8 text-center">
        <Chip className="mb-3 bg-[#FFB800]/20 text-[#1A1A1A] text-sm" size="md">Proceso de trabajo</Chip>
        <h2 className="text-5xl font-bold text-[#1A1A1A]">Metodología y Plan de Trabajo</h2>
        <p className="mt-3 text-xl text-gray-500">Ciclo iterativo por módulo · Trabajo directo con el cliente</p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {metodoPasos.map((p, i) => (
          <motion.div key={p.num}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.12 * (i + 1) }}
            className="flex gap-5 bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <div className="flex-shrink-0 pt-1">
              <span className="text-5xl font-black leading-none" style={{ color: `${p.color}40` }}>{p.num}</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${p.color}18` }}>
                  <Icon icon={p.icon} width={20} color={p.color} />
                </div>
                <p className="text-lg font-bold text-[#1A1A1A] leading-snug">{p.titulo}</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  </div>
);

// ─── Slide 6: Arquitectura, roles y seguridad ──────────────────────────────────

const arquitecturaBloques = [
  {
    titulo: 'Arquitectura', icon: 'lucide:layers', color: '#3B82F6',
    items: [
      'Monolito modular: un backend Spring Boot con 9 módulos de dominio',
      'Frontend React desacoplado, 100% vía API REST',
      'Lecturas complejas: JSON armado en PostgreSQL (json_agg/jsonb_agg), sin instanciar miles de entidades',
      'Elegido sobre microservicios: ~100 usuarios internos, equipo de 3 personas',
    ],
  },
  {
    titulo: 'Roles', icon: 'lucide:users-round', color: '#8B5CF6',
    items: [
      '7 roles del sistema con matriz de permisos dinámica',
      'Un admin cambia permisos desde la interfaz (/gestion-roles)',
      'El cambio aplica al instante, sin redeploy',
      'Frontend solo oculta UI según permisos — eso es UX, no seguridad',
    ],
  },
  {
    titulo: 'Seguridad', icon: 'lucide:shield-check', color: '#10B981',
    items: [
      'JWT firmado con HMAC: nadie lo manipula ni falsifica sin la clave',
      'Sliding expiration: se renueva en cada petición activa',
      'Refresh token de 30 días en cookie HttpOnly + base de datos',
      'Autorización real en el backend: Spring Security (lecturas) + interceptor de matriz en caliente (escrituras)',
      'Rate limiting: 100 peticiones/min por IP, 429 si se excede',
      'Base de datos aislada en red privada (VPC), todo el tráfico cifrado con TLS',
    ],
  },
];

const SlideArquitectura: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full bg-white px-12 py-7">
    <motion.div className="w-full max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-5 text-center">
        <Chip className="mb-3 bg-[#FFB800]/20 text-[#1A1A1A] text-sm" size="md">Arquitectura</Chip>
        <h2 className="text-5xl font-bold text-[#1A1A1A]">Arquitectura, Roles y Seguridad</h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {arquitecturaBloques.map((b, i) => (
          <motion.div key={b.titulo} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.12 * (i + 1) }}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${b.color}15` }}>
                <Icon icon={b.icon} width={20} color={b.color} />
              </div>
              <p className="text-base font-bold text-[#1A1A1A]">{b.titulo}</p>
            </div>
            <ul className="flex flex-col gap-2">
              {b.items.map((item) => (
                <li key={item} className="text-xs text-gray-500 leading-relaxed flex gap-1.5">
                  <Icon icon="lucide:minus" width={12} color={b.color} className="flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

// ─── Slide 7: Justificación de la tecnología (Cloud) y requerimientos ─────────

const justificacionStack = [
  { tech: 'Java 21 (LTS)',        razon: 'Experiencia del equipo y estabilidad de un LTS — compatibilidad garantizada con todo el ecosistema (ej. Lombok).' },
  { tech: 'Spring Boot',          razon: 'Seguridad, acceso a datos y validación integrados, sin reinventar nada.' },
  { tech: 'PostgreSQL 16',        razon: 'Más potente que MySQL/Oracle para lo que necesitamos: JSON nativo, enums y particionamiento.' },
  { tech: 'React + TS + Vite',    razon: 'Tipado estático y velocidad de desarrollo (HMR instantáneo).' },
  { tech: 'Docker + Compose',     razon: 'Entornos reproducibles, deploy consistente de dev a producción.' },
  { tech: 'GitHub Actions',       razon: 'CI/CD integrado al repo, sin infraestructura extra de build.' },
];

const infraestructuraCloud = [
  'Dos instancias AWS Lightsail: aplicación (Docker: frontend + backend) y base de datos, separadas',
  'Conectadas por VPC Peering privado — la base de datos no está expuesta a internet',
  'TLS con Let\'s Encrypt (Certbot), renovación automática cada 60 días',
  'CI/CD disparado por tag de git — K*.*.* pruebas, PK*.*.* producción — con Docker multistage',
];

const SlideJustificacionCloud: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full bg-white px-12 py-7">
    <motion.div className="w-full max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-5 text-center">
        <Chip className="mb-3 bg-[#FFB800]/20 text-[#1A1A1A] text-sm" size="md">Tecnología</Chip>
        <h2 className="text-5xl font-bold text-[#1A1A1A]">Justificación de la Tecnología (Cloud) y Requerimientos</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
          className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon icon="lucide:layers" width={22} color="#B8860B" />
            <h3 className="text-lg font-bold text-[#1A1A1A]">Justificación del Stack</h3>
          </div>
          <div className="flex flex-col gap-2.5">
            {justificacionStack.map((r) => (
              <div key={r.tech} className="bg-white rounded-xl px-4 py-2.5 border border-gray-100">
                <p className="text-sm font-bold text-[#1A1A1A]">{r.tech}</p>
                <p className="text-xs text-gray-500 leading-snug mt-0.5">{r.razon}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}
          className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon icon="lucide:cloud" width={22} color="#B8860B" />
            <h3 className="text-lg font-bold text-[#1A1A1A]">Infraestructura Cloud — AWS Lightsail</h3>
          </div>
          <ul className="flex flex-col gap-3">
            {infraestructuraCloud.map((item) => (
              <li key={item} className="flex gap-2.5 bg-white rounded-xl px-4 py-3 border border-gray-100">
                <Icon icon="lucide:check" width={16} color="#B8860B" className="flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
            <Icon icon="lucide:info" width={14} />
            <span>Costo fijo y predecible, simple de administrar frente a EC2/EKS.</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

// ─── Slide 8: Flujo del proceso y demostración (diagrama de secuencia) ────────

const actoresSecuencia = [
  { nombre: 'Docente',            icon: 'lucide:user-check',      color: '#5BC2E7' },
  { nombre: 'Sistema KuHub',      icon: 'lucide:server',          color: '#FFB800' },
  { nombre: 'Gestor de Pedidos',  icon: 'lucide:clipboard-list',  color: '#43B02A' },
  { nombre: 'Proveedor',          icon: 'lucide:truck',           color: '#6366F1' },
  { nombre: 'Encargado de Bodega',icon: 'lucide:warehouse',       color: '#AC4FC6' },
];

const mensajesSecuencia = [
  { from: 0, to: 1, label: 'Crea solicitud semanal por asignatura' },
  { from: 1, to: 0, label: 'Solicitud registrada · PENDIENTE', dashed: true },
  { from: 2, to: 1, label: 'Revisa y aprueba / rechaza solicitudes' },
  { from: 2, to: 1, label: 'Consolida pedido (suma por producto)' },
  { from: 1, to: 3, label: 'Envía pedido consolidado' },
  { from: 3, to: 4, label: 'Entrega los productos' },
  { from: 4, to: 1, label: 'Confirma recepción → actualiza stock' },
  { from: 1, to: 0, label: 'Insumos listos para el día de clase', dashed: true },
];

const N_ACTORES = actoresSecuencia.length;

const SlideFlujo: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full bg-white px-10 py-5">
    <motion.div className="w-full max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-3 text-center">
        <Chip className="mb-2 bg-[#FFB800]/20 text-[#1A1A1A] text-sm" size="md">Flujo principal</Chip>
        <h2 className="text-5xl font-bold text-[#1A1A1A]">Flujo del Proceso y Demostración</h2>
        <p className="mt-2 text-lg text-gray-500">Diagrama de secuencia: de la solicitud del docente al día de clase</p>
      </div>

      <div className="relative">
        {/* Lifelines verticales */}
        <div className="absolute left-0 right-0" style={{ top: 62, bottom: 0 }}>
          <div className="grid h-full" style={{ gridTemplateColumns: `repeat(${N_ACTORES}, 1fr)` }}>
            {actoresSecuencia.map((a) => (
              <div key={a.nombre} className="flex justify-center h-full">
                <div className="w-px h-full" style={{ backgroundColor: `${a.color}35`, backgroundImage: `repeating-linear-gradient(to bottom, ${a.color}80 0, ${a.color}80 4px, transparent 4px, transparent 8px)`, width: 2 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Encabezados de actores */}
        <div className="relative grid mb-2" style={{ gridTemplateColumns: `repeat(${N_ACTORES}, 1fr)` }}>
          {actoresSecuencia.map((a, i) => (
            <motion.div key={a.nombre} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}
              className="flex flex-col items-center gap-1.5 px-1">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${a.color}18`, border: `2px solid ${a.color}45` }}>
                <Icon icon={a.icon} width={20} color={a.color} />
              </div>
              <p className="text-sm font-bold text-[#1A1A1A] text-center leading-tight">{a.nombre}</p>
            </motion.div>
          ))}
        </div>

        {/* Mensajes */}
        <div className="relative flex flex-col">
          {mensajesSecuencia.map((m, i) => {
            const left = Math.min(m.from, m.to);
            const right = Math.max(m.from, m.to);
            const dir = m.from < m.to ? 'right' : 'left';
            const color = actoresSecuencia[m.to].color;
            return (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 * i + 0.3 }}
                className="grid items-center" style={{ gridTemplateColumns: `repeat(${N_ACTORES}, 1fr)`, minHeight: 58 }}>
                <div style={{ gridColumn: `${left + 1} / ${right + 2}` }} className="px-3">
                  <p className="text-sm text-center text-gray-600 mb-1 leading-tight">
                    <span className="font-bold" style={{ color }}>{i + 1}.</span> {m.label}
                  </p>
                  <div className="flex items-center gap-1">
                    {dir === 'left' && <Icon icon="lucide:chevron-left" width={14} color={color} className="flex-shrink-0" />}
                    <div className="flex-1 h-0" style={{ borderTop: `2px ${m.dashed ? 'dashed' : 'solid'} ${color}` }} />
                    {dir === 'right' && <Icon icon="lucide:chevron-right" width={14} color={color} className="flex-shrink-0" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  </div>
);

// ─── Slide 9: Calidad del software: plan de pruebas y resultados ──────────────

const suitesPruebas = [
  { suite: 'Login',                tests: 20, color: '#3B82F6' },
  { suite: 'Refresh Token',        tests: 18, color: '#10B981' },
  { suite: 'Conglomerado Pedidos', tests: 17, color: '#AC4FC6' },
  { suite: 'Pedido a Bodega',      tests: 14, color: '#FFB800' },
  { suite: 'Inventario',           tests: 13, color: '#43B02A' },
  { suite: 'Solicitudes',          tests: 12, color: '#FF585D' },
  { suite: 'Gestión Académica',    tests: 10, color: '#5BC2E7' },
  { suite: 'Bodega Tránsito',      tests: 10, color: '#F59E0B' },
  { suite: 'Movimientos',          tests:  6, color: '#6366F1' },
  { suite: 'Abastecimiento',       tests:  5, color: '#EF4444' },
];

const casoConcurrencia = [
  {
    fase: 'El Problema', icon: 'lucide:git-merge', color: '#EF4444',
    titulo: 'Actualización perdida (lost update)',
    desc: 'En Conglomerado de Pedidos, dos usuarios con el mismo pedido abierto: si A lo rechaza y B, con la vista desactualizada, lo aprueba, el segundo cambio pisa al primero sin control — condición de carrera clásica.',
  },
  {
    fase: 'La Corrección', icon: 'lucide:shield-check', color: '#3B82F6',
    titulo: 'Validación de concurrencia optimista',
    desc: 'changeMassiveStatus() recarga el estado real antes de escribir. Si el pedido ya no está PENDIENTE, responde 409 Conflict y no ejecuta el UPDATE.',
  },
  {
    fase: 'La Prueba', icon: 'lucide:flask-conical', color: '#10B981',
    titulo: 'test07ChangeMassiveStatusConflicto409',
    desc: 'Patrón AAA con JUnit 5 + Mockito: pedido #10 ya APROBADO → se invoca el método → 409 CONFLICT, mensaje con "#10" y verify(never()) de que el UPDATE no se ejecutó.',
  },
];

const SlidePruebas: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full bg-white px-12 py-6">
    <motion.div className="w-full max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

      <div className="mb-4 text-center">
        <Chip className="mb-3 bg-[#10B981]/15 text-[#0E9F6E] text-sm" size="md">Pruebas</Chip>
        <h2 className="text-5xl font-bold text-[#1A1A1A]">Calidad del Software: Plan de Pruebas y Resultados</h2>
        <p className="mt-2 text-lg text-gray-500">125 tests frontend (Vitest) · Patrón AAA · + prueba de backend (JUnit 5 + Mockito)</p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 mb-5">
        {suitesPruebas.map((s) => (
          <div key={s.suite} className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full pl-3 pr-2.5 py-1.5">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
            <span className="text-xs font-bold text-[#1A1A1A]">{s.suite}</span>
            <span className="text-xs text-gray-400">{s.tests}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full px-3 py-1.5">
          <Icon icon="lucide:check-circle-2" width={13} color="#0E9F6E" />
          <span className="text-xs font-bold text-[#0E9F6E]">125 tests · 100% PASS</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Icon icon="lucide:bug" width={18} color="#B8860B" />
          <p className="text-sm font-bold text-[#1A1A1A]">Hallazgo real de backend — Control de concurrencia</p>
          <span className="text-xs text-gray-400 ml-auto">PedidoServiceImplTest · líneas ~206-223</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {casoConcurrencia.map((c, i) => (
            <motion.div key={c.fase} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 * (i + 1) }}
              className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${c.color}15` }}>
                  <Icon icon={c.icon} width={16} color={c.color} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: c.color }}>{c.fase}</span>
              </div>
              <p className="text-sm font-bold text-[#1A1A1A] leading-snug font-mono">{c.titulo}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  </div>
);

// ─── Slide 10: Reflexión final / conclusiones ──────────────────────────────────

const lecciones = [
  {
    numero: '01',
    icon: 'lucide:search',
    titulo: 'Primero entender el problema real',
    desc: 'Mapear exactamente cómo operaban con Excel y dónde fallaba fue la base de todo el diseño. Sin ese diagnóstico previo, el sistema no habría resuelto nada.',
    color: '#FFB800',
  },
  {
    numero: '02',
    icon: 'lucide:git-branch',
    titulo: 'La trazabilidad se diseña desde el inicio',
    desc: 'Registrar quién hizo qué, cuándo y por qué no es un extra: es la base del sistema. Añadirla después habría requerido rediseñar toda la arquitectura.',
    color: '#10B981',
  },
  {
    numero: '03',
    icon: 'lucide:settings-2',
    titulo: 'Roles dinámicos eliminan desarrollo constante',
    desc: 'La implementación de roles dinámicos permite que el administrador asigne las vistas necesarias a cada usuario cuando el negocio lo exige, sin requerir intervención del equipo de desarrollo.',
    color: '#3B82F6',
  },
  {
    numero: '04',
    icon: 'lucide:search-code',
    titulo: 'Analizar antes de implementar',
    desc: 'El análisis profundo del problema y de cómo resolverlo mediante el sistema evita desarrollar funcionalidades que no llegan al producto final. Pensar más antes de crear ahorra tiempo y esfuerzo.',
    color: '#8B5CF6',
  },
];

const leccionCierre = {
  numero: '05',
  icon: 'lucide:infinity',
  titulo: 'El legado: siempre se puede mejorar',
  desc: 'Todo sistema es un punto de partida, no un destino. KuHub sienta las bases para futuras mejoras; cada versión entrega más valor y cualquier equipo que lo continúe encontrará campo para crecer y perfeccionar lo construido.',
  color: '#FFB800',
};

const SlideConclusiones: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full bg-white px-12 py-8">
    <motion.div className="w-full max-w-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-6 text-center">
        <Chip className="mb-3 bg-[#FFB800]/20 text-[#1A1A1A] text-sm" size="md">Cierre</Chip>
        <h2 className="text-5xl font-bold text-[#1A1A1A]">Reflexión Final / Conclusiones</h2>
        <p className="mt-3 text-xl text-gray-500">Lo que el desarrollo de KuHub nos dejó como equipo</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {lecciones.map((l, i) => (
          <motion.div key={l.numero} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
            className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5">
            <div className="flex-shrink-0 pt-1">
              <span className="text-5xl font-black leading-none" style={{ color: `${l.color}30` }}>{l.numero}</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${l.color}15` }}>
                  <Icon icon={l.icon} width={18} color={l.color} />
                </div>
                <p className="text-base font-bold text-[#1A1A1A] leading-snug">{l.titulo}</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{l.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.55 }}
        className="mt-4 flex items-center gap-6 rounded-2xl px-7 py-5 border-2"
        style={{ backgroundColor: `${leccionCierre.color}08`, borderColor: `${leccionCierre.color}30` }}>
        <span className="text-6xl font-black leading-none flex-shrink-0" style={{ color: `${leccionCierre.color}30` }}>{leccionCierre.numero}</span>
        <div className="w-px h-12 bg-[#FFB800]/20 flex-shrink-0" />
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${leccionCierre.color}20` }}>
          <Icon icon={leccionCierre.icon} width={26} color="#B8860B" />
        </div>
        <div>
          <p className="text-lg font-bold text-[#1A1A1A]">{leccionCierre.titulo}</p>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">{leccionCierre.desc}</p>
        </div>
      </motion.div>

    </motion.div>
  </div>
);

// ─── Listado de slides ────────────────────────────────────────────────────────

const SLIDES = [
  { id: 'apertura',     label: 'Apertura',       component: SlideApertura },
  { id: 'problema',     label: 'Problema',       component: SlideProblemaCausaEfecto },
  { id: 'objetivos',    label: 'Objetivos',      component: SlideObjetivos },
  { id: 'alcance',      label: 'Alcance',        component: SlideAlcance },
  { id: 'metodologia',  label: 'Metodología',    component: SlideMetodologia },
  { id: 'arquitectura', label: 'Arquitectura',   component: SlideArquitectura },
  { id: 'cloud',        label: 'Tecnología',     component: SlideJustificacionCloud },
  { id: 'flujo',        label: 'Flujo',          component: SlideFlujo },
  { id: 'pruebas',      label: 'Pruebas',        component: SlidePruebas },
  { id: 'conclusiones', label: 'Conclusiones',   component: SlideConclusiones },
];

// ─── Componente principal ─────────────────────────────────────────────────────

const PresentacionPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= SLIDES.length) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const SlideComponent = SLIDES[current].component;

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const mid = window.innerWidth / 2;
    if (x >= mid) next();
    else prev();
  }, [next, prev]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div key={current} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" className="absolute inset-0">
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Zonas de clic izquierda / derecha */}
      <div className="absolute inset-0 z-10 flex" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <div className="w-1/2 h-full group flex items-center justify-start pl-6">
          {current > 0 && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 text-gray-300">
              <Icon icon="lucide:chevron-left" width={32} />
            </div>
          )}
        </div>
        <div className="w-1/2 h-full group flex items-center justify-end pr-6">
          {current < SLIDES.length - 1 && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 text-gray-300">
              <Icon icon="lucide:chevron-right" width={32} />
            </div>
          )}
        </div>
      </div>

      {/* Indicador de slide (sup. izq.) */}
      <div className="absolute top-5 left-6 z-20 flex items-center gap-2 pointer-events-none">
        <div className="w-7 h-7 rounded bg-[#FFB800] flex items-center justify-center">
          <span className="text-xs font-bold text-[#1A1A1A]">{current + 1}</span>
        </div>
        <span className="text-sm text-gray-400 font-medium">{SLIDES[current].label}</span>
      </div>

      {/* KuHub badge (sup. der.) */}
      <div className="absolute top-5 right-6 z-20 flex items-center gap-2 opacity-60 pointer-events-none">
        <Icon icon="lucide:warehouse" width={16} color="#B8860B" />
        <span className="text-sm text-[#1A1A1A] font-semibold tracking-wide">KuHub</span>
      </div>

      {/* Puntos de navegación */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((s, i) => (
          <button key={s.id} onClick={(e) => { e.stopPropagation(); goTo(i); }}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-7 h-2.5 bg-[#FFB800]' : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'}`}
          />
        ))}
      </div>

    </div>
  );
};

export default PresentacionPage;
