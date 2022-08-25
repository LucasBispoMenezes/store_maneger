const { expect } = require('chai');
const sinon = require('sinon');
const productService = require('../../../services/productService');
const productControllers = require('../../../controllers/productsController');


describe('testando a rota /product', () => {
  describe('getAll', () => {
    describe('caso não o encontre o produto no banco de dados', () => {
      const req = {}
      const res = {}
      before(() => {
        res.status = sinon.stub().returns(res)
        res.json = sinon.stub().returns();
        sinon.stub(productService, 'getAll').resolves([])
      })
      after(() => {
        productService.getAll.restore()
      })
      it('deve retornar um status 404', async () => {
        await productControllers.getAll(req, res)
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.true
        expect(res.status.calledWith(404)).to.be.true
      })
    })
    describe('caso encontre o produto no banco de dados', () => {
      const req = {}
      const res = {}
      const response = [
        {
          "id": 1,
          "name": "Martelo de Thor"
        },
        {
          "id": 2,
          "name": "Traje de encolhimento"
        },
        {
          "id": 3,
          "name": "Escudo do Capitão América"
        }
      ]
      before(() => {
        res.status = sinon.stub().returns(res)
        res.json = sinon.stub().returns();
        sinon.stub(productService, 'getAll').resolves([
          {
            "id": 1,
            "name": "Martelo de Thor"
          },
          {
            "id": 2,
            "name": "Traje de encolhimento"
          },
          {
            "id": 3,
            "name": "Escudo do Capitão América"
          }
        ])
      })
      after(() => {
        productService.getAll.restore()
      })
      it('deve retornar o status 200', async () => {
        await productControllers.getAll(req, res)
        expect(res.json.calledWith(response)).to.be.true
        expect(res.status.calledWith(200)).to.be.true
      })
    })
  })
  describe('findByID /product:id', () => {
    describe('caso não o encontre o produto no banco de dados', () => {
      const req = {
        params: {
          id: 7
        }
      }
      const res = {}
      before(() => {
        res.status = sinon.stub().returns(res)
        res.json = sinon.stub().returns();
        sinon.stub(productService, 'findById').resolves(undefined)
      })
      after(() => {
        productService.findById.restore()
      })
      it('deve retornar um status 404', async () => {
        await productControllers.findById(req, res)
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.true
        expect(res.status.calledWith(404)).to.be.true
      })
    })
    describe('caso encontre o produto no banco de dados', () => {
      const req = {
        params: {
          id: 1
        }
      }
      const res = {}
      const response = [
        {
          "id": 1,
          "name": "Martelo de Thor"
        }
      ]
      before(() => {
        res.status = sinon.stub().returns(res)
        res.json = sinon.stub().returns();
        sinon.stub(productService, 'findById').resolves(response)
      })
      after(() => {
        productService.findById.restore()
      })

      it('deve retornar o status 200', async () => {
        await productControllers.findById(req, res)
        expect(res.json.calledWith(response[0])).to.be.true
        expect(res.status.calledWith(200)).to.be.true
      })
    })
  })
})
