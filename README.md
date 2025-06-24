# Portfólio

Este repositório contém a aplicação Angular do meu portfólio pessoal e os arquivos
necessários para publicá-lo usando Docker e Nginx com SSL.

## Configuração da máquina

1. **Instalação do Docker**

   ```bash
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   sudo usermod -aG docker $USER
   ```
   Efetue logout e login novamente para aplicar a permissão do grupo.

2. **Instalação do Docker Compose**

   ```bash
   sudo apt-get install docker-compose-plugin
   ```

3. Certifique-se de que o DNS do domínio `jpfurlan.dev` aponte para o IP
   público da máquina.

## Build e publicação

1. Clone este repositório na máquina de destino.
2. No diretório do projeto, execute o build das imagens:

   ```bash
   docker compose build
   ```

3. Suba o contêiner do Nginx:

   ```bash
   docker compose up -d web
   ```

4. Obtenha o certificado SSL (ajuste o e-mail conforme desejado):

   ```bash
   docker compose run --rm certbot
   docker compose exec web nginx -s reload
   ```

Para renovação periódica, agende:

```bash
0 0 * * * docker compose run --rm certbot renew && docker compose exec web nginx -s reload
```

A aplicação ficará acessível em `https://jpfurlan.dev`.

A configuração foi testada em uma máquina ARM com 4 núcleos e 24 GB de RAM.
