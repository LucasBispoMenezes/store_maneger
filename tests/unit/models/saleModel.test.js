const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/salesModel');

describe('testando a createSale', () => {
  before(() => {
    sinon.stub(connection, 'execute').resolves([
      {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 25,
        "info": "",
        "serverStatus": 2,
        "warningStatus": 0
      }])
  })
  after(() => {
    connection.execute.restore()
  })
  it('testando se é possivel inserir sale', async () => {
    const result = await saleModel.createSale();
    expect(result).to.be.an('object')
    expect(result).to.be.not.null
    expect(result).to.be.not.empty
    expect(result).to.be.all.keys(
      "fieldCount",
      "affectedRows",
      "insertId",
      "info",
      "serverStatus",
      "warningStatus"
    )
  })
})
describe('testando o createProductSale', () => {
  before(() => {
    sinon.stub(connection, 'execute').resolves([
      {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "info": "",
        "serverStatus": 2,
        "warningStatus": 0
      }])
  })
  after(() => {
    connection.execute.restore()
  })
  it('testando se é possivel inserir sale', async () => {
    const result = await saleModel.createProductSale({id:1, productId:1, quantity:1});
    expect(result).to.be.an('object')
    expect(result).to.be.not.null
    expect(result).to.be.not.empty
    expect(result).to.be.all.keys(
      "fieldCount",
      "affectedRows",
      "insertId",
      "info",
      "serverStatus",
      "warningStatus"
    )
  })
})