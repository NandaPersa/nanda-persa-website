import { styled } from '@/styles'

export const Container = styled('div', {
  backgroundColor: '$secondaryBase',

  padding: '10px 30px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    width: '80vw',
    height: 'auto',
  },

  '@media (min-width: 1000px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'initial',
    position: 'relative',
    height: '90vh',

    img: {
      width: '45vw',
      position: 'absolute',
      height: 'auto',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto',
    },
  },
})

export const PresentationContent = styled('div', {
  paddingTop: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  h3: {
    fontFamily: '$secondary',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '$2xl',
    lineHeight: '31px',
    color: '$tertiary',
    textAlign: 'center',
    marginBottom: '4px',
  },

  '@media (min-width: 1000px)': {
    width: '35%',
    paddingTop: '150px',
  },

  p: {
    fontFamily: '$primary',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '$md',
    lineHeight: '25px',
    color: '$tertiary',
    textAlign: 'center',
  },

  strong: {
    fontFamily: '$primary',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '$md',
    lineHeight: '25px',
    color: '$primaryBase',
    textAlign: 'center',
  },
})

export const PresentationTitle = styled('h3', {
  h3: {
    fontFamily: '$secondary',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '$2xl',
    lineHeight: '31px',
    color: '$tertiary',
    textAlign: 'center',
    marginBottom: '4px',
  },

  strong: {
    fontFamily: '$secondary',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '$2xl',
    lineHeight: '31px',
    color: '$primaryBase',
    textAlign: 'center',
    marginBottom: '4px',
  },
})

export const TitleContent = styled('div', {
  h1: {
    fontFamily: '$primary',
    fontStyle: 'normal',
    fontWeight: '$bold',
    fontSize: '$6xl',
    lineHeight: '61px',
    color: '$tertiary',
  },

  h2: {
    marginLeft: '100px',
    fontFamily: '$secondary',
    fontStyle: 'normal',
    fontWeight: '$medium',
    fontSize: '$6xl',
    lineHeight: '61px',
    color: '$primaryBase',
  },

  '@media (min-width: 1000px)': {
    width: '30%',
    paddingTop: '100px',
  },
})

export const Button = styled('button', {
  maxWidth: '200px',
  marginTop: '50px',
  padding: '15px 50px !important',

  background: 'linear-gradient(113.01deg, #030212 -4.98%, #6A348F 107.05%)',
  borderRadius: '24px',
  border: 'none',

  fontFamily: '$primary',
  textAlign: 'center',
  fontStyle: 'normal',
  fontWeight: '$medium',
  fontSize: '$sm',
  color: '$tertiary',

  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'all 0.5s',
  },
})
