// Heading.tsx
import React from 'react';

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h2 className="font-bold text-2xl text-[#09090B]">{text}</h2>;
};

export default Heading;