export default {
  paths:{
    '/check-eligibility':{
      post: {
        tags: ['Elegibilidade de Clientes'],
        summary: 'API para verficar a elegibilidade de clientes',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/schemas/consumptionInputSchema'
              },
            }
          }
        },
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/schemas/consumptionOutputSuccessSchema'
                }
              }
            }
          },
          400: {
            $ref: '#/components/badRequest'
          },
          404: {
            $ref: '#/components/notFound'
          },
          500: {
            $ref: '#/components/serverError'
          }
        }
      }
    }
  }
}
