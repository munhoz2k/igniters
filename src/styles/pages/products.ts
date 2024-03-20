import { styled } from "@/styles";

export const ProductContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',

  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto 1rem auto'
})

export const ImageContainer = styled('div', {
  background: '$imageBackground',

  display: 'block',

  width: '100%',
  maxWidth: 480,
  borderRadius: 8,

  'img': {
    objectFit: 'contain',
    width: '100%',
    height: 'auto'
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

    '&:not([disabled]):hover': {
      filter: 'brightness(1.2)'
    }
  }
})
