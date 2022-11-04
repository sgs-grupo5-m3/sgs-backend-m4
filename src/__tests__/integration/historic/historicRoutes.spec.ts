import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../../app";
import { AppDataSource } from "../../../data-source";
import {
  mockedAllergy,
  mockedDisease,
  mockedPatient,
  mockedPatientLogin,
} from "../../mocks";

describe("/historic", () => {
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

  test("POST /patient/allergy - Deve ser capaz de criar alergia", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/allergy")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send(mockedAllergy);

    expect(response.body.allergy).toHaveProperty("id");
    expect(response.body.allergy).toHaveProperty("name");
    expect(response.body.allergy).toHaveProperty("description");
    expect(response.status).toBe(201);
  });

  test("POST /patient/disease - Deve ser capaz de criar doença", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/disease")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send(mockedDisease);

    expect(response.body.disease).toHaveProperty("id");
    expect(response.body.disease).toHaveProperty("name");
    expect(response.body.disease).toHaveProperty("symptoms");
    expect(response.status).toBe(201);
  });

  test("POST /patient/disease - Deve ser capaz de criar doença", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/disease")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send(mockedDisease);

    expect(response.body.disease).toHaveProperty("id");
    expect(response.body.disease).toHaveProperty("name");
    expect(response.body.disease).toHaveProperty("symptoms");
    expect(response.status).toBe(201);
  });
});
