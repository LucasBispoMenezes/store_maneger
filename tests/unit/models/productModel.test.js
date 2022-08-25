const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');


describe('testando a rota product Camada model"', () => {
  describe('funcão getAll', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[
        { id: 1, name: 'Martelo de Thor' },
        { id: 2, name: 'Traje de encolhimento' },
        { id: 3, name: 'Escudo do Capitão América' }
      ]])
    })
    after(() => {
      connection.execute.restore();
    })
    it('é um  array', async () => {
      const result = await productModel.getAll()
      expect(result).to.be.an('array')
    })
    it('não está vazio', async () => {
      const result = await productModel.getAll()
      expect(result).to.be.not.empty
    })
    it('tem a chaves "id, name"', async () => {
      const result = await productModel.getAll()
      expect(result[0]).to.be.all.keys('id', 'name')
    })
  })
  describe('funcão finById', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[
        { id: 1, name: 'Martelo de Thor' },
      ]])
    })
    after(() => {
      connection.execute.restore();
    })
    it('é um  array', async () => {
      const result = await productModel.findById(1)
      expect(result).to.be.an('array')
    })
    it('não está vazio', async () => {
      const result = await productModel.findById(1)
      expect(result).to.be.not.empty
    })
    it('tem a chaves "id, name"', async () => {
      const result = await productModel.findById(1)
      expect(result[0]).to.be.all.keys('id', 'name')
    })
    it('tem somente um valor no objeto', async () => {
      const result = await productModel.findById(1)
      expect(result).to.be.lengthOf(1)
    })
  })
  describe('funcão create', async () => {
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
      const result = await productModel.create('lucas')
      expect(result).to.be.an('object')
    })
    it('não está vazio', async () => {
      const result = await productModel.create('lucas')
      expect(result).to.be.not.empty
    })
    it('tem as chaves "insertId, affectedRows"', async () => {
      const result = await productModel.create('lucas')
      expect(result).to.have.includes({ 'insertId': 4, 'affectedRows': 1 })
    })
  })
  describe('funcão updataProduct', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([
        {
          fieldCount: 0,
          affectedRows: 1,
          insertId: 0,
          info: 'Rows matched: 1  Changed: 1  Warnings: 0',
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
      const result = await productModel.updateProduct(1,'lucas')
      expect(result).to.be.an('object')
    })
    it('não está vazio', async () => {
      const result = await productModel.updateProduct(1,'lucas')
      expect(result).to.be.not.empty
    })
    it('tem as chaves " affectedRows com valor 1"', async () => {
      const result = await productModel.updateProduct(1, 'lucas')
      expect(result).to.includes({ 'affectedRows': 1 })
    })
  })
  describe('funcão deleteId', async () => {
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
      const result = await productModel.deleteId(1, 'lucas')
      expect(result).to.be.an('object')
    })
    it('não está vazio', async () => {
      const result = await productModel.deleteId(1, 'lucas')
      expect(result).to.be.not.empty
    })
    it('tem as chaves "affectedRows" valor 1', async () => {
      const result = await productModel.deleteId(1)
      expect(result).to.includes({ 'affectedRows': 1 })
    })
  })
})