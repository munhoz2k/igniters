import { styled } from "@/styles";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

  minHeight: '100vh'
})

export const Header = styled('header', {
  padding: '2rem 0',
  margin: '0 auto',

  width: '100%',
  maxWidth: 1180,
})

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  'p': {
    fontWeight: 500,
  }
})