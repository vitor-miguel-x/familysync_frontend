<div align="center">
  <img src="./src/assets/logo_family_sync.svg" alt="Logo FamilySync" width="200" />
  
  # FamilySync - Interface Web (Frontend)
</div>

> ⚠️ **Aviso:** Este é o repositório exclusivo da aplicação **Frontend** (Web). Para a documentação completa, backend, base de dados e versão mobile, visita o [Repositório Oficial Principal](https://github.com/carlosedusp05/familySync).

## 💻 Sobre a Aplicação Web

Esta é a interface web do **FamilySync**, um sistema destinado à gestão familiar organizada. O objetivo deste cliente web é permitir que as famílias giram as suas rotinas, tarefas e compromissos de forma produtiva, eficiente e colaborativa através do navegador.

### 🛠️ Tecnologias Utilizadas

* **React** - Construção de interfaces de utilizador
* **Tailwind CSS** - Estilização e responsividade
* **Vite** - Ferramenta de build e servidor de desenvolvimento
* **Axios** - Consumo da API / Backend

---

## 🚀 Como executar o projeto localmente

### Pré-requisitos
Antes de começar, precisarás de ter o [Node.js](https://nodejs.org/) instalado na tua máquina.

### Passos para a instalação

1. Clona este repositório:
   ```bash
   git clone [https://github.com/vitor-miguel-x/NOME_DESTE_REPOSITORIO_FRONTEND.git](https://github.com/vitor-miguel-x/NOME_DESTE_REPOSITORIO_FRONTEND.git)
   ```

2. Acede à pasta do projeto:
   ```bash
   cd NOME_DESTE_REPOSITORIO_FRONTEND
   ```

3. Instala as dependências:
   ```bash
   npm install
   # ou yarn install
   ```

4. Inicia o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou yarn dev
   ```

5. O aplicativo estará disponível no teu navegador, geralmente em `http://localhost:5173` ou `http://localhost:3000`.

---

## 📂 Estrutura de Pastas (Frontend)

Uma visão geral de como o código da aplicação está organizado:

```text
├── 📂 public            # Arquivos públicos estáticos
├── 📂 src               # Código-fonte principal da aplicação
│   ├── 📂 assets        # Imagens e ficheiros estáticos (ex: logo_family_sync.svg)
│   ├── 📂 components    # Componentes modulares (divididos por features, ui, forms, etc.)
│   ├── 📂 context       # Contextos globais da aplicação (React Context)
│   ├── 📂 hooks         # Custom hooks do React (ex: useAuth, useList, etc.)
│   ├── 📂 layouts       # Estruturas de layout de página (ex: MainLayout)
│   ├── 📂 screens       # Ecrãs principais da aplicação (ex: LoginScreen, CalendarScreen)
│   ├── 📂 services      # Integração com a API e serviços externos
│   ├── 📂 utils         # Funções utilitárias de apoio
│   ├── 📄 App.jsx       # Componente raiz da aplicação
│   ├── 📄 main.jsx      # Ponto de entrada do React
│   └── 📄 routes.jsx    # Configuração de rotas da aplicação
├── 📄 index.html        # HTML principal
├── 📄 package.json      # Dependências e scripts do projeto
├── 📄 tailwind.config.js# Configuração de estilos do Tailwind CSS
└── 📄 vite.config.js    # Configuração do bundler Vite
```

---

## 🤝 Contribuições

Para contribuir com a interface:

1. Verifica as *issues* abertas no repositório principal.
2. Usa mensagens claras e descritivas nos commits.
3. Faz commits pequenos e frequentes.
   * *Exemplo:* `git commit -m "feat: Adiciona componente de lista de tarefas no dashboard"`

---

## 🎓 Trabalho de Conclusão de Curso (TCC)

**Semestre:** 2026/1

**Orientadores:**

* [@Joao-Meyer](https://github.com/Joao-Meyer)
* [@fernandoleonid](https://github.com/fernandoleonid)
* [@marcelnt](https://github.com/marcelnt)
* [@yurikomuta](https://github.com/yurikomuta)

## 👥 Autores

* [Carlos Eduardo](https://github.com/carlosedusp05)
* [David Lucas](https://github.com/DavidLucas1122)
* [Gustavo De Paula](https://github.com/GustavoDePaula14)
* [Kauan Antunes](https://github.com/KauanAntunesLima)
* [Vitor Miguel](https://github.com/vitor-miguel-x)
