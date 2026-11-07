// Local WebP copies of Unsplash photos; sources and licensing are listed in README.md.
import heroThali768 from '../assets/images/hero-thali-768.webp';
import heroThali1280 from '../assets/images/hero-thali-1280.webp';
import heroThali1920 from '../assets/images/hero-thali-1920.webp';
import aboutDiningRoom from '../assets/images/about-dining-room.webp';
import aboutChef from '../assets/images/about-chef.webp';
import menuSamosa from '../assets/images/menu-samosa.webp';
import menuPaneerTikka from '../assets/images/menu-paneer-tikka.webp';
import menuPaniPuri from '../assets/images/menu-pani-puri.webp';
import menuTandoorSkewers from '../assets/images/menu-tandoor-skewers.webp';
import menuBiryani from '../assets/images/menu-biryani.webp';
import menuButterChicken from '../assets/images/menu-butter-chicken.webp';
import menuMustardFish from '../assets/images/menu-mustard-fish.webp';
import menuRoganJosh from '../assets/images/menu-rogan-josh.webp';
import menuPalakPaneer from '../assets/images/menu-palak-paneer.webp';
import menuPistachioCake from '../assets/images/menu-pistachio-cake.webp';
import menuKheer from '../assets/images/menu-kheer.webp';
import menuJalebi from '../assets/images/menu-jalebi.webp';
import menuMasalaChai from '../assets/images/menu-masala-chai.webp';
import menuMangoLassi from '../assets/images/menu-mango-lassi.webp';
import menuKairiCooler from '../assets/images/menu-kairi-cooler.webp';
import menuRoseThandai from '../assets/images/menu-rose-thandai.webp';
import galleryDiningRoom from '../assets/images/gallery-dining-room.webp';
import galleryBar from '../assets/images/gallery-bar.webp';
import galleryThali from '../assets/images/gallery-thali.webp';
import gallerySpices from '../assets/images/gallery-spices.webp';
import galleryTandoor from '../assets/images/gallery-tandoor.webp';
import galleryTable from '../assets/images/gallery-table.webp';

const menuImage = (src, alt) => ({ src, alt, width: 720, height: 540 });

export const images = {
  hero: {
    src: heroThali1280,
    srcSet: `${heroThali768} 768w, ${heroThali1280} 1280w, ${heroThali1920} 1920w`,
    width: 1920,
    height: 1280,
    alt: 'Brass bowls of curry, rice and accompaniments arranged for a shared meal on a restaurant table',
  },

  about: {
    main: {
      src: aboutDiningRoom,
      width: 900,
      height: 1125,
      alt: 'Warmly lit restaurant dining room with set tables and glowing table lamps',
    },
    detail: {
      src: aboutChef,
      width: 600,
      height: 750,
      alt: 'Chef using tweezers to garnish a small plated dish with fresh greens',
    },
  },

  menu: {
    samosa: menuImage(menuSamosa, 'Three golden samosas on a wooden board with green chilli and pomegranate seeds'),
    paneerTikka: menuImage(menuPaneerTikka, 'Charred paneer tikka with peppers and onions in a cast-iron sizzler'),
    paniPuri: menuImage(menuPaniPuri, 'Crisp puris filled with chickpeas around a bowl of spiced water on a steel plate'),
    tandoorSkewers: menuImage(menuTandoorSkewers, 'Four tandoori skewers hanging from a wooden serving stand'),
    biryani: menuImage(menuBiryani, 'Chicken biryani with saffron-tinted rice, mint and cucumber on a white plate'),
    butterChicken: menuImage(menuButterChicken, 'Butter chicken in a creamy tomato gravy with coriander in a wooden bowl'),
    mustardFish: menuImage(menuMustardFish, 'Fish steaks in a yellow mustard gravy with slit green chillies'),
    roganJosh: menuImage(menuRoganJosh, 'Lamb curry garnished with coriander, served beside naan'),
    palakPaneer: menuImage(menuPalakPaneer, 'Spinach curry with a swirl of cream beside layered paratha and whole spices'),
    pistachioCake: menuImage(menuPistachioCake, 'Squares of pistachio cake topped with dried rose petals on a white plate'),
    kheer: menuImage(menuKheer, 'Creamy vermicelli kheer in a terracotta pot'),
    jalebi: menuImage(menuJalebi, 'A golden jalebi spiral topped with a rosebud, surrounded by fried sweets'),
    masalaChai: menuImage(menuMasalaChai, 'Masala chai being poured into small clay kulhad cups'),
    mangoLassi: menuImage(menuMangoLassi, 'Mango lassi in a tall glass with a yellow straw beside fresh mangoes'),
    kairiCooler: menuImage(menuKairiCooler, 'Green mint and lime cooler in a glass on a dark counter'),
    roseThandai: menuImage(menuRoseThandai, 'Pink rose drink topped with cream, rose petals and chopped pistachios'),
  },

  gallery: {
    diningRoom: {
      src: galleryDiningRoom,
      width: 1200,
      height: 900,
      alt: 'Dark dining room with tables set beneath glowing pendant lamps',
    },
    bar: {
      src: galleryBar,
      width: 1000,
      height: 1000,
      alt: 'Long marble bar counter with stools and softly lit shelves',
    },
    thali: {
      src: galleryThali,
      width: 800,
      height: 640,
      alt: 'Kerala-style thali with fried fish, papadum and small bowls of curries',
    },
    spices: {
      src: gallerySpices,
      width: 800,
      height: 600,
      alt: 'Whole and ground Indian spices scattered across a dark surface with steel spoons',
    },
    tandoor: {
      src: galleryTandoor,
      width: 800,
      height: 800,
      alt: 'Flatbreads baking on the inner walls of a clay tandoor over glowing coals',
    },
    table: {
      src: galleryTable,
      width: 800,
      height: 600,
      alt: 'Table set with wine glasses and a small brass lamp in a dimly lit restaurant',
    },
  },
};
