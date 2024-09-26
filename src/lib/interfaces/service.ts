/**
 * @interface ServiceCardProps
 * @property {string} title - The title of the card
 * @property {number} price - The price of the card
 * @property {string} description - The description of the card
 * @property {string} icon - The icon of the card
 * @property {string} link - The link of the card
 * @property {string} linkText - The link text of the card
 * @property {Array<string>} features - The features of the card
 * @exports ServiceCardProps
 */
export interface ServiceCardProps {
  index: number
  title: string
  price: number
  description: string
  icon: string
  link: string
  linkText: string
  features: Array<string>
}