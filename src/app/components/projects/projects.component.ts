import { Component, OnInit, HostListener, ViewChild, ElementRef  } from '@angular/core';

interface Projeto {
  nome: string;
  descricao: string;
  linkProjeto: string;
  categoria: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent implements OnInit {

  @ViewChild('counterElement') counterElement!: ElementRef;

  startCounter = false;
  count = 0;
  targetCount = 35;
  intervalId: any;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const rect = this.counterElement?.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Verifica se o elemento do contador está visível na janela
    if (rect?.top <= windowHeight && rect?.bottom >= 0) {
      this.startCounter = true;
      this.startCounterInterval();
    }
  }

  startCounterInterval() {
    if (this.startCounter && !this.intervalId) {
      this.intervalId = setInterval(() => {
        if (this.count < this.targetCount) {
          this.count++;
        } else {
          clearInterval(this.intervalId);
        }
      }, 100); // Alterando para um intervalo menor (mais rápido)
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  projetos: Projeto[] = [
    {
      nome: 'Parking Control',
      descricao:
        'O objetivo do sistema é oferecer uma solução automatizada para o controle de estacionamento em prédios residenciais e condomínios. Ele permite aos moradores reservar vagas de estacionamento, controlar o acesso de veículos autorizados e monitorar o uso das vagas.',
      linkProjeto: 'https://github.com/matheusgonzalez91/parking-control',
      categoria: 'Java',
    },
    {
      nome: 'Cardápio de Restaurante',
      descricao:
        'O sistema de cardápio de restaurante oferece uma plataforma digital para os clientes visualizarem os itens disponíveis no menu, fazerem pedidos e realizarem pagamentos de forma conveniente. Ele também proporciona aos administradores do restaurante uma interface para gerenciar o menu, monitorar pedidos e manter o controle sobre o estoque dos ingredientes.',
      linkProjeto: 'https://github.com/matheusgonzalez91/cardapio-restaurante',
      categoria: 'Java',
    },
    {
      nome: 'Gestão de Vagas',
      descricao:
        'O Sistema de Gestão de Vagas é uma aplicação projetada para facilitar o controle e a administração de vagas de estacionamento em diversos contextos, como estacionamentos públicos, estabelecimentos comerciais, condomínios e instituições.',
      linkProjeto: 'https://github.com/matheusgonzalez91/gestao_vagas',
      categoria: 'Java',
    },
    {
      nome: 'Buscador de CEP',
      descricao:
        'O Buscador de CEP é uma aplicação web desenvolvida com ReactJS, que permite aos usuários inserir um CEP e obter informações detalhadas sobre o endereço correspondente. Ele utiliza uma API pública de serviços postais para realizar a busca e exibir os dados de forma organizada e acessível.',
      linkProjeto: 'https://github.com/matheusgonzalez91/buscador-cep',
      categoria: 'React',
    },
    {
      nome: 'Janela Modal',
      descricao:
        'O projeto "Janela Modal" consiste na implementação de um componente de interface de usuário que se sobrepõe ao conteúdo principal de uma aplicação web, destacando informações ou funcionalidades específicas de forma temporária e focada. Este componente, conhecido como modal, é ativado por meio de interações do usuário, como cliques em botões ou links, e pode ser programaticamente controlado pelo código da aplicação.',
      linkProjeto: 'https://github.com/matheusgonzalez91/Janela-Modal',
      categoria: 'React',
    },
    {
      nome: 'Angular CRUD',
      descricao:
        'O projeto consiste em uma aplicação web desenvolvida com o framework Angular, que permite realizar operações CRUD em dados armazenados localmente. Para simular uma API RESTful, é utilizado o Json-Server, uma ferramenta que permite criar uma API fake com base em um arquivo JSON.',
      linkProjeto: 'https://github.com/matheusgonzalez91/angular-crud',
      categoria: 'Angular',
    },
    {
      nome: 'Tela de Pesquisa',
      descricao:
        'A tela de pesquisa é uma parte fundamental de muitas aplicações, permitindo aos usuários buscar por informações específicas dentro de um conjunto de dados ou contexto definido. Ela oferece uma interface intuitiva e eficiente para encontrar e filtrar dados relevantes.',
      linkProjeto: 'https://github.com/matheusgonzalez91/tela-de-pesquisa',
      categoria: 'Angular',
    },
    {
      nome: 'Upload de Arquivo',
      descricao: 'O projeto de upload de arquivos feito em Angular e Node.js é uma aplicação que permite aos usuários enviar arquivos do lado do cliente para o servidor, onde podem ser processados e armazenados conforme necessário.',
      linkProjeto: 'https://github.com/matheusgonzalez91/upload-arquivo-angular',
      categoria: 'Angular',
    },
    {
      nome: 'Capturando Webcam',
      descricao: 'Este projeto consiste em uma aplicação Python que utiliza a biblioteca OpenCV para acessar a webcam do computador, capturar uma imagem em tempo real e salvar essa imagem como um arquivo de foto no sistema de arquivos local.',
      linkProjeto: 'https://github.com/matheusgonzalez91/capturando-webcam',
      categoria: 'Python',
    },
    {
      nome: 'Cadastro de Clientes',
      descricao: 'Este projeto consiste em uma aplicação Python que automatiza a extração da cotação atual do Bitcoin de uma página da web usando a biblioteca Selenium. Em seguida, os dados são organizados em um arquivo CSV para futura análise ou armazenamento.',
      linkProjeto: 'https://github.com/matheusgonzalez91/cadastro-de-clientes',
      categoria: 'Python',
    },
    {
      nome: 'Cotação Bitcoin',
      descricao: 'Este projeto é um sistema de cadastro de clientes desenvolvido em Python utilizando o banco de dados SQLite. Ele oferece uma interface gráfica para facilitar a interação do usuário e permite a exportação de toda a base de dados para o Excel.',
      linkProjeto: 'https://github.com/matheusgonzalez91/cotacao-bitcoin',
      categoria: 'Python',
    },
    {
      nome: 'Upload de Arquivos',
      descricao: 'O projeto de upload de arquivos com PHP consiste em uma aplicação web que permite aos usuários enviar arquivos para o servidor através de um formulário HTML e, em seguida, armazená-los em um diretório específico no servidor.',
      linkProjeto: 'https://github.com/matheusgonzalez91/upload-php',
      categoria: 'PHP',
    },
    {
      nome: 'Sistema de Login',
      descricao: 'O projeto de sistema de login com PHP e MySQL é uma aplicação web que permite aos usuários autenticarem-se em um sistema por meio de credenciais fornecidas (geralmente um nome de usuário e senha).',
      linkProjeto: 'https://github.com/matheusgonzalez91/sistema-de-login-php',
      categoria: 'PHP',
    },
    {
      nome: 'Portal de Notícias',
      descricao: 'O projeto de um portal de notícias feito com Node.js é uma aplicação web que fornece aos usuários acesso a artigos, notícias e informações atualizadas sobre diversos tópicos.',
      linkProjeto: 'https://github.com/matheusgonzalez91/portal-noticias',
      categoria: 'Node',
    },
  ];

  projetosFiltrados: Projeto[] = [];
  categoriaSelecionada: string = 'Java';

  ngOnInit(): void {
    this.filtrarProjetos('Java');
  }

  filtrarProjetos(categoria: string) {
    this.categoriaSelecionada = categoria;
    this.projetosFiltrados = this.projetos.filter(
      (projeto: Projeto) => projeto.categoria === categoria
    );
  }
}
