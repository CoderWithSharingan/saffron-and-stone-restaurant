import { images } from './images';

// Fictional dishes and prices (INR) for demonstration purposes.
export const menuCategories = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Mains' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
];

export const menuItems = [
  {
    id: 'truffle-aloo-samosa',
    name: 'Truffle Aloo Samosa',
    description:
      'Hand-folded pastry with spiced potato and peas, finished with black truffle and tamarind-date chutney.',
    category: 'starters',
    price: 545,
    tag: 'Signature',
    image: images.menu.samosa,
  },
  {
    id: 'smoked-paneer-tikka',
    name: 'Smoked Paneer Tikka',
    description:
      'Malai-marinated paneer with charred peppers and onion, served sizzling with mint chutney.',
    category: 'starters',
    price: 625,
    image: images.menu.paneerTikka,
  },
  {
    id: 'gol-gappa-three-waters',
    name: 'Gol Gappa, Three Waters',
    description:
      'Crisp semolina puris with spiced chickpeas and three house panis: tamarind, mint and kokum.',
    category: 'starters',
    price: 445,
    tag: 'Popular',
    image: images.menu.paniPuri,
  },
  {
    id: 'tandoor-skewer-flight',
    name: 'Tandoor Skewer Flight',
    description:
      'Chicken tikka, reshmi kebab, malai paneer and seasonal vegetables, straight from the clay oven.',
    category: 'starters',
    price: 795,
    image: images.menu.tandoorSkewers,
  },
  {
    id: 'lucknowi-dum-biryani',
    name: 'Lucknowi Dum Biryani',
    description:
      'Aged basmati and chicken sealed and slow-cooked with saffron, kewra and crisp onions. Served with burani raita.',
    category: 'mains',
    price: 1150,
    tag: 'Signature',
    image: images.menu.biryani,
  },
  {
    id: 'old-delhi-butter-chicken',
    name: 'Old Delhi Butter Chicken',
    description:
      'Tandoor-charred chicken in a velvety tomato, butter and fenugreek gravy.',
    category: 'mains',
    price: 1050,
    tag: 'Popular',
    image: images.menu.butterChicken,
  },
  {
    id: 'kasundi-mustard-fish',
    name: 'Kasundi Mustard Fish',
    description:
      'Bengali-style fish in a sharp mustard and green chilli sauce with nigella and cold-pressed mustard oil.',
    category: 'mains',
    price: 1250,
    image: images.menu.mustardFish,
  },
  {
    id: 'kashmiri-rogan-josh',
    name: 'Kashmiri Rogan Josh',
    description:
      'Lamb braised slowly with Kashmiri chillies, fennel and dry ginger. Served with butter naan.',
    category: 'mains',
    price: 1395,
    image: images.menu.roganJosh,
  },
  {
    id: 'palak-paneer-smoked-garlic',
    name: 'Palak Paneer, Smoked Garlic',
    description:
      'Silky spinach and fresh cottage cheese with a smoked garlic tadka and flaky laccha paratha.',
    category: 'mains',
    price: 895,
    image: images.menu.palakPaneer,
  },
  {
    id: 'pistachio-rose-milk-cake',
    name: 'Pistachio Rose Milk Cake',
    description:
      'Cardamom sponge soaked in three milks, layered with rose petals and Iranian pistachio.',
    category: 'desserts',
    price: 495,
    tag: 'Signature',
    image: images.menu.pistachioCake,
  },
  {
    id: 'saffron-seviyan-kheer',
    name: 'Saffron Seviyan Kheer',
    description:
      'Roasted vermicelli simmered in saffron milk with slivered almonds, set in a clay pot.',
    category: 'desserts',
    price: 425,
    image: images.menu.kheer,
  },
  {
    id: 'jalebi-and-rabri',
    name: 'Jalebi & Rabri',
    description:
      'Saffron jalebi spirals fried to order, served warm with chilled cardamom rabri.',
    category: 'desserts',
    price: 445,
    image: images.menu.jalebi,
  },
  {
    id: 'kulhad-masala-chai',
    name: 'Kulhad Masala Chai',
    description:
      'Assam tea brewed with ginger, cardamom and whole milk, poured into clay cups.',
    category: 'beverages',
    price: 245,
    image: images.menu.masalaChai,
  },
  {
    id: 'alphonso-mango-lassi',
    name: 'Alphonso Mango Lassi',
    description:
      'Ratnagiri Alphonso mango whipped with thick yoghurt and a touch of saffron.',
    category: 'beverages',
    price: 325,
    tag: 'Popular',
    image: images.menu.mangoLassi,
  },
  {
    id: 'kacchi-kairi-cooler',
    name: 'Kacchi Kairi Cooler',
    description:
      'Raw mango, mint, black salt and lime over crushed ice. Alcohol-free.',
    category: 'beverages',
    price: 345,
    image: images.menu.kairiCooler,
  },
  {
    id: 'rose-thandai',
    name: 'Rose Thandai',
    description:
      'Chilled milk with rose, fennel, melon seeds and pistachio, finished with dried petals.',
    category: 'beverages',
    price: 375,
    image: images.menu.roseThandai,
  },
];
