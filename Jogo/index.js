'use strict';

/*
 * Estação Rastros Digitais
 * Para conectar os simuladores existentes, preencha instagramUrl e xUrl
 * de cada personagem abaixo com os endereços locais/reais do seu projeto.
 * Se ficarem vazios, os botões externos não serão exibidos.
 */
const perfis = [
  {
    id: 'caio', nome: 'Caio Moura', idade: 17, handleIg: '@caio.moura.vc', handleX: '@KyoNebula17', emoji: '🎮', tema: 'Jogos e rastros digitais',
    instagramUrl: '', xUrl: '',
    perguntas: [
      { categoria: 'Dados pessoais', pergunta: 'Qual é a idade de Caio e quando é seu aniversário?', opcoes: ['17 anos; 18 de setembro', '18 anos; 18 de setembro', '17 anos; 19 de setembro', '16 anos; 18 de outubro'], correta: 0, resposta: '17 anos; aniversário em 18/09/2009 (o ano é inferido).', evidencias: 'CAI-IG-01 e CAI-X-03', explicacao: 'A publicação de aniversário mostra 17 anos e a data; o post no X diz “Ontem fiz 17”. O ano de nascimento é inferido a partir da idade e da data.' },
      { categoria: 'Estudos', pergunta: 'Em qual instituição e série Caio estuda?', opcoes: ['Faculdade do Vale Claro, 2º período', 'Colégio Horizonte do Vale, 2º ano do ensino médio', 'Colégio Pátio das Oliveiras, 1º ano', 'Faculdade Horizonte Sul, 3º período'], correta: 1, resposta: 'Colégio Horizonte do Vale, 2º ano do ensino médio.', evidencias: 'CAI-IG-02', explicacao: 'O cartaz e os comentários da publicação identificam o colégio e o 2º ano.' },
      { categoria: 'Relações pessoais', pergunta: 'Quais relações familiares são indicadas pelas pistas?', opcoes: ['Lia é irmã e Davi é pai', 'Lia é mãe e Davi é primo', 'Lia é tia e Davi é irmão', 'Lia é mãe e Davi é colega'], correta: 1, resposta: 'Lia é mãe; Davi é primo.', evidencias: 'CAI-IG-01 e CAI-X-04', explicacao: 'Lia escreve “filho” e Davi se identifica como primo; a resposta no X reforça a relação de primos.' },
      { categoria: 'Círculo social', pergunta: 'Quem aparece ligado ao círculo social de Caio nas publicações?', opcoes: ['Bruno e Iara', 'Luna e Teo', 'Caetano e Mila', 'Clara e Aline'], correta: 0, resposta: 'Bruno e Iara.', evidencias: 'CAI-IG-01, CAI-IG-02 e CAI-X-04', explicacao: 'Os comentários e as publicações relacionam Bruno e Iara a Caio e ao contexto escolar/de jogos.' },
      { categoria: 'Informações cotidianas', pergunta: 'O que é Pipoca?', opcoes: ['Um cachorro', 'O nome de uma equipe', 'Um gato', 'Um local de jogos'], correta: 2, resposta: 'Pipoca é um gato.', evidencias: 'CAI-IG-03', explicacao: 'A imagem e a legenda da publicação mostram o animal e identificam seu nome.' },
      { categoria: 'Interesses', pergunta: 'Qual jogo Caio joga com a equipe Nebulosa 5?', opcoes: ['Marés de Papel', 'Orbital Clash', 'Vento 7', 'Quadra Aurora'], correta: 1, resposta: 'Orbital Clash.', evidencias: 'CAI-IG-02, CAI-IG-ST04 e CAI-X-01', explicacao: 'As publicações associam Caio à equipe Nebulosa 5 e mencionam Orbital Clash.' },
      { categoria: 'Rotina', pergunta: 'Quando Caio costuma jogar com a equipe?', opcoes: ['Segundas e sextas às 6h30', 'Quartas às 16h', 'Terças e quintas às 20h', 'Sábados às 14h'], correta: 2, resposta: 'Terças e quintas, às 20h.', evidencias: 'CAI-IG-ST02, CAI-IG-ST04 e CAI-X-02', explicacao: 'Stories e publicação no X corroboram os dois dias e o horário. É um padrão divulgado publicamente, não uma garantia de presença futura.' },
      { categoria: 'Locais', pergunta: 'Qual local Caio já visitou, segundo as pistas?', opcoes: ['Café Mapa', 'Pista do Vento', 'Arena Pixel Nascente', 'Casa de Cultura do Lago'], correta: 2, resposta: 'Arena Pixel Nascente.', evidencias: 'CAI-IG-ST01 e CAI-X-05', explicacao: 'As pistas indicam visita à Arena. Isso não prova que Caio more ali nem que vá retornar.' },
      { categoria: 'Locais', pergunta: 'Qual praça aparece associada a uma visita de Caio?', opcoes: ['Praça das Lanternas', 'Praça do Ipê Azul', 'Pátio da Figueira', 'Ginásio Horizonte'], correta: 1, resposta: 'Praça do Ipê Azul.', evidencias: 'CAI-IG-03 e CAI-IG-ST03', explicacao: 'A publicação e o story situam Caio na praça; não comprovam residência ou frequência habitual.' },
      { categoria: 'Associação de contas', pergunta: 'Qual evidência ajuda a relacionar @KyoNebula17 ao Instagram de Caio?', opcoes: ['Só o fato de ambos usarem Vila Cedro na bio', 'O avatar do capacete azul com estrela, a marca KYO e pistas da equipe', 'Um endereço residencial compartilhado', 'Uma senha publicada nas redes'], correta: 1, resposta: 'Avatar do capacete azul com estrela, marca KYO e pistas da equipe.', evidencias: 'CAI-IG-02 e CAI-X-01', explicacao: 'Vários elementos visuais e temáticos sustentam a associação entre as contas; isso é uma inferência forte, não uma prova de identidade civil.' }
    ]
  },
  {
    id: 'marina', nome: 'Marina Azevedo', idade: 15, handleIg: '@marina.azevedo.vc', handleX: '@MarihQuadra', emoji: '📷', tema: 'Fotografia, vôlei e rotina', instagramUrl: '', xUrl: '',
    perguntas: [
      { categoria: 'Dados pessoais', pergunta: 'Qual é a idade de Marina e quando é seu aniversário?', opcoes: ['15 anos; 14 de maio', '16 anos; 15 de maio', '15 anos; 15 de maio', '14 anos; 14 de junho'], correta: 0, resposta: '15 anos; aniversário em 14/05/2011.', evidencias: 'MAR-IG-01 e MAR-X-03', explicacao: 'O post de aniversário mostra 15 anos; no X, Marina escreve “Ontem fiz 15”. O ano de nascimento decorre da data e idade.' },
      { categoria: 'Estudos', pergunta: 'Onde Marina estuda e em qual série?', opcoes: ['Colégio Horizonte do Vale, 2º ano', 'Colégio Pátio das Oliveiras, 1º ano do ensino médio', 'Faculdade Horizonte Sul, 3º período', 'Escola Livre das Artes do Vale, 1º período'], correta: 1, resposta: 'Colégio Pátio das Oliveiras, 1º ano do ensino médio.', evidencias: 'MAR-IG-02 e MAR-X-05', explicacao: 'A camiseta, o cartaz da mostra e o repost da escola apontam para a instituição e a série.' },
      { categoria: 'Relações pessoais', pergunta: 'Quem são Bia e Sônia para Marina?', opcoes: ['Bia é amiga e Sônia é professora', 'Bia é irmã e Sônia é mãe', 'Bia é mãe e Sônia é irmã', 'As duas são colegas de equipe'], correta: 1, resposta: 'Bia é irmã; Sônia é mãe.', evidencias: 'MAR-IG-01 e MAR-X-04', explicacao: 'Os comentários usam explicitamente “irmã” e “filha”; a resposta no X reforça as relações familiares.' },
      { categoria: 'Círculo social', pergunta: 'Quais pessoas aparecem ligadas ao círculo social de Marina?', opcoes: ['Bruno e Iara', 'Nina e Pedro', 'Luna e Teo', 'Caetano e Mila'], correta: 2, resposta: 'Luna Prado e Teo Farias.', evidencias: 'MAR-IG-01 e MAR-IG-02', explicacao: 'Luna e Teo comentam as publicações e aparecem relacionados às atividades de Marina.' },
      { categoria: 'Informações cotidianas', pergunta: 'O que é Thor?', opcoes: ['Um gato', 'Um cachorro', 'O nome de um café', 'O nome do time'], correta: 1, resposta: 'Thor é um cachorro.', evidencias: 'MAR-IG-03', explicacao: 'A publicação mostra o cachorro e identifica Thor pela legenda e pela plaquinha.' },
      { categoria: 'Interesses', pergunta: 'Qual é o time favorito de Marina, segundo o X?', opcoes: ['Flamengo', 'Nebulosa 5', 'Marés de Papel', 'Nenhum time é indicado'], correta: 0, resposta: 'Flamengo.', evidencias: 'MAR-X-01', explicacao: 'A publicação menciona explicitamente o dia de jogo do Flamengo.' },
      { categoria: 'Rotina', pergunta: 'Quando Marina costuma ter treino de vôlei?', opcoes: ['Segundas e sextas às 6h30', 'Quartas às 16h', 'Terças e quintas às 20h', 'Sábados às 14h'], correta: 1, resposta: 'Quartas às 16h.', evidencias: 'MAR-IG-ST02, MAR-IG-ST04 e MAR-X-02', explicacao: 'Os stories e a publicação no X confirmam o dia e o horário de treino.' },
      { categoria: 'Locais', pergunta: 'Qual quadra Marina visitou?', opcoes: ['Pista do Vento', 'Quadra Aurora', 'Ginásio Horizonte', 'Arena Pixel Nascente'], correta: 1, resposta: 'Quadra Aurora.', evidencias: 'MAR-IG-ST01 e MAR-X-02', explicacao: 'O story registra uma visita à Quadra Aurora. A informação não prova residência nem frequência por si só.' },
      { categoria: 'Locais', pergunta: 'Em qual café Marina publicou um story durante uma pausa?', opcoes: ['Café Folha Azul', 'Café Mapa', 'Café do Vale Claro', 'Nenhum café é mencionado'], correta: 0, resposta: 'Café Folha Azul.', evidencias: 'MAR-IG-ST03', explicacao: 'O story mostra a placa do Café Folha Azul e indica uma visita.' },
      { categoria: 'Associação de contas', pergunta: 'Qual conjunto de pistas liga @MarihQuadra à conta de Marina?', opcoes: ['Mesmo avatar de câmera vermelha com raio e referências à mostra fotográfica', 'Mesmo endereço residencial', 'Uma senha idêntica publicada nas duas contas', 'Apenas o nome Vila Cedro na bio'], correta: 0, resposta: 'Avatar de câmera vermelha com raio e referências à mostra fotográfica.', evidencias: 'MAR-IG-02, MAR-X-05 e avatares', explicacao: 'O avatar compartilhado e as referências cruzadas sustentam a associação entre contas, mas não comprovam identidade civil.' }
    ]
  },
  {
    id: 'julia', nome: 'Júlia Nogueira', idade: 19, handleIg: '@julia.nogueira.vc', handleX: '@JuNotasNoite', emoji: '📒', tema: 'Faculdade e deslocamento', instagramUrl: '', xUrl: '',
    perguntas: [
      { categoria: 'Dados pessoais', pergunta: 'Qual é a idade de Júlia e quando é seu aniversário?', opcoes: ['18 anos; 21 de junho', '19 anos; 8 de abril', '19 anos; 9 de abril', '20 anos; 8 de abril'], correta: 1, resposta: '19 anos; aniversário em 08/04/2007.', evidencias: 'JUL-IG-01 e JUL-X-03', explicacao: 'O post de aniversário e o tweet do dia seguinte concordam sobre a idade e a data; o ano é inferido.' },
      { categoria: 'Estudos', pergunta: 'Qual é a instituição, o curso e o período de Júlia?', opcoes: ['Faculdade Horizonte Sul, Educação Física, 3º período', 'Colégio Pátio das Oliveiras, 1º ano', 'Faculdade do Vale Claro, Design de Informação, 2º período', 'Escola Livre das Artes do Vale, Produção Cultural, 1º período'], correta: 2, resposta: 'Faculdade do Vale Claro, Design de Informação, 2º período.', evidencias: 'JUL-IG-02 e JUL-X-05', explicacao: 'O painel e o crachá da exposição mostram instituição, curso e período; o repost confirma o evento.' },
      { categoria: 'Relações pessoais', pergunta: 'Quem são Célia e André para Júlia?', opcoes: ['Célia é mãe e André é irmão', 'Célia é irmã e André é pai', 'Célia é professora e André é colega', 'Célia é tia e André é primo'], correta: 0, resposta: 'Célia é mãe; André é irmão.', evidencias: 'JUL-IG-01 e JUL-X-03', explicacao: 'Os comentários e o tweet identificam os vínculos familiares.' },
      { categoria: 'Círculo social', pergunta: 'Quais pessoas aparecem ligadas ao círculo social de Júlia?', opcoes: ['Luna e Teo', 'Bruno e Iara', 'Nina e Pedro', 'Clara e Aline'], correta: 2, resposta: 'Nina Castro e Pedro Lins.', evidencias: 'JUL-IG-01, JUL-IG-02 e JUL-X-04', explicacao: 'Nina e Pedro aparecem nos comentários e nas interações ligadas às atividades de Júlia.' },
      { categoria: 'Informações cotidianas', pergunta: 'O que é Pixel?', opcoes: ['Um aplicativo de desenho', 'Um gato', 'Um colega da faculdade', 'Uma cafeteria'], correta: 1, resposta: 'Pixel é um gato.', evidencias: 'JUL-IG-03', explicacao: 'A publicação apresenta um desenho do gato Pixel e o nome aparece no texto.' },
      { categoria: 'Interesses', pergunta: 'Qual interesse de Júlia é mencionado diretamente no X?', opcoes: ['Corrida', 'Futsal', 'Tipografia e escolha de fontes', 'Treinos de vôlei'], correta: 2, resposta: 'Tipografia e escolha de fontes.', evidencias: 'JUL-X-01 e JUL-IG-02', explicacao: 'O tweet fala em testar fontes para um cartaz, e a exposição mostra a aplicação desse interesse.' },
      { categoria: 'Rotina', pergunta: 'Quando Júlia diz que tem aula?', opcoes: ['Segundas e quartas às 19h', 'Quartas às 16h', 'Terças e quintas às 20h', 'Sábados às 14h'], correta: 0, resposta: 'Segundas e quartas às 19h.', evidencias: 'JUL-IG-ST02, JUL-IG-ST04 e JUL-X-02', explicacao: 'As publicações cruzadas confirmam dias e horário. O relato sobre o ônibus não permite inferir o trajeto exato.' },
      { categoria: 'Locais', pergunta: 'Qual café Júlia visitou, segundo um story?', opcoes: ['Café Folha Azul', 'Café Mapa', 'Café do Ipê', 'A localização não é indicada'], correta: 1, resposta: 'Café Mapa.', evidencias: 'JUL-IG-ST01', explicacao: 'O story mostra a placa do Café Mapa; é evidência de visita, não de residência ou frequência.' },
      { categoria: 'Locais', pergunta: 'Qual outro local aparece associado a uma visita de Júlia?', opcoes: ['Pátio da Figueira', 'Ginásio Horizonte', 'Praça das Lanternas', 'Quadra Aurora'], correta: 0, resposta: 'Pátio da Figueira.', evidencias: 'JUL-IG-ST03 e JUL-X-05', explicacao: 'O story mostra uma visita ao pátio e o repost liga o espaço à exposição. Isso não comprova frequência habitual.' },
      { categoria: 'Associação de contas', pergunta: 'Quais pistas ajudam a associar @JuNotasNoite ao Instagram de Júlia?', opcoes: ['Caderno verde com lua branca e referências à exposição/curso', 'Mesmo endereço residencial comprovado', 'Uma senha compartilhada', 'Só a palavra “mapas” na bio'], correta: 0, resposta: 'Avatar do caderno verde com lua branca e referências à exposição e ao curso.', evidencias: 'JUL-IG-02, JUL-X-05 e avatares', explicacao: 'O avatar e as pistas acadêmicas se reforçam. A associação é sustentada por evidências, mas não prova identidade civil de forma absoluta.' }
    ]
  },
  {
    id: 'rafael', nome: 'Rafael Almeida', idade: 20, handleIg: '@rafa.almeida.vc', handleX: '@RafaVento7', emoji: '👟', tema: 'Esportes e rotina', instagramUrl: '', xUrl: '',
    perguntas: [
      { categoria: 'Dados pessoais', pergunta: 'Qual é a idade de Rafael e quando é seu aniversário?', opcoes: ['20 anos; 3 de fevereiro', '19 anos; 4 de fevereiro', '20 anos; 4 de fevereiro', '21 anos; 3 de março'], correta: 0, resposta: '20 anos; aniversário em 03/02/2006.', evidencias: 'RAF-IG-01 e RAF-X-03', explicacao: 'A publicação mostra 20 anos e o tweet diz “Ontem fiz 20”. O ano é inferido a partir da idade e da data.' },
      { categoria: 'Estudos', pergunta: 'Onde Rafael estuda e qual é seu curso/período?', opcoes: ['Faculdade do Vale Claro, Design de Informação, 2º período', 'Faculdade Horizonte Sul, Educação Física, 3º período', 'Escola Livre das Artes do Vale, Produção Cultural, 1º período', 'Colégio Horizonte do Vale, 2º ano'], correta: 1, resposta: 'Faculdade Horizonte Sul, Educação Física, 3º período.', evidencias: 'RAF-IG-02 e RAF-X-05', explicacao: 'A camiseta, o cartaz do festival e o repost da instituição apontam para curso e período.' },
      { categoria: 'Relações pessoais', pergunta: 'Quem são Dora e Henrique para Rafael?', opcoes: ['Dora é mãe e Henrique é irmão', 'Dora é irmã e Henrique é pai', 'Dora é treinadora e Henrique é colega', 'Dora é tia e Henrique é primo'], correta: 0, resposta: 'Dora é mãe; Henrique é irmão.', evidencias: 'RAF-IG-01, RAF-IG-03 e RAF-X-03', explicacao: 'Dora chama Rafael de filho, e Henrique se identifica como irmão; outras interações reforçam o vínculo.' },
      { categoria: 'Círculo social', pergunta: 'Quais pessoas aparecem ligadas ao círculo social de Rafael?', opcoes: ['Nina e Pedro', 'Luna e Teo', 'Caetano e Mila', 'Clara e Aline'], correta: 2, resposta: 'Caetano Luz e Mila Torres.', evidencias: 'RAF-IG-02, RAF-IG-ST03 e RAF-X-04', explicacao: 'Caetano aparece na atividade de futsal e Mila está ligada à partida e ao ginásio.' },
      { categoria: 'Informações cotidianas', pergunta: 'O que é Nuvem?', opcoes: ['Uma equipe de futsal', 'Uma cadela', 'Uma pista de corrida', 'O apelido de Rafael'], correta: 1, resposta: 'Nuvem é uma cadela.', evidencias: 'RAF-IG-03', explicacao: 'A imagem e a legenda mostram Rafael passeando com a cadela identificada como Nuvem.' },
      { categoria: 'Interesses', pergunta: 'Quais interesses são mencionados diretamente nas pistas de Rafael?', opcoes: ['Fotografia e vôlei', 'Tipografia e desenho', 'Flamengo e futsal', 'Música e violão'], correta: 2, resposta: 'Flamengo e futsal.', evidencias: 'RAF-X-01', explicacao: 'O tweet menciona explicitamente o futsal e o Flamengo.' },
      { categoria: 'Rotina', pergunta: 'Quando Rafael costuma treinar corrida?', opcoes: ['Segundas e sextas às 6h30', 'Segundas e quartas às 19h', 'Quartas às 16h', 'Sábados às 14h'], correta: 0, resposta: 'Segundas e sextas às 6h30.', evidencias: 'RAF-IG-ST02, RAF-IG-ST04 e RAF-X-02', explicacao: 'Os stories e o tweet confirmam dias e horário do treino.' },
      { categoria: 'Locais', pergunta: 'Qual pista Rafael visitou?', opcoes: ['Pista do Vento', 'Quadra Aurora', 'Arena Pixel Nascente', 'Pátio da Figueira'], correta: 0, resposta: 'Pista do Vento.', evidencias: 'RAF-IG-ST01', explicacao: 'O story mostra a placa da pista. A visita isolada não comprova residência nem uma rotina permanente.' },
      { categoria: 'Locais', pergunta: 'A qual ginásio Rafael foi para assistir a uma partida?', opcoes: ['Ginásio Horizonte', 'Ginásio do Vale Claro', 'Casa de Cultura do Lago', 'Café Folha Azul'], correta: 0, resposta: 'Ginásio Horizonte.', evidencias: 'RAF-IG-ST03 e RAF-X-05', explicacao: 'O story registra a visita para assistir à partida de Mila e o evento conecta o ginásio à faculdade.' },
      { categoria: 'Associação de contas', pergunta: 'Quais pistas ajudam a associar @RafaVento7 ao Instagram de Rafael?', opcoes: ['Tênis azul com número 7 e referências ao festival de futsal', 'Mesmo endereço residencial comprovado', 'Uma senha compartilhada publicamente', 'Só a palavra “Vila Cedro” na bio'], correta: 0, resposta: 'Avatar de tênis azul com número 7 e referências ao festival de futsal.', evidencias: 'RAF-IG-02, RAF-X-05 e avatares', explicacao: 'O avatar e as referências ao mesmo evento sustentam a associação entre contas; não são prova absoluta de identidade civil.' }
    ]
  },
  {
    id: 'beatriz', nome: 'Beatriz Campos', idade: 18, handleIg: '@bia.campos.vc', handleX: '@BiaNoAcorde', emoji: '🎸', tema: 'Música e eventos', instagramUrl: '', xUrl: '',
    perguntas: [
      { categoria: 'Dados pessoais', pergunta: 'Qual é a idade de Beatriz e quando é seu aniversário?', opcoes: ['18 anos; 21 de junho', '19 anos; 22 de junho', '18 anos; 22 de junho', '17 anos; 21 de maio'], correta: 0, resposta: '18 anos; aniversário em 21/06/2008.', evidencias: 'BEA-IG-01 e BEA-X-03', explicacao: 'O post de aniversário mostra 18 anos e o tweet diz “Ontem fiz 18”. O ano é inferido.' },
      { categoria: 'Estudos', pergunta: 'Onde Beatriz estuda e qual é seu curso/período?', opcoes: ['Faculdade Horizonte Sul, Educação Física, 3º período', 'Escola Livre das Artes do Vale, Produção Cultural, 1º período', 'Faculdade do Vale Claro, Design de Informação, 2º período', 'Colégio Pátio das Oliveiras, 1º ano'], correta: 1, resposta: 'Escola Livre das Artes do Vale, Produção Cultural, 1º período.', evidencias: 'BEA-IG-02 e BEA-X-05', explicacao: 'O cartaz e o crachá da oficina indicam instituição, curso e período; o repost reforça a informação.' },
      { categoria: 'Relações pessoais', pergunta: 'Quem são Rosa e Tomás para Beatriz?', opcoes: ['Rosa é mãe e Tomás é irmão', 'Rosa é irmã e Tomás é pai', 'Rosa é professora e Tomás é colega', 'Rosa é tia e Tomás é primo'], correta: 0, resposta: 'Rosa é mãe; Tomás é irmão.', evidencias: 'BEA-IG-01', explicacao: 'Os comentários de aniversário identificam explicitamente os vínculos familiares.' },
      { categoria: 'Círculo social', pergunta: 'Quais pessoas aparecem ligadas ao círculo social de Beatriz?', opcoes: ['Caetano e Mila', 'Nina e Pedro', 'Clara e Aline', 'Bruno e Iara'], correta: 2, resposta: 'Clara Mello e Aline Pires.', evidencias: 'BEA-IG-01, BEA-IG-02, BEA-IG-ST03 e BEA-X-04', explicacao: 'Clara aparece nas publicações e na ida à praça; Aline está ligada à oficina e é mencionada nas interações.' },
      { categoria: 'Informações cotidianas', pergunta: 'O que é Pingo?', opcoes: ['Um cachorro', 'Um gato', 'O nome de uma banda', 'Uma casa de cultura'], correta: 1, resposta: 'Pingo é um gato.', evidencias: 'BEA-IG-03', explicacao: 'A publicação mostra o gato com a plaquinha “Pingo” e a legenda confirma o nome.' },
      { categoria: 'Interesses', pergunta: 'Qual banda Beatriz menciona como favorita nas pistas?', opcoes: ['Nebulosa 5', 'Marés de Papel', 'Orbital Clash', 'Vento 7'], correta: 1, resposta: 'Marés de Papel.', evidencias: 'BEA-X-01', explicacao: 'O tweet diz que Beatriz passou o dia ouvindo Marés de Papel e adicionou uma faixa à playlist de ensaio.' },
      { categoria: 'Rotina', pergunta: 'Quando Beatriz costuma ensaiar?', opcoes: ['Segundas e sextas às 6h30', 'Segundas e quartas às 19h', 'Quartas às 16h', 'Sábados às 14h'], correta: 3, resposta: 'Sábados às 14h.', evidencias: 'BEA-IG-ST02, BEA-IG-ST04 e BEA-X-02', explicacao: 'Stories e tweet corroboram o dia e o horário de ensaio.' },
      { categoria: 'Locais', pergunta: 'Qual espaço cultural Beatriz visitou para assistir a uma oficina?', opcoes: ['Casa de Cultura do Lago', 'Café Mapa', 'Pista do Vento', 'Quadra Aurora'], correta: 0, resposta: 'Casa de Cultura do Lago.', evidencias: 'BEA-IG-ST01 e BEA-X-05', explicacao: 'O story mostra a placa do espaço e o repost relaciona o local à oficina. Isso não prova frequência ou residência.' },
      { categoria: 'Locais', pergunta: 'Qual praça aparece associada a uma visita de Beatriz?', opcoes: ['Praça do Ipê Azul', 'Praça das Lanternas', 'Pátio da Figueira', 'Arena Pixel Nascente'], correta: 1, resposta: 'Praça das Lanternas.', evidencias: 'BEA-IG-ST03 e BEA-X-04', explicacao: 'O story e a conversa no X se referem à ida à praça para ouvir música; não provam uma rotina de visitas.' },
      { categoria: 'Associação de contas', pergunta: 'Quais pistas ajudam a associar @BiaNoAcorde ao Instagram de Beatriz?', opcoes: ['Avatar de violão lilás com estrela e referências à mesma oficina', 'Mesmo endereço residencial comprovado', 'Uma senha compartilhada', 'Só a palavra “música” na bio'], correta: 0, resposta: 'Avatar de violão lilás com estrela e referências à mesma oficina.', evidencias: 'BEA-IG-02, BEA-X-05 e avatares', explicacao: 'O avatar compartilhado e as pistas do evento sustentam a associação entre as contas, sem provar identidade civil de modo absoluto.' }
    ]
  }
];

const el = (id) => document.getElementById(id);
const profileGrid = el('profile-grid');
const selectionPanel = el('selection-panel');
const gamePanel = el('game-panel');
const resultsPanel = el('results-panel');
const quizForm = el('quiz-form');
const startButton = el('start-button');
const submitButton = el('submit-button');
const timerElement = el('timer');
const timerBox = document.querySelector('.timer-box');
const TIMER_INITIAL = 180;
let selectedProfile = null;
let timeRemaining = TIMER_INITIAL;
let timerInterval = null;
let gameStartedAt = null;
let gameFinished = false;
let finishReason = 'submitted';

function renderProfileCards() {
  profileGrid.innerHTML = '';
  perfis.forEach((perfil, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'profile-card';
    card.setAttribute('aria-pressed', 'false');
    card.innerHTML = `<span class="profile-index">ALVO_0${index + 1}</span><span class="profile-avatar" aria-hidden="true">${perfil.emoji}</span><span class="profile-name"></span><span class="profile-detail"></span><span class="profile-handle"></span>`;
    card.querySelector('.profile-name').textContent = perfil.nome;
    card.querySelector('.profile-detail').textContent = perfil.tema;
    card.querySelector('.profile-handle').textContent = perfil.handleIg;
    card.addEventListener('click', () => selectProfile(perfil.id));
    profileGrid.appendChild(card);
  });
}

function selectProfile(id) {
  if (gameStartedAt !== null) return;
  selectedProfile = perfis.find((perfil) => perfil.id === id);
  [...profileGrid.children].forEach((card, index) => {
    const isSelected = perfis[index].id === id;
    card.setAttribute('aria-pressed', String(isSelected));
  });
  startButton.disabled = !selectedProfile;
  el('selection-hint').textContent = `${selectedProfile.nome} selecionado. Você só poderá investigar este perfil nesta partida.`;
}

function renderSimulatorLinks(perfil) {
  const container = el('simulator-links');
  container.innerHTML = '';
  const links = [
    { label: 'ABRIR INSTAGRAM SIMULADO ↗', url: perfil.instagramUrl },
    { label: 'ABRIR X SIMULADO ↗', url: perfil.xUrl }
  ].filter((link) => typeof link.url === 'string' && link.url.trim());
  if (links.length) {
    links.forEach((link) => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = link.label;
      container.appendChild(anchor);
    });
  } else {
    const note = document.createElement('p');
    note.className = 'simulator-note';
    note.textContent = 'Conecte aqui os endereços dos seus simuladores em index.js (campos instagramUrl e xUrl de cada perfil).';
    container.appendChild(note);
  }
}

function renderQuestions(perfil) {
  const container = el('questions-container');
  container.innerHTML = '';
  perfil.perguntas.forEach((question, index) => {
    const card = document.createElement('article');
    card.className = 'question-card';
    const top = document.createElement('div');
    top.className = 'question-top';
    top.innerHTML = `<span class="question-number">Q${String(index + 1).padStart(2, '0')}</span><span class="question-category"></span>`;
    top.querySelector('.question-category').textContent = question.categoria;
    const title = document.createElement('h3');
    title.textContent = question.pergunta;
    const select = document.createElement('select');
    select.name = `q${index}`;
    select.setAttribute('aria-label', `Pergunta ${index + 1}: ${question.pergunta}`);
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Selecione uma resposta...';
    placeholder.selected = true;
    select.appendChild(placeholder);
    question.opcoes.forEach((optionText, optionIndex) => {
      const option = document.createElement('option');
      option.value = String(optionIndex);
      option.textContent = optionText;
      select.appendChild(option);
    });
    select.addEventListener('change', () => {
      card.classList.toggle('answered', select.value !== '');
      updateProgress();
    });
    card.append(top, title, select);
    container.appendChild(card);
  });
  updateProgress();
}

function updateProgress() {
  const selects = [...el('questions-container').querySelectorAll('select')];
  const answered = selects.filter((select) => select.value !== '').length;
  el('answered-count').textContent = `${answered}/10`;
  el('progress-bar').style.width = `${answered / 10 * 100}%`;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (gameFinished) return;
    timeRemaining = Math.max(0, timeRemaining - 1);
    timerElement.textContent = formatTime(timeRemaining);
    if (timeRemaining <= 30 && timeRemaining > 0) timerBox.classList.add('warning');
    if (timeRemaining === 0) {
      timerBox.classList.remove('warning');
      timerBox.classList.add('expired');
      finishGame('timeout');
    }
  }, 1000);
}

function startGame() {
  if (!selectedProfile || gameStartedAt !== null) return;
  gameStartedAt = Date.now();
  timeRemaining = TIMER_INITIAL;
  gameFinished = false;
  finishReason = 'submitted';
  timerElement.textContent = formatTime(timeRemaining);
  timerBox.classList.remove('warning', 'expired');
  el('active-profile-title').textContent = selectedProfile.nome;
  el('active-profile-subtitle').textContent = `${selectedProfile.handleIg}  //  ${selectedProfile.handleX}`;
  renderSimulatorLinks(selectedProfile);
  renderQuestions(selectedProfile);
  selectionPanel.classList.add('hidden');
  resultsPanel.classList.add('hidden');
  gamePanel.classList.remove('hidden');
  el('timer-state').textContent = 'INVESTIGAÇÃO EM ANDAMENTO';
  window.scrollTo({ top: gamePanel.offsetTop - 16, behavior: 'smooth' });
  startTimer();
}

function finishGame(reason) {
  if (gameFinished || !selectedProfile) return;
  gameFinished = true;
  finishReason = reason;
  clearInterval(timerInterval);
  timerInterval = null;
  const selects = [...el('questions-container').querySelectorAll('select')];
  selects.forEach((select) => { select.disabled = true; });
  submitButton.disabled = true;
  el('timer-state').textContent = reason === 'timeout' ? 'TEMPO ESGOTADO' : 'PARTIDA FINALIZADA';
  if (reason === 'timeout') timerBox.classList.add('expired');
  showResults(selects);
}

function showResults(selects) {
  const perfil = selectedProfile;
  const resultItems = perfil.perguntas.map((question, index) => {
    const selectedValue = selects[index]?.value ?? '';
    const isCorrect = selectedValue !== '' && Number(selectedValue) === question.correta;
    return { question, selectedValue, isCorrect, index };
  });
  const correctCount = resultItems.filter((item) => item.isCorrect).length;
  const wrongCount = resultItems.length - correctCount;
  const usedSeconds = TIMER_INITIAL - timeRemaining;
  el('score-value').textContent = `${correctCount}/10`;
  el('correct-count').textContent = String(correctCount);
  el('wrong-count').textContent = String(wrongCount);
  el('elapsed-time').textContent = formatTime(usedSeconds);
  el('result-status').textContent = finishReason === 'timeout' ? 'TEMPO ESGOTADO' : 'PARTIDA ENCERRADA';
  el('score-title').textContent = correctCount === 10 ? 'Investigação completa.' : correctCount >= 7 ? 'Boa análise das pistas.' : correctCount >= 4 ? 'Algumas pistas foram identificadas.' : 'Há mais pistas para analisar.';
  el('score-description').textContent = finishReason === 'timeout'
    ? 'O tempo acabou. As respostas já preenchidas foram corrigidas; perguntas sem resposta contam como incorretas.'
    : 'Confira cada resposta e as evidências que sustentam a conclusão correta.';

  const reviewList = el('review-list');
  reviewList.innerHTML = '';
  resultItems.forEach(({ question, selectedValue, isCorrect, index }) => {
    const item = document.createElement('article');
    item.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
    const head = document.createElement('div');
    head.className = 'review-head';
    const icon = document.createElement('span');
    icon.className = 'review-icon';
    icon.textContent = isCorrect ? 'OK' : 'ERRO';
    const heading = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = `Q${String(index + 1).padStart(2, '0')} — ${question.pergunta}`;
    heading.appendChild(title);
    head.append(icon, heading);
    const yourAnswer = document.createElement('p');
    yourAnswer.className = 'review-answer';
    const picked = selectedValue === '' ? 'Não respondida' : question.opcoes[Number(selectedValue)];
    yourAnswer.textContent = `Sua resposta: ${picked}`;
    const correctAnswer = document.createElement('p');
    correctAnswer.textContent = `Resposta esperada: ${question.resposta}`;
    const evidence = document.createElement('p');
    evidence.className = 'review-evidence';
    evidence.textContent = `EVIDÊNCIAS: ${question.evidencias}`;
    const explanation = document.createElement('p');
    explanation.textContent = question.explicacao;
    item.append(head, yourAnswer, correctAnswer, evidence, explanation);
    reviewList.appendChild(item);
  });
  gamePanel.classList.add('hidden');
  resultsPanel.classList.remove('hidden');
  window.scrollTo({ top: resultsPanel.offsetTop - 16, behavior: 'smooth' });
}

function restartGame() {
  clearInterval(timerInterval);
  timerInterval = null;
  selectedProfile = null;
  timeRemaining = TIMER_INITIAL;
  gameStartedAt = null;
  gameFinished = false;
  finishReason = 'submitted';
  timerElement.textContent = '03:00';
  timerBox.classList.remove('warning', 'expired');
  el('timer-state').textContent = 'AGUARDANDO INÍCIO';
  startButton.disabled = true;
  el('selection-hint').textContent = 'Selecione um perfil para habilitar o início da investigação.';
  [...profileGrid.children].forEach((card) => card.setAttribute('aria-pressed', 'false'));
  gamePanel.classList.add('hidden');
  resultsPanel.classList.add('hidden');
  selectionPanel.classList.remove('hidden');
  submitButton.disabled = false;
  window.scrollTo({ top: selectionPanel.offsetTop - 16, behavior: 'smooth' });
}

startButton.addEventListener('click', startGame);
quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (gameFinished) return;
  finishGame('submitted');
});
el('restart-button').addEventListener('click', restartGame);

renderProfileCards();
