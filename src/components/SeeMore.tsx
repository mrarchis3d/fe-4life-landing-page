import React, { useState } from 'react';

export interface Props {
  body: string;
}

export const SeeMore: React.FC<Props> = ({ body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: isOpen ? body : '' }} />
      <a
        className="mb-4 text-blue-900 hover:text-green-600 underline"
        onClick={toggleExpand}
      >
        {isOpen ? <>...ver menos</> : <>ver características..</>}
      </a>
    </>
  );
};
