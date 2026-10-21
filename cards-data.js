/**
 * cards-data.js - Banco de Dados Resumido e Pré-processado para Cards LANCER RPG
 * Tradução PT-BR • Compêndio Otimizado para Impressão de Mesa e Editor
 * Total: 44 Ações | 92 Armas | 140 Sistemas | 15 Status
 */
window.LANCER_CARDS_DATA = {
  "actions": [
    {
      "id": "act_move",
      "category": "action",
      "name": "Movimento",
      "activation": "Move",
      "terse": "Mova seu personagem até a sua <b>Velocidade</b> em qualquer direção.",
      "detail": "Em seu turno, os personagens podem sempre mover uma quantidade de espaços igual à sua <b>VELOCIDADE</b>, além de qualquer outra ação. Isso é chamado de movimento padrão para distinguir do movimento fornecido por sistemas ou talentos.\nUm personagem só conta como movendo se mover-se 1 ou mais espaços.\nPersonagens podem se mover para dentro de qualquer espaço adjacente, mesmo diagonalmente, desde que o espaço não esteja ocupado por uma obstrução (e que seja um para o qual normalmente poderiam se mover - por exemplo, personagens não podem mover-se direto para cima, a menos que possam voar). Existem diversos fatores que podem afetar o movimento, detalhados aqui.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_overcharge",
      "category": "action",
      "name": "Sobrecarregar",
      "activation": "Ação Livre",
      "terse": "<b>SOBRECARREGAR</b> permite que você realize imediatamente qualquer <b>ação rápida</b> de sua escolha como uma <b>Ação Livre</b>, mesmo uma que você já tenha feito neste turno.",
      "detail": "Quando <b>SOBRECARREGAR</b>, você brevemente leva seu mecha além das especificações de fábrica para receber uma vantagem tática. Momentos de ação intensa não vão taxar muito os sistemas do mecha, mas ação constante além dos limites prescritos tem seu preço.\nUma vez por turno, você pode <b>SOBRECARREGAR</b> seu mecha, permitindo fazer qualquer <b>ação rápida</b> como uma <b>ação livre</b> – mesmo que sejam ações que já foram feitas neste turno.\nNa primeira vez que <b>SOBRECARREGAR</b>, você sofre 1 de calor.\nNa segunda vez que <b>SOBRECARREGAR</b>, você sofre 1d3 de calor.\nNa terceira vez, você sofre 1d6 de calor, e toda vez após isso você sofre 1d6+4 de calor.\nUm <b>REPARO COMPLETO</b> reinicia essa contagem.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_skirmish",
      "category": "action",
      "name": "Alvejar",
      "activation": "Ação Rápida",
      "terse": "Ataque com uma única arma. Além do seu ataque primário, você também pode atacar com uma arma <b>Auxiliar</b> diferente no mesmo encaixe.",
      "detail": "Quando você ALVEJA, você ataca com uma única arma.\nPara <b>ALVEJAR</b>, escolha uma arma e um alvo válido dentro do ALCANCE (ou AMEAÇA) e então faça um ataque.\n• Além do seu ataque primário, você também pode atacar com uma arma <b>AUXILIAR</b> diferente no mesmo encaixe. Essa arma não causa dano bônus.\n• Armas <b>SUPERPESADAS</b> são volumosas demais para usar ao <b>ALVEJAR</b>, e só podem ser disparadas como parte de uma <b>BARRAGEM</b>.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_boost",
      "category": "action",
      "name": "Impulsionar",
      "activation": "Ação Rápida",
      "terse": "Faça um movimento extra de pelo menos 1 espaço, até a sua <b>VELOCIDADE</b>.",
      "detail": "Quando você IMPULSIONA, você se move pelo menos 1 espaço, até a sua <b>VELOCIDADE</b>. Isso permite que você faça um movimento adicional, além do seu movimento padrão. Certos talentos e sistemas só podem ser usados quando você IMPULSIONA, não quando faz um movimento padrão.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_ram",
      "category": "action",
      "name": "Empurrar",
      "activation": "Ação Rápida",
      "terse": "Tente derrubar ou empurrar seu alvo. Em um sucesso, o alvo fica <b>Prostrado</b> e você pode escolher empurrá-lo um espaço para trás.",
      "detail": "Quando você EMPURRA, você faz um ataque corpo a corpo com o objetivo de derrubar ou empurrar um alvo.\nPara <b>EMPURRAR</b>, faça um ataque corpo a corpo contra um personagem adjacente do mesmo TAMANHO ou menor que você. Em um sucesso, seu alvo fica <b>PROSTRADO</b> e você também pode escolher empurrá-lo um espaço para trás, na direção oposta a você.",
      "tags": [
        "Aplica: prone"
      ],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_ram_npc",
      "category": "action",
      "name": "Empurrar",
      "activation": "Ação Rápida",
      "terse": "O PNJ faz um ataque corpo a corpo contra um personagem adjacente a ele de seu tamanho ou menor, com um bônus de +1/2/3. Em um sucesso, ele deixa seu alvo <b>Prostrado</b>.",
      "detail": "O PNJ faz um ataque corpo a corpo contra um personagem adjacente a ele de seu tamanho ou menor, com um bônus de +1/2/3. Em um sucesso, ele deixa seu alvo <b>Prostrado</b>.",
      "tags": [
        "Aplica: prone"
      ],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_grapple",
      "category": "action",
      "name": "Agarrar",
      "activation": "Ação Rápida",
      "terse": "Tente segurar seu alvo, potencialmente o imobilizando ou montando nele.",
      "detail": "Quando você AGARRA, tenta segurar um alvo e sobrepujá-lo – desarmando, subjugando ou causando dano a ele para que não possa fazer o mesmo a você.\nPara <b>AGARRAR</b>, escolha um personagem adjacente e faça um ataque corpo a corpo. Em um acerto:\n• ambos os personagens ficam ENGAJADOS;\n• nenhum dos personagens pode <b>IMPULSIONAR</b> ou usar reações pela duração do agarrão;\n• o personagem menor fica IMOBILIZADO, mas se move quando o personagem maior se mover, espelhando seus movimentos. Se ambos os lados forem do mesmo TAMANHO, qualquer um pode fazer testes disputados de CASCO no início do seu turno: o vencedor conta como maior que o perdedor até que este teste seja repetido.\nUm AGARRÃO termina quando:\n• qualquer um dos personagens quebrar a adjacência, como quando empurrados por outro efeito;\n• o atacante escolhe terminar o agarrão como uma <b>ação livre</b>;\n• o defensor se libertar sendo bem-sucedido em um teste disputado de CASCO como uma <b>Ação Rápida</b>.\nSe um AGARRÃO envolver mais de dois personagens, as mesmas regras se aplicam, mas quando contar o TAMANHO, some o TAMANHO de todos os personagens de cada lado. Por exemplo, se dois personagens aliados de TAMANHO 1 estiverem agarrando um único inimigo de TAMANHO 2, os personagens aliados contam como TAMANHO 2 combinado e podem tentar arrastar seu inimigo.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_grapple_npc",
      "category": "action",
      "name": "Agarrar",
      "activation": "Ação Rápida",
      "terse": "O PNJ faz um ataque corpo a corpo contra um personagem adjacente com um bônus de +1/2/3, agarrando-o se for bem-sucedido.",
      "detail": "O PNJ faz um ataque corpo a corpo contra um personagem adjacente com um bônus de +1/2/3, agarrando-o se for bem-sucedido.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_quick_tech",
      "category": "action",
      "name": "Programar Rápido",
      "activation": "Ação Rápida",
      "terse": "Realize <b>ações rápidas</b> de guerra eletrônica ou de reforço de sistemas.",
      "detail": "Quando você usa <b>PROGRAMAR RÁPIDO</b>, você engaja em guerra eletrônica, contramedidas e outras ações técnicas, geralmente ajudado pelos poderosos núcleos computacionais e de simulação de um mecha.\nCada vez que realiza esta ação, você escolhe uma opção da lista de <b>PROGRAMAR RÁPIDO</b>. Todos os mechas têm acesso a essas opções, mas alguns sistemas as melhoram ou disponibilizam novas opções.\nDiferente de outras <b>ações rápidas</b>, <b>PROGRAMAR RÁPIDO</b> pode ser usada mais de uma vez por turno; entretanto, uma opção diferente deve ser escolhida a cada vez, exceto se especificado o contrário ou concedido como uma <b>ação livre</b>.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_bolster",
      "category": "action",
      "name": "Reforçar",
      "activation": "Quick Tech",
      "terse": "Melhore os sistemas de outro personagem.",
      "detail": "Quando você REFORÇA, usa o formidável poder de processamento de seu mecha para melhorar os sistemas de outro personagem.\nPara <b>REFORÇAR</b>, escolha um personagem ao ALCANCE dos SENSORES. Ele recebe +2 de Precisão no próximo teste de perícia ou salvamento que fizer entre agora e o final do próximo turno dele. Personagens só podem se beneficiar de um <b>REFORÇAR</b> por vez.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_scan",
      "category": "action",
      "name": "Escanear",
      "activation": "Quick Tech",
      "terse": "Realize um escaneamento profundo em um inimigo.",
      "detail": "Quando você ESCANEA, você usa os poderosos sensores de seu mecha para realizar um escaneamento profundo em um inimigo.\nPara <b>ESCANEAR</b>, escolha um personagem ou objeto ao ALCANCE dos SENSORES e na linha de visão, e então pergunte ao MJ uma das seguintes informações, que ele deve responder honestamente:\n• Armas, sistemas e estatísticas completas (PV, <b>VELOCIDADE</b>, EVASÃO, <b>ARMADURA</b>, PERÍCIAS DE MECHA e assim por diante) de seu alvo.\n• Uma informação sigilosa sobre o alvo, como carga ou dados confidenciais, missão atual, a identidade do piloto e assim por diante.\n• Informação genérica ou pública sobre o alvo que pode ser retirada de bancos de informação ou registros, como o número do modelo de um mecha.\nAs informações coletadas são apenas as atuais na hora do ESCANEAMENTO – se o alvo sofrer dano depois, por exemplo, você não recebe uma atualização.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_lockon",
      "category": "action",
      "name": "Travar Mira",
      "activation": "Quick Tech",
      "terse": "Marque um alvo digitalmente.",
      "detail": "Quando você TRAVA MIRA, você marca um alvo digitalmente, iluminando-o para os sistemas de mira de seus companheiros e expondo pontos fracos.\nPara <b>TRAVAR MIRA</b>, escolha um personagem na linha de visão e ao ALCANCE dos SENSORES. Ele sofre a condição TRAVADO EM MIRA. Qualquer personagem que faça um ataque contra alguém TRAVADO EM MIRA pode escolher receber <b>+1 de Precisão</b> no ataque e então remover a condição TRAVADO EM MIRA depois que o ataque for resolvido. Isso é chamado de consumir TRAVADO EM MIRA.",
      "tags": [
        "Aplica: lockon"
      ],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_invade",
      "category": "action",
      "name": "Invadir",
      "activation": "Quick Tech",
      "terse": "Execute um ataque eletrônico direto contra um alvo.",
      "detail": "Quando você INVADE, você executa um ataque eletrônico direto contra um alvo. Para <b>INVADIR</b>, faça um ataque tecnológico contra um personagem na linha de visão e ao ALCANCE dos SENSORES. Em um sucesso, seu alvo sofre 2 de calor e você escolhe uma das opções de INVASÃO disponíveis a você. <b>FRAGMENTAR SINAL</b> está disponível para todos os personagens, e opções adicionais são concedidas por certos sistemas e equipamentos com a tag <b>INVADIR</b>. Você também pode <b>INVADIR</b> personagens aliados voluntários para criar certos efeitos. Se o seu alvo for voluntário e aliado, você automaticamente é bem-sucedido, isso não conta como um ataque e o alvo não recebe nenhum calor.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_inv_fragment_signal",
      "category": "action",
      "name": "Fragmentar Sinal",
      "activation": "Invadir",
      "terse": "Deixa um personagem <b>IMPEDIDO</b> e <b>LENTO</b> até o final do próximo turno dele.",
      "detail": "Você transmite informações falsas, mensagens obscenas ou sinais fantasmas para o núcleo computacional do alvo. Ele fica <b>IMPEDIDO</b> e <b>LENTO</b> até o final do próximo turno dele.",
      "tags": [
        "Aplica: impaired",
        "Aplica: slow"
      ],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_hide",
      "category": "action",
      "name": "Esconder-se",
      "activation": "Ação Rápida",
      "terse": "Obscureça a posição do seu mecha, tornando-se ESCONDIDO e incapaz de ser identificado, localizado com precisão ou ser alvo direto de ataques ou ações hostis.",
      "detail": "<p>Quando você se ESCONDE, você obscurece a posição do seu mecha para se reposicionar, evitar sofrer tiros, reparar ou emboscar.</p><p>Para se ESCONDER, você não pode estar ENGAJADO e precisa estar fora da linha de visão dos inimigos, obscurecido por cobertura suficiente ou invisível. Se conseguir se ESCONDER enquanto atende a um desses critérios, você recebe o estado de ESCONDIDO.</p><p>Cobertura pesada é o suficiente para se ESCONDER desde que seja grande o suficiente para ocultá-lo completamente, mas <b>Cobertura Leve</b> só é suficiente se você estiver completamente dentro de uma área ou zona que garanta <b>Cobertura Leve</b> – muitos sistemas e talentos que fornecem <b>Cobertura Leve</b> ou obscurecimento simples não proveem o suficiente para se esconder atrás!</p><p>Se estiver INVISÍVEL, você sempre pode se ESCONDER, independente de cobertura, a menos que esteja ENGAJADO.</p><p>A localização exata de alvos ESCONDIDOS não pode ser identificada e eles não podem ser visados diretamente por ataques ou ações hostis, mas ainda podem ser atingidos por ataques que afetem uma área. Embora os PNJs não possam localizar perfeitamente um personagem ESCONDIDO, eles ainda podem saber uma localização aproximada. Assim, um PNJ pode descarregar um lança-chamas em uma área mesmo sem saber exatamente onde um jogador ESCONDIDO está à espreita.</p><p>Adicionalmente, outros personagens ignoram engajamento com você enquanto você estiver ESCONDIDO — assume-se que você está tentando se manter furtivo.</p><p>Você para de ficar ESCONDIDO se fizer um ataque (corpo a corpo, à distância ou tecnológico) ou se o seu mecha fizer uma ação hostil (como forçar um alvo a fazer um salvamento). Usar <b>IMPULSIONAR</b> ou reações com seu mecha também faz com que você perca o estado ESCONDIDO. Outras ações podem ser usadas normalmente.</p><p>Você também perde imediatamente o estado ESCONDIDO se a sua cobertura desaparecer ou for destruída, ou se perder cobertura devido à linha de visão (por exemplo, se um mecha pular por cima de um muro e agora conseguir traçar uma linha de visão ininterrupta até você). Se estiver se escondendo enquanto está INVISÍVEL, você perde o estado ESCONDIDO quando deixar de estar INVISÍVEL, a menos que esteja em uma cobertura.</p>",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_search",
      "category": "action",
      "name": "Procurar",
      "activation": "Ação Rápida",
      "terse": "Procure por um alvo escondido.",
      "detail": "Quando você PROCURA, você tenta identificar personagens escondidos. Para PROCURAR em um mecha, escolha um personagem ao ALCANCE dos seus SENSORES que você suspeite estar ESCONDIDO e faça um teste disputado de SISTEMAS contra a AGILIDADE dele.\nApós um personagem ESCONDIDO ser encontrado usando PROCURAR, ele imediatamente perde o estado ESCONDIDO e pode ser localizado novamente por qualquer personagem.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_search_pilot",
      "category": "action",
      "name": "Procurar",
      "activation": "Ação Rápida",
      "terse": "Procure por um alvo escondido.",
      "detail": "Para PROCURAR como um piloto a pé, faça um teste de perícia disputado, adicionando os bônus dos seus gatilhos normalmente. Isso pode ser usado para revelar personagens dentro de ALCANCE 5.\nApós um personagem ESCONDIDO ser encontrado usando PROCURAR, ele imediatamente perde o estado ESCONDIDO e pode ser localizado novamente por qualquer personagem.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_activate_quick",
      "category": "action",
      "name": "Ativar (Rápida)",
      "activation": "Ação Rápida",
      "terse": "Ative um sistema ou equipamento que requer uma <b>Ação Rápida</b>.",
      "detail": "Quando você ATIVA, você usa um sistema ou equipamento que requer uma <b>Ação Rápida</b> ou completa. Esses sistemas têm as tags de <b>AÇÃO RÁPIDA</b> ou <b>AÇÃO COMPLETA</b>. Você pode ATIVAR quantas vezes quiser em um turno, mas não pode ATIVAR o mesmo sistema mais de uma vez, a menos que possa fazê-lo como uma <b>ação livre</b>.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_eject",
      "category": "action",
      "name": "Ejetar",
      "activation": "Ação Rápida",
      "terse": "Ejete do seu mecha, voando 6 espaços na direção de sua escolha.",
      "detail": "Você também pode <b>EJETAR</b> como uma <b>Ação Rápida</b>, voando 6 espaços em uma direção à sua escolha; entretanto, este é um sistema de uso único para emergências – ele deixa seu mecha <b>IMPEDIDO</b>. Seu mecha permanece <b>IMPEDIDO</b> e você não pode <b>EJETAR</b> novamente até o seu próximo <b>REPARO COMPLETO</b>.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_prepare",
      "category": "action",
      "name": "Preparar",
      "activation": "Ação Rápida",
      "terse": "Prepare uma <b>Ação Rápida</b> para um acionamento especificado. Até o início do seu próximo turno, quando for acionado, você pode realizar sua ação preparada como uma <b>Reação</b>. Sua preparação conta como se você estivesse realizando a ação, então ela segue todas as restrições usuais daquela ação e de realizar múltiplas ações.",
      "detail": "Quando você PREPARA, você se apronta para usar uma ação em um momento específico ou quando uma condição específica é atingida (um tiro mais vantajoso, por exemplo).\nComo uma <b>Ação Rápida</b>, você pode <b>PREPARAR</b> qualquer outra <b>Ação Rápida</b> e especificar um acionamento. Até o início do seu próximo turno, quando houver o acionamento especificado, você pode realizar essa ação como uma <b>Reação</b>.\nO acionamento para sua ação preparada deve ser formulado da seguinte forma: \"Quando X, então Y\", onde X é uma <b>Reação</b>, ação ou movimento realizado por um personagem hostil ou aliado e Y é sua ação. Por exemplo, \"quando um personagem aliado se mover para um espaço adjacente a mim, eu quero jogar uma granada de fumaça\" ou \"quando um personagem hostil se mover para um espaço adjacente a mim, eu quero empurrá-lo\".\nSua preparação conta como realizar a ação, então ela segue todas as restrições normais dessa ação e de realizar múltiplas ações. Você não pode, por exemplo, <b>ALVEJAR</b> e então preparar para <b>ALVEJAR</b> novamente; você também não pode se mover e então <b>PREPARAR</b> para <b>ALVEJAR</b> com uma arma de ARTILHARIA, que normalmente precisa ser disparada antes de se mover ou fazer qualquer outra coisa em seu turno. Adicionalmente, depois que <b>PREPARAR</b> uma ação, você não pode se mover ou usar quaisquer outras ações ou reações até o início do seu próximo turno ou até que sua ação tenha sido acionada (o que ocorrer primeiro).\nEmbora você não possa usar reações enquanto mantém uma ação preparada, você pode usá-las normalmente depois que ela for acionada. Você também pode desistir de sua ação preparada, permitindo que use reações normalmente. Se a condição de acionamento não acontecer, você perde sua ação preparada.\nQuando você PREPARA, isso é visível para observadores casuais (por exemplo, você claramente mira ou prepara sistemas).",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_self_destruct",
      "category": "action",
      "name": "Autodestruir",
      "activation": "Ação Rápida",
      "terse": "Como uma última cartada, configure o reator do seu mecha para entrar em estado crítico e explodir.",
      "detail": "Quando você se AUTODESTRÓI, você sobrecarrega o reator do seu mecha em uma jogada final catastrófica quando não houver outra opção de fuga ou você julgar seu sacrifício necessário.\nVocê pode se AUTODESTRUIR como uma <b>Ação Rápida</b>, iniciando uma fusão do reator. No final do seu próximo turno, ou no final de um dos seus turnos nas próximas duas rodadas (à sua escolha), seu mecha explode como se tivesse sofrido uma fusão do reator. A explosão aniquila seu mecha, matando qualquer um dentro dele e provocando uma explosão de EMANAÇÃO 2 que causa 4d6 de dano explosivo. Personagens pegos na explosão que forem bem-sucedidos em um salvamento de AGILIDADE sofrem metade deste dano.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_shut_down",
      "category": "action",
      "name": "Desligar",
      "activation": "Ação Rápida",
      "terse": "Desligue seu mecha como uma medida desesperada para encerrar ataques de sistema, recuperar o controle da <b>IA</b> e resfriar seu mecha. O mecha fica <b>ATORDOADO</b> até ser reiniciado com a ação LIGAR.",
      "detail": "Quando você DESLIGA, seu mecha desliga completamente e entra em estado de descanso. É sempre arriscado fazer isso em campo, mas às vezes é necessário para impedir uma sobrecarga catastrófica de sistemas ou um cascateamento de PNH.\nVocê pode <b>DESLIGAR</b> seu mecha como uma <b>Ação Rápida</b>. Seu mecha adquire o estado DESLIGADO, com estes efeitos:\n• todo o calor é removido, assim como <b>EXPOSTO</b>;\n• quaisquer PNHs em cascata retornam ao estado normal;\n• quaisquer estados ou condições que estiverem afetando o mecha causados por ações tecnológicas, como TRAVADO EM MIRA, se encerram imediatamente;\n• o mecha ganha IMUNIDADE a todas as ações tecnológicas e ataques tecnológicos, incluindo de quaisquer personagens aliados;\n• o mecha fica <b>ATORDOADO</b> indefinidamente. Nada pode impedir essa condição, e ela permanece até que o mecha deixe de estar DESLIGADO.\nA única forma de remover o estado DESLIGADO é LIGAR o mecha.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_reload",
      "category": "action",
      "name": "Recarregar",
      "activation": "Ação Rápida",
      "terse": "Recarregue uma arma como piloto.",
      "detail": "Quando você RECARREGA, recarrega uma Arma de Piloto que tenha a tag <b>RECARGA</b>, tornando-a utilizável novamente.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_barrage",
      "category": "action",
      "name": "Barragem",
      "activation": "Ação Completa",
      "terse": "Ataque com duas armas, ou ataque com uma única arma <b>superpesada</b>.",
      "detail": "Quando você usa <b>BARRAGEM</b>, você ataca com duas armas ou com uma arma <b>SUPERPESADA</b>.\nPara usar <b>BARRAGEM</b>, escolha suas armas e um alvo ou alvos diferentes – dentro do alcance – e então faça um ataque com cada arma.\n• Além dos seus ataques primários, você também pode atacar com uma arma <b>AUXILIAR</b> de cada um dos encaixes disparados, desde que a arma <b>AUXILIAR</b> ainda não tenha sido disparada nesta ação. Essas armas <b>AUXILIARES</b> não causam dano bônus.\n• Armas <b>SUPERPESADAS</b> só podem ser disparadas como parte de uma <b>BARRAGEM</b>.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_full_tech",
      "category": "action",
      "name": "Programar Completo",
      "activation": "Ação Completa",
      "terse": "Escolha e realize duas opções de <b>Programar Rápido</b>, ou realize uma ação tecnológica completa. Se escolher duas opções de <b>Programar Rápido</b>, você pode escolher a mesma opção múltiplas vezes.",
      "detail": "Quando você usa PROGRAMAR COMPLETO, você realiza múltiplas ações tecnológicas ou uma ação única e mais complexa.\nPara usar PROGRAMAR COMPLETO, escolha duas opções de <b>PROGRAMAR RÁPIDO</b> ou uma opção única de sistema ou tecnológica que exija PROGRAMAR COMPLETO para ativar. Se escolher duas opções de <b>PROGRAMAR RÁPIDO</b>, você pode escolher a mesma opção múltiplas vezes.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_stabilize",
      "category": "action",
      "name": "Estabilizar",
      "activation": "Ação Completa",
      "terse": "Cure e resfrie seu mecha, recarregue ou tente encerrar condições que o afetam.",
      "detail": "Quando você ESTABILIZA, você ativa os protocolos de emergência para remover calor em excesso dos sistemas do seu mecha, reparar seu chassi onde for possível ou eliminar código hostil.\nPara <b>ESTABILIZAR</b>, escolha um dos seguintes:\n• Esfrie seu mecha, removendo todo calor e <b>EXPOSTO</b>.\n• Marque 1 REPARO para restaurar todos os PV.\nAdicionalmente, escolha um dos seguintes:\n• Recarregue todas as armas com <b>RECARGA</b>.\n• Remova qualquer queimadura que atualmente esteja afetando seu mecha.\n• Remova uma condição que não foi causada por um dos seus próprios sistemas, talentos etc.\n• Remova uma condição de um aliado adjacente que não foi causada por um dos sistemas, talentos etc. dele mesmo.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_stabilize_npc",
      "category": "action",
      "name": "Estabilizar",
      "activation": "Ação Completa",
      "terse": "O PNJ remove todo o calor e o estado <b>Exposto</b>, e recarrega todas as armas com <b>Recarga</b>.",
      "detail": "O PNJ remove todo o calor e o estado <b>Exposto</b>, e recarrega todas as armas com <b>Recarga</b>.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_disengage",
      "category": "action",
      "name": "Desengajar",
      "activation": "Ação Completa",
      "terse": "Desengaje com segurança de uma situação perigosa. Até o final do seu turno atual, você ignora engajamentos e seu movimento não provoca reações.",
      "detail": "Quando você DESENGAJA, você tenta sair com segurança de uma situação perigosa, fazer uma retirada firme e calculada ou confiar na agilidade do seu mecha para entrar e sair das zonas de ameaça mais rápido do que um inimigo possa atacar.\nAté o final do seu turno atual, você ignora engajamentos e seu movimento não provoca reações.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_improvised_attack",
      "category": "action",
      "name": "Improvisar Ataque",
      "activation": "Ação Completa",
      "terse": "Ataque com um punho, coronha de fuzil ou arma improvisada em combate corpo a corpo.",
      "detail": "Quando você faz um <b>ATAQUE IMPROVISADO</b>, você ataca com a coronha de um fuzil, punho ou outra arma corpo a corpo improvisada. Você pode usar qualquer coisa desde a coronha de uma arma a uma laje de concreto ou um pedaço de placa de chassi – a descrição do ataque cabe a você!\nPara fazer um <b>ATAQUE IMPROVISADO</b>, faça um ataque corpo a corpo contra um alvo adjacente. Em um sucesso, ele sofre 1d6 de dano cinético.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_improvised_attack_npc",
      "category": "action",
      "name": "Improvisar Ataque",
      "activation": "Ação Completa",
      "terse": "Ataque com um punho, coronha de fuzil ou arma improvisada em combate corpo a corpo.",
      "detail": "O PNJ faz um ataque corpo a corpo com um bônus de +1/2/3 e causa 3/4/6 de dano, baseado em seu Patamar.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_activate_full",
      "category": "action",
      "name": "Ativar (Completa)",
      "activation": "Ação Completa",
      "terse": "Ative um sistema ou equipamento que requer uma <b>Ação Completa</b>.",
      "detail": "Quando você ATIVA, você usa um sistema ou equipamento que requer uma <b>Ação Rápida</b> ou completa. Esses sistemas têm as tags de <b>AÇÃO RÁPIDA</b> ou <b>AÇÃO COMPLETA</b>. Você pode ATIVAR quantas vezes quiser em um turno, mas não pode ATIVAR o mesmo sistema mais de uma vez, a menos que possa fazê-lo como uma <b>ação livre</b>.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_boot_up",
      "category": "action",
      "name": "Ligar",
      "activation": "Ação Completa",
      "terse": "Ligue seu mecha a partir do estado Desligado.",
      "detail": "Você pode LIGAR um mecha que esteja pilotando como uma <b>Ação Completa</b>, removendo DESLIGADO e restaurando seu mecha a um estado energizado.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_mount",
      "category": "action",
      "name": "Montar",
      "activation": "Ação Completa",
      "terse": "Suba no seu mecha.",
      "detail": "Quando você MONTA, você sobe em um mecha. <b>Montar</b> é o termo preferido pela maioria dos pilotos. Você não \"entra\" ou \"sobe a bordo\" – você monta. Afinal, você é a cavalaria.\nVocê pode <b>MONTAR</b> como uma <b>Ação Completa</b>. Você precisa estar adjacente ao seu mecha para <b>MONTAR</b>.\nAdicionalmente, você também pode <b>MONTAR</b> em mechas ou veículos aliados voluntários. Quando fizer isso, entre no mesmo espaço e então mova-se com eles.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_dismount",
      "category": "action",
      "name": "Desmontar",
      "activation": "Ação Completa",
      "terse": "Saia do seu mecha.",
      "detail": "Quando você DESMONTA, você desce de um mecha. <b>Desmontar</b> é o termo preferido pela maioria dos pilotos.\nVocê pode <b>DESMONTAR</b> como uma <b>Ação Completa</b>. Quando DESMONTA, você é colocado em um espaço adjacente – se não houver espaços livres, você não pode <b>DESMONTAR</b>.\nAdicionalmente, você também pode <b>DESMONTAR</b> de mechas ou veículos aliados voluntários nos quais tenha MONTADO.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_skill_check",
      "category": "action",
      "name": "Teste de Perícia",
      "activation": "Ação Completa",
      "terse": "Realize uma atividade com um objetivo claro que exigiria um teste de perícia.",
      "detail": "Quando você faz um TESTE DE PERÍCIA, realiza uma atividade que não é coberta por outras ações, mas possui um objetivo claro e é suficientemente complexa para exigir uma rolagem. Os parâmetros e resultados de TESTES DE PERÍCIA dependem do MJ, mas eles precisam ser envolventes o suficiente para exigir uma <b>Ação Completa</b>. Se você quiser fazer algo que pode ser feito rapidamente, nenhuma ação é necessária.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_fight",
      "category": "action",
      "name": "Lutar",
      "activation": "Ação Completa",
      "terse": "Ataque com uma arma como piloto.",
      "detail": "Quando você LUTA, você ataca (corpo a corpo ou à distância) com uma arma.\nPara LUTAR, escolha uma arma e ataque um alvo dentro do ALCANCE ou AMEAÇA e na linha de visão como uma <b>Ação Completa</b>. Ataques à distância são afetados por cobertura e sofrem +1 de dificuldade se você estiver ENGAJADO.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_jockey",
      "category": "action",
      "name": "Atracar",
      "activation": "Ação Completa",
      "terse": "Tente atacar um mecha a pé como piloto.",
      "detail": "Quando você ATRACA, ataca agressivamente um mecha inimigo enquanto está a pé. Não se pode enfatizar o suficiente o quão insensato e perigoso isso é.\nPara ATRACAR, você precisa estar adjacente a um mecha. Como uma <b>Ação Completa</b>, faça um teste de perícia disputado contra o mecha, usando BRIO (ou um gatilho relevante, a critério do MJ). O mecha se opõe usando CASCO. Sendo bem-sucedido, você consegue escalar o mecha, compartilhando seu espaço e se movendo com ele. O mecha pode tentar se livrar de você sendo bem-sucedido em outro teste de perícia disputado como uma <b>Ação Completa</b>; alternativamente, você pode pular do mecha como parte de seu movimento em seu turno.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_jockey_distract",
      "category": "action",
      "name": "Distrair",
      "activation": "Jockey",
      "terse": "Deixa um mecha <b>IMPEDIDO</b> e <b>LENTO</b> até o final do próximo turno dele.",
      "detail": "Deixa um mecha <b>IMPEDIDO</b> e <b>LENTO</b> até o final do próximo turno dele.",
      "tags": [
        "Aplica: impaired",
        "Aplica: slow"
      ],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_jockey_shred",
      "category": "action",
      "name": "Pane",
      "activation": "Jockey",
      "terse": "Causa 2 de Calor",
      "detail": "Causa 2 de calor ao mecha ao rasgar fios, painéis e estruturas semelhantes.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_jockey_damage",
      "category": "action",
      "name": "Dano",
      "activation": "Jockey",
      "terse": "Causa 4 de Dano Cinético",
      "detail": "Causa 4 de dano cinético ao mecha ao atacar juntas, escotilhas e partes semelhantes.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_brace",
      "category": "action",
      "name": "Suportar",
      "activation": "Reação",
      "terse": "Prepare seu mecha para o impacto, reduzindo o dano ao custo das ações do seu próximo turno.",
      "detail": "Você conta como tendo RESISTÊNCIA a todo dano, queimadura e calor do ataque acionador e, até o final do seu próximo turno, todos os outros ataques feitos contra você são feitos com +1 de dificuldade.\nDevido ao estresse de suportar, você não pode usar reações até o final do seu próximo turno e, nesse turno, só pode usar uma <b>Ação Rápida</b> – você não pode <b>SOBRECARREGAR</b>, mover-se normalmente, usar <b>ações completas</b> ou usar <b>ações livres</b>.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_overwatch",
      "category": "action",
      "name": "Retaliar",
      "activation": "Reação",
      "terse": "Ataque um alvo próximo que esteja tentando se mover.",
      "detail": "Quando uma arma é acionada através do <b>RETALIAR</b>, use imediatamente essa arma para <b>ALVEJAR</b> o personagem acionador como uma <b>Reação</b>, antes dele se mover.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_overwatch_npc",
      "category": "action",
      "name": "Retaliar",
      "activation": "Reação",
      "terse": "Ataque um alvo próximo que esteja tentando se mover.",
      "detail": "Quando um personagem começa qualquer movimento no alcance de ameaça de uma arma de um PNJ, esse PNJ pode realizar a ação alvejar contra ele como uma <b>Reação</b>. Um PNJ só pode retaliar uma vez entre turnos, a menos que especificado o contrário.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "act_free_action",
      "category": "action",
      "name": "Ação Livre",
      "activation": "Ação Livre",
      "terse": "Os personagens podem realizar qualquer número de <b>Ações Livres</b> em seu turno.",
      "detail": "Ações livres geralmente são concedidas por sistemas, talentos, equipamento ou <b>SOBRECARREGAR</b>. Os personagens podem realizar qualquer quantidade de <b>ações livres</b> em seu turno, mas apenas em seu turno, e apenas aquelas concedidas a eles. Ações livres podem sempre ser usadas para fazer ações repetidas.\nO tipo mais comum de <b>ação livre</b> é um <b>PROTOCOLO</b>, que é concedido por equipamentos e sistemas e pode ser ativado ou desativado apenas no início de um turno. Cada <b>Protocolo</b> só pode ser usado uma vez por turno.",
      "tags": [],
      "source": "REGRAS BÁSICAS"
    }
  ],
  "weapons": [
    {
      "id": "mw_anti_materiel_rifle",
      "category": "weapon",
      "name": "Fuzil Antimaterial",
      "mount": "Pesada",
      "type": "Rifle",
      "damage": "2d6 Cinético",
      "damage_val": "2d6",
      "damage_type": "Cinético",
      "range": "Alcance 20",
      "range_val": 20,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Precisa",
        "Perfurante (PF)",
        "Recarga",
        "Artilharia"
      ],
      "tags_summary": "Precisa (+1d6 no ataque); PF (ignora Armadura); Carregamento (precisa de ação rápida ou estabilizar para recarregar); Artilharia (só pode disparar antes de se mover no turno)",
      "terse": "Rifle pesado de sniper para longa distância. <b>[PF]</b> Ignora <b>Armadura</b>. <b>[Carregamento]</b> Exige <b>recarga</b> após o disparo. <b>[Artilharia]</b> Dispare antes de se mover.",
      "detail": "Rifle pesado de sniper para longa distância. <b>[PF]</b> Ignora <b>Armadura</b>. <b>[Carregamento]</b> Exige <b>recarga</b> após o disparo. <b>[Artilharia]</b> Dispare antes de se mover.\nPropriedades:\n• Precisa (+1d6 no ataque)\n• PF (ignora <b>Armadura</b>)\n• Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)\n• Artilharia (só pode disparar antes de se mover no turno)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_assault_rifle",
      "category": "weapon",
      "name": "Fuzil de Assalto",
      "mount": "Principal",
      "type": "Rifle",
      "damage": "1d6 Cinético",
      "damage_val": "1d6",
      "damage_type": "Cinético",
      "range": "Alcance 10",
      "range_val": 10,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Confiável 2"
      ],
      "tags_summary": "Confiável 2 (causa 2 de dano mesmo se errar o ataque)",
      "terse": "Fuzil tático de uso geral. <b>[Confiável 2]</b> Causa 2 de dano garantido mesmo se o ataque errar.",
      "detail": "Fuzil tático de uso geral. <b>[Confiável 2]</b> Causa 2 de dano garantido mesmo se o ataque errar.\nPropriedades:\n• Confiável 2 (causa 2 de dano mesmo se errar o ataque)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_charged_blade",
      "category": "weapon",
      "name": "Lâmina Energizada",
      "mount": "Principal",
      "type": "Corpo a Corpo",
      "damage": "1d3+3 Energético",
      "damage_val": "1d3+3",
      "damage_type": "Energético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Perfurante (PF)"
      ],
      "tags_summary": "PF (ignora Armadura)",
      "terse": "Lâmina corpo a corpo de alta frequência com fio de energia mono-molecular superaquecido.",
      "detail": "Lâmina corpo a corpo de alta frequência com fio de energia mono-molecular superaquecido.\nPropriedades:\n• PF (ignora <b>Armadura</b>)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_cyclone_pulse_rifle",
      "category": "weapon",
      "name": "Fuzil de Pulso Ciclone",
      "mount": "Superpesada",
      "type": "Rifle",
      "damage": "3d6+3 Cinético",
      "damage_val": "3d6+3",
      "damage_type": "Cinético",
      "range": "Alcance 15",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Precisa",
        "Recarga",
        "Confiável 5"
      ],
      "tags_summary": "Precisa (+1d6 no ataque); Carregamento (precisa de ação rápida ou estabilizar para recarregar); Confiável 5 (causa 5 de dano mesmo se errar o ataque)",
      "terse": "Artilharia <b>superpesada</b> de pulso contínuo. Disparo destrutivo devastador com <b>[PF]</b> que ignora <b>armadura</b>.",
      "detail": "Artilharia <b>superpesada</b> de pulso contínuo. Disparo destrutivo devastador com <b>[PF]</b> que ignora <b>armadura</b>.\nPropriedades:\n• Precisa (+1d6 no ataque)\n• Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)\n• Confiável 5 (causa 5 de dano mesmo se errar o ataque)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_heavy_charged_blade",
      "category": "weapon",
      "name": "Lâmina Energizada Pesada",
      "mount": "Pesada",
      "type": "Corpo a Corpo",
      "damage": "1d6+3 Energético",
      "damage_val": "1d6+3",
      "damage_type": "Energético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Perfurante (PF)"
      ],
      "tags_summary": "PF (ignora Armadura)",
      "terse": "Espada pesada de alta energia para partir <b>blindagens</b> espessas.",
      "detail": "Espada pesada de alta energia para partir <b>blindagens</b> espessas.\nPropriedades:\n• PF (ignora <b>Armadura</b>)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_heavy_machine_gun",
      "category": "weapon",
      "name": "Metralhadora Pesada",
      "mount": "Pesada",
      "type": "Canhão",
      "damage": "2d6+4 Cinético",
      "damage_val": "2d6+4",
      "damage_type": "Cinético",
      "range": "Alcance 8",
      "range_val": 8,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Imprecisa"
      ],
      "tags_summary": "Imprecisa (+1d6 de dificuldade)",
      "terse": "Arma de supressão pesada de alta cadência de fogo contínuo. <b>[Imprecisa]</b> (+1d6 de dificuldade).",
      "detail": "Arma de supressão pesada de alta cadência de fogo contínuo. <b>[Imprecisa]</b> (+1d6 de dificuldade).\nPropriedades:\n• Imprecisa (+1d6 de dificuldade)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_heavy_melee_weapon",
      "category": "weapon",
      "name": "Arma Corpo a Corpo Pesada",
      "mount": "Pesada",
      "type": "Corpo a Corpo",
      "damage": "2d6+1 Cinético",
      "damage_val": "2d6+1",
      "damage_type": "Cinético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "Arma contundente ou cortante pesada (machado, martelo, maça) para impactos maciços corpo a corpo.",
      "detail": "Arma contundente ou cortante pesada (machado, martelo, maça) para impactos maciços corpo a corpo.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_howitzer",
      "category": "weapon",
      "name": "Obus",
      "mount": "Pesada",
      "type": "Canhão",
      "damage": "2d6 Explosivo",
      "damage_val": "2d6",
      "damage_type": "Explosivo",
      "range": "Alcance 20, Explosão 2",
      "range_val": 20,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Arco",
        "Imprecisa",
        "Recarga",
        "Artilharia"
      ],
      "tags_summary": "Arco (ignora cobertura se tiver visão indireta); Imprecisa (+1d6 de dificuldade); Carregamento (precisa de ação rápida ou estabilizar para recarregar); Artilharia (só pode disparar antes de se mover no turno)",
      "terse": "Obuseiro de artilharia pesada. Disparo parabólico em <b>[Explosão 2]</b> que ignora obstáculos e cobertura.",
      "detail": "Obuseiro de artilharia pesada. Disparo parabólico em <b>[Explosão 2]</b> que ignora obstáculos e cobertura.\nPropriedades:\n• Arco (ignora cobertura se tiver visão indireta)\n• Imprecisa (+1d6 de dificuldade)\n• Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)\n• Artilharia (só pode disparar antes de se mover no turno)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_missile_rack",
      "category": "weapon",
      "name": "Caixa de Mísseis",
      "mount": "Auxiliar",
      "type": "Lançador",
      "damage": "1d3+1 Explosivo",
      "damage_val": "1d3+1",
      "damage_type": "Explosivo",
      "range": "Alcance 10, Explosão 1",
      "range_val": 10,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Recarga"
      ],
      "tags_summary": "Carregamento (precisa de ação rápida ou estabilizar para recarregar)",
      "terse": "Suporte de micromísseis autoguiados de disparo rápido em salva.",
      "detail": "Suporte de micromísseis autoguiados de disparo rápido em salva.\nPropriedades:\n• Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_mortar",
      "category": "weapon",
      "name": "Morteiro",
      "mount": "Principal",
      "type": "Canhão",
      "damage": "1d6+1 Explosivo",
      "damage_val": "1d6+1",
      "damage_type": "Explosivo",
      "range": "Alcance 15, Explosão 1",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Arco",
        "Imprecisa"
      ],
      "tags_summary": "Arco (ignora cobertura se tiver visão indireta); Imprecisa (+1d6 de dificuldade)",
      "terse": "Morteiro leve para fogo indireto. Projéteis parabólicos com dispersão em <b>[Explosão 1]</b> que superam cobertura.",
      "detail": "Morteiro leve para fogo indireto. Projéteis parabólicos com dispersão em <b>[Explosão 1]</b> que superam cobertura.\nPropriedades:\n• Arco (ignora cobertura se tiver visão indireta)\n• Imprecisa (+1d6 de dificuldade)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_nexus_hunter_killer",
      "category": "weapon",
      "name": "Nexo (Caçador Assassino)",
      "mount": "Principal",
      "type": "Nexo",
      "damage": "1d6 Cinético",
      "damage_val": "1d6",
      "damage_type": "Cinético",
      "range": "Alcance 10",
      "range_val": 10,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Inteligente"
      ],
      "tags_summary": "Inteligente (ataca a Defesa Tecnológica do alvo)",
      "terse": "Nexo de drones autônomos de ataque. Ataca a Defesa Tecnológica do alvo com enxame cinético coordenado.",
      "detail": "Nexo de drones autônomos de ataque. Ataca a Defesa Tecnológica do alvo com enxame cinético coordenado.\nPropriedades:\n• Inteligente (ataca a Defesa Tecnológica do alvo)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_nexus_light",
      "category": "weapon",
      "name": "Nexo (Leve)",
      "mount": "Auxiliar",
      "type": "Nexo",
      "damage": "1d3 Cinético",
      "damage_val": "1d3",
      "damage_type": "Cinético",
      "range": "Alcance 10",
      "range_val": 10,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Inteligente"
      ],
      "tags_summary": "Inteligente (ataca a Defesa Tecnológica do alvo)",
      "terse": "Nexo <b>auxiliar</b> compacto de microdrones para suporte e ataques de flanco rápidos.",
      "detail": "Nexo <b>auxiliar</b> compacto de microdrones para suporte e ataques de flanco rápidos.\nPropriedades:\n• Inteligente (ataca a Defesa Tecnológica do alvo)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_pistol",
      "category": "weapon",
      "name": "Pistola CQR",
      "mount": "Auxiliar",
      "type": "Combate Próximo (CQB)",
      "damage": "1d3 Cinético",
      "damage_val": "1d3",
      "damage_type": "Cinético",
      "range": "Alcance 5, Ameaça 3",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Confiável 1"
      ],
      "tags_summary": "Confiável 1 (causa 1 de dano mesmo se errar o ataque)",
      "terse": "Pistola de saque rápido para engajamentos a curta distância. Ideal como ataque secundário em <b>Alvejar</b>.",
      "detail": "Pistola de saque rápido para engajamentos a curta distância. Ideal como ataque secundário em <b>Alvejar</b>.\nPropriedades:\n• Confiável 1 (causa 1 de dano mesmo se errar o ataque)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_segment_knife",
      "category": "weapon",
      "name": "Faca Segmentada",
      "mount": "Auxiliar",
      "type": "Corpo a Corpo",
      "damage": "1d3+1 Energético",
      "damage_val": "1d3+1",
      "damage_type": "Energético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Exagero"
      ],
      "tags_summary": "Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "terse": "Faca tática de lâminas descartáveis impressas rapidamente para estocadas ágeis corpo a corpo.",
      "detail": "Faca tática de lâminas descartáveis impressas rapidamente para estocadas ágeis corpo a corpo.\nPropriedades:\n• Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_rocket_propelled_grenade",
      "category": "weapon",
      "name": "Lança-Foguetes",
      "mount": "Principal",
      "type": "Lançador",
      "damage": "1d6+1 Explosivo",
      "damage_val": "1d6+1",
      "damage_type": "Explosivo",
      "range": "Alcance 10, Explosão 2",
      "range_val": 10,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Recarga",
        "Artilharia"
      ],
      "tags_summary": "Carregamento (precisa de ação rápida ou estabilizar para recarregar); Artilharia (só pode disparar antes de se mover no turno)",
      "terse": "Lança-foguetes portátil com ogiva perfurante de <b>blindagem</b> em área <b>[Explosão 1]</b>.",
      "detail": "Lança-foguetes portátil com ogiva perfurante de <b>blindagem</b> em área <b>[Explosão 1]</b>.\nPropriedades:\n• Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)\n• Artilharia (só pode disparar antes de se mover no turno)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_shotgun",
      "category": "weapon",
      "name": "Espingarda",
      "mount": "Principal",
      "type": "Combate Próximo (CQB)",
      "damage": "1d6 Cinético",
      "damage_val": "1d6",
      "damage_type": "Cinético",
      "range": "Alcance 5, Ameaça 3",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "Escopeta de combate com dispersão de chumbo de alto impacto em curto alcance.",
      "detail": "Escopeta de combate com dispersão de chumbo de alto impacto em curto alcance.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_tactical_knife",
      "category": "weapon",
      "name": "Faca Tática",
      "mount": "Auxiliar",
      "type": "Corpo a Corpo",
      "damage": "1d3+1 Cinético",
      "damage_val": "1d3+1",
      "damage_type": "Cinético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Arremessável 3"
      ],
      "tags_summary": "Arremesso 3 (pode ser arremessada até alcance 3)",
      "terse": "Faca tática leve balanceada. <b>[Arremesso 5]</b> Pode ser arremessada contra alvos a curta distância.",
      "detail": "Faca tática leve balanceada. <b>[Arremesso 5]</b> Pode ser arremessada contra alvos a curta distância.\nPropriedades:\n• Arremesso 3 (pode ser arremessada até alcance 3)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_tactical_melee_weapon",
      "category": "weapon",
      "name": "Arma Corpo a Corpo Tática",
      "mount": "Principal",
      "type": "Corpo a Corpo",
      "damage": "1d6+2 Cinético",
      "damage_val": "1d6+2",
      "damage_type": "Cinético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "Arma corpo a corpo padrão balanceada (espada, machado de mão, bastão de choque).",
      "detail": "Arma corpo a corpo padrão balanceada (espada, machado de mão, bastão de choque).",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_thermal_lance",
      "category": "weapon",
      "name": "Lança Térmica",
      "mount": "Pesada",
      "type": "Canhão",
      "damage": "1d6+3 Energético",
      "damage_val": "1d6+3",
      "damage_type": "Energético",
      "range": "Linha 10",
      "range_val": 10,
      "range_type": "Linha",
      "sp": 0,
      "tags": [
        "Calor 2 (Próprio)"
      ],
      "tags_summary": "Calor 2 (sofre 2 de calor ao disparar)",
      "terse": "Pesada Canhão. Calor 2 (sofre 2 de calor ao disparar)",
      "detail": "Pesada Canhão. Calor 2 (sofre 2 de calor ao disparar)\nPropriedades:\n• Calor 2 (sofre 2 de calor ao disparar)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_thermal_pistol",
      "category": "weapon",
      "name": "Pistola Térmica",
      "mount": "Auxiliar",
      "type": "Combate Próximo (CQB)",
      "damage": "2 Energético",
      "damage_val": 2,
      "damage_type": "Energético",
      "range": "Linha 5",
      "range_val": 5,
      "range_type": "Linha",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "Assim como os mechas da SMG, as armas da SMG são padrões galácticos confiáveis, feitas com peças intercambiáveis e construídas para <b>Suportar</b> quase todas as condições. Existem três linhas atualmente em produção. A <b>Linha</b> Tipo-II (T-2) exibe as armas corpo a corpo 'carregadas' e as armas de <b>Energia</b> proprietárias da SMG.",
      "detail": "Assim como os mechas da SMG, as armas da SMG são padrões galácticos confiáveis, feitas com peças intercambiáveis e construídas para <b>Suportar</b> quase todas as condições. Existem três linhas atualmente em produção. A <b>Linha</b> Tipo-II (T-2) exibe as armas corpo a corpo 'carregadas' e as armas de <b>Energia</b> proprietárias da SMG.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_thermal_rifle",
      "category": "weapon",
      "name": "Fuzil Térmico",
      "mount": "Principal",
      "type": "Rifle",
      "damage": "1d3+2 Energético",
      "damage_val": "1d3+2",
      "damage_type": "Energético",
      "range": "Alcance 5",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Perfurante (PF)"
      ],
      "tags_summary": "PF (ignora Armadura)",
      "terse": "Fuzil de feixe térmico concentrado. Causa dano de Queimadura contínua que derrete chapas de <b>blindagem</b>.",
      "detail": "Fuzil de feixe térmico concentrado. Causa dano de Queimadura contínua que derrete chapas de <b>blindagem</b>.\nPropriedades:\n• PF (ignora <b>Armadura</b>)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_chain_axe",
      "category": "weapon",
      "name": "Machado de Corrente",
      "mount": "Principal",
      "type": "Corpo a Corpo",
      "damage": "1d6 Cinético",
      "damage_val": "1d6",
      "damage_type": "Cinético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Confiável 2"
      ],
      "tags_summary": "Confiável 2 (causa 2 de dano mesmo se errar o ataque)",
      "terse": "<b>[No Crítico]</b> O seu alvo fica <b>Dilacerado</b> até fim do seu turno.\nTags: Confiável 2 (causa 2 de dano mesmo se errar o ataque)",
      "detail": "<b>[No Crítico]</b> O seu alvo fica <b>Dilacerado</b> até fim do seu turno.\nTags: Confiável 2 (causa 2 de dano mesmo se errar o ataque)\nPropriedades:\n• Confiável 2 (causa 2 de dano mesmo se errar o ataque)",
      "source": "IPS-N",
      "license": "Blackbeard",
      "license_level": 1
    },
    {
      "id": "mw_bristlecrown_flechette_launcher",
      "category": "weapon",
      "name": "Lançador de Flechete Coroa",
      "mount": "Auxiliar",
      "type": "Combate Próximo (CQB)",
      "damage": "1 Cinético",
      "damage_val": 1,
      "damage_type": "Cinético",
      "range": "Emanação 1",
      "range_val": 1,
      "range_type": "Emanação",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "Esta arma ignora as penalidades de distância quando você estiver <b>Engajado</b> e causa <b>3 de Dano Cinético</b> (em vez de 1) em alvos Agarrados ou Biológicos.",
      "detail": "Esta arma ignora as penalidades de distância quando você estiver <b>Engajado</b> e causa <b>3 de Dano Cinético</b> (em vez de 1) em alvos Agarrados ou Biológicos.",
      "source": "IPS-N",
      "license": "Blackbeard",
      "license_level": 2
    },
    {
      "id": "mw_nanocarbon_sword",
      "category": "weapon",
      "name": "Espada de Nanocarbono",
      "mount": "Pesada",
      "type": "Corpo a Corpo",
      "damage": "1d6+4 Cinético",
      "damage_val": "1d6+4",
      "damage_type": "Cinético",
      "range": "Ameaça 2",
      "range_val": 2,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Confiável 3"
      ],
      "tags_summary": "Confiável 3 (causa 3 de dano mesmo se errar o ataque)",
      "terse": "Pesada Corpo a Corpo. Confiável 3 (causa 3 de dano mesmo se errar o ataque)",
      "detail": "Pesada Corpo a Corpo. Confiável 3 (causa 3 de dano mesmo se errar o ataque)\nPropriedades:\n• Confiável 3 (causa 3 de dano mesmo se errar o ataque)",
      "source": "IPS-N",
      "license": "Blackbeard",
      "license_level": 2
    },
    {
      "id": "mw_assault_cannon",
      "category": "weapon",
      "name": "Canhão de Assalto",
      "mount": "Principal",
      "type": "Canhão",
      "damage": "-",
      "damage_val": "-",
      "damage_type": "-",
      "range": "-",
      "range_val": "-",
      "range_type": "-",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "O canhão de assalto clássico da EIP-EN é um canhão automático refrigerado, utilizável como uma arma montada ou plataforma operada por atiradores. O canhão, simples em sua funcionalidade, pode ser alimentado tanto por cartuchos de caixa quanto por cintos e é uma inclusão padrão em praticamente qualquer pedido de frota da EIP-EN. Em ambientes micro e de <b>gravidade zero</b>, os pilotos do Drake costumam empregar o canhão de assalto como um sistema de propulsão adicional.",
      "detail": "O canhão de assalto clássico da EIP-EN é um canhão automático refrigerado, utilizável como uma arma montada ou plataforma operada por atiradores. O canhão, simples em sua funcionalidade, pode ser alimentado tanto por cartuchos de caixa quanto por cintos e é uma inclusão padrão em praticamente qualquer pedido de frota da EIP-EN. Em ambientes micro e de <b>gravidade zero</b>, os pilotos do Drake costumam empregar o canhão de assalto como um sistema de propulsão adicional.",
      "source": "IPS-N",
      "license": "Drake",
      "license_level": 1
    },
    {
      "id": "mw_concussion_missiles",
      "category": "weapon",
      "name": "Mísseis de Concussão",
      "mount": "Principal",
      "type": "Lançador",
      "damage": "1d3 Explosivo",
      "damage_val": "1d3",
      "damage_type": "Explosivo",
      "range": "Alcance 5",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Repulsão 2"
      ],
      "tags_summary": "Repulsão 2 (empurra o alvo 2 espaços)",
      "terse": "<b>[No Acerto]</b> O alvo deve ter sucesso em uma salvaguarda de Casco ou ficar <b>Impedido</b> até o final do próximo turno dele.\nTags: Repulsão 2 (empurra o alvo 2 espaços)",
      "detail": "<b>[No Acerto]</b> O alvo deve ter sucesso em uma salvaguarda de Casco ou ficar <b>Impedido</b> até o final do próximo turno dele.\nTags: Repulsão 2 (empurra o alvo 2 espaços)\nPropriedades:\n• Repulsão 2 (empurra o alvo 2 espaços)",
      "source": "IPS-N",
      "license": "Drake",
      "license_level": 2
    },
    {
      "id": "mw_leviathan_heavy_assault_cannon",
      "category": "weapon",
      "name": "Canhão de Assalto Pesado Leviatã",
      "mount": "Superpesada",
      "type": "Canhão",
      "damage": "-",
      "damage_val": "-",
      "damage_type": "-",
      "range": "-",
      "range_val": "-",
      "range_type": "-",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "O Canhão de Assalto Pesado (CAS) Leviatã é um canhão rotativo maciço de múltiplos canos alimentados por um reservatório externo, geralmente montado dorsalmente no chassi que o transporta. Sem modificações, o Leviatã só deve ser disparado dentro das especificações de tempo de <b>Explosão</b> recomendadas para evitar trauma percussivo nas juntas e nos pilotos. Em parceria com o Ideário da Arsenal Harrison, a EIP-EN está atualmente investigando soluções remotas para as demandas de consumo de munição do canhão.",
      "detail": "O Canhão de Assalto Pesado (CAS) Leviatã é um canhão rotativo maciço de múltiplos canos alimentados por um reservatório externo, geralmente montado dorsalmente no chassi que o transporta. Sem modificações, o Leviatã só deve ser disparado dentro das especificações de tempo de <b>Explosão</b> recomendadas para evitar trauma percussivo nas juntas e nos pilotos. Em parceria com o Ideário da Arsenal Harrison, a EIP-EN está atualmente investigando soluções remotas para as demandas de consumo de munição do canhão.",
      "source": "IPS-N",
      "license": "Drake",
      "license_level": 3
    },
    {
      "id": "mw_cutter_mkii_plasma_torch",
      "category": "weapon",
      "name": "Tocha de Plasma Cortadora Mk II",
      "mount": "Auxiliar",
      "type": "Corpo a Corpo",
      "damage": "1 Energético + 1 Calor + 1 Queimadura",
      "damage_val": 1,
      "damage_type": "Energético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Calor 1 (Próprio)"
      ],
      "tags_summary": "Calor 1 (sofre 1 de calor ao disparar)",
      "terse": "Esta arma causa 10 de <b>Energia</b>(PF) a objetos, cobertura, terreno e ambiente.",
      "detail": "Esta arma causa 10 de <b>Energia</b>(PF) a objetos, cobertura, terreno e ambiente.\nPropriedades:\n• Calor 1 (sofre 1 de calor ao disparar)",
      "source": "IPS-N",
      "license": "Lancaster",
      "license_level": 3
    },
    {
      "id": "mw_war_pike",
      "category": "weapon",
      "name": "Pique de Guerra",
      "mount": "Principal",
      "type": "Corpo a Corpo",
      "damage": "1d6 Cinético",
      "damage_val": "1d6",
      "damage_type": "Cinético",
      "range": "Ameaça 3",
      "range_val": 3,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Repulsão 1",
        "Arremessável 5"
      ],
      "tags_summary": "Repulsão 1 (empurra o alvo 1 espaços); Arremesso 5 (pode ser arremessada até alcance 5)",
      "terse": "Principal Corpo a Corpo. Repulsão 1 (empurra o alvo 1 espaços) • Arremesso 5 (pode ser arremessada até alcance 5)",
      "detail": "Principal Corpo a Corpo. Repulsão 1 (empurra o alvo 1 espaços) • Arremesso 5 (pode ser arremessada até alcance 5)\nPropriedades:\n• Repulsão 1 (empurra o alvo 1 espaços)\n• Arremesso 5 (pode ser arremessada até alcance 5)",
      "source": "IPS-N",
      "license": "Nelson",
      "license_level": 1
    },
    {
      "id": "mw_power_knuckles",
      "category": "weapon",
      "name": "Punhos de Poder",
      "mount": "Auxiliar",
      "type": "Corpo a Corpo",
      "damage": "1d3+1 Explosivo",
      "damage_val": "1d3+1",
      "damage_type": "Explosivo",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "<b>[No Crítico]</b> O seu alvo deve ter sucesso em uma salvaguarda de Casco ou ser derrubado <b>Caído</b>.",
      "detail": "<b>[No Crítico]</b> O seu alvo deve ter sucesso em uma salvaguarda de Casco ou ser derrubado <b>Caído</b>.",
      "source": "IPS-N",
      "license": "Nelson",
      "license_level": 3
    },
    {
      "id": "mw_hand_cannon",
      "category": "weapon",
      "name": "Canhão de Mão",
      "mount": "Auxiliar",
      "type": "Combate Próximo (CQB)",
      "damage": "1d6 Cinético",
      "damage_val": "1d6",
      "damage_type": "Cinético",
      "range": "Alcance 5, Ameaça 3",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Recarga",
        "Confiável 1"
      ],
      "tags_summary": "Carregamento (precisa de ação rápida ou estabilizar para recarregar); Confiável 1 (causa 1 de dano mesmo se errar o ataque)",
      "terse": "<b>Auxiliar</b> Combate Próximo (CQB). Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar) • Confiável 1 (causa 1 de dano mesmo se errar o ataque)",
      "detail": "<b>Auxiliar</b> Combate Próximo (CQB). Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar) • Confiável 1 (causa 1 de dano mesmo se errar o ataque)\nPropriedades:\n• Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)\n• Confiável 1 (causa 1 de dano mesmo se errar o ataque)",
      "source": "IPS-N",
      "license": "Raleigh",
      "license_level": 1
    },
    {
      "id": "mw_bolt_thrower",
      "category": "weapon",
      "name": "Balestra",
      "mount": "Pesada",
      "type": "Canhão",
      "damage": "2d6 Cinético + 1d6 Explosivo",
      "damage_val": "2d6",
      "damage_type": "Cinético",
      "range": "Alcance 8",
      "range_val": 8,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Recarga",
        "Confiável 2"
      ],
      "tags_summary": "Carregamento (precisa de ação rápida ou estabilizar para recarregar); Confiável 2 (causa 2 de dano mesmo se errar o ataque)",
      "terse": "Pesada Canhão. Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar) • Confiável 2 (causa 2 de dano mesmo se errar o ataque)",
      "detail": "Pesada Canhão. Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar) • Confiável 2 (causa 2 de dano mesmo se errar o ataque)\nPropriedades:\n• Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)\n• Confiável 2 (causa 2 de dano mesmo se errar o ataque)",
      "source": "IPS-N",
      "license": "Raleigh",
      "license_level": 2
    },
    {
      "id": "mw_kinetic_hammer",
      "category": "weapon",
      "name": "Martelo Cinético",
      "mount": "Pesada",
      "type": "Corpo a Corpo",
      "damage": "2d6+2 Cinético",
      "damage_val": "2d6+2",
      "damage_type": "Cinético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Confiável 4"
      ],
      "tags_summary": "Confiável 4 (causa 4 de dano mesmo se errar o ataque)",
      "terse": "Pesada Corpo a Corpo. Confiável 4 (causa 4 de dano mesmo se errar o ataque)",
      "detail": "Pesada Corpo a Corpo. Confiável 4 (causa 4 de dano mesmo se errar o ataque)\nPropriedades:\n• Confiável 4 (causa 4 de dano mesmo se errar o ataque)",
      "source": "IPS-N",
      "license": "Raleigh",
      "license_level": 3
    },
    {
      "id": "mw_deck_sweeper_automatic_shotgun",
      "category": "weapon",
      "name": "Espingarda Automática Varredora de Convés",
      "mount": "Principal",
      "type": "Combate Próximo (CQB)",
      "damage": "2d6 Cinético",
      "damage_val": "2d6",
      "damage_type": "Cinético",
      "range": "Alcance 3, Ameaça 3",
      "range_val": 3,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Imprecisa"
      ],
      "tags_summary": "Imprecisa (+1d6 de dificuldade)",
      "terse": "Principal Combate Próximo (CQB). Imprecisa (+1d6 de dificuldade)",
      "detail": "Principal Combate Próximo (CQB). Imprecisa (+1d6 de dificuldade)\nPropriedades:\n• Imprecisa (+1d6 de dificuldade)",
      "source": "IPS-N",
      "license": "Tortuga",
      "license_level": 1
    },
    {
      "id": "mw_daisy_cutter",
      "category": "weapon",
      "name": "Cortadora Margarida",
      "mount": "Pesada",
      "type": "Combate Próximo (CQB)",
      "damage": "3d6 Cinético",
      "damage_val": "3d6",
      "damage_type": "Cinético",
      "range": "Cone 7",
      "range_val": 7,
      "range_type": "Cone",
      "sp": 0,
      "tags": [
        "Limitado 2"
      ],
      "tags_summary": "Limitada 2 (2 usos por missão)",
      "terse": "<b>[Ao Atacar]</b> Cria uma nuvem de fumaça e detritos no cone de ataque, fornecendo <b>Cobertura Leve</b> na área afetada que dura até o final do seu próximo turno.\nTags: Limitada 2 (2 usos por missão)",
      "detail": "<b>[Ao Atacar]</b> Cria uma nuvem de fumaça e detritos no cone de ataque, fornecendo <b>Cobertura Leve</b> na área afetada que dura até o final do seu próximo turno.\nTags: Limitada 2 (2 usos por missão)\nPropriedades:\n• Limitada 2 (2 usos por missão)",
      "source": "IPS-N",
      "license": "Tortuga",
      "license_level": 2
    },
    {
      "id": "mw_catalytic_hammer",
      "category": "weapon",
      "name": "Martelo Catalítico",
      "mount": "Principal",
      "type": "Corpo a Corpo",
      "damage": "1d3+5 Cinético",
      "damage_val": "1d3+5",
      "damage_type": "Cinético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Recarga"
      ],
      "tags_summary": "Carregamento (precisa de ação rápida ou estabilizar para recarregar)",
      "terse": "<b>[No Crítico]</b> O seu alvo deve ter sucesso em uma salvaguarda de Casco ou ficar <b>Atordoado</b> até o final do próximo turno dele.\nTags: Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)",
      "detail": "<b>[No Crítico]</b> O seu alvo deve ter sucesso em uma salvaguarda de Casco ou ficar <b>Atordoado</b> até o final do próximo turno dele.\nTags: Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)\nPropriedades:\n• Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)",
      "source": "IPS-N",
      "license": "Tortuga",
      "license_level": 2
    },
    {
      "id": "mw_impact_lance",
      "category": "weapon",
      "name": "Lança de Impacto",
      "mount": "Principal",
      "type": "Corpo a Corpo",
      "damage": "1d6 Energético",
      "damage_val": "1d6",
      "damage_type": "Energético",
      "range": "Ameaça 3",
      "range_val": 3,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "<b>[Ao Atacar]</b> Você também ataca todos os personagens em uma <b>Linha</b> entre você e o seu alvo. Você sofre 1 de calor para cada alvo além do primeiro.",
      "detail": "<b>[Ao Atacar]</b> Você também ataca todos os personagens em uma <b>Linha</b> entre você e o seu alvo. Você sofre 1 de calor para cada alvo além do primeiro.",
      "source": "IPS-N",
      "license": "Vlad",
      "license_level": 1
    },
    {
      "id": "mw_impaler_nailgun",
      "category": "weapon",
      "name": "Pistola de Pregos Empaladora",
      "mount": "Principal",
      "type": "Combate Próximo (CQB)",
      "damage": "1d6+1 Cinético",
      "damage_val": "1d6+1",
      "damage_type": "Cinético",
      "range": "Alcance 5, Ameaça 3",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Calor 1 (Próprio)"
      ],
      "tags_summary": "Calor 1 (sofre 1 de calor ao disparar)",
      "terse": "<b>[No Acerto]</b> Os alvos devem obter sucesso em uma salvaguarda de Casco ou ficar <b>Impedido</b> até o final do próximo turno deles.\nTags: Calor 1 (sofre 1 de calor ao disparar)",
      "detail": "<b>[No Acerto]</b> Os alvos devem obter sucesso em uma salvaguarda de Casco ou ficar <b>Impedido</b> até o final do próximo turno deles.\nTags: Calor 1 (sofre 1 de calor ao disparar)\nPropriedades:\n• Calor 1 (sofre 1 de calor ao disparar)",
      "source": "IPS-N",
      "license": "Vlad",
      "license_level": 2
    },
    {
      "id": "mw_combat_drill",
      "category": "weapon",
      "name": "Broca de Combate",
      "mount": "Superpesada",
      "type": "Corpo a Corpo",
      "damage": "3d6 Cinético + 1d6 Energético",
      "damage_val": "3d6",
      "damage_type": "Cinético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Perfurante (PF)",
        "Exagero"
      ],
      "tags_summary": "PF (ignora Armadura); Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "terse": "Ao atacar um personagem que está <b>Prostrado</b>, <b>Imobilizado</b> ou <b>Atordoado</b>, a tag Exagerado desta arma causa +1d6 <b>Dano bônus</b> sempre que for ativada. Isso pode ser ativado indefinidamente se o novo resultado do dado bônus for um 1, acionando Exagerado novamente.",
      "detail": "Ao atacar um personagem que está <b>Prostrado</b>, <b>Imobilizado</b> ou <b>Atordoado</b>, a tag Exagerado desta arma causa +1d6 <b>Dano bônus</b> sempre que for ativada. Isso pode ser ativado indefinidamente se o novo resultado do dado bônus for um 1, acionando Exagerado novamente.\nPropriedades:\n• PF (ignora <b>Armadura</b>)\n• Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "source": "IPS-N",
      "license": "Vlad",
      "license_level": 3
    },
    {
      "id": "mw_magnetic_cannon",
      "category": "weapon",
      "name": "Canhão Magnético",
      "mount": "Principal",
      "type": "Canhão",
      "damage": "1d3+1 Energético",
      "damage_val": "1d3+1",
      "damage_type": "Energético",
      "range": "Linha 8",
      "range_val": 8,
      "range_type": "Linha",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "<b>[No Acerto]</b> Todos os personagens dentro da área afetada devem obter sucesso em uma salvaguarda de Casco ou ser puxados <b>1d3+1 espaços</b> em sua direção, ou o mais perto possível.",
      "detail": "<b>[No Acerto]</b> Todos os personagens dentro da área afetada devem obter sucesso em uma salvaguarda de Casco ou ser puxados <b>1d3+1 espaços</b> em sua direção, ou o mais perto possível.",
      "source": "SSC",
      "license": "Black Witch",
      "license_level": 1
    },
    {
      "id": "mw_vulture_dmr",
      "category": "weapon",
      "name": "FAD Abutre",
      "mount": "Principal",
      "type": "Rifle",
      "damage": "1d6+1 Cinético",
      "damage_val": "1d6+1",
      "damage_type": "Cinético",
      "range": "Alcance 15",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Precisa",
        "Exagero",
        "Calor 1 (Próprio)"
      ],
      "tags_summary": "Precisa (+1d6 no ataque); Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1); Calor 1 (sofre 1 de calor ao disparar)",
      "terse": "Principal Rifle. Precisa (+1d6 no ataque) • Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1) • Calor 1 (sofre 1 de calor ao disparar)",
      "detail": "Principal Rifle. Precisa (+1d6 no ataque) • Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1) • Calor 1 (sofre 1 de calor ao disparar)\nPropriedades:\n• Precisa (+1d6 no ataque)\n• Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)\n• Calor 1 (sofre 1 de calor ao disparar)",
      "source": "SSC",
      "license": "Death’s Head",
      "license_level": 2
    },
    {
      "id": "mw_railgun",
      "category": "weapon",
      "name": "Canhão Elétrico",
      "mount": "Pesada",
      "type": "Rifle",
      "damage": "1d6+4 Cinético",
      "damage_val": "1d6+4",
      "damage_type": "Cinético",
      "range": "Linha 20",
      "range_val": 20,
      "range_type": "Linha",
      "sp": 0,
      "tags": [
        "Perfurante (PF)",
        "Artilharia",
        "Calor 2 (Próprio)"
      ],
      "tags_summary": "PF (ignora Armadura); Artilharia (só pode disparar antes de se mover no turno); Calor 2 (sofre 2 de calor ao disparar)",
      "terse": "Pesada Rifle. PF (ignora <b>Armadura</b>) • Artilharia (só pode disparar antes de se mover no turno) • Calor 2 (sofre 2 de calor ao disparar)",
      "detail": "Pesada Rifle. PF (ignora <b>Armadura</b>) • Artilharia (só pode disparar antes de se mover no turno) • Calor 2 (sofre 2 de calor ao disparar)\nPropriedades:\n• PF (ignora <b>Armadura</b>)\n• Artilharia (só pode disparar antes de se mover no turno)\n• Calor 2 (sofre 2 de calor ao disparar)",
      "source": "SSC",
      "license": "Death’s Head",
      "license_level": 3
    },
    {
      "id": "mw_veil_rifle",
      "category": "weapon",
      "name": "Fuzil do Véu",
      "mount": "Principal",
      "type": "Rifle",
      "damage": "1d3+1 Energético",
      "damage_val": "1d3+1",
      "damage_type": "Energético",
      "range": "Linha 10",
      "range_val": 10,
      "range_type": "Linha",
      "sp": 0,
      "tags": [
        "Precisa"
      ],
      "tags_summary": "Precisa (+1d6 no ataque)",
      "terse": "Esta arma não ataca personagens aliados pegos em sua área de efeito; em vez disso, ela os envolve em um campo de <b>Energia</b> coruscante que confunde os Sistemas de mira, dando-lhes <b>Cobertura Leve</b>. até o final de seu próximo turno.",
      "detail": "Esta arma não ataca personagens aliados pegos em sua área de efeito; em vez disso, ela os envolve em um campo de <b>Energia</b> coruscante que confunde os Sistemas de mira, dando-lhes <b>Cobertura Leve</b>. até o final de seu próximo turno.\nPropriedades:\n• Precisa (+1d6 no ataque)",
      "source": "SSC",
      "license": "Dusk Wing",
      "license_level": 1
    },
    {
      "id": "mw_burst_launcher",
      "category": "weapon",
      "name": "Lançador de Rajada",
      "mount": "Principal",
      "type": "Lançador",
      "damage": "1d3 Explosivo + 1 Calor",
      "damage_val": "1d3",
      "damage_type": "Explosivo",
      "range": "Alcance 15",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Precisa",
        "Arco"
      ],
      "tags_summary": "Precisa (+1d6 no ataque); Arco (ignora cobertura se tiver visão indireta)",
      "terse": "<b>[No Crítico]</b> O alvo fica <b>Impedido</b> até o final do próximo turno dele.\nTags: Precisa (+1d6 no ataque) • Arco (ignora cobertura se tiver visão indireta)",
      "detail": "<b>[No Crítico]</b> O alvo fica <b>Impedido</b> até o final do próximo turno dele.\nTags: Precisa (+1d6 no ataque) • Arco (ignora cobertura se tiver visão indireta)\nPropriedades:\n• Precisa (+1d6 no ataque)\n• Arco (ignora cobertura se tiver visão indireta)",
      "source": "SSC",
      "license": "Dusk Wing",
      "license_level": 2
    },
    {
      "id": "mw_rail_rifle",
      "category": "weapon",
      "name": "Fuzil Linear",
      "mount": "Principal",
      "type": "Rifle",
      "damage": "1d6+1 Cinético",
      "damage_val": "1d6+1",
      "damage_type": "Cinético",
      "range": "Linha 10",
      "range_val": 10,
      "range_type": "Linha",
      "sp": 0,
      "tags": [
        "Calor 1 (Próprio)"
      ],
      "tags_summary": "Calor 1 (sofre 1 de calor ao disparar)",
      "terse": "Principal Rifle. Calor 1 (sofre 1 de calor ao disparar)",
      "detail": "Principal Rifle. Calor 1 (sofre 1 de calor ao disparar)\nPropriedades:\n• Calor 1 (sofre 1 de calor ao disparar)",
      "source": "SSC",
      "license": "Metalmark",
      "license_level": 2
    },
    {
      "id": "mw_shock_knife",
      "category": "weapon",
      "name": "Faca de Choque",
      "mount": "Auxiliar",
      "type": "Corpo a Corpo",
      "damage": "1 Energético + 2 Queimadura",
      "damage_val": 1,
      "damage_type": "Energético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Arremessável 5",
        "Calor 1 (Próprio)"
      ],
      "tags_summary": "Arremesso 5 (pode ser arremessada até alcance 5); Calor 1 (sofre 1 de calor ao disparar)",
      "terse": "<b>Auxiliar</b> Corpo a Corpo. Arremesso 5 (pode ser arremessada até alcance 5) • Calor 1 (sofre 1 de calor ao disparar)",
      "detail": "<b>Auxiliar</b> Corpo a Corpo. Arremesso 5 (pode ser arremessada até alcance 5) • Calor 1 (sofre 1 de calor ao disparar)\nPropriedades:\n• Arremesso 5 (pode ser arremessada até alcance 5)\n• Calor 1 (sofre 1 de calor ao disparar)",
      "source": "SSC",
      "license": "Metalmark",
      "license_level": 2
    },
    {
      "id": "mw_sharanga_missiles",
      "category": "weapon",
      "name": "Mísseis Sharanga",
      "mount": "Principal",
      "type": "Lançador",
      "damage": "3 Explosivo",
      "damage_val": 3,
      "damage_type": "Explosivo",
      "range": "Alcance 15",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Arco"
      ],
      "tags_summary": "Arco (ignora cobertura se tiver visão indireta)",
      "terse": "Esta arma pode atacar dois alvos ao mesmo tempo.",
      "detail": "Esta arma pode atacar dois alvos ao mesmo tempo.\nPropriedades:\n• Arco (ignora cobertura se tiver visão indireta)",
      "source": "SSC",
      "license": "Monarch",
      "license_level": 1
    },
    {
      "id": "mw_gandiva_missiles",
      "category": "weapon",
      "name": "Mísseis Gandiva",
      "mount": "Pesada",
      "type": "Lançador",
      "damage": "1d6+3 Energético",
      "damage_val": "1d6+3",
      "damage_type": "Energético",
      "range": "Alcance 15",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 1,
      "tags": [
        "Precisa",
        "Guiada",
        "Inteligente"
      ],
      "tags_summary": "Precisa (+1d6 no ataque); Teleguiada (ignora cobertura e linha de visão); Inteligente (ataca a Defesa Tecnológica do alvo)",
      "terse": "Pesada Lançador. Precisa (+1d6 no ataque) • Teleguiada (ignora cobertura e linha de visão) • Inteligente (ataca a Defesa Tecnológica do alvo)",
      "detail": "Pesada Lançador. Precisa (+1d6 no ataque) • Teleguiada (ignora cobertura e linha de visão) • Inteligente (ataca a Defesa Tecnológica do alvo)\nPropriedades:\n• Precisa (+1d6 no ataque)\n• Teleguiada (ignora cobertura e linha de visão)\n• Inteligente (ataca a Defesa Tecnológica do alvo)",
      "source": "SSC",
      "license": "Monarch",
      "license_level": 2
    },
    {
      "id": "mw_pinaka_missiles",
      "category": "weapon",
      "name": "Mísseis Pinaka",
      "mount": "Superpesada",
      "type": "Lançador",
      "damage": "2d6 Explosivo",
      "damage_val": "2d6",
      "damage_type": "Explosivo",
      "range": "Alcance 20, Explosão 1",
      "range_val": 20,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Arco",
        "Calor 2 (Próprio)"
      ],
      "tags_summary": "Arco (ignora cobertura se tiver visão indireta); Calor 2 (sofre 2 de calor ao disparar)",
      "terse": "Ataques com esta arma criam até duas áreas de <b>Explosão</b> 1, que não podem se sobrepor.\nVocê também pode atrasar o impacto dos ataques feitos com esta arma. Escolha a(s) área(s) alvo, que se tornam visíveis para todos os personagens: os mísseis aterrissam no final da próxima rodada, após todos os personagens terem agido, e causam <b>3d6 de Dano</b> EXPLOSIVO em vez de 2d6, mas você fica <b>Lento</b> até o final de seu próximo turno.",
      "detail": "Ataques com esta arma criam até duas áreas de <b>Explosão</b> 1, que não podem se sobrepor.\nVocê também pode atrasar o impacto dos ataques feitos com esta arma. Escolha a(s) área(s) alvo, que se tornam visíveis para todos os personagens: os mísseis aterrissam no final da próxima rodada, após todos os personagens terem agido, e causam <b>3d6 de Dano</b> EXPLOSIVO em vez de 2d6, mas você fica <b>Lento</b> até o final de seu próximo turno.\nPropriedades:\n• Arco (ignora cobertura se tiver visão indireta)\n• Calor 2 (sofre 2 de calor ao disparar)",
      "source": "SSC",
      "license": "Monarch",
      "license_level": 3
    },
    {
      "id": "mw_fold_knife",
      "category": "weapon",
      "name": "Faca Dobrável",
      "mount": "Auxiliar",
      "type": "Corpo a Corpo",
      "damage": "1d3 Cinético",
      "damage_val": "1d3",
      "damage_type": "Cinético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Precisa"
      ],
      "tags_summary": "Precisa (+1d6 no ataque)",
      "terse": "<b>[No Crítico]</b> Você pode se teleportar <b>2 espaços</b> em qualquer direção após o ataque ser resolvido.\nTags: Precisa (+1d6 no ataque)",
      "detail": "<b>[No Crítico]</b> Você pode se teleportar <b>2 espaços</b> em qualquer direção após o ataque ser resolvido.\nTags: Precisa (+1d6 no ataque)\nPropriedades:\n• Precisa (+1d6 no ataque)",
      "source": "SSC",
      "license": "Mourning Cloak",
      "license_level": 1
    },
    {
      "id": "mw_vijaya_rockets",
      "category": "weapon",
      "name": "Foguetes Vijaya",
      "mount": "Auxiliar",
      "type": "Lançador",
      "damage": "1d3 Explosivo",
      "damage_val": "1d3",
      "damage_type": "Explosivo",
      "range": "Alcance 5",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Precisa"
      ],
      "tags_summary": "Precisa (+1d6 no ataque)",
      "terse": "<b>Auxiliar</b> Lançador. Precisa (+1d6 no ataque)",
      "detail": "<b>Auxiliar</b> Lançador. Precisa (+1d6 no ataque)\nPropriedades:\n• Precisa (+1d6 no ataque)",
      "source": "SSC",
      "license": "Mourning Cloak",
      "license_level": 1
    },
    {
      "id": "mw_variable_sword",
      "category": "weapon",
      "name": "Espada Variável",
      "mount": "Principal",
      "type": "Corpo a Corpo",
      "damage": "3 Cinético",
      "damage_val": 3,
      "damage_type": "Cinético",
      "range": "Ameaça 2",
      "range_val": 2,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Precisa"
      ],
      "tags_summary": "Precisa (+1d6 no ataque)",
      "terse": "<b>[No Crítico]</b> Cause +1d6 de dano bônus.\nTags: Precisa (+1d6 no ataque)",
      "detail": "<b>[No Crítico]</b> Cause +1d6 de dano bônus.\nTags: Precisa (+1d6 no ataque)\nPropriedades:\n• Precisa (+1d6 no ataque)",
      "source": "SSC",
      "license": "Mourning Cloak",
      "license_level": 3
    },
    {
      "id": "mw_oracle_lmg_i",
      "category": "weapon",
      "name": "ML-I Oráculo",
      "mount": "Auxiliar",
      "type": "Rifle",
      "damage": "1d3 Cinético",
      "damage_val": "1d3",
      "damage_type": "Cinético",
      "range": "Alcance 15",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 1,
      "tags": [
        "Precisa",
        "Arco"
      ],
      "tags_summary": "Precisa (+1d6 no ataque); Arco (ignora cobertura se tiver visão indireta)",
      "terse": "<b>Auxiliar</b> Rifle. Precisa (+1d6 no ataque) • Arco (ignora cobertura se tiver visão indireta)",
      "detail": "<b>Auxiliar</b> Rifle. Precisa (+1d6 no ataque) • Arco (ignora cobertura se tiver visão indireta)\nPropriedades:\n• Precisa (+1d6 no ataque)\n• Arco (ignora cobertura se tiver visão indireta)",
      "source": "SSC",
      "license": "Swallowtail",
      "license_level": 2
    },
    {
      "id": "mw_nanobot_whip",
      "category": "weapon",
      "name": "Chicote de Nanorrobôs",
      "mount": "Pesada",
      "type": "Corpo a Corpo",
      "damage": "2d6 Cinético",
      "damage_val": "2d6",
      "damage_type": "Cinético",
      "range": "Ameaça 3",
      "range_val": 3,
      "range_type": "Ameaça",
      "sp": 2,
      "tags": [
        "Inteligente"
      ],
      "tags_summary": "Inteligente (ataca a Defesa Tecnológica do alvo)",
      "terse": "<b>[No Crítico]</b> Puxe seu alvo para um espaço livre adjacente a você, ou o mais próximo possível.\nTags: Inteligente (ataca a Defesa Tecnológica do alvo)",
      "detail": "<b>[No Crítico]</b> Puxe seu alvo para um espaço livre adjacente a você, ou o mais próximo possível.\nTags: Inteligente (ataca a Defesa Tecnológica do alvo)\nPropriedades:\n• Inteligente (ataca a Defesa Tecnológica do alvo)",
      "source": "HORUS",
      "license": "Balor",
      "license_level": 3
    },
    {
      "id": "mw_swarm_hive_nanites",
      "category": "weapon",
      "name": "Nanitas de Enxame/Colmeia",
      "mount": "Principal",
      "type": "Nexo",
      "damage": "2 Cinético + 2 Queimadura",
      "damage_val": 2,
      "damage_type": "Cinético",
      "range": "Alcance 5",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Inteligente",
        "Guiada"
      ],
      "tags_summary": "Inteligente (ataca a Defesa Tecnológica do alvo); Teleguiada (ignora cobertura e linha de visão)",
      "terse": "Principal Nexo. Inteligente (ataca a Defesa Tecnológica do alvo) • Teleguiada (ignora cobertura e linha de visão)",
      "detail": "Principal Nexo. Inteligente (ataca a Defesa Tecnológica do alvo) • Teleguiada (ignora cobertura e linha de visão)\nPropriedades:\n• Inteligente (ataca a Defesa Tecnológica do alvo)\n• Teleguiada (ignora cobertura e linha de visão)",
      "source": "HORUS",
      "license": "Balor",
      "license_level": 3
    },
    {
      "id": "mw_autopod",
      "category": "weapon",
      "name": "Autocanhão",
      "mount": "Principal",
      "type": "Lançador",
      "damage": "3 Cinético",
      "damage_val": 3,
      "damage_type": "Cinético",
      "range": "Alcance 15",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 1,
      "tags": [
        "Guiada",
        "Único"
      ],
      "tags_summary": "Teleguiada (ignora cobertura e linha de visão); Única (máximo 1 instalada por mecha)",
      "terse": "Em vez de usar qualquer tipo de mecanismo de disparo, esta arma escaneia automaticamente os alvos travados, disparando discos afiados e giratórios após identificações bem-sucedidas. Você ganha a <b>Reação</b> Assalto Autônomo, que é a única maneira de atacar com o Autocanhão.\n<b>[<b>Reação</b>]</b> Assalto Autônomo: Você pode automaticamente acertar o alvo atacado com o Autocanhão.",
      "detail": "Em vez de usar qualquer tipo de mecanismo de disparo, esta arma escaneia automaticamente os alvos travados, disparando discos afiados e giratórios após identificações bem-sucedidas. Você ganha a <b>Reação</b> Assalto Autônomo, que é a única maneira de atacar com o Autocanhão.\n<b>[<b>Reação</b>]</b> Assalto Autônomo: Você pode automaticamente acertar o alvo atacado com o Autocanhão.\nPropriedades:\n• Teleguiada (ignora cobertura e linha de visão)\n• Única (máximo 1 instalada por mecha)",
      "source": "HORUS",
      "license": "Goblin",
      "license_level": 1
    },
    {
      "id": "mw_vorpal_gun",
      "category": "weapon",
      "name": "Arma Vorpal",
      "mount": "Principal",
      "type": "Canhão",
      "damage": "2d6 Cinético",
      "damage_val": "2d6",
      "damage_type": "Cinético",
      "range": "Alcance 5",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "Ganhe a <b>Reação</b> VAPT-VUPT, que é a única maneira que você pode atacar com essa arma.\n<b>[<b>Reação</b>]</b> VAPT-VUPT: Você pode fazer um ataque contra o personagem hostil com a Arma Vorpal.",
      "detail": "Ganhe a <b>Reação</b> VAPT-VUPT, que é a única maneira que você pode atacar com essa arma.\n<b>[<b>Reação</b>]</b> VAPT-VUPT: Você pode fazer um ataque contra o personagem hostil com a Arma Vorpal.",
      "source": "HORUS",
      "license": "Gorgon",
      "license_level": 3
    },
    {
      "id": "mw_ghoul_nexus",
      "category": "weapon",
      "name": "Nexo Carniçal",
      "mount": "Principal",
      "type": "Nexo",
      "damage": "1d3+2 Variável",
      "damage_val": "1d3+2",
      "damage_type": "Variável",
      "range": "Alcance 10",
      "range_val": 10,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Inteligente",
        "Definir Tipo de Dano"
      ],
      "tags_summary": "Inteligente (ataca a Defesa Tecnológica do alvo)",
      "terse": "<b>[Ao Atacar]</b> Escolha o tipo de dano desta arma.\nTags: Inteligente (ataca a Defesa Tecnológica do alvo)",
      "detail": "<b>[Ao Atacar]</b> Escolha o tipo de dano desta arma.\nTags: Inteligente (ataca a Defesa Tecnológica do alvo)\nPropriedades:\n• Inteligente (ataca a Defesa Tecnológica do alvo)",
      "source": "HORUS",
      "license": "Hydra",
      "license_level": 1
    },
    {
      "id": "mw_ghast_nexus",
      "category": "weapon",
      "name": "Nexo Lívido",
      "mount": "Pesada",
      "type": "Nexo",
      "damage": "1d6+3 Explosivo",
      "damage_val": "1d6+3",
      "damage_type": "Explosivo",
      "range": "Alcance 10",
      "range_val": 10,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Inteligente"
      ],
      "tags_summary": "Inteligente (ataca a Defesa Tecnológica do alvo)",
      "terse": "Esta arma pode ser usada para atacar normalmente ou posicionada como um Drone com o seguinte perfil:",
      "detail": "Esta arma pode ser usada para atacar normalmente ou posicionada como um Drone com o seguinte perfil:\nPropriedades:\n• Inteligente (ataca a Defesa Tecnológica do alvo)",
      "source": "HORUS",
      "license": "Hydra",
      "license_level": 2
    },
    {
      "id": "mw_annihilation_nexus",
      "category": "weapon",
      "name": "Nexo Aniquilação",
      "mount": "Superpesada",
      "type": "Nexo",
      "damage": "1d6+3 Energético",
      "damage_val": "1d6+3",
      "damage_type": "Energético",
      "range": "Emanação 2",
      "range_val": 2,
      "range_type": "Emanação",
      "sp": 0,
      "tags": [
        "Perfurante (PF)",
        "Inteligente"
      ],
      "tags_summary": "PF (ignora Armadura); Inteligente (ataca a Defesa Tecnológica do alvo)",
      "terse": "<b>[Ao Atacar]</b> Você pode fazer um segundo ataque com esta arma no início do seu próximo turno como um protocolo. Este ataque secundário não pode causar dano bônus e não desencadeia ataques secundários adicionais. Você pode centralizar o ataque desta arma em si mesmo ou em qualquer um dos seus Drones dentro do alcance dos Sensores.\n<b>[<b>Protocolo</b>]</b> Ataque Secundário do Nexo Aniquilação: Se você fez um ataque com o Nexo Aniquilação no seu último turno, você pode fazer um segundo ataque com ele no início deste turno como um protocolo.\nTags: PF (ignora <b>Armadura</b>) • Inteligente (ataca a Defesa Tecnológica do alvo)",
      "detail": "<b>[Ao Atacar]</b> Você pode fazer um segundo ataque com esta arma no início do seu próximo turno como um protocolo. Este ataque secundário não pode causar dano bônus e não desencadeia ataques secundários adicionais. Você pode centralizar o ataque desta arma em si mesmo ou em qualquer um dos seus Drones dentro do alcance dos Sensores.\n<b>[<b>Protocolo</b>]</b> Ataque Secundário do Nexo Aniquilação: Se você fez um ataque com o Nexo Aniquilação no seu último turno, você pode fazer um segundo ataque com ele no início deste turno como um protocolo.\nTags: PF (ignora <b>Armadura</b>) • Inteligente (ataca a Defesa Tecnológica do alvo)\nPropriedades:\n• PF (ignora <b>Armadura</b>)\n• Inteligente (ataca a Defesa Tecnológica do alvo)",
      "source": "HORUS",
      "license": "Hydra",
      "license_level": 3
    },
    {
      "id": "mw_catalyst_pistol",
      "category": "weapon",
      "name": "Pistola Catalisadora",
      "mount": "Auxiliar",
      "type": "Combate Próximo (CQB)",
      "damage": "1d3 Energético",
      "damage_val": "1d3",
      "damage_type": "Energético",
      "range": "Cone 3, Ameaça 3",
      "range_val": 3,
      "range_type": "Cone",
      "sp": 0,
      "tags": [
        "Calor 2 (Próprio)"
      ],
      "tags_summary": "Calor 2 (sofre 2 de calor ao disparar)",
      "terse": "<b>Auxiliar</b> Combate Próximo (CQB). Calor 2 (sofre 2 de calor ao disparar)",
      "detail": "<b>Auxiliar</b> Combate Próximo (CQB). Calor 2 (sofre 2 de calor ao disparar)\nPropriedades:\n• Calor 2 (sofre 2 de calor ao disparar)",
      "source": "HORUS",
      "license": "Manticore",
      "license_level": 1
    },
    {
      "id": "mw_arc_projector",
      "category": "weapon",
      "name": "Projetor de Arco",
      "mount": "Pesada",
      "type": "Combate Próximo (CQB)",
      "damage": "1d6+1 Energético",
      "damage_val": "1d6+1",
      "damage_type": "Energético",
      "range": "Alcance 5",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Calor 1 (Próprio)"
      ],
      "tags_summary": "Calor 1 (sofre 1 de calor ao disparar)",
      "terse": "<b>[No Acerto]</b> You may also make a secondary attack against a different character within range 3 of the first target. You can continue making secondary attacks on hits, as long as there are new, valid targets within range; however, each attack generates 1 heat, and secondary attacks can’t deal bonus damage. Characters can’t be hit more than once with the same firing of this weapon.\nTags: Calor 1 (sofre 1 de calor ao disparar)",
      "detail": "<b>[No Acerto]</b> You may also make a secondary attack against a different character within range 3 of the first target. You can continue making secondary attacks on hits, as long as there are new, valid targets within range; however, each attack generates 1 heat, and secondary attacks can’t deal bonus damage. Characters can’t be hit more than once with the same firing of this weapon.\nTags: Calor 1 (sofre 1 de calor ao disparar)\nPropriedades:\n• Calor 1 (sofre 1 de calor ao disparar)",
      "source": "HORUS",
      "license": "Manticore",
      "license_level": 2
    },
    {
      "id": "mw_smartgun",
      "category": "weapon",
      "name": "Smartgun",
      "mount": "Principal",
      "type": "Rifle",
      "damage": "4 Cinético",
      "damage_val": 4,
      "damage_type": "Cinético",
      "range": "Alcance 15",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 2,
      "tags": [
        "Precisa",
        "Guiada",
        "Inteligente"
      ],
      "tags_summary": "Precisa (+1d6 no ataque); Teleguiada (ignora cobertura e linha de visão); Inteligente (ataca a Defesa Tecnológica do alvo)",
      "terse": "Principal Rifle. Precisa (+1d6 no ataque) • Teleguiada (ignora cobertura e linha de visão) • Inteligente (ataca a Defesa Tecnológica do alvo)",
      "detail": "Principal Rifle. Precisa (+1d6 no ataque) • Teleguiada (ignora cobertura e linha de visão) • Inteligente (ataca a Defesa Tecnológica do alvo)\nPropriedades:\n• Precisa (+1d6 no ataque)\n• Teleguiada (ignora cobertura e linha de visão)\n• Inteligente (ataca a Defesa Tecnológica do alvo)",
      "source": "HORUS",
      "license": "Pegasus",
      "license_level": 1
    },
    {
      "id": "mw_mimic_gun",
      "category": "weapon",
      "name": "Pistola Mímica",
      "mount": "Pesada",
      "type": "Desconhecido",
      "damage": "??? Cinético",
      "damage_val": "???",
      "damage_type": "Cinético",
      "range": "Alcance ???",
      "range_val": "???",
      "range_type": "Alcance",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "Esta arma horripilante não possui forma básica; ela se contorce constantemente em diferentes formas, imitando as armas de outros combatentes. Ela conta como todos os tipos de armas à distância simultaneamente (ex: PAP, Fuzil, etc.), mas não pode aceitar Modificações ou se beneficiar de bônus de Núcleo, embora ainda se beneficie de talentos normalmente.\nNo início do combate, role 3d20 e anote os resultados em ordem: X, Y e Z. X é o seu <b>Alcance</b> base inicial (antes das modificações dos talentos). No início de cada um de seus turnos após o primeiro, a pistola mímica cicla para o próximo resultado, assumindo-o como seu <b>Alcance</b> base. Após Z, ela volta para X.\nA pistola mímica causa <b>Dano</b> Cinético igual a 1 + metade do seu <b>Alcance</b> base atual.\nVocê pode provocar a pistola mímica como uma <b>Ação Completa</b>, rolando um novo conjunto de 3d20.\n<b>[<b>Ação Completa</b>]</b> Provoke Mimic Gun: Role um novo conjunto de 3d20 para definir os valores da Pistola Mímica.",
      "detail": "Esta arma horripilante não possui forma básica; ela se contorce constantemente em diferentes formas, imitando as armas de outros combatentes. Ela conta como todos os tipos de armas à distância simultaneamente (ex: PAP, Fuzil, etc.), mas não pode aceitar Modificações ou se beneficiar de bônus de Núcleo, embora ainda se beneficie de talentos normalmente.\nNo início do combate, role 3d20 e anote os resultados em ordem: X, Y e Z. X é o seu <b>Alcance</b> base inicial (antes das modificações dos talentos). No início de cada um de seus turnos após o primeiro, a pistola mímica cicla para o próximo resultado, assumindo-o como seu <b>Alcance</b> base. Após Z, ela volta para X.\nA pistola mímica causa <b>Dano</b> Cinético igual a 1 + metade do seu <b>Alcance</b> base atual.\nVocê pode provocar a pistola mímica como uma <b>Ação Completa</b>, rolando um novo conjunto de 3d20.\n<b>[<b>Ação Completa</b>]</b> Provoke Mimic Gun: Role um novo conjunto de 3d20 para definir os valores da Pistola Mímica.",
      "source": "HORUS",
      "license": "Pegasus",
      "license_level": 2
    },
    {
      "id": "mw_autogun",
      "category": "weapon",
      "name": "Autoarma",
      "mount": "Principal",
      "type": "Canhão",
      "damage": "3 Cinético",
      "damage_val": 3,
      "damage_type": "Cinético",
      "range": "Alcance 15",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 1,
      "tags": [],
      "tags_summary": "",
      "terse": "Esta arma não pode fazer ataques normais. Em vez disso, você pode atacar com ela como uma <b>Ação Livre</b> no final do seu turno. Ela não se beneficia nem aciona seus talentos.\n<b>[<b>Ação Livre</b>]</b> Disparar Autoarma: Esta arma não pode fazer ataques normais. Em vez disso, você pode atacar com ela como uma <b>Ação Livre</b> ao final de qualquer movimento seu, desde que o alvo esteja dentro do <b>Alcance</b> e da linha de visão.",
      "detail": "Esta arma não pode fazer ataques normais. Em vez disso, você pode atacar com ela como uma <b>Ação Livre</b> no final do seu turno. Ela não se beneficia nem aciona seus talentos.\n<b>[<b>Ação Livre</b>]</b> Disparar Autoarma: Esta arma não pode fazer ataques normais. Em vez disso, você pode atacar com ela como uma <b>Ação Livre</b> ao final de qualquer movimento seu, desde que o alvo esteja dentro do <b>Alcance</b> e da linha de visão.",
      "source": "HORUS",
      "license": "Pegasus",
      "license_level": 3
    },
    {
      "id": "mw_siege_cannon",
      "category": "weapon",
      "name": "Canhão de Cerco",
      "mount": "Superpesada",
      "type": "Canhão",
      "damage": "-",
      "damage_val": "-",
      "damage_type": "-",
      "range": "-",
      "range_val": "-",
      "range_type": "-",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "O canhão de cerco é a peça de artilharia quintessencial: um canhão obus alimentado por um sistema automatizado de <b>recarga</b>. Tipicamente encaixado em mechas de longa distância utilizados em papéis de artilharia ou suporte de esquadrão, canhões de cerco são tão capazes de fogo direto quanto indireto, como a situação demandar com as opções variáveis de munição.",
      "detail": "O canhão de cerco é a peça de artilharia quintessencial: um canhão obus alimentado por um sistema automatizado de <b>recarga</b>. Tipicamente encaixado em mechas de longa distância utilizados em papéis de artilharia ou suporte de esquadrão, canhões de cerco são tão capazes de fogo direto quanto indireto, como a situação demandar com as opções variáveis de munição.",
      "source": "HA",
      "license": "Barbarossa",
      "license_level": 3
    },
    {
      "id": "mw_krakatoa_thermobaric_flamethrower",
      "category": "weapon",
      "name": "Lança-Chamas Termobárico Krakatoa",
      "mount": "Pesada",
      "type": "Combate Próximo (CQB)",
      "damage": "1 Energético + 4 Queimadura",
      "damage_val": 1,
      "damage_type": "Energético",
      "range": "Cone 5",
      "range_val": 5,
      "range_type": "Cone",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "Entre os ambientes arbóreos densos de Hercynia, as táticas de enxame dos Egregorianos e a performance inefetiva de munição de balote, a necessidade de armas de efeito amplo era aparente. A SMG rapidamente desenvolveu o Krakatoa — um lança-chamas termobárico — e o distribuiu para afiliados. O Krakatoa foi rapidamente adotado pelas Forças Expedicionárias dos Fuzileiros da União, vendo uso intenso nas profundezas das florestas continentais hercynianas graças à sua estabilidade, confiabilidade e potencial para retardar movimento. Posteriormente retrabalhado e adotado pela Arsenal após a resolução da Crise Hercyniana, o Krakatoa tornou-se uma ferramenta popular para a criação de zonas de negação de acesso.",
      "detail": "Entre os ambientes arbóreos densos de Hercynia, as táticas de enxame dos Egregorianos e a performance inefetiva de munição de balote, a necessidade de armas de efeito amplo era aparente. A SMG rapidamente desenvolveu o Krakatoa — um lança-chamas termobárico — e o distribuiu para afiliados. O Krakatoa foi rapidamente adotado pelas Forças Expedicionárias dos Fuzileiros da União, vendo uso intenso nas profundezas das florestas continentais hercynianas graças à sua estabilidade, confiabilidade e potencial para retardar movimento. Posteriormente retrabalhado e adotado pela Arsenal após a resolução da Crise Hercyniana, o Krakatoa tornou-se uma ferramenta popular para a criação de zonas de negação de acesso.",
      "source": "HA",
      "license": "Genghis",
      "license_level": 1
    },
    {
      "id": "mw_plasma_thrower",
      "category": "weapon",
      "name": "Lança-Plasma",
      "mount": "Superpesada",
      "type": "Combate Próximo (CQB)",
      "damage": "1d6+2 Energético + 6 Queimadura",
      "damage_val": "1d6+2",
      "damage_type": "Energético",
      "range": "Cone 7, Linha 10",
      "range_val": 7,
      "range_type": "Cone",
      "sp": 0,
      "tags": [
        "Calor 4 (Próprio)"
      ],
      "tags_summary": "Calor 4 (sofre 4 de calor ao disparar)",
      "terse": "Pode ser disparado como <b>Cone 7</b> ou <b>Linha 10</b>\n<b>[Ao Atacar]</b> Chamas incandescentes continuam queimando em 3 espaços livres de sua escolha dentro da área afetada, durando até o final da cena. Quando os personagens começam seu turno em um desses espaços ou entram em um pela primeira vez em um turno, eles sofrem 1d6 de dano de energia.",
      "detail": "Pode ser disparado como <b>Cone 7</b> ou <b>Linha 10</b>\n<b>[Ao Atacar]</b> Chamas incandescentes continuam queimando em 3 espaços livres de sua escolha dentro da área afetada, durando até o final da cena. Quando os personagens começam seu turno em um desses espaços ou entram em um pela primeira vez em um turno, eles sofrem 1d6 de dano de energia.\nPropriedades:\n• Calor 4 (sofre 4 de calor ao disparar)",
      "source": "HA",
      "license": "Genghis",
      "license_level": 3
    },
    {
      "id": "mw_stub_cannon",
      "category": "weapon",
      "name": "Canhão Toco",
      "mount": "Auxiliar",
      "type": "Canhão",
      "damage": "3 Explosivo",
      "damage_val": 3,
      "damage_type": "Explosivo",
      "range": "Alcance 5",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Limitado 6",
        "Repulsão 1"
      ],
      "tags_summary": "Limitada 6 (6 usos por missão); Repulsão 1 (empurra o alvo 1 espaços)",
      "terse": "<b>Auxiliar</b> Canhão. Limitada 6 (6 usos por missão) • Repulsão 1 (empurra o alvo 1 espaços)",
      "detail": "<b>Auxiliar</b> Canhão. Limitada 6 (6 usos por missão) • Repulsão 1 (empurra o alvo 1 espaços)\nPropriedades:\n• Limitada 6 (6 usos por missão)\n• Repulsão 1 (empurra o alvo 1 espaços)",
      "source": "HA",
      "license": "Iskander",
      "license_level": 1
    },
    {
      "id": "mw_gravity_gun",
      "category": "weapon",
      "name": "Arma Gravitacional",
      "mount": "Pesada",
      "type": "Rifle",
      "damage": "-",
      "damage_val": "-",
      "damage_type": "-",
      "range": "Alcance 8, Explosão 3",
      "range_val": 8,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "<b>[Ao Atacar]</b> Os personagens dentro da área afetada devem obter sucesso em uma salvaguarda de Casco ou sofrer 1d6 de dano de energia e ser puxados o mais próximo possível do centro da explosão. Esta arma não pode ser modificada ou beneficiar de bônus principais.",
      "detail": "<b>[Ao Atacar]</b> Os personagens dentro da área afetada devem obter sucesso em uma salvaguarda de Casco ou sofrer 1d6 de dano de energia e ser puxados o mais próximo possível do centro da explosão. Esta arma não pode ser modificada ou beneficiar de bônus principais.",
      "source": "HA",
      "license": "Iskander",
      "license_level": 2
    },
    {
      "id": "mw_displacer",
      "category": "weapon",
      "name": "Deslocador",
      "mount": "Principal",
      "type": "Rifle",
      "damage": "10 Energético",
      "damage_val": 10,
      "damage_type": "Energético",
      "range": "Alcance 10, Explosão 1",
      "range_val": 10,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Perfurante (PF)",
        "Recarga",
        "Único",
        "Calor 10 (Próprio)"
      ],
      "tags_summary": "PF (ignora Armadura); Carregamento (precisa de ação rápida ou estabilizar para recarregar); Única (máximo 1 instalada por mecha); Calor 10 (sofre 10 de calor ao disparar)",
      "terse": "Principal Rifle. PF (ignora <b>Armadura</b>) • Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar) • Única (máximo 1 instalada por mecha) • Calor 10 (sofre 10 de calor ao disparar)",
      "detail": "Principal Rifle. PF (ignora <b>Armadura</b>) • Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar) • Única (máximo 1 instalada por mecha) • Calor 10 (sofre 10 de calor ao disparar)\nPropriedades:\n• PF (ignora <b>Armadura</b>)\n• Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)\n• Única (máximo 1 instalada por mecha)\n• Calor 10 (sofre 10 de calor ao disparar)",
      "source": "HA",
      "license": "Napoleon",
      "license_level": 3
    },
    {
      "id": "mw_shatterhead_colony_missiles",
      "category": "weapon",
      "name": "Mísseis de Colônia Rompe-Cabeça",
      "mount": "Principal",
      "type": "Lançador",
      "damage": "1d3+1 Energético",
      "damage_val": "1d3+1",
      "damage_type": "Energético",
      "range": "Alcance 15",
      "range_val": 15,
      "range_type": "Alcance",
      "sp": 1,
      "tags": [
        "Arco"
      ],
      "tags_summary": "Arco (ignora cobertura se tiver visão indireta)",
      "terse": "A rolagem de ataque final desta arma nunca pode ser afetada por Dificuldade.",
      "detail": "A rolagem de ataque final desta arma nunca pode ser afetada por Dificuldade.\nPropriedades:\n• Arco (ignora cobertura se tiver visão indireta)",
      "source": "HA",
      "license": "Saladin",
      "license_level": 1
    },
    {
      "id": "mw_sol_pattern_laser_rifle",
      "category": "weapon",
      "name": "Fuzil a Laser Modelo SOL",
      "mount": "Principal",
      "type": "Rifle",
      "damage": "1d6 Energético + 1 Queimadura",
      "damage_val": "1d6",
      "damage_type": "Energético",
      "range": "Alcance 8",
      "range_val": 8,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Calor 1 (Próprio)"
      ],
      "tags_summary": "Calor 1 (sofre 1 de calor ao disparar)",
      "terse": "Principal Rifle. Calor 1 (sofre 1 de calor ao disparar)",
      "detail": "Principal Rifle. Calor 1 (sofre 1 de calor ao disparar)\nPropriedades:\n• Calor 1 (sofre 1 de calor ao disparar)",
      "source": "HA",
      "license": "Sherman",
      "license_level": 1
    },
    {
      "id": "mw_andromeda_pattern_heavy_laser_rifle",
      "category": "weapon",
      "name": "Fuzil a Laser Pesado Modelo ANDRÔMEDA",
      "mount": "Pesada",
      "type": "Canhão",
      "damage": "2d6 Energético + 3 Queimadura",
      "damage_val": "2d6",
      "damage_type": "Energético",
      "range": "Alcance 12",
      "range_val": 12,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Calor 3 (Próprio)"
      ],
      "tags_summary": "Calor 3 (sofre 3 de calor ao disparar)",
      "terse": "Pesada Canhão. Calor 3 (sofre 3 de calor ao disparar)",
      "detail": "Pesada Canhão. Calor 3 (sofre 3 de calor ao disparar)\nPropriedades:\n• Calor 3 (sofre 3 de calor ao disparar)",
      "source": "HA",
      "license": "Sherman",
      "license_level": 2
    },
    {
      "id": "mw_tachyon_lance",
      "category": "weapon",
      "name": "Lança de Táquions",
      "mount": "Superpesada",
      "type": "Canhão",
      "damage": "2d6 Energético + 8 Queimadura",
      "damage_val": "2d6",
      "damage_type": "Energético",
      "range": "Alcance 20",
      "range_val": 20,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Artilharia",
        "Calor 4 (Próprio)"
      ],
      "tags_summary": "Artilharia (só pode disparar antes de se mover no turno); Calor 4 (sofre 4 de calor ao disparar)",
      "terse": "<b>[Ao Atacar]</b> Se você estiver na <b>Zona de Perigo</b>, crie um <b>Cone de exaustão</b> de plasma incandescente de <b>3 espaços</b> na direção oposta ao ataque. Os personagens dentro da área afetada devem obter sucesso em uma <b>salvaguarda de Engenharia</b> ou sofrer <b>4 de queimadura</b> e <b>2 de calor</b>. Até o início do seu próximo turno, a área afetada fornece <b>Cobertura Leve</b>.\n<b>[None]</b> Tachyon Lance Backblast: Crie um <b>Cone de sopro</b> de plasma em combustão de <b>3 espaços</b> na direção oposta ao ataque. Os personagens dentro da área afetada devem obter sucesso em uma <b>salvaguarda de Engenharia</b> ou sofrer <b>4 de queimadura</b> e <b>2 de calor</b>. Até o início do seu próximo turno, a área afetada fornece <b>Cobertura Leve</b>.\nTags: Artilharia (só pode disparar antes de se mover no turno) • Calor 4 (sofre 4 de calor ao disparar)",
      "detail": "<b>[Ao Atacar]</b> Se você estiver na <b>Zona de Perigo</b>, crie um <b>Cone de exaustão</b> de plasma incandescente de <b>3 espaços</b> na direção oposta ao ataque. Os personagens dentro da área afetada devem obter sucesso em uma <b>salvaguarda de Engenharia</b> ou sofrer <b>4 de queimadura</b> e <b>2 de calor</b>. Até o início do seu próximo turno, a área afetada fornece <b>Cobertura Leve</b>.\n<b>[None]</b> Tachyon Lance Backblast: Crie um <b>Cone de sopro</b> de plasma em combustão de <b>3 espaços</b> na direção oposta ao ataque. Os personagens dentro da área afetada devem obter sucesso em uma <b>salvaguarda de Engenharia</b> ou sofrer <b>4 de queimadura</b> e <b>2 de calor</b>. Até o início do seu próximo turno, a área afetada fornece <b>Cobertura Leve</b>.\nTags: Artilharia (só pode disparar antes de se mover no turno) • Calor 4 (sofre 4 de calor ao disparar)\nPropriedades:\n• Artilharia (só pode disparar antes de se mover no turno)\n• Calor 4 (sofre 4 de calor ao disparar)",
      "source": "HA",
      "license": "Sherman",
      "license_level": 3
    },
    {
      "id": "mw_annihilator",
      "category": "weapon",
      "name": "Aniquilador",
      "mount": "Principal",
      "type": "Combate Próximo (CQB)",
      "damage": "1d3+2 Energético",
      "damage_val": "1d3+2",
      "damage_type": "Energético",
      "range": "Alcance 5, Ameaça 3",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Perfurante (PF)",
        "Calor 2 (Próprio)"
      ],
      "tags_summary": "PF (ignora Armadura); Calor 2 (sofre 2 de calor ao disparar)",
      "terse": "<b>[No Acerto]</b> Make a secondary attack against all characters within burst 1 of the target. These attacks can’t deal bonus damage, and don’t trigger the Annihilator’s heat cost or secondary attacks.\nTags: PF (ignora <b>Armadura</b>) • Calor 2 (sofre 2 de calor ao disparar)",
      "detail": "<b>[No Acerto]</b> Make a secondary attack against all characters within burst 1 of the target. These attacks can’t deal bonus damage, and don’t trigger the Annihilator’s heat cost or secondary attacks.\nTags: PF (ignora <b>Armadura</b>) • Calor 2 (sofre 2 de calor ao disparar)\nPropriedades:\n• PF (ignora <b>Armadura</b>)\n• Calor 2 (sofre 2 de calor ao disparar)",
      "source": "HA",
      "license": "Tokugawa",
      "license_level": 1
    },
    {
      "id": "mw_torch",
      "category": "weapon",
      "name": "Tocha",
      "mount": "Principal",
      "type": "Corpo a Corpo",
      "damage": "1d6 Energético + 3 Queimadura",
      "damage_val": "1d6",
      "damage_type": "Energético",
      "range": "Ameaça 1",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Exagero",
        "Calor 2 (Próprio)"
      ],
      "tags_summary": "Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1); Calor 2 (sofre 2 de calor ao disparar)",
      "terse": "Principal Corpo a Corpo. Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1) • Calor 2 (sofre 2 de calor ao disparar)",
      "detail": "Principal Corpo a Corpo. Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1) • Calor 2 (sofre 2 de calor ao disparar)\nPropriedades:\n• Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)\n• Calor 2 (sofre 2 de calor ao disparar)",
      "source": "HA",
      "license": "Tokugawa",
      "license_level": 2
    },
    {
      "id": "mw_fuel_rod_gun",
      "category": "weapon",
      "name": "Arma de Barra de Combustível",
      "mount": "Principal",
      "type": "Combate Próximo (CQB)",
      "damage": "1d3+2 Energético",
      "damage_val": "1d3+2",
      "damage_type": "Energético",
      "range": "Alcance 3, Ameaça 3",
      "range_val": 3,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Limitado 3",
        "Único"
      ],
      "tags_summary": "Limitada 3 (3 usos por missão); Única (máximo 1 instalada por mecha)",
      "terse": "<b>[Ao Atacar]</b> Limpar 4 de calor.\nTags: Limitada 3 (3 usos por missão) • Única (máximo 1 instalada por mecha)",
      "detail": "<b>[Ao Atacar]</b> Limpar 4 de calor.\nTags: Limitada 3 (3 usos por missão) • Única (máximo 1 instalada por mecha)\nPropriedades:\n• Limitada 3 (3 usos por missão)\n• Única (máximo 1 instalada por mecha)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_prototype_1",
      "category": "weapon",
      "name": "Arma Protótipo I",
      "mount": "Principal",
      "type": "Especial",
      "damage": "1d6+2 Variável",
      "damage_val": "1d6+2",
      "damage_type": "Variável",
      "range": "Ameaça 1, Alcance 10",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Limitado 1d6+2",
        "Exagero",
        "Definir Usos Máximos",
        "Definir Tipo de Dano"
      ],
      "tags_summary": "Limitada 1d6+2 (1d6+2 usos por missão); Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "terse": "Esta arma é um protótipo experimental, personalizado de acordo com seus requisitos específicos.\nQuando você a instala, ou durante um <b>Reparo Completo</b>, você pode escolher um novo tipo de arma, tipo de <b>Dano</b> e <b>Ameaça</b> 1 (corpo a corpo) ou <b>Alcance 10</b> (todos os outros tipos). Adicionalmente, cada vez que você realizar um <b>Reparo Completo</b>, role novamente 1d6+2 para determinar os usos Limitados desta arma.",
      "detail": "Esta arma é um protótipo experimental, personalizado de acordo com seus requisitos específicos.\nQuando você a instala, ou durante um <b>Reparo Completo</b>, você pode escolher um novo tipo de arma, tipo de <b>Dano</b> e <b>Ameaça</b> 1 (corpo a corpo) ou <b>Alcance 10</b> (todos os outros tipos). Adicionalmente, cada vez que você realizar um <b>Reparo Completo</b>, role novamente 1d6+2 para determinar os usos Limitados desta arma.\nPropriedades:\n• Limitada 1d6+2 (1d6+2 usos por missão)\n• Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_prototype_2",
      "category": "weapon",
      "name": "Arma Protótipo II",
      "mount": "Principal",
      "type": "Especial",
      "damage": "1d6+2 Variável",
      "damage_val": "1d6+2",
      "damage_type": "Variável",
      "range": "Ameaça 1, Alcance 10",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Limitado 1d6+2",
        "Exagero",
        "Definir Usos Máximos",
        "Definir Tipo de Dano"
      ],
      "tags_summary": "Limitada 1d6+2 (1d6+2 usos por missão); Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "terse": "Esta arma é um protótipo experimental, personalizado de acordo com seus requisitos específicos.\nQuando você a instala, ou durante um <b>Reparo Completo</b>, você pode escolher um novo tipo de arma, tipo de <b>Dano</b> e <b>Ameaça</b> 1 (corpo a corpo) ou <b>Alcance 10</b> (todos os outros tipos). Adicionalmente, cada vez que você realizar um <b>Reparo Completo</b>, role novamente 1d6+2 para determinar os usos Limitados desta arma e escolha dois:<ul><ul><li>Ópticas Ajustadas: Sua arma protótipo sempre ganha <b>+1 de Precisão</b> nos ataques.</li></ul><ul><li>Computador Ajustado: Sua arma protótipo é <b>Inteligente<b> .</li></ul><ul><li><b>Blindagem</b> de reator removida: Cada vez que você atacar com sua arma protótipo, você pode escolher – ao custo de 2 de <b>Calor</b> – atacar com uma das seguintes opções, dependendo do seu tipo de arma:<ul><li>Arma à distância: <b>Cone</b> 3, <b>Linha</b> 5 ou <b>[<b>Explosão</b> 1, <b>Alcance 10</b>]</b>.</li></ul><ul><li>Arma corpo a corpo: <b>Emanação</b> 1.</li></ul></li></ul></ul>",
      "detail": "Esta arma é um protótipo experimental, personalizado de acordo com seus requisitos específicos.\nQuando você a instala, ou durante um <b>Reparo Completo</b>, você pode escolher um novo tipo de arma, tipo de <b>Dano</b> e <b>Ameaça</b> 1 (corpo a corpo) ou <b>Alcance 10</b> (todos os outros tipos). Adicionalmente, cada vez que você realizar um <b>Reparo Completo</b>, role novamente 1d6+2 para determinar os usos Limitados desta arma e escolha dois:<ul><ul><li>Ópticas Ajustadas: Sua arma protótipo sempre ganha <b>+1 de Precisão</b> nos ataques.</li></ul><ul><li>Computador Ajustado: Sua arma protótipo é <b>Inteligente<b> .</li></ul><ul><li><b>Blindagem</b> de reator removida: Cada vez que você atacar com sua arma protótipo, você pode escolher – ao custo de 2 de <b>Calor</b> – atacar com uma das seguintes opções, dependendo do seu tipo de arma:<ul><li>Arma à distância: <b>Cone</b> 3, <b>Linha</b> 5 ou <b>[<b>Explosão</b> 1, <b>Alcance 10</b>]</b>.</li></ul><ul><li>Arma corpo a corpo: <b>Emanação</b> 1.</li></ul></li></ul></ul>\nPropriedades:\n• Limitada 1d6+2 (1d6+2 usos por missão)\n• Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_prototype_3",
      "category": "weapon",
      "name": "Arma Protótipo III",
      "mount": "Principal",
      "type": "Especial",
      "damage": "1d6+4 Variável",
      "damage_val": "1d6+4",
      "damage_type": "Variável",
      "range": "Ameaça 1, Alcance 10",
      "range_val": 1,
      "range_type": "Ameaça",
      "sp": 0,
      "tags": [
        "Limitado 2d6",
        "Exagero",
        "Definir Usos Máximos",
        "Definir Tipo de Dano"
      ],
      "tags_summary": "Limitada 2d6 (2d6 usos por missão); Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "terse": "Esta arma é um protótipo experimental, personalizado de acordo com seus requisitos específicos.\nQuando você a instala, ou durante um <b>Reparo Completo</b>, você pode escolher um novo tipo de arma, tipo de <b>Dano</b> e <b>Ameaça</b> 1 (corpo a corpo) ou <b>Alcance 10</b> (todos os outros tipos). Adicionalmente, cada vez que você realizar um <b>Reparo Completo</b>, role novamente 2d6 para determinar os usos Limitados desta arma e escolha dois:<ul><ul><li>Ópticas Ajustadas: Sua arma protótipo sempre ganha <b>+1 de Precisão</b> nos ataques.</li></ul><ul><li>Computador Ajustado: Sua arma protótipo é <b>Inteligente<b> .</li></ul><ul><li><b>Blindagem</b> de reator removida: Cada vez que você atacar com sua arma protótipo, você pode escolher – ao custo de 2 de <b>Calor</b> – atacar com uma das seguintes opções, dependendo do seu tipo de arma:<ul><li>Arma à distância: <b>Cone</b> 3, <b>Linha</b> 5 ou <b>[<b>Explosão</b> 1, <b>Alcance 10</b>]</b>.</li></ul><ul><li>Arma corpo a corpo: <b>Emanação</b> 1.</li></ul></li></ul></ul>",
      "detail": "Esta arma é um protótipo experimental, personalizado de acordo com seus requisitos específicos.\nQuando você a instala, ou durante um <b>Reparo Completo</b>, você pode escolher um novo tipo de arma, tipo de <b>Dano</b> e <b>Ameaça</b> 1 (corpo a corpo) ou <b>Alcance 10</b> (todos os outros tipos). Adicionalmente, cada vez que você realizar um <b>Reparo Completo</b>, role novamente 2d6 para determinar os usos Limitados desta arma e escolha dois:<ul><ul><li>Ópticas Ajustadas: Sua arma protótipo sempre ganha <b>+1 de Precisão</b> nos ataques.</li></ul><ul><li>Computador Ajustado: Sua arma protótipo é <b>Inteligente<b> .</li></ul><ul><li><b>Blindagem</b> de reator removida: Cada vez que você atacar com sua arma protótipo, você pode escolher – ao custo de 2 de <b>Calor</b> – atacar com uma das seguintes opções, dependendo do seu tipo de arma:<ul><li>Arma à distância: <b>Cone</b> 3, <b>Linha</b> 5 ou <b>[<b>Explosão</b> 1, <b>Alcance 10</b>]</b>.</li></ul><ul><li>Arma corpo a corpo: <b>Emanação</b> 1.</li></ul></li></ul></ul>\nPropriedades:\n• Limitada 2d6 (2d6 usos por missão)\n• Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_lancaster_integrated",
      "category": "weapon",
      "name": "Drone de Aderência",
      "mount": "Principal",
      "type": "Lançador",
      "damage": "-",
      "damage_val": "-",
      "damage_type": "-",
      "range": "Alcance 8",
      "range_val": 8,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "Esta arma não pode realizar ataques normais. Em vez disso, escolha um mecha aliado que esteja na linha de visão e dentro do <b>Alcance</b> e faça um ataque à distância contra <b>Evasão</b> 8. Em um acerto, você ou seu alvo podem gastar 1 de Reparo para restaurar metade dos PV do seu alvo.",
      "detail": "Esta arma não pode realizar ataques normais. Em vez disso, escolha um mecha aliado que esteja na linha de visão e dentro do <b>Alcance</b> e faça um ataque à distância contra <b>Evasão</b> 8. Em um acerto, você ou seu alvo podem gastar 1 de Reparo para restaurar metade dos PV do seu alvo.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_raleigh_integrated",
      "category": "weapon",
      "name": "M35 Mjolnir",
      "mount": "Principal",
      "type": "Combate Próximo (CQB)",
      "damage": "4 Cinético",
      "damage_val": 4,
      "damage_type": "Cinético",
      "range": "Alcance 5, Ameaça 3",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "1/rodada, quando você <b>Recarregar</b> qualquer arma, esta arma pode ser disparada como uma ação gratuita.",
      "detail": "1/rodada, quando você <b>Recarregar</b> qualquer arma, esta arma pode ser disparada como uma ação gratuita.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_barbarossa_integrated",
      "category": "weapon",
      "name": "Canhão do Apocalipse",
      "mount": "Classe Nave",
      "type": "Arma de Carretel",
      "damage": "-",
      "damage_val": "-",
      "damage_type": "-",
      "range": "-",
      "range_val": "-",
      "range_type": "-",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "O Canhão do Apocalipse deve ser carregado antes de poder ser disparado, usando o Poder de Núcleo 'Carregar Canhão'.\nEsta arma tem perfis diferentes determinados pelo valor atual do DADO DE APOCALIPSE quando você a dispara. Cada perfil substitui o anterior. O Canhão do Apocalipse não pode ser disparado contra alvos a até <b>Alcance 5</b>.\nDepois de um ataque com o Canhão do Apocalipse, o Dado de Apocalipse reinicia para 4.\n<b>[<b>Ação Completa</b>]</b> Disparar Canhão do Apocalipse: Se o valor do Dado de Apocalipse for 1 a 3, você pode atacar no seu turno com o Canhão do Apocalipse como uma <b>Ação Completa</b>, mas não pode se mover nem usar nenhuma ação no mesmo turno.",
      "detail": "O Canhão do Apocalipse deve ser carregado antes de poder ser disparado, usando o Poder de Núcleo 'Carregar Canhão'.\nEsta arma tem perfis diferentes determinados pelo valor atual do DADO DE APOCALIPSE quando você a dispara. Cada perfil substitui o anterior. O Canhão do Apocalipse não pode ser disparado contra alvos a até <b>Alcance 5</b>.\nDepois de um ataque com o Canhão do Apocalipse, o Dado de Apocalipse reinicia para 4.\n<b>[<b>Ação Completa</b>]</b> Disparar Canhão do Apocalipse: Se o valor do Dado de Apocalipse for 1 a 3, você pode atacar no seu turno com o Canhão do Apocalipse como uma <b>Ação Completa</b>, mas não pode se mover nem usar nenhuma ação no mesmo turno.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_sherman_integrated",
      "category": "weapon",
      "name": "ZF4 Núcleo-SÓLIDO",
      "mount": "Principal",
      "type": "Canhão",
      "damage": "-",
      "damage_val": "-",
      "damage_type": "-",
      "range": "-",
      "range_val": "-",
      "range_type": "-",
      "sp": 0,
      "tags": [
        "Artilharia"
      ],
      "tags_summary": "Artilharia (só pode disparar antes de se mover no turno)",
      "terse": "Principal Canhão. Artilharia (só pode disparar antes de se mover no turno)",
      "detail": "Principal Canhão. Artilharia (só pode disparar antes de se mover no turno)\nPropriedades:\n• Artilharia (só pode disparar antes de se mover no turno)",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "mw_kraul_rifle",
      "category": "weapon",
      "name": "Fuzil Kraul",
      "mount": "Principal",
      "type": "Combate Próximo (CQB)",
      "damage": "1d6 Cinético",
      "damage_val": "1d6",
      "damage_type": "Cinético",
      "range": "Alcance 8",
      "range_val": 8,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Imprecisa"
      ],
      "tags_summary": "Imprecisa (+1d6 de dificuldade)",
      "terse": "<b>[No Acerto]</b> Seu alvo é empalado pelo projétil em forma de arpão desta arma. A qualquer momento após o alvo realizar qualquer ação ou movimento durante o próximo turno dele, você pode recolher a linha e <b>Impulsionar</b> como uma <b>Reação</b>, movendo-se em direção ao alvo pela rota mais direta possível. Ele deve então obter sucesso em um teste de <b>Casco</b> ou será derrubado, ficando <b>Prostrado</b>; com um sucesso ou fracasso, esse efeito termina. A linha se rompe se o alvo se teletransportar.\nTags: Imprecisa (+1d6 de dificuldade)",
      "detail": "<b>[No Acerto]</b> Seu alvo é empalado pelo projétil em forma de arpão desta arma. A qualquer momento após o alvo realizar qualquer ação ou movimento durante o próximo turno dele, você pode recolher a linha e <b>Impulsionar</b> como uma <b>Reação</b>, movendo-se em direção ao alvo pela rota mais direta possível. Ele deve então obter sucesso em um teste de <b>Casco</b> ou será derrubado, ficando <b>Prostrado</b>; com um sucesso ou fracasso, esse efeito termina. A linha se rompe se o alvo se teletransportar.\nTags: Imprecisa (+1d6 de dificuldade)\nPropriedades:\n• Imprecisa (+1d6 de dificuldade)",
      "source": "SSC",
      "license": "Atlas",
      "license_level": 1
    },
    {
      "id": "mw_terashima_blade",
      "category": "weapon",
      "name": "Lâmina Terashima",
      "mount": "Principal",
      "type": "Corpo a Corpo",
      "damage": "-",
      "damage_val": "-",
      "damage_type": "-",
      "range": "-",
      "range_val": "-",
      "range_type": "-",
      "sp": 2,
      "tags": [
        "Único"
      ],
      "tags_summary": "Única (máximo 1 instalada por mecha)",
      "terse": "Você pode começar qualquer combate em uma das seguintes posturas e pode mudar ou adotar uma nova postura como <b>Protocolo</b>. Uma vez que tenha adotado uma postura, você permanece nela até que adote uma nova postura, esta arma seja destruída, ou você seja <b>Atordoado</b> ou <b>Bloqueado</b>. Você também pode abandonar uma postura como uma <b>Ação Livre</b>.\n<b>[<b>Protocolo</b>]</b> Mudar Postura: Muda a postura desta arma.\n<b>[<b>Ação Livre</b>]</b> Abandonar Postura: Abandona a postura desta arma.",
      "detail": "Você pode começar qualquer combate em uma das seguintes posturas e pode mudar ou adotar uma nova postura como <b>Protocolo</b>. Uma vez que tenha adotado uma postura, você permanece nela até que adote uma nova postura, esta arma seja destruída, ou você seja <b>Atordoado</b> ou <b>Bloqueado</b>. Você também pode abandonar uma postura como uma <b>Ação Livre</b>.\n<b>[<b>Protocolo</b>]</b> Mudar Postura: Muda a postura desta arma.\n<b>[<b>Ação Livre</b>]</b> Abandonar Postura: Abandona a postura desta arma.\nPropriedades:\n• Única (máximo 1 instalada por mecha)",
      "source": "SSC",
      "license": "Atlas",
      "license_level": 3
    },
    {
      "id": "mw_hammer_u_rpl",
      "category": "weapon",
      "name": "Martelo LU-PR",
      "mount": "Pesada",
      "type": "Lançador",
      "damage": "2d6+3 Explosivo",
      "damage_val": "2d6+3",
      "damage_type": "Explosivo",
      "range": "Alcance 5",
      "range_val": 5,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Imprecisa",
        "Arco",
        "Repulsão 2"
      ],
      "tags_summary": "Imprecisa (+1d6 de dificuldade); Arco (ignora cobertura se tiver visão indireta); Repulsão 2 (empurra o alvo 2 espaços)",
      "terse": "Pesada Lançador. Imprecisa (+1d6 de dificuldade) • Arco (ignora cobertura se tiver visão indireta) • Repulsão 2 (empurra o alvo 2 espaços)",
      "detail": "Pesada Lançador. Imprecisa (+1d6 de dificuldade) • Arco (ignora cobertura se tiver visão indireta) • Repulsão 2 (empurra o alvo 2 espaços)\nPropriedades:\n• Imprecisa (+1d6 de dificuldade)\n• Arco (ignora cobertura se tiver visão indireta)\n• Repulsão 2 (empurra o alvo 2 espaços)",
      "source": "IPS-N",
      "license": "Caliban",
      "license_level": 1
    },
    {
      "id": "mw_hhs_155_cannibal",
      "category": "weapon",
      "name": "EOP-155 CANIBAL",
      "mount": "Pesada",
      "type": "Combate Próximo (CQB)",
      "damage": "-",
      "damage_val": "-",
      "damage_type": "-",
      "range": "-",
      "range_val": "-",
      "range_type": "-",
      "sp": 0,
      "tags": [
        "Recarga"
      ],
      "tags_summary": "Carregamento (precisa de ação rápida ou estabilizar para recarregar)",
      "terse": "Você pode disparar essa espingarda pesada duas vezes antes de precisar recarregá-la. Ou então você pode disparar ambos os canos de uma vez, recebendo +1 de Dificuldade, aumentando seu dano para 3d6+4 Cinético e sua <b>Repulsão</b> para 4, mas exigindo que ela seja recarregada normalmente. Quando esta arma é recarregada, você pode escolher causar 5 de dano Cinético a um personagem adjacente devido à força das cápsulas ejetadas.",
      "detail": "Você pode disparar essa espingarda pesada duas vezes antes de precisar recarregá-la. Ou então você pode disparar ambos os canos de uma vez, recebendo +1 de Dificuldade, aumentando seu dano para 3d6+4 Cinético e sua <b>Repulsão</b> para 4, mas exigindo que ela seja recarregada normalmente. Quando esta arma é recarregada, você pode escolher causar 5 de dano Cinético a um personagem adjacente devido à força das cápsulas ejetadas.\nPropriedades:\n• Carregamento (precisa de <b>ação rápida</b> ou estabilizar para recarregar)",
      "source": "IPS-N",
      "license": "Caliban",
      "license_level": 3
    },
    {
      "id": "mw_fusion_rifle",
      "category": "weapon",
      "name": "Fuzil de Fusão",
      "mount": "Principal",
      "type": "Rifle",
      "damage": "1-6 Energético",
      "damage_val": "1-6",
      "damage_type": "Energético",
      "range": "Alcance 6",
      "range_val": 6,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [],
      "tags_summary": "",
      "terse": "Esta arma causa dano igual ao seu <b>Alcance</b> em relação ao alvo (até um máximo de 6 de <b>Energia</b>).",
      "detail": "Esta arma causa dano igual ao seu <b>Alcance</b> em relação ao alvo (até um máximo de 6 de <b>Energia</b>).",
      "source": "HORUS",
      "license": "Kobold",
      "license_level": 1
    },
    {
      "id": "mw_slag_cannon",
      "category": "weapon",
      "name": "Canhão de Detritos",
      "mount": "Principal",
      "type": "Canhão",
      "damage": "1d6 Energético",
      "damage_val": "1d6",
      "damage_type": "Energético",
      "range": "Alcance 8",
      "range_val": 8,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Calor 1 (Próprio)"
      ],
      "tags_summary": "Calor 1 (sofre 1 de calor ao disparar)",
      "terse": "No Ataque: Se o seu alvo estiver no chão ou em uma superfície plana, assim que o ataque se resolver, coloque um monte de detritos de <b>Tamanho 1</b> em um espaço livre adjacente ao alvo. O monte de detritos é um objeto com <b>Evasão 5</b> e 10 PV.",
      "detail": "No Ataque: Se o seu alvo estiver no chão ou em uma superfície plana, assim que o ataque se resolver, coloque um monte de detritos de <b>Tamanho 1</b> em um espaço livre adjacente ao alvo. O monte de detritos é um objeto com <b>Evasão 5</b> e 10 PV.\nPropriedades:\n• Calor 1 (sofre 1 de calor ao disparar)",
      "source": "HORUS",
      "license": "Kobold",
      "license_level": 2
    },
    {
      "id": "mw_unraveler",
      "category": "weapon",
      "name": "Desmantelador",
      "mount": "Principal",
      "type": "Lançador",
      "damage": "2d6 Energético",
      "damage_val": "2d6",
      "damage_type": "Energético",
      "range": "Alcance 10",
      "range_val": 10,
      "range_type": "Alcance",
      "sp": 0,
      "tags": [
        "Confiável 2"
      ],
      "tags_summary": "Confiável 2 (causa 2 de dano mesmo se errar o ataque)",
      "terse": "Se um ataque desta arma não causar dano suficiente para destruir seu alvo ou causar pelo menos 1 de <b>dano de estrutura</b>, ele causa apenas 2 de dano <b>Confiável</b>, mesmo em caso de acerto.",
      "detail": "Se um ataque desta arma não causar dano suficiente para destruir seu alvo ou causar pelo menos 1 de <b>dano de estrutura</b>, ele causa apenas 2 de dano <b>Confiável</b>, mesmo em caso de acerto.\nPropriedades:\n• Confiável 2 (causa 2 de dano mesmo se errar o ataque)",
      "source": "HORUS",
      "license": "Lich",
      "license_level": 1
    }
  ],
  "systems": [
    {
      "id": "ms_comp_con_class_assistant_unit",
      "category": "system",
      "name": "Unidade Assistente Classe Comp/Con",
      "sp": 2,
      "type": "AI",
      "tags": [
        "IA",
        "Previne Cascata",
        "Único"
      ],
      "actions": [
        {
          "name": "Engajar COMP/CON",
          "activation": "Protocol",
          "detail": "Você dá o controle de seu mecha ao seu COMP/CON, permitindo que ele atue independentemente no seu turno com seu próprio conjunto de ações. Diferente de outras IAs, um mecha controlado por um COMP/CON não tem iniciativa independente e requer entrada direta. Seu mecha seguirá cursos de ação básicos (defender esta área, atacar este inimigo, proteger-me, etc.) da melhor maneira possível, ou agirá para se defender se suas instruções estiverem completas ou se não receber mais orientações. Você pode emitir novos comandos no início do seu turno, desde que esteja em até Alcance 50 e tenha os meios para se comunicar com o seu mecha. Unidades Comp/con não são verdadeiras PNHs e, portanto, não podem entrar em cascata.",
          "active_effects": [
            {
              "name": "COMP/CON Online",
              "detail": "COMP/CON está no controle do seu mecha. Você pode emitir novos comandos no início do seu turno, desde que esteja em até <b>Alcance 50</b> e tenha os meios para se comunicar com o seu mecha."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "Seu mecha tem uma unidade básica de comp/con, concedendo a ele a tag <b>IA</b>.\nA comp/con pode falar com você e tem uma personalidade, mas, ao contrário de uma PNH, não é realmente capaz de pensar de forma independente\nEla obedece apenas a você.\nVocê pode conceder o controle do seu mecha à sua comp/con como um protocolo, permitindo que seu mecha aja de forma independente durante seu turno com seu próprio conjunto de ações.\nAo contrário de outras IAs, um mecha controlado por uma comp/con não tem iniciativa independente e requer comando direto.\nSeu mecha seguirá cursos básicos de ação (defenda esta área, ataque este inimigo, me proteja etc.) da melhor maneira possível, ou agirá para se defender se as suas instruções forem concluídas ou se não receber mais orientações.\nVocê pode dar novos comandos no início do seu turno, desde que esteja a até <b>Alcance 5</b>0 e tenha os meios para se comunicar com seu mecha.\nAs unidades comp/con não são verdadeiras PNHs e, portanto, não podem entrar em cascata.\n<b>[<b>Protocolo</b>]</b> Engajar COMP/CON: Você dá o controle de seu mecha ao seu COMP/CON, permitindo que ele atue independentemente no seu turno com seu próprio conjunto de ações. Diferente de outras IAs, um mecha controlado por um COMP/CON não tem iniciativa independente e requer entrada direta. Seu mecha seguirá cursos de ação básicos (defender esta área, atacar este inimigo, proteger-me, etc.) da melhor maneira possível, ou agirá para se defender se suas instruções estiverem completas ou se não receber mais orientações. Você pode emitir novos comandos no início do seu turno, desde que esteja em até Alcance 50 e tenha os meios para se comunicar com o seu mecha. Unidades Comp/con não são verdadeiras PNHs e, portanto, não podem entrar em cascata.",
      "detail": "Seu mecha tem uma unidade básica de comp/con, concedendo a ele a tag <b>IA</b>.\nA comp/con pode falar com você e tem uma personalidade, mas, ao contrário de uma PNH, não é realmente capaz de pensar de forma independente\nEla obedece apenas a você.\nVocê pode conceder o controle do seu mecha à sua comp/con como um protocolo, permitindo que seu mecha aja de forma independente durante seu turno com seu próprio conjunto de ações.\nAo contrário de outras IAs, um mecha controlado por uma comp/con não tem iniciativa independente e requer comando direto.\nSeu mecha seguirá cursos básicos de ação (defenda esta área, ataque este inimigo, me proteja etc.) da melhor maneira possível, ou agirá para se defender se as suas instruções forem concluídas ou se não receber mais orientações.\nVocê pode dar novos comandos no início do seu turno, desde que esteja a até <b>Alcance 5</b>0 e tenha os meios para se comunicar com seu mecha.\nAs unidades comp/con não são verdadeiras PNHs e, portanto, não podem entrar em cascata.\n<b>[<b>Protocolo</b>]</b> Engajar COMP/CON: Você dá o controle de seu mecha ao seu COMP/CON, permitindo que ele atue independentemente no seu turno com seu próprio conjunto de ações. Diferente de outras IAs, um mecha controlado por um COMP/CON não tem iniciativa independente e requer entrada direta. Seu mecha seguirá cursos de ação básicos (defender esta área, atacar este inimigo, proteger-me, etc.) da melhor maneira possível, ou agirá para se defender se suas instruções estiverem completas ou se não receber mais orientações. Você pode emitir novos comandos no início do seu turno, desde que esteja em até Alcance 50 e tenha os meios para se comunicar com o seu mecha. Unidades Comp/con não são verdadeiras PNHs e, portanto, não podem entrar em cascata.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_custom_paint_job",
      "category": "system",
      "name": "Pintura Personalizada",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único",
        "Indestrutível"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Quando você sofrer <b>Dano de Estrutura</b>, role 1d6.\nCom um 6, você retorna a 1 PV e ignora o <b>Dano</b> — o golpe simplesmente “arranhou sua pintura”.\nEste sistema só pode ser usado uma vez antes de cada <b>Reparo Completo</b> e não é um alvo válido para destruição de sistema.",
      "detail": "Quando você sofrer <b>Dano de Estrutura</b>, role 1d6.\nCom um 6, você retorna a 1 PV e ignora o <b>Dano</b> — o golpe simplesmente “arranhou sua pintura”.\nEste sistema só pode ser usado uma vez antes de cada <b>Reparo Completo</b> e não é um alvo válido para destruição de sistema.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_expanded_compartment",
      "category": "system",
      "name": "Compartimento Expandido",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Transfer Control",
          "activation": "Protocol",
          "detail": "Você entrega ou retoma o controle de um personagem não-Mecha ou objeto de <b>Tamanho 1/2</b> que está viajando como passageiro na cabine. Se ele assumir os controles, o mecha fica <b>Prejudicado</b> e <b>Lento</b> para refletir a falta de licenças e integração apropriadas.",
          "add_status": [
            {
              "id": "impaired",
              "target": "self"
            },
            {
              "id": "slow",
              "target": "self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "Seu Mecha tem espaço para um personagem não Mecha adicional ou objeto de <b>Tamanho 1/2</b> para viajar como passageiro na cabine.\nEnquanto estiver dentro do mecha, ele não pode sofrer nenhum efeito vindo de fora do mecha ou ser alvo de ataques, como se fosse um piloto.\nVocê pode entregar o controle para ele ou retomá-lo como um protocolo (seguindo as mesmas regras do piloto e IAs), mas se ele assumir os controles, o mecha se torna <b>Impedido</b> e <b>Lento</b> para refletir a falta de licenças apropriadas e integração.\n<b>[<b>Protocolo</b>]</b> Transfer Control: Você entrega ou retoma o controle de um personagem não-Mecha ou objeto de <b>Tamanho 1/2</b> que está viajando como passageiro na cabine. Se ele assumir os controles, o mecha fica <b>Prejudicado</b> e <b>Lento</b> para refletir a falta de licenças e integração apropriadas.",
      "detail": "Seu Mecha tem espaço para um personagem não Mecha adicional ou objeto de <b>Tamanho 1/2</b> para viajar como passageiro na cabine.\nEnquanto estiver dentro do mecha, ele não pode sofrer nenhum efeito vindo de fora do mecha ou ser alvo de ataques, como se fosse um piloto.\nVocê pode entregar o controle para ele ou retomá-lo como um protocolo (seguindo as mesmas regras do piloto e IAs), mas se ele assumir os controles, o mecha se torna <b>Impedido</b> e <b>Lento</b> para refletir a falta de licenças apropriadas e integração.\n<b>[<b>Protocolo</b>]</b> Transfer Control: Você entrega ou retoma o controle de um personagem não-Mecha ou objeto de <b>Tamanho 1/2</b> que está viajando como passageiro na cabine. Se ele assumir os controles, o mecha fica <b>Prejudicado</b> e <b>Lento</b> para refletir a falta de licenças e integração apropriadas.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_manipulators",
      "category": "system",
      "name": "Manipuladores",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Seu mecha tem um conjunto extra de membros.\nEles são muito pequenos para gerar qualquer benefício de combate, mas permitem que o mecha interaja com objetos que de outra forma seriam muito pequenos ou sensíveis (por exemplo, painéis táteis com <b>Tamanho</b> para um piloto).",
      "detail": "Seu mecha tem um conjunto extra de membros.\nEles são muito pequenos para gerar qualquer benefício de combate, mas permitem que o mecha interaja com objetos que de outra forma seriam muito pequenos ou sensíveis (por exemplo, painéis táteis com <b>Tamanho</b> para um piloto).",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_pattern_a_smoke_charges",
      "category": "system",
      "name": "Cargas. de Fumaça Padrão A",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 3",
        "Único",
        "Granada"
      ],
      "actions": [
        {
          "name": "Granada de Fumaça",
          "activation": "Quick",
          "range": [
            {
              "type": "Range",
              "val": 5
            },
            {
              "type": "Blast",
              "val": 2
            }
          ],
          "detail": "Gaste uma carga para lançar uma <b>Granada de Fumaça</b> em até <b>Alcance 5</b>.<br>Todos os personagens e objetos dentro da área de <b>Explosão 2</b> se beneficiam de <b>Cobertura Leve</b> até o final do seu próximo turno, quando a fumaça se dispersa."
        }
      ],
      "deployables": [
        {
          "name": "Mina de Fumaça",
          "type": "Mine",
          "range": [
            {
              "type": "Burst",
              "val": 3
            }
          ],
          "detail": "Esta mina detona quando qualquer personagem aliado se mover sobre ou adjacente a ela.<br>Todos os personagens e objetos dentro da área de <b>Emanação 3</b> se beneficiam de <b>Cobertura Leve</b> até o final do próximo turno do personagem detonador, momento em que a fumaça se dispersa."
        }
      ],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Granada de Fumaça: Gaste uma carga para lançar uma <b>Granada de Fumaça</b> em até <b>Alcance 5</b>. Todos os personagens e objetos dentro da área de <b>Explosão 2</b> se beneficiam de <b>Cobertura Leve</b> até o final do seu próximo turno, quando a fumaça se dispersa.\n<b>[Posicionável: Mina de Fumaça (Mine)]</b> Esta mina detona quando qualquer personagem aliado se mover sobre ou adjacente a ela. Todos os personagens e objetos dentro da área de <b>Emanação 3</b> se beneficiam de <b>Cobertura Leve</b> até o final do próximo turno do personagem detonador, momento em que a fumaça se dispersa.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Granada de Fumaça: Gaste uma carga para lançar uma <b>Granada de Fumaça</b> em até <b>Alcance 5</b>. Todos os personagens e objetos dentro da área de <b>Explosão 2</b> se beneficiam de <b>Cobertura Leve</b> até o final do seu próximo turno, quando a fumaça se dispersa.\n<b>[Posicionável: Mina de Fumaça (Mine)]</b> Esta mina detona quando qualquer personagem aliado se mover sobre ou adjacente a ela. Todos os personagens e objetos dentro da área de <b>Emanação 3</b> se beneficiam de <b>Cobertura Leve</b> até o final do próximo turno do personagem detonador, momento em que a fumaça se dispersa.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_pattern_a_jericho_deployable_cover",
      "category": "system",
      "name": "Cobertura Posicionável Jericho Padrão A",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "name": "Cobertura Posicionável Jericho",
          "type": "Deployable",
          "instances": 2,
          "size": 1,
          "hp": 10,
          "evasion": 5,
          "detail": "Posicione duas seções adjacentes de <b>Cobertura Pesada</b> de <b>Tamanho 1</b> em espaços livres adjacentes a você.<br>Cada seção é um objeto com <b>Evasão 5</b> e 10 PV que pode ser mirado e destruído individualmente.<br>Ambas as seções da cobertura podem ser recolhidas novamente como uma <b>Ação Completa</b>.",
          "recall": "Full",
          "redeploy": "Quick"
        }
      ],
      "terse": "Posicione duas seções adjacentes de <b>Cobertura Pesada</b>. de <b>Tamanho 1</b> em espaços livres adjacentes a você.\nCada seção é um objeto com <b>Evasão</b> 5 e 10 PV que pode ser mirado e destruído individualmente.\nAmbas as seções da cobertura podem ser recolhidas novamente como uma <b>Ação Completa</b>.\nReparar o sistema restaura ambas as seções.\n<b>[Posicionável: Cobertura Posicionável Jericho (Deployable)]</b> Posicione duas seções adjacentes de <b>Cobertura Pesada</b> de <b>Tamanho 1</b> em espaços livres adjacentes a você. Cada seção é um objeto com <b>Evasão 5</b> e 10 PV que pode ser mirado e destruído individualmente. Ambas as seções da cobertura podem ser recolhidas novamente como uma <b>Ação Completa</b>.",
      "detail": "Posicione duas seções adjacentes de <b>Cobertura Pesada</b>. de <b>Tamanho 1</b> em espaços livres adjacentes a você.\nCada seção é um objeto com <b>Evasão</b> 5 e 10 PV que pode ser mirado e destruído individualmente.\nAmbas as seções da cobertura podem ser recolhidas novamente como uma <b>Ação Completa</b>.\nReparar o sistema restaura ambas as seções.\n<b>[Posicionável: Cobertura Posicionável Jericho (Deployable)]</b> Posicione duas seções adjacentes de <b>Cobertura Pesada</b> de <b>Tamanho 1</b> em espaços livres adjacentes a você. Cada seção é um objeto com <b>Evasão 5</b> e 10 PV que pode ser mirado e destruído individualmente. Ambas as seções da cobertura podem ser recolhidas novamente como uma <b>Ação Completa</b>.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_pattern_b_hex_charges",
      "category": "system",
      "name": "Cargas. HEX Padrão B",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 3",
        "Único",
        "Granada"
      ],
      "actions": [
        {
          "name": "Granada de Fragmentação",
          "activation": "Quick",
          "range": [
            {
              "type": "Range",
              "val": 5
            },
            {
              "type": "Blast",
              "val": 1
            }
          ],
          "damage": [
            {
              "type": "Explosive",
              "val": "1d6",
              "aoe": true,
              "save": "agi",
              "save_half": true
            }
          ],
          "detail": "Gaste uma carga para lançar uma <b>Granada de Fragmentação</b> em até <b>Alcance 5</b>.<br>Todos os personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>1d6 de Dano Explosivo</b>.<br>Em caso de sucesso, eles sofrem metade do <b>Dano</b>."
        }
      ],
      "deployables": [
        {
          "name": "Mina Explosiva",
          "type": "Mine",
          "range": [
            {
              "type": "Burst",
              "val": 1
            }
          ],
          "damage": [
            {
              "type": "Explosive",
              "val": "3d6",
              "aoe": true,
              "save": "agi",
              "save_half": true
            }
          ],
          "activation": "Quick",
          "detail": "Todos os personagens dentro da área afetada devem passar em um <b>salvamento de Agilidade</b> ou sofrem <b>2d6 de Dano Explosivo</b>.<br>Em caso de sucesso, eles sofrem metade do <b>Dano</b>."
        }
      ],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Granada de Fragmentação: Gaste uma carga para lançar uma <b>Granada de Fragmentação</b> em até <b>Alcance 5</b>. Todos os personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>1d6 de Dano Explosivo</b>. Em caso de sucesso, eles sofrem metade do <b>Dano</b>.\n<b>[Posicionável: Mina Explosiva (Mine)]</b> Todos os personagens dentro da área afetada devem passar em um <b>salvamento de Agilidade</b> ou sofrem <b>2d6 de Dano Explosivo</b>. Em caso de sucesso, eles sofrem metade do <b>Dano</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Granada de Fragmentação: Gaste uma carga para lançar uma <b>Granada de Fragmentação</b> em até <b>Alcance 5</b>. Todos os personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>1d6 de Dano Explosivo</b>. Em caso de sucesso, eles sofrem metade do <b>Dano</b>.\n<b>[Posicionável: Mina Explosiva (Mine)]</b> Todos os personagens dentro da área afetada devem passar em um <b>salvamento de Agilidade</b> ou sofrem <b>2d6 de Dano Explosivo</b>. Em caso de sucesso, eles sofrem metade do <b>Dano</b>.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_personalizations",
      "category": "system",
      "name": "Personalizações",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Seu mecha adquire +2 PV e, em consulta com o MJ, você pode estabelecer uma pequena modificação feita em seu mecha.\nEssa modificação não tem benefício numérico além dos PV adicionais que concede, mas pode fornecer outros efeitos úteis.\nSe o MJ concordar que a modificação ajudaria com um <b>Teste de Perícia</b> de piloto ou mecha, você recebe <b>+1 de Precisão</b> nesse teste.",
      "detail": "Seu mecha adquire +2 PV e, em consulta com o MJ, você pode estabelecer uma pequena modificação feita em seu mecha.\nEssa modificação não tem benefício numérico além dos PV adicionais que concede, mas pode fornecer outros efeitos úteis.\nSe o MJ concordar que a modificação ajudaria com um <b>Teste de Perícia</b> de piloto ou mecha, você recebe <b>+1 de Precisão</b> nesse teste.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_stable_structure",
      "category": "system",
      "name": "Estrutura Estável",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Você recebe <b>+1 de Precisão</b> em salvamentos para evitar <b>Prostrado</b> ou movimento forçado (<b>Empurrar</b>, Puxar ou <b>Repulsão</b> ).",
      "detail": "Você recebe <b>+1 de Precisão</b> em salvamentos para evitar <b>Prostrado</b> ou movimento forçado (<b>Empurrar</b>, Puxar ou <b>Repulsão</b> ).",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_turret_drones",
      "category": "system",
      "name": "Turret Drones",
      "sp": 2,
      "type": "Drone",
      "tags": [
        "Limitado 3",
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "name": "Turret Drone",
          "type": "Drone",
          "size": 0.5,
          "hp": 5,
          "edef": 10,
          "evasion": 10,
          "detail": "Adquira a Reação Ataque de Torreta, que pode ser realizada uma vez para cada drone torreta posicionado. Drones torreta não podem ser recolhidos e expiram no final da cena.",
          "actions": [
            {
              "name": "Turret Attack",
              "activation": "Reaction",
              "frequency": "1/round",
              "trigger": "Um personagem aliado a até <b>Alcance 10</b> de um drone torreta faz um ataque bem-sucedido.",
              "detail": "O drone torreta causa <b>3 de Dano Cinético</b> ao seu alvo, desde que tenha linha de visão para ele.",
              "damage": [
                {
                  "type": "Kinetic",
                  "val": 3
                }
              ]
            }
          ]
        }
      ],
      "terse": "Expend a charge to deploy a turret drone that attaches to any object or surface within Sensors and line of sight. Gain the Turret Attack reaction, which can be taken once for each deployed turret drone. Turret drones cannot be recalled and expire at the end of the scene.\n<b>[Posicionável: Turret Drone (Drone)]</b> Adquira a <b>Reação</b> Ataque de Torreta, que pode ser realizada uma vez para cada drone torreta posicionado. Drones torreta não podem ser recolhidos e expiram no final da cena.",
      "detail": "Expend a charge to deploy a turret drone that attaches to any object or surface within Sensors and line of sight. Gain the Turret Attack reaction, which can be taken once for each deployed turret drone. Turret drones cannot be recalled and expire at the end of the scene.\n<b>[Posicionável: Turret Drone (Drone)]</b> Adquira a <b>Reação</b> Ataque de Torreta, que pode ser realizada uma vez para cada drone torreta posicionado. Drones torreta não podem ser recolhidos e expiram no final da cena.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_type_3_projected_shield",
      "category": "system",
      "name": "Escudo Projetado Tipo-3",
      "sp": 2,
      "type": "Shield",
      "tags": [
        "Escudo",
        "Único",
        "Calor 1 (Próprio)"
      ],
      "actions": [
        {
          "name": "Projetar Escudo",
          "activation": "Protocol",
          "detail": "Declare um personagem na linha de visão: todos os ataques à distância ou corpo a corpo que ele fizer contra você ou que você fizer contra ele sofrem <b>+2 de Dificuldade</b> até o início do seu próximo turno."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Protocolo</b>]</b> Projetar Escudo: Declare um personagem na linha de visão: todos os ataques à distância ou corpo a corpo que ele fizer contra você ou que você fizer contra ele sofrem <b>+2 de Dificuldade</b> até o início do seu próximo turno.",
      "detail": "<b>[<b>Protocolo</b>]</b> Projetar Escudo: Declare um personagem na linha de visão: todos os ataques à distância ou corpo a corpo que ele fizer contra você ou que você fizer contra ele sofrem <b>+2 de Dificuldade</b> até o início do seu próximo turno.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_eva_module",
      "category": "system",
      "name": "Módulo EVA",
      "sp": 1,
      "type": "Flight System",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Seu mecha tem um sistema de propulsão adequado para uso em gravidade baixa ou zero e ambientes subaquáticos.\nNesses ambientes, você pode voar e não fica <b>Lento</b>.",
      "detail": "Seu mecha tem um sistema de propulsão adequado para uso em gravidade baixa ou zero e ambientes subaquáticos.\nNesses ambientes, você pode voar e não fica <b>Lento</b>.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_rapid_burst_jump_jet_system",
      "category": "system",
      "name": "Sistemas de Jatos de Salto de Estouro Rápido",
      "sp": 2,
      "type": "Flight System",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Você pode voar quando <b>Impulsionar</b>; no entanto, você deve terminar o movimento no chão ou em outra superfície sólida, ou então começa a cair imediatamente.",
      "detail": "Você pode voar quando <b>Impulsionar</b>; no entanto, você deve terminar o movimento no chão ou em outra superfície sólida, ou então começa a cair imediatamente.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_type_i_flight_system",
      "category": "system",
      "name": "Sistema de Voo Tipo-I",
      "sp": 3,
      "type": "Flight System",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Você pode escolher contar todo e qualquer movimento como voo; no entanto, recebe <b>Tamanho</b>+1 de <b>Calor</b> no final de qualquer um de seus turnos em que voar dessa maneira.",
      "detail": "Você pode escolher contar todo e qualquer movimento como voo; no entanto, recebe <b>Tamanho</b>+1 de <b>Calor</b> no final de qualquer um de seus turnos em que voar dessa maneira.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_synthetic_muscle_netting",
      "category": "system",
      "name": "Rede Muscular Sintética",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Você pode <b>Empurrar</b> alvos maiores que você, e quando você <b>Agarrar</b> ou <b>Empurrar</b> contra alvos maiores, você conta como tendo o mesmo <b>Tamanho</b> que o maior oponente.\nQuando <b>Agarrar</b> ou <b>Empurrar</b> oponentes do mesmo <b>Tamanho</b> ou menor, você conta como pelo menos um <b>Tamanho</b> maior.\nAlém disso, sua capacidade para <b>levantar e arrastar</b> é dobrada.",
      "detail": "Você pode <b>Empurrar</b> alvos maiores que você, e quando você <b>Agarrar</b> ou <b>Empurrar</b> contra alvos maiores, você conta como tendo o mesmo <b>Tamanho</b> que o maior oponente.\nQuando <b>Agarrar</b> ou <b>Empurrar</b> oponentes do mesmo <b>Tamanho</b> ou menor, você conta como pelo menos um <b>Tamanho</b> maior.\nAlém disso, sua capacidade para <b>levantar e arrastar</b> é dobrada.",
      "source": "IPS-N",
      "license": "Blackbeard",
      "license_level": 1
    },
    {
      "id": "ms_reinforced_cabling",
      "category": "system",
      "name": "Cabeamento Reforçado",
      "sp": 2,
      "type": "Sistema",
      "tags": [],
      "actions": [
        {
          "name": "Balanço de Arpéu",
          "activation": "None",
          "frequency": "1/turn",
          "detail": "1/turno, ao fazer um movimento padrão, você pode voar usando a sua <b>Velocidade</b> em <b>Linha</b> reta, desde que haja um caminho livre.<br>Esse movimento deve terminar em um objeto ou superfície, ou então você começa a cair.<br>Enquanto permanecer parado, você pode se segurar na superfície ou objeto de destino, mesmo que seja vertical ou saliente.<br>Se for <b>Prostrado</b> ou repelido enquanto estiver preso a uma superfície, você cai."
        },
        {
          "name": "Arrastar para Baixo",
          "activation": "Quick",
          "detail": "Como uma <b>Ação Rápida</b>, faça um teste disputado de <b>Casco</b> contra um personagem a até <b>Alcance 5</b> e na linha de visão: o perdedor fica <b>Prostrado</b>.",
          "add_status": [
            {
              "id": "prone"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[None]</b> Balanço de Arpéu: 1/turno, ao fazer um movimento padrão, você pode voar usando a sua <b>Velocidade</b> em <b>Linha</b> reta, desde que haja um caminho livre. Esse movimento deve terminar em um objeto ou superfície, ou então você começa a cair. Enquanto permanecer parado, você pode se segurar na superfície ou objeto de destino, mesmo que seja vertical ou saliente. Se for <b>Prostrado</b> ou repelido enquanto estiver preso a uma superfície, você cai.\n<b>[<b>Ação Rápida</b>]</b> Arrastar para Baixo: Como uma <b>Ação Rápida</b>, faça um teste disputado de <b>Casco</b> contra um personagem a até <b>Alcance 5</b> e na linha de visão: o perdedor fica <b>Prostrado</b>.",
      "detail": "<b>[None]</b> Balanço de Arpéu: 1/turno, ao fazer um movimento padrão, você pode voar usando a sua <b>Velocidade</b> em <b>Linha</b> reta, desde que haja um caminho livre. Esse movimento deve terminar em um objeto ou superfície, ou então você começa a cair. Enquanto permanecer parado, você pode se segurar na superfície ou objeto de destino, mesmo que seja vertical ou saliente. Se for <b>Prostrado</b> ou repelido enquanto estiver preso a uma superfície, você cai.\n<b>[<b>Ação Rápida</b>]</b> Arrastar para Baixo: Como uma <b>Ação Rápida</b>, faça um teste disputado de <b>Casco</b> contra um personagem a até <b>Alcance 5</b> e na linha de visão: o perdedor fica <b>Prostrado</b>.",
      "source": "IPS-N",
      "license": "Blackbeard",
      "license_level": 3
    },
    {
      "id": "ms_sekhmet_class_nhp",
      "category": "system",
      "name": "PNH Classe SEKHMET",
      "sp": 3,
      "type": "AI",
      "tags": [
        "Único",
        "IA"
      ],
      "actions": [
        {
          "name": "Protocolo SEKHMET",
          "activation": "Protocol",
          "detail": "Quando ativado, você dá o controle de seu mecha à sua PNH e ganha os seguintes benefícios:<ul><li>Todos os <b>acertos críticos</b> corpo a corpo causam <b>+1d6 de Dano bônus</b>.</li><li>1/rodada, você pode <b>Alvejar</b> com armas brancas apenas como uma <b>Ação Livre</b>.</li></ul>Sua PNH usa todas as ações e movimentos disponíveis para se mover em direção ao personagem visível mais próximo, aliado ou hostil — e os ataca com ataques corpo a corpo, priorizando armas corpo a corpo.<br>Ela pode se beneficiar dos seus talentos.<br>Se não houver personagens no <b>Alcance</b> da <b>Ameaça</b>, sua PNH usa todas as ações para se mover o mais diretamente possível para o alvo visível mais próximo.<br>Sua PNH não pode fazer ataques à distância, mesmo que haja ações disponíveis.<br>Você retém controle suficiente para <b>Sobrecarregar</b> como de costume; no entanto, sua PNH usa a ação adicional para o mesmo propósito que suas outras ações.<br>Você pode retomar o controle do seu mecha com um protocolo.<br>Ao fazer isso, você fica <b>Atordoado</b> até o início do seu próximo turno.<br>Caso contrário, esse efeito dura até que seu mecha seja destruído.<br>A incapacitação ou morte do piloto não tem efeito",
          "active_effects": [
            {
              "name": "SEKHMET Active",
              "detail": "Seu mecha é controlado por SEKHMET."
            },
            {
              "name": "SEKHMET Protocol (Melee Crit Bonus)",
              "detail": "Todos os acertos críticos corpo a corpo causam <b>+1d6 de dano bônus</b>.",
              "bonus_damage": {
                "detail": "<b>+1d6 de dano bônus</b> em acertos críticos corpo a corpo.",
                "val": "1d6",
                "weapon_types": [
                  "melee"
                ],
                "hit_type": "crit"
              }
            },
            {
              "name": "SEKHMET Protocol (Skirmish)",
              "detail": "1/rodada, você pode <b>Escaramuçar</b> usando apenas armas corpo a corpo como uma <b>Ação Livre</b>."
            }
          ]
        },
        {
          "name": "Take Back Control",
          "activation": "Protocol",
          "detail": "Você retoma o controle do seu mecha de SEKHMET. Você fica <b>Atordoado</b> até o início do seu próximo turno.",
          "add_status": [
            {
              "id": "stunned",
              "target": "self",
              "duration": "next_turn_start_self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b> e o <b>Protocolo</b> SEKHMET.\n<b>[<b>Protocolo</b>]</b> <b>Protocolo</b> SEKHMET: Quando ativado, você dá o controle de seu mecha à sua PNH e ganha os seguintes benefícios:<ul><li>Todos os <b>acertos críticos</b> corpo a corpo causam <b>+1d6 de Dano bônus</b>.</li><li>1/rodada, você pode <b>Alvejar</b> com armas brancas apenas como uma <b>Ação Livre</b>.</li></ul>Sua PNH usa todas as ações e movimentos disponíveis para se mover em direção ao personagem visível mais próximo, aliado ou hostil — e os ataca com ataques corpo a corpo, priorizando armas corpo a corpo. Ela pode se beneficiar dos seus talentos. Se não houver personagens no <b>Alcance</b> da <b>Ameaça</b>, sua PNH usa todas as ações para se mover o mais diretamente possível para o alvo visível mais próximo. Sua PNH não pode fazer ataques à distância, mesmo que haja ações disponíveis. Você retém controle suficiente para <b>Sobrecarregar</b> como de costume; no entanto, sua PNH usa a ação adicional para o mesmo propósito que suas outras ações. Você pode retomar o controle do seu mecha com um protocolo. Ao fazer isso, você fica <b>Atordoado</b> até o início do seu próximo turno. Caso contrário, esse efeito dura até que seu mecha seja destruído. A incapacitação ou morte do piloto não tem efeito\n<b>[<b>Protocolo</b>]</b> Take Back Control: Você retoma o controle do seu mecha de SEKHMET. Você fica <b>Atordoado</b> até o início do seu próximo turno.",
      "detail": "Seu mecha adquire a tag <b>IA</b> e o <b>Protocolo</b> SEKHMET.\n<b>[<b>Protocolo</b>]</b> <b>Protocolo</b> SEKHMET: Quando ativado, você dá o controle de seu mecha à sua PNH e ganha os seguintes benefícios:<ul><li>Todos os <b>acertos críticos</b> corpo a corpo causam <b>+1d6 de Dano bônus</b>.</li><li>1/rodada, você pode <b>Alvejar</b> com armas brancas apenas como uma <b>Ação Livre</b>.</li></ul>Sua PNH usa todas as ações e movimentos disponíveis para se mover em direção ao personagem visível mais próximo, aliado ou hostil — e os ataca com ataques corpo a corpo, priorizando armas corpo a corpo. Ela pode se beneficiar dos seus talentos. Se não houver personagens no <b>Alcance</b> da <b>Ameaça</b>, sua PNH usa todas as ações para se mover o mais diretamente possível para o alvo visível mais próximo. Sua PNH não pode fazer ataques à distância, mesmo que haja ações disponíveis. Você retém controle suficiente para <b>Sobrecarregar</b> como de costume; no entanto, sua PNH usa a ação adicional para o mesmo propósito que suas outras ações. Você pode retomar o controle do seu mecha com um protocolo. Ao fazer isso, você fica <b>Atordoado</b> até o início do seu próximo turno. Caso contrário, esse efeito dura até que seu mecha seja destruído. A incapacitação ou morte do piloto não tem efeito\n<b>[<b>Protocolo</b>]</b> Take Back Control: Você retoma o controle do seu mecha de SEKHMET. Você fica <b>Atordoado</b> até o início do seu próximo turno.",
      "source": "IPS-N",
      "license": "Blackbeard",
      "license_level": 3
    },
    {
      "id": "ms_argonaut_shield",
      "category": "system",
      "name": "Escudo Argonauta",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Você usa este escudo reforçado para fornecer cobertura a um personagem adjacente como uma <b>Ação Rápida</b>, fornecendo a ele <b>Resistência</b> a todo <b>Dano</b>; no entanto, você sofre metade do <b>Dano</b> que seu alvo sofreria antes de calcular <b>Armadura</b> e <b>Resistência</b>.<br>Esse efeito dura até seu alvo perder a adjacência, momento em que este efeito cessa até que você repita esta ação.",
          "add_resist": [
            {
              "resist": "all",
              "target": "ally"
            }
          ],
          "add_special": [
            {
              "attribute": "Argonaut Shield Target",
              "target": "ally",
              "detail": "Ganhe <b>Resistência</b> a todo <b>Dano</b> enquanto estiver adjacente ao Drake."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Você usa este escudo reforçado para fornecer cobertura a um personagem adjacente como uma <b>Ação Rápida</b>, fornecendo a ele <b>Resistência</b> a todo <b>Dano</b>; no entanto, você sofre metade do <b>Dano</b> que seu alvo sofreria antes de calcular <b>Armadura</b> e <b>Resistência</b>. Esse efeito dura até seu alvo perder a adjacência, momento em que este efeito cessa até que você repita esta ação.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Você usa este escudo reforçado para fornecer cobertura a um personagem adjacente como uma <b>Ação Rápida</b>, fornecendo a ele <b>Resistência</b> a todo <b>Dano</b>; no entanto, você sofre metade do <b>Dano</b> que seu alvo sofreria antes de calcular <b>Armadura</b> e <b>Resistência</b>. Esse efeito dura até seu alvo perder a adjacência, momento em que este efeito cessa até que você repita esta ação.",
      "source": "IPS-N",
      "license": "Drake",
      "license_level": 1
    },
    {
      "id": "ms_aegis_shield_generator",
      "category": "system",
      "name": "Gerador de Escudo Égide",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Único",
        "Limitado 1"
      ],
      "actions": [],
      "deployables": [
        {
          "type": "Deployable",
          "name": "Gerador de Escudo Égide",
          "activation": "Quick",
          "cost": 1,
          "size": 1,
          "hp": 10,
          "evasion": 5,
          "detail": "Coloque <b>3d6</b> para representar a energia restante do gerador.<br>Como uma <b>Reação</b> quando qualquer personagem ou objeto à sua escolha que estiver pelo menos parcialmente na área sofrer <b>Dano</b>, você pode rolar um dos d6 para reduzir o <b>Dano</b> pelo valor rolado.<br>Este efeito dura pelo restante da cena, até que todos os dados tenham sido rolados e o gerador perca <b>Energia</b>, ou o gerador seja destruído.",
          "counters": [
            {
              "id": "aegis_shield_die",
              "name": "Energia do Gerador de Escudo Égide",
              "default_value": 3,
              "min": 0,
              "max": 3
            }
          ],
          "tags": [
            {
              "id": "tg_shield"
            }
          ]
        }
      ],
      "terse": "Gaste uma carga para posicionar um gerador de escudo de <b>Tamanho 1</b> em um espaço livre e adjacente, onde é criado um escudo com <b>Emanação</b> 1.\n<b>[Posicionável: Gerador de Escudo Égide (Deployable)]</b> Coloque <b>3d6</b> para representar a energia restante do gerador. Como uma <b>Reação</b> quando qualquer personagem ou objeto à sua escolha que estiver pelo menos parcialmente na área sofrer <b>Dano</b>, você pode rolar um dos d6 para reduzir o <b>Dano</b> pelo valor rolado. Este efeito dura pelo restante da cena, até que todos os dados tenham sido rolados e o gerador perca <b>Energia</b>, ou o gerador seja destruído.",
      "detail": "Gaste uma carga para posicionar um gerador de escudo de <b>Tamanho 1</b> em um espaço livre e adjacente, onde é criado um escudo com <b>Emanação</b> 1.\n<b>[Posicionável: Gerador de Escudo Égide (Deployable)]</b> Coloque <b>3d6</b> para representar a energia restante do gerador. Como uma <b>Reação</b> quando qualquer personagem ou objeto à sua escolha que estiver pelo menos parcialmente na área sofrer <b>Dano</b>, você pode rolar um dos d6 para reduzir o <b>Dano</b> pelo valor rolado. Este efeito dura pelo restante da cena, até que todos os dados tenham sido rolados e o gerador perca <b>Energia</b>, ou o gerador seja destruído.",
      "source": "IPS-N",
      "license": "Drake",
      "license_level": 2
    },
    {
      "id": "ms_portable_bunker",
      "category": "system",
      "name": "Casamata Portátil",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 1",
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "type": "Deployable",
          "name": "Casamata Portátil",
          "activation": "Quick",
          "cost": 1,
          "size": 4,
          "hp": 40,
          "evasion": 5,
          "detail": "Todos os personagens que estiverem completamente dentro da área afetada recebem <b>Cobertura Pesada</b>. contra todos os ataques de fora da casamata em todas as direções e <b>Resistência</b> ao <b>Dano</b> de ataques de <b>Cone</b>, <b>Emanação</b>, <b>Explosão</b> e <b>Linha</b> que se originarem fora da casamata.<br>A casamata tem a parte superior aberta, e os personagens podem entrar ou sair à vontade.<br>Ela não pode ser movida ou desativada depois de posicionada."
        }
      ],
      "terse": "Gaste uma carga para posicionar uma casamata portátil em uma área livre e adjacente de 4 por 4 espaços.\nNo início do seu próximo turno, ela se desdobra em um posto fortificado com o perfil listado.\n<b>[Posicionável: Casamata Portátil (Deployable)]</b> Todos os personagens que estiverem completamente dentro da área afetada recebem <b>Cobertura Pesada</b>. contra todos os ataques de fora da casamata em todas as direções e <b>Resistência</b> ao <b>Dano</b> de ataques de <b>Cone</b>, <b>Emanação</b>, <b>Explosão</b> e <b>Linha</b> que se originarem fora da casamata. A casamata tem a parte superior aberta, e os personagens podem entrar ou sair à vontade. Ela não pode ser movida ou desativada depois de posicionada.",
      "detail": "Gaste uma carga para posicionar uma casamata portátil em uma área livre e adjacente de 4 por 4 espaços.\nNo início do seu próximo turno, ela se desdobra em um posto fortificado com o perfil listado.\n<b>[Posicionável: Casamata Portátil (Deployable)]</b> Todos os personagens que estiverem completamente dentro da área afetada recebem <b>Cobertura Pesada</b>. contra todos os ataques de fora da casamata em todas as direções e <b>Resistência</b> ao <b>Dano</b> de ataques de <b>Cone</b>, <b>Emanação</b>, <b>Explosão</b> e <b>Linha</b> que se originarem fora da casamata. A casamata tem a parte superior aberta, e os personagens podem entrar ou sair à vontade. Ela não pode ser movida ou desativada depois de posicionada.",
      "source": "IPS-N",
      "license": "Drake",
      "license_level": 3
    },
    {
      "id": "ms_cable_winch_system",
      "category": "system",
      "name": "Sistema de Cabo de Guincho",
      "sp": 1,
      "type": "Sistema",
      "tags": [],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Estes cabos podem ser conectados a um personagem adjacente.<br>Se o alvo estiver <b>Atordoado</b> ou for voluntário a ser conectado, você tem sucesso automaticamente; caso contrário, ele pode resistir com um salvamento bem-sucedido de <b>Casco</b>.<br>Uma vez conectados, você e o alvo não podem se afastar mais do que 5 espaços um do outro.<br>Qualquer personagem pode rebocar o outro, obedecendo às regras normais para <b>levantar e arrastar</b>, e ficando <b>Lento</b> enquanto o faz.<br>Qualquer personagem pode remover os cabos com um acerto de um ataque corpo a corpo ou usando <b>Improvisar Ataque</b> contra <b>Evasão</b> 10.<br>Esses cabos também podem ser usados para arrastar, puxar ou interagir de outras formas com objetos e o ambiente.<br>Eles têm 5 espaços de comprimento e podem <b>Suportar</b> um <b>Tamanho</b> combinado de até 6 antes de se romperem.<br>Os personagens podem usá-los para escalar superfícies, permitindo que eles escalem sem penalidade de <b>Velocidade</b>.",
          "save": "hull"
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Estes cabos podem ser conectados a um personagem adjacente. Se o alvo estiver <b>Atordoado</b> ou for voluntário a ser conectado, você tem sucesso automaticamente; caso contrário, ele pode resistir com um salvamento bem-sucedido de <b>Casco</b>. Uma vez conectados, você e o alvo não podem se afastar mais do que 5 espaços um do outro. Qualquer personagem pode rebocar o outro, obedecendo às regras normais para <b>levantar e arrastar</b>, e ficando <b>Lento</b> enquanto o faz. Qualquer personagem pode remover os cabos com um acerto de um ataque corpo a corpo ou usando <b>Improvisar Ataque</b> contra <b>Evasão</b> 10. Esses cabos também podem ser usados para arrastar, puxar ou interagir de outras formas com objetos e o ambiente. Eles têm 5 espaços de comprimento e podem <b>Suportar</b> um <b>Tamanho</b> combinado de até 6 antes de se romperem. Os personagens podem usá-los para escalar superfícies, permitindo que eles escalem sem penalidade de <b>Velocidade</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Estes cabos podem ser conectados a um personagem adjacente. Se o alvo estiver <b>Atordoado</b> ou for voluntário a ser conectado, você tem sucesso automaticamente; caso contrário, ele pode resistir com um salvamento bem-sucedido de <b>Casco</b>. Uma vez conectados, você e o alvo não podem se afastar mais do que 5 espaços um do outro. Qualquer personagem pode rebocar o outro, obedecendo às regras normais para <b>levantar e arrastar</b>, e ficando <b>Lento</b> enquanto o faz. Qualquer personagem pode remover os cabos com um acerto de um ataque corpo a corpo ou usando <b>Improvisar Ataque</b> contra <b>Evasão</b> 10. Esses cabos também podem ser usados para arrastar, puxar ou interagir de outras formas com objetos e o ambiente. Eles têm 5 espaços de comprimento e podem <b>Suportar</b> um <b>Tamanho</b> combinado de até 6 antes de se romperem. Os personagens podem usá-los para escalar superfícies, permitindo que eles escalem sem penalidade de <b>Velocidade</b>.",
      "source": "IPS-N",
      "license": "Lancaster",
      "license_level": 1
    },
    {
      "id": "ms_restock_drone",
      "category": "system",
      "name": "Drone de Reabastecimento",
      "sp": 2,
      "type": "Drone",
      "tags": [
        "Limitado 2",
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "type": "Drone",
          "name": "Drone de Reabastecimento",
          "activation": "Quick",
          "size": 0.5,
          "hp": 5,
          "edef": 10,
          "evasion": 10,
          "detail": "Enquanto estiver adjacente a este drone, personagens aliados podem ativá-lo como uma <b>Ação Rápida</b>, dissipando 1d6 de <b>calor</b> e uma <b>condição</b>, e recarregando uma arma de <b>Carga</b>. Após ser ativado, o drone se desintegra imediatamente.",
          "actions": [
            {
              "name": "Activate Restock Drone",
              "activation": "Quick",
              "detail": "Dissipa <b>1d6 de calor</b> e uma <b>condição</b>, e recarrega uma arma de <b>Carga</b>."
            }
          ]
        }
      ],
      "terse": "Gaste uma carga para posicionar um drone de reabastecimento em qualquer espaço livre e adjacente, onde ele fica pronto ao final do seu turno.\nEnquanto estiverem adjacentes ao drone, personagens aliados podem ativá-lo como uma <b>Ação Rápida</b>, removendo 1d6 de <b>Calor</b> e uma condição, e recarregando uma arma com <b>Recarga<b>.\nApós ser ativado, o drone se desintegra imediatamente.\n<b>[Posicionável: Drone de Reabastecimento (Drone)]</b> Enquanto estiver adjacente a este drone, personagens aliados podem ativá-lo como uma <b>Ação Rápida</b>, dissipando 1d6 de <b>calor</b> e uma <b>condição</b>, e recarregando uma arma de <b>Carga</b>. Após ser ativado, o drone se desintegra imediatamente.",
      "detail": "Gaste uma carga para posicionar um drone de reabastecimento em qualquer espaço livre e adjacente, onde ele fica pronto ao final do seu turno.\nEnquanto estiverem adjacentes ao drone, personagens aliados podem ativá-lo como uma <b>Ação Rápida</b>, removendo 1d6 de <b>Calor</b> e uma condição, e recarregando uma arma com <b>Recarga<b>.\nApós ser ativado, o drone se desintegra imediatamente.\n<b>[Posicionável: Drone de Reabastecimento (Drone)]</b> Enquanto estiver adjacente a este drone, personagens aliados podem ativá-lo como uma <b>Ação Rápida</b>, dissipando 1d6 de <b>calor</b> e uma <b>condição</b>, e recarregando uma arma de <b>Carga</b>. Após ser ativado, o drone se desintegra imediatamente.",
      "source": "IPS-N",
      "license": "Lancaster",
      "license_level": 1
    },
    {
      "id": "ms_mule_harness",
      "category": "system",
      "name": "Arnês MULE",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Encaixes extras, correias e pontos de fixação permitem que outros personagens subam e montem no seu mecha.\nPersonagens adjacentes e não Imobilizados podem subir no seu mecha como uma <b>Ação Rápida</b>.\nEnquanto estiverem montados, eles ocupam o mesmo espaço que você, se movem quando você se mover (mesmo se estiverem <b>Lentos</b>) e se beneficiam de <b>Cobertura Leve</b>.\nSe você ou um passageiro ficar <b>Prostrado</b>, <b>Atordoado</b>, <b>Imobilizado</b> ou for destruído, vocês caem <b>Prostrados</b> em espaços adjacentes.\nOs passageiros podem descer como parte de qualquer movimento para longe, mas só podem subir no seu mecha como uma <b>Ação Rápida</b>.\nVocê pode transportar passageiros com um <b>Tamanho</b> combinado igual ao seu <b>Tamanho</b>, menos <b>Tamanho 1/2</b> (por exemplo, se seu mecha for <b>Tamanho 1</b>, você pode transportar um personagem de <b>Tamanho 1/2</b>; se for de <b>Tamanho 2</b>, você pode transportar um personagem de <b>Tamanho 1</b> e um personagem de <b>Tamanho 1/2</b>).",
      "detail": "Encaixes extras, correias e pontos de fixação permitem que outros personagens subam e montem no seu mecha.\nPersonagens adjacentes e não Imobilizados podem subir no seu mecha como uma <b>Ação Rápida</b>.\nEnquanto estiverem montados, eles ocupam o mesmo espaço que você, se movem quando você se mover (mesmo se estiverem <b>Lentos</b>) e se beneficiam de <b>Cobertura Leve</b>.\nSe você ou um passageiro ficar <b>Prostrado</b>, <b>Atordoado</b>, <b>Imobilizado</b> ou for destruído, vocês caem <b>Prostrados</b> em espaços adjacentes.\nOs passageiros podem descer como parte de qualquer movimento para longe, mas só podem subir no seu mecha como uma <b>Ação Rápida</b>.\nVocê pode transportar passageiros com um <b>Tamanho</b> combinado igual ao seu <b>Tamanho</b>, menos <b>Tamanho 1/2</b> (por exemplo, se seu mecha for <b>Tamanho 1</b>, você pode transportar um personagem de <b>Tamanho 1/2</b>; se for de <b>Tamanho 2</b>, você pode transportar um personagem de <b>Tamanho 1</b> e um personagem de <b>Tamanho 1/2</b>).",
      "source": "IPS-N",
      "license": "Lancaster",
      "license_level": 2
    },
    {
      "id": "ms_whitewash_sealant_spray",
      "category": "system",
      "name": "Spray Selante de Cal",
      "sp": 2,
      "type": "Sistema",
      "tags": [],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Este selante pode ser pulverizado em personagens ou espaços livres a até <b>Alcance 5</b> e na linha de visão.<br>Ele tem efeitos diferentes dependendo do alvo:<ul><li>Personagens Hostis: Seu alvo deve obter sucesso em um <b>salvamento de Agilidade</b> ou fica <b>Lento</b> até o final do próximo turno dele e remove todos os marcadores de <b>Queimadura</b>.</li><li>Personagens Aliados: Seu alvo remove todos os marcadores de <b>Queimadura</b>, mas fica <b>Lento</b> até o final do próximo turno dele.</li><li>Espaço Livre: Quaisquer chamas a até <b>Explosão</b> 1 são extintos e a área se torna <b>terreno difícil</b> pelo resto da cena.</li></ul>",
          "add_status": [
            {
              "id": "slow",
              "save": "agi",
              "duration": "next_turn_end_target"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Este selante pode ser pulverizado em personagens ou espaços livres a até <b>Alcance 5</b> e na linha de visão. Ele tem efeitos diferentes dependendo do alvo:<ul><li>Personagens Hostis: Seu alvo deve obter sucesso em um <b>salvamento de Agilidade</b> ou fica <b>Lento</b> até o final do próximo turno dele e remove todos os marcadores de <b>Queimadura</b>.</li><li>Personagens Aliados: Seu alvo remove todos os marcadores de <b>Queimadura</b>, mas fica <b>Lento</b> até o final do próximo turno dele.</li><li>Espaço Livre: Quaisquer chamas a até <b>Explosão</b> 1 são extintos e a área se torna <b>terreno difícil</b> pelo resto da cena.</li></ul>",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Este selante pode ser pulverizado em personagens ou espaços livres a até <b>Alcance 5</b> e na linha de visão. Ele tem efeitos diferentes dependendo do alvo:<ul><li>Personagens Hostis: Seu alvo deve obter sucesso em um <b>salvamento de Agilidade</b> ou fica <b>Lento</b> até o final do próximo turno dele e remove todos os marcadores de <b>Queimadura</b>.</li><li>Personagens Aliados: Seu alvo remove todos os marcadores de <b>Queimadura</b>, mas fica <b>Lento</b> até o final do próximo turno dele.</li><li>Espaço Livre: Quaisquer chamas a até <b>Explosão</b> 1 são extintos e a área se torna <b>terreno difícil</b> pelo resto da cena.</li></ul>",
      "source": "IPS-N",
      "license": "Lancaster",
      "license_level": 2
    },
    {
      "id": "ms_aceso_stabilizer",
      "category": "system",
      "name": "Estabilizador Aceso",
      "sp": 3,
      "type": "Shield",
      "tags": [
        "Limitado 3",
        "Blindagem",
        "Escudo",
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Gaste uma carga para disparar este pequeno sistema de autoarmação em um mecha aliado a até <b>Alcance 5</b>.<br>Ele recebe <b>Blindagem</b> igual ao seu <b>Brio +4</b>.<br>Enquanto tiver esta <b>Blindagem</b>, ele recebe <b>Imunidade</b> a <b>Impedido</b> e <b>Bloqueado</b>.",
          "add_resist": [
            {
              "immunity": "impaired"
            },
            {
              "immunity": "jammed"
            }
          ],
          "add_other": [
            {
              "type": "overshield",
              "val": "{grit} + 4",
              "aoe": true
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Gaste uma carga para disparar este pequeno sistema de autoarmação em um mecha aliado a até <b>Alcance 5</b>. Ele recebe <b>Blindagem</b> igual ao seu <b>Brio +4</b>. Enquanto tiver esta <b>Blindagem</b>, ele recebe <b>Imunidade</b> a <b>Impedido</b> e <b>Bloqueado</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Gaste uma carga para disparar este pequeno sistema de autoarmação em um mecha aliado a até <b>Alcance 5</b>. Ele recebe <b>Blindagem</b> igual ao seu <b>Brio +4</b>. Enquanto tiver esta <b>Blindagem</b>, ele recebe <b>Imunidade</b> a <b>Impedido</b> e <b>Bloqueado</b>.",
      "source": "IPS-N",
      "license": "Lancaster",
      "license_level": 3
    },
    {
      "id": "ms_bulwark_mods",
      "category": "system",
      "name": "Modificações Baluarte",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Os membros estendidos, a <b>Armadura</b> adicional, os Sistemas redundantes e outros melhoramentos do seu mecha permitem que você ignore <b>terreno difícil</b>.",
      "detail": "Os membros estendidos, a <b>Armadura</b> adicional, os Sistemas redundantes e outros melhoramentos do seu mecha permitem que você ignore <b>terreno difícil</b>.",
      "source": "IPS-N",
      "license": "Nelson",
      "license_level": 1
    },
    {
      "id": "ms_armor_lock_plating",
      "category": "system",
      "name": "Placas de Bloqueio de Armadura",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único",
        "Calor 2 (Próprio)"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Você pode <b>Suportar</b> enquanto <b>Agarrar</b>.\nQuando o faz, qualquer agarramento que esteja te afetando termina.\nAlém disso, quando <b>Suportar</b>, você recebe os seguintes benefícios até o final do seu próximo turno:<ul><li>Ataques contra você sofrem +1 Dificuldade.</li><li>Você não pode falhar em salvamentos ou testes disputados de Agilidade ou <b>Casco</b>.</li><li>Você adquire <b>Imunidade</b> a <b>Repulsão</b> , <b>Agarrar</b>, ficar <b>Prostrado</b> e ser movido por qualquer força externa menor que <b>Tamanho 5</b>.</li></ul>",
      "detail": "Você pode <b>Suportar</b> enquanto <b>Agarrar</b>.\nQuando o faz, qualquer agarramento que esteja te afetando termina.\nAlém disso, quando <b>Suportar</b>, você recebe os seguintes benefícios até o final do seu próximo turno:<ul><li>Ataques contra você sofrem +1 Dificuldade.</li><li>Você não pode falhar em salvamentos ou testes disputados de Agilidade ou <b>Casco</b>.</li><li>Você adquire <b>Imunidade</b> a <b>Repulsão</b> , <b>Agarrar</b>, ficar <b>Prostrado</b> e ser movido por qualquer força externa menor que <b>Tamanho 5</b>.</li></ul>",
      "source": "IPS-N",
      "license": "Nelson",
      "license_level": 2
    },
    {
      "id": "ms_ramjet",
      "category": "system",
      "name": "Investida a Jato",
      "sp": 3,
      "type": "Sistema",
      "tags": [
        "Único",
        "Calor 2 (Próprio)"
      ],
      "actions": [
        {
          "activation": "Protocol",
          "detail": "Até o início do seu próximo turno, você pode se mover +2 espaços quando <b>Impulsionar</b> e seus ataques corpo a corpo (incluindo <b>Empurrar</b>, <b>Agarrar</b> etc.) recebem <b>Repulsão 2</b>.<br>Durante esse tempo, quando você se mover, você deve mover sua <b>Velocidade</b> completa em <b>Linha</b> reta; no entanto, você pode parar se colidir com uma obstrução ou personagem hostil, e pode mudar de direção entre movimentos separados (por exemplo, movimentos padrão, <b>Impulsionar</b> etc.)."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Protocolo</b>]</b> Habilidade: Até o início do seu próximo turno, você pode se mover +2 espaços quando <b>Impulsionar</b> e seus ataques corpo a corpo (incluindo <b>Empurrar</b>, <b>Agarrar</b> etc.) recebem <b>Repulsão 2</b>. Durante esse tempo, quando você se mover, você deve mover sua <b>Velocidade</b> completa em <b>Linha</b> reta; no entanto, você pode parar se colidir com uma obstrução ou personagem hostil, e pode mudar de direção entre movimentos separados (por exemplo, movimentos padrão, <b>Impulsionar</b> etc.).",
      "detail": "<b>[<b>Protocolo</b>]</b> Habilidade: Até o início do seu próximo turno, você pode se mover +2 espaços quando <b>Impulsionar</b> e seus ataques corpo a corpo (incluindo <b>Empurrar</b>, <b>Agarrar</b> etc.) recebem <b>Repulsão 2</b>. Durante esse tempo, quando você se mover, você deve mover sua <b>Velocidade</b> completa em <b>Linha</b> reta; no entanto, você pode parar se colidir com uma obstrução ou personagem hostil, e pode mudar de direção entre movimentos separados (por exemplo, movimentos padrão, <b>Impulsionar</b> etc.).",
      "source": "IPS-N",
      "license": "Nelson",
      "license_level": 3
    },
    {
      "id": "ms_bb_breach_blast_charges",
      "category": "system",
      "name": "Cargas de Arrombamento/Explosão AE",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 3",
        "Único",
        "Granada"
      ],
      "actions": [
        {
          "name": "Granada Térmica",
          "range": [
            {
              "type": "Range",
              "val": 5
            },
            {
              "type": "Blast",
              "val": 1
            }
          ],
          "damage": [
            {
              "type": "Energy",
              "val": "1d6",
              "save": "agi",
              "save_half": true
            }
          ],
          "detail": "Gaste uma carga para este efeito (Granada, <b>Alcance 5</b>, <b>Explosão 1</b>): Todos os personagens na área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>1d6 de Energia</b>.<br>Em caso de sucesso, eles sofrem metade do <b>Dano</b>.<br>Objetos e terreno são atingidos automaticamente e sofrem <b>10 de Energia</b> (PF)."
        }
      ],
      "deployables": [
        {
          "name": "Carga de Arrombamento",
          "type": "Mine",
          "detail": "Além de espaços livres adjacentes, esta mina também pode ser plantada em paredes, peças de cobertura e terreno adjacentes. Uma vez armada, esta mina deve ser detonada com uma <b>Ação Rápida</b>. Personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>2d6 de Dano explosivo</b>. Em caso de sucesso, eles sofrem metade do <b>Dano</b>. Objetos e terreno são atingidos automaticamente e sofrem <b>30 de Dano explosivo</b>.",
          "actions": [
            {
              "name": "Detonate",
              "activation": "Quick",
              "detail": "Personagens dentro de uma área de <b>Explosão 1</b> devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>2d6 de Dano explosivo</b>. Em caso de sucesso, eles sofrem metade do <b>Dano</b>. Objetos e terreno são atingidos automaticamente e sofrem <b>30 de Dano explosivo</b>."
            }
          ]
        }
      ],
      "terse": "<b>[Ação]</b> Granada Térmica: Gaste uma carga para este efeito (Granada, <b>Alcance 5</b>, <b>Explosão 1</b>): Todos os personagens na área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>1d6 de Energia</b>. Em caso de sucesso, eles sofrem metade do <b>Dano</b>. Objetos e terreno são atingidos automaticamente e sofrem <b>10 de Energia</b> (PF).\n<b>[Posicionável: Carga de Arrombamento (Mine)]</b> Além de espaços livres adjacentes, esta mina também pode ser plantada em paredes, peças de cobertura e terreno adjacentes. Uma vez armada, esta mina deve ser detonada com uma <b>Ação Rápida</b>. Personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>2d6 de Dano explosivo</b>. Em caso de sucesso, eles sofrem metade do <b>Dano</b>. Objetos e terreno são atingidos automaticamente e sofrem <b>30 de Dano explosivo</b>.",
      "detail": "<b>[Ação]</b> Granada Térmica: Gaste uma carga para este efeito (Granada, <b>Alcance 5</b>, <b>Explosão 1</b>): Todos os personagens na área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>1d6 de Energia</b>. Em caso de sucesso, eles sofrem metade do <b>Dano</b>. Objetos e terreno são atingidos automaticamente e sofrem <b>10 de Energia</b> (PF).\n<b>[Posicionável: Carga de Arrombamento (Mine)]</b> Além de espaços livres adjacentes, esta mina também pode ser plantada em paredes, peças de cobertura e terreno adjacentes. Uma vez armada, esta mina deve ser detonada com uma <b>Ação Rápida</b>. Personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>2d6 de Dano explosivo</b>. Em caso de sucesso, eles sofrem metade do <b>Dano</b>. Objetos e terreno são atingidos automaticamente e sofrem <b>30 de Dano explosivo</b>.",
      "source": "IPS-N",
      "license": "Raleigh",
      "license_level": 1
    },
    {
      "id": "ms_roland_chamber",
      "category": "system",
      "name": "Câmara \"Roland\"",
      "sp": 3,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Roland Chamber",
          "activation": "None",
          "trigger": "Você ataca com uma arma de <b>Recarga</b> após recarregar qualquer arma.",
          "detail": "Em um acerto: Este ataque causa <b>+1d6 de Dano explosivo</b> de bônus, e o alvo deve obter sucesso em um <b>salvamento de Casco</b> ou fica <b>Prostrado</b>.",
          "add_status": [
            {
              "id": "prone",
              "save": "hull"
            }
          ],
          "damage": [
            {
              "type": "Explosive",
              "val": "1d6"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "Quando recarrega qualquer arma, seu próximo ataque usando uma arma com <b>Recarga</b> ganha este efeito:\nAo Acertar: Este ataque causa +1d6 <b>Explosivo de Dano bônus</b>, e os alvos devem ser bem-sucedidos em um <b>salvamento de Casco</b> ou ficam <b>Prostrados</b>.\n<b>[None]</b> Roland Chamber: Em um acerto: Este ataque causa <b>+1d6 de Dano explosivo</b> de bônus, e o alvo deve obter sucesso em um <b>salvamento de Casco</b> ou fica <b>Prostrado</b>.",
      "detail": "Quando recarrega qualquer arma, seu próximo ataque usando uma arma com <b>Recarga</b> ganha este efeito:\nAo Acertar: Este ataque causa +1d6 <b>Explosivo de Dano bônus</b>, e os alvos devem ser bem-sucedidos em um <b>salvamento de Casco</b> ou ficam <b>Prostrados</b>.\n<b>[None]</b> Roland Chamber: Em um acerto: Este ataque causa <b>+1d6 de Dano explosivo</b> de bônus, e o alvo deve obter sucesso em um <b>salvamento de Casco</b> ou fica <b>Prostrado</b>.",
      "source": "IPS-N",
      "license": "Raleigh",
      "license_level": 2
    },
    {
      "id": "ms_siege_ram",
      "category": "system",
      "name": "Aríete de Cerco",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Quando fizer uma ação de <b>Empurrar</b>, você causa 2 Cinético no acerto, e causa 10 Cinético(PF) quando fizer uma ação de <b>Empurrar</b> em objetos e terreno.",
      "detail": "Quando fizer uma ação de <b>Empurrar</b>, você causa 2 Cinético no acerto, e causa 10 Cinético(PF) quando fizer uma ação de <b>Empurrar</b> em objetos e terreno.",
      "source": "IPS-N",
      "license": "Tortuga",
      "license_level": 1
    },
    {
      "id": "ms_hyperdense_armor",
      "category": "system",
      "name": "Armadura Hiperdensificada",
      "sp": 3,
      "type": "Shield",
      "tags": [
        "Único",
        "Escudo"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Quando ativada, esta <b>Armadura</b> se endurece em uma superfície cintilante e reflexiva que oferece proteção incomparável.<br>Você adquire <b>Resistência</b> a todo <b>Dano</b> de <b>Calor</b> e <b>Queimadura</b> de ataques que se originarem de além de <b>Alcance 3</b>; no entanto, você fica <b>Lento</b> e causa metade de <b>Dano</b>, de <b>Queimadura</b> e de <b>Calor</b> a personagens além de <b>Alcance 3</b>.",
          "add_resist": [
            {
              "resist": "all",
              "target": "self"
            }
          ],
          "add_status": [
            {
              "id": "slow",
              "target": "self"
            }
          ],
          "add_special": [
            {
              "attribute": "HyperDense Armor Active",
              "target": "self"
            }
          ]
        },
        {
          "name": "Desativar Armadura Hiperdensificada",
          "activation": "Quick",
          "detail": "A Armadura Hiperdensificada pode ser desativada com uma <b>Ação Rápida</b>.",
          "remove_special": [
            {
              "attribute": "HyperDense Armor Active",
              "target": "self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Quando ativada, esta <b>Armadura</b> se endurece em uma superfície cintilante e reflexiva que oferece proteção incomparável. Você adquire <b>Resistência</b> a todo <b>Dano</b> de <b>Calor</b> e <b>Queimadura</b> de ataques que se originarem de além de <b>Alcance 3</b>; no entanto, você fica <b>Lento</b> e causa metade de <b>Dano</b>, de <b>Queimadura</b> e de <b>Calor</b> a personagens além de <b>Alcance 3</b>.\n<b>[<b>Ação Rápida</b>]</b> Desativar <b>Armadura</b> Hiperdensificada: A <b>Armadura</b> Hiperdensificada pode ser desativada com uma <b>Ação Rápida</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Quando ativada, esta <b>Armadura</b> se endurece em uma superfície cintilante e reflexiva que oferece proteção incomparável. Você adquire <b>Resistência</b> a todo <b>Dano</b> de <b>Calor</b> e <b>Queimadura</b> de ataques que se originarem de além de <b>Alcance 3</b>; no entanto, você fica <b>Lento</b> e causa metade de <b>Dano</b>, de <b>Queimadura</b> e de <b>Calor</b> a personagens além de <b>Alcance 3</b>.\n<b>[<b>Ação Rápida</b>]</b> Desativar <b>Armadura</b> Hiperdensificada: A <b>Armadura</b> Hiperdensificada pode ser desativada com uma <b>Ação Rápida</b>.",
      "source": "IPS-N",
      "license": "Tortuga",
      "license_level": 3
    },
    {
      "id": "ms_webjaw_snare",
      "category": "system",
      "name": "Armadilha Boca de Teia",
      "sp": 1,
      "type": "Deployable",
      "tags": [
        "Limitado 2",
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "type": "Deployable",
          "name": "Armadilha Boca de Teia",
          "activation": "Quick",
          "size": 1,
          "hp": 10,
          "evasion": 5,
          "detail": "A armadilha é acionada quando qualquer personagem se mover sobre ela.<br>Ele deve ser bem-sucedido em um  <b>salvamento de Casco</b> ou sofre 1d6 Cinético(PF) e fica <b>Imobilizado</b>.<br>Esse efeito dura até que a armadilha seja destruída.",
          "damage": [
            {
              "type": "Kinetic",
              "val": "1d6",
              "ap": true,
              "save": "hull"
            }
          ],
          "add_status": [
            {
              "id": "immobilized",
              "save": "hull"
            }
          ]
        }
      ],
      "terse": "Gaste uma carga para ativar uma armadilha Boca de Teia em um espaço livre e adjacente, onde ela será armada no final do seu turno.\n<b>[Posicionável: Armadilha Boca de Teia (Deployable)]</b> A armadilha é acionada quando qualquer personagem se mover sobre ela. Ele deve ser bem-sucedido em um <b>salvamento de Casco</b> ou sofre 1d6 Cinético(PF) e fica <b>Imobilizado</b>. Esse efeito dura até que a armadilha seja destruída.",
      "detail": "Gaste uma carga para ativar uma armadilha Boca de Teia em um espaço livre e adjacente, onde ela será armada no final do seu turno.\n<b>[Posicionável: Armadilha Boca de Teia (Deployable)]</b> A armadilha é acionada quando qualquer personagem se mover sobre ela. Ele deve ser bem-sucedido em um <b>salvamento de Casco</b> ou sofre 1d6 Cinético(PF) e fica <b>Imobilizado</b>. Esse efeito dura até que a armadilha seja destruída.",
      "source": "IPS-N",
      "license": "Vlad",
      "license_level": 1
    },
    {
      "id": "ms_caltrop_launcher",
      "category": "system",
      "name": "Lançador de Estrepes",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "type": "Deployable",
          "name": "Caltrop Field",
          "activation": "Quick",
          "size": 3,
          "detail": "A área afetada se torna terreno difícil pelo resto da cena, e os mechas sofrem 1d3 de <b>Dano explosivo</b> AP quando entram na área afetada pela primeira vez em um turno ou terminam seu turno dentro dela.",
          "damage": [
            {
              "type": "Explosive",
              "val": "1d3",
              "ap": true
            }
          ],
          "tags": [
            {
              "id": "tg_invulnerable"
            }
          ]
        }
      ],
      "terse": "Este sistema cobre uma área livre de <b>Explosão 1</b> a até <b>Alcance 5</b> com estrepes explosivos. A área afetada se torna <b>terreno difícil</b> pelo resto da cena, e os mechas sofrem 1d3 de <b>Dano de Energia PF</b> quando entram na área afetada pela primeira vez em uma rodada ou terminam seu turno dentro dela.\n<b>[Posicionável: Caltrop Field (Deployable)]</b> A área afetada se torna terreno difícil pelo resto da cena, e os mechas sofrem 1d3 de <b>Dano explosivo</b> AP quando entram na área afetada pela primeira vez em um turno ou terminam seu turno dentro dela.",
      "detail": "Este sistema cobre uma área livre de <b>Explosão 1</b> a até <b>Alcance 5</b> com estrepes explosivos. A área afetada se torna <b>terreno difícil</b> pelo resto da cena, e os mechas sofrem 1d3 de <b>Dano de Energia PF</b> quando entram na área afetada pela primeira vez em uma rodada ou terminam seu turno dentro dela.\n<b>[Posicionável: Caltrop Field (Deployable)]</b> A área afetada se torna terreno difícil pelo resto da cena, e os mechas sofrem 1d3 de <b>Dano explosivo</b> AP quando entram na área afetada pela primeira vez em um turno ou terminam seu turno dentro dela.",
      "source": "IPS-N",
      "license": "Vlad",
      "license_level": 2
    },
    {
      "id": "ms_charged_stake",
      "category": "system",
      "name": "Estaca Energizada",
      "sp": 2,
      "type": "Sistema",
      "tags": [],
      "actions": [
        {
          "activation": "Full",
          "detail": "Este sistema dispara uma estaca energizada em um personagem adjacente a você.<br>Seu alvo deve ser bem-sucedido em um  <b>salvamento de Casco</b> ou é empalado pela estaca, sofrendo 1d6 de <b>Energia</b>(PF) e ficando <b>Imobilizado</b> enquanto estiver empalado.<br>No final de cada um de seus turnos, um personagem empalado sofre 1d6 de <b>Energia</b>(PF).<br>Um personagem empalado pode repetir este salvamento como uma <b>Ação Completa</b> para remover a estaca e se libertar — essa é a única maneira de encerrar a imobilização.<br>Você só pode afetar um personagem com a estaca de cada vez.",
          "damage": [
            {
              "type": "Energy",
              "val": "1d6",
              "ap": true,
              "save": "hull"
            }
          ],
          "add_status": [
            {
              "id": "immobilized",
              "save": "hull"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Completa</b>]</b> Habilidade: Este sistema dispara uma estaca energizada em um personagem adjacente a você. Seu alvo deve ser bem-sucedido em um <b>salvamento de Casco</b> ou é empalado pela estaca, sofrendo 1d6 de <b>Energia</b>(PF) e ficando <b>Imobilizado</b> enquanto estiver empalado. No final de cada um de seus turnos, um personagem empalado sofre 1d6 de <b>Energia</b>(PF). Um personagem empalado pode repetir este salvamento como uma <b>Ação Completa</b> para remover a estaca e se libertar — essa é a única maneira de encerrar a imobilização. Você só pode afetar um personagem com a estaca de cada vez.",
      "detail": "<b>[<b>Ação Completa</b>]</b> Habilidade: Este sistema dispara uma estaca energizada em um personagem adjacente a você. Seu alvo deve ser bem-sucedido em um <b>salvamento de Casco</b> ou é empalado pela estaca, sofrendo 1d6 de <b>Energia</b>(PF) e ficando <b>Imobilizado</b> enquanto estiver empalado. No final de cada um de seus turnos, um personagem empalado sofre 1d6 de <b>Energia</b>(PF). Um personagem empalado pode repetir este salvamento como uma <b>Ação Completa</b> para remover a estaca e se libertar — essa é a única maneira de encerrar a imobilização. Você só pode afetar um personagem com a estaca de cada vez.",
      "source": "IPS-N",
      "license": "Vlad",
      "license_level": 3
    },
    {
      "id": "ms_ferrous_lash",
      "category": "system",
      "name": "Chicote Férrico",
      "sp": 2,
      "type": "Sistema",
      "tags": [],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Escolha um personagem a até <b>Alcance 8</b> e na linha de visão.<br>Se ele for aliado, você pode puxá-lo 5 espaços em qualquer direção; se for hostil, ele deve obter sucesso em um <b>salvamento de Agilidade</b> ou é puxado 5 espaços em uma direção à sua escolha.<br>Esse movimento ignora engajamento e não provoca reações.<br>Se um alvo hostil movido por este sistema colidir com um obstáculo ou outro mecha, ele para de se mover e fica <b>Prostrado</b>.",
          "range": [
            {
              "type": "Range",
              "val": 8
            }
          ],
          "save": "agi"
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Escolha um personagem a até <b>Alcance 8</b> e na linha de visão. Se ele for aliado, você pode puxá-lo 5 espaços em qualquer direção; se for hostil, ele deve obter sucesso em um <b>salvamento de Agilidade</b> ou é puxado 5 espaços em uma direção à sua escolha. Esse movimento ignora engajamento e não provoca reações. Se um alvo hostil movido por este sistema colidir com um obstáculo ou outro mecha, ele para de se mover e fica <b>Prostrado</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Escolha um personagem a até <b>Alcance 8</b> e na linha de visão. Se ele for aliado, você pode puxá-lo 5 espaços em qualquer direção; se for hostil, ele deve obter sucesso em um <b>salvamento de Agilidade</b> ou é puxado 5 espaços em uma direção à sua escolha. Esse movimento ignora engajamento e não provoca reações. Se um alvo hostil movido por este sistema colidir com um obstáculo ou outro mecha, ele para de se mover e fica <b>Prostrado</b>.",
      "source": "SSC",
      "license": "Black Witch",
      "license_level": 1
    },
    {
      "id": "ms_iceout_drone",
      "category": "system",
      "name": "Drone Congelador",
      "sp": 2,
      "type": "Drone",
      "tags": [
        "Limitado 2",
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "type": "Drone",
          "name": "Drone Congelador",
          "activation": "Quick",
          "size": 0.5,
          "hp": 5,
          "edef": 10,
          "evasion": 10,
          "detail": "Personagens que estiverem pelo menos parcialmente dentro da área afetada ganham <b>Imunidade</b> a todas as ações de programar e não podem realizar ações de programar.<br>As condições e efeitos existentes causados por ações de programar não são removidos, mas os personagens têm <b>Imunidade</b> a eles enquanto estiverem na área, e podem realizar salvamentos contra eles normalmente.<br>O Drone Congelador pode ser movido para qualquer ponto dentro do <b>Alcance dos Sensores</b> como uma <b>Ação Rápida</b>.<br>Ele não pode ser recolhido e expira no final da cena.",
          "actions": [
            {
              "name": "Mover Drone Congelador",
              "activation": "Quick",
              "detail": "O Drone Congelador pode ser movido para qualquer ponto dentro do <b>Alcance dos Sensores</b>."
            }
          ]
        }
      ],
      "terse": "Gaste uma carga para posicionar um Drone Congelador em um espaço livre ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, onde ele paira no lugar e gera um campo de <b>Emanação</b> 1.\n<b>[Posicionável: Drone Congelador (Drone)]</b> Personagens que estiverem pelo menos parcialmente dentro da área afetada ganham <b>Imunidade</b> a todas as ações de programar e não podem realizar ações de programar. As condições e efeitos existentes causados por ações de programar não são removidos, mas os personagens têm <b>Imunidade</b> a eles enquanto estiverem na área, e podem realizar salvamentos contra eles normalmente. O Drone Congelador pode ser movido para qualquer ponto dentro do <b>Alcance dos Sensores</b> como uma <b>Ação Rápida</b>. Ele não pode ser recolhido e expira no final da cena.",
      "detail": "Gaste uma carga para posicionar um Drone Congelador em um espaço livre ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, onde ele paira no lugar e gera um campo de <b>Emanação</b> 1.\n<b>[Posicionável: Drone Congelador (Drone)]</b> Personagens que estiverem pelo menos parcialmente dentro da área afetada ganham <b>Imunidade</b> a todas as ações de programar e não podem realizar ações de programar. As condições e efeitos existentes causados por ações de programar não são removidos, mas os personagens têm <b>Imunidade</b> a eles enquanto estiverem na área, e podem realizar salvamentos contra eles normalmente. O Drone Congelador pode ser movido para qualquer ponto dentro do <b>Alcance dos Sensores</b> como uma <b>Ação Rápida</b>. Ele não pode ser recolhido e expira no final da cena.",
      "source": "SSC",
      "license": "Black Witch",
      "license_level": 2
    },
    {
      "id": "ms_perimeter_command_plate",
      "category": "system",
      "name": "Chapa de Comando Perimetral",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "name": "Chapa de Comando Perimetral",
          "type": "Deployable",
          "size": 2,
          "hp": 20,
          "evasion": 5,
          "detail": "A placa é ativada para um personagem na primeira vez que ele entra em seu espaço durante uma rodada, ou se ele terminar seu turno lá.<br>Ao imprimir, escolha uma configuração:<ul><li>Repelir: Personagens hostis que se movem para a CCP devem ter sucesso em um  <b>salvamento de Casco</b> ou são empurrados 3 espaços na direção de sua escolha.<br>Se isso os fizer colidir com uma obstrução, eles são derrubados (<b>Prostrados</b>).<br>Personagens aliados que entram no espaço podem voar imediatamente 3 espaços em qualquer direção como uma <b>Ação Livre</b>.</li><li>Atrair: Personagens que se movem para a CCP devem ter sucesso em um  <b>salvamento de Casco</b> ou ficam <b>Imobilizados</b>.<br>Eles podem remover <b>Imobilizado</b> repetindo o salvamento com sucesso como uma <b>Ação Rápida</b>; também é removido se a CCP for destruída.",
          "actions": [
            {
              "name": "Repulse",
              "activation": "None",
              "trigger": "Personagens hostis que entram na CCP",
              "detail": "Deve obter sucesso em um  <b>salvamento de Casco</b> ou é empurrado 3 espaços na direção de sua escolha. Se isso os fizer colidir com uma obstrução, ele é derrubado (<b>Prostrado</b>).",
              "save": "hull"
            },
            {
              "name": "Attract",
              "activation": "None",
              "trigger": "Personagens que entram na CCP",
              "detail": "Deve obter sucesso em um  <b>salvamento de Casco</b> ou fica <b>Imobilizado</b>. Ele pode se livrar do <b>Imobilizado</b> obtendo sucesso em um salvamento repetido como uma <b>Ação Rápida</b>; também é removido se a CCP for destruída.",
              "add_status": [
                {
                  "id": "immobilized",
                  "save": "hull"
                }
              ]
            }
          ]
        }
      ],
      "terse": "Esta Chapa de Comando Perimetral (PCP) de metal Pesado pode ser impressa rapidamente e implantada em um espaço livre de 2x2 dentro do <b>Alcance 5</b>.\nA PCP é plana, não obstrui o movimento e dura pelo resto da cena.\nSe você criar uma nova PCP, a antiga se desintegra.\n<b>[Posicionável: Chapa de Comando Perimetral (Deployable)]</b> A placa é ativada para um personagem na primeira vez que ele entra em seu espaço durante uma rodada, ou se ele terminar seu turno lá. Ao imprimir, escolha uma configuração:<ul><li>Repelir: Personagens hostis que se movem para a CCP devem ter sucesso em um <b>salvamento de Casco</b> ou são empurrados 3 espaços na direção de sua escolha. Se isso os fizer colidir com uma obstrução, eles são derrubados (<b>Prostrados</b>). Personagens aliados que entram no espaço podem voar imediatamente 3 espaços em qualquer direção como uma <b>Ação Livre</b>.</li><li>Atrair: Personagens que se movem para a CCP devem ter sucesso em um <b>salvamento de Casco</b> ou ficam <b>Imobilizados</b>. Eles podem remover <b>Imobilizado</b> repetindo o salvamento com sucesso como uma <b>Ação Rápida</b>; também é removido se a CCP for destruída.",
      "detail": "Esta Chapa de Comando Perimetral (PCP) de metal Pesado pode ser impressa rapidamente e implantada em um espaço livre de 2x2 dentro do <b>Alcance 5</b>.\nA PCP é plana, não obstrui o movimento e dura pelo resto da cena.\nSe você criar uma nova PCP, a antiga se desintegra.\n<b>[Posicionável: Chapa de Comando Perimetral (Deployable)]</b> A placa é ativada para um personagem na primeira vez que ele entra em seu espaço durante uma rodada, ou se ele terminar seu turno lá. Ao imprimir, escolha uma configuração:<ul><li>Repelir: Personagens hostis que se movem para a CCP devem ter sucesso em um <b>salvamento de Casco</b> ou são empurrados 3 espaços na direção de sua escolha. Se isso os fizer colidir com uma obstrução, eles são derrubados (<b>Prostrados</b>). Personagens aliados que entram no espaço podem voar imediatamente 3 espaços em qualquer direção como uma <b>Ação Livre</b>.</li><li>Atrair: Personagens que se movem para a CCP devem ter sucesso em um <b>salvamento de Casco</b> ou ficam <b>Imobilizados</b>. Eles podem remover <b>Imobilizado</b> repetindo o salvamento com sucesso como uma <b>Ação Rápida</b>; também é removido se a CCP for destruída.",
      "source": "SSC",
      "license": "Black Witch",
      "license_level": 2
    },
    {
      "id": "ms_black_ice_module",
      "category": "system",
      "name": "Módulo de GELO Negro",
      "sp": 3,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Ataques Tecnológicos contra você ou personagens aliados adjacentes sofrem <b>+1 de Dificuldade</b>.\nCada <b>ataque tecnológico</b> subsequente contra você ou um personagem aliado adjacente sofre um adicional de <b>+1 de Dificuldade</b>, até um máximo de +3 de Dificuldade.\nSuas penalidades de GELO Negro retornam ao padrão (reiniciando para <b>+1 de Dificuldade</b>) quando aumentariam para +4 de Dificuldade ou no final da cena.\nPersonagens aliados perdem esse benefício quando deixam de estar adjacentes.",
      "detail": "Ataques Tecnológicos contra você ou personagens aliados adjacentes sofrem <b>+1 de Dificuldade</b>.\nCada <b>ataque tecnológico</b> subsequente contra você ou um personagem aliado adjacente sofre um adicional de <b>+1 de Dificuldade</b>, até um máximo de +3 de Dificuldade.\nSuas penalidades de GELO Negro retornam ao padrão (reiniciando para <b>+1 de Dificuldade</b>) quando aumentariam para +4 de Dificuldade ou no final da cena.\nPersonagens aliados perdem esse benefício quando deixam de estar adjacentes.",
      "source": "SSC",
      "license": "Black Witch",
      "license_level": 3
    },
    {
      "id": "ms_magnetic_shield",
      "category": "system",
      "name": "Escudo Magnético",
      "sp": 2,
      "type": "Shield",
      "tags": [
        "Escudo",
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Este sistema cria um campo de força de <b>Linha</b> de 4, com 4 espaços de altura — com pelo menos 1 espaço adjacente a você — que é um obstáculo para mechas e personagens feitos pelo menos parcialmente de metal.<br>Ele dura pelo restante da cena, e se um novo for colocado, o antigo é desativado.<br>O campo de força não bloqueia linha de visão, mas fornece <b>Cobertura Leve</b>.<br>Personagens adquirem <b>Resistência</b> a danos <b>Cinético</b> e <b>Explosivo</b> enquanto se beneficiam dessa cobertura."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Este sistema cria um campo de força de <b>Linha</b> de 4, com 4 espaços de altura — com pelo menos 1 espaço adjacente a você — que é um obstáculo para mechas e personagens feitos pelo menos parcialmente de metal. Ele dura pelo restante da cena, e se um novo for colocado, o antigo é desativado. O campo de força não bloqueia linha de visão, mas fornece <b>Cobertura Leve</b>. Personagens adquirem <b>Resistência</b> a danos <b>Cinético</b> e <b>Explosivo</b> enquanto se beneficiam dessa cobertura.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Este sistema cria um campo de força de <b>Linha</b> de 4, com 4 espaços de altura — com pelo menos 1 espaço adjacente a você — que é um obstáculo para mechas e personagens feitos pelo menos parcialmente de metal. Ele dura pelo restante da cena, e se um novo for colocado, o antigo é desativado. O campo de força não bloqueia linha de visão, mas fornece <b>Cobertura Leve</b>. Personagens adquirem <b>Resistência</b> a danos <b>Cinético</b> e <b>Explosivo</b> enquanto se beneficiam dessa cobertura.",
      "source": "SSC",
      "license": "Black Witch",
      "license_level": 3
    },
    {
      "id": "ms_high_stress_mag_clamps",
      "category": "system",
      "name": "Engates Magnéticos de Alta Tensão",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Você trata todas as superfícies sólidas como solo plano para fins de movimento; você pode se mover sobre elas normalmente em vez de escalar, embora comece a cair se ficar <b>Prostrado</b>.",
      "detail": "Você trata todas as superfícies sólidas como solo plano para fins de movimento; você pode se mover sobre elas normalmente em vez de escalar, embora comece a cair se ficar <b>Prostrado</b>.",
      "source": "SSC",
      "license": "Death’s Head",
      "license_level": 1
    },
    {
      "id": "ms_tracking_bug",
      "category": "system",
      "name": "Grampo Rastreador",
      "sp": 2,
      "type": "Tech",
      "tags": [],
      "actions": [
        {
          "activation": "Quick Tech",
          "detail": "Faça um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b>.<br>Em caso de acerto, você sabe a localização exata dele, PV, <b>Estrutura</b> e <b>Velocidade</b> pela duração.<br>Ele não pode <b>Esconder-se</b> e você ignora o estado <b>invisível</b> dele.Para remover o drone de rastreamento, ele deve obter sucesso em um teste de Engenharia como uma <b>Ação Rápida</b>; caso contrário, ele se desativa no final da cena.",
          "attack": "tech"
        }
      ],
      "deployables": [],
      "terse": "<b>[Quick Tech]</b> Habilidade: Faça um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b>. Em caso de acerto, você sabe a localização exata dele, PV, <b>Estrutura</b> e <b>Velocidade</b> pela duração. Ele não pode <b>Esconder-se</b> e você ignora o estado <b>invisível</b> dele.Para remover o drone de rastreamento, ele deve obter sucesso em um teste de Engenharia como uma <b>Ação Rápida</b>; caso contrário, ele se desativa no final da cena.",
      "detail": "<b>[Quick Tech]</b> Habilidade: Faça um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b>. Em caso de acerto, você sabe a localização exata dele, PV, <b>Estrutura</b> e <b>Velocidade</b> pela duração. Ele não pode <b>Esconder-se</b> e você ignora o estado <b>invisível</b> dele.Para remover o drone de rastreamento, ele deve obter sucesso em um teste de Engenharia como uma <b>Ação Rápida</b>; caso contrário, ele se desativa no final da cena.",
      "source": "SSC",
      "license": "Death’s Head",
      "license_level": 1
    },
    {
      "id": "ms_core_siphon",
      "category": "system",
      "name": "Sifão de Núcleo",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Protocol",
          "detail": "Quando ativar este protocolo, você recebe <b>+1 de Precisão</b> em sua primeira rolagem de ataque nesta rodada, mas sofre +1 Dificuldade em todas as outras rolagens de ataque até o final da rodada.",
          "active_effects": [
            {
              "name": "Core Siphon Active",
              "detail": "Você recebe +1 de <b>Precisão</b> em sua primeira rolagem de ataque nesta rodada, mas sofre +1 Dificuldade em todas as outras rolagens de ataque até o final da rodada."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Protocolo</b>]</b> Habilidade: Quando ativar este protocolo, você recebe <b>+1 de Precisão</b> em sua primeira rolagem de ataque nesta rodada, mas sofre +1 Dificuldade em todas as outras rolagens de ataque até o final da rodada.",
      "detail": "<b>[<b>Protocolo</b>]</b> Habilidade: Quando ativar este protocolo, você recebe <b>+1 de Precisão</b> em sua primeira rolagem de ataque nesta rodada, mas sofre +1 Dificuldade em todas as outras rolagens de ataque até o final da rodada.",
      "source": "SSC",
      "license": "Death’s Head",
      "license_level": 2
    },
    {
      "id": "ms_kinetic_compensator",
      "category": "system",
      "name": "Compensador Cinético",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Quando você erra uma rolagem de ataque à distância, sua próxima rolagem de ataque à distância recebe <b>+1 de Precisão</b>.",
      "detail": "Quando você erra uma rolagem de ataque à distância, sua próxima rolagem de ataque à distância recebe <b>+1 de Precisão</b>.",
      "source": "SSC",
      "license": "Death’s Head",
      "license_level": 3
    },
    {
      "id": "ms_neurospike",
      "category": "system",
      "name": "Neuroespícula",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Código Picanço",
          "activation": "Invade",
          "detail": "Até o final do próximo turno do alvo, sempre que ele atacar, sofre 2 de <b>Calor</b> antes.",
          "add_special": [
            {
              "attribute": "Nuerospike: Shrike Code Target",
              "detail": "Sofrer 2 de <b>Calor</b> sempre que ataca"
            }
          ]
        },
        {
          "name": "Miragem",
          "activation": "Invade",
          "detail": "Escolha você ou um personagem aliado: seus Sistemas transmitem imagens borradas e ilusórias sobre sua silhueta real.<br>Seu alvo trata você, ou o personagem que você escolheu, como <b>invisível</b> até o final do seu próximo turno.",
          "add_special": [
            {
              "attribute": "Nuerospike: Mirage Target",
              "detail": "Trate a Asas do Crepúsculo (ou o personagem que ela escolheu) como <b>invisível</b> até o final do seu próximo turno.",
              "duration": "next_turn_end_target"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Invadir</b>]</b> Código Picanço: Até o final do próximo turno do alvo, sempre que ele atacar, sofre 2 de <b>Calor</b> antes.\n<b>[<b>Invadir</b>]</b> Miragem: Escolha você ou um personagem aliado: seus Sistemas transmitem imagens borradas e ilusórias sobre sua silhueta real. Seu alvo trata você, ou o personagem que você escolheu, como <b>invisível</b> até o final do seu próximo turno.",
      "detail": "<b>[<b>Invadir</b>]</b> Código Picanço: Até o final do próximo turno do alvo, sempre que ele atacar, sofre 2 de <b>Calor</b> antes.\n<b>[<b>Invadir</b>]</b> Miragem: Escolha você ou um personagem aliado: seus Sistemas transmitem imagens borradas e ilusórias sobre sua silhueta real. Seu alvo trata você, ou o personagem que você escolheu, como <b>invisível</b> até o final do seu próximo turno.",
      "source": "SSC",
      "license": "Dusk Wing",
      "license_level": 1
    },
    {
      "id": "ms_flicker_field_projector",
      "category": "system",
      "name": "Projetor de Campo Intermitente",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Sempre que <b>Impulsionar</b> ou fizer um movimento padrão, você projeta um padrão holográfico ao seu redor, deixando imagens deslumbrantes que dificultam discernir sua localização precisa: você conta como <b>invisível</b> na próxima vez que for atacado.\nVocê só pode se beneficiar de uma instância desse efeito por vez.",
      "detail": "Sempre que <b>Impulsionar</b> ou fizer um movimento padrão, você projeta um padrão holográfico ao seu redor, deixando imagens deslumbrantes que dificultam discernir sua localização precisa: você conta como <b>invisível</b> na próxima vez que for atacado.\nVocê só pode se beneficiar de uma instância desse efeito por vez.",
      "source": "SSC",
      "license": "Dusk Wing",
      "license_level": 2
    },
    {
      "id": "ms_stuncrown",
      "category": "system",
      "name": "Coroa Atordoante",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Limitado 2",
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Gaste uma carga para criar um clarão de luz de <b>Emanação</b> 3.<br>Todos os personagens hostis dentro da área afetada que têm linha de visão para você devem ter sucesso em um <b>salvamento de Agilidade</b> ou ficam <b>Bloqueados</b>, e em um <b>salvamento de Sistemas</b> ou ficam <b>Impedidos</b>.<br>Esses efeitos duram até o final do próximo turno deles.<br>Personagens em cobertura de você não são afetados por este sistema.",
          "add_status": [
            {
              "id": "jammed",
              "save": "agi",
              "aoe": true
            },
            {
              "id": "impaired",
              "save": "sys",
              "aoe": true
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Gaste uma carga para criar um clarão de luz de <b>Emanação</b> 3. Todos os personagens hostis dentro da área afetada que têm linha de visão para você devem ter sucesso em um <b>salvamento de Agilidade</b> ou ficam <b>Bloqueados</b>, e em um <b>salvamento de Sistemas</b> ou ficam <b>Impedidos</b>. Esses efeitos duram até o final do próximo turno deles. Personagens em cobertura de você não são afetados por este sistema.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Gaste uma carga para criar um clarão de luz de <b>Emanação</b> 3. Todos os personagens hostis dentro da área afetada que têm linha de visão para você devem ter sucesso em um <b>salvamento de Agilidade</b> ou ficam <b>Bloqueados</b>, e em um <b>salvamento de Sistemas</b> ou ficam <b>Impedidos</b>. Esses efeitos duram até o final do próximo turno deles. Personagens em cobertura de você não são afetados por este sistema.",
      "source": "SSC",
      "license": "Dusk Wing",
      "license_level": 3
    },
    {
      "id": "ms_oasis_wall",
      "category": "system",
      "name": "Muro OÁSIS",
      "sp": 3,
      "type": "Shield",
      "tags": [
        "Único",
        "Escudo",
        "Calor 2 (Próprio)"
      ],
      "actions": [
        {
          "activation": "Protocol",
          "detail": "Até o início do seu próximo turno, você só pode se mover em linhas retas; no entanto, você cria um rastro holográfico atrás de si enquanto se move, criando uma barreira de luz de 1 espaço de altura em cada espaço que atravessa.<br>Essa barreira concede <b>Cobertura Pesada</b> para <b>personagens adjacentes</b> a ela, e <b>personagens</b> que se beneficiam dessa cobertura também adquirem <b>Resistência</b> a <b>Energia</b>.A barreira não conta como uma obstrução e tem <b>Imunidade</b> a todo <b>Dano</b>.<br>Ela dura pelo restante da cena ou até você usar este sistema novamente.",
          "add_resist": [
            {
              "resist": "Energy",
              "target": "self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Protocolo</b>]</b> Habilidade: Até o início do seu próximo turno, você só pode se mover em linhas retas; no entanto, você cria um rastro holográfico atrás de si enquanto se move, criando uma barreira de luz de 1 espaço de altura em cada espaço que atravessa. Essa barreira concede <b>Cobertura Pesada</b> para <b>personagens adjacentes</b> a ela, e <b>personagens</b> que se beneficiam dessa cobertura também adquirem <b>Resistência</b> a <b>Energia</b>.A barreira não conta como uma obstrução e tem <b>Imunidade</b> a todo <b>Dano</b>. Ela dura pelo restante da cena ou até você usar este sistema novamente.",
      "detail": "<b>[<b>Protocolo</b>]</b> Habilidade: Até o início do seu próximo turno, você só pode se mover em linhas retas; no entanto, você cria um rastro holográfico atrás de si enquanto se move, criando uma barreira de luz de 1 espaço de altura em cada espaço que atravessa. Essa barreira concede <b>Cobertura Pesada</b> para <b>personagens adjacentes</b> a ela, e <b>personagens</b> que se beneficiam dessa cobertura também adquirem <b>Resistência</b> a <b>Energia</b>.A barreira não conta como uma obstrução e tem <b>Imunidade</b> a todo <b>Dano</b>. Ela dura pelo restante da cena ou até você usar este sistema novamente.",
      "source": "SSC",
      "license": "Dusk Wing",
      "license_level": 3
    },
    {
      "id": "ms_flash_charges",
      "category": "system",
      "name": "Cargas de Clarão",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 2",
        "Único",
        "Granada"
      ],
      "actions": [
        {
          "name": "Granada de Luz",
          "range": [
            {
              "type": "Range",
              "val": 5
            },
            {
              "type": "Blast",
              "val": 3
            }
          ],
          "detail": "Até o final do seu próximo turno, esta granada cria uma zona de luz e faíscas cegantes.<br>Os personagens (exceto você) que estiverem pelo menos parcialmente dentro da área não conseguem ter linha de visão para fora da área.<br>Personagens totalmente fora da área ou que saírem dela não são afetados a menos que entrem nela."
        }
      ],
      "deployables": [
        {
          "name": "Mina de Luz",
          "type": "Mine",
          "range": [
            {
              "type": "Burst",
              "val": 1
            }
          ],
          "detail": "Esta mina explode quando um personagem se mover para ficar adjacente ou sobre ela.<br>Personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou terão linha de visão apenas para espaços adjacentes até o final do seu próximo turno."
        }
      ],
      "terse": "<b>[Ação]</b> Granada de Luz: Até o final do seu próximo turno, esta granada cria uma zona de luz e faíscas cegantes. Os personagens (exceto você) que estiverem pelo menos parcialmente dentro da área não conseguem ter linha de visão para fora da área. Personagens totalmente fora da área ou que saírem dela não são afetados a menos que entrem nela.\n<b>[Posicionável: Mina de Luz (Mine)]</b> Esta mina explode quando um personagem se mover para ficar adjacente ou sobre ela. Personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou terão linha de visão apenas para espaços adjacentes até o final do seu próximo turno.",
      "detail": "<b>[Ação]</b> Granada de Luz: Até o final do seu próximo turno, esta granada cria uma zona de luz e faíscas cegantes. Os personagens (exceto você) que estiverem pelo menos parcialmente dentro da área não conseguem ter linha de visão para fora da área. Personagens totalmente fora da área ou que saírem dela não são afetados a menos que entrem nela.\n<b>[Posicionável: Mina de Luz (Mine)]</b> Esta mina explode quando um personagem se mover para ficar adjacente ou sobre ela. Personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Agilidade</b> ou terão linha de visão apenas para espaços adjacentes até o final do seu próximo turno.",
      "source": "SSC",
      "license": "Metalmark",
      "license_level": 1
    },
    {
      "id": "ms_reactive_weave",
      "category": "system",
      "name": "Malha Reativa",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Quando <b>Suportar</b>, você fica <b>invisível</b> até o final do seu próximo turno e pode imediatamente se mover uma quantidade de espaços igual à sua <b>Velocidade</b>.",
      "detail": "Quando <b>Suportar</b>, você fica <b>invisível</b> até o final do seu próximo turno e pode imediatamente se mover uma quantidade de espaços igual à sua <b>Velocidade</b>.",
      "source": "SSC",
      "license": "Metalmark",
      "license_level": 1
    },
    {
      "id": "ms_active_camouflage",
      "category": "system",
      "name": "Camuflagem Ativa",
      "sp": 3,
      "type": "Sistema",
      "tags": [
        "Único",
        "Calor 2 (Próprio)"
      ],
      "actions": [
        {
          "activation": "Protocol",
          "detail": "Você fica <b>invisível</b> até sofrer <b>Dano</b>, ou até o final de seu próximo turno.",
          "add_status": [
            {
              "id": "invisible",
              "target": "self",
              "duration": "next_turn_end_self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Protocolo</b>]</b> Habilidade: Você fica <b>invisível</b> até sofrer <b>Dano</b>, ou até o final de seu próximo turno.",
      "detail": "<b>[<b>Protocolo</b>]</b> Habilidade: Você fica <b>invisível</b> até sofrer <b>Dano</b>, ou até o final de seu próximo turno.",
      "source": "SSC",
      "license": "Metalmark",
      "license_level": 3
    },
    {
      "id": "ms_javelin_rockets",
      "category": "system",
      "name": "Foguetes-Azagaia",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Escolha 3 espaços livres a até <b>Alcance 15</b> e na linha de visão que não estejam adjacentes entre si.<br>Todos os personagens sabem quais espaços você escolheu.<br>Você dispara uma salva de foguetes autodirecionados no ar.<br>Até o início do seu próximo turno, quando um personagem se mover para dentro ou passar por cima de um espaço escolhido (até no máximo 10 espaços acima) ele é atingido por um foguete, sofrendo 3 de <b>Dano Cinético</b>.<br>Cada espaço pode ser atingido uma vez, e depois o efeito desaparece nesse espaço."
        }
      ],
      "deployables": [
        {
          "name": "Javelin Rocket",
          "type": "Rocket",
          "range": [
            {
              "type": "Burst",
              "val": 1
            }
          ],
          "damage": [
            {
              "type": "Kinetic",
              "val": 3
            }
          ],
          "detail": "Quando um personagem se move para dentro ou passa acima da posição marcada deste foguete – no máximo 10 espaços para cima – ele é atingido por um foguete, sofrendo 3 de <b>Dano Cinético</b>. Cada espaço pode ser atingido uma vez e então o efeito desaparece nesse espaço."
        }
      ],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Escolha 3 espaços livres a até <b>Alcance 15</b> e na linha de visão que não estejam adjacentes entre si. Todos os personagens sabem quais espaços você escolheu. Você dispara uma salva de foguetes autodirecionados no ar. Até o início do seu próximo turno, quando um personagem se mover para dentro ou passar por cima de um espaço escolhido (até no máximo 10 espaços acima) ele é atingido por um foguete, sofrendo 3 de <b>Dano Cinético</b>. Cada espaço pode ser atingido uma vez, e depois o efeito desaparece nesse espaço.\n<b>[Posicionável: Javelin Rocket (Rocket)]</b> Quando um personagem se move para dentro ou passa acima da posição marcada deste foguete – no máximo 10 espaços para cima – ele é atingido por um foguete, sofrendo 3 de <b>Dano Cinético</b>. Cada espaço pode ser atingido uma vez e então o efeito desaparece nesse espaço.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Escolha 3 espaços livres a até <b>Alcance 15</b> e na linha de visão que não estejam adjacentes entre si. Todos os personagens sabem quais espaços você escolheu. Você dispara uma salva de foguetes autodirecionados no ar. Até o início do seu próximo turno, quando um personagem se mover para dentro ou passar por cima de um espaço escolhido (até no máximo 10 espaços acima) ele é atingido por um foguete, sofrendo 3 de <b>Dano Cinético</b>. Cada espaço pode ser atingido uma vez, e depois o efeito desaparece nesse espaço.\n<b>[Posicionável: Javelin Rocket (Rocket)]</b> Quando um personagem se move para dentro ou passa acima da posição marcada deste foguete – no máximo 10 espaços para cima – ele é atingido por um foguete, sofrendo 3 de <b>Dano Cinético</b>. Cada espaço pode ser atingido uma vez e então o efeito desaparece nesse espaço.",
      "source": "SSC",
      "license": "Monarch",
      "license_level": 1
    },
    {
      "id": "ms_tlaloc_class_nhp",
      "category": "system",
      "name": "PNH CLASSE-TLALOC",
      "sp": 3,
      "type": "AI",
      "tags": [
        "IA",
        "Único",
        "Calor 2 (Próprio)"
      ],
      "actions": [
        {
          "name": "Protocolo TLALOC",
          "activation": "Protocol",
          "detail": "Sua PNH pode disparar e redirecionar rapidamente suas armas – muito mais rápido que o pensamento.<br>Você fica <b>Imobilizado</b> até o início de seu próximo turno; no entanto, durante este tempo, você pode rolar novamente cada rolagem de ataque corpo a corpo ou à distância que errar uma vez, escolhendo um novo alvo dentro do <b>Alcance</b> do ataque.<br>Se o ataque foi parte de uma área de efeito, ele deve visar um personagem na mesma área.<br>Qualquer alvo dado não pode ser atingido mais de uma vez como parte da mesma ação.",
          "active_effects": [
            {
              "name": "TLALOC Protocol Active",
              "detail": "Você pode rolar novamente cada rolagem de ataque corpo a corpo ou à distância que errar uma vez, escolhendo um novo alvo dentro do <b>Alcance</b> do ataque. Se o ataque foi parte de uma área de efeito, ele deve visar um personagem na mesma área. Qualquer alvo dado não pode ser atingido mais de uma vez como parte da mesma ação.",
              "duration": "next_turn_start_self"
            }
          ],
          "add_status": [
            {
              "id": "immobilized",
              "target": "self",
              "duration": "next_turn_start_self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b> e o <b>Protocolo</b> TLALOC.\n<b>[<b>Protocolo</b>]</b> <b>Protocolo</b> TLALOC: Sua PNH pode disparar e redirecionar rapidamente suas armas – muito mais rápido que o pensamento. Você fica <b>Imobilizado</b> até o início de seu próximo turno; no entanto, durante este tempo, você pode rolar novamente cada rolagem de ataque corpo a corpo ou à distância que errar uma vez, escolhendo um novo alvo dentro do <b>Alcance</b> do ataque. Se o ataque foi parte de uma área de efeito, ele deve visar um personagem na mesma área. Qualquer alvo dado não pode ser atingido mais de uma vez como parte da mesma ação.",
      "detail": "Seu mecha adquire a tag <b>IA</b> e o <b>Protocolo</b> TLALOC.\n<b>[<b>Protocolo</b>]</b> <b>Protocolo</b> TLALOC: Sua PNH pode disparar e redirecionar rapidamente suas armas – muito mais rápido que o pensamento. Você fica <b>Imobilizado</b> até o início de seu próximo turno; no entanto, durante este tempo, você pode rolar novamente cada rolagem de ataque corpo a corpo ou à distância que errar uma vez, escolhendo um novo alvo dentro do <b>Alcance</b> do ataque. Se o ataque foi parte de uma área de efeito, ele deve visar um personagem na mesma área. Qualquer alvo dado não pode ser atingido mais de uma vez como parte da mesma ação.",
      "source": "SSC",
      "license": "Monarch",
      "license_level": 3
    },
    {
      "id": "ms_hunter_logic_suite",
      "category": "system",
      "name": "Pacote de Lógica do Caçador",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Espreitar Presa",
          "activation": "Invade",
          "detail": "Você infecta o alvo com uma lógica viral que apaga sua imagem dos <b>Sensores</b> dele.<br>Ele o trata como <b>invisível</b> até que você sofra <b>Dano</b> dele novamente.<br>Isso só pode afetar um alvo por vez.",
          "add_special": [
            {
              "attribute": "Hunter Logic Suite: Stalk Prey Target",
              "detail": "Trate o Manto do Luto como <b>invisível</b> até que ele sofra dano seu novamente."
            }
          ]
        },
        {
          "name": "Aterrorizar",
          "activation": "Invade",
          "detail": "Você infecta o alvo com uma lógica viral que faz seu mecha parecer horrível.<br>Até o final do próximo turno de seu alvo, ele fica <b>Impedido</b> e não pode fazer movimentos voluntários que o aproxime de você.",
          "add_status": [
            {
              "id": "impaired",
              "duration": "next_turn_end_target"
            }
          ],
          "add_special": [
            {
              "attribute": "Hunter Logic Suite: Terrify Target",
              "detail": "Não pode fazer nenhum movimento voluntário que o aproxime do Manto do Luto"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Invadir</b>]</b> Espreitar Presa: Você infecta o alvo com uma lógica viral que apaga sua imagem dos <b>Sensores</b> dele. Ele o trata como <b>invisível</b> até que você sofra <b>Dano</b> dele novamente. Isso só pode afetar um alvo por vez.\n<b>[<b>Invadir</b>]</b> Aterrorizar: Você infecta o alvo com uma lógica viral que faz seu mecha parecer horrível. Até o final do próximo turno de seu alvo, ele fica <b>Impedido</b> e não pode fazer movimentos voluntários que o aproxime de você.",
      "detail": "<b>[<b>Invadir</b>]</b> Espreitar Presa: Você infecta o alvo com uma lógica viral que apaga sua imagem dos <b>Sensores</b> dele. Ele o trata como <b>invisível</b> até que você sofra <b>Dano</b> dele novamente. Isso só pode afetar um alvo por vez.\n<b>[<b>Invadir</b>]</b> Aterrorizar: Você infecta o alvo com uma lógica viral que faz seu mecha parecer horrível. Até o final do próximo turno de seu alvo, ele fica <b>Impedido</b> e não pode fazer movimentos voluntários que o aproxime de você.",
      "source": "SSC",
      "license": "Mourning Cloak",
      "license_level": 2
    },
    {
      "id": "ms_singularity_motivator",
      "category": "system",
      "name": "Motivador de Singularidade",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Singularidade Exposta",
          "activation": "Reaction",
          "frequency": "1/round",
          "trigger": "Seu mecha sofre dano.",
          "detail": "Você pode se teletransportar imediatamente para um espaço livre a até 1d6 espaços."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Reação</b>]</b> Singularidade Exposta: Você pode se teletransportar imediatamente para um espaço livre a até 1d6 espaços.",
      "detail": "<b>[<b>Reação</b>]</b> Singularidade Exposta: Você pode se teletransportar imediatamente para um espaço livre a até 1d6 espaços.",
      "source": "SSC",
      "license": "Mourning Cloak",
      "license_level": 2
    },
    {
      "id": "ms_fade_cloak",
      "category": "system",
      "name": "Capa AFED",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Ao ser ativada, você imediatamente se move para fora de fase com o espaço real, tornando-se intangível.<br>Enquanto estiver intangível, você pode atravessar obstruções, mas não pode terminar seu turno dentro delas.<br>Você não pode interagir com nenhum outro objeto ou personagem, nem eles podem interagir com você de qualquer forma (por exemplo, sofrer ou causar <b>Dano</b>).<br>Role 1d6 no início de cada um de seus turnos:<br>⬣ Em 3 ou menos, você retorna ao espaço real até o início do seu próximo turno;<br>⬣ Em 4 ou mais, você permanece intangível.<br>Este sistema permanece ativo pelo restante da cena, ou até que você o desative como uma <b>Ação Rápida</b>.",
          "add_special": [
            {
              "attribute": "FADE Cloak: Intangible",
              "detail": "Você pode se mover através de obstruções, mas não pode terminar seu turno dentro delas. Você não pode interagir com nenhum outro objeto ou personagem, nem eles podem interagir com você de qualquer forma (por exemplo, sofrer ou causar <b>Dano</b>)."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Ao ser ativada, você imediatamente se move para fora de fase com o espaço real, tornando-se intangível. Enquanto estiver intangível, você pode atravessar obstruções, mas não pode terminar seu turno dentro delas. Você não pode interagir com nenhum outro objeto ou personagem, nem eles podem interagir com você de qualquer forma (por exemplo, sofrer ou causar <b>Dano</b>). Role 1d6 no início de cada um de seus turnos: ⬣ Em 3 ou menos, você retorna ao espaço real até o início do seu próximo turno; ⬣ Em 4 ou mais, você permanece intangível. Este sistema permanece ativo pelo restante da cena, ou até que você o desative como uma <b>Ação Rápida</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Ao ser ativada, você imediatamente se move para fora de fase com o espaço real, tornando-se intangível. Enquanto estiver intangível, você pode atravessar obstruções, mas não pode terminar seu turno dentro delas. Você não pode interagir com nenhum outro objeto ou personagem, nem eles podem interagir com você de qualquer forma (por exemplo, sofrer ou causar <b>Dano</b>). Role 1d6 no início de cada um de seus turnos: ⬣ Em 3 ou menos, você retorna ao espaço real até o início do seu próximo turno; ⬣ Em 4 ou mais, você permanece intangível. Este sistema permanece ativo pelo restante da cena, ou até que você o desative como uma <b>Ação Rápida</b>.",
      "source": "SSC",
      "license": "Mourning Cloak",
      "license_level": 3
    },
    {
      "id": "ms_lotus_projector",
      "category": "system",
      "name": "Projetor Lótus",
      "sp": 2,
      "type": "Drone",
      "tags": [
        "Invisível"
      ],
      "actions": [],
      "deployables": [
        {
          "type": "Drone",
          "name": "Projetor Lótus",
          "size": 0.5,
          "hp": 5,
          "edef": 10,
          "evasion": 10,
          "recall": "Quick",
          "redeploy": "Quick",
          "detail": "Este drone de reconhecimento pode ser posicionado em um espaço ao <b>Alcance dos Sensores</b> e na linha de visão, onde emite um campo de <b>Emanação 2</b> com os seguintes efeitos:<ul><li>Você sabe a localização atual, PV, <b>Evasão</b>, <b>Defesa-E</b> e <b>Calor</b> de todos os personagens dentro da área afetada.</li><li>Personagens hostis não podem <b>Esconder-se</b> na área e, se encerrarem seu turno na área afetada, deixam de estar <b>Escondido</b>s.</li><li>Personagens hostis não podem se beneficiar de estarem Invisíveis enquanto estiverem na área afetada.</li></ul>Você pode recolher e reposicionar novamente seu drone de reconhecimento como uma <b>Ação Rápida</b>."
        }
      ],
      "terse": "Este drone de reconhecimento pode ser posicionado em um espaço ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, onde emite um campo de <b>Emanação</b> 2 com os seguintes efeitos:<ul><li>Você sabe a localização atual, PV, <b>Evasão</b>, <b>Defesa-E</b> e <b>Calor</b> de todos os personagens dentro da área afetada.</li><li>Personagens hostis não podem <b>Esconder-se</b> na área e, se encerrarem seu turno na área afetada, deixam de estar <b>Escondido</b>s.</li><li>Personagens hostis não podem se beneficiar de estarem Invisíveis enquanto estiverem na área afetada.</li></ul>Você pode recolher e reposicionar novamente seu drone de reconhecimento como uma <b>Ação Rápida</b>.\n<b>[Posicionável: Projetor Lótus (Drone)]</b> Este drone de reconhecimento pode ser posicionado em um espaço ao <b>Alcance dos Sensores</b> e na linha de visão, onde emite um campo de <b>Emanação 2</b> com os seguintes efeitos:<ul><li>Você sabe a localização atual, PV, <b>Evasão</b>, <b>Defesa-E</b> e <b>Calor</b> de todos os personagens dentro da área afetada.</li><li>Personagens hostis não podem <b>Esconder-se</b> na área e, se encerrarem seu turno na área afetada, deixam de estar <b>Escondido</b>s.</li><li>Personagens hostis não podem se beneficiar de estarem Invisíveis enquanto estiverem na área afetada.</li></ul>Você pode recolher e reposicionar novamente seu drone de reconhecimento como uma <b>Ação Rápida</b>.",
      "detail": "Este drone de reconhecimento pode ser posicionado em um espaço ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, onde emite um campo de <b>Emanação</b> 2 com os seguintes efeitos:<ul><li>Você sabe a localização atual, PV, <b>Evasão</b>, <b>Defesa-E</b> e <b>Calor</b> de todos os personagens dentro da área afetada.</li><li>Personagens hostis não podem <b>Esconder-se</b> na área e, se encerrarem seu turno na área afetada, deixam de estar <b>Escondido</b>s.</li><li>Personagens hostis não podem se beneficiar de estarem Invisíveis enquanto estiverem na área afetada.</li></ul>Você pode recolher e reposicionar novamente seu drone de reconhecimento como uma <b>Ação Rápida</b>.\n<b>[Posicionável: Projetor Lótus (Drone)]</b> Este drone de reconhecimento pode ser posicionado em um espaço ao <b>Alcance dos Sensores</b> e na linha de visão, onde emite um campo de <b>Emanação 2</b> com os seguintes efeitos:<ul><li>Você sabe a localização atual, PV, <b>Evasão</b>, <b>Defesa-E</b> e <b>Calor</b> de todos os personagens dentro da área afetada.</li><li>Personagens hostis não podem <b>Esconder-se</b> na área e, se encerrarem seu turno na área afetada, deixam de estar <b>Escondido</b>s.</li><li>Personagens hostis não podem se beneficiar de estarem Invisíveis enquanto estiverem na área afetada.</li></ul>Você pode recolher e reposicionar novamente seu drone de reconhecimento como uma <b>Ação Rápida</b>.",
      "source": "SSC",
      "license": "Swallowtail",
      "license_level": 1
    },
    {
      "id": "ms_markerlight",
      "category": "system",
      "name": "Luz Indicadora",
      "sp": 2,
      "type": "Tech",
      "tags": [],
      "actions": [
        {
          "activation": "Full Tech",
          "detail": "Realize um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b> e na linha de visão.<br>Em caso de sucesso, ele sofre 2 de <b>Calor</b> e <b>Travado em Mira</b>, e não pode se beneficiar de <b>Cobertura Leve</b>. enquanto estiver <b>Travado em Mira</b>; além disso, uma vez antes do início do seu próximo turno, quando um personagem aliado acertar seu alvo, você pode declarar, como <b>Reação</b>, que ele acertou um ponto fraco do alvo.<br>O ataque se torna um acerto crítico (se ainda não era).",
          "attack": "tech",
          "damage": [
            {
              "type": "Heat",
              "val": 2
            }
          ],
          "add_status": [
            {
              "id": "lock_on"
            }
          ],
          "add_special": [
            {
              "attribute": "Alvo Luz Indicadora",
              "detail": "Não pode se beneficiar de Cobertura Leve enquanto <b>Travado em Mira</b> não for removido"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[Full Tech]</b> Habilidade: Realize um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b> e na linha de visão. Em caso de sucesso, ele sofre 2 de <b>Calor</b> e <b>Travado em Mira</b>, e não pode se beneficiar de <b>Cobertura Leve</b>. enquanto estiver <b>Travado em Mira</b>; além disso, uma vez antes do início do seu próximo turno, quando um personagem aliado acertar seu alvo, você pode declarar, como <b>Reação</b>, que ele acertou um ponto fraco do alvo. O ataque se torna um acerto crítico (se ainda não era).",
      "detail": "<b>[Full Tech]</b> Habilidade: Realize um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b> e na linha de visão. Em caso de sucesso, ele sofre 2 de <b>Calor</b> e <b>Travado em Mira</b>, e não pode se beneficiar de <b>Cobertura Leve</b>. enquanto estiver <b>Travado em Mira</b>; além disso, uma vez antes do início do seu próximo turno, quando um personagem aliado acertar seu alvo, você pode declarar, como <b>Reação</b>, que ele acertou um ponto fraco do alvo. O ataque se torna um acerto crítico (se ainda não era).",
      "source": "SSC",
      "license": "Swallowtail",
      "license_level": 1
    },
    {
      "id": "ms_retractable_profile",
      "category": "system",
      "name": "Perfil Retrátil",
      "sp": 1,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Protocol",
          "detail": "Seu mecha pode retrair seus Principais Sistemas para reduzir seu perfil como um protocolo.<br>Quando ativo:<ul><li>Rolagens para localizá-lo sofrem +1 Dificuldade enquanto você estiver <b>Escondido</b>.</li><li>Ataques à distância e tecnológicos contra você sofrem +1 Dificuldade;</li><li>Você fica <b>Lento</b> e não pode realizar ataques de qualquer tipo;</li></ul>Você pode realizar outras ações (por exemplo, <b>Esconder-se</b>, Ativar, e assim por diante).<br>Você pode encerrar esse efeito como uma <b>Ação Rápida</b>.",
          "add_status": [
            {
              "id": "slow",
              "target": "self"
            }
          ],
          "add_special": [
            {
              "attribute": "Perfil Retrátil Ativo",
              "target": "self",
              "detail": "Rolagens para localizá-lo sofrem +1 Dificuldade enquanto você estiver <b>Escondido</b>. Ataques à distância e tecnológicos contra você sofrem +1 Dificuldade. Você fica <b>Lento</b> e não pode realizar ataques de qualquer tipo."
            }
          ]
        },
        {
          "name": "Desativar Perfil Retrátil",
          "activation": "Quick",
          "detail": "Você pode encerrar o Perfil Retrátil como uma <b>Ação Rápida</b>.",
          "remove_special": {
            "attribute": "Retractable Profile Activated",
            "target": "self"
          }
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Protocolo</b>]</b> Habilidade: Seu mecha pode retrair seus Principais Sistemas para reduzir seu perfil como um protocolo. Quando ativo:<ul><li>Rolagens para localizá-lo sofrem +1 Dificuldade enquanto você estiver <b>Escondido</b>.</li><li>Ataques à distância e tecnológicos contra você sofrem +1 Dificuldade;</li><li>Você fica <b>Lento</b> e não pode realizar ataques de qualquer tipo;</li></ul>Você pode realizar outras ações (por exemplo, <b>Esconder-se</b>, Ativar, e assim por diante). Você pode encerrar esse efeito como uma <b>Ação Rápida</b>.\n<b>[<b>Ação Rápida</b>]</b> Desativar Perfil Retrátil: Você pode encerrar o Perfil Retrátil como uma <b>Ação Rápida</b>.",
      "detail": "<b>[<b>Protocolo</b>]</b> Habilidade: Seu mecha pode retrair seus Principais Sistemas para reduzir seu perfil como um protocolo. Quando ativo:<ul><li>Rolagens para localizá-lo sofrem +1 Dificuldade enquanto você estiver <b>Escondido</b>.</li><li>Ataques à distância e tecnológicos contra você sofrem +1 Dificuldade;</li><li>Você fica <b>Lento</b> e não pode realizar ataques de qualquer tipo;</li></ul>Você pode realizar outras ações (por exemplo, <b>Esconder-se</b>, Ativar, e assim por diante). Você pode encerrar esse efeito como uma <b>Ação Rápida</b>.\n<b>[<b>Ação Rápida</b>]</b> Desativar Perfil Retrátil: Você pode encerrar o Perfil Retrátil como uma <b>Ação Rápida</b>.",
      "source": "SSC",
      "license": "Swallowtail",
      "license_level": 2
    },
    {
      "id": "ms_athena_class_nhp",
      "category": "system",
      "name": "PNH Classe-ATENA",
      "sp": 3,
      "type": "AI",
      "tags": [
        "IA",
        "Único"
      ],
      "actions": [
        {
          "name": "Simulacro",
          "activation": "Quick",
          "detail": "ATENA constrói um modelo 3D perfeito, em tempo real e totalmente interativo de uma área de Explosão 3 até <b>Alcance 5</b>0, incluindo personagens em movimento, todos renderizados em detalhes extremos.<br>Os seguintes efeitos se aplicam:<ul><li>Você tem visibilidade completa dentro da área afetada, mas ela não conta como linha de visão.</li><li>Você sabe quais são todas as estatísticas, armas e Sistemas dos personagens dentro da área afetada.</li><li>Personagens hostis dentro da área afetada não se beneficiam de cobertura e não podem Esconder ou ficar Invisíveis.</li><li>Personagens hostis que encerram seu turno na área afetada recebem <b>Travado em Mira</b> e deixam de estar Invisíveis ou <b>Escondido</b>s.</li></ul>A simulação da ATENA dura até o final da cena, ou cerca de 30 minutos dentro da narrativa.<br>Você pode selecionar uma nova área como uma <b>Ação Rápida</b>.",
          "active_effects": [
            {
              "name": "Ativar Simulacro ATHENA",
              "detail": "Você tem visibilidade completa dentro da área afetada, mas ela não conta como linha de visão. Você sabe quais são todas as estatísticas, armas e Sistemas dos personagens dentro da área afetada. Personagens hostis dentro da área afetada não se beneficiam de cobertura e não podem Esconder ou ficar Invisíveis. Personagens hostis que encerram seu turno na área afetada recebem <b>Travado em Mira</b> e deixam de estar Invisíveis ou <b>Escondido</b>s."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b> e Simulacro.\n<b>[<b>Ação Rápida</b>]</b> Simulacro: ATENA constrói um modelo 3D perfeito, em tempo real e totalmente interativo de uma área de Explosão 3 até <b>Alcance 5</b>0, incluindo personagens em movimento, todos renderizados em detalhes extremos. Os seguintes efeitos se aplicam:<ul><li>Você tem visibilidade completa dentro da área afetada, mas ela não conta como linha de visão.</li><li>Você sabe quais são todas as estatísticas, armas e Sistemas dos personagens dentro da área afetada.</li><li>Personagens hostis dentro da área afetada não se beneficiam de cobertura e não podem Esconder ou ficar Invisíveis.</li><li>Personagens hostis que encerram seu turno na área afetada recebem <b>Travado em Mira</b> e deixam de estar Invisíveis ou <b>Escondido</b>s.</li></ul>A simulação da ATENA dura até o final da cena, ou cerca de 30 minutos dentro da narrativa. Você pode selecionar uma nova área como uma <b>Ação Rápida</b>.",
      "detail": "Seu mecha adquire a tag <b>IA</b> e Simulacro.\n<b>[<b>Ação Rápida</b>]</b> Simulacro: ATENA constrói um modelo 3D perfeito, em tempo real e totalmente interativo de uma área de Explosão 3 até <b>Alcance 5</b>0, incluindo personagens em movimento, todos renderizados em detalhes extremos. Os seguintes efeitos se aplicam:<ul><li>Você tem visibilidade completa dentro da área afetada, mas ela não conta como linha de visão.</li><li>Você sabe quais são todas as estatísticas, armas e Sistemas dos personagens dentro da área afetada.</li><li>Personagens hostis dentro da área afetada não se beneficiam de cobertura e não podem Esconder ou ficar Invisíveis.</li><li>Personagens hostis que encerram seu turno na área afetada recebem <b>Travado em Mira</b> e deixam de estar Invisíveis ou <b>Escondido</b>s.</li></ul>A simulação da ATENA dura até o final da cena, ou cerca de 30 minutos dentro da narrativa. Você pode selecionar uma nova área como uma <b>Ação Rápida</b>.",
      "source": "SSC",
      "license": "Swallowtail",
      "license_level": 3
    },
    {
      "id": "ms_lb_oc_cloaking_field",
      "category": "system",
      "name": "Campo de Ocultação DL/SC",
      "sp": 4,
      "type": "Sistema",
      "tags": [
        "Calor 2 (Próprio)"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Você fica <b>Lento</b>, mas todos os personagens aliados em uma área de <b>Emanação 2</b> ficam Invisíveis enquanto permanecerem completamente dentro dela.<br>Esse efeito dura até o final do seu próximo turno, ou até você ficar <b>Atordoado</b>, sofrer <b>Dano</b> ou desativá-lo como uma <b>Ação Rápida</b>.",
          "add_status": [
            {
              "id": "slow",
              "target": "self"
            },
            {
              "id": "invisible",
              "target": "self"
            }
          ],
          "add_special": [
            {
              "attribute": "Campo de Ocultação DL/SC",
              "target": "self",
              "detail": "O seu Mecha e todos os personagens aliados em uma área de <b>Emanação 2</b> ficam Invisíveis enquanto permanecerem completamente dentro dela."
            }
          ]
        },
        {
          "name": "Desativar Campo de Ocultação DL/SC",
          "activation": "Quick",
          "detail": "Você pode encerrar o Campo de Ocultação DL/SC como uma <b>Ação Rápida</b>.",
          "remove_special": [
            {
              "attribute": "Campo de Ocultação DL/SC",
              "target": "self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Você fica <b>Lento</b>, mas todos os personagens aliados em uma área de <b>Emanação 2</b> ficam Invisíveis enquanto permanecerem completamente dentro dela. Esse efeito dura até o final do seu próximo turno, ou até você ficar <b>Atordoado</b>, sofrer <b>Dano</b> ou desativá-lo como uma <b>Ação Rápida</b>.\n<b>[<b>Ação Rápida</b>]</b> Desativar Campo de Ocultação DL/SC: Você pode encerrar o Campo de Ocultação DL/SC como uma <b>Ação Rápida</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Você fica <b>Lento</b>, mas todos os personagens aliados em uma área de <b>Emanação 2</b> ficam Invisíveis enquanto permanecerem completamente dentro dela. Esse efeito dura até o final do seu próximo turno, ou até você ficar <b>Atordoado</b>, sofrer <b>Dano</b> ou desativá-lo como uma <b>Ação Rápida</b>.\n<b>[<b>Ação Rápida</b>]</b> Desativar Campo de Ocultação DL/SC: Você pode encerrar o Campo de Ocultação DL/SC como uma <b>Ação Rápida</b>.",
      "source": "SSC",
      "license": "Swallowtail",
      "license_level": 3
    },
    {
      "id": "ms_hive_drone",
      "category": "system",
      "name": "Drone Colmeia",
      "sp": 2,
      "type": "Drone",
      "tags": [],
      "actions": [],
      "deployables": [
        {
          "type": "Drone",
          "name": "Drone Colmeia",
          "size": 0.5,
          "hp": 5,
          "edef": 10,
          "evasion": 10,
          "recall": "Quick",
          "redeploy": "Quick",
          "detail": "Este drone colmeia pode ser posicionado em um espaço livre ao <b>Alcance dos Sensores</b> e na linha de visão, onde libera um enxame de cinzamento em <b>Emanação 2</b> com os seguintes efeitos:<ul><li>Personagens aliados que estiverem pelo menos parcialmente dentro da área afetada obtêm <b>Cobertura Leve</b>., assim como o Drone Colmeia.</li><li>Personagens hostis sofrem 1 Cinético(PF) quando começarem o turno deles na área afetada ou entrarem nela pela primeira vez em uma rodada.<br>O <b>Dano</b> criado por várias áreas de <b>Drones</b> Colmeias não se acumula.</li></ul>O drone pode ser posicionado em um espaço diferente ou recolhido como uma <b>Ação Rápida</b>.",
          "damage": [
            {
              "type": "Kinetic",
              "val": 1,
              "ap": true
            }
          ]
        }
      ],
      "terse": "Este drone colmeia pode ser posicionado em um espaço livre ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, onde libera um enxame de cinzamento em <b>Emanação</b> 2 com os seguintes efeitos:<ul><li>Personagens aliados que estiverem pelo menos parcialmente dentro da área afetada obtêm <b>Cobertura Leve</b>., assim como o Drone Colmeia.</li><li>Personagens hostis sofrem 1 Cinético(PF) quando começarem o turno deles na área afetada ou entrarem nela pela primeira vez em uma rodada.\nO <b>Dano</b> criado por várias áreas de <b>Drones</b> Colmeias não se acumula.</li></ul>O drone pode ser posicionado em um espaço diferente ou recolhido como uma <b>Ação Rápida</b>.\n<b>[Posicionável: Drone Colmeia (Drone)]</b> Este drone colmeia pode ser posicionado em um espaço livre ao <b>Alcance dos Sensores</b> e na linha de visão, onde libera um enxame de cinzamento em <b>Emanação 2</b> com os seguintes efeitos:<ul><li>Personagens aliados que estiverem pelo menos parcialmente dentro da área afetada obtêm <b>Cobertura Leve</b>., assim como o Drone Colmeia.</li><li>Personagens hostis sofrem 1 Cinético(PF) quando começarem o turno deles na área afetada ou entrarem nela pela primeira vez em uma rodada. O <b>Dano</b> criado por várias áreas de <b>Drones</b> Colmeias não se acumula.</li></ul>O drone pode ser posicionado em um espaço diferente ou recolhido como uma <b>Ação Rápida</b>.",
      "detail": "Este drone colmeia pode ser posicionado em um espaço livre ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, onde libera um enxame de cinzamento em <b>Emanação</b> 2 com os seguintes efeitos:<ul><li>Personagens aliados que estiverem pelo menos parcialmente dentro da área afetada obtêm <b>Cobertura Leve</b>., assim como o Drone Colmeia.</li><li>Personagens hostis sofrem 1 Cinético(PF) quando começarem o turno deles na área afetada ou entrarem nela pela primeira vez em uma rodada.\nO <b>Dano</b> criado por várias áreas de <b>Drones</b> Colmeias não se acumula.</li></ul>O drone pode ser posicionado em um espaço diferente ou recolhido como uma <b>Ação Rápida</b>.\n<b>[Posicionável: Drone Colmeia (Drone)]</b> Este drone colmeia pode ser posicionado em um espaço livre ao <b>Alcance dos Sensores</b> e na linha de visão, onde libera um enxame de cinzamento em <b>Emanação 2</b> com os seguintes efeitos:<ul><li>Personagens aliados que estiverem pelo menos parcialmente dentro da área afetada obtêm <b>Cobertura Leve</b>., assim como o Drone Colmeia.</li><li>Personagens hostis sofrem 1 Cinético(PF) quando começarem o turno deles na área afetada ou entrarem nela pela primeira vez em uma rodada. O <b>Dano</b> criado por várias áreas de <b>Drones</b> Colmeias não se acumula.</li></ul>O drone pode ser posicionado em um espaço diferente ou recolhido como uma <b>Ação Rápida</b>.",
      "source": "HORUS",
      "license": "Balor",
      "license_level": 1
    },
    {
      "id": "ms_scanner_swarm",
      "category": "system",
      "name": "Enxame de Varredura",
      "sp": 1,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Você recebe <b>+1 de Precisão</b> em ataques tecnológicos contra personagens adjacentes.",
      "detail": "Você recebe <b>+1 de Precisão</b> em ataques tecnológicos contra personagens adjacentes.",
      "source": "HORUS",
      "license": "Balor",
      "license_level": 1
    },
    {
      "id": "ms_swarm_body",
      "category": "system",
      "name": "Corpo de Enxame",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Após ativar este sistema, um enxame de <b>Emanação 1</b> é liberado ao final do seu turno.<br>Personagens à sua escolha que começarem ou entrarem na área durante o turno deles devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou sofrem <b>3 de Dano Cinético</b>. Esse valor aumenta em <b>+3 de Dano</b> para cada um de seus turnos que você permaneceu parado, até um máximo de <b>9 de Dano Cinético</b>.<br>Esse efeito dura até você se mover, incluindo <b>movimento involuntário</b>.",
          "active_effects": [
            {
              "name": "Ativar Corpo de Enxame",
              "detail": "Personagens à sua escolha que começarem ou entrarem na área durante o turno deles devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou sofrem <b>3 de Dano Cinético</b>. Esse valor aumenta em <b>+3 de Dano</b> para cada um de seus turnos que você permaneceu parado, até um máximo de <b>9 de Dano Cinético</b>.",
              "damage": [
                {
                  "type": "Kinetic",
                  "val": 3,
                  "aoe": true
                }
              ]
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Após ativar este sistema, um enxame de <b>Emanação 1</b> é liberado ao final do seu turno. Personagens à sua escolha que começarem ou entrarem na área durante o turno deles devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou sofrem <b>3 de Dano Cinético</b>. Esse valor aumenta em <b>+3 de Dano</b> para cada um de seus turnos que você permaneceu parado, até um máximo de <b>9 de Dano Cinético</b>. Esse efeito dura até você se mover, incluindo <b>movimento involuntário</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Após ativar este sistema, um enxame de <b>Emanação 1</b> é liberado ao final do seu turno. Personagens à sua escolha que começarem ou entrarem na área durante o turno deles devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou sofrem <b>3 de Dano Cinético</b>. Esse valor aumenta em <b>+3 de Dano</b> para cada um de seus turnos que você permaneceu parado, até um máximo de <b>9 de Dano Cinético</b>. Esse efeito dura até você se mover, incluindo <b>movimento involuntário</b>.",
      "source": "HORUS",
      "license": "Balor",
      "license_level": 2
    },
    {
      "id": "ms_h0r_os_system_upgrade_i",
      "category": "system",
      "name": "Atualização de Sistema H0R_OS I",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Sistema Marionete",
          "activation": "Invade",
          "detail": "Seu alvo se move à <b>Velocidade</b> máxima dele em uma direção à sua escolha.<br>Ele pode ser movido para áreas perigosas e outros obstáculos, mas ainda é afetado por <b>terreno difícil</b>, obstruções etc.<br>Esse movimento é involuntário, mas provoca reações e engajamento normalmente e não conta como  <b>Repulsão</b> , <b>Empurrar</b> ou puxar."
        },
        {
          "name": "Ejetar Núcleos de Energia",
          "activation": "Invade",
          "detail": "Seu alvo fica <b>Bloqueado</b> até o final do próximo turno dele, enquanto você temporariamente interrompe seus Sistemas, ejetando carregadores de munição e hastes de resfriamento.<br>Personagens adjacentes ao seu alvo sofrem <b>2 de Dano de Energia</b>.<br>Isso só pode ser usado 1/cena em cada personagem.",
          "add_status": [
            {
              "id": "jammed",
              "target": "target",
              "duration": "next_turn_end_target"
            }
          ],
          "damage": [
            {
              "type": "Energy",
              "val": 2,
              "aoe": true
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Invadir</b>]</b> Sistema Marionete: Seu alvo se move à <b>Velocidade</b> máxima dele em uma direção à sua escolha. Ele pode ser movido para áreas perigosas e outros obstáculos, mas ainda é afetado por <b>terreno difícil</b>, obstruções etc. Esse movimento é involuntário, mas provoca reações e engajamento normalmente e não conta como <b>Repulsão</b> , <b>Empurrar</b> ou puxar.\n<b>[<b>Invadir</b>]</b> <b>Ejetar</b> Núcleos de Energia: Seu alvo fica <b>Bloqueado</b> até o final do próximo turno dele, enquanto você temporariamente interrompe seus Sistemas, ejetando carregadores de munição e hastes de resfriamento. Personagens adjacentes ao seu alvo sofrem <b>2 de Dano de Energia</b>. Isso só pode ser usado 1/cena em cada personagem.",
      "detail": "<b>[<b>Invadir</b>]</b> Sistema Marionete: Seu alvo se move à <b>Velocidade</b> máxima dele em uma direção à sua escolha. Ele pode ser movido para áreas perigosas e outros obstáculos, mas ainda é afetado por <b>terreno difícil</b>, obstruções etc. Esse movimento é involuntário, mas provoca reações e engajamento normalmente e não conta como <b>Repulsão</b> , <b>Empurrar</b> ou puxar.\n<b>[<b>Invadir</b>]</b> <b>Ejetar</b> Núcleos de Energia: Seu alvo fica <b>Bloqueado</b> até o final do próximo turno dele, enquanto você temporariamente interrompe seus Sistemas, ejetando carregadores de munição e hastes de resfriamento. Personagens adjacentes ao seu alvo sofrem <b>2 de Dano de Energia</b>. Isso só pode ser usado 1/cena em cada personagem.",
      "source": "HORUS",
      "license": "Goblin",
      "license_level": 1
    },
    {
      "id": "ms_metahook",
      "category": "system",
      "name": "Metavínculo",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick Tech",
          "detail": "Escolha um personagem aliado ao <b>Alcance dos Sensores</b> e na linha de visão.<br>Você vincula seus Sistemas com ele, durando enquanto ele estiver ao <b>Alcance dos Sensores</b> e na linha de visão.<br>Enquanto estiver vinculado, você pode usar os <b>Sensores</b> e a linha de visão dele para ações de programar, e ele pode usar o seu Sistemas para fazer testes de perícia e salvamentos; no entanto, sempre que um dos personagens sofrer  de <b>Calor</b> ou uma condição, o outro personagem também sofre.<br>Você só pode vincular Sistemas com um personagem de cada vez.",
          "add_special": [
            {
              "attribute": "Metavínculo Alvo",
              "target": "ally",
              "detail": "O Goblin pode usar seus <b>Sensores</b> e linha de visão para ações tecnológicas, e você pode usar o Sistemas dele para fazer testes de perícia e salvamentos; no entanto, sempre que um dos personagens sofrer de <b>Calor</b> ou uma condição, o outro personagem também sofre."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[Quick Tech]</b> Habilidade: Escolha um personagem aliado ao <b>Alcance dos Sensores</b> e na linha de visão. Você vincula seus Sistemas com ele, durando enquanto ele estiver ao <b>Alcance dos Sensores</b> e na linha de visão. Enquanto estiver vinculado, você pode usar os <b>Sensores</b> e a linha de visão dele para ações de programar, e ele pode usar o seu Sistemas para fazer testes de perícia e salvamentos; no entanto, sempre que um dos personagens sofrer de <b>Calor</b> ou uma condição, o outro personagem também sofre. Você só pode vincular Sistemas com um personagem de cada vez.",
      "detail": "<b>[Quick Tech]</b> Habilidade: Escolha um personagem aliado ao <b>Alcance dos Sensores</b> e na linha de visão. Você vincula seus Sistemas com ele, durando enquanto ele estiver ao <b>Alcance dos Sensores</b> e na linha de visão. Enquanto estiver vinculado, você pode usar os <b>Sensores</b> e a linha de visão dele para ações de programar, e ele pode usar o seu Sistemas para fazer testes de perícia e salvamentos; no entanto, sempre que um dos personagens sofrer de <b>Calor</b> ou uma condição, o outro personagem também sofre. Você só pode vincular Sistemas com um personagem de cada vez.",
      "source": "HORUS",
      "license": "Goblin",
      "license_level": 2
    },
    {
      "id": "ms_h0r_os_system_upgrade_ii",
      "category": "system",
      "name": "Atualização de Sistema H0R_OS II",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "name": "Constructo Outro: Imagem Ideal",
          "type": "Object",
          "size": 2,
          "activation": "Quick Tech",
          "detail": "Você cria um construto de dados em um espaço livre adjacente – um objeto de <b>Tamanho 2</b> que pode parecer quase qualquer coisa e que parece real para todos os sistemas. O construto fornece <b>Cobertura Pesada</b>, bloqueia linha de visão e tem <b>Imunidade</b> a todo <b>Dano</b>. Os personagens o tratam como um obstáculo e, portanto, não podem se mover voluntariamente para ele; no entanto, se um personagem tentar ficar de pé sobre ele ou for movido involuntariamente para sua área, ele se dissipa e é imediatamente destruído. Ele dura pelo resto da cena, ou até ser destruído por um personagem adjacente com um teste de perícia Sistemas bem-sucedido como uma <b>Ação Completa</b>. Se você criar um segundo construto, o anterior desaparece.",
          "tags": [
            {
              "id": "tg_invulnerable"
            }
          ]
        },
        {
          "name": "Constructo Outro: Ídolo Falso",
          "type": "Decoy",
          "size": 2,
          "hp": 1,
          "edef": 10,
          "evasion": 10,
          "activation": "Quick Tech",
          "detail": "Escolha um espaço livre dentro dos <b>Sensores</b> e um alvo – você mesmo ou um personagem aliado dentro dos <b>Sensores</b>. Você cria um falso ídolo – um chamariz ilusório do seu alvo – no espaço escolhido. Antes de tentar realizar qualquer ação hostil contra o seu alvo, os personagens com linha de visão para o falso ídolo devem fazer um <b>salvamento de Sistemas</b>. Em caso de falha, eles não perdem a ação, mas não podem mirar no personagem original e acreditam que o falso ídolo é real em vez disso até o final do próximo turno.<br>O falso ídolo tem o mesmo <b>Tamanho</b> do seu alvo, pode se beneficiar de cobertura e tem Evasão 10, E-Defesa 10 e 1 HP. Ele desaparece se sofrer calor ou dano, ou no final da cena. Se você criar um segundo ídolo, o anterior desaparece.",
          "save": "sys"
        }
      ],
      "terse": "<b>[Posicionável: Constructo Outro: Imagem Ideal (Object)]</b> Você cria um construto de dados em um espaço livre adjacente – um objeto de <b>Tamanho 2</b> que pode parecer quase qualquer coisa e que parece real para todos os sistemas. O construto fornece <b>Cobertura Pesada</b>, bloqueia linha de visão e tem <b>Imunidade</b> a todo <b>Dano</b>. Os personagens o tratam como um obstáculo e, portanto, não podem se mover voluntariamente para ele; no entanto, se um personagem tentar ficar de pé sobre ele ou for movido involuntariamente para sua área, ele se dissipa e é imediatamente destruído. Ele dura pelo resto da cena, ou até ser destruído por um personagem adjacente com um teste de perícia Sistemas bem-sucedido como uma <b>Ação Completa</b>. Se você criar um segundo construto, o anterior desaparece.\n<b>[Posicionável: Constructo Outro: Ídolo Falso (Decoy)]</b> Escolha um espaço livre dentro dos <b>Sensores</b> e um alvo – você mesmo ou um personagem aliado dentro dos <b>Sensores</b>. Você cria um falso ídolo – um chamariz ilusório do seu alvo – no espaço escolhido. Antes de tentar realizar qualquer ação hostil contra o seu alvo, os personagens com linha de visão para o falso ídolo devem fazer um <b>salvamento de Sistemas</b>. Em caso de falha, eles não perdem a ação, mas não podem mirar no personagem original e acreditam que o falso ídolo é real em vez disso até o final do próximo turno. O falso ídolo tem o mesmo <b>Tamanho</b> do seu alvo, pode se beneficiar de cobertura e tem Evasão 10, E-Defesa 10 e 1 HP. Ele desaparece se sofrer calor ou dano, ou no final da cena. Se você criar um segundo ídolo, o anterior desaparece.",
      "detail": "<b>[Posicionável: Constructo Outro: Imagem Ideal (Object)]</b> Você cria um construto de dados em um espaço livre adjacente – um objeto de <b>Tamanho 2</b> que pode parecer quase qualquer coisa e que parece real para todos os sistemas. O construto fornece <b>Cobertura Pesada</b>, bloqueia linha de visão e tem <b>Imunidade</b> a todo <b>Dano</b>. Os personagens o tratam como um obstáculo e, portanto, não podem se mover voluntariamente para ele; no entanto, se um personagem tentar ficar de pé sobre ele ou for movido involuntariamente para sua área, ele se dissipa e é imediatamente destruído. Ele dura pelo resto da cena, ou até ser destruído por um personagem adjacente com um teste de perícia Sistemas bem-sucedido como uma <b>Ação Completa</b>. Se você criar um segundo construto, o anterior desaparece.\n<b>[Posicionável: Constructo Outro: Ídolo Falso (Decoy)]</b> Escolha um espaço livre dentro dos <b>Sensores</b> e um alvo – você mesmo ou um personagem aliado dentro dos <b>Sensores</b>. Você cria um falso ídolo – um chamariz ilusório do seu alvo – no espaço escolhido. Antes de tentar realizar qualquer ação hostil contra o seu alvo, os personagens com linha de visão para o falso ídolo devem fazer um <b>salvamento de Sistemas</b>. Em caso de falha, eles não perdem a ação, mas não podem mirar no personagem original e acreditam que o falso ídolo é real em vez disso até o final do próximo turno. O falso ídolo tem o mesmo <b>Tamanho</b> do seu alvo, pode se beneficiar de cobertura e tem Evasão 10, E-Defesa 10 e 1 HP. Ele desaparece se sofrer calor ou dano, ou no final da cena. Se você criar um segundo ídolo, o anterior desaparece.",
      "source": "HORUS",
      "license": "Goblin",
      "license_level": 2
    },
    {
      "id": "ms_osiris_class_nhp",
      "category": "system",
      "name": "PNH CLASSE OSÍRIS",
      "sp": 3,
      "type": "AI",
      "tags": [
        "IA",
        "Único",
        "1/Rodada"
      ],
      "actions": [
        {
          "name": "Lançar no Duat",
          "activation": "Quick Tech",
          "detail": "Você canaliza os Sistemas de seu alvo através de um espaço extradimensional desconhecido e desencadeia um ataque de sistema incrivelmente poderoso.<br>Realize um <b>ataque tecnológico</b> contra um alvo ao <b>Alcance dos Sensores</b>.<br>Em caso de sucesso, o alvo sofre 2 de <b>Calor</b> e você causa um efeito adicional da seguinte maneira: na primeira vez que realizar esse ataque com sucesso, você causa o Primeiro Portão em seu alvo; cada ataque subsequente bem-sucedido (em qualquer alvo) aumenta o nível do efeito que você causa (por exemplo, seu segundo ataque inflige o Segundo Portão, seu terceiro causa o Terceiro Portão etc.) até causar o Quarto Portão, após o qual o efeito retorna ao Primeiro Portão.<br>Seu progresso persiste entre as cenas, mas é reiniciado se você descansar ou realizar um Reparo Completo.<br>Primeiro Portão: Você controla o movimento padrão do alvo no próximo turno.<br>Segundo Portão: O alvo fica <b>Lento</b> e <b>Impedido</b> até o final do próximo turno dele.<br>Terceiro Portão: O alvo fica <b>Atordoado</b> até o final do próximo turno dele.<br>Quarto Portão: O alvo muda temporariamente de lealdade, tornando-se um personagem aliado até o final do próximo turno dele.<br>Ele trata os seus personagens aliados e os personagens hostis como se fossem os próprios aliados e são tratados como um PNJ aliado para ativação e ordem de turno.<br>Esse efeito termina imediatamente se você ou qualquer personagem aliado causar <b>Dano</b>, causar <b>Calor</b> ou atacar (incluindo <b>Agarrar</b> e <b>Empurrar</b>) seu alvo, ou forçá-lo a fazer um salvamento.",
          "attack": "tech",
          "damage": [
            {
              "type": "Heat",
              "val": 2,
              "save": "hull"
            }
          ],
          "add_special": [
            {
              "attribute": "Arremessado para o Duat Alvo",
              "detail": "O Goblin controla o movimento padrão do alvo no próximo turno."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "Seu mecha ganha a tag <b>IA</b> e pode realizar a opção de <b>Programar Rápido</b> Lançar no Duat.\n<b>[Quick Tech]</b> Lançar no Duat: Você canaliza os Sistemas de seu alvo através de um espaço extradimensional desconhecido e desencadeia um ataque de sistema incrivelmente poderoso. Realize um <b>ataque tecnológico</b> contra um alvo ao <b>Alcance dos Sensores</b>. Em caso de sucesso, o alvo sofre 2 de <b>Calor</b> e você causa um efeito adicional da seguinte maneira: na primeira vez que realizar esse ataque com sucesso, você causa o Primeiro Portão em seu alvo; cada ataque subsequente bem-sucedido (em qualquer alvo) aumenta o nível do efeito que você causa (por exemplo, seu segundo ataque inflige o Segundo Portão, seu terceiro causa o Terceiro Portão etc.) até causar o Quarto Portão, após o qual o efeito retorna ao Primeiro Portão. Seu progresso persiste entre as cenas, mas é reiniciado se você descansar ou realizar um <b>Reparo Completo</b>. Primeiro Portão: Você controla o movimento padrão do alvo no próximo turno. Segundo Portão: O alvo fica <b>Lento</b> e <b>Impedido</b> até o final do próximo turno dele. Terceiro Portão: O alvo fica <b>Atordoado</b> até o final do próximo turno dele. Quarto Portão: O alvo muda temporariamente de lealdade, tornando-se um personagem aliado até o final do próximo turno dele. Ele trata os seus personagens aliados e os personagens hostis como se fossem os próprios aliados e são tratados como um PNJ aliado para ativação e ordem de turno. Esse efeito termina imediatamente se você ou qualquer personagem aliado causar <b>Dano</b>, causar <b>Calor</b> ou atacar (incluindo <b>Agarrar</b> e <b>Empurrar</b>) seu alvo, ou forçá-lo a fazer um salvamento.",
      "detail": "Seu mecha ganha a tag <b>IA</b> e pode realizar a opção de <b>Programar Rápido</b> Lançar no Duat.\n<b>[Quick Tech]</b> Lançar no Duat: Você canaliza os Sistemas de seu alvo através de um espaço extradimensional desconhecido e desencadeia um ataque de sistema incrivelmente poderoso. Realize um <b>ataque tecnológico</b> contra um alvo ao <b>Alcance dos Sensores</b>. Em caso de sucesso, o alvo sofre 2 de <b>Calor</b> e você causa um efeito adicional da seguinte maneira: na primeira vez que realizar esse ataque com sucesso, você causa o Primeiro Portão em seu alvo; cada ataque subsequente bem-sucedido (em qualquer alvo) aumenta o nível do efeito que você causa (por exemplo, seu segundo ataque inflige o Segundo Portão, seu terceiro causa o Terceiro Portão etc.) até causar o Quarto Portão, após o qual o efeito retorna ao Primeiro Portão. Seu progresso persiste entre as cenas, mas é reiniciado se você descansar ou realizar um <b>Reparo Completo</b>. Primeiro Portão: Você controla o movimento padrão do alvo no próximo turno. Segundo Portão: O alvo fica <b>Lento</b> e <b>Impedido</b> até o final do próximo turno dele. Terceiro Portão: O alvo fica <b>Atordoado</b> até o final do próximo turno dele. Quarto Portão: O alvo muda temporariamente de lealdade, tornando-se um personagem aliado até o final do próximo turno dele. Ele trata os seus personagens aliados e os personagens hostis como se fossem os próprios aliados e são tratados como um PNJ aliado para ativação e ordem de turno. Esse efeito termina imediatamente se você ou qualquer personagem aliado causar <b>Dano</b>, causar <b>Calor</b> ou atacar (incluindo <b>Agarrar</b> e <b>Empurrar</b>) seu alvo, ou forçá-lo a fazer um salvamento.",
      "source": "HORUS",
      "license": "Goblin",
      "license_level": 3
    },
    {
      "id": "ms_h0r_os_system_upgrade_iii",
      "category": "system",
      "name": "Atualização de Sistema H0R_OS III",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Emblemas Dimensionais",
          "activation": "Invade",
          "detail": "Você cria três construtos de dados de <b>Tamanho 1</b> em espaços livres adjacentes ao seu alvo, mas não adjacentes entre si.<br>Quando um personagem passar por um dos construtos, ele sofre 2 de <b>Calor</b> e o construto desaparece.<br>Eles duram pelo restante da cena ou até serem destruídos, até você realizar essa ação novamente ou excluí-los como uma <b>Ação Livre</b>.<br>Um construto pode ser destruído por um personagem adjacente com um teste bem-sucedido de perícia de Sistemas como uma <b>Ação Rápida</b>."
        },
        {
          "name": "Correntes Celestiais",
          "activation": "Invade",
          "detail": "Marque um espaço que seu alvo ocupa atualmente.<br>Se ele sair do espaço afetado, em qualquer momento durante o seu turno, você pode realizar uma <b>Ação Livre</b> para teletransportá-lo de volta para esse espaço ou o mais próximo possível, encerrando esse efeito.<br>Um personagem afetado pode tentar obter sucesso em um <b>salvamento de Sistemas</b> como uma <b>Ação Rápida</b> para encerrar o efeito; caso contrário, ele dura até o final da cena.",
          "add_special": [
            {
              "attribute": "H0R_OS: Celestial Shackles Target",
              "detail": "Se você sair do espaço afetado, uma vez a qualquer momento durante o turno do Goblin, ele pode realizar uma <b>Ação Livre</b> para teletransportá-lo de volta para esse espaço, ou o mais próximo possível."
            }
          ]
        }
      ],
      "deployables": [
        {
          "name": "Dimensional Emblems",
          "type": "Object",
          "size": 1,
          "instances": 3,
          "detail": "Você cria três construtos de dados de <b>Tamanho 1</b> em espaços livres adjacentes ao seu alvo, mas não adjacentes entre si. Quando um personagem passa por um dos construtos, ele sofre 2 de <b>Calor</b> e o construto desaparece. Eles duram pelo resto da cena ou até serem destruídos, você realizar esta ação novamente ou você os excluir como uma <b>Ação Livre</b>. Um construto pode ser destruído por um personagem adjacente com um teste de perícia Sistemas bem-sucedido como uma <b>Ação Rápida</b>.",
          "damage": [
            {
              "type": "Heat",
              "val": 2
            }
          ],
          "activation": "None",
          "recall": "Free"
        }
      ],
      "terse": "<b>[<b>Invadir</b>]</b> Emblemas Dimensionais: Você cria três construtos de dados de <b>Tamanho 1</b> em espaços livres adjacentes ao seu alvo, mas não adjacentes entre si. Quando um personagem passar por um dos construtos, ele sofre 2 de <b>Calor</b> e o construto desaparece. Eles duram pelo restante da cena ou até serem destruídos, até você realizar essa ação novamente ou excluí-los como uma <b>Ação Livre</b>. Um construto pode ser destruído por um personagem adjacente com um teste bem-sucedido de perícia de Sistemas como uma <b>Ação Rápida</b>.\n<b>[<b>Invadir</b>]</b> Correntes Celestiais: Marque um espaço que seu alvo ocupa atualmente. Se ele sair do espaço afetado, em qualquer momento durante o seu turno, você pode realizar uma <b>Ação Livre</b> para teletransportá-lo de volta para esse espaço ou o mais próximo possível, encerrando esse efeito. Um personagem afetado pode tentar obter sucesso em um <b>salvamento de Sistemas</b> como uma <b>Ação Rápida</b> para encerrar o efeito; caso contrário, ele dura até o final da cena.\n<b>[Posicionável: Dimensional Emblems (Object)]</b> Você cria três construtos de dados de <b>Tamanho 1</b> em espaços livres adjacentes ao seu alvo, mas não adjacentes entre si. Quando um personagem passa por um dos construtos, ele sofre 2 de <b>Calor</b> e o construto desaparece. Eles duram pelo resto da cena ou até serem destruídos, você realizar esta ação novamente ou você os excluir como uma <b>Ação Livre</b>. Um construto pode ser destruído por um personagem adjacente com um teste de perícia Sistemas bem-sucedido como uma <b>Ação Rápida</b>.",
      "detail": "<b>[<b>Invadir</b>]</b> Emblemas Dimensionais: Você cria três construtos de dados de <b>Tamanho 1</b> em espaços livres adjacentes ao seu alvo, mas não adjacentes entre si. Quando um personagem passar por um dos construtos, ele sofre 2 de <b>Calor</b> e o construto desaparece. Eles duram pelo restante da cena ou até serem destruídos, até você realizar essa ação novamente ou excluí-los como uma <b>Ação Livre</b>. Um construto pode ser destruído por um personagem adjacente com um teste bem-sucedido de perícia de Sistemas como uma <b>Ação Rápida</b>.\n<b>[<b>Invadir</b>]</b> Correntes Celestiais: Marque um espaço que seu alvo ocupa atualmente. Se ele sair do espaço afetado, em qualquer momento durante o seu turno, você pode realizar uma <b>Ação Livre</b> para teletransportá-lo de volta para esse espaço ou o mais próximo possível, encerrando esse efeito. Um personagem afetado pode tentar obter sucesso em um <b>salvamento de Sistemas</b> como uma <b>Ação Rápida</b> para encerrar o efeito; caso contrário, ele dura até o final da cena.\n<b>[Posicionável: Dimensional Emblems (Object)]</b> Você cria três construtos de dados de <b>Tamanho 1</b> em espaços livres adjacentes ao seu alvo, mas não adjacentes entre si. Quando um personagem passa por um dos construtos, ele sofre 2 de <b>Calor</b> e o construto desaparece. Eles duram pelo resto da cena ou até serem destruídos, você realizar esta ação novamente ou você os excluir como uma <b>Ação Livre</b>. Um construto pode ser destruído por um personagem adjacente com um teste de perícia Sistemas bem-sucedido como uma <b>Ação Rápida</b>.",
      "source": "HORUS",
      "license": "Goblin",
      "license_level": 3
    },
    {
      "id": "ms_mimic_mesh",
      "category": "system",
      "name": "Teia de Mímica",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Ativar Malha Mimética",
          "activation": "Quick",
          "detail": "Escolha um aliado ao <b>Alcance dos Sensores</b>: até o final do seu próximo turno, você tem a <b>Reação</b> Consciência de Campo de Batalha.",
          "add_special": [
            {
              "attribute": "Alvo Malha Mimética",
              "target": "ally"
            }
          ]
        },
        {
          "name": "Consciência de Campo de Batalha",
          "activation": "Reaction",
          "trigger": "Uma ação hostil é realizada contra o seu alvo.",
          "detail": "Você pode se mover 3 espaços em direção ao seu alvo pelo caminho mais direto possível.<br>Esse movimento interrompe e se resolve antes da ação acionadora, ignora engajamento e não provoca reações.<br>Esta <b>Reação</b> pode ser realizada tantas vezes por rodada quanto for acionada."
        }
      ],
      "deployables": [],
      "terse": "Escolha um aliado ao <b>Alcance</b> dos <b>Sensores</b>: até o final do seu próximo turno, você tem a <b>Reação</b> Consciência de Campo de Batalha.\n<b>[<b>Ação Rápida</b>]</b> Ativar Malha Mimética: Escolha um aliado ao <b>Alcance dos Sensores</b>: até o final do seu próximo turno, você tem a <b>Reação</b> Consciência de Campo de Batalha.\n<b>[<b>Reação</b>]</b> Consciência de Campo de Batalha: Você pode se mover 3 espaços em direção ao seu alvo pelo caminho mais direto possível. Esse movimento interrompe e se resolve antes da ação acionadora, ignora engajamento e não provoca reações. Esta <b>Reação</b> pode ser realizada tantas vezes por rodada quanto for acionada.",
      "detail": "Escolha um aliado ao <b>Alcance</b> dos <b>Sensores</b>: até o final do seu próximo turno, você tem a <b>Reação</b> Consciência de Campo de Batalha.\n<b>[<b>Ação Rápida</b>]</b> Ativar Malha Mimética: Escolha um aliado ao <b>Alcance dos Sensores</b>: até o final do seu próximo turno, você tem a <b>Reação</b> Consciência de Campo de Batalha.\n<b>[<b>Reação</b>]</b> Consciência de Campo de Batalha: Você pode se mover 3 espaços em direção ao seu alvo pelo caminho mais direto possível. Esse movimento interrompe e se resolve antes da ação acionadora, ignora engajamento e não provoca reações. Esta <b>Reação</b> pode ser realizada tantas vezes por rodada quanto for acionada.",
      "source": "HORUS",
      "license": "Gorgon",
      "license_level": 1
    },
    {
      "id": "ms_sentinel_drone",
      "category": "system",
      "name": "Drone Sentinela",
      "sp": 2,
      "type": "Drone",
      "tags": [],
      "actions": [],
      "deployables": [
        {
          "type": "Drone",
          "name": "Drone Sentinela",
          "size": 0.5,
          "hp": 5,
          "edef": 10,
          "evasion": 10,
          "detail": "O drone sentinela pode ser posicionado em qualquer espaço livre ao <b>Alcance dos Sensores</b> e na linha de visão, onde ele estabelece um perímetro de segurança <b>Emanação 2</b>.<br>Personagens hostis dentro da área afetada sofrem 3 Cinético do fogo automático do drone antes de realizar qualquer ataque.",
          "recall": "Quick",
          "redeploy": "Quick"
        }
      ],
      "terse": "O drone sentinela pode ser posicionado em qualquer espaço livre ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, onde ele estabelece um perímetro de segurança <b>Emanação</b> 2.\nPersonagens hostis dentro da área afetada sofrem 3 Cinético do fogo automático do drone antes de realizar qualquer ataque.\nO drone sentinela pode ser reposicionado para uma nova localização ou recolhido como uma <b>Ação Rápida</b>.\n<b>[Posicionável: Drone Sentinela (Drone)]</b> O drone sentinela pode ser posicionado em qualquer espaço livre ao <b>Alcance dos Sensores</b> e na linha de visão, onde ele estabelece um perímetro de segurança <b>Emanação 2</b>. Personagens hostis dentro da área afetada sofrem 3 Cinético do fogo automático do drone antes de realizar qualquer ataque.",
      "detail": "O drone sentinela pode ser posicionado em qualquer espaço livre ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, onde ele estabelece um perímetro de segurança <b>Emanação</b> 2.\nPersonagens hostis dentro da área afetada sofrem 3 Cinético do fogo automático do drone antes de realizar qualquer ataque.\nO drone sentinela pode ser reposicionado para uma nova localização ou recolhido como uma <b>Ação Rápida</b>.\n<b>[Posicionável: Drone Sentinela (Drone)]</b> O drone sentinela pode ser posicionado em qualquer espaço livre ao <b>Alcance dos Sensores</b> e na linha de visão, onde ele estabelece um perímetro de segurança <b>Emanação 2</b>. Personagens hostis dentro da área afetada sofrem 3 Cinético do fogo automático do drone antes de realizar qualquer ataque.",
      "source": "HORUS",
      "license": "Gorgon",
      "license_level": 1
    },
    {
      "id": "ms___scorpion_v70.1",
      "category": "system",
      "name": "//ESCORPIÃO V70.1",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Ativar  //SCORPION",
          "activation": "None",
          "trigger": "Você ou um personagem aliado adjacente a você erra um ataque tecnológico ou é bem-sucedido em um salvamento contra uma ação tecnológica hostil.",
          "detail": "Escolha um dos seguintes:<ul><li>O atacante se torna <b>Impedido</b> até o final do seu próximo turno e sofre 2 de <b>Calor</b>.</li><li>O atacante se torna <b>Bloqueado</b> até o final do seu próximo turno.</li></ul>",
          "add_status": [
            {
              "id": "impaired",
              "duration": "next_turn_end_target"
            },
            {
              "id": "jammed",
              "duration": "next_turn_end_target"
            }
          ],
          "damage": [
            {
              "type": "Heat",
              "val": 2
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[None]</b> Ativar //SCORPION: Escolha um dos seguintes:<ul><li>O atacante se torna <b>Impedido</b> até o final do seu próximo turno e sofre 2 de <b>Calor</b>.</li><li>O atacante se torna <b>Bloqueado</b> até o final do seu próximo turno.</li></ul>",
      "detail": "<b>[None]</b> Ativar //SCORPION: Escolha um dos seguintes:<ul><li>O atacante se torna <b>Impedido</b> até o final do seu próximo turno e sofre 2 de <b>Calor</b>.</li><li>O atacante se torna <b>Bloqueado</b> até o final do seu próximo turno.</li></ul>",
      "source": "HORUS",
      "license": "Gorgon",
      "license_level": 2
    },
    {
      "id": "ms_monitor_module",
      "category": "system",
      "name": "Módulo de Monitoramento",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Quando ativado, receba 1d3 Cargas e escolha um personagem aliado adjacente: até o final do seu próximo turno, sempre que seu alvo for atacado enquanto estiver adjacente a você, gaste uma Carga para <b>Alvejar</b> o atacante com uma <b>Reação</b>, causando metade do <b>Dano</b>,  de <b>Queimadura</b> ou  de <b>Calor</b> no acerto.<br>Todas as Cargas são perdidas quando esse efeito termina.",
          "add_special": [
            {
              "attribute": "Monitor Module Target",
              "target": "ally",
              "duration": "next_turn_end_target",
              "detail": "Sempre que você for atacado enquanto estiver adjacente à <b>GÓRGONA</b>, ela pode gastar uma <b>Carga</b> para <b>Alvejar</b> o atacante com uma <b>Reação</b>, causando metade do <b>Dano</b>,  de <b>Calor</b> ou  de <b>Queimadura</b> no acerto."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Quando ativado, receba 1d3 Cargas e escolha um personagem aliado adjacente: até o final do seu próximo turno, sempre que seu alvo for atacado enquanto estiver adjacente a você, gaste uma Carga para <b>Alvejar</b> o atacante com uma <b>Reação</b>, causando metade do <b>Dano</b>, de <b>Queimadura</b> ou de <b>Calor</b> no acerto. Todas as Cargas são perdidas quando esse efeito termina.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Quando ativado, receba 1d3 Cargas e escolha um personagem aliado adjacente: até o final do seu próximo turno, sempre que seu alvo for atacado enquanto estiver adjacente a você, gaste uma Carga para <b>Alvejar</b> o atacante com uma <b>Reação</b>, causando metade do <b>Dano</b>, de <b>Queimadura</b> ou de <b>Calor</b> no acerto. Todas as Cargas são perdidas quando esse efeito termina.",
      "source": "HORUS",
      "license": "Gorgon",
      "license_level": 2
    },
    {
      "id": "ms_scylla_class_nhp",
      "category": "system",
      "name": "PNH CLASSE CILA",
      "sp": 3,
      "type": "AI",
      "tags": [
        "IA",
        "Único",
        "Calor 2 (Próprio)"
      ],
      "actions": [
        {
          "name": "Liberar CILA",
          "activation": "Quick",
          "detail": "Você sofre 2 de <b>Calor</b>.<br>Até o início do seu próximo turno, você ganha duas reações especiais que lhe permitem <b>Alvejar</b> em resposta a um dos seguintes acionamentos (escolhido quando você realiza esta ação):<ul><li>Um personagem hostil realiza um ataque contra você ou um personagem aliado a até <b>Alcance 3</b> de você.</li><li>Um personagem hostil na linha de visão tenta atacar ou interagir com um objeto escolhido quando você Liberar CILA.<br>Os personagens estão cientes do objeto escolhido.</li></ul>Essas reações causam metade do <b>Dano</b>,  de <b>Calor</b> ou  de <b>Queimadura</b> no acerto e precisam visar o personagem que as desencadeou.",
          "active_effects": [
            {
              "name": "Ativar SCYLLA",
              "detail": "Você ganha duas reações especiais que permitem <b>Alvejar</b> em resposta a um dos seguintes acionamentos (escolhido quando você realiza esta ação):<ul><li>Um personagem hostil realiza um ataque contra você ou um personagem aliado a até <b>Alcance 3</b> de você.</li><li>Um personagem hostil tenta atacar ou interagir com um objeto escolhido quando você Liberar CILA e dentro da linha de visão. Os personagens estão cientes do objeto escolhido.</li></ul>Essas reações causam metade do <b>Dano</b>,  de <b>Calor</b> ou  de <b>Queimadura</b> no acerto e precisam visar o personagem que as desencadeou."
            }
          ]
        },
        {
          "name": "Liberar CILA: <b>Reação</b>",
          "activation": "Reaction",
          "frequency": "2/round",
          "trigger": "Escolha um dos seguintes, quando você realizar a ação Liberar CILA:<ul><li>Um personagem hostil realiza um ataque contra você ou um personagem aliado a até <b>Alcance 3</b> de você.</li><li>Um personagem hostil na linha de visão tenta atacar ou interagir com um objeto escolhido quando você Liberar CILA e dentro da linha de visão. Os personagens estão cientes do objeto escolhido.</li></ul>",
          "detail": "Você pode <b>Alvejar</b> o personagem que a desencadeou, causando metade do <b>Dano</b>,  de <b>Calor</b> ou  de <b>Queimadura</b> no acerto."
        }
      ],
      "deployables": [],
      "terse": "Seu mecha recebe a propriedade <b>IA</b> e Liberar CILA.\n<b>[<b>Ação Rápida</b>]</b> Liberar CILA: Você sofre 2 de <b>Calor</b>. Até o início do seu próximo turno, você ganha duas reações especiais que lhe permitem <b>Alvejar</b> em resposta a um dos seguintes acionamentos (escolhido quando você realiza esta ação):<ul><li>Um personagem hostil realiza um ataque contra você ou um personagem aliado a até <b>Alcance 3</b> de você.</li><li>Um personagem hostil na linha de visão tenta atacar ou interagir com um objeto escolhido quando você Liberar CILA. Os personagens estão cientes do objeto escolhido.</li></ul>Essas reações causam metade do <b>Dano</b>, de <b>Calor</b> ou de <b>Queimadura</b> no acerto e precisam visar o personagem que as desencadeou.\n<b>[<b>Reação</b>]</b> Liberar CILA: <b>Reação</b>: Você pode <b>Alvejar</b> o personagem que a desencadeou, causando metade do <b>Dano</b>, de <b>Calor</b> ou de <b>Queimadura</b> no acerto.",
      "detail": "Seu mecha recebe a propriedade <b>IA</b> e Liberar CILA.\n<b>[<b>Ação Rápida</b>]</b> Liberar CILA: Você sofre 2 de <b>Calor</b>. Até o início do seu próximo turno, você ganha duas reações especiais que lhe permitem <b>Alvejar</b> em resposta a um dos seguintes acionamentos (escolhido quando você realiza esta ação):<ul><li>Um personagem hostil realiza um ataque contra você ou um personagem aliado a até <b>Alcance 3</b> de você.</li><li>Um personagem hostil na linha de visão tenta atacar ou interagir com um objeto escolhido quando você Liberar CILA. Os personagens estão cientes do objeto escolhido.</li></ul>Essas reações causam metade do <b>Dano</b>, de <b>Calor</b> ou de <b>Queimadura</b> no acerto e precisam visar o personagem que as desencadeou.\n<b>[<b>Reação</b>]</b> Liberar CILA: <b>Reação</b>: Você pode <b>Alvejar</b> o personagem que a desencadeou, causando metade do <b>Dano</b>, de <b>Calor</b> ou de <b>Queimadura</b> no acerto.",
      "source": "HORUS",
      "license": "Gorgon",
      "license_level": 3
    },
    {
      "id": "ms_puppetmaster",
      "category": "system",
      "name": "MESTRE DAS MARIONETES",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Guiar o Enxame",
          "activation": "Quick Tech",
          "detail": "Mova qualquer quantidade de <b>Drones</b> ao <b>Alcance dos Sensores</b> — incluindo aqueles pertencentes a outros personagens — até 4 espaços em qualquer direção."
        },
        {
          "name": "Eletropulso",
          "activation": "Quick Tech",
          "detail": "Personagens à sua escolha ao <b>Alcance dos Sensores</b> e adjacentes a qualquer Drone ou Posicionável (mesmo que pertençam a eles mesmos), sofrem 2 de <b>Energia</b>.",
          "damage": [
            {
              "type": "Energy",
              "val": 2,
              "aoe": true
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[Quick Tech]</b> Guiar o Enxame: Mova qualquer quantidade de <b>Drones</b> ao <b>Alcance dos Sensores</b> — incluindo aqueles pertencentes a outros personagens — até 4 espaços em qualquer direção.\n<b>[Quick Tech]</b> Eletropulso: Personagens à sua escolha ao <b>Alcance dos Sensores</b> e adjacentes a qualquer Drone ou Posicionável (mesmo que pertençam a eles mesmos), sofrem 2 de <b>Energia</b>.",
      "detail": "<b>[Quick Tech]</b> Guiar o Enxame: Mova qualquer quantidade de <b>Drones</b> ao <b>Alcance dos Sensores</b> — incluindo aqueles pertencentes a outros personagens — até 4 espaços em qualquer direção.\n<b>[Quick Tech]</b> Eletropulso: Personagens à sua escolha ao <b>Alcance dos Sensores</b> e adjacentes a qualquer Drone ou Posicionável (mesmo que pertençam a eles mesmos), sofrem 2 de <b>Energia</b>.",
      "source": "HORUS",
      "license": "Hydra",
      "license_level": 1
    },
    {
      "id": "ms_tempest_drone",
      "category": "system",
      "name": "Drone Tempestade",
      "sp": 2,
      "type": "Drone",
      "tags": [
        "Resistência (Tudo)"
      ],
      "actions": [],
      "deployables": [
        {
          "type": "Drone",
          "name": "Drone Tempestade",
          "size": 0.5,
          "hp": 5,
          "edef": 10,
          "evasion": 10,
          "detail": "Este grande drone blindado pode ser posicionado em um espaço livre ao <b>Alcance dos Sensores</b> e na linha de visão.<br>Qualquer personagem que iniciar o próprio turno adjacente ou se mover para ficar adjacente a este drone pela primeira vez em uma rodada deve ser bem-sucedido em um  <b>salvamento de Casco</b> ou sofre 4 de <b>Energia</b> e é repelido 3 espaços diretamente opostos e para longe do drone.",
          "recall": "Quick",
          "redeploy": "Quick",
          "damage": [
            {
              "type": "Energy",
              "val": 4,
              "save": "hull"
            }
          ],
          "tags": [
            {
              "id": "tg_resistall"
            }
          ]
        }
      ],
      "terse": "Este grande drone blindado pode ser posicionado em um espaço livre ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão.\nQualquer personagem que iniciar o próprio turno adjacente ou se mover para ficar adjacente a este drone pela primeira vez em uma rodada deve ser bem-sucedido em um <b>salvamento de Casco</b> ou sofre 4 de <b>Energia</b> e é repelido 3 espaços diretamente opostos e para longe do drone.\nVocê pode recolher ou posicionar o Drone Tempestade como uma <b>Ação Rápida</b>.\nAté ser recolhido ou destruído, ele permanece posicionado até o final da cena.\n<b>[Posicionável: Drone Tempestade (Drone)]</b> Este grande drone blindado pode ser posicionado em um espaço livre ao <b>Alcance dos Sensores</b> e na linha de visão. Qualquer personagem que iniciar o próprio turno adjacente ou se mover para ficar adjacente a este drone pela primeira vez em uma rodada deve ser bem-sucedido em um <b>salvamento de Casco</b> ou sofre 4 de <b>Energia</b> e é repelido 3 espaços diretamente opostos e para longe do drone.",
      "detail": "Este grande drone blindado pode ser posicionado em um espaço livre ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão.\nQualquer personagem que iniciar o próprio turno adjacente ou se mover para ficar adjacente a este drone pela primeira vez em uma rodada deve ser bem-sucedido em um <b>salvamento de Casco</b> ou sofre 4 de <b>Energia</b> e é repelido 3 espaços diretamente opostos e para longe do drone.\nVocê pode recolher ou posicionar o Drone Tempestade como uma <b>Ação Rápida</b>.\nAté ser recolhido ou destruído, ele permanece posicionado até o final da cena.\n<b>[Posicionável: Drone Tempestade (Drone)]</b> Este grande drone blindado pode ser posicionado em um espaço livre ao <b>Alcance dos Sensores</b> e na linha de visão. Qualquer personagem que iniciar o próprio turno adjacente ou se mover para ficar adjacente a este drone pela primeira vez em uma rodada deve ser bem-sucedido em um <b>salvamento de Casco</b> ou sofre 4 de <b>Energia</b> e é repelido 3 espaços diretamente opostos e para longe do drone.",
      "source": "HORUS",
      "license": "Hydra",
      "license_level": 2
    },
    {
      "id": "ms_assassin_drone",
      "category": "system",
      "name": "Drone Assassino",
      "sp": 2,
      "type": "Drone",
      "tags": [],
      "actions": [],
      "deployables": [
        {
          "type": "Drone",
          "name": "Drone Assassino",
          "size": 0.5,
          "hp": 5,
          "edef": 10,
          "evasion": 10,
          "detail": "Após posicionamento em um espaço livre adjacente, ele afeta uma área de <b>Explosão 2</b>  à sua escolha ao <b>Alcance dos Sensores</b> e na linha de visão, e você ganha a <b>Reação Negação de Área</b> (utilizável qualquer quantidade de vezes por rodada).",
          "recall": "Quick",
          "redeploy": "Quick",
          "actions": [
            {
              "name": "Negação de Área",
              "activation": "Reaction",
              "trigger": "Um personagem hostil inicia o movimento ou entra na área alvo do seu drone assassino.",
              "detail": "Você pode fazer um ataque à distância contra ele com o drone, recebendo seu <b><b>Brio<b></b> como bônus à rolagem dele e causando 3 Cinético.",
              "damage": [
                {
                  "type": "Kinetic",
                  "val": 3,
                  "attack": "ranged"
                }
              ]
            }
          ]
        }
      ],
      "terse": "Este Drone Assassino pode ser posicionado em qualquer espaço livre adjacente.\nApós posicionamento, ele afeta uma área de <b>Explosão 2</b> à sua escolha ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, e você ganha a <b>Reação</b> Negação de Área (utilizável qualquer quantidade de vezes por rodada).\nVocê pode recolher ou posicionar o Drone Assassino como uma <b>Ação Rápida</b>.\nA menos que seja recolhido ou destruído, ele permanece posicionado até o final da cena.\n<b>[Posicionável: Drone Assassino (Drone)]</b> Após posicionamento em um espaço livre adjacente, ele afeta uma área de <b>Explosão 2</b> à sua escolha ao <b>Alcance dos Sensores</b> e na linha de visão, e você ganha a <b>Reação Negação de Área</b> (utilizável qualquer quantidade de vezes por rodada).",
      "detail": "Este Drone Assassino pode ser posicionado em qualquer espaço livre adjacente.\nApós posicionamento, ele afeta uma área de <b>Explosão 2</b> à sua escolha ao <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, e você ganha a <b>Reação</b> Negação de Área (utilizável qualquer quantidade de vezes por rodada).\nVocê pode recolher ou posicionar o Drone Assassino como uma <b>Ação Rápida</b>.\nA menos que seja recolhido ou destruído, ele permanece posicionado até o final da cena.\n<b>[Posicionável: Drone Assassino (Drone)]</b> Após posicionamento em um espaço livre adjacente, ele afeta uma área de <b>Explosão 2</b> à sua escolha ao <b>Alcance dos Sensores</b> e na linha de visão, e você ganha a <b>Reação Negação de Área</b> (utilizável qualquer quantidade de vezes por rodada).",
      "source": "HORUS",
      "license": "Hydra",
      "license_level": 3
    },
    {
      "id": "ms_beckoner",
      "category": "system",
      "name": "Acenar",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Chamar",
          "activation": "Invade",
          "detail": "Você sofre <b>1d6+2 de Energia</b> (PF) e troca de lugar com seu alvo, ambos os personagens se teletransportando para a posição do outro.<br>Seu alvo deve ser um Mecha que possui o mesmo <b>Tamanho</b> que você ou maior, ou esta ação falha.<br>Os personagens só podem ser trocados para espaços onde normalmente podem ficar ou se mover (ou seja, se um personagem não pode voar, ele não pode ser trocado no ar).",
          "damage": [
            {
              "type": "Energy",
              "val": "1d6+2",
              "ap": true,
              "target": "self"
            }
          ]
        },
        {
          "name": "Invocar",
          "activation": "Invade",
          "detail": "Todos os personagens a até <b>Alcance 3</b> do seu alvo são puxados para espaços adjacentes a ele, ou o mais próximo possível."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Invadir</b>]</b> Chamar: Você sofre <b>1d6+2 de Energia</b> (PF) e troca de lugar com seu alvo, ambos os personagens se teletransportando para a posição do outro. Seu alvo deve ser um Mecha que possui o mesmo <b>Tamanho</b> que você ou maior, ou esta ação falha. Os personagens só podem ser trocados para espaços onde normalmente podem ficar ou se mover (ou seja, se um personagem não pode voar, ele não pode ser trocado no ar).\n<b>[<b>Invadir</b>]</b> Invocar: Todos os personagens a até <b>Alcance 3</b> do seu alvo são puxados para espaços adjacentes a ele, ou o mais próximo possível.",
      "detail": "<b>[<b>Invadir</b>]</b> Chamar: Você sofre <b>1d6+2 de Energia</b> (PF) e troca de lugar com seu alvo, ambos os personagens se teletransportando para a posição do outro. Seu alvo deve ser um Mecha que possui o mesmo <b>Tamanho</b> que você ou maior, ou esta ação falha. Os personagens só podem ser trocados para espaços onde normalmente podem ficar ou se mover (ou seja, se um personagem não pode voar, ele não pode ser trocado no ar).\n<b>[<b>Invadir</b>]</b> Invocar: Todos os personagens a até <b>Alcance 3</b> do seu alvo são puxados para espaços adjacentes a ele, ou o mais próximo possível.",
      "source": "HORUS",
      "license": "Manticore",
      "license_level": 1
    },
    {
      "id": "ms_smite",
      "category": "system",
      "name": "Castigar",
      "sp": 3,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Castigar",
          "activation": "Invade",
          "detail": "Você sofre <b>1d6 de Energia</b>(PF) e seu alvo deve obter sucesso em um <b>salvamento de Sistemas</b> ou fica <b>Atordoado</b> até o final do próximo turno dele.<br>Cada personagem só pode ficar <b>Atordoado</b> por este efeito uma vez por cena.",
          "damage": [
            {
              "type": "Energy",
              "val": "1d6",
              "ap": true,
              "target": "self"
            }
          ],
          "add_status": [
            {
              "id": "stunned",
              "duration": "next_turn_end_target",
              "save": "sys"
            }
          ]
        },
        {
          "name": "Queimar",
          "activation": "Invade",
          "detail": "Você sofre <b>1d6 de Energia</b>(PF) e causa 2 de <b>Calor</b> ao seu alvo para cada outro personagem de <b>Tamanho 1</b> ou maior que estiver <b>Engajado</b> com ele ou adjacente a ele — incluindo você — até um máximo de 6 de <b>Calor</b>.",
          "damage": [
            {
              "type": "Heat",
              "val": 2,
              "aoe": true
            },
            {
              "type": "Energy",
              "val": "1d6",
              "ap": true,
              "target": "self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Invadir</b>]</b> Castigar: Você sofre <b>1d6 de Energia</b>(PF) e seu alvo deve obter sucesso em um <b>salvamento de Sistemas</b> ou fica <b>Atordoado</b> até o final do próximo turno dele. Cada personagem só pode ficar <b>Atordoado</b> por este efeito uma vez por cena.\n<b>[<b>Invadir</b>]</b> Queimar: Você sofre <b>1d6 de Energia</b>(PF) e causa 2 de <b>Calor</b> ao seu alvo para cada outro personagem de <b>Tamanho 1</b> ou maior que estiver <b>Engajado</b> com ele ou adjacente a ele — incluindo você — até um máximo de 6 de <b>Calor</b>.",
      "detail": "<b>[<b>Invadir</b>]</b> Castigar: Você sofre <b>1d6 de Energia</b>(PF) e seu alvo deve obter sucesso em um <b>salvamento de Sistemas</b> ou fica <b>Atordoado</b> até o final do próximo turno dele. Cada personagem só pode ficar <b>Atordoado</b> por este efeito uma vez por cena.\n<b>[<b>Invadir</b>]</b> Queimar: Você sofre <b>1d6 de Energia</b>(PF) e causa 2 de <b>Calor</b> ao seu alvo para cada outro personagem de <b>Tamanho 1</b> ou maior que estiver <b>Engajado</b> com ele ou adjacente a ele — incluindo você — até um máximo de 6 de <b>Calor</b>.",
      "source": "HORUS",
      "license": "Manticore",
      "license_level": 2
    },
    {
      "id": "ms_emp_pulse",
      "category": "system",
      "name": "Pulso Eletromagnético",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Você fica <b>Atordoado</b> até o final do seu próximo turno e todos os personagens a até <b>Emanação</b> 1 que não possuam a tag Biológico devem obter sucesso em um teste de Sistemas ou também ficam <b>Atordoado</b>s até o final do próximo turno deles.<br>Personagens, exceto você, só podem ficar <b>Atordoado</b>s por esse efeito uma vez por cena.",
          "add_status": [
            {
              "id": "stunned",
              "target": "self",
              "duration": "next_turn_end_self"
            },
            {
              "id": "stunned",
              "duration": "next_turn_end_target",
              "aoe": true,
              "save": "sys"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Você fica <b>Atordoado</b> até o final do seu próximo turno e todos os personagens a até <b>Emanação</b> 1 que não possuam a tag Biológico devem obter sucesso em um teste de Sistemas ou também ficam <b>Atordoado</b>s até o final do próximo turno deles. Personagens, exceto você, só podem ficar <b>Atordoado</b>s por esse efeito uma vez por cena.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Você fica <b>Atordoado</b> até o final do seu próximo turno e todos os personagens a até <b>Emanação</b> 1 que não possuam a tag Biológico devem obter sucesso em um teste de Sistemas ou também ficam <b>Atordoado</b>s até o final do próximo turno deles. Personagens, exceto você, só podem ficar <b>Atordoado</b>s por esse efeito uma vez por cena.",
      "source": "HORUS",
      "license": "Manticore",
      "license_level": 3
    },
    {
      "id": "ms_lightning_generator",
      "category": "system",
      "name": "Gerador de Raios",
      "sp": 3,
      "type": "Sistema",
      "tags": [
        "Único",
        "Calor 1 (Próprio)"
      ],
      "actions": [
        {
          "activation": "Protocol",
          "detail": "Quando ativar este protocolo, sofra 1 de <b>Calor</b> e cause 2 de <b>Energia</b> a todos os personagens e objetos adjacentes a você.<br>Se você estiver na <b>Zona de Perigo<b>  no início do seu turno, este protocolo é ativado automaticamente, mas o <b>Dano</b> aumenta para 4 de <b>Energia</b> (PF).",
          "damage": [
            {
              "type": "Heat",
              "val": 1,
              "target": "self"
            },
            {
              "type": "Energy",
              "val": 2,
              "aoe": true
            },
            {
              "type": "Energy",
              "val": 4,
              "aoe": true
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Protocolo</b>]</b> Habilidade: Quando ativar este protocolo, sofra 1 de <b>Calor</b> e cause 2 de <b>Energia</b> a todos os personagens e objetos adjacentes a você. Se você estiver na <b>Zona de Perigo<b> no início do seu turno, este protocolo é ativado automaticamente, mas o <b>Dano</b> aumenta para 4 de <b>Energia</b> (PF).",
      "detail": "<b>[<b>Protocolo</b>]</b> Habilidade: Quando ativar este protocolo, sofra 1 de <b>Calor</b> e cause 2 de <b>Energia</b> a todos os personagens e objetos adjacentes a você. Se você estiver na <b>Zona de Perigo<b> no início do seu turno, este protocolo é ativado automaticamente, mas o <b>Dano</b> aumenta para 4 de <b>Energia</b> (PF).",
      "source": "HORUS",
      "license": "Manticore",
      "license_level": 3
    },
    {
      "id": "ms_mesmer_charges",
      "category": "system",
      "name": "Cargas. de Transe",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 2",
        "Único",
        "Granada"
      ],
      "actions": [
        {
          "name": "Chamariz de Transe",
          "activation": "Quick",
          "range": [
            {
              "type": "Range",
              "val": 5
            }
          ],
          "detail": "Seu alvo deve ser bem-sucedido em um <b>salvamento de Sistemas</b>, ou o único movimento voluntário que pode fazer até o final do próximo turno dele é em sua direção.",
          "save": "sys",
          "add_special": [
            {
              "attribute": "Mesmer Beacon Target",
              "duration": "next_turn_end_target",
              "detail": "Os únicos movimentos voluntários que você pode fazer são em direção ao Minotauro até o final do próximo turno dele."
            }
          ]
        }
      ],
      "deployables": [
        {
          "name": "Mina de Transe",
          "type": "Mine",
          "range": [
            {
              "type": "Burst",
              "val": 2
            }
          ],
          "detail": "Personagens dentro da área afetada devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou ficam Imobilizados até o final do próximo turno deles.",
          "add_status": [
            {
              "id": "immobilized",
              "duration": "next_turn_end_target",
              "save": "sys",
              "aoe": true
            }
          ]
        }
      ],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Chamariz de Transe: Seu alvo deve ser bem-sucedido em um <b>salvamento de Sistemas</b>, ou o único movimento voluntário que pode fazer até o final do próximo turno dele é em sua direção.\n<b>[Posicionável: Mina de Transe (Mine)]</b> Personagens dentro da área afetada devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou ficam Imobilizados até o final do próximo turno deles.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Chamariz de Transe: Seu alvo deve ser bem-sucedido em um <b>salvamento de Sistemas</b>, ou o único movimento voluntário que pode fazer até o final do próximo turno dele é em sua direção.\n<b>[Posicionável: Mina de Transe (Mine)]</b> Personagens dentro da área afetada devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou ficam Imobilizados até o final do próximo turno deles.",
      "source": "HORUS",
      "license": "Minotaur",
      "license_level": 1
    },
    {
      "id": "ms_viral_logic_suite",
      "category": "system",
      "name": "Pacote de Lógica Viral",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Bomba Lógica",
          "activation": "Invade",
          "detail": "Todos os personagens à sua escolha dentro de <b>Emanação 2</b> do seu alvo devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou ficam Lentos até que terminem um turno não adjacente a nenhum personagem.",
          "add_status": [
            {
              "id": "slow",
              "save": "sys",
              "aoe": true
            }
          ]
        },
        {
          "name": "Banir",
          "activation": "Invade",
          "detail": "Até o final do próximo turno do seu alvo, ele sofre 2 de <b>Calor</b> para cada espaço que se mover voluntariamente, até um máximo de 6 de <b>Calor</b>.",
          "add_special": [
            {
              "attribute": "Viral Logic: Banish Target",
              "duration": "next_turn_end_target",
              "detail": "Você sofre 2 de <b>Calor</b> para cada espaço que se mover voluntariamente, até um máximo de 6 de <b>Calor</b>."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Invadir</b>]</b> Bomba Lógica: Todos os personagens à sua escolha dentro de <b>Emanação 2</b> do seu alvo devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou ficam <b>Lentos</b> até que terminem um turno não adjacente a nenhum personagem.\n<b>[<b>Invadir</b>]</b> Banir: Até o final do próximo turno do seu alvo, ele sofre 2 de <b>Calor</b> para cada espaço que se mover voluntariamente, até um máximo de 6 de <b>Calor</b>.",
      "detail": "<b>[<b>Invadir</b>]</b> Bomba Lógica: Todos os personagens à sua escolha dentro de <b>Emanação 2</b> do seu alvo devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou ficam <b>Lentos</b> até que terminem um turno não adjacente a nenhum personagem.\n<b>[<b>Invadir</b>]</b> Banir: Até o final do próximo turno do seu alvo, ele sofre 2 de <b>Calor</b> para cada espaço que se mover voluntariamente, até um máximo de 6 de <b>Calor</b>.",
      "source": "HORUS",
      "license": "Minotaur",
      "license_level": 1
    },
    {
      "id": "ms_aggressive_system_sync",
      "category": "system",
      "name": "Sincronização Agressiva de Sistema",
      "sp": 2,
      "type": "Tech",
      "tags": [],
      "actions": [
        {
          "name": "Correntes de Prometeu",
          "activation": "Full Tech",
          "detail": "Faça um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b>.<br>Em um acerto, ele sofre 4 de <b>Calor</b> e, pelo resto da cena, sofre 2 de <b>Calor</b> sempre que estiver a mais de <b>Alcance 3</b> de distância de você ao final do turno dele.<br>Ele pode encerrar esse efeito com um salvamento bem-sucedido de Sistemas como uma <b>Ação Completa</b>.<br>Isso só pode afetar um personagem por vez.",
          "attack": "tech",
          "damage": [
            {
              "type": "Heat",
              "val": 4
            }
          ],
          "add_special": [
            {
              "attribute": "Sincronização Agressiva de Sistema: Correntes de Prometeu Alvo",
              "detail": "Você sofre 2 de <b>Calor</b> sempre que estiver a mais de <b>Alcance 3</b> do Minotauro no final do turno dele."
            }
          ]
        },
        {
          "name": "EXCOMUNGAR",
          "activation": "Full Tech",
          "detail": "Faça um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b>.<br>Em um acerto, pelo restante da cena, no turno dele, na primeira vez a cada rodada em que ele se mover de forma a ficar adjacente a um personagem aliado dele ou começar o turno dele adjacente a um, ambos os personagens sofrem 3 de <b>Calor</b>.<br>Ele pode encerrar esse efeito com um salvamento bem-sucedido de Sistemas como uma <b>Ação Completa</b>.<br>Isso só pode afetar um personagem por vez.",
          "attack": "tech",
          "add_special": [
            {
              "attribute": "Sincronização Agressiva de Sistema: EXCOMUNGAR Alvo",
              "detail": "A primeira vez a cada rodada em que você se mover de forma a ficar adjacente a um personagem aliado dele ou começar o turno dele adjacente a um, ambos os personagens sofrem 3 de <b>Calor</b>."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[Full Tech]</b> Correntes de Prometeu: Faça um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b>. Em um acerto, ele sofre 4 de <b>Calor</b> e, pelo resto da cena, sofre 2 de <b>Calor</b> sempre que estiver a mais de <b>Alcance 3</b> de distância de você ao final do turno dele. Ele pode encerrar esse efeito com um salvamento bem-sucedido de Sistemas como uma <b>Ação Completa</b>. Isso só pode afetar um personagem por vez.\n<b>[Full Tech]</b> EXCOMUNGAR: Faça um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b>. Em um acerto, pelo restante da cena, no turno dele, na primeira vez a cada rodada em que ele se mover de forma a ficar adjacente a um personagem aliado dele ou começar o turno dele adjacente a um, ambos os personagens sofrem 3 de <b>Calor</b>. Ele pode encerrar esse efeito com um salvamento bem-sucedido de Sistemas como uma <b>Ação Completa</b>. Isso só pode afetar um personagem por vez.",
      "detail": "<b>[Full Tech]</b> Correntes de Prometeu: Faça um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b>. Em um acerto, ele sofre 4 de <b>Calor</b> e, pelo resto da cena, sofre 2 de <b>Calor</b> sempre que estiver a mais de <b>Alcance 3</b> de distância de você ao final do turno dele. Ele pode encerrar esse efeito com um salvamento bem-sucedido de Sistemas como uma <b>Ação Completa</b>. Isso só pode afetar um personagem por vez.\n<b>[Full Tech]</b> EXCOMUNGAR: Faça um <b>ataque tecnológico</b> contra um personagem ao <b>Alcance dos Sensores</b>. Em um acerto, pelo restante da cena, no turno dele, na primeira vez a cada rodada em que ele se mover de forma a ficar adjacente a um personagem aliado dele ou começar o turno dele adjacente a um, ambos os personagens sofrem 3 de <b>Calor</b>. Ele pode encerrar esse efeito com um salvamento bem-sucedido de Sistemas como uma <b>Ação Completa</b>. Isso só pode afetar um personagem por vez.",
      "source": "HORUS",
      "license": "Minotaur",
      "license_level": 2
    },
    {
      "id": "ms_metafold_carver",
      "category": "system",
      "name": "Escultor de Metadobra",
      "sp": 2,
      "type": "Tech",
      "tags": [],
      "actions": [
        {
          "name": "Trilha Ofídia",
          "activation": "Invade",
          "detail": "Seu alvo é teletransportado 1d6+1 espaços diretamente em sua direção, ou o mais próximo possível.<br>Se esse efeito o mover para um espaço ocupado por um personagem, objeto ou terreno, o <b>teletransporte</b> falha."
        },
        {
          "name": "Dobrar Espaço",
          "activation": "Invade",
          "detail": "Seu alvo desaparece do campo de batalha até o início do próximo turno dele.<br>Ele retorna no mesmo espaço de onde desapareceu, ou em um espaço livre à escolha dele que o mais próximo possível do espaço inicial."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Invadir</b>]</b> Trilha Ofídia: Seu alvo é teletransportado 1d6+1 espaços diretamente em sua direção, ou o mais próximo possível. Se esse efeito o mover para um espaço ocupado por um personagem, objeto ou terreno, o <b>teletransporte</b> falha.\n<b>[<b>Invadir</b>]</b> Dobrar Espaço: Seu alvo desaparece do campo de batalha até o início do próximo turno dele. Ele retorna no mesmo espaço de onde desapareceu, ou em um espaço livre à escolha dele que o mais próximo possível do espaço inicial.",
      "detail": "<b>[<b>Invadir</b>]</b> Trilha Ofídia: Seu alvo é teletransportado 1d6+1 espaços diretamente em sua direção, ou o mais próximo possível. Se esse efeito o mover para um espaço ocupado por um personagem, objeto ou terreno, o <b>teletransporte</b> falha.\n<b>[<b>Invadir</b>]</b> Dobrar Espaço: Seu alvo desaparece do campo de batalha até o início do próximo turno dele. Ele retorna no mesmo espaço de onde desapareceu, ou em um espaço livre à escolha dele que o mais próximo possível do espaço inicial.",
      "source": "HORUS",
      "license": "Minotaur",
      "license_level": 2
    },
    {
      "id": "ms_interdiction_field",
      "category": "system",
      "name": "Campo de Interdição",
      "sp": 3,
      "type": "Sistema",
      "tags": [],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Quando ativado, este sistema cria um campo de <b>Emanação</b> 3 ao seu redor que dura até ser desativado como <b>Ação Rápida</b>, e você fica <b>Lento</b> pela duração.<br>Personagens hostis que começarem o turno deles dentro da área afetada ou que entrarem nela pela primeira vez em um turno devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou ficam Lentos até o final do próximo turno deles.<br>Personagens na área só podem teletransportar ou considerar a área do campo como espaço válido para teletransportação se você permitir.",
          "add_status": [
            {
              "id": "slow",
              "target": "self"
            },
            {
              "id": "slow",
              "duration": "next_turn_end_target",
              "aoe": true,
              "save": "sys"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Quando ativado, este sistema cria um campo de <b>Emanação</b> 3 ao seu redor que dura até ser desativado como <b>Ação Rápida</b>, e você fica <b>Lento</b> pela duração. Personagens hostis que começarem o turno deles dentro da área afetada ou que entrarem nela pela primeira vez em um turno devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou ficam <b>Lentos</b> até o final do próximo turno deles. Personagens na área só podem teletransportar ou considerar a área do campo como espaço válido para teletransportação se você permitir.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Quando ativado, este sistema cria um campo de <b>Emanação</b> 3 ao seu redor que dura até ser desativado como <b>Ação Rápida</b>, e você fica <b>Lento</b> pela duração. Personagens hostis que começarem o turno deles dentro da área afetada ou que entrarem nela pela primeira vez em um turno devem ser bem-sucedidos em um <b>salvamento de Sistemas</b> ou ficam <b>Lentos</b> até o final do próximo turno deles. Personagens na área só podem teletransportar ou considerar a área do campo como espaço válido para teletransportação se você permitir.",
      "source": "HORUS",
      "license": "Minotaur",
      "license_level": 3
    },
    {
      "id": "ms_law_of_blades",
      "category": "system",
      "name": "Lei das Lâminas",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Conceitos Predador/Presa",
          "activation": "Full Tech",
          "detail": "Faça um <b>ataque tecnológico</b> contra um personagem hostil ao <b>Alcance dos Sensores</b>.<br>Em caso de acerto ele ataca imediatamente um personagem ou objeto à sua escolha com uma única arma como <b>Reação</b>.<br>Embora você escolha o alvo e a arma, o alvo de Conceitos de Predador/Presa é considerado como fazendo um ataque e realizando uma <b>Reação</b>.",
          "attack": "tech"
        },
        {
          "name": "Sistemas Periféricos",
          "activation": "Full Tech",
          "attack": "tech",
          "detail": "Faça um <b>ataque tecnológico</b> contra um personagem hostil dentro de <b>Sensores</b>.<br>Em caso de acerto, esse personagem imediatamente realiza uma das seguintes ações — escolhida por você — como <b>Reação</b>: <b>Impulsionar</b>, <b>Estabilizar</b>, <b>Improvisar Ataque</b>, <b>Agarrar</b> ou <b>Empurrar</b>.<br>Embora você escolha a ação e o alvo (se relevante), o alvo de Sistemas Periféricos é considerado como fazendo a ação e realizando uma <b>Reação</b>."
        }
      ],
      "deployables": [],
      "terse": "<b>[Full Tech]</b> Conceitos Predador/Presa: Faça um <b>ataque tecnológico</b> contra um personagem hostil ao <b>Alcance dos Sensores</b>. Em caso de acerto ele ataca imediatamente um personagem ou objeto à sua escolha com uma única arma como <b>Reação</b>. Embora você escolha o alvo e a arma, o alvo de Conceitos de Predador/Presa é considerado como fazendo um ataque e realizando uma <b>Reação</b>.\n<b>[Full Tech]</b> Sistemas Periféricos: Faça um <b>ataque tecnológico</b> contra um personagem hostil dentro de <b>Sensores</b>. Em caso de acerto, esse personagem imediatamente realiza uma das seguintes ações — escolhida por você — como <b>Reação</b>: <b>Impulsionar</b>, <b>Estabilizar</b>, <b>Improvisar Ataque</b>, <b>Agarrar</b> ou <b>Empurrar</b>. Embora você escolha a ação e o alvo (se relevante), o alvo de Sistemas Periféricos é considerado como fazendo a ação e realizando uma <b>Reação</b>.",
      "detail": "<b>[Full Tech]</b> Conceitos Predador/Presa: Faça um <b>ataque tecnológico</b> contra um personagem hostil ao <b>Alcance dos Sensores</b>. Em caso de acerto ele ataca imediatamente um personagem ou objeto à sua escolha com uma única arma como <b>Reação</b>. Embora você escolha o alvo e a arma, o alvo de Conceitos de Predador/Presa é considerado como fazendo um ataque e realizando uma <b>Reação</b>.\n<b>[Full Tech]</b> Sistemas Periféricos: Faça um <b>ataque tecnológico</b> contra um personagem hostil dentro de <b>Sensores</b>. Em caso de acerto, esse personagem imediatamente realiza uma das seguintes ações — escolhida por você — como <b>Reação</b>: <b>Impulsionar</b>, <b>Estabilizar</b>, <b>Improvisar Ataque</b>, <b>Agarrar</b> ou <b>Empurrar</b>. Embora você escolha a ação e o alvo (se relevante), o alvo de Sistemas Periféricos é considerado como fazendo a ação e realizando uma <b>Reação</b>.",
      "source": "HORUS",
      "license": "Minotaur",
      "license_level": 3
    },
    {
      "id": "ms_hunter_lock",
      "category": "system",
      "name": "Trava de Caçador",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Escolha um personagem dentro do <b>Alcance dos Sensores</b>: pelo resto da cena, seu primeiro ataque bem-sucedido à distância ou corpo a corpo contra ele a cada rodada causa b>+3 de Dano bônus</b>.<br>Você não pode escolher um novo alvo até que seu alvo atual seja destruído ou a cena termine.",
          "add_special": [
            {
              "attribute": "Hunter Lock Target",
              "detail": "O primeiro ataque bem-sucedido com arma à distância ou corpo a corpo do Pegasus contra você a cada rodada causa +3 de <b>Dano bônus</b>."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Escolha um personagem dentro do <b>Alcance dos Sensores</b>: pelo resto da cena, seu primeiro ataque bem-sucedido à distância ou corpo a corpo contra ele a cada rodada causa b>+3 de Dano bônus</b>. Você não pode escolher um novo alvo até que seu alvo atual seja destruído ou a cena termine.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Escolha um personagem dentro do <b>Alcance dos Sensores</b>: pelo resto da cena, seu primeiro ataque bem-sucedido à distância ou corpo a corpo contra ele a cada rodada causa b>+3 de Dano bônus</b>. Você não pode escolher um novo alvo até que seu alvo atual seja destruído ou a cena termine.",
      "source": "HORUS",
      "license": "Pegasus",
      "license_level": 1
    },
    {
      "id": "ms_eye_of_horus",
      "category": "system",
      "name": "Olho de HÓRUS",
      "sp": 3,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Até o final de seu próximo turno, personagens dentro do <b>Alcance dos Sensores</b> não se beneficiam de <b>Escondido</b> e <b>invisível</b> contra você e você pode verificar os <b>PV</b>, <b>Evasão</b>, <b>Defesa-E</b> e <b>Calor</b> atual de personagens hostis dentro da mesma área.<br>Personagens aliados não se beneficiam deste efeito.",
          "active_effects": [
            {
              "name": "Eye of HORUS Active",
              "detail": "Personagens dentro dos <b>Sensores</b> não se beneficiam de <b>Escondido</b> e <b>invisível</b> contra você e você pode verificar os <b>PV</b>, <b>Evasão</b>, <b>Defesa-E</b> e <b>Calor</b> atual de personagens hostis dentro da mesma área. Personagens aliados não se beneficiam deste efeito.",
              "duration": "next_turn_end_self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Até o final de seu próximo turno, personagens dentro do <b>Alcance dos Sensores</b> não se beneficiam de <b>Escondido</b> e <b>invisível</b> contra você e você pode verificar os <b>PV</b>, <b>Evasão</b>, <b>Defesa-E</b> e <b>Calor</b> atual de personagens hostis dentro da mesma área. Personagens aliados não se beneficiam deste efeito.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Até o final de seu próximo turno, personagens dentro do <b>Alcance dos Sensores</b> não se beneficiam de <b>Escondido</b> e <b>invisível</b> contra você e você pode verificar os <b>PV</b>, <b>Evasão</b>, <b>Defesa-E</b> e <b>Calor</b> atual de personagens hostis dentro da mesma área. Personagens aliados não se beneficiam deste efeito.",
      "source": "HORUS",
      "license": "Pegasus",
      "license_level": 2
    },
    {
      "id": "ms_sisyphus_class_nhp",
      "category": "system",
      "name": "PNH CLASSE-SÍSIFO",
      "sp": 2,
      "type": "AI",
      "tags": [
        "IA",
        "Único",
        "2/Rodada"
      ],
      "actions": [
        {
          "name": "Dobrar Probabilidade",
          "activation": "Full Tech",
          "detail": "Role <b>2d20</b> e anote os resultados: <b>X</b> e <b>Y</b>.<br>Estes números são perdidos no final de seu próximo turno.<br>Adquira a <b>Reação</b> Canibalismo Probabilístico até o final de seu próximo turno."
        },
        {
          "name": "Canibalismo Probabilístico",
          "activation": "Reaction",
          "frequency": "2/round",
          "trigger": "Você ou qualquer outro personagem dentro dos <b>Sensores</b> rolariam um d20",
          "detail": "Efeito: Escolha X ou Y.<br>Esse número se torna imediatamente o resultado da rolagem.<br>Esta <b>Reação</b> não pode ser usada mais de duas vezes antes do início de seu próximo turno."
        }
      ],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b> e Dobrar Probabilidade.\n<b>[Full Tech]</b> Dobrar Probabilidade: Role <b>2d20</b> e anote os resultados: <b>X</b> e <b>Y</b>. Estes números são perdidos no final de seu próximo turno. Adquira a <b>Reação</b> Canibalismo Probabilístico até o final de seu próximo turno.\n<b>[<b>Reação</b>]</b> Canibalismo Probabilístico: Efeito: Escolha X ou Y. Esse número se torna imediatamente o resultado da rolagem. Esta <b>Reação</b> não pode ser usada mais de duas vezes antes do início de seu próximo turno.",
      "detail": "Seu mecha adquire a tag <b>IA</b> e Dobrar Probabilidade.\n<b>[Full Tech]</b> Dobrar Probabilidade: Role <b>2d20</b> e anote os resultados: <b>X</b> e <b>Y</b>. Estes números são perdidos no final de seu próximo turno. Adquira a <b>Reação</b> Canibalismo Probabilístico até o final de seu próximo turno.\n<b>[<b>Reação</b>]</b> Canibalismo Probabilístico: Efeito: Escolha X ou Y. Esse número se torna imediatamente o resultado da rolagem. Esta <b>Reação</b> não pode ser usada mais de duas vezes antes do início de seu próximo turno.",
      "source": "HORUS",
      "license": "Pegasus",
      "license_level": 3
    },
    {
      "id": "ms_roller_directed_payload_charges",
      "category": "system",
      "name": "Cargas Direcionadas \"Rolantes\"",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 2",
        "Único",
        "Granada"
      ],
      "actions": [
        {
          "name": "Granada Rolante",
          "damage": [
            {
              "type": "Explosive",
              "val": "1d6+3"
            }
          ],
          "detail": "No lugar de jogar uma granada, ela rola por um caminho de <b>Linha de 10</b> a partir de você, pulando sobre obstruções e objetos de até <b>Tamanho 1</b> e passando por buracos e vãos de até <b>Tamanho 1/2</b>.<br>Ela detona quando se mover por um espaço ocupado por qualquer personagem ou um espaço adjacente a eles: a vítima deve obter sucesso em um <b>salvamento de Agilidade</b> ou sofre 1d6+3 Explosivo e é repelida 3 espaços na direção em que a granada foi rolada.<br>Em um sucesso, ela sofre metade do <b>Dano</b> e não é repelida."
        }
      ],
      "deployables": [
        {
          "name": "Mina Saltitante",
          "type": "Mine",
          "range": [
            {
              "type": "Burst",
              "val": 1
            }
          ],
          "detail": "Esta mina detona quando um personagem voador passar adjacente ou por cima dela (a até 10 espaços acima).<br>A mina se lança para cima e detona: todos os personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Sistemas</b> ou sofrem 2d6 Explosivo e imediatamente pousam (isso conta como cair sem nenhum <b>Dano</b>).<br>Adicionalmente, eles não podem voar até o final do próximo turno deles.<br>Em um sucesso, eles sofrem metade do <b>Dano</b> e não são afetados de outra forma.",
          "damage": [
            {
              "type": "Explosive",
              "val": "2d6",
              "save": "sys",
              "aoe": true
            }
          ],
          "tags": [
            {
              "id": "tg_smart"
            }
          ]
        }
      ],
      "terse": "<b>[Ação]</b> Granada Rolante: No lugar de jogar uma granada, ela rola por um caminho de <b>Linha de 10</b> a partir de você, pulando sobre obstruções e objetos de até <b>Tamanho 1</b> e passando por buracos e vãos de até <b>Tamanho 1/2</b>. Ela detona quando se mover por um espaço ocupado por qualquer personagem ou um espaço adjacente a eles: a vítima deve obter sucesso em um <b>salvamento de Agilidade</b> ou sofre 1d6+3 Explosivo e é repelida 3 espaços na direção em que a granada foi rolada. Em um sucesso, ela sofre metade do <b>Dano</b> e não é repelida.\n<b>[Posicionável: Mina Saltitante (Mine)]</b> Esta mina detona quando um personagem voador passar adjacente ou por cima dela (a até 10 espaços acima). A mina se lança para cima e detona: todos os personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Sistemas</b> ou sofrem 2d6 Explosivo e imediatamente pousam (isso conta como cair sem nenhum <b>Dano</b>). Adicionalmente, eles não podem voar até o final do próximo turno deles. Em um sucesso, eles sofrem metade do <b>Dano</b> e não são afetados de outra forma.",
      "detail": "<b>[Ação]</b> Granada Rolante: No lugar de jogar uma granada, ela rola por um caminho de <b>Linha de 10</b> a partir de você, pulando sobre obstruções e objetos de até <b>Tamanho 1</b> e passando por buracos e vãos de até <b>Tamanho 1/2</b>. Ela detona quando se mover por um espaço ocupado por qualquer personagem ou um espaço adjacente a eles: a vítima deve obter sucesso em um <b>salvamento de Agilidade</b> ou sofre 1d6+3 Explosivo e é repelida 3 espaços na direção em que a granada foi rolada. Em um sucesso, ela sofre metade do <b>Dano</b> e não é repelida.\n<b>[Posicionável: Mina Saltitante (Mine)]</b> Esta mina detona quando um personagem voador passar adjacente ou por cima dela (a até 10 espaços acima). A mina se lança para cima e detona: todos os personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Sistemas</b> ou sofrem 2d6 Explosivo e imediatamente pousam (isso conta como cair sem nenhum <b>Dano</b>). Adicionalmente, eles não podem voar até o final do próximo turno deles. Em um sucesso, eles sofrem metade do <b>Dano</b> e não são afetados de outra forma.",
      "source": "HA",
      "license": "Barbarossa",
      "license_level": 1
    },
    {
      "id": "ms_siege_stabilizers",
      "category": "system",
      "name": "Estabilizadores de Cerco",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Os estabilizadores de seu mecha se estendem (ou retraem).<br>Enquanto estiverem estendidos, seus ataques à distância recebem <b>+5 Alcance</b>, mas você fica <b>Imobilizado</b>, não pode fazer ataques corpo a corpo, e não pode fazer ataques à distância contra ou centrados em personagens, objetos ou espaços a até <b>Alcance 5</b>.",
          "add_status": [
            {
              "id": "immobilized",
              "target": "self"
            }
          ],
          "active_effects": [
            {
              "name": "Siege Stabilizers Active",
              "detail": "Os ataques à distância do personagem ganham <b>+5 Alcance</b>, mas ele fica <b>Imobilizado</b>, não pode fazer ataques corpo a corpo e não pode fazer ataques à distância contra ou centrados em personagens, objetos ou espaços a até <b>Alcance 5</b>."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Os estabilizadores de seu mecha se estendem (ou retraem). Enquanto estiverem estendidos, seus ataques à distância recebem <b>+5 Alcance</b>, mas você fica <b>Imobilizado</b>, não pode fazer ataques corpo a corpo, e não pode fazer ataques à distância contra ou centrados em personagens, objetos ou espaços a até <b>Alcance 5</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Os estabilizadores de seu mecha se estendem (ou retraem). Enquanto estiverem estendidos, seus ataques à distância recebem <b>+5 Alcance</b>, mas você fica <b>Imobilizado</b>, não pode fazer ataques corpo a corpo, e não pode fazer ataques à distância contra ou centrados em personagens, objetos ou espaços a até <b>Alcance 5</b>.",
      "source": "HA",
      "license": "Barbarossa",
      "license_level": 1
    },
    {
      "id": "ms_autoloader_drone",
      "category": "system",
      "name": "Drone de Carregamento Automático",
      "sp": 2,
      "type": "Drone",
      "tags": [
        "Limitado 1",
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "type": "Drone",
          "name": "Drone de Carregamento Automático",
          "size": 0.5,
          "hp": 5,
          "edef": 10,
          "evasion": 10,
          "detail": "1/rodada, um personagem adjacente a ele pode <b>Recarregar</b> qualquer arma com <b>Recarga<b> como uma <b>Ação Rápida</b>.<br>Ele se desativa no final da cena."
        }
      ],
      "terse": "Gaste uma carga para implantar este drone de carregamento automático em qualquer espaço adjacente.\n<b>[Posicionável: Drone de Carregamento Automático (Drone)]</b> 1/rodada, um personagem adjacente a ele pode <b>Recarregar</b> qualquer arma com <b>Recarga<b> como uma <b>Ação Rápida</b>. Ele se desativa no final da cena.",
      "detail": "Gaste uma carga para implantar este drone de carregamento automático em qualquer espaço adjacente.\n<b>[Posicionável: Drone de Carregamento Automático (Drone)]</b> 1/rodada, um personagem adjacente a ele pode <b>Recarregar</b> qualquer arma com <b>Recarga<b> como uma <b>Ação Rápida</b>. Ele se desativa no final da cena.",
      "source": "HA",
      "license": "Barbarossa",
      "license_level": 2
    },
    {
      "id": "ms_flak_launcher",
      "category": "system",
      "name": "Lançador Anti-Aéreo",
      "sp": 2,
      "type": "Sistema",
      "tags": [],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Escolha um personagem voador na linha de visão e a até <b>Alcance 15</b>.<br>Ele deve obter sucesso em um <b>salvamento de Agilidade</b> ou imediatamente pousa (isso conta como cair sem nenhum <b>Dano</b>) e adicionalmente fica <b>Lento</b> e não pode voar até o final do próximo turno dele.",
          "save": "agi",
          "add_special": [
            {
              "attribute": "Atingido pelo Lançador Anti-Aéreo",
              "duration": "next_turn_end_target",
              "detail": "Você não pode voar até o final do seu próximo turno."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Escolha um personagem voador na linha de visão e a até <b>Alcance 15</b>. Ele deve obter sucesso em um <b>salvamento de Agilidade</b> ou imediatamente pousa (isso conta como cair sem nenhum <b>Dano</b>) e adicionalmente fica <b>Lento</b> e não pode voar até o final do próximo turno dele.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Escolha um personagem voador na linha de visão e a até <b>Alcance 15</b>. Ele deve obter sucesso em um <b>salvamento de Agilidade</b> ou imediatamente pousa (isso conta como cair sem nenhum <b>Dano</b>) e adicionalmente fica <b>Lento</b> e não pode voar até o final do próximo turno dele.",
      "source": "HA",
      "license": "Barbarossa",
      "license_level": 2
    },
    {
      "id": "ms_external_ammo_feed",
      "category": "system",
      "name": "Alimentação de Munição Externa",
      "sp": 3,
      "type": "Sistema",
      "tags": [
        "Único",
        "Calor 1d3+1 (Próprio)"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "1/rodada, você pode Ativar este sistema para <b>Recarregar</b> uma arma com <b>Recarga<b>.",
          "frequency": "1/round"
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: 1/rodada, você pode Ativar este sistema para <b>Recarregar</b> uma arma com <b>Recarga<b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: 1/rodada, você pode Ativar este sistema para <b>Recarregar</b> uma arma com <b>Recarga<b>.",
      "source": "HA",
      "license": "Barbarossa",
      "license_level": 3
    },
    {
      "id": "ms_explosive_vents",
      "category": "system",
      "name": "Exaustor Explosivo",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único",
        "1/Rodada"
      ],
      "actions": [
        {
          "activation": "None",
          "trigger": "Você remove todo o <b>Calor</b> ou sofre <b>Estresse</b>.",
          "detail": "Os respiradouros de resfriamento do seu mecha se abrem e liberam uma explosão de <b>Tamanho 1</b>. Personagens dentro da área afetada sofrem <b>2 de Calor</b> e <b>2 de Queimadura</b>.",
          "damage": [
            {
              "type": "Heat",
              "val": 2,
              "aoe": true
            },
            {
              "type": "Burn",
              "val": 2,
              "aoe": true
            }
          ],
          "range": [
            {
              "type": "Burst",
              "val": 1
            }
          ],
          "frequency": "1/round"
        }
      ],
      "deployables": [],
      "terse": "Quando remover todo de <b>Calor</b> ou sofrer <b>Estresse</b>, os exaustores de resfriamento do seu mecha se abrem e liberam uma <b>Emanação</b> de <b>Emanação</b> 1.\nPersonagens dentro da área afetada sofrem 2 de <b>Calor</b> e 2 de <b>Queimadura</b>.\n<b>[None]</b> Habilidade: Os respiradouros de resfriamento do seu mecha se abrem e liberam uma explosão de <b>Tamanho 1</b>. Personagens dentro da área afetada sofrem <b>2 de Calor</b> e <b>2 de Queimadura</b>.",
      "detail": "Quando remover todo de <b>Calor</b> ou sofrer <b>Estresse</b>, os exaustores de resfriamento do seu mecha se abrem e liberam uma <b>Emanação</b> de <b>Emanação</b> 1.\nPersonagens dentro da área afetada sofrem 2 de <b>Calor</b> e 2 de <b>Queimadura</b>.\n<b>[None]</b> Habilidade: Os respiradouros de resfriamento do seu mecha se abrem e liberam uma explosão de <b>Tamanho 1</b>. Personagens dentro da área afetada sofrem <b>2 de Calor</b> e <b>2 de Queimadura</b>.",
      "source": "HA",
      "license": "Genghis",
      "license_level": 1
    },
    {
      "id": "ms_havok_charges",
      "category": "system",
      "name": "Cargas HAVOK",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 2",
        "Único",
        "Granada"
      ],
      "actions": [
        {
          "name": "Granada de Napalm",
          "range": [
            {
              "type": "Range",
              "val": 5
            },
            {
              "type": "Line",
              "val": 5
            }
          ],
          "damage": [
            {
              "type": "Burn",
              "val": 2,
              "save": "agi",
              "save_half": true,
              "aoe": true
            }
          ],
          "detail": "Esta granada solta um spray de napalm em uma área de <b>Linha de 5</b> à sua escolha a partir do seu local de impacto.<br>Personagens dentro da área devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>2 de Queimadura</b>.<br>Em um sucesso, sofrem <b>1 de Queimadura</b>."
        }
      ],
      "deployables": [
        {
          "name": "Mina HAVOK",
          "type": "Mine",
          "range": [
            {
              "type": "Line",
              "val": 5
            }
          ],
          "damage": [
            {
              "type": "Burn",
              "val": 4,
              "save": "agi",
              "save_half": true
            }
          ],
          "detail": "Quando um personagem se mover para ficar sobre ou adjacente a esta mina, ela detona com uma <b>Explosão</b> focada em uma área de <b>Linha de 5</b> na direção do personagem que a disparou.<br>Personagens dentro da área devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem 4 de <b>Queimadura</b>.<br>Em um sucesso, eles sofrem 2 de <b>Queimadura</b>."
        }
      ],
      "terse": "<b>[Ação]</b> Granada de Napalm: Esta granada solta um spray de napalm em uma área de <b>Linha de 5</b> à sua escolha a partir do seu local de impacto. Personagens dentro da área devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>2 de Queimadura</b>. Em um sucesso, sofrem <b>1 de Queimadura</b>.\n<b>[Posicionável: Mina HAVOK (Mine)]</b> Quando um personagem se mover para ficar sobre ou adjacente a esta mina, ela detona com uma <b>Explosão</b> focada em uma área de <b>Linha de 5</b> na direção do personagem que a disparou. Personagens dentro da área devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem 4 de <b>Queimadura</b>. Em um sucesso, eles sofrem 2 de <b>Queimadura</b>.",
      "detail": "<b>[Ação]</b> Granada de Napalm: Esta granada solta um spray de napalm em uma área de <b>Linha de 5</b> à sua escolha a partir do seu local de impacto. Personagens dentro da área devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem <b>2 de Queimadura</b>. Em um sucesso, sofrem <b>1 de Queimadura</b>.\n<b>[Posicionável: Mina HAVOK (Mine)]</b> Quando um personagem se mover para ficar sobre ou adjacente a esta mina, ela detona com uma <b>Explosão</b> focada em uma área de <b>Linha de 5</b> na direção do personagem que a disparou. Personagens dentro da área devem obter sucesso em um <b>salvamento de Agilidade</b> ou sofrem 4 de <b>Queimadura</b>. Em um sucesso, eles sofrem 2 de <b>Queimadura</b>.",
      "source": "HA",
      "license": "Genghis",
      "license_level": 2
    },
    {
      "id": "ms_auto_cooler",
      "category": "system",
      "name": "Resfriador Automático",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "activation": "Protocol",
          "detail": "Enquanto não sofrer <b>Dano</b>, mover-se ou exceder sua Cap.<br>de <b>Calor</b>, você remove todo seu de <b>Calor</b> no início do seu próximo turno."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Protocolo</b>]</b> Habilidade: Enquanto não sofrer <b>Dano</b>, mover-se ou exceder sua Cap. de <b>Calor</b>, você remove todo seu de <b>Calor</b> no início do seu próximo turno.",
      "detail": "<b>[<b>Protocolo</b>]</b> Habilidade: Enquanto não sofrer <b>Dano</b>, mover-se ou exceder sua Cap. de <b>Calor</b>, você remove todo seu de <b>Calor</b> no início do seu próximo turno.",
      "source": "HA",
      "license": "Genghis",
      "license_level": 2
    },
    {
      "id": "ms_agni_class_nhp",
      "category": "system",
      "name": "PNH CLASSE AGNI",
      "sp": 3,
      "type": "AI",
      "tags": [
        "IA",
        "Único",
        "Limitado 1"
      ],
      "actions": [
        {
          "name": "Protocolo AGNI",
          "activation": "Protocol",
          "detail": "1/cena, gaste uma carga para automaticamente remover todo  de <b>Calor</b> no final do seu turno, dissipando-o em uma onda de <b>Emanação 2</b>.<br>Personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Engenharia</b> ou sofrem <b>2 de Queimadura</b> e são empurrados para fora da área (ou o mais longe possível).<br>Até o final do seu próximo turno, personagens dentro da área afetada obtêm <b>Cobertura Leve</b>.",
          "frequency": "1/scene",
          "damage": [
            {
              "type": "Burn",
              "val": 2,
              "aoe": true,
              "save": "sys",
              "save_half": true
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b> e o <b>Protocolo</b> AGNI.\n<b>[<b>Protocolo</b>]</b> <b>Protocolo</b> AGNI: 1/cena, gaste uma carga para automaticamente remover todo de <b>Calor</b> no final do seu turno, dissipando-o em uma onda de <b>Emanação 2</b>. Personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Engenharia</b> ou sofrem <b>2 de Queimadura</b> e são empurrados para fora da área (ou o mais longe possível). Até o final do seu próximo turno, personagens dentro da área afetada obtêm <b>Cobertura Leve</b>.",
      "detail": "Seu mecha adquire a tag <b>IA</b> e o <b>Protocolo</b> AGNI.\n<b>[<b>Protocolo</b>]</b> <b>Protocolo</b> AGNI: 1/cena, gaste uma carga para automaticamente remover todo de <b>Calor</b> no final do seu turno, dissipando-o em uma onda de <b>Emanação 2</b>. Personagens dentro da área afetada devem obter sucesso em um <b>salvamento de Engenharia</b> ou sofrem <b>2 de Queimadura</b> e são empurrados para fora da área (ou o mais longe possível). Até o final do seu próximo turno, personagens dentro da área afetada obtêm <b>Cobertura Leve</b>.",
      "source": "HA",
      "license": "Genghis",
      "license_level": 3
    },
    {
      "id": "ms_grounding_charges",
      "category": "system",
      "name": "Cargas de Aterramento",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 2",
        "Único",
        "Granada"
      ],
      "actions": [
        {
          "name": "Granada Gravitacional",
          "range": [
            {
              "type": "Range",
              "val": 5
            }
          ],
          "add_status": [
            {
              "id": "slow",
              "save": "agi"
            }
          ],
          "add_special": [
            {
              "attribute": "Atingido pela Granada de Gravidade",
              "detail": "Você fica <b>Lento</b> até não fazer movimentos voluntários por um turno completo no seu turno."
            }
          ],
          "detail": "Seu alvo deve obter sucesso em um <b>salvamento de Agilidade</b> ou fica <b>Lento</b> até que ele não realize movimentos voluntários por um turno completo no turno dele."
        }
      ],
      "deployables": [
        {
          "name": "Mina de Aterramento",
          "type": "Mine",
          "detail": "Esta mina deve ser detonada remotamente como uma <b>Ação Rápida</b>, afetando um único personagem a até <b>Alcance 5</b> da mina: ele precisa obter sucesso em um  <b>salvamento de Casco</b> ou é puxado o máximo possível em direção à mina e fica <b>Prostrado</b>.<br>Personagens voadores que falharem no salvamento também são afetados do mesmo modo, com a diferença que eles também são forçados a pousar (isso conta como cair, mas sem sofrer <b>Dano</b>).",
          "actions": [
            {
              "name": "Detonar Mina de Aterramento",
              "activation": "Quick",
              "detail": "Esta mina deve ser detonada remotamente como uma <b>Ação Rápida</b>, afetando um único personagem a até <b>Alcance 5</b> da mina: ele precisa obter sucesso em um  <b>salvamento de Casco</b> ou é puxado o máximo possível em direção à mina e fica <b>Prostrado</b>.<br>Personagens voadores que falharem no salvamento também são afetados do mesmo modo, com a diferença que eles também são forçados a pousar (isso conta como cair, mas sem sofrer <b>Dano</b>).",
              "add_status": [
                {
                  "id": "prone",
                  "save": "hull"
                }
              ]
            }
          ]
        }
      ],
      "terse": "<b>[Ação]</b> Granada Gravitacional: Seu alvo deve obter sucesso em um <b>salvamento de Agilidade</b> ou fica <b>Lento</b> até que ele não realize movimentos voluntários por um turno completo no turno dele.\n<b>[Posicionável: Mina de Aterramento (Mine)]</b> Esta mina deve ser detonada remotamente como uma <b>Ação Rápida</b>, afetando um único personagem a até <b>Alcance 5</b> da mina: ele precisa obter sucesso em um <b>salvamento de Casco</b> ou é puxado o máximo possível em direção à mina e fica <b>Prostrado</b>. Personagens voadores que falharem no salvamento também são afetados do mesmo modo, com a diferença que eles também são forçados a pousar (isso conta como cair, mas sem sofrer <b>Dano</b>).",
      "detail": "<b>[Ação]</b> Granada Gravitacional: Seu alvo deve obter sucesso em um <b>salvamento de Agilidade</b> ou fica <b>Lento</b> até que ele não realize movimentos voluntários por um turno completo no turno dele.\n<b>[Posicionável: Mina de Aterramento (Mine)]</b> Esta mina deve ser detonada remotamente como uma <b>Ação Rápida</b>, afetando um único personagem a até <b>Alcance 5</b> da mina: ele precisa obter sucesso em um <b>salvamento de Casco</b> ou é puxado o máximo possível em direção à mina e fica <b>Prostrado</b>. Personagens voadores que falharem no salvamento também são afetados do mesmo modo, com a diferença que eles também são forçados a pousar (isso conta como cair, mas sem sofrer <b>Dano</b>).",
      "source": "HA",
      "license": "Iskander",
      "license_level": 1
    },
    {
      "id": "ms_repulser_field",
      "category": "system",
      "name": "Campo Repulsor",
      "sp": 1,
      "type": "Sistema",
      "tags": [
        "Único",
        "Calor 1 (Próprio)"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Este sistema emite um pulso de <b>Emanação 2 </b> à sua volta.<br>Personagens afetados pela área devem obter sucesso em um  <b>salvamento de Casco</b> ou são repelidos 2 espaços diretamente para longe de você; então, todas as Minas dentro da área afetada são detonadas simultaneamente.<br>Você conta como tendo <b>Imunidade</b> a qualquer <b>Dano</b> ou efeito imediatamente forçado pelas minas detonadas usando esse sistema, embora efeitos persistentes ainda o afetem.",
          "range": [
            {
              "type": "Burst",
              "val": 2
            }
          ],
          "save": {
            "stat": "hull",
            "aoe": true
          }
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Este sistema emite um pulso de <b>Emanação 2 </b> à sua volta. Personagens afetados pela área devem obter sucesso em um <b>salvamento de Casco</b> ou são repelidos 2 espaços diretamente para longe de você; então, todas as Minas dentro da área afetada são detonadas simultaneamente. Você conta como tendo <b>Imunidade</b> a qualquer <b>Dano</b> ou efeito imediatamente forçado pelas minas detonadas usando esse sistema, embora efeitos persistentes ainda o afetem.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Este sistema emite um pulso de <b>Emanação 2 </b> à sua volta. Personagens afetados pela área devem obter sucesso em um <b>salvamento de Casco</b> ou são repelidos 2 espaços diretamente para longe de você; então, todas as Minas dentro da área afetada são detonadas simultaneamente. Você conta como tendo <b>Imunidade</b> a qualquer <b>Dano</b> ou efeito imediatamente forçado pelas minas detonadas usando esse sistema, embora efeitos persistentes ainda o afetem.",
      "source": "HA",
      "license": "Iskander",
      "license_level": 2
    },
    {
      "id": "ms_clamp_bombs",
      "category": "system",
      "name": "Bombas-Grampo",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Limitado 4",
        "Único"
      ],
      "actions": [],
      "deployables": [
        {
          "name": "Bombas-Grampo",
          "type": "Bomb",
          "activation": "Quick",
          "detail": "Gaste uma carga para disparar uma carga de bombas miniatura em um personagem dentro de <b> Sensores </b>. Ele deve obter sucesso em um <b> salvamento de Engenharia </b> ou as bombas se prendem. No final do próximo turno dele, as bombas explodem, causando <b> 1d6+3 de Dano Explosivo</b>. Todos os personagens adjacentes ao alvo recebem metade do <b>Dano</b>. O alvo pode desarmar e soltar as bombas movendo-se voluntariamente por pelo menos 4 espaços antes do final do turno dele.",
          "save": "eng",
          "add_special": [
            {
              "attribute": "Bombas-Grampo Fixadas",
              "detail": "As minas explodirão no final do seu próximo turno, causando 1d6+3 de Dano explosivo AP. Todos os personagens adjacentes a você recebem metade do dano. Você pode desarmar e soltar as minas movendo-se voluntariamente por pelo menos 4 espaços antes do final do seu turno."
            }
          ]
        }
      ],
      "terse": "<b>[Posicionável: Bombas-Grampo (Bomb)]</b> Gaste uma carga para disparar uma carga de bombas miniatura em um personagem dentro de <b> Sensores </b>. Ele deve obter sucesso em um <b> salvamento de Engenharia </b> ou as bombas se prendem. No final do próximo turno dele, as bombas explodem, causando <b> 1d6+3 de Dano Explosivo</b>. Todos os personagens adjacentes ao alvo recebem metade do <b>Dano</b>. O alvo pode desarmar e soltar as bombas movendo-se voluntariamente por pelo menos 4 espaços antes do final do turno dele.",
      "detail": "<b>[Posicionável: Bombas-Grampo (Bomb)]</b> Gaste uma carga para disparar uma carga de bombas miniatura em um personagem dentro de <b> Sensores </b>. Ele deve obter sucesso em um <b> salvamento de Engenharia </b> ou as bombas se prendem. No final do próximo turno dele, as bombas explodem, causando <b> 1d6+3 de Dano Explosivo</b>. Todos os personagens adjacentes ao alvo recebem metade do <b>Dano</b>. O alvo pode desarmar e soltar as bombas movendo-se voluntariamente por pelo menos 4 espaços antes do final do turno dele.",
      "source": "HA",
      "license": "Iskander",
      "license_level": 3
    },
    {
      "id": "ms_tesseract",
      "category": "system",
      "name": "Tesseract",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Espalhar Foco",
          "activation": "Quick Tech",
          "detail": "Escolha uma área de <b>Explosão 3</b> ao <b>Alcance dos Sensores</b>: essa área, estendendo-se 6 espaços para cima, se torna uma área de g-zero.<br>Além das regras normais de movimento g-zero, objetos que entrarem na área afetada flutuam no espaço e objetos ou personagens que são repelidos, movidos ou puxados para fora da área afundam inofensivamente para o chão no final do turno deles em vez de cair.<br>A área dispersa se você criar uma nova.<br>De outra forma, o efeito permanece até o final da cena.<br>Quando a zona desaparece, tudo flutua inofensivamente até o chão."
        },
        {
          "name": "Centralizar Foco",
          "activation": "Quick Tech",
          "detail": "Escolha um personagem hostil ou aliado voluntário dentro de <b>Sensores</b>.<br>Se for aliado, ele flutua 6 espaços no ar, ficando <b>Imobilizado</b> enquanto estiver no ar, mas conta como voando e não pode cair.<br>Ele pode escolher descer inofensivamente para o chão no final de qualquer um dos turnos dele ou no início de qualquer um dos seus turnos.<br>Se ele for hostil, deve obter sucesso em um salvamento de Engenharia ou experimenta o mesmo efeito que um personagem aliado; entretanto, ele afunda inofensivamente até o chão no final do próximo turno dele.<br>Personagens hostis podem ser afetados 1/cena.",
          "add_status": [
            {
              "id": "immobilized",
              "target": "any",
              "save": "eng"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[Quick Tech]</b> Espalhar Foco: Escolha uma área de <b>Explosão 3</b> ao <b>Alcance dos Sensores</b>: essa área, estendendo-se 6 espaços para cima, se torna uma área de g-zero. Além das regras normais de movimento g-zero, objetos que entrarem na área afetada flutuam no espaço e objetos ou personagens que são repelidos, movidos ou puxados para fora da área afundam inofensivamente para o chão no final do turno deles em vez de cair. A área dispersa se você criar uma nova. De outra forma, o efeito permanece até o final da cena. Quando a zona desaparece, tudo flutua inofensivamente até o chão.\n<b>[Quick Tech]</b> Centralizar Foco: Escolha um personagem hostil ou aliado voluntário dentro de <b>Sensores</b>. Se for aliado, ele flutua 6 espaços no ar, ficando <b>Imobilizado</b> enquanto estiver no ar, mas conta como voando e não pode cair. Ele pode escolher descer inofensivamente para o chão no final de qualquer um dos turnos dele ou no início de qualquer um dos seus turnos. Se ele for hostil, deve obter sucesso em um salvamento de Engenharia ou experimenta o mesmo efeito que um personagem aliado; entretanto, ele afunda inofensivamente até o chão no final do próximo turno dele. Personagens hostis podem ser afetados 1/cena.",
      "detail": "<b>[Quick Tech]</b> Espalhar Foco: Escolha uma área de <b>Explosão 3</b> ao <b>Alcance dos Sensores</b>: essa área, estendendo-se 6 espaços para cima, se torna uma área de g-zero. Além das regras normais de movimento g-zero, objetos que entrarem na área afetada flutuam no espaço e objetos ou personagens que são repelidos, movidos ou puxados para fora da área afundam inofensivamente para o chão no final do turno deles em vez de cair. A área dispersa se você criar uma nova. De outra forma, o efeito permanece até o final da cena. Quando a zona desaparece, tudo flutua inofensivamente até o chão.\n<b>[Quick Tech]</b> Centralizar Foco: Escolha um personagem hostil ou aliado voluntário dentro de <b>Sensores</b>. Se for aliado, ele flutua 6 espaços no ar, ficando <b>Imobilizado</b> enquanto estiver no ar, mas conta como voando e não pode cair. Ele pode escolher descer inofensivamente para o chão no final de qualquer um dos turnos dele ou no início de qualquer um dos seus turnos. Se ele for hostil, deve obter sucesso em um salvamento de Engenharia ou experimenta o mesmo efeito que um personagem aliado; entretanto, ele afunda inofensivamente até o chão no final do próximo turno dele. Personagens hostis podem ser afetados 1/cena.",
      "source": "HA",
      "license": "Iskander",
      "license_level": 3
    },
    {
      "id": "ms_stasis_bolt",
      "category": "system",
      "name": "Raio de Estase",
      "sp": 1,
      "type": "Shield",
      "tags": [
        "Escudo",
        "Único"
      ],
      "actions": [
        {
          "name": "Carregar Dardo de Estase",
          "activation": "Quick",
          "detail": "Carregue o Dardo de Estase, ganhando a <b>Reação</b> de Ponto de Interdição."
        },
        {
          "name": "Ponto de Interdição",
          "activation": "Reaction",
          "frequency": "1/round",
          "trigger": "Você ou um personagem aliado dentro do <b>Alcance 5</b> são alvejados por um ataque à distância.",
          "detail": "Você faz um ataque à distância disputado: se ganhar, o ataque erra automaticamente.<br>O Raio de Estase perde sua carga."
        }
      ],
      "deployables": [],
      "terse": "Este sistema carrega como uma <b>Ação Rápida</b>, preparando um ponto de estase projetado.\nEnquanto estiver carregado, você ganha a <b>Reação</b> Ponto de Interdição.\nEle só pode manter uma carga por vez, mas as <b>Cargas</b>. duram pelo resto da cena ou até serem usadas.\n<b>[<b>Ação Rápida</b>]</b> Carregar Dardo de Estase: Carregue o Dardo de Estase, ganhando a <b>Reação</b> de Ponto de Interdição.\n<b>[<b>Reação</b>]</b> Ponto de Interdição: Você faz um ataque à distância disputado: se ganhar, o ataque erra automaticamente. O Raio de Estase perde sua carga.",
      "detail": "Este sistema carrega como uma <b>Ação Rápida</b>, preparando um ponto de estase projetado.\nEnquanto estiver carregado, você ganha a <b>Reação</b> Ponto de Interdição.\nEle só pode manter uma carga por vez, mas as <b>Cargas</b>. duram pelo resto da cena ou até serem usadas.\n<b>[<b>Ação Rápida</b>]</b> Carregar Dardo de Estase: Carregue o Dardo de Estase, ganhando a <b>Reação</b> de Ponto de Interdição.\n<b>[<b>Reação</b>]</b> Ponto de Interdição: Você faz um ataque à distância disputado: se ganhar, o ataque erra automaticamente. O Raio de Estase perde sua carga.",
      "source": "HA",
      "license": "Napoleon",
      "license_level": 1
    },
    {
      "id": "ms_stasis_generator",
      "category": "system",
      "name": "Gerador de Estase",
      "sp": 2,
      "type": "Shield",
      "tags": [
        "Único",
        "Escudo"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Escolha um personagem hostil ou aliado voluntário na linha de visão e a até <b>Alcance 5</b>: até o final do próximo turno dele, ele fica Incapacitado, recebe <b>Imunidade</b> a todo <b>Dano</b> e efeitos e não pode ser movido, visado ou afetado por qualquer outro personagem ou efeitos.<br>Isso pode ser usado em cada personagem 1/cena.<br>Personagens hostis podem obter sucesso em um salvamento de Engenharia para ignorar esse efeito.",
          "save": "eng",
          "add_status": [
            {
              "id": "stunned",
              "target": "any"
            }
          ],
          "add_resist": [
            {
              "resist": "all",
              "val": "immunity",
              "target": "any"
            }
          ],
          "add_special": [
            {
              "attribute": "Atingido pelo Gerador de Estase",
              "duration": "next_turn_end_target",
              "detail": "Você não pode ser movido, alvejado ou afetado por nenhum outro personagem ou efeito."
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Escolha um personagem hostil ou aliado voluntário na linha de visão e a até <b>Alcance 5</b>: até o final do próximo turno dele, ele fica Incapacitado, recebe <b>Imunidade</b> a todo <b>Dano</b> e efeitos e não pode ser movido, visado ou afetado por qualquer outro personagem ou efeitos. Isso pode ser usado em cada personagem 1/cena. Personagens hostis podem obter sucesso em um salvamento de Engenharia para ignorar esse efeito.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Escolha um personagem hostil ou aliado voluntário na linha de visão e a até <b>Alcance 5</b>: até o final do próximo turno dele, ele fica Incapacitado, recebe <b>Imunidade</b> a todo <b>Dano</b> e efeitos e não pode ser movido, visado ou afetado por qualquer outro personagem ou efeitos. Isso pode ser usado em cada personagem 1/cena. Personagens hostis podem obter sucesso em um salvamento de Engenharia para ignorar esse efeito.",
      "source": "HA",
      "license": "Napoleon",
      "license_level": 1
    },
    {
      "id": "ms_stasis_barrier",
      "category": "system",
      "name": "Barreira de Estase",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 1",
        "Escudo",
        "Único",
        "Invulnerável"
      ],
      "actions": [],
      "deployables": [
        {
          "type": "Deployable",
          "name": "Barreira de Estase",
          "activation": "Quick",
          "deactivation": "Quick",
          "detail": "Gere uma barreira de <b>Linha</b> de 4 com 4 espaços de altura em espaços livres com pelo menos um espaço adjacente a você.<br>Conta como obstrução e fornece <b>Cobertura Leve</b>., mas não bloqueia linha de visão.<br>Quando um ataque for feito contra um personagem que se beneficia da <b>Cobertura Leve</b>. dessa barreira, role 1d6: em 4 ou mais, o ataque é consumido pela barreira e não tem nenhum efeito.",
          "tags": [
            {
              "id": "tg_invulnerable"
            }
          ]
        }
      ],
      "terse": "Gaste uma carga para ativar a barreira de estase, gerando uma barreira de <b>Linha</b> de 4 com 4 espaços de altura em espaços livres, com pelos menos um espaço adjacente a você.\nEla conta como uma obstrução e fornece <b>Cobertura Leve</b>., mas não bloqueia linha de visão.\nQuando um ataque for feito contra um personagem que se beneficia da <b>Cobertura Leve</b>. dessa barreira, role 1d6: em 4 ou mais, o ataque é consumido pela barreira e não tem nenhum efeito.\nA barreira dura pelo restante da cena ou até você desativá-la como uma <b>Ação Rápida</b>.\nEsse efeito não se acumula com <b>invisível</b>.\n<b>[Posicionável: Barreira de Estase (Deployable)]</b> Gere uma barreira de <b>Linha</b> de 4 com 4 espaços de altura em espaços livres com pelo menos um espaço adjacente a você. Conta como obstrução e fornece <b>Cobertura Leve</b>., mas não bloqueia linha de visão. Quando um ataque for feito contra um personagem que se beneficia da <b>Cobertura Leve</b>. dessa barreira, role 1d6: em 4 ou mais, o ataque é consumido pela barreira e não tem nenhum efeito.",
      "detail": "Gaste uma carga para ativar a barreira de estase, gerando uma barreira de <b>Linha</b> de 4 com 4 espaços de altura em espaços livres, com pelos menos um espaço adjacente a você.\nEla conta como uma obstrução e fornece <b>Cobertura Leve</b>., mas não bloqueia linha de visão.\nQuando um ataque for feito contra um personagem que se beneficia da <b>Cobertura Leve</b>. dessa barreira, role 1d6: em 4 ou mais, o ataque é consumido pela barreira e não tem nenhum efeito.\nA barreira dura pelo restante da cena ou até você desativá-la como uma <b>Ação Rápida</b>.\nEsse efeito não se acumula com <b>invisível</b>.\n<b>[Posicionável: Barreira de Estase (Deployable)]</b> Gere uma barreira de <b>Linha</b> de 4 com 4 espaços de altura em espaços livres com pelo menos um espaço adjacente a você. Conta como obstrução e fornece <b>Cobertura Leve</b>., mas não bloqueia linha de visão. Quando um ataque for feito contra um personagem que se beneficia da <b>Cobertura Leve</b>. dessa barreira, role 1d6: em 4 ou mais, o ataque é consumido pela barreira e não tem nenhum efeito.",
      "source": "HA",
      "license": "Napoleon",
      "license_level": 2
    },
    {
      "id": "ms_blinkshield",
      "category": "system",
      "name": "Escudo Lampejo",
      "sp": 2,
      "type": "Shield",
      "tags": [
        "Único",
        "Escudo",
        "Calor 4 (Próprio)"
      ],
      "actions": [
        {
          "activation": "Full",
          "detail": "Este sistema gera uma bolha de burst4 em volta de seu mecha, onde o fluxo do tempo é alterado drasticamente.<br>Nada pode entrar ou sair da bolha, nem mesmo a luz — ela é impermeável e tem <b>Imunidade</b> a todos os tipos de <b>Dano</b> e efeitos.<br>A linha de visão não pode ser traçada pelas bordas da área e não pode ser atravessada por nenhuma ação ou efeito — mesmo aqueles que não exigem linha de visão — mas o tempo passa normalmente em ambos os lados.Para personagens dentro da área afetada, o mundo de fora fica totalmente negro; do mesmo modo, personagens que estiverem fora da área afetada vêem uma esfera negra perfeita.<br>Quando o Escudo Lampejo for ativado, personagens que estejam parcialmente na área afetada devem fazer um <b>salvamento de Agilidade</b>: em um sucesso, cada um se move para o espaço livre ao lado à escolha dele, dentro ou fora da área; em uma falha, você escolhe.<br>Esse efeito se mantém estacionário mesmo se você se mover e dura até o final do seu próximo turno.",
          "active_effects": [
            {
              "name": "Escudo Lampejo Ativo",
              "detail": "Nada pode entrar ou sair da bolha, nem mesmo a luz — ela é impermeável e tem <b>Imunidade</b> a todos os tipos de <b>Dano</b> e efeitos. A linha de visão não pode ser traçada pelas bordas da área e não pode ser atravessada por nenhuma ação ou efeito — mesmo aqueles que não exigem linha de visão — mas o tempo passa normalmente em ambos os lados. Para personagens dentro da área afetada, o mundo de fora fica totalmente negro; do mesmo modo, personagens que estiverem fora da área afetada vêem uma esfera negra perfeita.",
              "duration": "next_turn_end_self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Completa</b>]</b> Habilidade: Este sistema gera uma bolha de burst4 em volta de seu mecha, onde o fluxo do tempo é alterado drasticamente. Nada pode entrar ou sair da bolha, nem mesmo a luz — ela é impermeável e tem <b>Imunidade</b> a todos os tipos de <b>Dano</b> e efeitos. A linha de visão não pode ser traçada pelas bordas da área e não pode ser atravessada por nenhuma ação ou efeito — mesmo aqueles que não exigem linha de visão — mas o tempo passa normalmente em ambos os lados.Para personagens dentro da área afetada, o mundo de fora fica totalmente negro; do mesmo modo, personagens que estiverem fora da área afetada vêem uma esfera negra perfeita. Quando o Escudo Lampejo for ativado, personagens que estejam parcialmente na área afetada devem fazer um <b>salvamento de Agilidade</b>: em um sucesso, cada um se move para o espaço livre ao lado à escolha dele, dentro ou fora da área; em uma falha, você escolhe. Esse efeito se mantém estacionário mesmo se você se mover e dura até o final do seu próximo turno.",
      "detail": "<b>[<b>Ação Completa</b>]</b> Habilidade: Este sistema gera uma bolha de burst4 em volta de seu mecha, onde o fluxo do tempo é alterado drasticamente. Nada pode entrar ou sair da bolha, nem mesmo a luz — ela é impermeável e tem <b>Imunidade</b> a todos os tipos de <b>Dano</b> e efeitos. A linha de visão não pode ser traçada pelas bordas da área e não pode ser atravessada por nenhuma ação ou efeito — mesmo aqueles que não exigem linha de visão — mas o tempo passa normalmente em ambos os lados.Para personagens dentro da área afetada, o mundo de fora fica totalmente negro; do mesmo modo, personagens que estiverem fora da área afetada vêem uma esfera negra perfeita. Quando o Escudo Lampejo for ativado, personagens que estejam parcialmente na área afetada devem fazer um <b>salvamento de Agilidade</b>: em um sucesso, cada um se move para o espaço livre ao lado à escolha dele, dentro ou fora da área; em uma falha, você escolhe. Esse efeito se mantém estacionário mesmo se você se mover e dura até o final do seu próximo turno.",
      "source": "HA",
      "license": "Napoleon",
      "license_level": 3
    },
    {
      "id": "ms_enclave_pattern_support_shield",
      "category": "system",
      "name": "Escudo de Suporte Modelo ENCLAVE",
      "sp": 2,
      "type": "Shield",
      "tags": [
        "Único",
        "Escudo"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Este sistema gera um domo de <b>Emanação</b> 3 que dura até o final do seu próximo turno.<br>Você fica <b>Imobilizado</b> pela duração, mas qualquer ataque à distância ou corpo a corpo feito contra personagens dentro da área afetada originados de fora do domo sofre +1 Dificuldade.<br>Adicionalmente, ganhe Intervenção de Campo Lampejo enquanto o escudo tiver ativo.",
          "add_status": [
            {
              "id": "immobilized",
              "target": "self"
            }
          ],
          "active_effects": [
            {
              "name": "Escudo de Suporte Modelo ENCLAVE Ativo",
              "detail": "Os ataques à distância ou corpo a corpo feitos contra personagens dentro da área afetada originados de fora do domo sofrem +1 Dificuldade.",
              "duration": "next_turn_end_self"
            }
          ]
        },
        {
          "name": "Intervenção de Campo Lampejo",
          "activation": "Reaction",
          "frequency": "1/round",
          "trigger": "Um personagem ou objeto dentro da área afetada é atacado.",
          "detail": "Concede ao alvo do ataque <b>Resistência</b> a todo o <b>Dano</b> deste ataque.",
          "damage": [
            {
              "type": "Heat",
              "val": 2,
              "target": "self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Este sistema gera um domo de <b>Emanação</b> 3 que dura até o final do seu próximo turno. Você fica <b>Imobilizado</b> pela duração, mas qualquer ataque à distância ou corpo a corpo feito contra personagens dentro da área afetada originados de fora do domo sofre +1 Dificuldade. Adicionalmente, ganhe Intervenção de Campo Lampejo enquanto o escudo tiver ativo.\n<b>[<b>Reação</b>]</b> Intervenção de Campo Lampejo: Concede ao alvo do ataque <b>Resistência</b> a todo o <b>Dano</b> deste ataque.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Este sistema gera um domo de <b>Emanação</b> 3 que dura até o final do seu próximo turno. Você fica <b>Imobilizado</b> pela duração, mas qualquer ataque à distância ou corpo a corpo feito contra personagens dentro da área afetada originados de fora do domo sofre +1 Dificuldade. Adicionalmente, ganhe Intervenção de Campo Lampejo enquanto o escudo tiver ativo.\n<b>[<b>Reação</b>]</b> Intervenção de Campo Lampejo: Concede ao alvo do ataque <b>Resistência</b> a todo o <b>Dano</b> deste ataque.",
      "source": "HA",
      "license": "Saladin",
      "license_level": 1
    },
    {
      "id": "ms_flash_anchor",
      "category": "system",
      "name": "Âncora Flash",
      "sp": 1,
      "type": "Shield",
      "tags": [
        "Único",
        "Escudo",
        "Calor 2 (Próprio)"
      ],
      "actions": [
        {
          "name": "Trava Flash",
          "activation": "Reaction",
          "frequency": "1/round",
          "trigger": "Você ou um personagem aliado dentro dos <b>Sensores</b> e em linha de visão é empurrado, puxado, repelido ou derrubado.",
          "detail": "Sofra <b>2 de Calor</b>. O movimento é evitado e você ganha <b>Imunidade</b> a esses movimentos até o seu próximo turno."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Reação</b>]</b> Trava Flash: Sofra <b>2 de Calor</b>. O movimento é evitado e você ganha <b>Imunidade</b> a esses movimentos até o seu próximo turno.",
      "detail": "<b>[<b>Reação</b>]</b> Trava Flash: Sofra <b>2 de Calor</b>. O movimento é evitado e você ganha <b>Imunidade</b> a esses movimentos até o seu próximo turno.",
      "source": "HA",
      "license": "Saladin",
      "license_level": 2
    },
    {
      "id": "ms_hardlight_defense_system",
      "category": "system",
      "name": "Sistema de Defesa de Luz Sólida",
      "sp": 3,
      "type": "Shield",
      "tags": [
        "Único",
        "Escudo",
        "Calor 2 (Próprio)"
      ],
      "actions": [
        {
          "activation": "Full",
          "detail": "Este sistema cria um escudo de luz sólida de <b>Emanação</b> 3.<br>Enquanto o escudo estiver posicionado, você fica <b>Imobilizado</b>.<br>Ele bloqueia a linha de visão em ambas as direções e nenhum ataque ou efeito pode passar por ele (mesmo que não requeira linha de visão).<br>Personagens que estiverem parcialmente na área afetada ignoram esses efeitos e podem traçar a linha de visão normalmente.<br>Personagens podem passar pelo escudo, mas quando passarem pelo perímetro pela primeira vez em uma rodada ou começarem o turno deles em um limite sobreposto, sofrem 2 de <b>Queimadura</b>.<br>O escudo dura pelo restante da cena ou até ser desativado como um protocolo.",
          "add_status": [
            {
              "id": "immobilized",
              "target": "self"
            }
          ],
          "range": [
            {
              "type": "Burst",
              "val": 3
            }
          ],
          "damage": [
            {
              "type": "Burn",
              "val": 2,
              "aoe": true
            }
          ],
          "add_special": [
            {
              "attribute": "Sistema de Defesa de Luz Sólida Ativo",
              "target": "self",
              "detail": "Nenhum ataque ou efeito pode passar através do escudo (mesmo que não requeiram linha de visão). Personagens parcialmente dentro da área afetada ignoram esse efeito e podem traçar a linha de visão normalmente."
            }
          ]
        },
        {
          "name": "Desativar Sistema de Defesa de Luz Sólida",
          "activation": "Protocol",
          "detail": "Desative o escudo.",
          "remove_special": [
            {
              "attribute": "Sistema de Defesa de Luz Sólida Ativo",
              "target": "self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Completa</b>]</b> Habilidade: Este sistema cria um escudo de luz sólida de <b>Emanação</b> 3. Enquanto o escudo estiver posicionado, você fica <b>Imobilizado</b>. Ele bloqueia a linha de visão em ambas as direções e nenhum ataque ou efeito pode passar por ele (mesmo que não requeira linha de visão). Personagens que estiverem parcialmente na área afetada ignoram esses efeitos e podem traçar a linha de visão normalmente. Personagens podem passar pelo escudo, mas quando passarem pelo perímetro pela primeira vez em uma rodada ou começarem o turno deles em um limite sobreposto, sofrem 2 de <b>Queimadura</b>. O escudo dura pelo restante da cena ou até ser desativado como um protocolo.\n<b>[<b>Protocolo</b>]</b> Desativar Sistema de Defesa de Luz Sólida: Desative o escudo.",
      "detail": "<b>[<b>Ação Completa</b>]</b> Habilidade: Este sistema cria um escudo de luz sólida de <b>Emanação</b> 3. Enquanto o escudo estiver posicionado, você fica <b>Imobilizado</b>. Ele bloqueia a linha de visão em ambas as direções e nenhum ataque ou efeito pode passar por ele (mesmo que não requeira linha de visão). Personagens que estiverem parcialmente na área afetada ignoram esses efeitos e podem traçar a linha de visão normalmente. Personagens podem passar pelo escudo, mas quando passarem pelo perímetro pela primeira vez em uma rodada ou começarem o turno deles em um limite sobreposto, sofrem 2 de <b>Queimadura</b>. O escudo dura pelo restante da cena ou até ser desativado como um protocolo.\n<b>[<b>Protocolo</b>]</b> Desativar Sistema de Defesa de Luz Sólida: Desative o escudo.",
      "source": "HA",
      "license": "Saladin",
      "license_level": 2
    },
    {
      "id": "ms_noah_class_nhp",
      "category": "system",
      "name": "PNH Classe NOÉ",
      "sp": 3,
      "type": "AI",
      "tags": [
        "IA",
        "Único"
      ],
      "actions": [
        {
          "name": "Arca Diluviana",
          "activation": "Quick",
          "detail": "Estes efeitos se aplicam até o final do seu próximo turno:<ul><li>Você fica <b>Lento</b>.</li><li>Sempre que você ou um aliado adjacente for alvo de um ataque à distância, você pode sofrer  <b>1 de Calor</b> como uma <b>Reação</b> e rolar 1d6 antes da rolagem do atacante: em 4 ou mais, você sofre 1 de <b>Calor</b> adicional e o ataque erra automaticamente.<br>Esse efeito não se acumula com <b>invisível</b>.</li><li>Sempre que um ataque à distância falhar em te acertar ou um aliado adjacente, o atacante sofre 4 Cinético.</li></ul>",
          "add_status": [
            {
              "id": "slow",
              "target": "self"
            }
          ],
          "active_effects": [
            {
              "name": "Arca Diluviana Ativa",
              "detail": "Sempre que você ou um aliado adjacente for alvo de um ataque à distância, você pode sofrer  <b>1 de Calor</b> como uma <b>Reação</b> e rolar 1d6 antes da rolagem do atacante: em 4 ou mais, você sofre 1 de <b>Calor</b> adicional e o ataque erra automaticamente.<br>Esse efeito não se acumula com <b>invisível</b>.",
              "duration": "next_turn_end_self"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b> e Arca Diluviana.\n<b>[<b>Ação Rápida</b>]</b> Arca Diluviana: Estes efeitos se aplicam até o final do seu próximo turno:<ul><li>Você fica <b>Lento</b>.</li><li>Sempre que você ou um aliado adjacente for alvo de um ataque à distância, você pode sofrer <b>1 de Calor</b> como uma <b>Reação</b> e rolar 1d6 antes da rolagem do atacante: em 4 ou mais, você sofre 1 de <b>Calor</b> adicional e o ataque erra automaticamente. Esse efeito não se acumula com <b>invisível</b>.</li><li>Sempre que um ataque à distância falhar em te acertar ou um aliado adjacente, o atacante sofre 4 Cinético.</li></ul>",
      "detail": "Seu mecha adquire a tag <b>IA</b> e Arca Diluviana.\n<b>[<b>Ação Rápida</b>]</b> Arca Diluviana: Estes efeitos se aplicam até o final do seu próximo turno:<ul><li>Você fica <b>Lento</b>.</li><li>Sempre que você ou um aliado adjacente for alvo de um ataque à distância, você pode sofrer <b>1 de Calor</b> como uma <b>Reação</b> e rolar 1d6 antes da rolagem do atacante: em 4 ou mais, você sofre 1 de <b>Calor</b> adicional e o ataque erra automaticamente. Esse efeito não se acumula com <b>invisível</b>.</li><li>Sempre que um ataque à distância falhar em te acertar ou um aliado adjacente, o atacante sofre 4 Cinético.</li></ul>",
      "source": "HA",
      "license": "Saladin",
      "license_level": 3
    },
    {
      "id": "ms_reactor_stabilizer",
      "category": "system",
      "name": "Estabilizador de Reator",
      "sp": 3,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Você pode rerrolar testes de superaquecimento, mas deve manter o segundo resultado mesmo que seja pior.",
      "detail": "Você pode rerrolar testes de superaquecimento, mas deve manter o segundo resultado mesmo que seja pior.",
      "source": "HA",
      "license": "Sherman",
      "license_level": 1
    },
    {
      "id": "ms_redundant_systems_upgrade",
      "category": "system",
      "name": "Melhoria de Sistemas de Redundância",
      "sp": 3,
      "type": "Sistema",
      "tags": [
        "Limitado 1",
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Gaste uma carga para <b>Estabilizar</b> como uma <b>Ação Rápida</b>."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Gaste uma carga para <b>Estabilizar</b> como uma <b>Ação Rápida</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Gaste uma carga para <b>Estabilizar</b> como uma <b>Ação Rápida</b>.",
      "source": "HA",
      "license": "Sherman",
      "license_level": 2
    },
    {
      "id": "ms_asura_class_nhp",
      "category": "system",
      "name": "PNH Classe ASURA",
      "sp": 3,
      "type": "AI",
      "tags": [
        "IA",
        "Único",
        "Limitado 1",
        "Calor 3 (Próprio)"
      ],
      "actions": [
        {
          "name": "Protocolo ASURA",
          "activation": "Protocol",
          "detail": "1/rodada, gaste uma carga para usar duas ações rápidas adicionais ou uma <b>Ação Completa</b> adicional neste turno.<br>Essas ações devem obedecer às restrições de ações duplicadas"
        }
      ],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b> e o <b>Protocolo</b> ASURA.\n<b>[<b>Protocolo</b>]</b> <b>Protocolo</b> ASURA: 1/rodada, gaste uma carga para usar duas <b>ações rápidas</b> adicionais ou uma <b>Ação Completa</b> adicional neste turno. Essas ações devem obedecer às restrições de ações duplicadas",
      "detail": "Seu mecha adquire a tag <b>IA</b> e o <b>Protocolo</b> ASURA.\n<b>[<b>Protocolo</b>]</b> <b>Protocolo</b> ASURA: 1/rodada, gaste uma carga para usar duas <b>ações rápidas</b> adicionais ou uma <b>Ação Completa</b> adicional neste turno. Essas ações devem obedecer às restrições de ações duplicadas",
      "source": "HA",
      "license": "Sherman",
      "license_level": 3
    },
    {
      "id": "ms_external_batteries",
      "category": "system",
      "name": "Baterias Externas",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Armas que causam qualquer de <b>Energia</b> recebem +5 de Alcance se forem à distância ou +1 de Ameaça se forem corpo a corpo.\nQuando você sofrer qualquer <b>Dano de Estrutura</b>, este sistema é destruído e você sofre 1d6 Explosivo(PF) da <b>Explosão</b>.\nEsse <b>Dano</b> não pode ser prevenido ou reduzido de nenhuma forma.",
      "detail": "Armas que causam qualquer de <b>Energia</b> recebem +5 de Alcance se forem à distância ou +1 de Ameaça se forem corpo a corpo.\nQuando você sofrer qualquer <b>Dano de Estrutura</b>, este sistema é destruído e você sofre 1d6 Explosivo(PF) da <b>Explosão</b>.\nEsse <b>Dano</b> não pode ser prevenido ou reduzido de nenhuma forma.",
      "source": "HA",
      "license": "Tokugawa",
      "license_level": 1
    },
    {
      "id": "ms_deep_well_heat_sink",
      "category": "system",
      "name": "Dissipador de Calor Poço Fundo",
      "sp": 4,
      "type": "Sistema",
      "tags": [
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Quando começar seu turno na <b>Zona de Perigo</b>, você adquire <b>Resistência</b> a <b>Calor</b> pelo restante do turno.\nEsse efeito persiste mesmo que você saia da <b>Zona de Perigo</b> durante seu turno.",
      "detail": "Quando começar seu turno na <b>Zona de Perigo</b>, você adquire <b>Resistência</b> a <b>Calor</b> pelo restante do turno.\nEsse efeito persiste mesmo que você saia da <b>Zona de Perigo</b> durante seu turno.",
      "source": "HA",
      "license": "Tokugawa",
      "license_level": 2
    },
    {
      "id": "ms_lucifer_class_nhp",
      "category": "system",
      "name": "PNH Classe LÚCIFER",
      "sp": 3,
      "type": "AI",
      "tags": [
        "IA",
        "Único",
        "Limitado 2",
        "Calor 1d3+3 (Próprio)"
      ],
      "actions": [
        {
          "name": "Protocolo LÚCIFER",
          "activation": "Protocol",
          "detail": "Gaste uma carga para conceder ao seu próximo ataque à distância ou corpo a corpo neste turno um <b>Dano bônus</b> igual ao seu de <b>Calor</b> atual depois de ativar esse protocolo, desde que a arma cause qualquer de <b>Energia</b>"
        }
      ],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b> e o <b>Protocolo</b> LÚCIFER.\n<b>[<b>Protocolo</b>]</b> <b>Protocolo</b> LÚCIFER: Gaste uma carga para conceder ao seu próximo ataque à distância ou corpo a corpo neste turno um <b>Dano bônus</b> igual ao seu de <b>Calor</b> atual depois de ativar esse protocolo, desde que a arma cause qualquer de <b>Energia</b>",
      "detail": "Seu mecha adquire a tag <b>IA</b> e o <b>Protocolo</b> LÚCIFER.\n<b>[<b>Protocolo</b>]</b> <b>Protocolo</b> LÚCIFER: Gaste uma carga para conceder ao seu próximo ataque à distância ou corpo a corpo neste turno um <b>Dano bônus</b> igual ao seu de <b>Calor</b> atual depois de ativar esse protocolo, desde que a arma cause qualquer de <b>Energia</b>",
      "source": "HA",
      "license": "Tokugawa",
      "license_level": 3
    },
    {
      "id": "ms_plasma_gauntlet",
      "category": "system",
      "name": "Manopla de Plasma",
      "sp": 2,
      "type": "Sistema",
      "tags": [
        "Zona de Perigo",
        "Limitado 1",
        "Único"
      ],
      "actions": [
        {
          "activation": "Quick",
          "detail": "Este sistema só pode ser usado na <b>Zona de Perigo</b>.<br>Gaste uma carga e escolha um personagem adjacente a você: ele deve obter sucesso em um <b>salvamento de Agilidade</b> ou sofre <b>4d6 de Dano de Energia</b> (PF) e fica <b>Prostrado</b>.<br>Em um sucesso, ele sofre metade do <b>Dano</b> e não fica <b>Prostrado</b>.<br>Você sofre metade do <b>Dano</b> causado — antes das reduções — como <b>Calor</b> e fica <b>Atordoado</b> até o final do seu próximo turno.",
          "damage": [
            {
              "type": "Energy",
              "val": "4d6",
              "ap": true,
              "save": "agi",
              "save_half": true
            }
          ],
          "add_status": [
            {
              "id": "stunned",
              "target": "self"
            },
            {
              "id": "prone",
              "target": "any",
              "save": "hull"
            }
          ]
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Este sistema só pode ser usado na <b>Zona de Perigo</b>. Gaste uma carga e escolha um personagem adjacente a você: ele deve obter sucesso em um <b>salvamento de Agilidade</b> ou sofre <b>4d6 de Dano de Energia</b> (PF) e fica <b>Prostrado</b>. Em um sucesso, ele sofre metade do <b>Dano</b> e não fica <b>Prostrado</b>. Você sofre metade do <b>Dano</b> causado — antes das reduções — como <b>Calor</b> e fica <b>Atordoado</b> até o final do seu próximo turno.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Habilidade: Este sistema só pode ser usado na <b>Zona de Perigo</b>. Gaste uma carga e escolha um personagem adjacente a você: ele deve obter sucesso em um <b>salvamento de Agilidade</b> ou sofre <b>4d6 de Dano de Energia</b> (PF) e fica <b>Prostrado</b>. Em um sucesso, ele sofre metade do <b>Dano</b> e não fica <b>Prostrado</b>. Você sofre metade do <b>Dano</b> causado — antes das reduções — como <b>Calor</b> e fica <b>Atordoado</b> até o final do seu próximo turno.",
      "source": "HA",
      "license": "Tokugawa",
      "license_level": 3
    },
    {
      "id": "ms_technophile_1",
      "category": "system",
      "name": "PNH Classe Serviçal",
      "sp": 0,
      "type": "AI",
      "tags": [
        "IA",
        "Único"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b>.\nVocê desenvolveu uma PNH personalizada.\nEsta PNH pode falar com você e tem uma personalidade, mas eles são menos avançados do que a maioria das PNHs e são incapazes de pensamento independente, confiando em você para orientação.\nAo agir sozinho, eles seguirão a última orientação dada e se defenderão conforme necessário; no entanto, eles têm iniciativa limitada e não se beneficiam de seus talentos.",
      "detail": "Seu mecha adquire a tag <b>IA</b>.\nVocê desenvolveu uma PNH personalizada.\nEsta PNH pode falar com você e tem uma personalidade, mas eles são menos avançados do que a maioria das PNHs e são incapazes de pensamento independente, confiando em você para orientação.\nAo agir sozinho, eles seguirão a última orientação dada e se defenderão conforme necessário; no entanto, eles têm iniciativa limitada e não se beneficiam de seus talentos.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_technophile_2",
      "category": "system",
      "name": "PNH Classe Estudante",
      "sp": 0,
      "type": "AI",
      "tags": [
        "IA",
        "Único",
        "1/Rodada"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b>.\nSua PNH personalizada se desenvolveu ainda mais e agora é capaz de pensar de forma independente.\nEla pode fazer julgamentos e tomar decisões complexas e agir sozinha, sem instrução.\n1/rodada, com a ajuda de sua PNH, você pode rolar novamente qualquer teste ou salvamento de perícia de mecha.\nVocê deve manter o novo resultado, mesmo que seja pior.",
      "detail": "Seu mecha adquire a tag <b>IA</b>.\nSua PNH personalizada se desenvolveu ainda mais e agora é capaz de pensar de forma independente.\nEla pode fazer julgamentos e tomar decisões complexas e agir sozinha, sem instrução.\n1/rodada, com a ajuda de sua PNH, você pode rolar novamente qualquer teste ou salvamento de perícia de mecha.\nVocê deve manter o novo resultado, mesmo que seja pior.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_technophile_3",
      "category": "system",
      "name": "PNH Classe Iluminada",
      "sp": 0,
      "type": "AI",
      "tags": [
        "Único",
        "1/Rodada",
        "IA"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Seu mecha adquire a tag <b>IA</b>; no entanto, esta PNH não conta para a quantidade de IAs que você pode ter instaladas de uma só vez.\nEsta PNH se beneficia de seus talentos ao pilotar seu mecha.\nAlém disso, você pode carregá-la com você fora de seu mecha, seja como uma urna miniaturizada, uma conexão integrada ao traje reforçado ou com um implante de hardware portátil.\n1/rodada, com a ajuda de sua PNH, você pode rolar novamente qualquer teste ou salvamento de perícia de mecha.\nVocê deve manter o novo resultado, mesmo que seja pior.",
      "detail": "Seu mecha adquire a tag <b>IA</b>; no entanto, esta PNH não conta para a quantidade de IAs que você pode ter instaladas de uma só vez.\nEsta PNH se beneficia de seus talentos ao pilotar seu mecha.\nAlém disso, você pode carregá-la com você fora de seu mecha, seja como uma urna miniaturizada, uma conexão integrada ao traje reforçado ou com um implante de hardware portátil.\n1/rodada, com a ajuda de sua PNH, você pode rolar novamente qualquer teste ou salvamento de perícia de mecha.\nVocê deve manter o novo resultado, mesmo que seja pior.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_walking_armory_1",
      "category": "system",
      "name": "Estojo de Munição I",
      "sp": 0,
      "type": "Sistema",
      "tags": [
        "Limitado 6",
        "1/Turno"
      ],
      "actions": [],
      "deployables": [],
      "terse": "1/turno, quando você atacar com uma arma à distância Principal, você pode gastar <b>Cargas</b> para aplicar um dos seguintes efeitos ao seu ataque pelo custo listado.",
      "detail": "1/turno, quando você atacar com uma arma à distância Principal, você pode gastar <b>Cargas</b> para aplicar um dos seguintes efeitos ao seu ataque pelo custo listado.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_walking_armory_2",
      "category": "system",
      "name": "Estojo de Munição II",
      "sp": 0,
      "type": "Sistema",
      "tags": [
        "Limitado 6",
        "1/Turno"
      ],
      "actions": [],
      "deployables": [],
      "terse": "1/turno, quando você atacar com uma arma à distância Principal, você pode gastar <b>Cargas</b> para aplicar um dos seguintes efeitos ao seu ataque pelo custo listado.",
      "detail": "1/turno, quando você atacar com uma arma à distância Principal, você pode gastar <b>Cargas</b> para aplicar um dos seguintes efeitos ao seu ataque pelo custo listado.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_walking_armory_3",
      "category": "system",
      "name": "Estojo de Munição III",
      "sp": 0,
      "type": "Sistema",
      "tags": [
        "Limitado 6",
        "1/Turno"
      ],
      "actions": [],
      "deployables": [],
      "terse": "1/turno, quando você atacar com uma arma à distância Principal, você pode gastar <b>Cargas</b> para aplicar um dos seguintes efeitos ao seu ataque pelo custo listado.\nSe você realizar um acerto crítico usando munição de seu Estojo de Munição, você não gasta nenhuma carga.\nSe o seu ataque tiver mais de um alvo, este efeito se aplica apenas à primeira rolagem de ataque que você fizer.",
      "detail": "1/turno, quando você atacar com uma arma à distância Principal, você pode gastar <b>Cargas</b> para aplicar um dos seguintes efeitos ao seu ataque pelo custo listado.\nSe você realizar um acerto crítico usando munição de seu Estojo de Munição, você não gasta nenhuma carga.\nSe o seu ataque tiver mais de um alvo, este efeito se aplica apenas à primeira rolagem de ataque que você fizer.",
      "source": "GMS",
      "license": "GMS",
      "license_level": 0
    },
    {
      "id": "ms_multi_gear_maneuver_system",
      "category": "system",
      "name": "Sistema de Manobras Multiuso",
      "sp": 1,
      "type": "System",
      "tags": [
        "Único"
      ],
      "actions": [
        {
          "name": "Disparar Tirolesa",
          "activation": "Quick",
          "detail": "Você dispara uma tirolesa de <b>8 espaços</b> de comprimento que conecta <b>2 espaços livres</b> na sua linha de visão, sendo que um deles deve estar adjacente a você. Ambas as extremidades devem ser presas a uma superfície, como uma parede ou chão. Ela é ativada no final do seu turno com os seguintes benefícios: <ul> <li>Um personagem de <b>Tamanho 1/2</b> que esteja adjacente a qualquer uma das extremidades da linha pode se mover até a outra extremidade como uma <b>Ação Rápida</b>, desde que consiga se segurar nela. Se quiser, ele pode saltar para fora em qualquer ponto ao longo do caminho.</li> <li>Sempre que um personagem de <b>Tamanho 1</b> ou maior cruzar o espaço ocupado pela tirolesa pela primeira vez em uma rodada ou começar seu turno dentro dele, deve obter sucesso em um salvamento de <b>Agilidade</b> ou fica <b>Prostrado</b>.</li> </ul>Qualquer personagem adjacente ao início ou fim da tirolesa pode derrubá-la ao obter sucesso em um teste de <b>Casco</b> como uma <b>Ação Rápida</b> ou ao obter sucesso em um ataque corpo a corpo contra uma das extremidades. A linha tem 1 PV e <b>Evasão 10</b>. Destruir a tirolesa dessa forma não destrói este sistema. Caso contrário, ela dura até que você use este sistema novamente."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Disparar Tirolesa: Você dispara uma tirolesa de <b>8 espaços</b> de comprimento que conecta <b>2 espaços livres</b> na sua linha de visão, sendo que um deles deve estar adjacente a você. Ambas as extremidades devem ser presas a uma superfície, como uma parede ou chão. Ela é ativada no final do seu turno com os seguintes benefícios: <ul> <li>Um personagem de <b>Tamanho 1/2</b> que esteja adjacente a qualquer uma das extremidades da linha pode se mover até a outra extremidade como uma <b>Ação Rápida</b>, desde que consiga se segurar nela. Se quiser, ele pode saltar para fora em qualquer ponto ao longo do caminho.</li> <li>Sempre que um personagem de <b>Tamanho 1</b> ou maior cruzar o espaço ocupado pela tirolesa pela primeira vez em uma rodada ou começar seu turno dentro dele, deve obter sucesso em um salvamento de <b>Agilidade</b> ou fica <b>Prostrado</b>.</li> </ul>Qualquer personagem adjacente ao início ou fim da tirolesa pode derrubá-la ao obter sucesso em um teste de <b>Casco</b> como uma <b>Ação Rápida</b> ou ao obter sucesso em um ataque corpo a corpo contra uma das extremidades. A linha tem 1 PV e <b>Evasão 10</b>. Destruir a tirolesa dessa forma não destrói este sistema. Caso contrário, ela dura até que você use este sistema novamente.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Disparar Tirolesa: Você dispara uma tirolesa de <b>8 espaços</b> de comprimento que conecta <b>2 espaços livres</b> na sua linha de visão, sendo que um deles deve estar adjacente a você. Ambas as extremidades devem ser presas a uma superfície, como uma parede ou chão. Ela é ativada no final do seu turno com os seguintes benefícios: <ul> <li>Um personagem de <b>Tamanho 1/2</b> que esteja adjacente a qualquer uma das extremidades da linha pode se mover até a outra extremidade como uma <b>Ação Rápida</b>, desde que consiga se segurar nela. Se quiser, ele pode saltar para fora em qualquer ponto ao longo do caminho.</li> <li>Sempre que um personagem de <b>Tamanho 1</b> ou maior cruzar o espaço ocupado pela tirolesa pela primeira vez em uma rodada ou começar seu turno dentro dele, deve obter sucesso em um salvamento de <b>Agilidade</b> ou fica <b>Prostrado</b>.</li> </ul>Qualquer personagem adjacente ao início ou fim da tirolesa pode derrubá-la ao obter sucesso em um teste de <b>Casco</b> como uma <b>Ação Rápida</b> ou ao obter sucesso em um ataque corpo a corpo contra uma das extremidades. A linha tem 1 PV e <b>Evasão 10</b>. Destruir a tirolesa dessa forma não destrói este sistema. Caso contrário, ela dura até que você use este sistema novamente.",
      "source": "SSC",
      "license": "Atlas",
      "license_level": 1
    },
    {
      "id": "ms_jager_kunst_i",
      "category": "system",
      "name": "Jäger Kunst I",
      "sp": 2,
      "type": "System",
      "tags": [
        "Único",
        "Calor 1 (Próprio)"
      ],
      "actions": [
        {
          "name": "Jäger Kunst I",
          "activation": "Protocol",
          "detail": "Pelo restante do turno, sempre que você se mover para ficar adjacente a um objeto ou elemento de terreno independente maior que você, mova-se <b>2 espaços em qualquer direção</b> como uma <b>Ação Livre</b>, ignorando engajamento e reações — correndo, rolando ou deslizando ao redor. Você pode fazer isso várias vezes por turno, mas apenas uma vez para cada objeto ou elemento de terreno único."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Protocolo</b>]</b> Jäger Kunst I: Pelo restante do turno, sempre que você se mover para ficar adjacente a um objeto ou elemento de terreno independente maior que você, mova-se <b>2 espaços em qualquer direção</b> como uma <b>Ação Livre</b>, ignorando engajamento e reações — correndo, rolando ou deslizando ao redor. Você pode fazer isso várias vezes por turno, mas apenas uma vez para cada objeto ou elemento de terreno único.",
      "detail": "<b>[<b>Protocolo</b>]</b> Jäger Kunst I: Pelo restante do turno, sempre que você se mover para ficar adjacente a um objeto ou elemento de terreno independente maior que você, mova-se <b>2 espaços em qualquer direção</b> como uma <b>Ação Livre</b>, ignorando engajamento e reações — correndo, rolando ou deslizando ao redor. Você pode fazer isso várias vezes por turno, mas apenas uma vez para cada objeto ou elemento de terreno único.",
      "source": "SSC",
      "license": "Atlas",
      "license_level": 2
    },
    {
      "id": "ms_ricochet_blades",
      "category": "system",
      "name": "Lâminas Ricochete",
      "sp": 3,
      "type": "System",
      "tags": [
        "Limitado 3",
        "Único"
      ],
      "actions": [
        {
          "name": "Lançar Lâmina Ricochete",
          "activation": "Quick",
          "detail": "Como <b>Ação Rápida</b>, você lança uma lâmina ricochete ao longo de um caminho de <b>Linha 3</b>, causando 2 de dano Cinético a todos os personagens dentro da área afetada. Se a linha inicial atingir um elemento de terreno ou objeto de <b>Tamanho 1</b> ou maior, desenhe outro caminho de <b>Linha 3</b> a partir desse objeto em uma nova direção que não sobreponha o objeto de onde ricocheteou. Personagens dentro da área afetada devem obter sucesso em um teste de <b>Agilidade</b> ou sofrem 1d6+3 de dano Cinético."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Lançar Lâmina Ricochete: Como <b>Ação Rápida</b>, você lança uma lâmina ricochete ao longo de um caminho de <b>Linha 3</b>, causando 2 de dano Cinético a todos os personagens dentro da área afetada. Se a linha inicial atingir um elemento de terreno ou objeto de <b>Tamanho 1</b> ou maior, desenhe outro caminho de <b>Linha 3</b> a partir desse objeto em uma nova direção que não sobreponha o objeto de onde ricocheteou. Personagens dentro da área afetada devem obter sucesso em um teste de <b>Agilidade</b> ou sofrem 1d6+3 de dano Cinético.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Lançar Lâmina Ricochete: Como <b>Ação Rápida</b>, você lança uma lâmina ricochete ao longo de um caminho de <b>Linha 3</b>, causando 2 de dano Cinético a todos os personagens dentro da área afetada. Se a linha inicial atingir um elemento de terreno ou objeto de <b>Tamanho 1</b> ou maior, desenhe outro caminho de <b>Linha 3</b> a partir desse objeto em uma nova direção que não sobreponha o objeto de onde ricocheteou. Personagens dentro da área afetada devem obter sucesso em um teste de <b>Agilidade</b> ou sofrem 1d6+3 de dano Cinético.",
      "source": "SSC",
      "license": "Atlas",
      "license_level": 2
    },
    {
      "id": "ms_jager_kunst_ii",
      "category": "system",
      "name": "Jäger Kunst II",
      "sp": 3,
      "type": "System",
      "tags": [
        "Limitado 3",
        "Único"
      ],
      "actions": [
        {
          "name": "Confronto Fatal",
          "activation": "Reaction",
          "frequency": "1/round",
          "trigger": "Você sofre dano de um ataque corpo a corpo ou causa dano com um ataque corpo a corpo.",
          "detail": "Após o dano ser resolvido, você e seu alvo devem realizar uma rolagem disputada de <b>Casco</b> ou <b>Agilidade</b> (cada parte escolhe qual rolar). O perdedor fica <b>Prostrado</b>, sofre 1d6 de dano Cinético e é empurrado <b>3 espaços</b> em uma direção escolhida pelo vencedor. O vencedor pode então se mover <b>3 espaços</b> em qualquer direção, ignorando engajamento e sem provocar reações. O perdedor pode imediatamente sofrer 2 de dano Cinético <b>(PF)</b> para forçar uma nova rolagem disputada. Esse dano não pode ser prevenido ou reduzido de nenhuma maneira.<br>Se o resultado for um empate, a disputa termina imediatamente. Caso contrário, a disputa continua até que um personagem perca sem forçar uma nova rolagem ou sofra <b>dano de estrutura</b>, momento em que ele perde imediatamente."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Reação</b>]</b> Confronto Fatal: Após o dano ser resolvido, você e seu alvo devem realizar uma rolagem disputada de <b>Casco</b> ou <b>Agilidade</b> (cada parte escolhe qual rolar). O perdedor fica <b>Prostrado</b>, sofre 1d6 de dano Cinético e é empurrado <b>3 espaços</b> em uma direção escolhida pelo vencedor. O vencedor pode então se mover <b>3 espaços</b> em qualquer direção, ignorando engajamento e sem provocar reações. O perdedor pode imediatamente sofrer 2 de dano Cinético <b>(PF)</b> para forçar uma nova rolagem disputada. Esse dano não pode ser prevenido ou reduzido de nenhuma maneira. Se o resultado for um empate, a disputa termina imediatamente. Caso contrário, a disputa continua até que um personagem perca sem forçar uma nova rolagem ou sofra <b>dano de estrutura</b>, momento em que ele perde imediatamente.",
      "detail": "<b>[<b>Reação</b>]</b> Confronto Fatal: Após o dano ser resolvido, você e seu alvo devem realizar uma rolagem disputada de <b>Casco</b> ou <b>Agilidade</b> (cada parte escolhe qual rolar). O perdedor fica <b>Prostrado</b>, sofre 1d6 de dano Cinético e é empurrado <b>3 espaços</b> em uma direção escolhida pelo vencedor. O vencedor pode então se mover <b>3 espaços</b> em qualquer direção, ignorando engajamento e sem provocar reações. O perdedor pode imediatamente sofrer 2 de dano Cinético <b>(PF)</b> para forçar uma nova rolagem disputada. Esse dano não pode ser prevenido ou reduzido de nenhuma maneira. Se o resultado for um empate, a disputa termina imediatamente. Caso contrário, a disputa continua até que um personagem perca sem forçar uma nova rolagem ou sofra <b>dano de estrutura</b>, momento em que ele perde imediatamente.",
      "source": "SSC",
      "license": "Atlas",
      "license_level": 3
    },
    {
      "id": "ms_hardpoint_reinforcement",
      "category": "system",
      "name": "Reforço de Suporte",
      "sp": 2,
      "type": "Shield",
      "tags": [
        "Escudo"
      ],
      "actions": [],
      "deployables": [],
      "terse": "Enquanto você não estiver <b>Lento</b> ou <b>Imobilizado</b>, você ganha <b>Resistência</b> a todo dano durante o seu turno.",
      "detail": "Enquanto você não estiver <b>Lento</b> ou <b>Imobilizado</b>, você ganha <b>Resistência</b> a todo dano durante o seu turno.",
      "source": "IPS-N",
      "license": "Caliban",
      "license_level": 2
    },
    {
      "id": "ms_spike_charges",
      "category": "system",
      "name": "Cargas de Espinho",
      "sp": 2,
      "type": "Deployable",
      "tags": [
        "Limitado 2",
        "Único",
        "Granada"
      ],
      "actions": [
        {
          "name": "Granada de Espinho",
          "activation": "Quick",
          "detail": "Gaste uma carga para lançar em um alvo dentro de <b>Alcance 5</b>. O alvo deve obter sucesso em um salvamento de <b>Agilidade</b>, ou a granada se fixa nele e se arma automaticamente. Ela se fixa automaticamente em objetos. No início ou final de qualquer turno, enquanto uma granada de espinho estiver presa, você pode detonar todas elas como uma <b>Reação</b>. Personagens atingidos sofrem 1d6+3 de dano Cinético e são arremessados <b>3 espaços</b> em uma direção à sua escolha, enquanto objetos apenas sofrem o dano. Personagens podem remover granadas de espinho ao serem bem-sucedidos em um salvamento de <b>Agilidade</b> como uma <b>Ação Rápida</b> em seu turno. Todas as granadas se soltam no final da cena."
        }
      ],
      "deployables": [
        {
          "name": "Mina de Espinho",
          "activation": "Quick",
          "type": "Mine",
          "range": [
            {
              "type": "Burst",
              "val": 2
            }
          ],
          "detail": "Uma vez ativada, personagens na área afetada de <b>Emanação 2</b> devem obter sucesso em um salvamento de <b>Agilidade</b> ou uma granada de espinho se fixa neles, conforme descrito acima."
        }
      ],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Granada de Espinho: Gaste uma carga para lançar em um alvo dentro de <b>Alcance 5</b>. O alvo deve obter sucesso em um salvamento de <b>Agilidade</b>, ou a granada se fixa nele e se arma automaticamente. Ela se fixa automaticamente em objetos. No início ou final de qualquer turno, enquanto uma granada de espinho estiver presa, você pode detonar todas elas como uma <b>Reação</b>. Personagens atingidos sofrem 1d6+3 de dano Cinético e são arremessados <b>3 espaços</b> em uma direção à sua escolha, enquanto objetos apenas sofrem o dano. Personagens podem remover granadas de espinho ao serem bem-sucedidos em um salvamento de <b>Agilidade</b> como uma <b>Ação Rápida</b> em seu turno. Todas as granadas se soltam no final da cena.\n<b>[Posicionável: Mina de Espinho (Mine)]</b> Uma vez ativada, personagens na área afetada de <b>Emanação 2</b> devem obter sucesso em um salvamento de <b>Agilidade</b> ou uma granada de espinho se fixa neles, conforme descrito acima.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Granada de Espinho: Gaste uma carga para lançar em um alvo dentro de <b>Alcance 5</b>. O alvo deve obter sucesso em um salvamento de <b>Agilidade</b>, ou a granada se fixa nele e se arma automaticamente. Ela se fixa automaticamente em objetos. No início ou final de qualquer turno, enquanto uma granada de espinho estiver presa, você pode detonar todas elas como uma <b>Reação</b>. Personagens atingidos sofrem 1d6+3 de dano Cinético e são arremessados <b>3 espaços</b> em uma direção à sua escolha, enquanto objetos apenas sofrem o dano. Personagens podem remover granadas de espinho ao serem bem-sucedidos em um salvamento de <b>Agilidade</b> como uma <b>Ação Rápida</b> em seu turno. Todas as granadas se soltam no final da cena.\n<b>[Posicionável: Mina de Espinho (Mine)]</b> Uma vez ativada, personagens na área afetada de <b>Emanação 2</b> devem obter sucesso em um salvamento de <b>Agilidade</b> ou uma granada de espinho se fixa neles, conforme descrito acima.",
      "source": "IPS-N",
      "license": "Caliban",
      "license_level": 2
    },
    {
      "id": "ms_rapid_maneuver_jets",
      "category": "system",
      "name": "Jatos de Manobra Rápida",
      "sp": 4,
      "type": "System",
      "tags": [
        "Blindagem",
        "Único",
        "Calor 1 (Próprio)"
      ],
      "actions": [],
      "deployables": [],
      "terse": "1/rodada, quando você <b>Impulsionar</b>, você <b>voa</b>, ganha <b>Blindagem 3</b>, ignora engajamento e pode atravessar espaços ocupados por personagens maiores que você (mas não pode terminar seu turno nesses espaços). Você deve terminar esse movimento em um espaço no qual possa se manter de pé, caso contrário, você cai.",
      "detail": "1/rodada, quando você <b>Impulsionar</b>, você <b>voa</b>, ganha <b>Blindagem 3</b>, ignora engajamento e pode atravessar espaços ocupados por personagens maiores que você (mas não pode terminar seu turno nesses espaços). Você deve terminar esse movimento em um espaço no qual possa se manter de pé, caso contrário, você cai.",
      "source": "IPS-N",
      "license": "Caliban",
      "license_level": 3
    },
    {
      "id": "ms_forge_clamps",
      "category": "system",
      "name": "Grampos de Fundição",
      "sp": 1,
      "type": "System",
      "tags": [],
      "actions": [
        {
          "name": "Fixar Grampos",
          "activation": "Quick",
          "detail": "Você afunda os grampos em um objeto ou terreno adjacente de <b>Tamanho 1</b> ou maior. Você se torna <b>Imobilizado</b>, mas ganha <b>Imunidade</b> a <b>Repulsão</b> e <b>Prostrado</b>. Este efeito termina se o que você estiver agarrado for destruído ou se soltar os grampos como um <b>Protocolo</b>."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Rápida</b>]</b> Fixar Grampos: Você afunda os grampos em um objeto ou terreno adjacente de <b>Tamanho 1</b> ou maior. Você se torna <b>Imobilizado</b>, mas ganha <b>Imunidade</b> a <b>Repulsão</b> e <b>Prostrado</b>. Este efeito termina se o que você estiver agarrado for destruído ou se soltar os grampos como um <b>Protocolo</b>.",
      "detail": "<b>[<b>Ação Rápida</b>]</b> Fixar Grampos: Você afunda os grampos em um objeto ou terreno adjacente de <b>Tamanho 1</b> ou maior. Você se torna <b>Imobilizado</b>, mas ganha <b>Imunidade</b> a <b>Repulsão</b> e <b>Prostrado</b>. Este efeito termina se o que você estiver agarrado for destruído ou se soltar os grampos como um <b>Protocolo</b>.",
      "source": "HORUS",
      "license": "Kobold",
      "license_level": 1
    },
    {
      "id": "ms_seismic_pulse",
      "category": "system",
      "name": "Arrancador Sísmico",
      "sp": 2,
      "type": "System",
      "tags": [],
      "actions": [
        {
          "name": "Arrancador Sísmico",
          "activation": "Full",
          "detail": "Você desencadeia um pulso sísmico em um caminho de <b>Linha 10</b>: Personagens na área afetada devem obter sucesso em um salvamento de <b>Casco</b> ou ficam <b>Prostrados</b> e todos os objetos e pedaços de terreno na área automaticamente sofrem 10 de dano Energético <b>(PF)</b>. Se isso destruir um objeto ou seção de terreno, ele explode com uma área de <b>Emanação 1</b>. Personagens pegos na área da explosão devem obter sucesso em um salvamento de <b>Agilidade</b>, ou sofrem 2d6 de dano Explosivo. Um sucesso reduz o dano à metade. Cada personagem só pode ser afetado por uma dessas explosões por vez, mesmo que várias se sobreponham."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Ação Completa</b>]</b> Arrancador Sísmico: Você desencadeia um pulso sísmico em um caminho de <b>Linha 10</b>: Personagens na área afetada devem obter sucesso em um salvamento de <b>Casco</b> ou ficam <b>Prostrados</b> e todos os objetos e pedaços de terreno na área automaticamente sofrem 10 de dano Energético <b>(PF)</b>. Se isso destruir um objeto ou seção de terreno, ele explode com uma área de <b>Emanação 1</b>. Personagens pegos na área da explosão devem obter sucesso em um salvamento de <b>Agilidade</b>, ou sofrem 2d6 de dano Explosivo. Um sucesso reduz o dano à metade. Cada personagem só pode ser afetado por uma dessas explosões por vez, mesmo que várias se sobreponham.",
      "detail": "<b>[<b>Ação Completa</b>]</b> Arrancador Sísmico: Você desencadeia um pulso sísmico em um caminho de <b>Linha 10</b>: Personagens na área afetada devem obter sucesso em um salvamento de <b>Casco</b> ou ficam <b>Prostrados</b> e todos os objetos e pedaços de terreno na área automaticamente sofrem 10 de dano Energético <b>(PF)</b>. Se isso destruir um objeto ou seção de terreno, ele explode com uma área de <b>Emanação 1</b>. Personagens pegos na área da explosão devem obter sucesso em um salvamento de <b>Agilidade</b>, ou sofrem 2d6 de dano Explosivo. Um sucesso reduz o dano à metade. Cada personagem só pode ser afetado por uma dessas explosões por vez, mesmo que várias se sobreponham.",
      "source": "HORUS",
      "license": "Kobold",
      "license_level": 2
    },
    {
      "id": "ms_purifying_code",
      "category": "system",
      "name": "Código Purificador",
      "sp": 2,
      "type": "System",
      "tags": [],
      "actions": [
        {
          "name": "FALHA_MAIS",
          "activation": "Invade",
          "detail": "Você injeta um vírus memético, ativado por proximidade, no reator do alvo. No final do próximo turno dele, se o alvo não estiver adjacente a outro personagem ou seção de terreno de <b>Tamanho 1</b> ou maior, o vírus catalisa e ele sofre 1d6+2 de dano Explosivo <b>(PF)</b>. Uma vez catalisado, o efeito termina.<br>Um personagem só pode ser afetado por uma dessas opções por vez, e ele tem consciência dos efeitos que foram aplicados."
        },
        {
          "name": "FALHA_MENOS",
          "activation": "Invade",
          "detail": "Você injeta um vírus memético, ativado por proximidade, no reator do alvo. No final do próximo turno dele, se o alvo estiver adjacente a outro personagem ou seção de terreno de <b>Tamanho 1</b> ou maior, o vírus catalisa e ele sofre 1d6+2 de dano Explosivo <b>(PF)</b>. Uma vez catalisado, o efeito termina.<br>Um personagem só pode ser afetado por uma dessas opções por vez, e ele tem consciência dos efeitos que foram aplicados."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Invadir</b>]</b> FALHA_MAIS: Você injeta um vírus memético, ativado por proximidade, no reator do alvo. No final do próximo turno dele, se o alvo não estiver adjacente a outro personagem ou seção de terreno de <b>Tamanho 1</b> ou maior, o vírus catalisa e ele sofre 1d6+2 de dano Explosivo <b>(PF)</b>. Uma vez catalisado, o efeito termina. Um personagem só pode ser afetado por uma dessas opções por vez, e ele tem consciência dos efeitos que foram aplicados.\n<b>[<b>Invadir</b>]</b> FALHA_MENOS: Você injeta um vírus memético, ativado por proximidade, no reator do alvo. No final do próximo turno dele, se o alvo estiver adjacente a outro personagem ou seção de terreno de <b>Tamanho 1</b> ou maior, o vírus catalisa e ele sofre 1d6+2 de dano Explosivo <b>(PF)</b>. Uma vez catalisado, o efeito termina. Um personagem só pode ser afetado por uma dessas opções por vez, e ele tem consciência dos efeitos que foram aplicados.",
      "detail": "<b>[<b>Invadir</b>]</b> FALHA_MAIS: Você injeta um vírus memético, ativado por proximidade, no reator do alvo. No final do próximo turno dele, se o alvo não estiver adjacente a outro personagem ou seção de terreno de <b>Tamanho 1</b> ou maior, o vírus catalisa e ele sofre 1d6+2 de dano Explosivo <b>(PF)</b>. Uma vez catalisado, o efeito termina. Um personagem só pode ser afetado por uma dessas opções por vez, e ele tem consciência dos efeitos que foram aplicados.\n<b>[<b>Invadir</b>]</b> FALHA_MENOS: Você injeta um vírus memético, ativado por proximidade, no reator do alvo. No final do próximo turno dele, se o alvo estiver adjacente a outro personagem ou seção de terreno de <b>Tamanho 1</b> ou maior, o vírus catalisa e ele sofre 1d6+2 de dano Explosivo <b>(PF)</b>. Uma vez catalisado, o efeito termina. Um personagem só pode ser afetado por uma dessas opções por vez, e ele tem consciência dos efeitos que foram aplicados.",
      "source": "HORUS",
      "license": "Kobold",
      "license_level": 3
    },
    {
      "id": "ms_immolate",
      "category": "system",
      "name": "IMOLAR",
      "sp": 2,
      "type": "System",
      "tags": [],
      "actions": [
        {
          "name": "Ejetar Detritos",
          "activation": "Invade",
          "detail": "Você força o reator do alvo a ejetar líquido incandescente em uma área de <b>Emanação 2</b> ao redor dele, não afetando o espaço que ocupa. A área afetada se torna <b>terreno difícil</b> e personagens que começarem seu turno na área ou entrarem nela pela primeira vez em uma rodada devem obter sucesso em um salvamento de <b>Engenharia</b> ou sofrem 2 de <b>Calor</b> e 1 de <b>Queimadura</b>. O líquido resfria e se dissipa no final do seu próximo turno."
        },
        {
          "name": "Punção Derretida",
          "activation": "Invade",
          "detail": "Até o final do próximo turno do alvo, a blindagem do reator dele está temporariamente rachada. Ele sofre 2 de <b>Queimadura</b> para cada espaço que se mover voluntariamente (até um máximo de 6 de <b>Queimadura</b>)."
        }
      ],
      "deployables": [],
      "terse": "<b>[<b>Invadir</b>]</b> <b>Ejetar</b> Detritos: Você força o reator do alvo a ejetar líquido incandescente em uma área de <b>Emanação 2</b> ao redor dele, não afetando o espaço que ocupa. A área afetada se torna <b>terreno difícil</b> e personagens que começarem seu turno na área ou entrarem nela pela primeira vez em uma rodada devem obter sucesso em um salvamento de <b>Engenharia</b> ou sofrem 2 de <b>Calor</b> e 1 de <b>Queimadura</b>. O líquido resfria e se dissipa no final do seu próximo turno.\n<b>[<b>Invadir</b>]</b> Punção Derretida: Até o final do próximo turno do alvo, a <b>blindagem</b> do reator dele está temporariamente rachada. Ele sofre 2 de <b>Queimadura</b> para cada espaço que se mover voluntariamente (até um máximo de 6 de <b>Queimadura</b>).",
      "detail": "<b>[<b>Invadir</b>]</b> <b>Ejetar</b> Detritos: Você força o reator do alvo a ejetar líquido incandescente em uma área de <b>Emanação 2</b> ao redor dele, não afetando o espaço que ocupa. A área afetada se torna <b>terreno difícil</b> e personagens que começarem seu turno na área ou entrarem nela pela primeira vez em uma rodada devem obter sucesso em um salvamento de <b>Engenharia</b> ou sofrem 2 de <b>Calor</b> e 1 de <b>Queimadura</b>. O líquido resfria e se dissipa no final do seu próximo turno.\n<b>[<b>Invadir</b>]</b> Punção Derretida: Até o final do próximo turno do alvo, a <b>blindagem</b> do reator dele está temporariamente rachada. Ele sofre 2 de <b>Queimadura</b> para cada espaço que se mover voluntariamente (até um máximo de 6 de <b>Queimadura</b>).",
      "source": "HORUS",
      "license": "Kobold",
      "license_level": 3
    },
    {
      "id": "ms_tear_firmament",
      "category": "system",
      "name": "Pesadelo Errante",
      "sp": 1,
      "type": "Tech",
      "tags": [],
      "actions": [
        {
          "activation": "Full Tech",
          "name": "Pesadelo Errante",
          "detail": "Você gera uma zona de <b>Explosão 2</b> de fluxo temporal distorcido dentro de <b>Sensores</b> e na linha de visão que afeta todos os personagens, exceto você. Personagens dentro da área afetada não podem realizar <b>Reações</b>, e se começarem seu turno nela, devem obter sucesso em um salvamento de <b>Sistemas</b> ou sofrem 2 de <b>Calor</b> e ficam <b>Lentos</b> até o final do próximo turno deles. Esse efeito dura até que esta ação seja realizada novamente ou até a cena terminar."
        }
      ],
      "deployables": [],
      "terse": "<b>[Full Tech]</b> Pesadelo Errante: Você gera uma zona de <b>Explosão 2</b> de fluxo temporal distorcido dentro de <b>Sensores</b> e na linha de visão que afeta todos os personagens, exceto você. Personagens dentro da área afetada não podem realizar <b>Reações</b>, e se começarem seu turno nela, devem obter sucesso em um salvamento de <b>Sistemas</b> ou sofrem 2 de <b>Calor</b> e ficam <b>Lentos</b> até o final do próximo turno deles. Esse efeito dura até que esta ação seja realizada novamente ou até a cena terminar.",
      "detail": "<b>[Full Tech]</b> Pesadelo Errante: Você gera uma zona de <b>Explosão 2</b> de fluxo temporal distorcido dentro de <b>Sensores</b> e na linha de visão que afeta todos os personagens, exceto você. Personagens dentro da área afetada não podem realizar <b>Reações</b>, e se começarem seu turno nela, devem obter sucesso em um salvamento de <b>Sistemas</b> ou sofrem 2 de <b>Calor</b> e ficam <b>Lentos</b> até o final do próximo turno deles. Esse efeito dura até que esta ação seja realizada novamente ou até a cena terminar.",
      "source": "HORUS",
      "license": "Lich",
      "license_level": 1
    },
    {
      "id": "ms_rewrite",
      "category": "system",
      "name": "Tempo Antilinear",
      "sp": 2,
      "type": "Tech",
      "tags": [],
      "actions": [
        {
          "name": "Tempo Antilinear",
          "activation": "Quick Tech",
          "detail": "Escolha um personagem dentro de <b>Sensores</b> e na linha de visão. Ele remove todas as condições, exceto <b>Atordoado</b>, que não tenham sido autoinfligidas, e você imediatamente recebe todas as condições que ele removeu até o final do seu próximo turno."
        }
      ],
      "deployables": [],
      "terse": "<b>[Quick Tech]</b> Tempo Antilinear: Escolha um personagem dentro de <b>Sensores</b> e na linha de visão. Ele remove todas as condições, exceto <b>Atordoado</b>, que não tenham sido autoinfligidas, e você imediatamente recebe todas as condições que ele removeu até o final do seu próximo turno.",
      "detail": "<b>[Quick Tech]</b> Tempo Antilinear: Escolha um personagem dentro de <b>Sensores</b> e na linha de visão. Ele remove todas as condições, exceto <b>Atordoado</b>, que não tenham sido autoinfligidas, e você imediatamente recebe todas as condições que ele removeu até o final do seu próximo turno.",
      "source": "HORUS",
      "license": "Lich",
      "license_level": 2
    },
    {
      "id": "ms_unhinge_chronoflow",
      "category": "system",
      "name": "Desequilibrar Cronologia",
      "sp": 2,
      "type": "Tech",
      "tags": [],
      "actions": [
        {
          "name": "Celeridade",
          "activation": "Quick Tech",
          "detail": "Escolha um personagem dentro de <b>Sensores</b> e na linha de visão. Pelo restante da cena, ou até sofrer dano, ele pode <b>Impulsionar</b> 1/rodada como uma <b>Ação Livre</b> durante o turno dele."
        },
        {
          "name": "Lentidão",
          "activation": "Quick Tech",
          "detail": "Escolha um personagem dentro de <b>Sensores</b> e na linha de visão. Ele deve obter sucesso em um salvamento de <b>Sistemas</b> ou sofre 2 de <b>Calor</b>, fica <b>Lento</b> e se torna incapaz de realizar <b>Reações</b>. Este efeito termina se ele sofrer qualquer quantidade de dano ou for bem-sucedido em um salvamento de Sistemas como uma <b>Ação Rápida</b>."
        }
      ],
      "deployables": [],
      "terse": "<b>[Quick Tech]</b> Celeridade: Escolha um personagem dentro de <b>Sensores</b> e na linha de visão. Pelo restante da cena, ou até sofrer dano, ele pode <b>Impulsionar</b> 1/rodada como uma <b>Ação Livre</b> durante o turno dele.\n<b>[Quick Tech]</b> Lentidão: Escolha um personagem dentro de <b>Sensores</b> e na linha de visão. Ele deve obter sucesso em um salvamento de <b>Sistemas</b> ou sofre 2 de <b>Calor</b>, fica <b>Lento</b> e se torna incapaz de realizar <b>Reações</b>. Este efeito termina se ele sofrer qualquer quantidade de dano ou for bem-sucedido em um salvamento de Sistemas como uma <b>Ação Rápida</b>.",
      "detail": "<b>[Quick Tech]</b> Celeridade: Escolha um personagem dentro de <b>Sensores</b> e na linha de visão. Pelo restante da cena, ou até sofrer dano, ele pode <b>Impulsionar</b> 1/rodada como uma <b>Ação Livre</b> durante o turno dele.\n<b>[Quick Tech]</b> Lentidão: Escolha um personagem dentro de <b>Sensores</b> e na linha de visão. Ele deve obter sucesso em um salvamento de <b>Sistemas</b> ou sofre 2 de <b>Calor</b>, fica <b>Lento</b> e se torna incapaz de realizar <b>Reações</b>. Este efeito termina se ele sofrer qualquer quantidade de dano ou for bem-sucedido em um salvamento de Sistemas como uma <b>Ação Rápida</b>.",
      "source": "HORUS",
      "license": "Lich",
      "license_level": 2
    },
    {
      "id": "ms_stay_of_execution",
      "category": "system",
      "name": "Suspensão da Execução",
      "sp": 2,
      "type": "Tech",
      "tags": [
        "Único",
        "Limitado 2"
      ],
      "actions": [
        {
          "name": "Suspensão da Execução",
          "activation": "Quick Tech",
          "detail": "Escolha a si mesmo ou outro personagem dentro de <b>Sensores</b> e na linha de visão. Seu alvo ganha <b>Imunidade</b> a todo dano e efeitos de fontes externas até o final do próximo turno dele, momento em que fica <b>Atordoado</b> até o final do turno seguinte. Nada pode impedir ou remover essa condição.<br>Durante esse tempo, quaisquer efeitos ativos sobre seu alvo ficam congelados no tempo — efetivamente pausados — e quaisquer contadores relevantes não contam (por exemplo, condições que expirariam no final do turno agora expiram no final do turno seguinte, cronômetros de fusão do reator não diminuem etc.).<br>Um personagem relutante pode ignorar esse efeito sendo bem-sucedido em um salvamento de <b>Sistemas</b>."
        }
      ],
      "deployables": [],
      "terse": "<b>[Quick Tech]</b> Suspensão da Execução: Escolha a si mesmo ou outro personagem dentro de <b>Sensores</b> e na linha de visão. Seu alvo ganha <b>Imunidade</b> a todo dano e efeitos de fontes externas até o final do próximo turno dele, momento em que fica <b>Atordoado</b> até o final do turno seguinte. Nada pode impedir ou remover essa condição. Durante esse tempo, quaisquer efeitos ativos sobre seu alvo ficam congelados no tempo — efetivamente pausados — e quaisquer contadores relevantes não contam (por exemplo, condições que expirariam no final do turno agora expiram no final do turno seguinte, cronômetros de fusão do reator não diminuem etc.). Um personagem relutante pode ignorar esse efeito sendo bem-sucedido em um salvamento de <b>Sistemas</b>.",
      "detail": "<b>[Quick Tech]</b> Suspensão da Execução: Escolha a si mesmo ou outro personagem dentro de <b>Sensores</b> e na linha de visão. Seu alvo ganha <b>Imunidade</b> a todo dano e efeitos de fontes externas até o final do próximo turno dele, momento em que fica <b>Atordoado</b> até o final do turno seguinte. Nada pode impedir ou remover essa condição. Durante esse tempo, quaisquer efeitos ativos sobre seu alvo ficam congelados no tempo — efetivamente pausados — e quaisquer contadores relevantes não contam (por exemplo, condições que expirariam no final do turno agora expiram no final do turno seguinte, cronômetros de fusão do reator não diminuem etc.). Um personagem relutante pode ignorar esse efeito sendo bem-sucedido em um salvamento de <b>Sistemas</b>.",
      "source": "HORUS",
      "license": "Lich",
      "license_level": 3
    },
    {
      "id": "ms_didymos_class_nhp",
      "category": "system",
      "name": "PNH Classe Dídimos",
      "sp": 3,
      "type": "AI",
      "tags": [
        "IA",
        "Único",
        "Limitado 3"
      ],
      "actions": [
        {
          "name": "Divisão Temporal",
          "activation": "Quick Tech",
          "detail": "Escolha a si mesmo ou outro personagem dentro de <b>Sensores</b> e na linha de visão. Seu alvo desaparece e você cria uma divisão cronológica na linha do tempo dele, substituindo-o por dois campos de energia de paradoxo mutante que aparecem o mais próximo possível de sua posição original. Esses campos são novos personagens que parecem buracos no espaço do mesmo <b>Tamanho</b> e formato aproximado do seu alvo (embora você não deva olhá-los por muito tempo). Os campos têm 10 PV, <b>Velocidade 5</b>, <b>Evasão 5</b>, <b>Defesa-E 5</b>, <b>Capacidade de Calor 5</b>, e possuem <b>Imunidade</b> a todas as condições e estados. Eles são controlados pelo jogador do personagem afetado e ambos agem no turno daquele personagem, começando no próximo turno dele. As únicas ações que os campos podem realizar são movimentos padrão e <b>Impulsionar</b>, e a única reação que podem realizar é se dispersar (veja abaixo). Eles são obstruções e concedem <b>cobertura pesada</b>.<br>Se um campo exceder sua <b>Capacidade de Calor</b> ou for reduzido a 0 PV, ele desaparece imediatamente. O jogador dele também pode fazer com que um campo desapareça como uma <b>Reação</b> no final do turno de qualquer personagem.<br>Se um campo desaparecer, o outro se funde imediatamente no personagem original, que retorna no espaço desse campo. Se ambos os campos desaparecerem ao mesmo tempo, seu jogador decide qual campo desaparece primeiro.<br>Um personagem relutante pode ignorar este efeito sendo bem-sucedido em um salvamento de <b>Sistemas</b>."
        }
      ],
      "deployables": [],
      "terse": "Seu mecha ganha a propriedade <b>IA</b> e a seguinte ação de <b>Programar Rápido</b>:\n<b>[Quick Tech]</b> Divisão Temporal: Escolha a si mesmo ou outro personagem dentro de <b>Sensores</b> e na linha de visão. Seu alvo desaparece e você cria uma divisão cronológica na linha do tempo dele, substituindo-o por dois campos de energia de paradoxo mutante que aparecem o mais próximo possível de sua posição original. Esses campos são novos personagens que parecem buracos no espaço do mesmo <b>Tamanho</b> e formato aproximado do seu alvo (embora você não deva olhá-los por muito tempo). Os campos têm 10 PV, <b>Velocidade 5</b>, <b>Evasão 5</b>, <b>Defesa-E 5</b>, <b>Capacidade de Calor 5</b>, e possuem <b>Imunidade</b> a todas as condições e estados. Eles são controlados pelo jogador do personagem afetado e ambos agem no turno daquele personagem, começando no próximo turno dele. As únicas ações que os campos podem realizar são movimentos padrão e <b>Impulsionar</b>, e a única reação que podem realizar é se dispersar (veja abaixo). Eles são obstruções e concedem <b>cobertura pesada</b>. Se um campo exceder sua <b>Capacidade de Calor</b> ou for reduzido a 0 PV, ele desaparece imediatamente. O jogador dele também pode fazer com que um campo desapareça como uma <b>Reação</b> no final do turno de qualquer personagem. Se um campo desaparecer, o outro se funde imediatamente no personagem original, que retorna no espaço desse campo. Se ambos os campos desaparecerem ao mesmo tempo, seu jogador decide qual campo desaparece primeiro. Um personagem relutante pode ignorar este efeito sendo bem-sucedido em um salvamento de <b>Sistemas</b>.",
      "detail": "Seu mecha ganha a propriedade <b>IA</b> e a seguinte ação de <b>Programar Rápido</b>:\n<b>[Quick Tech]</b> Divisão Temporal: Escolha a si mesmo ou outro personagem dentro de <b>Sensores</b> e na linha de visão. Seu alvo desaparece e você cria uma divisão cronológica na linha do tempo dele, substituindo-o por dois campos de energia de paradoxo mutante que aparecem o mais próximo possível de sua posição original. Esses campos são novos personagens que parecem buracos no espaço do mesmo <b>Tamanho</b> e formato aproximado do seu alvo (embora você não deva olhá-los por muito tempo). Os campos têm 10 PV, <b>Velocidade 5</b>, <b>Evasão 5</b>, <b>Defesa-E 5</b>, <b>Capacidade de Calor 5</b>, e possuem <b>Imunidade</b> a todas as condições e estados. Eles são controlados pelo jogador do personagem afetado e ambos agem no turno daquele personagem, começando no próximo turno dele. As únicas ações que os campos podem realizar são movimentos padrão e <b>Impulsionar</b>, e a única reação que podem realizar é se dispersar (veja abaixo). Eles são obstruções e concedem <b>cobertura pesada</b>. Se um campo exceder sua <b>Capacidade de Calor</b> ou for reduzido a 0 PV, ele desaparece imediatamente. O jogador dele também pode fazer com que um campo desapareça como uma <b>Reação</b> no final do turno de qualquer personagem. Se um campo desaparecer, o outro se funde imediatamente no personagem original, que retorna no espaço desse campo. Se ambos os campos desaparecerem ao mesmo tempo, seu jogador decide qual campo desaparece primeiro. Um personagem relutante pode ignorar este efeito sendo bem-sucedido em um salvamento de <b>Sistemas</b>.",
      "source": "HORUS",
      "license": "Lich",
      "license_level": 3
    }
  ],
  "statuses": [
    {
      "id": "dangerzone",
      "category": "status",
      "name": "ZONA DE PERIGO",
      "type": "Status",
      "exclusive": "Mech",
      "terse": "Nível de <b>Calor</b> em metade da capacidade ou mais.",
      "detail": "Um personagem está na <b>ZONA DE PERIGO</b> quando metade ou mais da metade do seu calor está preenchido. Ele está sobrecarregado de calor, o que permite alguns ataques, talentos e efeitos.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "downandout",
      "category": "status",
      "name": "CAÍDOS E APAGADOS",
      "type": "Status",
      "exclusive": "Pilot",
      "terse": "Piloto está inconsciente; qualquer dano adicional o mata.",
      "detail": "Um piloto <b>CAÍDO E APAGADO</b> está inconsciente e <b>ATORDOADO</b> — se sofrer mais dano, ele morrerá. Ele recupera a consciência e metade dos PV quando descansa.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "engaged",
      "category": "status",
      "name": "ENGAJADO",
      "type": "Status",
      "exclusive": null,
      "terse": "Ataques à distância feitos por este personagem recebem <b>+1 de Dificuldade</b>. Todo movimento adicional é perdido se <b>ENGAJADO</b> por um alvo de <b>Tamanho</b> igual ou maior.",
      "detail": "Se um personagem se mover e ficar adjacente a um personagem hostil, ambos recebem o estado <b>ENGAJADO</b> enquanto permanecerem adjacentes um ao outro. Ataques à distância feitos por um personagem <b>ENGAJADO</b> sofrem <b>+1 de Dificuldade</b>. Além disso, personagens que fiquem <b>ENGAJADOS</b> com alvos de Tamanho igual ou maior durante o curso de um movimento param imediatamente de se mover e perdem qualquer movimento não utilizado.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "exposed",
      "category": "status",
      "name": "EXPOSTO",
      "type": "Status",
      "exclusive": "Mech",
      "terse": "Todo o <b>Dano Cinético, Explosivo ou Energético</b> recebido por este personagem é dobrado.",
      "detail": "Um personagem fica <b>EXPOSTO</b> quando lida com um acúmulo de calor descontrolado — sua <b>armadura</b> é enfraquecida pelo superaquecimento, suas saídas de ar estão abertas e suas armas estão se desligando, proporcionando muitos pontos fracos. Todo <b>Dano cinético, Explosivo ou Energético<b> sofrido por um personagem <b>EXPOSTO</b> é duplicado, antes de aplicar quaisquer reduções. Um mecha pode remover <b>EXPOSTO</b> realizando a ação <b>ESTABILIZAR</b>.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "hidden",
      "category": "status",
      "name": "ESCONDIDO",
      "type": "Status",
      "exclusive": null,
      "terse": "Este personagem não pode ser alvo de ataques ou ações hostis, não causa engajamento e inimigos só conhecem sua localização aproximada.",
      "detail": "Um personagem <b>ESCONDIDO</b> não pode ser alvo de ataques ou ações hostis, não causa engajamento e os inimigos só sabem sua localização aproximada. Atacar, forçar testes de resistência, usar reações, <b>IMPULSIONAR</b> e perder cobertura removem o estado <b>ESCONDIDO</b> após serem resolvidos. É possível encontrar alguém <b>ESCONDIDO</b> com a ação <b>PROCURAR</b>.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "invisible",
      "category": "status",
      "name": "INVISÍVEL",
      "type": "Status",
      "exclusive": null,
      "terse": "Todos os ataques contra personagens <b>INVISÍVEIS</b> têm 50% de chance de errar antes de uma rolagem de ataque. Personagens <b>INVISÍVEIS</b> podem sempre <b>ESCONDER-SE</b>, mesmo sem cobertura.",
      "detail": "Todos os ataques feitos contra um personagem <b>INVISÍVEL</b>, independentemente do tipo, têm 50% de chance de errar por completo, antes mesmo de ser feita a rolagem de ataque. Role um dado ou jogue uma moeda para determinar se o ataque erra. Além disso, um personagem <b>INVISÍVEL</b> sempre pode <b>ESCONDER-SE</b>, mesmo sem cobertura.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "prone",
      "category": "status",
      "name": "PROSTRADO",
      "type": "Status",
      "exclusive": null,
      "terse": "Ataques contra alvos <b>PROSTRADOS</b> recebem <b>+1 de Precisão</b>. Personagens <b>PROSTRADOS</b> são <b>LENTOS</b> e contam como se movendo em <b>Terreno Difícil</b>.",
      "detail": "Ataques contra um alvo <b>PROSTRADO</b> recebem <b>+1 de Precisão</b>. Além disso, um personagem <b>PROSTRADO</b> fica <b>LENTO</b> e é considerado como se estivesse se movendo em terreno difícil. Um personagem pode remover o estado <b>PROSTRADO</b> levantando-se em vez de realizar sua movimentação padrão, a menos que esteja <b>IMOBILIZADO</b>. Levantar não é considerado uma movimentação, portanto, não aciona <b>RETALIAR</b> ou outros efeitos.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "shut-down",
      "category": "status",
      "name": "DESLIGADO",
      "type": "Status",
      "exclusive": "Mech",
      "terse": "Enquanto DESLIGADO, mechas são <b>ATORDOADOS</b> indefinidamente.",
      "detail": "Quando um mecha está <b>DESLIGADO</b>:\n• Todo o calor é dissipado e o estado <b>EXPOSTO</b> é removido;\n• Qualquer PNH em cascata é estabilizada e não está mais em cascata;\n•Quaisquer estados e condições afetando o mecha causados por ações de programar, como <b>TRAVAR MIRA</b>, terminam imediatamente.\nUm mecha <b>DESLIGADO</b> tem <b>IMUNIDADE</b> a todas as ações de programar e ataques tecnológicos, incluindo aquelas de personagens aliados. Enquanto está <b>DESLIGADO</b>, um mecha está indefinidamente <b>ATORDOADO</b>. Nada pode impedir esta condição, e ela permanece até que o mecha deixe de estar <b>DESLIGADO</b>.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "immobilized",
      "category": "status",
      "name": "IMOBILIZADO",
      "type": "Condição",
      "exclusive": null,
      "terse": "Personagens <b>IMOBILIZADOS</b> não podem fazer nenhum movimento voluntário.",
      "detail": "Um personagem <b>IMOBILIZADO</b> não pode fazer nenhum movimento voluntário, embora movimentos involuntários não sejam afetados.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "impaired",
      "category": "status",
      "name": "IMPEDIDO",
      "type": "Condição",
      "exclusive": null,
      "terse": "Personagens <b>IMPEDIDOS</b> recebem <b>+1 de Dificuldade</b> em todos os ataques, salvamentos e testes de perícia.",
      "detail": "Um personagem <b>IMPEDIDO</b> sofre <b>+1 de Dificuldade</b> em todos os ataques, salvamentos e testes de perícia.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "jammed",
      "category": "status",
      "name": "BLOQUEADO",
      "type": "Condição",
      "exclusive": null,
      "terse": "Personagens <b>BLOQUEADOS</b> não podem usar comunicações, fazer ataques além de <b>IMPROVISAR ATAQUE</b>, <b>AGARRAR</b> e <b>EMPURRAR</b>, tomar reações, ou se beneficiar de ações tecnológicas.",
      "detail": "Um personagem <b>BLOQUEADO</b> não pode::\n•Usar comunicação para falar com outros personagens;\n•Fazer ataques, exceto <b>IMPROVISAR ATAQUE</b>, <b>AGARRAR</b> e <b>EMPURRAR</b>;\n•Usar reações nem usar ou se beneficiar de ações de programar.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "lockon",
      "category": "status",
      "name": "TRAVADO EM MIRA",
      "type": "Condição",
      "exclusive": null,
      "terse": "Personagens hostis podem consumir <b>TRAVADO EM MIRA</b> para <b>+1 de Precisão</b> em seu próximo ataque contra este personagem.",
      "detail": "Personagens hostis podem optar por consumir a condição <b>TRAVADO EM MIRA</b> de um personagem em troca de <b>+1 de Precisão</b> em seu próximo ataque contra esse personagem.\n<b>TRAVADO EM MIRA</b> também é necessário para usar alguns talentos e sistemas.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "shredded",
      "category": "status",
      "name": "DILACERADO",
      "type": "Condição",
      "exclusive": null,
      "terse": "Personagens <b>DILACERADOS</b> não se beneficiam de <b>ARMADURA</b> ou <b>RESISTÊNCIA</b>.",
      "detail": "Um personagem <b>DILACERADO</b> não se beneficia de <b>ARMADURA</b> ou <b>RESISTÊNCIA</b>.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "slow",
      "category": "status",
      "name": "LENTO",
      "type": "Condição",
      "exclusive": null,
      "terse": "Este personagem não pode <b>IMPULSIONAR</b> ou fazer quaisquer movimentos especiais concedidos por talentos, sistemas ou armas.",
      "detail": "Um personagem <b>LENTO</b> só pode fazer o movimento padrão na sua vez e não pode <b>IMPULSIONAR</b> nem realizar movimentos especiais concedidos por talentos, sistemas ou armas.",
      "source": "REGRAS BÁSICAS"
    },
    {
      "id": "stunned",
      "category": "status",
      "name": "ATORDOADO",
      "type": "Condição",
      "exclusive": null,
      "terse": "Mechas <b>ATORDOADOS</b> não podem <b>SOBRECARREGAR</b>, mover-se ou realizar quaisquer ações.",
      "detail": "Um mecha <b>ATORDOADO</b> não pode <b>SOBRECARREGAR</b>, se mover ou usar qualquer ação, incluindo <b>ações livres</b> e reações. Pilotos ainda podem <b>MONTAR</b>, <b>DESMONTAR</b> ou <b>EJETAR</b> de um mecha <b>ATORDOADO</b> e podem usar ações normalmente.\nSUm mecha <b>ATORDOADO</b> tem um máximo de 5 de EVASÃO e automaticamente falha em todos os testes e salvamentos de Casco e Agilidade.",
      "source": "REGRAS BÁSICAS"
    }
  ],
  "tags": [
    {
      "id": "tg_burn",
      "name": "Queimadura {VAL}",
      "short_rule": "Queimadura {VAL} (causa {VAL} de queimadura contínua no alvo)",
      "description": "Em um acerto, esta arma causa {VAL} de <b>Queimadura</b> em seu alvo. Ele imediatamente sofre essa quantidade de <b>Dano</b> de <b>Queimadura</b>, ignorando <b>Armadura</b>, e então marca {VAL} de <b>Queimadura</b> em sua ficha, somando a qualquer <b>Queimadura</b> existente. No final de seu turno, personagens com <b>Queimadura</b> marcada fazem um teste de ENGENHARIA. Em um sucesso, eles removem toda a <b>Queimadura</b> marcada; em uma falha, eles sofrem <b>Dano</b> igual ao total de <b>Queimadura</b> marcada."
    },
    {
      "id": "tg_heat_target",
      "name": "Calor {VAL} (Alvo)",
      "short_rule": "Calor {VAL} (causa {VAL} de calor ao acertar o alvo)",
      "description": "Em um acerto, esta arma ou sistema causa {VAL} de <b>Calor</b> em seu alvo."
    },
    {
      "id": "tg_line",
      "name": "Linha {VAL}",
      "short_rule": "Linha {VAL} (atinge todos alvos em linha de {VAL} espaços)",
      "description": "Ataques feitos com esta arma afetam personagens em uma <b>Linha</b> reta, com {VAL} espaços de comprimento."
    },
    {
      "id": "tg_cone",
      "name": "Cone {VAL}",
      "short_rule": "Cone {VAL} (atinge alvos em cone de {VAL} espaços)",
      "description": "Ataques feitos com esta arma afetam personagens dentro de um <b>Cone</b>, com {VAL} espaços de comprimento e {VAL} espaços de largura em seu ponto mais distante. O <b>Cone</b> começa com 1 espaço de largura."
    },
    {
      "id": "tg_blast",
      "name": "Explosão {VAL}",
      "short_rule": "Explosão {VAL} (área circular de raio {VAL})",
      "description": "Ataques feitos com esta arma afetam personagens dentro de um raio de {VAL} espaços, a partir de um ponto dentro do <b>Alcance</b> e da linha de visão. Cobertura e linha de visão são calculadas com base no centro da <b>Explosão</b>, em vez da posição do atacante."
    },
    {
      "id": "tg_burst",
      "name": "Emanação {VAL}",
      "short_rule": "Emanação {VAL} (área ao redor do usuário de raio {VAL})",
      "description": "Ataques feitos com esta arma afetam personagens dentro de um raio de {VAL} espaços, centrados e incluindo o espaço ocupado pelo usuário (ou alvo). Se a <b>Emanação</b> for um ataque, o usuário ou alvo não é afetado pelo ataque, a menos que especificado. Cobertura e linha de visão são calculadas a partir do personagem. Se um efeito de <b>Emanação</b> for contínuo, ele se move com o personagem em seu centro."
    },
    {
      "id": "tg_accurate",
      "name": "Precisa",
      "short_rule": "Precisa (+1d6 no ataque)",
      "description": "Ataques feitos com esta arma recebem <b>+1 de Precisão</b>."
    },
    {
      "id": "tg_arcing",
      "name": "Arco",
      "short_rule": "Arco (ignora cobertura se tiver visão indireta)",
      "description": "Esta arma pode ser disparada sobre obstáculos, geralmente lançando um projétil em um <b>Arco</b>. Ataques feitos com esta arma não exigem linha de visão, desde que seja possível traçar um caminho para o alvo; no entanto, eles ainda são afetados pela cobertura."
    },
    {
      "id": "tg_ap",
      "name": "Perfurante (PF)",
      "short_rule": "PF (ignora Armadura)",
      "description": "O <b>Dano</b> causado por esta arma ignora <b>Armadura</b>."
    },
    {
      "id": "tg_inaccurate",
      "name": "Imprecisa",
      "short_rule": "Imprecisa (+1d6 de dificuldade)",
      "description": "Ataques feitos com esta arma recebem <b>+1 de Dificuldade</b>."
    },
    {
      "id": "tg_knockback",
      "name": "Repulsão {VAL}",
      "short_rule": "Repulsão {VAL} (empurra o alvo {VAL} espaços)",
      "description": "Em um acerto, o usuário pode escolher repulsar seu alvo {VAL} espaços em uma <b>Linha</b> reta diretamente para longe do ponto de origem (por exemplo, o mecha atacante ou o centro de uma <b>Explosão</b>). Múltiplos efeitos de <b>Repulsão</b> se acumulam. Isso significa que um ataque feito com uma arma com <b>Repulsão</b> 1 e um talento que concede <b>Repulsão</b> 1 conta como tendo <b>Repulsão</b> 2."
    },
    {
      "id": "tg_loading",
      "name": "Recarga",
      "short_rule": "Carregamento (precisa de ação rápida ou estabilizar para recarregar)",
      "description": "Esta arma deve ser recarregada após cada uso. Mechas podem <b>Recarregar</b> com a ação <b>Estabilizar</b> e alguns Sistemas."
    },
    {
      "id": "tg_loading_after",
      "name": "Loading (Multiple Uses)",
      "short_rule": "This weapon must be reloaded after {VAL} uses. Mechs can reload with Stabilize and some systems. The user can choose to reload this weapon at the end of their turn, allowing them to fire it again on the same turn. This is a COMP/CON-specific alias for the LOADING tag, and all rules pertaining to LOADING apply.",
      "description": "This weapon must be reloaded after {VAL} uses. Mechs can reload with Stabilize and some systems. The user can choose to reload this weapon at the end of their turn, allowing them to fire it again on the same turn. This is a COMP/CON-specific alias for the LOADING tag, and all rules pertaining to LOADING apply."
    },
    {
      "id": "tg_ordnance",
      "name": "Artilharia",
      "short_rule": "Artilharia (só pode disparar antes de se mover no turno)",
      "description": "Esta arma só pode ser disparada antes que o usuário se mova ou realize qualquer outra ação em seu turno, exceto Protocolos. O usuário ainda pode agir e se mover normalmente após atacar. Adicionalmente, por causa de seu <b>Tamanho</b>, esta arma não pode ser usada contra alvos em engajamento com o mecha do usuário, e não pode ser usada para <b>Retaliar</b>."
    },
    {
      "id": "tg_overkill",
      "name": "Exagero",
      "short_rule": "Excesso (rolou 1 no dano: sofre 1 de calor e rerrola o 1)",
      "description": "Ao rolar <b>Dano</b> com esta arma, qualquer dado de <b>Dano</b> que cair em 1 faz com que o atacante sofra 1 de <b>Calor</b>, e então é rolado novamente. Números 1 adicionais continuam a acionar este efeito."
    },
    {
      "id": "tg_overshield",
      "name": "Blindagem",
      "short_rule": "Este sistema fornece PV que desaparecem no final da cena ou quando uma condição especificada é atendida. O usuário retém apenas o maior valor de <b>Blindagem</b> aplicado – ele não se acumula. Por exemplo, se um sistema fornecer <b>Blindagem</b> 5 e o usuário ganhar outro efeito que forneça <b>Blindagem</b> 7, ele terá <b>Blindagem</b> 7. O <b>Dano</b> é causado primeiro à <b>Blindagem</b>, depois aos PV. A <b>Blindagem</b> pode levar um personagem além de seus PV máximos. Ele não pode se beneficiar de cura, mas, de resto, se beneficia normalmente de qualquer coisa que afete PV e <b>Dano</b> (ou seja, redução, <b>Armadura</b>, etc.).",
      "description": "Este sistema fornece PV que desaparecem no final da cena ou quando uma condição especificada é atendida. O usuário retém apenas o maior valor de <b>Blindagem</b> aplicado – ele não se acumula. Por exemplo, se um sistema fornecer <b>Blindagem</b> 5 e o usuário ganhar outro efeito que forneça <b>Blindagem</b> 7, ele terá <b>Blindagem</b> 7. O <b>Dano</b> é causado primeiro à <b>Blindagem</b>, depois aos PV. A <b>Blindagem</b> pode levar um personagem além de seus PV máximos. Ele não pode se beneficiar de cura, mas, de resto, se beneficia normalmente de qualquer coisa que afete PV e <b>Dano</b> (ou seja, redução, <b>Armadura</b>, etc.)."
    },
    {
      "id": "tg_reliable",
      "name": "Confiável {VAL}",
      "short_rule": "Confiável {VAL} (causa {VAL} de dano mesmo se errar o ataque)",
      "description": "Esta arma tem algum grau de autocorreção ou é simplesmente poderosa o suficiente para causar <b>Dano</b> mesmo com um golpe de raspão. Ela sempre causa {VAL} de <b>Dano</b>, mesmo que erre o alvo ou role menos <b>Dano</b>. O <b>Dano</b> <b>Confiável</b> herda outras tags (como PF) e o tipo de <b>Dano</b> base, mas não tags que exigem um acerto, como Repelir."
    },
    {
      "id": "tg_seeking",
      "name": "Guiada",
      "short_rule": "Teleguiada (ignora cobertura e linha de visão)",
      "description": "Esta arma tem uma forma limitada de autoguiagem e propulsão interna, permitindo que siga caminhos complicados até seus alvos. Desde que seja possível traçar um caminho para seu alvo, esta arma ignora cobertura e não requer linha de visão."
    },
    {
      "id": "tg_smart",
      "name": "Inteligente",
      "short_rule": "Inteligente (ataca a Defesa Tecnológica do alvo)",
      "description": "Esta arma possui sistemas de autoguiagem, projéteis autopropelidos ou até munição nanorrobótica. Esses sistemas são eficazes o suficiente para que seus ataques não possam ser simplesmente esquivados – eles devem ser embaralhados ou Bloqueados. Por causa disso, todos os ataques com esta arma – incluindo ataques corpo a corpo e à distância – usam a <b>Defesa-E</b> do alvo em vez da <b>Evasão</b>. Alvos sem <b>Defesa-E</b> contam como tendo <b>8 de Defesa-E</b>."
    },
    {
      "id": "tg_threat",
      "name": "Ameaça {VAL}",
      "short_rule": "Ameaça {VAL} (raio de reação e ataque de oportunidade)",
      "description": "Esta arma pode ser usada para fazer ataques de <b>Retaliar</b> dentro de {VAL} espaços. Se for uma arma corpo a corpo, pode ser usada para fazer ataques corpo a corpo dentro de {VAL} espaços."
    },
    {
      "id": "tg_thrown",
      "name": "Arremessável {VAL}",
      "short_rule": "Arremesso {VAL} (pode ser arremessada até alcance {VAL})",
      "description": "Esta arma corpo a corpo pode ser arremessada em alvos dentro de {VAL} espaços. Ataques de arremesso seguem as regras para ataques corpo a corpo, mas são afetados pela cobertura; adicionalmente, uma arma arremessada para em um espaço adjacente ao seu alvo e deve ser recuperada como uma <b>Ação Livre</b> enquanto adjacente a essa arma antes que possa ser usada novamente."
    },
    {
      "id": "tg_turn",
      "name": "{VAL}/Turno",
      "short_rule": "Este sistema, característica ou <b>Reação</b> pode ser usado {VAL} vezes em qualquer turno.",
      "description": "Este sistema, característica ou <b>Reação</b> pode ser usado {VAL} vezes em qualquer turno."
    },
    {
      "id": "tg_round",
      "name": "{VAL}/Rodada",
      "short_rule": "Este sistema, característica ou <b>Reação</b> pode ser usado {VAL} vezes entre o início do turno do usuário e o início de seu próximo turno.",
      "description": "Este sistema, característica ou <b>Reação</b> pode ser usado {VAL} vezes entre o início do turno do usuário e o início de seu próximo turno."
    },
    {
      "id": "tg_ai",
      "name": "IA",
      "short_rule": "IA (Instalação de Inteligência Artificial)",
      "description": "Um mecha só pode ter um sistema com esta tag instalado por vez. Alguns Sistemas de IA concedem a tag IA ao mecha. Um mecha com a tag IA tem uma unidade PNH ou COMP/CON instalada que pode agir de forma um tanto autônoma. Um piloto pode optar por entregar os controles à sua IA ou retomar o controle como um protocolo. Seu mecha ganha seu próprio conjunto de ações e reações quando controlado por uma IA, mas o piloto não pode realizar ações ou reações com ele até o início de seu próximo turno. IAs não podem se beneficiar de talentos e têm uma pequena chance de entrar em cascata quando sofrem <b>Dano de Estrutura</b> ou de <b>Estresse</b>."
    },
    {
      "id": "tg_danger_zone",
      "name": "Zona de Perigo",
      "short_rule": "Zona de Perigo (efeito ativo com calor a 50%+)",
      "description": "Este sistema, talento ou arma só pode ser usado se o usuário estiver na <b>Zona de Perigo</b> (<b>Calor</b> igual a pelo menos metade de sua <b>Cap. de Calor</b>)."
    },
    {
      "id": "tg_deployable",
      "name": "Posicionável",
      "short_rule": "Posicionável em campo de batalha",
      "description": "Este sistema é um objeto que pode ser posicionado no campo. A menos que especificado de outra forma, pode ser posicionado em um espaço adjacente, livre e válido como uma <b>Ação Rápida</b>, e tem 5 de <b>Evasão</b> e 10 PV por <b>Tamanho</b>."
    },
    {
      "id": "tg_drone",
      "name": "Drone",
      "short_rule": "Drone (possui estatísticas e ações próprias)",
      "description": "Esta é uma unidade autopropelida e semiautônoma com inteligência rudimentar. A menos que especificado de outra forma, <b>Drones</b> são personagens de <b>Tamanho 1/2</b> que são aliados do usuário e têm <b>Evasão</b> 10, 5 PV e 0 de <b>Armadura</b>. Para serem usados, devem ser implantados em um espaço livre e válido dentro do <b>Alcance</b> dos <b>Sensores</b> e na linha de visão, tipicamente como uma <b>Ação Rápida</b>. Uma vez implantados, eles podem ser recolhidos com a mesma ação usada para implantá-los ( <b>Ação Rápida</b> ou completa, etc.), reunindo-se com seu mecha. Por padrão, <b>Drones</b> não podem realizar ações ou se mover; se tiverem ações ou movimento, eles agem no turno de seu usuário. Eles se beneficiam de cobertura e outras defesas como de costume, e fazem todos os testes de perícia e salvamentos de mecha com +0. Se um Drone chegar a 0 PV, ele é destruído e deve ser reparado antes que possa ser usado novamente – como qualquer sistema. Desde que um Drone não tenha sido destruído, ele é restaurado aos PV máximos quando o usuário descansa ou realiza um Reparo COMPLETO. <b>Drones</b> implantados persistem pelo resto da cena, até serem destruídos, ou até que seja especificado de outra forma."
    },
    {
      "id": "tg_full_action",
      "name": "Ação Completa",
      "short_rule": "Este sistema requer uma <b>Ação Completa</b> para Ativar.",
      "description": "Este sistema requer uma <b>Ação Completa</b> para Ativar."
    },
    {
      "id": "tg_grenade",
      "name": "Granada",
      "short_rule": "Granada (alcance 5 / arremessável)",
      "description": "Como uma <b>Ação Rápida</b>, este explosivo ou outro dispositivo pode ser arremessado para um espaço dentro da linha de visão e do <b>Alcance</b> especificado."
    },
    {
      "id": "tg_heat_self",
      "name": "Calor {VAL} (Próprio)",
      "short_rule": "Calor {VAL} (sofre {VAL} de calor ao disparar)",
      "description": "Imediatamente após usar esta arma ou sistema, o usuário sofre {VAL} de <b>Calor</b>."
    },
    {
      "id": "tg_limited",
      "name": "Limitado {VAL}",
      "short_rule": "Limitada {VAL} ({VAL} usos por missão)",
      "description": "Esta arma ou sistema só pode ser usado {VAL} vezes antes de precisar de um Reparo Completo. Alguns Sistemas Limitados, como Granadas, descrevem esses usos como '<b>Cargas</b>'. Para usar o sistema, o usuário gasta uma carga."
    },
    {
      "id": "tg_mine",
      "name": "Mina",
      "short_rule": "Mina (acionada por proximidade)",
      "description": "Como uma <b>Ação Rápida</b>, este dispositivo pode ser plantado em um espaço adjacente, livre e válido em qualquer superfície, mas não adjacente a outras minas. Após a implantação, ela se arma no final do turno do personagem que a implantou e – a menos que especificado de outra forma – é acionada quando qualquer personagem entra em um espaço adjacente. Personagens que saem de um espaço adjacente não acionarão uma mina. Uma vez acionada, uma mina cria um ataque de <b>Emanação</b> a partir do espaço em que foi colocada. Minas dentro dos <b>Sensores</b> de um personagem podem ser detectadas com um teste de Sistemas bem-sucedido como uma <b>Ação Rápida</b>, caso contrário, elas ficam ESCONDIDAS e não podem ser alvo. Minas detectadas podem ser desarmadas de espaços adjacentes com um teste de Sistemas bem-sucedido como uma <b>Ação Rápida</b>; a tentativa ocorre antes da detonação da mina e, em uma falha, a mina detona normalmente."
    },
    {
      "id": "tg_mod",
      "name": "Modificação",
      "short_rule": "Esta modificação pode ser aplicada a uma arma. Cada arma só pode ter uma Modificação, e não pode ter mais de uma da mesma Modificação. As modificações são aplicadas quando o usuário constrói seu mecha ou durante um Reparo COMPLETO.",
      "description": "Esta modificação pode ser aplicada a uma arma. Cada arma só pode ter uma Modificação, e não pode ter mais de uma da mesma Modificação. As modificações são aplicadas quando o usuário constrói seu mecha ou durante um Reparo COMPLETO."
    },
    {
      "id": "tg_protocol",
      "name": "Protocolo",
      "short_rule": "Este sistema pode ser ativado como uma <b>Ação Livre</b>, mas apenas no início do turno do usuário. Outra ação pode ser necessária para desativá-lo.",
      "description": "Este sistema pode ser ativado como uma <b>Ação Livre</b>, mas apenas no início do turno do usuário. Outra ação pode ser necessária para desativá-lo."
    },
    {
      "id": "tg_quick_action",
      "name": "Ação Rápida",
      "short_rule": "Este sistema requer uma <b>Ação Rápida</b> para Ativar.",
      "description": "Este sistema requer uma <b>Ação Rápida</b> para Ativar."
    },
    {
      "id": "tg_reaction",
      "name": "Reação",
      "short_rule": "Este sistema pode ser ativado como uma <b>Reação</b>.",
      "description": "Este sistema pode ser ativado como uma <b>Reação</b>."
    },
    {
      "id": "tg_shield",
      "name": "Escudo",
      "short_rule": "Escudo defensivo",
      "description": "Este sistema é um escudo de energia de algum tipo."
    },
    {
      "id": "tg_unique",
      "name": "Único",
      "short_rule": "Única (máximo 1 instalada por mecha)",
      "description": "Esta arma ou sistema não pode ser duplicado – cada personagem só pode ter uma cópia dele instalada por vez."
    },
    {
      "id": "tg_archaic",
      "name": "Arcaica",
      "short_rule": "Esta arma é antiquada e não pode ferir mechas.",
      "description": "Esta arma é antiquada e não pode ferir mechas."
    },
    {
      "id": "tg_personal_armor",
      "name": "Armadura Pessoal",
      "short_rule": "Este equipamento oferece proteção em combate, mas é óbvio para os observadores e geralmente não pode ser <b>Escondido</b>. Apenas uma peça de <b>Armadura</b> Pessoal pode ser usada por vez. Colocar a <b>Armadura</b> Pessoal leva de 10 a 20 minutos, e ao usá-la, os pilotos têm mobilidade e destreza restritas. Ninguém usa <b>Armadura</b> a menos que espere entrar em uma zona de guerra.",
      "description": "Este equipamento oferece proteção em combate, mas é óbvio para os observadores e geralmente não pode ser <b>Escondido</b>. Apenas uma peça de <b>Armadura</b> Pessoal pode ser usada por vez. Colocar a <b>Armadura</b> Pessoal leva de 10 a 20 minutos, e ao usá-la, os pilotos têm mobilidade e destreza restritas. Ninguém usa <b>Armadura</b> a menos que espere entrar em uma zona de guerra."
    },
    {
      "id": "tg_pilot_weapon",
      "name": "Arma de Piloto",
      "short_rule": "Em missões, os pilotos podem levar até duas armas. Todas as armas de piloto são de escala de piloto e não podem ser usadas por mechas.",
      "description": "Em missões, os pilotos podem levar até duas armas. Todas as armas de piloto são de escala de piloto e não podem ser usadas por mechas."
    },
    {
      "id": "tg_gear",
      "name": "Equipamento",
      "short_rule": "Esta é uma ferramenta, peça de equipamento ou outro item. Os pilotos podem ter até três destes por vez.",
      "description": "Esta é uma ferramenta, peça de equipamento ou outro item. Os pilotos podem ter até três destes por vez."
    },
    {
      "id": "tg_sidearm",
      "name": "Arma Secundária",
      "short_rule": "Esta arma pode ser usada para <b>Lutar</b> como uma <b>Ação Rápida</b> em vez de uma <b>Ação Completa</b>.",
      "description": "Esta arma pode ser usada para <b>Lutar</b> como uma <b>Ação Rápida</b> em vez de uma <b>Ação Completa</b>."
    },
    {
      "id": "tg_invade",
      "name": "Invadir",
      "short_rule": "Este sistema fornece opções adicionais para a Ação Rápida de Programar <b>Invadir</b>.",
      "description": "Este sistema fornece opções adicionais para a Ação Rápida de Programar <b>Invadir</b>."
    },
    {
      "id": "tg_quick_tech",
      "name": "Programar Rápido",
      "short_rule": "Esta tecnologia pode ser usada como uma Ação de <b>Programar Rápido</b>.",
      "description": "Esta tecnologia pode ser usada como uma Ação de <b>Programar Rápido</b>."
    },
    {
      "id": "tg_full_tech",
      "name": "Programar Completo",
      "short_rule": "Esta tecnologia pode ser usada como uma Ação de <b>Programar Completo</b>.",
      "description": "Esta tecnologia pode ser usada como uma Ação de <b>Programar Completo</b>."
    },
    {
      "id": "tg_free_action",
      "name": "Ação Livre",
      "short_rule": "Personagens podem realizar ações livres a qualquer momento durante seu turno, e elas não contam para o número de ações rápidas ou completas que realizam. Elas também podem ser usadas para realizar ações mais de uma vez por turno.",
      "description": "Personagens podem realizar ações livres a qualquer momento durante seu turno, e elas não contam para o número de ações rápidas ou completas que realizam. Elas também podem ser usadas para realizar ações mais de uma vez por turno."
    },
    {
      "id": "tg_range",
      "name": "Alcance ({VAL})",
      "short_rule": "Este sistema pode ser ativado a um <b>Alcance</b> de {VAL} espaços.",
      "description": "Este sistema pode ser ativado a um <b>Alcance</b> de {VAL} espaços."
    },
    {
      "id": "tg_modded",
      "name": "Modificada",
      "short_rule": "Esta arma foi equipada com uma modificação de arma.",
      "description": "Esta arma foi equipada com uma modificação de arma."
    },
    {
      "id": "tg_resistance",
      "name": "Resistência",
      "short_rule": "Reduz pela metade todo o <b>Dano</b> de uma fonte à qual você tem <b>Resistência</b>.",
      "description": "Reduz pela metade todo o <b>Dano</b> de uma fonte à qual você tem <b>Resistência</b>."
    },
    {
      "id": "tg_exotic",
      "name": "Equipamento Exótico",
      "short_rule": "Equipamento Exótico é uma tag geral para equipamentos que existem fora do sistema de licenciamento tradicional.",
      "description": "Equipamento Exótico é uma tag geral para equipamentos que existem fora do sistema de licenciamento tradicional."
    },
    {
      "id": "tg_recharge",
      "name": "Recarregar {VAL}+",
      "short_rule": "Uma vez que este sistema ou arma tenha sido usado, ele não pode ser usado novamente até ser recarregado. No início do turno deste PNJ, role 1d6: se o resultado for igual ou maior que {VAL}, o equipamento pode ser usado novamente. Apenas uma rolagem é necessária para cada PNJ, mesmo que um PNJ tenha múltiplos Sistemas ou armas com <b>Recarga</b>. Se este PNJ tiver dois Sistemas de <b>Recarga</b> com números-alvo de 4+ e 5+, uma rolagem de 5 <b>Recarregará</b> ambos.",
      "description": "Uma vez que este sistema ou arma tenha sido usado, ele não pode ser usado novamente até ser recarregado. No início do turno deste PNJ, role 1d6: se o resultado for igual ou maior que {VAL}, o equipamento pode ser usado novamente. Apenas uma rolagem é necessária para cada PNJ, mesmo que um PNJ tenha múltiplos Sistemas ou armas com <b>Recarga</b>. Se este PNJ tiver dois Sistemas de <b>Recarga</b> com números-alvo de 4+ e 5+, uma rolagem de 5 <b>Recarregará</b> ambos."
    },
    {
      "id": "tg_unlimited",
      "name": "ILimitado",
      "short_rule": "Esta habilidade pode ser usada qualquer número de vezes por rodada.",
      "description": "Esta habilidade pode ser usada qualquer número de vezes por rodada."
    },
    {
      "id": "tg_indestructible",
      "name": "Indestrutível",
      "short_rule": "Este equipamento não pode ser marcado como Destruído.",
      "description": "Este equipamento não pode ser marcado como Destruído."
    },
    {
      "id": "tg_invulnerable",
      "name": "Invulnerável",
      "short_rule": "Este equipamento é imune a todos os danos.",
      "description": "Este equipamento é imune a todos os danos."
    },
    {
      "id": "tg_invisible",
      "name": "Invisível",
      "short_rule": "Esta unidade é <b>Invisível</b>.",
      "description": "Esta unidade é <b>Invisível</b>."
    },
    {
      "id": "tg_resistall",
      "name": "Resistência (Tudo)",
      "short_rule": "Esta unidade tem <b>Resistência</b> a todos os tipos de <b>Dano</b>.",
      "description": "Esta unidade tem <b>Resistência</b> a todos os tipos de <b>Dano</b>."
    },
    {
      "id": "tg_set_max_uses",
      "name": "Definir Usos Máximos",
      "short_rule": "Permite ao jogador definir o número máximo de usos para este equipamento.",
      "description": "Permite ao jogador definir o número máximo de usos para este equipamento."
    },
    {
      "id": "tg_set_damage_type",
      "name": "Definir Tipo de Dano",
      "short_rule": "Permite ao jogador definir o tipo de <b>Dano</b> para este equipamento.",
      "description": "Permite ao jogador definir o tipo de <b>Dano</b> para este equipamento."
    },
    {
      "id": "tg_set_damage_value",
      "name": "Definir Valor do Dano",
      "short_rule": "Permite ao jogador definir o valor do <b>Dano</b> para este equipamento.",
      "description": "Permite ao jogador definir o valor do <b>Dano</b> para este equipamento."
    },
    {
      "id": "tg_no_cascade",
      "name": "Previne Cascata",
      "short_rule": "Proíbe um sistema de IA de ser reconhecido como um alvo válido para Cascata.",
      "description": "Proíbe um sistema de IA de ser reconhecido como um alvo válido para Cascata."
    },
    {
      "id": "tg_irreducible",
      "name": "Irredutível",
      "short_rule": "Proíbe a redução de dano de qualquer fonte (TAG OCULTA)",
      "description": "Proíbe a redução de dano de qualquer fonte (TAG OCULTA)"
    },
    {
      "id": "tg_npc_system",
      "name": "Sistema de NPC",
      "short_rule": "Esta Característica de NPC é categorizada como um SISTEMA",
      "description": "Esta Característica de NPC é categorizada como um SISTEMA"
    },
    {
      "id": "tg_npc_weapon",
      "name": "Arma de NPC",
      "short_rule": "Esta Característica de NPC é categorizada como uma ARMA",
      "description": "Esta Característica de NPC é categorizada como uma ARMA"
    },
    {
      "id": "tg_npc_trait",
      "name": "Traço de NPC",
      "short_rule": "Esta Característica de NPC é categorizada como um TRAÇO",
      "description": "Esta Característica de NPC é categorizada como um TRAÇO"
    },
    {
      "id": "tg_npc_reaction",
      "name": "Reação de NPC",
      "short_rule": "Esta Característica de NPC é categorizada como uma REAÇÃO",
      "description": "Esta Característica de NPC é categorizada como uma REAÇÃO"
    },
    {
      "id": "tg_npc_tech",
      "name": "Ação Tecnológica de NPC",
      "short_rule": "Esta Característica de NPC é categorizada como uma AÇÃO TECNOLÓGICA",
      "description": "Esta Característica de NPC é categorizada como uma AÇÃO TECNOLÓGICA"
    }
  ]
};
