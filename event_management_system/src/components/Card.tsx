import React from 'react';

interface CardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  textSize?: string; // setting font size (optional)
}

const Card: React.FC<CardProps> = ({ title, content, icon, textSize="text-[40px]" }) => {
  return (
    <div className="bg-[#25252582] p-5 shadow hover:shadow-white rounded-[10px] text-white">
        <div className="flex">
        {icon}
      <h2 className="pl-2">{title}</h2>
        </div>
      <h1 className={`'mt-14 font-[400] ${textSize} leading-8'`}>{content}</h1>
    </div>
  );
};

export default Card;
