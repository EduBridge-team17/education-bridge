import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const baseStyles =
    'font-semibold rounded transition-all duration-200 focus:outline-none';

  const variants = {
    primary:
      'bg-primary-700 text-white hover:bg-primary-800 disabled:bg-neutral-400',
    secondary:
      'bg-secondary-700 text-white hover:bg-secondary-800 disabled:bg-neutral-400',
    danger:
      'bg-error-600 text-white hover:bg-error-700 disabled:bg-neutral-400',
    success:
      'bg-success-600 text-white hover:bg-success-700 disabled:bg-neutral-400',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClass = variants[variant] || variants.primary;
  const sizeClass = sizes[size] || sizes.md;
  const styledClasses =
    `${baseStyles} ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styledClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;