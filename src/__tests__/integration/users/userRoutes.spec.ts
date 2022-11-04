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

    expect(response.body.doctor).toHaveProperty("id");
    expect(response.body.doctor).toHaveProperty("name");
    expect(response.body.doctor).toHaveProperty("email");
    expect(response.body.doctor).toHaveProperty("birth_date");
    expect(response.body.doctor).toHaveProperty("cpf");
    expect(response.body.doctor).toHaveProperty("crm");
    expect(response.body.doctor).not.toHaveProperty("password");
    expect(response.body.doctor.name).toEqual("Felipe");
    expect(response.body.doctor.email).toEqual("felipe@gmail.com");
    expect(response.body.doctor.isDoctor).toEqual(true);
    expect(response.status).toBe(201);
  });

  test("POST /doctor - Não deve ser capaz de criar um doutor se o usuário já existe", async () => {
    const response = await request(app).post("/doctor").send(mockedDoctor);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(409);
  });

  test("POST /patient - Deve ser capaz de criar um paciente", async () => {
    const response = await request(app).post("/patient").send(mockedPatient);

    expect(response.body.patient).toHaveProperty("id");
    expect(response.body.patient).toHaveProperty("name");
    expect(response.body.patient).toHaveProperty("email");
    expect(response.body.patient).toHaveProperty("birth_date");
    expect(response.body.patient).toHaveProperty("cpf");
    expect(response.body.patient).not.toHaveProperty("password");
    expect(response.body.patient.name).toEqual("Daniel");
    expect(response.body.patient.email).toEqual("daniel@gmail.com");
    expect(response.body.patient.isDoctor).toEqual(false);
    expect(response.status).toBe(201);
  });

  test("POST /patient - Não deve ser capaz de criar um paciente se o usuário já existe", async () => {
    const response = await request(app).post("/patient").send(mockedPatient);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(409);
  });
});
