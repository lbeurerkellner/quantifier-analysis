#!/bin/bash
echo "⚙️  Compiling Tests..."
npx tsc --build test-build/tsconfig.tests.json
echo "🔤  Compiling Grammar..."
node util/compile-grammar.js src/ast/Grammar.pegjs test-build/build/src/ast/
echo "📊  Running Tests..."
npx mocha test-build/build/test/**/*.test.js