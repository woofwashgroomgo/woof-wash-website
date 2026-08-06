import brody from '../assets/gallery-brody.png'
import prince from '../assets/gallery-prince.png'
import jakeAndKoa from '../assets/gallery-jake-and-koa.png'
import ellie from '../assets/gallery-ellie.png'
import ruby from '../assets/gallery-ruby.png'
import zeke from '../assets/gallery-zeke.png'
import gracie from '../assets/gallery-gracie.png'
import merlinAndPrince from '../assets/gallery-merlin-and-prince.png'
import buddy from '../assets/gallery-buddy.png'

export const photos = [
  { src: brody, name: 'Brody' },
  { src: prince, name: 'Prince' },
  { src: jakeAndKoa, name: 'Jake and Koa' },
  { src: ellie, name: 'Ellie' },
  { src: ruby, name: 'Ruby' },
  { src: zeke, name: 'Zeke' },
  { src: gracie, name: 'Gracie' },
  { src: merlinAndPrince, name: 'Merlin & Prince' },
  { src: buddy, name: 'Buddy' },
]

// Chosen for the homepage preview: cleanest cutout edges
export const homePreviewNames = ['Zeke', 'Merlin & Prince', 'Brody']

export const homePreview = homePreviewNames.map(
  (name) => photos.find((p) => p.name === name),
)
