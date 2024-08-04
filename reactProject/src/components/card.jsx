import PropTypes from 'prop-types';
import styles from '../styles/Card.module.scss';

function Card({ icon, title, description }) {
  return (
    <div className={`card text-center ${styles.card}`}>
      <div className={styles.iconBox}>
        <i className={icon}></i>
      </div>
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{description}</p>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
