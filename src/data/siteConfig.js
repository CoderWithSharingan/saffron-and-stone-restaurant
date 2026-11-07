// All business details are fictional demonstration content.
export const site = {
  name: 'Saffron & Stone',
  tagline: 'Contemporary Indian Dining',
  established: 2019,
  neighbourhood: 'Bandra West',
  city: 'Mumbai',
  serviceSummary: 'Tue – Sun, 7 – 11:30\u00a0pm',
};

export const contact = {
  addressLines: ['Ground Floor, 27 Saffron Lane', 'Bandra West, Mumbai 400050'],
  // Deliberately invalid number and reserved .example domain so no real person or inbox is contacted.
  phoneDisplay: '+91 22 0000 0000',
  phoneHref: 'tel:+912200000000',
  email: 'reservations@saffronandstone.example',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bandra%20West%2C%20Mumbai',
};

export const openingHours = [
  { days: 'Tuesday – Sunday', hours: '7:00 pm – 11:30 pm' },
  { days: 'Last seating', hours: '10:30 pm' },
  { days: 'Monday', hours: 'Closed' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
];

// Every page section, in document order, used for active-link tracking.
export const sectionIds = ['home', 'story', 'menu', 'gallery', 'reservation', 'contact'];
