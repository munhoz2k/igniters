import { styled } from "@/styles";

export const SuccessContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  margin: '0 auto',
  height: 656,

  'h1': {
    fontSize: '$2xl',
    color: '$gray100'
  },

  'p': {
    color: '$gray300',
    fontSize: '$xl',
    textAlign: 'center',
    maxWidth: 560,
    margin: 'auto 0'
  },

  'a': {
    display: 'block',
    marginTop: 'auto',

    textDecoration: 'none',
    fontSize: '$lg',
    color: '$green500',

    '&:hover': {
      filter: 'brightness(0.8)'
    }
  }
})

export const ImageContainer = styled('div', {
  background: '$imageBackground',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  height: 145,
  width: '100%',
  maxWidth: 130,
  padding: '0.25rem',
  marginTop: '4rem',

  borderRadius: 8,

  'img': {
    objectFit: 'cover'
  }
})