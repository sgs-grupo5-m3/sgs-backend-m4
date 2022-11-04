import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../../app";
import { AppDataSource } from "../../../data-source";
import {
  mockedAllergy,
  mockedAllergyName,
  mockedDisease,
  mockedDiseaseName,
  mockedExam,
  mockedMedicine,
  mockedMedicineName,
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

  test("POST /patient/allergy - Deve ser capaz de criar alergia apenas com o nome", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/allergy")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send(mockedAllergyName);

    expect(response.body.allergy).toHaveProperty("id");
    expect(response.body.allergy).toHaveProperty("name");
    expect(response.body.allergy).toHaveProperty("description");
    expect(response.status).toBe(201);
  });

  test("POST /patient/allergy - Não deve ser capaz de criar alergia se nome não for passado", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/allergy")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send({});

    expect(response.body).toHaveProperty("error");
    expect(response.status).toBe(400);
  });

  test("POST /patient/allergy - Não deve ser capaz de criar alergia se o token não for passado", async () => {
    const response = await request(app)
      .post("/patient/allergy")
      .send(mockedAllergy);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("POST /patient/allergy - Não deve ser capaz de criar alergia se for passado um token inválido", async () => {
    const response = await request(app)
      .post("/patient/allergy")
      .set("Authorization", `Bearer tokeninvalid`)
      .send(mockedAllergy);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/allergy - Deve ser capaz de listar as alergias do paciente logado", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .get("/patient/allergy")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`);

    expect(response.body.allergys).toHaveLength(2);
    expect(response.status).toBe(200);
  });

  test("GET /patient/allergy - Não deve ser capaz de listar as alergias do paciente logado se o token não for passado", async () => {
    const response = await request(app).get("/patient/allergy");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/allergy - Não deve ser capaz de listar as alergias do paciente logado se o token passado for inválido", async () => {
    const response = await request(app)
      .get("/patient/allergy")
      .set("Authorization", `Bearer tokeninvalid`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
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

  test("POST /patient/disease - Deve ser capaz de criar doença apenas com o nome", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/disease")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send(mockedDiseaseName);

    expect(response.body.disease).toHaveProperty("id");
    expect(response.body.disease).toHaveProperty("name");
    expect(response.body.disease).toHaveProperty("symptoms");
    expect(response.status).toBe(201);
  });

  test("POST /patient/disease - Não deve ser capaz de criar doença se o nome não for passado", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/disease")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send({});

    expect(response.body).toHaveProperty("error");
    expect(response.status).toBe(400);
  });

  test("POST /patient/disease - Não deve ser capaz de criar doença se o token não for passado", async () => {
    const response = await request(app)
      .post("/patient/disease")
      .send(mockedDisease);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("POST /patient/disease - Não deve ser capaz de criar doença se o token passado for inválido", async () => {
    const response = await request(app)
      .post("/patient/disease")
      .set("Authorization", `Bearer tokeninvalid`)
      .send(mockedDisease);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/disease - Deve ser capaz de listar as doenças", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .get("/patient/disease")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`);

    expect(response.body.diseases).toHaveLength(2);
    expect(response.status).toBe(200);
  });

  test("GET /patient/disease - Não deve ser capaz de listar as doenças se o token não for passado", async () => {
    const response = await request(app).get("/patient/disease");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/disease - Não deve ser capaz de listar as doenças se o token passado for inválido", async () => {
    const response = await request(app)
      .get("/patient/disease")
      .set("Authorization", `Bearer tokeninvalid`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("POST /patient/exam - Deve ser capaz de criar Exame", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/exam")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send(mockedExam);

    expect(response.body.exam).toHaveProperty("id");
    expect(response.body.exam).toHaveProperty("name");
    expect(response.body.exam).toHaveProperty("date");
    expect(response.body.exam).toHaveProperty("results_exams");
    expect(response.status).toBe(201);
  });

  test("POST /patient/exam - Não deve ser capaz de criar exame se o token não for passado", async () => {
    const response = await request(app).post("/patient/exam").send(mockedExam);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("POST /patient/exam - Não deve ser capaz de criar exame se o token passado for inválido", async () => {
    const response = await request(app)
      .post("/patient/exam")
      .set("Authorization", `Bearer tokeninvalid`)
      .send(mockedExam);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/exam - Deve ser capaz de listar os exames do paciente logado", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .get("/patient/exam")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`);

    expect(response.body.exams).toHaveLength(1);
    expect(response.body.exams[0]).toHaveProperty("id");
    expect(response.body.exams[0]).toHaveProperty("name");
    expect(response.body.exams[0]).toHaveProperty("date");
    expect(response.body.exams[0]).toHaveProperty("results_exams");
    expect(response.status).toBe(200);
  });

  test("GET /patient/exam - Não deve ser capaz de listar os exames se o token não for passado", async () => {
    const response = await request(app).get("/patient/exam");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/exam - Não deve ser capaz de listar os exames se o token passado for inválido", async () => {
    const response = await request(app)
      .get("/patient/exam")
      .set("Authorization", `Bearer tokeninvalid`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("POST /patient/medicine - Deve ser capaz de criar um Remédio", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/medicine")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send(mockedMedicine);

    expect(response.body.medicine).toHaveProperty("id");
    expect(response.body.medicine).toHaveProperty("name");
    expect(response.body.medicine).toHaveProperty("description");
    expect(response.status).toBe(201);
  });

  test("POST /patient/medicine - Deve ser capaz de criar um Remédio apenas com o nome", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/medicine")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send(mockedMedicineName);

    expect(response.body.medicine).toHaveProperty("id");
    expect(response.body.medicine).toHaveProperty("name");
    expect(response.body.medicine).toHaveProperty("description");
    expect(response.status).toBe(201);
  });

  test("POST /patient/medicine - Não deve ser capaz de criar remédio se o nome não for passado", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .post("/patient/medicine")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`)
      .send({});

    expect(response.body).toHaveProperty("error");
    expect(response.status).toBe(400);
  });

  test("POST /patient/medicine - Não deve ser capaz de criar remedio se o token não for passado", async () => {
    const response = await request(app)
      .post("/patient/medicine")
      .send(mockedMedicine);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("POST /patient/medicine - Não deve ser capaz de criar remedio se o token passado for inválido", async () => {
    const response = await request(app)
      .post("/patient/medicine")
      .set("Authorization", `Bearer tokeninvalid`)
      .send(mockedMedicine);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/medicine - Deve ser capaz de listar os remedios do paciente logado", async () => {
    await request(app).post("/patient").send(mockedPatient);
    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);

    const response = await request(app)
      .get("/patient/medicine")
      .set("Authorization", `Bearer ${patientLoginResponse.body.token}`);

    expect(response.body.medicines).toHaveLength(2);
    expect(response.status).toBe(200);
  });

  test("GET /patient/medicine - Não deve ser capaz de listar os remédios se o token não for passado", async () => {
    const response = await request(app).get("/patient/medicine");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/medicine - Não deve ser capaz de listar os remédios se o token passado for inválido", async () => {
    const response = await request(app)
      .get("/patient/medicine")
      .set("Authorization", `Bearer tokeninvalid`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });
});
