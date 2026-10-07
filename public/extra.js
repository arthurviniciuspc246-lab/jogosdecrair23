// Conteúdo expandido do aparelho - Arquivo 27-061
const PHONE_MESSAGES = [["Helena","depois me liga, por favor",["18:03  Helena: mãe perguntou se você vai domingo","18:11  Marina: vou sim","20:49  Helena: Você está bem?","20:52  Marina: depois te ligo","22:31  chamada perdida"]],["Rafael","eu só quero devolver suas coisas",["10:14  Rafael: deixei a caixa com o porteiro","10:22  Marina: valeu","19:58  Rafael: não precisa virar isso numa guerra","20:12  Marina: hoje não","20:14  chamada 00:41"]],["Lívia","achei as fotos antigas",["12:09  Lívia: vc sumiu hein kkk","12:14  Marina: semana impossível","19:26  chamada 03:12","19:40  Lívia: achei as fotos antigas da confraternização","19:42  Marina: guarda aí. depois te explico"]],["Trabalho - Administrativo","segunda a gente resolve",["09:02  Paula: reunião de fornecedores 10:30","09:11  Marina: chego em 10","14:46  Diego: contrato 422 voltou com pendência","18:16  Marina: preciso fechar três contratos antes de segunda","18:24  Paula: 417 422 e 431?","18:25  Marina: esses mesmos"]],["B.A.","posso falar agora",["16:20  B.A.: recebeu?","16:33  Marina: recebi","21:58  B.A.: posso falar agora","22:01  Marina: rápido","22:04  chamada 01:18"]],["Grupo Família","almoço domingo que vem?",["13:12  Mãe: todo mundo chegou bem?","13:21  Helena: sim","14:08  Marina: sim ❤️","17:26  Tia Sônia: domingo que vem faço lasanha","17:29  Marina: eu levo sobremesa"]],["Academia Jardim","seu plano vence dia 22",["08:41  Academia: Olá Marina! Seu plano mensal vence dia 22/08.","08:44  Marina: obrigada","17:32  Academia: aula de funcional hoje às 18:30"]],["Renata","manda foto do vestido",["11:17  Renata: e o vestido verde???","11:18  Marina: ainda não chegou","15:42  Marina: chegou kkkkk","15:43  Marina: [foto]","15:45  Renata: PERFEITO"]],["Condomínio Acácias","manutenção do elevador",["07:55  Síndico: elevador social em manutenção até 11h","08:02  Morador 302: de novo?","08:10  Marina: obrigada pelo aviso","22:18  Portaria: encomenda registrada para apto 214"]],["Mãe","leva o remédio da sua avó",["08:03  Mãe: não esquece o remédio da vó amanhã","08:12  Marina: já comprei","12:31  Mãe: almoçou?","12:40  Marina: comendo agora ❤️"]],["Delivery","pedido a caminho",["19:01  Atendimento: seu pedido foi confirmado","19:36  Entregador: boa noite, estou na portaria","19:38  Marina: descendo","19:42  Atendimento: pedido entregue"]],["Diego - TI","vpn caiu de novo",["13:09  Diego: a vpn caiu pra vc?","13:10  Marina: sim","13:12  Diego: reinicia o token","13:16  Marina: voltou","23:02  Diego: vc mexeu no cadastro 431?"]],["Teresa Moura","precisamos conversar amanhã",["09:34  Teresa: revisei os lançamentos de julho","09:41  Marina: achou diferença?","09:45  Teresa: algumas. prefiro falar pessoalmente","21:49  chamada perdida","22:12  Teresa: precisamos conversar amanhã"]],["Grupo Pilates","terça 19h confirmado",["16:12  Instrutora: turma de terça confirmada 🙌","16:13  Carla: eu vou","16:18  Marina: eu também","16:20  Instrutora: lembrem da garrafinha"]],["Vizinha 212","sua planta ficou comigo",["09:15  Vizinha 212: o entregador deixou uma planta aqui kkk","09:19  Marina: socorro kkk pego quando chegar","18:02  Vizinha 212: tá na minha porta se eu sair"]],["Paula","café amanhã?",["11:05  Paula: sobrevivemos à sexta","11:06  Marina: por pouco","11:08  Paula: café amanhã cedo?","11:09  Marina: se eu acordar kkk"]],["Tia Sônia","receita do pão de queijo",["14:33  Tia Sônia: 500g polvilho, 2 ovos...","14:35  Marina: salva meu almoço ❤️"]],["João Portaria","encomenda chegou",["16:52  João: boa tarde, pacote pequeno pra você","16:54  Marina: pego na volta, obrigada"]],["Clube do Livro","encontro mudou para quinta",["10:00  Bianca: pessoal, quinta 19h no café do centro","10:08  Marina: pra mim melhor","10:15  André: fechado"]]];

const PHONE_EMAILS = [["Banco Aurora","Compra aprovada no cartão","Compra de R$ 84,70 aprovada às 12:18. Se não reconhece, acesse o aplicativo.","Principal"],["Academia Jardim","Renovação do seu plano","Seu plano mensal vence em 22/08. Renove pelo aplicativo ou na recepção.","Principal"],["Marina Valença","cópias","levar cópias 417/422/431. não deixar só na rede.","Arquivados"],["Teresa Moura","ajustes fornecedores","Ainda existem lançamentos aguardando documentação complementar. Podemos revisar na segunda.","Trabalho"],["Orbe - Sistema","alerta de acesso","Alteração cadastral registrada em 17/08/2025 23:18 para fornecedor vinculado ao contrato 431.","Trabalho"],["Loja Aurora","Oferta da semana","Cupom fictício de 10% para compras acima de R$ 100.","Promoções"],["Streaming","Sua lista do mês","Novidades adicionadas à sua lista. Veja os títulos que chegaram esta semana.","Promoções"],["iFood","Seu pedido foi entregue","Pedido #SA-18371 entregue às 19:42. Avalie sua experiência.","Principal"],["Farmácia Central","Nota fiscal eletrônica","Sua compra de 16/08 foi registrada. Total: R$ 47,30.","Principal"],["Correios Santa Aurora","Objeto em trânsito","Objeto fictício BR8721SA está a caminho da unidade local.","Principal"],["Renata Melo","fotos de sábado","amiga, te mandei as fotos em anexo. apaga aquela horrorosa pelo amor de deus kkk","Principal"],["Condomínio Acácias","Comunicado - elevador social","Manutenção preventiva programada para 17/08 das 08:00 às 11:00.","Principal"],["Clube de Vantagens","Parabéns! Você ganhou 300 pontos","Seus pontos promocionais já estão disponíveis.","Promoções"],["Orbe RH","Holerite disponível","O demonstrativo de pagamento de agosto já está disponível no portal interno.","Trabalho"],["Paula Amaral","Re: reunião de fornecedores","Confirmei sala 3 para segunda às 09:30. Levar contratos 417, 422 e 431.","Trabalho"],["Newsletter Casa Viva","5 ideias para organizar home office","Inspirações da semana para apartamentos pequenos.","Promoções"],["Dentista Dra. Elisa","Lembrete de consulta","Consulta agendada para 21/08 às 14:00.","Principal"],["Prefeitura Santa Aurora","Nota fiscal de serviços","NFS-e emitida para serviço administrativo. Documento fictício.","Principal"],["Orbe - Segurança","Tentativa de login bloqueada","Uma tentativa de acesso foi bloqueada às 02:11 em dispositivo não reconhecido.","Trabalho"],["Fotolab Online","Seu álbum está pronto","As 24 fotos do pedido #7721 estão disponíveis para download.","Principal"],["Mercado Ideal","Obrigado pela compra","Cupom fiscal digital de 17/08. Total R$ 126,84.","Principal"],["Lívia Moretti","aquela foto","achei outra versão sem ninguém cortado. te mando por aqui pq no whats perde qualidade","Principal"],["Crédito Fácil","Limite pré-aprovado de R$ 20.000","Mensagem promocional não solicitada.","Spam"],["Sorteio Premiado","Você foi selecionada!","Clique para resgatar um prêmio fictício. Mensagem classificada como spam.","Spam"],["Orbe Compras","Fornecedor 431 - documentação","Cadastro aguardando confirmação bancária e assinatura do responsável.","Trabalho"],["Diego TI","token vpn","Se travar de novo, use o token reserva na gaveta e me avise.","Trabalho"],["Mãe","receita da torta","Segue a receita que você pediu. Não coloca tanta canela igual da última vez kkk.","Principal"],["Hotel Serra Azul","Pesquisa de satisfação","Conte como foi sua estadia em fevereiro.","Promoções"],["Aplicativo de Transporte","Resumo da semana","Você realizou 4 viagens nesta semana. Total fictício: R$ 67,40.","Principal"],["Biblioteca Municipal","Reserva disponível","O livro reservado ficará disponível até 20/08.","Principal"],["Orbe Jurídico","Minuta contrato 422","Segue minuta revisada. Favor não circular fora do grupo antes da validação.","Trabalho"],["Clínica Vida","Resultado de exame disponível","Seu documento está disponível no portal do paciente.","Principal"],["Loja de Plantas Verdejar","Pedido confirmado","Vaso de jiboia e substrato - retirada em loja.","Principal"],["Financeiro Orbe","Pendência - centro de custo 08","Solicitamos justificativa para duas despesas sem anexo.","Trabalho"],["News Santa Aurora","Resumo da manhã","Trânsito, previsão do tempo e eventos culturais da cidade.","Promoções"],["Farmácia Central","Seu cupom de desconto","15% em dermocosméticos até sexta.","Promoções"],["Café Estação","Wi-fi e nota fiscal","Obrigado pela visita. Sua nota fiscal está em anexo.","Principal"],["Conta de Energia","Fatura disponível","Vencimento 24/08. Valor fictício R$ 186,44.","Principal"],["Orbe Eventos","Fotos da confraternização","Galeria interna disponível por 30 dias.","Trabalho"],["Loja de Roupas Lume","Seu pedido saiu para entrega","Pedido #LUM-44319 em rota de entrega.","Principal"],["Receitas da Semana","Macarrão em 20 minutos","Newsletter culinária semanal.","Promoções"],["Seguro Residencial","Atualização cadastral","Revise seus dados de contato no portal.","Principal"]];

const PHONE_NOTES = ["comprar café / filtro / detergente","ligar para mãe terça","417 / 422 / 431 - conferir alteração de cadastro","não usar email da empresa para cópia","lembrar senha das fotos: mesmo número do armário antigo","mercado: arroz, sabonete, tomate, água com gás","ideias sala: trocar luminária / mandar sofá lavar","presente da Helena - livro que ela mostrou","terça: pilates 19h","ligar dentista e tentar trocar horário","R. - devolver caixa / não discutir por mensagem","foto impressa -> guardar com documentos antigos","senha wi-fi mãe: girassol + número da casa (lembrar de trocar depois)","levar carregador portátil","planilha fornecedores: conferir dados bancários antes de fechar","não esquecer de responder Lívia sobre fotos","receita torta: 3 ovos / 2 xícaras / canela pouco","backup pessoal - pendrive azul","perguntar à Teresa sobre lançamentos de julho","domingo: almoço família 12:30","planta da sala precisa de vaso maior","biblioteca: devolver livro dia 20","comprar pilha para balança","marcar revisão carro setembro"];

const PHONE_CALLS = [["08:17","Mãe","2m41"],["09:03","Paula","1m08"],["10:52","Clínica Vida","3m22"],["11:34","Renata","6m09"],["12:16","Desconhecido","não atendida"],["13:07","Diego - TI","2m02"],["14:22","Academia Jardim","38s"],["15:08","Helena","4m12"],["16:44","Paula","1m57"],["17:31","Delivery","22s"],["18:06","Mãe","1m13"],["18:47","Rafael","não atendida"],["19:26","Lívia","3m12"],["20:14","Rafael","41s"],["20:52","Helena","não atendida"],["21:07","Portaria","18s"],["21:49","Teresa","perdida"],["22:04","B.A.","1m18"],["22:31","Helena","perdida"],["23:07","Desconhecido","12s"],["16/08 09:14","Dentista","1m02"],["16/08 11:47","Mãe","5m20"],["16/08 17:09","Lívia","2m30"],["16/08 20:02","Renata","8m14"],["15/08 08:40","Orbe RH","2m11"],["15/08 12:53","Paula","4m31"],["15/08 18:10","Academia Jardim","31s"],["14/08 19:22","Helena","6m44"],["13/08 10:16","Farmácia Central","56s"],["12/08 16:03","Teresa","3m49"]];

const PHONE_PHOTOS = ["IMG_0841 - almoço de família","IMG_0846 - sobremesa","IMG_0852 - Helena rindo","IMG_0860 - sala da mãe","IMG_0871 - gato da vizinha","IMG_0884 - planta nova","IMG_0890 - vista da varanda","IMG_0901 - café da manhã","IMG_0910 - escritório","IMG_0911 - mesa de reunião","IMG_0916 - confraternização Orbe","IMG_0922 - rua à noite","IMG_0928 - academia espelho","IMG_0932 - tênis novo","IMG_0944 - receita da torta","IMG_0950 - Renata aniversário","IMG_0961 - praia fevereiro","IMG_0970 - hotel serra","IMG_0981 - estacionamento","IMG_0988 - recibo fotografado","Captura - contrato 417","Captura - contrato 422","Captura - fornecedor 431","Captura - email Teresa","Captura - mapa Jardim Imperial","Captura - passagem ônibus","Foto antiga - viagem 2019","Foto antiga - faculdade","Screenshot - conversa Helena","Screenshot - conversa Rafael","Screenshot - delivery","Screenshot - previsão tempo","IMG_1001 - corredor prédio","IMG_1007 - elevador","IMG_1013 - caixa recebida","IMG_1021 - livro aberto","IMG_1026 - documentos mesa","IMG_1033 - pendrive azul","IMG_1040 - estacionamento noite","IMG_1048 - janela sala","IMG_1053 - pizza","IMG_1059 - ingresso cinema","IMG_1064 - livro biblioteca","IMG_1071 - cachorro da Renata"];

const PHONE_CALENDAR = [["12/08 09:30","reunião orçamento"],["12/08 18:45","academia"],["13/08 14:00","dentista - confirmar"],["13/08 20:00","jantar Renata"],["14/08 10:30","fornecedores"],["14/08 19:00","pilates"],["15/08 09:00","revisão de contratos"],["15/08 12:30","almoço com Paula"],["15/08 18:45","academia"],["16/08 10:00","mercado"],["16/08 16:20","farmácia"],["16/08 20:30","separar pasta azul"],["17/08 10:00","almoço família"],["17/08 17:00","revisar planilha"],["17/08 18:30","academia / talvez"],["17/08 20:15","R."],["17/08 22:00","conversa D / documentos"],["18/08 09:30","auditoria - sala 2"],["18/08 13:00","almoço mãe"],["18/08 16:00","retornar jurídico"],["19/08 19:00","pilates"],["20/08 08:30","reunião diretoria"],["21/08 14:00","dentista"],["22/08","renovar academia"],["24/08 12:30","almoço família"]];

function phoneSearch(c, placeholder, draw){
  const q=el('input','search'); q.placeholder=placeholder;
  const list=el('div'); c.append(q,list);
  q.oninput=()=>draw(list,norm(q.value)); draw(list,'');
}
showMessages=function(c){
  phoneSearch(c,'Buscar conversa ou mensagem',(list,term)=>{
    list.innerHTML='';
    PHONE_MESSAGES.filter(x=>!term||norm(x[0]+' '+x[1]+' '+x[2].join(' ')).includes(term)).forEach(x=>{
      const card=el('div','card'); card.innerHTML='<b>'+x[0]+'</b><div class="muted">'+x[1]+'</div>';
      card.onclick=()=>{c.innerHTML='<div class="card"><b>'+x[0]+'</b><div class="muted">conversa arquivada no aparelho</div></div>';x[2].forEach(m=>c.append(el('div','msg '+(m.includes('Marina:')?'me':'them'),m)))};
      list.append(card);
    });
  });
};
showEmails=function(c){
  const folders=el('div','card');
  folders.innerHTML='<b>Caixas</b><div class="muted">Principal · Trabalho · Promoções · Spam · Arquivados</div>';
  c.append(folders);
  phoneSearch(c,'Pesquisar remetente, assunto ou conteúdo',(list,term)=>{
    list.innerHTML='';
    PHONE_EMAILS.filter(x=>!term||norm(x.join(' ')).includes(term)).forEach((x,i)=>{
      const card=el('div','card'); card.innerHTML='<b>'+x[0]+'</b><div>'+x[1]+'</div><div class="muted">'+x[3]+' · '+x[2]+'</div>';
      if(i%9===0)card.innerHTML+='<div class="muted" style="margin-top:5px">★ marcada</div>';
      list.append(card);
    });
  });
};
showNotes=function(c){
  phoneSearch(c,'Buscar nas notas',(list,term)=>{
    list.innerHTML='';
    PHONE_NOTES.filter(x=>!term||norm(x).includes(term)).forEach((x,i)=>{const card=el('div','card');card.innerHTML='<b>Nota '+(i+1)+'</b><div>'+x+'</div>';list.append(card)});
  });
};
showCalls=function(c){
  phoneSearch(c,'Buscar contato ou horário',(list,term)=>{
    list.innerHTML='';
    PHONE_CALLS.filter(x=>!term||norm(x.join(' ')).includes(term)).forEach(x=>{const card=el('div','card');card.innerHTML='<b>'+x[1]+'</b><div class="muted">'+x[0]+' · '+x[2]+'</div>';list.append(card)});
  });
};
showPhotos=function(c){
  phoneSearch(c,'Buscar na galeria',(list,term)=>{
    list.innerHTML='';
    PHONE_PHOTOS.filter(x=>!term||norm(x).includes(term)).forEach((x,i)=>{const card=el('div','card');card.innerHTML='<div class="photo">'+(i%5===0?'▣':'▧')+'</div><b>'+x+'</b><div class="muted">'+(i<12?'17/08/2025':i<25?'16/08/2025':'arquivo anterior')+'</div>';list.append(card)});
  });
};
showCalendar=function(c){
  PHONE_CALENDAR.forEach(x=>{const card=el('div','card');card.innerHTML='<b>'+x[0]+'</b><div>'+x[1]+'</div>';c.append(card)});
};


// Galeria visual integrada ao caso
const REAL_GALLERY=[
 {title:'IMG_0841 - almoço de família',date:'17/08/2025 · 12:43',src:'assets/lock.webp'},
 {title:'IMG_0846 - planta nova da sala',date:'17/08/2025 · 15:12',src:'assets/home.webp'},
 {title:'IMG_0901 - café da manhã',date:'16/08/2025 · 09:27',src:'assets/cafe.webp'},
 {title:'IMG_0916 - confraternização Orbe',date:'15/08/2025 · 21:34',src:'assets/party.webp'},
 {title:'IMG_0928 - academia espelho',date:'15/08/2025 · 18:52',src:'assets/gym_hq.webp'},
 {title:'IMG_1026 - documentos mesa',date:'14/08/2025 · 16:08',src:'assets/contracts.webp'}
];

const GALLERY_CAPTURES=[
 {title:'Captura - contrato 417',date:'14/08/2025 · 16:10',type:'doc',lines:['CONTRATO 417','Revisar fornecedor','antes de segunda']},
 {title:'Captura - contrato 422',date:'14/08/2025 · 16:12',type:'doc',lines:['CONTRATO 422','Minuta revisada','Jurídico · pendente']},
 {title:'Captura - fornecedor 431',date:'17/08/2025 · 17:04',type:'doc',lines:['FORNECEDOR 431','Dados bancários','CONFERIR']},
 {title:'Screenshot - conversa Helena',date:'17/08/2025 · 20:53',type:'chat',lines:['Helena','Você está bem?','depois te ligo']},
 {title:'Screenshot - previsão do tempo',date:'17/08/2025 · 08:02',type:'weather',lines:['Santa Aurora','24°','Parcialmente nublado']},
 {title:'Captura - mapa Jardim Imperial',date:'17/08/2025 · 18:06',type:'map',lines:['Jardim Imperial','Rua das Acácias','rota salva']}
];

function galleryCapture(x){
 const d=el('div','');
 d.style.cssText='width:100%;aspect-ratio:1/1;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-size:12px;font-weight:700;line-height:1.55;overflow:hidden;';
 if(x.type==='chat')d.style.background='linear-gradient(145deg,#dff4df,#b8e5bd)';
 else if(x.type==='weather')d.style.background='linear-gradient(145deg,#6da8f4,#d5eaff)';
 else if(x.type==='map')d.style.background='linear-gradient(135deg,#dce7d6 25%,#f2f4ed 25%,#f2f4ed 50%,#dce7d6 50%,#dce7d6 75%,#f2f4ed 75%)';
 else d.style.background='linear-gradient(145deg,#faf5e9,#e9dcc2)';
 d.innerHTML=x.lines.map(v=>'<span>'+v+'</span>').join('');
 return d;
}

function openGalleryPhoto(c,p){
 const v=el('div','photo-viewer');
 const img=document.createElement('img');img.src=p.src;img.alt=p.title;
 const bar=el('div','viewerbar');
 const back=el('button','','‹ Voltar');back.onclick=()=>v.remove();
 const meta=el('div','viewertext');meta.innerHTML='<b>'+p.title+'</b><span class="muted" style="color:#aaa">'+p.date+'</span>';
 bar.append(back,meta);v.append(img,bar);c.parentElement.append(v);
}

showPhotos=function(c){
 const q=el('input','search');q.placeholder='Buscar na galeria';
 const grid=el('div','gallery-grid');c.append(q,grid);
 function draw(){
   const term=norm(q.value);grid.innerHTML='';
   REAL_GALLERY.filter(p=>!term||norm(p.title).includes(term)).forEach(p=>{
     const item=el('div','gallery-item'),img=document.createElement('img');
     img.src=p.src;img.alt=p.title;img.loading='lazy';
     item.append(img,el('b','',p.title),el('div','muted',p.date));
     item.onclick=()=>openGalleryPhoto(c,p);grid.append(item);
   });
   GALLERY_CAPTURES.filter(p=>!term||norm(p.title+' '+p.lines.join(' ')).includes(term)).forEach(p=>{
     const item=el('div','gallery-item');
     item.append(galleryCapture(p),el('b','',p.title),el('div','muted',p.date));
     grid.append(item);
   });
 }
 q.oninput=draw;draw();
};

// Reaplica a home com a lista atual de apps quando esta camada termina de carregar.
if(state.unlocked)home();
