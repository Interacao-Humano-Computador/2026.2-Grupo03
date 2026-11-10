// Plugin: monta a versão para computador (1280 px) do protótipo de alta fidelidade
// do agendamento da prova teórica, incluindo as notificações no computador, e liga
// todas as interações (celular + computador). Reaproveita os componentes, as cores
// e os estilos de texto que já estão no arquivo.
// Pode ser rodado de novo: apaga as seções "Computador · …" antes de recriar.

const SEP = ' · ';
let P, TS, COMP;

// ---------- utilidades ----------
const HEX = { primaria: '#005A9C', texto: '#1F2937', 'texto-secundario': '#4B5563', sucesso: '#166534', erro: '#B91C1C', atencao: '#92400E', 'texto-invertido': '#FFFFFF', borda: '#6B7280' };
const ICONS = {
  'check-circle': '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
  'alerta': '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  'relogio': '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-up': '<path d="m18 15-6-6-6 6"/>',
  'seta-esquerda': '<path d="M19 12H5M12 19l-7-7 7-7"/>',
  'busca': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'documento': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  'cartao': '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  'calendario': '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  'local': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  'usuario': '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'fechar': '<path d="M18 6 6 18M6 6l12 12"/>',
  'pix': '<path d="m12 2.5 4 4-4 4-4-4zM12 13.5l4 4-4 4-4-4zM2.5 12l4-4 4 4-4 4zM13.5 12l4-4 4 4-4 4z"/>',
  'sino': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>'
};
function I(name, color = 'texto', size = 24, sw = 2) {
  const svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${HEX[color]}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">${ICONS[name]}</svg>`;
  const n = figma.createNodeFromSvg(svg); n.name = 'ícone/' + name; n.resize(size, size); n.fills = []; return n;
}
function AL(dir) { const f = figma.createFrame(); f.layoutMode = dir; f.primaryAxisSizingMode = 'AUTO'; f.counterAxisSizingMode = 'AUTO'; f.fills = []; f.clipsContent = false; return f; }
async function T(parent, chars, style = 'Texto/Corpo', color = 'texto', fill = false) {
  const t = figma.createText(); t.fontName = { family: 'Arimo', style: 'Regular' }; t.characters = chars;
  await t.setTextStyleIdAsync(TS[style].id); t.fills = [P(color)]; parent.appendChild(t);
  if (fill) { t.layoutSizingHorizontal = 'FILL'; t.textAutoResize = 'HEIGHT'; }
  return t;
}
function setP(inst, name, value) {
  const k = Object.keys(inst.componentProperties).find(k => k.split('#')[0] === name);
  if (!k) throw new Error('Propriedade "' + name + '" não encontrada em ' + inst.name);
  inst.setProperties({ [k]: value });
}
function inst(key, variant) {
  const n = COMP[key];
  if (n.type === 'COMPONENT_SET') { const v = n.children.find(c => c.name === variant); if (!v) throw new Error('Variante ' + variant + ' em ' + n.name); return v.createInstance(); }
  return n.createInstance();
}
function put(parent, node, fill = true) { parent.appendChild(node); if (fill) node.layoutSizingHorizontal = 'FILL'; return node; }
function group(parent, gap = 8, dir = 'VERTICAL', name = 'Grupo') { const g = AL(dir); g.name = name; g.itemSpacing = gap; parent.appendChild(g); g.layoutSizingHorizontal = 'FILL'; return g; }
function col(parent, width, gap = 24, name = 'Coluna') {
  const c = AL('VERTICAL'); c.name = name; c.itemSpacing = gap; parent.appendChild(c);
  if (width) { c.resize(width, 10); c.layoutSizingHorizontal = 'FIXED'; c.layoutSizingVertical = 'HUG'; } else c.layoutSizingHorizontal = 'FILL';
  return c;
}
function cols(parent, gap = 32) { const r = group(parent, gap, 'HORIZONTAL', 'Colunas'); r.counterAxisAlignItems = 'MIN'; return r; }
function card(parent, gap = 12, name = 'Cartão', fill = true) {
  const c = AL('VERTICAL'); c.name = name; c.itemSpacing = gap; c.paddingLeft = c.paddingRight = c.paddingTop = c.paddingBottom = 20; c.cornerRadius = 8;
  c.fills = [P('superficie')]; c.strokes = [P('divisoria')]; c.strokeWeight = 1; c.strokeAlign = 'INSIDE'; parent.appendChild(c); if (fill) c.layoutSizingHorizontal = 'FILL'; return c;
}
function button(parent, tipo, label, link, fill = true) {
  const b = inst('btn', 'Tipo=' + tipo); parent.appendChild(b); if (fill) b.layoutSizingHorizontal = 'FILL';
  setP(b, 'Rótulo', label); b.name = link ? '⇢ ' + link : 'Botão: ' + label;
  const t = b.findOne(n => n.type === 'TEXT'); if (t && t.characters.length) t.setRangeTextDecoration(0, t.characters.length, tipo === 'Link' ? 'UNDERLINE' : 'NONE');
  return b;
}
function fixedButton(parent, tipo, label, link, w = 320) { const b = button(parent, tipo, label, link, false); b.resize(w, b.height); return b; }
function alerta(parent, tipo, titulo, msg) { const a = inst('alerta', 'Tipo=' + tipo); put(parent, a); if (titulo) setP(a, 'Título', titulo); else setP(a, 'Mostrar título', false); setP(a, 'Mensagem', msg); return a; }
async function iconRow(parent, icon, text, color = 'texto-secundario', style = 'Texto/Corpo') {
  const r = group(parent, 12, 'HORIZONTAL', 'Linha: ' + text); r.counterAxisAlignItems = 'CENTER';
  r.appendChild(I(icon, color, 20)); await T(r, text, style, 'texto', true); return r;
}
function hotspot(f, link, x, y, w = 44, h = 44) {
  const r = figma.createRectangle(); r.name = '⇢ ' + link + ' (atalho do avaliador)'; r.resize(w, h);
  r.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0 }]; f.appendChild(r); r.layoutPositioning = 'ABSOLUTE'; r.x = x; r.y = y; return r;
}
async function backLink(parent, text, link) {
  const b = AL('HORIZONTAL'); b.name = '⇢ ' + link; b.itemSpacing = 6; b.counterAxisAlignItems = 'CENTER'; b.minHeight = 44; parent.appendChild(b);
  b.appendChild(I('seta-esquerda', 'primaria', 20)); await T(b, text, 'Texto/Botão', 'primaria'); return b;
}

// ---------- estrutura das telas de computador ----------
function screen(code, title) {
  const f = AL('VERTICAL'); f.name = code + SEP + title; f.resize(1280, 800);
  f.counterAxisSizingMode = 'FIXED'; f.primaryAxisSizingMode = 'AUTO'; f.minHeight = 800; f.fills = [P('fundo')]; f.clipsContent = true; return f;
}
async function header(f) {
  const h = AL('HORIZONTAL'); h.name = 'Cabeçalho do portal (computador)'; h.fills = [P('primaria')]; put(f, h);
  h.primaryAxisAlignItems = 'SPACE_BETWEEN'; h.counterAxisAlignItems = 'CENTER'; h.paddingLeft = h.paddingRight = 40; h.minHeight = 64;
  const l = AL('HORIZONTAL'); l.itemSpacing = 40; l.counterAxisAlignItems = 'CENTER'; h.appendChild(l);
  await T(l, 'Detran-DF', 'Título/Seção', 'texto-invertido');
  const nav = AL('HORIZONTAL'); nav.name = 'Navegação'; nav.itemSpacing = 8; nav.counterAxisAlignItems = 'CENTER'; l.appendChild(nav);
  for (const [txt, link] of [['Serviços', 'D0'], ['Habilitação', 'D1'], ['Veículos', 'TOAST'], ['Meus agendamentos', 'D6']]) {
    const it = AL('HORIZONTAL'); it.name = '⇢ ' + link; it.paddingLeft = it.paddingRight = 12; it.minHeight = 44; it.counterAxisAlignItems = 'CENTER'; nav.appendChild(it);
    await T(it, txt, 'Texto/Destaque', 'texto-invertido');
  }
  const u = AL('HORIZONTAL'); u.name = 'Usuário'; u.itemSpacing = 8; u.counterAxisAlignItems = 'CENTER'; h.appendChild(u);
  u.appendChild(I('usuario', 'texto-invertido', 20)); await T(u, 'Camila · conta gov.br', 'Texto/Ajuda destaque', 'texto-invertido');
  return h;
}
const PASSOS = { 1: 'Confira os requisitos', 2: 'Unidade, data e horário', 3: 'Reserva e pagamento' };
async function steps(f, passo, back) {
  const bar = AL('VERTICAL'); bar.name = 'Barra de passos'; bar.fills = [P('superficie')]; put(f, bar);
  bar.strokes = [P('divisoria')]; bar.strokeTopWeight = 0; bar.strokeLeftWeight = 0; bar.strokeRightWeight = 0; bar.strokeBottomWeight = 1;
  bar.paddingLeft = bar.paddingRight = 40; bar.paddingTop = 8; bar.paddingBottom = 16; bar.itemSpacing = 8;
  const row = group(bar, 16, 'HORIZONTAL', 'Linha'); row.primaryAxisAlignItems = 'SPACE_BETWEEN'; row.counterAxisAlignItems = 'CENTER';
  await backLink(row, 'Voltar', back);
  await T(row, `Passo ${passo} de 3 · ${PASSOS[passo]}`, 'Texto/Ajuda destaque', 'texto-secundario');
  const pr = group(bar, 6, 'HORIZONTAL', 'Progresso');
  for (let i = 1; i <= 3; i++) { const r = figma.createRectangle(); r.resize(100, 6); r.cornerRadius = 3; r.fills = [P(i <= passo ? 'primaria' : 'divisoria')]; pr.appendChild(r); r.layoutSizingHorizontal = 'FILL'; }
}
function page(f, gap = 24) { const w = AL('VERTICAL'); w.name = 'Página'; w.itemSpacing = gap; w.paddingLeft = w.paddingRight = 40; w.paddingTop = 32; w.paddingBottom = 48; put(f, w); return w; }
async function title(parent, h1, sub, subColor = 'texto-secundario') {
  const g = group(parent, 6, 'VERTICAL', 'Título'); await T(g, h1, 'Título/Página computador', 'texto', true);
  if (sub) await T(g, sub, 'Texto/Corpo', subColor, true); return g;
}
function section(name, x, y, frames, gap = 120) {
  const s = figma.createSection(); s.name = name; figma.currentPage.appendChild(s); s.x = x; s.y = y;
  let cx = 80, maxH = 0; for (const f of frames) { s.appendChild(f); f.x = cx; f.y = 120; cx += f.width + gap; maxH = Math.max(maxH, f.height); }
  s.resizeWithoutConstraints(cx, maxH + 200); return s;
}

// ---------- telas ----------
async function avaliador() {
  const f = screen('DA0', 'Avaliador – iniciar tarefas (computador)'); f.fills = [P('superficie')];
  const p = page(f, 16);
  await T(p, 'PÁGINA DO AVALIADOR — não mostrar ao participante', 'Texto/Ajuda destaque', 'erro', true);
  await title(p, 'Teste de usabilidade · versão para computador', 'Cada botão abre o estado inicial de uma tarefa (Tabela 11 da especificação).');
  const c = col(p, 480, 12, 'Botões');
  button(c, 'Primário', 'Iniciar T1 · Agendar a prova', 'D0');
  button(c, 'Primário', 'Iniciar T2 · Data sem vagas', 'D3T2');
  button(c, 'Primário', 'Iniciar T3 · Prova confirmada', 'DNF');
  button(c, 'Primário', 'Iniciar T4 · Reserva expirada', 'D4X');
  button(c, 'Secundário', 'Mostrar aviso D · 1 hora antes de expirar', 'DND');
  button(c, 'Link', 'Ir para a versão de celular', 'A0');
  const n = card(p, 8, 'Atalhos escondidos', false); n.resize(640, 10); n.layoutSizingVertical = 'HUG';
  await T(n, 'Atalhos escondidos na Tela 4 (44 × 44 px, invisíveis)', 'Texto/Destaque', 'texto', true);
  await T(n, '• Canto superior direito, abaixo da barra de passos: aviso D (1 hora antes).\n• Canto inferior esquerdo: simula PIX compensado → notificação F.\n• Canto inferior direito: simula a expiração → diálogo E.', 'Texto/Ajuda', 'texto-secundario', true);
  return f;
}
async function searchField(parent, value, focused) {
  const g = group(parent, 6, 'VERTICAL', 'Campo: Buscar serviço');
  await T(g, 'Buscar serviço', 'Texto/Destaque', 'texto');
  const box = group(g, 8, 'HORIZONTAL', focused ? 'Busca (digitando)' : '⇢ D0S'); box.counterAxisAlignItems = 'CENTER'; box.paddingLeft = box.paddingRight = 12; box.minHeight = 48; box.cornerRadius = 8;
  box.fills = [P('superficie')]; box.strokes = [P(focused ? 'foco' : 'borda')]; box.strokeWeight = focused ? 3 : 1; box.strokeAlign = 'INSIDE';
  box.appendChild(I('busca', 'texto-secundario', 20)); await T(box, value || 'Ex.: prova teórica', 'Texto/Corpo', value ? 'texto' : 'texto-secundario', true);
  return g;
}
async function listRow(parent, text, link, icon) {
  const r = group(parent, 12, 'HORIZONTAL', '⇢ ' + link); r.counterAxisAlignItems = 'CENTER'; r.paddingTop = r.paddingBottom = 14; r.paddingLeft = 20; r.paddingRight = 16; r.minHeight = 56;
  r.fills = [P('superficie')]; r.strokes = [P('divisoria')]; r.strokeTopWeight = 0; r.strokeLeftWeight = 0; r.strokeRightWeight = 0; r.strokeBottomWeight = 1;
  if (icon) r.appendChild(I(icon, 'primaria', 24));
  await T(r, text, 'Texto/Destaque', 'primaria', true); r.appendChild(I('chevron-right', 'texto-secundario', 20)); return r;
}
function listCard(parent, name) { const c = card(parent, 0, name); c.paddingLeft = c.paddingRight = c.paddingTop = c.paddingBottom = 0; c.clipsContent = true; return c; }

async function tela0(code, titleTxt, buscando) {
  const f = screen(code, titleTxt); await header(f);
  const p = page(f, 24);
  await title(p, 'Olá, Camila', 'Você entrou com a conta gov.br.');
  const sc = col(p, 640, 8, 'Busca');
  await searchField(sc, buscando ? 'prova teó' : '', buscando);
  if (buscando) {
    const sug = listCard(sc, 'Sugestões');
    const h = group(sug, 0, 'HORIZONTAL', 'Cabeçalho'); h.paddingLeft = 20; h.paddingTop = 10; await T(h, '1 serviço encontrado', 'Texto/Ajuda', 'texto-secundario');
    await listRow(sug, 'Agendar prova teórica (1ª habilitação)', 'D1', 'calendario');
    return f;
  }
  const r = cols(p, 32);
  const left = col(r, 480, 16, 'Prova teórica');
  const pv = card(left, 16, 'Serviço: Prova teórica');
  const ph = group(pv, 12, 'HORIZONTAL', 'Título do serviço'); ph.counterAxisAlignItems = 'CENTER'; ph.appendChild(I('documento', 'primaria', 32));
  const pt = group(ph, 2); await T(pt, 'Prova teórica', 'Título/Subtítulo', 'texto', true); await T(pt, '1ª habilitação · CNH', 'Texto/Ajuda', 'texto-secundario', true);
  const bt = group(pv, 12, 'HORIZONTAL', 'Ações'); button(bt, 'Primário', 'Agendar prova', 'D1'); button(bt, 'Secundário', 'Consultar prova', 'D6');
  const right = col(r, null, 8, 'Mais acessados');
  await T(right, 'Mais acessados', 'Título/Subtítulo', 'texto', true);
  const lst = listCard(right, 'Lista');
  await listRow(lst, 'Agendar prova teórica (1ª habilitação)', 'D1', 'calendario');
  await listRow(lst, 'Consultar pontos da CNH', 'TOAST', 'cartao');
  await listRow(lst, 'Licenciamento do veículo', 'TOAST', 'documento');
  return f;
}

async function tela1() {
  const f = screen('D1', 'Tela 1 – Habilitação · 1ª CNH (computador)'); await header(f);
  const p = page(f, 24);
  await backLink(p, 'Serviços', 'D0');
  await title(p, 'Habilitação · 1ª CNH', 'Você entrou com a conta gov.br.');
  const r = cols(p, 32);
  const left = col(r, 640, 8, 'Etapas do seu processo');
  await T(left, 'Etapas do seu processo', 'Título/Subtítulo', 'texto', true);
  await T(left, 'Clique numa etapa para ver os detalhes.', 'Texto/Ajuda', 'texto-secundario', true);
  const lst = listCard(left, 'Lista de etapas');
  const etapas = [
    ['Concluída', '1', 'Abertura do processo', 'Cadastro feito no Detran-DF com a conta gov.br.'],
    ['Concluída', '2', 'Exames e biometria', 'Exame médico, avaliação psicológica e coleta da biometria.'],
    ['Concluída', '3', 'Curso teórico', 'Curso de legislação feito no centro de formação de condutores.'],
    ['Atual', '4', 'Prova teórica', 'Prova sobre legislação de trânsito, feita numa unidade do Detran-DF. É preciso agendar e pagar a taxa.'],
    ['Futura', '5', 'Aulas práticas', 'Aulas de direção no centro de formação de condutores.'],
    ['Futura', '6', 'Prova prática', 'Prova de direção, agendada depois das aulas práticas.']
  ];
  for (const [est, n, nome, det] of etapas) { const e = inst('etapa', `Estado=${est}, Aberta=Não`); put(lst, e); setP(e, 'Etapa', nome); setP(e, 'Número', n); setP(e, 'Detalhe', det); e.name = 'Etapa ' + n + ': ' + nome; }
  const right = col(r, null, 16, 'Próximo passo');
  const c = card(right, 16, 'Próximo passo');
  alerta(c, 'Informação', 'Próximo passo: agendar a prova teórica', 'Antes, confira se está tudo pronto.');
  button(c, 'Primário', 'Agendar prova teórica', 'D2');
  return f;
}

async function tela2(code, titleTxt, pend) {
  const f = screen(code, titleTxt); await header(f); await steps(f, 1, 'D1');
  const p = page(f, 24);
  await title(p, 'Antes de agendar', 'Confira se você já pode marcar a prova teórica.');
  const r = cols(p, 32);
  const left = col(r, 640, 12, 'Pré-requisitos');
  for (const [item, ok] of [['Curso teórico concluído', true], ['Biometria coletada', !pend], ['Exames médico e psicológico', true], ['Conta gov.br', true]]) {
    const q = inst('req', 'Estado=' + (ok ? 'OK' : 'Pendente')); put(left, q); setP(q, 'Item', item); q.name = 'Pré-requisito: ' + item;
  }
  if (pend) { alerta(left, 'Erro', 'Falta 1 item: biometria', 'Para que serve: identificar você no dia da prova.'); button(left, 'Link', 'Agendar a coleta da biometria', 'TOAST', false); }
  const right = col(r, null, 16, 'Lateral');
  const lv = card(right, 8, 'O que levar no dia'); await T(lv, 'O que levar no dia', 'Texto/Destaque', 'texto', true);
  await T(lv, '• Documento oficial com foto\n• Comprovante do agendamento', 'Texto/Corpo', 'texto', true);
  const ac = card(right, 12, 'Ação');
  if (!pend) { alerta(ac, 'Sucesso', null, 'Tudo certo! Você pode escolher a data.'); button(ac, 'Primário', 'Escolher unidade, data e horário', 'D3A'); }
  else { button(ac, 'Indisponível', 'Escolher unidade, data e horário', null); await T(ac, 'Indisponível até a biometria ser coletada.', 'Texto/Ajuda', 'texto-secundario', true); }
  return f;
}

const NOMES_DIA = { 16: 'segunda-feira, 16/11/2026', 18: 'quarta-feira, 18/11/2026' };
const CURTO = { 16: 'seg, 16/11', 18: 'qua, 18/11' };
async function calendario(parent, o) {
  const c = card(parent, 4, 'Calendário'); c.paddingLeft = c.paddingRight = 16; c.paddingTop = 8; c.paddingBottom = 16;
  const nav = group(c, 0, 'HORIZONTAL', 'Navegação do mês'); nav.primaryAxisAlignItems = 'SPACE_BETWEEN'; nav.counterAxisAlignItems = 'CENTER';
  const mk = (ic, name, color) => { const b = AL('HORIZONTAL'); b.name = name; b.resize(44, 44); b.primaryAxisSizingMode = 'FIXED'; b.counterAxisSizingMode = 'FIXED'; b.primaryAxisAlignItems = 'CENTER'; b.counterAxisAlignItems = 'CENTER'; b.appendChild(I(ic, color, 24)); return b; };
  nav.appendChild(mk('chevron-left', 'Mês anterior (indisponível)', 'borda'));
  await T(nav, 'Novembro de 2026', 'Texto/Destaque', 'texto');
  nav.appendChild(mk('chevron-right', '⇢ TOAST', 'primaria'));
  const wk = group(c, 0, 'HORIZONTAL', 'Dias da semana'); wk.primaryAxisAlignItems = 'SPACE_BETWEEN';
  for (const d of ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']) { const t = await T(wk, d, 'Texto/Ajuda destaque', 'texto-secundario'); t.textAutoResize = 'NONE'; t.resize(44, 20); t.textAlignHorizontal = 'CENTER'; }
  for (let w = 0; w < 5; w++) {
    const row = group(c, 0, 'HORIZONTAL', 'Semana ' + (w + 1)); row.primaryAxisAlignItems = 'SPACE_BETWEEN';
    for (let i = 0; i < 7; i++) {
      const d = w * 7 + i + 1; let est;
      if (d > 30) est = 'Vazio'; else if (d <= 11) est = 'Passado';
      else if (i === 0 || i === 6 || [12, 13, 17].includes(d) || (o.semVagas16 && d === 16)) est = 'Sem vagas'; else est = 'Com vagas';
      if (d === o.sel) est = 'Selecionado';
      const di = inst('dia', 'Estado=' + est); row.appendChild(di); setP(di, 'Dia', d > 30 ? ' ' : String(d));
      const t = di.findOne(n => n.type === 'TEXT'); if (t && t.characters.length) t.setRangeTextDecoration(0, t.characters.length, est === 'Sem vagas' ? 'STRIKETHROUGH' : 'NONE');
      di.name = (o.links && o.links[d]) ? '⇢ ' + o.links[d] : `Dia ${d} (${est.toLowerCase()})`;
    }
  }
  const lg = group(c, 16, 'HORIZONTAL', 'Legenda'); lg.paddingLeft = 8; lg.paddingTop = 8; lg.counterAxisAlignItems = 'CENTER';
  const l1 = AL('HORIZONTAL'); l1.itemSpacing = 6; l1.counterAxisAlignItems = 'CENTER'; lg.appendChild(l1);
  const dot = figma.createEllipse(); dot.resize(6, 6); dot.fills = [P('primaria')]; l1.appendChild(dot); await T(l1, 'há vagas', 'Texto/Ajuda', 'texto-secundario');
  const l2 = AL('HORIZONTAL'); l2.itemSpacing = 6; l2.counterAxisAlignItems = 'CENTER'; lg.appendChild(l2);
  const rs = await T(l2, '17', 'Texto/Ajuda', 'texto-secundario'); rs.setRangeTextDecoration(0, 2, 'STRIKETHROUGH'); await T(l2, 'sem vagas', 'Texto/Ajuda', 'texto-secundario');
  const l3 = AL('HORIZONTAL'); l3.itemSpacing = 6; l3.counterAxisAlignItems = 'CENTER'; lg.appendChild(l3);
  const sd = figma.createEllipse(); sd.resize(12, 12); sd.fills = [P('primaria')]; l3.appendChild(sd); await T(l3, 'escolhida', 'Texto/Ajuda', 'texto-secundario');
  return c;
}
async function unidade(parent, aberta) {
  const g = group(parent, 6, 'VERTICAL', 'Campo: Unidade');
  await T(g, 'Unidade', 'Texto/Destaque', 'texto');
  const box = group(g, 8, 'HORIZONTAL', aberta ? 'Seletor de unidade (aberto)' : '⇢ D3U'); box.counterAxisAlignItems = 'CENTER'; box.paddingLeft = 12; box.paddingRight = 8; box.minHeight = 48; box.cornerRadius = 8;
  box.fills = [P('superficie')]; box.strokes = [P(aberta ? 'foco' : 'borda')]; box.strokeWeight = aberta ? 3 : 1; box.strokeAlign = 'INSIDE';
  box.appendChild(I('local', 'texto-secundario', 20)); await T(box, 'Taguatinga', 'Texto/Corpo', 'texto', true); box.appendChild(I(aberta ? 'chevron-up' : 'chevron-down', 'texto', 24));
  if (aberta) {
    const lst = listCard(g, 'Lista de unidades');
    lst.effects = [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.15 }, offset: { x: 0, y: 4 }, radius: 12, spread: 0, visible: true, blendMode: 'NORMAL' }];
    for (const [u, dt, sel] of [['Taguatinga', '16/11', true], ['Asa Norte (sede)', '19/11', false], ['Ceilândia', '20/11', false], ['Gama', '23/11', false], ['Sobradinho', '24/11', false]]) {
      const r = group(lst, 12, 'HORIZONTAL', sel ? '⇢ BACK' : '⇢ TOAST'); r.counterAxisAlignItems = 'CENTER'; r.paddingLeft = 16; r.paddingRight = 12; r.paddingTop = r.paddingBottom = 10; r.minHeight = 56;
      if (sel) r.fills = [P('primaria-clara')];
      r.strokes = [P('divisoria')]; r.strokeTopWeight = 0; r.strokeLeftWeight = 0; r.strokeRightWeight = 0; r.strokeBottomWeight = 1;
      const c = group(r, 2, 'VERTICAL', 'Texto'); await T(c, u, 'Texto/Destaque', 'texto', true); await T(c, 'vagas a partir de ' + dt, 'Texto/Ajuda', 'texto-secundario', true);
      if (sel) r.appendChild(I('check', 'primaria', 20));
    }
  }
  return g;
}
async function tela3(code, titleTxt, o) {
  const f = screen(code, titleTxt); await header(f); await steps(f, 2, 'D2');
  const p = page(f, 24);
  await title(p, 'Escolha onde e quando', null);
  const r = cols(p, 32);
  const left = col(r, 440, 24, 'Unidade e atalho');
  await unidade(left, o.unidades);
  if (!o.sel) {
    const at = card(left, 12, 'Atalho: data livre mais próxima'); at.fills = [P('primaria-clara')]; at.strokes = [P('primaria')];
    const h = group(at, 12, 'HORIZONTAL', 'Data'); h.counterAxisAlignItems = 'CENTER'; h.appendChild(I('calendario', 'primaria', 28));
    const c = group(h, 2); await T(c, 'Data livre mais próxima', 'Texto/Ajuda destaque', 'texto-secundario', true); await T(c, NOMES_DIA[o.prox], 'Título/Subtítulo', 'texto', true);
    button(at, 'Primário', 'Escolher ' + CURTO[o.prox], o.prox === 16 ? 'D3B' : 'D3D');
  }
  const right = col(r, null, 24, 'Calendário e horários');
  if (!o.sel) await T(right, 'Ou escolha outro dia no calendário:', 'Texto/Corpo', 'texto-secundario', true);
  await calendario(right, o);
  if (o.aviso) {
    const av = group(right, 8, 'VERTICAL', 'Aviso C: data sem vagas');
    alerta(av, 'Erro', 'Não há vagas em 16/11 nesta unidade', 'Próxima data livre em Taguatinga: quarta-feira, 18/11.');
    const bt = group(av, 12, 'HORIZONTAL', 'Ações do aviso'); bt.layoutSizingHorizontal = 'HUG';
    fixedButton(bt, 'Primário', 'Ver 18/11', 'D3D', 200); fixedButton(bt, 'Secundário', 'Trocar unidade', 'D3U', 200);
  }
  if (o.sel) {
    const hr = group(right, 8, 'VERTICAL', 'Horários');
    await T(hr, 'Horários em ' + CURTO[o.sel], 'Título/Subtítulo', 'texto', true);
    await T(hr, 'Restam poucas vagas neste dia. Clique num horário para escolher.', 'Texto/Ajuda', 'texto-secundario', true);
    const row = group(hr, 8, 'HORIZONTAL', 'Lista de horários');
    for (const h of ['9h', '14h']) { const ch = inst('hora', 'Estado=' + (o.hora === h ? 'Selecionado' : 'Disponível')); row.appendChild(ch); setP(ch, 'Hora', h); ch.name = (h === '9h' && !o.hora) ? '⇢ ' + o.horaLink : 'Horário ' + h; }
  }
  const ac = group(right, 8, 'VERTICAL', 'Ação');
  if (o.hora) { await T(ac, `Você escolheu: Taguatinga · ${CURTO[o.sel]} · ${o.hora}`, 'Texto/Ajuda destaque', 'texto', true); fixedButton(ac, 'Primário', 'Reservar horário', o.reservar); }
  else { fixedButton(ac, 'Indisponível', 'Reservar horário', null); await T(ac, o.sel ? 'Escolha um horário para continuar.' : 'Escolha uma data e um horário para continuar.', 'Texto/Ajuda', 'texto-secundario', true); }
  return f;
}

const PIX = '00020126580014BR.GOV.BCB.PIX0136exemplo-prototipo-detran-df-0000-0000 5204000053039865802BR5925DETRAN DF PROTOTIPO6008BRASILIA6304ABCD';
async function tela4(code, titleTxt, o) {
  const f = screen(code, titleTxt); await header(f); await steps(f, 3, o.back);
  const p = page(f, 24);
  await title(p, 'Horário reservado', null);
  alerta(p, 'Atenção', 'Sua vaga fica guardada por 24 horas', 'Pague até quinta-feira, 12/11/2026, às 14h30. Faltam 23 h 58 min.');
  const r = cols(p, 32);
  const left = col(r, null, 24, 'Resumo e explicação');
  const rs = card(left, 12, 'Resumo'); await T(rs, 'Resumo', 'Título/Subtítulo', 'texto', true);
  await iconRow(rs, 'documento', 'Prova teórica (1ª habilitação)'); await iconRow(rs, 'local', 'Unidade Taguatinga');
  await iconRow(rs, 'calendario', NOMES_DIA[o.dia]); await iconRow(rs, 'relogio', '9h');
  alerta(left, 'Informação', 'Como funciona', 'Quando o PIX compensar, a prova é confirmada sozinha. Avisaremos 1 hora antes de a reserva expirar. Se o PIX não compensar no prazo, o horário é liberado e você escolhe outro.');
  const right = col(r, 520, 16, 'Pagamento');
  const pg = card(right, 12, 'Pagamento por PIX');
  const ph = group(pg, 10, 'HORIZONTAL', 'Título'); ph.counterAxisAlignItems = 'CENTER'; ph.appendChild(I('pix', 'primaria', 24)); await T(ph, 'Pague a taxa por PIX', 'Título/Subtítulo', 'texto', true);
  const vl = group(pg, 8, 'HORIZONTAL', 'Valor'); vl.primaryAxisAlignItems = 'SPACE_BETWEEN'; await T(vl, 'Valor da taxa', 'Texto/Corpo', 'texto-secundario'); await T(vl, 'R$ 00,00', 'Texto/Destaque', 'texto');
  await T(pg, 'Código PIX copia e cola', 'Texto/Ajuda destaque', 'texto-secundario', true);
  const cb = group(pg, 0, 'VERTICAL', 'Código PIX'); cb.paddingLeft = cb.paddingRight = cb.paddingTop = cb.paddingBottom = 12; cb.cornerRadius = 8; cb.fills = [P('fundo')]; cb.strokes = [P('divisoria')]; cb.strokeWeight = 1;
  await T(cb, PIX, 'Texto/Ajuda', 'texto', true);
  if (o.copiado) { button(pg, 'Secundário', 'Código copiado ✓', null); await T(pg, 'Cole o código no app do seu banco para pagar.', 'Texto/Ajuda', 'sucesso', true); }
  else button(pg, 'Primário', 'Copiar código PIX', o.copiar);
  if (o.hotspots) { hotspot(f, 'DND', 1236, 140); hotspot(f, 'DNF', 0, f.height - 44); hotspot(f, 'D4X', 1236, f.height - 44); }
  return f;
}
async function tela4x(base) {
  const f = figma.createFrame(); f.name = 'D4X' + SEP + 'Tela 4 – Diálogo E: reserva expirada (computador, início T4)'; f.resize(1280, 800); f.clipsContent = true; f.fills = [P('fundo')];
  const bg = base.clone(); f.appendChild(bg); bg.x = 0; bg.y = 0; bg.name = 'Tela 4 ao fundo';
  for (const n of bg.findAll(n => n.name.startsWith('⇢'))) n.name = n.name.replace('⇢', '·');
  const ov = figma.createRectangle(); ov.name = 'Sobreposição'; ov.resize(1280, 800); ov.fills = [P('sobreposicao')]; ov.opacity = 0.6; f.appendChild(ov);
  const d = AL('VERTICAL'); d.name = 'Diálogo E'; f.appendChild(d); d.resize(480, 100); d.counterAxisSizingMode = 'FIXED'; d.primaryAxisSizingMode = 'AUTO';
  d.fills = [P('superficie')]; d.cornerRadius = 12; d.itemSpacing = 16; d.paddingLeft = d.paddingRight = 32; d.paddingTop = 20; d.paddingBottom = 32;
  d.effects = [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.25 }, offset: { x: 0, y: 8 }, radius: 24, spread: 0, visible: true, blendMode: 'NORMAL' }];
  const top = group(d, 0, 'HORIZONTAL', 'Topo'); top.primaryAxisAlignItems = 'SPACE_BETWEEN'; top.counterAxisAlignItems = 'CENTER';
  top.appendChild(I('alerta', 'erro', 32));
  const x = AL('HORIZONTAL'); x.name = '⇢ D1'; x.resize(44, 44); x.primaryAxisSizingMode = 'FIXED'; x.counterAxisSizingMode = 'FIXED'; x.primaryAxisAlignItems = 'CENTER'; x.counterAxisAlignItems = 'CENTER'; top.appendChild(x); x.appendChild(I('fechar', 'texto-secundario', 24));
  await T(d, 'Sua reserva expirou', 'Título/Seção', 'texto', true);
  await T(d, 'O PIX não compensou dentro de 24 horas e o horário de 16/11, 9h, foi liberado.', 'Texto/Corpo', 'texto', true);
  button(d, 'Primário', 'Escolher novo horário', 'D3A');
  d.x = Math.round((1280 - d.width) / 2); d.y = Math.round((800 - d.height) / 2);
  return f;
}
// Notificação no computador: aviso do navegador no canto da área de trabalho
async function notifComputador(code, titleTxt, hora, data, nt, link) {
  const f = figma.createFrame(); f.name = code + SEP + titleTxt; f.resize(1280, 800); f.clipsContent = true;
  f.fills = [{ type: 'GRADIENT_LINEAR', gradientTransform: [[1, 0, 0], [0, 1, 0]], gradientStops: [{ position: 0, color: { r: 0.07, g: 0.13, b: 0.25, a: 1 } }, { position: 1, color: { r: 0.0, g: 0.24, b: 0.42, a: 1 } }] }];
  const tb = AL('HORIZONTAL'); tb.name = 'Barra de tarefas'; f.appendChild(tb); tb.resize(1280, 48); tb.primaryAxisSizingMode = 'FIXED'; tb.counterAxisSizingMode = 'FIXED';
  tb.fills = [P('sobreposicao')]; tb.primaryAxisAlignItems = 'MAX'; tb.counterAxisAlignItems = 'CENTER'; tb.paddingRight = 16; tb.itemSpacing = 16; tb.x = 0; tb.y = 752;
  tb.appendChild(I('sino', 'texto-invertido', 20));
  const clk = AL('VERTICAL'); clk.counterAxisAlignItems = 'MAX'; tb.appendChild(clk);
  await T(clk, hora, 'Texto/Ajuda destaque', 'texto-invertido'); await T(clk, data, 'Texto/Ajuda', 'texto-invertido');
  const lbl = AL('HORIZONTAL'); lbl.name = 'Rótulo'; f.appendChild(lbl); lbl.x = 40; lbl.y = 40;
  await T(lbl, 'Notificação do navegador (computador)', 'Texto/Ajuda', 'texto-invertido');
  const n = inst('notif'); f.appendChild(n); n.resize(380, n.height); n.name = '⇢ ' + link;
  setP(n, 'Quando', 'Navegador · detran.df.gov.br · agora'); setP(n, 'Título', nt[0]); setP(n, 'Mensagem', nt[1]);
  n.x = 1280 - 380 - 16; n.y = 752 - n.height - 16;
  return f;
}
async function tela5(code, titleTxt, lembrete) {
  const f = screen(code, titleTxt); await header(f);
  const p = page(f, 24);
  alerta(p, 'Sucesso', 'Prova confirmada', 'Recebemos o pagamento do PIX.');
  await title(p, 'Sua prova teórica', null);
  const r = cols(p, 32);
  const left = col(r, null, 24, 'Detalhes');
  const dt = card(left, 12, 'Detalhes');
  await iconRow(dt, 'calendario', NOMES_DIA[16], 'primaria', 'Texto/Destaque'); await iconRow(dt, 'relogio', '9h', 'primaria', 'Texto/Destaque');
  await iconRow(dt, 'local', 'Unidade Taguatinga', 'primaria', 'Texto/Destaque'); await iconRow(dt, 'info', 'Chegue com antecedência.', 'primaria');
  const lv = card(left, 12, 'Leve no dia'); await T(lv, 'Leve no dia', 'Título/Subtítulo', 'texto', true);
  await iconRow(lv, 'check-circle', 'Documento oficial com foto', 'sucesso'); await iconRow(lv, 'check-circle', 'Este comprovante (impresso ou no celular)', 'sucesso');
  const right = col(r, 400, 16, 'Ações');
  const ac = card(right, 12, 'Ações');
  button(ac, 'Primário', 'Baixar comprovante', 'OV2');
  if (lembrete) { button(ac, 'Secundário', 'Lembrete ativado ✓', null); alerta(ac, 'Sucesso', null, 'Lembrete ativado: avisaremos em 15/11, às 9h.'); }
  else button(ac, 'Secundário', 'Ativar lembrete 1 dia antes', 'D5B');
  button(ac, 'Secundário', 'Consultar prova', 'D6');
  await T(right, 'Este agendamento fica em Habilitação › Meus agendamentos.', 'Texto/Ajuda', 'texto-secundario', true);
  button(right, 'Link', 'Voltar para página inicial', 'D0', false);
  return f;
}
async function tela6() {
  const f = screen('D6', 'Meus agendamentos – Consultar prova (computador)'); await header(f);
  const p = page(f, 24);
  await backLink(p, 'Página inicial', 'D0');
  await title(p, 'Meus agendamentos', null);
  const c = card(p, 12, 'Agendamento: prova teórica', false); c.resize(720, 10); c.layoutSizingVertical = 'HUG';
  const h = group(c, 8, 'HORIZONTAL', 'Título'); h.primaryAxisAlignItems = 'SPACE_BETWEEN'; h.counterAxisAlignItems = 'CENTER';
  await T(h, 'Prova teórica', 'Título/Subtítulo', 'texto');
  const chip = AL('HORIZONTAL'); chip.name = 'Situação: confirmada'; chip.itemSpacing = 4; chip.counterAxisAlignItems = 'CENTER'; chip.paddingLeft = chip.paddingRight = 10; chip.paddingTop = chip.paddingBottom = 4; chip.cornerRadius = 12; chip.fills = [P('sucesso-claro')]; h.appendChild(chip);
  chip.appendChild(I('check-circle', 'sucesso', 16)); await T(chip, 'Confirmada', 'Texto/Ajuda destaque', 'sucesso');
  await iconRow(c, 'calendario', NOMES_DIA[16]); await iconRow(c, 'relogio', '9h'); await iconRow(c, 'local', 'Unidade Taguatinga');
  const bt = group(c, 12, 'HORIZONTAL', 'Ações'); button(bt, 'Primário', 'Ver comprovante e o que levar', 'D5A'); button(bt, 'Secundário', 'Remarcar prova', 'TOAST');
  button(p, 'Link', 'Voltar para página inicial', 'D0', false);
  return f;
}

// ---------- ligações ----------
async function ligar(pg) {
  const frames = {};
  for (const s of pg.children.filter(n => n.type === 'SECTION' && n.name !== 'Componentes')) for (const f of s.children) frames[f.name.split(SEP)[0]] = f;
  const tr = { type: 'DISSOLVE', easing: { type: 'EASE_OUT' }, duration: 0.15 };
  const st = { nav: 0, back: 0, overlay: 0, missing: [], errors: [] };
  for (const [code, f] of Object.entries(frames)) {
    if (!('findAll' in f)) continue;
    for (const n of f.findAll(n => n.name.startsWith('⇢ '))) {
      const dest = n.name.slice(2).split(' ')[0]; let action;
      if (dest === 'BACK') { action = { type: 'BACK' }; st.back++; }
      else if ((dest === 'TOAST' || dest === 'OV2') && frames[dest]) { action = { type: 'NODE', destinationId: frames[dest].id, navigation: 'OVERLAY', transition: tr }; st.overlay++; }
      else if (frames[dest]) { action = { type: 'NODE', destinationId: frames[dest].id, navigation: 'NAVIGATE', transition: tr, resetScrollPosition: true }; st.nav++; }
      else { st.missing.push(code + ' → ' + dest); continue; }
      try { await n.setReactionsAsync([{ trigger: { type: 'ON_CLICK' }, actions: [action] }]); } catch (e) { st.errors.push(code + ' / ' + n.name + ': ' + e.message); }
    }
  }
  for (const c of ['TOAST', 'OV2']) if (frames[c]) await frames[c].setReactionsAsync([{ trigger: { type: 'AFTER_TIMEOUT', timeout: 1.6 }, actions: [{ type: 'CLOSE' }] }]);
  for (const [from, to] of [['M4B', 'M4A'], ['D4B', 'D4A']]) if (frames[from] && frames[to]) await frames[from].setReactionsAsync([{ trigger: { type: 'AFTER_TIMEOUT', timeout: 2.5 }, actions: [{ type: 'NODE', destinationId: frames[to].id, navigation: 'NAVIGATE', transition: tr }] }]);
  const flows = [
    ['A0', 'Celular · 0 · Avaliador'], ['M0', 'Celular · T1 · Agendar a prova teórica'], ['M3T2', 'Celular · T2 · Data sem vagas'], ['NF', 'Celular · T3 · Prova confirmada'], ['M4X', 'Celular · T4 · Reserva expirada'],
    ['DA0', 'Computador · 0 · Avaliador'], ['D0', 'Computador · T1 · Agendar a prova teórica'], ['D3T2', 'Computador · T2 · Data sem vagas'], ['DNF', 'Computador · T3 · Prova confirmada'], ['D4X', 'Computador · T4 · Reserva expirada']
  ].filter(([c]) => frames[c]).map(([c, name]) => ({ nodeId: frames[c].id, name }));
  try { pg.flowStartingPoints = flows; } catch (e) { st.errors.push('pontos de início: ' + e.message); }
  return st;
}

// ---------- principal ----------
async function main() {
  const pg = figma.root.children.find(p => p.name === 'Protótipo') || figma.currentPage;
  await figma.setCurrentPageAsync(pg);
  await figma.loadFontAsync({ family: 'Arimo', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Arimo', style: 'Bold' });
  const VL = await figma.variables.getLocalVariablesAsync('COLOR');
  const V = Object.fromEntries(VL.map(v => [v.name, v]));
  P = n => { if (!V[n]) throw new Error('Cor ' + n + ' não encontrada'); return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', V[n]); };
  TS = Object.fromEntries((await figma.getLocalTextStylesAsync()).map(s => [s.name, s]));
  const compSec = pg.children.find(n => n.type === 'SECTION' && n.name === 'Componentes');
  if (!compSec) throw new Error('Seção "Componentes" não encontrada nesta página.');
  const byName = nm => { const n = compSec.children.find(c => c.name === nm); if (!n) throw new Error('Componente "' + nm + '" não encontrado.'); return n; };
  COMP = { btn: byName('Botão'), hora: byName('Horário'), dia: byName('Dia do calendário'), req: byName('Pré-requisito'), etapa: byName('Etapa'), alerta: byName('Alerta'), notif: byName('Notificação') };

  // Rodar de novo: remove o que este plugin criou antes
  for (const s of pg.children.filter(n => n.type === 'SECTION' && n.name.startsWith('Computador'))) s.remove();

  // Posição: abaixo de tudo que já existe
  let y0 = 0; for (const n of pg.children) y0 = Math.max(y0, n.y + n.height); y0 += 200;
  const x0 = 1000;

  const g1 = [await avaliador(), await tela0('D0', 'Tela 0 – Serviços do Detran-DF (computador)', false), await tela0('D0S', 'Tela 0 – Busca "prova teórica" (computador)', true),
    await tela1(), await tela2('D2', 'Tela 2 – Antes de agendar (computador)', false), await tela2('D2B', 'Tela 2B – Pendência de biometria (computador)', true)];
  const s1 = section('Computador · 1. Início e pré-requisitos (Telas 0 a 2B)', x0, y0, g1);

  const g2 = [
    await tela3('D3A', 'Tela 3 – Escolha onde e quando (computador, início T1)', { prox: 16, links: { 16: 'D3B', 18: 'D3D' } }),
    await tela3('D3U', 'Tela 3 – Lista de unidades aberta (computador)', { prox: 16, unidades: true }),
    await tela3('D3B', 'Tela 3 – 16/11 escolhida (computador)', { sel: 16, horaLink: 'D3C', links: { 18: 'D3D' } }),
    await tela3('D3C', 'Tela 3 – 16/11, 9h escolhidos (computador)', { sel: 16, hora: '9h', reservar: 'D4A', links: { 18: 'D3D' } }),
    await tela3('D3T2', 'Tela 3 – 16/11 sem vagas (computador, início T2)', { prox: 18, semVagas16: true, links: { 16: 'D3S', 18: 'D3D' } }),
    await tela3('D3S', 'Tela 3 – Aviso C: sem vagas (computador)', { prox: 18, semVagas16: true, aviso: true, links: { 18: 'D3D' } }),
    await tela3('D3D', 'Tela 3 – 18/11 escolhida (computador)', { sel: 18, semVagas16: true, horaLink: 'D3E', links: { 16: 'D3S' } }),
    await tela3('D3E', 'Tela 3 – 18/11, 9h escolhidos (computador)', { sel: 18, semVagas16: true, hora: '9h', reservar: 'D4C' })
  ];
  const s2 = section('Computador · 2. Escolha de unidade, data e horário (Tela 3)', x0, s1.y + s1.height + 200, g2);

  const d4a = await tela4('D4A', 'Tela 4 – Horário reservado (computador, 16/11)', { dia: 16, back: 'D3C', copiar: 'D4B', hotspots: true });
  const g3 = [d4a,
    await tela4('D4B', 'Tela 4 – Código PIX copiado (computador)', { dia: 16, back: 'D3C', copiado: true }),
    await tela4('D4C', 'Tela 4 – Horário reservado (computador, 18/11, fim T2)', { dia: 18, back: 'D3E', copiar: 'D4B', hotspots: true }),
    await tela4x(d4a),
    await notifComputador('DND', 'Notificação D no computador – 1 hora antes de expirar', '13:30', '12/11/2026', ['Falta 1 hora para sua reserva expirar', 'Pague o PIX da prova teórica até as 14h30 para manter o horário de 16/11, 9h.'], 'D4A'),
    await notifComputador('DNF', 'Notificação F no computador – Prova confirmada (início T3)', '14:52', '11/11/2026', ['Prova confirmada ✓', 'Prova teórica em 16/11, 9h, Taguatinga. Clique para ver o comprovante e o que levar.'], 'D5A'),
    await tela5('D5A', 'Tela 5 – Prova confirmada (computador, fim T3)', false),
    await tela5('D5B', 'Tela 5 – Lembrete ativado (computador)', true),
    await tela6()
  ];
  section('Computador · 3. Reserva, PIX, notificações e confirmação (Telas 4 e 5)', x0, s2.y + s2.height + 200, g3);

  // Botão na página do avaliador do celular para trocar de versão
  const a0 = pg.findOne(n => n.type === 'FRAME' && n.name.startsWith('A0' + SEP));
  if (a0 && !a0.findOne(n => n.name === '⇢ DA0')) {
    const body = a0.findOne(n => n.name === 'Conteúdo');
    if (body) { const b = button(body, 'Link', 'Ir para a versão para computador', 'DA0'); body.insertChild(Math.min(8, body.children.length - 1), b); }
  }

  const st = await ligar(pg);
  st.telas = g1.length + g2.length + g3.length;
  return st;
}

main().then(s => {
  const msg = `Versão para computador criada: ${s.telas} telas. Interações: ${s.nav} navegações, ${s.back} "voltar", ${s.overlay} avisos.` +
    (s.missing.length ? ` Sem destino: ${s.missing.join('; ')}.` : '') + (s.errors.length ? ` Erros: ${s.errors.length} (veja o console).` : '');
  if (s.errors.length) console.error(s.errors);
  figma.closePlugin(msg);
}).catch(e => { console.error(e); figma.closePlugin('Erro: ' + e.message); });
