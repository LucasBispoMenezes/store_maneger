const { expect } = require('chai');
const sinon = require('sinon');
const saleService = require('../../../services/saleServices');
const saleModel = require('../../../models/salesModel');

describe('testando a createSele', () => {
  before(() => {
    sinon.stub(saleModel, 'createSale').resolves(
      {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 25,
        "info": "",
        "serverStatus": 2,
        "warningStatus": 0
      })
  })
  after(() => {
    saleModel.createSale.restore()
  })
  it('testando se é possivel inserir sale', async () => {
    const result = await saleService.createSale();
    expect(result).to.be.an('number')
    expect(result).to.be.not.false
    expect(result).to.be.equal(25)
  })
})
describe('testando a createProductSale', () => {
  before(() => {
    sinon.stub(saleModel, 'createProductSale').resolves(
      {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 25,
        "info": "",
        "serverStatus": 2,
        "warningStatus": 0
      })
  })
  after(() => {
    saleModel.createProductSale.restore()
  })
  it('testa se é possivel inserir product sales', async () => {
    const result = await saleService.createProductSale({ id: 1, productId: 1, quantity: 1 })
    expect(result).to.be.an('boolean')
    expect(result).to.be.not.false
    expect(result).to.be.true
  })
})