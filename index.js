const { Sequelize, Model, DataTypes } = require('sequelize');

/**
 * Inicialização da conexão
 */
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './dev.sqlite',
});

/**
 * Model User 
 * @description Representa um usuário
 */
class User extends Model { }
User.init({
    username: DataTypes.STRING,
    doc_cpf: DataTypes.INTEGER,
    email: DataTypes.STRING
}, { sequelize, modelName: 'user' });

/**
 * Adiciona novo usuário
 * @param {string} nome 
 * @param {int} cpf 
 */
async function novoUsuario(nome,cpf,email) {
    await sequelize.sync()
    const usuario = await User.create({
        username: nome,
        doc_cpf: cpf,
        email: email
    })
    console.log("\n [Info] Novo Usuario adicionado: " , usuario.toJSON())
}

async function exibeTodosUsuarios(){
    const users = await User.findAll();
    console.log("\n Exibindo todos usuários : ", JSON.stringify(users, null, 2));
}

novoUsuario("Lucas",   13049021190, "lucas@123.com")
novoUsuario("Marieta", 16049021100, "marieta@123.com")
novoUsuario("Carlos",  44762729110, "carlos@123.com")
novoUsuario("Julieta", 62048529110, "julieta@123.com")

exibeTodosUsuarios()