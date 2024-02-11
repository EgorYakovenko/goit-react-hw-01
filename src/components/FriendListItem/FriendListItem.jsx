import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  const chengeColor = clsx(isOnline ? css.onLine : css.offLine);
  return (
    <div>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={chengeColor}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
