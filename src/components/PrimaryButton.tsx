import React from 'react';

interface PrimaryButtonProps {
  href?: string;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ href, children }) => {
  if (href) {
    return (
      <a className="button" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }

  return <button className="button">{children}</button>;
};

export default PrimaryButton;
