import { styled } from "@/styles";

export const HomeContainer = styled('main', {
  display: 'flex',

  marginLeft: 'auto',

  width: '100%',
  height: '100%',
  maxWidth: 'calc(1180px + ((100vw - 1180px) / 2))',
  minHeight: 656,
})

export const Product = styled('div', {
  background: '$imageBackground',

  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  
  overflow: 'hidden',
  cursor: 'pointer',
  borderRadius: 8,
  
  'img': {
    objectFit: 'cover',
  },

  '&:hover': {
    'footer': {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})

export const ProductFooter = styled('footer', {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',

  borderRadius: 6,
  padding: '2rem',

  transform: 'translateY(100%)',
  opacity: 0,
  transition: 'all .3s ease-in-out',

  'strong': {
    fontSize: '$lg',
    color: '$gray100'
  },
  
  'span': {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },
})