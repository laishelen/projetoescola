from flask import Flask,request
from dbapi.alunos import Aluno

app=Flask(__name__)
app.secret_key="k4QtZWvoB9NnNnJrbv4SpSC2wtw7NHCwSekUXgqDoyuUgYiYe5UbzuJj7Xwe4jNZa3YjUorWAspAa85G7DoPAhWvkdCn4W6LsD6EnU8Nnam7baX8iHiWASpKzqMTU9UJ"

@app.route("/backend/consultartodososalunos")
def consultarTodosOsAlunos():
    aluno=Aluno()
    result=aluno.consultarTodosOsAlunos()
    return result

@app.route("/backend/consultaraluno/<alunoid>")
def consultarAluno(alunoid):
    aluno=Aluno()
    result=aluno.consultarAluno(alunoid)
    return result

@app.route("/backend/inseriraluno", methods=["POST"])
def inserirAluno():
    Nome=request.json["Nome"]
    NCC=request.json["NCC"]
    NIF=request.json["NIF"]
    NISS=request.json["NISS"]
    NUtente=request.json["NUtente"]
    Morada=request.json["Morada"]
    CodigoPostal=request.json["CodigoPostal"]
    Telefone=request.json["Telefone"]
    Email=request.json["EMail"]
    Foto=request.json["Foto"]
    aluno=Aluno()
    result=aluno.inserirAluno(Nome,NCC,NIF,NISS,NUtente,Morada,CodigoPostal,Telefone,Email,Foto)
    return result

@app.route("/backend/alteraraluno",methods=["POST"])
def alterarAluno():
    AlunoID=request.json["AlunoID"]
    Nome=request.json["Nome"]
    NCC=request.json["NCC"]
    NIF=request.json["NIF"]
    NISS=request.json["NISS"]
    NUtente=request.json["NUtente"]
    Morada=request.json["Morada"]
    CodigoPostal=request.json["CodigoPostal"]
    Telefone=request.json["Telefone"]
    Email=request.json["EMail"]
    Foto=request.json["Foto"]
    aluno=Aluno()
    result=aluno.alterarAluno(AlunoID,Nome,NCC,NIF,NISS,NUtente,Morada,CodigoPostal,Telefone,Email,Foto)
    return result

@app.route("/backend/apagaraluno/<alunoid>")
def apagarAluno(alunoid):
    aluno=Aluno()
    result=aluno.apagarAluno(alunoid)
    return result

if __name__=='__main__':
    app.debug=True
    app.run("localhost","5000")
