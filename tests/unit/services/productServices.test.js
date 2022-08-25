const { expect } = require('chai');
const { array } = require('joi');
const sinon = require('sinon');
const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

describe('testando Product da camada service', () => {
  describe('getAll', () => {
    describe('falied', () => {
      before(() => {
        sinon.stub(productModel, 'getAll').resolves([])
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
    describe('sucess', () => {
      before(() => {
        sinon.stub(productModel, 'getAll').resolves([
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
        productModel.getAll.restore()
      })
      it('espero que seja um array', async () => {
        const result = await productService.getAll()
        expect(result).to.be.a('array')
      })
      it('o array possua itens do tipo objeto', async () => {
        const result = await productService.getAll();
        expect(result[0]).to.be.an('object');
      })
      it('objetos tenham as propriedades: "id", "name"', async () => {
        const result = await productService.getAll();
        expect(result[0]).to.all.keys('id', 'name');
      });
    })
  })
  describe('findById', () => {
    describe('falied', () => {
      before(() => {
        sinon.stub(productModel, 'findById').resolves([])
      })
      after(() => {
        productModel.findById.restore()
      })
      it('espero que seja booleano', async () => {
        const result = await productService.findById(1)
        expect(result).to.be.an('boolean')
      })
      it('espero que o booleano seja igual a "false"', async () => {
        const result = await productService.findById(1)
        expect(result).to.be.false
      })
    })
    describe('sucess', () => {
      before(() => {
        sinon.stub(productModel, 'findById').resolves([
          {
            "id": 1,
            "name": "Martelo de Thor",
          }
        ])
      })
      after(() => {
        productModel.findById.restore()
      })
      it('espero que seja um array', async () => {
        const result = await productService.findById(1)
        expect(result).to.be.a('array')
      })
      it('o array possua item do tipo objeto', async () => {
        const result = await productService.findById(1);
        expect(result[0]).to.be.an('object');
      })
      it('objetos tenham as propriedades: "id", "name"', async () => {
        const result = await productService.findById(1);
        expect(result[0]).to.have.all.keys('id', 'name');
      });
    })
  })
  describe('create', () => {
    before(() => {
      sinon.stub(productModel, 'create').resolves(
        {
          fieldCount: 0,
          affectedRows: 1,
          insertId: 4,
          info: '',
          serverStatus: 2,
          warningStatus: 0
        })
    })
    after(() => {
      productModel.create.restore()
    })
  /*   it('espero que seja um array', async () => {
      const result = await productService.create(1)
      expect(result).to.be.a('object')
    }) */
    it('é um objeto', async () => {
      const result = await productService.create(1);
      expect(result).to.be.an('object');
    })
    it('objetos tenham as propriedades: "id", "name"', async () => {
      const result = await productService.create(1);
      expect(result).to.have.all.keys('id', 'name');
    });
  })
  describe('updateProduct', () => {
    describe('falied', () => {
      before(() => {
        sinon.stub(productModel, 'updateProduct').resolves(
          {
            fieldCount: 0,
            affectedRows: 0,
            insertId: 0,
            info: '',
            serverStatus: 2,
            warningStatus: 1,
            changedRows: 0
          }
        )
      })
      after(() => {
        productModel.updateProduct.restore()
      })
 /*      it('espero que seja null', async () => {
        const result = await productService.updateProduct(1, 'lucas')
        expect(result).to.be.null
      }) */
    })
    before(() => {
      sinon.stub(productModel, 'updateProduct').resolves({
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        info: '',
        serverStatus: 2,
        warningStatus: 1,
        changedRows: 0
      })
    })
    after(() => {
      productModel.updateProduct.restore()
    })
    it('é um  numero', async () => {
      const result = await productService.updateProduct(1, 'lucas')
      expect(result).to.be.a('number')
    })

  });
})
describe('deleteId', () => {
  before(() => {
    sinon.stub(productModel, 'deleteId').resolves({
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: '',
      serverStatus: 2,
      warningStatus: 1,
      changedRows: 0
    })
  })
  after(() => {
    productModel.deleteId.restore()
  })
  it('é um  objeto', async () => {
    const result = await productService.deleteId(1, )
    expect(result).to.be.a('object')
  })
})
