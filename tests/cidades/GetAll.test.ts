import { StatusCodes } from "http-status-codes"
import { testServer } from "../jest.setup"


describe('Cidades - GetAll', () => {
    
    it('Busca todas Cidades', async () => {

        const res = await testServer
            .post('/cidades')
            .send({nome:"Soroqueibol"})

        expect(res.statusCode).toEqual(StatusCodes.CREATED)

        const resBuscada = await testServer
            .get('/cidades')
            .send()
            
        expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0)
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK)
        expect(resBuscada.body.length).toBeGreaterThan(0)
    })

})