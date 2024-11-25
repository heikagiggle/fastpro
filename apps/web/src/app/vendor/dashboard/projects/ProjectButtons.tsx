'use client'
import React, { useState } from 'react';
import ProjectTabButtons from './ProjectTabButtons';

const ProjectButtons = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
      <ProjectTabButtons setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default ProjectButtons;
