/// <reference types="cypress" />
import produtos from "../fixtures/produtos.json"

describe('Funcionalidade de produtos', () => {
    let token
    beforeEach(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn })
    });

    it('Listar produtos', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.produtos[0].nome).to.equal('Logitech MX Vertical')
            expect(response.body).to.have.property('produtos')
            expect(response.duration).to.be.lessThan(20)
        })
    });

    it('Deve cadastrar produtos', () => {
        let produto = `produto novo teste ${Math.floor(Math.random() * 100000)}`

        cy.request({
            method: 'POST',
            url: 'produtos',
            body: {
                "nome": produtos,
                "preco": 199,
                "descricao": "Mouse gamer com sensor óptico de alta precisão e iluminação RGB",
                "quantidade": 8
            },
            headers: { authorization: token }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })

    });

    it('Deve impedir o cadastro de produtos repetidos', () => {
        //Este teste irá falhar na primeira tentativa, pois o produto será novo ao iniciar o serverest
        cy.cadastrarProduto(token, 'Mouse Gamer', 199, 'top de linha da razer, confia', 8)

            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body.message).to.equal('Já existe produto com esse nome');
            })
    })

    it('Deve editar um produto ja cadastrado', () => {
        cy.request('produtos').then(response => {
            let id = response.body.produtos[0]._id
            cy.request({
                method: 'PUT',
                url: `produtos/${id}`,
                headers: { authorization: token },
                body:{
                    "nome": "Logitech MV Vertical",
                    "preco": 320,
                    "descricao": "Mouse",
                    "quantidade": 382
                  }
            }).then(response => {
                expect(response.body.message).to.equal('Registro alterado com sucesso')
            })
        })

    });

    it.only('Deve editar produto previamente cadastrado', () => {
        let produto = `produto novo teste ${Math.floor(Math.random() * 100000)}` 
        cy.cadastrarProduto(token, produto, 199, 'top de linha da razer, confia', 8)
        .then(response => {
            let id = response.body._id
            cy.request({
                method: 'PUT',
                url: `produtos/${id}`,
                headers: { authorization: token },
                body:{
                    "nome": produto,
                    "preco": 320,
                    "descricao": "Mouse",
                    "quantidade": 382
                  }
            }).then(response => {
                expect(response.body.message).to.equal('Registro alterado com sucesso')
            })
        })
    });

    it.only('Deve deletar um produto ja cadastrado', () => {
        let produto = `produto novo teste ${Math.floor(Math.random() * 100000)}` 
        cy.cadastrarProduto(token, produto, 199, 'top de linha da razer, confia', 8)
        let id = response.body._id
        cy.request({
            method: 'DELETE',
            url: `produtos/${id}`,
            headers: { authorization: token },
        }).then(response => {
            expect(response.body.message).to.equal('Registro excluído com sucesso')
            expect(response.status).to.equal(200)
        })

    })
})