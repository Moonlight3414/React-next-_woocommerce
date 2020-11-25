import React from 'react'
import Layout from '../components/Layout'
import { withLayout } from '@moxy/next-layout'
import { PageContainer } from '../components/Container/ContainerElements'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Layout pageTitle="Apie mane">
      <PageContainer>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam. Itaque harum
          iusto dolore repellendus commodi mollitia perferendis ad possimus esse, id, sapiente,
          beatae non facere veniam magni placeat autem!
        </p>
      </PageContainer>
    </Layout>
  )
}

export default About
