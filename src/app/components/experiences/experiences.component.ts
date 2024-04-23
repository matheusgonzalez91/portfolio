import { Component, OnInit } from '@angular/core';

interface Experiencia {
  empresa: string;
  cargo: string;
  descricao: string;
  periodo: string;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  experiencias: Experiencia[] = [
    {
      empresa: 'Smart Sales LTDA',
      cargo: 'Desenvolvedor Júnior',
      descricao:
        'Participação ativa na concepção de projetos, realização de testes contínuos e otimização de novas funcionalidades, auxílio no desenvolvimento de novas tecnologias internas da empresa para aprimorar processos e produtos, colaboração em equipes multidisciplinares para resolver desafios técnicos e implementar soluções inovadoras, integração de sistemas utilizando JavaScript e PHP para garantir a interoperabilidade entre diferentes plataformas e serviços.',
      periodo: '[05/2023] - [02/2024]',
    },
    {
      empresa: 'AW5 Tecnologia',
      cargo: 'Desenvolvedor de Software',
      descricao:
        'Desenvolvimento completo de uma plataforma para jogos de Poker, incluindo backend e frontend, utilizando tecnologias avançadas como Python, Clickhouse, Docker e DBeaver para construir uma solução robusta e escalável, configuração e administração de ambientes Linux para hospedar a aplicação, colaboração efetiva com equipes de desenvolvimento e QA para garantir a entrega de um produto de alta qualidade, utilização eficiente de Git e GitHub para controle de versão e colaboração em equipe.',
      periodo: '[08/2023] - [10/2023]',
    },
    {
      empresa: 'Phoenix Publicidade',
      cargo: ' Desenvolvedor Web',
      descricao:
        'Responsável exclusivo pelo desenvolvimento e construção de páginas web e landing pages, desde a concepção até a implementação, criação de interfaces de usuário atraentes e responsivas utilizando HTML, CSS e JavaScript, implementação e customização de temas e plugins no WordPress para atender às necessidades específicas dos clientes, colaboração próxima com designers e gerentes de projeto para garantir a entrega de projetos dentro do prazo e orçamento estabelecidos, otimização de desempenho e usabilidade das páginas para uma melhor experiência do usuário.',
      periodo: '[07/2023] - [08/2023] (Temporário)',
    },
  ];

  ngOnInit(): void {
    this.filtrarExperiencias('Smart Sales LTDA');
  }

  experienciasFiltradas: Experiencia[] = [];
  empresaSelecionada: string = 'Smart Sales LTDA';
  empresaSelecionadaIndex = 0;

  filtrarExperiencias(empresa: string) {
    this.empresaSelecionada = empresa;
    this.experienciasFiltradas = this.experiencias.filter(
      (experiencia: Experiencia) => experiencia.empresa === empresa
    );
    this.empresaSelecionadaIndex = this.experiencias.findIndex(
      (experiencia: Experiencia) => experiencia.empresa === empresa
    );
  }

  nextSlide() {
    if (this.empresaSelecionadaIndex < this.experiencias.length - 1) {
      this.empresaSelecionadaIndex++;
      this.filtrarExperiencias(this.experiencias[this.empresaSelecionadaIndex].empresa);
    } else {
      this.empresaSelecionadaIndex = 0;
      this.filtrarExperiencias(this.experiencias[this.empresaSelecionadaIndex].empresa);
    }
  }

  prevSlide() {
    if (this.empresaSelecionadaIndex > 0) {
      this.empresaSelecionadaIndex--;
      this.filtrarExperiencias(this.experiencias[this.empresaSelecionadaIndex].empresa);
    } else {
      this.empresaSelecionadaIndex = this.experiencias.length - 1;
      this.filtrarExperiencias(this.experiencias[this.empresaSelecionadaIndex].empresa);
    }
  }
}
