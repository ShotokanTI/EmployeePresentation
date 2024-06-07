# Use a imagem base oficial do Node.js
FROM node:20-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte da aplicação
COPY . .

# Compile o projeto
RUN npm run build

# Exponha a porta que o Nuxt 3 irá usar
EXPOSE 3000

# Defina o comando para iniciar o servidor Nuxt 3 em modo de produção
CMD ["npm", "run", "preview"]
