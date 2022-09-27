import { Component, OnInit } from '@angular/core';
import { AlunosServiceService } from 'src/app/services/alunos-service.service';
import { Alunos } from '../../models/alunos';
import { DadosAluno } from '../../models/dadosaluno';
import { MensagemErro } from 'src/app/models/mensagemerro';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.css']
})
export class ListaalunosComponent implements OnInit {

    alunos:Alunos={
        ErrorCode:0,
        ErrorMessage:'',
        Resultado:[
            {
                AlunoID:0,
                Nome:'',
                NCC:'',
                NIF:'',
                NISS:'',
                NUtente:'',
                Morada:'',
                CodigoPostal:'',
                Telefone:'',
                EMail:'',
                Foto:''
            }
        ]
    }

    AlunoEscolhido:DadosAluno={
        AlunoID:0,
        Nome:'',
        NCC:'',
        NIF:'',
        NISS:'',
        NUtente:'',
        Morada:'',
        CodigoPostal:'',
        Telefone:'',
        EMail:'',
        Foto:''
    }

    limparAlunoEscolhido():void{
        this.AlunoEscolhido={
            AlunoID:0,
            Nome:'',
            NCC:'',
            NIF:'',
            NISS:'',
            NUtente:'',
            Morada:'',
            CodigoPostal:'',
            Telefone:'',
            EMail:'',
            Foto:''
        }
    }

    mensagemerro:MensagemErro={
        ErrorCode:0,
        ErrorMessage:''
    }

    constructor(private alunosService:AlunosServiceService) { }

    ngOnInit(): void {
        this.consultarTodosOsAlunos();
    }

    consultarTodosOsAlunos():void{
        this.alunosService.consultarTodosOsAlunos()
            .subscribe(alunos =>{
                this.alunos = alunos;
                this.limparAlunoEscolhido();
            } );
    }

    apagarAluno(AlunoID:number):void{
        this.alunosService.apagarAluno(AlunoID)
            .subscribe(mensagemerro => {
                this.mensagemerro = mensagemerro;
                this.consultarTodosOsAlunos();
            });
    }

    mostrarFormularioAluno(aluno:DadosAluno):void{
        this.AlunoEscolhido=aluno;
    }
}
