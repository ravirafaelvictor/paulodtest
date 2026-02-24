# Site Paulo Dias - Landing Page Profissional

## 🎯 Visão Geral

Landing page completa e profissional para Paulo Dias - Treinador Comportamental / Coach, desenvolvida com foco em conversão e posicionamento premium.

## ✅ Características Implementadas

### Design & UX
- ✅ **Navbar com Glassmorphism**: Efeito de vidro real com backdrop-blur, bordas sutis e mudança ao rolar
- ✅ **Hero Full-Screen**: Seção principal com imagem de fundo e overlay em degradê para legibilidade
- ✅ **Animações Scroll Reveal**: Seções aparecem suavemente ao rolar com IntersectionObserver (JS leve)
- ✅ **Rolagem Suave**: Navegação fluida com offset para navbar
- ✅ **Mobile-First**: Design responsivo otimizado para todos os dispositivos
- ✅ **Botões de Alto Contraste**: CTAs sempre visíveis com hover elegante e sombras suaves
- ✅ **Estética Premium**: Masculina, corporativa, moderna - evitando visual genérico de template

### Seções Implementadas
1. **Hero**: Headline forte, subheadline, 2 CTAs visíveis
2. **Sobre (#sobre)**: Quem é Paulo, destaques, estatísticas
3. **Método (#metodo)**: Diagnóstico, Clareza, Plano, Acompanhamento
4. **Serviços (#servicos)**: Mapeamento, Mentoria, Coaching, Palestras, Treinamentos, Corporativo
5. **Depoimentos (#depoimentos)**: 6 cards de prova social
6. **Conteúdos (#conteudos)**: Vídeos, Palestras, E-books
7. **CTA Final**: Texto direto + botão WhatsApp
8. **Contato (#contato)**: WhatsApp, Instagram, Agenda
9. **Footer**: Rodapé profissional com links e redes sociais

### Performance & Otimizações
- ✅ **Código Enxuto**: Poucos scripts, componentes leves
- ✅ **IntersectionObserver**: Animações com JS nativo leve
- ✅ **Imagens Otimizadas**: Placeholders prontos para substituição
- ✅ **Lazy-Load**: Imagens e seções secundárias carregam sob demanda

## 🎨 Identidade Visual

### Paleta de Cores (Atual - Neutral Premium)
- **Primária**: Slate-900 (quase preto)
- **Secundária**: White/Gray scale
- **Destaque (CTA)**: Amber-500 a Orange-600 gradiente
- **Background**: Slate-50/100 para contraste

### Para ajustar à paleta do Instagram:
1. Visite o Instagram: https://instagram.com/eusoupaulodias
2. Identifique as cores predominantes no feed
3. Substitua os valores de cor no código:

```tsx
// Exemplo: alterar cor de destaque (CTA)
// De: from-amber-500 to-orange-600
// Para: from-[sua-cor-1] to-[sua-cor-2]
```

### Personalização de Cores
Edite as classes Tailwind no `src/app/page.tsx`:
- CTA Primário: `bg-gradient-to-r from-[cor] to-[cor]`
- CTA Secundário: `bg-white/10 border-white/30`
- Ícones: Alterar `text-[cor]`
- Cards: Ajustar `border-[cor]` e backgrounds

## 📝 Como Personalizar

### 1. Substituir Imagens

#### Imagem do Hero
**Local**: `/public/images/hero-paulo.jpg` (já gerada)
- **Tamanho recomendado**: 1440x720 pixels
- **Estilo**: Foto profissional de Paulo em ambiente corporativo, pose confiante
- **Substituição**: Coloque sua foto com mesmo nome no lugar

#### Imagem da Seção Sobre
**Local**: `/public/images/about-paulo.jpg` (já gerada)
- **Tamanho recomendado**: 768x1344 pixels (retrato)
- **Estilo**: Retrato profissional de Paulo
- **Substituição**: Coloque sua foto com mesmo nome no lugar

### 2. Atualizar Informações de Contato

#### WhatsApp
```tsx
// Linha ~445 - Botão CTA Hero
// Linha ~551 - Botão CTA Sobre
// Linha ~780 - Card de contato

href="https://wa.me/SEUNUMERO"
// Exemplo: href="https://wa.me/5511999999999"
```

#### Instagram
```tsx
// Linha ~566 - Link no footer já configurado
href="https://instagram.com/eusoupaulodias"
```

#### Link de Agendamento
```tsx
// Linha ~764 - Botão "Ver Agenda"
href="SUA-LINK-DE-AGENDAMENTO"
```

### 3. Personalizar Textos

#### Headline Hero
```tsx
// Linha ~135-140
<h1 className="...">
  Descubra seu potencial com o
  <span>...</span>
</h1>
```

#### Sobre Paulo
```tsx
// Linha ~230-250
<p className="...">
  Sou especialista em mapeamento comportamental...
</p>
```

#### Estatísticas
```tsx
// Linha ~260-270
<div className="text-3xl font-bold text-slate-900 mb-2">+500</div>
<div className="text-sm text-slate-600">Pessoas Impactadas</div>
```

### 4. Ajustar Serviços

```tsx
// Linha ~330-420
// Edite o array de serviços:
{
  icon: Brain, // Ícone (importado de lucide-react)
  title: 'Mapeamento Comportamental',
  description: '...',
  features: ['...', '...'],
  price: 'R$ XXX',
  featured: true // Destacar como mais popular
}
```

### 5. Personalizar Depoimentos

```tsx
// Linha ~440-540
// Edite o array de depoimentos:
{
  name: 'Nome Completo',
  role: 'Cargo/Profissão',
  text: 'Texto do depoimento...',
  rating: 5,
  avatar: 'AB' // Iniciais para avatar
}
```

## 🔧 Configurações Técnicas

### Stack Utilizada
- **Framework**: Next.js 15 com App Router
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animações**: IntersectionObserver (JS nativo)
- **Ícones**: Lucide React

### Arquivos Principais
```
/home/z/my-project/
├── src/
│   └── app/
│       ├── page.tsx           ← Landing page principal
│       └── api/
│           └── generate-image/ ← API para gerar imagens
└── public/
    └── images/
        ├── hero-paulo.jpg    ← Imagem hero (placeholder)
        └── about-paulo.jpg   ← Imagem sobre (placeholder)
```

### Comandos Disponíveis
```bash
# Desenvolvimento (já rodando automaticamente)
bun run dev

# Verificar qualidade do código
bun run lint

# Build para produção
bun run build
```

## 📱 Responsividade

O site está otimizado para:
- ✅ **Mobile** (< 768px): Menu hamburger, cards em coluna única
- ✅ **Tablet** (768px - 1024px): Grid adaptativo
- ✅ **Desktop** (> 1024px): Layout completo com todas as funcionalidades

Teste em diferentes tamanhos de tela para garantir a melhor experiência.

## ⚡ Performance

### Práticas Implementadas
1. **IntersectionObserver**: Animações levas sem bibliotecas pesadas
2. **Lazy Loading**: Imagens carregam sob demanda
3. **Componentes Otimizados**: Código sem redundâncias
4. **Imagens Comprimidas**: Placeholders otimizados

### Para Melhorar Ainda Mais
- Comprimir imagens antes de subir (use TinyPNG ou similar)
- Considerar WebP para imagens (melhor compressão)
- Usar CDN para imagens estáticas
- Implementar cache no Next.js para estáticos

## 🚀 Próximos Passos Recomendados

### Imediatos
1. ✅ Substituir imagens pelas fotos reais do Paulo
2. ✅ Inserir número de WhatsApp correto
3. ✅ Adicionar link de agendamento real (Calendly, etc.)
4. ✅ Revisar e personalizar textos de acordo com a voz do Paulo

### Opcionais
5. 🔗 Adicionar linktree ou bio oficial no footer
6. 📊 Implementar Google Analytics
7. 🔍 SEO: Adicionar metatags, Open Graph, Twitter Cards
8. 📧 Formulário de contato (ou manter apenas WhatsApp)
9. 🎬 Adicionar vídeos reais de palestras/aulas
10. 📱 Adicionar PWA para experiência de app

## 🎯 Dicas de Conversão

### Otimização de CTAs
- Mantenha os botões de ação visíveis e com alto contraste
- Use verbos de ação: "Agendar", "Conversar", "Ver"
- Position: CTAs hero sempre acima da dobra
- Teste: Experimente diferentes textos nos botões

### Provas Sociais
- Adicione fotos reais nos depoimentos
- Inclua nome completo e cargo para credibilidade
- Considere vídeos curtos de depoimentos
- Destaque números: "+500 pessoas impactadas"

### Mobile
- Garanta que CTAs sejam fáceis de clicar (mínimo 44px)
- Reduza quantidade de scroll necessário
- Simplifique informações em telas pequenas

## 💡 Personalização da Identidade Visual

### Referência: Instagram @eusoupaulodias

1. **Acessar o Instagram**: https://instagram.com/eusoupaulodias
2. **Analisar**:
   - Cores predominantes no feed
   - Estilo das postagens
   - Fontes utilizadas
   - Elementos visuais recorrentes

3. **Implementar no Site**:
   - Substituir cores de destaque (CTA, ícones, bordas)
   - Ajustar gradientes se aplicável
   - Alinhar tipografia ao estilo do Instagram
   - Incorporar elementos visuais do feed

### Exemplo de Ajuste de Cores

```tsx
// Se o Instagram usa azul e laranja:

// Botão CTA (atualmente amber/orange)
bg-gradient-to-r from-amber-500 to-orange-600
// Para:
bg-gradient-to-r from-blue-600 to-orange-500

// Ícones de destaque
text-amber-500
// Para:
text-blue-600

// Badges e highlights
bg-amber-100 text-amber-800
// Para:
bg-blue-100 text-blue-800
```

## 📞 Suporte e Dúvidas

Para qualquer dúvida sobre personalização ou ajustes, consulte:
- Documentação Tailwind CSS: https://tailwindcss.com
- shadcn/ui Components: https://ui.shadcn.com
- Lucide Icons: https://lucide.dev

## 🎉 Conclusão

O site está pronto para uso! Todas as seções obrigatórias foram implementadas, as animações estão funcionando, a responsividade está otimizada e as imagens placeholder foram geradas.

Próximo passo: **substituir as informações reais do Paulo e personalizar a identidade visual conforme o Instagram**.

---

Desenvolvido com Next.js 15 + Tailwind CSS 4 + shadcn/ui
Foco em performance, conversão e posicionamento premium.
