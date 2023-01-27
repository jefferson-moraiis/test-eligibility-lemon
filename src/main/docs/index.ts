import paths from './paths'
import * as components from './components'
import * as schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Elegibilidade Lemon',
    description: 'Essa é a documentação da API feita pelo desenvolvedor Jefferson Morais usando Typescript, TDD, e seguindo os princípios do SOLID e Design Patterns.',
    version: '1.0.0',
    contact: {
      name: 'Jefferson Orlando Oliveira de Morais',
      email: 'jefferson.orlando.morais@hotmail.com',
      url: 'https://www.linkedin.com/in/jefferson-orlando-oliveira-de-morais'
    }
  },
  ...paths,
  schemas,
  components
}
