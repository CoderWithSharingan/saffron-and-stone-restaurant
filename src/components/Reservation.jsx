import { useState } from 'react';
import { ChevronDown, Info, Mail, Pencil } from 'lucide-react';
import FormField from './FormField';
import SectionHeading from './SectionHeading';
import { contact } from '../data/siteConfig';
import {
  MAX_GUESTS,
  MAX_REQUEST_LENGTH,
  buildReservationMailto,
  emptyReservation,
  getDateLimits,
  getReservationSummary,
  reservationFields,
  timeSlots,
  validateField,
  validateReservation,
} from '../utils/reservation';
import '../styles/reservation.css';

const guestOptions = Array.from({ length: MAX_GUESTS }, (_, index) => index + 1);
const fieldId = (name) => `reservation-${name}`;
const focusElement = (node) => node?.focus();

function Reservation() {
  const [values, setValues] = useState(emptyReservation);
  const [errors, setErrors] = useState({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isPrepared, setIsPrepared] = useState(false);
  const [hasEdited, setHasEdited] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);

    if (!hasAttemptedSubmit) return;
    // Time validity depends on the selected date, so re-check both together.
    const fieldsToCheck = name === 'date' ? ['date', 'time'] : [name];
    setErrors((previous) => {
      const next = { ...previous };
      fieldsToCheck.forEach((field) => {
        const message = validateField(field, nextValues);
        if (message) next[field] = message;
        else delete next[field];
      });
      return next;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateReservation(values);
    setErrors(nextErrors);
    setHasAttemptedSubmit(true);

    const firstInvalid = reservationFields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }
    setIsPrepared(true);
  };

  const handleEdit = () => {
    setIsPrepared(false);
    setHasEdited(true);
  };

  const { min: minDate, max: maxDate } = getDateLimits();

  return (
    <section id="reservation" className="section section--alt reservation" aria-labelledby="reservation-title">
      <div className="container reservation__grid">
        <div className="reservation__intro">
          <SectionHeading id="reservation-title" eyebrow="Reservations" title="Reserve your table.">
            <p>
              Tell us when you would like to join us. Dinner is served Tuesday to Sunday, with the
              last seating at 10:30 pm.
            </p>
          </SectionHeading>

          <dl className="reservation__details">
            <div>
              <dt>Groups larger than {MAX_GUESTS}</dt>
              <dd>
                Call <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
          </dl>

          <aside className="demo-notice" aria-label="Demo booking notice">
            <Info size={20} strokeWidth={1.5} aria-hidden="true" />
            <p>
              <strong>Demonstration only.</strong> This website is not connected to a booking
              system. The form checks your details and prepares an enquiry email; it does not
              reserve a table or send anything automatically.
            </p>
          </aside>
        </div>

        <div className="reservation__panel">
          {isPrepared ? (
            <div className="reservation__summary">
              <p className="eyebrow">Enquiry prepared</p>
              <h3 className="reservation__summary-title" tabIndex={-1} ref={focusElement}>
                Your enquiry is ready to send.
              </h3>
              <p className="reservation__summary-note">
                Nothing has been sent and no table has been reserved yet. Choose{' '}
                <strong>Open in email app</strong> to create a pre-filled email you can review and
                send yourself.
              </p>

              <dl className="reservation__summary-list">
                {getReservationSummary(values).map(({ label, value }) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="reservation__actions">
                <a className="btn btn--primary" href={buildReservationMailto(values)}>
                  <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
                  Open in email app
                </a>
                <button type="button" className="btn btn--ghost" onClick={handleEdit}>
                  <Pencil size={18} strokeWidth={1.5} aria-hidden="true" />
                  Edit details
                </button>
              </div>

              <p className="reservation__fine-print">
                In this demo the recipient ({contact.email}) is a placeholder address and will not
                receive mail. A live version would connect to the restaurant’s booking service.
              </p>
            </div>
          ) : (
            <form className="reservation__form" noValidate onSubmit={handleSubmit} aria-labelledby="reservation-form-title">
              <h3 id="reservation-form-title" className="reservation__form-title">
                Reservation enquiry
              </h3>
              <p className="reservation__form-note">All fields are required unless marked optional.</p>

              <div className="reservation__fields">
                <FormField id={fieldId('name')} label="Full name" error={errors.name} className="form-field--full">
                  {(props) => (
                    <input
                      {...props}
                      name="name"
                      type="text"
                      autoComplete="name"
                      autoFocus={hasEdited}
                      value={values.name}
                      onChange={handleChange}
                    />
                  )}
                </FormField>

                <FormField id={fieldId('email')} label="Email" error={errors.email}>
                  {(props) => (
                    <input
                      {...props}
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      value={values.email}
                      onChange={handleChange}
                    />
                  )}
                </FormField>

                <FormField id={fieldId('phone')} label="Phone number" error={errors.phone}>
                  {(props) => (
                    <input
                      {...props}
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={values.phone}
                      onChange={handleChange}
                    />
                  )}
                </FormField>

                <FormField id={fieldId('date')} label="Preferred date" hint="Closed on Mondays." error={errors.date}>
                  {(props) => (
                    <input
                      {...props}
                      name="date"
                      type="date"
                      min={minDate}
                      max={maxDate}
                      value={values.date}
                      onChange={handleChange}
                    />
                  )}
                </FormField>

                <FormField id={fieldId('time')} label="Preferred time" error={errors.time}>
                  {(props) => (
                    <div className="select">
                      <select {...props} name="time" value={values.time} onChange={handleChange}>
                        <option value="">Select a time</option>
                        {timeSlots.map(({ value, label }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={18} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  )}
                </FormField>

                <FormField id={fieldId('guests')} label="Number of guests" error={errors.guests} className="form-field--full">
                  {(props) => (
                    <div className="select">
                      <select {...props} name="guests" value={values.guests} onChange={handleChange}>
                        <option value="">Select guests</option>
                        {guestOptions.map((count) => (
                          <option key={count} value={count}>
                            {count} {count === 1 ? 'guest' : 'guests'}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={18} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  )}
                </FormField>

                <FormField
                  id={fieldId('requests')}
                  label="Special requests"
                  optional
                  hint={`Allergies, celebrations or seating preferences. ${values.requests.length}/${MAX_REQUEST_LENGTH} characters.`}
                  error={errors.requests}
                  className="form-field--full"
                >
                  {(props) => (
                    <textarea
                      {...props}
                      name="requests"
                      rows={4}
                      maxLength={MAX_REQUEST_LENGTH}
                      value={values.requests}
                      onChange={handleChange}
                    />
                  )}
                </FormField>
              </div>

              <button type="submit" className="btn btn--primary reservation__submit">
                Prepare enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Reservation;
