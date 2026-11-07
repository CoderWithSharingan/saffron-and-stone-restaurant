const priceFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

function MenuCard({ item, categoryLabel }) {
  const { name, description, price, tag, image } = item;

  return (
    <article className="menu-card">
      <div className="menu-card__media">
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="menu-card__body">
        <p className="menu-card__meta">
          <span>{categoryLabel}</span>
          {tag && <span className="menu-card__tag">{tag}</span>}
        </p>
        <div className="menu-card__heading">
          <h3 className="menu-card__name">{name}</h3>
          <p className="menu-card__price">{priceFormatter.format(price)}</p>
        </div>
        <p className="menu-card__description">{description}</p>
      </div>
    </article>
  );
}

export default MenuCard;
