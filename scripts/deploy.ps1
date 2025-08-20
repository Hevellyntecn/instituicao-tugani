# Script de Deploy - Instituto Tugani (Windows PowerShell)
Write-Host "🚀 Iniciando deploy do Instituto Tugani..." -ForegroundColor Green

# Verificar se o Node.js está instalado
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js não encontrado. Por favor, instale o Node.js primeiro." -ForegroundColor Red
    exit 1
}

# Verificar se o npm está instalado
try {
    $npmVersion = npm --version
    Write-Host "✅ npm encontrado: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm não encontrado. Por favor, instale o npm primeiro." -ForegroundColor Red
    exit 1
}

Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
npm install

Write-Host "🔨 Gerando build de produção..." -ForegroundColor Yellow
npm run build:prod

# Verificar se a build foi bem-sucedida
if (Test-Path "dist") {
    Write-Host "✅ Build gerada com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📁 Arquivos prontos para upload na pasta: dist/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📋 Próximos passos:" -ForegroundColor Yellow
    Write-Host "1. Acesse o painel da Hostinger" -ForegroundColor White
    Write-Host "2. Vá em 'Arquivos' → 'Gerenciador de Arquivos'" -ForegroundColor White
    Write-Host "3. Entre na pasta public_html/" -ForegroundColor White
    Write-Host "4. Faça upload de TODOS os arquivos da pasta dist/" -ForegroundColor White
    Write-Host ""
    Write-Host "📖 Para instruções completas, consulte: DEPLOY_INSTRUCTIONS.md" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "🎉 Deploy preparado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "❌ Erro: Pasta dist não foi criada. Verifique os erros de build." -ForegroundColor Red
    exit 1
}
