const { expect } = require('chai');
const { array } = require('joi');
const sinon = require('sinon');
const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

describe('testando rota /Product da camada service', () => {
  describe('testando caso de não encontre no banco de dados', () => {
    before(() => {
      sinon.stub(productModel, 'getAll').resolves(false)
    })
    after(() => {
      productModel.getAll.restore()
    })
    it('espero que seja booleano', async () => {
      const result = await productService.getAll()
      expect(result).to.be.an('boolean')
    })
    it('espero que o booleano seja igual a "false"', async () => {
      const result = await productService.getAll()
      expect(result).to.be.false
    })
  })
  it('o array não esteja vazio', async function () {
    const result = await productService.getAll();
    console.log(result);
    expect(result).to.not.empty;
  });
  describe('testando caso de sucesso', () => {
    before(() => {
      sinon.stub(productService, 'getAll').resolves([
        {
          "id": 1,
          "name": "Martelo de Thor",
        },
        {
          "id": 2,
          "name": "Traje de encolhimento",
        }
      ])
    })
    after(() => {
      productService.getAll.restore()
    })
    it('espero que seja um array', async () => {
      const result = await productService.getAll()
      expect(result).to.be.a('array')
    })
    it('espero que o array tenha mais de um iten', () => { })
  })
})
describe('testando rota /Product/:id da camada service', () => {
  describe('testando caso de erro', () => {
    before(() => {
      sinon.stub(productService, 'findById').resolves(false)
    })
    after(() => {
      productService.findById.restore()
    })
    it('espero que seja booleano', async () => {
      const result = await productService.findById()
      expect(result).to.be.an('boolean')
    })
    it('espero que o booleano seja igual a "false"', async () => {
      const result = await productService.findById()
      expect(result).to.be.false
    })
  })
  describe('testando caso de sucesso', () => {

    before(() => {
      sinon.stub(productService, 'findById').resolves([
        {
          "id": 1,
          "name": "Martelo de Thor",
        }
      ])
    })
    after(() => {
      productService.findById.restore()
    })
    it('espero que o array tenha tenha somente 1 iten ', async () => {
      const result = await productService.findById(1)
      expect(result).to.be.length(1)
      expect(result).not.to.be.length(2)

    })
    it('espero que seja um array', async () => {
      const result = await productService.findById(1)
      expect(result).to.be.a('array')
    })
    it('espero que o array não esteja vazio', async () => {
      const result = await productService.findById(1)
      expect(result).not.to.be.empty
    })
    it('espero que dentro array seja um objeto', async () => {
      const result = await productService.findById(1)
      expect(result[0]).to.be.a('object')
    })
    it('o array possua itens do tipo objeto', async function () {
      const result = await productService.getAll();
      expect(result[0]).to.be.an('object');
    })
  })

})
