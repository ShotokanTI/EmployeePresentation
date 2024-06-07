# Lista de funcionários APP - LogComex

Este é um projeto Nuxt 3 para listar funcionários, com detalhes adicionais quando um funcionário é clicado. Este README fornece instruções sobre como configurar, construir e executar o projeto utilizando docker ou localmente.

## Pré-requisitos

Certifique-se de ter o Node instalado na sua máquina.

- [Node](https://nodejs.org/en)

Certifique-se de ter o Docker instalado na sua máquina.

- [Docker](https://docs.docker.com/get-docker/)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/ShotokanTI/EmployeePresentation
```

Entre no diretório do projeto

```bash
  cd EmployeePresentation
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

## Rodando virtualmente com docker

Crie a imagem docker

```bash
  docker build -t my-employees-app .
```

Execute o container

```bash
 docker run -p 3000:3000 my-employees-app
```

Pronto,agora só executar no browser

```bash
  http:/localhost:3000
```