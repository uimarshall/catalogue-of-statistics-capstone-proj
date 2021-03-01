import React from 'react';

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

export default UserInfoItems;
