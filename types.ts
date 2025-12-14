import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  tag: string;
  stat: string;
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
}

export interface TestimonialProps {
  name: string;
  pet: string;
  text: string;
  image: string;
}