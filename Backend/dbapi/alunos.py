import pyodbc
import json

class Aluno:

    # Devolve uma string com os dados de conexão à base de dados
    def obterDriver(self):
        servername='localhost'
        port=1433
        database='Escola'
        username='EscolaUser'
        password='Pa$$w0rd'
        driver="DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={};PORT={};DATABASE={};UID={};PWD={};"
        driver=driver.format(servername,port,database,username,password)
        return driver

    def consultarTodosOsAlunos(self):
        driver=self.obterDriver()
        connection=pyodbc.connect(driver)
        cursor=connection.cursor()
        sqlquery="EXEC dbo.SP_ConsultarTodosOsAlunos"
        cursor.execute(sqlquery)
        result=cursor.fetchall()
        cursor.close()
        connection.close()
        output=''
        for parte in result:
            output+=parte[0]
        result=json.loads(output)[0]
        return result

    def consultarAluno(self, AlunoID):
        driver=self.obterDriver()
        connection=pyodbc.connect(driver)
        cursor=connection.cursor()
        sqlquery="EXEC dbo.SP_ConsultarAluno ?"
        values=(AlunoID)
        cursor.execute(sqlquery,values)
        result=cursor.fetchall()
        cursor.close()
        connection.close()
        for pedaco in result:
            print(pedaco)
        #result=json.loads(result[0][0][1:-1])
        return result

    def inserirAluno(self,Nome,NCC,NIF,NISS,NUtente,Morada,CodigoPostal,Telefone,EMail,Foto):
        driver=self.obterDriver()
        connection=pyodbc.connect(driver)
        cursor=connection.cursor()
        sqlquery="EXEC dbo.SP_InserirAluno ?,?,?,?,?,?,?,?,?,?"
        values=(Nome,NCC,NIF,NISS,NUtente,Morada,CodigoPostal,Telefone,EMail,Foto)
        cursor.execute(sqlquery,values)
        result=cursor.fetchall()
        cursor.commit()
        cursor.close()
        connection.close()
        result=json.loads(result[0][0][1:-1])
        return result

    def alterarAluno(self,AlunoID,Nome,NCC,NIF,NISS,NUtente,Morada,CodigoPostal,Telefone,EMail,Foto):
        driver=self.obterDriver()
        connection=pyodbc.connect(driver)
        cursor=connection.cursor()
        sqlquery="EXEC dbo.SP_AlterarAluno ?,?,?,?,?,?,?,?,?,?,?"
        values=(AlunoID,Nome,NCC,NIF,NISS,NUtente,Morada,CodigoPostal,Telefone,EMail,Foto)
        cursor.execute(sqlquery,values)
        result=cursor.fetchall()
        cursor.commit()
        cursor.close()
        connection.close()
        result=json.loads(result[0][0][1:-1])
        return result

    def apagarAluno(self,AlunoID):
        driver=self.obterDriver()
        connection=pyodbc.connect(driver)
        cursor=connection.cursor()
        sqlquery="EXEC dbo.SP_ApagarAluno ?"
        values=(AlunoID)
        cursor.execute(sqlquery,values)
        result=cursor.fetchall()
        cursor.commit()
        cursor.close()
        connection.close()
        result=json.loads(result[0][0][1:-1])
        return result