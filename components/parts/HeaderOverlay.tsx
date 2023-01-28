import React from 'react';

interface HeaderOverlayProps {
  children: React.ReactNode;
  visible?: boolean;
}

const HeaderOverlay = ({ children, visible = true }: HeaderOverlayProps) => (
  <div
    className={`fixed inset-x-0 top-14 bottom-0 bg-black/70 md:top-20 lg:top-28 ${
      !visible ? 'hidden' : ''
    }`}>
    {children}
  </div>
);

export default HeaderOverlay;
