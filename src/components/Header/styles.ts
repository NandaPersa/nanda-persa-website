import { styled } from '@/styles'

export const Container = styled('header', {
  padding: '10px 30px',
  backgroundColor: '$secondaryBase',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h1: {
    fontFamily: '$secondary',
    fontStyle: 'normal',
    fontWeight: '$regular',
    fontSize: '$4xl',
    lineHeight: '19px',

    color: '$tertiary',
  },
})

export const NavBar = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  columnGap: '50px',
})

export const NavItem = styled('li', {
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: '$medium',
  fontSize: '$md',
  lineHeight: '19px',

  color: '$tertiary',

  cursor: 'pointer',

  '&:hover': {
    borderBottom: '4px solid $primaryBase',
    fontWeight: '$bold',
  },

  variants: {
    active: {
      true: {
        borderBottom: '4px solid $primaryBase',
      },
    },
  },
})

export const MenuButton = styled('nav', {
  display: 'block',
  cursor: 'pointer',
})

export const MobileMenuContent = styled('ul', {
  width: '35%',
  position: 'absolute',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$secondaryBase',
  padding: '10px',
  right: 0,
  marginRight: '30px',
  borderRadius: '12px',
  border: '1px solid $tertiary',
})

export const MenuItem = styled('li', {
  padding: '10px 20px',

  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: '$medium',
  fontSize: '$md',
  lineHeight: '19px',

  color: '$tertiary',

  '&:hover': {
    borderBottom: '4px solid $primaryBase',
    fontWeight: '$bold',
  },
})
