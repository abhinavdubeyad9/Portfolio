import React from 'react';
import { Container } from '@mui/material';
import omen from '../assets/omen.png';

export default function Home() {
  return (
    <div className='hero-component'>
      <Container fixed>
        <h1 className='hero-text'>Abhinav Dubey</h1>
        <h2 className='text-center-custom'>
          I am a Radiant Full Stack Developer
        </h2>
        <Container maxWidth='sm'>
          <img src={omen} alt='omen' className='hero-image' />
        </Container>
      </Container>
    </div>
  );
}
