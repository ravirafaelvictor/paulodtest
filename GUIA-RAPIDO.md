# Guia Rápido - Personalização do Site Paulo Dias

## 🔥 Personalizações Essenciais (Faça primeiro)

### 1️⃣ WhatsApp
```tsx
// Pesquisar por: (XX) XXXXX-XXXX
// Substituir por seu número completo com código do país
href="https://wa.me/5511999999999"
```

### 2️⃣ Imagens
```bash
# Substituir as imagens em:
/public/images/hero-paulo.jpg    (1440x720px)
/public/images/about-paulo.jpg   (768x1344px)

# Use as mesmas resoluções para melhor qualidade
```

### 3️⃣ Link de Agendamento
```tsx
// Pesquisar por: SUA-LINK-DE-AGENDAMENTO
href="https://calendly.com/seu-usuario"
// ou
href="https://whatsapp.com/seu-usuario"
```

## 🎨 Ajustar Cores (Instagram)

### Encontre as cores do Instagram:
1. Acesse: https://instagram.com/eusoupaulodias
2. Identifique 2-3 cores principais
3. Converta para Tailwind (use: https://tailwindcolor.com/)

### Substituir no código:

#### Botões CTA (Principal)
```tsx
// Pesquisar: from-amber-500 to-orange-600
// Substituir por suas cores
bg-gradient-to-r from-[cor-1] to-[cor-2]
```

#### Ícones de Destaque
```tsx
// Pesquisar: text-amber-500
// Substituir por sua cor
text-[sua-cor]
```

#### Badges e Highlights
```tsx
// Pesquisar: bg-amber-100 text-amber-800
// Substituir
bg-[cor-clara] text-[cor-escura]
```

## 📝 Textos Principais

### Hero Headline
```tsx
// Linha ~135-140
<h1>
  Descubra seu potencial com o
  <span>Mapeamento Comportamental</span>
</h1>
```

### Hero Subheadline
```tsx
// Linha ~145-148
<p>
  Treinador Comportamental que transforma profissionais...
</p>
```

### Sobre Paulo
```tsx
// Linha ~230-250
<p>
  Sou especialista em mapeamento comportamental...
</p>
```

### Estatísticas
```tsx
// Linha ~260-270
// Substituir os números reais
+500 Pessoas Impactadas
+10 Anos de experiência
95% Satisfação dos clientes
```

## 🛠️ Serviços

### Adicionar/Remover Serviço
```tsx
// Linha ~330-420
{
  icon: Brain,           // Ícone (Lucide React)
  title: 'Nome do Serviço',
  description: 'Descrição do que faz...',
  features: [
    'Benefício 1',
    'Benefício 2',
    'Benefício 3'
  ],
  price: 'R$ XXX',       // ou 'Sob consulta'
  featured: true         // true = destaque com badge
}
```

### Ícones Disponíveis
```tsx
import {
  Brain,      // Cérebro
  Target,     // Alvo
  TrendingUp, // Tendência
  Users,      // Pessoas
  Star,       // Estrela
  BookOpen,   // Livro
  Video,      // Vídeo
  Mic,        // Microfone
  Award,      // Troféu
  BarChart3,  // Gráfico
  Sparkles    // Brilho
} from 'lucide-react'
```

## 💬 Depoimentos

### Adicionar Depoimento
```tsx
// Linha ~440-540
{
  name: 'Nome Completo',
  role: 'Cargo/Profissão',
  text: 'Texto do depoimento entre aspas...',
  rating: 5,             // 1-5 estrelas
  avatar: 'AB'           // Iniciais
}
```

### Foto Real no Depoimento
```tsx
// Em vez de avatar text, usar imagem:
<div className="w-12 h-12 bg-[sua-imagem] rounded-full"></div>
```

## 🎬 Conteúdos

### Editar Cards de Conteúdo
```tsx
// Linha ~550-600
{
  type: 'video',         // video, palestra, livro
  icon: Video,
  title: 'Vídeos Inspiradores',
  description: 'Descrição do que é...',
  color: 'from-red-500 to-pink-600',  // Gradiente do card
  items: '+50 vídeos'     // Quantidade
}
```

## 📱 Mobile Menu

O menu mobile já está configurado com:
- ✅ Botão hamburger
- ✅ Sheet com efeito de vidro
- ✅ Ícones para cada seção
- ✅ Fechamento automático ao clicar

## ⚡ Testar Após Mudanças

```bash
# Verificar erros no código
bun run lint

# O servidor está rodando automaticamente
# Acesse: http://localhost:3000
```

## 🎯 Checklist de Lançamento

- [ ] Substituir imagens hero-paulo.jpg e about-paulo.jpg
- [ ] Inserir número de WhatsApp correto
- [ ] Adicionar link de agendamento real
- [ ] Ajustar cores conforme Instagram
- [ ] Revisar textos de todas as seções
- [ ] Atualizar estatísticas com números reais
- [ ] Substituir depoimentos placeholders por reais
- [ ] Testar em mobile e desktop
- [ ] Verificar links externos (Instagram)
- [ ] Testar botões de CTA

## 📞 Números de Contato

### WhatsApp Internacional
```tsx
// Formato: código do país + DDD + número
// Brasil: 55 + DDD + número

// Exemplo São Paulo (11) 99999-9999
https://wa.me/5511999999999

// Exemplo Rio de Janeiro (21) 98888-8888
https://wa.me/5521988888888
```

## 🔍 Encontrar no Código

### Busca Rápida
- Ctrl+F / Cmd+F para pesquisar
- Termos úteis:
  - "XX) XXXXX-XXXX" → WhatsApp
  - "SUA-LINK-DE-AGENDAMENTO" → Agendamento
  - "Paulo Dias" → Nome
  - "hero-paulo.jpg" → Imagens

### Seções Principais
- Hero: Linha ~120-170
- Sobre: Linha ~180-300
- Método: Linha ~310-380
- Serviços: Linha ~390-530
- Depoimentos: Linha ~540-650
- Conteúdos: Linha ~660-730
- CTA Final: Linha ~740-790
- Contato: Linha ~800-870
- Footer: Linha ~880-950

## 🎨 Cores Tailwind Populares

### Azul Corporativo
- `blue-600` → Principal
- `blue-100` → Background claro
- `blue-800` → Background escuro

### Verde Sucesso
- `green-600` → Principal
- `green-100` → Background claro

### Roxo Premium
- `purple-600` → Principal
- `purple-100` → Background claro

### Laranja Energia
- `orange-600` → Principal
- `orange-100` → Background claro

### Cor Personalizada
```tsx
// Usar qualquer cor HEX
bg-[#FF5733]       // Laranja customizado
text-[#1a1a2e]     // Azul escuro customizado
border-[#16213e]   // Bordas customizadas
```

## ✨ Dicas de Conversão

### Melhores Práticas
1. **CTAs acima da dobra** ✓ (já implementado)
2. **Botões visíveis** ✓ (alto contraste)
3. **Provas sociais próximas aos CTAs**
4. **Urgência limitada** (ex: "vagas limitadas")
5. **Benefícios claros** (o que o cliente ganha)

### A/B Testing Ideias
- Testar diferentes textos nos botões CTA
- Testar cores dos botões (verde vs laranja)
- Testar ordem das seções
- Testar número de depoimentos exibidos

## 🚀 Pós-Lançamento

### Otimizações Recomendadas
1. **Google Analytics**: Acompanhar visitas
2. **Meta Pixel**: Rastrear conversões
3. **SEO**: Adicionar metatags
4. **Speed**: Otimizar imagens com WebP
5. **PWA**: Experiência de app no mobile

### Marketing
- Compartilhar no Instagram
- Enviar para lista de contatos
- Adicionar na bio do Instagram
- Criar posts divulgando o site

---

**Dúvidas?** Consulte o arquivo completo `SITE-PAULO-DIAS.md`

Pronto para lançar! 🎉
