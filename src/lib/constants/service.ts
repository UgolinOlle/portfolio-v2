/**
 * @file service.ts
 * @description Constants for the service page
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { IServiceBenefitProps, ServiceCardProps } from '~/lib/interfaces/service';

/**
 * @constant SERVICES
 * @description The list of services proposed
 * @exports SERVICES
 */
export const SERVICES: ServiceCardProps[] = [
  {
    index: 0,
    title: 'Landing page',
    price: 950,
    description:
      'Transformez vos visiteurs en clients avec une landing pages sur mesure, conçues pour maximiser vos conversions.',
    icon: 'SwatchBook',
    color: '',
    link: 'https://cal.com/ugolin-olle',
    linkText: 'Prendre rendez-vous',
    features: ['Design sur mesure', 'Responsive', 'Optimisé SEO'],
  },
  {
    index: 1,
    title: 'Logiciel / SaaS',
    price: 0,
    description: 'Conception de logiciels et solutions SaaS sur mesure.',
    icon: 'BookKey',
    color: 'purple-500',
    link: 'https://cal.com/ugolin-olle',
    linkText: 'Prendre rendez-vous',
    features: ['Cloud-based', 'Scalabilité', 'Sécurité renforcée'],
  },
  {
    index: 2,
    title: 'Support technique',
    price: 50,
    hour: true,
    description: 'Assistance technique pour maintenir vos systèmes, applications, logiciel et serveur à jour 7/7j.',
    icon: 'Computer',
    color: 'red-500',
    link: 'https://cal.com/ugolin-olle',
    linkText: 'Prendre rendez-vous',
    features: ['Assistance à distance', 'Résolution rapide des problèmes', '7 jours sur 7'],
  },
];

/**
 * @constant SERVICES_BENEFITS
 * @description The list of benefits of the services proposed
 * @exports SERVICES_BENEFITS
 */
export const SERVICES_BENEFITS: IServiceBenefitProps[] = [
  {
    title: 'Responsive',
    icon: 'CircleCheckBig',
  },
  {
    title: 'Disponible 7 jours/7',
    icon: 'CircleCheckBig',
  },
  {
    title: 'Landing pages en 72h',
    icon: 'CircleCheckBig',
  },
  {
    title: 'Réponse en moins 1h',
    icon: 'CircleCheckBig',
  },
  {
    title: 'Support continu',
    icon: 'CircleCheckBig',
  },
];
