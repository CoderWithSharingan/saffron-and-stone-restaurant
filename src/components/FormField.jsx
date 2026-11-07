function FormField({ id, label, error, hint, optional = false, className = '', children }) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={`form-field${error ? ' form-field--invalid' : ''} ${className}`.trim()}>
      <label className="form-field__label" htmlFor={id}>
        {label}
        {optional && <span className="form-field__optional"> (optional)</span>}
      </label>
      {children({ id, 'aria-invalid': error ? true : undefined, 'aria-describedby': describedBy })}
      {hint && (
        <p id={hintId} className="form-field__hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="form-field__error">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;
