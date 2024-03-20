import { styled } from "@/styles";

export const SuccessContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  margin: '0 auto',

  'h1': {
    fontSize: '$2xl',
    color: '$gray100'
  },

  'p': {
    color: '$gray300',
    fontSize: '$xl',
    textAlign: 'center',
    maxWidth: 560,
    marginTop: '4rem'
  },

  'a': {
    display: 'block',
    marginTop: '2rem',
    marginBottom: '2rem',

    textDecoration: 'none',
    fontSize: '$lg',
    color: '$green500',

    '&:hover': {
      filter: 'brightness(0.8)'
    }
  }
})

export const ImagesList = styled('div', {
  display: 'flex',
  marginTop: '3rem',
})

export const ImageContainer = styled('div', {
  background: '$imageBackground',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  width: '100%',
  maxWidth: 130,
  height: 'auto',

  padding: '0.5rem',
  marginLeft: -40,

  boxShadow: '-10px 0px 50px 4px rgba(0, 0, 0, 0.5)',
  borderRadius: 100,

  'img': {
    objectFit: 'contain'
  }
})