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

describe("Rotas /patient/historic", () => {
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

  test("POST /patient/allergy - N??o deve ser capaz de criar alergia se nome n??o for passado", async () => {
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

  test("POST /patient/allergy - N??o deve ser capaz de criar alergia se o token n??o for passado", async () => {
    const response = await request(app)
      .post("/patient/allergy")
      .send(mockedAllergy);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("POST /patient/allergy - N??o deve ser capaz de criar alergia se for passado um token inv??lido", async () => {
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

  test("GET /patient/allergy - N??o deve ser capaz de listar as alergias do paciente logado se o token n??o for passado", async () => {
    const response = await request(app).get("/patient/allergy");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/allergy - N??o deve ser capaz de listar as alergias do paciente logado se o token passado for inv??lido", async () => {
    const response = await request(app)
      .get("/patient/allergy")
      .set("Authorization", `Bearer tokeninvalid`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("PATCH /patient/allergy/:id -  Deve ser poss??vel atualizar alergia", async () => {
    const newValues = { name: "Pelo de gato", description: "Fico espirrando" };

    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);
    const token = `Bearer ${patientLoginResponse.body.token}`;

    const allergyTobeUpdateRequest = await request(app)
      .get("/patient/allergy")
      .set("Authorization", token);
    const allergyTobeUpdateId = allergyTobeUpdateRequest.body.allergys[0].id;

    const response = await request(app)
      .patch(`/patient/allergy/${allergyTobeUpdateId}`)
      .set("Authorization", token)
      .send(newValues);

    expect(response.body.allergy.name).toEqual("Pelo de gato");
    expect(response.body.allergy.description).toEqual("Fico espirrando");
    expect(response.body.allergy).not.toHaveProperty("patient");
    expect(response.status).toBe(200);
  });

  test("POST /patient/disease - Deve ser capaz de criar doen??a", async () => {
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

  test("POST /patient/disease - Deve ser capaz de criar doen??a apenas com o nome", async () => {
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

  test("POST /patient/disease - N??o deve ser capaz de criar doen??a se o nome n??o for passado", async () => {
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

  test("POST /patient/disease - N??o deve ser capaz de criar doen??a se o token n??o for passado", async () => {
    const response = await request(app)
      .post("/patient/disease")
      .send(mockedDisease);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("POST /patient/disease - N??o deve ser capaz de criar doen??a se o token passado for inv??lido", async () => {
    const response = await request(app)
      .post("/patient/disease")
      .set("Authorization", `Bearer tokeninvalid`)
      .send(mockedDisease);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/disease - Deve ser capaz de listar as doen??as", async () => {
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

  test("GET /patient/disease - N??o deve ser capaz de listar as doen??as se o token n??o for passado", async () => {
    const response = await request(app).get("/patient/disease");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/disease - N??o deve ser capaz de listar as doen??as se o token passado for inv??lido", async () => {
    const response = await request(app)
      .get("/patient/disease")
      .set("Authorization", `Bearer tokeninvalid`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("PATCH /patient/disease/:id -  Deve ser poss??vel atualizar doen??a", async () => {
    const newValues = { name: "Var??ola", symptoms: "Manchas avermelhadas" };

    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);
    const token = `Bearer ${patientLoginResponse.body.token}`;

    const diseaseTobeUpdateRequest = await request(app)
      .get("/patient/disease")
      .set("Authorization", token);
    const diseaseTobeUpdateId = diseaseTobeUpdateRequest.body.diseases[0].id;

    const response = await request(app)
      .patch(`/patient/disease/${diseaseTobeUpdateId}`)
      .set("Authorization", token)
      .send(newValues);

    expect(response.body.disease.name).toEqual("Var??ola");
    expect(response.body.disease.symptoms).toEqual("Manchas avermelhadas");
    expect(response.body.disease).not.toHaveProperty("patient");
    expect(response.status).toBe(200);
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

  test("POST /patient/exam - N??o deve ser capaz de criar exame se o token n??o for passado", async () => {
    const response = await request(app).post("/patient/exam").send(mockedExam);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("POST /patient/exam - N??o deve ser capaz de criar exame se o token passado for inv??lido", async () => {
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

  test("GET /patient/exam - N??o deve ser capaz de listar os exames se o token n??o for passado", async () => {
    const response = await request(app).get("/patient/exam");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/exam - N??o deve ser capaz de listar os exames se o token passado for inv??lido", async () => {
    const response = await request(app)
      .get("/patient/exam")
      .set("Authorization", `Bearer tokeninvalid`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("PATCH /patient/exam/:id -  Deve ser poss??vel atualizar exame", async () => {
    const newValues = {
      name: "Exame de DNA",
      date: "2020/07/25",
      results_exams: "https://examededna",
    };

    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);
    const token = `Bearer ${patientLoginResponse.body.token}`;

    const examTobeUpdateRequest = await request(app)
      .get("/patient/exam")
      .set("Authorization", token);
    const examTobeUpdateId = examTobeUpdateRequest.body.exams[0].id;

    const response = await request(app)
      .patch(`/patient/exam/${examTobeUpdateId}`)
      .set("Authorization", token)
      .send(newValues);

    expect(response.body.exam.name).toEqual("Exame de DNA");
    expect(response.body.exam.date).toEqual("2020/07/25");
    expect(response.body.exam.results_exams).toEqual("https://examededna");
    expect(response.body.exam).not.toHaveProperty("patient");
    expect(response.status).toBe(200);
  });

  test("POST /patient/medicine - Deve ser capaz de criar um Rem??dio", async () => {
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

  test("POST /patient/medicine - Deve ser capaz de criar um Rem??dio apenas com o nome", async () => {
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

  test("POST /patient/medicine - N??o deve ser capaz de criar rem??dio se o nome n??o for passado", async () => {
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

  test("POST /patient/medicine - N??o deve ser capaz de criar remedio se o token n??o for passado", async () => {
    const response = await request(app)
      .post("/patient/medicine")
      .send(mockedMedicine);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("POST /patient/medicine - N??o deve ser capaz de criar remedio se o token passado for inv??lido", async () => {
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

  test("GET /patient/medicine - N??o deve ser capaz de listar os rem??dios se o token n??o for passado", async () => {
    const response = await request(app).get("/patient/medicine");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /patient/medicine - N??o deve ser capaz de listar os rem??dios se o token passado for inv??lido", async () => {
    const response = await request(app)
      .get("/patient/medicine")
      .set("Authorization", `Bearer tokeninvalid`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("PATCH /patient/medicine/:id -  Deve ser poss??vel atualizar o rem??dio", async () => {
    const newValues = {
      name: "Xarope",
      description: "Para tosse ou gripe",
    };

    const patientLoginResponse = await request(app)
      .post("/login")
      .send(mockedPatientLogin);
    const token = `Bearer ${patientLoginResponse.body.token}`;

    const medicineTobeUpdateRequest = await request(app)
      .get("/patient/medicine")
      .set("Authorization", token);
    const medicineTobeUpdateId = medicineTobeUpdateRequest.body.medicines[0].id;

    const response = await request(app)
      .patch(`/patient/medicine/${medicineTobeUpdateId}`)
      .set("Authorization", token)
      .send(newValues);

    expect(response.body.medicine.name).toEqual("Xarope");
    expect(response.body.medicine.description).toEqual("Para tosse ou gripe");
    expect(response.body.medicine).not.toHaveProperty("patient");
    expect(response.status).toBe(200);
  });
});
