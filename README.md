# Voz em Legenda

Protótipo de editor de legendas guiado por roteiro, preparado para hospedagem no Netlify.

## Recursos

- vídeo processado localmente no navegador;
- sincronização inicial baseada no roteiro correto;
- geração opcional de legendas automáticas pelo áudio do vídeo, sem alterar o fluxo guiado por roteiro;
- revisão de texto e tempos de cada trecho;
- tempos encadeados para ajustar automaticamente os trechos seguintes;
- posição livre da legenda por arraste na prévia;
- sincronização rápida do próximo trecho no tempo atual do vídeo;
- extensão rápida da legenda anterior até o tempo atual do vídeo;
- cinco estilos de legenda em um toque: Limpa, Impacto, Karaokê, Dupla e Faixa;
- legenda por frase, palavra isolada ou karaokê com a palavra atual destacada;
- 12 opções de tipografia, RGB livre para texto, destaque e fundo, contorno e sombra;
- animações Pop, Quicar, Digitar, Revelar, Deslizar e transições de saída;
- ajuste visual da legenda;
- cortes marcados em dois toques, com opção para desfazer o último corte;
- cortes vinculados à faixa selecionada, com vazios independentes em V1, V2, V3, imagens e áudios;
- encaixe magnético ao aproximar as partes de um corte e indicador contextual para escolher a transição daquela junção;
- transições de corte arrastáveis e encaixe magnético nos pontos de corte;
- importação de LUTs 3D no formato `.cube`, com prévia e controle de intensidade;
- correções de exposição, brilho, contraste, saturação, brilho da cor, temperatura, calor, matiz, realces, sombras e ponto preto;
- trilhas independentes de vídeo e áudio, com criação automática ao arrastar entre faixas e visibilidade individual;
- vídeos e imagens sobrepostos redimensionáveis pela alça de canto ou por gesto de pinça no iPhone;
- seleção da camada exibida em primeiro plano na prévia, sem perder as demais camadas da composição;
- blocos arrastáveis com duração, posição, tamanho, opacidade, entrada e volume;
- timeline multifaixa unificada para cortes, camadas de vídeo, imagens, áudio e legendas;
- botões `+` em cada faixa para importar diretamente no destino certo;
- união de vários vídeos em V1 e criação automática de V2, V3 e novas camadas ao soltar um clipe nas divisórias;
- composição automática quando vídeos em camadas diferentes ocupam o mesmo momento da timeline;
- volume independente de 0% a 200% para cada vídeo e para cada faixa de áudio;
- velocidade independente de 0,25x a 5,00x para vídeos e áudios;
- áudio extraído vinculado à velocidade do vídeo de origem, com botão para desvincular e editar separadamente;
- alças no início e no final de vídeos, imagens e áudios para aparagem não destrutiva e recuperação do trecho original;
- fade in e fade out independentes, em segundos, para cada trecho de vídeo ou áudio;
- corte de áudio em dois toques, com vazio independente, união magnética, transição seca ou fundida e desfazer;
- divisão em um toque em qualquer clipe de V1, V2, V3, A1, A2 e demais faixas, criando partes independentes;
- cada parte dividida pode ser movida, duplicada, excluída e receber volume ou fades próprios;
- exportação no iPhone com fades de áudio preservados, cortes sincronizados e menor uso de memória em MP4;
- extração do áudio de qualquer vídeo para uma faixa independente, silenciando o original para evitar duplicação;
- imagens posicionadas diretamente por arraste sobre o vídeo;
- aplicação do LUT também no vídeo exportado em 720p, 1080p ou 4K;
- exportação selecionável em 24, 30 ou 60 quadros por segundo;
- exportação otimizada nos navegadores compatíveis, com codificação quadro a quadro e timestamps constantes;
- exportação do vídeo com legendas incorporadas em 720p, 1080p ou 4K;
- exportação opcional em SRT, VTT e JSON.

A renderização do vídeo acontece no navegador e preserva o áudio original. O formato final será MP4 quando o navegador oferecer suporte; nos demais casos, WebM.

Os arquivos de vídeo, imagem, áudio e LUT permanecem somente no dispositivo. Como o navegador não pode reabrir arquivos locais sozinho, eles precisam ser selecionados novamente depois de recarregar a página; os demais ajustes do projeto continuam salvos localmente.

No protótipo, a legenda dinâmica distribui as palavras dentro do tempo de cada trecho. Uma sincronização palavra por palavra baseada diretamente no áudio poderá ser acrescentada ao modelo de transcrição personalizado em uma próxima etapa.

Os LUTs são processados localmente com aceleração gráfica. O arquivo precisa ser uma LUT 3D `.cube`, com tamanho entre 2 e 64. Por segurança do navegador, o arquivo LUT precisa ser selecionado novamente depois que a página for recarregada.

O leitor respeita a ordem oficial red-fastest do formato IRIDAS/Resolve, reorganiza os dados em blocos próprios para interpolação gráfica e reconhece tanto `DOMAIN_MIN`/`DOMAIN_MAX` quanto `LUT_3D_INPUT_RANGE`.

Nos navegadores com suporte a WebCodecs, a exportação usa um caminho quadro a quadro: cada imagem recebe um timestamp constante na taxa selecionada, o áudio é remontado ao redor dos cortes e o MP4 é codificado fora do ritmo da prévia. Isso evita que oscilações de desempenho virem quadros repetidos no arquivo. Em aparelhos mais antigos, o editor mantém automaticamente o exportador em tempo real como modo de compatibilidade.

A exportação otimizada usa Mediabunny 1.48.1, distribuído sob MPL-2.0 e incluído localmente em `vendor/`, para continuar disponível no modo PWA offline.

O site também funciona como um Progressive Web App (PWA), com instalação na tela inicial do iPhone e interface disponível offline após o primeiro acesso.

A legenda automática usa Whisper Base quantizado localmente e baixa o modelo somente na primeira utilização. O vídeo não é enviado para um servidor; o fluxo por roteiro continua independente e disponível sem esse recurso opcional.

No iPhone, o editor ocupa uma única tela sem rolagem da página. Prévia, timeline e dock de ferramentas permanecem visíveis; somente a faixa ou o painel ativo desliza internamente quando necessário.

## Executar localmente

Sirva esta pasta com qualquer servidor de arquivos estáticos. Por exemplo:

```sh
python3 -m http.server 4173
```

Abra `http://localhost:4173`.

## Netlify

O arquivo `netlify.toml` publica a raiz do projeto sem etapa de compilação.
# voz-em-legenda
