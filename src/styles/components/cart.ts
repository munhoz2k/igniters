import { styled } from "@/styles";

export const CartContainer = styled('div', {
  backgroundColor: '$gray800',

  display: 'flex',
  flexDirection: 'column',

  position: 'fixed',
  zIndex: 10,
  top: '0',
  right: '-33%',

  width: '33%',
  height: '100%',
  padding: '1rem 2rem',

  transition: 'all 0.5s ease-in-out',

  'header': {
    display: 'flex',
    justifyContent: 'end',

    'img': {
      cursor: 'pointer',

      '&:hover': {
        filter: 'brightness(0.8)'
      }
    }
  },

  '&.cart-open': {
    right: '0%',
    opacity: 1,
    boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.6)'
  }
})

export const CartProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
})

export const CartProductsList = styled('div', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  gap: '2rem',
  maxHeight: '50vh',
  borderRadius: 6,

  overflowY: 'auto',

  '&.has-scroll': {
    boxShadow: 'inset 0 -10px 10px -10px rgba(0, 0, 0, 0.5)'
  },
  '&.scroll-middle': {
    boxShadow: 'inset 0 -10px 10px -10px rgba(0, 0, 0, 0.5), inset 0 10px 10px -10px rgba(0, 0, 0, 0.5)',
  },
  '&.scroll-top': {
    boxShadow: 'inset 0 -10px 10px -10px rgba(0, 0, 0, 0.5)'
  },
  '&.scroll-bottom': {
    boxShadow: 'inset 0 10px 10px -10px rgba(0, 0, 0, 0.5)'
  },
  '&.no-scroll': {
    boxShadow: 0
  },

  '&&::-webkit-scrollbar': {
    width: 10,
  },
  '&::-webkit-scrollbar-track': {
    background: 'none',
    borderRadius: 4,
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$green500',
    borderRadius: 4,

    '&:hover': {
      background: '$green300'
    }
  }
})

export const CartCheckoutContainer = styled('div', {
  marginTop: 'auto',
  
  'div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  'div + div': {
    marginTop: '0.5rem'
  },

  'span': {
    color: '$gray300',
    fontSize: '$md',
    fontWeight: 'regular'
  },

  'h3': {
    color: '$gray100',
    fontSize: '$lg',
    fontWeight: 'bold'
  },

  'h2': {
    color: '$gray100',
    fontSize: '$xl',
    fontWeight: 'bold',
  },

  'button': {
    backgroundColor: '$green500',
    color: '$white',

    fontSize: '$md',
    fontWeight: 'bold',

    width: '100%',
    padding: '1.5rem',
    marginTop: '3rem',
    cursor: 'pointer',

    border: 0,
    borderRadius: 8,

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not([disabled]):hover': {
      filter: 'brightness(1.2)'
    }
  }
})