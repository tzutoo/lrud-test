import { useState } from 'react';
import { FocusNode } from '@please/lrud';
import { AnimatePresence } from 'framer-motion';
import './../../App.css';
import Profiles from './profiles/profiles';
import Home from './home/home';
import Nav from './nav/nav';

function TV_app() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const hasSelectedProfile = Boolean(selectedProfile);

  return (
    <FocusNode className="app">
      <AnimatePresence>
        {!hasSelectedProfile && (
          <Profiles setSelectedProfile={setSelectedProfile} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {hasSelectedProfile && <Home profile={selectedProfile} />}
      </AnimatePresence>
      {selectedProfile && <Nav selectedProfile={selectedProfile} />}
    </FocusNode>
  );
}
export default TV_app;