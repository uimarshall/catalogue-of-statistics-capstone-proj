import React from 'react';
import PropTypes from 'prop-types';

function UserInfoItems({
  icon, label, value, color,
}) {
  return (
    <div>
      <article className="item">
        <span className={color}>{icon}</span>
        <div>
          <h3>{value}</h3>
          <p>{label}</p>
        </div>
      </article>

    </div>
  );
}

UserInfoItems.propTypes = {

  icon: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Object).isRequired,
  color: PropTypes.string.isRequired,
};

export default UserInfoItems;
