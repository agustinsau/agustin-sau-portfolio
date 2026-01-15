import { Project } from '@/data/projects';

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Agustin Sau',
    url: 'https://agustinsau.dev',
    image: 'https://agustinsau.dev/images/profile.jpg',
    jobTitle: 'Desarrollador Fullstack Junior',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    sameAs: [
      'https://github.com/agustinsau',
      'https://www.linkedin.com/in/agusau/',
    ],
    email: 'agustin.sauu@gmail.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+54-XXXXXXXXX',
      contactType: 'Customer Service',
    },
    knowsLanguage: ['es-AR', 'en'],
  };
}

export function getProjectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    url: project.demo || project.github,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'ARS',
    },
    author: {
      '@type': 'Person',
      name: 'Agustin Sau',
    },
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agustin Sau',
    url: 'https://agustinsau.dev',
    logo: 'https://agustinsau.dev/logo.png',
    sameAs: [
      'https://github.com/agustinsau',
      'https://www.linkedin.com/in/agusau/',
    ],
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'agustin.sauu@gmail.com',
    },
  };
}
