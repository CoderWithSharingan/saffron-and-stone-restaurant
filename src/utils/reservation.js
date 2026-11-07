import { contact, site } from '../data/siteConfig';

export const MAX_GUESTS = 10;
export const MAX_REQUEST_LENGTH = 500;
export const BOOKING_WINDOW_DAYS = 90;

export const timeSlots = [
  { value: '19:00', label: '7:00 pm' },
  { value: '19:30', label: '7:30 pm' },
  { value: '20:00', label: '8:00 pm' },
  { value: '20:30', label: '8:30 pm' },
  { value: '21:00', label: '9:00 pm' },
  { value: '21:30', label: '9:30 pm' },
  { value: '22:00', label: '10:00 pm' },
  { value: '22:30', label: '10:30 pm' },
];

export const emptyReservation = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  requests: '',
};

// Order used to move focus to the first invalid field.
export const reservationFields = ['name', 'email', 'phone', 'date', 'time', 'guests', 'requests'];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARACTERS = /^\+?[\d\s()-]+$/;

const pad = (value) => String(value).padStart(2, '0');

export function toISODate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function getDateLimits(now = new Date()) {
  const max = new Date(now);
  max.setDate(max.getDate() + BOOKING_WINDOW_DAYS);
  return { min: toISODate(now), max: toISODate(max) };
}

const parseISODate = (value) => new Date(`${value}T00:00:00`);

export function validateField(field, values, now = new Date()) {
  const value = typeof values[field] === 'string' ? values[field].trim() : values[field];

  switch (field) {
    case 'name':
      if (!value) return 'Please enter your name.';
      if (value.length < 2) return 'Name must be at least 2 characters.';
      if (value.length > 80) return 'Name must be 80 characters or fewer.';
      return '';

    case 'email':
      if (!value) return 'Please enter your email address.';
      if (!EMAIL_PATTERN.test(value)) return 'Enter a valid email address, e.g. name@example.com.';
      return '';

    case 'phone': {
      if (!value) return 'Please enter your phone number.';
      const digits = value.replace(/\D/g, '');
      if (!PHONE_CHARACTERS.test(value) || digits.length < 10 || digits.length > 13) {
        return 'Enter a valid phone number of 10–13 digits, e.g. +91 98765 43210.';
      }
      return '';
    }

    case 'date': {
      if (!value) return 'Please choose a date.';
      const { min, max } = getDateLimits(now);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(parseISODate(value).getTime())) {
        return 'Please choose a valid date.';
      }
      if (value < min) return 'This date has passed. Please choose today or a future date.';
      if (value > max) return `We accept enquiries up to ${BOOKING_WINDOW_DAYS} days in advance.`;
      if (parseISODate(value).getDay() === 1) return 'We are closed on Mondays. Please choose another day.';
      return '';
    }

    case 'time': {
      if (!value) return 'Please choose a time.';
      if (!timeSlots.some((slot) => slot.value === value)) return 'Please choose one of the listed times.';
      if (values.date === toISODate(now)) {
        const [hours, minutes] = value.split(':').map(Number);
        const slot = new Date(now);
        slot.setHours(hours, minutes, 0, 0);
        if (slot <= now) return 'This time has already passed today. Please choose a later time.';
      }
      return '';
    }

    case 'guests': {
      const guests = Number(value);
      if (!value) return 'Please select the number of guests.';
      if (!Number.isInteger(guests) || guests < 1 || guests > MAX_GUESTS) {
        return `Please choose between 1 and ${MAX_GUESTS} guests.`;
      }
      return '';
    }

    case 'requests':
      if (value.length > MAX_REQUEST_LENGTH) {
        return `Please keep requests under ${MAX_REQUEST_LENGTH} characters.`;
      }
      return '';

    default:
      return '';
  }
}

export function validateReservation(values, now = new Date()) {
  return reservationFields.reduce((errors, field) => {
    const message = validateField(field, values, now);
    if (message) errors[field] = message;
    return errors;
  }, {});
}

export function formatReservationDate(value) {
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(parseISODate(value));
}

export function getTimeLabel(value) {
  return timeSlots.find((slot) => slot.value === value)?.label ?? value;
}

export function getReservationSummary(values) {
  const guests = Number(values.guests);
  return [
    { label: 'Name', value: values.name.trim() },
    { label: 'Email', value: values.email.trim() },
    { label: 'Phone', value: values.phone.trim() },
    { label: 'Date', value: formatReservationDate(values.date) },
    { label: 'Time', value: getTimeLabel(values.time) },
    { label: 'Guests', value: `${guests} ${guests === 1 ? 'guest' : 'guests'}` },
    { label: 'Special requests', value: values.requests.trim() || 'None' },
  ];
}

export function buildReservationMailto(values) {
  const summary = getReservationSummary(values);
  const subject = `Reservation enquiry: ${summary[3].value}, ${summary[4].value} (${summary[5].value})`;
  const body = [
    `Hello ${site.name} team,`,
    '',
    'I would like to enquire about a table with the following details:',
    '',
    ...summary.map(({ label, value }) => `${label}: ${value}`),
    '',
    'Please let me know whether this is available.',
    '',
    'Thank you,',
    values.name.trim(),
  ].join('\n');

  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
