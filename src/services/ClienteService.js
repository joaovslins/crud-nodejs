const db = require('../db');

module.exports = {
    todos: ()=>{
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM cliente', (error, results)=>{
                if(error){
                    rejeitado(error); return;
                }else{
                    aceito(results);
                }
            });
        });
    },

    cliente: (id) =>{
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM cliente WHERE id = ?', [id], (error, results)=>{
                if(error){
                    rejeitado(error); return;
                }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    salvar: (nome, telefone, email) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO cliente (nome, telefone, email) VALUES (?, ?, ?)', [nome, telefone, email], (error, results)=>{
                
                if(error){rejeitado(error); return;}
                aceito(results.insertCliente);
                
            });
        });
    },

    atualizar: (id, nome, telefone, email) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE cliente SET nome = ?, telefone = ?, email = ? WHERE id = ?', [nome, telefone, email, id], (error, results)=>{
                
                if(error){rejeitado(error); return;}
                aceito(results);
                
            });
        });
    },

    deletar: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM cliente WHERE id = ?', [id], (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};