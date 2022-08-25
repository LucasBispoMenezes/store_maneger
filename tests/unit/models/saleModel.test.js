const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');


describe('testando a rota sale Camada model"', () => {
  describe('funcão getAll', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[
        {
          "saleId": 1,
          "date": "2022-08-25T19:53:15.000Z",
          "productId": 1,
          "quantity": 5
        },
        {
          "saleId": 1,
          "date": "2022-08-25T19:53:15.000Z",
          "productId": 2,
          "quantity": 10
        },
        {
          "saleId": 2,
          "date": "2022-08-25T19:53:15.000Z",
          "productId": 3,
          "quantity": 15
        }
      ]])
    })
    after(() => {
      connection.execute.restore();
    })
    it('é um  array', async () => {
      const result = await salesModel.getAll()
      expect(result).to.be.an('array')
    })
    it('não está vazio', async () => {
      const result = await salesModel.getAll()
      expect(result).to.be.not.empty
    })
    it('tem a chaves "id, name"', async () => {
      const result = await salesModel.getAll()
      expect(result[0]).to.have.includes({ 'saleId': 1, "productId": 1, 'quantity': 5 })
    })
  })
  describe('funcão findById', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[
        {
          saleId: 1,
          date: '2022-08-25T19:53:15.000Z',
          productId: 1,
          quantity: 5
        }
      ]])
    })
    after(() => {
      connection.execute.restore();
    })
    it('é um  array', async () => {
      const result = await salesModel.findByID(1)
      expect(result).to.be.an('array')
    })
    it('não está vazio', async () => {
      const result = await salesModel.findByID(1)
      expect(result).to.be.not.empty
    })
    it('tem a chaves "id, name"', async () => {
      const result = await salesModel.findByID(1)
      expect(result[0]).to.have.includes({ 'saleId': 1, "productId": 1, 'quantity': 5 })
    })
    it('tem somente um valor no objeto', async () => {
      const result = await salesModel.findByID(1)
      expect(result).to.be.lengthOf(1)
    })
  })
  describe('funcão createSale', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([
        {
          fieldCount: 0,
          affectedRows: 1,
          insertId: 4,
          info: '',
          serverStatus: 2,
          warningStatus: 0
        }
      ])
    })
    after(() => {
      connection.execute.restore();
    })
    it('é um  array', async () => {
      const result = await salesModel.createSale('lucas')
      expect(result).to.be.an('object')
    })
    it('não está vazio', async () => {
      const result = await salesModel.createSale('lucas')
      expect(result).to.be.not.empty
    })
    it('tem as chaves "insertId, affectedRows"', async () => {
      const result = await salesModel.createSale('lucas')
      expect(result).to.have.includes({ 'insertId': 4, 'affectedRows': 1 })
    })
  })
  describe('funcão createProductSale', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([
        {
          fieldCount: 0,
          affectedRows: 1,
          insertId: 0,
          info: '',
          serverStatus: 2,
          warningStatus: 0
        }
      ])
    })
    after(() => {
      connection.execute.restore();
    })
    it('é um  array', async () => {
      const result = await salesModel.createProductSale({id:1,productId: 1,quantity: 5})
      expect(result).to.be.an('object')
    })
    it('não está vazio', async () => {
      const result = await salesModel.createProductSale({id:1,productId: 1,quantity: 5})
      expect(result).to.be.not.empty
    })
    it('tem as chaves " affectedRows com valor 1"', async () => {
      const result = await salesModel.createProductSale({id:1,productId: 1,quantity: 5})
      expect(result).to.includes({ 'affectedRows': 1 })
    })
  })
 describe('funcão deleteSale', async () => {
   before(() => {
     sinon.stub(connection, 'execute').resolves([
       {
         fieldCount: 0,
         affectedRows: 1,
         insertId: 0,
         info: '',
         serverStatus: 2,
         warningStatus: 0,
         changedRows: 1
       }
     ])
   })
   after(() => {
     connection.execute.restore();
   })
   it('é um  array', async () => {
     const result = await salesModel.deleteSale(1, 'lucas')
     expect(result).to.be.an('object')
   })
   it('não está vazio', async () => {
     const result = await salesModel.deleteSale(1, 'lucas')
     expect(result).to.be.not.empty
   })
   it('tem as chaves "affectedRows" valor 1', async () => {
     const result = await salesModel.deleteSale(1)
     expect(result).to.includes({ 'affectedRows': 1 })
   })
 }) 
})