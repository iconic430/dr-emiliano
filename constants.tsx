
import React from 'react';
import { Service, Testimonial, FAQ } from './types';

export const DOCTOR_NAME = "Dr. Carlos Emiliano Contreras Chong";
export const SPECIALTY = "Médico Internista Especializado en Sobrepeso y Obesidad";
export const WHATSAPP_NUMBER = "526141234567"; 
export const PHONE_NUMBER = "614 439 8604";
export const LOCATION = "Hospital Angeles Chihuahua, Consultorio 405";
export const ADDRESS = "Hacienda del Valle 7120, Chihuahua, Chih.";

export const SERVICES: Service[] = [
  {
    id: 'weight-loss',
    title: 'Control de Peso Médico',
    description: 'Protocolos clínicos personalizados para la reducción de peso de forma segura, efectiva y sostenible.',
    icon: '⚖️'
  },
  {
    id: 'metabolic',
    title: 'Salud Metabólica',
    description: 'Tratamiento integral de diabetes, hipertensión y dislipidemias asociadas al sobrepeso.',
    icon: '🩺'
  },
  {
    id: 'nutrition',
    title: 'Nutrición Clínica',
    description: 'Planes alimenticios basados en evidencia científica adaptados a tus necesidades metabólicas.',
    icon: '🍎'
  },
  {
    id: 'checkup',
    title: 'Check-up Internista',
    description: 'Evaluación exhaustiva de tu estado de salud general para prevenir complicaciones crónicas.',
    icon: '📋'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Ana Martínez",
    text: "Gracias al Dr. Contreras logré controlar mi peso y mejorar mis niveles de azúcar. Un trato muy profesional.",
    rating: 5,
    date: "Hace 1 mes"
  },
  {
    id: '2',
    name: "Luis Herrera",
    text: "El mejor internista. Su enfoque en el sobrepeso realmente funciona porque entiende la parte médica detrás.",
    rating: 5,
    date: "Hace 3 meses"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "¿En qué consiste la primera consulta?",
    answer: "Realizamos una historia clínica completa, evaluación antropométrica y revisión de laboratorios para diseñar un plan a tu medida."
  },
  {
    question: "¿Utiliza medicamentos para bajar de peso?",
    answer: "Como médico internista, evalúo si eres candidato a apoyo farmacológico seguro, siempre complementado con cambios en el estilo de vida."
  },
  {
    question: "¿Atiende pacientes con diabetes?",
    answer: "Sí, la medicina interna es clave para el manejo integral de la diabetes y su relación con el control de peso."
  }
];
