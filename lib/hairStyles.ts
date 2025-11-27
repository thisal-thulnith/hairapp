import { HairStyle } from './types';

export const hairStyles: HairStyle[] = [
  {
    id: 'modern-pixie',
    name: 'Modern Pixie Cut',
    description: 'Edgy short cut with textured layers',
    category: 'short',
    prompt: 'modern pixie cut hairstyle, short textured layers, edgy and stylish'
  },
  {
    id: 'sleek-bob',
    name: 'Sleek Bob',
    description: 'Classic bob with clean lines',
    category: 'medium',
    prompt: 'sleek bob hairstyle, straight hair, chin-length, polished and professional'
  },
  {
    id: 'textured-lob',
    name: 'Textured Lob',
    description: 'Long bob with soft waves',
    category: 'medium',
    prompt: 'textured long bob hairstyle, soft waves, shoulder-length, natural movement'
  },
  {
    id: 'beach-waves',
    name: 'Beach Waves',
    description: 'Effortless wavy long hair',
    category: 'long',
    prompt: 'beach waves hairstyle, long wavy hair, natural and effortless, sun-kissed look'
  },
  {
    id: 'sleek-straight',
    name: 'Sleek Straight',
    description: 'Ultra-smooth straight long hair',
    category: 'long',
    prompt: 'sleek straight hairstyle, long smooth hair, glossy and polished, perfectly straight'
  },
  {
    id: 'voluminous-curls',
    name: 'Voluminous Curls',
    description: 'Full-bodied bouncy curls',
    category: 'curly',
    prompt: 'voluminous curly hairstyle, bouncy curls, full-bodied, defined curl pattern'
  },
  {
    id: 'loose-curls',
    name: 'Loose Curls',
    description: 'Soft romantic curls',
    category: 'curly',
    prompt: 'loose curls hairstyle, soft romantic curls, natural and flowing, gentle waves'
  },
  {
    id: 'shaggy-layers',
    name: 'Shaggy Layers',
    description: 'Choppy layered cut with movement',
    category: 'medium',
    prompt: 'shaggy layered hairstyle, choppy layers, textured and edgy, modern rock style'
  },
  {
    id: 'curtain-bangs',
    name: 'Curtain Bangs',
    description: 'Face-framing curtain bangs',
    category: 'medium',
    prompt: 'curtain bangs hairstyle, face-framing layers, soft parted bangs, elegant and trendy'
  },
  {
    id: 'blunt-cut',
    name: 'Blunt Cut',
    description: 'Sharp one-length cut',
    category: 'long',
    prompt: 'blunt cut hairstyle, one-length hair, sharp clean line, modern and bold'
  },
  {
    id: 'undercut-fade',
    name: 'Undercut Fade',
    description: 'Edgy undercut with fade',
    category: 'short',
    prompt: 'undercut fade hairstyle, shaved sides, longer top, edgy and contemporary'
  },
  {
    id: 'vintage-waves',
    name: 'Vintage Waves',
    description: 'Old Hollywood glamour waves',
    category: 'classic',
    prompt: 'vintage waves hairstyle, old Hollywood glamour, elegant finger waves, classic style'
  },
  {
    id: 'natural-afro',
    name: 'Natural Afro',
    description: 'Full natural textured afro',
    category: 'curly',
    prompt: 'natural afro hairstyle, full textured volume, defined coils, proud natural hair'
  },
  {
    id: 'braided-crown',
    name: 'Braided Crown',
    description: 'Elegant crown braid style',
    category: 'classic',
    prompt: 'braided crown hairstyle, elegant halo braid, intricate and romantic, formal style'
  },
  {
    id: 'messy-bun',
    name: 'Messy Bun',
    description: 'Casual undone updo',
    category: 'modern',
    prompt: 'messy bun hairstyle, casual undone updo, effortless and chic, relaxed style'
  },
  {
    id: 'slicked-back',
    name: 'Slicked Back',
    description: 'Sleek pulled-back style',
    category: 'modern',
    prompt: 'slicked back hairstyle, sleek pulled back hair, polished and sophisticated, clean look'
  }
];

export const categories = [
  { id: 'all', name: 'All Styles' },
  { id: 'short', name: 'Short' },
  { id: 'medium', name: 'Medium' },
  { id: 'long', name: 'Long' },
  { id: 'curly', name: 'Curly' },
  { id: 'straight', name: 'Straight' },
  { id: 'wavy', name: 'Wavy' },
  { id: 'modern', name: 'Modern' },
  { id: 'classic', name: 'Classic' }
];
