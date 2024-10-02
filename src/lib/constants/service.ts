import {
  IServiceBenefitProps,
  ServiceCardProps,
} from '~/lib/interfaces/service'

/**
 * @constant SERVICES
 * @description The list of services proposed
 * @exports SERVICES
 */
export const SERVICES: ServiceCardProps[] = [
  {
    index: 0,
    title: 'Landing page',
    price: 650,
    description:
      'Craft des landing pages sur mesure pour convertir vos visiteurs en clients. Fournies en 72h.',
    icon: 'SwatchBook',
    link: 'https://cal.com/ugolin-olle',
    linkText: 'Prendre rendez-vous',
    features: ['Design sur mesure', 'Responsive', 'Optimisé SEO'],
  },
  {
    index: 1,
    title: 'Application web',
    price: 0,
    description:
      'Développement d’applications web complètes, optimisées pour la performance et la scalabilité.',
    icon: 'Code',
    link: 'https://cal.com/ugolin-olle',
    linkText: 'Prendre rendez-vous',
    features: ['Technologies modernes', 'Design interactif', 'Support mobile'],
  },
  {
    index: 2,
    title: 'Logiciel / SaaS',
    price: 0,
    description:
      'Conception de logiciels et solutions SaaS sur mesure pour automatiser et faire évoluer votre entreprise.',
    icon: 'BookKey',
    link: 'https://cal.com/ugolin-olle',
    linkText: 'Prendre rendez-vous',
    features: ['Cloud-based', 'Scalabilité', 'Sécurité renforcée'],
  },
  {
    index: 3,
    title: 'Support technique',
    price: 50,
    hour: true,
    description:
      'Assistance technique pour maintenir vos systèmes, applications, logiciel et serveur à jour 7/7j.',
    icon: 'Computer',
    link: 'https://cal.com/ugolin-olle',
    linkText: 'Prendre rendez-vous',
    features: [
      'Assistance à distance',
      'Résolution rapide des problèmes',
      'Support continu',
    ],
  },
]

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
    title: 'Disponible 24/7',
    icon: 'CircleCheckBig',
  },
  {
    title: 'Landing pages en 72h',
    icon: 'CircleCheckBig',
  },
  {
    title: 'Communication régulière',
    icon: 'CircleCheckBig',
  },
  {
    title: 'Support continu',
    icon: 'CircleCheckBig',
  },
]
