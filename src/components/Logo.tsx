import React from 'react';
import { IMAGES } from '../assets/images';

interface LogoProps {
  variant?: 'dark' | 'light' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'vertical';
  showSubtitle?: boolean;
  className?: string;
  imgClassName?: string;
}

export const SeingeniaLogo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  imgClassName = '',
}) => {
  const isLight = variant === 'light';

  const sizeClasses = {
    sm: 'h-[72px] sm:h-[82px]',
    md: 'h-[92px] sm:h-[111px]',
    lg: 'h-[128px] sm:h-[147px]',
    xl: 'h-[182px] sm:h-[218px]',
  };

  // For light variant on dark backgrounds, invert the black logo to white
  const imageFilter = isLight ? 'brightness-0 invert' : '';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={IMAGES.logo.principal}
        alt="Constructora Seingenia Logo"
        className={`${imgClassName || sizeClasses[size]} w-auto object-contain transition-all duration-200 ${imageFilter}`}
      />
    </div>
  );
};
