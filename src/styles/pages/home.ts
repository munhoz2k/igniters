import { styled } from "@/styles";

export const HomeContainer = styled('main', {
  position: 'relative',
  display: 'flex',

  width: '100%',
  maxWidth: 'calc(1180px + ((100vw - 1180px) / 2))',

  marginLeft: 'auto',
  marginBottom: '1rem',

  borderRadius: 8,

  '.swiper-pagination-bullet': {
    background: '$gray100'
  },

  '.left-shadow': {
    background: 'linear-gradient(90deg, $gray900 -50%, transparent 100%)',

    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    width: 20
  },

  '.right-shadow': {
    background: 'linear-gradient(90deg, transparent -0%, $gray900 150%)',

    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    width: 20
  },
})

export const Product = styled('div', {
  background: '$imageBackground',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  overflow: 'hidden',
  borderRadius: 8,
  
  'img': {
    objectFit: 'contain',
    height: 'auto',
    maxWidth: '100%',
    paddingBottom: '3rem',
  },

  '&:hover': {
    'footer': {
      transform: 'translateY(0%)',
      opacity: 1
    }
  },
})

export const ProductFooter = styled('footer', {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',

  borderRadius: 6,
  padding: '1.5rem',

  transform: 'translateY(100%)',
  opacity: 0,
  transition: 'all .3s ease-in-out',

  'div':{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  'strong': {
    fontSize: '$lg',
    color: '$gray100'
  },
  
  'span': {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },

  'button': {
    display: 'flex',

    background: '$green500',
    color: '$white',
    
    padding: '0.75rem',
    border: 'none',
    borderRadius: 8,
    cursor: 'alias',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not([disabled]):hover': {
      filter: 'brightness(1.2)'
    }
  }
})