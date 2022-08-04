const ClienteService = require('../services/ClienteService');

module.exports = {
    todos: async (req, res) => {
        let json = {error: '', result: []};
        let clientes = await ClienteService.todos();

        for(let i in clientes){
            json.result.push({
                nome: clientes[i].nome,
                telefone: clientes[i].telefone,
                email: clientes[i].email
            });
        }
        res.json(json);
    },

    cliente: async (req, res) => {
        let json = {error: '', result: {}};

        let id = req.params.id;
        let cliente = await ClienteService.cliente(id);

        if(cliente){
            json.result = cliente;
        }

        res.json(json);
    },

    salvar: async(req, res) => {
        let json = {error: '', result: {}};

        let nome = req.body.nome;
        let telefone = req.body.telefone;
        let email = req.body.email;

        if(email && nome && telefone){
            let cliente = await ClienteService.salvar(nome, telefone, email);
            json.result = {
                codigo: cliente,
                nome,
                telefone,
                email
            };
        }else{
                json.error = 'campos invalidos';
            }
            res.json(json);
    },

    atualizar: async(req, res) => {
        let json = {error: '', result: {}};

        let id = req.params.id;
        let nome = req.body.nome;
        let telefone = req.body.telefone;
        let email = req.body.email;

        if(id && nome && email && telefone){
            await ClienteService.atualizar(id, nome, telefone, email);
            json.result = {
                id,
                nome,
                telefone,
                email
            };
        }else{
                json.error = 'campos invalidos';
            }
            res.json(json);
    },

    deletar: async(req, res)=>{
        let json = {error: '', result: {}};
        let id = req.params.id;

        await ClienteService.deletar(id);

        res.json(json);
    },
    
}    


