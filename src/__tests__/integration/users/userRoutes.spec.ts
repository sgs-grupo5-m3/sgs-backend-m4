import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../../app";
import { AppDataSource } from "../../../data-source";
import { mockedDoctor, mockedPatient } from "../../mocks";

describe("/users", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /doctor - Deve ser capaz de criar um doutor", async () => {
    const response = await request(app).post("/doctor").send(mockedDoctor);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("birth_date");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("crm");
    expect(response.body).toHaveProperty("password");
    expect(response.body.name).toEqual("Felipe");
    expect(response.body.email).toEqual("felipe@gmail.com");
    expect(response.body.isDoctor).toEqual(true);
    expect(response.status).toBe(201);
  });

  test("POST /doctor - Não deve ser capaz de criar um doutor se o usuário já existe", async () => {
    const response = await request(app).post("/doctor").send(mockedDoctor);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(409);
  });

  test("POST /patient - Deve ser capaz de criar um paciente", async () => {
    const response = await request(app).post("/patient").send(mockedPatient);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("birth_date");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("password");
    expect(response.body.name).toEqual("Daniel");
    expect(response.body.email).toEqual("daniel@gmail.com");
    expect(response.body.isDoctor).toEqual(false);
    expect(response.status).toBe(201);
  });

  test("POST /patient - Não deve ser capaz de criar um paciente se o usuário já existe", async () => {
    const response = await request(app).post("/patient").send(mockedPatient);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(409);
  });
});
