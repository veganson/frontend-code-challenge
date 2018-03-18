import React from 'react';

const Appartment = () => (
  <div className="appartment">
    <div className="appartment__offer-type">Mieten</div>
    <img
      className="appartment__img"
      src="https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/574eb90e8ffd7c8a2a8b4568_variant_asset5825d8e1e9420_inventoryM.jpg"
      alt="preview"
    />
    <div className="appartment__details">
      <p className="appartment__title">
        Elf Wohnungen auf einmal – 5% Mietrendite! MFH in Ettlingen - Schöll
      </p>
      <p className="appartment__address">35764 Sinn / Fleisbach</p>
      <div className="appartment__space" />
      <div className="appartment__bottom-info">
        <span className="appartment__price">$1337</span>
        <div className="appartment__space" />
        <span className="appartment__rooms">3 Zimmer</span>
        <div className="appartment__vertical-divider" />
        <span className="appartment__area">ab 35m²</span>
      </div>
    </div>
  </div>
);

export default Appartment;
