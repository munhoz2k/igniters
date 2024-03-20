import { styled } from "@/styles";

export const CartButtonContainer = styled('button', {
  background: '$gray800',

  position: 'relative',
  display: 'flex',

  padding: '0.75rem .75rem',
  border: 0,
  borderRadius: 8,
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(1.2)'
  },
})

export const CartButtonAmount = styled('div', {
  background: '$green500',
  color: '$white',

  fontSize: '0.875rem',
  fontWeight: 'bold',

  position: 'absolute',
  top: -16,
  right: -16,

  border: '4px solid $gray900',
  borderRadius: 100,
  padding: '0.40rem 0.675rem',
})