import { useState } from 'react';
import MenuCard from './MenuCard';
import SectionHeading from './SectionHeading';
import { menuCategories, menuItems } from '../data/menuData';
import '../styles/menu.css';

const categoryLabels = Object.fromEntries(menuCategories.map(({ id, label }) => [id, label]));

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const visibleItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const activeLabel = categoryLabels[activeCategory];
  const resultSummary =
    activeCategory === 'all'
      ? `Showing all ${visibleItems.length} dishes`
      : `Showing ${visibleItems.length} ${visibleItems.length === 1 ? 'dish' : 'dishes'} in ${activeLabel}`;

  return (
    <section id="menu" className="section section--alt menu" aria-labelledby="menu-title">
      <div className="container">
        <SectionHeading id="menu-title" eyebrow="The Menu" title="A journey across India, one plate at a time." align="center">
          <p>
            A seasonal selection from our kitchen. Prices are in Indian rupees and inclusive of
            taxes. Please tell us about any allergies when you reserve.
          </p>
        </SectionHeading>

        <div className="menu__filters" role="group" aria-label="Filter dishes by category">
          {menuCategories.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className="menu__filter"
              aria-pressed={activeCategory === id}
              onClick={() => setActiveCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="visually-hidden" aria-live="polite">
          {resultSummary}
        </p>

        {visibleItems.length > 0 ? (
          <ul className="menu__grid">
            {visibleItems.map((item) => (
              <li key={item.id}>
                <MenuCard item={item} categoryLabel={categoryLabels[item.category]} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="menu__empty">
            <p>There are no {activeLabel.toLowerCase()} on the menu at the moment.</p>
            <button type="button" className="btn btn--ghost btn--sm" onClick={() => setActiveCategory('all')}>
              View all dishes
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Menu;
