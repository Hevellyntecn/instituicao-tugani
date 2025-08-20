#!/bin/bash

# Script de Deploy - Instituto Tugani
# Este script automatiza o processo de build e preparação para deploy

echo "🚀 Iniciando deploy do Instituto Tugani..."

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale o Node.js primeiro."
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado. Por favor, instale o npm primeiro."
    exit 1
fi

echo "📦 Instalando dependências..."
npm install

echo "🔨 Gerando build de produção..."
npm run build:prod

# Verificar se a build foi bem-sucedida
if [ ! -d "dist" ]; then
    echo "❌ Erro: Pasta dist não foi criada. Verifique os erros de build."
    exit 1
fi

echo "✅ Build gerada com sucesso!"
echo ""
echo "📁 Arquivos prontos para upload na pasta: dist/"
echo ""
echo "📋 Próximos passos:"
echo "1. Acesse o painel da Hostinger"
echo "2. Vá em 'Arquivos' → 'Gerenciador de Arquivos'"
echo "3. Entre na pasta public_html/"
echo "4. Faça upload de TODOS os arquivos da pasta dist/"
echo ""
echo "📖 Para instruções completas, consulte: DEPLOY_INSTRUCTIONS.md"
echo ""
echo "🎉 Deploy preparado com sucesso!"
