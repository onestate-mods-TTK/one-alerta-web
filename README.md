# One Alerta — versão Web instalável (beta 0.2)

Esta pasta contém uma PWA (Progressive Web App) para teste no iPhone e Android. Foi criada a partir do catálogo `EventCatalog.java` da versão Android 1.10 e contém os 52 horários do OneState RP.

## O que já está implementado

- Interface escura inspirada no aplicativo Android.
- 52 horários em Exército, Porto, PVP e Entrega de Drone.
- Seleção individual e selecionar/limpar todos; seleções salvas no aparelho.
- Lembretes pessoais com criação, edição, exclusão e histórico local.
- Login Google via Google Identity Services e troca de token pelo Firebase Authentication REST.
- Sincronização com o mesmo documento Firestore do Android: `users/{uid}/agenda/dados`, nos campos `lembretesJson` e `historicoJson`.
- Mesclagem dos arrays por ID, preservando lembretes locais no primeiro login (mesma estrutura do app Android).
- Cache offline do app shell via service worker.
- Alertas locais enquanto a página está aberta e em execução: verificação a cada segundo, notificação do sistema se a permissão estiver concedida e sinal sonoro curto após ativação pelo usuário.
- Indicador ONLINE/SEM INTERNET separado do estado de login Google.
- Manifest e ícones para instalação na Tela de Início.

## Limitações importantes desta beta

1. **Notificações com o app fechado ainda não estão ligadas.** O iOS aceita Web Push em web apps adicionados à Tela de Início (iOS 16.4+), mas é necessário configurar e hospedar um serviço que receba as inscrições Web Push e envie mensagens nos horários corretos. O service worker já contém o manipulador de push recebido, mas não há emissor/agenda push neste pacote. Não prometa alarmes em segundo plano ainda.
2. Os lembretes desta beta ficam salvos e sincronizados; não há alertas garantidos quando o navegador/PWA está suspenso ou fechado.
3. A narração Kokoro em segundo plano não está incluída nesta versão iPhone.
4. Login Google e Firestore dependem da configuração do domínio autorizado no Google Cloud/Firebase e das regras Firestore já existentes.
5. Precisa de um primeiro teste em Safari real antes de divulgar ao público. Não há simulador iOS neste pacote.

## Publicar pelo Android usando GitHub Pages gratuito

1. Crie um repositório público novo no GitHub, por exemplo `one-alerta-web`.
2. Extraia este ZIP no Android. Envie os arquivos que estão dentro desta pasta para a raiz do repositório (`index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `sw.js`, `assets/` e `README.md`). Não envie a pasta externa como uma camada adicional.
3. No repositório, abra **Settings → Pages**.
4. Em Build and deployment, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
5. Aguarde o GitHub Pages apresentar a URL, normalmente `https://SEU-USUARIO.github.io/one-alerta-web/`.

## Habilitar login Google (obrigatório para sincronização)

O código já contém o projeto Firebase e o OAuth Web Client usados pelo aplicativo Android. Antes de o login funcionar no domínio publicado:

1. Abra Google Cloud Console → APIs e serviços → Credenciais.
2. Edite o cliente OAuth Web `236048533090-eg72tk05j7t2976fvu1adoj01qdna0e9.apps.googleusercontent.com` e adicione como **Origem JavaScript autorizada** o domínio do GitHub Pages, apenas a origem, por exemplo `https://SEU-USUARIO.github.io` (sem caminho do repositório).
3. No Firebase Console do projeto `agenda-inteligente-7f960`, em Authentication → Settings → Authorized domains, adicione `SEU-USUARIO.github.io`.
4. Confirme que o provedor Google continua habilitado e que as regras do Firestore permitem leitura/escrita autenticada de cada usuário em `users/{uid}/agenda/dados`.

A chave de API Firebase presente no JavaScript é uma chave pública de identificação do projeto. A proteção dos dados depende das regras do Firestore; nunca publique credenciais de conta de serviço ou chaves privadas.

## Instalar no iPhone

1. A pessoa abre a URL publicada pelo **Safari** (não navegador dentro de outro app).
2. Toca em Compartilhar → Adicionar à Tela de Início → Adicionar.
3. Abre o ícone One Alerta na Tela de Início.
4. Faz login Google em Configurações → Conta.

## Como testar esta beta

- Em Configurações/Conta, tocar em **Ativar notificações e som** e aceitar a permissão.
- Tocar em **Testar alerta** e conferir a notificação do sistema e o sinal curto.
- Criar um lembrete para 1–2 minutos à frente, manter a página aberta e confirmar o alerta no horário.
- Conferir que a agenda mostra 52 horários e navegar pelas quatro categorias.
- Desmarcar um horário, fechar/reabrir o app e confirmar persistência.
- Criar dois lembretes locais, conectar Google e confirmar que os lembretes locais e os já existentes na nuvem aparecem juntos.
- Editar e excluir um lembrete e confirmar que o Firestore reflete a alteração.
- Testar offline após primeira abertura para verificar o cache do app shell.
- Fechar/suspender o site e observar que push em segundo plano ainda não está implementado; não considerar alarmes com o app fechado aprovados nesta fase.

## Estrutura Firestore compatível com o Android

`projects/agenda-inteligente-7f960/databases/(default)/documents/users/{uid}/agenda/dados`

Campos string:
- `lembretesJson`
- `historicoJson`

Os objetos de lembrete usam a estrutura Android: `id`, `nome`, `mensagem`, `data` (epoch em milissegundos), `musica`, `volume`, `loop`.


## Beta 0.2 — alertas com a página aberta

Ative **Notificações e som** na aba Conta. Use **Testar alerta** para conferir a permissão e o sinal sonoro. Os avisos agendados funcionam enquanto a página permanece aberta e em execução. Push com o site fechado continua pendente.
