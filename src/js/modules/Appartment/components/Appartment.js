import React from 'react';
import R from 'ramda';
import PropTypes from 'prop-types';

const Appartment = ({ appartment }) => {
  const { title, realestateSummary, advertisementPrice } = appartment;

  const numberOfRooms = R.propOr('', 'numberOfRooms', realestateSummary);
  const space = R.propOr('', 'numberOfRooms', realestateSummary);
  const fullAddress = R.pathOr(
    '',
    ['address', 'fullAddress'],
    realestateSummary,
  );
  const sellPrice = R.propOr('', 'sellPrice', advertisementPrice);
  const baseRent = R.propOr('', 'baseRent', advertisementPrice);

  return (
    <div className="appartment">
      <div className="appartment__offer-type">Mieten</div>
      <img
        className="appartment__img"
        src="https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/574eb90e8ffd7c8a2a8b4568_variant_asset5825d8e1e9420_inventoryM.jpg"
        alt="preview"
      />
      <div className="appartment__details">
        <p className="appartment__title">{title}</p>
        <p className="appartment__address">{fullAddress}</p>
        <div className="appartment__space" />
        <div className="appartment__bottom-info">
          <span className="appartment__price">{sellPrice || baseRent} $</span>
          <div className="appartment__space" />
          <span className="appartment__rooms">{numberOfRooms} Zimmer</span>
          <div className="appartment__vertical-divider" />
          <span className="appartment__area">ab {space}m²</span>
        </div>
      </div>
    </div>
  );
};

Appartment.propTypes = {
  appartment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    realestateSummary: PropTypes.shape({
      address: PropTypes.shape({
        fullAddress: PropTypes.string,
      }).isRequired,
      numberOfRooms: PropTypes.number.isRequired,
      space: PropTypes.number.isRequired,
    }).isRequired,
    advertisementPrice: PropTypes.shape({
      baseRent: PropTypes.number,
      sellPrice: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default Appartment;
