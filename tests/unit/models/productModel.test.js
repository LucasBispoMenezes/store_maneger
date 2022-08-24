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
      const item = result[0]
      expect(item).to.include.all.keys('id', 'name')
    })
    it('o array possua itens do tipo objeto', async function () {
      const result = await productModel.getAll();
      expect(result[0]).to.be.an('object');
    });
  })
})
describe('testando a rota "/product/id"', () => {
  describe('caso não encontre no banco de dados ', () => {
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
    it('o array deve está vazio"', async () => {
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
    it('o array nãp pode conter mais de um item ', async () => {
      const result = await productModel.findById(1);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.include.all.keys('id', 'name')

    })
    it('o array possua itens do tipo objeto', async function () {
      const result = await productModel.getAll();
      expect(result[0]).to.be.an('object');
    })
  })
})