import { styled } from "@/styles";

export const CartItemContainer = styled('div', {
  display: 'flex',
  gap: '1.5rem'
})

export const CartItemImageContainer = styled('div', {
  background: '$imageBackground',
  borderRadius: '12px',

  'img': {
    objectFit: 'cover'
  }
})

export const CarItemInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  'h3': {
    color: '$gray300',
    fontWeight: 'regular',
    fontSize: '$md'
  },

  'h2': {
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$md'
  },

  'button': {
    background: 0,
    color: '$green500',

    fontWeight: 'bold',
    fontSize: '1rem',

    width: 'fit-content',
    border: 0,
    cursor: "pointer",

    '&:hover': {
      color: '$green300'
    }
  }
})