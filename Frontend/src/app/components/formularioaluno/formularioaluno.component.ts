import { Component, OnInit, Input } from '@angular/core';
import { DadosAluno } from '../../models/dadosaluno';
import { AlunosServiceService } from '../../services/alunos-service.service';
import { MensagemErro } from 'src/app/models/mensagemerro';
import { NovoAlunoResposta } from 'src/app/models/novoalunoresposta';
import { ListaalunosComponent } from '../listaalunos/listaalunos.component';

@Component({
  selector: 'app-formularioaluno',
  templateUrl: './formularioaluno.component.html',
  styleUrls: ['./formularioaluno.component.css']
})
export class FormularioalunoComponent implements OnInit {

    @Input() detalhealuno:DadosAluno={
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

    mensagemerro:MensagemErro ={
        ErrorCode:0,
        ErrorMessage:''
    }

    novoalunoresposta:NovoAlunoResposta ={
        ErrorCode:0,
        ErrorMessage:'',
        AlunoID:0
    }

    constructor(private alunosService:AlunosServiceService, private listaalunosComponent:ListaalunosComponent) { }

    ngOnInit(): void {
    }

    

    guardarAluno(aluno:DadosAluno):void{
        if(aluno.AlunoID==0){
            this.alunosService.inserirAluno(aluno)
                .subscribe(novoalunoresposta => {
                    this.novoalunoresposta = novoalunoresposta;
                    this.listaalunosComponent.consultarTodosOsAlunos();
                });
        }
        else{
            this.alunosService.alterarAluno(aluno)
                .subscribe(mensagemerro => {
                    this.mensagemerro = mensagemerro;
                    this.listaalunosComponent.consultarTodosOsAlunos();
                });
        }
    }

    apagarAluno(AlunoID:number):void{
        this.alunosService.apagarAluno(AlunoID)
            .subscribe(mensagemerro => {
                this.mensagemerro = mensagemerro;
                this.listaalunosComponent.consultarTodosOsAlunos();
            });
    }
}
