import { Injectable } from '@angular/core';
import { Observable, of, catchError, isEmpty } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Alunos } from '../models/alunos';
import { DadosAluno } from '../models/dadosaluno';
import { NovoAlunoResposta } from '../models/novoalunoresposta';
import { MensagemErro } from '../models/mensagemerro';

@Injectable({
  providedIn: 'root'
})
export class AlunosServiceService {

    private consultarTodosOsAlunosUrl = 'http://localhost:5000/backend/consultartodososalunos';
    private consultarAlunoUrl = 'http://localhost:5000/backend/consultaraluno/';
    private inserirAlunoUrl = 'http://localhost:5000/backend/inseriraluno';
    private alterarAlunoUrl = 'http://localhost:5000/backend/alteraraluno';
    private apagarAlunoUrl = 'http://localhost:5000/backend/apagaraluno/';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    constructor(private http:HttpClient) { }
    
    consultarTodosOsAlunos():Observable<Alunos>{
        return this.http.get<Alunos>(this.consultarTodosOsAlunosUrl)
        .pipe(
            catchError(this.handleError<Alunos>('Ocorreu um erro no consultarTodosOsAlunos'))
        )
    }

    consultarAluno(AlunoId:number):Observable<Alunos>{
        var url=this.consultarAlunoUrl+AlunoId;
        return this.http.get<Alunos>(url)
        .pipe(
            catchError(this.handleError<Alunos>('Ocorreu um erro no consultarAluno'))
        )
    }

    inserirAluno(aluno:DadosAluno):Observable<NovoAlunoResposta>{
        return this.http.post<NovoAlunoResposta>(this.inserirAlunoUrl, aluno, this.httpOptions).pipe(
            catchError(this.handleError<NovoAlunoResposta>('Ocorreu um erro no inserirAluno'))
        );
    }

    alterarAluno(aluno:DadosAluno):Observable<MensagemErro>{
        return this.http.post<MensagemErro>(this.alterarAlunoUrl, aluno, this.httpOptions).pipe(
            catchError(this.handleError<MensagemErro>('Ocorreu um erro no alterarAluno'))
        );
    }

    apagarAluno(AlunoId:number):Observable<MensagemErro>{
        var url=this.apagarAlunoUrl+AlunoId;
        return this.http.get<MensagemErro>(url)
        .pipe(
            catchError(this.handleError<MensagemErro>('Ocorreu um erro no apagarAluno'))
        )
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

    
}
