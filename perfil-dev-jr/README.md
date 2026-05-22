
# Perfil Dev Jr

## Descrição
Aplicativo criado em React Native com Expo para apresentar o perfil profissional de Rafael Santos Mendes, um candidato a Desenvolvedor Mobile Júnior.

O projeto demonstra um portfólio simples e navegável, com informações pessoais, habilidades, projetos e contato.

## Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- React Navigation (Drawer)
- React Native Gesture Handler
- React Native Safe Area Context
- Git / GitHub

## Funcionalidades
- Tela de perfil com foto, nome, cargo e descrição pessoal
- Lista de habilidades técnicas com ícones e estilo responsivo
- Seção de projetos com cards e descrições
- Área de contato com e-mail, GitHub e LinkedIn
- Simulação de envio de mensagem com validação e alerta
- Navegação em drawer para transição entre telas

## Telas
- **Perfil:** foto de perfil, nome, cargo e texto sobre o desenvolvedor
- **Habilidades:** lista de skills em React Native, JavaScript, Git e mais
- **Projetos:** cards de projetos e contato + formulário de mensagem

## Organização do código
```
perfil-dev-jr/
│
├── App.js
├── screens/
│   ├── PerfilScreen.js
│   ├── HabilidadesScreen.js
│   └── ProjetosScreen.js
├── assets/
│   └── perfil-rafael.png
├── package.json
└── README.md
```

## Diferenciais
- Interface organizada com navegação drawer e estilo consistente
- Uso de componentes React Native nativos como `ScrollView`, `FlatList`, `TextInput` e `TouchableOpacity`
- Layout adaptado para dispositivos mobile, com cards e áreas de destaque
- Validação de formulário de contato e feedback ao usuário via `Alert`
- Estrutura limpa e modular separando telas em componentes independentes
- Projeto preparado para ser executado facilmente com Expo

## Como executar o projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/Rafael-1108/perfil-dev-jr.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd perfil-dev-jr
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o Expo:
   ```bash
   npx expo start
   ```
5. Abra o app no emulador ou dispositivo via Expo Go.

## Autor
Rafael Santos Mendes
