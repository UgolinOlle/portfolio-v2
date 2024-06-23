/**
 * @interface IAboutPicture
 * @description Interface for the about page image data.
 * @property {string} src - The image source.
 * @property {string} alt - The image alt text.
 * @property {string} text - The image text.
 */
interface IAboutPicture {
  src: string;
  alt: string;
  text: string;
}

/**
 * @constant ABOUT_IMAGES
 * @description Array of objects containing image data for the about page.
 * @type {IAboutPicture[]}
 * @exports ABOUT_IMAGES
 */
export const ABOUT_IMAGES: IAboutPicture[] = [
  {
    src: '/images/code-1.jpg',
    alt: 'Développement de mon portfolio à Phnom Penh',
    text: 'Développement de mon portfolio à Phnom Penh',
  },
  {
    src: '/images/city-1.jpg',
    alt: 'Coucher de soleil à Phnom Penh',
    text: 'Coucher de soleil à Phnom Penh',
  },
  {
    src: '/images/code-2.jpg',
    alt: "Développement de auto-push, un CLI écrit en Go pour automatisé l'update de son profil Github.",
    text: "Développement de auto-push, un CLI écrit en Go pour automatisé l'update de son profil Github.",
  },
  {
    src: '/images/bouddha.jpg',
    alt: 'Wat Paknam',
    text: 'Wat Paknam, un Bouddha de 69 mètres de haut situé en plein Bangkok.',
  },
];
