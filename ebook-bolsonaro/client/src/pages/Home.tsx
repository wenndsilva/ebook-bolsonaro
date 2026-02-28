/**
 * Design Philosophy: Moderno Conservador Dinâmico
 * - Azul profundo da bandeira brasileira como cor primária
 * - Verde escuro como secundário, branco e dourado como acentos
 * - Tipografia: Bebas Neue para títulos de impacto, Merriweather para corpo
 * - Layout: Hero de tela cheia, cards assimétricos, linha do tempo interativa
 * - Animações: Entradas rápidas com slide, contadores animados, parallax moderado
 */

import { useState, useEffect, useRef } from "react";
import { ChevronDown, BookOpen, Star, Shield, Flag, Users, Award, Heart, ArrowRight, Menu, X, Download, Share2 } from "lucide-react";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/LYPw7WYg0dTJ0G3nqmmXib/sandbox/Em0bQLzXhw7Z5qSkhelHCd-img-1_1772048275000_na1fn_aGVyb19iYW5uZXI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTFlQdzdXWWcwZFRKMEczbnFtbVhpYi9zYW5kYm94L0VtMGJRTHpYaHc3WjVxU2toZWxIQ2QtaW1nLTFfMTc3MjA0ODI3NTAwMF9uYTFmbl9hR1Z5YjE5aVlXNXVaWEkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=d~Eu1CUUAmmBGSvmuPliT8xKiw9dD7iLA8025EpOubtxl5t7iQzwnkuc4htgzWgaLYV7DXPcy2DFrSlIuJrqiDg-ZuzyXUx4gzUPdWoTJ7BogL5TAyr8Kj8NcgctBwZ8fqBBgbmXaCJCU9rQNpJ~jVrMxMfZakcjSvHOMKDAKphfKFbb5ILqr3-P9NmOd~k5gn~hiso9rFECSEFkZ7ECtgSN5se6o7z8~qTVUuYsVsR96dmJLB0GmOksILJ34xclQw7YNK1cAHP7Bj4I1kLzNt9zjYbLmCcnS5HKZzToM7TwINfCtFOvG94J70jYAnQwE7LnTKklRfG-o2zXdhfbNw__";
const MILITARY_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/LYPw7WYg0dTJ0G3nqmmXib/sandbox/Em0bQLzXhw7Z5qSkhelHCd-img-2_1772048272000_na1fn_bWlsaXRhcnlfYWNhZGVteQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTFlQdzdXWWcwZFRKMEczbnFtbVhpYi9zYW5kYm94L0VtMGJRTHpYaHc3WjVxU2toZWxIQ2QtaW1nLTJfMTc3MjA0ODI3MjAwMF9uYTFmbl9iV2xzYVhSaGNubGZZV05oWkdWdGVRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=a23ohK-VMF7ElwPMyVpCBfm4btQIcBRdIrL3Y1b8AZ8bmyezqu5L3FkY~oWwv7ggUK~PTa37P5gayJeW79V2SBxAHSWSQEkNbrMvbugHeYzFOExcssCSk1uodXgDKRHTbkht4H3zqAp26wuXfycOdB3gI4pnpqr7fhhKmy-OorQnGoO0ApbjoBfJqKn--pNR5KBLkz4Cz1NpwJfOpJ9iOS2PB4YC1HFtY54~1RB14p5cOCkqhdk2klXGbhit3pwh4NGG0SAmkyFvUctn9WxR5Ms3gTD1TkEbOKrOXYE3ch-J5qqHRdqjhQETXULPrX27CtS1csM~e5yAecQT4~mBBw__";
const CONGRESS_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/LYPw7WYg0dTJ0G3nqmmXib/sandbox/Em0bQLzXhw7Z5qSkhelHCd-img-3_1772048270000_na1fn_Y29uZ3Jlc3NfYmF0dGxl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTFlQdzdXWWcwZFRKMEczbnFtbVhpYi9zYW5kYm94L0VtMGJRTHpYaHc3WjVxU2toZWxIQ2QtaW1nLTNfMTc3MjA0ODI3MDAwMF9uYTFmbl9ZMjl1WjNKbGMzTmZZbUYwZEd4bC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HocbF6peloEdmgk-hQ5kCEPOPhfMVBu4jtVhrryuzRjvIFExWETj2i5kfjgtKOAAdCQ2mfD7xKDs2~QE31Kgl5Iw1FTI5fmenUkk2myPmdAMSp5APExCUwviYYSbDRRTwG3~gK4UXla6aI8lkdOk3~12Wm4rCbNd6K8fdISnaqKmxLbSKEjFS2tg3~cTnSXbIHC6mmGUL2jjHr6Vk5He-MpFWwAlAilJqhFnyHge8i28pKshuhJYCnI5CaWEkg2n4FM1XsiV5KTiGAkDyJBSvaKUGR7CmmSjDk8o3fiNDd7qqOGiDdMKo3Dy6pmfaZ~QlGkgaFYt~lV1DDhASLOLJg__";
const CROWD_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/LYPw7WYg0dTJ0G3nqmmXib/sandbox/Em0bQLzXhw7Z5qSkhelHCd-img-4_1772048262000_na1fn_Y3Jvd2RfcmFsbHk.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTFlQdzdXWWcwZFRKMEczbnFtbVhpYi9zYW5kYm94L0VtMGJRTHpYaHc3WjVxU2toZWxIQ2QtaW1nLTRfMTc3MjA0ODI2MjAwMF9uYTFmbl9ZM0p2ZDJSZmNtRnNiSGsuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=q6Hu6BDWZpl5MclKtfBLyvOSjMs-~0xfBsE973ZYIyvZXcDj24okKCTqqmJ68UNHwjyyX2uHmE~689sVD0zThwHKojZpTo79U2KNsTIiXnBMUCk6CdFWxbRIFLRbZGv-FMBATEKyqzJsWAwQhWFg9DwNKAPyzNMklg2NXe4TfW9lWfot7FsEwTbfITEnlOlm2lBB7eIsWOqCLPVbiROCwuIpt6ipF0X4OjD1Gc3v5w6CGFsuv656CIKmVRtDJjqd~hPlwdR2NcZdyCwhp-XE1baRryd7nLaDK1bEa07Qh-KpKr-UTt7DfZJ-j87KlwVJJNCztPy7AyIuqclFl5fxqw__";

const chapters = [
  {
    id: "intro",
    number: "00",
    label: "Introdução",
    title: "Forjado nos Desafios, Destinado à Nação",
    icon: BookOpen,
    color: "from-[#1a2a4a] to-[#0d1a30]",
    accentColor: "#d4a017",
    content: `Introdução: O Forjar de um Líder
Parte 1: A Premissa da Jornada — O Despertar de uma Nação contra o Sistema

Grandes histórias não nascem no conforto da calmaria, mas no estalo do trovão e no calor das provações mais severas. A história das nações, assim como a dos homens que as moldam, é escrita por capítulos de resistência. No Brasil, por décadas, o roteiro parecia imutável: um sistema político encastelado, alimentado por acordos de gabinetes sombrios, onde a voz do povo era apenas um eco distante, abafado pela retórica de uma elite que se julgava dona do destino de milhões.

Imagine um gigante adormecido. Não por vontade própria, mas por um feitiço de apatia e desinformação. As cores da nossa bandeira, o verde das nossas matas e o amarelo das nossas riquezas, estavam sendo desbotados por uma ideologia que tentava substituir o amor à Pátria pela dependência do Estado, e a fé no Criador pelo relativismo moral. O sistema não era apenas uma estrutura política; era uma muralha invisível que separava o brasileiro comum de sua própria identidade.

É nesse cenário de sombras que surge a figura do "homem comum". Mas o que define um homem comum em tempos de crise? É aquele que, apesar das imperfeições humanas, carrega consigo o DNA da resiliência brasileira. É aquele que não fala o dialeto polido e hipócrita das capitais burocráticas, mas o vernáculo direto das ruas, dos quartéis e das mesas de jantar das famílias trabalhadoras.

O contraste era absoluto. De um lado, o "Mecanismo" — uma engrenagem bilionária composta por partidos hegemônicos, uma mídia que detinha o monopólio da narrativa e intelectuais que desprezavam os valores tradicionais do interior do país. Do outro, um capitão reformado, um parlamentar que muitos tentavam ridicularizar como uma "voz isolada no deserto". O que o sistema não percebeu, em sua arrogância tecnocrática, é que o deserto estava florescendo.

O despertar não aconteceu nos palácios, mas no coração do pai que temia pela doutrinação de seus filhos; na mente do empreendedor sufocado por impostos; e na alma do patriota que sentia vergonha de ver sua bandeira sendo queimada ou substituída por panos vermelhos. O sistema subestimou a força de um ideal que sobreviveu por gerações: Deus, Pátria, Família e Liberdade.

Esta biografia não é apenas o relato de uma carreira política; é a crônica de um choque de realidades. É a narrativa do momento em que a verdade nua e crua colidiu com a mentira institucionalizada. Prepare-se para mergulhar em uma jornada onde o improvável se tornou realidade. Veremos como um homem, forjado na disciplina militar e movido por uma convicção inabalável, decidiu que não aceitaria mais o papel de espectador da decadência de sua nação.

A jornada do herói brasileiro moderno começa aqui. Não com promessas vazias, mas com o sacrifício pessoal e a coragem de ser odiado pelo sistema para ser amado pelo povo. O sistema tentou silenciá-lo, o mundo tentou ignorá-lo, mas o rugido das ruas já havia começado. E quando o povo decide que é hora de retomar as rédeas da própria história, não há tranca, decreto ou censura que possa deter o vento da liberdade.`,
    image: HERO_IMAGE,
    quote: "A história dos grandes homens é forjada nos momentos de maior adversidade.",
    stats: []
  },
  {
    id: "cap1",
    number: "01",
    label: "Capítulo 1",
    title: "As Raízes e a Formação Militar",
    icon: Shield,
    color: "from-[#1a3a2a] to-[#0d2a1a]",
    accentColor: "#4caf50",
    content: `Capítulo 1: As Raízes e a Formação Militar
Parte 2: A Forja do Interior — O Alicerce de Valores em Glicério e Eldorado

Para compreender a magnitude da tempestade, é preciso primeiro conhecer a solidez da rocha que a enfrenta. O homem que viria a abalar as estruturas de um sistema corrompido não nasceu em berço de ouro, nem foi criado nos salões acarpetados e cínicos da elite política brasileira. Suas raízes estão cravadas profundamente na terra batida do interior de São Paulo. Foi longe dos holofotes, na simplicidade da vida no campo, que o alicerce de Jair Messias Bolsonaro foi moldado.

Nascido em 21 de março de 1955, na pequena cidade de Glicério, no noroeste paulista, Jair chegou a um Brasil que ainda valorizava a palavra empenhada, o respeito aos mais velhos e o suor do trabalho honesto. Naquela época, o interior do país era um mundo intocado pelas agendas de desconstrução moral que hoje tentam invadir nossos lares. Havia uma ordem natural e respeitada: a fé em Deus guiava os propósitos, a pátria era motivo de orgulho orgânico, e a família era a fortaleza inexpugnável, o núcleo onde se formava o caráter de um cidadão.

A busca por uma vida melhor e por oportunidades levou a família Bolsonaro a migrar. Após passagens por outras pequenas cidades, fixaram raízes no Vale do Ribeira, mais precisamente em Eldorado Paulista. O Vale do Ribeira, com sua densa Mata Atlântica e seus rios imponentes, não era um lugar para os fracos. Era uma região que exigia resiliência, trabalho duro e união. Foi ali, em meio à grandeza rude da natureza, que o jovem Jair começou a entender as verdades mais profundas da vida.

O espelho de seu caráter refletia a imagem de seus pais. Seu Percy Geraldo Bolsonaro, um homem de feições firmes e moral inabalável, trabalhava como dentista prático. Seu Percy não tinha os diplomas da alta sociedade, mas possuía algo infinitamente superior: a dignidade de quem ganhava o pão com o suor do próprio rosto, percorrendo estradas de terra para aliviar a dor das pessoas mais humildes da região. Com o pai, Jair aprendeu que a autoridade não se impõe pelo grito, mas pelo exemplo. Aprendeu o valor do dever cumprido e a ojeriza à desonestidade. A corrupção, que ele viria a combater ferrenhamente décadas depois, era uma abominação inconcebível sob o teto de Seu Percy.

Se o pai representava a lei e a disciplina, Dona Olinda Bonturi Bolsonaro era o coração e a fé da casa. Uma matriarca à moda antiga, forte, amorosa e devota. Dona Olinda ensinou aos filhos o poder da oração e a importância da retidão perante Deus. Em um lar com muitos filhos e recursos contados, não havia espaço para o desperdício, para a preguiça ou para a vitimização — sentimentos que a esquerda caviar das grandes capitais tanto tenta incutir nas gerações atuais. Na casa dos Bolsonaro, a dificuldade era apenas um obstáculo a ser superado com trabalho e fé, jamais uma desculpa para o fracasso.

A infância de Jair em Eldorado foi a de um autêntico menino do interior. Conhecido pelos amigos como "Palmito" — devido à pele clara e à estatura esguia —, ele corria descalço pelas ruas de paralelepípedo, nadava nas águas barrentas do Rio Ribeira de Iguape, pescava e explorava a mata. Era uma liberdade verdadeira, pura, mas que vinha acompanhada de uma responsabilidade inegociável. As tarefas domésticas tinham de ser feitas, as lições da escola não podiam ser negligenciadas e o horário de voltar para casa, ditado pelo sol e pela voz de Dona Olinda, era lei.

Esse ambiente, muitas vezes taxado de "atrasado" pelos intelectuais de gabinete que desprezam o povo brasileiro, é, na verdade, a mais perfeita escola de cidadania. O interior de São Paulo vacinou Jair Messias Bolsonaro contra as ilusões do mundo moderno. Quando se cresce entendendo que o leite vem do trabalho na ordenha e que a colheita depende do suor e do clima, não se cai nas mentiras de que o Estado é um provedor mágico de riquezas.

Os valores forjados em Glicério e Eldorado — Deus, Pátria, Família e Liberdade — não foram slogans políticos inventados por marqueteiros em uma campanha eleitoral de 2018. Eles foram o pão diário de um menino caipira. Foram as lições aprendidas na mesa de jantar, nas broncas bem-intencionadas do pai e nas orações silenciosas da mãe.

A elite política de Brasília, criada em uma redoma de privilégios e favores, jamais conseguiu entender como esse homem simples, de linguajar direto e sem papas na língua, conseguiu cativar milhões. O erro deles foi esquecer que o verdadeiro Brasil não está nos despachos acarpetados dos ministérios, mas espalhado pelas milhares de "Eldorados" deste país. Jair Bolsonaro manteve a essência do menino do Vale do Ribeira: autêntico, patriota, leal aos seus e implacável com os desonestos. E seria essa mesma bússola moral, calibrada na infância, que o guiaria para a sua próxima grande provação: o chamado para servir à Pátria vestindo o verde da farda.`,
    image: MILITARY_IMAGE,
    quote: "O Exército não foi apenas uma profissão; foi minha grande escola de vida.",
    stats: [
      { label: "Ano de entrada na AMAN", value: "1973" },
      { label: "Ano de formatura", value: "1977" },
      { label: "Posto final", value: "Capitão" },
      { label: "Anos de serviço", value: "15 anos" }
    ]
  },
  {
    id: "cap2",
    number: "02",
    label: "Capítulo 2",
    title: "A Entrada na Vida Pública",
    icon: Flag,
    color: "from-[#1a2a4a] to-[#0d1a30]",
    accentColor: "#d4a017",
    content: `A juventude é, por excelência, a encruzilhada da vida. É o momento exato em que o menino deixa para trás as brincadeiras de infância e se depara com o peso das próprias escolhas. Para a grande maioria, esse é um período marcado pela busca do conforto, pela rebeldia vazia ou pelo simples desejo de se encaixar nos padrões ditados pela sociedade. Mas a história nos ensina que os homens fadados a grandes missões não buscam o caminho mais fácil; eles são atraídos magneticamente pela bússola do dever. E, para o jovem Jair Messias Bolsonaro, o norte dessa bússola apontava diretamente para o amor incondicional à Pátria.

No início da década de 1970, o Brasil vivia anos decisivos. Enquanto a elite intelectual das grandes universidades do eixo Rio-São Paulo, inebriada por ideologias fracassadas importadas de ditaduras sanguinárias, flertava com a subversão e endeusava grupos terroristas, o Brasil profundo seguia trabalhando, alheio à loucura revolucionária. Foi nesse contexto que a História, com "H" maiúsculo, bateu à porta da pequena Eldorado.

Em 1970, o Vale do Ribeira tornou-se o palco de uma das mais intensas caçadas militares da história do país. O terrorista Carlos Lamarca, desertor e líder de um grupo guerrilheiro de extrema-esquerda que pretendia instaurar uma ditadura comunista no Brasil, havia se escondido nas densas matas da região. Para proteger a população local e neutralizar a ameaça, o Exército Brasileiro montou uma vasta operação na área. O pacato município de Eldorado viu suas ruas de terra serem tomadas por jipes, caminhões e homens fardados.

Para muitos, aquilo era apenas um grande evento atípico. Mas para o jovem Jair, então com seus 15 anos, foi uma epifania. Ele observava aqueles soldados com um misto de admiração e fascínio. Ele via neles a personificação da ordem, da bravura e da defesa incansável da nação contra aqueles que queriam destruí-la. Enquanto a esquerda caviar, do conforto de seus apartamentos burgueses, escrevia manifestos em defesa de quem sequestrava e assassinava inocentes, Bolsonaro via de perto a realidade: jovens militares, muitos da sua idade ou pouco mais velhos, embrenhando-se na mata fechada, arriscando as próprias vidas para garantir que o Brasil continuasse sendo um país livre do jugo comunista.

Os soldados costumavam acampar perto da praça da cidade, e o jovem Jair, com a curiosidade e a vivacidade típicas de sua idade, fez amizade com a tropa. Ele servia como guia na região, indicando caminhos e trilhas, e, em troca, absorvia cada palavra, cada gesto de disciplina e cada demonstração de camaradagem daqueles homens. O verde-oliva não era mais apenas uma cor de tecido; passou a representar, aos olhos daquele menino, o manto sagrado dos verdadeiros heróis nacionais. Foi ali, no calor daquela operação, que a semente da vocação germinou de forma definitiva. Ele não queria apenas viver no Brasil; ele queria ser o escudo do Brasil.

A decisão estava tomada. Ele seria militar. No entanto, o sistema militar não aceita apenas a vontade; ele exige a provação. A carreira das armas não é um refúgio para aventureiros, mas um sacerdócio para os obstinados. Para vestir a farda, Jair precisaria superar um dos exames mais rigorosos do país: o concurso para a Escola Preparatória de Cadetes do Exército (EsPCEx), localizada em Campinas, São Paulo.

Começava ali a primeira grande batalha de sua jornada heroica, travada não contra inimigos armados, mas contra as próprias limitações. A educação nas escolas públicas do interior era digna e formadora de caráter, mas muitas vezes não oferecia o preparo técnico necessário para competir com os filhos das elites que frequentavam os melhores colégios preparatórios das capitais. Jair sabia que estava em desvantagem no papel, mas seu espírito de luta era imensurável.

O que se viu a partir daquele momento foi a aplicação prática dos valores herdados de Seu Percy e Dona Olinda: disciplina férrea, abnegação e trabalho duro. As madrugadas em Eldorado tornaram-se o cenário de suas vitórias silenciosas. Enquanto a cidade dormia, uma lâmpada solitária iluminava a mesa onde o jovem mergulhava nos livros de matemática, física, história e geografia. As horas de lazer foram substituídas por corridas extenuantes para forjar o condicionamento físico que a carreira exigiria. A dor muscular e o cansaço mental eram diários, mas cada gota de suor derramada sobre as apostilas era um passo a mais em direção ao seu destino.

Ele sabia que escolher o Exército não era escolher o caminho da riqueza financeira. A vida militar no Brasil, historicamente, é sinônimo de salários modestos, transferências constantes, distanciamento da família e sacrifícios pessoais imensos. Mas para homens forjados na têmpera do patriotismo, o contracheque nunca foi a motivação principal. O sentimento de pertencer a algo maior do que si mesmo, de ser um guardião silencioso da ordem e das instituições, era uma recompensa que o dinheiro não poderia comprar.

Quando finalmente a carta de aprovação chegou, não foi apenas uma vitória pessoal; foi o triunfo da resiliência de um jovem do interior sobre as estatísticas do sistema. O dia da partida de Eldorado foi marcado por emoções contidas e corações apertados. As lágrimas de orgulho de Dona Olinda, o abraço firme e calado de Seu Percy, o último olhar para as ruas de paralelepípedo. O menino "Palmito" estava deixando o ninho, carregando em sua bagagem não apenas roupas, mas uma inabalável estrutura de valores morais.

A viagem rumo a Campinas, e posteriormente a Resende, não era apenas um deslocamento geográfico. Era a travessia do limiar, o fim da vida civil e o início de uma imersão total na caserna. O homem comum estava prestes a ser testado no fogo da mais rigorosa forja militar do continente. Ele estava indo ao encontro do seu destino, pronto para jurar, com a própria vida, defender a Pátria. E o Brasil, ainda sem saber, acabava de ganhar um de seus mais devotos defensores.`,
    image: CONGRESS_IMAGE,
    quote: "Fui eleito sete vezes porque nunca traí meus eleitores. Isso é o que me diferencia.",
    stats: [
      { label: "Mandatos como Deputado", value: "7 vezes" },
      { label: "Anos no Congresso", value: "28 anos" },
      { label: "Eleito Vereador", value: "1988" },
      { label: "Primeiro mandato federal", value: "1990" }
    ]
  },
  {
    id: "cap3",
    number: "03",
    label: "Capítulo 3",
    title: "A Campanha Histórica de 2018",
    icon: Star,
    color: "from-[#2a1a1a] to-[#1a0d0d]",
    accentColor: "#e53935",
    content: `Parte 4: A Forja de Aço — A Academia Militar das Agulhas Negras e o Sangue Verde-Oliva

Há lugares que não apenas abrigam homens, mas os transformam. A Academia Militar das Agulhas Negras (AMAN), fincada na cidade de Resende, no estado do Rio de Janeiro, é um desses templos sagrados. Sob a sombra imponente do Pico das Agulhas Negras, uma montanha de rocha dura e clima inclemente que aponta para os céus como uma lança, jovens de todos os cantos do país chegam para deixar para trás suas fraquezas e renascerem como líderes. Foi cruzando aqueles portões de ferro que Jair Messias Bolsonaro encontrou o seu verdadeiro elemento: a forja implacável do Exército Brasileiro.

Logo na entrada da Academia, uma frase esculpida em pedra saúda e adverte os recém-chegados: "Cadetes, ides comandar, aprendei a obedecer". Para o mundo civil contemporâneo, dominado por vitimismos e pela aversão a qualquer tipo de hierarquia, essa máxima soaria como uma ofensa. Para o jovem Jair, habituado à disciplina de Seu Percy, soou como o chamado para um propósito maior. O sistema não compreende a obediência militar porque a confunde com submissão; mas, na verdade, ela é o mais puro exercício de humildade e de controle sobre o próprio ego. Só quem sabe ser liderado, quem sabe dobrar a própria vontade em prol de um objetivo comum, tem a autoridade moral para guiar outros homens na tormenta.

A rotina na AMAN não foi desenhada para ser agradável. Ela foi milimetricamente calculada para quebrar os fracos e temperar os fortes. A alvorada rasgava o silêncio da madrugada muito antes do sol pensar em nascer. O frio cortante do Vale do Paraíba castigava os ossos enquanto os cadetes formavam no pátio, fardados, imersos em uma disciplina silenciosa. As marchas intermináveis carregando dezenas de quilos de equipamento, a lama que se misturava ao suor, as privações de sono e o rigor acadêmico formavam o cadinho onde o caráter de Bolsonaro era purificado.

Nesse ambiente de extrema exigência física e mental, Jair não apenas sobreviveu; ele se destacou. Seu vigor atlético impressionava tanto superiores quanto companheiros, rendendo-lhe o apelido de "Cavalão". Enquanto muitos fraquejavam diante das pistas de corda ou das longas corridas de resistência, ele puxava a tropa, demonstrando uma vitalidade inesgotável. Ele participava de competições de pentatlo militar, exigindo do próprio corpo o máximo de precisão, força e velocidade. Essa resiliência física não era apenas um troféu esportivo; era a manifestação visível de uma mente que se recusava a desistir. Uma mente que, décadas mais tarde, suportaria pressões muito mais letais do que o cansaço muscular.

Na hora de escolher sua arma, o cadete Bolsonaro optou pela Artilharia. A arma dos tiros precisos, dos cálculos matemáticos balísticos, do impacto estrondoso que prepara o terreno para o avanço da infantaria. A Artilharia exige visão de longo alcance, foco absoluto e a capacidade de atingir alvos que a maioria sequer consegue enxergar. Uma metáfora perfeita para o papel que ele desempenharia na política nacional anos depois: o de um homem capaz de lançar verdades explosivas sobre as trincheiras de um sistema corrupto, abrindo caminho para o avanço do povo.

Mas a jornada de provações não terminou com a formatura na AMAN. O espírito inquieto e combativo de Bolsonaro exigia mais. Ele queria o limite. E o limite, no Exército Brasileiro, tem um endereço: a Brigada de Infantaria Paraquedista, no Rio de Janeiro. Voluntariou-se para um dos cursos mais extenuantes das Forças Armadas. Ser paraquedista é abraçar o risco extremo. É atirar-se no vazio, confiando na própria técnica, no equipamento preparado meticulosamente e, acima de tudo, em Deus. O vento no rosto, a queda livre, o solavanco da abertura do velame e a aterrissagem em território hostil. Ele conquistou o cobiçado "brevê" no peito e o "coturno marrom", símbolos imortais de coragem. O sistema sempre temeu Bolsonaro porque não compreende a psicologia de um homem treinado para saltar no escuro e lutar rodeado por todos os lados.

Foi exatamente nas fileiras da Brigada Paraquedista que Bolsonaro absorveu em sua alma algo que transcenderia a caserna e ganharia o país. O grito de guerra daquela tropa de elite encapsulava tudo o que ele acreditava, uma frase curta, poderosa e inegociável: "Brasil acima de tudo!". Ali nascia o ethos que não seria apenas um slogan de campanha em 2018, mas a essência do seu pacto com a nação.

Os anos no Exército forjaram em Jair Bolsonaro um código de honra intransigente. A lealdade aos seus companheiros, a camaradagem (o famoso "espírito de corpo"), o nojo visceral pela mentira e pela traição. Ele aprendeu que, no campo de batalha, a covardia de um homem pode custar a vida de todos. Ele viu o Brasil de norte a sul, conheceu as fronteiras, conviveu com soldados oriundos das mais diversas camadas sociais, e consolidou sua visão de que o Brasil é uma nação grandiosa, mas que frequentemente é sabotada por lideranças mesquinhas.

Quando o jovem tenente, e depois capitão, erguia sua espada para prestar continência à Bandeira Nacional, ele não o fazia como uma mera formalidade burocrática. Ele estava reafirmando o juramento solene de defender a Pátria com o sacrifício da própria vida. O sistema político tradicional, acostumado a comprar consciências e a dobrar espinhas dorsais com malas de dinheiro e cargos comissionados, nunca entendeu com quem estava lidando. Eles não sabiam que não se pode chantagear um homem que já entregou sua vida a um ideal. A têmpera militar estava pronta. A faca estava afiada. O lobo estava prestes a sair da floresta e entrar na arena pública.`,
    image: CROWD_IMAGE,
    quote: "Deus me poupou a vida para que eu pudesse cumprir uma missão maior pelo Brasil.",
    stats: [
      { label: "Votos no 1º Turno", value: "49,2 mi" },
      { label: "Votos no 2º Turno", value: "57,8 mi" },
      { label: "Percentual de votos", value: "55,13%" },
      { label: "Data do atentado", value: "06/09/2018" }
    ]
  },
  {
    id: "cap4",
    number: "04",
    label: "Capítulo 4",
    title: "A Presidência e as Conquistas",
    icon: Award,
    color: "from-[#1a3a2a] to-[#0d2a1a]",
    accentColor: "#4caf50",
    content: `Um Governo para o Brasil: Infraestrutura, Liberdade e Valores

Ao assumir a Presidência da República em 1º de janeiro de 2019, Jair Bolsonaro deu início a um governo que rompeu com décadas de políticas que haviam levado o Brasil à estagnação econômica e à crise moral. A missão era clara: destravar o país, resgatar a credibilidade e governar para todos os brasileiros.

A Agenda Econômica: Liberdade e Desburocratização

Um dos pilares do governo Bolsonaro foi a agenda econômica liberal. Após décadas de intervenção estatal, o novo governo acreditava que era hora de devolver a liberdade ao mercado, de desburocratizar a economia, de permitir que os empreendedores criassem riqueza.

A Lei da Liberdade Econômica foi um marco. Aprovada em 2019, a lei simplificou regulamentações, reduziu a burocracia e devolveu ao empreendedor a confiança para gerar empregos e riqueza. Pequenas empresas que haviam sido sufocadas pela burocracia agora tinham espaço para respirar e crescer.

As Privatizações foram outro elemento importante. O governo Bolsonaro privatizou diversas empresas estatais, gerando recursos para os cofres públicos. Entre 2019 e 2022, foram realizadas privatizações que renderam R$ 304,2 bilhões aos cofres públicos.

Infraestrutura: Conectando o Brasil

Um dos maiores legados do governo Bolsonaro foi na área de infraestrutura. Após décadas de negligência, o governo se comprometeu a finalizar obras paradas e a modernizar a infraestrutura brasileira.

Entre 2019 e 2022, mais de 362 obras de infraestrutura foram concluídas. Isso incluía rodovias, ferrovias, portos e aeroportos. Esses investimentos tinham um impacto profundo. Conectavam o Brasil. Permitiam que produtos chegassem aos mercados mais rapidamente. Reduziam custos. Criavam empregos.

Segurança Pública: Combate à Criminalidade

A segurança pública havia sido um tema central na campanha de Bolsonaro. Como ex-militar, ele acreditava que o Estado tinha o dever de proteger seus cidadãos, que a polícia precisava de apoio e recursos, que a criminalidade era uma ameaça que precisava ser enfrentada com firmeza.

O governo Bolsonaro intensificou as operações contra o crime organizado, especialmente contra o tráfico de drogas. Foram realizadas operações de grande escala que resultaram em apreensões recordes de drogas e na prisão de líderes de organizações criminosas.

Defesa das Forças Armadas

Como ex-militar, Bolsonaro nunca deixou de defender as Forças Armadas. Seu governo investiu em modernização, em equipamento, em reconhecimento das instituições militares.

O orçamento de defesa foi aumentado, permitindo investimentos em modernização de equipamento, em pesquisa e desenvolvimento, em treinamento de pessoal.

Proteção da Família e Valores Tradicionais

Um dos aspectos mais controversos do governo Bolsonaro foi sua defesa intransigente de valores tradicionais. O governo se posicionou como defensor da família tradicional, contra o que considerava ser a "ideologia de gênero".

O governo combateu o que considerava ser a "ideologia de gênero" nas escolas. Apoiou o "Escola sem Partido", um movimento que buscava remover o que considerava ser indoutrinação política das salas de aula.

Liberdade de Expressão e Soberania Nacional

Um aspecto fundamental do governo Bolsonaro foi sua defesa da liberdade de expressão e da soberania nacional.

O governo resistiu ao que considerava ser censura de redes sociais e da mídia tradicional. Defendeu o direito de cidadãos e políticos expressarem suas opiniões, mesmo que fossas controversas.

O governo reafirmou a importância dos símbolos nacionais, como a bandeira, o hino e o brasão. Isso refletia uma convicção de que o Brasil precisava recuperar o orgulho de ser brasileiro.`,
    image: MILITARY_IMAGE,
    quote: "Trabalhamos para um Brasil livre, próspero e soberano, com Deus acima de todos.",
    stats: [
      { label: "Obras concluídas", value: "+362" },
      { label: "Investimento em infra", value: "R$ 20 bi" },
      { label: "Privatizações", value: "R$ 304 bi" },
      { label: "Anos de mandato", value: "4 anos" }
    ]
  },
  {
    id: "conclusao",
    number: "05",
    label: "Conclusão",
    title: "O Legado é a Semente",
    icon: Heart,
    color: "from-[#1a2a4a] to-[#0d1a30]",
    accentColor: "#d4a017",
    content: `Resistência, Missão e o Futuro da Liberdade

Chegamos ao fim desta jornada, mas não ao fim da história. A trajetória de Jair Bolsonaro, como vimos, é a prova de que um homem pode, sim, mudar o destino de uma nação.

O cenário atual se apresenta adverso. O leitor, que vivenciou cada passo desta saga, reconhece no presente um tempo de desafios, onde a resiliência é testada a cada dia. A firmeza do ex-presidente diante do que sua vasta base de apoiadores considera uma série de injustiças e perseguições implacáveis serve como um poderoso catalisador. Esse sentimento de indignação compartilhada não gera desânimo, mas forja um senso de união e propósito ainda mais forte. A resistência se tornou a palavra de ordem.

É crucial, contudo, fazer a transição da resistência para a esperança. O maior legado de Jair Bolsonaro não se resume a obras, números ou mesmo ao seu mandato. Seu maior feito foi o despertar definitivo do conservadorismo no Brasil.

Durante décadas, o conservadorismo havia sido silenciado. Havia sido ridicularizado. Havia sido considerado uma relíquia do passado. Bolsonaro deu voz a esse conservadorismo. Mostrou que havia milhões de brasileiros que compartilhavam desses valores. Mostrou que o conservadorismo não era uma relíquia do passado, mas uma força viva, dinâmica, capaz de mobilizar uma nação.

Os Princípios que Permanecem

Os princípios de "Deus, Pátria, Família e Liberdade" não são relíquias do passado. São a base sólida sobre a qual um futuro próspero deve ser construído.

Deus: A fé não é uma fraqueza. É uma força. É a convicção de que há algo maior do que nós mesmos, que há um propósito para nossas vidas, que há uma moral que transcende as convenções humanas.

Pátria: O amor à Pátria não é nacionalismo cego. É o reconhecimento de que temos uma responsabilidade com aqueles que vieram antes de nós e com aqueles que virão depois.

Família: A família não é uma instituição obsoleta. É a célula base da sociedade, o lugar onde aprendemos amor, sacrifício, responsabilidade.

Liberdade: A liberdade não é apenas a ausência de coerção. É o direito de viver de acordo com nossas convicções, de fazer nossas próprias escolhas, de perseguir nossos próprios sonhos.

A Semente Plantada

A semente foi plantada. O terreno, antes árido, foi arado e fertilizado pela coragem de um líder que não temeu o sacrifício. Agora, a missão é passada adiante. O bastão está nas mãos de cada cidadão que compartilha desses ideais.

Não é mais apenas sobre Jair Bolsonaro. É sobre um movimento. É sobre uma geração de brasileiros que acordou, que compreendeu que tinha o poder de mudar seu país, que decidiu agir.

A Chama Acesa

A chama foi acesa. Pode haver tentativas de apagá-la. Mas não será apagada. Porque é alimentada pela convicção de milhões de brasileiros de que há uma forma melhor de viver, de que há valores que são verdadeiros, de que há um futuro que vale a pena lutar.

A história de Jair Bolsonaro nos ensina uma lição fundamental: a luta pela liberdade é constante. Não há um ponto final. Não há um momento em que podemos descansar e assumir que a vitória é permanente.

O futuro do Brasil não depende de um único homem. Depende da resiliência, da fé e do compromisso de seu povo. Depende de você, leitor, que está lendo estas palavras neste momento.

A Missão Continua

A saga de Jair Bolsonaro não termina aqui. Porque a verdadeira saga não é sobre um homem. É sobre um povo. É sobre uma nação. É sobre a luta eterna entre a liberdade e a opressão, entre a verdade e a mentira, entre o bem e o mal.

Bolsonaro foi o catalisador. Mas você é o continuador. A missão continua nas suas mãos. A chama que ele acendeu agora queima em seu coração. O bastão que ele passou agora está em suas mãos.

Deus, Pátria, Família e Liberdade. Que essas palavras ecoem nos corações de todos os brasileiros. Que elas guiem nossas ações. Que elas inspirem nossas lutas. Que elas nos unam em torno de um propósito comum: construir um Brasil melhor, mais justo, mais livre.

A história do Brasil não foi escrita. Ainda está sendo escrita. E você é um dos autores.`,
    image: CROWD_IMAGE,
    quote: "A semente foi plantada. A chama foi acesa. A missão continua nas mãos do povo.",
    stats: []
  }
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span ref={ref}>{count.toLocaleString('pt-BR')}{suffix}</span>;
}

export default function Home() {
  const [activeChapter, setActiveChapter] = useState("intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentChapter = chapters.find(c => c.id === activeChapter) || chapters[0];
  const currentIndex = chapters.findIndex(c => c.id === activeChapter);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Do Interior ao Planalto — A Saga de um Patriota',
        text: 'A história completa de Jair Messias Bolsonaro: das raízes no interior de São Paulo ao cargo mais alto da nação.',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-[#2d6a4f] to-[#d4a017] progress-bar"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 left-0 right-0 z-40 bg-[#0d1a30]/95 backdrop-blur-sm border-b border-[#d4a017]/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#d4a017] rounded-sm flex items-center justify-center">
              <span className="font-display text-[#0d1a30] text-sm font-bold">BR</span>
            </div>
            <div>
              <p className="font-display text-white text-sm tracking-widest">DO INTERIOR AO PLANALTO</p>
              <p className="text-[#d4a017] text-xs font-heading font-medium">A Saga de um Patriota</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapter(chapter.id)}
                className={`px-3 py-1.5 text-xs font-heading font-semibold tracking-wide rounded transition-all duration-200 ${
                  activeChapter === chapter.id
                    ? 'bg-[#d4a017] text-[#0d1a30]'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {chapter.number}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-heading font-semibold text-[#d4a017] border border-[#d4a017]/40 rounded hover:bg-[#d4a017]/10 transition-all"
            >
              <Share2 size={12} />
              Compartilhar
            </button>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d1a30] border-t border-[#d4a017]/20 px-4 py-3">
            <div className="grid grid-cols-3 gap-2">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => { setActiveChapter(chapter.id); setMobileMenuOpen(false); }}
                  className={`p-2 text-xs font-heading font-semibold rounded text-left transition-all ${
                    activeChapter === chapter.id
                      ? 'bg-[#d4a017] text-[#0d1a30]'
                      : 'text-white/70 hover:bg-white/10'
                  }`}
                >
                  <span className="block text-[10px] opacity-60">{chapter.number}</span>
                  <span className="block leading-tight">{chapter.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30]/70 via-[#0d1a30]/50 to-[#0d1a30]/90" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 bg-[#d4a017]/20 border border-[#d4a017]/40 rounded-full px-4 py-1.5 mb-6">
            <Flag size={12} className="text-[#d4a017]" />
            <span className="text-[#d4a017] text-xs font-heading font-semibold tracking-widest uppercase">
              Deus · Pátria · Família · Liberdade
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white text-shadow-dark leading-none mb-4">
            DO INTERIOR
          </h1>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#d4a017] text-shadow-gold leading-none mb-6">
            AO PLANALTO
          </h1>

          <p className="font-body text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4 text-shadow-dark">
            A história completa de <strong className="text-[#d4a017]">Jair Messias Bolsonaro</strong>: das raízes humildes no interior paulista ao cargo mais alto da República.
          </p>

          <p className="font-heading text-white/60 text-sm tracking-widest uppercase mb-10">
            Uma Narrativa de Fé, Disciplina e Amor à Pátria
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContent}
              className="flex items-center gap-2 bg-[#d4a017] hover:bg-[#b8860b] text-[#0d1a30] font-heading font-bold px-8 py-3 rounded transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <BookOpen size={16} />
              Começar a Leitura
            </button>
            <button
              onClick={() => setActiveChapter("cap3")}
              className="flex items-center gap-2 border border-white/40 hover:border-white text-white font-heading font-semibold px-8 py-3 rounded transition-all duration-200 hover:bg-white/10"
            >
              O Atentado e o Milagre
              <ArrowRight size={16} />
            </button>
          </div>

          <button
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white animate-bounce transition-colors"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="bg-[#0d1a30] py-8 border-y border-[#d4a017]/20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Anos de Serviço Público", value: 43, suffix: "+" },
            { label: "Mandatos como Deputado", value: 7, suffix: "" },
            { label: "Votos na Eleição 2018", value: 57, suffix: " mi" },
            { label: "Obras Concluídas", value: 362, suffix: "+" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl text-[#d4a017]">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-heading text-white/60 text-xs tracking-wide mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Chapter Navigation */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <h3 className="font-heading font-bold text-[#0d1a30] text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                <div className="w-4 h-0.5 bg-[#d4a017]" />
                Índice do E-book
              </h3>
              <div className="space-y-2">
                {chapters.map((chapter, idx) => {
                  const Icon = chapter.icon;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => setActiveChapter(chapter.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
                        activeChapter === chapter.id
                          ? 'bg-[#0d1a30] text-white shadow-lg'
                          : 'bg-white hover:bg-[#0d1a30]/5 text-[#0d1a30] border border-[#0d1a30]/10'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${
                          activeChapter === chapter.id ? 'bg-[#d4a017]' : 'bg-[#0d1a30]/10 group-hover:bg-[#d4a017]/20'
                        }`}>
                          <Icon size={14} className={activeChapter === chapter.id ? 'text-[#0d1a30]' : 'text-[#0d1a30]'} />
                        </div>
                        <div className="min-w-0">
                          <p className={`text-xs font-heading font-semibold tracking-widest ${
                            activeChapter === chapter.id ? 'text-[#d4a017]' : 'text-[#0d1a30]/50'
                          }`}>
                            {chapter.number} — {chapter.label}
                          </p>
                          <p className={`text-xs leading-tight mt-0.5 font-body ${
                            activeChapter === chapter.id ? 'text-white/90' : 'text-[#0d1a30]/70'
                          }`}>
                            {chapter.title.split(':')[0]}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 p-4 bg-[#0d1a30] rounded-lg">
                <p className="font-heading text-[#d4a017] text-xs font-semibold tracking-wide mb-2">Progresso de Leitura</p>
                <div className="w-full bg-white/20 rounded-full h-1.5 mb-2">
                  <div
                    className="bg-[#d4a017] h-1.5 rounded-full progress-bar"
                    style={{ width: `${((currentIndex + 1) / chapters.length) * 100}%` }}
                  />
                </div>
                <p className="text-white/60 text-xs font-heading">
                  {currentIndex + 1} de {chapters.length} seções
                </p>
              </div>
            </div>
          </aside>

          {/* Chapter Content */}
          <main className="flex-1 min-w-0">
            <div key={activeChapter} className="animate-fade-in">
              {/* Chapter Header */}
              <div className="relative rounded-xl overflow-hidden mb-8 shadow-2xl">
                <div
                  className="h-64 md:h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${currentChapter.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a30] via-[#0d1a30]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-display text-5xl md:text-7xl text-white/20 leading-none">{currentChapter.number}</span>
                    <div className="w-px h-10 bg-[#d4a017]/50" />
                    <span className="font-heading text-[#d4a017] text-xs font-semibold tracking-widest uppercase">{currentChapter.label}</span>
                  </div>
                  <h2 className="font-heading font-black text-white text-xl md:text-3xl leading-tight text-shadow-dark">
                    {currentChapter.title}
                  </h2>
                </div>
              </div>

              {/* Quote Block */}
              <blockquote className="border-l-4 border-[#d4a017] bg-[#0d1a30] text-white p-6 rounded-r-xl mb-8 shadow-lg">
                <p className="font-body italic text-base md:text-lg leading-relaxed text-white/90">
                  "{currentChapter.quote}"
                </p>
              </blockquote>

              {/* Stats Grid */}
              {currentChapter.stats.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {currentChapter.stats.map((stat, i) => (
                    <div key={i} className="bg-white border border-[#0d1a30]/10 rounded-lg p-4 text-center shadow-sm">
                      <p className="font-display text-2xl md:text-3xl text-[#0d1a30]">{stat.value}</p>
                      <p className="font-heading text-[#0d1a30]/60 text-xs mt-1 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Chapter Text */}
              <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm border border-[#0d1a30]/5">
                {currentChapter.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="font-body text-[#1a1a2e] text-base md:text-lg leading-relaxed mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 gap-4">
                <button
                  onClick={() => currentIndex > 0 && setActiveChapter(chapters[currentIndex - 1].id)}
                  disabled={currentIndex === 0}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all ${
                    currentIndex === 0
                      ? 'opacity-30 cursor-not-allowed bg-gray-100 text-gray-400'
                      : 'bg-[#0d1a30] text-white hover:bg-[#1a2a4a] hover:scale-105'
                  }`}
                >
                  ← Anterior
                </button>

                <span className="font-heading text-[#0d1a30]/40 text-xs tracking-wide">
                  {currentIndex + 1} / {chapters.length}
                </span>

                <button
                  onClick={() => currentIndex < chapters.length - 1 && setActiveChapter(chapters[currentIndex + 1].id)}
                  disabled={currentIndex === chapters.length - 1}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all ${
                    currentIndex === chapters.length - 1
                      ? 'opacity-30 cursor-not-allowed bg-gray-100 text-gray-400'
                      : 'bg-[#d4a017] text-[#0d1a30] hover:bg-[#b8860b] hover:scale-105'
                  }`}
                >
                  Próximo →
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* CTA Section */}
      <section
        className="relative py-20 overflow-hidden mt-8"
        style={{ backgroundImage: `url(${CROWD_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#0d1a30]/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">A MISSÃO CONTINUA</h2>
          <p className="font-body text-white/80 text-lg leading-relaxed mb-8">
            A semente foi plantada. A chama foi acesa. O futuro do Brasil e a defesa da liberdade dependem da resiliência do povo. Compartilhe esta história e mantenha a chama viva.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-[#d4a017] hover:bg-[#b8860b] text-[#0d1a30] font-heading font-bold px-8 py-3 rounded transition-all hover:scale-105 shadow-lg"
            >
              <Share2 size={16} />
              Compartilhar Esta Saga
            </button>
            <button
              onClick={() => { setActiveChapter("intro"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 border border-white/40 hover:border-white text-white font-heading font-semibold px-8 py-3 rounded transition-all hover:bg-white/10"
            >
              <BookOpen size={16} />
              Ler Desde o Início
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060d18] py-8 border-t border-[#d4a017]/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#d4a017] rounded-sm flex items-center justify-center">
              <span className="font-display text-[#0d1a30] text-sm font-bold">BR</span>
            </div>
            <p className="font-display text-white text-lg tracking-widest">DO INTERIOR AO PLANALTO</p>
          </div>
          <p className="font-body text-white/40 text-sm mb-2">A Saga de um Patriota — E-book Biográfico</p>
          <p className="font-heading text-[#d4a017]/60 text-xs tracking-widest">
            DEUS · PÁTRIA · FAMÍLIA · LIBERDADE
          </p>
        </div>
      </footer>
    </div>
  );
}
