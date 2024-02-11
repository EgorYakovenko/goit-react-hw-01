import React from 'react';

import css from './Profile.module.css';

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.information}>
        <li className={css.informationList}>
          <span className={css.informationItem}>Followers</span>
          <span className={css.informationQuantity}>{followers}</span>
        </li>
        <li className={css.informationList}>
          <span className={css.informationItem}>Views</span>
          <span className={css.informationQuantity}>{views}</span>
        </li>
        <li className={css.informationList}>
          <span className={css.informationItem}>Likes</span>
          <span className={css.informationQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
