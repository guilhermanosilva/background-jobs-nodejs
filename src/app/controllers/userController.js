import Queue from "../lib/Queue";

export default {
  async store(request, response) {
    const { name, email, password } = request.body;

    const user = {
      name,
      email,
      password,
    };

    await Queue.add("registrationMail", { user });

    return response.json(user);
  },
};
