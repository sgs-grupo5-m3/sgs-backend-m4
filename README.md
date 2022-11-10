

# SGS Backend & Documentação 🚑
SGS


&nbsp;
**Sistema Geral de Saúde**
Feito de paciente para médico.


&nbsp;

O SGS é uma aplicação cuja a funcionalidade consiste em integrar e agilizar o processo de consultas do historico de pacientes. 


&nbsp;

## Lista de Links do projeto Backend SGS

-  [Deploy no Vercel da aplicação](https://sgs-projeto-m3.vercel.app/)
- [Repositório do Frontend da Aplicação](https://github.com/sgs-grupo5-m3/sgs-projeto-m3)
- [Documentação oficial da API](https://sgs-grupo5-m3.github.io/sgs-backend-documentation/)
- [Apresentação do Projeto](https://docs.google.com/presentation/d/12b-4LH0HoejxgK_wPNGmE5XKmAH5-2SujnRhHHxNANk/edit#slide=id.g11ff941e7c1_1_8342)




## Session
 `POST` Login
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
Headers
`Content-Type
application/json`

## Body `json`
```
{
  "email": "test@email.com",
  "password": "123456"
}

```


### Example request:

```
  "email": "test@email.com",
  "password": "123456"
} 
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
`Content-Type
application/json`

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

` POST ` Create Speciality
"https://api-sgs-28.herokuapp.com/doctor/specialties
/doctor/specialties"

Todos os campos são obrigatórios
- name 
- deve ser do tipo string

Essa rota não necessita de autenticação
Retorno esperado
**Status 201 Created**

{
    "message": "Specialty Created!",
    "specialty": {
        "name": "Cirurgião",
        "id": "f7857b1f-079a-48d4-9543-586516db5a22"
    }
}
Caso o doutor(a) não passe o nome


&nbsp;
**Status 400 Bad Request**

`{
    "error": "name is a required field"
}`

`Headers
Content-Type
application/json`

Body json
``` 
{
  "name": ""
}
```
Example request:
```
{
  "name": "Clinico"
}

```
## `GET` List Speciality
`https://api-sgs-28.herokuapp.com/doctor/specialties
/doctor/specialties`

- Esta rota não necessita de corpo
- Essa rota não necessita de autenticação
Retorno esperado


&nbsp;
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
 "https://api-sgs-28.herokuapp.com/doctor/specialties" \
  
``` 
## `GET` List Pacient
`https://api-sgs-28.herokuapp.com/doctor/patient
/doctor/patient/:cpf`

- Esta rota não necessita de corpo
- Essa rota necessita de autenticação
- Retorno esperado


&nbsp;
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
- name : deve ser do tipo string
- birth_date : deve ser do tipo string (ano/mês/dia)
- email : deve ser do tipo string
- password: deve ser do tipo string
- cpf:  deve ser do tipo string


&nbsp;
Essa rota não necessita de autenticação
Retorno esperado


&nbsp;
`Status 201 Created`

```{
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

```


Caso paciente já esteja cadastrado


&nbsp;
**Status 409 Conflict**

```
{
    "status": "error",
    "code": 409,
    "message": "User already exists"
}
```

Caso o paciente não passe o nome


&nbsp;
**Status 400 Bad Request**

`{
    "error": "name is a required field"
}`




Caso o paciente não passe a data de nascimento


&nbsp;
**Status 400 Bad Request**

`{
    "error": "birth_date is a required field"
}
`

Caso o paciente não passe o email


&nbsp;
**Status 400 Bad Request**

`
{
    "error": "email is a required field"
}
`

Caso o paciente não passe a senha


&nbsp;
**Status 400 Bad Request**


`{
    "error": "password is a required field"
}
`

Caso o paciente não passe o cpf


&nbsp;
**Status 400 Bad Request**
`
{
    "error": "cpf is a required field"
}
`

`Headers
Content-Type
application/json`
Body json
```{
  "name": "gIOVANI",
  "birth_date": "1998/08/29",
  "email": "giovani@email.com",
  "password": "123456",
  "cpf": "123456789"
}
```

Example request:

```
curl "https://api-sgs-28.herokuapp.com/patient" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
  "name": "gIOVANI",
  "birth_date": "1998/08/29",
  "email": "giovani@email.com",
  "password": "123456",
  "cpf": "123456789"
}
```

## Allergy

### `POST` Create Allergy
`https://api-sgs-28.herokuapp.com/patient/allergy
/patient/allergy `

Todos os campos são obrigatórios
- name - deve ser do tipo string
- description - deve ser do tipo string

Essa rota necessita de autenticação
Retorno esperado


&nbsp;
**Status 201 Created**
```
{
    "message": "Allergy Created!",
    "allergy": {
        "name": "Antibióticos",
        "description": "Coceira e vermelhidão na pele",
        "id": "b26c30ee-bf3f-4eb9-94f6-5aa5d1f627bc"
    }
}

```
Caso token estiver errado


&nbsp;
**Status 401 Unauthorized**
`
{
    "message": "Invalid token"
}`

Caso não tenha token


&nbsp;
Status 401 Unauthorized


`{
    "message": "Missing authorization headers"
}`


Caso paciente não passe o nome da alergia


&nbsp;
Status 400 Bad Request json 
`{
    "error": "name is a required field"
}`

`Headers
Content-Type
application/json
Authorization
Bearer {% response 'body', 'req_969654ffbf8149138a73ae0a9591ee6b', 'b64::JC50b2tlbg==::46b', 'never', 60 %}
`
Body json
`{
  "name": "",
  "description": ""
}`


A documentação completa encontra-se no link no cabeçalho deste repositório 






