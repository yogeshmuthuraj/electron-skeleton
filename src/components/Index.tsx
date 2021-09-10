import React from 'react';
import DenseAppBar from './AppBar/MiniDrawer';
import Homepage from './Homepage';

const Index = () => {
  // awaits for new relic api calls , curl commands
  return (
    <div>
      <DenseAppBar />
      <Homepage />
    </div>
  );
};

export default Index;
