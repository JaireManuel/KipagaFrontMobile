import Joi from 'joi-browser';

function messagesError(messages) {
  messages.forEach((err) => {
    switch (err.type) {
      case 'any.empty':
        err.message = `${err.flags.label}: Campo obrigatório`;
        break;
      case 'string.email':
        err.message = `${err.flags.label} invalido`;
        break;
      default:
        break;
    }
  });
  return messages;
}

export const schema = {
  username: Joi.string()
    .required()
    .label('Nome de Usuario')
    .error((messages) => messagesError(messages)),
  password: Joi.string()
    .required()
    .label('Password')
    .error((messages) => messagesError(messages)),
};

export const signUpSchema = {
  nome: Joi.string()
    .required()
    .label('Nome')
    .error((messages) => messagesError(messages)),
  sobrenome: Joi.string()
    .required()
    .label('Sobrenome')
    .error((messages) => messagesError(messages)),
  telefone: Joi.string()
    .required()
    .label('Telefone')
    .error((messages) => messagesError(messages)),
  email: Joi.string()
    .email()
    .required()
    .label('Email')
    .error((messages) => messagesError(messages)),
  bilhetePassaporte: Joi.string()
    .required()
    .label('Bilhete / Passaporte')
    .error((messages) => messagesError(messages)),
  morada: Joi.string()
    .required()
    .label('Morada')
    .error((messages) => messagesError(messages)),
  nacionalidade: Joi.string()
    .required()
    .label('Nacionalidade')
    .error((messages) => messagesError(messages)),
  dataDeNascimento: Joi.string()
    .required()
    .label('Data De Nascimento')
    .error((messages) => messagesError(messages)),
  password: Joi.string()
    .required()
    .label('Password')
    .error((messages) => messagesError(messages)),
  confirm_password: Joi.string()
    .required()
    .label('Password')
    .error((messages) => messagesError(messages)),
  genero: Joi.string()
    .required()
    .label('Genero')
    .error((messages) => messagesError(messages)),
};
