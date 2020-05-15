import React from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

export default function Loading() {
  TopBarProgress.config({
    barColors: {
      '0': '#3C6EE6',
      '0.5': '#4D52FC',
      '0.7': '#643CE6',
      '1': '#7159c1',
    },
    shadowBlur: 5,
  });

  return <TopBarProgress />;
}
