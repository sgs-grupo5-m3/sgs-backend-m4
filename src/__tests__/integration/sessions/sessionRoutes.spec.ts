import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../../app";
import { AppDataSource } from "../../../data-source";
import {
  mockedDoctor,
  mockedDoctorLogin,
  mockedPatient,
  mockedPatientLogin,
} from "../../mocks";

describe("/login", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    await request(app).post("/patient").send(mockedPatient);
    await request(app).post("/patient").send(mockedDoctor);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /login -  Deve ser capaz de fazer login com o usuário paciente", async () => {
    const response = await request(app).post("/login").send(mockedPatientLogin);

    expect(response.body).toHaveProperty("token");
    expect(response.status).toBe(200);
  });

  test("POST /login -  Deve ser capaz de fazer login com o usuário doutor", async () => {
    const response = await request(app).post("/login").send(mockedDoctorLogin);

    expect(response.body).toHaveProperty("token");
    expect(response.status).toBe(200);
  });

  test("POST /login -  Não deve ser possivel fazer login com usuário ou senhas incorretas", async () => {
    const response = await request(app).post("/login").send({
      email: "felipe@gmail.com",
      password: "1234567",
    });

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });

  test("POST /login -  Não deve ser possivel fazer login com usuário ou senhas incorretas", async () => {
    const response = await request(app).post("/login").send({
      email: "felipe@mail.com",
      password: "12345",
    });

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });
});
