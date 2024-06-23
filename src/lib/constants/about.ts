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
    src: '/images/coding-1.jpg',
    alt: 'Picture 1',
    text: 'Développement de mon portfolio à Phnom Penh',
  },
  {
    src: '/images/city-1.jpg',
    alt: 'Picture 2',
    text: 'Coucher de soleil à Phnom Penh',
  },
  { src: '/images/coding-1.jpg', alt: 'Picture 3', text: 'This is picture 3' },
  { src: '/images/city-1.jpg', alt: 'Picture 4', text: 'This is picture 4' },
];
