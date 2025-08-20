# 🚀 Instruções de Deploy - Instituto Tugani

## ✅ Etapa 1: Preparação Concluída

A landing page foi preparado e otimizado para produção! A pasta `dist/` contém todos os arquivos necessários para o upload.

### O que foi feito:
- ✅ Build de produção gerada com Vite
- ✅ Arquivos otimizados e minificados
- ✅ Configuração de cache e compressão
- ✅ Arquivo .htaccess configurado para SPA
- ✅ Assets organizados e otimizados

## 📁 Arquivos para Upload

**IMPORTANTE**: Fazer upload de TODOS os arquivos e pastas DENTRO da pasta `dist/` (não a pasta dist em si).

### Estrutura dos arquivos:
```
📁 dist/
├── 📄 index.html (arquivo principal)
├── 📄 .htaccess (configurações do servidor)
├── 📁 assets/ (todos os arquivos CSS, JS e imagens)
│   ├── 📄 index-B-CcRCm9.css
│   ├── 📄 index-Rl67Mxg7.js
│   ├── 📄 vendor-DOHx2j1n.js
│   ├── 📄 animations-BsURCxQB.js
│   └── 📁 [todas as imagens e vídeos]
├── 📄 logo-tugani.png
├── 📄 logo-tugani2.png
└── 📄 vite.svg
```

## 🌐 Etapa 2: Configuração do Domínio

### 2.1. Obter Nameservers da Hostinger
1. Acesse o painel da Hostinger
2. Vá em "Hospedagem" → "Gerenciar"
3. Procure por "Servidores de Nomes" ou "Nameservers"
4. Copie os dois endereços (exemplo):
   - ns1.dns-parking.com
   - ns2.dns-parking.com

### 2.2. Configurar DNS no Registro.br
1. Faça login no Registro.br
2. Clique no seu domínio
3. Vá em "DNS" → "Alterar Servidores DNS"
4. Cole os nameservers da Hostinger:
   - **MASTER**: ns1.dns-parking.com
   - **SLAVE 1**: ns2.dns-parking.com
5. Clique em "Salvar Dados"

⚠️ **IMPORTANTE**: A propagação pode levar 1-24 horas.

## 📤 Etapa 3: Upload dos Arquivos

### 3.1. Acessar o Gerenciador de Arquivos
1. No painel da Hostinger, vá em "Arquivos" → "Gerenciador de Arquivos"
2. Entre na pasta `public_html/`
3. Delete arquivos padrão (default.php, etc.)

### 3.2. Fazer Upload
1. No seu computador, abra a pasta `dist/`
2. **Selecione TODOS os arquivos e pastas DENTRO da pasta dist**
3. No Gerenciador da Hostinger, clique em "Upload"
4. Arraste todos os arquivos selecionados
5. Aguarde o upload completar

### 3.3. Verificar Estrutura Final
Sua pasta `public_html/` deve conter:
- ✅ index.html
- ✅ .htaccess
- ✅ pasta assets/ com todos os arquivos
- ✅ logo-tugani.png
- ✅ logo-tugani2.png
- ✅ vite.svg

## 🔒 Etapa 4: Ativar SSL

### 4.1. Aguardar Propagação DNS
- Teste se consegue acessar seu domínio
- Se não funcionar, aguarde mais tempo

### 4.2. Instalar Certificado SSL
1. No painel da Hostinger, vá em "Avançado" → "SSL"
2. Encontre seu domínio na lista
3. Clique em "Instalar" ou "Ativar"
4. Aguarde alguns minutos
5. Teste com https://www.seusite.com.br

## 🧪 Testes Finais

### Teste 1: Acesso Principal
- ✅ https://www.seusite.com.br
- ✅ https://seusite.com.br (sem www)

### Teste 2: Navegação
- ✅ Menu de navegação funciona
- ✅ Imagens carregam corretamente
- ✅ Vídeos reproduzem
- ✅ Formulários funcionam

### Teste 3: Performance
- ✅ Site carrega rapidamente
- ✅ Responsivo em mobile
- ✅ Cadeado SSL ativo

## 🆘 Solução de Problemas

### Site não carrega
- Verifique se os nameservers estão corretos
- Aguarde mais tempo para propagação DNS
- Confirme se os arquivos estão na pasta correta

### Página 404 em rotas internas
- Verifique se o arquivo .htaccess foi uploadado
- Confirme se o servidor suporta mod_rewrite

### Imagens não carregam
- Verifique se a pasta assets/ foi uploadada completamente
- Confirme se os caminhos estão corretos

### SSL não funciona
- Aguarde mais tempo após ativação
- Limpe o cache do navegador (Ctrl+Shift+R)
- Teste em modo incógnito

## 📞 Suporte

Se precisar de ajuda:
1. Verifique os logs de erro no painel da Hostinger
2. Teste em diferentes navegadores
3. Use ferramentas como GTmetrix para otimização

---

**🎉 Parabéns! Seu site do Instituto Tugani está pronto para o mundo!**
