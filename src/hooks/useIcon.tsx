import React from 'react';

export const useIcon = (IconComponent: any): React.ReactElement => {
  return <IconComponent /> as React.ReactElement;
};