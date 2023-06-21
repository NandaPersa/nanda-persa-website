import React from 'react'

import {
  Button,
  Container,
  PresentationContent,
  PresentationTitle,
  TitleContent,
} from './styles'
import { darkTheme } from '@/styles/darkTheme'
import Image from 'next/image'
import background from '../../../public/nanda-persa.svg'

const HomePage: React.FC = () => {
  return (
    <Container className={darkTheme}>
      <TitleContent>
        <h1>Front-end</h1>
        <h2>developer</h2>
      </TitleContent>
      <Image src={background} alt="Ananda Sá" />
      <PresentationContent>
        <div className="presentation">
          <PresentationTitle>
            {`{ Olá! Meu nome é`}
            <strong>{` Ananda. }`}</strong>
          </PresentationTitle>
          <p>
            Sou desenvolvedora front-end e trabalho com <strong>React</strong> e{' '}
            <strong>React Native.</strong>
            Trabalho na área desde 2017 e adquiri diversos conhecimentos durante
            essa trajetória.
          </p>
        </div>
        <Button type="button">Download CV</Button>
      </PresentationContent>
    </Container>
  )
}

export default HomePage
