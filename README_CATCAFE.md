**NEKO NOOK — Cat Café (Landing Page)**

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Uma landing page calorosa e estilosa para um cat café — fotos fofas, menu artesanal, reservas rápidas e muita aconchego.

</div>

---

**Sobre o Projeto**

`NEKO NOOK` é uma landing page fictícia para um Cat Café que mistura estética acolhedora com UX direta: foto hero, menu, galeria/carrossel, seção de reservas e informações essenciais (horário, localização, contato). Foi pensada para conversão — visitante vê o menu, confere fotos dos gatos e agenda uma mesa em poucos cliques.

**Características Principais**

- Hero com imagem grande e CTA de reserva
- Galeria/carrossel de gatos e ambientes
- Menu de bebidas e petiscos com destaque para especialidades
- Seção de reservas com formulário simples
- Horário, endereço e mapa integrado
- Depoimentos e avaliações
- Animações sutis (hover, carregamento) e design responsivo

---

**Preview**

![Preview](./public/catcafe-preview.png)

*Landing aconchegante, tipografia amigável e paleta quente.*

---

**Tecnologias Utilizadas**

| Tecnologia | Uso |
|---|---|
| React | UI e componentes |
| Vite | Build & dev server |
| Tailwind CSS | Estilização utilitária |
| JavaScript (ES2022) | Lógica e interatividade |
| PostCSS | Processamento CSS |

---

**Como Rodar o Projeto**

**Pré-requisitos**

- Node.js 18+ instalado
- `npm` ou `pnpm`

**Instalação rápida**

```bash
npm install
npm run dev
```

Abra `http://localhost:5173` no navegador.

---

**Scripts Úteis**

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # preview da build
npm run lint     # roda linter
```

---

**Estrutura Sugerida do Projeto**

```
neko-nook/
├── public/                # imagens, favicon, previews
├── src/
│   ├── assets/            # fotos de gatos, menu images
│   ├── components/        # Navbar, Hero, Gallery, Menu, Reserve
│   ├── hooks/             # hooks reutilizáveis
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── tailwind.config.js
```

---

**Funcionalidades (detalhado)**

- Hero
  - Foto grande, título convidativo e CTA primário `Reservar`
- Galeria / Carrossel
  - Rolagem automática com pausa no hover, zoom suave nas imagens
- Menu
  - Seção com categorias (cafés, chás, doces, petiscos), destaques e preços
- Reservas
  - Formulário simples (nome, e-mail, data, hora, pessoas) com validação leve
- Informações úteis
  - Horário de funcionamento, endereço e botão para abrir no Google Maps
- Depoimentos
  - Slides com avaliações reais ou fictícias para aumentar confiança

---

**Design System (base)**

- Paleta: tons quentes e terrosos para aconchego (creme, terracota, caramelo)
- Tipografia: fonte display amigável para títulos + sans-serif legível para corpo
- Componentes: botões arredondados, cards com sombras suaves, uso pontual de glassmorphism

---

**Acessibilidade & Performance**

- Imagens otimizadas e `loading="lazy"`
- Contraste de cores adequado para leitura
- Navegação por teclado e formulários com labels claros

---

**Padrões de Commit**

- `feat:` — nova funcionalidade
- `fix:` — correção de bug
- `style:` — mudanças visuais/estéticas
- `docs:` — documentação

---

**Deploy**

Hospede facilmente em plataformas como Vercel, Netlify ou GitHub Pages. Build de produção:

```bash
npm run build
```

Depois, publique a pasta `dist`/`build` na sua plataforma favorita.

---

**Créditos & Autor**

Desenvolvido com carinho por Erika Laiane — front-end e design criativo.

[GitHub](https://github.com/erikalaiane) • [LinkedIn](https://www.linkedin.com/in/erika-laiane-azevedo)

---

Se quiser, eu movo este conteúdo para o `README.md` principal ou faço um commit e PR automático.
