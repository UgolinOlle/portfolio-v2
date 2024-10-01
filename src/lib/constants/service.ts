import { ServiceCardProps } from '@/lib/interfaces/service'

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
      'Craft des landing pages sur mesure pour convertir vos visiteurs en clients.',
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
      'Craft des landing pages sur mesure pour convertir vos visiteurs en clients.',
    icon: 'SwatchBook',
    link: 'https://cal.com/ugolin-olle',
    linkText: 'Prendre rendez-vous',
    features: ['Design sur mesure', 'Responsive', 'Optimisé SEO'],
  },
]
