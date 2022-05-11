import './button.styles.scss';

const buttonClasses = {
   google: 'google-sign-in',
   inverted: 'inverted',
};

function Button({ children, buttonType, ...otherProps }) {
   return (
      <button className={`button-container ${buttonClasses[buttonType]} `} {...otherProps}>
         {children}
      </button>
   );
}

export default Button;
