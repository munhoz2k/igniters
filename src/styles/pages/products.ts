import { styled } from "@/styles";
import { cursorTo } from "readline";

export const ProductContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',

  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto'
})

export const ImageContainer = styled('div', {
  background: '$imageBackground',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: 576,
  height: '656px',
  padding: '0.25rem',
  borderRadius: 8,

  'img': {
    objectFit: 'cover'
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  'h1': {
    fontSize: '$2xl',
    color: '$gray300'
  },
  
  'span': {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300'
  },
  
  'p': {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300'
  },
  
  'button': {
    background: '$green500',
    color: '$white',
    fontWeight: 'bold',
    fontSize: '$md',

    marginTop: 'auto',
    padding: '1.25rem',

    border: 0,
    borderRadius: 8,

    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(disabled):hover': {
      filter: 'brightness(0.8)'
    }
  }
})
