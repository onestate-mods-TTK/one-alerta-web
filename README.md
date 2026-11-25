# One Alerta — versão Web instalável (beta 0.1)

Esta pasta contém a PWA do One Alerta para teste inicial no iPhone e Android. Inclui os 52 horários do catálogo da versão Android 1.10.

## Arquivos para publicar

Envie o conteúdo desta pasta para a raiz do repositório `onestate-mods-TTK/one-alerta-web`:

- `index.html`
- `app.js`
- `styles.css`
- `manifest.webmanifest`
- `sw.js`
- `.nojekyll`
- pasta `assets/` (os três ícones PNG)
- `README.md`

Não envie a pasta externa `One_Alerta_iPhone_PWA` como uma subpasta. O arquivo `index.html` precisa ficar diretamente na raiz do repositório.

## Publicar no GitHub Pages pelo Android

1. Abra `https://github.com/onestate-mods-TTK/one-alerta-web` no navegador.
2. Toque em **Add file → Upload files**.
3. Extraia este ZIP no Android e envie os arquivos listados acima para a raiz do repositório. Envie os três PNGs dentro da pasta `assets/` para uma pasta `assets` no GitHub.
4. Faça **Commit changes** na branch `main`.
5. Abra **Settings → Pages**.
6. Em **Build and deployment**, escolha **Deploy from a branch**.
7. Selecione branch `main` e pasta `/(root)`, depois toque em **Save**.
8. O endereço esperado é `https://onestate-mods-ttk.github.io/one-alerta-web/`.

## Configuração do login Google/Firebase

O login e a sincronização só funcionarão depois de liberar o domínio GitHub Pages:

1. No Google Cloud Console, edite o cliente OAuth Web `236048533090-eg72tk05j7t2976fvu1adoj01qdna0e9.apps.googleusercontent.com` e adicione a origem JavaScript `https://onestate-mods-ttk.github.io`.
2. No Firebase Console do projeto `agenda-inteligente-7f960`, em Authentication → Settings → Authorized domains, adicione `onestate-mods-ttk.github.io`.
3. Confirme que o provedor Google está habilitado e que as regras do Firestore permitem leitura e escrita autenticada do próprio usuário em `users/{uid}/agenda/dados`.

A chave Firebase incluída no JavaScript é uma chave pública de identificação do projeto. A proteção depende das regras do Firestore. Nunca publique credenciais de conta de serviço, chaves privadas ou tokens.

## O que esta beta tem

- Interface escura com marca One Alerta / Agenda Inteligente.
- 52 horários em Exército, Porto, PVP e Entrega de Drone.
- Seleção individual de horários, com persistência local.
- Lembretes pessoais com criação, edição, exclusão e histórico local.
- Login Google via Google Identity Services e Firebase Authentication REST.
- Sincronização com o documento Firestore usado pelo Android (`users/{uid}/agenda/dados`), incluindo mesclagem por ID na primeira conexão.
- Cache offline do app shell por service worker.
- Manifest e ícones para instalação na Tela de Início.

## Limitações que ainda precisam ser testadas

- **Push/alarmes com o app fechado ainda não estão ativos.** O service worker recebe push, mas este pacote não inclui o serviço de envio/agendamento Web Push. Não prometa alertas em segundo plano ainda.
- A narração Kokoro em segundo plano não faz parte desta versão para iPhone.
- Login Google e Firestore dependem da configuração do domínio e das regras acima.
- É necessário testar no Safari real antes de divulgar. Este projeto não foi validado em um iPhone físico.

## Instalar no iPhone

1. Abra a URL publicada pelo Safari.
2. Toque em Compartilhar → Adicionar à Tela de Início → Adicionar.
3. Abra o ícone One Alerta na Tela de Início.
4. Faça login Google em Configurações → Conta.

## Estrutura Firestore compatível com o Android

`projects/agenda-inteligente-7f960/databases/(default)/documents/users/{uid}/agenda/dados`

Campos string: `lembretesJson` e `historicoJson`.

Os objetos de lembrete usam a estrutura Android: `id`, `nome`, `mensagem`, `data` (epoch em milissegundos), `musica`, `volume`, `loop`.
