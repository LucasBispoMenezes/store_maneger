const { expect } = require('chai');
const sinon = require('sinon');
const saleService = require('../../../services/saleServices');
const saleController = require('../../../controllers/saleController');


describe('testando a camada controller do sale', () => {
  describe('testando caso de erro', () => {
    const res = {}, req = {};
    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns()
      sinon.stub(saleService, 'createSale').throws()
    })
    after(() => {
      saleService.createSale.restore()
    })
    it('retorna o statusCode 500', async () => {
      const result = await saleController.createSale(req, res)
      expect(res.status.calledWith(500)).to.have.true;
    })
    it('retorna a mensagem "deu merda"', async () => {
      const result = await saleController.createSale(req, res)
      expect(res.json.calledWith({ message: "deu merda" })).to.have.true;
    })
  })
  describe("testando caso de sucesso", () => {
    const res = {}, req = {};
    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns()
      sinon.stub(saleService, 'createSale').returns(2)
    })
    after(() => {
      saleService.createSale.restore()
    })
    it('deve retornar um statuscode 201', async () => {
      const result = await saleController.createSale(req, res)
      expect(res.status.calledWith(201)).to.be.true
    })
/*     it('deve retornar um objetoCom ', async () => { 
      const result = await saleController.createSale(req, res)
      expect(res.json.calledWith({"id": 2})).to.be.true
    })
    it('deve retornar um array', async () => { }) */
  })
})