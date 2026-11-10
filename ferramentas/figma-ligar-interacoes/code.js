// Liga as interações do protótipo de alta fidelidade (arquivo "Detran-DF – Agendamento da Prova Teórica").
// Convenção usada nas telas: uma camada chamada "⇢ CÓDIGO" leva ao quadro "CÓDIGO · ...".
// "⇢ BACK" = voltar; "⇢ TOAST" e "⇢ OV2" = aviso sobreposto que fecha sozinho.
async function main() {
  const page = figma.root.children.find(p => p.name === 'Protótipo') || figma.currentPage;
  await figma.setCurrentPageAsync(page);
  await figma.loadFontAsync({ family: 'Arimo', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Arimo', style: 'Bold' });

  const frames = {};
  for (const s of page.children.filter(n => n.type === 'SECTION' && n.name !== 'Componentes')) {
    for (const f of s.children) frames[f.name.split(' · ')[0]] = f;
  }
  for (const code of ['A0', 'M0', 'M3T2', 'NF', 'M4X', 'M4A', 'M4B', 'TOAST', 'OV2']) {
    if (!frames[code]) throw new Error('Quadro "' + code + ' · …" não encontrado. Rode o plugin na página "Protótipo".');
  }

  // Rótulo mais curto no botão da T3 (cabia mal no botão)
  const t3 = frames['A0'].findOne(n => n.name === '⇢ NF');
  if (t3 && t3.type === 'INSTANCE') {
    const k = Object.keys(t3.componentProperties).find(k => k.startsWith('Rótulo'));
    if (k) t3.setProperties({ [k]: 'Iniciar T3 · Prova confirmada' });
  }

  const tr = { type: 'DISSOLVE', easing: { type: 'EASE_OUT' }, duration: 0.15 };
  const stats = { nav: 0, back: 0, overlay: 0, errors: [], missing: [] };
  for (const [code, f] of Object.entries(frames)) {
    for (const n of f.findAll(n => n.name.startsWith('⇢ '))) {
      const dest = n.name.slice(2).split(' ')[0];
      let action;
      if (dest === 'BACK') { action = { type: 'BACK' }; stats.back++; }
      else if (dest === 'TOAST' || dest === 'OV2') { action = { type: 'NODE', destinationId: frames[dest].id, navigation: 'OVERLAY', transition: tr }; stats.overlay++; }
      else if (frames[dest]) { action = { type: 'NODE', destinationId: frames[dest].id, navigation: 'NAVIGATE', transition: tr, resetScrollPosition: true }; stats.nav++; }
      else { stats.missing.push(code + ' → ' + dest); continue; }
      try { await n.setReactionsAsync([{ trigger: { type: 'ON_CLICK' }, actions: [action] }]); }
      catch (e) { stats.errors.push(code + ' / ' + n.name + ': ' + e.message); }
    }
  }
  for (const c of ['TOAST', 'OV2']) {
    await frames[c].setReactionsAsync([{ trigger: { type: 'AFTER_TIMEOUT', timeout: 1.6 }, actions: [{ type: 'CLOSE' }] }]);
  }
  await frames['M4B'].setReactionsAsync([{ trigger: { type: 'AFTER_TIMEOUT', timeout: 2.5 }, actions: [{ type: 'NODE', destinationId: frames['M4A'].id, navigation: 'NAVIGATE', transition: tr }] }]);

  try {
    page.flowStartingPoints = [
      { nodeId: frames['A0'].id, name: '0 · Avaliador (escolher tarefa)' },
      { nodeId: frames['M0'].id, name: 'T1 · Agendar a prova teórica' },
      { nodeId: frames['M3T2'].id, name: 'T2 · Data sem vagas' },
      { nodeId: frames['NF'].id, name: 'T3 · Prova confirmada' },
      { nodeId: frames['M4X'].id, name: 'T4 · Reserva expirada' }
    ];
  } catch (e) { stats.errors.push('pontos de início: ' + e.message); }

  return stats;
}

main().then(s => {
  const msg = `Interações ligadas: ${s.nav} navegações, ${s.back} "voltar", ${s.overlay} avisos.` +
    (s.missing.length ? ` Sem destino: ${s.missing.join('; ')}.` : '') +
    (s.errors.length ? ` Erros: ${s.errors.length} (veja o console).` : '');
  if (s.errors.length) console.error(s.errors);
  figma.closePlugin(msg);
}).catch(e => figma.closePlugin('Erro: ' + e.message));
