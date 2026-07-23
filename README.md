# Flui Creative Studio

Editor de vídeo multifaixa com legendas sincronizadas, pensado para criação rápida no desktop e no iPhone. O processamento acontece localmente no navegador e o projeto pode ser publicado como PWA no Netlify.

## O que o editor faz

### Vídeo, imagem e timeline

- Une vídeos e imagens em uma trilha visual unificada.
- Permite várias trilhas de vídeo/imagem e várias trilhas de áudio.
- Adiciona arquivos diretamente na trilha escolhida pelo botão `+`.
- Aceita vídeo, imagem, áudio e vídeo com áudio extraído para uma trilha de áudio.
- Permite mover, duplicar, dividir, excluir e selecionar cada clipe individualmente.
- Permite ampliar a timeline de `1x` a `8x`, mantendo o cursor como referência e exibindo mais quadros para ajustes precisos.
- Exibe e oculta cada trilha separadamente.
- Cria sobreposição quando dois clipes ocupam o mesmo intervalo da timeline.
- Usa encaixe magnético para aproximar clipes e escolher transições em uma junção específica.
- Oferece alças de início e fim para aparagem não destrutiva de vídeo, imagem e áudio.
- Ajusta automaticamente a duração da trilha quando uma imagem é estendida ou encurtada no final.
- Permite volume de 0% a 200%, velocidade de 0,25x a 5x e fade in/fade out por clipe.
- Mantém áudio extraído vinculado à velocidade do vídeo de origem, com opção de desvincular.
- Permite narração pelo microfone do dispositivo e sincronização opcional de legendas com a narração.

### Legendas

- Mantém o roteiro e a sincronização existentes sem depender do reconhecimento automático.
- Oferece geração opcional de legenda automática pelo áudio do vídeo.
- Permite revisar texto, início, fim e encadeamento dos trechos.
- Inclui os modos Frase, Palavra e Karaokê.
- Mantém o modo `Editorial automático`, que escolhe uma palavra de impacto dentro da própria legenda.
- Oferece composições opcionais `Empilhada`, `Impacto livre` e `Editorial`, formadas por Leitura, Impacto e Apoio.
- Permite editar texto, início, fim, escala e posição de cada parte da composição separadamente.
- Permite mover a composição inteira e estender uma parte por várias legendas sem alterar a sincronização original.
- Aplica entrada e saída suaves, escala, deslocamento curto e destaque cinético sem alterar os tempos originais.
- Permite escolher fonte, tamanho, alinhamento, cor do texto, cor da palavra de destaque, fundo, sombra, contorno e espaçamento.
- Usa composições independentes para vídeos verticais e horizontais, com áreas seguras para redes sociais.
- Exibe guias de alinhamento para facilitar o posicionamento magnético no centro do vídeo.
- Permite excluir somente a legenda selecionada pelo teclado `Delete` no computador ou pelo botão no iPhone.

As famílias tipográficas incluem opções clássicas, modernas, editoriais, condensadas, monoespaçadas e fontes com personalidade, usando fontes instaladas no sistema quando disponíveis.

### Grade e composição

- Oferece grade livre ou presets para 2, 3 e 4 vídeos simultâneos.
- Inclui proporções `Original`, `9:16`, `16:9`, `1:1` e `4:5`, refletidas na prévia e na exportação.
- Permite reposicionar cada vídeo dentro da sua célula da grade arrastando a célula ou usando as setas do teclado.
- Mantém o enquadramento escolhido na prévia e no arquivo exportado.
- Permite redimensionar vídeos sobrepostos pela alça de canto ou por gesto de pinça no iPhone.
- Preserva as camadas e o áudio correspondente quando vídeos são colocados em trilhas diferentes.

### Cor e filtros

- Inclui filtros com miniaturas para comparação rápida.
- Permite escolher filtro, intensidade e ajustes de cor separadamente para cada vídeo.
- Organiza os filtros por coleções e permite buscar pelo nome.
- Permite importar LUTs 3D `.cube`, visualizar o resultado e ajustar a intensidade.
- Inclui ajustes de exposição, brilho, contraste, saturação, brilho da cor, temperatura, calor, matiz, realces, sombras e ponto preto.
- Oferece botão para redefinir os ajustes de cor.
- Aplica filtros, LUTs e ajustes também no vídeo exportado.

### Transições e cortes

- Permite corte por intervalo e divisão no cursor em qualquer trilha.
- Oferece transições Seco, Fundido, Flash e Zoom.
- Permite escolher a transição diretamente no indicador da junção.
- Mantém cortes e vazios independentes por trilha, sem criar conteúdo duplicado ao escolher uma transição.
- Permite desfazer cortes e recuperar trechos aparados.

## Exportação

O exportador oferece:

- 720p, 1080p e até 4K, quando o dispositivo e o navegador suportarem;
- 24, 30 ou 60 FPS;
- proporções Original, 9:16, 16:9, 1:1 e 4:5;
- SDR/sRGB consistente entre prévia e arquivo final;
- vídeo com legendas incorporadas;
- opção, ativada por padrão, para anexar o comercial do Flui Creative Studio ao final;
- escolha automática do comercial vertical ou horizontal conforme a proporção final do projeto;
- formatos SRT, VTT e JSON para exportar as legendas separadamente.

Em navegadores compatíveis, o caminho otimizado usa WebCodecs e Mediabunny para codificar cada arquivo da sequência em uma única passagem, quadro a quadro e com timestamps constantes. O áudio é remontado offline a partir das trilhas, cortes, volumes, velocidades, fades e áudios dos vídeos sobrepostos. Isso mantém a barra de progresso, os quadros e o áudio sincronizados nas junções e também com múltiplos vídeos na grade.

Se o navegador não oferecer os recursos necessários, o editor usa um caminho de compatibilidade em tempo real e informa o estado no modal de exportação. A opção HDR experimental foi removida porque navegadores não preservam com segurança os metadados dinâmicos de Dolby Vision durante a composição em canvas; a exportação SDR mantém LUTs, filtros e cores das legendas previsíveis no iPhone e no desktop.

## Privacidade e armazenamento

- Vídeos, imagens, áudios e LUTs ficam no dispositivo e não são enviados para um servidor.
- Os ajustes do projeto são salvos localmente.
- Por segurança do navegador, arquivos locais precisam ser selecionados novamente após recarregar a página.
- A legenda automática baixa o modelo localmente apenas na primeira utilização; esse recurso é opcional e não altera o sistema de roteiro.

## PWA e iPhone

O editor funciona como Progressive Web App. No iPhone, a interface mantém prévia, controles, timeline, trilhas e painel de ferramentas em uma única tela, usando rolagem interna somente onde necessário. Também oferece prévia em tela cheia e controles de projeto para proporção, resolução e FPS.

No desktop, `←/→` move o cursor da timeline pelo passo atual, inicialmente `0,2 s`, e `↑/↓` aumenta ou diminui esse passo em `0,1 s`. No Mac, `Option + seta` reposiciona a legenda ou o vídeo selecionado na grade. Pressione `S` para dividir somente o vídeo selecionado no cursor. O cursor também pode ser arrastado diretamente com mouse ou toque.

## Executar localmente

Sirva a pasta com qualquer servidor de arquivos estáticos:

```sh
python3 -m http.server 4173
```

Abra `http://localhost:4173` no navegador.

## Publicar no Netlify

O arquivo `netlify.toml` publica a raiz do projeto sem etapa de compilação. O `service-worker.js` mantém os arquivos principais e o runtime de exportação disponíveis para uso como PWA, inclusive após o primeiro carregamento.

## Estrutura principal

- `index.html`: estrutura do editor e controles.
- `styles.css`: layout desktop, responsividade e interface do iPhone.
- `app.js`: estado do projeto, timeline, prévia, legendas, filtros, áudio e exportação.
- `filters/`: catálogo e arquivos de filtros/LUT.
- `assets/`: comerciais vertical e horizontal usados opcionalmente na exportação.
- `vendor/`: dependências locais, incluindo Mediabunny para exportação.
- `manifest.webmanifest`: configuração de instalação do PWA.
- `service-worker.js`: cache offline e atualização da versão publicada.
