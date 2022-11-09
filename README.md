

# SGS Backend Documentation 🚑
SGS
Sistema Geral de Saúde
Feito de paciente para médico
Acesse nosso repositório aqui
cURL
Session
## POST Login
` https://api-sgs-28.herokuapp.com/login
/login `

Todos os campos são obrigatórios
email - deve ser do tipo string
password - deve ser do tipo string
Essa rota não necessita de autenticação
Retorno esperado
Status 201 Created

 ``` 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0RvY3RvciI6ZmFsc2UsImlhdCI6MTY2NzUwMzMyMiwiZXhwIjoxNjY3NTg5NzIyLCJzdWIiOiIxZmE3OWUwNy0xOTU1LTQ4MDYtYjZiNy1lMjA3MGQ2ZDhmY2UifQ.HghUt-oug1UI08n1IjHzh84xEg3XKdbzSZwcymhIBjU",
    "isDoctor": true
} 

 ``` 

Caso usuário passe email ou a senha errado

&nbsp;
**Status 403 Conflict**

``` 
{
    "status": "error",
    "code": 403,
    "message": "Invalid email or password"
}
``` 
Caso usuário não passe o email
Status 400 Bad Request

``` 
{
    "error": "email is a required field"
}

``` 
Caso usuário não passe a senha
Status 400 Bad Request
```
{
    "error": "password is a required field"
}
```
## Headers
Content-Type
application/json

## Body `json`
```
{
  "email": "test@email.com",
  "password": "123456"
}

```


### Example request:

```
curl "https://api-sgs-28.herokuapp.com/login" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
  "email": "test@email.com",
  "password": "123456"
}' 
```

## Profile
` GET ` List Profile
` https://api-sgs-28.herokuapp.com/profile `

Esta rota não necessita de corpo
Essa rota necessita de autenticação
Retorno esperado
Status 200 Ok

```
{
    "profile": {
        "id": "acaa4c7d-c817-4cc7-ba83-e163845b679e",
        "name": "Giovani Salvador",
        "birth_date": "1998-08-29",
        "email": "giovani@mail.com",
        "cpf": "123456789",
        "isDoctor": true,
        "crm": "987654321"
    }
}

```
Caso token estiver errado


&nbsp;
 **Status 401 Unauthorized**

```
{
    "message": "Invalid token"
}
```
Caso não tenha token


&nbsp;
**Status 401 Unauthorized**

```
{
    "message": "Missing authorization headers"
}

```

### Headers
Authorization
` Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %} `

Example request:
```
curl "https://api-sgs-28.herokuapp.com/profile" \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X GET 
```
## Doctor
`POST` Create Doctor
` https://api-sgs-28.herokuapp.com/doctor `
/doctor

Todos os campos são obrigatórios
- name - deve ser do tipo string
- birth_date - deve ser do tipo string (ano/mês/dia)
- email - deve ser do tipo string
- password - deve ser do tipo string
- cpf - deve ser do tipo string
- crm - deve ser do tipo string
- specialtie - deve ser do tipo string
- Essa rota não necessita de autenticação
- Retorno esperado
- Status 201 Created

```
{
    "message": "Doctor Created!!",
    "doctor": {
        "name": "Giovani",
        "birth_date": "1998/08/29",
        "email": "giovani@email.com",
        "cpf": "123456789",
        "crm": "987654321",
        "specialties": "Cirurgiaõ"
    }
}
```
Caso doutor(a) já esteja cadastrado
&nbsp;
**Status 409 Conflict**
```
{
    "status": "error",
    "code": 409,
    "message": "User already exists"
}
```
Caso o doutor(a) não passe o nome
&nbsp;
**Status 400 Bad Request**
```
{
    "error": "name is a required field"
}
```


Caso o doutor(a) não passe a data de nascimento
&nbsp;
**Status 400 Bad Request**
```
{
    "error": "birth_date is a required field"
}
```

Caso o doutor(a) não passe o email
&nbsp;
**Status 400 Bad Request**
```
{
    "error": "email is a required field"
}
```

Caso o doutor(a) não passe a senha


&nbsp;
**Status 400 Bad Request**
```
{
    "error": "password is a required field"
}
```

Caso o doutor(a) não passe o cpf


&nbsp;
**Status 400 Bad Request**
```
{
    "error": "cpf is a required field"
}
```

Caso o doutor(a) não passe o crm 


&nbsp;
**Status 400 Bad Request**
```
{
    "error": "crm is a required field"
}
```

Caso o doutor(a) passe uma especialidade invalida 
&nbsp;


**Status 403 Forbidden**
```
{
    "status": "error",
    "code": 403,
    "message": "Specialties not found"
}
```

Headers
Content-Type
application/json

Body json
```
{
  "name": "Giovani",
  "birth_date": "1998/08/29",
  "email": "giovani@email.com",
  "password": "123456",
  "cpf": "123456789",
  "crm": "987654321",
  "specialtie": "Cirurgiaõ"
}
```
Example request:
```
curl "https://api-sgs-28.herokuapp.com/doctor" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
  "name": "Giovani",
  "birth_date": "1998/08/29",
  "email": "giovani@email.com",
  "password": "123456",
  "cpf": "123456789",
  "crm": "987654321",
  "specialtie": "Cirurgiaõ"
}
```

` POST ` Create Speciality
"https://api-sgs-28.herokuapp.com/doctor/specialties
/doctor/specialties"

Todos os campos são obrigatórios
- name - deve ser do tipo string

Essa rota não necessita de autenticação
Retorno esperado
Status 201 Created

{
    "message": "Specialty Created!",
    "specialty": {
        "name": "Cirurgião",
        "id": "f7857b1f-079a-48d4-9543-586516db5a22"
    }
}
Caso o doutor(a) não passe o nome


&nbsp;
Status 400 Bad Request

{
    "error": "name is a required field"
}
Headers
Content-Type
application/json
# Body json
``` 
{
  "name": ""
}
```
Example request:
```
curl "https://api-sgs-28.herokuapp.com/doctor/specialties" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
  "name": ""
}

```
## `GET` List Speciality
`https://api-sgs-28.herokuapp.com/doctor/specialties
/doctor/specialties`

- Esta rota não necessita de corpo
- Essa rota não necessita de autenticação
Retorno esperado
**Status `200` Ok**
```
{
    "specialties": [
        {
            "id": "f7857b1f-079a-48d4-9543-586516db5a22",
            "name": "Ginecologista",
            "doctor": []
        }
    ]
}
```
Example request:
```
curl "https://api-sgs-28.herokuapp.com/doctor/specialties" \
  -X GET 
``` 
## `GET` List Pacient
`https://api-sgs-28.herokuapp.com/doctor/patient
/doctor/patient/:cpf`

- Esta rota não necessita de corpo
- Essa rota necessita de autenticação
- Retorno esperado

**Status 200 Ok**

```
{
    "patient": [
        {
            "id": "36da3209-69d3-44b0-8dcc-3bc9fe908e7d",
            "name": "Giovani",
            "birth_date": "1998-08-29",
            "email": "giovani@email.com",
            "cpf": "123456789",
            "isDoctor": false,
            "disease": [],
            "exam": [],
            "allergy": [],
            "medicines": []
        }
    ]
}

```
Caso token estiver errado


&nbsp;
**Status 401 Unauthorized**
```
{
    "message": "Invalid token"
}
```
Caso não tenha token


&nbsp;
**Status 401 Unauthorized**

```
{
    "message": "Missing authorization headers"
}
```

### Headers
```
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
```
Example request:
```
curl "https://api-sgs-28.herokuapp.com/doctor/patient" \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X GET 
```
## Patient
POST Create Patient
https://api-sgs-28.herokuapp.com/patient
/patient

Todos os campos são obrigatórios
name - deve ser do tipo string
birth_date - deve ser do tipo string (ano/mês/dia)
email - deve ser do tipo string
password - deve ser do tipo string
cpf - deve ser do tipo string
Essa rota não necessita de autenticação
Retorno esperado
Status 201 Created

{
    "message": "Patient Created!",
    "patient": {
        "name": "Giovani Salvador",
        "birth_date": "1998/08/29",
        "email": "giovani@mail.com",
        "cpf": "123456789",
        "id": "1f2dccbe-6b1a-45af-886b-c7e2834adc94",
        "isDoctor": false
    }
}
Caso paciente já esteja cadastrado
Status 409 Conflict

{
    "status": "error",
    "code": 409,
    "message": "User already exists"
}
Caso o paciente não passe o nome
Status 400 Bad Request

{
    "error": "name is a required field"
}
`

Caso o paciente não passe a data de nascimento
Status 400 Bad Request

{
    "error": "birth_date is a required field"
}
`

Caso o paciente não passe o email
Status 400 Bad Request

{
    "error": "email is a required field"
}
`

Caso o paciente não passe a senha
Status 400 Bad Request

{
    "error": "password is a required field"
}
`

Caso o paciente não passe o cpf
Status 400 Bad Request

{
    "error": "cpf is a required field"
}
`

Headers
Content-Type
application/json
Body json
{
  "name": "gIOVANI",
  "birth_date": "1998/08/29",
  "email": "giovani@email.com",
  "password": "123456",
  "cpf": "123456789"
}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
  "name": "gIOVANI",
  "birth_date": "1998/08/29",
  "email": "giovani@email.com",
  "password": "123456",
  "cpf": "123456789"
}' 
Allergy
POST Create Allergy
https://api-sgs-28.herokuapp.com/patient/allergy
/patient/allergy

Todos os campos são obrigatórios
name - deve ser do tipo string
description - deve ser do tipo string
Essa rota necessita de autenticação
Retorno esperado
Status 201 Created

{
    "message": "Allergy Created!",
    "allergy": {
        "name": "Antibióticos",
        "description": "Coceira e vermelhidão na pele",
        "id": "b26c30ee-bf3f-4eb9-94f6-5aa5d1f627bc"
    }
}
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Caso paciente não passe o nome da alergia
Status 400 Bad Request json 
{
    "error": "name is a required field"
}

Headers
Content-Type
application/json
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Body json
{
  "name": "",
  "description": ""
}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/allergy" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X POST \
  -d '{
  "name": "",
  "description": ""
}' 
GET List Allergies
https://api-sgs-28.herokuapp.com/patient/allergy
/patient/allergy

Esta rota não necessita de corpo
Essa rota necessita de autenticação
Retorno esperado
Status 200 Ok

[
    {
        "id": "8829aab0-0e1a-44f0-970b-a6ffb19ad1f0",
        "name": "Antibióticos",
        "description": "Coceira e vermelhidão na pele"
    },
    {
        "id": "4aa52240-5c72-4930-91ef-8c588369fddd",
        "name": "Abelha",
        "description": "Inchaço"
    }
]
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Headers
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/allergy" \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X GET 
PATCH Update Allergy
https://api-sgs-28.herokuapp.com/patient/allergy/
/patient/allergy/:allergyId

name - deve ser do tipo string
description - deve ser do tipo string
Essa rota necessita de autenticação
Retorno esperado
Status 200 Ok

{
    "message": "Allergy Update!",
    "allergy": {
        "id": "4aa52240-5c72-4930-91ef-8c588369fddd",
        "name": "",
        "description": ""
    }
}
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Caso tente atualizar alergia de outro paciente
Status 403 Forbidden

{
    "status": "error",
    "code": 403,
    "message": "Cannot change another patient's allergy"
}
Headers
Content-Type
application/json
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Body json
{
  "name": "",
  "description": ""
}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/allergy/" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X PATCH \
  -d '{
  "name": "",
  "description": ""
}' 
Disease
POST Create Disease
https://api-sgs-28.herokuapp.com/patient/disease
/patient/disease

Somente o campo name é obrigatório
name - deve ser do tipo string
symptoms - deve ser do tipo string
Essa rota necessita de autenticação
Retorno esperado
Status 201 Created

{
    "message": "Disease Created!",
    "disease": {
        "name": "Alzheimer",
        "symptoms": "Perda de memória recente",
        "id": "ca5887fe-ce25-4d38-b967-f53d2f60262e"
    }
}
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Caso paciente não passe o nome da doença
Status 400 Bad Request json 
{
    "error": "name is a required field"
}

Headers
Content-Type
application/json
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Body json
{
  "name": "",
  "symptoms": ""
}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/disease" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X POST \
  -d '{
  "name": "",
  "symptoms": ""
}' 
GET List Diseases
https://api-sgs-28.herokuapp.com/patient/disease
/patient/disease

Esta rota não necessita de corpo
Essa rota necessita de autenticação
Retorno esperado
Status 200 Ok

[
    {
        "id": "1f3b337c-0626-4c6f-9f17-55f44981ec3b",
        "name": "Alzheimer",
        "symptoms": "Perda de memória recente"
    },
    {
        "id": "a932ad1c-1fed-4001-a66f-0f5fcaa1ea67",
        "name": "Tuberculose",
        "symptoms": "Tosse com sangue e cansaço excessivo"
    }
]
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Headers
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/disease" \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X GET 
PATCH Update Disease
https://api-sgs-28.herokuapp.com/patient/disease/
/patient/disease/:diseaseId

name - deve ser do tipo string
symptoms - deve ser do tipo string
Essa rota necessita de autenticação
Retorno esperado
Status 200 Ok

{
    "message": "Disease Update!",
    "disease": {
        "id": "9eb98078-cc22-474a-871f-d1484fab84d1",
        "name": "",
        "symptoms": ""
    }
}
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Caso tente atualizar doença de outro paciente
Status 403 Forbidden

{
    "status": "error",
    "code": 403,
    "message": "Cannot change another patient's disease"
}
Headers
Content-Type
application/json
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Body json
{
  "name": "",
  "symptoms": ""
}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/disease/" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X PATCH \
  -d '{
  "name": "",
  "symptoms": ""
}' 
Exam
POST Create Exam
https://api-sgs-28.herokuapp.com/patient/exam
/patient/exam

Todos os campos são obrigatórios
name - deve ser do tipo string
date - deve ser do tipo string (ano/mês/dia)
results_exams - deve ser do tipo string
Essa rota necessita de autenticação
Retorno esperado
Status 201 Created

{
    "message": "Exam Created!",
    "exams": {
        "name": "Exame de sangue",
        "date": "2020/10/20",
        "results_exams": "https/link_do_exame",
        "id": "ed5a910c-574f-4fa0-8553-43bc530c1a83"
    }
}
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Caso paciente não passe o nome da doença
Status 400 Bad Request ```json { "error": "name is a required field" }

### Caso paciente não passe a data
**Status 400 Bad Request**
json { "error": "date is a required field" }

### Caso paciente não passe o resultado do exame
**Status 400 Bad Request**
json { "error": "results_exams is a required field" } ```

Headers
Content-Type
application/json
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Body json
{
  "name": "",
  "date": "",
  "results_exams": ""
}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/exam" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X POST \
  -d '{
   "name": "",
  "date": "",
  "results_exams": ""
}' 
GET List Exams
https://api-sgs-28.herokuapp.com/patient/exam
/patient/exam

Esta rota não necessita de corpo
Essa rota necessita de autenticação
Retorno esperado
Status 200 Ok

[
    {
        "id": "ed5a910c-574f-4fa0-8553-43bc530c1a83",
        "name": "Exame de sangue",
        "date": "2020-10-20",
        "results_exams": "https/link_do_exame"
    },
    {
        "id": "446c6dd3-2715-408f-bb59-e7819e9c0d29",
        "name": "Exame de rotina",
        "date": "2020-06-15",
        "results_exams": "https/link_do_exame"
    }
]
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Headers
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/exam" \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X GET 
PATCH Update Exam
https://api-sgs-28.herokuapp.com/patient/exam/
/patient/exam/:examId

name - deve ser do tipo string
results_exams - deve ser do tipo string
Essa rota necessita de autenticação
Retorno esperado
Status 200 Ok

{
    "message": "Exam Update!",
    "exam": {
        "id": "446c6dd3-2715-408f-bb59-e7819e9c0d29",
        "name": "",
        "date": "",
        "results_exams": ""
    }
}
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Caso tente atualizar exame de outro paciente
Status 403 Forbidden

{
    "status": "error",
    "code": 403,
    "message": "Cannot change another patient's exam"
}
Headers
Content-Type
application/json
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Body json
{
  "name": "",
  "results_exams": ""
}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/exam/" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X PATCH \
  -d '{
   "name": "",
  "results_exams": ""
}' 
Medicine
POST Create Medicine
https://api-sgs-28.herokuapp.com/patient/medicine
/patient/medicine

Somente o campo name é obrigatório
name - deve ser do tipo string
description - deve ser do tipo string
Essa rota necessita de autenticação
Retorno esperado
Status 201 Created

{
    "message": "Medicine Created!",
    "medicine": {
        "name": "Neosoro",
        "description": "Uso diário",
        "id": "b2b44b99-fe93-4375-a5e9-fdcc5fe9b74e"
    }
}
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Caso paciente não passe o nome da doença
Status 400 Bad Request json 
{
    "error": "name is a required field"
}

Headers
Content-Type
application/json
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Body json
{
  "name": "",
  "description": ""
}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/medicine" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X POST \
  -d '{
  "name": "",
  "description": ""
}' 
GET List Medicines
https://api-sgs-28.herokuapp.com/patient/medicine
/patient/medicine

Esta rota não necessita de corpo
Essa rota necessita de autenticação
Retorno esperado
Status 200 Ok

{
    "medicines": [
        {
            "id": "10475732-fde9-4a59-b937-bdcbfb9c4b72",
            "name": "Neosoro",
            "description": "Uso diário"
        },
        {
            "id": "09b71983-c904-4443-819d-a22ca01ac9c5",
            "name": "Glifage XR",
            "description": "Todas as noites após o jantar"
        }
    ]
}
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Headers
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Example request:
Copy to clipboard
curl "https://api-sgs-28.herokuapp.com/patient/medicine" \
  -H 'Authorization: Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}' \
  -X GET 
PATCH Update Medicine
https://api-sgs-28.herokuapp.com/patient/medicine/
/patient/medicine/:medicineId

name - deve ser do tipo string
description - deve ser do tipo string
Essa rota necessita de autenticação
Retorno esperado
Status 200 Ok

{
    "message": "Medicine Update!",
    "medicine": {
        "id": "6e087d18-308f-418e-8c54-e04dd5efe51a",
        "name": "",
        "description": ""
    }
}
Caso token estiver errado
Status 401 Unauthorized

{
    "message": "Invalid token"
}
Caso não tenha token
Status 401 Unauthorized

{
    "message": "Missing authorization headers"
}
Caso tente atualizar medicamento de outro paciente
Status 403 Forbidden

{
    "status": "error",
    "code": 403,
    "message": "Cannot change another patient's medicine"
}
Headers
Content-Type
application/json
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
Body json
{
  "name": "",
  "description": ""
}
