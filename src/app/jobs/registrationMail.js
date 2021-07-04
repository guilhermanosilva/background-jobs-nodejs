import Mail from "../lib/Mail";

export default {
  key: "registrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue Test <queuetest@email.com.br",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuário",
      html: `Olá ${user.name}. Bem-vindo ao sistema de filas.`,
    });
  },
};
