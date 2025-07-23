function abrirJanela(id) {
  document.getElementById(`janela-explorer`).classList.remove('oculto');
}

function fecharJanela(id) {
  document.getElementById(id).classList.add('oculto');
}

function simularNavegacao() {
  alert("Página não encontrada. O universo reverso não reconhece essa URL.");
}
// 🖱️ Arrastar janela
let janelaAtual = null;
let offsetX = 0;
let offsetY = 0;

document.querySelectorAll('.janela-topo').forEach(topo => {
  topo.addEventListener('mousedown', function (e) {
    janelaAtual = this.parentElement;
    offsetX = e.clientX - janelaAtual.offsetLeft;
    offsetY = e.clientY - janelaAtual.offsetTop;

    document.addEventListener('mousemove', moverJanela);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', moverJanela);
      janelaAtual = null;
    });
  });
});
function moverJanela(e) {
  if (janelaAtual) {
    janelaAtual.style.left = (e.clientX - offsetX) + 'px';
    janelaAtual.style.top = (e.clientY - offsetY) + 'px';
  }
}

// 🧾 Menu de clique direito
const contexto = document.createElement('div');
contexto.id = 'menu-contexto';
contexto.innerHTML = `
  <ul>
    <li>Ajustar fundo</li>
    <li>Nova janela reversa</li>
    <li>Modo caos</li>
  </ul>
`;
contexto.className = 'oculto';
document.body.appendChild(contexto);

document.addEventListener('contextmenu', e => {
  e.preventDefault();
  contexto.classList.remove('oculto');
  contexto.style.top = e.clientY + 'px';
  contexto.style.left = e.clientX + 'px';
});

// ❌ Esconder ao clicar fora
document.addEventListener('click', e => {
  if (!contexto.contains(e.target)) {
    contexto.classList.add('oculto');
  }
});

// 🕒 Relógio funcional
function atualizarRelogio() {
  const agora = new Date();
  document.getElementById('taskbar').innerText =
    `🔘 Iniciar | 🧭 XingOS 7 | 🕒 ${agora.getHours().toString().padStart(2, '0')}:${agora.getMinutes().toString().padStart(2, '0')}`;
}
setInterval(atualizarRelogio, 60000);
atualizarRelogio();

// 🔘 Menu Iniciar (extra opcional)
const iniciarMenu = document.createElement('div');
iniciarMenu.id = 'menu-iniciar';
iniciarMenu.className = 'oculto';
iniciarMenu.innerHTML = `
  <ul>
    <li>🧭 Abrir Xing Explorer</li>
    <li>🖼️ Alterar Aparência</li>
    <li>⚙️ Configurações</li>
    <li>🚪 Sair</li>
  </ul>
`;
document.body.appendChild(iniciarMenu);

document.getElementById('taskbar').addEventListener('click', () => {
  iniciarMenu.classList.toggle('oculto');
});
function abrirJanela(nome) {
  document.querySelectorAll('.janela').forEach(j => j.classList.add('oculto'));
  const id = {
    'painel': 'janela-painel',
    'desinstalar': 'janela-desinstalar',
    'avaliar': 'janela-avaliar',
    'defender': 'janela-defender',
    'update': 'janela-update'
  }[nome];
  if (id) document.getElementById(id).classList.remove('oculto');
}
