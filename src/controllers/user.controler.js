import { createUser, deleteUser, getById, getUsers, updateUser } from "../services/user.service.js"

export const newUser = async(req, res) => {
  try{

    const user = await createUser(req.body);

    res.status(201).json({massage: "Cadastrado com sucesso", user});
    
  } catch(erro) {

    res.status(500).json({massage: `${erro} - Erro ao cadastrar usuário`});

  }
}

export const get = async(req, res) => {
  try{
    const users = await getUsers();

    res.status(200).json(users);
  }catch(erro){
    res.status(500).json({massage: `${erro.massage} - Erro ao buscar usuários`});
  }
}

export const getId = async (req, res) => {
  
  try{
  
    const user = await getById(req.params.id);
  
    res.status(200).json(user);

  } catch(erro) {
    res.status(500).json({massage: `${erro} - Erro ao buscar usuário`});
  }
}

export const update = async (req, res) => {
  try{
    const user  = await updateUser(req.params.id, req.body);

    res.status(200).json({massage: `Usuário atualizado com sucesso`, user});

  }catch(erro) {
    res.status(500).json({massage: `${erro} - Erro ao atualizar usuário`});
  }
}

export const deleted = async (req, res) => {
  try{
    await deleteUser(req.params.id);

    res.status(400).json({massage: 'Usuário excluído com sucesso'})
  }catch(error){
    res.status(500).json({massage: `${erro} - Erro ao excluir usuário`});
  }
}