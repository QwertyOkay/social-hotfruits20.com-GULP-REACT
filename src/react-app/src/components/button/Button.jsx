import styles from './Button.module.scss';

function Button({
  variant = 'btn',
  ariaLabel,
  title,
  type = 'button',
  onClick,
}) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={styles[variant]}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
