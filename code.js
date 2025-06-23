figma.showUI(__html__, { width: 300, height: 200 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'fetch-and-apply') {
    const res = await fetch('figma-plugin-production.up.railway.app');
    const data = await res.json();

    const nodes = figma.currentPage.findAll(n =>
      ['tema-aula-text', 'data-evento-text', 'nome-professor-text', 'foto-professor-image'].includes(n.name)
    );

    for (const node of nodes) {
      switch (node.name) {
        case 'tema-aula-text':
          if ('characters' in node) node.characters = data.temaAula;
          break;
        case 'data-evento-text':
          if ('characters' in node) node.characters = data.dataEvento;
          break;
        case 'nome-professor-text':
          if ('characters' in node) node.characters = data.nomeProfessor;
          break;
        case 'foto-professor-image':
          if (node.type === 'RECTANGLE') {
            const imgRes = await fetch(data.fotoProfessor);
            const imgBuffer = await imgRes.arrayBuffer();
            const img = figma.createImage(new Uint8Array(imgBuffer));
            node.fills = [{ type: 'IMAGE', imageHash: img.hash, scaleMode: 'FILL' }];
          }
          break;
      }
    }

    figma.closePlugin("🎉 Dados aplicados com sucesso!");
  }
};
