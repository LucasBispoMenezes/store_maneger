const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');


describe('testando a rota "/product"', () => {
  describe('caso não tenha nada no banco de dados', () => {
    before(() => {
      const model = [[]]
      sinon.stub(connection, 'execute').returns(model)
        })
    after(() => {
      connection.execute.restore()
    })
    it('deve retornar um array', async () => {
      const result = await productModel.getAll();
      expect(result).to.be.an('array')
    })
    it('o array deve está vazio"', async () => {
      const result = await productModel.getAll();
      expect(result).to.be.empty;
    })
  })
  describe('testando caso de sucesso', () => {
    const model = [
      [{
        id: 1,
        name: 'Martelo de Thor'
      },
      {
        id: 1,
        name: 'Martelo de Thor'
      }],
      []]
    before(() => {
      sinon.stub(connection, 'execute').returns(model)
    })
    after(() => {
      connection.execute.restore()
    })
    it('o retorno é um array', async () => {
      const result = await productModel.getAll();
      expect(result).to.be.an('array')
    })
    it('o array não pode ser vazio ', async () => {
      const result = await productModel.getAll();
      expect(result).not.to.have.empty;
    })
    it('o array deve conter mais de um item ', async () => {
      const result = await productModel.getAll();
      expect(result).to.have.lengthOf(2);
    })
  })
})
describe('testando a rota "/product/id"', () => {
  describe('testando caso de falha ', () => {
    const model = [[]]
    before(() => {
      sinon.stub(connection, 'execute').resolves(model)
    })
    after(() => {
      connection.execute.restore()
    })
    it('deve retornar um array', async () => {
      const result = await productModel.findById(5);
      expect(result).to.be.an('array')
    })
    it('o array deve está vazio"', async() => {
      const result = await productModel.findById(5);
      expect(result).to.be.empty;
    })
  })
  describe('testando caso de sucesso', () => {
    const model = [
      [{
        id: 1,
        name: 'Martelo de Thor'
      }],
      []
    ]
    before(() => {
      sinon.stub(connection, 'execute').returns(model)
    })
    after(() => {
      connection.execute.restore()
    })
    it('o retorno é um array', async () => {
      const result = await productModel.findById(1);
      expect(result).to.be.an('array')
    })
    it('o array não pode ser vazio ', async () => {
      const result = await productModel.findById(1);
      expect(result).not.to.have.empty;
    })
    it('o array deve conter mais de um item ', async () => {
      const result = await productModel.findById(1);
      expect(result).to.have.lengthOf(1);
    })
  })
})