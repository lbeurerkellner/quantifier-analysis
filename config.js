{
    "mode": "development",
    "bail": false,
    "devtool": "cheap-module-source-map",
    "entry": [
        "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/react-dev-utils/webpackHotDevClient.js",
        "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/src/index.tsx"
    ],
    "output": {
        "pathinfo": true,
        "filename": "static/js/bundle.js",
        "futureEmitAssets": true,
        "chunkFilename": "static/js/[name].chunk.js",
        "publicPath": "/",
        "jsonpFunction": "webpackJsonpquantifiers",
        "globalObject": "this"
    },
    "optimization": {
        "minimize": false,
        "minimizer": [
            {
                "options": {
                    "test": {},
                    "extractComments": true,
                    "sourceMap": true,
                    "cache": true,
                    "parallel": true,
                    "terserOptions": {
                        "parse": {
                            "ecma": 8
                        },
                        "compress": {
                            "ecma": 5,
                            "warnings": false,
                            "comparisons": false,
                            "inline": 2
                        },
                        "mangle": {
                            "safari10": true
                        },
                        "keep_classnames": false,
                        "keep_fnames": false,
                        "output": {
                            "ecma": 5,
                            "comments": false,
                            "ascii_only": true
                        }
                    }
                }
            },
            {
                "pluginDescriptor": {
                    "name": "OptimizeCssAssetsWebpackPlugin"
                },
                "options": {
                    "assetProcessors": [
                        {
                            "phase": "compilation.optimize-chunk-assets",
                            "regExp": {}
                        }
                    ],
                    "assetNameRegExp": {},
                    "cssProcessorOptions": {
                        "map": {
                            "inline": false,
                            "annotation": true
                        }
                    },
                    "cssProcessorPluginOptions": {}
                },
                "phaseAssetProcessors": {
                    "compilation.optimize-chunk-assets": [
                        {
                            "phase": "compilation.optimize-chunk-assets",
                            "regExp": {}
                        }
                    ],
                    "compilation.optimize-assets": [],
                    "emit": []
                },
                "deleteAssetsMap": {}
            }
        ],
        "splitChunks": {
            "chunks": "all",
            "name": false
        },
        "runtimeChunk": {}
    },
    "resolve": {
        "modules": [
            "node_modules",
            "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules"
        ],
        "extensions": [
            ".web.mjs",
            ".mjs",
            ".web.js",
            ".js",
            ".web.ts",
            ".ts",
            ".web.tsx",
            ".tsx",
            ".json",
            ".web.jsx",
            ".jsx",
            ".pegjs"
        ],
        "alias": {
            "react-native": "react-native-web"
        },
        "plugins": [
            {
                "topLevelLoader": {}
            },
            {
                "appSrcs": [
                    "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/src"
                ],
                "allowedFiles": {}
            }
        ]
    },
    "resolveLoader": {
        "plugins": [
            {}
        ]
    },
    "module": {
        "strictExportPresence": true,
        "rules": [
            {
                "test": {},
                "exclude": {},
                "use": [
                    "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/util/pegjs-grammar-loader.js"
                ]
            },
            {
                "parser": {
                    "requireEnsure": false
                }
            },
            {
                "test": {},
                "enforce": "pre",
                "use": [
                    {
                        "options": {
                            "cache": true,
                            "formatter": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/react-dev-utils/eslintFormatter.js",
                            "eslintPath": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/eslint/lib/api.js",
                            "resolvePluginsRelativeTo": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/react-scripts/config",
                            "ignore": false,
                            "baseConfig": {
                                "extends": [
                                    "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/eslint-config-react-app/index.js"
                                ]
                            },
                            "useEslintrc": false
                        },
                        "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/eslint-loader/dist/cjs.js"
                    }
                ],
                "include": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/src"
            },
            {
                "oneOf": [
                    {
                        "test": [
                            {},
                            {},
                            {},
                            {}
                        ],
                        "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/url-loader/dist/cjs.js",
                        "options": {
                            "limit": 10000,
                            "name": "static/media/[name].[hash:8].[ext]"
                        }
                    },
                    {
                        "test": {},
                        "include": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/src",
                        "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/babel-loader/lib/index.js",
                        "options": {
                            "customize": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/babel-preset-react-app/webpack-overrides.js",
                            "babelrc": false,
                            "configFile": false,
                            "presets": [
                                "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/babel-preset-react-app/index.js"
                            ],
                            "cacheIdentifier": "development:babel-plugin-named-asset-import@0.3.5:babel-preset-react-app@9.1.0:react-dev-utils@10.0.0:react-scripts@3.3.0",
                            "plugins": [
                                [
                                    "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/babel-plugin-named-asset-import/index.js",
                                    {
                                        "loaderMap": {
                                            "svg": {
                                                "ReactComponent": "@svgr/webpack?-svgo,+titleProp,+ref![path]"
                                            }
                                        }
                                    }
                                ]
                            ],
                            "cacheDirectory": true,
                            "cacheCompression": false,
                            "compact": false
                        }
                    },
                    {
                        "test": {},
                        "exclude": {},
                        "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/babel-loader/lib/index.js",
                        "options": {
                            "babelrc": false,
                            "configFile": false,
                            "compact": false,
                            "presets": [
                                [
                                    "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/babel-preset-react-app/dependencies.js",
                                    {
                                        "helpers": true
                                    }
                                ]
                            ],
                            "cacheDirectory": true,
                            "cacheCompression": false,
                            "cacheIdentifier": "development:babel-plugin-named-asset-import@0.3.5:babel-preset-react-app@9.1.0:react-dev-utils@10.0.0:react-scripts@3.3.0",
                            "sourceMaps": true,
                            "inputSourceMap": true
                        }
                    },
                    {
                        "test": {},
                        "exclude": {},
                        "use": [
                            "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/react-scripts/node_modules/style-loader/dist/index.js",
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/css-loader/dist/cjs.js",
                                "options": {
                                    "importLoaders": 1,
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/postcss-loader/src/index.js",
                                "options": {
                                    "ident": "postcss",
                                    "sourceMap": false
                                }
                            }
                        ],
                        "sideEffects": true
                    },
                    {
                        "test": {},
                        "use": [
                            "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/react-scripts/node_modules/style-loader/dist/index.js",
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/css-loader/dist/cjs.js",
                                "options": {
                                    "importLoaders": 1,
                                    "sourceMap": false,
                                    "modules": {}
                                }
                            },
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/postcss-loader/src/index.js",
                                "options": {
                                    "ident": "postcss",
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "exclude": {},
                        "use": [
                            "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/react-scripts/node_modules/style-loader/dist/index.js",
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/css-loader/dist/cjs.js",
                                "options": {
                                    "importLoaders": 2,
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/postcss-loader/src/index.js",
                                "options": {
                                    "ident": "postcss",
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/resolve-url-loader/index.js",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/sass-loader/dist/cjs.js",
                                "options": {
                                    "sourceMap": true
                                }
                            }
                        ],
                        "sideEffects": true
                    },
                    {
                        "test": {},
                        "use": [
                            "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/react-scripts/node_modules/style-loader/dist/index.js",
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/css-loader/dist/cjs.js",
                                "options": {
                                    "importLoaders": 2,
                                    "sourceMap": false,
                                    "modules": {}
                                }
                            },
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/postcss-loader/src/index.js",
                                "options": {
                                    "ident": "postcss",
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/resolve-url-loader/index.js",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/sass-loader/dist/cjs.js",
                                "options": {
                                    "sourceMap": true
                                }
                            }
                        ]
                    },
                    {
                        "loader": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/file-loader/dist/cjs.js",
                        "exclude": [
                            {},
                            {},
                            {}
                        ],
                        "options": {
                            "name": "static/media/[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    "plugins": [
        {
            "options": {
                "template": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/public/index.html",
                "templateContent": false,
                "filename": "index.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "cache": true,
                "showErrors": true,
                "chunks": "all",
                "excludeChunks": [],
                "chunksSortMode": "auto",
                "meta": {},
                "title": "Webpack App",
                "xhtml": false
            },
            "version": 4
        },
        {
            "replacements": {
                "NODE_ENV": "development",
                "PUBLIC_URL": ""
            }
        },
        {
            "appPath": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers"
        },
        {
            "definitions": {
                "process.env": {
                    "NODE_ENV": "\"development\"",
                    "PUBLIC_URL": "\"\""
                }
            }
        },
        {
            "options": {},
            "fullBuildTimeout": 200,
            "requestTimeout": 10000
        },
        {
            "options": {},
            "pathCache": {},
            "fsOperations": 0,
            "primed": false
        },
        {
            "nodeModulesPath": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules"
        },
        {
            "opts": {
                "publicPath": "/",
                "basePath": "",
                "fileName": "asset-manifest.json",
                "transformExtensions": {},
                "writeToFileEmit": false,
                "seed": null,
                "filter": null,
                "map": null,
                "sort": null
            }
        },
        {
            "options": {
                "resourceRegExp": {},
                "contextRegExp": {}
            }
        },
        {
            "eslint": false,
            "eslintOptions": {},
            "tslintAutoFix": false,
            "watchPaths": [],
            "isWatching": false,
            "checkDone": false,
            "compilationDone": false,
            "diagnostics": [],
            "lints": [],
            "startAt": 0,
            "nodeArgs": [],
            "options": {
                "typescript": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/typescript/lib/typescript.js",
                "async": true,
                "useTypescriptIncrementalApi": true,
                "checkSyntacticErrors": true,
                "tsconfig": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/tsconfig.json",
                "reportFiles": [
                    "**",
                    "!**/__tests__/**",
                    "!**/?(*.)(spec|test).*",
                    "!**/src/setupProxy.*",
                    "!**/src/setupTests.*"
                ],
                "silent": true
            },
            "watch": [],
            "ignoreDiagnostics": [],
            "ignoreLints": [],
            "ignoreLintWarnings": false,
            "reportFiles": [
                "**",
                "!**/__tests__/**",
                "!**/?(*.)(spec|test).*",
                "!**/src/setupProxy.*",
                "!**/src/setupTests.*"
            ],
            "logger": {},
            "silent": true,
            "async": true,
            "checkSyntacticErrors": true,
            "workersNumber": 1,
            "memoryLimit": 2048,
            "useColors": true,
            "colors": {
                "level": 3,
                "enabled": true
            },
            "typescript": {
                "versionMajorMinor": "3.7",
                "version": "3.7.4",
                "Comparison": {
                    "0": "EqualTo",
                    "1": "GreaterThan",
                    "LessThan": -1,
                    "-1": "LessThan",
                    "EqualTo": 0,
                    "GreaterThan": 1
                },
                "emptyArray": [],
                "emptyIterator": {},
                "AssertionLevel": {
                    "0": "None",
                    "1": "Normal",
                    "2": "Aggressive",
                    "3": "VeryAggressive",
                    "None": 0,
                    "Normal": 1,
                    "Aggressive": 2,
                    "VeryAggressive": 3
                },
                "Debug": {
                    "currentAssertionLevel": 1,
                    "isDebugging": false
                },
                "performance": {
                    "nullTimer": {}
                },
                "perfLogger": {},
                "SyntaxKind": {
                    "0": "FirstToken",
                    "1": "EndOfFileToken",
                    "2": "FirstTriviaToken",
                    "3": "MultiLineCommentTrivia",
                    "4": "NewLineTrivia",
                    "5": "WhitespaceTrivia",
                    "6": "ShebangTrivia",
                    "7": "LastTriviaToken",
                    "8": "FirstLiteralToken",
                    "9": "BigIntLiteral",
                    "10": "StringLiteral",
                    "11": "JsxText",
                    "12": "JsxTextAllWhiteSpaces",
                    "13": "RegularExpressionLiteral",
                    "14": "FirstTemplateToken",
                    "15": "TemplateHead",
                    "16": "TemplateMiddle",
                    "17": "LastTemplateToken",
                    "18": "FirstPunctuation",
                    "19": "CloseBraceToken",
                    "20": "OpenParenToken",
                    "21": "CloseParenToken",
                    "22": "OpenBracketToken",
                    "23": "CloseBracketToken",
                    "24": "DotToken",
                    "25": "DotDotDotToken",
                    "26": "SemicolonToken",
                    "27": "CommaToken",
                    "28": "QuestionDotToken",
                    "29": "FirstBinaryOperator",
                    "30": "LessThanSlashToken",
                    "31": "GreaterThanToken",
                    "32": "LessThanEqualsToken",
                    "33": "GreaterThanEqualsToken",
                    "34": "EqualsEqualsToken",
                    "35": "ExclamationEqualsToken",
                    "36": "EqualsEqualsEqualsToken",
                    "37": "ExclamationEqualsEqualsToken",
                    "38": "EqualsGreaterThanToken",
                    "39": "PlusToken",
                    "40": "MinusToken",
                    "41": "AsteriskToken",
                    "42": "AsteriskAsteriskToken",
                    "43": "SlashToken",
                    "44": "PercentToken",
                    "45": "PlusPlusToken",
                    "46": "MinusMinusToken",
                    "47": "LessThanLessThanToken",
                    "48": "GreaterThanGreaterThanToken",
                    "49": "GreaterThanGreaterThanGreaterThanToken",
                    "50": "AmpersandToken",
                    "51": "BarToken",
                    "52": "CaretToken",
                    "53": "ExclamationToken",
                    "54": "TildeToken",
                    "55": "AmpersandAmpersandToken",
                    "56": "BarBarToken",
                    "57": "QuestionToken",
                    "58": "ColonToken",
                    "59": "AtToken",
                    "60": "QuestionQuestionToken",
                    "61": "BacktickToken",
                    "62": "FirstAssignment",
                    "63": "FirstCompoundAssignment",
                    "64": "MinusEqualsToken",
                    "65": "AsteriskEqualsToken",
                    "66": "AsteriskAsteriskEqualsToken",
                    "67": "SlashEqualsToken",
                    "68": "PercentEqualsToken",
                    "69": "LessThanLessThanEqualsToken",
                    "70": "GreaterThanGreaterThanEqualsToken",
                    "71": "GreaterThanGreaterThanGreaterThanEqualsToken",
                    "72": "AmpersandEqualsToken",
                    "73": "BarEqualsToken",
                    "74": "LastBinaryOperator",
                    "75": "Identifier",
                    "76": "FirstKeyword",
                    "77": "CaseKeyword",
                    "78": "CatchKeyword",
                    "79": "ClassKeyword",
                    "80": "ConstKeyword",
                    "81": "ContinueKeyword",
                    "82": "DebuggerKeyword",
                    "83": "DefaultKeyword",
                    "84": "DeleteKeyword",
                    "85": "DoKeyword",
                    "86": "ElseKeyword",
                    "87": "EnumKeyword",
                    "88": "ExportKeyword",
                    "89": "ExtendsKeyword",
                    "90": "FalseKeyword",
                    "91": "FinallyKeyword",
                    "92": "ForKeyword",
                    "93": "FunctionKeyword",
                    "94": "IfKeyword",
                    "95": "ImportKeyword",
                    "96": "InKeyword",
                    "97": "InstanceOfKeyword",
                    "98": "NewKeyword",
                    "99": "NullKeyword",
                    "100": "ReturnKeyword",
                    "101": "SuperKeyword",
                    "102": "SwitchKeyword",
                    "103": "ThisKeyword",
                    "104": "ThrowKeyword",
                    "105": "TrueKeyword",
                    "106": "TryKeyword",
                    "107": "TypeOfKeyword",
                    "108": "VarKeyword",
                    "109": "VoidKeyword",
                    "110": "WhileKeyword",
                    "111": "LastReservedWord",
                    "112": "FirstFutureReservedWord",
                    "113": "InterfaceKeyword",
                    "114": "LetKeyword",
                    "115": "PackageKeyword",
                    "116": "PrivateKeyword",
                    "117": "ProtectedKeyword",
                    "118": "PublicKeyword",
                    "119": "StaticKeyword",
                    "120": "LastFutureReservedWord",
                    "121": "FirstContextualKeyword",
                    "122": "AsKeyword",
                    "123": "AssertsKeyword",
                    "124": "AnyKeyword",
                    "125": "AsyncKeyword",
                    "126": "AwaitKeyword",
                    "127": "BooleanKeyword",
                    "128": "ConstructorKeyword",
                    "129": "DeclareKeyword",
                    "130": "GetKeyword",
                    "131": "InferKeyword",
                    "132": "IsKeyword",
                    "133": "KeyOfKeyword",
                    "134": "ModuleKeyword",
                    "135": "NamespaceKeyword",
                    "136": "NeverKeyword",
                    "137": "ReadonlyKeyword",
                    "138": "RequireKeyword",
                    "139": "NumberKeyword",
                    "140": "ObjectKeyword",
                    "141": "SetKeyword",
                    "142": "StringKeyword",
                    "143": "SymbolKeyword",
                    "144": "TypeKeyword",
                    "145": "UndefinedKeyword",
                    "146": "UniqueKeyword",
                    "147": "UnknownKeyword",
                    "148": "FromKeyword",
                    "149": "GlobalKeyword",
                    "150": "BigIntKeyword",
                    "151": "LastContextualKeyword",
                    "152": "FirstNode",
                    "153": "ComputedPropertyName",
                    "154": "TypeParameter",
                    "155": "Parameter",
                    "156": "Decorator",
                    "157": "PropertySignature",
                    "158": "PropertyDeclaration",
                    "159": "MethodSignature",
                    "160": "MethodDeclaration",
                    "161": "Constructor",
                    "162": "GetAccessor",
                    "163": "SetAccessor",
                    "164": "CallSignature",
                    "165": "ConstructSignature",
                    "166": "IndexSignature",
                    "167": "FirstTypeNode",
                    "168": "TypeReference",
                    "169": "FunctionType",
                    "170": "ConstructorType",
                    "171": "TypeQuery",
                    "172": "TypeLiteral",
                    "173": "ArrayType",
                    "174": "TupleType",
                    "175": "OptionalType",
                    "176": "RestType",
                    "177": "UnionType",
                    "178": "IntersectionType",
                    "179": "ConditionalType",
                    "180": "InferType",
                    "181": "ParenthesizedType",
                    "182": "ThisType",
                    "183": "TypeOperator",
                    "184": "IndexedAccessType",
                    "185": "MappedType",
                    "186": "LiteralType",
                    "187": "LastTypeNode",
                    "188": "ObjectBindingPattern",
                    "189": "ArrayBindingPattern",
                    "190": "BindingElement",
                    "191": "ArrayLiteralExpression",
                    "192": "ObjectLiteralExpression",
                    "193": "PropertyAccessExpression",
                    "194": "ElementAccessExpression",
                    "195": "CallExpression",
                    "196": "NewExpression",
                    "197": "TaggedTemplateExpression",
                    "198": "TypeAssertionExpression",
                    "199": "ParenthesizedExpression",
                    "200": "FunctionExpression",
                    "201": "ArrowFunction",
                    "202": "DeleteExpression",
                    "203": "TypeOfExpression",
                    "204": "VoidExpression",
                    "205": "AwaitExpression",
                    "206": "PrefixUnaryExpression",
                    "207": "PostfixUnaryExpression",
                    "208": "BinaryExpression",
                    "209": "ConditionalExpression",
                    "210": "TemplateExpression",
                    "211": "YieldExpression",
                    "212": "SpreadElement",
                    "213": "ClassExpression",
                    "214": "OmittedExpression",
                    "215": "ExpressionWithTypeArguments",
                    "216": "AsExpression",
                    "217": "NonNullExpression",
                    "218": "MetaProperty",
                    "219": "SyntheticExpression",
                    "220": "TemplateSpan",
                    "221": "SemicolonClassElement",
                    "222": "Block",
                    "223": "EmptyStatement",
                    "224": "FirstStatement",
                    "225": "ExpressionStatement",
                    "226": "IfStatement",
                    "227": "DoStatement",
                    "228": "WhileStatement",
                    "229": "ForStatement",
                    "230": "ForInStatement",
                    "231": "ForOfStatement",
                    "232": "ContinueStatement",
                    "233": "BreakStatement",
                    "234": "ReturnStatement",
                    "235": "WithStatement",
                    "236": "SwitchStatement",
                    "237": "LabeledStatement",
                    "238": "ThrowStatement",
                    "239": "TryStatement",
                    "240": "LastStatement",
                    "241": "VariableDeclaration",
                    "242": "VariableDeclarationList",
                    "243": "FunctionDeclaration",
                    "244": "ClassDeclaration",
                    "245": "InterfaceDeclaration",
                    "246": "TypeAliasDeclaration",
                    "247": "EnumDeclaration",
                    "248": "ModuleDeclaration",
                    "249": "ModuleBlock",
                    "250": "CaseBlock",
                    "251": "NamespaceExportDeclaration",
                    "252": "ImportEqualsDeclaration",
                    "253": "ImportDeclaration",
                    "254": "ImportClause",
                    "255": "NamespaceImport",
                    "256": "NamedImports",
                    "257": "ImportSpecifier",
                    "258": "ExportAssignment",
                    "259": "ExportDeclaration",
                    "260": "NamedExports",
                    "261": "ExportSpecifier",
                    "262": "MissingDeclaration",
                    "263": "ExternalModuleReference",
                    "264": "JsxElement",
                    "265": "JsxSelfClosingElement",
                    "266": "JsxOpeningElement",
                    "267": "JsxClosingElement",
                    "268": "JsxFragment",
                    "269": "JsxOpeningFragment",
                    "270": "JsxClosingFragment",
                    "271": "JsxAttribute",
                    "272": "JsxAttributes",
                    "273": "JsxSpreadAttribute",
                    "274": "JsxExpression",
                    "275": "CaseClause",
                    "276": "DefaultClause",
                    "277": "HeritageClause",
                    "278": "CatchClause",
                    "279": "PropertyAssignment",
                    "280": "ShorthandPropertyAssignment",
                    "281": "SpreadAssignment",
                    "282": "EnumMember",
                    "283": "UnparsedPrologue",
                    "284": "UnparsedPrepend",
                    "285": "UnparsedText",
                    "286": "UnparsedInternalText",
                    "287": "UnparsedSyntheticReference",
                    "288": "SourceFile",
                    "289": "Bundle",
                    "290": "UnparsedSource",
                    "291": "InputFiles",
                    "292": "FirstJSDocNode",
                    "293": "JSDocAllType",
                    "294": "JSDocUnknownType",
                    "295": "JSDocNullableType",
                    "296": "JSDocNonNullableType",
                    "297": "JSDocOptionalType",
                    "298": "JSDocFunctionType",
                    "299": "JSDocVariadicType",
                    "300": "JSDocNamepathType",
                    "301": "JSDocComment",
                    "302": "JSDocTypeLiteral",
                    "303": "JSDocSignature",
                    "304": "FirstJSDocTagNode",
                    "305": "JSDocAugmentsTag",
                    "306": "JSDocAuthorTag",
                    "307": "JSDocClassTag",
                    "308": "JSDocCallbackTag",
                    "309": "JSDocEnumTag",
                    "310": "JSDocParameterTag",
                    "311": "JSDocReturnTag",
                    "312": "JSDocThisTag",
                    "313": "JSDocTypeTag",
                    "314": "JSDocTemplateTag",
                    "315": "JSDocTypedefTag",
                    "316": "LastJSDocTagNode",
                    "317": "SyntaxList",
                    "318": "NotEmittedStatement",
                    "319": "PartiallyEmittedExpression",
                    "320": "CommaListExpression",
                    "321": "MergeDeclarationMarker",
                    "322": "EndOfDeclarationMarker",
                    "323": "SyntheticReferenceExpression",
                    "324": "Count",
                    "Unknown": 0,
                    "EndOfFileToken": 1,
                    "SingleLineCommentTrivia": 2,
                    "MultiLineCommentTrivia": 3,
                    "NewLineTrivia": 4,
                    "WhitespaceTrivia": 5,
                    "ShebangTrivia": 6,
                    "ConflictMarkerTrivia": 7,
                    "NumericLiteral": 8,
                    "BigIntLiteral": 9,
                    "StringLiteral": 10,
                    "JsxText": 11,
                    "JsxTextAllWhiteSpaces": 12,
                    "RegularExpressionLiteral": 13,
                    "NoSubstitutionTemplateLiteral": 14,
                    "TemplateHead": 15,
                    "TemplateMiddle": 16,
                    "TemplateTail": 17,
                    "OpenBraceToken": 18,
                    "CloseBraceToken": 19,
                    "OpenParenToken": 20,
                    "CloseParenToken": 21,
                    "OpenBracketToken": 22,
                    "CloseBracketToken": 23,
                    "DotToken": 24,
                    "DotDotDotToken": 25,
                    "SemicolonToken": 26,
                    "CommaToken": 27,
                    "QuestionDotToken": 28,
                    "LessThanToken": 29,
                    "LessThanSlashToken": 30,
                    "GreaterThanToken": 31,
                    "LessThanEqualsToken": 32,
                    "GreaterThanEqualsToken": 33,
                    "EqualsEqualsToken": 34,
                    "ExclamationEqualsToken": 35,
                    "EqualsEqualsEqualsToken": 36,
                    "ExclamationEqualsEqualsToken": 37,
                    "EqualsGreaterThanToken": 38,
                    "PlusToken": 39,
                    "MinusToken": 40,
                    "AsteriskToken": 41,
                    "AsteriskAsteriskToken": 42,
                    "SlashToken": 43,
                    "PercentToken": 44,
                    "PlusPlusToken": 45,
                    "MinusMinusToken": 46,
                    "LessThanLessThanToken": 47,
                    "GreaterThanGreaterThanToken": 48,
                    "GreaterThanGreaterThanGreaterThanToken": 49,
                    "AmpersandToken": 50,
                    "BarToken": 51,
                    "CaretToken": 52,
                    "ExclamationToken": 53,
                    "TildeToken": 54,
                    "AmpersandAmpersandToken": 55,
                    "BarBarToken": 56,
                    "QuestionToken": 57,
                    "ColonToken": 58,
                    "AtToken": 59,
                    "QuestionQuestionToken": 60,
                    "BacktickToken": 61,
                    "EqualsToken": 62,
                    "PlusEqualsToken": 63,
                    "MinusEqualsToken": 64,
                    "AsteriskEqualsToken": 65,
                    "AsteriskAsteriskEqualsToken": 66,
                    "SlashEqualsToken": 67,
                    "PercentEqualsToken": 68,
                    "LessThanLessThanEqualsToken": 69,
                    "GreaterThanGreaterThanEqualsToken": 70,
                    "GreaterThanGreaterThanGreaterThanEqualsToken": 71,
                    "AmpersandEqualsToken": 72,
                    "BarEqualsToken": 73,
                    "CaretEqualsToken": 74,
                    "Identifier": 75,
                    "BreakKeyword": 76,
                    "CaseKeyword": 77,
                    "CatchKeyword": 78,
                    "ClassKeyword": 79,
                    "ConstKeyword": 80,
                    "ContinueKeyword": 81,
                    "DebuggerKeyword": 82,
                    "DefaultKeyword": 83,
                    "DeleteKeyword": 84,
                    "DoKeyword": 85,
                    "ElseKeyword": 86,
                    "EnumKeyword": 87,
                    "ExportKeyword": 88,
                    "ExtendsKeyword": 89,
                    "FalseKeyword": 90,
                    "FinallyKeyword": 91,
                    "ForKeyword": 92,
                    "FunctionKeyword": 93,
                    "IfKeyword": 94,
                    "ImportKeyword": 95,
                    "InKeyword": 96,
                    "InstanceOfKeyword": 97,
                    "NewKeyword": 98,
                    "NullKeyword": 99,
                    "ReturnKeyword": 100,
                    "SuperKeyword": 101,
                    "SwitchKeyword": 102,
                    "ThisKeyword": 103,
                    "ThrowKeyword": 104,
                    "TrueKeyword": 105,
                    "TryKeyword": 106,
                    "TypeOfKeyword": 107,
                    "VarKeyword": 108,
                    "VoidKeyword": 109,
                    "WhileKeyword": 110,
                    "WithKeyword": 111,
                    "ImplementsKeyword": 112,
                    "InterfaceKeyword": 113,
                    "LetKeyword": 114,
                    "PackageKeyword": 115,
                    "PrivateKeyword": 116,
                    "ProtectedKeyword": 117,
                    "PublicKeyword": 118,
                    "StaticKeyword": 119,
                    "YieldKeyword": 120,
                    "AbstractKeyword": 121,
                    "AsKeyword": 122,
                    "AssertsKeyword": 123,
                    "AnyKeyword": 124,
                    "AsyncKeyword": 125,
                    "AwaitKeyword": 126,
                    "BooleanKeyword": 127,
                    "ConstructorKeyword": 128,
                    "DeclareKeyword": 129,
                    "GetKeyword": 130,
                    "InferKeyword": 131,
                    "IsKeyword": 132,
                    "KeyOfKeyword": 133,
                    "ModuleKeyword": 134,
                    "NamespaceKeyword": 135,
                    "NeverKeyword": 136,
                    "ReadonlyKeyword": 137,
                    "RequireKeyword": 138,
                    "NumberKeyword": 139,
                    "ObjectKeyword": 140,
                    "SetKeyword": 141,
                    "StringKeyword": 142,
                    "SymbolKeyword": 143,
                    "TypeKeyword": 144,
                    "UndefinedKeyword": 145,
                    "UniqueKeyword": 146,
                    "UnknownKeyword": 147,
                    "FromKeyword": 148,
                    "GlobalKeyword": 149,
                    "BigIntKeyword": 150,
                    "OfKeyword": 151,
                    "QualifiedName": 152,
                    "ComputedPropertyName": 153,
                    "TypeParameter": 154,
                    "Parameter": 155,
                    "Decorator": 156,
                    "PropertySignature": 157,
                    "PropertyDeclaration": 158,
                    "MethodSignature": 159,
                    "MethodDeclaration": 160,
                    "Constructor": 161,
                    "GetAccessor": 162,
                    "SetAccessor": 163,
                    "CallSignature": 164,
                    "ConstructSignature": 165,
                    "IndexSignature": 166,
                    "TypePredicate": 167,
                    "TypeReference": 168,
                    "FunctionType": 169,
                    "ConstructorType": 170,
                    "TypeQuery": 171,
                    "TypeLiteral": 172,
                    "ArrayType": 173,
                    "TupleType": 174,
                    "OptionalType": 175,
                    "RestType": 176,
                    "UnionType": 177,
                    "IntersectionType": 178,
                    "ConditionalType": 179,
                    "InferType": 180,
                    "ParenthesizedType": 181,
                    "ThisType": 182,
                    "TypeOperator": 183,
                    "IndexedAccessType": 184,
                    "MappedType": 185,
                    "LiteralType": 186,
                    "ImportType": 187,
                    "ObjectBindingPattern": 188,
                    "ArrayBindingPattern": 189,
                    "BindingElement": 190,
                    "ArrayLiteralExpression": 191,
                    "ObjectLiteralExpression": 192,
                    "PropertyAccessExpression": 193,
                    "ElementAccessExpression": 194,
                    "CallExpression": 195,
                    "NewExpression": 196,
                    "TaggedTemplateExpression": 197,
                    "TypeAssertionExpression": 198,
                    "ParenthesizedExpression": 199,
                    "FunctionExpression": 200,
                    "ArrowFunction": 201,
                    "DeleteExpression": 202,
                    "TypeOfExpression": 203,
                    "VoidExpression": 204,
                    "AwaitExpression": 205,
                    "PrefixUnaryExpression": 206,
                    "PostfixUnaryExpression": 207,
                    "BinaryExpression": 208,
                    "ConditionalExpression": 209,
                    "TemplateExpression": 210,
                    "YieldExpression": 211,
                    "SpreadElement": 212,
                    "ClassExpression": 213,
                    "OmittedExpression": 214,
                    "ExpressionWithTypeArguments": 215,
                    "AsExpression": 216,
                    "NonNullExpression": 217,
                    "MetaProperty": 218,
                    "SyntheticExpression": 219,
                    "TemplateSpan": 220,
                    "SemicolonClassElement": 221,
                    "Block": 222,
                    "EmptyStatement": 223,
                    "VariableStatement": 224,
                    "ExpressionStatement": 225,
                    "IfStatement": 226,
                    "DoStatement": 227,
                    "WhileStatement": 228,
                    "ForStatement": 229,
                    "ForInStatement": 230,
                    "ForOfStatement": 231,
                    "ContinueStatement": 232,
                    "BreakStatement": 233,
                    "ReturnStatement": 234,
                    "WithStatement": 235,
                    "SwitchStatement": 236,
                    "LabeledStatement": 237,
                    "ThrowStatement": 238,
                    "TryStatement": 239,
                    "DebuggerStatement": 240,
                    "VariableDeclaration": 241,
                    "VariableDeclarationList": 242,
                    "FunctionDeclaration": 243,
                    "ClassDeclaration": 244,
                    "InterfaceDeclaration": 245,
                    "TypeAliasDeclaration": 246,
                    "EnumDeclaration": 247,
                    "ModuleDeclaration": 248,
                    "ModuleBlock": 249,
                    "CaseBlock": 250,
                    "NamespaceExportDeclaration": 251,
                    "ImportEqualsDeclaration": 252,
                    "ImportDeclaration": 253,
                    "ImportClause": 254,
                    "NamespaceImport": 255,
                    "NamedImports": 256,
                    "ImportSpecifier": 257,
                    "ExportAssignment": 258,
                    "ExportDeclaration": 259,
                    "NamedExports": 260,
                    "ExportSpecifier": 261,
                    "MissingDeclaration": 262,
                    "ExternalModuleReference": 263,
                    "JsxElement": 264,
                    "JsxSelfClosingElement": 265,
                    "JsxOpeningElement": 266,
                    "JsxClosingElement": 267,
                    "JsxFragment": 268,
                    "JsxOpeningFragment": 269,
                    "JsxClosingFragment": 270,
                    "JsxAttribute": 271,
                    "JsxAttributes": 272,
                    "JsxSpreadAttribute": 273,
                    "JsxExpression": 274,
                    "CaseClause": 275,
                    "DefaultClause": 276,
                    "HeritageClause": 277,
                    "CatchClause": 278,
                    "PropertyAssignment": 279,
                    "ShorthandPropertyAssignment": 280,
                    "SpreadAssignment": 281,
                    "EnumMember": 282,
                    "UnparsedPrologue": 283,
                    "UnparsedPrepend": 284,
                    "UnparsedText": 285,
                    "UnparsedInternalText": 286,
                    "UnparsedSyntheticReference": 287,
                    "SourceFile": 288,
                    "Bundle": 289,
                    "UnparsedSource": 290,
                    "InputFiles": 291,
                    "JSDocTypeExpression": 292,
                    "JSDocAllType": 293,
                    "JSDocUnknownType": 294,
                    "JSDocNullableType": 295,
                    "JSDocNonNullableType": 296,
                    "JSDocOptionalType": 297,
                    "JSDocFunctionType": 298,
                    "JSDocVariadicType": 299,
                    "JSDocNamepathType": 300,
                    "JSDocComment": 301,
                    "JSDocTypeLiteral": 302,
                    "JSDocSignature": 303,
                    "JSDocTag": 304,
                    "JSDocAugmentsTag": 305,
                    "JSDocAuthorTag": 306,
                    "JSDocClassTag": 307,
                    "JSDocCallbackTag": 308,
                    "JSDocEnumTag": 309,
                    "JSDocParameterTag": 310,
                    "JSDocReturnTag": 311,
                    "JSDocThisTag": 312,
                    "JSDocTypeTag": 313,
                    "JSDocTemplateTag": 314,
                    "JSDocTypedefTag": 315,
                    "JSDocPropertyTag": 316,
                    "SyntaxList": 317,
                    "NotEmittedStatement": 318,
                    "PartiallyEmittedExpression": 319,
                    "CommaListExpression": 320,
                    "MergeDeclarationMarker": 321,
                    "EndOfDeclarationMarker": 322,
                    "SyntheticReferenceExpression": 323,
                    "Count": 324,
                    "FirstAssignment": 62,
                    "LastAssignment": 74,
                    "FirstCompoundAssignment": 63,
                    "LastCompoundAssignment": 74,
                    "FirstReservedWord": 76,
                    "LastReservedWord": 111,
                    "FirstKeyword": 76,
                    "LastKeyword": 151,
                    "FirstFutureReservedWord": 112,
                    "LastFutureReservedWord": 120,
                    "FirstTypeNode": 167,
                    "LastTypeNode": 187,
                    "FirstPunctuation": 18,
                    "LastPunctuation": 74,
                    "FirstToken": 0,
                    "LastToken": 151,
                    "FirstTriviaToken": 2,
                    "LastTriviaToken": 7,
                    "FirstLiteralToken": 8,
                    "LastLiteralToken": 14,
                    "FirstTemplateToken": 14,
                    "LastTemplateToken": 17,
                    "FirstBinaryOperator": 29,
                    "LastBinaryOperator": 74,
                    "FirstStatement": 224,
                    "LastStatement": 240,
                    "FirstNode": 152,
                    "FirstJSDocNode": 292,
                    "LastJSDocNode": 316,
                    "FirstJSDocTagNode": 304,
                    "LastJSDocTagNode": 316,
                    "FirstContextualKeyword": 121,
                    "LastContextualKeyword": 151
                },
                "NodeFlags": {
                    "0": "None",
                    "1": "Let",
                    "2": "Const",
                    "3": "BlockScoped",
                    "4": "NestedNamespace",
                    "8": "Synthesized",
                    "16": "Namespace",
                    "32": "OptionalChain",
                    "64": "ExportContext",
                    "128": "ContainsThis",
                    "256": "HasImplicitReturn",
                    "512": "HasExplicitReturn",
                    "768": "ReachabilityCheckFlags",
                    "1024": "GlobalAugmentation",
                    "2048": "HasAsyncFunctions",
                    "2816": "ReachabilityAndEmitFlags",
                    "4096": "DisallowInContext",
                    "8192": "YieldContext",
                    "16384": "DecoratorContext",
                    "32768": "AwaitContext",
                    "40960": "TypeExcludesFlags",
                    "65536": "ThisNodeHasError",
                    "131072": "JavaScriptFile",
                    "262144": "ThisNodeOrAnySubNodesHasError",
                    "524288": "HasAggregatedChildData",
                    "1048576": "PossiblyContainsDynamicImport",
                    "2097152": "PossiblyContainsImportMeta",
                    "3145728": "PermanentlySetIncrementalFlags",
                    "4194304": "JSDoc",
                    "8388608": "Ambient",
                    "16777216": "InWithStatement",
                    "25358336": "ContextFlags",
                    "33554432": "JsonFile",
                    "None": 0,
                    "Let": 1,
                    "Const": 2,
                    "NestedNamespace": 4,
                    "Synthesized": 8,
                    "Namespace": 16,
                    "OptionalChain": 32,
                    "ExportContext": 64,
                    "ContainsThis": 128,
                    "HasImplicitReturn": 256,
                    "HasExplicitReturn": 512,
                    "GlobalAugmentation": 1024,
                    "HasAsyncFunctions": 2048,
                    "DisallowInContext": 4096,
                    "YieldContext": 8192,
                    "DecoratorContext": 16384,
                    "AwaitContext": 32768,
                    "ThisNodeHasError": 65536,
                    "JavaScriptFile": 131072,
                    "ThisNodeOrAnySubNodesHasError": 262144,
                    "HasAggregatedChildData": 524288,
                    "PossiblyContainsDynamicImport": 1048576,
                    "PossiblyContainsImportMeta": 2097152,
                    "JSDoc": 4194304,
                    "Ambient": 8388608,
                    "InWithStatement": 16777216,
                    "JsonFile": 33554432,
                    "BlockScoped": 3,
                    "ReachabilityCheckFlags": 768,
                    "ReachabilityAndEmitFlags": 2816,
                    "ContextFlags": 25358336,
                    "TypeExcludesFlags": 40960,
                    "PermanentlySetIncrementalFlags": 3145728
                },
                "ModifierFlags": {
                    "0": "None",
                    "1": "Export",
                    "2": "Ambient",
                    "4": "Public",
                    "8": "Private",
                    "16": "Protected",
                    "24": "NonPublicAccessibilityModifier",
                    "28": "AccessibilityModifier",
                    "32": "Static",
                    "64": "Readonly",
                    "92": "ParameterPropertyModifier",
                    "128": "Abstract",
                    "256": "Async",
                    "512": "Default",
                    "513": "ExportDefault",
                    "2048": "Const",
                    "2270": "TypeScriptModifier",
                    "3071": "All",
                    "536870912": "HasComputedFlags",
                    "None": 0,
                    "Export": 1,
                    "Ambient": 2,
                    "Public": 4,
                    "Private": 8,
                    "Protected": 16,
                    "Static": 32,
                    "Readonly": 64,
                    "Abstract": 128,
                    "Async": 256,
                    "Default": 512,
                    "Const": 2048,
                    "HasComputedFlags": 536870912,
                    "AccessibilityModifier": 28,
                    "ParameterPropertyModifier": 92,
                    "NonPublicAccessibilityModifier": 24,
                    "TypeScriptModifier": 2270,
                    "ExportDefault": 513,
                    "All": 3071
                },
                "JsxFlags": {
                    "0": "None",
                    "1": "IntrinsicNamedElement",
                    "2": "IntrinsicIndexedElement",
                    "3": "IntrinsicElement",
                    "None": 0,
                    "IntrinsicNamedElement": 1,
                    "IntrinsicIndexedElement": 2,
                    "IntrinsicElement": 3
                },
                "RelationComparisonResult": {
                    "1": "Succeeded",
                    "2": "Failed",
                    "4": "Reported",
                    "8": "ReportsUnmeasurable",
                    "16": "ReportsUnreliable",
                    "24": "ReportsMask",
                    "Succeeded": 1,
                    "Failed": 2,
                    "Reported": 4,
                    "ReportsUnmeasurable": 8,
                    "ReportsUnreliable": 16,
                    "ReportsMask": 24
                },
                "GeneratedIdentifierFlags": {
                    "0": "None",
                    "1": "Auto",
                    "2": "Loop",
                    "3": "Unique",
                    "4": "Node",
                    "7": "KindMask",
                    "8": "ReservedInNestedScopes",
                    "16": "Optimistic",
                    "32": "FileLevel",
                    "None": 0,
                    "Auto": 1,
                    "Loop": 2,
                    "Unique": 3,
                    "Node": 4,
                    "KindMask": 7,
                    "ReservedInNestedScopes": 8,
                    "Optimistic": 16,
                    "FileLevel": 32
                },
                "TokenFlags": {
                    "0": "None",
                    "1": "PrecedingLineBreak",
                    "2": "PrecedingJSDocComment",
                    "4": "Unterminated",
                    "8": "ExtendedUnicodeEscape",
                    "16": "Scientific",
                    "32": "Octal",
                    "64": "HexSpecifier",
                    "128": "BinarySpecifier",
                    "256": "OctalSpecifier",
                    "384": "BinaryOrOctalSpecifier",
                    "512": "ContainsSeparator",
                    "1008": "NumericLiteralFlags",
                    "1024": "UnicodeEscape",
                    "None": 0,
                    "PrecedingLineBreak": 1,
                    "PrecedingJSDocComment": 2,
                    "Unterminated": 4,
                    "ExtendedUnicodeEscape": 8,
                    "Scientific": 16,
                    "Octal": 32,
                    "HexSpecifier": 64,
                    "BinarySpecifier": 128,
                    "OctalSpecifier": 256,
                    "ContainsSeparator": 512,
                    "UnicodeEscape": 1024,
                    "BinaryOrOctalSpecifier": 384,
                    "NumericLiteralFlags": 1008
                },
                "FlowFlags": {
                    "1": "Unreachable",
                    "2": "Start",
                    "4": "BranchLabel",
                    "8": "LoopLabel",
                    "12": "Label",
                    "16": "Assignment",
                    "32": "TrueCondition",
                    "64": "FalseCondition",
                    "96": "Condition",
                    "128": "SwitchClause",
                    "256": "ArrayMutation",
                    "512": "Call",
                    "1024": "Referenced",
                    "2048": "Shared",
                    "4096": "PreFinally",
                    "8192": "AfterFinally",
                    "16384": "Cached",
                    "Unreachable": 1,
                    "Start": 2,
                    "BranchLabel": 4,
                    "LoopLabel": 8,
                    "Assignment": 16,
                    "TrueCondition": 32,
                    "FalseCondition": 64,
                    "SwitchClause": 128,
                    "ArrayMutation": 256,
                    "Call": 512,
                    "Referenced": 1024,
                    "Shared": 2048,
                    "PreFinally": 4096,
                    "AfterFinally": 8192,
                    "Cached": 16384,
                    "Label": 12,
                    "Condition": 96
                },
                "RefFileKind": {
                    "0": "Import",
                    "1": "ReferenceFile",
                    "2": "TypeReferenceDirective",
                    "Import": 0,
                    "ReferenceFile": 1,
                    "TypeReferenceDirective": 2
                },
                "StructureIsReused": {
                    "0": "Not",
                    "1": "SafeModules",
                    "2": "Completely",
                    "Not": 0,
                    "SafeModules": 1,
                    "Completely": 2
                },
                "ExitStatus": {
                    "0": "Success",
                    "1": "DiagnosticsPresent_OutputsSkipped",
                    "2": "DiagnosticsPresent_OutputsGenerated",
                    "3": "InvalidProject_OutputsSkipped",
                    "4": "ProjectReferenceCycle_OutputsSkupped",
                    "Success": 0,
                    "DiagnosticsPresent_OutputsSkipped": 1,
                    "DiagnosticsPresent_OutputsGenerated": 2,
                    "InvalidProject_OutputsSkipped": 3,
                    "ProjectReferenceCycle_OutputsSkipped": 4,
                    "ProjectReferenceCycle_OutputsSkupped": 4
                },
                "UnionReduction": {
                    "0": "None",
                    "1": "Literal",
                    "2": "Subtype",
                    "None": 0,
                    "Literal": 1,
                    "Subtype": 2
                },
                "ContextFlags": {
                    "0": "None",
                    "1": "Signature",
                    "2": "NoConstraints",
                    "4": "Completion",
                    "None": 0,
                    "Signature": 1,
                    "NoConstraints": 2,
                    "Completion": 4
                },
                "NodeBuilderFlags": {
                    "0": "None",
                    "1": "NoTruncation",
                    "2": "WriteArrayAsGenericType",
                    "4": "GenerateNamesForShadowedTypeParams",
                    "8": "UseStructuralFallback",
                    "16": "ForbidIndexedAccessSymbolReferences",
                    "32": "WriteTypeArgumentsOfSignature",
                    "64": "UseFullyQualifiedType",
                    "128": "UseOnlyExternalAliasing",
                    "256": "SuppressAnyReturnType",
                    "512": "WriteTypeParametersInQualifiedName",
                    "1024": "MultilineObjectLiterals",
                    "2048": "WriteClassExpressionAsTypeLiteral",
                    "4096": "UseTypeOfFunction",
                    "8192": "OmitParameterModifiers",
                    "16384": "UseAliasDefinedOutsideCurrentScope",
                    "32768": "AllowThisInObjectLiteral",
                    "65536": "AllowQualifedNameInPlaceOfIdentifier",
                    "131072": "AllowAnonymousIdentifier",
                    "262144": "AllowEmptyUnionOrIntersection",
                    "524288": "AllowEmptyTuple",
                    "1048576": "AllowUniqueESSymbolType",
                    "2097152": "AllowEmptyIndexInfoType",
                    "4194304": "InObjectTypeLiteral",
                    "8388608": "InTypeAlias",
                    "16777216": "InInitialEntityName",
                    "33554432": "InReverseMappedType",
                    "67108864": "AllowNodeModulesRelativePaths",
                    "70221824": "IgnoreErrors",
                    "134217728": "DoNotIncludeSymbolChain",
                    "None": 0,
                    "NoTruncation": 1,
                    "WriteArrayAsGenericType": 2,
                    "GenerateNamesForShadowedTypeParams": 4,
                    "UseStructuralFallback": 8,
                    "ForbidIndexedAccessSymbolReferences": 16,
                    "WriteTypeArgumentsOfSignature": 32,
                    "UseFullyQualifiedType": 64,
                    "UseOnlyExternalAliasing": 128,
                    "SuppressAnyReturnType": 256,
                    "WriteTypeParametersInQualifiedName": 512,
                    "MultilineObjectLiterals": 1024,
                    "WriteClassExpressionAsTypeLiteral": 2048,
                    "UseTypeOfFunction": 4096,
                    "OmitParameterModifiers": 8192,
                    "UseAliasDefinedOutsideCurrentScope": 16384,
                    "AllowThisInObjectLiteral": 32768,
                    "AllowQualifedNameInPlaceOfIdentifier": 65536,
                    "AllowAnonymousIdentifier": 131072,
                    "AllowEmptyUnionOrIntersection": 262144,
                    "AllowEmptyTuple": 524288,
                    "AllowUniqueESSymbolType": 1048576,
                    "AllowEmptyIndexInfoType": 2097152,
                    "AllowNodeModulesRelativePaths": 67108864,
                    "DoNotIncludeSymbolChain": 134217728,
                    "IgnoreErrors": 70221824,
                    "InObjectTypeLiteral": 4194304,
                    "InTypeAlias": 8388608,
                    "InInitialEntityName": 16777216,
                    "InReverseMappedType": 33554432
                },
                "TypeFormatFlags": {
                    "0": "WriteOwnNameForAnyLike",
                    "1": "NoTruncation",
                    "2": "WriteArrayAsGenericType",
                    "8": "UseStructuralFallback",
                    "32": "WriteTypeArgumentsOfSignature",
                    "64": "UseFullyQualifiedType",
                    "256": "SuppressAnyReturnType",
                    "1024": "MultilineObjectLiterals",
                    "2048": "WriteClassExpressionAsTypeLiteral",
                    "4096": "UseTypeOfFunction",
                    "8192": "OmitParameterModifiers",
                    "16384": "UseAliasDefinedOutsideCurrentScope",
                    "131072": "AddUndefined",
                    "262144": "WriteArrowStyleSignature",
                    "524288": "InArrayType",
                    "1048576": "AllowUniqueESSymbolType",
                    "2097152": "InElementType",
                    "4194304": "InFirstTypeArgument",
                    "8388608": "InTypeAlias",
                    "9469291": "NodeBuilderFlagsMask",
                    "None": 0,
                    "NoTruncation": 1,
                    "WriteArrayAsGenericType": 2,
                    "UseStructuralFallback": 8,
                    "WriteTypeArgumentsOfSignature": 32,
                    "UseFullyQualifiedType": 64,
                    "SuppressAnyReturnType": 256,
                    "MultilineObjectLiterals": 1024,
                    "WriteClassExpressionAsTypeLiteral": 2048,
                    "UseTypeOfFunction": 4096,
                    "OmitParameterModifiers": 8192,
                    "UseAliasDefinedOutsideCurrentScope": 16384,
                    "AllowUniqueESSymbolType": 1048576,
                    "AddUndefined": 131072,
                    "WriteArrowStyleSignature": 262144,
                    "InArrayType": 524288,
                    "InElementType": 2097152,
                    "InFirstTypeArgument": 4194304,
                    "InTypeAlias": 8388608,
                    "WriteOwnNameForAnyLike": 0,
                    "NodeBuilderFlagsMask": 9469291
                },
                "SymbolFormatFlags": {
                    "0": "None",
                    "1": "WriteTypeParametersOrArguments",
                    "2": "UseOnlyExternalAliasing",
                    "4": "AllowAnyNodeKind",
                    "8": "UseAliasDefinedOutsideCurrentScope",
                    "16": "DoNotIncludeSymbolChain",
                    "None": 0,
                    "WriteTypeParametersOrArguments": 1,
                    "UseOnlyExternalAliasing": 2,
                    "AllowAnyNodeKind": 4,
                    "UseAliasDefinedOutsideCurrentScope": 8,
                    "DoNotIncludeSymbolChain": 16
                },
                "SymbolAccessibility": {
                    "0": "Accessible",
                    "1": "NotAccessible",
                    "2": "CannotBeNamed",
                    "Accessible": 0,
                    "NotAccessible": 1,
                    "CannotBeNamed": 2
                },
                "SyntheticSymbolKind": {
                    "0": "UnionOrIntersection",
                    "1": "Spread",
                    "UnionOrIntersection": 0,
                    "Spread": 1
                },
                "TypePredicateKind": {
                    "0": "This",
                    "1": "Identifier",
                    "2": "AssertsThis",
                    "3": "AssertsIdentifier",
                    "This": 0,
                    "Identifier": 1,
                    "AssertsThis": 2,
                    "AssertsIdentifier": 3
                },
                "TypeReferenceSerializationKind": {
                    "0": "Unknown",
                    "1": "TypeWithConstructSignatureAndValue",
                    "2": "VoidNullableOrNeverType",
                    "3": "NumberLikeType",
                    "4": "BigIntLikeType",
                    "5": "StringLikeType",
                    "6": "BooleanType",
                    "7": "ArrayLikeType",
                    "8": "ESSymbolType",
                    "9": "Promise",
                    "10": "TypeWithCallSignature",
                    "11": "ObjectType",
                    "Unknown": 0,
                    "TypeWithConstructSignatureAndValue": 1,
                    "VoidNullableOrNeverType": 2,
                    "NumberLikeType": 3,
                    "BigIntLikeType": 4,
                    "StringLikeType": 5,
                    "BooleanType": 6,
                    "ArrayLikeType": 7,
                    "ESSymbolType": 8,
                    "Promise": 9,
                    "TypeWithCallSignature": 10,
                    "ObjectType": 11
                },
                "SymbolFlags": {
                    "0": "NamespaceModuleExcludes",
                    "1": "FunctionScopedVariable",
                    "2": "BlockScopedVariable",
                    "3": "Variable",
                    "4": "Property",
                    "8": "EnumMember",
                    "16": "Function",
                    "32": "Class",
                    "64": "Interface",
                    "112": "ExportSupportsDefaultModifier",
                    "128": "ConstEnum",
                    "256": "RegularEnum",
                    "384": "Enum",
                    "418": "BlockScoped",
                    "512": "ValueModule",
                    "944": "ExportHasLocal",
                    "1024": "NamespaceModule",
                    "1536": "Module",
                    "1920": "Namespace",
                    "2048": "TypeLiteral",
                    "4096": "ObjectLiteral",
                    "6256": "LateBindingContainer",
                    "8192": "Method",
                    "16384": "Constructor",
                    "32768": "GetAccessor",
                    "46015": "GetAccessorExcludes",
                    "65536": "SetAccessor",
                    "78783": "SetAccessorExcludes",
                    "98304": "Accessor",
                    "98308": "PropertyOrAccessor",
                    "103359": "MethodExcludes",
                    "106500": "ClassMember",
                    "110735": "ValueModuleExcludes",
                    "110991": "FunctionExcludes",
                    "111550": "FunctionScopedVariableExcludes",
                    "111551": "ParameterExcludes",
                    "131072": "Signature",
                    "262144": "TypeParameter",
                    "524288": "TypeAlias",
                    "526824": "TypeParameterExcludes",
                    "788872": "InterfaceExcludes",
                    "788968": "TypeAliasExcludes",
                    "899327": "RegularEnumExcludes",
                    "899503": "ClassExcludes",
                    "899967": "ConstEnumExcludes",
                    "900095": "EnumMemberExcludes",
                    "1048576": "ExportValue",
                    "2097152": "AliasExcludes",
                    "2623475": "ModuleMember",
                    "2885600": "Classifiable",
                    "4194304": "Prototype",
                    "8388608": "ExportStar",
                    "16777216": "Optional",
                    "33554432": "Transient",
                    "67108863": "All",
                    "67108864": "Assignment",
                    "134217728": "ModuleExports",
                    "None": 0,
                    "FunctionScopedVariable": 1,
                    "BlockScopedVariable": 2,
                    "Property": 4,
                    "EnumMember": 8,
                    "Function": 16,
                    "Class": 32,
                    "Interface": 64,
                    "ConstEnum": 128,
                    "RegularEnum": 256,
                    "ValueModule": 512,
                    "NamespaceModule": 1024,
                    "TypeLiteral": 2048,
                    "ObjectLiteral": 4096,
                    "Method": 8192,
                    "Constructor": 16384,
                    "GetAccessor": 32768,
                    "SetAccessor": 65536,
                    "Signature": 131072,
                    "TypeParameter": 262144,
                    "TypeAlias": 524288,
                    "ExportValue": 1048576,
                    "Alias": 2097152,
                    "Prototype": 4194304,
                    "ExportStar": 8388608,
                    "Optional": 16777216,
                    "Transient": 33554432,
                    "Assignment": 67108864,
                    "ModuleExports": 134217728,
                    "All": 67108863,
                    "Enum": 384,
                    "Variable": 3,
                    "Value": 111551,
                    "Type": 788968,
                    "Namespace": 1920,
                    "Module": 1536,
                    "Accessor": 98304,
                    "FunctionScopedVariableExcludes": 111550,
                    "BlockScopedVariableExcludes": 111551,
                    "ParameterExcludes": 111551,
                    "PropertyExcludes": 0,
                    "EnumMemberExcludes": 900095,
                    "FunctionExcludes": 110991,
                    "ClassExcludes": 899503,
                    "InterfaceExcludes": 788872,
                    "RegularEnumExcludes": 899327,
                    "ConstEnumExcludes": 899967,
                    "ValueModuleExcludes": 110735,
                    "NamespaceModuleExcludes": 0,
                    "MethodExcludes": 103359,
                    "GetAccessorExcludes": 46015,
                    "SetAccessorExcludes": 78783,
                    "TypeParameterExcludes": 526824,
                    "TypeAliasExcludes": 788968,
                    "AliasExcludes": 2097152,
                    "ModuleMember": 2623475,
                    "ExportHasLocal": 944,
                    "BlockScoped": 418,
                    "PropertyOrAccessor": 98308,
                    "ClassMember": 106500,
                    "ExportSupportsDefaultModifier": 112,
                    "ExportDoesNotSupportDefaultModifier": -113,
                    "-113": "ExportDoesNotSupportDefaultModifier",
                    "Classifiable": 2885600,
                    "LateBindingContainer": 6256
                },
                "EnumKind": {
                    "0": "Numeric",
                    "1": "Literal",
                    "Numeric": 0,
                    "Literal": 1
                },
                "CheckFlags": {
                    "1": "Instantiated",
                    "2": "SyntheticProperty",
                    "4": "SyntheticMethod",
                    "6": "Synthetic",
                    "8": "Readonly",
                    "16": "ReadPartial",
                    "32": "WritePartial",
                    "48": "Partial",
                    "64": "HasNonUniformType",
                    "128": "HasLiteralType",
                    "192": "Discriminant",
                    "256": "ContainsPublic",
                    "512": "ContainsProtected",
                    "1024": "ContainsPrivate",
                    "2048": "ContainsStatic",
                    "4096": "Late",
                    "8192": "ReverseMapped",
                    "16384": "OptionalParameter",
                    "32768": "RestParameter",
                    "65536": "DeferredType",
                    "Instantiated": 1,
                    "SyntheticProperty": 2,
                    "SyntheticMethod": 4,
                    "Readonly": 8,
                    "ReadPartial": 16,
                    "WritePartial": 32,
                    "HasNonUniformType": 64,
                    "HasLiteralType": 128,
                    "ContainsPublic": 256,
                    "ContainsProtected": 512,
                    "ContainsPrivate": 1024,
                    "ContainsStatic": 2048,
                    "Late": 4096,
                    "ReverseMapped": 8192,
                    "OptionalParameter": 16384,
                    "RestParameter": 32768,
                    "DeferredType": 65536,
                    "Synthetic": 6,
                    "Discriminant": 192,
                    "Partial": 48
                },
                "InternalSymbolName": {
                    "Call": "__call",
                    "Constructor": "__constructor",
                    "New": "__new",
                    "Index": "__index",
                    "ExportStar": "__export",
                    "Global": "__global",
                    "Missing": "__missing",
                    "Type": "__type",
                    "Object": "__object",
                    "JSXAttributes": "__jsxAttributes",
                    "Class": "__class",
                    "Function": "__function",
                    "Computed": "__computed",
                    "Resolving": "__resolving__",
                    "ExportEquals": "export=",
                    "Default": "default",
                    "This": "this"
                },
                "NodeCheckFlags": {
                    "1": "TypeChecked",
                    "2": "LexicalThis",
                    "4": "CaptureThis",
                    "8": "CaptureNewTarget",
                    "256": "SuperInstance",
                    "512": "SuperStatic",
                    "1024": "ContextChecked",
                    "2048": "AsyncMethodWithSuper",
                    "4096": "AsyncMethodWithSuperBinding",
                    "8192": "CaptureArguments",
                    "16384": "EnumValuesComputed",
                    "32768": "LexicalModuleMergesWithClass",
                    "65536": "LoopWithCapturedBlockScopedBinding",
                    "131072": "ContainsCapturedBlockScopeBinding",
                    "262144": "CapturedBlockScopedBinding",
                    "524288": "BlockScopedBindingInLoop",
                    "1048576": "ClassWithBodyScopedClassBinding",
                    "2097152": "BodyScopedClassBinding",
                    "4194304": "NeedsLoopOutParameter",
                    "8388608": "AssignmentsMarked",
                    "16777216": "ClassWithConstructorReference",
                    "33554432": "ConstructorReferenceInClass",
                    "TypeChecked": 1,
                    "LexicalThis": 2,
                    "CaptureThis": 4,
                    "CaptureNewTarget": 8,
                    "SuperInstance": 256,
                    "SuperStatic": 512,
                    "ContextChecked": 1024,
                    "AsyncMethodWithSuper": 2048,
                    "AsyncMethodWithSuperBinding": 4096,
                    "CaptureArguments": 8192,
                    "EnumValuesComputed": 16384,
                    "LexicalModuleMergesWithClass": 32768,
                    "LoopWithCapturedBlockScopedBinding": 65536,
                    "ContainsCapturedBlockScopeBinding": 131072,
                    "CapturedBlockScopedBinding": 262144,
                    "BlockScopedBindingInLoop": 524288,
                    "ClassWithBodyScopedClassBinding": 1048576,
                    "BodyScopedClassBinding": 2097152,
                    "NeedsLoopOutParameter": 4194304,
                    "AssignmentsMarked": 8388608,
                    "ClassWithConstructorReference": 16777216,
                    "ConstructorReferenceInClass": 33554432
                },
                "TypeFlags": {
                    "1": "Any",
                    "2": "Unknown",
                    "3": "AnyOrUnknown",
                    "4": "String",
                    "8": "Number",
                    "16": "Boolean",
                    "32": "Enum",
                    "64": "BigInt",
                    "128": "StringLiteral",
                    "132": "StringLike",
                    "256": "NumberLiteral",
                    "296": "NumberLike",
                    "384": "StringOrNumberLiteral",
                    "512": "BooleanLiteral",
                    "528": "BooleanLike",
                    "1024": "EnumLiteral",
                    "1056": "EnumLike",
                    "2048": "BigIntLiteral",
                    "2112": "BigIntLike",
                    "2944": "Literal",
                    "4096": "ESSymbol",
                    "8192": "UniqueESSymbol",
                    "8576": "StringOrNumberLiteralOrUnique",
                    "12288": "ESSymbolLike",
                    "16384": "Void",
                    "32768": "Undefined",
                    "49152": "VoidLike",
                    "65536": "Null",
                    "98304": "Nullable",
                    "109440": "Unit",
                    "117632": "DefinitelyFalsy",
                    "117724": "PossiblyFalsy",
                    "131068": "Primitive",
                    "131072": "GenericMappedType",
                    "262144": "IncludesStructuredOrInstantiable",
                    "524288": "Object",
                    "1048576": "Union",
                    "2097152": "IncludesNonWideningType",
                    "3145728": "UnionOrIntersection",
                    "3670016": "StructuredType",
                    "3899392": "ObjectFlagsType",
                    "4194304": "IncludesWildcard",
                    "8388608": "IncludesEmptyObject",
                    "8650752": "TypeVariable",
                    "16777216": "Conditional",
                    "25165824": "Simplifiable",
                    "33554432": "Substitution",
                    "58982400": "InstantiableNonPrimitive",
                    "63176704": "Instantiable",
                    "66846720": "StructuredOrInstantiable",
                    "66994211": "NotPrimitiveUnion",
                    "67108864": "NonPrimitive",
                    "67238908": "DisjointDomains",
                    "67359327": "Intrinsic",
                    "67637251": "NotUnionOrUnit",
                    "68943871": "IncludesMask",
                    "133970943": "Narrowable",
                    "Any": 1,
                    "Unknown": 2,
                    "String": 4,
                    "Number": 8,
                    "Boolean": 16,
                    "Enum": 32,
                    "BigInt": 64,
                    "StringLiteral": 128,
                    "NumberLiteral": 256,
                    "BooleanLiteral": 512,
                    "EnumLiteral": 1024,
                    "BigIntLiteral": 2048,
                    "ESSymbol": 4096,
                    "UniqueESSymbol": 8192,
                    "Void": 16384,
                    "Undefined": 32768,
                    "Null": 65536,
                    "Never": 131072,
                    "TypeParameter": 262144,
                    "Object": 524288,
                    "Union": 1048576,
                    "Intersection": 2097152,
                    "Index": 4194304,
                    "IndexedAccess": 8388608,
                    "Conditional": 16777216,
                    "Substitution": 33554432,
                    "NonPrimitive": 67108864,
                    "AnyOrUnknown": 3,
                    "Nullable": 98304,
                    "Literal": 2944,
                    "Unit": 109440,
                    "StringOrNumberLiteral": 384,
                    "StringOrNumberLiteralOrUnique": 8576,
                    "DefinitelyFalsy": 117632,
                    "PossiblyFalsy": 117724,
                    "Intrinsic": 67359327,
                    "Primitive": 131068,
                    "StringLike": 132,
                    "NumberLike": 296,
                    "BigIntLike": 2112,
                    "BooleanLike": 528,
                    "EnumLike": 1056,
                    "ESSymbolLike": 12288,
                    "VoidLike": 49152,
                    "DisjointDomains": 67238908,
                    "UnionOrIntersection": 3145728,
                    "StructuredType": 3670016,
                    "TypeVariable": 8650752,
                    "InstantiableNonPrimitive": 58982400,
                    "InstantiablePrimitive": 4194304,
                    "Instantiable": 63176704,
                    "StructuredOrInstantiable": 66846720,
                    "ObjectFlagsType": 3899392,
                    "Simplifiable": 25165824,
                    "Narrowable": 133970943,
                    "NotUnionOrUnit": 67637251,
                    "NotPrimitiveUnion": 66994211,
                    "IncludesMask": 68943871,
                    "IncludesStructuredOrInstantiable": 262144,
                    "IncludesNonWideningType": 2097152,
                    "IncludesWildcard": 4194304,
                    "IncludesEmptyObject": 8388608,
                    "GenericMappedType": 131072
                },
                "ObjectFlags": {
                    "1": "Class",
                    "2": "Interface",
                    "3": "ClassOrInterface",
                    "4": "Reference",
                    "8": "Tuple",
                    "16": "Anonymous",
                    "32": "Mapped",
                    "64": "Instantiated",
                    "128": "ObjectLiteral",
                    "256": "EvolvingArray",
                    "512": "ObjectLiteralPatternWithComputedProperties",
                    "1024": "ContainsSpread",
                    "2048": "ReverseMapped",
                    "4096": "JsxAttributes",
                    "8192": "MarkerType",
                    "16384": "JSLiteral",
                    "32768": "FreshLiteral",
                    "65536": "ArrayLiteral",
                    "131072": "PrimitiveUnion",
                    "262144": "ContainsWideningType",
                    "524288": "ContainsObjectOrArrayLiteral",
                    "786432": "RequiresWidening",
                    "1048576": "NonInferrableType",
                    "1835008": "PropagatingFlags",
                    "Class": 1,
                    "Interface": 2,
                    "Reference": 4,
                    "Tuple": 8,
                    "Anonymous": 16,
                    "Mapped": 32,
                    "Instantiated": 64,
                    "ObjectLiteral": 128,
                    "EvolvingArray": 256,
                    "ObjectLiteralPatternWithComputedProperties": 512,
                    "ContainsSpread": 1024,
                    "ReverseMapped": 2048,
                    "JsxAttributes": 4096,
                    "MarkerType": 8192,
                    "JSLiteral": 16384,
                    "FreshLiteral": 32768,
                    "ArrayLiteral": 65536,
                    "PrimitiveUnion": 131072,
                    "ContainsWideningType": 262144,
                    "ContainsObjectOrArrayLiteral": 524288,
                    "NonInferrableType": 1048576,
                    "ClassOrInterface": 3,
                    "RequiresWidening": 786432,
                    "PropagatingFlags": 1835008
                },
                "VarianceFlags": {
                    "0": "Invariant",
                    "1": "Covariant",
                    "2": "Contravariant",
                    "3": "Bivariant",
                    "4": "Independent",
                    "7": "VarianceMask",
                    "8": "Unmeasurable",
                    "16": "Unreliable",
                    "24": "AllowsStructuralFallback",
                    "Invariant": 0,
                    "Covariant": 1,
                    "Contravariant": 2,
                    "Bivariant": 3,
                    "Independent": 4,
                    "VarianceMask": 7,
                    "Unmeasurable": 8,
                    "Unreliable": 16,
                    "AllowsStructuralFallback": 24
                },
                "JsxReferenceKind": {
                    "0": "Component",
                    "1": "Function",
                    "2": "Mixed",
                    "Component": 0,
                    "Function": 1,
                    "Mixed": 2
                },
                "SignatureKind": {
                    "0": "Call",
                    "1": "Construct",
                    "Call": 0,
                    "Construct": 1
                },
                "SignatureFlags": {
                    "0": "None",
                    "1": "HasRestParameter",
                    "2": "HasLiteralTypes",
                    "3": "PropagatingFlags",
                    "4": "IsInnerCallChain",
                    "8": "IsOuterCallChain",
                    "12": "CallChainFlags",
                    "None": 0,
                    "HasRestParameter": 1,
                    "HasLiteralTypes": 2,
                    "IsInnerCallChain": 4,
                    "IsOuterCallChain": 8,
                    "PropagatingFlags": 3,
                    "CallChainFlags": 12
                },
                "IndexKind": {
                    "0": "String",
                    "1": "Number",
                    "String": 0,
                    "Number": 1
                },
                "InferencePriority": {
                    "1": "NakedTypeVariable",
                    "2": "HomomorphicMappedType",
                    "4": "PartialHomomorphicMappedType",
                    "8": "MappedTypeConstraint",
                    "16": "ReturnType",
                    "32": "LiteralKeyof",
                    "56": "PriorityImpliesCombination",
                    "64": "NoConstraints",
                    "128": "AlwaysStrict",
                    "256": "MaxValue",
                    "NakedTypeVariable": 1,
                    "HomomorphicMappedType": 2,
                    "PartialHomomorphicMappedType": 4,
                    "MappedTypeConstraint": 8,
                    "ReturnType": 16,
                    "LiteralKeyof": 32,
                    "NoConstraints": 64,
                    "AlwaysStrict": 128,
                    "MaxValue": 256,
                    "PriorityImpliesCombination": 56,
                    "Circularity": -1,
                    "-1": "Circularity"
                },
                "InferenceFlags": {
                    "0": "None",
                    "1": "NoDefault",
                    "2": "AnyDefault",
                    "4": "SkippedGenericFunction",
                    "None": 0,
                    "NoDefault": 1,
                    "AnyDefault": 2,
                    "SkippedGenericFunction": 4
                },
                "Ternary": {
                    "0": "False",
                    "1": "Maybe",
                    "False": 0,
                    "Maybe": 1,
                    "True": -1,
                    "-1": "True"
                },
                "AssignmentDeclarationKind": {
                    "0": "None",
                    "1": "ExportsProperty",
                    "2": "ModuleExports",
                    "3": "PrototypeProperty",
                    "4": "ThisProperty",
                    "5": "Property",
                    "6": "Prototype",
                    "7": "ObjectDefinePropertyValue",
                    "8": "ObjectDefinePropertyExports",
                    "9": "ObjectDefinePrototypeProperty",
                    "None": 0,
                    "ExportsProperty": 1,
                    "ModuleExports": 2,
                    "PrototypeProperty": 3,
                    "ThisProperty": 4,
                    "Property": 5,
                    "Prototype": 6,
                    "ObjectDefinePropertyValue": 7,
                    "ObjectDefinePropertyExports": 8,
                    "ObjectDefinePrototypeProperty": 9
                },
                "DiagnosticCategory": {
                    "0": "Warning",
                    "1": "Error",
                    "2": "Suggestion",
                    "3": "Message",
                    "Warning": 0,
                    "Error": 1,
                    "Suggestion": 2,
                    "Message": 3
                },
                "ModuleResolutionKind": {
                    "1": "Classic",
                    "2": "NodeJs",
                    "Classic": 1,
                    "NodeJs": 2
                },
                "ModuleKind": {
                    "0": "None",
                    "1": "CommonJS",
                    "2": "AMD",
                    "3": "UMD",
                    "4": "System",
                    "5": "ES2015",
                    "99": "ESNext",
                    "None": 0,
                    "CommonJS": 1,
                    "AMD": 2,
                    "UMD": 3,
                    "System": 4,
                    "ES2015": 5,
                    "ESNext": 99
                },
                "JsxEmit": {
                    "0": "None",
                    "1": "Preserve",
                    "2": "React",
                    "3": "ReactNative",
                    "None": 0,
                    "Preserve": 1,
                    "React": 2,
                    "ReactNative": 3
                },
                "NewLineKind": {
                    "0": "CarriageReturnLineFeed",
                    "1": "LineFeed",
                    "CarriageReturnLineFeed": 0,
                    "LineFeed": 1
                },
                "ScriptKind": {
                    "0": "Unknown",
                    "1": "JS",
                    "2": "JSX",
                    "3": "TS",
                    "4": "TSX",
                    "5": "External",
                    "6": "JSON",
                    "7": "Deferred",
                    "Unknown": 0,
                    "JS": 1,
                    "JSX": 2,
                    "TS": 3,
                    "TSX": 4,
                    "External": 5,
                    "JSON": 6,
                    "Deferred": 7
                },
                "ScriptTarget": {
                    "0": "ES3",
                    "1": "ES5",
                    "2": "ES2015",
                    "3": "ES2016",
                    "4": "ES2017",
                    "5": "ES2018",
                    "6": "ES2019",
                    "7": "ES2020",
                    "99": "Latest",
                    "100": "JSON",
                    "ES3": 0,
                    "ES5": 1,
                    "ES2015": 2,
                    "ES2016": 3,
                    "ES2017": 4,
                    "ES2018": 5,
                    "ES2019": 6,
                    "ES2020": 7,
                    "ESNext": 99,
                    "JSON": 100,
                    "Latest": 99
                },
                "LanguageVariant": {
                    "0": "Standard",
                    "1": "JSX",
                    "Standard": 0,
                    "JSX": 1
                },
                "WatchDirectoryFlags": {
                    "0": "None",
                    "1": "Recursive",
                    "None": 0,
                    "Recursive": 1
                },
                "CharacterCodes": {
                    "0": "nullCharacter",
                    "8": "backspace",
                    "9": "tab",
                    "10": "lineFeed",
                    "11": "verticalTab",
                    "12": "formFeed",
                    "13": "carriageReturn",
                    "32": "space",
                    "33": "exclamation",
                    "34": "doubleQuote",
                    "35": "hash",
                    "36": "$",
                    "37": "percent",
                    "38": "ampersand",
                    "39": "singleQuote",
                    "40": "openParen",
                    "41": "closeParen",
                    "42": "asterisk",
                    "43": "plus",
                    "44": "comma",
                    "45": "minus",
                    "46": "dot",
                    "47": "slash",
                    "48": "_0",
                    "49": "_1",
                    "50": "_2",
                    "51": "_3",
                    "52": "_4",
                    "53": "_5",
                    "54": "_6",
                    "55": "_7",
                    "56": "_8",
                    "57": "_9",
                    "58": "colon",
                    "59": "semicolon",
                    "60": "lessThan",
                    "61": "equals",
                    "62": "greaterThan",
                    "63": "question",
                    "64": "at",
                    "65": "A",
                    "66": "B",
                    "67": "C",
                    "68": "D",
                    "69": "E",
                    "70": "F",
                    "71": "G",
                    "72": "H",
                    "73": "I",
                    "74": "J",
                    "75": "K",
                    "76": "L",
                    "77": "M",
                    "78": "N",
                    "79": "O",
                    "80": "P",
                    "81": "Q",
                    "82": "R",
                    "83": "S",
                    "84": "T",
                    "85": "U",
                    "86": "V",
                    "87": "W",
                    "88": "X",
                    "89": "Y",
                    "90": "Z",
                    "91": "openBracket",
                    "92": "backslash",
                    "93": "closeBracket",
                    "94": "caret",
                    "95": "_",
                    "96": "backtick",
                    "97": "a",
                    "98": "b",
                    "99": "c",
                    "100": "d",
                    "101": "e",
                    "102": "f",
                    "103": "g",
                    "104": "h",
                    "105": "i",
                    "106": "j",
                    "107": "k",
                    "108": "l",
                    "109": "m",
                    "110": "n",
                    "111": "o",
                    "112": "p",
                    "113": "q",
                    "114": "r",
                    "115": "s",
                    "116": "t",
                    "117": "u",
                    "118": "v",
                    "119": "w",
                    "120": "x",
                    "121": "y",
                    "122": "z",
                    "123": "openBrace",
                    "124": "bar",
                    "125": "closeBrace",
                    "126": "tilde",
                    "127": "maxAsciiCharacter",
                    "133": "nextLine",
                    "160": "nonBreakingSpace",
                    "5760": "ogham",
                    "8192": "enQuad",
                    "8193": "emQuad",
                    "8194": "enSpace",
                    "8195": "emSpace",
                    "8196": "threePerEmSpace",
                    "8197": "fourPerEmSpace",
                    "8198": "sixPerEmSpace",
                    "8199": "figureSpace",
                    "8200": "punctuationSpace",
                    "8201": "thinSpace",
                    "8202": "hairSpace",
                    "8203": "zeroWidthSpace",
                    "8232": "lineSeparator",
                    "8233": "paragraphSeparator",
                    "8239": "narrowNoBreakSpace",
                    "8287": "mathematicalSpace",
                    "12288": "ideographicSpace",
                    "65279": "byteOrderMark",
                    "nullCharacter": 0,
                    "maxAsciiCharacter": 127,
                    "lineFeed": 10,
                    "carriageReturn": 13,
                    "lineSeparator": 8232,
                    "paragraphSeparator": 8233,
                    "nextLine": 133,
                    "space": 32,
                    "nonBreakingSpace": 160,
                    "enQuad": 8192,
                    "emQuad": 8193,
                    "enSpace": 8194,
                    "emSpace": 8195,
                    "threePerEmSpace": 8196,
                    "fourPerEmSpace": 8197,
                    "sixPerEmSpace": 8198,
                    "figureSpace": 8199,
                    "punctuationSpace": 8200,
                    "thinSpace": 8201,
                    "hairSpace": 8202,
                    "zeroWidthSpace": 8203,
                    "narrowNoBreakSpace": 8239,
                    "ideographicSpace": 12288,
                    "mathematicalSpace": 8287,
                    "ogham": 5760,
                    "_": 95,
                    "$": 36,
                    "_0": 48,
                    "_1": 49,
                    "_2": 50,
                    "_3": 51,
                    "_4": 52,
                    "_5": 53,
                    "_6": 54,
                    "_7": 55,
                    "_8": 56,
                    "_9": 57,
                    "a": 97,
                    "b": 98,
                    "c": 99,
                    "d": 100,
                    "e": 101,
                    "f": 102,
                    "g": 103,
                    "h": 104,
                    "i": 105,
                    "j": 106,
                    "k": 107,
                    "l": 108,
                    "m": 109,
                    "n": 110,
                    "o": 111,
                    "p": 112,
                    "q": 113,
                    "r": 114,
                    "s": 115,
                    "t": 116,
                    "u": 117,
                    "v": 118,
                    "w": 119,
                    "x": 120,
                    "y": 121,
                    "z": 122,
                    "A": 65,
                    "B": 66,
                    "C": 67,
                    "D": 68,
                    "E": 69,
                    "F": 70,
                    "G": 71,
                    "H": 72,
                    "I": 73,
                    "J": 74,
                    "K": 75,
                    "L": 76,
                    "M": 77,
                    "N": 78,
                    "O": 79,
                    "P": 80,
                    "Q": 81,
                    "R": 82,
                    "S": 83,
                    "T": 84,
                    "U": 85,
                    "V": 86,
                    "W": 87,
                    "X": 88,
                    "Y": 89,
                    "Z": 90,
                    "ampersand": 38,
                    "asterisk": 42,
                    "at": 64,
                    "backslash": 92,
                    "backtick": 96,
                    "bar": 124,
                    "caret": 94,
                    "closeBrace": 125,
                    "closeBracket": 93,
                    "closeParen": 41,
                    "colon": 58,
                    "comma": 44,
                    "dot": 46,
                    "doubleQuote": 34,
                    "equals": 61,
                    "exclamation": 33,
                    "greaterThan": 62,
                    "hash": 35,
                    "lessThan": 60,
                    "minus": 45,
                    "openBrace": 123,
                    "openBracket": 91,
                    "openParen": 40,
                    "percent": 37,
                    "plus": 43,
                    "question": 63,
                    "semicolon": 59,
                    "singleQuote": 39,
                    "slash": 47,
                    "tilde": 126,
                    "backspace": 8,
                    "formFeed": 12,
                    "byteOrderMark": 65279,
                    "tab": 9,
                    "verticalTab": 11
                },
                "Extension": {
                    "Ts": ".ts",
                    "Tsx": ".tsx",
                    "Dts": ".d.ts",
                    "Js": ".js",
                    "Jsx": ".jsx",
                    "Json": ".json",
                    "TsBuildInfo": ".tsbuildinfo"
                },
                "TransformFlags": {
                    "0": "None",
                    "1": "AssertTypeScript",
                    "2": "AssertJsx",
                    "4": "AssertESNext",
                    "8": "AssertES2019",
                    "16": "AssertES2018",
                    "32": "AssertES2017",
                    "64": "AssertES2016",
                    "128": "AssertES2015",
                    "256": "AssertGenerator",
                    "512": "AssertDestructuringAssignment",
                    "1024": "ContainsTypeScriptClassSyntax",
                    "2048": "PropertyNamePropagatingFlags",
                    "4096": "ContainsRestOrSpread",
                    "8192": "ContainsObjectRestOrSpread",
                    "16384": "ContainsComputedPropertyName",
                    "32768": "ContainsBlockScopedBinding",
                    "65536": "ContainsBindingPattern",
                    "131072": "ContainsYield",
                    "262144": "ContainsHoistedDeclarationOrCompletion",
                    "524288": "ContainsDynamicImport",
                    "1048576": "ContainsClassFields",
                    "536870912": "ParameterExcludes",
                    "536872960": "PropertyExcludes",
                    "536875008": "BindingPatternExcludes",
                    "536879104": "CatchClauseExcludes",
                    "536888320": "ClassExcludes",
                    "536896512": "ObjectLiteralExcludes",
                    "536944640": "VariableDeclarationListExcludes",
                    "537168896": "ModuleExcludes",
                    "537371648": "ArrowFunctionExcludes",
                    "537372672": "MethodOrAccessorExcludes",
                    "537373696": "FunctionExcludes",
                    "None": 0,
                    "ContainsTypeScript": 1,
                    "ContainsJsx": 2,
                    "ContainsESNext": 4,
                    "ContainsES2019": 8,
                    "ContainsES2018": 16,
                    "ContainsES2017": 32,
                    "ContainsES2016": 64,
                    "ContainsES2015": 128,
                    "ContainsGenerator": 256,
                    "ContainsDestructuringAssignment": 512,
                    "ContainsTypeScriptClassSyntax": 1024,
                    "ContainsLexicalThis": 2048,
                    "ContainsRestOrSpread": 4096,
                    "ContainsObjectRestOrSpread": 8192,
                    "ContainsComputedPropertyName": 16384,
                    "ContainsBlockScopedBinding": 32768,
                    "ContainsBindingPattern": 65536,
                    "ContainsYield": 131072,
                    "ContainsHoistedDeclarationOrCompletion": 262144,
                    "ContainsDynamicImport": 524288,
                    "ContainsClassFields": 1048576,
                    "HasComputedFlags": 536870912,
                    "AssertTypeScript": 1,
                    "AssertJsx": 2,
                    "AssertESNext": 4,
                    "AssertES2019": 8,
                    "AssertES2018": 16,
                    "AssertES2017": 32,
                    "AssertES2016": 64,
                    "AssertES2015": 128,
                    "AssertGenerator": 256,
                    "AssertDestructuringAssignment": 512,
                    "OuterExpressionExcludes": 536870912,
                    "PropertyAccessExcludes": 536870912,
                    "NodeExcludes": 536870912,
                    "ArrowFunctionExcludes": 537371648,
                    "FunctionExcludes": 537373696,
                    "ConstructorExcludes": 537372672,
                    "MethodOrAccessorExcludes": 537372672,
                    "PropertyExcludes": 536872960,
                    "ClassExcludes": 536888320,
                    "ModuleExcludes": 537168896,
                    "TypeExcludes": -2,
                    "-2": "TypeExcludes",
                    "ObjectLiteralExcludes": 536896512,
                    "ArrayLiteralOrCallOrNewExcludes": 536875008,
                    "VariableDeclarationListExcludes": 536944640,
                    "ParameterExcludes": 536870912,
                    "CatchClauseExcludes": 536879104,
                    "BindingPatternExcludes": 536875008,
                    "PropertyNamePropagatingFlags": 2048
                },
                "EmitFlags": {
                    "0": "None",
                    "1": "SingleLine",
                    "2": "AdviseOnEmitNode",
                    "4": "NoSubstitution",
                    "8": "CapturesThis",
                    "16": "NoLeadingSourceMap",
                    "32": "NoTrailingSourceMap",
                    "48": "NoSourceMap",
                    "64": "NoNestedSourceMaps",
                    "128": "NoTokenLeadingSourceMaps",
                    "256": "NoTokenTrailingSourceMaps",
                    "384": "NoTokenSourceMaps",
                    "512": "NoLeadingComments",
                    "1024": "NoTrailingComments",
                    "1536": "NoComments",
                    "2048": "NoNestedComments",
                    "4096": "HelperName",
                    "8192": "ExportName",
                    "16384": "LocalName",
                    "32768": "InternalName",
                    "65536": "Indented",
                    "131072": "NoIndentation",
                    "262144": "AsyncFunctionBody",
                    "524288": "ReuseTempVariableScope",
                    "1048576": "CustomPrologue",
                    "2097152": "NoHoisting",
                    "4194304": "HasEndOfDeclarationMarker",
                    "8388608": "Iterator",
                    "16777216": "NoAsciiEscaping",
                    "33554432": "TypeScriptClassWrapper",
                    "67108864": "NeverApplyImportHelper",
                    "None": 0,
                    "SingleLine": 1,
                    "AdviseOnEmitNode": 2,
                    "NoSubstitution": 4,
                    "CapturesThis": 8,
                    "NoLeadingSourceMap": 16,
                    "NoTrailingSourceMap": 32,
                    "NoSourceMap": 48,
                    "NoNestedSourceMaps": 64,
                    "NoTokenLeadingSourceMaps": 128,
                    "NoTokenTrailingSourceMaps": 256,
                    "NoTokenSourceMaps": 384,
                    "NoLeadingComments": 512,
                    "NoTrailingComments": 1024,
                    "NoComments": 1536,
                    "NoNestedComments": 2048,
                    "HelperName": 4096,
                    "ExportName": 8192,
                    "LocalName": 16384,
                    "InternalName": 32768,
                    "Indented": 65536,
                    "NoIndentation": 131072,
                    "AsyncFunctionBody": 262144,
                    "ReuseTempVariableScope": 524288,
                    "CustomPrologue": 1048576,
                    "NoHoisting": 2097152,
                    "HasEndOfDeclarationMarker": 4194304,
                    "Iterator": 8388608,
                    "NoAsciiEscaping": 16777216,
                    "TypeScriptClassWrapper": 33554432,
                    "NeverApplyImportHelper": 67108864
                },
                "ExternalEmitHelpers": {
                    "1": "FirstEmitHelper",
                    "2": "Assign",
                    "4": "Rest",
                    "8": "Decorate",
                    "16": "Metadata",
                    "32": "Param",
                    "64": "Awaiter",
                    "128": "Generator",
                    "256": "ForOfIncludes",
                    "512": "Read",
                    "1024": "Spread",
                    "1536": "SpreadIncludes",
                    "2048": "SpreadArrays",
                    "4096": "Await",
                    "8192": "AsyncGenerator",
                    "12288": "AsyncGeneratorIncludes",
                    "16384": "AsyncDelegator",
                    "32768": "ForAwaitOfIncludes",
                    "53248": "AsyncDelegatorIncludes",
                    "65536": "ExportStar",
                    "131072": "LastEmitHelper",
                    "Extends": 1,
                    "Assign": 2,
                    "Rest": 4,
                    "Decorate": 8,
                    "Metadata": 16,
                    "Param": 32,
                    "Awaiter": 64,
                    "Generator": 128,
                    "Values": 256,
                    "Read": 512,
                    "Spread": 1024,
                    "SpreadArrays": 2048,
                    "Await": 4096,
                    "AsyncGenerator": 8192,
                    "AsyncDelegator": 16384,
                    "AsyncValues": 32768,
                    "ExportStar": 65536,
                    "MakeTemplateObject": 131072,
                    "FirstEmitHelper": 1,
                    "LastEmitHelper": 131072,
                    "ForOfIncludes": 256,
                    "ForAwaitOfIncludes": 32768,
                    "AsyncGeneratorIncludes": 12288,
                    "AsyncDelegatorIncludes": 53248,
                    "SpreadIncludes": 1536
                },
                "EmitHint": {
                    "0": "SourceFile",
                    "1": "Expression",
                    "2": "IdentifierName",
                    "3": "MappedTypeParameter",
                    "4": "Unspecified",
                    "5": "EmbeddedStatement",
                    "SourceFile": 0,
                    "Expression": 1,
                    "IdentifierName": 2,
                    "MappedTypeParameter": 3,
                    "Unspecified": 4,
                    "EmbeddedStatement": 5
                },
                "BundleFileSectionKind": {
                    "Prologue": "prologue",
                    "EmitHelpers": "emitHelpers",
                    "NoDefaultLib": "no-default-lib",
                    "Reference": "reference",
                    "Type": "type",
                    "Lib": "lib",
                    "Prepend": "prepend",
                    "Text": "text",
                    "Internal": "internal"
                },
                "ListFormat": {
                    "0": "ClassHeritageClauses",
                    "1": "MultiLineFunctionBodyStatements",
                    "2": "PreserveLines",
                    "3": "LinesMask",
                    "4": "BarDelimited",
                    "8": "AmpersandDelimited",
                    "16": "CommaDelimited",
                    "32": "AsteriskDelimited",
                    "33": "JSDocComment",
                    "60": "DelimitersMask",
                    "64": "AllowTrailingComma",
                    "128": "Indented",
                    "129": "CaseBlockClauses",
                    "145": "EnumMembers",
                    "256": "SpaceBetweenBraces",
                    "512": "HeritageClauses",
                    "516": "UnionTypeConstituents",
                    "520": "IntersectionTypeConstituents",
                    "528": "HeritageClauseTypes",
                    "768": "SingleLineFunctionBodyStatements",
                    "1024": "Braces",
                    "2048": "Parenthesis",
                    "2576": "Parameters",
                    "4096": "AngleBrackets",
                    "8192": "SquareBrackets",
                    "8848": "IndexSignatureParameters",
                    "8914": "ArrayLiteralExpressionElements",
                    "15360": "BracketsMask",
                    "16384": "OptionalIfUndefined",
                    "18960": "NewExpressionArguments",
                    "32768": "OptionalIfEmpty",
                    "32897": "MultiLineTypeLiteralMembers",
                    "49152": "Optional",
                    "49153": "Decorators",
                    "53776": "TypeParameters",
                    "65536": "PreferNewLine",
                    "131072": "NoTrailingNewLine",
                    "131073": "SourceFileStatements",
                    "163969": "CaseOrDefaultClauseStatements",
                    "262144": "JsxElementOrFragmentChildren",
                    "262656": "JsxElementAttributes",
                    "524288": "NoSpaceIfEmpty",
                    "524880": "ArrayBindingPatternElements",
                    "525136": "NamedImportsOrExportsElements",
                    "526226": "ObjectLiteralExpressionProperties",
                    "1048576": "SingleElement",
                    "None": 0,
                    "SingleLine": 0,
                    "MultiLine": 1,
                    "PreserveLines": 2,
                    "LinesMask": 3,
                    "NotDelimited": 0,
                    "BarDelimited": 4,
                    "AmpersandDelimited": 8,
                    "CommaDelimited": 16,
                    "AsteriskDelimited": 32,
                    "DelimitersMask": 60,
                    "AllowTrailingComma": 64,
                    "Indented": 128,
                    "SpaceBetweenBraces": 256,
                    "SpaceBetweenSiblings": 512,
                    "Braces": 1024,
                    "Parenthesis": 2048,
                    "AngleBrackets": 4096,
                    "SquareBrackets": 8192,
                    "BracketsMask": 15360,
                    "OptionalIfUndefined": 16384,
                    "OptionalIfEmpty": 32768,
                    "Optional": 49152,
                    "PreferNewLine": 65536,
                    "NoTrailingNewLine": 131072,
                    "NoInterveningComments": 262144,
                    "NoSpaceIfEmpty": 524288,
                    "SingleElement": 1048576,
                    "Modifiers": 262656,
                    "HeritageClauses": 512,
                    "SingleLineTypeLiteralMembers": 768,
                    "MultiLineTypeLiteralMembers": 32897,
                    "TupleTypeElements": 528,
                    "UnionTypeConstituents": 516,
                    "IntersectionTypeConstituents": 520,
                    "ObjectBindingPatternElements": 525136,
                    "ArrayBindingPatternElements": 524880,
                    "ObjectLiteralExpressionProperties": 526226,
                    "ArrayLiteralExpressionElements": 8914,
                    "CommaListElements": 528,
                    "CallExpressionArguments": 2576,
                    "NewExpressionArguments": 18960,
                    "TemplateExpressionSpans": 262144,
                    "SingleLineBlockStatements": 768,
                    "MultiLineBlockStatements": 129,
                    "VariableDeclarationList": 528,
                    "SingleLineFunctionBodyStatements": 768,
                    "MultiLineFunctionBodyStatements": 1,
                    "ClassHeritageClauses": 0,
                    "ClassMembers": 129,
                    "InterfaceMembers": 129,
                    "EnumMembers": 145,
                    "CaseBlockClauses": 129,
                    "NamedImportsOrExportsElements": 525136,
                    "JsxElementOrFragmentChildren": 262144,
                    "JsxElementAttributes": 262656,
                    "CaseOrDefaultClauseStatements": 163969,
                    "HeritageClauseTypes": 528,
                    "SourceFileStatements": 131073,
                    "Decorators": 49153,
                    "TypeArguments": 53776,
                    "TypeParameters": 53776,
                    "Parameters": 2576,
                    "IndexSignatureParameters": 8848,
                    "JSDocComment": 33
                },
                "PragmaKindFlags": {
                    "0": "None",
                    "1": "TripleSlashXML",
                    "2": "SingleLine",
                    "4": "MultiLine",
                    "7": "Default",
                    "None": 0,
                    "TripleSlashXML": 1,
                    "SingleLine": 2,
                    "MultiLine": 4,
                    "All": 7,
                    "Default": 7
                },
                "commentPragmas": {
                    "reference": {
                        "args": [
                            {
                                "name": "types",
                                "optional": true,
                                "captureSpan": true
                            },
                            {
                                "name": "lib",
                                "optional": true,
                                "captureSpan": true
                            },
                            {
                                "name": "path",
                                "optional": true,
                                "captureSpan": true
                            },
                            {
                                "name": "no-default-lib",
                                "optional": true
                            }
                        ],
                        "kind": 1
                    },
                    "amd-dependency": {
                        "args": [
                            {
                                "name": "path"
                            },
                            {
                                "name": "name",
                                "optional": true
                            }
                        ],
                        "kind": 1
                    },
                    "amd-module": {
                        "args": [
                            {
                                "name": "name"
                            }
                        ],
                        "kind": 1
                    },
                    "ts-check": {
                        "kind": 2
                    },
                    "ts-nocheck": {
                        "kind": 2
                    },
                    "jsx": {
                        "args": [
                            {
                                "name": "factory"
                            }
                        ],
                        "kind": 4
                    }
                },
                "FileWatcherEventKind": {
                    "0": "Created",
                    "1": "Changed",
                    "2": "Deleted",
                    "Created": 0,
                    "Changed": 1,
                    "Deleted": 2
                },
                "PollingInterval": {
                    "250": "Low",
                    "500": "Medium",
                    "2000": "High",
                    "High": 2000,
                    "Medium": 500,
                    "Low": 250
                },
                "missingFileModifiedTime": "1970-01-01T00:00:00.000Z",
                "unchangedPollThresholds": {
                    "250": 32,
                    "500": 64,
                    "2000": 256
                },
                "ignoredPaths": [
                    "/node_modules/.",
                    "/.git",
                    "/.#"
                ],
                "sys": {
                    "args": [],
                    "newLine": "\n",
                    "useCaseSensitiveFileNames": false,
                    "debugMode": false
                },
                "directorySeparator": "/",
                "Diagnostics": {
                    "Unterminated_string_literal": {
                        "code": 1002,
                        "category": 1,
                        "key": "Unterminated_string_literal_1002",
                        "message": "Unterminated string literal."
                    },
                    "Identifier_expected": {
                        "code": 1003,
                        "category": 1,
                        "key": "Identifier_expected_1003",
                        "message": "Identifier expected."
                    },
                    "_0_expected": {
                        "code": 1005,
                        "category": 1,
                        "key": "_0_expected_1005",
                        "message": "'{0}' expected."
                    },
                    "A_file_cannot_have_a_reference_to_itself": {
                        "code": 1006,
                        "category": 1,
                        "key": "A_file_cannot_have_a_reference_to_itself_1006",
                        "message": "A file cannot have a reference to itself."
                    },
                    "Trailing_comma_not_allowed": {
                        "code": 1009,
                        "category": 1,
                        "key": "Trailing_comma_not_allowed_1009",
                        "message": "Trailing comma not allowed."
                    },
                    "Asterisk_Slash_expected": {
                        "code": 1010,
                        "category": 1,
                        "key": "Asterisk_Slash_expected_1010",
                        "message": "'*/' expected."
                    },
                    "An_element_access_expression_should_take_an_argument": {
                        "code": 1011,
                        "category": 1,
                        "key": "An_element_access_expression_should_take_an_argument_1011",
                        "message": "An element access expression should take an argument."
                    },
                    "Unexpected_token": {
                        "code": 1012,
                        "category": 1,
                        "key": "Unexpected_token_1012",
                        "message": "Unexpected token."
                    },
                    "A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma": {
                        "code": 1013,
                        "category": 1,
                        "key": "A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma_1013",
                        "message": "A rest parameter or binding pattern may not have a trailing comma."
                    },
                    "A_rest_parameter_must_be_last_in_a_parameter_list": {
                        "code": 1014,
                        "category": 1,
                        "key": "A_rest_parameter_must_be_last_in_a_parameter_list_1014",
                        "message": "A rest parameter must be last in a parameter list."
                    },
                    "Parameter_cannot_have_question_mark_and_initializer": {
                        "code": 1015,
                        "category": 1,
                        "key": "Parameter_cannot_have_question_mark_and_initializer_1015",
                        "message": "Parameter cannot have question mark and initializer."
                    },
                    "A_required_parameter_cannot_follow_an_optional_parameter": {
                        "code": 1016,
                        "category": 1,
                        "key": "A_required_parameter_cannot_follow_an_optional_parameter_1016",
                        "message": "A required parameter cannot follow an optional parameter."
                    },
                    "An_index_signature_cannot_have_a_rest_parameter": {
                        "code": 1017,
                        "category": 1,
                        "key": "An_index_signature_cannot_have_a_rest_parameter_1017",
                        "message": "An index signature cannot have a rest parameter."
                    },
                    "An_index_signature_parameter_cannot_have_an_accessibility_modifier": {
                        "code": 1018,
                        "category": 1,
                        "key": "An_index_signature_parameter_cannot_have_an_accessibility_modifier_1018",
                        "message": "An index signature parameter cannot have an accessibility modifier."
                    },
                    "An_index_signature_parameter_cannot_have_a_question_mark": {
                        "code": 1019,
                        "category": 1,
                        "key": "An_index_signature_parameter_cannot_have_a_question_mark_1019",
                        "message": "An index signature parameter cannot have a question mark."
                    },
                    "An_index_signature_parameter_cannot_have_an_initializer": {
                        "code": 1020,
                        "category": 1,
                        "key": "An_index_signature_parameter_cannot_have_an_initializer_1020",
                        "message": "An index signature parameter cannot have an initializer."
                    },
                    "An_index_signature_must_have_a_type_annotation": {
                        "code": 1021,
                        "category": 1,
                        "key": "An_index_signature_must_have_a_type_annotation_1021",
                        "message": "An index signature must have a type annotation."
                    },
                    "An_index_signature_parameter_must_have_a_type_annotation": {
                        "code": 1022,
                        "category": 1,
                        "key": "An_index_signature_parameter_must_have_a_type_annotation_1022",
                        "message": "An index signature parameter must have a type annotation."
                    },
                    "An_index_signature_parameter_type_must_be_either_string_or_number": {
                        "code": 1023,
                        "category": 1,
                        "key": "An_index_signature_parameter_type_must_be_either_string_or_number_1023",
                        "message": "An index signature parameter type must be either 'string' or 'number'."
                    },
                    "readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature": {
                        "code": 1024,
                        "category": 1,
                        "key": "readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature_1024",
                        "message": "'readonly' modifier can only appear on a property declaration or index signature."
                    },
                    "Accessibility_modifier_already_seen": {
                        "code": 1028,
                        "category": 1,
                        "key": "Accessibility_modifier_already_seen_1028",
                        "message": "Accessibility modifier already seen."
                    },
                    "_0_modifier_must_precede_1_modifier": {
                        "code": 1029,
                        "category": 1,
                        "key": "_0_modifier_must_precede_1_modifier_1029",
                        "message": "'{0}' modifier must precede '{1}' modifier."
                    },
                    "_0_modifier_already_seen": {
                        "code": 1030,
                        "category": 1,
                        "key": "_0_modifier_already_seen_1030",
                        "message": "'{0}' modifier already seen."
                    },
                    "_0_modifier_cannot_appear_on_a_class_element": {
                        "code": 1031,
                        "category": 1,
                        "key": "_0_modifier_cannot_appear_on_a_class_element_1031",
                        "message": "'{0}' modifier cannot appear on a class element."
                    },
                    "super_must_be_followed_by_an_argument_list_or_member_access": {
                        "code": 1034,
                        "category": 1,
                        "key": "super_must_be_followed_by_an_argument_list_or_member_access_1034",
                        "message": "'super' must be followed by an argument list or member access."
                    },
                    "Only_ambient_modules_can_use_quoted_names": {
                        "code": 1035,
                        "category": 1,
                        "key": "Only_ambient_modules_can_use_quoted_names_1035",
                        "message": "Only ambient modules can use quoted names."
                    },
                    "Statements_are_not_allowed_in_ambient_contexts": {
                        "code": 1036,
                        "category": 1,
                        "key": "Statements_are_not_allowed_in_ambient_contexts_1036",
                        "message": "Statements are not allowed in ambient contexts."
                    },
                    "A_declare_modifier_cannot_be_used_in_an_already_ambient_context": {
                        "code": 1038,
                        "category": 1,
                        "key": "A_declare_modifier_cannot_be_used_in_an_already_ambient_context_1038",
                        "message": "A 'declare' modifier cannot be used in an already ambient context."
                    },
                    "Initializers_are_not_allowed_in_ambient_contexts": {
                        "code": 1039,
                        "category": 1,
                        "key": "Initializers_are_not_allowed_in_ambient_contexts_1039",
                        "message": "Initializers are not allowed in ambient contexts."
                    },
                    "_0_modifier_cannot_be_used_in_an_ambient_context": {
                        "code": 1040,
                        "category": 1,
                        "key": "_0_modifier_cannot_be_used_in_an_ambient_context_1040",
                        "message": "'{0}' modifier cannot be used in an ambient context."
                    },
                    "_0_modifier_cannot_be_used_with_a_class_declaration": {
                        "code": 1041,
                        "category": 1,
                        "key": "_0_modifier_cannot_be_used_with_a_class_declaration_1041",
                        "message": "'{0}' modifier cannot be used with a class declaration."
                    },
                    "_0_modifier_cannot_be_used_here": {
                        "code": 1042,
                        "category": 1,
                        "key": "_0_modifier_cannot_be_used_here_1042",
                        "message": "'{0}' modifier cannot be used here."
                    },
                    "_0_modifier_cannot_appear_on_a_data_property": {
                        "code": 1043,
                        "category": 1,
                        "key": "_0_modifier_cannot_appear_on_a_data_property_1043",
                        "message": "'{0}' modifier cannot appear on a data property."
                    },
                    "_0_modifier_cannot_appear_on_a_module_or_namespace_element": {
                        "code": 1044,
                        "category": 1,
                        "key": "_0_modifier_cannot_appear_on_a_module_or_namespace_element_1044",
                        "message": "'{0}' modifier cannot appear on a module or namespace element."
                    },
                    "A_0_modifier_cannot_be_used_with_an_interface_declaration": {
                        "code": 1045,
                        "category": 1,
                        "key": "A_0_modifier_cannot_be_used_with_an_interface_declaration_1045",
                        "message": "A '{0}' modifier cannot be used with an interface declaration."
                    },
                    "Top_level_declarations_in_d_ts_files_must_start_with_either_a_declare_or_export_modifier": {
                        "code": 1046,
                        "category": 1,
                        "key": "Top_level_declarations_in_d_ts_files_must_start_with_either_a_declare_or_export_modifier_1046",
                        "message": "Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier."
                    },
                    "A_rest_parameter_cannot_be_optional": {
                        "code": 1047,
                        "category": 1,
                        "key": "A_rest_parameter_cannot_be_optional_1047",
                        "message": "A rest parameter cannot be optional."
                    },
                    "A_rest_parameter_cannot_have_an_initializer": {
                        "code": 1048,
                        "category": 1,
                        "key": "A_rest_parameter_cannot_have_an_initializer_1048",
                        "message": "A rest parameter cannot have an initializer."
                    },
                    "A_set_accessor_must_have_exactly_one_parameter": {
                        "code": 1049,
                        "category": 1,
                        "key": "A_set_accessor_must_have_exactly_one_parameter_1049",
                        "message": "A 'set' accessor must have exactly one parameter."
                    },
                    "A_set_accessor_cannot_have_an_optional_parameter": {
                        "code": 1051,
                        "category": 1,
                        "key": "A_set_accessor_cannot_have_an_optional_parameter_1051",
                        "message": "A 'set' accessor cannot have an optional parameter."
                    },
                    "A_set_accessor_parameter_cannot_have_an_initializer": {
                        "code": 1052,
                        "category": 1,
                        "key": "A_set_accessor_parameter_cannot_have_an_initializer_1052",
                        "message": "A 'set' accessor parameter cannot have an initializer."
                    },
                    "A_set_accessor_cannot_have_rest_parameter": {
                        "code": 1053,
                        "category": 1,
                        "key": "A_set_accessor_cannot_have_rest_parameter_1053",
                        "message": "A 'set' accessor cannot have rest parameter."
                    },
                    "A_get_accessor_cannot_have_parameters": {
                        "code": 1054,
                        "category": 1,
                        "key": "A_get_accessor_cannot_have_parameters_1054",
                        "message": "A 'get' accessor cannot have parameters."
                    },
                    "Type_0_is_not_a_valid_async_function_return_type_in_ES5_SlashES3_because_it_does_not_refer_to_a_Promise_compatible_constructor_value": {
                        "code": 1055,
                        "category": 1,
                        "key": "Type_0_is_not_a_valid_async_function_return_type_in_ES5_SlashES3_because_it_does_not_refer_to_a_Prom_1055",
                        "message": "Type '{0}' is not a valid async function return type in ES5/ES3 because it does not refer to a Promise-compatible constructor value."
                    },
                    "Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher": {
                        "code": 1056,
                        "category": 1,
                        "key": "Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher_1056",
                        "message": "Accessors are only available when targeting ECMAScript 5 and higher."
                    },
                    "An_async_function_or_method_must_have_a_valid_awaitable_return_type": {
                        "code": 1057,
                        "category": 1,
                        "key": "An_async_function_or_method_must_have_a_valid_awaitable_return_type_1057",
                        "message": "An async function or method must have a valid awaitable return type."
                    },
                    "The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member": {
                        "code": 1058,
                        "category": 1,
                        "key": "The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_t_1058",
                        "message": "The return type of an async function must either be a valid promise or must not contain a callable 'then' member."
                    },
                    "A_promise_must_have_a_then_method": {
                        "code": 1059,
                        "category": 1,
                        "key": "A_promise_must_have_a_then_method_1059",
                        "message": "A promise must have a 'then' method."
                    },
                    "The_first_parameter_of_the_then_method_of_a_promise_must_be_a_callback": {
                        "code": 1060,
                        "category": 1,
                        "key": "The_first_parameter_of_the_then_method_of_a_promise_must_be_a_callback_1060",
                        "message": "The first parameter of the 'then' method of a promise must be a callback."
                    },
                    "Enum_member_must_have_initializer": {
                        "code": 1061,
                        "category": 1,
                        "key": "Enum_member_must_have_initializer_1061",
                        "message": "Enum member must have initializer."
                    },
                    "Type_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method": {
                        "code": 1062,
                        "category": 1,
                        "key": "Type_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method_1062",
                        "message": "Type is referenced directly or indirectly in the fulfillment callback of its own 'then' method."
                    },
                    "An_export_assignment_cannot_be_used_in_a_namespace": {
                        "code": 1063,
                        "category": 1,
                        "key": "An_export_assignment_cannot_be_used_in_a_namespace_1063",
                        "message": "An export assignment cannot be used in a namespace."
                    },
                    "The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type": {
                        "code": 1064,
                        "category": 1,
                        "key": "The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type_1064",
                        "message": "The return type of an async function or method must be the global Promise<T> type."
                    },
                    "In_ambient_enum_declarations_member_initializer_must_be_constant_expression": {
                        "code": 1066,
                        "category": 1,
                        "key": "In_ambient_enum_declarations_member_initializer_must_be_constant_expression_1066",
                        "message": "In ambient enum declarations member initializer must be constant expression."
                    },
                    "Unexpected_token_A_constructor_method_accessor_or_property_was_expected": {
                        "code": 1068,
                        "category": 1,
                        "key": "Unexpected_token_A_constructor_method_accessor_or_property_was_expected_1068",
                        "message": "Unexpected token. A constructor, method, accessor, or property was expected."
                    },
                    "Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces": {
                        "code": 1069,
                        "category": 1,
                        "key": "Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces_1069",
                        "message": "Unexpected token. A type parameter name was expected without curly braces."
                    },
                    "_0_modifier_cannot_appear_on_a_type_member": {
                        "code": 1070,
                        "category": 1,
                        "key": "_0_modifier_cannot_appear_on_a_type_member_1070",
                        "message": "'{0}' modifier cannot appear on a type member."
                    },
                    "_0_modifier_cannot_appear_on_an_index_signature": {
                        "code": 1071,
                        "category": 1,
                        "key": "_0_modifier_cannot_appear_on_an_index_signature_1071",
                        "message": "'{0}' modifier cannot appear on an index signature."
                    },
                    "A_0_modifier_cannot_be_used_with_an_import_declaration": {
                        "code": 1079,
                        "category": 1,
                        "key": "A_0_modifier_cannot_be_used_with_an_import_declaration_1079",
                        "message": "A '{0}' modifier cannot be used with an import declaration."
                    },
                    "Invalid_reference_directive_syntax": {
                        "code": 1084,
                        "category": 1,
                        "key": "Invalid_reference_directive_syntax_1084",
                        "message": "Invalid 'reference' directive syntax."
                    },
                    "Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher_Use_the_syntax_0": {
                        "code": 1085,
                        "category": 1,
                        "key": "Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher_Use_the_syntax_0_1085",
                        "message": "Octal literals are not available when targeting ECMAScript 5 and higher. Use the syntax '{0}'."
                    },
                    "_0_modifier_cannot_appear_on_a_constructor_declaration": {
                        "code": 1089,
                        "category": 1,
                        "key": "_0_modifier_cannot_appear_on_a_constructor_declaration_1089",
                        "message": "'{0}' modifier cannot appear on a constructor declaration."
                    },
                    "_0_modifier_cannot_appear_on_a_parameter": {
                        "code": 1090,
                        "category": 1,
                        "key": "_0_modifier_cannot_appear_on_a_parameter_1090",
                        "message": "'{0}' modifier cannot appear on a parameter."
                    },
                    "Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement": {
                        "code": 1091,
                        "category": 1,
                        "key": "Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement_1091",
                        "message": "Only a single variable declaration is allowed in a 'for...in' statement."
                    },
                    "Type_parameters_cannot_appear_on_a_constructor_declaration": {
                        "code": 1092,
                        "category": 1,
                        "key": "Type_parameters_cannot_appear_on_a_constructor_declaration_1092",
                        "message": "Type parameters cannot appear on a constructor declaration."
                    },
                    "Type_annotation_cannot_appear_on_a_constructor_declaration": {
                        "code": 1093,
                        "category": 1,
                        "key": "Type_annotation_cannot_appear_on_a_constructor_declaration_1093",
                        "message": "Type annotation cannot appear on a constructor declaration."
                    },
                    "An_accessor_cannot_have_type_parameters": {
                        "code": 1094,
                        "category": 1,
                        "key": "An_accessor_cannot_have_type_parameters_1094",
                        "message": "An accessor cannot have type parameters."
                    },
                    "A_set_accessor_cannot_have_a_return_type_annotation": {
                        "code": 1095,
                        "category": 1,
                        "key": "A_set_accessor_cannot_have_a_return_type_annotation_1095",
                        "message": "A 'set' accessor cannot have a return type annotation."
                    },
                    "An_index_signature_must_have_exactly_one_parameter": {
                        "code": 1096,
                        "category": 1,
                        "key": "An_index_signature_must_have_exactly_one_parameter_1096",
                        "message": "An index signature must have exactly one parameter."
                    },
                    "_0_list_cannot_be_empty": {
                        "code": 1097,
                        "category": 1,
                        "key": "_0_list_cannot_be_empty_1097",
                        "message": "'{0}' list cannot be empty."
                    },
                    "Type_parameter_list_cannot_be_empty": {
                        "code": 1098,
                        "category": 1,
                        "key": "Type_parameter_list_cannot_be_empty_1098",
                        "message": "Type parameter list cannot be empty."
                    },
                    "Type_argument_list_cannot_be_empty": {
                        "code": 1099,
                        "category": 1,
                        "key": "Type_argument_list_cannot_be_empty_1099",
                        "message": "Type argument list cannot be empty."
                    },
                    "Invalid_use_of_0_in_strict_mode": {
                        "code": 1100,
                        "category": 1,
                        "key": "Invalid_use_of_0_in_strict_mode_1100",
                        "message": "Invalid use of '{0}' in strict mode."
                    },
                    "with_statements_are_not_allowed_in_strict_mode": {
                        "code": 1101,
                        "category": 1,
                        "key": "with_statements_are_not_allowed_in_strict_mode_1101",
                        "message": "'with' statements are not allowed in strict mode."
                    },
                    "delete_cannot_be_called_on_an_identifier_in_strict_mode": {
                        "code": 1102,
                        "category": 1,
                        "key": "delete_cannot_be_called_on_an_identifier_in_strict_mode_1102",
                        "message": "'delete' cannot be called on an identifier in strict mode."
                    },
                    "A_for_await_of_statement_is_only_allowed_within_an_async_function_or_async_generator": {
                        "code": 1103,
                        "category": 1,
                        "key": "A_for_await_of_statement_is_only_allowed_within_an_async_function_or_async_generator_1103",
                        "message": "A 'for-await-of' statement is only allowed within an async function or async generator."
                    },
                    "A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement": {
                        "code": 1104,
                        "category": 1,
                        "key": "A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement_1104",
                        "message": "A 'continue' statement can only be used within an enclosing iteration statement."
                    },
                    "A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement": {
                        "code": 1105,
                        "category": 1,
                        "key": "A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement_1105",
                        "message": "A 'break' statement can only be used within an enclosing iteration or switch statement."
                    },
                    "Jump_target_cannot_cross_function_boundary": {
                        "code": 1107,
                        "category": 1,
                        "key": "Jump_target_cannot_cross_function_boundary_1107",
                        "message": "Jump target cannot cross function boundary."
                    },
                    "A_return_statement_can_only_be_used_within_a_function_body": {
                        "code": 1108,
                        "category": 1,
                        "key": "A_return_statement_can_only_be_used_within_a_function_body_1108",
                        "message": "A 'return' statement can only be used within a function body."
                    },
                    "Expression_expected": {
                        "code": 1109,
                        "category": 1,
                        "key": "Expression_expected_1109",
                        "message": "Expression expected."
                    },
                    "Type_expected": {
                        "code": 1110,
                        "category": 1,
                        "key": "Type_expected_1110",
                        "message": "Type expected."
                    },
                    "A_default_clause_cannot_appear_more_than_once_in_a_switch_statement": {
                        "code": 1113,
                        "category": 1,
                        "key": "A_default_clause_cannot_appear_more_than_once_in_a_switch_statement_1113",
                        "message": "A 'default' clause cannot appear more than once in a 'switch' statement."
                    },
                    "Duplicate_label_0": {
                        "code": 1114,
                        "category": 1,
                        "key": "Duplicate_label_0_1114",
                        "message": "Duplicate label '{0}'."
                    },
                    "A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement": {
                        "code": 1115,
                        "category": 1,
                        "key": "A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement_1115",
                        "message": "A 'continue' statement can only jump to a label of an enclosing iteration statement."
                    },
                    "A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement": {
                        "code": 1116,
                        "category": 1,
                        "key": "A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement_1116",
                        "message": "A 'break' statement can only jump to a label of an enclosing statement."
                    },
                    "An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode": {
                        "code": 1117,
                        "category": 1,
                        "key": "An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode_1117",
                        "message": "An object literal cannot have multiple properties with the same name in strict mode."
                    },
                    "An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name": {
                        "code": 1118,
                        "category": 1,
                        "key": "An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name_1118",
                        "message": "An object literal cannot have multiple get/set accessors with the same name."
                    },
                    "An_object_literal_cannot_have_property_and_accessor_with_the_same_name": {
                        "code": 1119,
                        "category": 1,
                        "key": "An_object_literal_cannot_have_property_and_accessor_with_the_same_name_1119",
                        "message": "An object literal cannot have property and accessor with the same name."
                    },
                    "An_export_assignment_cannot_have_modifiers": {
                        "code": 1120,
                        "category": 1,
                        "key": "An_export_assignment_cannot_have_modifiers_1120",
                        "message": "An export assignment cannot have modifiers."
                    },
                    "Octal_literals_are_not_allowed_in_strict_mode": {
                        "code": 1121,
                        "category": 1,
                        "key": "Octal_literals_are_not_allowed_in_strict_mode_1121",
                        "message": "Octal literals are not allowed in strict mode."
                    },
                    "Variable_declaration_list_cannot_be_empty": {
                        "code": 1123,
                        "category": 1,
                        "key": "Variable_declaration_list_cannot_be_empty_1123",
                        "message": "Variable declaration list cannot be empty."
                    },
                    "Digit_expected": {
                        "code": 1124,
                        "category": 1,
                        "key": "Digit_expected_1124",
                        "message": "Digit expected."
                    },
                    "Hexadecimal_digit_expected": {
                        "code": 1125,
                        "category": 1,
                        "key": "Hexadecimal_digit_expected_1125",
                        "message": "Hexadecimal digit expected."
                    },
                    "Unexpected_end_of_text": {
                        "code": 1126,
                        "category": 1,
                        "key": "Unexpected_end_of_text_1126",
                        "message": "Unexpected end of text."
                    },
                    "Invalid_character": {
                        "code": 1127,
                        "category": 1,
                        "key": "Invalid_character_1127",
                        "message": "Invalid character."
                    },
                    "Declaration_or_statement_expected": {
                        "code": 1128,
                        "category": 1,
                        "key": "Declaration_or_statement_expected_1128",
                        "message": "Declaration or statement expected."
                    },
                    "Statement_expected": {
                        "code": 1129,
                        "category": 1,
                        "key": "Statement_expected_1129",
                        "message": "Statement expected."
                    },
                    "case_or_default_expected": {
                        "code": 1130,
                        "category": 1,
                        "key": "case_or_default_expected_1130",
                        "message": "'case' or 'default' expected."
                    },
                    "Property_or_signature_expected": {
                        "code": 1131,
                        "category": 1,
                        "key": "Property_or_signature_expected_1131",
                        "message": "Property or signature expected."
                    },
                    "Enum_member_expected": {
                        "code": 1132,
                        "category": 1,
                        "key": "Enum_member_expected_1132",
                        "message": "Enum member expected."
                    },
                    "Variable_declaration_expected": {
                        "code": 1134,
                        "category": 1,
                        "key": "Variable_declaration_expected_1134",
                        "message": "Variable declaration expected."
                    },
                    "Argument_expression_expected": {
                        "code": 1135,
                        "category": 1,
                        "key": "Argument_expression_expected_1135",
                        "message": "Argument expression expected."
                    },
                    "Property_assignment_expected": {
                        "code": 1136,
                        "category": 1,
                        "key": "Property_assignment_expected_1136",
                        "message": "Property assignment expected."
                    },
                    "Expression_or_comma_expected": {
                        "code": 1137,
                        "category": 1,
                        "key": "Expression_or_comma_expected_1137",
                        "message": "Expression or comma expected."
                    },
                    "Parameter_declaration_expected": {
                        "code": 1138,
                        "category": 1,
                        "key": "Parameter_declaration_expected_1138",
                        "message": "Parameter declaration expected."
                    },
                    "Type_parameter_declaration_expected": {
                        "code": 1139,
                        "category": 1,
                        "key": "Type_parameter_declaration_expected_1139",
                        "message": "Type parameter declaration expected."
                    },
                    "Type_argument_expected": {
                        "code": 1140,
                        "category": 1,
                        "key": "Type_argument_expected_1140",
                        "message": "Type argument expected."
                    },
                    "String_literal_expected": {
                        "code": 1141,
                        "category": 1,
                        "key": "String_literal_expected_1141",
                        "message": "String literal expected."
                    },
                    "Line_break_not_permitted_here": {
                        "code": 1142,
                        "category": 1,
                        "key": "Line_break_not_permitted_here_1142",
                        "message": "Line break not permitted here."
                    },
                    "or_expected": {
                        "code": 1144,
                        "category": 1,
                        "key": "or_expected_1144",
                        "message": "'{' or ';' expected."
                    },
                    "Declaration_expected": {
                        "code": 1146,
                        "category": 1,
                        "key": "Declaration_expected_1146",
                        "message": "Declaration expected."
                    },
                    "Import_declarations_in_a_namespace_cannot_reference_a_module": {
                        "code": 1147,
                        "category": 1,
                        "key": "Import_declarations_in_a_namespace_cannot_reference_a_module_1147",
                        "message": "Import declarations in a namespace cannot reference a module."
                    },
                    "Cannot_use_imports_exports_or_module_augmentations_when_module_is_none": {
                        "code": 1148,
                        "category": 1,
                        "key": "Cannot_use_imports_exports_or_module_augmentations_when_module_is_none_1148",
                        "message": "Cannot use imports, exports, or module augmentations when '--module' is 'none'."
                    },
                    "File_name_0_differs_from_already_included_file_name_1_only_in_casing": {
                        "code": 1149,
                        "category": 1,
                        "key": "File_name_0_differs_from_already_included_file_name_1_only_in_casing_1149",
                        "message": "File name '{0}' differs from already included file name '{1}' only in casing."
                    },
                    "const_declarations_must_be_initialized": {
                        "code": 1155,
                        "category": 1,
                        "key": "const_declarations_must_be_initialized_1155",
                        "message": "'const' declarations must be initialized."
                    },
                    "const_declarations_can_only_be_declared_inside_a_block": {
                        "code": 1156,
                        "category": 1,
                        "key": "const_declarations_can_only_be_declared_inside_a_block_1156",
                        "message": "'const' declarations can only be declared inside a block."
                    },
                    "let_declarations_can_only_be_declared_inside_a_block": {
                        "code": 1157,
                        "category": 1,
                        "key": "let_declarations_can_only_be_declared_inside_a_block_1157",
                        "message": "'let' declarations can only be declared inside a block."
                    },
                    "Unterminated_template_literal": {
                        "code": 1160,
                        "category": 1,
                        "key": "Unterminated_template_literal_1160",
                        "message": "Unterminated template literal."
                    },
                    "Unterminated_regular_expression_literal": {
                        "code": 1161,
                        "category": 1,
                        "key": "Unterminated_regular_expression_literal_1161",
                        "message": "Unterminated regular expression literal."
                    },
                    "An_object_member_cannot_be_declared_optional": {
                        "code": 1162,
                        "category": 1,
                        "key": "An_object_member_cannot_be_declared_optional_1162",
                        "message": "An object member cannot be declared optional."
                    },
                    "A_yield_expression_is_only_allowed_in_a_generator_body": {
                        "code": 1163,
                        "category": 1,
                        "key": "A_yield_expression_is_only_allowed_in_a_generator_body_1163",
                        "message": "A 'yield' expression is only allowed in a generator body."
                    },
                    "Computed_property_names_are_not_allowed_in_enums": {
                        "code": 1164,
                        "category": 1,
                        "key": "Computed_property_names_are_not_allowed_in_enums_1164",
                        "message": "Computed property names are not allowed in enums."
                    },
                    "A_computed_property_name_in_an_ambient_context_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type": {
                        "code": 1165,
                        "category": 1,
                        "key": "A_computed_property_name_in_an_ambient_context_must_refer_to_an_expression_whose_type_is_a_literal_t_1165",
                        "message": "A computed property name in an ambient context must refer to an expression whose type is a literal type or a 'unique symbol' type."
                    },
                    "A_computed_property_name_in_a_class_property_declaration_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type": {
                        "code": 1166,
                        "category": 1,
                        "key": "A_computed_property_name_in_a_class_property_declaration_must_refer_to_an_expression_whose_type_is_a_1166",
                        "message": "A computed property name in a class property declaration must refer to an expression whose type is a literal type or a 'unique symbol' type."
                    },
                    "A_computed_property_name_in_a_method_overload_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type": {
                        "code": 1168,
                        "category": 1,
                        "key": "A_computed_property_name_in_a_method_overload_must_refer_to_an_expression_whose_type_is_a_literal_ty_1168",
                        "message": "A computed property name in a method overload must refer to an expression whose type is a literal type or a 'unique symbol' type."
                    },
                    "A_computed_property_name_in_an_interface_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type": {
                        "code": 1169,
                        "category": 1,
                        "key": "A_computed_property_name_in_an_interface_must_refer_to_an_expression_whose_type_is_a_literal_type_or_1169",
                        "message": "A computed property name in an interface must refer to an expression whose type is a literal type or a 'unique symbol' type."
                    },
                    "A_computed_property_name_in_a_type_literal_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type": {
                        "code": 1170,
                        "category": 1,
                        "key": "A_computed_property_name_in_a_type_literal_must_refer_to_an_expression_whose_type_is_a_literal_type__1170",
                        "message": "A computed property name in a type literal must refer to an expression whose type is a literal type or a 'unique symbol' type."
                    },
                    "A_comma_expression_is_not_allowed_in_a_computed_property_name": {
                        "code": 1171,
                        "category": 1,
                        "key": "A_comma_expression_is_not_allowed_in_a_computed_property_name_1171",
                        "message": "A comma expression is not allowed in a computed property name."
                    },
                    "extends_clause_already_seen": {
                        "code": 1172,
                        "category": 1,
                        "key": "extends_clause_already_seen_1172",
                        "message": "'extends' clause already seen."
                    },
                    "extends_clause_must_precede_implements_clause": {
                        "code": 1173,
                        "category": 1,
                        "key": "extends_clause_must_precede_implements_clause_1173",
                        "message": "'extends' clause must precede 'implements' clause."
                    },
                    "Classes_can_only_extend_a_single_class": {
                        "code": 1174,
                        "category": 1,
                        "key": "Classes_can_only_extend_a_single_class_1174",
                        "message": "Classes can only extend a single class."
                    },
                    "implements_clause_already_seen": {
                        "code": 1175,
                        "category": 1,
                        "key": "implements_clause_already_seen_1175",
                        "message": "'implements' clause already seen."
                    },
                    "Interface_declaration_cannot_have_implements_clause": {
                        "code": 1176,
                        "category": 1,
                        "key": "Interface_declaration_cannot_have_implements_clause_1176",
                        "message": "Interface declaration cannot have 'implements' clause."
                    },
                    "Binary_digit_expected": {
                        "code": 1177,
                        "category": 1,
                        "key": "Binary_digit_expected_1177",
                        "message": "Binary digit expected."
                    },
                    "Octal_digit_expected": {
                        "code": 1178,
                        "category": 1,
                        "key": "Octal_digit_expected_1178",
                        "message": "Octal digit expected."
                    },
                    "Unexpected_token_expected": {
                        "code": 1179,
                        "category": 1,
                        "key": "Unexpected_token_expected_1179",
                        "message": "Unexpected token. '{' expected."
                    },
                    "Property_destructuring_pattern_expected": {
                        "code": 1180,
                        "category": 1,
                        "key": "Property_destructuring_pattern_expected_1180",
                        "message": "Property destructuring pattern expected."
                    },
                    "Array_element_destructuring_pattern_expected": {
                        "code": 1181,
                        "category": 1,
                        "key": "Array_element_destructuring_pattern_expected_1181",
                        "message": "Array element destructuring pattern expected."
                    },
                    "A_destructuring_declaration_must_have_an_initializer": {
                        "code": 1182,
                        "category": 1,
                        "key": "A_destructuring_declaration_must_have_an_initializer_1182",
                        "message": "A destructuring declaration must have an initializer."
                    },
                    "An_implementation_cannot_be_declared_in_ambient_contexts": {
                        "code": 1183,
                        "category": 1,
                        "key": "An_implementation_cannot_be_declared_in_ambient_contexts_1183",
                        "message": "An implementation cannot be declared in ambient contexts."
                    },
                    "Modifiers_cannot_appear_here": {
                        "code": 1184,
                        "category": 1,
                        "key": "Modifiers_cannot_appear_here_1184",
                        "message": "Modifiers cannot appear here."
                    },
                    "Merge_conflict_marker_encountered": {
                        "code": 1185,
                        "category": 1,
                        "key": "Merge_conflict_marker_encountered_1185",
                        "message": "Merge conflict marker encountered."
                    },
                    "A_rest_element_cannot_have_an_initializer": {
                        "code": 1186,
                        "category": 1,
                        "key": "A_rest_element_cannot_have_an_initializer_1186",
                        "message": "A rest element cannot have an initializer."
                    },
                    "A_parameter_property_may_not_be_declared_using_a_binding_pattern": {
                        "code": 1187,
                        "category": 1,
                        "key": "A_parameter_property_may_not_be_declared_using_a_binding_pattern_1187",
                        "message": "A parameter property may not be declared using a binding pattern."
                    },
                    "Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement": {
                        "code": 1188,
                        "category": 1,
                        "key": "Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement_1188",
                        "message": "Only a single variable declaration is allowed in a 'for...of' statement."
                    },
                    "The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer": {
                        "code": 1189,
                        "category": 1,
                        "key": "The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer_1189",
                        "message": "The variable declaration of a 'for...in' statement cannot have an initializer."
                    },
                    "The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer": {
                        "code": 1190,
                        "category": 1,
                        "key": "The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer_1190",
                        "message": "The variable declaration of a 'for...of' statement cannot have an initializer."
                    },
                    "An_import_declaration_cannot_have_modifiers": {
                        "code": 1191,
                        "category": 1,
                        "key": "An_import_declaration_cannot_have_modifiers_1191",
                        "message": "An import declaration cannot have modifiers."
                    },
                    "Module_0_has_no_default_export": {
                        "code": 1192,
                        "category": 1,
                        "key": "Module_0_has_no_default_export_1192",
                        "message": "Module '{0}' has no default export."
                    },
                    "An_export_declaration_cannot_have_modifiers": {
                        "code": 1193,
                        "category": 1,
                        "key": "An_export_declaration_cannot_have_modifiers_1193",
                        "message": "An export declaration cannot have modifiers."
                    },
                    "Export_declarations_are_not_permitted_in_a_namespace": {
                        "code": 1194,
                        "category": 1,
                        "key": "Export_declarations_are_not_permitted_in_a_namespace_1194",
                        "message": "Export declarations are not permitted in a namespace."
                    },
                    "Catch_clause_variable_cannot_have_a_type_annotation": {
                        "code": 1196,
                        "category": 1,
                        "key": "Catch_clause_variable_cannot_have_a_type_annotation_1196",
                        "message": "Catch clause variable cannot have a type annotation."
                    },
                    "Catch_clause_variable_cannot_have_an_initializer": {
                        "code": 1197,
                        "category": 1,
                        "key": "Catch_clause_variable_cannot_have_an_initializer_1197",
                        "message": "Catch clause variable cannot have an initializer."
                    },
                    "An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive": {
                        "code": 1198,
                        "category": 1,
                        "key": "An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive_1198",
                        "message": "An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive."
                    },
                    "Unterminated_Unicode_escape_sequence": {
                        "code": 1199,
                        "category": 1,
                        "key": "Unterminated_Unicode_escape_sequence_1199",
                        "message": "Unterminated Unicode escape sequence."
                    },
                    "Line_terminator_not_permitted_before_arrow": {
                        "code": 1200,
                        "category": 1,
                        "key": "Line_terminator_not_permitted_before_arrow_1200",
                        "message": "Line terminator not permitted before arrow."
                    },
                    "Import_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead": {
                        "code": 1202,
                        "category": 1,
                        "key": "Import_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_import_Asterisk_as_1202",
                        "message": "Import assignment cannot be used when targeting ECMAScript modules. Consider using 'import * as ns from \"mod\"', 'import {a} from \"mod\"', 'import d from \"mod\"', or another module format instead."
                    },
                    "Export_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_export_default_or_another_module_format_instead": {
                        "code": 1203,
                        "category": 1,
                        "key": "Export_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_export_default_or__1203",
                        "message": "Export assignment cannot be used when targeting ECMAScript modules. Consider using 'export default' or another module format instead."
                    },
                    "Cannot_re_export_a_type_when_the_isolatedModules_flag_is_provided": {
                        "code": 1205,
                        "category": 1,
                        "key": "Cannot_re_export_a_type_when_the_isolatedModules_flag_is_provided_1205",
                        "message": "Cannot re-export a type when the '--isolatedModules' flag is provided."
                    },
                    "Decorators_are_not_valid_here": {
                        "code": 1206,
                        "category": 1,
                        "key": "Decorators_are_not_valid_here_1206",
                        "message": "Decorators are not valid here."
                    },
                    "Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name": {
                        "code": 1207,
                        "category": 1,
                        "key": "Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name_1207",
                        "message": "Decorators cannot be applied to multiple get/set accessors of the same name."
                    },
                    "All_files_must_be_modules_when_the_isolatedModules_flag_is_provided": {
                        "code": 1208,
                        "category": 1,
                        "key": "All_files_must_be_modules_when_the_isolatedModules_flag_is_provided_1208",
                        "message": "All files must be modules when the '--isolatedModules' flag is provided."
                    },
                    "Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode": {
                        "code": 1210,
                        "category": 1,
                        "key": "Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode_1210",
                        "message": "Invalid use of '{0}'. Class definitions are automatically in strict mode."
                    },
                    "A_class_declaration_without_the_default_modifier_must_have_a_name": {
                        "code": 1211,
                        "category": 1,
                        "key": "A_class_declaration_without_the_default_modifier_must_have_a_name_1211",
                        "message": "A class declaration without the 'default' modifier must have a name."
                    },
                    "Identifier_expected_0_is_a_reserved_word_in_strict_mode": {
                        "code": 1212,
                        "category": 1,
                        "key": "Identifier_expected_0_is_a_reserved_word_in_strict_mode_1212",
                        "message": "Identifier expected. '{0}' is a reserved word in strict mode."
                    },
                    "Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode": {
                        "code": 1213,
                        "category": 1,
                        "key": "Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_stric_1213",
                        "message": "Identifier expected. '{0}' is a reserved word in strict mode. Class definitions are automatically in strict mode."
                    },
                    "Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode": {
                        "code": 1214,
                        "category": 1,
                        "key": "Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode_1214",
                        "message": "Identifier expected. '{0}' is a reserved word in strict mode. Modules are automatically in strict mode."
                    },
                    "Invalid_use_of_0_Modules_are_automatically_in_strict_mode": {
                        "code": 1215,
                        "category": 1,
                        "key": "Invalid_use_of_0_Modules_are_automatically_in_strict_mode_1215",
                        "message": "Invalid use of '{0}'. Modules are automatically in strict mode."
                    },
                    "Identifier_expected_esModule_is_reserved_as_an_exported_marker_when_transforming_ECMAScript_modules": {
                        "code": 1216,
                        "category": 1,
                        "key": "Identifier_expected_esModule_is_reserved_as_an_exported_marker_when_transforming_ECMAScript_modules_1216",
                        "message": "Identifier expected. '__esModule' is reserved as an exported marker when transforming ECMAScript modules."
                    },
                    "Export_assignment_is_not_supported_when_module_flag_is_system": {
                        "code": 1218,
                        "category": 1,
                        "key": "Export_assignment_is_not_supported_when_module_flag_is_system_1218",
                        "message": "Export assignment is not supported when '--module' flag is 'system'."
                    },
                    "Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_in_your_tsconfig_or_jsconfig_to_remove_this_warning": {
                        "code": 1219,
                        "category": 1,
                        "key": "Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_t_1219",
                        "message": "Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning."
                    },
                    "Generators_are_only_available_when_targeting_ECMAScript_2015_or_higher": {
                        "code": 1220,
                        "category": 1,
                        "key": "Generators_are_only_available_when_targeting_ECMAScript_2015_or_higher_1220",
                        "message": "Generators are only available when targeting ECMAScript 2015 or higher."
                    },
                    "Generators_are_not_allowed_in_an_ambient_context": {
                        "code": 1221,
                        "category": 1,
                        "key": "Generators_are_not_allowed_in_an_ambient_context_1221",
                        "message": "Generators are not allowed in an ambient context."
                    },
                    "An_overload_signature_cannot_be_declared_as_a_generator": {
                        "code": 1222,
                        "category": 1,
                        "key": "An_overload_signature_cannot_be_declared_as_a_generator_1222",
                        "message": "An overload signature cannot be declared as a generator."
                    },
                    "_0_tag_already_specified": {
                        "code": 1223,
                        "category": 1,
                        "key": "_0_tag_already_specified_1223",
                        "message": "'{0}' tag already specified."
                    },
                    "Signature_0_must_be_a_type_predicate": {
                        "code": 1224,
                        "category": 1,
                        "key": "Signature_0_must_be_a_type_predicate_1224",
                        "message": "Signature '{0}' must be a type predicate."
                    },
                    "Cannot_find_parameter_0": {
                        "code": 1225,
                        "category": 1,
                        "key": "Cannot_find_parameter_0_1225",
                        "message": "Cannot find parameter '{0}'."
                    },
                    "Type_predicate_0_is_not_assignable_to_1": {
                        "code": 1226,
                        "category": 1,
                        "key": "Type_predicate_0_is_not_assignable_to_1_1226",
                        "message": "Type predicate '{0}' is not assignable to '{1}'."
                    },
                    "Parameter_0_is_not_in_the_same_position_as_parameter_1": {
                        "code": 1227,
                        "category": 1,
                        "key": "Parameter_0_is_not_in_the_same_position_as_parameter_1_1227",
                        "message": "Parameter '{0}' is not in the same position as parameter '{1}'."
                    },
                    "A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods": {
                        "code": 1228,
                        "category": 1,
                        "key": "A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods_1228",
                        "message": "A type predicate is only allowed in return type position for functions and methods."
                    },
                    "A_type_predicate_cannot_reference_a_rest_parameter": {
                        "code": 1229,
                        "category": 1,
                        "key": "A_type_predicate_cannot_reference_a_rest_parameter_1229",
                        "message": "A type predicate cannot reference a rest parameter."
                    },
                    "A_type_predicate_cannot_reference_element_0_in_a_binding_pattern": {
                        "code": 1230,
                        "category": 1,
                        "key": "A_type_predicate_cannot_reference_element_0_in_a_binding_pattern_1230",
                        "message": "A type predicate cannot reference element '{0}' in a binding pattern."
                    },
                    "An_export_assignment_can_only_be_used_in_a_module": {
                        "code": 1231,
                        "category": 1,
                        "key": "An_export_assignment_can_only_be_used_in_a_module_1231",
                        "message": "An export assignment can only be used in a module."
                    },
                    "An_import_declaration_can_only_be_used_in_a_namespace_or_module": {
                        "code": 1232,
                        "category": 1,
                        "key": "An_import_declaration_can_only_be_used_in_a_namespace_or_module_1232",
                        "message": "An import declaration can only be used in a namespace or module."
                    },
                    "An_export_declaration_can_only_be_used_in_a_module": {
                        "code": 1233,
                        "category": 1,
                        "key": "An_export_declaration_can_only_be_used_in_a_module_1233",
                        "message": "An export declaration can only be used in a module."
                    },
                    "An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file": {
                        "code": 1234,
                        "category": 1,
                        "key": "An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file_1234",
                        "message": "An ambient module declaration is only allowed at the top level in a file."
                    },
                    "A_namespace_declaration_is_only_allowed_in_a_namespace_or_module": {
                        "code": 1235,
                        "category": 1,
                        "key": "A_namespace_declaration_is_only_allowed_in_a_namespace_or_module_1235",
                        "message": "A namespace declaration is only allowed in a namespace or module."
                    },
                    "The_return_type_of_a_property_decorator_function_must_be_either_void_or_any": {
                        "code": 1236,
                        "category": 1,
                        "key": "The_return_type_of_a_property_decorator_function_must_be_either_void_or_any_1236",
                        "message": "The return type of a property decorator function must be either 'void' or 'any'."
                    },
                    "The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any": {
                        "code": 1237,
                        "category": 1,
                        "key": "The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any_1237",
                        "message": "The return type of a parameter decorator function must be either 'void' or 'any'."
                    },
                    "Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression": {
                        "code": 1238,
                        "category": 1,
                        "key": "Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression_1238",
                        "message": "Unable to resolve signature of class decorator when called as an expression."
                    },
                    "Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression": {
                        "code": 1239,
                        "category": 1,
                        "key": "Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression_1239",
                        "message": "Unable to resolve signature of parameter decorator when called as an expression."
                    },
                    "Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression": {
                        "code": 1240,
                        "category": 1,
                        "key": "Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression_1240",
                        "message": "Unable to resolve signature of property decorator when called as an expression."
                    },
                    "Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression": {
                        "code": 1241,
                        "category": 1,
                        "key": "Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression_1241",
                        "message": "Unable to resolve signature of method decorator when called as an expression."
                    },
                    "abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration": {
                        "code": 1242,
                        "category": 1,
                        "key": "abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration_1242",
                        "message": "'abstract' modifier can only appear on a class, method, or property declaration."
                    },
                    "_0_modifier_cannot_be_used_with_1_modifier": {
                        "code": 1243,
                        "category": 1,
                        "key": "_0_modifier_cannot_be_used_with_1_modifier_1243",
                        "message": "'{0}' modifier cannot be used with '{1}' modifier."
                    },
                    "Abstract_methods_can_only_appear_within_an_abstract_class": {
                        "code": 1244,
                        "category": 1,
                        "key": "Abstract_methods_can_only_appear_within_an_abstract_class_1244",
                        "message": "Abstract methods can only appear within an abstract class."
                    },
                    "Method_0_cannot_have_an_implementation_because_it_is_marked_abstract": {
                        "code": 1245,
                        "category": 1,
                        "key": "Method_0_cannot_have_an_implementation_because_it_is_marked_abstract_1245",
                        "message": "Method '{0}' cannot have an implementation because it is marked abstract."
                    },
                    "An_interface_property_cannot_have_an_initializer": {
                        "code": 1246,
                        "category": 1,
                        "key": "An_interface_property_cannot_have_an_initializer_1246",
                        "message": "An interface property cannot have an initializer."
                    },
                    "A_type_literal_property_cannot_have_an_initializer": {
                        "code": 1247,
                        "category": 1,
                        "key": "A_type_literal_property_cannot_have_an_initializer_1247",
                        "message": "A type literal property cannot have an initializer."
                    },
                    "A_class_member_cannot_have_the_0_keyword": {
                        "code": 1248,
                        "category": 1,
                        "key": "A_class_member_cannot_have_the_0_keyword_1248",
                        "message": "A class member cannot have the '{0}' keyword."
                    },
                    "A_decorator_can_only_decorate_a_method_implementation_not_an_overload": {
                        "code": 1249,
                        "category": 1,
                        "key": "A_decorator_can_only_decorate_a_method_implementation_not_an_overload_1249",
                        "message": "A decorator can only decorate a method implementation, not an overload."
                    },
                    "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5": {
                        "code": 1250,
                        "category": 1,
                        "key": "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_1250",
                        "message": "Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'."
                    },
                    "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_definitions_are_automatically_in_strict_mode": {
                        "code": 1251,
                        "category": 1,
                        "key": "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_d_1251",
                        "message": "Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'. Class definitions are automatically in strict mode."
                    },
                    "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_are_automatically_in_strict_mode": {
                        "code": 1252,
                        "category": 1,
                        "key": "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_1252",
                        "message": "Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'. Modules are automatically in strict mode."
                    },
                    "_0_tag_cannot_be_used_independently_as_a_top_level_JSDoc_tag": {
                        "code": 1253,
                        "category": 1,
                        "key": "_0_tag_cannot_be_used_independently_as_a_top_level_JSDoc_tag_1253",
                        "message": "'{0}' tag cannot be used independently as a top level JSDoc tag."
                    },
                    "A_const_initializer_in_an_ambient_context_must_be_a_string_or_numeric_literal_or_literal_enum_reference": {
                        "code": 1254,
                        "category": 1,
                        "key": "A_const_initializer_in_an_ambient_context_must_be_a_string_or_numeric_literal_or_literal_enum_refere_1254",
                        "message": "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference."
                    },
                    "A_definite_assignment_assertion_is_not_permitted_in_this_context": {
                        "code": 1255,
                        "category": 1,
                        "key": "A_definite_assignment_assertion_is_not_permitted_in_this_context_1255",
                        "message": "A definite assignment assertion '!' is not permitted in this context."
                    },
                    "A_rest_element_must_be_last_in_a_tuple_type": {
                        "code": 1256,
                        "category": 1,
                        "key": "A_rest_element_must_be_last_in_a_tuple_type_1256",
                        "message": "A rest element must be last in a tuple type."
                    },
                    "A_required_element_cannot_follow_an_optional_element": {
                        "code": 1257,
                        "category": 1,
                        "key": "A_required_element_cannot_follow_an_optional_element_1257",
                        "message": "A required element cannot follow an optional element."
                    },
                    "Definite_assignment_assertions_can_only_be_used_along_with_a_type_annotation": {
                        "code": 1258,
                        "category": 1,
                        "key": "Definite_assignment_assertions_can_only_be_used_along_with_a_type_annotation_1258",
                        "message": "Definite assignment assertions can only be used along with a type annotation."
                    },
                    "Module_0_can_only_be_default_imported_using_the_1_flag": {
                        "code": 1259,
                        "category": 1,
                        "key": "Module_0_can_only_be_default_imported_using_the_1_flag_1259",
                        "message": "Module '{0}' can only be default-imported using the '{1}' flag"
                    },
                    "Keywords_cannot_contain_escape_characters": {
                        "code": 1260,
                        "category": 1,
                        "key": "Keywords_cannot_contain_escape_characters_1260",
                        "message": "Keywords cannot contain escape characters."
                    },
                    "with_statements_are_not_allowed_in_an_async_function_block": {
                        "code": 1300,
                        "category": 1,
                        "key": "with_statements_are_not_allowed_in_an_async_function_block_1300",
                        "message": "'with' statements are not allowed in an async function block."
                    },
                    "await_expression_is_only_allowed_within_an_async_function": {
                        "code": 1308,
                        "category": 1,
                        "key": "await_expression_is_only_allowed_within_an_async_function_1308",
                        "message": "'await' expression is only allowed within an async function."
                    },
                    "can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment": {
                        "code": 1312,
                        "category": 1,
                        "key": "can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment_1312",
                        "message": "'=' can only be used in an object literal property inside a destructuring assignment."
                    },
                    "The_body_of_an_if_statement_cannot_be_the_empty_statement": {
                        "code": 1313,
                        "category": 1,
                        "key": "The_body_of_an_if_statement_cannot_be_the_empty_statement_1313",
                        "message": "The body of an 'if' statement cannot be the empty statement."
                    },
                    "Global_module_exports_may_only_appear_in_module_files": {
                        "code": 1314,
                        "category": 1,
                        "key": "Global_module_exports_may_only_appear_in_module_files_1314",
                        "message": "Global module exports may only appear in module files."
                    },
                    "Global_module_exports_may_only_appear_in_declaration_files": {
                        "code": 1315,
                        "category": 1,
                        "key": "Global_module_exports_may_only_appear_in_declaration_files_1315",
                        "message": "Global module exports may only appear in declaration files."
                    },
                    "Global_module_exports_may_only_appear_at_top_level": {
                        "code": 1316,
                        "category": 1,
                        "key": "Global_module_exports_may_only_appear_at_top_level_1316",
                        "message": "Global module exports may only appear at top level."
                    },
                    "A_parameter_property_cannot_be_declared_using_a_rest_parameter": {
                        "code": 1317,
                        "category": 1,
                        "key": "A_parameter_property_cannot_be_declared_using_a_rest_parameter_1317",
                        "message": "A parameter property cannot be declared using a rest parameter."
                    },
                    "An_abstract_accessor_cannot_have_an_implementation": {
                        "code": 1318,
                        "category": 1,
                        "key": "An_abstract_accessor_cannot_have_an_implementation_1318",
                        "message": "An abstract accessor cannot have an implementation."
                    },
                    "A_default_export_can_only_be_used_in_an_ECMAScript_style_module": {
                        "code": 1319,
                        "category": 1,
                        "key": "A_default_export_can_only_be_used_in_an_ECMAScript_style_module_1319",
                        "message": "A default export can only be used in an ECMAScript-style module."
                    },
                    "Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member": {
                        "code": 1320,
                        "category": 1,
                        "key": "Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member_1320",
                        "message": "Type of 'await' operand must either be a valid promise or must not contain a callable 'then' member."
                    },
                    "Type_of_yield_operand_in_an_async_generator_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member": {
                        "code": 1321,
                        "category": 1,
                        "key": "Type_of_yield_operand_in_an_async_generator_must_either_be_a_valid_promise_or_must_not_contain_a_cal_1321",
                        "message": "Type of 'yield' operand in an async generator must either be a valid promise or must not contain a callable 'then' member."
                    },
                    "Type_of_iterated_elements_of_a_yield_Asterisk_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member": {
                        "code": 1322,
                        "category": 1,
                        "key": "Type_of_iterated_elements_of_a_yield_Asterisk_operand_must_either_be_a_valid_promise_or_must_not_con_1322",
                        "message": "Type of iterated elements of a 'yield*' operand must either be a valid promise or must not contain a callable 'then' member."
                    },
                    "Dynamic_imports_are_only_supported_when_the_module_flag_is_set_to_esnext_commonjs_amd_system_or_umd": {
                        "code": 1323,
                        "category": 1,
                        "key": "Dynamic_imports_are_only_supported_when_the_module_flag_is_set_to_esnext_commonjs_amd_system_or_umd_1323",
                        "message": "Dynamic imports are only supported when the '--module' flag is set to 'esnext', 'commonjs',  'amd', 'system', or 'umd'."
                    },
                    "Dynamic_import_must_have_one_specifier_as_an_argument": {
                        "code": 1324,
                        "category": 1,
                        "key": "Dynamic_import_must_have_one_specifier_as_an_argument_1324",
                        "message": "Dynamic import must have one specifier as an argument."
                    },
                    "Specifier_of_dynamic_import_cannot_be_spread_element": {
                        "code": 1325,
                        "category": 1,
                        "key": "Specifier_of_dynamic_import_cannot_be_spread_element_1325",
                        "message": "Specifier of dynamic import cannot be spread element."
                    },
                    "Dynamic_import_cannot_have_type_arguments": {
                        "code": 1326,
                        "category": 1,
                        "key": "Dynamic_import_cannot_have_type_arguments_1326",
                        "message": "Dynamic import cannot have type arguments"
                    },
                    "String_literal_with_double_quotes_expected": {
                        "code": 1327,
                        "category": 1,
                        "key": "String_literal_with_double_quotes_expected_1327",
                        "message": "String literal with double quotes expected."
                    },
                    "Property_value_can_only_be_string_literal_numeric_literal_true_false_null_object_literal_or_array_literal": {
                        "code": 1328,
                        "category": 1,
                        "key": "Property_value_can_only_be_string_literal_numeric_literal_true_false_null_object_literal_or_array_li_1328",
                        "message": "Property value can only be string literal, numeric literal, 'true', 'false', 'null', object literal or array literal."
                    },
                    "_0_accepts_too_few_arguments_to_be_used_as_a_decorator_here_Did_you_mean_to_call_it_first_and_write_0": {
                        "code": 1329,
                        "category": 1,
                        "key": "_0_accepts_too_few_arguments_to_be_used_as_a_decorator_here_Did_you_mean_to_call_it_first_and_write__1329",
                        "message": "'{0}' accepts too few arguments to be used as a decorator here. Did you mean to call it first and write '@{0}()'?"
                    },
                    "A_property_of_an_interface_or_type_literal_whose_type_is_a_unique_symbol_type_must_be_readonly": {
                        "code": 1330,
                        "category": 1,
                        "key": "A_property_of_an_interface_or_type_literal_whose_type_is_a_unique_symbol_type_must_be_readonly_1330",
                        "message": "A property of an interface or type literal whose type is a 'unique symbol' type must be 'readonly'."
                    },
                    "A_property_of_a_class_whose_type_is_a_unique_symbol_type_must_be_both_static_and_readonly": {
                        "code": 1331,
                        "category": 1,
                        "key": "A_property_of_a_class_whose_type_is_a_unique_symbol_type_must_be_both_static_and_readonly_1331",
                        "message": "A property of a class whose type is a 'unique symbol' type must be both 'static' and 'readonly'."
                    },
                    "A_variable_whose_type_is_a_unique_symbol_type_must_be_const": {
                        "code": 1332,
                        "category": 1,
                        "key": "A_variable_whose_type_is_a_unique_symbol_type_must_be_const_1332",
                        "message": "A variable whose type is a 'unique symbol' type must be 'const'."
                    },
                    "unique_symbol_types_may_not_be_used_on_a_variable_declaration_with_a_binding_name": {
                        "code": 1333,
                        "category": 1,
                        "key": "unique_symbol_types_may_not_be_used_on_a_variable_declaration_with_a_binding_name_1333",
                        "message": "'unique symbol' types may not be used on a variable declaration with a binding name."
                    },
                    "unique_symbol_types_are_only_allowed_on_variables_in_a_variable_statement": {
                        "code": 1334,
                        "category": 1,
                        "key": "unique_symbol_types_are_only_allowed_on_variables_in_a_variable_statement_1334",
                        "message": "'unique symbol' types are only allowed on variables in a variable statement."
                    },
                    "unique_symbol_types_are_not_allowed_here": {
                        "code": 1335,
                        "category": 1,
                        "key": "unique_symbol_types_are_not_allowed_here_1335",
                        "message": "'unique symbol' types are not allowed here."
                    },
                    "An_index_signature_parameter_type_cannot_be_a_type_alias_Consider_writing_0_Colon_1_Colon_2_instead": {
                        "code": 1336,
                        "category": 1,
                        "key": "An_index_signature_parameter_type_cannot_be_a_type_alias_Consider_writing_0_Colon_1_Colon_2_instead_1336",
                        "message": "An index signature parameter type cannot be a type alias. Consider writing '[{0}: {1}]: {2}' instead."
                    },
                    "An_index_signature_parameter_type_cannot_be_a_union_type_Consider_using_a_mapped_object_type_instead": {
                        "code": 1337,
                        "category": 1,
                        "key": "An_index_signature_parameter_type_cannot_be_a_union_type_Consider_using_a_mapped_object_type_instead_1337",
                        "message": "An index signature parameter type cannot be a union type. Consider using a mapped object type instead."
                    },
                    "infer_declarations_are_only_permitted_in_the_extends_clause_of_a_conditional_type": {
                        "code": 1338,
                        "category": 1,
                        "key": "infer_declarations_are_only_permitted_in_the_extends_clause_of_a_conditional_type_1338",
                        "message": "'infer' declarations are only permitted in the 'extends' clause of a conditional type."
                    },
                    "Module_0_does_not_refer_to_a_value_but_is_used_as_a_value_here": {
                        "code": 1339,
                        "category": 1,
                        "key": "Module_0_does_not_refer_to_a_value_but_is_used_as_a_value_here_1339",
                        "message": "Module '{0}' does not refer to a value, but is used as a value here."
                    },
                    "Module_0_does_not_refer_to_a_type_but_is_used_as_a_type_here_Did_you_mean_typeof_import_0": {
                        "code": 1340,
                        "category": 1,
                        "key": "Module_0_does_not_refer_to_a_type_but_is_used_as_a_type_here_Did_you_mean_typeof_import_0_1340",
                        "message": "Module '{0}' does not refer to a type, but is used as a type here. Did you mean 'typeof import('{0}')'?"
                    },
                    "Type_arguments_cannot_be_used_here": {
                        "code": 1342,
                        "category": 1,
                        "key": "Type_arguments_cannot_be_used_here_1342",
                        "message": "Type arguments cannot be used here."
                    },
                    "The_import_meta_meta_property_is_only_allowed_when_the_module_option_is_esnext_or_system": {
                        "code": 1343,
                        "category": 1,
                        "key": "The_import_meta_meta_property_is_only_allowed_when_the_module_option_is_esnext_or_system_1343",
                        "message": "The 'import.meta' meta-property is only allowed when the '--module' option is 'esnext' or 'system'."
                    },
                    "A_label_is_not_allowed_here": {
                        "code": 1344,
                        "category": 1,
                        "key": "A_label_is_not_allowed_here_1344",
                        "message": "'A label is not allowed here."
                    },
                    "An_expression_of_type_void_cannot_be_tested_for_truthiness": {
                        "code": 1345,
                        "category": 1,
                        "key": "An_expression_of_type_void_cannot_be_tested_for_truthiness_1345",
                        "message": "An expression of type 'void' cannot be tested for truthiness"
                    },
                    "This_parameter_is_not_allowed_with_use_strict_directive": {
                        "code": 1346,
                        "category": 1,
                        "key": "This_parameter_is_not_allowed_with_use_strict_directive_1346",
                        "message": "This parameter is not allowed with 'use strict' directive."
                    },
                    "use_strict_directive_cannot_be_used_with_non_simple_parameter_list": {
                        "code": 1347,
                        "category": 1,
                        "key": "use_strict_directive_cannot_be_used_with_non_simple_parameter_list_1347",
                        "message": "'use strict' directive cannot be used with non-simple parameter list."
                    },
                    "Non_simple_parameter_declared_here": {
                        "code": 1348,
                        "category": 1,
                        "key": "Non_simple_parameter_declared_here_1348",
                        "message": "Non-simple parameter declared here."
                    },
                    "use_strict_directive_used_here": {
                        "code": 1349,
                        "category": 1,
                        "key": "use_strict_directive_used_here_1349",
                        "message": "'use strict' directive used here."
                    },
                    "Print_the_final_configuration_instead_of_building": {
                        "code": 1350,
                        "category": 3,
                        "key": "Print_the_final_configuration_instead_of_building_1350",
                        "message": "Print the final configuration instead of building."
                    },
                    "An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal": {
                        "code": 1351,
                        "category": 1,
                        "key": "An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal_1351",
                        "message": "An identifier or keyword cannot immediately follow a numeric literal."
                    },
                    "A_bigint_literal_cannot_use_exponential_notation": {
                        "code": 1352,
                        "category": 1,
                        "key": "A_bigint_literal_cannot_use_exponential_notation_1352",
                        "message": "A bigint literal cannot use exponential notation."
                    },
                    "A_bigint_literal_must_be_an_integer": {
                        "code": 1353,
                        "category": 1,
                        "key": "A_bigint_literal_must_be_an_integer_1353",
                        "message": "A bigint literal must be an integer."
                    },
                    "readonly_type_modifier_is_only_permitted_on_array_and_tuple_literal_types": {
                        "code": 1354,
                        "category": 1,
                        "key": "readonly_type_modifier_is_only_permitted_on_array_and_tuple_literal_types_1354",
                        "message": "'readonly' type modifier is only permitted on array and tuple literal types."
                    },
                    "A_const_assertions_can_only_be_applied_to_references_to_enum_members_or_string_number_boolean_array_or_object_literals": {
                        "code": 1355,
                        "category": 1,
                        "key": "A_const_assertions_can_only_be_applied_to_references_to_enum_members_or_string_number_boolean_array__1355",
                        "message": "A 'const' assertions can only be applied to references to enum members, or string, number, boolean, array, or object literals."
                    },
                    "Did_you_mean_to_mark_this_function_as_async": {
                        "code": 1356,
                        "category": 1,
                        "key": "Did_you_mean_to_mark_this_function_as_async_1356",
                        "message": "Did you mean to mark this function as 'async'?"
                    },
                    "An_enum_member_name_must_be_followed_by_a_or": {
                        "code": 1357,
                        "category": 1,
                        "key": "An_enum_member_name_must_be_followed_by_a_or_1357",
                        "message": "An enum member name must be followed by a ',', '=', or '}'."
                    },
                    "Tagged_template_expressions_are_not_permitted_in_an_optional_chain": {
                        "code": 1358,
                        "category": 1,
                        "key": "Tagged_template_expressions_are_not_permitted_in_an_optional_chain_1358",
                        "message": "Tagged template expressions are not permitted in an optional chain."
                    },
                    "Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here": {
                        "code": 1359,
                        "category": 1,
                        "key": "Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here_1359",
                        "message": "Identifier expected. '{0}' is a reserved word that cannot be used here."
                    },
                    "The_types_of_0_are_incompatible_between_these_types": {
                        "code": 2200,
                        "category": 1,
                        "key": "The_types_of_0_are_incompatible_between_these_types_2200",
                        "message": "The types of '{0}' are incompatible between these types."
                    },
                    "The_types_returned_by_0_are_incompatible_between_these_types": {
                        "code": 2201,
                        "category": 1,
                        "key": "The_types_returned_by_0_are_incompatible_between_these_types_2201",
                        "message": "The types returned by '{0}' are incompatible between these types."
                    },
                    "Call_signature_return_types_0_and_1_are_incompatible": {
                        "code": 2202,
                        "category": 1,
                        "key": "Call_signature_return_types_0_and_1_are_incompatible_2202",
                        "message": "Call signature return types '{0}' and '{1}' are incompatible.",
                        "elidedInCompatabilityPyramid": true
                    },
                    "Construct_signature_return_types_0_and_1_are_incompatible": {
                        "code": 2203,
                        "category": 1,
                        "key": "Construct_signature_return_types_0_and_1_are_incompatible_2203",
                        "message": "Construct signature return types '{0}' and '{1}' are incompatible.",
                        "elidedInCompatabilityPyramid": true
                    },
                    "Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1": {
                        "code": 2204,
                        "category": 1,
                        "key": "Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1_2204",
                        "message": "Call signatures with no arguments have incompatible return types '{0}' and '{1}'.",
                        "elidedInCompatabilityPyramid": true
                    },
                    "Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1": {
                        "code": 2205,
                        "category": 1,
                        "key": "Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1_2205",
                        "message": "Construct signatures with no arguments have incompatible return types '{0}' and '{1}'.",
                        "elidedInCompatabilityPyramid": true
                    },
                    "Duplicate_identifier_0": {
                        "code": 2300,
                        "category": 1,
                        "key": "Duplicate_identifier_0_2300",
                        "message": "Duplicate identifier '{0}'."
                    },
                    "Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor": {
                        "code": 2301,
                        "category": 1,
                        "key": "Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor_2301",
                        "message": "Initializer of instance member variable '{0}' cannot reference identifier '{1}' declared in the constructor."
                    },
                    "Static_members_cannot_reference_class_type_parameters": {
                        "code": 2302,
                        "category": 1,
                        "key": "Static_members_cannot_reference_class_type_parameters_2302",
                        "message": "Static members cannot reference class type parameters."
                    },
                    "Circular_definition_of_import_alias_0": {
                        "code": 2303,
                        "category": 1,
                        "key": "Circular_definition_of_import_alias_0_2303",
                        "message": "Circular definition of import alias '{0}'."
                    },
                    "Cannot_find_name_0": {
                        "code": 2304,
                        "category": 1,
                        "key": "Cannot_find_name_0_2304",
                        "message": "Cannot find name '{0}'."
                    },
                    "Module_0_has_no_exported_member_1": {
                        "code": 2305,
                        "category": 1,
                        "key": "Module_0_has_no_exported_member_1_2305",
                        "message": "Module '{0}' has no exported member '{1}'."
                    },
                    "File_0_is_not_a_module": {
                        "code": 2306,
                        "category": 1,
                        "key": "File_0_is_not_a_module_2306",
                        "message": "File '{0}' is not a module."
                    },
                    "Cannot_find_module_0": {
                        "code": 2307,
                        "category": 1,
                        "key": "Cannot_find_module_0_2307",
                        "message": "Cannot find module '{0}'."
                    },
                    "Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity": {
                        "code": 2308,
                        "category": 1,
                        "key": "Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambig_2308",
                        "message": "Module {0} has already exported a member named '{1}'. Consider explicitly re-exporting to resolve the ambiguity."
                    },
                    "An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements": {
                        "code": 2309,
                        "category": 1,
                        "key": "An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements_2309",
                        "message": "An export assignment cannot be used in a module with other exported elements."
                    },
                    "Type_0_recursively_references_itself_as_a_base_type": {
                        "code": 2310,
                        "category": 1,
                        "key": "Type_0_recursively_references_itself_as_a_base_type_2310",
                        "message": "Type '{0}' recursively references itself as a base type."
                    },
                    "A_class_may_only_extend_another_class": {
                        "code": 2311,
                        "category": 1,
                        "key": "A_class_may_only_extend_another_class_2311",
                        "message": "A class may only extend another class."
                    },
                    "An_interface_can_only_extend_an_object_type_or_intersection_of_object_types_with_statically_known_members": {
                        "code": 2312,
                        "category": 1,
                        "key": "An_interface_can_only_extend_an_object_type_or_intersection_of_object_types_with_statically_known_me_2312",
                        "message": "An interface can only extend an object type or intersection of object types with statically known members."
                    },
                    "Type_parameter_0_has_a_circular_constraint": {
                        "code": 2313,
                        "category": 1,
                        "key": "Type_parameter_0_has_a_circular_constraint_2313",
                        "message": "Type parameter '{0}' has a circular constraint."
                    },
                    "Generic_type_0_requires_1_type_argument_s": {
                        "code": 2314,
                        "category": 1,
                        "key": "Generic_type_0_requires_1_type_argument_s_2314",
                        "message": "Generic type '{0}' requires {1} type argument(s)."
                    },
                    "Type_0_is_not_generic": {
                        "code": 2315,
                        "category": 1,
                        "key": "Type_0_is_not_generic_2315",
                        "message": "Type '{0}' is not generic."
                    },
                    "Global_type_0_must_be_a_class_or_interface_type": {
                        "code": 2316,
                        "category": 1,
                        "key": "Global_type_0_must_be_a_class_or_interface_type_2316",
                        "message": "Global type '{0}' must be a class or interface type."
                    },
                    "Global_type_0_must_have_1_type_parameter_s": {
                        "code": 2317,
                        "category": 1,
                        "key": "Global_type_0_must_have_1_type_parameter_s_2317",
                        "message": "Global type '{0}' must have {1} type parameter(s)."
                    },
                    "Cannot_find_global_type_0": {
                        "code": 2318,
                        "category": 1,
                        "key": "Cannot_find_global_type_0_2318",
                        "message": "Cannot find global type '{0}'."
                    },
                    "Named_property_0_of_types_1_and_2_are_not_identical": {
                        "code": 2319,
                        "category": 1,
                        "key": "Named_property_0_of_types_1_and_2_are_not_identical_2319",
                        "message": "Named property '{0}' of types '{1}' and '{2}' are not identical."
                    },
                    "Interface_0_cannot_simultaneously_extend_types_1_and_2": {
                        "code": 2320,
                        "category": 1,
                        "key": "Interface_0_cannot_simultaneously_extend_types_1_and_2_2320",
                        "message": "Interface '{0}' cannot simultaneously extend types '{1}' and '{2}'."
                    },
                    "Excessive_stack_depth_comparing_types_0_and_1": {
                        "code": 2321,
                        "category": 1,
                        "key": "Excessive_stack_depth_comparing_types_0_and_1_2321",
                        "message": "Excessive stack depth comparing types '{0}' and '{1}'."
                    },
                    "Type_0_is_not_assignable_to_type_1": {
                        "code": 2322,
                        "category": 1,
                        "key": "Type_0_is_not_assignable_to_type_1_2322",
                        "message": "Type '{0}' is not assignable to type '{1}'."
                    },
                    "Cannot_redeclare_exported_variable_0": {
                        "code": 2323,
                        "category": 1,
                        "key": "Cannot_redeclare_exported_variable_0_2323",
                        "message": "Cannot redeclare exported variable '{0}'."
                    },
                    "Property_0_is_missing_in_type_1": {
                        "code": 2324,
                        "category": 1,
                        "key": "Property_0_is_missing_in_type_1_2324",
                        "message": "Property '{0}' is missing in type '{1}'."
                    },
                    "Property_0_is_private_in_type_1_but_not_in_type_2": {
                        "code": 2325,
                        "category": 1,
                        "key": "Property_0_is_private_in_type_1_but_not_in_type_2_2325",
                        "message": "Property '{0}' is private in type '{1}' but not in type '{2}'."
                    },
                    "Types_of_property_0_are_incompatible": {
                        "code": 2326,
                        "category": 1,
                        "key": "Types_of_property_0_are_incompatible_2326",
                        "message": "Types of property '{0}' are incompatible."
                    },
                    "Property_0_is_optional_in_type_1_but_required_in_type_2": {
                        "code": 2327,
                        "category": 1,
                        "key": "Property_0_is_optional_in_type_1_but_required_in_type_2_2327",
                        "message": "Property '{0}' is optional in type '{1}' but required in type '{2}'."
                    },
                    "Types_of_parameters_0_and_1_are_incompatible": {
                        "code": 2328,
                        "category": 1,
                        "key": "Types_of_parameters_0_and_1_are_incompatible_2328",
                        "message": "Types of parameters '{0}' and '{1}' are incompatible."
                    },
                    "Index_signature_is_missing_in_type_0": {
                        "code": 2329,
                        "category": 1,
                        "key": "Index_signature_is_missing_in_type_0_2329",
                        "message": "Index signature is missing in type '{0}'."
                    },
                    "Index_signatures_are_incompatible": {
                        "code": 2330,
                        "category": 1,
                        "key": "Index_signatures_are_incompatible_2330",
                        "message": "Index signatures are incompatible."
                    },
                    "this_cannot_be_referenced_in_a_module_or_namespace_body": {
                        "code": 2331,
                        "category": 1,
                        "key": "this_cannot_be_referenced_in_a_module_or_namespace_body_2331",
                        "message": "'this' cannot be referenced in a module or namespace body."
                    },
                    "this_cannot_be_referenced_in_current_location": {
                        "code": 2332,
                        "category": 1,
                        "key": "this_cannot_be_referenced_in_current_location_2332",
                        "message": "'this' cannot be referenced in current location."
                    },
                    "this_cannot_be_referenced_in_constructor_arguments": {
                        "code": 2333,
                        "category": 1,
                        "key": "this_cannot_be_referenced_in_constructor_arguments_2333",
                        "message": "'this' cannot be referenced in constructor arguments."
                    },
                    "this_cannot_be_referenced_in_a_static_property_initializer": {
                        "code": 2334,
                        "category": 1,
                        "key": "this_cannot_be_referenced_in_a_static_property_initializer_2334",
                        "message": "'this' cannot be referenced in a static property initializer."
                    },
                    "super_can_only_be_referenced_in_a_derived_class": {
                        "code": 2335,
                        "category": 1,
                        "key": "super_can_only_be_referenced_in_a_derived_class_2335",
                        "message": "'super' can only be referenced in a derived class."
                    },
                    "super_cannot_be_referenced_in_constructor_arguments": {
                        "code": 2336,
                        "category": 1,
                        "key": "super_cannot_be_referenced_in_constructor_arguments_2336",
                        "message": "'super' cannot be referenced in constructor arguments."
                    },
                    "Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors": {
                        "code": 2337,
                        "category": 1,
                        "key": "Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors_2337",
                        "message": "Super calls are not permitted outside constructors or in nested functions inside constructors."
                    },
                    "super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class": {
                        "code": 2338,
                        "category": 1,
                        "key": "super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_der_2338",
                        "message": "'super' property access is permitted only in a constructor, member function, or member accessor of a derived class."
                    },
                    "Property_0_does_not_exist_on_type_1": {
                        "code": 2339,
                        "category": 1,
                        "key": "Property_0_does_not_exist_on_type_1_2339",
                        "message": "Property '{0}' does not exist on type '{1}'."
                    },
                    "Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword": {
                        "code": 2340,
                        "category": 1,
                        "key": "Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword_2340",
                        "message": "Only public and protected methods of the base class are accessible via the 'super' keyword."
                    },
                    "Property_0_is_private_and_only_accessible_within_class_1": {
                        "code": 2341,
                        "category": 1,
                        "key": "Property_0_is_private_and_only_accessible_within_class_1_2341",
                        "message": "Property '{0}' is private and only accessible within class '{1}'."
                    },
                    "An_index_expression_argument_must_be_of_type_string_number_symbol_or_any": {
                        "code": 2342,
                        "category": 1,
                        "key": "An_index_expression_argument_must_be_of_type_string_number_symbol_or_any_2342",
                        "message": "An index expression argument must be of type 'string', 'number', 'symbol', or 'any'."
                    },
                    "This_syntax_requires_an_imported_helper_named_1_which_does_not_exist_in_0_Consider_upgrading_your_version_of_0": {
                        "code": 2343,
                        "category": 1,
                        "key": "This_syntax_requires_an_imported_helper_named_1_which_does_not_exist_in_0_Consider_upgrading_your_ve_2343",
                        "message": "This syntax requires an imported helper named '{1}' which does not exist in '{0}'. Consider upgrading your version of '{0}'."
                    },
                    "Type_0_does_not_satisfy_the_constraint_1": {
                        "code": 2344,
                        "category": 1,
                        "key": "Type_0_does_not_satisfy_the_constraint_1_2344",
                        "message": "Type '{0}' does not satisfy the constraint '{1}'."
                    },
                    "Argument_of_type_0_is_not_assignable_to_parameter_of_type_1": {
                        "code": 2345,
                        "category": 1,
                        "key": "Argument_of_type_0_is_not_assignable_to_parameter_of_type_1_2345",
                        "message": "Argument of type '{0}' is not assignable to parameter of type '{1}'."
                    },
                    "Call_target_does_not_contain_any_signatures": {
                        "code": 2346,
                        "category": 1,
                        "key": "Call_target_does_not_contain_any_signatures_2346",
                        "message": "Call target does not contain any signatures."
                    },
                    "Untyped_function_calls_may_not_accept_type_arguments": {
                        "code": 2347,
                        "category": 1,
                        "key": "Untyped_function_calls_may_not_accept_type_arguments_2347",
                        "message": "Untyped function calls may not accept type arguments."
                    },
                    "Value_of_type_0_is_not_callable_Did_you_mean_to_include_new": {
                        "code": 2348,
                        "category": 1,
                        "key": "Value_of_type_0_is_not_callable_Did_you_mean_to_include_new_2348",
                        "message": "Value of type '{0}' is not callable. Did you mean to include 'new'?"
                    },
                    "This_expression_is_not_callable": {
                        "code": 2349,
                        "category": 1,
                        "key": "This_expression_is_not_callable_2349",
                        "message": "This expression is not callable."
                    },
                    "Only_a_void_function_can_be_called_with_the_new_keyword": {
                        "code": 2350,
                        "category": 1,
                        "key": "Only_a_void_function_can_be_called_with_the_new_keyword_2350",
                        "message": "Only a void function can be called with the 'new' keyword."
                    },
                    "This_expression_is_not_constructable": {
                        "code": 2351,
                        "category": 1,
                        "key": "This_expression_is_not_constructable_2351",
                        "message": "This expression is not constructable."
                    },
                    "Conversion_of_type_0_to_type_1_may_be_a_mistake_because_neither_type_sufficiently_overlaps_with_the_other_If_this_was_intentional_convert_the_expression_to_unknown_first": {
                        "code": 2352,
                        "category": 1,
                        "key": "Conversion_of_type_0_to_type_1_may_be_a_mistake_because_neither_type_sufficiently_overlaps_with_the__2352",
                        "message": "Conversion of type '{0}' to type '{1}' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first."
                    },
                    "Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1": {
                        "code": 2353,
                        "category": 1,
                        "key": "Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1_2353",
                        "message": "Object literal may only specify known properties, and '{0}' does not exist in type '{1}'."
                    },
                    "This_syntax_requires_an_imported_helper_but_module_0_cannot_be_found": {
                        "code": 2354,
                        "category": 1,
                        "key": "This_syntax_requires_an_imported_helper_but_module_0_cannot_be_found_2354",
                        "message": "This syntax requires an imported helper but module '{0}' cannot be found."
                    },
                    "A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value": {
                        "code": 2355,
                        "category": 1,
                        "key": "A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value_2355",
                        "message": "A function whose declared type is neither 'void' nor 'any' must return a value."
                    },
                    "An_arithmetic_operand_must_be_of_type_any_number_bigint_or_an_enum_type": {
                        "code": 2356,
                        "category": 1,
                        "key": "An_arithmetic_operand_must_be_of_type_any_number_bigint_or_an_enum_type_2356",
                        "message": "An arithmetic operand must be of type 'any', 'number', 'bigint' or an enum type."
                    },
                    "The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access": {
                        "code": 2357,
                        "category": 1,
                        "key": "The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access_2357",
                        "message": "The operand of an increment or decrement operator must be a variable or a property access."
                    },
                    "The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter": {
                        "code": 2358,
                        "category": 1,
                        "key": "The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_paramete_2358",
                        "message": "The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter."
                    },
                    "The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type": {
                        "code": 2359,
                        "category": 1,
                        "key": "The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_F_2359",
                        "message": "The right-hand side of an 'instanceof' expression must be of type 'any' or of a type assignable to the 'Function' interface type."
                    },
                    "The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol": {
                        "code": 2360,
                        "category": 1,
                        "key": "The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol_2360",
                        "message": "The left-hand side of an 'in' expression must be of type 'any', 'string', 'number', or 'symbol'."
                    },
                    "The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter": {
                        "code": 2361,
                        "category": 1,
                        "key": "The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter_2361",
                        "message": "The right-hand side of an 'in' expression must be of type 'any', an object type or a type parameter."
                    },
                    "The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type": {
                        "code": 2362,
                        "category": 1,
                        "key": "The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type_2362",
                        "message": "The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type."
                    },
                    "The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type": {
                        "code": 2363,
                        "category": 1,
                        "key": "The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type_2363",
                        "message": "The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type."
                    },
                    "The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access": {
                        "code": 2364,
                        "category": 1,
                        "key": "The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access_2364",
                        "message": "The left-hand side of an assignment expression must be a variable or a property access."
                    },
                    "Operator_0_cannot_be_applied_to_types_1_and_2": {
                        "code": 2365,
                        "category": 1,
                        "key": "Operator_0_cannot_be_applied_to_types_1_and_2_2365",
                        "message": "Operator '{0}' cannot be applied to types '{1}' and '{2}'."
                    },
                    "Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined": {
                        "code": 2366,
                        "category": 1,
                        "key": "Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined_2366",
                        "message": "Function lacks ending return statement and return type does not include 'undefined'."
                    },
                    "This_condition_will_always_return_0_since_the_types_1_and_2_have_no_overlap": {
                        "code": 2367,
                        "category": 1,
                        "key": "This_condition_will_always_return_0_since_the_types_1_and_2_have_no_overlap_2367",
                        "message": "This condition will always return '{0}' since the types '{1}' and '{2}' have no overlap."
                    },
                    "Type_parameter_name_cannot_be_0": {
                        "code": 2368,
                        "category": 1,
                        "key": "Type_parameter_name_cannot_be_0_2368",
                        "message": "Type parameter name cannot be '{0}'."
                    },
                    "A_parameter_property_is_only_allowed_in_a_constructor_implementation": {
                        "code": 2369,
                        "category": 1,
                        "key": "A_parameter_property_is_only_allowed_in_a_constructor_implementation_2369",
                        "message": "A parameter property is only allowed in a constructor implementation."
                    },
                    "A_rest_parameter_must_be_of_an_array_type": {
                        "code": 2370,
                        "category": 1,
                        "key": "A_rest_parameter_must_be_of_an_array_type_2370",
                        "message": "A rest parameter must be of an array type."
                    },
                    "A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation": {
                        "code": 2371,
                        "category": 1,
                        "key": "A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation_2371",
                        "message": "A parameter initializer is only allowed in a function or constructor implementation."
                    },
                    "Parameter_0_cannot_be_referenced_in_its_initializer": {
                        "code": 2372,
                        "category": 1,
                        "key": "Parameter_0_cannot_be_referenced_in_its_initializer_2372",
                        "message": "Parameter '{0}' cannot be referenced in its initializer."
                    },
                    "Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it": {
                        "code": 2373,
                        "category": 1,
                        "key": "Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it_2373",
                        "message": "Initializer of parameter '{0}' cannot reference identifier '{1}' declared after it."
                    },
                    "Duplicate_string_index_signature": {
                        "code": 2374,
                        "category": 1,
                        "key": "Duplicate_string_index_signature_2374",
                        "message": "Duplicate string index signature."
                    },
                    "Duplicate_number_index_signature": {
                        "code": 2375,
                        "category": 1,
                        "key": "Duplicate_number_index_signature_2375",
                        "message": "Duplicate number index signature."
                    },
                    "A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties": {
                        "code": 2376,
                        "category": 1,
                        "key": "A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_proper_2376",
                        "message": "A 'super' call must be the first statement in the constructor when a class contains initialized properties or has parameter properties."
                    },
                    "Constructors_for_derived_classes_must_contain_a_super_call": {
                        "code": 2377,
                        "category": 1,
                        "key": "Constructors_for_derived_classes_must_contain_a_super_call_2377",
                        "message": "Constructors for derived classes must contain a 'super' call."
                    },
                    "A_get_accessor_must_return_a_value": {
                        "code": 2378,
                        "category": 1,
                        "key": "A_get_accessor_must_return_a_value_2378",
                        "message": "A 'get' accessor must return a value."
                    },
                    "Getter_and_setter_accessors_do_not_agree_in_visibility": {
                        "code": 2379,
                        "category": 1,
                        "key": "Getter_and_setter_accessors_do_not_agree_in_visibility_2379",
                        "message": "Getter and setter accessors do not agree in visibility."
                    },
                    "get_and_set_accessor_must_have_the_same_type": {
                        "code": 2380,
                        "category": 1,
                        "key": "get_and_set_accessor_must_have_the_same_type_2380",
                        "message": "'get' and 'set' accessor must have the same type."
                    },
                    "A_signature_with_an_implementation_cannot_use_a_string_literal_type": {
                        "code": 2381,
                        "category": 1,
                        "key": "A_signature_with_an_implementation_cannot_use_a_string_literal_type_2381",
                        "message": "A signature with an implementation cannot use a string literal type."
                    },
                    "Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature": {
                        "code": 2382,
                        "category": 1,
                        "key": "Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature_2382",
                        "message": "Specialized overload signature is not assignable to any non-specialized signature."
                    },
                    "Overload_signatures_must_all_be_exported_or_non_exported": {
                        "code": 2383,
                        "category": 1,
                        "key": "Overload_signatures_must_all_be_exported_or_non_exported_2383",
                        "message": "Overload signatures must all be exported or non-exported."
                    },
                    "Overload_signatures_must_all_be_ambient_or_non_ambient": {
                        "code": 2384,
                        "category": 1,
                        "key": "Overload_signatures_must_all_be_ambient_or_non_ambient_2384",
                        "message": "Overload signatures must all be ambient or non-ambient."
                    },
                    "Overload_signatures_must_all_be_public_private_or_protected": {
                        "code": 2385,
                        "category": 1,
                        "key": "Overload_signatures_must_all_be_public_private_or_protected_2385",
                        "message": "Overload signatures must all be public, private or protected."
                    },
                    "Overload_signatures_must_all_be_optional_or_required": {
                        "code": 2386,
                        "category": 1,
                        "key": "Overload_signatures_must_all_be_optional_or_required_2386",
                        "message": "Overload signatures must all be optional or required."
                    },
                    "Function_overload_must_be_static": {
                        "code": 2387,
                        "category": 1,
                        "key": "Function_overload_must_be_static_2387",
                        "message": "Function overload must be static."
                    },
                    "Function_overload_must_not_be_static": {
                        "code": 2388,
                        "category": 1,
                        "key": "Function_overload_must_not_be_static_2388",
                        "message": "Function overload must not be static."
                    },
                    "Function_implementation_name_must_be_0": {
                        "code": 2389,
                        "category": 1,
                        "key": "Function_implementation_name_must_be_0_2389",
                        "message": "Function implementation name must be '{0}'."
                    },
                    "Constructor_implementation_is_missing": {
                        "code": 2390,
                        "category": 1,
                        "key": "Constructor_implementation_is_missing_2390",
                        "message": "Constructor implementation is missing."
                    },
                    "Function_implementation_is_missing_or_not_immediately_following_the_declaration": {
                        "code": 2391,
                        "category": 1,
                        "key": "Function_implementation_is_missing_or_not_immediately_following_the_declaration_2391",
                        "message": "Function implementation is missing or not immediately following the declaration."
                    },
                    "Multiple_constructor_implementations_are_not_allowed": {
                        "code": 2392,
                        "category": 1,
                        "key": "Multiple_constructor_implementations_are_not_allowed_2392",
                        "message": "Multiple constructor implementations are not allowed."
                    },
                    "Duplicate_function_implementation": {
                        "code": 2393,
                        "category": 1,
                        "key": "Duplicate_function_implementation_2393",
                        "message": "Duplicate function implementation."
                    },
                    "This_overload_signature_is_not_compatible_with_its_implementation_signature": {
                        "code": 2394,
                        "category": 1,
                        "key": "This_overload_signature_is_not_compatible_with_its_implementation_signature_2394",
                        "message": "This overload signature is not compatible with its implementation signature."
                    },
                    "Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local": {
                        "code": 2395,
                        "category": 1,
                        "key": "Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local_2395",
                        "message": "Individual declarations in merged declaration '{0}' must be all exported or all local."
                    },
                    "Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters": {
                        "code": 2396,
                        "category": 1,
                        "key": "Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters_2396",
                        "message": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters."
                    },
                    "Declaration_name_conflicts_with_built_in_global_identifier_0": {
                        "code": 2397,
                        "category": 1,
                        "key": "Declaration_name_conflicts_with_built_in_global_identifier_0_2397",
                        "message": "Declaration name conflicts with built-in global identifier '{0}'."
                    },
                    "Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference": {
                        "code": 2399,
                        "category": 1,
                        "key": "Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference_2399",
                        "message": "Duplicate identifier '_this'. Compiler uses variable declaration '_this' to capture 'this' reference."
                    },
                    "Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference": {
                        "code": 2400,
                        "category": 1,
                        "key": "Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference_2400",
                        "message": "Expression resolves to variable declaration '_this' that compiler uses to capture 'this' reference."
                    },
                    "Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference": {
                        "code": 2401,
                        "category": 1,
                        "key": "Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference_2401",
                        "message": "Duplicate identifier '_super'. Compiler uses '_super' to capture base class reference."
                    },
                    "Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference": {
                        "code": 2402,
                        "category": 1,
                        "key": "Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference_2402",
                        "message": "Expression resolves to '_super' that compiler uses to capture base class reference."
                    },
                    "Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2": {
                        "code": 2403,
                        "category": 1,
                        "key": "Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_t_2403",
                        "message": "Subsequent variable declarations must have the same type.  Variable '{0}' must be of type '{1}', but here has type '{2}'."
                    },
                    "The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation": {
                        "code": 2404,
                        "category": 1,
                        "key": "The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation_2404",
                        "message": "The left-hand side of a 'for...in' statement cannot use a type annotation."
                    },
                    "The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any": {
                        "code": 2405,
                        "category": 1,
                        "key": "The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any_2405",
                        "message": "The left-hand side of a 'for...in' statement must be of type 'string' or 'any'."
                    },
                    "The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access": {
                        "code": 2406,
                        "category": 1,
                        "key": "The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access_2406",
                        "message": "The left-hand side of a 'for...in' statement must be a variable or a property access."
                    },
                    "The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter_but_here_has_type_0": {
                        "code": 2407,
                        "category": 1,
                        "key": "The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter_but_2407",
                        "message": "The right-hand side of a 'for...in' statement must be of type 'any', an object type or a type parameter, but here has type '{0}'."
                    },
                    "Setters_cannot_return_a_value": {
                        "code": 2408,
                        "category": 1,
                        "key": "Setters_cannot_return_a_value_2408",
                        "message": "Setters cannot return a value."
                    },
                    "Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class": {
                        "code": 2409,
                        "category": 1,
                        "key": "Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class_2409",
                        "message": "Return type of constructor signature must be assignable to the instance type of the class."
                    },
                    "The_with_statement_is_not_supported_All_symbols_in_a_with_block_will_have_type_any": {
                        "code": 2410,
                        "category": 1,
                        "key": "The_with_statement_is_not_supported_All_symbols_in_a_with_block_will_have_type_any_2410",
                        "message": "The 'with' statement is not supported. All symbols in a 'with' block will have type 'any'."
                    },
                    "Property_0_of_type_1_is_not_assignable_to_string_index_type_2": {
                        "code": 2411,
                        "category": 1,
                        "key": "Property_0_of_type_1_is_not_assignable_to_string_index_type_2_2411",
                        "message": "Property '{0}' of type '{1}' is not assignable to string index type '{2}'."
                    },
                    "Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2": {
                        "code": 2412,
                        "category": 1,
                        "key": "Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2_2412",
                        "message": "Property '{0}' of type '{1}' is not assignable to numeric index type '{2}'."
                    },
                    "Numeric_index_type_0_is_not_assignable_to_string_index_type_1": {
                        "code": 2413,
                        "category": 1,
                        "key": "Numeric_index_type_0_is_not_assignable_to_string_index_type_1_2413",
                        "message": "Numeric index type '{0}' is not assignable to string index type '{1}'."
                    },
                    "Class_name_cannot_be_0": {
                        "code": 2414,
                        "category": 1,
                        "key": "Class_name_cannot_be_0_2414",
                        "message": "Class name cannot be '{0}'."
                    },
                    "Class_0_incorrectly_extends_base_class_1": {
                        "code": 2415,
                        "category": 1,
                        "key": "Class_0_incorrectly_extends_base_class_1_2415",
                        "message": "Class '{0}' incorrectly extends base class '{1}'."
                    },
                    "Property_0_in_type_1_is_not_assignable_to_the_same_property_in_base_type_2": {
                        "code": 2416,
                        "category": 1,
                        "key": "Property_0_in_type_1_is_not_assignable_to_the_same_property_in_base_type_2_2416",
                        "message": "Property '{0}' in type '{1}' is not assignable to the same property in base type '{2}'."
                    },
                    "Class_static_side_0_incorrectly_extends_base_class_static_side_1": {
                        "code": 2417,
                        "category": 1,
                        "key": "Class_static_side_0_incorrectly_extends_base_class_static_side_1_2417",
                        "message": "Class static side '{0}' incorrectly extends base class static side '{1}'."
                    },
                    "Type_of_computed_property_s_value_is_0_which_is_not_assignable_to_type_1": {
                        "code": 2418,
                        "category": 1,
                        "key": "Type_of_computed_property_s_value_is_0_which_is_not_assignable_to_type_1_2418",
                        "message": "Type of computed property's value is '{0}', which is not assignable to type '{1}'."
                    },
                    "Class_0_incorrectly_implements_interface_1": {
                        "code": 2420,
                        "category": 1,
                        "key": "Class_0_incorrectly_implements_interface_1_2420",
                        "message": "Class '{0}' incorrectly implements interface '{1}'."
                    },
                    "A_class_can_only_implement_an_object_type_or_intersection_of_object_types_with_statically_known_members": {
                        "code": 2422,
                        "category": 1,
                        "key": "A_class_can_only_implement_an_object_type_or_intersection_of_object_types_with_statically_known_memb_2422",
                        "message": "A class can only implement an object type or intersection of object types with statically known members."
                    },
                    "Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor": {
                        "code": 2423,
                        "category": 1,
                        "key": "Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_access_2423",
                        "message": "Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member accessor."
                    },
                    "Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function": {
                        "code": 2425,
                        "category": 1,
                        "key": "Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_functi_2425",
                        "message": "Class '{0}' defines instance member property '{1}', but extended class '{2}' defines it as instance member function."
                    },
                    "Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function": {
                        "code": 2426,
                        "category": 1,
                        "key": "Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_functi_2426",
                        "message": "Class '{0}' defines instance member accessor '{1}', but extended class '{2}' defines it as instance member function."
                    },
                    "Interface_name_cannot_be_0": {
                        "code": 2427,
                        "category": 1,
                        "key": "Interface_name_cannot_be_0_2427",
                        "message": "Interface name cannot be '{0}'."
                    },
                    "All_declarations_of_0_must_have_identical_type_parameters": {
                        "code": 2428,
                        "category": 1,
                        "key": "All_declarations_of_0_must_have_identical_type_parameters_2428",
                        "message": "All declarations of '{0}' must have identical type parameters."
                    },
                    "Interface_0_incorrectly_extends_interface_1": {
                        "code": 2430,
                        "category": 1,
                        "key": "Interface_0_incorrectly_extends_interface_1_2430",
                        "message": "Interface '{0}' incorrectly extends interface '{1}'."
                    },
                    "Enum_name_cannot_be_0": {
                        "code": 2431,
                        "category": 1,
                        "key": "Enum_name_cannot_be_0_2431",
                        "message": "Enum name cannot be '{0}'."
                    },
                    "In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element": {
                        "code": 2432,
                        "category": 1,
                        "key": "In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enu_2432",
                        "message": "In an enum with multiple declarations, only one declaration can omit an initializer for its first enum element."
                    },
                    "A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged": {
                        "code": 2433,
                        "category": 1,
                        "key": "A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merg_2433",
                        "message": "A namespace declaration cannot be in a different file from a class or function with which it is merged."
                    },
                    "A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged": {
                        "code": 2434,
                        "category": 1,
                        "key": "A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged_2434",
                        "message": "A namespace declaration cannot be located prior to a class or function with which it is merged."
                    },
                    "Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces": {
                        "code": 2435,
                        "category": 1,
                        "key": "Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces_2435",
                        "message": "Ambient modules cannot be nested in other modules or namespaces."
                    },
                    "Ambient_module_declaration_cannot_specify_relative_module_name": {
                        "code": 2436,
                        "category": 1,
                        "key": "Ambient_module_declaration_cannot_specify_relative_module_name_2436",
                        "message": "Ambient module declaration cannot specify relative module name."
                    },
                    "Module_0_is_hidden_by_a_local_declaration_with_the_same_name": {
                        "code": 2437,
                        "category": 1,
                        "key": "Module_0_is_hidden_by_a_local_declaration_with_the_same_name_2437",
                        "message": "Module '{0}' is hidden by a local declaration with the same name."
                    },
                    "Import_name_cannot_be_0": {
                        "code": 2438,
                        "category": 1,
                        "key": "Import_name_cannot_be_0_2438",
                        "message": "Import name cannot be '{0}'."
                    },
                    "Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relative_module_name": {
                        "code": 2439,
                        "category": 1,
                        "key": "Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relati_2439",
                        "message": "Import or export declaration in an ambient module declaration cannot reference module through relative module name."
                    },
                    "Import_declaration_conflicts_with_local_declaration_of_0": {
                        "code": 2440,
                        "category": 1,
                        "key": "Import_declaration_conflicts_with_local_declaration_of_0_2440",
                        "message": "Import declaration conflicts with local declaration of '{0}'."
                    },
                    "Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module": {
                        "code": 2441,
                        "category": 1,
                        "key": "Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_2441",
                        "message": "Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of a module."
                    },
                    "Types_have_separate_declarations_of_a_private_property_0": {
                        "code": 2442,
                        "category": 1,
                        "key": "Types_have_separate_declarations_of_a_private_property_0_2442",
                        "message": "Types have separate declarations of a private property '{0}'."
                    },
                    "Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2": {
                        "code": 2443,
                        "category": 1,
                        "key": "Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2_2443",
                        "message": "Property '{0}' is protected but type '{1}' is not a class derived from '{2}'."
                    },
                    "Property_0_is_protected_in_type_1_but_public_in_type_2": {
                        "code": 2444,
                        "category": 1,
                        "key": "Property_0_is_protected_in_type_1_but_public_in_type_2_2444",
                        "message": "Property '{0}' is protected in type '{1}' but public in type '{2}'."
                    },
                    "Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses": {
                        "code": 2445,
                        "category": 1,
                        "key": "Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses_2445",
                        "message": "Property '{0}' is protected and only accessible within class '{1}' and its subclasses."
                    },
                    "Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1": {
                        "code": 2446,
                        "category": 1,
                        "key": "Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1_2446",
                        "message": "Property '{0}' is protected and only accessible through an instance of class '{1}'."
                    },
                    "The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead": {
                        "code": 2447,
                        "category": 1,
                        "key": "The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead_2447",
                        "message": "The '{0}' operator is not allowed for boolean types. Consider using '{1}' instead."
                    },
                    "Block_scoped_variable_0_used_before_its_declaration": {
                        "code": 2448,
                        "category": 1,
                        "key": "Block_scoped_variable_0_used_before_its_declaration_2448",
                        "message": "Block-scoped variable '{0}' used before its declaration."
                    },
                    "Class_0_used_before_its_declaration": {
                        "code": 2449,
                        "category": 1,
                        "key": "Class_0_used_before_its_declaration_2449",
                        "message": "Class '{0}' used before its declaration."
                    },
                    "Enum_0_used_before_its_declaration": {
                        "code": 2450,
                        "category": 1,
                        "key": "Enum_0_used_before_its_declaration_2450",
                        "message": "Enum '{0}' used before its declaration."
                    },
                    "Cannot_redeclare_block_scoped_variable_0": {
                        "code": 2451,
                        "category": 1,
                        "key": "Cannot_redeclare_block_scoped_variable_0_2451",
                        "message": "Cannot redeclare block-scoped variable '{0}'."
                    },
                    "An_enum_member_cannot_have_a_numeric_name": {
                        "code": 2452,
                        "category": 1,
                        "key": "An_enum_member_cannot_have_a_numeric_name_2452",
                        "message": "An enum member cannot have a numeric name."
                    },
                    "The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly": {
                        "code": 2453,
                        "category": 1,
                        "key": "The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_typ_2453",
                        "message": "The type argument for type parameter '{0}' cannot be inferred from the usage. Consider specifying the type arguments explicitly."
                    },
                    "Variable_0_is_used_before_being_assigned": {
                        "code": 2454,
                        "category": 1,
                        "key": "Variable_0_is_used_before_being_assigned_2454",
                        "message": "Variable '{0}' is used before being assigned."
                    },
                    "Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0": {
                        "code": 2455,
                        "category": 1,
                        "key": "Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0_2455",
                        "message": "Type argument candidate '{1}' is not a valid type argument because it is not a supertype of candidate '{0}'."
                    },
                    "Type_alias_0_circularly_references_itself": {
                        "code": 2456,
                        "category": 1,
                        "key": "Type_alias_0_circularly_references_itself_2456",
                        "message": "Type alias '{0}' circularly references itself."
                    },
                    "Type_alias_name_cannot_be_0": {
                        "code": 2457,
                        "category": 1,
                        "key": "Type_alias_name_cannot_be_0_2457",
                        "message": "Type alias name cannot be '{0}'."
                    },
                    "An_AMD_module_cannot_have_multiple_name_assignments": {
                        "code": 2458,
                        "category": 1,
                        "key": "An_AMD_module_cannot_have_multiple_name_assignments_2458",
                        "message": "An AMD module cannot have multiple name assignments."
                    },
                    "Type_0_is_not_an_array_type": {
                        "code": 2461,
                        "category": 1,
                        "key": "Type_0_is_not_an_array_type_2461",
                        "message": "Type '{0}' is not an array type."
                    },
                    "A_rest_element_must_be_last_in_a_destructuring_pattern": {
                        "code": 2462,
                        "category": 1,
                        "key": "A_rest_element_must_be_last_in_a_destructuring_pattern_2462",
                        "message": "A rest element must be last in a destructuring pattern."
                    },
                    "A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature": {
                        "code": 2463,
                        "category": 1,
                        "key": "A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature_2463",
                        "message": "A binding pattern parameter cannot be optional in an implementation signature."
                    },
                    "A_computed_property_name_must_be_of_type_string_number_symbol_or_any": {
                        "code": 2464,
                        "category": 1,
                        "key": "A_computed_property_name_must_be_of_type_string_number_symbol_or_any_2464",
                        "message": "A computed property name must be of type 'string', 'number', 'symbol', or 'any'."
                    },
                    "this_cannot_be_referenced_in_a_computed_property_name": {
                        "code": 2465,
                        "category": 1,
                        "key": "this_cannot_be_referenced_in_a_computed_property_name_2465",
                        "message": "'this' cannot be referenced in a computed property name."
                    },
                    "super_cannot_be_referenced_in_a_computed_property_name": {
                        "code": 2466,
                        "category": 1,
                        "key": "super_cannot_be_referenced_in_a_computed_property_name_2466",
                        "message": "'super' cannot be referenced in a computed property name."
                    },
                    "A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type": {
                        "code": 2467,
                        "category": 1,
                        "key": "A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type_2467",
                        "message": "A computed property name cannot reference a type parameter from its containing type."
                    },
                    "Cannot_find_global_value_0": {
                        "code": 2468,
                        "category": 1,
                        "key": "Cannot_find_global_value_0_2468",
                        "message": "Cannot find global value '{0}'."
                    },
                    "The_0_operator_cannot_be_applied_to_type_symbol": {
                        "code": 2469,
                        "category": 1,
                        "key": "The_0_operator_cannot_be_applied_to_type_symbol_2469",
                        "message": "The '{0}' operator cannot be applied to type 'symbol'."
                    },
                    "Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object": {
                        "code": 2470,
                        "category": 1,
                        "key": "Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object_2470",
                        "message": "'Symbol' reference does not refer to the global Symbol constructor object."
                    },
                    "A_computed_property_name_of_the_form_0_must_be_of_type_symbol": {
                        "code": 2471,
                        "category": 1,
                        "key": "A_computed_property_name_of_the_form_0_must_be_of_type_symbol_2471",
                        "message": "A computed property name of the form '{0}' must be of type 'symbol'."
                    },
                    "Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher": {
                        "code": 2472,
                        "category": 1,
                        "key": "Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher_2472",
                        "message": "Spread operator in 'new' expressions is only available when targeting ECMAScript 5 and higher."
                    },
                    "Enum_declarations_must_all_be_const_or_non_const": {
                        "code": 2473,
                        "category": 1,
                        "key": "Enum_declarations_must_all_be_const_or_non_const_2473",
                        "message": "Enum declarations must all be const or non-const."
                    },
                    "const_enum_member_initializers_can_only_contain_literal_values_and_other_computed_enum_values": {
                        "code": 2474,
                        "category": 1,
                        "key": "const_enum_member_initializers_can_only_contain_literal_values_and_other_computed_enum_values_2474",
                        "message": "const enum member initializers can only contain literal values and other computed enum values."
                    },
                    "const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment_or_type_query": {
                        "code": 2475,
                        "category": 1,
                        "key": "const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_im_2475",
                        "message": "'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment or type query."
                    },
                    "A_const_enum_member_can_only_be_accessed_using_a_string_literal": {
                        "code": 2476,
                        "category": 1,
                        "key": "A_const_enum_member_can_only_be_accessed_using_a_string_literal_2476",
                        "message": "A const enum member can only be accessed using a string literal."
                    },
                    "const_enum_member_initializer_was_evaluated_to_a_non_finite_value": {
                        "code": 2477,
                        "category": 1,
                        "key": "const_enum_member_initializer_was_evaluated_to_a_non_finite_value_2477",
                        "message": "'const' enum member initializer was evaluated to a non-finite value."
                    },
                    "const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN": {
                        "code": 2478,
                        "category": 1,
                        "key": "const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN_2478",
                        "message": "'const' enum member initializer was evaluated to disallowed value 'NaN'."
                    },
                    "Property_0_does_not_exist_on_const_enum_1": {
                        "code": 2479,
                        "category": 1,
                        "key": "Property_0_does_not_exist_on_const_enum_1_2479",
                        "message": "Property '{0}' does not exist on 'const' enum '{1}'."
                    },
                    "let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations": {
                        "code": 2480,
                        "category": 1,
                        "key": "let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations_2480",
                        "message": "'let' is not allowed to be used as a name in 'let' or 'const' declarations."
                    },
                    "Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1": {
                        "code": 2481,
                        "category": 1,
                        "key": "Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1_2481",
                        "message": "Cannot initialize outer scoped variable '{0}' in the same scope as block scoped declaration '{1}'."
                    },
                    "The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation": {
                        "code": 2483,
                        "category": 1,
                        "key": "The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation_2483",
                        "message": "The left-hand side of a 'for...of' statement cannot use a type annotation."
                    },
                    "Export_declaration_conflicts_with_exported_declaration_of_0": {
                        "code": 2484,
                        "category": 1,
                        "key": "Export_declaration_conflicts_with_exported_declaration_of_0_2484",
                        "message": "Export declaration conflicts with exported declaration of '{0}'."
                    },
                    "The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access": {
                        "code": 2487,
                        "category": 1,
                        "key": "The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access_2487",
                        "message": "The left-hand side of a 'for...of' statement must be a variable or a property access."
                    },
                    "Type_0_must_have_a_Symbol_iterator_method_that_returns_an_iterator": {
                        "code": 2488,
                        "category": 1,
                        "key": "Type_0_must_have_a_Symbol_iterator_method_that_returns_an_iterator_2488",
                        "message": "Type '{0}' must have a '[Symbol.iterator]()' method that returns an iterator."
                    },
                    "An_iterator_must_have_a_next_method": {
                        "code": 2489,
                        "category": 1,
                        "key": "An_iterator_must_have_a_next_method_2489",
                        "message": "An iterator must have a 'next()' method."
                    },
                    "The_type_returned_by_the_0_method_of_an_iterator_must_have_a_value_property": {
                        "code": 2490,
                        "category": 1,
                        "key": "The_type_returned_by_the_0_method_of_an_iterator_must_have_a_value_property_2490",
                        "message": "The type returned by the '{0}()' method of an iterator must have a 'value' property."
                    },
                    "The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern": {
                        "code": 2491,
                        "category": 1,
                        "key": "The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern_2491",
                        "message": "The left-hand side of a 'for...in' statement cannot be a destructuring pattern."
                    },
                    "Cannot_redeclare_identifier_0_in_catch_clause": {
                        "code": 2492,
                        "category": 1,
                        "key": "Cannot_redeclare_identifier_0_in_catch_clause_2492",
                        "message": "Cannot redeclare identifier '{0}' in catch clause."
                    },
                    "Tuple_type_0_of_length_1_has_no_element_at_index_2": {
                        "code": 2493,
                        "category": 1,
                        "key": "Tuple_type_0_of_length_1_has_no_element_at_index_2_2493",
                        "message": "Tuple type '{0}' of length '{1}' has no element at index '{2}'."
                    },
                    "Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher": {
                        "code": 2494,
                        "category": 1,
                        "key": "Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher_2494",
                        "message": "Using a string in a 'for...of' statement is only supported in ECMAScript 5 and higher."
                    },
                    "Type_0_is_not_an_array_type_or_a_string_type": {
                        "code": 2495,
                        "category": 1,
                        "key": "Type_0_is_not_an_array_type_or_a_string_type_2495",
                        "message": "Type '{0}' is not an array type or a string type."
                    },
                    "The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_standard_function_expression": {
                        "code": 2496,
                        "category": 1,
                        "key": "The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_stand_2496",
                        "message": "The 'arguments' object cannot be referenced in an arrow function in ES3 and ES5. Consider using a standard function expression."
                    },
                    "This_module_can_only_be_referenced_with_ECMAScript_imports_Slashexports_by_turning_on_the_0_flag_and_referencing_its_default_export": {
                        "code": 2497,
                        "category": 1,
                        "key": "This_module_can_only_be_referenced_with_ECMAScript_imports_Slashexports_by_turning_on_the_0_flag_and_2497",
                        "message": "This module can only be referenced with ECMAScript imports/exports by turning on the '{0}' flag and referencing its default export."
                    },
                    "Module_0_uses_export_and_cannot_be_used_with_export_Asterisk": {
                        "code": 2498,
                        "category": 1,
                        "key": "Module_0_uses_export_and_cannot_be_used_with_export_Asterisk_2498",
                        "message": "Module '{0}' uses 'export =' and cannot be used with 'export *'."
                    },
                    "An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments": {
                        "code": 2499,
                        "category": 1,
                        "key": "An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments_2499",
                        "message": "An interface can only extend an identifier/qualified-name with optional type arguments."
                    },
                    "A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments": {
                        "code": 2500,
                        "category": 1,
                        "key": "A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments_2500",
                        "message": "A class can only implement an identifier/qualified-name with optional type arguments."
                    },
                    "A_rest_element_cannot_contain_a_binding_pattern": {
                        "code": 2501,
                        "category": 1,
                        "key": "A_rest_element_cannot_contain_a_binding_pattern_2501",
                        "message": "A rest element cannot contain a binding pattern."
                    },
                    "_0_is_referenced_directly_or_indirectly_in_its_own_type_annotation": {
                        "code": 2502,
                        "category": 1,
                        "key": "_0_is_referenced_directly_or_indirectly_in_its_own_type_annotation_2502",
                        "message": "'{0}' is referenced directly or indirectly in its own type annotation."
                    },
                    "Cannot_find_namespace_0": {
                        "code": 2503,
                        "category": 1,
                        "key": "Cannot_find_namespace_0_2503",
                        "message": "Cannot find namespace '{0}'."
                    },
                    "Type_0_must_have_a_Symbol_asyncIterator_method_that_returns_an_async_iterator": {
                        "code": 2504,
                        "category": 1,
                        "key": "Type_0_must_have_a_Symbol_asyncIterator_method_that_returns_an_async_iterator_2504",
                        "message": "Type '{0}' must have a '[Symbol.asyncIterator]()' method that returns an async iterator."
                    },
                    "A_generator_cannot_have_a_void_type_annotation": {
                        "code": 2505,
                        "category": 1,
                        "key": "A_generator_cannot_have_a_void_type_annotation_2505",
                        "message": "A generator cannot have a 'void' type annotation."
                    },
                    "_0_is_referenced_directly_or_indirectly_in_its_own_base_expression": {
                        "code": 2506,
                        "category": 1,
                        "key": "_0_is_referenced_directly_or_indirectly_in_its_own_base_expression_2506",
                        "message": "'{0}' is referenced directly or indirectly in its own base expression."
                    },
                    "Type_0_is_not_a_constructor_function_type": {
                        "code": 2507,
                        "category": 1,
                        "key": "Type_0_is_not_a_constructor_function_type_2507",
                        "message": "Type '{0}' is not a constructor function type."
                    },
                    "No_base_constructor_has_the_specified_number_of_type_arguments": {
                        "code": 2508,
                        "category": 1,
                        "key": "No_base_constructor_has_the_specified_number_of_type_arguments_2508",
                        "message": "No base constructor has the specified number of type arguments."
                    },
                    "Base_constructor_return_type_0_is_not_an_object_type_or_intersection_of_object_types_with_statically_known_members": {
                        "code": 2509,
                        "category": 1,
                        "key": "Base_constructor_return_type_0_is_not_an_object_type_or_intersection_of_object_types_with_statically_2509",
                        "message": "Base constructor return type '{0}' is not an object type or intersection of object types with statically known members."
                    },
                    "Base_constructors_must_all_have_the_same_return_type": {
                        "code": 2510,
                        "category": 1,
                        "key": "Base_constructors_must_all_have_the_same_return_type_2510",
                        "message": "Base constructors must all have the same return type."
                    },
                    "Cannot_create_an_instance_of_an_abstract_class": {
                        "code": 2511,
                        "category": 1,
                        "key": "Cannot_create_an_instance_of_an_abstract_class_2511",
                        "message": "Cannot create an instance of an abstract class."
                    },
                    "Overload_signatures_must_all_be_abstract_or_non_abstract": {
                        "code": 2512,
                        "category": 1,
                        "key": "Overload_signatures_must_all_be_abstract_or_non_abstract_2512",
                        "message": "Overload signatures must all be abstract or non-abstract."
                    },
                    "Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression": {
                        "code": 2513,
                        "category": 1,
                        "key": "Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression_2513",
                        "message": "Abstract method '{0}' in class '{1}' cannot be accessed via super expression."
                    },
                    "Classes_containing_abstract_methods_must_be_marked_abstract": {
                        "code": 2514,
                        "category": 1,
                        "key": "Classes_containing_abstract_methods_must_be_marked_abstract_2514",
                        "message": "Classes containing abstract methods must be marked abstract."
                    },
                    "Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2": {
                        "code": 2515,
                        "category": 1,
                        "key": "Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2_2515",
                        "message": "Non-abstract class '{0}' does not implement inherited abstract member '{1}' from class '{2}'."
                    },
                    "All_declarations_of_an_abstract_method_must_be_consecutive": {
                        "code": 2516,
                        "category": 1,
                        "key": "All_declarations_of_an_abstract_method_must_be_consecutive_2516",
                        "message": "All declarations of an abstract method must be consecutive."
                    },
                    "Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type": {
                        "code": 2517,
                        "category": 1,
                        "key": "Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type_2517",
                        "message": "Cannot assign an abstract constructor type to a non-abstract constructor type."
                    },
                    "A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard": {
                        "code": 2518,
                        "category": 1,
                        "key": "A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard_2518",
                        "message": "A 'this'-based type guard is not compatible with a parameter-based type guard."
                    },
                    "An_async_iterator_must_have_a_next_method": {
                        "code": 2519,
                        "category": 1,
                        "key": "An_async_iterator_must_have_a_next_method_2519",
                        "message": "An async iterator must have a 'next()' method."
                    },
                    "Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions": {
                        "code": 2520,
                        "category": 1,
                        "key": "Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions_2520",
                        "message": "Duplicate identifier '{0}'. Compiler uses declaration '{1}' to support async functions."
                    },
                    "Expression_resolves_to_variable_declaration_0_that_compiler_uses_to_support_async_functions": {
                        "code": 2521,
                        "category": 1,
                        "key": "Expression_resolves_to_variable_declaration_0_that_compiler_uses_to_support_async_functions_2521",
                        "message": "Expression resolves to variable declaration '{0}' that compiler uses to support async functions."
                    },
                    "The_arguments_object_cannot_be_referenced_in_an_async_function_or_method_in_ES3_and_ES5_Consider_using_a_standard_function_or_method": {
                        "code": 2522,
                        "category": 1,
                        "key": "The_arguments_object_cannot_be_referenced_in_an_async_function_or_method_in_ES3_and_ES5_Consider_usi_2522",
                        "message": "The 'arguments' object cannot be referenced in an async function or method in ES3 and ES5. Consider using a standard function or method."
                    },
                    "yield_expressions_cannot_be_used_in_a_parameter_initializer": {
                        "code": 2523,
                        "category": 1,
                        "key": "yield_expressions_cannot_be_used_in_a_parameter_initializer_2523",
                        "message": "'yield' expressions cannot be used in a parameter initializer."
                    },
                    "await_expressions_cannot_be_used_in_a_parameter_initializer": {
                        "code": 2524,
                        "category": 1,
                        "key": "await_expressions_cannot_be_used_in_a_parameter_initializer_2524",
                        "message": "'await' expressions cannot be used in a parameter initializer."
                    },
                    "Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value": {
                        "code": 2525,
                        "category": 1,
                        "key": "Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value_2525",
                        "message": "Initializer provides no value for this binding element and the binding element has no default value."
                    },
                    "A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface": {
                        "code": 2526,
                        "category": 1,
                        "key": "A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface_2526",
                        "message": "A 'this' type is available only in a non-static member of a class or interface."
                    },
                    "The_inferred_type_of_0_references_an_inaccessible_1_type_A_type_annotation_is_necessary": {
                        "code": 2527,
                        "category": 1,
                        "key": "The_inferred_type_of_0_references_an_inaccessible_1_type_A_type_annotation_is_necessary_2527",
                        "message": "The inferred type of '{0}' references an inaccessible '{1}' type. A type annotation is necessary."
                    },
                    "A_module_cannot_have_multiple_default_exports": {
                        "code": 2528,
                        "category": 1,
                        "key": "A_module_cannot_have_multiple_default_exports_2528",
                        "message": "A module cannot have multiple default exports."
                    },
                    "Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_functions": {
                        "code": 2529,
                        "category": 1,
                        "key": "Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_func_2529",
                        "message": "Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of a module containing async functions."
                    },
                    "Property_0_is_incompatible_with_index_signature": {
                        "code": 2530,
                        "category": 1,
                        "key": "Property_0_is_incompatible_with_index_signature_2530",
                        "message": "Property '{0}' is incompatible with index signature."
                    },
                    "Object_is_possibly_null": {
                        "code": 2531,
                        "category": 1,
                        "key": "Object_is_possibly_null_2531",
                        "message": "Object is possibly 'null'."
                    },
                    "Object_is_possibly_undefined": {
                        "code": 2532,
                        "category": 1,
                        "key": "Object_is_possibly_undefined_2532",
                        "message": "Object is possibly 'undefined'."
                    },
                    "Object_is_possibly_null_or_undefined": {
                        "code": 2533,
                        "category": 1,
                        "key": "Object_is_possibly_null_or_undefined_2533",
                        "message": "Object is possibly 'null' or 'undefined'."
                    },
                    "A_function_returning_never_cannot_have_a_reachable_end_point": {
                        "code": 2534,
                        "category": 1,
                        "key": "A_function_returning_never_cannot_have_a_reachable_end_point_2534",
                        "message": "A function returning 'never' cannot have a reachable end point."
                    },
                    "Enum_type_0_has_members_with_initializers_that_are_not_literals": {
                        "code": 2535,
                        "category": 1,
                        "key": "Enum_type_0_has_members_with_initializers_that_are_not_literals_2535",
                        "message": "Enum type '{0}' has members with initializers that are not literals."
                    },
                    "Type_0_cannot_be_used_to_index_type_1": {
                        "code": 2536,
                        "category": 1,
                        "key": "Type_0_cannot_be_used_to_index_type_1_2536",
                        "message": "Type '{0}' cannot be used to index type '{1}'."
                    },
                    "Type_0_has_no_matching_index_signature_for_type_1": {
                        "code": 2537,
                        "category": 1,
                        "key": "Type_0_has_no_matching_index_signature_for_type_1_2537",
                        "message": "Type '{0}' has no matching index signature for type '{1}'."
                    },
                    "Type_0_cannot_be_used_as_an_index_type": {
                        "code": 2538,
                        "category": 1,
                        "key": "Type_0_cannot_be_used_as_an_index_type_2538",
                        "message": "Type '{0}' cannot be used as an index type."
                    },
                    "Cannot_assign_to_0_because_it_is_not_a_variable": {
                        "code": 2539,
                        "category": 1,
                        "key": "Cannot_assign_to_0_because_it_is_not_a_variable_2539",
                        "message": "Cannot assign to '{0}' because it is not a variable."
                    },
                    "Cannot_assign_to_0_because_it_is_a_read_only_property": {
                        "code": 2540,
                        "category": 1,
                        "key": "Cannot_assign_to_0_because_it_is_a_read_only_property_2540",
                        "message": "Cannot assign to '{0}' because it is a read-only property."
                    },
                    "The_target_of_an_assignment_must_be_a_variable_or_a_property_access": {
                        "code": 2541,
                        "category": 1,
                        "key": "The_target_of_an_assignment_must_be_a_variable_or_a_property_access_2541",
                        "message": "The target of an assignment must be a variable or a property access."
                    },
                    "Index_signature_in_type_0_only_permits_reading": {
                        "code": 2542,
                        "category": 1,
                        "key": "Index_signature_in_type_0_only_permits_reading_2542",
                        "message": "Index signature in type '{0}' only permits reading."
                    },
                    "Duplicate_identifier_newTarget_Compiler_uses_variable_declaration_newTarget_to_capture_new_target_meta_property_reference": {
                        "code": 2543,
                        "category": 1,
                        "key": "Duplicate_identifier_newTarget_Compiler_uses_variable_declaration_newTarget_to_capture_new_target_me_2543",
                        "message": "Duplicate identifier '_newTarget'. Compiler uses variable declaration '_newTarget' to capture 'new.target' meta-property reference."
                    },
                    "Expression_resolves_to_variable_declaration_newTarget_that_compiler_uses_to_capture_new_target_meta_property_reference": {
                        "code": 2544,
                        "category": 1,
                        "key": "Expression_resolves_to_variable_declaration_newTarget_that_compiler_uses_to_capture_new_target_meta__2544",
                        "message": "Expression resolves to variable declaration '_newTarget' that compiler uses to capture 'new.target' meta-property reference."
                    },
                    "A_mixin_class_must_have_a_constructor_with_a_single_rest_parameter_of_type_any": {
                        "code": 2545,
                        "category": 1,
                        "key": "A_mixin_class_must_have_a_constructor_with_a_single_rest_parameter_of_type_any_2545",
                        "message": "A mixin class must have a constructor with a single rest parameter of type 'any[]'."
                    },
                    "Property_0_has_conflicting_declarations_and_is_inaccessible_in_type_1": {
                        "code": 2546,
                        "category": 1,
                        "key": "Property_0_has_conflicting_declarations_and_is_inaccessible_in_type_1_2546",
                        "message": "Property '{0}' has conflicting declarations and is inaccessible in type '{1}'."
                    },
                    "The_type_returned_by_the_0_method_of_an_async_iterator_must_be_a_promise_for_a_type_with_a_value_property": {
                        "code": 2547,
                        "category": 1,
                        "key": "The_type_returned_by_the_0_method_of_an_async_iterator_must_be_a_promise_for_a_type_with_a_value_pro_2547",
                        "message": "The type returned by the '{0}()' method of an async iterator must be a promise for a type with a 'value' property."
                    },
                    "Type_0_is_not_an_array_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator": {
                        "code": 2548,
                        "category": 1,
                        "key": "Type_0_is_not_an_array_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator_2548",
                        "message": "Type '{0}' is not an array type or does not have a '[Symbol.iterator]()' method that returns an iterator."
                    },
                    "Type_0_is_not_an_array_type_or_a_string_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator": {
                        "code": 2549,
                        "category": 1,
                        "key": "Type_0_is_not_an_array_type_or_a_string_type_or_does_not_have_a_Symbol_iterator_method_that_returns__2549",
                        "message": "Type '{0}' is not an array type or a string type or does not have a '[Symbol.iterator]()' method that returns an iterator."
                    },
                    "Property_0_does_not_exist_on_type_1_Did_you_mean_2": {
                        "code": 2551,
                        "category": 1,
                        "key": "Property_0_does_not_exist_on_type_1_Did_you_mean_2_2551",
                        "message": "Property '{0}' does not exist on type '{1}'. Did you mean '{2}'?"
                    },
                    "Cannot_find_name_0_Did_you_mean_1": {
                        "code": 2552,
                        "category": 1,
                        "key": "Cannot_find_name_0_Did_you_mean_1_2552",
                        "message": "Cannot find name '{0}'. Did you mean '{1}'?"
                    },
                    "Computed_values_are_not_permitted_in_an_enum_with_string_valued_members": {
                        "code": 2553,
                        "category": 1,
                        "key": "Computed_values_are_not_permitted_in_an_enum_with_string_valued_members_2553",
                        "message": "Computed values are not permitted in an enum with string valued members."
                    },
                    "Expected_0_arguments_but_got_1": {
                        "code": 2554,
                        "category": 1,
                        "key": "Expected_0_arguments_but_got_1_2554",
                        "message": "Expected {0} arguments, but got {1}."
                    },
                    "Expected_at_least_0_arguments_but_got_1": {
                        "code": 2555,
                        "category": 1,
                        "key": "Expected_at_least_0_arguments_but_got_1_2555",
                        "message": "Expected at least {0} arguments, but got {1}."
                    },
                    "Expected_0_arguments_but_got_1_or_more": {
                        "code": 2556,
                        "category": 1,
                        "key": "Expected_0_arguments_but_got_1_or_more_2556",
                        "message": "Expected {0} arguments, but got {1} or more."
                    },
                    "Expected_at_least_0_arguments_but_got_1_or_more": {
                        "code": 2557,
                        "category": 1,
                        "key": "Expected_at_least_0_arguments_but_got_1_or_more_2557",
                        "message": "Expected at least {0} arguments, but got {1} or more."
                    },
                    "Expected_0_type_arguments_but_got_1": {
                        "code": 2558,
                        "category": 1,
                        "key": "Expected_0_type_arguments_but_got_1_2558",
                        "message": "Expected {0} type arguments, but got {1}."
                    },
                    "Type_0_has_no_properties_in_common_with_type_1": {
                        "code": 2559,
                        "category": 1,
                        "key": "Type_0_has_no_properties_in_common_with_type_1_2559",
                        "message": "Type '{0}' has no properties in common with type '{1}'."
                    },
                    "Value_of_type_0_has_no_properties_in_common_with_type_1_Did_you_mean_to_call_it": {
                        "code": 2560,
                        "category": 1,
                        "key": "Value_of_type_0_has_no_properties_in_common_with_type_1_Did_you_mean_to_call_it_2560",
                        "message": "Value of type '{0}' has no properties in common with type '{1}'. Did you mean to call it?"
                    },
                    "Object_literal_may_only_specify_known_properties_but_0_does_not_exist_in_type_1_Did_you_mean_to_write_2": {
                        "code": 2561,
                        "category": 1,
                        "key": "Object_literal_may_only_specify_known_properties_but_0_does_not_exist_in_type_1_Did_you_mean_to_writ_2561",
                        "message": "Object literal may only specify known properties, but '{0}' does not exist in type '{1}'. Did you mean to write '{2}'?"
                    },
                    "Base_class_expressions_cannot_reference_class_type_parameters": {
                        "code": 2562,
                        "category": 1,
                        "key": "Base_class_expressions_cannot_reference_class_type_parameters_2562",
                        "message": "Base class expressions cannot reference class type parameters."
                    },
                    "The_containing_function_or_module_body_is_too_large_for_control_flow_analysis": {
                        "code": 2563,
                        "category": 1,
                        "key": "The_containing_function_or_module_body_is_too_large_for_control_flow_analysis_2563",
                        "message": "The containing function or module body is too large for control flow analysis."
                    },
                    "Property_0_has_no_initializer_and_is_not_definitely_assigned_in_the_constructor": {
                        "code": 2564,
                        "category": 1,
                        "key": "Property_0_has_no_initializer_and_is_not_definitely_assigned_in_the_constructor_2564",
                        "message": "Property '{0}' has no initializer and is not definitely assigned in the constructor."
                    },
                    "Property_0_is_used_before_being_assigned": {
                        "code": 2565,
                        "category": 1,
                        "key": "Property_0_is_used_before_being_assigned_2565",
                        "message": "Property '{0}' is used before being assigned."
                    },
                    "A_rest_element_cannot_have_a_property_name": {
                        "code": 2566,
                        "category": 1,
                        "key": "A_rest_element_cannot_have_a_property_name_2566",
                        "message": "A rest element cannot have a property name."
                    },
                    "Enum_declarations_can_only_merge_with_namespace_or_other_enum_declarations": {
                        "code": 2567,
                        "category": 1,
                        "key": "Enum_declarations_can_only_merge_with_namespace_or_other_enum_declarations_2567",
                        "message": "Enum declarations can only merge with namespace or other enum declarations."
                    },
                    "Type_0_is_not_an_array_type_or_a_string_type_Use_compiler_option_downlevelIteration_to_allow_iterating_of_iterators": {
                        "code": 2569,
                        "category": 1,
                        "key": "Type_0_is_not_an_array_type_or_a_string_type_Use_compiler_option_downlevelIteration_to_allow_iterati_2569",
                        "message": "Type '{0}' is not an array type or a string type. Use compiler option '--downlevelIteration' to allow iterating of iterators."
                    },
                    "Object_is_of_type_unknown": {
                        "code": 2571,
                        "category": 1,
                        "key": "Object_is_of_type_unknown_2571",
                        "message": "Object is of type 'unknown'."
                    },
                    "Rest_signatures_are_incompatible": {
                        "code": 2572,
                        "category": 1,
                        "key": "Rest_signatures_are_incompatible_2572",
                        "message": "Rest signatures are incompatible."
                    },
                    "Property_0_is_incompatible_with_rest_element_type": {
                        "code": 2573,
                        "category": 1,
                        "key": "Property_0_is_incompatible_with_rest_element_type_2573",
                        "message": "Property '{0}' is incompatible with rest element type."
                    },
                    "A_rest_element_type_must_be_an_array_type": {
                        "code": 2574,
                        "category": 1,
                        "key": "A_rest_element_type_must_be_an_array_type_2574",
                        "message": "A rest element type must be an array type."
                    },
                    "No_overload_expects_0_arguments_but_overloads_do_exist_that_expect_either_1_or_2_arguments": {
                        "code": 2575,
                        "category": 1,
                        "key": "No_overload_expects_0_arguments_but_overloads_do_exist_that_expect_either_1_or_2_arguments_2575",
                        "message": "No overload expects {0} arguments, but overloads do exist that expect either {1} or {2} arguments."
                    },
                    "Property_0_is_a_static_member_of_type_1": {
                        "code": 2576,
                        "category": 1,
                        "key": "Property_0_is_a_static_member_of_type_1_2576",
                        "message": "Property '{0}' is a static member of type '{1}'"
                    },
                    "Return_type_annotation_circularly_references_itself": {
                        "code": 2577,
                        "category": 1,
                        "key": "Return_type_annotation_circularly_references_itself_2577",
                        "message": "Return type annotation circularly references itself."
                    },
                    "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_types_Slashnode": {
                        "code": 2580,
                        "category": 1,
                        "key": "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_types_Slashnode_2580",
                        "message": "Cannot find name '{0}'. Do you need to install type definitions for node? Try `npm i @types/node`."
                    },
                    "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_types_Slashjquery": {
                        "code": 2581,
                        "category": 1,
                        "key": "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_types_Slashjquery_2581",
                        "message": "Cannot find name '{0}'. Do you need to install type definitions for jQuery? Try `npm i @types/jquery`."
                    },
                    "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_types_Slashjest_or_npm_i_types_Slashmocha": {
                        "code": 2582,
                        "category": 1,
                        "key": "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_types_Slashje_2582",
                        "message": "Cannot find name '{0}'. Do you need to install type definitions for a test runner? Try `npm i @types/jest` or `npm i @types/mocha`."
                    },
                    "Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_es2015_or_later": {
                        "code": 2583,
                        "category": 1,
                        "key": "Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_2583",
                        "message": "Cannot find name '{0}'. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later."
                    },
                    "Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_include_dom": {
                        "code": 2584,
                        "category": 1,
                        "key": "Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_2584",
                        "message": "Cannot find name '{0}'. Do you need to change your target library? Try changing the `lib` compiler option to include 'dom'."
                    },
                    "_0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_es2015_or_later": {
                        "code": 2585,
                        "category": 1,
                        "key": "_0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Do_you_need_to_change_your_target_library_2585",
                        "message": "'{0}' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later."
                    },
                    "Enum_type_0_circularly_references_itself": {
                        "code": 2586,
                        "category": 1,
                        "key": "Enum_type_0_circularly_references_itself_2586",
                        "message": "Enum type '{0}' circularly references itself."
                    },
                    "JSDoc_type_0_circularly_references_itself": {
                        "code": 2587,
                        "category": 1,
                        "key": "JSDoc_type_0_circularly_references_itself_2587",
                        "message": "JSDoc type '{0}' circularly references itself."
                    },
                    "Cannot_assign_to_0_because_it_is_a_constant": {
                        "code": 2588,
                        "category": 1,
                        "key": "Cannot_assign_to_0_because_it_is_a_constant_2588",
                        "message": "Cannot assign to '{0}' because it is a constant."
                    },
                    "Type_instantiation_is_excessively_deep_and_possibly_infinite": {
                        "code": 2589,
                        "category": 1,
                        "key": "Type_instantiation_is_excessively_deep_and_possibly_infinite_2589",
                        "message": "Type instantiation is excessively deep and possibly infinite."
                    },
                    "Expression_produces_a_union_type_that_is_too_complex_to_represent": {
                        "code": 2590,
                        "category": 1,
                        "key": "Expression_produces_a_union_type_that_is_too_complex_to_represent_2590",
                        "message": "Expression produces a union type that is too complex to represent."
                    },
                    "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_types_Slashnode_and_then_add_node_to_the_types_field_in_your_tsconfig": {
                        "code": 2591,
                        "category": 1,
                        "key": "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_types_Slashnode_and_th_2591",
                        "message": "Cannot find name '{0}'. Do you need to install type definitions for node? Try `npm i @types/node` and then add `node` to the types field in your tsconfig."
                    },
                    "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_types_Slashjquery_and_then_add_jquery_to_the_types_field_in_your_tsconfig": {
                        "code": 2592,
                        "category": 1,
                        "key": "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_types_Slashjquery_an_2592",
                        "message": "Cannot find name '{0}'. Do you need to install type definitions for jQuery? Try `npm i @types/jquery` and then add `jquery` to the types field in your tsconfig."
                    },
                    "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_types_Slashjest_or_npm_i_types_Slashmocha_and_then_add_jest_or_mocha_to_the_types_field_in_your_tsconfig": {
                        "code": 2593,
                        "category": 1,
                        "key": "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_types_Slashje_2593",
                        "message": "Cannot find name '{0}'. Do you need to install type definitions for a test runner? Try `npm i @types/jest` or `npm i @types/mocha` and then add `jest` or `mocha` to the types field in your tsconfig."
                    },
                    "This_module_is_declared_with_using_export_and_can_only_be_used_with_a_default_import_when_using_the_0_flag": {
                        "code": 2594,
                        "category": 1,
                        "key": "This_module_is_declared_with_using_export_and_can_only_be_used_with_a_default_import_when_using_the__2594",
                        "message": "This module is declared with using 'export =', and can only be used with a default import when using the '{0}' flag."
                    },
                    "JSX_element_attributes_type_0_may_not_be_a_union_type": {
                        "code": 2600,
                        "category": 1,
                        "key": "JSX_element_attributes_type_0_may_not_be_a_union_type_2600",
                        "message": "JSX element attributes type '{0}' may not be a union type."
                    },
                    "The_return_type_of_a_JSX_element_constructor_must_return_an_object_type": {
                        "code": 2601,
                        "category": 1,
                        "key": "The_return_type_of_a_JSX_element_constructor_must_return_an_object_type_2601",
                        "message": "The return type of a JSX element constructor must return an object type."
                    },
                    "JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist": {
                        "code": 2602,
                        "category": 1,
                        "key": "JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist_2602",
                        "message": "JSX element implicitly has type 'any' because the global type 'JSX.Element' does not exist."
                    },
                    "Property_0_in_type_1_is_not_assignable_to_type_2": {
                        "code": 2603,
                        "category": 1,
                        "key": "Property_0_in_type_1_is_not_assignable_to_type_2_2603",
                        "message": "Property '{0}' in type '{1}' is not assignable to type '{2}'."
                    },
                    "JSX_element_type_0_does_not_have_any_construct_or_call_signatures": {
                        "code": 2604,
                        "category": 1,
                        "key": "JSX_element_type_0_does_not_have_any_construct_or_call_signatures_2604",
                        "message": "JSX element type '{0}' does not have any construct or call signatures."
                    },
                    "JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements": {
                        "code": 2605,
                        "category": 1,
                        "key": "JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements_2605",
                        "message": "JSX element type '{0}' is not a constructor function for JSX elements."
                    },
                    "Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property": {
                        "code": 2606,
                        "category": 1,
                        "key": "Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property_2606",
                        "message": "Property '{0}' of JSX spread attribute is not assignable to target property."
                    },
                    "JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property": {
                        "code": 2607,
                        "category": 1,
                        "key": "JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property_2607",
                        "message": "JSX element class does not support attributes because it does not have a '{0}' property."
                    },
                    "The_global_type_JSX_0_may_not_have_more_than_one_property": {
                        "code": 2608,
                        "category": 1,
                        "key": "The_global_type_JSX_0_may_not_have_more_than_one_property_2608",
                        "message": "The global type 'JSX.{0}' may not have more than one property."
                    },
                    "JSX_spread_child_must_be_an_array_type": {
                        "code": 2609,
                        "category": 1,
                        "key": "JSX_spread_child_must_be_an_array_type_2609",
                        "message": "JSX spread child must be an array type."
                    },
                    "Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_property": {
                        "code": 2610,
                        "category": 1,
                        "key": "Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_proper_2610",
                        "message": "Class '{0}' defines instance member accessor '{1}', but extended class '{2}' defines it as instance member property."
                    },
                    "Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_accessor": {
                        "code": 2611,
                        "category": 1,
                        "key": "Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_access_2611",
                        "message": "Class '{0}' defines instance member property '{1}', but extended class '{2}' defines it as instance member accessor."
                    },
                    "Property_0_will_overwrite_the_base_property_in_1_If_this_is_intentional_add_an_initializer_Otherwise_add_a_declare_modifier_or_remove_the_redundant_declaration": {
                        "code": 2612,
                        "category": 1,
                        "key": "Property_0_will_overwrite_the_base_property_in_1_If_this_is_intentional_add_an_initializer_Otherwise_2612",
                        "message": "Property '{0}' will overwrite the base property in '{1}'. If this is intentional, add an initializer. Otherwise, add a 'declare' modifier or remove the redundant declaration."
                    },
                    "Module_0_has_no_default_export_Did_you_mean_to_use_import_1_from_0_instead": {
                        "code": 2613,
                        "category": 1,
                        "key": "Module_0_has_no_default_export_Did_you_mean_to_use_import_1_from_0_instead_2613",
                        "message": "Module '{0}' has no default export. Did you mean to use 'import { {1} } from {0}' instead?"
                    },
                    "Module_0_has_no_exported_member_1_Did_you_mean_to_use_import_1_from_0_instead": {
                        "code": 2614,
                        "category": 1,
                        "key": "Module_0_has_no_exported_member_1_Did_you_mean_to_use_import_1_from_0_instead_2614",
                        "message": "Module '{0}' has no exported member '{1}'. Did you mean to use 'import {1} from {0}' instead?"
                    },
                    "Cannot_augment_module_0_with_value_exports_because_it_resolves_to_a_non_module_entity": {
                        "code": 2649,
                        "category": 1,
                        "key": "Cannot_augment_module_0_with_value_exports_because_it_resolves_to_a_non_module_entity_2649",
                        "message": "Cannot augment module '{0}' with value exports because it resolves to a non-module entity."
                    },
                    "A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums": {
                        "code": 2651,
                        "category": 1,
                        "key": "A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_memb_2651",
                        "message": "A member initializer in a enum declaration cannot reference members declared after it, including members defined in other enums."
                    },
                    "Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_default_0_declaration_instead": {
                        "code": 2652,
                        "category": 1,
                        "key": "Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_d_2652",
                        "message": "Merged declaration '{0}' cannot include a default export declaration. Consider adding a separate 'export default {0}' declaration instead."
                    },
                    "Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1": {
                        "code": 2653,
                        "category": 1,
                        "key": "Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1_2653",
                        "message": "Non-abstract class expression does not implement inherited abstract member '{0}' from class '{1}'."
                    },
                    "Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_package_author_to_update_the_package_definition": {
                        "code": 2654,
                        "category": 1,
                        "key": "Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_pack_2654",
                        "message": "Exported external package typings file cannot contain tripleslash references. Please contact the package author to update the package definition."
                    },
                    "Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_the_package_definition": {
                        "code": 2656,
                        "category": 1,
                        "key": "Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_2656",
                        "message": "Exported external package typings file '{0}' is not a module. Please contact the package author to update the package definition."
                    },
                    "JSX_expressions_must_have_one_parent_element": {
                        "code": 2657,
                        "category": 1,
                        "key": "JSX_expressions_must_have_one_parent_element_2657",
                        "message": "JSX expressions must have one parent element."
                    },
                    "Type_0_provides_no_match_for_the_signature_1": {
                        "code": 2658,
                        "category": 1,
                        "key": "Type_0_provides_no_match_for_the_signature_1_2658",
                        "message": "Type '{0}' provides no match for the signature '{1}'."
                    },
                    "super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_higher": {
                        "code": 2659,
                        "category": 1,
                        "key": "super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_highe_2659",
                        "message": "'super' is only allowed in members of object literal expressions when option 'target' is 'ES2015' or higher."
                    },
                    "super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions": {
                        "code": 2660,
                        "category": 1,
                        "key": "super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions_2660",
                        "message": "'super' can only be referenced in members of derived classes or object literal expressions."
                    },
                    "Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module": {
                        "code": 2661,
                        "category": 1,
                        "key": "Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module_2661",
                        "message": "Cannot export '{0}'. Only local declarations can be exported from a module."
                    },
                    "Cannot_find_name_0_Did_you_mean_the_static_member_1_0": {
                        "code": 2662,
                        "category": 1,
                        "key": "Cannot_find_name_0_Did_you_mean_the_static_member_1_0_2662",
                        "message": "Cannot find name '{0}'. Did you mean the static member '{1}.{0}'?"
                    },
                    "Cannot_find_name_0_Did_you_mean_the_instance_member_this_0": {
                        "code": 2663,
                        "category": 1,
                        "key": "Cannot_find_name_0_Did_you_mean_the_instance_member_this_0_2663",
                        "message": "Cannot find name '{0}'. Did you mean the instance member 'this.{0}'?"
                    },
                    "Invalid_module_name_in_augmentation_module_0_cannot_be_found": {
                        "code": 2664,
                        "category": 1,
                        "key": "Invalid_module_name_in_augmentation_module_0_cannot_be_found_2664",
                        "message": "Invalid module name in augmentation, module '{0}' cannot be found."
                    },
                    "Invalid_module_name_in_augmentation_Module_0_resolves_to_an_untyped_module_at_1_which_cannot_be_augmented": {
                        "code": 2665,
                        "category": 1,
                        "key": "Invalid_module_name_in_augmentation_Module_0_resolves_to_an_untyped_module_at_1_which_cannot_be_augm_2665",
                        "message": "Invalid module name in augmentation. Module '{0}' resolves to an untyped module at '{1}', which cannot be augmented."
                    },
                    "Exports_and_export_assignments_are_not_permitted_in_module_augmentations": {
                        "code": 2666,
                        "category": 1,
                        "key": "Exports_and_export_assignments_are_not_permitted_in_module_augmentations_2666",
                        "message": "Exports and export assignments are not permitted in module augmentations."
                    },
                    "Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_module": {
                        "code": 2667,
                        "category": 1,
                        "key": "Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_mod_2667",
                        "message": "Imports are not permitted in module augmentations. Consider moving them to the enclosing external module."
                    },
                    "export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always_visible": {
                        "code": 2668,
                        "category": 1,
                        "key": "export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always__2668",
                        "message": "'export' modifier cannot be applied to ambient modules and module augmentations since they are always visible."
                    },
                    "Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations": {
                        "code": 2669,
                        "category": 1,
                        "key": "Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_2669",
                        "message": "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."
                    },
                    "Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambient_context": {
                        "code": 2670,
                        "category": 1,
                        "key": "Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambien_2670",
                        "message": "Augmentations for the global scope should have 'declare' modifier unless they appear in already ambient context."
                    },
                    "Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity": {
                        "code": 2671,
                        "category": 1,
                        "key": "Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity_2671",
                        "message": "Cannot augment module '{0}' because it resolves to a non-module entity."
                    },
                    "Cannot_assign_a_0_constructor_type_to_a_1_constructor_type": {
                        "code": 2672,
                        "category": 1,
                        "key": "Cannot_assign_a_0_constructor_type_to_a_1_constructor_type_2672",
                        "message": "Cannot assign a '{0}' constructor type to a '{1}' constructor type."
                    },
                    "Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration": {
                        "code": 2673,
                        "category": 1,
                        "key": "Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration_2673",
                        "message": "Constructor of class '{0}' is private and only accessible within the class declaration."
                    },
                    "Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration": {
                        "code": 2674,
                        "category": 1,
                        "key": "Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration_2674",
                        "message": "Constructor of class '{0}' is protected and only accessible within the class declaration."
                    },
                    "Cannot_extend_a_class_0_Class_constructor_is_marked_as_private": {
                        "code": 2675,
                        "category": 1,
                        "key": "Cannot_extend_a_class_0_Class_constructor_is_marked_as_private_2675",
                        "message": "Cannot extend a class '{0}'. Class constructor is marked as private."
                    },
                    "Accessors_must_both_be_abstract_or_non_abstract": {
                        "code": 2676,
                        "category": 1,
                        "key": "Accessors_must_both_be_abstract_or_non_abstract_2676",
                        "message": "Accessors must both be abstract or non-abstract."
                    },
                    "A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type": {
                        "code": 2677,
                        "category": 1,
                        "key": "A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type_2677",
                        "message": "A type predicate's type must be assignable to its parameter's type."
                    },
                    "Type_0_is_not_comparable_to_type_1": {
                        "code": 2678,
                        "category": 1,
                        "key": "Type_0_is_not_comparable_to_type_1_2678",
                        "message": "Type '{0}' is not comparable to type '{1}'."
                    },
                    "A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void": {
                        "code": 2679,
                        "category": 1,
                        "key": "A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void_2679",
                        "message": "A function that is called with the 'new' keyword cannot have a 'this' type that is 'void'."
                    },
                    "A_0_parameter_must_be_the_first_parameter": {
                        "code": 2680,
                        "category": 1,
                        "key": "A_0_parameter_must_be_the_first_parameter_2680",
                        "message": "A '{0}' parameter must be the first parameter."
                    },
                    "A_constructor_cannot_have_a_this_parameter": {
                        "code": 2681,
                        "category": 1,
                        "key": "A_constructor_cannot_have_a_this_parameter_2681",
                        "message": "A constructor cannot have a 'this' parameter."
                    },
                    "get_and_set_accessor_must_have_the_same_this_type": {
                        "code": 2682,
                        "category": 1,
                        "key": "get_and_set_accessor_must_have_the_same_this_type_2682",
                        "message": "'get' and 'set' accessor must have the same 'this' type."
                    },
                    "this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation": {
                        "code": 2683,
                        "category": 1,
                        "key": "this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_2683",
                        "message": "'this' implicitly has type 'any' because it does not have a type annotation."
                    },
                    "The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1": {
                        "code": 2684,
                        "category": 1,
                        "key": "The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1_2684",
                        "message": "The 'this' context of type '{0}' is not assignable to method's 'this' of type '{1}'."
                    },
                    "The_this_types_of_each_signature_are_incompatible": {
                        "code": 2685,
                        "category": 1,
                        "key": "The_this_types_of_each_signature_are_incompatible_2685",
                        "message": "The 'this' types of each signature are incompatible."
                    },
                    "_0_refers_to_a_UMD_global_but_the_current_file_is_a_module_Consider_adding_an_import_instead": {
                        "code": 2686,
                        "category": 1,
                        "key": "_0_refers_to_a_UMD_global_but_the_current_file_is_a_module_Consider_adding_an_import_instead_2686",
                        "message": "'{0}' refers to a UMD global, but the current file is a module. Consider adding an import instead."
                    },
                    "All_declarations_of_0_must_have_identical_modifiers": {
                        "code": 2687,
                        "category": 1,
                        "key": "All_declarations_of_0_must_have_identical_modifiers_2687",
                        "message": "All declarations of '{0}' must have identical modifiers."
                    },
                    "Cannot_find_type_definition_file_for_0": {
                        "code": 2688,
                        "category": 1,
                        "key": "Cannot_find_type_definition_file_for_0_2688",
                        "message": "Cannot find type definition file for '{0}'."
                    },
                    "Cannot_extend_an_interface_0_Did_you_mean_implements": {
                        "code": 2689,
                        "category": 1,
                        "key": "Cannot_extend_an_interface_0_Did_you_mean_implements_2689",
                        "message": "Cannot extend an interface '{0}'. Did you mean 'implements'?"
                    },
                    "An_import_path_cannot_end_with_a_0_extension_Consider_importing_1_instead": {
                        "code": 2691,
                        "category": 1,
                        "key": "An_import_path_cannot_end_with_a_0_extension_Consider_importing_1_instead_2691",
                        "message": "An import path cannot end with a '{0}' extension. Consider importing '{1}' instead."
                    },
                    "_0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible": {
                        "code": 2692,
                        "category": 1,
                        "key": "_0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible_2692",
                        "message": "'{0}' is a primitive, but '{1}' is a wrapper object. Prefer using '{0}' when possible."
                    },
                    "_0_only_refers_to_a_type_but_is_being_used_as_a_value_here": {
                        "code": 2693,
                        "category": 1,
                        "key": "_0_only_refers_to_a_type_but_is_being_used_as_a_value_here_2693",
                        "message": "'{0}' only refers to a type, but is being used as a value here."
                    },
                    "Namespace_0_has_no_exported_member_1": {
                        "code": 2694,
                        "category": 1,
                        "key": "Namespace_0_has_no_exported_member_1_2694",
                        "message": "Namespace '{0}' has no exported member '{1}'."
                    },
                    "Left_side_of_comma_operator_is_unused_and_has_no_side_effects": {
                        "code": 2695,
                        "category": 1,
                        "key": "Left_side_of_comma_operator_is_unused_and_has_no_side_effects_2695",
                        "message": "Left side of comma operator is unused and has no side effects.",
                        "reportsUnnecessary": true
                    },
                    "The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead": {
                        "code": 2696,
                        "category": 1,
                        "key": "The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead_2696",
                        "message": "The 'Object' type is assignable to very few other types. Did you mean to use the 'any' type instead?"
                    },
                    "An_async_function_or_method_must_return_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option": {
                        "code": 2697,
                        "category": 1,
                        "key": "An_async_function_or_method_must_return_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_in_2697",
                        "message": "An async function or method must return a 'Promise'. Make sure you have a declaration for 'Promise' or include 'ES2015' in your `--lib` option."
                    },
                    "Spread_types_may_only_be_created_from_object_types": {
                        "code": 2698,
                        "category": 1,
                        "key": "Spread_types_may_only_be_created_from_object_types_2698",
                        "message": "Spread types may only be created from object types."
                    },
                    "Static_property_0_conflicts_with_built_in_property_Function_0_of_constructor_function_1": {
                        "code": 2699,
                        "category": 1,
                        "key": "Static_property_0_conflicts_with_built_in_property_Function_0_of_constructor_function_1_2699",
                        "message": "Static property '{0}' conflicts with built-in property 'Function.{0}' of constructor function '{1}'."
                    },
                    "Rest_types_may_only_be_created_from_object_types": {
                        "code": 2700,
                        "category": 1,
                        "key": "Rest_types_may_only_be_created_from_object_types_2700",
                        "message": "Rest types may only be created from object types."
                    },
                    "The_target_of_an_object_rest_assignment_must_be_a_variable_or_a_property_access": {
                        "code": 2701,
                        "category": 1,
                        "key": "The_target_of_an_object_rest_assignment_must_be_a_variable_or_a_property_access_2701",
                        "message": "The target of an object rest assignment must be a variable or a property access."
                    },
                    "_0_only_refers_to_a_type_but_is_being_used_as_a_namespace_here": {
                        "code": 2702,
                        "category": 1,
                        "key": "_0_only_refers_to_a_type_but_is_being_used_as_a_namespace_here_2702",
                        "message": "'{0}' only refers to a type, but is being used as a namespace here."
                    },
                    "The_operand_of_a_delete_operator_must_be_a_property_reference": {
                        "code": 2703,
                        "category": 1,
                        "key": "The_operand_of_a_delete_operator_must_be_a_property_reference_2703",
                        "message": "The operand of a delete operator must be a property reference."
                    },
                    "The_operand_of_a_delete_operator_cannot_be_a_read_only_property": {
                        "code": 2704,
                        "category": 1,
                        "key": "The_operand_of_a_delete_operator_cannot_be_a_read_only_property_2704",
                        "message": "The operand of a delete operator cannot be a read-only property."
                    },
                    "An_async_function_or_method_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declaration_for_the_Promise_constructor_or_include_ES2015_in_your_lib_option": {
                        "code": 2705,
                        "category": 1,
                        "key": "An_async_function_or_method_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_de_2705",
                        "message": "An async function or method in ES5/ES3 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your `--lib` option."
                    },
                    "Required_type_parameters_may_not_follow_optional_type_parameters": {
                        "code": 2706,
                        "category": 1,
                        "key": "Required_type_parameters_may_not_follow_optional_type_parameters_2706",
                        "message": "Required type parameters may not follow optional type parameters."
                    },
                    "Generic_type_0_requires_between_1_and_2_type_arguments": {
                        "code": 2707,
                        "category": 1,
                        "key": "Generic_type_0_requires_between_1_and_2_type_arguments_2707",
                        "message": "Generic type '{0}' requires between {1} and {2} type arguments."
                    },
                    "Cannot_use_namespace_0_as_a_value": {
                        "code": 2708,
                        "category": 1,
                        "key": "Cannot_use_namespace_0_as_a_value_2708",
                        "message": "Cannot use namespace '{0}' as a value."
                    },
                    "Cannot_use_namespace_0_as_a_type": {
                        "code": 2709,
                        "category": 1,
                        "key": "Cannot_use_namespace_0_as_a_type_2709",
                        "message": "Cannot use namespace '{0}' as a type."
                    },
                    "_0_are_specified_twice_The_attribute_named_0_will_be_overwritten": {
                        "code": 2710,
                        "category": 1,
                        "key": "_0_are_specified_twice_The_attribute_named_0_will_be_overwritten_2710",
                        "message": "'{0}' are specified twice. The attribute named '{0}' will be overwritten."
                    },
                    "A_dynamic_import_call_returns_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option": {
                        "code": 2711,
                        "category": 1,
                        "key": "A_dynamic_import_call_returns_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES20_2711",
                        "message": "A dynamic import call returns a 'Promise'. Make sure you have a declaration for 'Promise' or include 'ES2015' in your `--lib` option."
                    },
                    "A_dynamic_import_call_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declaration_for_the_Promise_constructor_or_include_ES2015_in_your_lib_option": {
                        "code": 2712,
                        "category": 1,
                        "key": "A_dynamic_import_call_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declarat_2712",
                        "message": "A dynamic import call in ES5/ES3 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your `--lib` option."
                    },
                    "Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_property_1_in_0_with_0_1": {
                        "code": 2713,
                        "category": 1,
                        "key": "Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_p_2713",
                        "message": "Cannot access '{0}.{1}' because '{0}' is a type, but not a namespace. Did you mean to retrieve the type of the property '{1}' in '{0}' with '{0}[\"{1}\"]'?"
                    },
                    "The_expression_of_an_export_assignment_must_be_an_identifier_or_qualified_name_in_an_ambient_context": {
                        "code": 2714,
                        "category": 1,
                        "key": "The_expression_of_an_export_assignment_must_be_an_identifier_or_qualified_name_in_an_ambient_context_2714",
                        "message": "The expression of an export assignment must be an identifier or qualified name in an ambient context."
                    },
                    "Abstract_property_0_in_class_1_cannot_be_accessed_in_the_constructor": {
                        "code": 2715,
                        "category": 1,
                        "key": "Abstract_property_0_in_class_1_cannot_be_accessed_in_the_constructor_2715",
                        "message": "Abstract property '{0}' in class '{1}' cannot be accessed in the constructor."
                    },
                    "Type_parameter_0_has_a_circular_default": {
                        "code": 2716,
                        "category": 1,
                        "key": "Type_parameter_0_has_a_circular_default_2716",
                        "message": "Type parameter '{0}' has a circular default."
                    },
                    "Subsequent_property_declarations_must_have_the_same_type_Property_0_must_be_of_type_1_but_here_has_type_2": {
                        "code": 2717,
                        "category": 1,
                        "key": "Subsequent_property_declarations_must_have_the_same_type_Property_0_must_be_of_type_1_but_here_has_t_2717",
                        "message": "Subsequent property declarations must have the same type.  Property '{0}' must be of type '{1}', but here has type '{2}'."
                    },
                    "Duplicate_property_0": {
                        "code": 2718,
                        "category": 1,
                        "key": "Duplicate_property_0_2718",
                        "message": "Duplicate property '{0}'."
                    },
                    "Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated": {
                        "code": 2719,
                        "category": 1,
                        "key": "Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated_2719",
                        "message": "Type '{0}' is not assignable to type '{1}'. Two different types with this name exist, but they are unrelated."
                    },
                    "Class_0_incorrectly_implements_class_1_Did_you_mean_to_extend_1_and_inherit_its_members_as_a_subclass": {
                        "code": 2720,
                        "category": 1,
                        "key": "Class_0_incorrectly_implements_class_1_Did_you_mean_to_extend_1_and_inherit_its_members_as_a_subclas_2720",
                        "message": "Class '{0}' incorrectly implements class '{1}'. Did you mean to extend '{1}' and inherit its members as a subclass?"
                    },
                    "Cannot_invoke_an_object_which_is_possibly_null": {
                        "code": 2721,
                        "category": 1,
                        "key": "Cannot_invoke_an_object_which_is_possibly_null_2721",
                        "message": "Cannot invoke an object which is possibly 'null'."
                    },
                    "Cannot_invoke_an_object_which_is_possibly_undefined": {
                        "code": 2722,
                        "category": 1,
                        "key": "Cannot_invoke_an_object_which_is_possibly_undefined_2722",
                        "message": "Cannot invoke an object which is possibly 'undefined'."
                    },
                    "Cannot_invoke_an_object_which_is_possibly_null_or_undefined": {
                        "code": 2723,
                        "category": 1,
                        "key": "Cannot_invoke_an_object_which_is_possibly_null_or_undefined_2723",
                        "message": "Cannot invoke an object which is possibly 'null' or 'undefined'."
                    },
                    "Module_0_has_no_exported_member_1_Did_you_mean_2": {
                        "code": 2724,
                        "category": 1,
                        "key": "Module_0_has_no_exported_member_1_Did_you_mean_2_2724",
                        "message": "Module '{0}' has no exported member '{1}'. Did you mean '{2}'?"
                    },
                    "Class_name_cannot_be_Object_when_targeting_ES5_with_module_0": {
                        "code": 2725,
                        "category": 1,
                        "key": "Class_name_cannot_be_Object_when_targeting_ES5_with_module_0_2725",
                        "message": "Class name cannot be 'Object' when targeting ES5 with module {0}."
                    },
                    "Cannot_find_lib_definition_for_0": {
                        "code": 2726,
                        "category": 1,
                        "key": "Cannot_find_lib_definition_for_0_2726",
                        "message": "Cannot find lib definition for '{0}'."
                    },
                    "Cannot_find_lib_definition_for_0_Did_you_mean_1": {
                        "code": 2727,
                        "category": 1,
                        "key": "Cannot_find_lib_definition_for_0_Did_you_mean_1_2727",
                        "message": "Cannot find lib definition for '{0}'. Did you mean '{1}'?"
                    },
                    "_0_is_declared_here": {
                        "code": 2728,
                        "category": 3,
                        "key": "_0_is_declared_here_2728",
                        "message": "'{0}' is declared here."
                    },
                    "Property_0_is_used_before_its_initialization": {
                        "code": 2729,
                        "category": 1,
                        "key": "Property_0_is_used_before_its_initialization_2729",
                        "message": "Property '{0}' is used before its initialization."
                    },
                    "An_arrow_function_cannot_have_a_this_parameter": {
                        "code": 2730,
                        "category": 1,
                        "key": "An_arrow_function_cannot_have_a_this_parameter_2730",
                        "message": "An arrow function cannot have a 'this' parameter."
                    },
                    "Implicit_conversion_of_a_symbol_to_a_string_will_fail_at_runtime_Consider_wrapping_this_expression_in_String": {
                        "code": 2731,
                        "category": 1,
                        "key": "Implicit_conversion_of_a_symbol_to_a_string_will_fail_at_runtime_Consider_wrapping_this_expression_i_2731",
                        "message": "Implicit conversion of a 'symbol' to a 'string' will fail at runtime. Consider wrapping this expression in 'String(...)'."
                    },
                    "Cannot_find_module_0_Consider_using_resolveJsonModule_to_import_module_with_json_extension": {
                        "code": 2732,
                        "category": 1,
                        "key": "Cannot_find_module_0_Consider_using_resolveJsonModule_to_import_module_with_json_extension_2732",
                        "message": "Cannot find module '{0}'. Consider using '--resolveJsonModule' to import module with '.json' extension"
                    },
                    "Property_0_was_also_declared_here": {
                        "code": 2733,
                        "category": 1,
                        "key": "Property_0_was_also_declared_here_2733",
                        "message": "Property '{0}' was also declared here."
                    },
                    "It_is_highly_likely_that_you_are_missing_a_semicolon": {
                        "code": 2734,
                        "category": 1,
                        "key": "It_is_highly_likely_that_you_are_missing_a_semicolon_2734",
                        "message": "It is highly likely that you are missing a semicolon."
                    },
                    "Did_you_mean_for_0_to_be_constrained_to_type_new_args_Colon_any_1": {
                        "code": 2735,
                        "category": 1,
                        "key": "Did_you_mean_for_0_to_be_constrained_to_type_new_args_Colon_any_1_2735",
                        "message": "Did you mean for '{0}' to be constrained to type 'new (...args: any[]) => {1}'?"
                    },
                    "Operator_0_cannot_be_applied_to_type_1": {
                        "code": 2736,
                        "category": 1,
                        "key": "Operator_0_cannot_be_applied_to_type_1_2736",
                        "message": "Operator '{0}' cannot be applied to type '{1}'."
                    },
                    "BigInt_literals_are_not_available_when_targeting_lower_than_ESNext": {
                        "code": 2737,
                        "category": 1,
                        "key": "BigInt_literals_are_not_available_when_targeting_lower_than_ESNext_2737",
                        "message": "BigInt literals are not available when targeting lower than ESNext."
                    },
                    "An_outer_value_of_this_is_shadowed_by_this_container": {
                        "code": 2738,
                        "category": 3,
                        "key": "An_outer_value_of_this_is_shadowed_by_this_container_2738",
                        "message": "An outer value of 'this' is shadowed by this container."
                    },
                    "Type_0_is_missing_the_following_properties_from_type_1_Colon_2": {
                        "code": 2739,
                        "category": 1,
                        "key": "Type_0_is_missing_the_following_properties_from_type_1_Colon_2_2739",
                        "message": "Type '{0}' is missing the following properties from type '{1}': {2}"
                    },
                    "Type_0_is_missing_the_following_properties_from_type_1_Colon_2_and_3_more": {
                        "code": 2740,
                        "category": 1,
                        "key": "Type_0_is_missing_the_following_properties_from_type_1_Colon_2_and_3_more_2740",
                        "message": "Type '{0}' is missing the following properties from type '{1}': {2}, and {3} more."
                    },
                    "Property_0_is_missing_in_type_1_but_required_in_type_2": {
                        "code": 2741,
                        "category": 1,
                        "key": "Property_0_is_missing_in_type_1_but_required_in_type_2_2741",
                        "message": "Property '{0}' is missing in type '{1}' but required in type '{2}'."
                    },
                    "The_inferred_type_of_0_cannot_be_named_without_a_reference_to_1_This_is_likely_not_portable_A_type_annotation_is_necessary": {
                        "code": 2742,
                        "category": 1,
                        "key": "The_inferred_type_of_0_cannot_be_named_without_a_reference_to_1_This_is_likely_not_portable_A_type_a_2742",
                        "message": "The inferred type of '{0}' cannot be named without a reference to '{1}'. This is likely not portable. A type annotation is necessary."
                    },
                    "No_overload_expects_0_type_arguments_but_overloads_do_exist_that_expect_either_1_or_2_type_arguments": {
                        "code": 2743,
                        "category": 1,
                        "key": "No_overload_expects_0_type_arguments_but_overloads_do_exist_that_expect_either_1_or_2_type_arguments_2743",
                        "message": "No overload expects {0} type arguments, but overloads do exist that expect either {1} or {2} type arguments."
                    },
                    "Type_parameter_defaults_can_only_reference_previously_declared_type_parameters": {
                        "code": 2744,
                        "category": 1,
                        "key": "Type_parameter_defaults_can_only_reference_previously_declared_type_parameters_2744",
                        "message": "Type parameter defaults can only reference previously declared type parameters."
                    },
                    "This_JSX_tag_s_0_prop_expects_type_1_which_requires_multiple_children_but_only_a_single_child_was_provided": {
                        "code": 2745,
                        "category": 1,
                        "key": "This_JSX_tag_s_0_prop_expects_type_1_which_requires_multiple_children_but_only_a_single_child_was_pr_2745",
                        "message": "This JSX tag's '{0}' prop expects type '{1}' which requires multiple children, but only a single child was provided."
                    },
                    "This_JSX_tag_s_0_prop_expects_a_single_child_of_type_1_but_multiple_children_were_provided": {
                        "code": 2746,
                        "category": 1,
                        "key": "This_JSX_tag_s_0_prop_expects_a_single_child_of_type_1_but_multiple_children_were_provided_2746",
                        "message": "This JSX tag's '{0}' prop expects a single child of type '{1}', but multiple children were provided."
                    },
                    "_0_components_don_t_accept_text_as_child_elements_Text_in_JSX_has_the_type_string_but_the_expected_type_of_1_is_2": {
                        "code": 2747,
                        "category": 1,
                        "key": "_0_components_don_t_accept_text_as_child_elements_Text_in_JSX_has_the_type_string_but_the_expected_t_2747",
                        "message": "'{0}' components don't accept text as child elements. Text in JSX has the type 'string', but the expected type of '{1}' is '{2}'."
                    },
                    "Cannot_access_ambient_const_enums_when_the_isolatedModules_flag_is_provided": {
                        "code": 2748,
                        "category": 1,
                        "key": "Cannot_access_ambient_const_enums_when_the_isolatedModules_flag_is_provided_2748",
                        "message": "Cannot access ambient const enums when the '--isolatedModules' flag is provided."
                    },
                    "_0_refers_to_a_value_but_is_being_used_as_a_type_here": {
                        "code": 2749,
                        "category": 1,
                        "key": "_0_refers_to_a_value_but_is_being_used_as_a_type_here_2749",
                        "message": "'{0}' refers to a value, but is being used as a type here."
                    },
                    "The_implementation_signature_is_declared_here": {
                        "code": 2750,
                        "category": 1,
                        "key": "The_implementation_signature_is_declared_here_2750",
                        "message": "The implementation signature is declared here."
                    },
                    "Circularity_originates_in_type_at_this_location": {
                        "code": 2751,
                        "category": 1,
                        "key": "Circularity_originates_in_type_at_this_location_2751",
                        "message": "Circularity originates in type at this location."
                    },
                    "The_first_export_default_is_here": {
                        "code": 2752,
                        "category": 1,
                        "key": "The_first_export_default_is_here_2752",
                        "message": "The first export default is here."
                    },
                    "Another_export_default_is_here": {
                        "code": 2753,
                        "category": 1,
                        "key": "Another_export_default_is_here_2753",
                        "message": "Another export default is here."
                    },
                    "super_may_not_use_type_arguments": {
                        "code": 2754,
                        "category": 1,
                        "key": "super_may_not_use_type_arguments_2754",
                        "message": "'super' may not use type arguments."
                    },
                    "No_constituent_of_type_0_is_callable": {
                        "code": 2755,
                        "category": 1,
                        "key": "No_constituent_of_type_0_is_callable_2755",
                        "message": "No constituent of type '{0}' is callable."
                    },
                    "Not_all_constituents_of_type_0_are_callable": {
                        "code": 2756,
                        "category": 1,
                        "key": "Not_all_constituents_of_type_0_are_callable_2756",
                        "message": "Not all constituents of type '{0}' are callable."
                    },
                    "Type_0_has_no_call_signatures": {
                        "code": 2757,
                        "category": 1,
                        "key": "Type_0_has_no_call_signatures_2757",
                        "message": "Type '{0}' has no call signatures."
                    },
                    "Each_member_of_the_union_type_0_has_signatures_but_none_of_those_signatures_are_compatible_with_each_other": {
                        "code": 2758,
                        "category": 1,
                        "key": "Each_member_of_the_union_type_0_has_signatures_but_none_of_those_signatures_are_compatible_with_each_2758",
                        "message": "Each member of the union type '{0}' has signatures, but none of those signatures are compatible with each other."
                    },
                    "No_constituent_of_type_0_is_constructable": {
                        "code": 2759,
                        "category": 1,
                        "key": "No_constituent_of_type_0_is_constructable_2759",
                        "message": "No constituent of type '{0}' is constructable."
                    },
                    "Not_all_constituents_of_type_0_are_constructable": {
                        "code": 2760,
                        "category": 1,
                        "key": "Not_all_constituents_of_type_0_are_constructable_2760",
                        "message": "Not all constituents of type '{0}' are constructable."
                    },
                    "Type_0_has_no_construct_signatures": {
                        "code": 2761,
                        "category": 1,
                        "key": "Type_0_has_no_construct_signatures_2761",
                        "message": "Type '{0}' has no construct signatures."
                    },
                    "Each_member_of_the_union_type_0_has_construct_signatures_but_none_of_those_signatures_are_compatible_with_each_other": {
                        "code": 2762,
                        "category": 1,
                        "key": "Each_member_of_the_union_type_0_has_construct_signatures_but_none_of_those_signatures_are_compatible_2762",
                        "message": "Each member of the union type '{0}' has construct signatures, but none of those signatures are compatible with each other."
                    },
                    "Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_for_of_will_always_send_0": {
                        "code": 2763,
                        "category": 1,
                        "key": "Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_for_of_will_always_s_2763",
                        "message": "Cannot iterate value because the 'next' method of its iterator expects type '{1}', but for-of will always send '{0}'."
                    },
                    "Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_spread_will_always_send_0": {
                        "code": 2764,
                        "category": 1,
                        "key": "Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_spread_will_al_2764",
                        "message": "Cannot iterate value because the 'next' method of its iterator expects type '{1}', but array spread will always send '{0}'."
                    },
                    "Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_destructuring_will_always_send_0": {
                        "code": 2765,
                        "category": 1,
                        "key": "Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_destructuring__2765",
                        "message": "Cannot iterate value because the 'next' method of its iterator expects type '{1}', but array destructuring will always send '{0}'."
                    },
                    "Cannot_delegate_iteration_to_value_because_the_next_method_of_its_iterator_expects_type_1_but_the_containing_generator_will_always_send_0": {
                        "code": 2766,
                        "category": 1,
                        "key": "Cannot_delegate_iteration_to_value_because_the_next_method_of_its_iterator_expects_type_1_but_the_co_2766",
                        "message": "Cannot delegate iteration to value because the 'next' method of its iterator expects type '{1}', but the containing generator will always send '{0}'."
                    },
                    "The_0_property_of_an_iterator_must_be_a_method": {
                        "code": 2767,
                        "category": 1,
                        "key": "The_0_property_of_an_iterator_must_be_a_method_2767",
                        "message": "The '{0}' property of an iterator must be a method."
                    },
                    "The_0_property_of_an_async_iterator_must_be_a_method": {
                        "code": 2768,
                        "category": 1,
                        "key": "The_0_property_of_an_async_iterator_must_be_a_method_2768",
                        "message": "The '{0}' property of an async iterator must be a method."
                    },
                    "No_overload_matches_this_call": {
                        "code": 2769,
                        "category": 1,
                        "key": "No_overload_matches_this_call_2769",
                        "message": "No overload matches this call."
                    },
                    "The_last_overload_gave_the_following_error": {
                        "code": 2770,
                        "category": 1,
                        "key": "The_last_overload_gave_the_following_error_2770",
                        "message": "The last overload gave the following error."
                    },
                    "The_last_overload_is_declared_here": {
                        "code": 2771,
                        "category": 1,
                        "key": "The_last_overload_is_declared_here_2771",
                        "message": "The last overload is declared here."
                    },
                    "Overload_0_of_1_2_gave_the_following_error": {
                        "code": 2772,
                        "category": 1,
                        "key": "Overload_0_of_1_2_gave_the_following_error_2772",
                        "message": "Overload {0} of {1}, '{2}', gave the following error."
                    },
                    "Did_you_forget_to_use_await": {
                        "code": 2773,
                        "category": 1,
                        "key": "Did_you_forget_to_use_await_2773",
                        "message": "Did you forget to use 'await'?"
                    },
                    "This_condition_will_always_return_true_since_the_function_is_always_defined_Did_you_mean_to_call_it_instead": {
                        "code": 2774,
                        "category": 1,
                        "key": "This_condition_will_always_return_true_since_the_function_is_always_defined_Did_you_mean_to_call_it__2774",
                        "message": "This condition will always return true since the function is always defined. Did you mean to call it instead?"
                    },
                    "Assertions_require_every_name_in_the_call_target_to_be_declared_with_an_explicit_type_annotation": {
                        "code": 2775,
                        "category": 1,
                        "key": "Assertions_require_every_name_in_the_call_target_to_be_declared_with_an_explicit_type_annotation_2775",
                        "message": "Assertions require every name in the call target to be declared with an explicit type annotation."
                    },
                    "Assertions_require_the_call_target_to_be_an_identifier_or_qualified_name": {
                        "code": 2776,
                        "category": 1,
                        "key": "Assertions_require_the_call_target_to_be_an_identifier_or_qualified_name_2776",
                        "message": "Assertions require the call target to be an identifier or qualified name."
                    },
                    "The_operand_of_an_increment_or_decrement_operator_may_not_be_an_optional_property_access": {
                        "code": 2777,
                        "category": 1,
                        "key": "The_operand_of_an_increment_or_decrement_operator_may_not_be_an_optional_property_access_2777",
                        "message": "The operand of an increment or decrement operator may not be an optional property access."
                    },
                    "The_target_of_an_object_rest_assignment_may_not_be_an_optional_property_access": {
                        "code": 2778,
                        "category": 1,
                        "key": "The_target_of_an_object_rest_assignment_may_not_be_an_optional_property_access_2778",
                        "message": "The target of an object rest assignment may not be an optional property access."
                    },
                    "The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access": {
                        "code": 2779,
                        "category": 1,
                        "key": "The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access_2779",
                        "message": "The left-hand side of an assignment expression may not be an optional property access."
                    },
                    "The_left_hand_side_of_a_for_in_statement_may_not_be_an_optional_property_access": {
                        "code": 2780,
                        "category": 1,
                        "key": "The_left_hand_side_of_a_for_in_statement_may_not_be_an_optional_property_access_2780",
                        "message": "The left-hand side of a 'for...in' statement may not be an optional property access."
                    },
                    "The_left_hand_side_of_a_for_of_statement_may_not_be_an_optional_property_access": {
                        "code": 2781,
                        "category": 1,
                        "key": "The_left_hand_side_of_a_for_of_statement_may_not_be_an_optional_property_access_2781",
                        "message": "The left-hand side of a 'for...of' statement may not be an optional property access."
                    },
                    "Import_declaration_0_is_using_private_name_1": {
                        "code": 4000,
                        "category": 1,
                        "key": "Import_declaration_0_is_using_private_name_1_4000",
                        "message": "Import declaration '{0}' is using private name '{1}'."
                    },
                    "Type_parameter_0_of_exported_class_has_or_is_using_private_name_1": {
                        "code": 4002,
                        "category": 1,
                        "key": "Type_parameter_0_of_exported_class_has_or_is_using_private_name_1_4002",
                        "message": "Type parameter '{0}' of exported class has or is using private name '{1}'."
                    },
                    "Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1": {
                        "code": 4004,
                        "category": 1,
                        "key": "Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1_4004",
                        "message": "Type parameter '{0}' of exported interface has or is using private name '{1}'."
                    },
                    "Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1": {
                        "code": 4006,
                        "category": 1,
                        "key": "Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1_4006",
                        "message": "Type parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'."
                    },
                    "Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1": {
                        "code": 4008,
                        "category": 1,
                        "key": "Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1_4008",
                        "message": "Type parameter '{0}' of call signature from exported interface has or is using private name '{1}'."
                    },
                    "Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1": {
                        "code": 4010,
                        "category": 1,
                        "key": "Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1_4010",
                        "message": "Type parameter '{0}' of public static method from exported class has or is using private name '{1}'."
                    },
                    "Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1": {
                        "code": 4012,
                        "category": 1,
                        "key": "Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1_4012",
                        "message": "Type parameter '{0}' of public method from exported class has or is using private name '{1}'."
                    },
                    "Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1": {
                        "code": 4014,
                        "category": 1,
                        "key": "Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1_4014",
                        "message": "Type parameter '{0}' of method from exported interface has or is using private name '{1}'."
                    },
                    "Type_parameter_0_of_exported_function_has_or_is_using_private_name_1": {
                        "code": 4016,
                        "category": 1,
                        "key": "Type_parameter_0_of_exported_function_has_or_is_using_private_name_1_4016",
                        "message": "Type parameter '{0}' of exported function has or is using private name '{1}'."
                    },
                    "Implements_clause_of_exported_class_0_has_or_is_using_private_name_1": {
                        "code": 4019,
                        "category": 1,
                        "key": "Implements_clause_of_exported_class_0_has_or_is_using_private_name_1_4019",
                        "message": "Implements clause of exported class '{0}' has or is using private name '{1}'."
                    },
                    "extends_clause_of_exported_class_0_has_or_is_using_private_name_1": {
                        "code": 4020,
                        "category": 1,
                        "key": "extends_clause_of_exported_class_0_has_or_is_using_private_name_1_4020",
                        "message": "'extends' clause of exported class '{0}' has or is using private name '{1}'."
                    },
                    "extends_clause_of_exported_interface_0_has_or_is_using_private_name_1": {
                        "code": 4022,
                        "category": 1,
                        "key": "extends_clause_of_exported_interface_0_has_or_is_using_private_name_1_4022",
                        "message": "'extends' clause of exported interface '{0}' has or is using private name '{1}'."
                    },
                    "Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4023,
                        "category": 1,
                        "key": "Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4023",
                        "message": "Exported variable '{0}' has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Exported_variable_0_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4024,
                        "category": 1,
                        "key": "Exported_variable_0_has_or_is_using_name_1_from_private_module_2_4024",
                        "message": "Exported variable '{0}' has or is using name '{1}' from private module '{2}'."
                    },
                    "Exported_variable_0_has_or_is_using_private_name_1": {
                        "code": 4025,
                        "category": 1,
                        "key": "Exported_variable_0_has_or_is_using_private_name_1_4025",
                        "message": "Exported variable '{0}' has or is using private name '{1}'."
                    },
                    "Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4026,
                        "category": 1,
                        "key": "Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot__4026",
                        "message": "Public static property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4027,
                        "category": 1,
                        "key": "Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4027",
                        "message": "Public static property '{0}' of exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Public_static_property_0_of_exported_class_has_or_is_using_private_name_1": {
                        "code": 4028,
                        "category": 1,
                        "key": "Public_static_property_0_of_exported_class_has_or_is_using_private_name_1_4028",
                        "message": "Public static property '{0}' of exported class has or is using private name '{1}'."
                    },
                    "Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4029,
                        "category": 1,
                        "key": "Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_name_4029",
                        "message": "Public property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4030,
                        "category": 1,
                        "key": "Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4030",
                        "message": "Public property '{0}' of exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Public_property_0_of_exported_class_has_or_is_using_private_name_1": {
                        "code": 4031,
                        "category": 1,
                        "key": "Public_property_0_of_exported_class_has_or_is_using_private_name_1_4031",
                        "message": "Public property '{0}' of exported class has or is using private name '{1}'."
                    },
                    "Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4032,
                        "category": 1,
                        "key": "Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2_4032",
                        "message": "Property '{0}' of exported interface has or is using name '{1}' from private module '{2}'."
                    },
                    "Property_0_of_exported_interface_has_or_is_using_private_name_1": {
                        "code": 4033,
                        "category": 1,
                        "key": "Property_0_of_exported_interface_has_or_is_using_private_name_1_4033",
                        "message": "Property '{0}' of exported interface has or is using private name '{1}'."
                    },
                    "Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4034,
                        "category": 1,
                        "key": "Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_name_1_from_private_mod_4034",
                        "message": "Parameter type of public static setter '{0}' from exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_private_name_1": {
                        "code": 4035,
                        "category": 1,
                        "key": "Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_private_name_1_4035",
                        "message": "Parameter type of public static setter '{0}' from exported class has or is using private name '{1}'."
                    },
                    "Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4036,
                        "category": 1,
                        "key": "Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2_4036",
                        "message": "Parameter type of public setter '{0}' from exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_private_name_1": {
                        "code": 4037,
                        "category": 1,
                        "key": "Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_private_name_1_4037",
                        "message": "Parameter type of public setter '{0}' from exported class has or is using private name '{1}'."
                    },
                    "Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4038,
                        "category": 1,
                        "key": "Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_external_modul_4038",
                        "message": "Return type of public static getter '{0}' from exported class has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4039,
                        "category": 1,
                        "key": "Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_4039",
                        "message": "Return type of public static getter '{0}' from exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_private_name_1": {
                        "code": 4040,
                        "category": 1,
                        "key": "Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_private_name_1_4040",
                        "message": "Return type of public static getter '{0}' from exported class has or is using private name '{1}'."
                    },
                    "Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4041,
                        "category": 1,
                        "key": "Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_4041",
                        "message": "Return type of public getter '{0}' from exported class has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4042,
                        "category": 1,
                        "key": "Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2_4042",
                        "message": "Return type of public getter '{0}' from exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Return_type_of_public_getter_0_from_exported_class_has_or_is_using_private_name_1": {
                        "code": 4043,
                        "category": 1,
                        "key": "Return_type_of_public_getter_0_from_exported_class_has_or_is_using_private_name_1_4043",
                        "message": "Return type of public getter '{0}' from exported class has or is using private name '{1}'."
                    },
                    "Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1": {
                        "code": 4044,
                        "category": 1,
                        "key": "Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_mod_4044",
                        "message": "Return type of constructor signature from exported interface has or is using name '{0}' from private module '{1}'."
                    },
                    "Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0": {
                        "code": 4045,
                        "category": 1,
                        "key": "Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0_4045",
                        "message": "Return type of constructor signature from exported interface has or is using private name '{0}'."
                    },
                    "Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1": {
                        "code": 4046,
                        "category": 1,
                        "key": "Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4046",
                        "message": "Return type of call signature from exported interface has or is using name '{0}' from private module '{1}'."
                    },
                    "Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0": {
                        "code": 4047,
                        "category": 1,
                        "key": "Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0_4047",
                        "message": "Return type of call signature from exported interface has or is using private name '{0}'."
                    },
                    "Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1": {
                        "code": 4048,
                        "category": 1,
                        "key": "Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4048",
                        "message": "Return type of index signature from exported interface has or is using name '{0}' from private module '{1}'."
                    },
                    "Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0": {
                        "code": 4049,
                        "category": 1,
                        "key": "Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0_4049",
                        "message": "Return type of index signature from exported interface has or is using private name '{0}'."
                    },
                    "Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named": {
                        "code": 4050,
                        "category": 1,
                        "key": "Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module__4050",
                        "message": "Return type of public static method from exported class has or is using name '{0}' from external module {1} but cannot be named."
                    },
                    "Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1": {
                        "code": 4051,
                        "category": 1,
                        "key": "Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1_4051",
                        "message": "Return type of public static method from exported class has or is using name '{0}' from private module '{1}'."
                    },
                    "Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0": {
                        "code": 4052,
                        "category": 1,
                        "key": "Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0_4052",
                        "message": "Return type of public static method from exported class has or is using private name '{0}'."
                    },
                    "Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named": {
                        "code": 4053,
                        "category": 1,
                        "key": "Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_c_4053",
                        "message": "Return type of public method from exported class has or is using name '{0}' from external module {1} but cannot be named."
                    },
                    "Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1": {
                        "code": 4054,
                        "category": 1,
                        "key": "Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1_4054",
                        "message": "Return type of public method from exported class has or is using name '{0}' from private module '{1}'."
                    },
                    "Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0": {
                        "code": 4055,
                        "category": 1,
                        "key": "Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0_4055",
                        "message": "Return type of public method from exported class has or is using private name '{0}'."
                    },
                    "Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1": {
                        "code": 4056,
                        "category": 1,
                        "key": "Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4056",
                        "message": "Return type of method from exported interface has or is using name '{0}' from private module '{1}'."
                    },
                    "Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0": {
                        "code": 4057,
                        "category": 1,
                        "key": "Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0_4057",
                        "message": "Return type of method from exported interface has or is using private name '{0}'."
                    },
                    "Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named": {
                        "code": 4058,
                        "category": 1,
                        "key": "Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named_4058",
                        "message": "Return type of exported function has or is using name '{0}' from external module {1} but cannot be named."
                    },
                    "Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1": {
                        "code": 4059,
                        "category": 1,
                        "key": "Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1_4059",
                        "message": "Return type of exported function has or is using name '{0}' from private module '{1}'."
                    },
                    "Return_type_of_exported_function_has_or_is_using_private_name_0": {
                        "code": 4060,
                        "category": 1,
                        "key": "Return_type_of_exported_function_has_or_is_using_private_name_0_4060",
                        "message": "Return type of exported function has or is using private name '{0}'."
                    },
                    "Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4061,
                        "category": 1,
                        "key": "Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_can_4061",
                        "message": "Parameter '{0}' of constructor from exported class has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4062,
                        "category": 1,
                        "key": "Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2_4062",
                        "message": "Parameter '{0}' of constructor from exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1": {
                        "code": 4063,
                        "category": 1,
                        "key": "Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1_4063",
                        "message": "Parameter '{0}' of constructor from exported class has or is using private name '{1}'."
                    },
                    "Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4064,
                        "category": 1,
                        "key": "Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_mod_4064",
                        "message": "Parameter '{0}' of constructor signature from exported interface has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1": {
                        "code": 4065,
                        "category": 1,
                        "key": "Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1_4065",
                        "message": "Parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'."
                    },
                    "Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4066,
                        "category": 1,
                        "key": "Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2_4066",
                        "message": "Parameter '{0}' of call signature from exported interface has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1": {
                        "code": 4067,
                        "category": 1,
                        "key": "Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1_4067",
                        "message": "Parameter '{0}' of call signature from exported interface has or is using private name '{1}'."
                    },
                    "Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4068,
                        "category": 1,
                        "key": "Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module__4068",
                        "message": "Parameter '{0}' of public static method from exported class has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4069,
                        "category": 1,
                        "key": "Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2_4069",
                        "message": "Parameter '{0}' of public static method from exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1": {
                        "code": 4070,
                        "category": 1,
                        "key": "Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1_4070",
                        "message": "Parameter '{0}' of public static method from exported class has or is using private name '{1}'."
                    },
                    "Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4071,
                        "category": 1,
                        "key": "Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_c_4071",
                        "message": "Parameter '{0}' of public method from exported class has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4072,
                        "category": 1,
                        "key": "Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2_4072",
                        "message": "Parameter '{0}' of public method from exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1": {
                        "code": 4073,
                        "category": 1,
                        "key": "Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1_4073",
                        "message": "Parameter '{0}' of public method from exported class has or is using private name '{1}'."
                    },
                    "Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4074,
                        "category": 1,
                        "key": "Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2_4074",
                        "message": "Parameter '{0}' of method from exported interface has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1": {
                        "code": 4075,
                        "category": 1,
                        "key": "Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1_4075",
                        "message": "Parameter '{0}' of method from exported interface has or is using private name '{1}'."
                    },
                    "Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4076,
                        "category": 1,
                        "key": "Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4076",
                        "message": "Parameter '{0}' of exported function has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4077,
                        "category": 1,
                        "key": "Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2_4077",
                        "message": "Parameter '{0}' of exported function has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_0_of_exported_function_has_or_is_using_private_name_1": {
                        "code": 4078,
                        "category": 1,
                        "key": "Parameter_0_of_exported_function_has_or_is_using_private_name_1_4078",
                        "message": "Parameter '{0}' of exported function has or is using private name '{1}'."
                    },
                    "Exported_type_alias_0_has_or_is_using_private_name_1": {
                        "code": 4081,
                        "category": 1,
                        "key": "Exported_type_alias_0_has_or_is_using_private_name_1_4081",
                        "message": "Exported type alias '{0}' has or is using private name '{1}'."
                    },
                    "Default_export_of_the_module_has_or_is_using_private_name_0": {
                        "code": 4082,
                        "category": 1,
                        "key": "Default_export_of_the_module_has_or_is_using_private_name_0_4082",
                        "message": "Default export of the module has or is using private name '{0}'."
                    },
                    "Type_parameter_0_of_exported_type_alias_has_or_is_using_private_name_1": {
                        "code": 4083,
                        "category": 1,
                        "key": "Type_parameter_0_of_exported_type_alias_has_or_is_using_private_name_1_4083",
                        "message": "Type parameter '{0}' of exported type alias has or is using private name '{1}'."
                    },
                    "Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_library_to_resolve_the_conflict": {
                        "code": 4090,
                        "category": 1,
                        "key": "Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_librar_4090",
                        "message": "Conflicting definitions for '{0}' found at '{1}' and '{2}'. Consider installing a specific version of this library to resolve the conflict."
                    },
                    "Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4091,
                        "category": 1,
                        "key": "Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2_4091",
                        "message": "Parameter '{0}' of index signature from exported interface has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_private_name_1": {
                        "code": 4092,
                        "category": 1,
                        "key": "Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_private_name_1_4092",
                        "message": "Parameter '{0}' of index signature from exported interface has or is using private name '{1}'."
                    },
                    "Property_0_of_exported_class_expression_may_not_be_private_or_protected": {
                        "code": 4094,
                        "category": 1,
                        "key": "Property_0_of_exported_class_expression_may_not_be_private_or_protected_4094",
                        "message": "Property '{0}' of exported class expression may not be private or protected."
                    },
                    "Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4095,
                        "category": 1,
                        "key": "Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_4095",
                        "message": "Public static method '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4096,
                        "category": 1,
                        "key": "Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4096",
                        "message": "Public static method '{0}' of exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Public_static_method_0_of_exported_class_has_or_is_using_private_name_1": {
                        "code": 4097,
                        "category": 1,
                        "key": "Public_static_method_0_of_exported_class_has_or_is_using_private_name_1_4097",
                        "message": "Public static method '{0}' of exported class has or is using private name '{1}'."
                    },
                    "Public_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4098,
                        "category": 1,
                        "key": "Public_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4098",
                        "message": "Public method '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."
                    },
                    "Public_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4099,
                        "category": 1,
                        "key": "Public_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4099",
                        "message": "Public method '{0}' of exported class has or is using name '{1}' from private module '{2}'."
                    },
                    "Public_method_0_of_exported_class_has_or_is_using_private_name_1": {
                        "code": 4100,
                        "category": 1,
                        "key": "Public_method_0_of_exported_class_has_or_is_using_private_name_1_4100",
                        "message": "Public method '{0}' of exported class has or is using private name '{1}'."
                    },
                    "Method_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4101,
                        "category": 1,
                        "key": "Method_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2_4101",
                        "message": "Method '{0}' of exported interface has or is using name '{1}' from private module '{2}'."
                    },
                    "Method_0_of_exported_interface_has_or_is_using_private_name_1": {
                        "code": 4102,
                        "category": 1,
                        "key": "Method_0_of_exported_interface_has_or_is_using_private_name_1_4102",
                        "message": "Method '{0}' of exported interface has or is using private name '{1}'."
                    },
                    "Type_parameter_0_of_exported_mapped_object_type_is_using_private_name_1": {
                        "code": 4103,
                        "category": 1,
                        "key": "Type_parameter_0_of_exported_mapped_object_type_is_using_private_name_1_4103",
                        "message": "Type parameter '{0}' of exported mapped object type is using private name '{1}'."
                    },
                    "The_type_0_is_readonly_and_cannot_be_assigned_to_the_mutable_type_1": {
                        "code": 4104,
                        "category": 1,
                        "key": "The_type_0_is_readonly_and_cannot_be_assigned_to_the_mutable_type_1_4104",
                        "message": "The type '{0}' is 'readonly' and cannot be assigned to the mutable type '{1}'."
                    },
                    "Private_or_protected_member_0_cannot_be_accessed_on_a_type_parameter": {
                        "code": 4105,
                        "category": 1,
                        "key": "Private_or_protected_member_0_cannot_be_accessed_on_a_type_parameter_4105",
                        "message": "Private or protected member '{0}' cannot be accessed on a type parameter."
                    },
                    "Parameter_0_of_accessor_has_or_is_using_private_name_1": {
                        "code": 4106,
                        "category": 1,
                        "key": "Parameter_0_of_accessor_has_or_is_using_private_name_1_4106",
                        "message": "Parameter '{0}' of accessor has or is using private name '{1}'."
                    },
                    "Parameter_0_of_accessor_has_or_is_using_name_1_from_private_module_2": {
                        "code": 4107,
                        "category": 1,
                        "key": "Parameter_0_of_accessor_has_or_is_using_name_1_from_private_module_2_4107",
                        "message": "Parameter '{0}' of accessor has or is using name '{1}' from private module '{2}'."
                    },
                    "Parameter_0_of_accessor_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named": {
                        "code": 4108,
                        "category": 1,
                        "key": "Parameter_0_of_accessor_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4108",
                        "message": "Parameter '{0}' of accessor has or is using name '{1}' from external module '{2}' but cannot be named."
                    },
                    "Type_arguments_for_0_circularly_reference_themselves": {
                        "code": 4109,
                        "category": 1,
                        "key": "Type_arguments_for_0_circularly_reference_themselves_4109",
                        "message": "Type arguments for '{0}' circularly reference themselves."
                    },
                    "Tuple_type_arguments_circularly_reference_themselves": {
                        "code": 4110,
                        "category": 1,
                        "key": "Tuple_type_arguments_circularly_reference_themselves_4110",
                        "message": "Tuple type arguments circularly reference themselves."
                    },
                    "The_current_host_does_not_support_the_0_option": {
                        "code": 5001,
                        "category": 1,
                        "key": "The_current_host_does_not_support_the_0_option_5001",
                        "message": "The current host does not support the '{0}' option."
                    },
                    "Cannot_find_the_common_subdirectory_path_for_the_input_files": {
                        "code": 5009,
                        "category": 1,
                        "key": "Cannot_find_the_common_subdirectory_path_for_the_input_files_5009",
                        "message": "Cannot find the common subdirectory path for the input files."
                    },
                    "File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0": {
                        "code": 5010,
                        "category": 1,
                        "key": "File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0_5010",
                        "message": "File specification cannot end in a recursive directory wildcard ('**'): '{0}'."
                    },
                    "Cannot_read_file_0_Colon_1": {
                        "code": 5012,
                        "category": 1,
                        "key": "Cannot_read_file_0_Colon_1_5012",
                        "message": "Cannot read file '{0}': {1}."
                    },
                    "Failed_to_parse_file_0_Colon_1": {
                        "code": 5014,
                        "category": 1,
                        "key": "Failed_to_parse_file_0_Colon_1_5014",
                        "message": "Failed to parse file '{0}': {1}."
                    },
                    "Unknown_compiler_option_0": {
                        "code": 5023,
                        "category": 1,
                        "key": "Unknown_compiler_option_0_5023",
                        "message": "Unknown compiler option '{0}'."
                    },
                    "Compiler_option_0_requires_a_value_of_type_1": {
                        "code": 5024,
                        "category": 1,
                        "key": "Compiler_option_0_requires_a_value_of_type_1_5024",
                        "message": "Compiler option '{0}' requires a value of type {1}."
                    },
                    "Could_not_write_file_0_Colon_1": {
                        "code": 5033,
                        "category": 1,
                        "key": "Could_not_write_file_0_Colon_1_5033",
                        "message": "Could not write file '{0}': {1}."
                    },
                    "Option_project_cannot_be_mixed_with_source_files_on_a_command_line": {
                        "code": 5042,
                        "category": 1,
                        "key": "Option_project_cannot_be_mixed_with_source_files_on_a_command_line_5042",
                        "message": "Option 'project' cannot be mixed with source files on a command line."
                    },
                    "Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES2015_or_higher": {
                        "code": 5047,
                        "category": 1,
                        "key": "Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES_5047",
                        "message": "Option 'isolatedModules' can only be used when either option '--module' is provided or option 'target' is 'ES2015' or higher."
                    },
                    "Option_0_cannot_be_specified_when_option_target_is_ES3": {
                        "code": 5048,
                        "category": 1,
                        "key": "Option_0_cannot_be_specified_when_option_target_is_ES3_5048",
                        "message": "Option '{0}' cannot be specified when option 'target' is 'ES3'."
                    },
                    "Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided": {
                        "code": 5051,
                        "category": 1,
                        "key": "Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided_5051",
                        "message": "Option '{0} can only be used when either option '--inlineSourceMap' or option '--sourceMap' is provided."
                    },
                    "Option_0_cannot_be_specified_without_specifying_option_1": {
                        "code": 5052,
                        "category": 1,
                        "key": "Option_0_cannot_be_specified_without_specifying_option_1_5052",
                        "message": "Option '{0}' cannot be specified without specifying option '{1}'."
                    },
                    "Option_0_cannot_be_specified_with_option_1": {
                        "code": 5053,
                        "category": 1,
                        "key": "Option_0_cannot_be_specified_with_option_1_5053",
                        "message": "Option '{0}' cannot be specified with option '{1}'."
                    },
                    "A_tsconfig_json_file_is_already_defined_at_Colon_0": {
                        "code": 5054,
                        "category": 1,
                        "key": "A_tsconfig_json_file_is_already_defined_at_Colon_0_5054",
                        "message": "A 'tsconfig.json' file is already defined at: '{0}'."
                    },
                    "Cannot_write_file_0_because_it_would_overwrite_input_file": {
                        "code": 5055,
                        "category": 1,
                        "key": "Cannot_write_file_0_because_it_would_overwrite_input_file_5055",
                        "message": "Cannot write file '{0}' because it would overwrite input file."
                    },
                    "Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files": {
                        "code": 5056,
                        "category": 1,
                        "key": "Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files_5056",
                        "message": "Cannot write file '{0}' because it would be overwritten by multiple input files."
                    },
                    "Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0": {
                        "code": 5057,
                        "category": 1,
                        "key": "Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0_5057",
                        "message": "Cannot find a tsconfig.json file at the specified directory: '{0}'."
                    },
                    "The_specified_path_does_not_exist_Colon_0": {
                        "code": 5058,
                        "category": 1,
                        "key": "The_specified_path_does_not_exist_Colon_0_5058",
                        "message": "The specified path does not exist: '{0}'."
                    },
                    "Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier": {
                        "code": 5059,
                        "category": 1,
                        "key": "Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier_5059",
                        "message": "Invalid value for '--reactNamespace'. '{0}' is not a valid identifier."
                    },
                    "Option_paths_cannot_be_used_without_specifying_baseUrl_option": {
                        "code": 5060,
                        "category": 1,
                        "key": "Option_paths_cannot_be_used_without_specifying_baseUrl_option_5060",
                        "message": "Option 'paths' cannot be used without specifying '--baseUrl' option."
                    },
                    "Pattern_0_can_have_at_most_one_Asterisk_character": {
                        "code": 5061,
                        "category": 1,
                        "key": "Pattern_0_can_have_at_most_one_Asterisk_character_5061",
                        "message": "Pattern '{0}' can have at most one '*' character."
                    },
                    "Substitution_0_in_pattern_1_can_have_at_most_one_Asterisk_character": {
                        "code": 5062,
                        "category": 1,
                        "key": "Substitution_0_in_pattern_1_can_have_at_most_one_Asterisk_character_5062",
                        "message": "Substitution '{0}' in pattern '{1}' can have at most one '*' character."
                    },
                    "Substitutions_for_pattern_0_should_be_an_array": {
                        "code": 5063,
                        "category": 1,
                        "key": "Substitutions_for_pattern_0_should_be_an_array_5063",
                        "message": "Substitutions for pattern '{0}' should be an array."
                    },
                    "Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2": {
                        "code": 5064,
                        "category": 1,
                        "key": "Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2_5064",
                        "message": "Substitution '{0}' for pattern '{1}' has incorrect type, expected 'string', got '{2}'."
                    },
                    "File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0": {
                        "code": 5065,
                        "category": 1,
                        "key": "File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildca_5065",
                        "message": "File specification cannot contain a parent directory ('..') that appears after a recursive directory wildcard ('**'): '{0}'."
                    },
                    "Substitutions_for_pattern_0_shouldn_t_be_an_empty_array": {
                        "code": 5066,
                        "category": 1,
                        "key": "Substitutions_for_pattern_0_shouldn_t_be_an_empty_array_5066",
                        "message": "Substitutions for pattern '{0}' shouldn't be an empty array."
                    },
                    "Invalid_value_for_jsxFactory_0_is_not_a_valid_identifier_or_qualified_name": {
                        "code": 5067,
                        "category": 1,
                        "key": "Invalid_value_for_jsxFactory_0_is_not_a_valid_identifier_or_qualified_name_5067",
                        "message": "Invalid value for 'jsxFactory'. '{0}' is not a valid identifier or qualified-name."
                    },
                    "Adding_a_tsconfig_json_file_will_help_organize_projects_that_contain_both_TypeScript_and_JavaScript_files_Learn_more_at_https_Colon_Slash_Slashaka_ms_Slashtsconfig": {
                        "code": 5068,
                        "category": 1,
                        "key": "Adding_a_tsconfig_json_file_will_help_organize_projects_that_contain_both_TypeScript_and_JavaScript__5068",
                        "message": "Adding a tsconfig.json file will help organize projects that contain both TypeScript and JavaScript files. Learn more at https://aka.ms/tsconfig."
                    },
                    "Option_0_cannot_be_specified_without_specifying_option_1_or_option_2": {
                        "code": 5069,
                        "category": 1,
                        "key": "Option_0_cannot_be_specified_without_specifying_option_1_or_option_2_5069",
                        "message": "Option '{0}' cannot be specified without specifying option '{1}' or option '{2}'."
                    },
                    "Option_resolveJsonModule_cannot_be_specified_without_node_module_resolution_strategy": {
                        "code": 5070,
                        "category": 1,
                        "key": "Option_resolveJsonModule_cannot_be_specified_without_node_module_resolution_strategy_5070",
                        "message": "Option '--resolveJsonModule' cannot be specified without 'node' module resolution strategy."
                    },
                    "Option_resolveJsonModule_can_only_be_specified_when_module_code_generation_is_commonjs_amd_es2015_or_esNext": {
                        "code": 5071,
                        "category": 1,
                        "key": "Option_resolveJsonModule_can_only_be_specified_when_module_code_generation_is_commonjs_amd_es2015_or_5071",
                        "message": "Option '--resolveJsonModule' can only be specified when module code generation is 'commonjs', 'amd', 'es2015' or 'esNext'."
                    },
                    "Unknown_build_option_0": {
                        "code": 5072,
                        "category": 1,
                        "key": "Unknown_build_option_0_5072",
                        "message": "Unknown build option '{0}'."
                    },
                    "Build_option_0_requires_a_value_of_type_1": {
                        "code": 5073,
                        "category": 1,
                        "key": "Build_option_0_requires_a_value_of_type_1_5073",
                        "message": "Build option '{0}' requires a value of type {1}."
                    },
                    "Option_incremental_can_only_be_specified_using_tsconfig_emitting_to_single_file_or_when_option_tsBuildInfoFile_is_specified": {
                        "code": 5074,
                        "category": 1,
                        "key": "Option_incremental_can_only_be_specified_using_tsconfig_emitting_to_single_file_or_when_option_tsBui_5074",
                        "message": "Option '--incremental' can only be specified using tsconfig, emitting to single file or when option `--tsBuildInfoFile` is specified."
                    },
                    "_0_is_assignable_to_the_constraint_of_type_1_but_1_could_be_instantiated_with_a_different_subtype_of_constraint_2": {
                        "code": 5075,
                        "category": 1,
                        "key": "_0_is_assignable_to_the_constraint_of_type_1_but_1_could_be_instantiated_with_a_different_subtype_of_5075",
                        "message": "'{0}' is assignable to the constraint of type '{1}', but '{1}' could be instantiated with a different subtype of constraint '{2}'."
                    },
                    "_0_and_1_operations_cannot_be_mixed_without_parentheses": {
                        "code": 5076,
                        "category": 1,
                        "key": "_0_and_1_operations_cannot_be_mixed_without_parentheses_5076",
                        "message": "'{0}' and '{1}' operations cannot be mixed without parentheses."
                    },
                    "Generates_a_sourcemap_for_each_corresponding_d_ts_file": {
                        "code": 6000,
                        "category": 3,
                        "key": "Generates_a_sourcemap_for_each_corresponding_d_ts_file_6000",
                        "message": "Generates a sourcemap for each corresponding '.d.ts' file."
                    },
                    "Concatenate_and_emit_output_to_single_file": {
                        "code": 6001,
                        "category": 3,
                        "key": "Concatenate_and_emit_output_to_single_file_6001",
                        "message": "Concatenate and emit output to single file."
                    },
                    "Generates_corresponding_d_ts_file": {
                        "code": 6002,
                        "category": 3,
                        "key": "Generates_corresponding_d_ts_file_6002",
                        "message": "Generates corresponding '.d.ts' file."
                    },
                    "Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations": {
                        "code": 6003,
                        "category": 3,
                        "key": "Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations_6003",
                        "message": "Specify the location where debugger should locate map files instead of generated locations."
                    },
                    "Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations": {
                        "code": 6004,
                        "category": 3,
                        "key": "Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations_6004",
                        "message": "Specify the location where debugger should locate TypeScript files instead of source locations."
                    },
                    "Watch_input_files": {
                        "code": 6005,
                        "category": 3,
                        "key": "Watch_input_files_6005",
                        "message": "Watch input files."
                    },
                    "Redirect_output_structure_to_the_directory": {
                        "code": 6006,
                        "category": 3,
                        "key": "Redirect_output_structure_to_the_directory_6006",
                        "message": "Redirect output structure to the directory."
                    },
                    "Do_not_erase_const_enum_declarations_in_generated_code": {
                        "code": 6007,
                        "category": 3,
                        "key": "Do_not_erase_const_enum_declarations_in_generated_code_6007",
                        "message": "Do not erase const enum declarations in generated code."
                    },
                    "Do_not_emit_outputs_if_any_errors_were_reported": {
                        "code": 6008,
                        "category": 3,
                        "key": "Do_not_emit_outputs_if_any_errors_were_reported_6008",
                        "message": "Do not emit outputs if any errors were reported."
                    },
                    "Do_not_emit_comments_to_output": {
                        "code": 6009,
                        "category": 3,
                        "key": "Do_not_emit_comments_to_output_6009",
                        "message": "Do not emit comments to output."
                    },
                    "Do_not_emit_outputs": {
                        "code": 6010,
                        "category": 3,
                        "key": "Do_not_emit_outputs_6010",
                        "message": "Do not emit outputs."
                    },
                    "Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typechecking": {
                        "code": 6011,
                        "category": 3,
                        "key": "Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typech_6011",
                        "message": "Allow default imports from modules with no default export. This does not affect code emit, just typechecking."
                    },
                    "Skip_type_checking_of_declaration_files": {
                        "code": 6012,
                        "category": 3,
                        "key": "Skip_type_checking_of_declaration_files_6012",
                        "message": "Skip type checking of declaration files."
                    },
                    "Do_not_resolve_the_real_path_of_symlinks": {
                        "code": 6013,
                        "category": 3,
                        "key": "Do_not_resolve_the_real_path_of_symlinks_6013",
                        "message": "Do not resolve the real path of symlinks."
                    },
                    "Only_emit_d_ts_declaration_files": {
                        "code": 6014,
                        "category": 3,
                        "key": "Only_emit_d_ts_declaration_files_6014",
                        "message": "Only emit '.d.ts' declaration files."
                    },
                    "Specify_ECMAScript_target_version_Colon_ES3_default_ES5_ES2015_ES2016_ES2017_ES2018_ES2019_or_ESNEXT": {
                        "code": 6015,
                        "category": 3,
                        "key": "Specify_ECMAScript_target_version_Colon_ES3_default_ES5_ES2015_ES2016_ES2017_ES2018_ES2019_or_ESNEXT_6015",
                        "message": "Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'."
                    },
                    "Specify_module_code_generation_Colon_none_commonjs_amd_system_umd_es2015_or_ESNext": {
                        "code": 6016,
                        "category": 3,
                        "key": "Specify_module_code_generation_Colon_none_commonjs_amd_system_umd_es2015_or_ESNext_6016",
                        "message": "Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'."
                    },
                    "Print_this_message": {
                        "code": 6017,
                        "category": 3,
                        "key": "Print_this_message_6017",
                        "message": "Print this message."
                    },
                    "Print_the_compiler_s_version": {
                        "code": 6019,
                        "category": 3,
                        "key": "Print_the_compiler_s_version_6019",
                        "message": "Print the compiler's version."
                    },
                    "Compile_the_project_given_the_path_to_its_configuration_file_or_to_a_folder_with_a_tsconfig_json": {
                        "code": 6020,
                        "category": 3,
                        "key": "Compile_the_project_given_the_path_to_its_configuration_file_or_to_a_folder_with_a_tsconfig_json_6020",
                        "message": "Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'."
                    },
                    "Syntax_Colon_0": {
                        "code": 6023,
                        "category": 3,
                        "key": "Syntax_Colon_0_6023",
                        "message": "Syntax: {0}"
                    },
                    "options": {
                        "code": 6024,
                        "category": 3,
                        "key": "options_6024",
                        "message": "options"
                    },
                    "file": {
                        "code": 6025,
                        "category": 3,
                        "key": "file_6025",
                        "message": "file"
                    },
                    "Examples_Colon_0": {
                        "code": 6026,
                        "category": 3,
                        "key": "Examples_Colon_0_6026",
                        "message": "Examples: {0}"
                    },
                    "Options_Colon": {
                        "code": 6027,
                        "category": 3,
                        "key": "Options_Colon_6027",
                        "message": "Options:"
                    },
                    "Version_0": {
                        "code": 6029,
                        "category": 3,
                        "key": "Version_0_6029",
                        "message": "Version {0}"
                    },
                    "Insert_command_line_options_and_files_from_a_file": {
                        "code": 6030,
                        "category": 3,
                        "key": "Insert_command_line_options_and_files_from_a_file_6030",
                        "message": "Insert command line options and files from a file."
                    },
                    "Starting_compilation_in_watch_mode": {
                        "code": 6031,
                        "category": 3,
                        "key": "Starting_compilation_in_watch_mode_6031",
                        "message": "Starting compilation in watch mode..."
                    },
                    "File_change_detected_Starting_incremental_compilation": {
                        "code": 6032,
                        "category": 3,
                        "key": "File_change_detected_Starting_incremental_compilation_6032",
                        "message": "File change detected. Starting incremental compilation..."
                    },
                    "KIND": {
                        "code": 6034,
                        "category": 3,
                        "key": "KIND_6034",
                        "message": "KIND"
                    },
                    "FILE": {
                        "code": 6035,
                        "category": 3,
                        "key": "FILE_6035",
                        "message": "FILE"
                    },
                    "VERSION": {
                        "code": 6036,
                        "category": 3,
                        "key": "VERSION_6036",
                        "message": "VERSION"
                    },
                    "LOCATION": {
                        "code": 6037,
                        "category": 3,
                        "key": "LOCATION_6037",
                        "message": "LOCATION"
                    },
                    "DIRECTORY": {
                        "code": 6038,
                        "category": 3,
                        "key": "DIRECTORY_6038",
                        "message": "DIRECTORY"
                    },
                    "STRATEGY": {
                        "code": 6039,
                        "category": 3,
                        "key": "STRATEGY_6039",
                        "message": "STRATEGY"
                    },
                    "FILE_OR_DIRECTORY": {
                        "code": 6040,
                        "category": 3,
                        "key": "FILE_OR_DIRECTORY_6040",
                        "message": "FILE OR DIRECTORY"
                    },
                    "Generates_corresponding_map_file": {
                        "code": 6043,
                        "category": 3,
                        "key": "Generates_corresponding_map_file_6043",
                        "message": "Generates corresponding '.map' file."
                    },
                    "Compiler_option_0_expects_an_argument": {
                        "code": 6044,
                        "category": 1,
                        "key": "Compiler_option_0_expects_an_argument_6044",
                        "message": "Compiler option '{0}' expects an argument."
                    },
                    "Unterminated_quoted_string_in_response_file_0": {
                        "code": 6045,
                        "category": 1,
                        "key": "Unterminated_quoted_string_in_response_file_0_6045",
                        "message": "Unterminated quoted string in response file '{0}'."
                    },
                    "Argument_for_0_option_must_be_Colon_1": {
                        "code": 6046,
                        "category": 1,
                        "key": "Argument_for_0_option_must_be_Colon_1_6046",
                        "message": "Argument for '{0}' option must be: {1}."
                    },
                    "Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1": {
                        "code": 6048,
                        "category": 1,
                        "key": "Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1_6048",
                        "message": "Locale must be of the form <language> or <language>-<territory>. For example '{0}' or '{1}'."
                    },
                    "Unsupported_locale_0": {
                        "code": 6049,
                        "category": 1,
                        "key": "Unsupported_locale_0_6049",
                        "message": "Unsupported locale '{0}'."
                    },
                    "Unable_to_open_file_0": {
                        "code": 6050,
                        "category": 1,
                        "key": "Unable_to_open_file_0_6050",
                        "message": "Unable to open file '{0}'."
                    },
                    "Corrupted_locale_file_0": {
                        "code": 6051,
                        "category": 1,
                        "key": "Corrupted_locale_file_0_6051",
                        "message": "Corrupted locale file {0}."
                    },
                    "Raise_error_on_expressions_and_declarations_with_an_implied_any_type": {
                        "code": 6052,
                        "category": 3,
                        "key": "Raise_error_on_expressions_and_declarations_with_an_implied_any_type_6052",
                        "message": "Raise error on expressions and declarations with an implied 'any' type."
                    },
                    "File_0_not_found": {
                        "code": 6053,
                        "category": 1,
                        "key": "File_0_not_found_6053",
                        "message": "File '{0}' not found."
                    },
                    "File_0_has_unsupported_extension_The_only_supported_extensions_are_1": {
                        "code": 6054,
                        "category": 1,
                        "key": "File_0_has_unsupported_extension_The_only_supported_extensions_are_1_6054",
                        "message": "File '{0}' has unsupported extension. The only supported extensions are {1}."
                    },
                    "Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures": {
                        "code": 6055,
                        "category": 3,
                        "key": "Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures_6055",
                        "message": "Suppress noImplicitAny errors for indexing objects lacking index signatures."
                    },
                    "Do_not_emit_declarations_for_code_that_has_an_internal_annotation": {
                        "code": 6056,
                        "category": 3,
                        "key": "Do_not_emit_declarations_for_code_that_has_an_internal_annotation_6056",
                        "message": "Do not emit declarations for code that has an '@internal' annotation."
                    },
                    "Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir": {
                        "code": 6058,
                        "category": 3,
                        "key": "Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir_6058",
                        "message": "Specify the root directory of input files. Use to control the output directory structure with --outDir."
                    },
                    "File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files": {
                        "code": 6059,
                        "category": 1,
                        "key": "File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files_6059",
                        "message": "File '{0}' is not under 'rootDir' '{1}'. 'rootDir' is expected to contain all source files."
                    },
                    "Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix": {
                        "code": 6060,
                        "category": 3,
                        "key": "Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix_6060",
                        "message": "Specify the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix)."
                    },
                    "NEWLINE": {
                        "code": 6061,
                        "category": 3,
                        "key": "NEWLINE_6061",
                        "message": "NEWLINE"
                    },
                    "Option_0_can_only_be_specified_in_tsconfig_json_file": {
                        "code": 6064,
                        "category": 1,
                        "key": "Option_0_can_only_be_specified_in_tsconfig_json_file_6064",
                        "message": "Option '{0}' can only be specified in 'tsconfig.json' file."
                    },
                    "Enables_experimental_support_for_ES7_decorators": {
                        "code": 6065,
                        "category": 3,
                        "key": "Enables_experimental_support_for_ES7_decorators_6065",
                        "message": "Enables experimental support for ES7 decorators."
                    },
                    "Enables_experimental_support_for_emitting_type_metadata_for_decorators": {
                        "code": 6066,
                        "category": 3,
                        "key": "Enables_experimental_support_for_emitting_type_metadata_for_decorators_6066",
                        "message": "Enables experimental support for emitting type metadata for decorators."
                    },
                    "Enables_experimental_support_for_ES7_async_functions": {
                        "code": 6068,
                        "category": 3,
                        "key": "Enables_experimental_support_for_ES7_async_functions_6068",
                        "message": "Enables experimental support for ES7 async functions."
                    },
                    "Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6": {
                        "code": 6069,
                        "category": 3,
                        "key": "Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6_6069",
                        "message": "Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6)."
                    },
                    "Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file": {
                        "code": 6070,
                        "category": 3,
                        "key": "Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file_6070",
                        "message": "Initializes a TypeScript project and creates a tsconfig.json file."
                    },
                    "Successfully_created_a_tsconfig_json_file": {
                        "code": 6071,
                        "category": 3,
                        "key": "Successfully_created_a_tsconfig_json_file_6071",
                        "message": "Successfully created a tsconfig.json file."
                    },
                    "Suppress_excess_property_checks_for_object_literals": {
                        "code": 6072,
                        "category": 3,
                        "key": "Suppress_excess_property_checks_for_object_literals_6072",
                        "message": "Suppress excess property checks for object literals."
                    },
                    "Stylize_errors_and_messages_using_color_and_context_experimental": {
                        "code": 6073,
                        "category": 3,
                        "key": "Stylize_errors_and_messages_using_color_and_context_experimental_6073",
                        "message": "Stylize errors and messages using color and context (experimental)."
                    },
                    "Do_not_report_errors_on_unused_labels": {
                        "code": 6074,
                        "category": 3,
                        "key": "Do_not_report_errors_on_unused_labels_6074",
                        "message": "Do not report errors on unused labels."
                    },
                    "Report_error_when_not_all_code_paths_in_function_return_a_value": {
                        "code": 6075,
                        "category": 3,
                        "key": "Report_error_when_not_all_code_paths_in_function_return_a_value_6075",
                        "message": "Report error when not all code paths in function return a value."
                    },
                    "Report_errors_for_fallthrough_cases_in_switch_statement": {
                        "code": 6076,
                        "category": 3,
                        "key": "Report_errors_for_fallthrough_cases_in_switch_statement_6076",
                        "message": "Report errors for fallthrough cases in switch statement."
                    },
                    "Do_not_report_errors_on_unreachable_code": {
                        "code": 6077,
                        "category": 3,
                        "key": "Do_not_report_errors_on_unreachable_code_6077",
                        "message": "Do not report errors on unreachable code."
                    },
                    "Disallow_inconsistently_cased_references_to_the_same_file": {
                        "code": 6078,
                        "category": 3,
                        "key": "Disallow_inconsistently_cased_references_to_the_same_file_6078",
                        "message": "Disallow inconsistently-cased references to the same file."
                    },
                    "Specify_library_files_to_be_included_in_the_compilation": {
                        "code": 6079,
                        "category": 3,
                        "key": "Specify_library_files_to_be_included_in_the_compilation_6079",
                        "message": "Specify library files to be included in the compilation."
                    },
                    "Specify_JSX_code_generation_Colon_preserve_react_native_or_react": {
                        "code": 6080,
                        "category": 3,
                        "key": "Specify_JSX_code_generation_Colon_preserve_react_native_or_react_6080",
                        "message": "Specify JSX code generation: 'preserve', 'react-native', or 'react'."
                    },
                    "File_0_has_an_unsupported_extension_so_skipping_it": {
                        "code": 6081,
                        "category": 3,
                        "key": "File_0_has_an_unsupported_extension_so_skipping_it_6081",
                        "message": "File '{0}' has an unsupported extension, so skipping it."
                    },
                    "Only_amd_and_system_modules_are_supported_alongside_0": {
                        "code": 6082,
                        "category": 1,
                        "key": "Only_amd_and_system_modules_are_supported_alongside_0_6082",
                        "message": "Only 'amd' and 'system' modules are supported alongside --{0}."
                    },
                    "Base_directory_to_resolve_non_absolute_module_names": {
                        "code": 6083,
                        "category": 3,
                        "key": "Base_directory_to_resolve_non_absolute_module_names_6083",
                        "message": "Base directory to resolve non-absolute module names."
                    },
                    "Deprecated_Use_jsxFactory_instead_Specify_the_object_invoked_for_createElement_when_targeting_react_JSX_emit": {
                        "code": 6084,
                        "category": 3,
                        "key": "Deprecated_Use_jsxFactory_instead_Specify_the_object_invoked_for_createElement_when_targeting_react__6084",
                        "message": "[Deprecated] Use '--jsxFactory' instead. Specify the object invoked for createElement when targeting 'react' JSX emit"
                    },
                    "Enable_tracing_of_the_name_resolution_process": {
                        "code": 6085,
                        "category": 3,
                        "key": "Enable_tracing_of_the_name_resolution_process_6085",
                        "message": "Enable tracing of the name resolution process."
                    },
                    "Resolving_module_0_from_1": {
                        "code": 6086,
                        "category": 3,
                        "key": "Resolving_module_0_from_1_6086",
                        "message": "======== Resolving module '{0}' from '{1}'. ========"
                    },
                    "Explicitly_specified_module_resolution_kind_Colon_0": {
                        "code": 6087,
                        "category": 3,
                        "key": "Explicitly_specified_module_resolution_kind_Colon_0_6087",
                        "message": "Explicitly specified module resolution kind: '{0}'."
                    },
                    "Module_resolution_kind_is_not_specified_using_0": {
                        "code": 6088,
                        "category": 3,
                        "key": "Module_resolution_kind_is_not_specified_using_0_6088",
                        "message": "Module resolution kind is not specified, using '{0}'."
                    },
                    "Module_name_0_was_successfully_resolved_to_1": {
                        "code": 6089,
                        "category": 3,
                        "key": "Module_name_0_was_successfully_resolved_to_1_6089",
                        "message": "======== Module name '{0}' was successfully resolved to '{1}'. ========"
                    },
                    "Module_name_0_was_not_resolved": {
                        "code": 6090,
                        "category": 3,
                        "key": "Module_name_0_was_not_resolved_6090",
                        "message": "======== Module name '{0}' was not resolved. ========"
                    },
                    "paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0": {
                        "code": 6091,
                        "category": 3,
                        "key": "paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0_6091",
                        "message": "'paths' option is specified, looking for a pattern to match module name '{0}'."
                    },
                    "Module_name_0_matched_pattern_1": {
                        "code": 6092,
                        "category": 3,
                        "key": "Module_name_0_matched_pattern_1_6092",
                        "message": "Module name '{0}', matched pattern '{1}'."
                    },
                    "Trying_substitution_0_candidate_module_location_Colon_1": {
                        "code": 6093,
                        "category": 3,
                        "key": "Trying_substitution_0_candidate_module_location_Colon_1_6093",
                        "message": "Trying substitution '{0}', candidate module location: '{1}'."
                    },
                    "Resolving_module_name_0_relative_to_base_url_1_2": {
                        "code": 6094,
                        "category": 3,
                        "key": "Resolving_module_name_0_relative_to_base_url_1_2_6094",
                        "message": "Resolving module name '{0}' relative to base url '{1}' - '{2}'."
                    },
                    "Loading_module_as_file_Slash_folder_candidate_module_location_0_target_file_type_1": {
                        "code": 6095,
                        "category": 3,
                        "key": "Loading_module_as_file_Slash_folder_candidate_module_location_0_target_file_type_1_6095",
                        "message": "Loading module as file / folder, candidate module location '{0}', target file type '{1}'."
                    },
                    "File_0_does_not_exist": {
                        "code": 6096,
                        "category": 3,
                        "key": "File_0_does_not_exist_6096",
                        "message": "File '{0}' does not exist."
                    },
                    "File_0_exist_use_it_as_a_name_resolution_result": {
                        "code": 6097,
                        "category": 3,
                        "key": "File_0_exist_use_it_as_a_name_resolution_result_6097",
                        "message": "File '{0}' exist - use it as a name resolution result."
                    },
                    "Loading_module_0_from_node_modules_folder_target_file_type_1": {
                        "code": 6098,
                        "category": 3,
                        "key": "Loading_module_0_from_node_modules_folder_target_file_type_1_6098",
                        "message": "Loading module '{0}' from 'node_modules' folder, target file type '{1}'."
                    },
                    "Found_package_json_at_0": {
                        "code": 6099,
                        "category": 3,
                        "key": "Found_package_json_at_0_6099",
                        "message": "Found 'package.json' at '{0}'."
                    },
                    "package_json_does_not_have_a_0_field": {
                        "code": 6100,
                        "category": 3,
                        "key": "package_json_does_not_have_a_0_field_6100",
                        "message": "'package.json' does not have a '{0}' field."
                    },
                    "package_json_has_0_field_1_that_references_2": {
                        "code": 6101,
                        "category": 3,
                        "key": "package_json_has_0_field_1_that_references_2_6101",
                        "message": "'package.json' has '{0}' field '{1}' that references '{2}'."
                    },
                    "Allow_javascript_files_to_be_compiled": {
                        "code": 6102,
                        "category": 3,
                        "key": "Allow_javascript_files_to_be_compiled_6102",
                        "message": "Allow javascript files to be compiled."
                    },
                    "Option_0_should_have_array_of_strings_as_a_value": {
                        "code": 6103,
                        "category": 1,
                        "key": "Option_0_should_have_array_of_strings_as_a_value_6103",
                        "message": "Option '{0}' should have array of strings as a value."
                    },
                    "Checking_if_0_is_the_longest_matching_prefix_for_1_2": {
                        "code": 6104,
                        "category": 3,
                        "key": "Checking_if_0_is_the_longest_matching_prefix_for_1_2_6104",
                        "message": "Checking if '{0}' is the longest matching prefix for '{1}' - '{2}'."
                    },
                    "Expected_type_of_0_field_in_package_json_to_be_1_got_2": {
                        "code": 6105,
                        "category": 3,
                        "key": "Expected_type_of_0_field_in_package_json_to_be_1_got_2_6105",
                        "message": "Expected type of '{0}' field in 'package.json' to be '{1}', got '{2}'."
                    },
                    "baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1": {
                        "code": 6106,
                        "category": 3,
                        "key": "baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1_6106",
                        "message": "'baseUrl' option is set to '{0}', using this value to resolve non-relative module name '{1}'."
                    },
                    "rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0": {
                        "code": 6107,
                        "category": 3,
                        "key": "rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0_6107",
                        "message": "'rootDirs' option is set, using it to resolve relative module name '{0}'."
                    },
                    "Longest_matching_prefix_for_0_is_1": {
                        "code": 6108,
                        "category": 3,
                        "key": "Longest_matching_prefix_for_0_is_1_6108",
                        "message": "Longest matching prefix for '{0}' is '{1}'."
                    },
                    "Loading_0_from_the_root_dir_1_candidate_location_2": {
                        "code": 6109,
                        "category": 3,
                        "key": "Loading_0_from_the_root_dir_1_candidate_location_2_6109",
                        "message": "Loading '{0}' from the root dir '{1}', candidate location '{2}'."
                    },
                    "Trying_other_entries_in_rootDirs": {
                        "code": 6110,
                        "category": 3,
                        "key": "Trying_other_entries_in_rootDirs_6110",
                        "message": "Trying other entries in 'rootDirs'."
                    },
                    "Module_resolution_using_rootDirs_has_failed": {
                        "code": 6111,
                        "category": 3,
                        "key": "Module_resolution_using_rootDirs_has_failed_6111",
                        "message": "Module resolution using 'rootDirs' has failed."
                    },
                    "Do_not_emit_use_strict_directives_in_module_output": {
                        "code": 6112,
                        "category": 3,
                        "key": "Do_not_emit_use_strict_directives_in_module_output_6112",
                        "message": "Do not emit 'use strict' directives in module output."
                    },
                    "Enable_strict_null_checks": {
                        "code": 6113,
                        "category": 3,
                        "key": "Enable_strict_null_checks_6113",
                        "message": "Enable strict null checks."
                    },
                    "Unknown_option_excludes_Did_you_mean_exclude": {
                        "code": 6114,
                        "category": 1,
                        "key": "Unknown_option_excludes_Did_you_mean_exclude_6114",
                        "message": "Unknown option 'excludes'. Did you mean 'exclude'?"
                    },
                    "Raise_error_on_this_expressions_with_an_implied_any_type": {
                        "code": 6115,
                        "category": 3,
                        "key": "Raise_error_on_this_expressions_with_an_implied_any_type_6115",
                        "message": "Raise error on 'this' expressions with an implied 'any' type."
                    },
                    "Resolving_type_reference_directive_0_containing_file_1_root_directory_2": {
                        "code": 6116,
                        "category": 3,
                        "key": "Resolving_type_reference_directive_0_containing_file_1_root_directory_2_6116",
                        "message": "======== Resolving type reference directive '{0}', containing file '{1}', root directory '{2}'. ========"
                    },
                    "Resolving_using_primary_search_paths": {
                        "code": 6117,
                        "category": 3,
                        "key": "Resolving_using_primary_search_paths_6117",
                        "message": "Resolving using primary search paths..."
                    },
                    "Resolving_from_node_modules_folder": {
                        "code": 6118,
                        "category": 3,
                        "key": "Resolving_from_node_modules_folder_6118",
                        "message": "Resolving from node_modules folder..."
                    },
                    "Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2": {
                        "code": 6119,
                        "category": 3,
                        "key": "Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2_6119",
                        "message": "======== Type reference directive '{0}' was successfully resolved to '{1}', primary: {2}. ========"
                    },
                    "Type_reference_directive_0_was_not_resolved": {
                        "code": 6120,
                        "category": 3,
                        "key": "Type_reference_directive_0_was_not_resolved_6120",
                        "message": "======== Type reference directive '{0}' was not resolved. ========"
                    },
                    "Resolving_with_primary_search_path_0": {
                        "code": 6121,
                        "category": 3,
                        "key": "Resolving_with_primary_search_path_0_6121",
                        "message": "Resolving with primary search path '{0}'."
                    },
                    "Root_directory_cannot_be_determined_skipping_primary_search_paths": {
                        "code": 6122,
                        "category": 3,
                        "key": "Root_directory_cannot_be_determined_skipping_primary_search_paths_6122",
                        "message": "Root directory cannot be determined, skipping primary search paths."
                    },
                    "Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set": {
                        "code": 6123,
                        "category": 3,
                        "key": "Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set_6123",
                        "message": "======== Resolving type reference directive '{0}', containing file '{1}', root directory not set. ========"
                    },
                    "Type_declaration_files_to_be_included_in_compilation": {
                        "code": 6124,
                        "category": 3,
                        "key": "Type_declaration_files_to_be_included_in_compilation_6124",
                        "message": "Type declaration files to be included in compilation."
                    },
                    "Looking_up_in_node_modules_folder_initial_location_0": {
                        "code": 6125,
                        "category": 3,
                        "key": "Looking_up_in_node_modules_folder_initial_location_0_6125",
                        "message": "Looking up in 'node_modules' folder, initial location '{0}'."
                    },
                    "Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_modules_folder": {
                        "code": 6126,
                        "category": 3,
                        "key": "Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_mod_6126",
                        "message": "Containing file is not specified and root directory cannot be determined, skipping lookup in 'node_modules' folder."
                    },
                    "Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1": {
                        "code": 6127,
                        "category": 3,
                        "key": "Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1_6127",
                        "message": "======== Resolving type reference directive '{0}', containing file not set, root directory '{1}'. ========"
                    },
                    "Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set": {
                        "code": 6128,
                        "category": 3,
                        "key": "Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set_6128",
                        "message": "======== Resolving type reference directive '{0}', containing file not set, root directory not set. ========"
                    },
                    "Resolving_real_path_for_0_result_1": {
                        "code": 6130,
                        "category": 3,
                        "key": "Resolving_real_path_for_0_result_1_6130",
                        "message": "Resolving real path for '{0}', result '{1}'."
                    },
                    "Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system": {
                        "code": 6131,
                        "category": 1,
                        "key": "Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system_6131",
                        "message": "Cannot compile modules using option '{0}' unless the '--module' flag is 'amd' or 'system'."
                    },
                    "File_name_0_has_a_1_extension_stripping_it": {
                        "code": 6132,
                        "category": 3,
                        "key": "File_name_0_has_a_1_extension_stripping_it_6132",
                        "message": "File name '{0}' has a '{1}' extension - stripping it."
                    },
                    "_0_is_declared_but_its_value_is_never_read": {
                        "code": 6133,
                        "category": 1,
                        "key": "_0_is_declared_but_its_value_is_never_read_6133",
                        "message": "'{0}' is declared but its value is never read.",
                        "reportsUnnecessary": true
                    },
                    "Report_errors_on_unused_locals": {
                        "code": 6134,
                        "category": 3,
                        "key": "Report_errors_on_unused_locals_6134",
                        "message": "Report errors on unused locals."
                    },
                    "Report_errors_on_unused_parameters": {
                        "code": 6135,
                        "category": 3,
                        "key": "Report_errors_on_unused_parameters_6135",
                        "message": "Report errors on unused parameters."
                    },
                    "The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files": {
                        "code": 6136,
                        "category": 3,
                        "key": "The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files_6136",
                        "message": "The maximum dependency depth to search under node_modules and load JavaScript files."
                    },
                    "Cannot_import_type_declaration_files_Consider_importing_0_instead_of_1": {
                        "code": 6137,
                        "category": 1,
                        "key": "Cannot_import_type_declaration_files_Consider_importing_0_instead_of_1_6137",
                        "message": "Cannot import type declaration files. Consider importing '{0}' instead of '{1}'."
                    },
                    "Property_0_is_declared_but_its_value_is_never_read": {
                        "code": 6138,
                        "category": 1,
                        "key": "Property_0_is_declared_but_its_value_is_never_read_6138",
                        "message": "Property '{0}' is declared but its value is never read.",
                        "reportsUnnecessary": true
                    },
                    "Import_emit_helpers_from_tslib": {
                        "code": 6139,
                        "category": 3,
                        "key": "Import_emit_helpers_from_tslib_6139",
                        "message": "Import emit helpers from 'tslib'."
                    },
                    "Auto_discovery_for_typings_is_enabled_in_project_0_Running_extra_resolution_pass_for_module_1_using_cache_location_2": {
                        "code": 6140,
                        "category": 1,
                        "key": "Auto_discovery_for_typings_is_enabled_in_project_0_Running_extra_resolution_pass_for_module_1_using__6140",
                        "message": "Auto discovery for typings is enabled in project '{0}'. Running extra resolution pass for module '{1}' using cache location '{2}'."
                    },
                    "Parse_in_strict_mode_and_emit_use_strict_for_each_source_file": {
                        "code": 6141,
                        "category": 3,
                        "key": "Parse_in_strict_mode_and_emit_use_strict_for_each_source_file_6141",
                        "message": "Parse in strict mode and emit \"use strict\" for each source file."
                    },
                    "Module_0_was_resolved_to_1_but_jsx_is_not_set": {
                        "code": 6142,
                        "category": 1,
                        "key": "Module_0_was_resolved_to_1_but_jsx_is_not_set_6142",
                        "message": "Module '{0}' was resolved to '{1}', but '--jsx' is not set."
                    },
                    "Module_0_was_resolved_as_locally_declared_ambient_module_in_file_1": {
                        "code": 6144,
                        "category": 3,
                        "key": "Module_0_was_resolved_as_locally_declared_ambient_module_in_file_1_6144",
                        "message": "Module '{0}' was resolved as locally declared ambient module in file '{1}'."
                    },
                    "Module_0_was_resolved_as_ambient_module_declared_in_1_since_this_file_was_not_modified": {
                        "code": 6145,
                        "category": 3,
                        "key": "Module_0_was_resolved_as_ambient_module_declared_in_1_since_this_file_was_not_modified_6145",
                        "message": "Module '{0}' was resolved as ambient module declared in '{1}' since this file was not modified."
                    },
                    "Specify_the_JSX_factory_function_to_use_when_targeting_react_JSX_emit_e_g_React_createElement_or_h": {
                        "code": 6146,
                        "category": 3,
                        "key": "Specify_the_JSX_factory_function_to_use_when_targeting_react_JSX_emit_e_g_React_createElement_or_h_6146",
                        "message": "Specify the JSX factory function to use when targeting 'react' JSX emit, e.g. 'React.createElement' or 'h'."
                    },
                    "Resolution_for_module_0_was_found_in_cache_from_location_1": {
                        "code": 6147,
                        "category": 3,
                        "key": "Resolution_for_module_0_was_found_in_cache_from_location_1_6147",
                        "message": "Resolution for module '{0}' was found in cache from location '{1}'."
                    },
                    "Directory_0_does_not_exist_skipping_all_lookups_in_it": {
                        "code": 6148,
                        "category": 3,
                        "key": "Directory_0_does_not_exist_skipping_all_lookups_in_it_6148",
                        "message": "Directory '{0}' does not exist, skipping all lookups in it."
                    },
                    "Show_diagnostic_information": {
                        "code": 6149,
                        "category": 3,
                        "key": "Show_diagnostic_information_6149",
                        "message": "Show diagnostic information."
                    },
                    "Show_verbose_diagnostic_information": {
                        "code": 6150,
                        "category": 3,
                        "key": "Show_verbose_diagnostic_information_6150",
                        "message": "Show verbose diagnostic information."
                    },
                    "Emit_a_single_file_with_source_maps_instead_of_having_a_separate_file": {
                        "code": 6151,
                        "category": 3,
                        "key": "Emit_a_single_file_with_source_maps_instead_of_having_a_separate_file_6151",
                        "message": "Emit a single file with source maps instead of having a separate file."
                    },
                    "Emit_the_source_alongside_the_sourcemaps_within_a_single_file_requires_inlineSourceMap_or_sourceMap_to_be_set": {
                        "code": 6152,
                        "category": 3,
                        "key": "Emit_the_source_alongside_the_sourcemaps_within_a_single_file_requires_inlineSourceMap_or_sourceMap__6152",
                        "message": "Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set."
                    },
                    "Transpile_each_file_as_a_separate_module_similar_to_ts_transpileModule": {
                        "code": 6153,
                        "category": 3,
                        "key": "Transpile_each_file_as_a_separate_module_similar_to_ts_transpileModule_6153",
                        "message": "Transpile each file as a separate module (similar to 'ts.transpileModule')."
                    },
                    "Print_names_of_generated_files_part_of_the_compilation": {
                        "code": 6154,
                        "category": 3,
                        "key": "Print_names_of_generated_files_part_of_the_compilation_6154",
                        "message": "Print names of generated files part of the compilation."
                    },
                    "Print_names_of_files_part_of_the_compilation": {
                        "code": 6155,
                        "category": 3,
                        "key": "Print_names_of_files_part_of_the_compilation_6155",
                        "message": "Print names of files part of the compilation."
                    },
                    "The_locale_used_when_displaying_messages_to_the_user_e_g_en_us": {
                        "code": 6156,
                        "category": 3,
                        "key": "The_locale_used_when_displaying_messages_to_the_user_e_g_en_us_6156",
                        "message": "The locale used when displaying messages to the user (e.g. 'en-us')"
                    },
                    "Do_not_generate_custom_helper_functions_like_extends_in_compiled_output": {
                        "code": 6157,
                        "category": 3,
                        "key": "Do_not_generate_custom_helper_functions_like_extends_in_compiled_output_6157",
                        "message": "Do not generate custom helper functions like '__extends' in compiled output."
                    },
                    "Do_not_include_the_default_library_file_lib_d_ts": {
                        "code": 6158,
                        "category": 3,
                        "key": "Do_not_include_the_default_library_file_lib_d_ts_6158",
                        "message": "Do not include the default library file (lib.d.ts)."
                    },
                    "Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files": {
                        "code": 6159,
                        "category": 3,
                        "key": "Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files_6159",
                        "message": "Do not add triple-slash references or imported modules to the list of compiled files."
                    },
                    "Deprecated_Use_skipLibCheck_instead_Skip_type_checking_of_default_library_declaration_files": {
                        "code": 6160,
                        "category": 3,
                        "key": "Deprecated_Use_skipLibCheck_instead_Skip_type_checking_of_default_library_declaration_files_6160",
                        "message": "[Deprecated] Use '--skipLibCheck' instead. Skip type checking of default library declaration files."
                    },
                    "List_of_folders_to_include_type_definitions_from": {
                        "code": 6161,
                        "category": 3,
                        "key": "List_of_folders_to_include_type_definitions_from_6161",
                        "message": "List of folders to include type definitions from."
                    },
                    "Disable_size_limitations_on_JavaScript_projects": {
                        "code": 6162,
                        "category": 3,
                        "key": "Disable_size_limitations_on_JavaScript_projects_6162",
                        "message": "Disable size limitations on JavaScript projects."
                    },
                    "The_character_set_of_the_input_files": {
                        "code": 6163,
                        "category": 3,
                        "key": "The_character_set_of_the_input_files_6163",
                        "message": "The character set of the input files."
                    },
                    "Emit_a_UTF_8_Byte_Order_Mark_BOM_in_the_beginning_of_output_files": {
                        "code": 6164,
                        "category": 3,
                        "key": "Emit_a_UTF_8_Byte_Order_Mark_BOM_in_the_beginning_of_output_files_6164",
                        "message": "Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files."
                    },
                    "Do_not_truncate_error_messages": {
                        "code": 6165,
                        "category": 3,
                        "key": "Do_not_truncate_error_messages_6165",
                        "message": "Do not truncate error messages."
                    },
                    "Output_directory_for_generated_declaration_files": {
                        "code": 6166,
                        "category": 3,
                        "key": "Output_directory_for_generated_declaration_files_6166",
                        "message": "Output directory for generated declaration files."
                    },
                    "A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl": {
                        "code": 6167,
                        "category": 3,
                        "key": "A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl_6167",
                        "message": "A series of entries which re-map imports to lookup locations relative to the 'baseUrl'."
                    },
                    "List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime": {
                        "code": 6168,
                        "category": 3,
                        "key": "List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime_6168",
                        "message": "List of root folders whose combined content represents the structure of the project at runtime."
                    },
                    "Show_all_compiler_options": {
                        "code": 6169,
                        "category": 3,
                        "key": "Show_all_compiler_options_6169",
                        "message": "Show all compiler options."
                    },
                    "Deprecated_Use_outFile_instead_Concatenate_and_emit_output_to_single_file": {
                        "code": 6170,
                        "category": 3,
                        "key": "Deprecated_Use_outFile_instead_Concatenate_and_emit_output_to_single_file_6170",
                        "message": "[Deprecated] Use '--outFile' instead. Concatenate and emit output to single file"
                    },
                    "Command_line_Options": {
                        "code": 6171,
                        "category": 3,
                        "key": "Command_line_Options_6171",
                        "message": "Command-line Options"
                    },
                    "Basic_Options": {
                        "code": 6172,
                        "category": 3,
                        "key": "Basic_Options_6172",
                        "message": "Basic Options"
                    },
                    "Strict_Type_Checking_Options": {
                        "code": 6173,
                        "category": 3,
                        "key": "Strict_Type_Checking_Options_6173",
                        "message": "Strict Type-Checking Options"
                    },
                    "Module_Resolution_Options": {
                        "code": 6174,
                        "category": 3,
                        "key": "Module_Resolution_Options_6174",
                        "message": "Module Resolution Options"
                    },
                    "Source_Map_Options": {
                        "code": 6175,
                        "category": 3,
                        "key": "Source_Map_Options_6175",
                        "message": "Source Map Options"
                    },
                    "Additional_Checks": {
                        "code": 6176,
                        "category": 3,
                        "key": "Additional_Checks_6176",
                        "message": "Additional Checks"
                    },
                    "Experimental_Options": {
                        "code": 6177,
                        "category": 3,
                        "key": "Experimental_Options_6177",
                        "message": "Experimental Options"
                    },
                    "Advanced_Options": {
                        "code": 6178,
                        "category": 3,
                        "key": "Advanced_Options_6178",
                        "message": "Advanced Options"
                    },
                    "Provide_full_support_for_iterables_in_for_of_spread_and_destructuring_when_targeting_ES5_or_ES3": {
                        "code": 6179,
                        "category": 3,
                        "key": "Provide_full_support_for_iterables_in_for_of_spread_and_destructuring_when_targeting_ES5_or_ES3_6179",
                        "message": "Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'."
                    },
                    "Enable_all_strict_type_checking_options": {
                        "code": 6180,
                        "category": 3,
                        "key": "Enable_all_strict_type_checking_options_6180",
                        "message": "Enable all strict type-checking options."
                    },
                    "List_of_language_service_plugins": {
                        "code": 6181,
                        "category": 3,
                        "key": "List_of_language_service_plugins_6181",
                        "message": "List of language service plugins."
                    },
                    "Scoped_package_detected_looking_in_0": {
                        "code": 6182,
                        "category": 3,
                        "key": "Scoped_package_detected_looking_in_0_6182",
                        "message": "Scoped package detected, looking in '{0}'"
                    },
                    "Reusing_resolution_of_module_0_to_file_1_from_old_program": {
                        "code": 6183,
                        "category": 3,
                        "key": "Reusing_resolution_of_module_0_to_file_1_from_old_program_6183",
                        "message": "Reusing resolution of module '{0}' to file '{1}' from old program."
                    },
                    "Reusing_module_resolutions_originating_in_0_since_resolutions_are_unchanged_from_old_program": {
                        "code": 6184,
                        "category": 3,
                        "key": "Reusing_module_resolutions_originating_in_0_since_resolutions_are_unchanged_from_old_program_6184",
                        "message": "Reusing module resolutions originating in '{0}' since resolutions are unchanged from old program."
                    },
                    "Disable_strict_checking_of_generic_signatures_in_function_types": {
                        "code": 6185,
                        "category": 3,
                        "key": "Disable_strict_checking_of_generic_signatures_in_function_types_6185",
                        "message": "Disable strict checking of generic signatures in function types."
                    },
                    "Enable_strict_checking_of_function_types": {
                        "code": 6186,
                        "category": 3,
                        "key": "Enable_strict_checking_of_function_types_6186",
                        "message": "Enable strict checking of function types."
                    },
                    "Enable_strict_checking_of_property_initialization_in_classes": {
                        "code": 6187,
                        "category": 3,
                        "key": "Enable_strict_checking_of_property_initialization_in_classes_6187",
                        "message": "Enable strict checking of property initialization in classes."
                    },
                    "Numeric_separators_are_not_allowed_here": {
                        "code": 6188,
                        "category": 1,
                        "key": "Numeric_separators_are_not_allowed_here_6188",
                        "message": "Numeric separators are not allowed here."
                    },
                    "Multiple_consecutive_numeric_separators_are_not_permitted": {
                        "code": 6189,
                        "category": 1,
                        "key": "Multiple_consecutive_numeric_separators_are_not_permitted_6189",
                        "message": "Multiple consecutive numeric separators are not permitted."
                    },
                    "Whether_to_keep_outdated_console_output_in_watch_mode_instead_of_clearing_the_screen": {
                        "code": 6191,
                        "category": 3,
                        "key": "Whether_to_keep_outdated_console_output_in_watch_mode_instead_of_clearing_the_screen_6191",
                        "message": "Whether to keep outdated console output in watch mode instead of clearing the screen."
                    },
                    "All_imports_in_import_declaration_are_unused": {
                        "code": 6192,
                        "category": 1,
                        "key": "All_imports_in_import_declaration_are_unused_6192",
                        "message": "All imports in import declaration are unused.",
                        "reportsUnnecessary": true
                    },
                    "Found_1_error_Watching_for_file_changes": {
                        "code": 6193,
                        "category": 3,
                        "key": "Found_1_error_Watching_for_file_changes_6193",
                        "message": "Found 1 error. Watching for file changes."
                    },
                    "Found_0_errors_Watching_for_file_changes": {
                        "code": 6194,
                        "category": 3,
                        "key": "Found_0_errors_Watching_for_file_changes_6194",
                        "message": "Found {0} errors. Watching for file changes."
                    },
                    "Resolve_keyof_to_string_valued_property_names_only_no_numbers_or_symbols": {
                        "code": 6195,
                        "category": 3,
                        "key": "Resolve_keyof_to_string_valued_property_names_only_no_numbers_or_symbols_6195",
                        "message": "Resolve 'keyof' to string valued property names only (no numbers or symbols)."
                    },
                    "_0_is_declared_but_never_used": {
                        "code": 6196,
                        "category": 1,
                        "key": "_0_is_declared_but_never_used_6196",
                        "message": "'{0}' is declared but never used.",
                        "reportsUnnecessary": true
                    },
                    "Include_modules_imported_with_json_extension": {
                        "code": 6197,
                        "category": 3,
                        "key": "Include_modules_imported_with_json_extension_6197",
                        "message": "Include modules imported with '.json' extension"
                    },
                    "All_destructured_elements_are_unused": {
                        "code": 6198,
                        "category": 1,
                        "key": "All_destructured_elements_are_unused_6198",
                        "message": "All destructured elements are unused.",
                        "reportsUnnecessary": true
                    },
                    "All_variables_are_unused": {
                        "code": 6199,
                        "category": 1,
                        "key": "All_variables_are_unused_6199",
                        "message": "All variables are unused.",
                        "reportsUnnecessary": true
                    },
                    "Definitions_of_the_following_identifiers_conflict_with_those_in_another_file_Colon_0": {
                        "code": 6200,
                        "category": 1,
                        "key": "Definitions_of_the_following_identifiers_conflict_with_those_in_another_file_Colon_0_6200",
                        "message": "Definitions of the following identifiers conflict with those in another file: {0}"
                    },
                    "Conflicts_are_in_this_file": {
                        "code": 6201,
                        "category": 3,
                        "key": "Conflicts_are_in_this_file_6201",
                        "message": "Conflicts are in this file."
                    },
                    "Project_references_may_not_form_a_circular_graph_Cycle_detected_Colon_0": {
                        "code": 6202,
                        "category": 1,
                        "key": "Project_references_may_not_form_a_circular_graph_Cycle_detected_Colon_0_6202",
                        "message": "Project references may not form a circular graph. Cycle detected: {0}"
                    },
                    "_0_was_also_declared_here": {
                        "code": 6203,
                        "category": 3,
                        "key": "_0_was_also_declared_here_6203",
                        "message": "'{0}' was also declared here."
                    },
                    "and_here": {
                        "code": 6204,
                        "category": 3,
                        "key": "and_here_6204",
                        "message": "and here."
                    },
                    "All_type_parameters_are_unused": {
                        "code": 6205,
                        "category": 1,
                        "key": "All_type_parameters_are_unused_6205",
                        "message": "All type parameters are unused"
                    },
                    "package_json_has_a_typesVersions_field_with_version_specific_path_mappings": {
                        "code": 6206,
                        "category": 3,
                        "key": "package_json_has_a_typesVersions_field_with_version_specific_path_mappings_6206",
                        "message": "'package.json' has a 'typesVersions' field with version-specific path mappings."
                    },
                    "package_json_does_not_have_a_typesVersions_entry_that_matches_version_0": {
                        "code": 6207,
                        "category": 3,
                        "key": "package_json_does_not_have_a_typesVersions_entry_that_matches_version_0_6207",
                        "message": "'package.json' does not have a 'typesVersions' entry that matches version '{0}'."
                    },
                    "package_json_has_a_typesVersions_entry_0_that_matches_compiler_version_1_looking_for_a_pattern_to_match_module_name_2": {
                        "code": 6208,
                        "category": 3,
                        "key": "package_json_has_a_typesVersions_entry_0_that_matches_compiler_version_1_looking_for_a_pattern_to_ma_6208",
                        "message": "'package.json' has a 'typesVersions' entry '{0}' that matches compiler version '{1}', looking for a pattern to match module name '{2}'."
                    },
                    "package_json_has_a_typesVersions_entry_0_that_is_not_a_valid_semver_range": {
                        "code": 6209,
                        "category": 3,
                        "key": "package_json_has_a_typesVersions_entry_0_that_is_not_a_valid_semver_range_6209",
                        "message": "'package.json' has a 'typesVersions' entry '{0}' that is not a valid semver range."
                    },
                    "An_argument_for_0_was_not_provided": {
                        "code": 6210,
                        "category": 3,
                        "key": "An_argument_for_0_was_not_provided_6210",
                        "message": "An argument for '{0}' was not provided."
                    },
                    "An_argument_matching_this_binding_pattern_was_not_provided": {
                        "code": 6211,
                        "category": 3,
                        "key": "An_argument_matching_this_binding_pattern_was_not_provided_6211",
                        "message": "An argument matching this binding pattern was not provided."
                    },
                    "Did_you_mean_to_call_this_expression": {
                        "code": 6212,
                        "category": 3,
                        "key": "Did_you_mean_to_call_this_expression_6212",
                        "message": "Did you mean to call this expression?"
                    },
                    "Did_you_mean_to_use_new_with_this_expression": {
                        "code": 6213,
                        "category": 3,
                        "key": "Did_you_mean_to_use_new_with_this_expression_6213",
                        "message": "Did you mean to use 'new' with this expression?"
                    },
                    "Enable_strict_bind_call_and_apply_methods_on_functions": {
                        "code": 6214,
                        "category": 3,
                        "key": "Enable_strict_bind_call_and_apply_methods_on_functions_6214",
                        "message": "Enable strict 'bind', 'call', and 'apply' methods on functions."
                    },
                    "Using_compiler_options_of_project_reference_redirect_0": {
                        "code": 6215,
                        "category": 3,
                        "key": "Using_compiler_options_of_project_reference_redirect_0_6215",
                        "message": "Using compiler options of project reference redirect '{0}'."
                    },
                    "Found_1_error": {
                        "code": 6216,
                        "category": 3,
                        "key": "Found_1_error_6216",
                        "message": "Found 1 error."
                    },
                    "Found_0_errors": {
                        "code": 6217,
                        "category": 3,
                        "key": "Found_0_errors_6217",
                        "message": "Found {0} errors."
                    },
                    "Module_name_0_was_successfully_resolved_to_1_with_Package_ID_2": {
                        "code": 6218,
                        "category": 3,
                        "key": "Module_name_0_was_successfully_resolved_to_1_with_Package_ID_2_6218",
                        "message": "======== Module name '{0}' was successfully resolved to '{1}' with Package ID '{2}'. ========"
                    },
                    "Type_reference_directive_0_was_successfully_resolved_to_1_with_Package_ID_2_primary_Colon_3": {
                        "code": 6219,
                        "category": 3,
                        "key": "Type_reference_directive_0_was_successfully_resolved_to_1_with_Package_ID_2_primary_Colon_3_6219",
                        "message": "======== Type reference directive '{0}' was successfully resolved to '{1}' with Package ID '{2}', primary: {3}. ========"
                    },
                    "package_json_had_a_falsy_0_field": {
                        "code": 6220,
                        "category": 3,
                        "key": "package_json_had_a_falsy_0_field_6220",
                        "message": "'package.json' had a falsy '{0}' field."
                    },
                    "Disable_use_of_source_files_instead_of_declaration_files_from_referenced_projects": {
                        "code": 6221,
                        "category": 3,
                        "key": "Disable_use_of_source_files_instead_of_declaration_files_from_referenced_projects_6221",
                        "message": "Disable use of source files instead of declaration files from referenced projects."
                    },
                    "Emit_class_fields_with_Define_instead_of_Set": {
                        "code": 6222,
                        "category": 3,
                        "key": "Emit_class_fields_with_Define_instead_of_Set_6222",
                        "message": "Emit class fields with Define instead of Set."
                    },
                    "Generates_a_CPU_profile": {
                        "code": 6223,
                        "category": 3,
                        "key": "Generates_a_CPU_profile_6223",
                        "message": "Generates a CPU profile."
                    },
                    "Projects_to_reference": {
                        "code": 6300,
                        "category": 3,
                        "key": "Projects_to_reference_6300",
                        "message": "Projects to reference"
                    },
                    "Enable_project_compilation": {
                        "code": 6302,
                        "category": 3,
                        "key": "Enable_project_compilation_6302",
                        "message": "Enable project compilation"
                    },
                    "Composite_projects_may_not_disable_declaration_emit": {
                        "code": 6304,
                        "category": 1,
                        "key": "Composite_projects_may_not_disable_declaration_emit_6304",
                        "message": "Composite projects may not disable declaration emit."
                    },
                    "Output_file_0_has_not_been_built_from_source_file_1": {
                        "code": 6305,
                        "category": 1,
                        "key": "Output_file_0_has_not_been_built_from_source_file_1_6305",
                        "message": "Output file '{0}' has not been built from source file '{1}'."
                    },
                    "Referenced_project_0_must_have_setting_composite_Colon_true": {
                        "code": 6306,
                        "category": 1,
                        "key": "Referenced_project_0_must_have_setting_composite_Colon_true_6306",
                        "message": "Referenced project '{0}' must have setting \"composite\": true."
                    },
                    "File_0_is_not_listed_within_the_file_list_of_project_1_Projects_must_list_all_files_or_use_an_include_pattern": {
                        "code": 6307,
                        "category": 1,
                        "key": "File_0_is_not_listed_within_the_file_list_of_project_1_Projects_must_list_all_files_or_use_an_includ_6307",
                        "message": "File '{0}' is not listed within the file list of project '{1}'. Projects must list all files or use an 'include' pattern."
                    },
                    "Cannot_prepend_project_0_because_it_does_not_have_outFile_set": {
                        "code": 6308,
                        "category": 1,
                        "key": "Cannot_prepend_project_0_because_it_does_not_have_outFile_set_6308",
                        "message": "Cannot prepend project '{0}' because it does not have 'outFile' set"
                    },
                    "Output_file_0_from_project_1_does_not_exist": {
                        "code": 6309,
                        "category": 1,
                        "key": "Output_file_0_from_project_1_does_not_exist_6309",
                        "message": "Output file '{0}' from project '{1}' does not exist"
                    },
                    "Project_0_is_out_of_date_because_oldest_output_1_is_older_than_newest_input_2": {
                        "code": 6350,
                        "category": 3,
                        "key": "Project_0_is_out_of_date_because_oldest_output_1_is_older_than_newest_input_2_6350",
                        "message": "Project '{0}' is out of date because oldest output '{1}' is older than newest input '{2}'"
                    },
                    "Project_0_is_up_to_date_because_newest_input_1_is_older_than_oldest_output_2": {
                        "code": 6351,
                        "category": 3,
                        "key": "Project_0_is_up_to_date_because_newest_input_1_is_older_than_oldest_output_2_6351",
                        "message": "Project '{0}' is up to date because newest input '{1}' is older than oldest output '{2}'"
                    },
                    "Project_0_is_out_of_date_because_output_file_1_does_not_exist": {
                        "code": 6352,
                        "category": 3,
                        "key": "Project_0_is_out_of_date_because_output_file_1_does_not_exist_6352",
                        "message": "Project '{0}' is out of date because output file '{1}' does not exist"
                    },
                    "Project_0_is_out_of_date_because_its_dependency_1_is_out_of_date": {
                        "code": 6353,
                        "category": 3,
                        "key": "Project_0_is_out_of_date_because_its_dependency_1_is_out_of_date_6353",
                        "message": "Project '{0}' is out of date because its dependency '{1}' is out of date"
                    },
                    "Project_0_is_up_to_date_with_d_ts_files_from_its_dependencies": {
                        "code": 6354,
                        "category": 3,
                        "key": "Project_0_is_up_to_date_with_d_ts_files_from_its_dependencies_6354",
                        "message": "Project '{0}' is up to date with .d.ts files from its dependencies"
                    },
                    "Projects_in_this_build_Colon_0": {
                        "code": 6355,
                        "category": 3,
                        "key": "Projects_in_this_build_Colon_0_6355",
                        "message": "Projects in this build: {0}"
                    },
                    "A_non_dry_build_would_delete_the_following_files_Colon_0": {
                        "code": 6356,
                        "category": 3,
                        "key": "A_non_dry_build_would_delete_the_following_files_Colon_0_6356",
                        "message": "A non-dry build would delete the following files: {0}"
                    },
                    "A_non_dry_build_would_build_project_0": {
                        "code": 6357,
                        "category": 3,
                        "key": "A_non_dry_build_would_build_project_0_6357",
                        "message": "A non-dry build would build project '{0}'"
                    },
                    "Building_project_0": {
                        "code": 6358,
                        "category": 3,
                        "key": "Building_project_0_6358",
                        "message": "Building project '{0}'..."
                    },
                    "Updating_output_timestamps_of_project_0": {
                        "code": 6359,
                        "category": 3,
                        "key": "Updating_output_timestamps_of_project_0_6359",
                        "message": "Updating output timestamps of project '{0}'..."
                    },
                    "delete_this_Project_0_is_up_to_date_because_it_was_previously_built": {
                        "code": 6360,
                        "category": 3,
                        "key": "delete_this_Project_0_is_up_to_date_because_it_was_previously_built_6360",
                        "message": "delete this - Project '{0}' is up to date because it was previously built"
                    },
                    "Project_0_is_up_to_date": {
                        "code": 6361,
                        "category": 3,
                        "key": "Project_0_is_up_to_date_6361",
                        "message": "Project '{0}' is up to date"
                    },
                    "Skipping_build_of_project_0_because_its_dependency_1_has_errors": {
                        "code": 6362,
                        "category": 3,
                        "key": "Skipping_build_of_project_0_because_its_dependency_1_has_errors_6362",
                        "message": "Skipping build of project '{0}' because its dependency '{1}' has errors"
                    },
                    "Project_0_can_t_be_built_because_its_dependency_1_has_errors": {
                        "code": 6363,
                        "category": 3,
                        "key": "Project_0_can_t_be_built_because_its_dependency_1_has_errors_6363",
                        "message": "Project '{0}' can't be built because its dependency '{1}' has errors"
                    },
                    "Build_one_or_more_projects_and_their_dependencies_if_out_of_date": {
                        "code": 6364,
                        "category": 3,
                        "key": "Build_one_or_more_projects_and_their_dependencies_if_out_of_date_6364",
                        "message": "Build one or more projects and their dependencies, if out of date"
                    },
                    "Delete_the_outputs_of_all_projects": {
                        "code": 6365,
                        "category": 3,
                        "key": "Delete_the_outputs_of_all_projects_6365",
                        "message": "Delete the outputs of all projects"
                    },
                    "Enable_verbose_logging": {
                        "code": 6366,
                        "category": 3,
                        "key": "Enable_verbose_logging_6366",
                        "message": "Enable verbose logging"
                    },
                    "Show_what_would_be_built_or_deleted_if_specified_with_clean": {
                        "code": 6367,
                        "category": 3,
                        "key": "Show_what_would_be_built_or_deleted_if_specified_with_clean_6367",
                        "message": "Show what would be built (or deleted, if specified with '--clean')"
                    },
                    "Build_all_projects_including_those_that_appear_to_be_up_to_date": {
                        "code": 6368,
                        "category": 3,
                        "key": "Build_all_projects_including_those_that_appear_to_be_up_to_date_6368",
                        "message": "Build all projects, including those that appear to be up to date"
                    },
                    "Option_build_must_be_the_first_command_line_argument": {
                        "code": 6369,
                        "category": 1,
                        "key": "Option_build_must_be_the_first_command_line_argument_6369",
                        "message": "Option '--build' must be the first command line argument."
                    },
                    "Options_0_and_1_cannot_be_combined": {
                        "code": 6370,
                        "category": 1,
                        "key": "Options_0_and_1_cannot_be_combined_6370",
                        "message": "Options '{0}' and '{1}' cannot be combined."
                    },
                    "Updating_unchanged_output_timestamps_of_project_0": {
                        "code": 6371,
                        "category": 3,
                        "key": "Updating_unchanged_output_timestamps_of_project_0_6371",
                        "message": "Updating unchanged output timestamps of project '{0}'..."
                    },
                    "Project_0_is_out_of_date_because_output_of_its_dependency_1_has_changed": {
                        "code": 6372,
                        "category": 3,
                        "key": "Project_0_is_out_of_date_because_output_of_its_dependency_1_has_changed_6372",
                        "message": "Project '{0}' is out of date because output of its dependency '{1}' has changed"
                    },
                    "Updating_output_of_project_0": {
                        "code": 6373,
                        "category": 3,
                        "key": "Updating_output_of_project_0_6373",
                        "message": "Updating output of project '{0}'..."
                    },
                    "A_non_dry_build_would_update_timestamps_for_output_of_project_0": {
                        "code": 6374,
                        "category": 3,
                        "key": "A_non_dry_build_would_update_timestamps_for_output_of_project_0_6374",
                        "message": "A non-dry build would update timestamps for output of project '{0}'"
                    },
                    "A_non_dry_build_would_update_output_of_project_0": {
                        "code": 6375,
                        "category": 3,
                        "key": "A_non_dry_build_would_update_output_of_project_0_6375",
                        "message": "A non-dry build would update output of project '{0}'"
                    },
                    "Cannot_update_output_of_project_0_because_there_was_error_reading_file_1": {
                        "code": 6376,
                        "category": 3,
                        "key": "Cannot_update_output_of_project_0_because_there_was_error_reading_file_1_6376",
                        "message": "Cannot update output of project '{0}' because there was error reading file '{1}'"
                    },
                    "Cannot_write_file_0_because_it_will_overwrite_tsbuildinfo_file_generated_by_referenced_project_1": {
                        "code": 6377,
                        "category": 1,
                        "key": "Cannot_write_file_0_because_it_will_overwrite_tsbuildinfo_file_generated_by_referenced_project_1_6377",
                        "message": "Cannot write file '{0}' because it will overwrite '.tsbuildinfo' file generated by referenced project '{1}'"
                    },
                    "Enable_incremental_compilation": {
                        "code": 6378,
                        "category": 3,
                        "key": "Enable_incremental_compilation_6378",
                        "message": "Enable incremental compilation"
                    },
                    "Composite_projects_may_not_disable_incremental_compilation": {
                        "code": 6379,
                        "category": 1,
                        "key": "Composite_projects_may_not_disable_incremental_compilation_6379",
                        "message": "Composite projects may not disable incremental compilation."
                    },
                    "Specify_file_to_store_incremental_compilation_information": {
                        "code": 6380,
                        "category": 3,
                        "key": "Specify_file_to_store_incremental_compilation_information_6380",
                        "message": "Specify file to store incremental compilation information"
                    },
                    "Project_0_is_out_of_date_because_output_for_it_was_generated_with_version_1_that_differs_with_current_version_2": {
                        "code": 6381,
                        "category": 3,
                        "key": "Project_0_is_out_of_date_because_output_for_it_was_generated_with_version_1_that_differs_with_curren_6381",
                        "message": "Project '{0}' is out of date because output for it was generated with version '{1}' that differs with current version '{2}'"
                    },
                    "Skipping_build_of_project_0_because_its_dependency_1_was_not_built": {
                        "code": 6382,
                        "category": 3,
                        "key": "Skipping_build_of_project_0_because_its_dependency_1_was_not_built_6382",
                        "message": "Skipping build of project '{0}' because its dependency '{1}' was not built"
                    },
                    "Project_0_can_t_be_built_because_its_dependency_1_was_not_built": {
                        "code": 6383,
                        "category": 3,
                        "key": "Project_0_can_t_be_built_because_its_dependency_1_was_not_built_6383",
                        "message": "Project '{0}' can't be built because its dependency '{1}' was not built"
                    },
                    "The_expected_type_comes_from_property_0_which_is_declared_here_on_type_1": {
                        "code": 6500,
                        "category": 3,
                        "key": "The_expected_type_comes_from_property_0_which_is_declared_here_on_type_1_6500",
                        "message": "The expected type comes from property '{0}' which is declared here on type '{1}'"
                    },
                    "The_expected_type_comes_from_this_index_signature": {
                        "code": 6501,
                        "category": 3,
                        "key": "The_expected_type_comes_from_this_index_signature_6501",
                        "message": "The expected type comes from this index signature."
                    },
                    "The_expected_type_comes_from_the_return_type_of_this_signature": {
                        "code": 6502,
                        "category": 3,
                        "key": "The_expected_type_comes_from_the_return_type_of_this_signature_6502",
                        "message": "The expected type comes from the return type of this signature."
                    },
                    "Print_names_of_files_that_are_part_of_the_compilation_and_then_stop_processing": {
                        "code": 6503,
                        "category": 3,
                        "key": "Print_names_of_files_that_are_part_of_the_compilation_and_then_stop_processing_6503",
                        "message": "Print names of files that are part of the compilation and then stop processing."
                    },
                    "Variable_0_implicitly_has_an_1_type": {
                        "code": 7005,
                        "category": 1,
                        "key": "Variable_0_implicitly_has_an_1_type_7005",
                        "message": "Variable '{0}' implicitly has an '{1}' type."
                    },
                    "Parameter_0_implicitly_has_an_1_type": {
                        "code": 7006,
                        "category": 1,
                        "key": "Parameter_0_implicitly_has_an_1_type_7006",
                        "message": "Parameter '{0}' implicitly has an '{1}' type."
                    },
                    "Member_0_implicitly_has_an_1_type": {
                        "code": 7008,
                        "category": 1,
                        "key": "Member_0_implicitly_has_an_1_type_7008",
                        "message": "Member '{0}' implicitly has an '{1}' type."
                    },
                    "new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type": {
                        "code": 7009,
                        "category": 1,
                        "key": "new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type_7009",
                        "message": "'new' expression, whose target lacks a construct signature, implicitly has an 'any' type."
                    },
                    "_0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type": {
                        "code": 7010,
                        "category": 1,
                        "key": "_0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type_7010",
                        "message": "'{0}', which lacks return-type annotation, implicitly has an '{1}' return type."
                    },
                    "Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type": {
                        "code": 7011,
                        "category": 1,
                        "key": "Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type_7011",
                        "message": "Function expression, which lacks return-type annotation, implicitly has an '{0}' return type."
                    },
                    "Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type": {
                        "code": 7013,
                        "category": 1,
                        "key": "Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type_7013",
                        "message": "Construct signature, which lacks return-type annotation, implicitly has an 'any' return type."
                    },
                    "Function_type_which_lacks_return_type_annotation_implicitly_has_an_0_return_type": {
                        "code": 7014,
                        "category": 1,
                        "key": "Function_type_which_lacks_return_type_annotation_implicitly_has_an_0_return_type_7014",
                        "message": "Function type, which lacks return-type annotation, implicitly has an '{0}' return type."
                    },
                    "Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number": {
                        "code": 7015,
                        "category": 1,
                        "key": "Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number_7015",
                        "message": "Element implicitly has an 'any' type because index expression is not of type 'number'."
                    },
                    "Could_not_find_a_declaration_file_for_module_0_1_implicitly_has_an_any_type": {
                        "code": 7016,
                        "category": 1,
                        "key": "Could_not_find_a_declaration_file_for_module_0_1_implicitly_has_an_any_type_7016",
                        "message": "Could not find a declaration file for module '{0}'. '{1}' implicitly has an 'any' type."
                    },
                    "Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature": {
                        "code": 7017,
                        "category": 1,
                        "key": "Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature_7017",
                        "message": "Element implicitly has an 'any' type because type '{0}' has no index signature."
                    },
                    "Object_literal_s_property_0_implicitly_has_an_1_type": {
                        "code": 7018,
                        "category": 1,
                        "key": "Object_literal_s_property_0_implicitly_has_an_1_type_7018",
                        "message": "Object literal's property '{0}' implicitly has an '{1}' type."
                    },
                    "Rest_parameter_0_implicitly_has_an_any_type": {
                        "code": 7019,
                        "category": 1,
                        "key": "Rest_parameter_0_implicitly_has_an_any_type_7019",
                        "message": "Rest parameter '{0}' implicitly has an 'any[]' type."
                    },
                    "Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type": {
                        "code": 7020,
                        "category": 1,
                        "key": "Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type_7020",
                        "message": "Call signature, which lacks return-type annotation, implicitly has an 'any' return type."
                    },
                    "_0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer": {
                        "code": 7022,
                        "category": 1,
                        "key": "_0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or__7022",
                        "message": "'{0}' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer."
                    },
                    "_0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions": {
                        "code": 7023,
                        "category": 1,
                        "key": "_0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_reference_7023",
                        "message": "'{0}' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions."
                    },
                    "Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions": {
                        "code": 7024,
                        "category": 1,
                        "key": "Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_ref_7024",
                        "message": "Function implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions."
                    },
                    "Generator_implicitly_has_yield_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_type_annotation": {
                        "code": 7025,
                        "category": 1,
                        "key": "Generator_implicitly_has_yield_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_retu_7025",
                        "message": "Generator implicitly has yield type '{0}' because it does not yield any values. Consider supplying a return type annotation."
                    },
                    "JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists": {
                        "code": 7026,
                        "category": 1,
                        "key": "JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists_7026",
                        "message": "JSX element implicitly has type 'any' because no interface 'JSX.{0}' exists."
                    },
                    "Unreachable_code_detected": {
                        "code": 7027,
                        "category": 1,
                        "key": "Unreachable_code_detected_7027",
                        "message": "Unreachable code detected.",
                        "reportsUnnecessary": true
                    },
                    "Unused_label": {
                        "code": 7028,
                        "category": 1,
                        "key": "Unused_label_7028",
                        "message": "Unused label.",
                        "reportsUnnecessary": true
                    },
                    "Fallthrough_case_in_switch": {
                        "code": 7029,
                        "category": 1,
                        "key": "Fallthrough_case_in_switch_7029",
                        "message": "Fallthrough case in switch."
                    },
                    "Not_all_code_paths_return_a_value": {
                        "code": 7030,
                        "category": 1,
                        "key": "Not_all_code_paths_return_a_value_7030",
                        "message": "Not all code paths return a value."
                    },
                    "Binding_element_0_implicitly_has_an_1_type": {
                        "code": 7031,
                        "category": 1,
                        "key": "Binding_element_0_implicitly_has_an_1_type_7031",
                        "message": "Binding element '{0}' implicitly has an '{1}' type."
                    },
                    "Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_parameter_type_annotation": {
                        "code": 7032,
                        "category": 1,
                        "key": "Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_parameter_type_annotation_7032",
                        "message": "Property '{0}' implicitly has type 'any', because its set accessor lacks a parameter type annotation."
                    },
                    "Property_0_implicitly_has_type_any_because_its_get_accessor_lacks_a_return_type_annotation": {
                        "code": 7033,
                        "category": 1,
                        "key": "Property_0_implicitly_has_type_any_because_its_get_accessor_lacks_a_return_type_annotation_7033",
                        "message": "Property '{0}' implicitly has type 'any', because its get accessor lacks a return type annotation."
                    },
                    "Variable_0_implicitly_has_type_1_in_some_locations_where_its_type_cannot_be_determined": {
                        "code": 7034,
                        "category": 1,
                        "key": "Variable_0_implicitly_has_type_1_in_some_locations_where_its_type_cannot_be_determined_7034",
                        "message": "Variable '{0}' implicitly has type '{1}' in some locations where its type cannot be determined."
                    },
                    "Try_npm_install_types_Slash_1_if_it_exists_or_add_a_new_declaration_d_ts_file_containing_declare_module_0": {
                        "code": 7035,
                        "category": 1,
                        "key": "Try_npm_install_types_Slash_1_if_it_exists_or_add_a_new_declaration_d_ts_file_containing_declare_mod_7035",
                        "message": "Try `npm install @types/{1}` if it exists or add a new declaration (.d.ts) file containing `declare module '{0}';`"
                    },
                    "Dynamic_import_s_specifier_must_be_of_type_string_but_here_has_type_0": {
                        "code": 7036,
                        "category": 1,
                        "key": "Dynamic_import_s_specifier_must_be_of_type_string_but_here_has_type_0_7036",
                        "message": "Dynamic import's specifier must be of type 'string', but here has type '{0}'."
                    },
                    "Enables_emit_interoperability_between_CommonJS_and_ES_Modules_via_creation_of_namespace_objects_for_all_imports_Implies_allowSyntheticDefaultImports": {
                        "code": 7037,
                        "category": 3,
                        "key": "Enables_emit_interoperability_between_CommonJS_and_ES_Modules_via_creation_of_namespace_objects_for__7037",
                        "message": "Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'."
                    },
                    "Type_originates_at_this_import_A_namespace_style_import_cannot_be_called_or_constructed_and_will_cause_a_failure_at_runtime_Consider_using_a_default_import_or_import_require_here_instead": {
                        "code": 7038,
                        "category": 3,
                        "key": "Type_originates_at_this_import_A_namespace_style_import_cannot_be_called_or_constructed_and_will_cau_7038",
                        "message": "Type originates at this import. A namespace-style import cannot be called or constructed, and will cause a failure at runtime. Consider using a default import or import require here instead."
                    },
                    "Mapped_object_type_implicitly_has_an_any_template_type": {
                        "code": 7039,
                        "category": 1,
                        "key": "Mapped_object_type_implicitly_has_an_any_template_type_7039",
                        "message": "Mapped object type implicitly has an 'any' template type."
                    },
                    "If_the_0_package_actually_exposes_this_module_consider_sending_a_pull_request_to_amend_https_Colon_Slash_Slashgithub_com_SlashDefinitelyTyped_SlashDefinitelyTyped_Slashtree_Slashmaster_Slashtypes_Slash_1": {
                        "code": 7040,
                        "category": 1,
                        "key": "If_the_0_package_actually_exposes_this_module_consider_sending_a_pull_request_to_amend_https_Colon_S_7040",
                        "message": "If the '{0}' package actually exposes this module, consider sending a pull request to amend 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/{1}`"
                    },
                    "The_containing_arrow_function_captures_the_global_value_of_this": {
                        "code": 7041,
                        "category": 1,
                        "key": "The_containing_arrow_function_captures_the_global_value_of_this_7041",
                        "message": "The containing arrow function captures the global value of 'this'."
                    },
                    "Module_0_was_resolved_to_1_but_resolveJsonModule_is_not_used": {
                        "code": 7042,
                        "category": 1,
                        "key": "Module_0_was_resolved_to_1_but_resolveJsonModule_is_not_used_7042",
                        "message": "Module '{0}' was resolved to '{1}', but '--resolveJsonModule' is not used."
                    },
                    "Variable_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage": {
                        "code": 7043,
                        "category": 2,
                        "key": "Variable_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage_7043",
                        "message": "Variable '{0}' implicitly has an '{1}' type, but a better type may be inferred from usage."
                    },
                    "Parameter_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage": {
                        "code": 7044,
                        "category": 2,
                        "key": "Parameter_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage_7044",
                        "message": "Parameter '{0}' implicitly has an '{1}' type, but a better type may be inferred from usage."
                    },
                    "Member_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage": {
                        "code": 7045,
                        "category": 2,
                        "key": "Member_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage_7045",
                        "message": "Member '{0}' implicitly has an '{1}' type, but a better type may be inferred from usage."
                    },
                    "Variable_0_implicitly_has_type_1_in_some_locations_but_a_better_type_may_be_inferred_from_usage": {
                        "code": 7046,
                        "category": 2,
                        "key": "Variable_0_implicitly_has_type_1_in_some_locations_but_a_better_type_may_be_inferred_from_usage_7046",
                        "message": "Variable '{0}' implicitly has type '{1}' in some locations, but a better type may be inferred from usage."
                    },
                    "Rest_parameter_0_implicitly_has_an_any_type_but_a_better_type_may_be_inferred_from_usage": {
                        "code": 7047,
                        "category": 2,
                        "key": "Rest_parameter_0_implicitly_has_an_any_type_but_a_better_type_may_be_inferred_from_usage_7047",
                        "message": "Rest parameter '{0}' implicitly has an 'any[]' type, but a better type may be inferred from usage."
                    },
                    "Property_0_implicitly_has_type_any_but_a_better_type_for_its_get_accessor_may_be_inferred_from_usage": {
                        "code": 7048,
                        "category": 2,
                        "key": "Property_0_implicitly_has_type_any_but_a_better_type_for_its_get_accessor_may_be_inferred_from_usage_7048",
                        "message": "Property '{0}' implicitly has type 'any', but a better type for its get accessor may be inferred from usage."
                    },
                    "Property_0_implicitly_has_type_any_but_a_better_type_for_its_set_accessor_may_be_inferred_from_usage": {
                        "code": 7049,
                        "category": 2,
                        "key": "Property_0_implicitly_has_type_any_but_a_better_type_for_its_set_accessor_may_be_inferred_from_usage_7049",
                        "message": "Property '{0}' implicitly has type 'any', but a better type for its set accessor may be inferred from usage."
                    },
                    "_0_implicitly_has_an_1_return_type_but_a_better_type_may_be_inferred_from_usage": {
                        "code": 7050,
                        "category": 2,
                        "key": "_0_implicitly_has_an_1_return_type_but_a_better_type_may_be_inferred_from_usage_7050",
                        "message": "'{0}' implicitly has an '{1}' return type, but a better type may be inferred from usage."
                    },
                    "Parameter_has_a_name_but_no_type_Did_you_mean_0_Colon_1": {
                        "code": 7051,
                        "category": 1,
                        "key": "Parameter_has_a_name_but_no_type_Did_you_mean_0_Colon_1_7051",
                        "message": "Parameter has a name but no type. Did you mean '{0}: {1}'?"
                    },
                    "Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature_Did_you_mean_to_call_1": {
                        "code": 7052,
                        "category": 1,
                        "key": "Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature_Did_you_mean_to_call_1_7052",
                        "message": "Element implicitly has an 'any' type because type '{0}' has no index signature. Did you mean to call '{1}' ?"
                    },
                    "Element_implicitly_has_an_any_type_because_expression_of_type_0_can_t_be_used_to_index_type_1": {
                        "code": 7053,
                        "category": 1,
                        "key": "Element_implicitly_has_an_any_type_because_expression_of_type_0_can_t_be_used_to_index_type_1_7053",
                        "message": "Element implicitly has an 'any' type because expression of type '{0}' can't be used to index type '{1}'."
                    },
                    "No_index_signature_with_a_parameter_of_type_0_was_found_on_type_1": {
                        "code": 7054,
                        "category": 1,
                        "key": "No_index_signature_with_a_parameter_of_type_0_was_found_on_type_1_7054",
                        "message": "No index signature with a parameter of type '{0}' was found on type '{1}'."
                    },
                    "_0_which_lacks_return_type_annotation_implicitly_has_an_1_yield_type": {
                        "code": 7055,
                        "category": 1,
                        "key": "_0_which_lacks_return_type_annotation_implicitly_has_an_1_yield_type_7055",
                        "message": "'{0}', which lacks return-type annotation, implicitly has an '{1}' yield type."
                    },
                    "You_cannot_rename_this_element": {
                        "code": 8000,
                        "category": 1,
                        "key": "You_cannot_rename_this_element_8000",
                        "message": "You cannot rename this element."
                    },
                    "You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library": {
                        "code": 8001,
                        "category": 1,
                        "key": "You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library_8001",
                        "message": "You cannot rename elements that are defined in the standard TypeScript library."
                    },
                    "import_can_only_be_used_in_a_ts_file": {
                        "code": 8002,
                        "category": 1,
                        "key": "import_can_only_be_used_in_a_ts_file_8002",
                        "message": "'import ... =' can only be used in a .ts file."
                    },
                    "export_can_only_be_used_in_a_ts_file": {
                        "code": 8003,
                        "category": 1,
                        "key": "export_can_only_be_used_in_a_ts_file_8003",
                        "message": "'export=' can only be used in a .ts file."
                    },
                    "type_parameter_declarations_can_only_be_used_in_a_ts_file": {
                        "code": 8004,
                        "category": 1,
                        "key": "type_parameter_declarations_can_only_be_used_in_a_ts_file_8004",
                        "message": "'type parameter declarations' can only be used in a .ts file."
                    },
                    "implements_clauses_can_only_be_used_in_a_ts_file": {
                        "code": 8005,
                        "category": 1,
                        "key": "implements_clauses_can_only_be_used_in_a_ts_file_8005",
                        "message": "'implements clauses' can only be used in a .ts file."
                    },
                    "interface_declarations_can_only_be_used_in_a_ts_file": {
                        "code": 8006,
                        "category": 1,
                        "key": "interface_declarations_can_only_be_used_in_a_ts_file_8006",
                        "message": "'interface declarations' can only be used in a .ts file."
                    },
                    "module_declarations_can_only_be_used_in_a_ts_file": {
                        "code": 8007,
                        "category": 1,
                        "key": "module_declarations_can_only_be_used_in_a_ts_file_8007",
                        "message": "'module declarations' can only be used in a .ts file."
                    },
                    "type_aliases_can_only_be_used_in_a_ts_file": {
                        "code": 8008,
                        "category": 1,
                        "key": "type_aliases_can_only_be_used_in_a_ts_file_8008",
                        "message": "'type aliases' can only be used in a .ts file."
                    },
                    "_0_can_only_be_used_in_a_ts_file": {
                        "code": 8009,
                        "category": 1,
                        "key": "_0_can_only_be_used_in_a_ts_file_8009",
                        "message": "'{0}' can only be used in a .ts file."
                    },
                    "types_can_only_be_used_in_a_ts_file": {
                        "code": 8010,
                        "category": 1,
                        "key": "types_can_only_be_used_in_a_ts_file_8010",
                        "message": "'types' can only be used in a .ts file."
                    },
                    "type_arguments_can_only_be_used_in_a_ts_file": {
                        "code": 8011,
                        "category": 1,
                        "key": "type_arguments_can_only_be_used_in_a_ts_file_8011",
                        "message": "'type arguments' can only be used in a .ts file."
                    },
                    "parameter_modifiers_can_only_be_used_in_a_ts_file": {
                        "code": 8012,
                        "category": 1,
                        "key": "parameter_modifiers_can_only_be_used_in_a_ts_file_8012",
                        "message": "'parameter modifiers' can only be used in a .ts file."
                    },
                    "non_null_assertions_can_only_be_used_in_a_ts_file": {
                        "code": 8013,
                        "category": 1,
                        "key": "non_null_assertions_can_only_be_used_in_a_ts_file_8013",
                        "message": "'non-null assertions' can only be used in a .ts file."
                    },
                    "enum_declarations_can_only_be_used_in_a_ts_file": {
                        "code": 8015,
                        "category": 1,
                        "key": "enum_declarations_can_only_be_used_in_a_ts_file_8015",
                        "message": "'enum declarations' can only be used in a .ts file."
                    },
                    "type_assertion_expressions_can_only_be_used_in_a_ts_file": {
                        "code": 8016,
                        "category": 1,
                        "key": "type_assertion_expressions_can_only_be_used_in_a_ts_file_8016",
                        "message": "'type assertion expressions' can only be used in a .ts file."
                    },
                    "Octal_literal_types_must_use_ES2015_syntax_Use_the_syntax_0": {
                        "code": 8017,
                        "category": 1,
                        "key": "Octal_literal_types_must_use_ES2015_syntax_Use_the_syntax_0_8017",
                        "message": "Octal literal types must use ES2015 syntax. Use the syntax '{0}'."
                    },
                    "Octal_literals_are_not_allowed_in_enums_members_initializer_Use_the_syntax_0": {
                        "code": 8018,
                        "category": 1,
                        "key": "Octal_literals_are_not_allowed_in_enums_members_initializer_Use_the_syntax_0_8018",
                        "message": "Octal literals are not allowed in enums members initializer. Use the syntax '{0}'."
                    },
                    "Report_errors_in_js_files": {
                        "code": 8019,
                        "category": 3,
                        "key": "Report_errors_in_js_files_8019",
                        "message": "Report errors in .js files."
                    },
                    "JSDoc_types_can_only_be_used_inside_documentation_comments": {
                        "code": 8020,
                        "category": 1,
                        "key": "JSDoc_types_can_only_be_used_inside_documentation_comments_8020",
                        "message": "JSDoc types can only be used inside documentation comments."
                    },
                    "JSDoc_typedef_tag_should_either_have_a_type_annotation_or_be_followed_by_property_or_member_tags": {
                        "code": 8021,
                        "category": 1,
                        "key": "JSDoc_typedef_tag_should_either_have_a_type_annotation_or_be_followed_by_property_or_member_tags_8021",
                        "message": "JSDoc '@typedef' tag should either have a type annotation or be followed by '@property' or '@member' tags."
                    },
                    "JSDoc_0_is_not_attached_to_a_class": {
                        "code": 8022,
                        "category": 1,
                        "key": "JSDoc_0_is_not_attached_to_a_class_8022",
                        "message": "JSDoc '@{0}' is not attached to a class."
                    },
                    "JSDoc_0_1_does_not_match_the_extends_2_clause": {
                        "code": 8023,
                        "category": 1,
                        "key": "JSDoc_0_1_does_not_match_the_extends_2_clause_8023",
                        "message": "JSDoc '@{0} {1}' does not match the 'extends {2}' clause."
                    },
                    "JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name": {
                        "code": 8024,
                        "category": 1,
                        "key": "JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name_8024",
                        "message": "JSDoc '@param' tag has name '{0}', but there is no parameter with that name."
                    },
                    "Class_declarations_cannot_have_more_than_one_augments_or_extends_tag": {
                        "code": 8025,
                        "category": 1,
                        "key": "Class_declarations_cannot_have_more_than_one_augments_or_extends_tag_8025",
                        "message": "Class declarations cannot have more than one `@augments` or `@extends` tag."
                    },
                    "Expected_0_type_arguments_provide_these_with_an_extends_tag": {
                        "code": 8026,
                        "category": 1,
                        "key": "Expected_0_type_arguments_provide_these_with_an_extends_tag_8026",
                        "message": "Expected {0} type arguments; provide these with an '@extends' tag."
                    },
                    "Expected_0_1_type_arguments_provide_these_with_an_extends_tag": {
                        "code": 8027,
                        "category": 1,
                        "key": "Expected_0_1_type_arguments_provide_these_with_an_extends_tag_8027",
                        "message": "Expected {0}-{1} type arguments; provide these with an '@extends' tag."
                    },
                    "JSDoc_may_only_appear_in_the_last_parameter_of_a_signature": {
                        "code": 8028,
                        "category": 1,
                        "key": "JSDoc_may_only_appear_in_the_last_parameter_of_a_signature_8028",
                        "message": "JSDoc '...' may only appear in the last parameter of a signature."
                    },
                    "JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name_It_would_match_arguments_if_it_had_an_array_type": {
                        "code": 8029,
                        "category": 1,
                        "key": "JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name_It_would_match_arguments_if_it_h_8029",
                        "message": "JSDoc '@param' tag has name '{0}', but there is no parameter with that name. It would match 'arguments' if it had an array type."
                    },
                    "The_type_of_a_function_declaration_must_match_the_function_s_signature": {
                        "code": 8030,
                        "category": 1,
                        "key": "The_type_of_a_function_declaration_must_match_the_function_s_signature_8030",
                        "message": "The type of a function declaration must match the function's signature."
                    },
                    "You_cannot_rename_a_module_via_a_global_import": {
                        "code": 8031,
                        "category": 1,
                        "key": "You_cannot_rename_a_module_via_a_global_import_8031",
                        "message": "You cannot rename a module via a global import."
                    },
                    "Qualified_name_0_is_not_allowed_without_a_leading_param_object_1": {
                        "code": 8032,
                        "category": 1,
                        "key": "Qualified_name_0_is_not_allowed_without_a_leading_param_object_1_8032",
                        "message": "Qualified name '{0}' is not allowed without a leading '@param {object} {1}'."
                    },
                    "Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_class_extends_clause": {
                        "code": 9002,
                        "category": 1,
                        "key": "Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_clas_9002",
                        "message": "Only identifiers/qualified-names with optional type arguments are currently supported in a class 'extends' clause."
                    },
                    "class_expressions_are_not_currently_supported": {
                        "code": 9003,
                        "category": 1,
                        "key": "class_expressions_are_not_currently_supported_9003",
                        "message": "'class' expressions are not currently supported."
                    },
                    "Language_service_is_disabled": {
                        "code": 9004,
                        "category": 1,
                        "key": "Language_service_is_disabled_9004",
                        "message": "Language service is disabled."
                    },
                    "Declaration_emit_for_this_file_requires_using_private_name_0_An_explicit_type_annotation_may_unblock_declaration_emit": {
                        "code": 9005,
                        "category": 1,
                        "key": "Declaration_emit_for_this_file_requires_using_private_name_0_An_explicit_type_annotation_may_unblock_9005",
                        "message": "Declaration emit for this file requires using private name '{0}'. An explicit type annotation may unblock declaration emit."
                    },
                    "Declaration_emit_for_this_file_requires_using_private_name_0_from_module_1_An_explicit_type_annotation_may_unblock_declaration_emit": {
                        "code": 9006,
                        "category": 1,
                        "key": "Declaration_emit_for_this_file_requires_using_private_name_0_from_module_1_An_explicit_type_annotati_9006",
                        "message": "Declaration emit for this file requires using private name '{0}' from module '{1}'. An explicit type annotation may unblock declaration emit."
                    },
                    "JSX_attributes_must_only_be_assigned_a_non_empty_expression": {
                        "code": 17000,
                        "category": 1,
                        "key": "JSX_attributes_must_only_be_assigned_a_non_empty_expression_17000",
                        "message": "JSX attributes must only be assigned a non-empty 'expression'."
                    },
                    "JSX_elements_cannot_have_multiple_attributes_with_the_same_name": {
                        "code": 17001,
                        "category": 1,
                        "key": "JSX_elements_cannot_have_multiple_attributes_with_the_same_name_17001",
                        "message": "JSX elements cannot have multiple attributes with the same name."
                    },
                    "Expected_corresponding_JSX_closing_tag_for_0": {
                        "code": 17002,
                        "category": 1,
                        "key": "Expected_corresponding_JSX_closing_tag_for_0_17002",
                        "message": "Expected corresponding JSX closing tag for '{0}'."
                    },
                    "JSX_attribute_expected": {
                        "code": 17003,
                        "category": 1,
                        "key": "JSX_attribute_expected_17003",
                        "message": "JSX attribute expected."
                    },
                    "Cannot_use_JSX_unless_the_jsx_flag_is_provided": {
                        "code": 17004,
                        "category": 1,
                        "key": "Cannot_use_JSX_unless_the_jsx_flag_is_provided_17004",
                        "message": "Cannot use JSX unless the '--jsx' flag is provided."
                    },
                    "A_constructor_cannot_contain_a_super_call_when_its_class_extends_null": {
                        "code": 17005,
                        "category": 1,
                        "key": "A_constructor_cannot_contain_a_super_call_when_its_class_extends_null_17005",
                        "message": "A constructor cannot contain a 'super' call when its class extends 'null'."
                    },
                    "An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses": {
                        "code": 17006,
                        "category": 1,
                        "key": "An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_ex_17006",
                        "message": "An unary expression with the '{0}' operator is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses."
                    },
                    "A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses": {
                        "code": 17007,
                        "category": 1,
                        "key": "A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Con_17007",
                        "message": "A type assertion expression is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses."
                    },
                    "JSX_element_0_has_no_corresponding_closing_tag": {
                        "code": 17008,
                        "category": 1,
                        "key": "JSX_element_0_has_no_corresponding_closing_tag_17008",
                        "message": "JSX element '{0}' has no corresponding closing tag."
                    },
                    "super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class": {
                        "code": 17009,
                        "category": 1,
                        "key": "super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class_17009",
                        "message": "'super' must be called before accessing 'this' in the constructor of a derived class."
                    },
                    "Unknown_type_acquisition_option_0": {
                        "code": 17010,
                        "category": 1,
                        "key": "Unknown_type_acquisition_option_0_17010",
                        "message": "Unknown type acquisition option '{0}'."
                    },
                    "super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class": {
                        "code": 17011,
                        "category": 1,
                        "key": "super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class_17011",
                        "message": "'super' must be called before accessing a property of 'super' in the constructor of a derived class."
                    },
                    "_0_is_not_a_valid_meta_property_for_keyword_1_Did_you_mean_2": {
                        "code": 17012,
                        "category": 1,
                        "key": "_0_is_not_a_valid_meta_property_for_keyword_1_Did_you_mean_2_17012",
                        "message": "'{0}' is not a valid meta-property for keyword '{1}'. Did you mean '{2}'?"
                    },
                    "Meta_property_0_is_only_allowed_in_the_body_of_a_function_declaration_function_expression_or_constructor": {
                        "code": 17013,
                        "category": 1,
                        "key": "Meta_property_0_is_only_allowed_in_the_body_of_a_function_declaration_function_expression_or_constru_17013",
                        "message": "Meta-property '{0}' is only allowed in the body of a function declaration, function expression, or constructor."
                    },
                    "JSX_fragment_has_no_corresponding_closing_tag": {
                        "code": 17014,
                        "category": 1,
                        "key": "JSX_fragment_has_no_corresponding_closing_tag_17014",
                        "message": "JSX fragment has no corresponding closing tag."
                    },
                    "Expected_corresponding_closing_tag_for_JSX_fragment": {
                        "code": 17015,
                        "category": 1,
                        "key": "Expected_corresponding_closing_tag_for_JSX_fragment_17015",
                        "message": "Expected corresponding closing tag for JSX fragment."
                    },
                    "JSX_fragment_is_not_supported_when_using_jsxFactory": {
                        "code": 17016,
                        "category": 1,
                        "key": "JSX_fragment_is_not_supported_when_using_jsxFactory_17016",
                        "message": "JSX fragment is not supported when using --jsxFactory"
                    },
                    "JSX_fragment_is_not_supported_when_using_an_inline_JSX_factory_pragma": {
                        "code": 17017,
                        "category": 1,
                        "key": "JSX_fragment_is_not_supported_when_using_an_inline_JSX_factory_pragma_17017",
                        "message": "JSX fragment is not supported when using an inline JSX factory pragma"
                    },
                    "Circularity_detected_while_resolving_configuration_Colon_0": {
                        "code": 18000,
                        "category": 1,
                        "key": "Circularity_detected_while_resolving_configuration_Colon_0_18000",
                        "message": "Circularity detected while resolving configuration: {0}"
                    },
                    "A_path_in_an_extends_option_must_be_relative_or_rooted_but_0_is_not": {
                        "code": 18001,
                        "category": 1,
                        "key": "A_path_in_an_extends_option_must_be_relative_or_rooted_but_0_is_not_18001",
                        "message": "A path in an 'extends' option must be relative or rooted, but '{0}' is not."
                    },
                    "The_files_list_in_config_file_0_is_empty": {
                        "code": 18002,
                        "category": 1,
                        "key": "The_files_list_in_config_file_0_is_empty_18002",
                        "message": "The 'files' list in config file '{0}' is empty."
                    },
                    "No_inputs_were_found_in_config_file_0_Specified_include_paths_were_1_and_exclude_paths_were_2": {
                        "code": 18003,
                        "category": 1,
                        "key": "No_inputs_were_found_in_config_file_0_Specified_include_paths_were_1_and_exclude_paths_were_2_18003",
                        "message": "No inputs were found in config file '{0}'. Specified 'include' paths were '{1}' and 'exclude' paths were '{2}'."
                    },
                    "File_is_a_CommonJS_module_it_may_be_converted_to_an_ES6_module": {
                        "code": 80001,
                        "category": 2,
                        "key": "File_is_a_CommonJS_module_it_may_be_converted_to_an_ES6_module_80001",
                        "message": "File is a CommonJS module; it may be converted to an ES6 module."
                    },
                    "This_constructor_function_may_be_converted_to_a_class_declaration": {
                        "code": 80002,
                        "category": 2,
                        "key": "This_constructor_function_may_be_converted_to_a_class_declaration_80002",
                        "message": "This constructor function may be converted to a class declaration."
                    },
                    "Import_may_be_converted_to_a_default_import": {
                        "code": 80003,
                        "category": 2,
                        "key": "Import_may_be_converted_to_a_default_import_80003",
                        "message": "Import may be converted to a default import."
                    },
                    "JSDoc_types_may_be_moved_to_TypeScript_types": {
                        "code": 80004,
                        "category": 2,
                        "key": "JSDoc_types_may_be_moved_to_TypeScript_types_80004",
                        "message": "JSDoc types may be moved to TypeScript types."
                    },
                    "require_call_may_be_converted_to_an_import": {
                        "code": 80005,
                        "category": 2,
                        "key": "require_call_may_be_converted_to_an_import_80005",
                        "message": "'require' call may be converted to an import."
                    },
                    "This_may_be_converted_to_an_async_function": {
                        "code": 80006,
                        "category": 2,
                        "key": "This_may_be_converted_to_an_async_function_80006",
                        "message": "This may be converted to an async function."
                    },
                    "await_has_no_effect_on_the_type_of_this_expression": {
                        "code": 80007,
                        "category": 2,
                        "key": "await_has_no_effect_on_the_type_of_this_expression_80007",
                        "message": "'await' has no effect on the type of this expression."
                    },
                    "Numeric_literals_with_absolute_values_equal_to_2_53_or_greater_are_too_large_to_be_represented_accurately_as_integers": {
                        "code": 80008,
                        "category": 2,
                        "key": "Numeric_literals_with_absolute_values_equal_to_2_53_or_greater_are_too_large_to_be_represented_accur_80008",
                        "message": "Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers."
                    },
                    "Add_missing_super_call": {
                        "code": 90001,
                        "category": 3,
                        "key": "Add_missing_super_call_90001",
                        "message": "Add missing 'super()' call"
                    },
                    "Make_super_call_the_first_statement_in_the_constructor": {
                        "code": 90002,
                        "category": 3,
                        "key": "Make_super_call_the_first_statement_in_the_constructor_90002",
                        "message": "Make 'super()' call the first statement in the constructor"
                    },
                    "Change_extends_to_implements": {
                        "code": 90003,
                        "category": 3,
                        "key": "Change_extends_to_implements_90003",
                        "message": "Change 'extends' to 'implements'"
                    },
                    "Remove_declaration_for_Colon_0": {
                        "code": 90004,
                        "category": 3,
                        "key": "Remove_declaration_for_Colon_0_90004",
                        "message": "Remove declaration for: '{0}'"
                    },
                    "Remove_import_from_0": {
                        "code": 90005,
                        "category": 3,
                        "key": "Remove_import_from_0_90005",
                        "message": "Remove import from '{0}'"
                    },
                    "Implement_interface_0": {
                        "code": 90006,
                        "category": 3,
                        "key": "Implement_interface_0_90006",
                        "message": "Implement interface '{0}'"
                    },
                    "Implement_inherited_abstract_class": {
                        "code": 90007,
                        "category": 3,
                        "key": "Implement_inherited_abstract_class_90007",
                        "message": "Implement inherited abstract class"
                    },
                    "Add_0_to_unresolved_variable": {
                        "code": 90008,
                        "category": 3,
                        "key": "Add_0_to_unresolved_variable_90008",
                        "message": "Add '{0}.' to unresolved variable"
                    },
                    "Remove_destructuring": {
                        "code": 90009,
                        "category": 3,
                        "key": "Remove_destructuring_90009",
                        "message": "Remove destructuring"
                    },
                    "Remove_variable_statement": {
                        "code": 90010,
                        "category": 3,
                        "key": "Remove_variable_statement_90010",
                        "message": "Remove variable statement"
                    },
                    "Remove_template_tag": {
                        "code": 90011,
                        "category": 3,
                        "key": "Remove_template_tag_90011",
                        "message": "Remove template tag"
                    },
                    "Remove_type_parameters": {
                        "code": 90012,
                        "category": 3,
                        "key": "Remove_type_parameters_90012",
                        "message": "Remove type parameters"
                    },
                    "Import_0_from_module_1": {
                        "code": 90013,
                        "category": 3,
                        "key": "Import_0_from_module_1_90013",
                        "message": "Import '{0}' from module \"{1}\""
                    },
                    "Change_0_to_1": {
                        "code": 90014,
                        "category": 3,
                        "key": "Change_0_to_1_90014",
                        "message": "Change '{0}' to '{1}'"
                    },
                    "Add_0_to_existing_import_declaration_from_1": {
                        "code": 90015,
                        "category": 3,
                        "key": "Add_0_to_existing_import_declaration_from_1_90015",
                        "message": "Add '{0}' to existing import declaration from \"{1}\""
                    },
                    "Declare_property_0": {
                        "code": 90016,
                        "category": 3,
                        "key": "Declare_property_0_90016",
                        "message": "Declare property '{0}'"
                    },
                    "Add_index_signature_for_property_0": {
                        "code": 90017,
                        "category": 3,
                        "key": "Add_index_signature_for_property_0_90017",
                        "message": "Add index signature for property '{0}'"
                    },
                    "Disable_checking_for_this_file": {
                        "code": 90018,
                        "category": 3,
                        "key": "Disable_checking_for_this_file_90018",
                        "message": "Disable checking for this file"
                    },
                    "Ignore_this_error_message": {
                        "code": 90019,
                        "category": 3,
                        "key": "Ignore_this_error_message_90019",
                        "message": "Ignore this error message"
                    },
                    "Initialize_property_0_in_the_constructor": {
                        "code": 90020,
                        "category": 3,
                        "key": "Initialize_property_0_in_the_constructor_90020",
                        "message": "Initialize property '{0}' in the constructor"
                    },
                    "Initialize_static_property_0": {
                        "code": 90021,
                        "category": 3,
                        "key": "Initialize_static_property_0_90021",
                        "message": "Initialize static property '{0}'"
                    },
                    "Change_spelling_to_0": {
                        "code": 90022,
                        "category": 3,
                        "key": "Change_spelling_to_0_90022",
                        "message": "Change spelling to '{0}'"
                    },
                    "Declare_method_0": {
                        "code": 90023,
                        "category": 3,
                        "key": "Declare_method_0_90023",
                        "message": "Declare method '{0}'"
                    },
                    "Declare_static_method_0": {
                        "code": 90024,
                        "category": 3,
                        "key": "Declare_static_method_0_90024",
                        "message": "Declare static method '{0}'"
                    },
                    "Prefix_0_with_an_underscore": {
                        "code": 90025,
                        "category": 3,
                        "key": "Prefix_0_with_an_underscore_90025",
                        "message": "Prefix '{0}' with an underscore"
                    },
                    "Rewrite_as_the_indexed_access_type_0": {
                        "code": 90026,
                        "category": 3,
                        "key": "Rewrite_as_the_indexed_access_type_0_90026",
                        "message": "Rewrite as the indexed access type '{0}'"
                    },
                    "Declare_static_property_0": {
                        "code": 90027,
                        "category": 3,
                        "key": "Declare_static_property_0_90027",
                        "message": "Declare static property '{0}'"
                    },
                    "Call_decorator_expression": {
                        "code": 90028,
                        "category": 3,
                        "key": "Call_decorator_expression_90028",
                        "message": "Call decorator expression"
                    },
                    "Add_async_modifier_to_containing_function": {
                        "code": 90029,
                        "category": 3,
                        "key": "Add_async_modifier_to_containing_function_90029",
                        "message": "Add async modifier to containing function"
                    },
                    "Replace_infer_0_with_unknown": {
                        "code": 90030,
                        "category": 3,
                        "key": "Replace_infer_0_with_unknown_90030",
                        "message": "Replace 'infer {0}' with 'unknown'"
                    },
                    "Replace_all_unused_infer_with_unknown": {
                        "code": 90031,
                        "category": 3,
                        "key": "Replace_all_unused_infer_with_unknown_90031",
                        "message": "Replace all unused 'infer' with 'unknown'"
                    },
                    "Import_default_0_from_module_1": {
                        "code": 90032,
                        "category": 3,
                        "key": "Import_default_0_from_module_1_90032",
                        "message": "Import default '{0}' from module \"{1}\""
                    },
                    "Add_default_import_0_to_existing_import_declaration_from_1": {
                        "code": 90033,
                        "category": 3,
                        "key": "Add_default_import_0_to_existing_import_declaration_from_1_90033",
                        "message": "Add default import '{0}' to existing import declaration from \"{1}\""
                    },
                    "Add_parameter_name": {
                        "code": 90034,
                        "category": 3,
                        "key": "Add_parameter_name_90034",
                        "message": "Add parameter name"
                    },
                    "Convert_function_to_an_ES2015_class": {
                        "code": 95001,
                        "category": 3,
                        "key": "Convert_function_to_an_ES2015_class_95001",
                        "message": "Convert function to an ES2015 class"
                    },
                    "Convert_function_0_to_class": {
                        "code": 95002,
                        "category": 3,
                        "key": "Convert_function_0_to_class_95002",
                        "message": "Convert function '{0}' to class"
                    },
                    "Extract_to_0_in_1": {
                        "code": 95004,
                        "category": 3,
                        "key": "Extract_to_0_in_1_95004",
                        "message": "Extract to {0} in {1}"
                    },
                    "Extract_function": {
                        "code": 95005,
                        "category": 3,
                        "key": "Extract_function_95005",
                        "message": "Extract function"
                    },
                    "Extract_constant": {
                        "code": 95006,
                        "category": 3,
                        "key": "Extract_constant_95006",
                        "message": "Extract constant"
                    },
                    "Extract_to_0_in_enclosing_scope": {
                        "code": 95007,
                        "category": 3,
                        "key": "Extract_to_0_in_enclosing_scope_95007",
                        "message": "Extract to {0} in enclosing scope"
                    },
                    "Extract_to_0_in_1_scope": {
                        "code": 95008,
                        "category": 3,
                        "key": "Extract_to_0_in_1_scope_95008",
                        "message": "Extract to {0} in {1} scope"
                    },
                    "Annotate_with_type_from_JSDoc": {
                        "code": 95009,
                        "category": 3,
                        "key": "Annotate_with_type_from_JSDoc_95009",
                        "message": "Annotate with type from JSDoc"
                    },
                    "Annotate_with_types_from_JSDoc": {
                        "code": 95010,
                        "category": 3,
                        "key": "Annotate_with_types_from_JSDoc_95010",
                        "message": "Annotate with types from JSDoc"
                    },
                    "Infer_type_of_0_from_usage": {
                        "code": 95011,
                        "category": 3,
                        "key": "Infer_type_of_0_from_usage_95011",
                        "message": "Infer type of '{0}' from usage"
                    },
                    "Infer_parameter_types_from_usage": {
                        "code": 95012,
                        "category": 3,
                        "key": "Infer_parameter_types_from_usage_95012",
                        "message": "Infer parameter types from usage"
                    },
                    "Convert_to_default_import": {
                        "code": 95013,
                        "category": 3,
                        "key": "Convert_to_default_import_95013",
                        "message": "Convert to default import"
                    },
                    "Install_0": {
                        "code": 95014,
                        "category": 3,
                        "key": "Install_0_95014",
                        "message": "Install '{0}'"
                    },
                    "Replace_import_with_0": {
                        "code": 95015,
                        "category": 3,
                        "key": "Replace_import_with_0_95015",
                        "message": "Replace import with '{0}'."
                    },
                    "Use_synthetic_default_member": {
                        "code": 95016,
                        "category": 3,
                        "key": "Use_synthetic_default_member_95016",
                        "message": "Use synthetic 'default' member."
                    },
                    "Convert_to_ES6_module": {
                        "code": 95017,
                        "category": 3,
                        "key": "Convert_to_ES6_module_95017",
                        "message": "Convert to ES6 module"
                    },
                    "Add_undefined_type_to_property_0": {
                        "code": 95018,
                        "category": 3,
                        "key": "Add_undefined_type_to_property_0_95018",
                        "message": "Add 'undefined' type to property '{0}'"
                    },
                    "Add_initializer_to_property_0": {
                        "code": 95019,
                        "category": 3,
                        "key": "Add_initializer_to_property_0_95019",
                        "message": "Add initializer to property '{0}'"
                    },
                    "Add_definite_assignment_assertion_to_property_0": {
                        "code": 95020,
                        "category": 3,
                        "key": "Add_definite_assignment_assertion_to_property_0_95020",
                        "message": "Add definite assignment assertion to property '{0}'"
                    },
                    "Add_all_missing_members": {
                        "code": 95022,
                        "category": 3,
                        "key": "Add_all_missing_members_95022",
                        "message": "Add all missing members"
                    },
                    "Infer_all_types_from_usage": {
                        "code": 95023,
                        "category": 3,
                        "key": "Infer_all_types_from_usage_95023",
                        "message": "Infer all types from usage"
                    },
                    "Delete_all_unused_declarations": {
                        "code": 95024,
                        "category": 3,
                        "key": "Delete_all_unused_declarations_95024",
                        "message": "Delete all unused declarations"
                    },
                    "Prefix_all_unused_declarations_with_where_possible": {
                        "code": 95025,
                        "category": 3,
                        "key": "Prefix_all_unused_declarations_with_where_possible_95025",
                        "message": "Prefix all unused declarations with '_' where possible"
                    },
                    "Fix_all_detected_spelling_errors": {
                        "code": 95026,
                        "category": 3,
                        "key": "Fix_all_detected_spelling_errors_95026",
                        "message": "Fix all detected spelling errors"
                    },
                    "Add_initializers_to_all_uninitialized_properties": {
                        "code": 95027,
                        "category": 3,
                        "key": "Add_initializers_to_all_uninitialized_properties_95027",
                        "message": "Add initializers to all uninitialized properties"
                    },
                    "Add_definite_assignment_assertions_to_all_uninitialized_properties": {
                        "code": 95028,
                        "category": 3,
                        "key": "Add_definite_assignment_assertions_to_all_uninitialized_properties_95028",
                        "message": "Add definite assignment assertions to all uninitialized properties"
                    },
                    "Add_undefined_type_to_all_uninitialized_properties": {
                        "code": 95029,
                        "category": 3,
                        "key": "Add_undefined_type_to_all_uninitialized_properties_95029",
                        "message": "Add undefined type to all uninitialized properties"
                    },
                    "Change_all_jsdoc_style_types_to_TypeScript": {
                        "code": 95030,
                        "category": 3,
                        "key": "Change_all_jsdoc_style_types_to_TypeScript_95030",
                        "message": "Change all jsdoc-style types to TypeScript"
                    },
                    "Change_all_jsdoc_style_types_to_TypeScript_and_add_undefined_to_nullable_types": {
                        "code": 95031,
                        "category": 3,
                        "key": "Change_all_jsdoc_style_types_to_TypeScript_and_add_undefined_to_nullable_types_95031",
                        "message": "Change all jsdoc-style types to TypeScript (and add '| undefined' to nullable types)"
                    },
                    "Implement_all_unimplemented_interfaces": {
                        "code": 95032,
                        "category": 3,
                        "key": "Implement_all_unimplemented_interfaces_95032",
                        "message": "Implement all unimplemented interfaces"
                    },
                    "Install_all_missing_types_packages": {
                        "code": 95033,
                        "category": 3,
                        "key": "Install_all_missing_types_packages_95033",
                        "message": "Install all missing types packages"
                    },
                    "Rewrite_all_as_indexed_access_types": {
                        "code": 95034,
                        "category": 3,
                        "key": "Rewrite_all_as_indexed_access_types_95034",
                        "message": "Rewrite all as indexed access types"
                    },
                    "Convert_all_to_default_imports": {
                        "code": 95035,
                        "category": 3,
                        "key": "Convert_all_to_default_imports_95035",
                        "message": "Convert all to default imports"
                    },
                    "Make_all_super_calls_the_first_statement_in_their_constructor": {
                        "code": 95036,
                        "category": 3,
                        "key": "Make_all_super_calls_the_first_statement_in_their_constructor_95036",
                        "message": "Make all 'super()' calls the first statement in their constructor"
                    },
                    "Add_qualifier_to_all_unresolved_variables_matching_a_member_name": {
                        "code": 95037,
                        "category": 3,
                        "key": "Add_qualifier_to_all_unresolved_variables_matching_a_member_name_95037",
                        "message": "Add qualifier to all unresolved variables matching a member name"
                    },
                    "Change_all_extended_interfaces_to_implements": {
                        "code": 95038,
                        "category": 3,
                        "key": "Change_all_extended_interfaces_to_implements_95038",
                        "message": "Change all extended interfaces to 'implements'"
                    },
                    "Add_all_missing_super_calls": {
                        "code": 95039,
                        "category": 3,
                        "key": "Add_all_missing_super_calls_95039",
                        "message": "Add all missing super calls"
                    },
                    "Implement_all_inherited_abstract_classes": {
                        "code": 95040,
                        "category": 3,
                        "key": "Implement_all_inherited_abstract_classes_95040",
                        "message": "Implement all inherited abstract classes"
                    },
                    "Add_all_missing_async_modifiers": {
                        "code": 95041,
                        "category": 3,
                        "key": "Add_all_missing_async_modifiers_95041",
                        "message": "Add all missing 'async' modifiers"
                    },
                    "Add_ts_ignore_to_all_error_messages": {
                        "code": 95042,
                        "category": 3,
                        "key": "Add_ts_ignore_to_all_error_messages_95042",
                        "message": "Add '@ts-ignore' to all error messages"
                    },
                    "Annotate_everything_with_types_from_JSDoc": {
                        "code": 95043,
                        "category": 3,
                        "key": "Annotate_everything_with_types_from_JSDoc_95043",
                        "message": "Annotate everything with types from JSDoc"
                    },
                    "Add_to_all_uncalled_decorators": {
                        "code": 95044,
                        "category": 3,
                        "key": "Add_to_all_uncalled_decorators_95044",
                        "message": "Add '()' to all uncalled decorators"
                    },
                    "Convert_all_constructor_functions_to_classes": {
                        "code": 95045,
                        "category": 3,
                        "key": "Convert_all_constructor_functions_to_classes_95045",
                        "message": "Convert all constructor functions to classes"
                    },
                    "Generate_get_and_set_accessors": {
                        "code": 95046,
                        "category": 3,
                        "key": "Generate_get_and_set_accessors_95046",
                        "message": "Generate 'get' and 'set' accessors"
                    },
                    "Convert_require_to_import": {
                        "code": 95047,
                        "category": 3,
                        "key": "Convert_require_to_import_95047",
                        "message": "Convert 'require' to 'import'"
                    },
                    "Convert_all_require_to_import": {
                        "code": 95048,
                        "category": 3,
                        "key": "Convert_all_require_to_import_95048",
                        "message": "Convert all 'require' to 'import'"
                    },
                    "Move_to_a_new_file": {
                        "code": 95049,
                        "category": 3,
                        "key": "Move_to_a_new_file_95049",
                        "message": "Move to a new file"
                    },
                    "Remove_unreachable_code": {
                        "code": 95050,
                        "category": 3,
                        "key": "Remove_unreachable_code_95050",
                        "message": "Remove unreachable code"
                    },
                    "Remove_all_unreachable_code": {
                        "code": 95051,
                        "category": 3,
                        "key": "Remove_all_unreachable_code_95051",
                        "message": "Remove all unreachable code"
                    },
                    "Add_missing_typeof": {
                        "code": 95052,
                        "category": 3,
                        "key": "Add_missing_typeof_95052",
                        "message": "Add missing 'typeof'"
                    },
                    "Remove_unused_label": {
                        "code": 95053,
                        "category": 3,
                        "key": "Remove_unused_label_95053",
                        "message": "Remove unused label"
                    },
                    "Remove_all_unused_labels": {
                        "code": 95054,
                        "category": 3,
                        "key": "Remove_all_unused_labels_95054",
                        "message": "Remove all unused labels"
                    },
                    "Convert_0_to_mapped_object_type": {
                        "code": 95055,
                        "category": 3,
                        "key": "Convert_0_to_mapped_object_type_95055",
                        "message": "Convert '{0}' to mapped object type"
                    },
                    "Convert_namespace_import_to_named_imports": {
                        "code": 95056,
                        "category": 3,
                        "key": "Convert_namespace_import_to_named_imports_95056",
                        "message": "Convert namespace import to named imports"
                    },
                    "Convert_named_imports_to_namespace_import": {
                        "code": 95057,
                        "category": 3,
                        "key": "Convert_named_imports_to_namespace_import_95057",
                        "message": "Convert named imports to namespace import"
                    },
                    "Add_or_remove_braces_in_an_arrow_function": {
                        "code": 95058,
                        "category": 3,
                        "key": "Add_or_remove_braces_in_an_arrow_function_95058",
                        "message": "Add or remove braces in an arrow function"
                    },
                    "Add_braces_to_arrow_function": {
                        "code": 95059,
                        "category": 3,
                        "key": "Add_braces_to_arrow_function_95059",
                        "message": "Add braces to arrow function"
                    },
                    "Remove_braces_from_arrow_function": {
                        "code": 95060,
                        "category": 3,
                        "key": "Remove_braces_from_arrow_function_95060",
                        "message": "Remove braces from arrow function"
                    },
                    "Convert_default_export_to_named_export": {
                        "code": 95061,
                        "category": 3,
                        "key": "Convert_default_export_to_named_export_95061",
                        "message": "Convert default export to named export"
                    },
                    "Convert_named_export_to_default_export": {
                        "code": 95062,
                        "category": 3,
                        "key": "Convert_named_export_to_default_export_95062",
                        "message": "Convert named export to default export"
                    },
                    "Add_missing_enum_member_0": {
                        "code": 95063,
                        "category": 3,
                        "key": "Add_missing_enum_member_0_95063",
                        "message": "Add missing enum member '{0}'"
                    },
                    "Add_all_missing_imports": {
                        "code": 95064,
                        "category": 3,
                        "key": "Add_all_missing_imports_95064",
                        "message": "Add all missing imports"
                    },
                    "Convert_to_async_function": {
                        "code": 95065,
                        "category": 3,
                        "key": "Convert_to_async_function_95065",
                        "message": "Convert to async function"
                    },
                    "Convert_all_to_async_functions": {
                        "code": 95066,
                        "category": 3,
                        "key": "Convert_all_to_async_functions_95066",
                        "message": "Convert all to async functions"
                    },
                    "Add_unknown_conversion_for_non_overlapping_types": {
                        "code": 95069,
                        "category": 3,
                        "key": "Add_unknown_conversion_for_non_overlapping_types_95069",
                        "message": "Add 'unknown' conversion for non-overlapping types"
                    },
                    "Add_unknown_to_all_conversions_of_non_overlapping_types": {
                        "code": 95070,
                        "category": 3,
                        "key": "Add_unknown_to_all_conversions_of_non_overlapping_types_95070",
                        "message": "Add 'unknown' to all conversions of non-overlapping types"
                    },
                    "Add_missing_new_operator_to_call": {
                        "code": 95071,
                        "category": 3,
                        "key": "Add_missing_new_operator_to_call_95071",
                        "message": "Add missing 'new' operator to call"
                    },
                    "Add_missing_new_operator_to_all_calls": {
                        "code": 95072,
                        "category": 3,
                        "key": "Add_missing_new_operator_to_all_calls_95072",
                        "message": "Add missing 'new' operator to all calls"
                    },
                    "Add_names_to_all_parameters_without_names": {
                        "code": 95073,
                        "category": 3,
                        "key": "Add_names_to_all_parameters_without_names_95073",
                        "message": "Add names to all parameters without names"
                    },
                    "Enable_the_experimentalDecorators_option_in_your_configuration_file": {
                        "code": 95074,
                        "category": 3,
                        "key": "Enable_the_experimentalDecorators_option_in_your_configuration_file_95074",
                        "message": "Enable the 'experimentalDecorators' option in your configuration file"
                    },
                    "Convert_parameters_to_destructured_object": {
                        "code": 95075,
                        "category": 3,
                        "key": "Convert_parameters_to_destructured_object_95075",
                        "message": "Convert parameters to destructured object"
                    },
                    "Allow_accessing_UMD_globals_from_modules": {
                        "code": 95076,
                        "category": 3,
                        "key": "Allow_accessing_UMD_globals_from_modules_95076",
                        "message": "Allow accessing UMD globals from modules."
                    },
                    "Extract_type": {
                        "code": 95077,
                        "category": 3,
                        "key": "Extract_type_95077",
                        "message": "Extract type"
                    },
                    "Extract_to_type_alias": {
                        "code": 95078,
                        "category": 3,
                        "key": "Extract_to_type_alias_95078",
                        "message": "Extract to type alias"
                    },
                    "Extract_to_typedef": {
                        "code": 95079,
                        "category": 3,
                        "key": "Extract_to_typedef_95079",
                        "message": "Extract to typedef"
                    },
                    "Infer_this_type_of_0_from_usage": {
                        "code": 95080,
                        "category": 3,
                        "key": "Infer_this_type_of_0_from_usage_95080",
                        "message": "Infer 'this' type of '{0}' from usage"
                    },
                    "Add_const_to_unresolved_variable": {
                        "code": 95081,
                        "category": 3,
                        "key": "Add_const_to_unresolved_variable_95081",
                        "message": "Add 'const' to unresolved variable"
                    },
                    "Add_const_to_all_unresolved_variables": {
                        "code": 95082,
                        "category": 3,
                        "key": "Add_const_to_all_unresolved_variables_95082",
                        "message": "Add 'const' to all unresolved variables"
                    },
                    "Add_await": {
                        "code": 95083,
                        "category": 3,
                        "key": "Add_await_95083",
                        "message": "Add 'await'"
                    },
                    "Add_await_to_initializer_for_0": {
                        "code": 95084,
                        "category": 3,
                        "key": "Add_await_to_initializer_for_0_95084",
                        "message": "Add 'await' to initializer for '{0}'"
                    },
                    "Fix_all_expressions_possibly_missing_await": {
                        "code": 95085,
                        "category": 3,
                        "key": "Fix_all_expressions_possibly_missing_await_95085",
                        "message": "Fix all expressions possibly missing 'await'"
                    },
                    "Remove_unnecessary_await": {
                        "code": 95086,
                        "category": 3,
                        "key": "Remove_unnecessary_await_95086",
                        "message": "Remove unnecessary 'await'"
                    },
                    "Remove_all_unnecessary_uses_of_await": {
                        "code": 95087,
                        "category": 3,
                        "key": "Remove_all_unnecessary_uses_of_await_95087",
                        "message": "Remove all unnecessary uses of 'await'"
                    },
                    "Enable_the_jsx_flag_in_your_configuration_file": {
                        "code": 95088,
                        "category": 3,
                        "key": "Enable_the_jsx_flag_in_your_configuration_file_95088",
                        "message": "Enable the '--jsx' flag in your configuration file"
                    },
                    "Add_await_to_initializers": {
                        "code": 95089,
                        "category": 3,
                        "key": "Add_await_to_initializers_95089",
                        "message": "Add 'await' to initializers"
                    },
                    "Extract_to_interface": {
                        "code": 95090,
                        "category": 3,
                        "key": "Extract_to_interface_95090",
                        "message": "Extract to interface"
                    },
                    "Convert_to_a_bigint_numeric_literal": {
                        "code": 95091,
                        "category": 3,
                        "key": "Convert_to_a_bigint_numeric_literal_95091",
                        "message": "Convert to a bigint numeric literal"
                    },
                    "Convert_all_to_bigint_numeric_literals": {
                        "code": 95092,
                        "category": 3,
                        "key": "Convert_all_to_bigint_numeric_literals_95092",
                        "message": "Convert all to bigint numeric literals"
                    },
                    "Convert_const_to_let": {
                        "code": 95093,
                        "category": 3,
                        "key": "Convert_const_to_let_95093",
                        "message": "Convert 'const' to 'let'"
                    },
                    "Prefix_with_declare": {
                        "code": 95094,
                        "category": 3,
                        "key": "Prefix_with_declare_95094",
                        "message": "Prefix with 'declare'"
                    },
                    "Prefix_all_incorrect_property_declarations_with_declare": {
                        "code": 95095,
                        "category": 3,
                        "key": "Prefix_all_incorrect_property_declarations_with_declare_95095",
                        "message": "Prefix all incorrect property declarations with 'declare'"
                    },
                    "No_value_exists_in_scope_for_the_shorthand_property_0_Either_declare_one_or_provide_an_initializer": {
                        "code": 18004,
                        "category": 1,
                        "key": "No_value_exists_in_scope_for_the_shorthand_property_0_Either_declare_one_or_provide_an_initializer_18004",
                        "message": "No value exists in scope for the shorthand property '{0}'. Either declare one or provide an initializer."
                    },
                    "Classes_may_not_have_a_field_named_constructor": {
                        "code": 18006,
                        "category": 1,
                        "key": "Classes_may_not_have_a_field_named_constructor_18006",
                        "message": "Classes may not have a field named 'constructor'."
                    },
                    "JSX_expressions_may_not_use_the_comma_operator_Did_you_mean_to_write_an_array": {
                        "code": 18007,
                        "category": 1,
                        "key": "JSX_expressions_may_not_use_the_comma_operator_Did_you_mean_to_write_an_array_18007",
                        "message": "JSX expressions may not use the comma operator. Did you mean to write an array?"
                    }
                },
                "resolvingEmptyArray": [],
                "emptyMap": {},
                "emptyUnderscoreEscapedMap": {},
                "externalHelpersModuleNameText": "tslib",
                "defaultMaximumTruncationLength": 160,
                "fullTripleSlashReferencePathRegEx": {},
                "fullTripleSlashAMDReferencePathRegEx": {},
                "AssignmentKind": {
                    "0": "None",
                    "1": "Definite",
                    "2": "Compound",
                    "None": 0,
                    "Definite": 1,
                    "Compound": 2
                },
                "FunctionFlags": {
                    "0": "Normal",
                    "1": "Generator",
                    "2": "Async",
                    "3": "AsyncGenerator",
                    "4": "Invalid",
                    "Normal": 0,
                    "Generator": 1,
                    "Async": 2,
                    "Invalid": 4,
                    "AsyncGenerator": 3
                },
                "Associativity": {
                    "0": "Left",
                    "1": "Right",
                    "Left": 0,
                    "Right": 1
                },
                "unchangedTextChangeRange": {
                    "span": {
                        "start": 0,
                        "length": 0
                    },
                    "newLength": 0
                },
                "objectAllocator": {},
                "commonPackageFolders": [
                    "node_modules",
                    "bower_components",
                    "jspm_packages"
                ],
                "supportedTSExtensions": [
                    ".ts",
                    ".tsx",
                    ".d.ts"
                ],
                "supportedTSExtensionsWithJson": [
                    ".ts",
                    ".tsx",
                    ".d.ts",
                    ".json"
                ],
                "supportedTSExtensionsForExtractExtension": [
                    ".d.ts",
                    ".ts",
                    ".tsx"
                ],
                "supportedJSExtensions": [
                    ".js",
                    ".jsx"
                ],
                "supportedJSAndJsonExtensions": [
                    ".js",
                    ".jsx",
                    ".json"
                ],
                "ExtensionPriority": {
                    "0": "Highest",
                    "2": "Lowest",
                    "TypeScriptFiles": 0,
                    "DeclarationAndJavaScriptFiles": 2,
                    "Highest": 0,
                    "Lowest": 2
                },
                "emptyFileSystemEntries": {
                    "files": [],
                    "directories": []
                },
                "compileOnSaveCommandLineOption": {
                    "name": "compileOnSave",
                    "type": "boolean"
                },
                "libs": [
                    "es5",
                    "es6",
                    "es2015",
                    "es7",
                    "es2016",
                    "es2017",
                    "es2018",
                    "es2019",
                    "es2020",
                    "esnext",
                    "dom",
                    "dom.iterable",
                    "webworker",
                    "webworker.importscripts",
                    "scripthost",
                    "es2015.core",
                    "es2015.collection",
                    "es2015.generator",
                    "es2015.iterable",
                    "es2015.promise",
                    "es2015.proxy",
                    "es2015.reflect",
                    "es2015.symbol",
                    "es2015.symbol.wellknown",
                    "es2016.array.include",
                    "es2017.object",
                    "es2017.sharedmemory",
                    "es2017.string",
                    "es2017.intl",
                    "es2017.typedarrays",
                    "es2018.asyncgenerator",
                    "es2018.asynciterable",
                    "es2018.intl",
                    "es2018.promise",
                    "es2018.regexp",
                    "es2019.array",
                    "es2019.object",
                    "es2019.string",
                    "es2019.symbol",
                    "es2020.string",
                    "es2020.symbol.wellknown",
                    "esnext.array",
                    "esnext.symbol",
                    "esnext.asynciterable",
                    "esnext.intl",
                    "esnext.bigint"
                ],
                "libMap": {},
                "commonOptionsWithBuild": [
                    {
                        "name": "help",
                        "shortName": "h",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6017,
                            "category": 3,
                            "key": "Print_this_message_6017",
                            "message": "Print this message."
                        }
                    },
                    {
                        "name": "help",
                        "shortName": "?",
                        "type": "boolean"
                    },
                    {
                        "name": "watch",
                        "shortName": "w",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6005,
                            "category": 3,
                            "key": "Watch_input_files_6005",
                            "message": "Watch input files."
                        }
                    },
                    {
                        "name": "preserveWatchOutput",
                        "type": "boolean",
                        "showInSimplifiedHelpView": false,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6191,
                            "category": 3,
                            "key": "Whether_to_keep_outdated_console_output_in_watch_mode_instead_of_clearing_the_screen_6191",
                            "message": "Whether to keep outdated console output in watch mode instead of clearing the screen."
                        }
                    },
                    {
                        "name": "listFiles",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6155,
                            "category": 3,
                            "key": "Print_names_of_files_part_of_the_compilation_6155",
                            "message": "Print names of files part of the compilation."
                        }
                    },
                    {
                        "name": "listEmittedFiles",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6154,
                            "category": 3,
                            "key": "Print_names_of_generated_files_part_of_the_compilation_6154",
                            "message": "Print names of generated files part of the compilation."
                        }
                    },
                    {
                        "name": "pretty",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6073,
                            "category": 3,
                            "key": "Stylize_errors_and_messages_using_color_and_context_experimental_6073",
                            "message": "Stylize errors and messages using color and context (experimental)."
                        }
                    },
                    {
                        "name": "traceResolution",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6085,
                            "category": 3,
                            "key": "Enable_tracing_of_the_name_resolution_process_6085",
                            "message": "Enable tracing of the name resolution process."
                        }
                    },
                    {
                        "name": "diagnostics",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6149,
                            "category": 3,
                            "key": "Show_diagnostic_information_6149",
                            "message": "Show diagnostic information."
                        }
                    },
                    {
                        "name": "extendedDiagnostics",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6150,
                            "category": 3,
                            "key": "Show_verbose_diagnostic_information_6150",
                            "message": "Show verbose diagnostic information."
                        }
                    },
                    {
                        "name": "generateCpuProfile",
                        "type": "string",
                        "isFilePath": true,
                        "paramType": {
                            "code": 6040,
                            "category": 3,
                            "key": "FILE_OR_DIRECTORY_6040",
                            "message": "FILE OR DIRECTORY"
                        },
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6223,
                            "category": 3,
                            "key": "Generates_a_CPU_profile_6223",
                            "message": "Generates a CPU profile."
                        }
                    },
                    {
                        "name": "incremental",
                        "shortName": "i",
                        "type": "boolean",
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6378,
                            "category": 3,
                            "key": "Enable_incremental_compilation_6378",
                            "message": "Enable incremental compilation"
                        }
                    },
                    {
                        "name": "locale",
                        "type": "string",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6156,
                            "category": 3,
                            "key": "The_locale_used_when_displaying_messages_to_the_user_e_g_en_us_6156",
                            "message": "The locale used when displaying messages to the user (e.g. 'en-us')"
                        }
                    }
                ],
                "optionDeclarations": [
                    {
                        "name": "help",
                        "shortName": "h",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6017,
                            "category": 3,
                            "key": "Print_this_message_6017",
                            "message": "Print this message."
                        }
                    },
                    {
                        "name": "help",
                        "shortName": "?",
                        "type": "boolean"
                    },
                    {
                        "name": "watch",
                        "shortName": "w",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6005,
                            "category": 3,
                            "key": "Watch_input_files_6005",
                            "message": "Watch input files."
                        }
                    },
                    {
                        "name": "preserveWatchOutput",
                        "type": "boolean",
                        "showInSimplifiedHelpView": false,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6191,
                            "category": 3,
                            "key": "Whether_to_keep_outdated_console_output_in_watch_mode_instead_of_clearing_the_screen_6191",
                            "message": "Whether to keep outdated console output in watch mode instead of clearing the screen."
                        }
                    },
                    {
                        "name": "listFiles",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6155,
                            "category": 3,
                            "key": "Print_names_of_files_part_of_the_compilation_6155",
                            "message": "Print names of files part of the compilation."
                        }
                    },
                    {
                        "name": "listEmittedFiles",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6154,
                            "category": 3,
                            "key": "Print_names_of_generated_files_part_of_the_compilation_6154",
                            "message": "Print names of generated files part of the compilation."
                        }
                    },
                    {
                        "name": "pretty",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6073,
                            "category": 3,
                            "key": "Stylize_errors_and_messages_using_color_and_context_experimental_6073",
                            "message": "Stylize errors and messages using color and context (experimental)."
                        }
                    },
                    {
                        "name": "traceResolution",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6085,
                            "category": 3,
                            "key": "Enable_tracing_of_the_name_resolution_process_6085",
                            "message": "Enable tracing of the name resolution process."
                        }
                    },
                    {
                        "name": "diagnostics",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6149,
                            "category": 3,
                            "key": "Show_diagnostic_information_6149",
                            "message": "Show diagnostic information."
                        }
                    },
                    {
                        "name": "extendedDiagnostics",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6150,
                            "category": 3,
                            "key": "Show_verbose_diagnostic_information_6150",
                            "message": "Show verbose diagnostic information."
                        }
                    },
                    {
                        "name": "generateCpuProfile",
                        "type": "string",
                        "isFilePath": true,
                        "paramType": {
                            "code": 6040,
                            "category": 3,
                            "key": "FILE_OR_DIRECTORY_6040",
                            "message": "FILE OR DIRECTORY"
                        },
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6223,
                            "category": 3,
                            "key": "Generates_a_CPU_profile_6223",
                            "message": "Generates a CPU profile."
                        }
                    },
                    {
                        "name": "incremental",
                        "shortName": "i",
                        "type": "boolean",
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6378,
                            "category": 3,
                            "key": "Enable_incremental_compilation_6378",
                            "message": "Enable incremental compilation"
                        }
                    },
                    {
                        "name": "locale",
                        "type": "string",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6156,
                            "category": 3,
                            "key": "The_locale_used_when_displaying_messages_to_the_user_e_g_en_us_6156",
                            "message": "The locale used when displaying messages to the user (e.g. 'en-us')"
                        }
                    },
                    {
                        "name": "all",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6169,
                            "category": 3,
                            "key": "Show_all_compiler_options_6169",
                            "message": "Show all compiler options."
                        }
                    },
                    {
                        "name": "version",
                        "shortName": "v",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6019,
                            "category": 3,
                            "key": "Print_the_compiler_s_version_6019",
                            "message": "Print the compiler's version."
                        }
                    },
                    {
                        "name": "init",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6070,
                            "category": 3,
                            "key": "Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file_6070",
                            "message": "Initializes a TypeScript project and creates a tsconfig.json file."
                        }
                    },
                    {
                        "name": "project",
                        "shortName": "p",
                        "type": "string",
                        "isFilePath": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "paramType": {
                            "code": 6040,
                            "category": 3,
                            "key": "FILE_OR_DIRECTORY_6040",
                            "message": "FILE OR DIRECTORY"
                        },
                        "description": {
                            "code": 6020,
                            "category": 3,
                            "key": "Compile_the_project_given_the_path_to_its_configuration_file_or_to_a_folder_with_a_tsconfig_json_6020",
                            "message": "Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'."
                        }
                    },
                    {
                        "name": "build",
                        "type": "boolean",
                        "shortName": "b",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6364,
                            "category": 3,
                            "key": "Build_one_or_more_projects_and_their_dependencies_if_out_of_date_6364",
                            "message": "Build one or more projects and their dependencies, if out of date"
                        }
                    },
                    {
                        "name": "showConfig",
                        "type": "boolean",
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "isCommandLineOnly": true,
                        "description": {
                            "code": 1350,
                            "category": 3,
                            "key": "Print_the_final_configuration_instead_of_building_1350",
                            "message": "Print the final configuration instead of building."
                        }
                    },
                    {
                        "name": "listFilesOnly",
                        "type": "boolean",
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "affectsSemanticDiagnostics": true,
                        "affectsEmit": true,
                        "isCommandLineOnly": true,
                        "description": {
                            "code": 6503,
                            "category": 3,
                            "key": "Print_names_of_files_that_are_part_of_the_compilation_and_then_stop_processing_6503",
                            "message": "Print names of files that are part of the compilation and then stop processing."
                        }
                    },
                    {
                        "name": "target",
                        "shortName": "t",
                        "type": {},
                        "affectsSourceFile": true,
                        "affectsModuleResolution": true,
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6036,
                            "category": 3,
                            "key": "VERSION_6036",
                            "message": "VERSION"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6015,
                            "category": 3,
                            "key": "Specify_ECMAScript_target_version_Colon_ES3_default_ES5_ES2015_ES2016_ES2017_ES2018_ES2019_or_ESNEXT_6015",
                            "message": "Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'."
                        }
                    },
                    {
                        "name": "module",
                        "shortName": "m",
                        "type": {},
                        "affectsModuleResolution": true,
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6034,
                            "category": 3,
                            "key": "KIND_6034",
                            "message": "KIND"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6016,
                            "category": 3,
                            "key": "Specify_module_code_generation_Colon_none_commonjs_amd_system_umd_es2015_or_ESNext_6016",
                            "message": "Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'."
                        }
                    },
                    {
                        "name": "lib",
                        "type": "list",
                        "element": {
                            "name": "lib",
                            "type": {}
                        },
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6079,
                            "category": 3,
                            "key": "Specify_library_files_to_be_included_in_the_compilation_6079",
                            "message": "Specify library files to be included in the compilation."
                        }
                    },
                    {
                        "name": "allowJs",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6102,
                            "category": 3,
                            "key": "Allow_javascript_files_to_be_compiled_6102",
                            "message": "Allow javascript files to be compiled."
                        }
                    },
                    {
                        "name": "checkJs",
                        "type": "boolean",
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 8019,
                            "category": 3,
                            "key": "Report_errors_in_js_files_8019",
                            "message": "Report errors in .js files."
                        }
                    },
                    {
                        "name": "jsx",
                        "type": {},
                        "affectsSourceFile": true,
                        "paramType": {
                            "code": 6034,
                            "category": 3,
                            "key": "KIND_6034",
                            "message": "KIND"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6080,
                            "category": 3,
                            "key": "Specify_JSX_code_generation_Colon_preserve_react_native_or_react_6080",
                            "message": "Specify JSX code generation: 'preserve', 'react-native', or 'react'."
                        }
                    },
                    {
                        "name": "declaration",
                        "shortName": "d",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6002,
                            "category": 3,
                            "key": "Generates_corresponding_d_ts_file_6002",
                            "message": "Generates corresponding '.d.ts' file."
                        }
                    },
                    {
                        "name": "declarationMap",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6000,
                            "category": 3,
                            "key": "Generates_a_sourcemap_for_each_corresponding_d_ts_file_6000",
                            "message": "Generates a sourcemap for each corresponding '.d.ts' file."
                        }
                    },
                    {
                        "name": "emitDeclarationOnly",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6014,
                            "category": 3,
                            "key": "Only_emit_d_ts_declaration_files_6014",
                            "message": "Only emit '.d.ts' declaration files."
                        }
                    },
                    {
                        "name": "sourceMap",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6043,
                            "category": 3,
                            "key": "Generates_corresponding_map_file_6043",
                            "message": "Generates corresponding '.map' file."
                        }
                    },
                    {
                        "name": "outFile",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6035,
                            "category": 3,
                            "key": "FILE_6035",
                            "message": "FILE"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6001,
                            "category": 3,
                            "key": "Concatenate_and_emit_output_to_single_file_6001",
                            "message": "Concatenate and emit output to single file."
                        }
                    },
                    {
                        "name": "outDir",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6038,
                            "category": 3,
                            "key": "DIRECTORY_6038",
                            "message": "DIRECTORY"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6006,
                            "category": 3,
                            "key": "Redirect_output_structure_to_the_directory_6006",
                            "message": "Redirect output structure to the directory."
                        }
                    },
                    {
                        "name": "rootDir",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6037,
                            "category": 3,
                            "key": "LOCATION_6037",
                            "message": "LOCATION"
                        },
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6058,
                            "category": 3,
                            "key": "Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir_6058",
                            "message": "Specify the root directory of input files. Use to control the output directory structure with --outDir."
                        }
                    },
                    {
                        "name": "composite",
                        "type": "boolean",
                        "affectsEmit": true,
                        "isTSConfigOnly": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6302,
                            "category": 3,
                            "key": "Enable_project_compilation_6302",
                            "message": "Enable project compilation"
                        }
                    },
                    {
                        "name": "tsBuildInfoFile",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6035,
                            "category": 3,
                            "key": "FILE_6035",
                            "message": "FILE"
                        },
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6380,
                            "category": 3,
                            "key": "Specify_file_to_store_incremental_compilation_information_6380",
                            "message": "Specify file to store incremental compilation information"
                        }
                    },
                    {
                        "name": "removeComments",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6009,
                            "category": 3,
                            "key": "Do_not_emit_comments_to_output_6009",
                            "message": "Do not emit comments to output."
                        }
                    },
                    {
                        "name": "noEmit",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6010,
                            "category": 3,
                            "key": "Do_not_emit_outputs_6010",
                            "message": "Do not emit outputs."
                        }
                    },
                    {
                        "name": "importHelpers",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6139,
                            "category": 3,
                            "key": "Import_emit_helpers_from_tslib_6139",
                            "message": "Import emit helpers from 'tslib'."
                        }
                    },
                    {
                        "name": "downlevelIteration",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6179,
                            "category": 3,
                            "key": "Provide_full_support_for_iterables_in_for_of_spread_and_destructuring_when_targeting_ES5_or_ES3_6179",
                            "message": "Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'."
                        }
                    },
                    {
                        "name": "isolatedModules",
                        "type": "boolean",
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6153,
                            "category": 3,
                            "key": "Transpile_each_file_as_a_separate_module_similar_to_ts_transpileModule_6153",
                            "message": "Transpile each file as a separate module (similar to 'ts.transpileModule')."
                        },
                        "transpileOptionValue": true
                    },
                    {
                        "name": "strict",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6180,
                            "category": 3,
                            "key": "Enable_all_strict_type_checking_options_6180",
                            "message": "Enable all strict type-checking options."
                        }
                    },
                    {
                        "name": "noImplicitAny",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6052,
                            "category": 3,
                            "key": "Raise_error_on_expressions_and_declarations_with_an_implied_any_type_6052",
                            "message": "Raise error on expressions and declarations with an implied 'any' type."
                        }
                    },
                    {
                        "name": "strictNullChecks",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6113,
                            "category": 3,
                            "key": "Enable_strict_null_checks_6113",
                            "message": "Enable strict null checks."
                        }
                    },
                    {
                        "name": "strictFunctionTypes",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6186,
                            "category": 3,
                            "key": "Enable_strict_checking_of_function_types_6186",
                            "message": "Enable strict checking of function types."
                        }
                    },
                    {
                        "name": "strictBindCallApply",
                        "type": "boolean",
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6214,
                            "category": 3,
                            "key": "Enable_strict_bind_call_and_apply_methods_on_functions_6214",
                            "message": "Enable strict 'bind', 'call', and 'apply' methods on functions."
                        }
                    },
                    {
                        "name": "strictPropertyInitialization",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6187,
                            "category": 3,
                            "key": "Enable_strict_checking_of_property_initialization_in_classes_6187",
                            "message": "Enable strict checking of property initialization in classes."
                        }
                    },
                    {
                        "name": "noImplicitThis",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6115,
                            "category": 3,
                            "key": "Raise_error_on_this_expressions_with_an_implied_any_type_6115",
                            "message": "Raise error on 'this' expressions with an implied 'any' type."
                        }
                    },
                    {
                        "name": "alwaysStrict",
                        "type": "boolean",
                        "affectsSourceFile": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6141,
                            "category": 3,
                            "key": "Parse_in_strict_mode_and_emit_use_strict_for_each_source_file_6141",
                            "message": "Parse in strict mode and emit \"use strict\" for each source file."
                        }
                    },
                    {
                        "name": "noUnusedLocals",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6176,
                            "category": 3,
                            "key": "Additional_Checks_6176",
                            "message": "Additional Checks"
                        },
                        "description": {
                            "code": 6134,
                            "category": 3,
                            "key": "Report_errors_on_unused_locals_6134",
                            "message": "Report errors on unused locals."
                        }
                    },
                    {
                        "name": "noUnusedParameters",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6176,
                            "category": 3,
                            "key": "Additional_Checks_6176",
                            "message": "Additional Checks"
                        },
                        "description": {
                            "code": 6135,
                            "category": 3,
                            "key": "Report_errors_on_unused_parameters_6135",
                            "message": "Report errors on unused parameters."
                        }
                    },
                    {
                        "name": "noImplicitReturns",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6176,
                            "category": 3,
                            "key": "Additional_Checks_6176",
                            "message": "Additional Checks"
                        },
                        "description": {
                            "code": 6075,
                            "category": 3,
                            "key": "Report_error_when_not_all_code_paths_in_function_return_a_value_6075",
                            "message": "Report error when not all code paths in function return a value."
                        }
                    },
                    {
                        "name": "noFallthroughCasesInSwitch",
                        "type": "boolean",
                        "affectsBindDiagnostics": true,
                        "affectsSemanticDiagnostics": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6176,
                            "category": 3,
                            "key": "Additional_Checks_6176",
                            "message": "Additional Checks"
                        },
                        "description": {
                            "code": 6076,
                            "category": 3,
                            "key": "Report_errors_for_fallthrough_cases_in_switch_statement_6076",
                            "message": "Report errors for fallthrough cases in switch statement."
                        }
                    },
                    {
                        "name": "moduleResolution",
                        "type": {},
                        "affectsModuleResolution": true,
                        "paramType": {
                            "code": 6039,
                            "category": 3,
                            "key": "STRATEGY_6039",
                            "message": "STRATEGY"
                        },
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6069,
                            "category": 3,
                            "key": "Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6_6069",
                            "message": "Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6)."
                        }
                    },
                    {
                        "name": "baseUrl",
                        "type": "string",
                        "affectsModuleResolution": true,
                        "isFilePath": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6083,
                            "category": 3,
                            "key": "Base_directory_to_resolve_non_absolute_module_names_6083",
                            "message": "Base directory to resolve non-absolute module names."
                        }
                    },
                    {
                        "name": "paths",
                        "type": "object",
                        "affectsModuleResolution": true,
                        "isTSConfigOnly": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6167,
                            "category": 3,
                            "key": "A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl_6167",
                            "message": "A series of entries which re-map imports to lookup locations relative to the 'baseUrl'."
                        }
                    },
                    {
                        "name": "rootDirs",
                        "type": "list",
                        "isTSConfigOnly": true,
                        "element": {
                            "name": "rootDirs",
                            "type": "string",
                            "isFilePath": true
                        },
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6168,
                            "category": 3,
                            "key": "List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime_6168",
                            "message": "List of root folders whose combined content represents the structure of the project at runtime."
                        }
                    },
                    {
                        "name": "typeRoots",
                        "type": "list",
                        "element": {
                            "name": "typeRoots",
                            "type": "string",
                            "isFilePath": true
                        },
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6161,
                            "category": 3,
                            "key": "List_of_folders_to_include_type_definitions_from_6161",
                            "message": "List of folders to include type definitions from."
                        }
                    },
                    {
                        "name": "types",
                        "type": "list",
                        "element": {
                            "name": "types",
                            "type": "string"
                        },
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6124,
                            "category": 3,
                            "key": "Type_declaration_files_to_be_included_in_compilation_6124",
                            "message": "Type declaration files to be included in compilation."
                        }
                    },
                    {
                        "name": "allowSyntheticDefaultImports",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6011,
                            "category": 3,
                            "key": "Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typech_6011",
                            "message": "Allow default imports from modules with no default export. This does not affect code emit, just typechecking."
                        }
                    },
                    {
                        "name": "esModuleInterop",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 7037,
                            "category": 3,
                            "key": "Enables_emit_interoperability_between_CommonJS_and_ES_Modules_via_creation_of_namespace_objects_for__7037",
                            "message": "Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'."
                        }
                    },
                    {
                        "name": "preserveSymlinks",
                        "type": "boolean",
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6013,
                            "category": 3,
                            "key": "Do_not_resolve_the_real_path_of_symlinks_6013",
                            "message": "Do not resolve the real path of symlinks."
                        }
                    },
                    {
                        "name": "allowUmdGlobalAccess",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 95076,
                            "category": 3,
                            "key": "Allow_accessing_UMD_globals_from_modules_95076",
                            "message": "Allow accessing UMD globals from modules."
                        }
                    },
                    {
                        "name": "sourceRoot",
                        "type": "string",
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6037,
                            "category": 3,
                            "key": "LOCATION_6037",
                            "message": "LOCATION"
                        },
                        "category": {
                            "code": 6175,
                            "category": 3,
                            "key": "Source_Map_Options_6175",
                            "message": "Source Map Options"
                        },
                        "description": {
                            "code": 6004,
                            "category": 3,
                            "key": "Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations_6004",
                            "message": "Specify the location where debugger should locate TypeScript files instead of source locations."
                        }
                    },
                    {
                        "name": "mapRoot",
                        "type": "string",
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6037,
                            "category": 3,
                            "key": "LOCATION_6037",
                            "message": "LOCATION"
                        },
                        "category": {
                            "code": 6175,
                            "category": 3,
                            "key": "Source_Map_Options_6175",
                            "message": "Source Map Options"
                        },
                        "description": {
                            "code": 6003,
                            "category": 3,
                            "key": "Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations_6003",
                            "message": "Specify the location where debugger should locate map files instead of generated locations."
                        }
                    },
                    {
                        "name": "inlineSourceMap",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6175,
                            "category": 3,
                            "key": "Source_Map_Options_6175",
                            "message": "Source Map Options"
                        },
                        "description": {
                            "code": 6151,
                            "category": 3,
                            "key": "Emit_a_single_file_with_source_maps_instead_of_having_a_separate_file_6151",
                            "message": "Emit a single file with source maps instead of having a separate file."
                        }
                    },
                    {
                        "name": "inlineSources",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6175,
                            "category": 3,
                            "key": "Source_Map_Options_6175",
                            "message": "Source Map Options"
                        },
                        "description": {
                            "code": 6152,
                            "category": 3,
                            "key": "Emit_the_source_alongside_the_sourcemaps_within_a_single_file_requires_inlineSourceMap_or_sourceMap__6152",
                            "message": "Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set."
                        }
                    },
                    {
                        "name": "experimentalDecorators",
                        "type": "boolean",
                        "category": {
                            "code": 6177,
                            "category": 3,
                            "key": "Experimental_Options_6177",
                            "message": "Experimental Options"
                        },
                        "description": {
                            "code": 6065,
                            "category": 3,
                            "key": "Enables_experimental_support_for_ES7_decorators_6065",
                            "message": "Enables experimental support for ES7 decorators."
                        }
                    },
                    {
                        "name": "emitDecoratorMetadata",
                        "type": "boolean",
                        "category": {
                            "code": 6177,
                            "category": 3,
                            "key": "Experimental_Options_6177",
                            "message": "Experimental Options"
                        },
                        "description": {
                            "code": 6066,
                            "category": 3,
                            "key": "Enables_experimental_support_for_emitting_type_metadata_for_decorators_6066",
                            "message": "Enables experimental support for emitting type metadata for decorators."
                        }
                    },
                    {
                        "name": "jsxFactory",
                        "type": "string",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6146,
                            "category": 3,
                            "key": "Specify_the_JSX_factory_function_to_use_when_targeting_react_JSX_emit_e_g_React_createElement_or_h_6146",
                            "message": "Specify the JSX factory function to use when targeting 'react' JSX emit, e.g. 'React.createElement' or 'h'."
                        }
                    },
                    {
                        "name": "resolveJsonModule",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6197,
                            "category": 3,
                            "key": "Include_modules_imported_with_json_extension_6197",
                            "message": "Include modules imported with '.json' extension"
                        }
                    },
                    {
                        "name": "out",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": false,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "paramType": {
                            "code": 6035,
                            "category": 3,
                            "key": "FILE_6035",
                            "message": "FILE"
                        },
                        "description": {
                            "code": 6170,
                            "category": 3,
                            "key": "Deprecated_Use_outFile_instead_Concatenate_and_emit_output_to_single_file_6170",
                            "message": "[Deprecated] Use '--outFile' instead. Concatenate and emit output to single file"
                        }
                    },
                    {
                        "name": "reactNamespace",
                        "type": "string",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6084,
                            "category": 3,
                            "key": "Deprecated_Use_jsxFactory_instead_Specify_the_object_invoked_for_createElement_when_targeting_react__6084",
                            "message": "[Deprecated] Use '--jsxFactory' instead. Specify the object invoked for createElement when targeting 'react' JSX emit"
                        }
                    },
                    {
                        "name": "skipDefaultLibCheck",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6160,
                            "category": 3,
                            "key": "Deprecated_Use_skipLibCheck_instead_Skip_type_checking_of_default_library_declaration_files_6160",
                            "message": "[Deprecated] Use '--skipLibCheck' instead. Skip type checking of default library declaration files."
                        }
                    },
                    {
                        "name": "charset",
                        "type": "string",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6163,
                            "category": 3,
                            "key": "The_character_set_of_the_input_files_6163",
                            "message": "The character set of the input files."
                        }
                    },
                    {
                        "name": "emitBOM",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6164,
                            "category": 3,
                            "key": "Emit_a_UTF_8_Byte_Order_Mark_BOM_in_the_beginning_of_output_files_6164",
                            "message": "Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files."
                        }
                    },
                    {
                        "name": "newLine",
                        "type": {},
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6061,
                            "category": 3,
                            "key": "NEWLINE_6061",
                            "message": "NEWLINE"
                        },
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6060,
                            "category": 3,
                            "key": "Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix_6060",
                            "message": "Specify the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix)."
                        }
                    },
                    {
                        "name": "noErrorTruncation",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6165,
                            "category": 3,
                            "key": "Do_not_truncate_error_messages_6165",
                            "message": "Do not truncate error messages."
                        }
                    },
                    {
                        "name": "noLib",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6158,
                            "category": 3,
                            "key": "Do_not_include_the_default_library_file_lib_d_ts_6158",
                            "message": "Do not include the default library file (lib.d.ts)."
                        },
                        "transpileOptionValue": true
                    },
                    {
                        "name": "noResolve",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6159,
                            "category": 3,
                            "key": "Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files_6159",
                            "message": "Do not add triple-slash references or imported modules to the list of compiled files."
                        },
                        "transpileOptionValue": true
                    },
                    {
                        "name": "stripInternal",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6056,
                            "category": 3,
                            "key": "Do_not_emit_declarations_for_code_that_has_an_internal_annotation_6056",
                            "message": "Do not emit declarations for code that has an '@internal' annotation."
                        }
                    },
                    {
                        "name": "disableSizeLimit",
                        "type": "boolean",
                        "affectsSourceFile": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6162,
                            "category": 3,
                            "key": "Disable_size_limitations_on_JavaScript_projects_6162",
                            "message": "Disable size limitations on JavaScript projects."
                        }
                    },
                    {
                        "name": "disableSourceOfProjectReferenceRedirect",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6221,
                            "category": 3,
                            "key": "Disable_use_of_source_files_instead_of_declaration_files_from_referenced_projects_6221",
                            "message": "Disable use of source files instead of declaration files from referenced projects."
                        }
                    },
                    {
                        "name": "noImplicitUseStrict",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6112,
                            "category": 3,
                            "key": "Do_not_emit_use_strict_directives_in_module_output_6112",
                            "message": "Do not emit 'use strict' directives in module output."
                        }
                    },
                    {
                        "name": "noEmitHelpers",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6157,
                            "category": 3,
                            "key": "Do_not_generate_custom_helper_functions_like_extends_in_compiled_output_6157",
                            "message": "Do not generate custom helper functions like '__extends' in compiled output."
                        }
                    },
                    {
                        "name": "noEmitOnError",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6008,
                            "category": 3,
                            "key": "Do_not_emit_outputs_if_any_errors_were_reported_6008",
                            "message": "Do not emit outputs if any errors were reported."
                        }
                    },
                    {
                        "name": "preserveConstEnums",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6007,
                            "category": 3,
                            "key": "Do_not_erase_const_enum_declarations_in_generated_code_6007",
                            "message": "Do not erase const enum declarations in generated code."
                        }
                    },
                    {
                        "name": "declarationDir",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6038,
                            "category": 3,
                            "key": "DIRECTORY_6038",
                            "message": "DIRECTORY"
                        },
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6166,
                            "category": 3,
                            "key": "Output_directory_for_generated_declaration_files_6166",
                            "message": "Output directory for generated declaration files."
                        }
                    },
                    {
                        "name": "skipLibCheck",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6012,
                            "category": 3,
                            "key": "Skip_type_checking_of_declaration_files_6012",
                            "message": "Skip type checking of declaration files."
                        }
                    },
                    {
                        "name": "allowUnusedLabels",
                        "type": "boolean",
                        "affectsBindDiagnostics": true,
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6074,
                            "category": 3,
                            "key": "Do_not_report_errors_on_unused_labels_6074",
                            "message": "Do not report errors on unused labels."
                        }
                    },
                    {
                        "name": "allowUnreachableCode",
                        "type": "boolean",
                        "affectsBindDiagnostics": true,
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6077,
                            "category": 3,
                            "key": "Do_not_report_errors_on_unreachable_code_6077",
                            "message": "Do not report errors on unreachable code."
                        }
                    },
                    {
                        "name": "suppressExcessPropertyErrors",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6072,
                            "category": 3,
                            "key": "Suppress_excess_property_checks_for_object_literals_6072",
                            "message": "Suppress excess property checks for object literals."
                        }
                    },
                    {
                        "name": "suppressImplicitAnyIndexErrors",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6055,
                            "category": 3,
                            "key": "Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures_6055",
                            "message": "Suppress noImplicitAny errors for indexing objects lacking index signatures."
                        }
                    },
                    {
                        "name": "forceConsistentCasingInFileNames",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6078,
                            "category": 3,
                            "key": "Disallow_inconsistently_cased_references_to_the_same_file_6078",
                            "message": "Disallow inconsistently-cased references to the same file."
                        }
                    },
                    {
                        "name": "maxNodeModuleJsDepth",
                        "type": "number",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6136,
                            "category": 3,
                            "key": "The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files_6136",
                            "message": "The maximum dependency depth to search under node_modules and load JavaScript files."
                        }
                    },
                    {
                        "name": "noStrictGenericChecks",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6185,
                            "category": 3,
                            "key": "Disable_strict_checking_of_generic_signatures_in_function_types_6185",
                            "message": "Disable strict checking of generic signatures in function types."
                        }
                    },
                    {
                        "name": "useDefineForClassFields",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6222,
                            "category": 3,
                            "key": "Emit_class_fields_with_Define_instead_of_Set_6222",
                            "message": "Emit class fields with Define instead of Set."
                        }
                    },
                    {
                        "name": "keyofStringsOnly",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6195,
                            "category": 3,
                            "key": "Resolve_keyof_to_string_valued_property_names_only_no_numbers_or_symbols_6195",
                            "message": "Resolve 'keyof' to string valued property names only (no numbers or symbols)."
                        }
                    },
                    {
                        "name": "plugins",
                        "type": "list",
                        "isTSConfigOnly": true,
                        "element": {
                            "name": "plugin",
                            "type": "object"
                        },
                        "description": {
                            "code": 6181,
                            "category": 3,
                            "key": "List_of_language_service_plugins_6181",
                            "message": "List of language service plugins."
                        }
                    }
                ],
                "semanticDiagnosticsOptionDeclarations": [
                    {
                        "name": "listFilesOnly",
                        "type": "boolean",
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "affectsSemanticDiagnostics": true,
                        "affectsEmit": true,
                        "isCommandLineOnly": true,
                        "description": {
                            "code": 6503,
                            "category": 3,
                            "key": "Print_names_of_files_that_are_part_of_the_compilation_and_then_stop_processing_6503",
                            "message": "Print names of files that are part of the compilation and then stop processing."
                        }
                    },
                    {
                        "name": "noImplicitAny",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6052,
                            "category": 3,
                            "key": "Raise_error_on_expressions_and_declarations_with_an_implied_any_type_6052",
                            "message": "Raise error on expressions and declarations with an implied 'any' type."
                        }
                    },
                    {
                        "name": "strictNullChecks",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6113,
                            "category": 3,
                            "key": "Enable_strict_null_checks_6113",
                            "message": "Enable strict null checks."
                        }
                    },
                    {
                        "name": "strictFunctionTypes",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6186,
                            "category": 3,
                            "key": "Enable_strict_checking_of_function_types_6186",
                            "message": "Enable strict checking of function types."
                        }
                    },
                    {
                        "name": "strictPropertyInitialization",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6187,
                            "category": 3,
                            "key": "Enable_strict_checking_of_property_initialization_in_classes_6187",
                            "message": "Enable strict checking of property initialization in classes."
                        }
                    },
                    {
                        "name": "noImplicitThis",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6115,
                            "category": 3,
                            "key": "Raise_error_on_this_expressions_with_an_implied_any_type_6115",
                            "message": "Raise error on 'this' expressions with an implied 'any' type."
                        }
                    },
                    {
                        "name": "noUnusedLocals",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6176,
                            "category": 3,
                            "key": "Additional_Checks_6176",
                            "message": "Additional Checks"
                        },
                        "description": {
                            "code": 6134,
                            "category": 3,
                            "key": "Report_errors_on_unused_locals_6134",
                            "message": "Report errors on unused locals."
                        }
                    },
                    {
                        "name": "noUnusedParameters",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6176,
                            "category": 3,
                            "key": "Additional_Checks_6176",
                            "message": "Additional Checks"
                        },
                        "description": {
                            "code": 6135,
                            "category": 3,
                            "key": "Report_errors_on_unused_parameters_6135",
                            "message": "Report errors on unused parameters."
                        }
                    },
                    {
                        "name": "noImplicitReturns",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6176,
                            "category": 3,
                            "key": "Additional_Checks_6176",
                            "message": "Additional Checks"
                        },
                        "description": {
                            "code": 6075,
                            "category": 3,
                            "key": "Report_error_when_not_all_code_paths_in_function_return_a_value_6075",
                            "message": "Report error when not all code paths in function return a value."
                        }
                    },
                    {
                        "name": "noFallthroughCasesInSwitch",
                        "type": "boolean",
                        "affectsBindDiagnostics": true,
                        "affectsSemanticDiagnostics": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6176,
                            "category": 3,
                            "key": "Additional_Checks_6176",
                            "message": "Additional Checks"
                        },
                        "description": {
                            "code": 6076,
                            "category": 3,
                            "key": "Report_errors_for_fallthrough_cases_in_switch_statement_6076",
                            "message": "Report errors for fallthrough cases in switch statement."
                        }
                    },
                    {
                        "name": "allowSyntheticDefaultImports",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6011,
                            "category": 3,
                            "key": "Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typech_6011",
                            "message": "Allow default imports from modules with no default export. This does not affect code emit, just typechecking."
                        }
                    },
                    {
                        "name": "esModuleInterop",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 7037,
                            "category": 3,
                            "key": "Enables_emit_interoperability_between_CommonJS_and_ES_Modules_via_creation_of_namespace_objects_for__7037",
                            "message": "Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'."
                        }
                    },
                    {
                        "name": "allowUmdGlobalAccess",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 95076,
                            "category": 3,
                            "key": "Allow_accessing_UMD_globals_from_modules_95076",
                            "message": "Allow accessing UMD globals from modules."
                        }
                    },
                    {
                        "name": "noImplicitUseStrict",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6112,
                            "category": 3,
                            "key": "Do_not_emit_use_strict_directives_in_module_output_6112",
                            "message": "Do not emit 'use strict' directives in module output."
                        }
                    },
                    {
                        "name": "allowUnusedLabels",
                        "type": "boolean",
                        "affectsBindDiagnostics": true,
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6074,
                            "category": 3,
                            "key": "Do_not_report_errors_on_unused_labels_6074",
                            "message": "Do not report errors on unused labels."
                        }
                    },
                    {
                        "name": "allowUnreachableCode",
                        "type": "boolean",
                        "affectsBindDiagnostics": true,
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6077,
                            "category": 3,
                            "key": "Do_not_report_errors_on_unreachable_code_6077",
                            "message": "Do not report errors on unreachable code."
                        }
                    },
                    {
                        "name": "suppressExcessPropertyErrors",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6072,
                            "category": 3,
                            "key": "Suppress_excess_property_checks_for_object_literals_6072",
                            "message": "Suppress excess property checks for object literals."
                        }
                    },
                    {
                        "name": "suppressImplicitAnyIndexErrors",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6055,
                            "category": 3,
                            "key": "Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures_6055",
                            "message": "Suppress noImplicitAny errors for indexing objects lacking index signatures."
                        }
                    },
                    {
                        "name": "noStrictGenericChecks",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6185,
                            "category": 3,
                            "key": "Disable_strict_checking_of_generic_signatures_in_function_types_6185",
                            "message": "Disable strict checking of generic signatures in function types."
                        }
                    },
                    {
                        "name": "useDefineForClassFields",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6222,
                            "category": 3,
                            "key": "Emit_class_fields_with_Define_instead_of_Set_6222",
                            "message": "Emit class fields with Define instead of Set."
                        }
                    }
                ],
                "affectsEmitOptionDeclarations": [
                    {
                        "name": "listFilesOnly",
                        "type": "boolean",
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "affectsSemanticDiagnostics": true,
                        "affectsEmit": true,
                        "isCommandLineOnly": true,
                        "description": {
                            "code": 6503,
                            "category": 3,
                            "key": "Print_names_of_files_that_are_part_of_the_compilation_and_then_stop_processing_6503",
                            "message": "Print names of files that are part of the compilation and then stop processing."
                        }
                    },
                    {
                        "name": "target",
                        "shortName": "t",
                        "type": {},
                        "affectsSourceFile": true,
                        "affectsModuleResolution": true,
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6036,
                            "category": 3,
                            "key": "VERSION_6036",
                            "message": "VERSION"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6015,
                            "category": 3,
                            "key": "Specify_ECMAScript_target_version_Colon_ES3_default_ES5_ES2015_ES2016_ES2017_ES2018_ES2019_or_ESNEXT_6015",
                            "message": "Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'."
                        }
                    },
                    {
                        "name": "module",
                        "shortName": "m",
                        "type": {},
                        "affectsModuleResolution": true,
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6034,
                            "category": 3,
                            "key": "KIND_6034",
                            "message": "KIND"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6016,
                            "category": 3,
                            "key": "Specify_module_code_generation_Colon_none_commonjs_amd_system_umd_es2015_or_ESNext_6016",
                            "message": "Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'."
                        }
                    },
                    {
                        "name": "declaration",
                        "shortName": "d",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6002,
                            "category": 3,
                            "key": "Generates_corresponding_d_ts_file_6002",
                            "message": "Generates corresponding '.d.ts' file."
                        }
                    },
                    {
                        "name": "declarationMap",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6000,
                            "category": 3,
                            "key": "Generates_a_sourcemap_for_each_corresponding_d_ts_file_6000",
                            "message": "Generates a sourcemap for each corresponding '.d.ts' file."
                        }
                    },
                    {
                        "name": "emitDeclarationOnly",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6014,
                            "category": 3,
                            "key": "Only_emit_d_ts_declaration_files_6014",
                            "message": "Only emit '.d.ts' declaration files."
                        }
                    },
                    {
                        "name": "sourceMap",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6043,
                            "category": 3,
                            "key": "Generates_corresponding_map_file_6043",
                            "message": "Generates corresponding '.map' file."
                        }
                    },
                    {
                        "name": "outFile",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6035,
                            "category": 3,
                            "key": "FILE_6035",
                            "message": "FILE"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6001,
                            "category": 3,
                            "key": "Concatenate_and_emit_output_to_single_file_6001",
                            "message": "Concatenate and emit output to single file."
                        }
                    },
                    {
                        "name": "outDir",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6038,
                            "category": 3,
                            "key": "DIRECTORY_6038",
                            "message": "DIRECTORY"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6006,
                            "category": 3,
                            "key": "Redirect_output_structure_to_the_directory_6006",
                            "message": "Redirect output structure to the directory."
                        }
                    },
                    {
                        "name": "rootDir",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6037,
                            "category": 3,
                            "key": "LOCATION_6037",
                            "message": "LOCATION"
                        },
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6058,
                            "category": 3,
                            "key": "Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir_6058",
                            "message": "Specify the root directory of input files. Use to control the output directory structure with --outDir."
                        }
                    },
                    {
                        "name": "composite",
                        "type": "boolean",
                        "affectsEmit": true,
                        "isTSConfigOnly": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6302,
                            "category": 3,
                            "key": "Enable_project_compilation_6302",
                            "message": "Enable project compilation"
                        }
                    },
                    {
                        "name": "tsBuildInfoFile",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6035,
                            "category": 3,
                            "key": "FILE_6035",
                            "message": "FILE"
                        },
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6380,
                            "category": 3,
                            "key": "Specify_file_to_store_incremental_compilation_information_6380",
                            "message": "Specify file to store incremental compilation information"
                        }
                    },
                    {
                        "name": "removeComments",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6009,
                            "category": 3,
                            "key": "Do_not_emit_comments_to_output_6009",
                            "message": "Do not emit comments to output."
                        }
                    },
                    {
                        "name": "noEmit",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6010,
                            "category": 3,
                            "key": "Do_not_emit_outputs_6010",
                            "message": "Do not emit outputs."
                        }
                    },
                    {
                        "name": "importHelpers",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6139,
                            "category": 3,
                            "key": "Import_emit_helpers_from_tslib_6139",
                            "message": "Import emit helpers from 'tslib'."
                        }
                    },
                    {
                        "name": "downlevelIteration",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6179,
                            "category": 3,
                            "key": "Provide_full_support_for_iterables_in_for_of_spread_and_destructuring_when_targeting_ES5_or_ES3_6179",
                            "message": "Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'."
                        }
                    },
                    {
                        "name": "esModuleInterop",
                        "type": "boolean",
                        "affectsSemanticDiagnostics": true,
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 7037,
                            "category": 3,
                            "key": "Enables_emit_interoperability_between_CommonJS_and_ES_Modules_via_creation_of_namespace_objects_for__7037",
                            "message": "Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'."
                        }
                    },
                    {
                        "name": "sourceRoot",
                        "type": "string",
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6037,
                            "category": 3,
                            "key": "LOCATION_6037",
                            "message": "LOCATION"
                        },
                        "category": {
                            "code": 6175,
                            "category": 3,
                            "key": "Source_Map_Options_6175",
                            "message": "Source Map Options"
                        },
                        "description": {
                            "code": 6004,
                            "category": 3,
                            "key": "Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations_6004",
                            "message": "Specify the location where debugger should locate TypeScript files instead of source locations."
                        }
                    },
                    {
                        "name": "mapRoot",
                        "type": "string",
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6037,
                            "category": 3,
                            "key": "LOCATION_6037",
                            "message": "LOCATION"
                        },
                        "category": {
                            "code": 6175,
                            "category": 3,
                            "key": "Source_Map_Options_6175",
                            "message": "Source Map Options"
                        },
                        "description": {
                            "code": 6003,
                            "category": 3,
                            "key": "Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations_6003",
                            "message": "Specify the location where debugger should locate map files instead of generated locations."
                        }
                    },
                    {
                        "name": "inlineSourceMap",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6175,
                            "category": 3,
                            "key": "Source_Map_Options_6175",
                            "message": "Source Map Options"
                        },
                        "description": {
                            "code": 6151,
                            "category": 3,
                            "key": "Emit_a_single_file_with_source_maps_instead_of_having_a_separate_file_6151",
                            "message": "Emit a single file with source maps instead of having a separate file."
                        }
                    },
                    {
                        "name": "inlineSources",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6175,
                            "category": 3,
                            "key": "Source_Map_Options_6175",
                            "message": "Source Map Options"
                        },
                        "description": {
                            "code": 6152,
                            "category": 3,
                            "key": "Emit_the_source_alongside_the_sourcemaps_within_a_single_file_requires_inlineSourceMap_or_sourceMap__6152",
                            "message": "Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set."
                        }
                    },
                    {
                        "name": "out",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": false,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "paramType": {
                            "code": 6035,
                            "category": 3,
                            "key": "FILE_6035",
                            "message": "FILE"
                        },
                        "description": {
                            "code": 6170,
                            "category": 3,
                            "key": "Deprecated_Use_outFile_instead_Concatenate_and_emit_output_to_single_file_6170",
                            "message": "[Deprecated] Use '--outFile' instead. Concatenate and emit output to single file"
                        }
                    },
                    {
                        "name": "reactNamespace",
                        "type": "string",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6084,
                            "category": 3,
                            "key": "Deprecated_Use_jsxFactory_instead_Specify_the_object_invoked_for_createElement_when_targeting_react__6084",
                            "message": "[Deprecated] Use '--jsxFactory' instead. Specify the object invoked for createElement when targeting 'react' JSX emit"
                        }
                    },
                    {
                        "name": "emitBOM",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6164,
                            "category": 3,
                            "key": "Emit_a_UTF_8_Byte_Order_Mark_BOM_in_the_beginning_of_output_files_6164",
                            "message": "Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files."
                        }
                    },
                    {
                        "name": "newLine",
                        "type": {},
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6061,
                            "category": 3,
                            "key": "NEWLINE_6061",
                            "message": "NEWLINE"
                        },
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6060,
                            "category": 3,
                            "key": "Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix_6060",
                            "message": "Specify the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix)."
                        }
                    },
                    {
                        "name": "stripInternal",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6056,
                            "category": 3,
                            "key": "Do_not_emit_declarations_for_code_that_has_an_internal_annotation_6056",
                            "message": "Do not emit declarations for code that has an '@internal' annotation."
                        }
                    },
                    {
                        "name": "noEmitHelpers",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6157,
                            "category": 3,
                            "key": "Do_not_generate_custom_helper_functions_like_extends_in_compiled_output_6157",
                            "message": "Do not generate custom helper functions like '__extends' in compiled output."
                        }
                    },
                    {
                        "name": "noEmitOnError",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6008,
                            "category": 3,
                            "key": "Do_not_emit_outputs_if_any_errors_were_reported_6008",
                            "message": "Do not emit outputs if any errors were reported."
                        }
                    },
                    {
                        "name": "preserveConstEnums",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6007,
                            "category": 3,
                            "key": "Do_not_erase_const_enum_declarations_in_generated_code_6007",
                            "message": "Do not erase const enum declarations in generated code."
                        }
                    },
                    {
                        "name": "declarationDir",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6038,
                            "category": 3,
                            "key": "DIRECTORY_6038",
                            "message": "DIRECTORY"
                        },
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6166,
                            "category": 3,
                            "key": "Output_directory_for_generated_declaration_files_6166",
                            "message": "Output directory for generated declaration files."
                        }
                    }
                ],
                "moduleResolutionOptionDeclarations": [
                    {
                        "name": "target",
                        "shortName": "t",
                        "type": {},
                        "affectsSourceFile": true,
                        "affectsModuleResolution": true,
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6036,
                            "category": 3,
                            "key": "VERSION_6036",
                            "message": "VERSION"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6015,
                            "category": 3,
                            "key": "Specify_ECMAScript_target_version_Colon_ES3_default_ES5_ES2015_ES2016_ES2017_ES2018_ES2019_or_ESNEXT_6015",
                            "message": "Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'."
                        }
                    },
                    {
                        "name": "module",
                        "shortName": "m",
                        "type": {},
                        "affectsModuleResolution": true,
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6034,
                            "category": 3,
                            "key": "KIND_6034",
                            "message": "KIND"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6016,
                            "category": 3,
                            "key": "Specify_module_code_generation_Colon_none_commonjs_amd_system_umd_es2015_or_ESNext_6016",
                            "message": "Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'."
                        }
                    },
                    {
                        "name": "lib",
                        "type": "list",
                        "element": {
                            "name": "lib",
                            "type": {}
                        },
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6079,
                            "category": 3,
                            "key": "Specify_library_files_to_be_included_in_the_compilation_6079",
                            "message": "Specify library files to be included in the compilation."
                        }
                    },
                    {
                        "name": "allowJs",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6102,
                            "category": 3,
                            "key": "Allow_javascript_files_to_be_compiled_6102",
                            "message": "Allow javascript files to be compiled."
                        }
                    },
                    {
                        "name": "moduleResolution",
                        "type": {},
                        "affectsModuleResolution": true,
                        "paramType": {
                            "code": 6039,
                            "category": 3,
                            "key": "STRATEGY_6039",
                            "message": "STRATEGY"
                        },
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6069,
                            "category": 3,
                            "key": "Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6_6069",
                            "message": "Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6)."
                        }
                    },
                    {
                        "name": "baseUrl",
                        "type": "string",
                        "affectsModuleResolution": true,
                        "isFilePath": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6083,
                            "category": 3,
                            "key": "Base_directory_to_resolve_non_absolute_module_names_6083",
                            "message": "Base directory to resolve non-absolute module names."
                        }
                    },
                    {
                        "name": "paths",
                        "type": "object",
                        "affectsModuleResolution": true,
                        "isTSConfigOnly": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6167,
                            "category": 3,
                            "key": "A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl_6167",
                            "message": "A series of entries which re-map imports to lookup locations relative to the 'baseUrl'."
                        }
                    },
                    {
                        "name": "rootDirs",
                        "type": "list",
                        "isTSConfigOnly": true,
                        "element": {
                            "name": "rootDirs",
                            "type": "string",
                            "isFilePath": true
                        },
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6168,
                            "category": 3,
                            "key": "List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime_6168",
                            "message": "List of root folders whose combined content represents the structure of the project at runtime."
                        }
                    },
                    {
                        "name": "typeRoots",
                        "type": "list",
                        "element": {
                            "name": "typeRoots",
                            "type": "string",
                            "isFilePath": true
                        },
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6161,
                            "category": 3,
                            "key": "List_of_folders_to_include_type_definitions_from_6161",
                            "message": "List of folders to include type definitions from."
                        }
                    },
                    {
                        "name": "types",
                        "type": "list",
                        "element": {
                            "name": "types",
                            "type": "string"
                        },
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6124,
                            "category": 3,
                            "key": "Type_declaration_files_to_be_included_in_compilation_6124",
                            "message": "Type declaration files to be included in compilation."
                        }
                    },
                    {
                        "name": "noLib",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6158,
                            "category": 3,
                            "key": "Do_not_include_the_default_library_file_lib_d_ts_6158",
                            "message": "Do not include the default library file (lib.d.ts)."
                        },
                        "transpileOptionValue": true
                    },
                    {
                        "name": "noResolve",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6159,
                            "category": 3,
                            "key": "Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files_6159",
                            "message": "Do not add triple-slash references or imported modules to the list of compiled files."
                        },
                        "transpileOptionValue": true
                    },
                    {
                        "name": "maxNodeModuleJsDepth",
                        "type": "number",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6136,
                            "category": 3,
                            "key": "The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files_6136",
                            "message": "The maximum dependency depth to search under node_modules and load JavaScript files."
                        }
                    }
                ],
                "sourceFileAffectingCompilerOptions": [
                    {
                        "name": "target",
                        "shortName": "t",
                        "type": {},
                        "affectsSourceFile": true,
                        "affectsModuleResolution": true,
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6036,
                            "category": 3,
                            "key": "VERSION_6036",
                            "message": "VERSION"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6015,
                            "category": 3,
                            "key": "Specify_ECMAScript_target_version_Colon_ES3_default_ES5_ES2015_ES2016_ES2017_ES2018_ES2019_or_ESNEXT_6015",
                            "message": "Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'."
                        }
                    },
                    {
                        "name": "module",
                        "shortName": "m",
                        "type": {},
                        "affectsModuleResolution": true,
                        "affectsEmit": true,
                        "paramType": {
                            "code": 6034,
                            "category": 3,
                            "key": "KIND_6034",
                            "message": "KIND"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6016,
                            "category": 3,
                            "key": "Specify_module_code_generation_Colon_none_commonjs_amd_system_umd_es2015_or_ESNext_6016",
                            "message": "Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'."
                        }
                    },
                    {
                        "name": "lib",
                        "type": "list",
                        "element": {
                            "name": "lib",
                            "type": {}
                        },
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6079,
                            "category": 3,
                            "key": "Specify_library_files_to_be_included_in_the_compilation_6079",
                            "message": "Specify library files to be included in the compilation."
                        }
                    },
                    {
                        "name": "allowJs",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6102,
                            "category": 3,
                            "key": "Allow_javascript_files_to_be_compiled_6102",
                            "message": "Allow javascript files to be compiled."
                        }
                    },
                    {
                        "name": "jsx",
                        "type": {},
                        "affectsSourceFile": true,
                        "paramType": {
                            "code": 6034,
                            "category": 3,
                            "key": "KIND_6034",
                            "message": "KIND"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6080,
                            "category": 3,
                            "key": "Specify_JSX_code_generation_Colon_preserve_react_native_or_react_6080",
                            "message": "Specify JSX code generation: 'preserve', 'react-native', or 'react'."
                        }
                    },
                    {
                        "name": "alwaysStrict",
                        "type": "boolean",
                        "affectsSourceFile": true,
                        "strictFlag": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6173,
                            "category": 3,
                            "key": "Strict_Type_Checking_Options_6173",
                            "message": "Strict Type-Checking Options"
                        },
                        "description": {
                            "code": 6141,
                            "category": 3,
                            "key": "Parse_in_strict_mode_and_emit_use_strict_for_each_source_file_6141",
                            "message": "Parse in strict mode and emit \"use strict\" for each source file."
                        }
                    },
                    {
                        "name": "noFallthroughCasesInSwitch",
                        "type": "boolean",
                        "affectsBindDiagnostics": true,
                        "affectsSemanticDiagnostics": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6176,
                            "category": 3,
                            "key": "Additional_Checks_6176",
                            "message": "Additional Checks"
                        },
                        "description": {
                            "code": 6076,
                            "category": 3,
                            "key": "Report_errors_for_fallthrough_cases_in_switch_statement_6076",
                            "message": "Report errors for fallthrough cases in switch statement."
                        }
                    },
                    {
                        "name": "moduleResolution",
                        "type": {},
                        "affectsModuleResolution": true,
                        "paramType": {
                            "code": 6039,
                            "category": 3,
                            "key": "STRATEGY_6039",
                            "message": "STRATEGY"
                        },
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6069,
                            "category": 3,
                            "key": "Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6_6069",
                            "message": "Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6)."
                        }
                    },
                    {
                        "name": "baseUrl",
                        "type": "string",
                        "affectsModuleResolution": true,
                        "isFilePath": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6083,
                            "category": 3,
                            "key": "Base_directory_to_resolve_non_absolute_module_names_6083",
                            "message": "Base directory to resolve non-absolute module names."
                        }
                    },
                    {
                        "name": "paths",
                        "type": "object",
                        "affectsModuleResolution": true,
                        "isTSConfigOnly": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6167,
                            "category": 3,
                            "key": "A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl_6167",
                            "message": "A series of entries which re-map imports to lookup locations relative to the 'baseUrl'."
                        }
                    },
                    {
                        "name": "rootDirs",
                        "type": "list",
                        "isTSConfigOnly": true,
                        "element": {
                            "name": "rootDirs",
                            "type": "string",
                            "isFilePath": true
                        },
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6168,
                            "category": 3,
                            "key": "List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime_6168",
                            "message": "List of root folders whose combined content represents the structure of the project at runtime."
                        }
                    },
                    {
                        "name": "typeRoots",
                        "type": "list",
                        "element": {
                            "name": "typeRoots",
                            "type": "string",
                            "isFilePath": true
                        },
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6161,
                            "category": 3,
                            "key": "List_of_folders_to_include_type_definitions_from_6161",
                            "message": "List of folders to include type definitions from."
                        }
                    },
                    {
                        "name": "types",
                        "type": "list",
                        "element": {
                            "name": "types",
                            "type": "string"
                        },
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6124,
                            "category": 3,
                            "key": "Type_declaration_files_to_be_included_in_compilation_6124",
                            "message": "Type declaration files to be included in compilation."
                        }
                    },
                    {
                        "name": "noLib",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6158,
                            "category": 3,
                            "key": "Do_not_include_the_default_library_file_lib_d_ts_6158",
                            "message": "Do not include the default library file (lib.d.ts)."
                        },
                        "transpileOptionValue": true
                    },
                    {
                        "name": "noResolve",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6159,
                            "category": 3,
                            "key": "Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files_6159",
                            "message": "Do not add triple-slash references or imported modules to the list of compiled files."
                        },
                        "transpileOptionValue": true
                    },
                    {
                        "name": "disableSizeLimit",
                        "type": "boolean",
                        "affectsSourceFile": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6162,
                            "category": 3,
                            "key": "Disable_size_limitations_on_JavaScript_projects_6162",
                            "message": "Disable size limitations on JavaScript projects."
                        }
                    },
                    {
                        "name": "allowUnusedLabels",
                        "type": "boolean",
                        "affectsBindDiagnostics": true,
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6074,
                            "category": 3,
                            "key": "Do_not_report_errors_on_unused_labels_6074",
                            "message": "Do not report errors on unused labels."
                        }
                    },
                    {
                        "name": "allowUnreachableCode",
                        "type": "boolean",
                        "affectsBindDiagnostics": true,
                        "affectsSemanticDiagnostics": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6077,
                            "category": 3,
                            "key": "Do_not_report_errors_on_unreachable_code_6077",
                            "message": "Do not report errors on unreachable code."
                        }
                    },
                    {
                        "name": "maxNodeModuleJsDepth",
                        "type": "number",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6136,
                            "category": 3,
                            "key": "The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files_6136",
                            "message": "The maximum dependency depth to search under node_modules and load JavaScript files."
                        }
                    }
                ],
                "transpileOptionValueCompilerOptions": [
                    {
                        "name": "incremental",
                        "shortName": "i",
                        "type": "boolean",
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6378,
                            "category": 3,
                            "key": "Enable_incremental_compilation_6378",
                            "message": "Enable incremental compilation"
                        }
                    },
                    {
                        "name": "lib",
                        "type": "list",
                        "element": {
                            "name": "lib",
                            "type": {}
                        },
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6079,
                            "category": 3,
                            "key": "Specify_library_files_to_be_included_in_the_compilation_6079",
                            "message": "Specify library files to be included in the compilation."
                        }
                    },
                    {
                        "name": "declaration",
                        "shortName": "d",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6002,
                            "category": 3,
                            "key": "Generates_corresponding_d_ts_file_6002",
                            "message": "Generates corresponding '.d.ts' file."
                        }
                    },
                    {
                        "name": "declarationMap",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6000,
                            "category": 3,
                            "key": "Generates_a_sourcemap_for_each_corresponding_d_ts_file_6000",
                            "message": "Generates a sourcemap for each corresponding '.d.ts' file."
                        }
                    },
                    {
                        "name": "emitDeclarationOnly",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6014,
                            "category": 3,
                            "key": "Only_emit_d_ts_declaration_files_6014",
                            "message": "Only emit '.d.ts' declaration files."
                        }
                    },
                    {
                        "name": "outFile",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6035,
                            "category": 3,
                            "key": "FILE_6035",
                            "message": "FILE"
                        },
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6001,
                            "category": 3,
                            "key": "Concatenate_and_emit_output_to_single_file_6001",
                            "message": "Concatenate and emit output to single file."
                        }
                    },
                    {
                        "name": "composite",
                        "type": "boolean",
                        "affectsEmit": true,
                        "isTSConfigOnly": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6302,
                            "category": 3,
                            "key": "Enable_project_compilation_6302",
                            "message": "Enable project compilation"
                        }
                    },
                    {
                        "name": "tsBuildInfoFile",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6035,
                            "category": 3,
                            "key": "FILE_6035",
                            "message": "FILE"
                        },
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6380,
                            "category": 3,
                            "key": "Specify_file_to_store_incremental_compilation_information_6380",
                            "message": "Specify file to store incremental compilation information"
                        }
                    },
                    {
                        "name": "noEmit",
                        "type": "boolean",
                        "affectsEmit": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6010,
                            "category": 3,
                            "key": "Do_not_emit_outputs_6010",
                            "message": "Do not emit outputs."
                        }
                    },
                    {
                        "name": "isolatedModules",
                        "type": "boolean",
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6153,
                            "category": 3,
                            "key": "Transpile_each_file_as_a_separate_module_similar_to_ts_transpileModule_6153",
                            "message": "Transpile each file as a separate module (similar to 'ts.transpileModule')."
                        },
                        "transpileOptionValue": true
                    },
                    {
                        "name": "paths",
                        "type": "object",
                        "affectsModuleResolution": true,
                        "isTSConfigOnly": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6167,
                            "category": 3,
                            "key": "A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl_6167",
                            "message": "A series of entries which re-map imports to lookup locations relative to the 'baseUrl'."
                        }
                    },
                    {
                        "name": "rootDirs",
                        "type": "list",
                        "isTSConfigOnly": true,
                        "element": {
                            "name": "rootDirs",
                            "type": "string",
                            "isFilePath": true
                        },
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6168,
                            "category": 3,
                            "key": "List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime_6168",
                            "message": "List of root folders whose combined content represents the structure of the project at runtime."
                        }
                    },
                    {
                        "name": "types",
                        "type": "list",
                        "element": {
                            "name": "types",
                            "type": "string"
                        },
                        "affectsModuleResolution": true,
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6174,
                            "category": 3,
                            "key": "Module_Resolution_Options_6174",
                            "message": "Module Resolution Options"
                        },
                        "description": {
                            "code": 6124,
                            "category": 3,
                            "key": "Type_declaration_files_to_be_included_in_compilation_6124",
                            "message": "Type declaration files to be included in compilation."
                        }
                    },
                    {
                        "name": "out",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": false,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "paramType": {
                            "code": 6035,
                            "category": 3,
                            "key": "FILE_6035",
                            "message": "FILE"
                        },
                        "description": {
                            "code": 6170,
                            "category": 3,
                            "key": "Deprecated_Use_outFile_instead_Concatenate_and_emit_output_to_single_file_6170",
                            "message": "[Deprecated] Use '--outFile' instead. Concatenate and emit output to single file"
                        }
                    },
                    {
                        "name": "noLib",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6158,
                            "category": 3,
                            "key": "Do_not_include_the_default_library_file_lib_d_ts_6158",
                            "message": "Do not include the default library file (lib.d.ts)."
                        },
                        "transpileOptionValue": true
                    },
                    {
                        "name": "noResolve",
                        "type": "boolean",
                        "affectsModuleResolution": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6159,
                            "category": 3,
                            "key": "Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files_6159",
                            "message": "Do not add triple-slash references or imported modules to the list of compiled files."
                        },
                        "transpileOptionValue": true
                    },
                    {
                        "name": "noEmitOnError",
                        "type": "boolean",
                        "affectsEmit": true,
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6008,
                            "category": 3,
                            "key": "Do_not_emit_outputs_if_any_errors_were_reported_6008",
                            "message": "Do not emit outputs if any errors were reported."
                        }
                    },
                    {
                        "name": "declarationDir",
                        "type": "string",
                        "affectsEmit": true,
                        "isFilePath": true,
                        "paramType": {
                            "code": 6038,
                            "category": 3,
                            "key": "DIRECTORY_6038",
                            "message": "DIRECTORY"
                        },
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6166,
                            "category": 3,
                            "key": "Output_directory_for_generated_declaration_files_6166",
                            "message": "Output directory for generated declaration files."
                        }
                    }
                ],
                "buildOpts": [
                    {
                        "name": "help",
                        "shortName": "h",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6017,
                            "category": 3,
                            "key": "Print_this_message_6017",
                            "message": "Print this message."
                        }
                    },
                    {
                        "name": "help",
                        "shortName": "?",
                        "type": "boolean"
                    },
                    {
                        "name": "watch",
                        "shortName": "w",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6005,
                            "category": 3,
                            "key": "Watch_input_files_6005",
                            "message": "Watch input files."
                        }
                    },
                    {
                        "name": "preserveWatchOutput",
                        "type": "boolean",
                        "showInSimplifiedHelpView": false,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6191,
                            "category": 3,
                            "key": "Whether_to_keep_outdated_console_output_in_watch_mode_instead_of_clearing_the_screen_6191",
                            "message": "Whether to keep outdated console output in watch mode instead of clearing the screen."
                        }
                    },
                    {
                        "name": "listFiles",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6155,
                            "category": 3,
                            "key": "Print_names_of_files_part_of_the_compilation_6155",
                            "message": "Print names of files part of the compilation."
                        }
                    },
                    {
                        "name": "listEmittedFiles",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6154,
                            "category": 3,
                            "key": "Print_names_of_generated_files_part_of_the_compilation_6154",
                            "message": "Print names of generated files part of the compilation."
                        }
                    },
                    {
                        "name": "pretty",
                        "type": "boolean",
                        "showInSimplifiedHelpView": true,
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6073,
                            "category": 3,
                            "key": "Stylize_errors_and_messages_using_color_and_context_experimental_6073",
                            "message": "Stylize errors and messages using color and context (experimental)."
                        }
                    },
                    {
                        "name": "traceResolution",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6085,
                            "category": 3,
                            "key": "Enable_tracing_of_the_name_resolution_process_6085",
                            "message": "Enable tracing of the name resolution process."
                        }
                    },
                    {
                        "name": "diagnostics",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6149,
                            "category": 3,
                            "key": "Show_diagnostic_information_6149",
                            "message": "Show diagnostic information."
                        }
                    },
                    {
                        "name": "extendedDiagnostics",
                        "type": "boolean",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6150,
                            "category": 3,
                            "key": "Show_verbose_diagnostic_information_6150",
                            "message": "Show verbose diagnostic information."
                        }
                    },
                    {
                        "name": "generateCpuProfile",
                        "type": "string",
                        "isFilePath": true,
                        "paramType": {
                            "code": 6040,
                            "category": 3,
                            "key": "FILE_OR_DIRECTORY_6040",
                            "message": "FILE OR DIRECTORY"
                        },
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6223,
                            "category": 3,
                            "key": "Generates_a_CPU_profile_6223",
                            "message": "Generates a CPU profile."
                        }
                    },
                    {
                        "name": "incremental",
                        "shortName": "i",
                        "type": "boolean",
                        "category": {
                            "code": 6172,
                            "category": 3,
                            "key": "Basic_Options_6172",
                            "message": "Basic Options"
                        },
                        "description": {
                            "code": 6378,
                            "category": 3,
                            "key": "Enable_incremental_compilation_6378",
                            "message": "Enable incremental compilation"
                        }
                    },
                    {
                        "name": "locale",
                        "type": "string",
                        "category": {
                            "code": 6178,
                            "category": 3,
                            "key": "Advanced_Options_6178",
                            "message": "Advanced Options"
                        },
                        "description": {
                            "code": 6156,
                            "category": 3,
                            "key": "The_locale_used_when_displaying_messages_to_the_user_e_g_en_us_6156",
                            "message": "The locale used when displaying messages to the user (e.g. 'en-us')"
                        }
                    },
                    {
                        "name": "verbose",
                        "shortName": "v",
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6366,
                            "category": 3,
                            "key": "Enable_verbose_logging_6366",
                            "message": "Enable verbose logging"
                        },
                        "type": "boolean"
                    },
                    {
                        "name": "dry",
                        "shortName": "d",
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6367,
                            "category": 3,
                            "key": "Show_what_would_be_built_or_deleted_if_specified_with_clean_6367",
                            "message": "Show what would be built (or deleted, if specified with '--clean')"
                        },
                        "type": "boolean"
                    },
                    {
                        "name": "force",
                        "shortName": "f",
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6368,
                            "category": 3,
                            "key": "Build_all_projects_including_those_that_appear_to_be_up_to_date_6368",
                            "message": "Build all projects, including those that appear to be up to date"
                        },
                        "type": "boolean"
                    },
                    {
                        "name": "clean",
                        "category": {
                            "code": 6171,
                            "category": 3,
                            "key": "Command_line_Options_6171",
                            "message": "Command-line Options"
                        },
                        "description": {
                            "code": 6365,
                            "category": 3,
                            "key": "Delete_the_outputs_of_all_projects_6365",
                            "message": "Delete the outputs of all projects"
                        },
                        "type": "boolean"
                    }
                ],
                "typeAcquisitionDeclarations": [
                    {
                        "name": "enableAutoDiscovery",
                        "type": "boolean"
                    },
                    {
                        "name": "enable",
                        "type": "boolean"
                    },
                    {
                        "name": "include",
                        "type": "list",
                        "element": {
                            "name": "include",
                            "type": "string"
                        }
                    },
                    {
                        "name": "exclude",
                        "type": "list",
                        "element": {
                            "name": "exclude",
                            "type": "string"
                        }
                    }
                ],
                "defaultInitCompilerOptions": {
                    "module": 1,
                    "target": 1,
                    "strict": true,
                    "esModuleInterop": true,
                    "forceConsistentCasingInFileNames": true
                },
                "nodeModulesPathPart": "/node_modules/",
                "ModuleInstanceState": {
                    "0": "NonInstantiated",
                    "1": "Instantiated",
                    "2": "ConstEnumOnly",
                    "NonInstantiated": 0,
                    "Instantiated": 1,
                    "ConstEnumOnly": 2
                },
                "nullTransformationContext": {},
                "valuesHelper": {
                    "name": "typescript:values",
                    "importName": "__values",
                    "scoped": false,
                    "text": "\n            var __values = (this && this.__values) || function(o) {\n                var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n                if (m) return m.call(o);\n                if (o && typeof o.length === \"number\") return {\n                    next: function () {\n                        if (o && i >= o.length) o = void 0;\n                        return { value: o && o[i++], done: !o };\n                    }\n                };\n                throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n            };"
                },
                "readHelper": {
                    "name": "typescript:read",
                    "importName": "__read",
                    "scoped": false,
                    "text": "\n            var __read = (this && this.__read) || function (o, n) {\n                var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n                if (!m) return o;\n                var i = m.call(o), r, ar = [], e;\n                try {\n                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n                }\n                catch (error) { e = { error: error }; }\n                finally {\n                    try {\n                        if (r && !r.done && (m = i[\"return\"])) m.call(i);\n                    }\n                    finally { if (e) throw e.error; }\n                }\n                return ar;\n            };"
                },
                "spreadHelper": {
                    "name": "typescript:spread",
                    "importName": "__spread",
                    "scoped": false,
                    "text": "\n            var __spread = (this && this.__spread) || function () {\n                for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\n                return ar;\n            };"
                },
                "spreadArraysHelper": {
                    "name": "typescript:spreadArrays",
                    "importName": "__spreadArrays",
                    "scoped": false,
                    "text": "\n            var __spreadArrays = (this && this.__spreadArrays) || function () {\n                for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n                for (var r = Array(s), k = 0, i = 0; i < il; i++)\n                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n                        r[k] = a[j];\n                return r;\n            };"
                },
                "OuterExpressionKinds": {
                    "1": "Parentheses",
                    "2": "Assertions",
                    "4": "PartiallyEmittedExpressions",
                    "7": "All",
                    "Parentheses": 1,
                    "Assertions": 2,
                    "PartiallyEmittedExpressions": 4,
                    "All": 7
                },
                "identitySourceMapConsumer": {},
                "FlattenLevel": {
                    "0": "All",
                    "1": "ObjectRest",
                    "All": 0,
                    "ObjectRest": 1
                },
                "restHelper": {
                    "name": "typescript:rest",
                    "importName": "__rest",
                    "scoped": false,
                    "text": "\n            var __rest = (this && this.__rest) || function (s, e) {\n                var t = {};\n                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n                    t[p] = s[p];\n                if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                            t[p[i]] = s[p[i]];\n                    }\n                return t;\n            };"
                },
                "decorateHelper": {
                    "name": "typescript:decorate",
                    "importName": "__decorate",
                    "scoped": false,
                    "priority": 2,
                    "text": "\n            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n                if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n                return c > 3 && r && Object.defineProperty(target, key, r), r;\n            };"
                },
                "metadataHelper": {
                    "name": "typescript:metadata",
                    "importName": "__metadata",
                    "scoped": false,
                    "priority": 3,
                    "text": "\n            var __metadata = (this && this.__metadata) || function (k, v) {\n                if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n            };"
                },
                "paramHelper": {
                    "name": "typescript:param",
                    "importName": "__param",
                    "scoped": false,
                    "priority": 4,
                    "text": "\n            var __param = (this && this.__param) || function (paramIndex, decorator) {\n                return function (target, key) { decorator(target, key, paramIndex); }\n            };"
                },
                "awaiterHelper": {
                    "name": "typescript:awaiter",
                    "importName": "__awaiter",
                    "scoped": false,
                    "priority": 5,
                    "text": "\n            var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n                function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n                return new (P || (P = Promise))(function (resolve, reject) {\n                    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n                    function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n                    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n                    step((generator = generator.apply(thisArg, _arguments || [])).next());\n                });\n            };"
                },
                "asyncSuperHelper": {
                    "name": "typescript:async-super",
                    "scoped": true
                },
                "advancedAsyncSuperHelper": {
                    "name": "typescript:advanced-async-super",
                    "scoped": true
                },
                "assignHelper": {
                    "name": "typescript:assign",
                    "importName": "__assign",
                    "scoped": false,
                    "priority": 1,
                    "text": "\n            var __assign = (this && this.__assign) || function () {\n                __assign = Object.assign || function(t) {\n                    for (var s, i = 1, n = arguments.length; i < n; i++) {\n                        s = arguments[i];\n                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                            t[p] = s[p];\n                    }\n                    return t;\n                };\n                return __assign.apply(this, arguments);\n            };"
                },
                "awaitHelper": {
                    "name": "typescript:await",
                    "importName": "__await",
                    "scoped": false,
                    "text": "\n            var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }"
                },
                "asyncGeneratorHelper": {
                    "name": "typescript:asyncGenerator",
                    "importName": "__asyncGenerator",
                    "scoped": false,
                    "text": "\n            var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {\n                if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\n                var g = generator.apply(thisArg, _arguments || []), i, q = [];\n                return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\n                function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\n                function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\n                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\n                function fulfill(value) { resume(\"next\", value); }\n                function reject(value) { resume(\"throw\", value); }\n                function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\n            };"
                },
                "asyncDelegator": {
                    "name": "typescript:asyncDelegator",
                    "importName": "__asyncDelegator",
                    "scoped": false,
                    "text": "\n            var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {\n                var i, p;\n                return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\n                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\n            };"
                },
                "asyncValues": {
                    "name": "typescript:asyncValues",
                    "importName": "__asyncValues",
                    "scoped": false,
                    "text": "\n            var __asyncValues = (this && this.__asyncValues) || function (o) {\n                if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\n                var m = o[Symbol.asyncIterator], i;\n                return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\n                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\n                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\n            };"
                },
                "extendsHelper": {
                    "name": "typescript:extends",
                    "importName": "__extends",
                    "scoped": false,
                    "priority": 0,
                    "text": "\n            var __extends = (this && this.__extends) || (function () {\n                var extendStatics = function (d, b) {\n                    extendStatics = Object.setPrototypeOf ||\n                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n                        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n                    return extendStatics(d, b);\n                };\n\n                return function (d, b) {\n                    extendStatics(d, b);\n                    function __() { this.constructor = d; }\n                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n                };\n            })();"
                },
                "templateObjectHelper": {
                    "name": "typescript:makeTemplateObject",
                    "importName": "__makeTemplateObject",
                    "scoped": false,
                    "priority": 0,
                    "text": "\n            var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n                if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n                return cooked;\n            };"
                },
                "generatorHelper": {
                    "name": "typescript:generator",
                    "importName": "__generator",
                    "scoped": false,
                    "priority": 6,
                    "text": "\n            var __generator = (this && this.__generator) || function (thisArg, body) {\n                var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n                return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n                function verb(n) { return function (v) { return step([n, v]); }; }\n                function step(op) {\n                    if (f) throw new TypeError(\"Generator is already executing.\");\n                    while (_) try {\n                        if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n                        if (y = 0, t) op = [op[0] & 2, t.value];\n                        switch (op[0]) {\n                            case 0: case 1: t = op; break;\n                            case 4: _.label++; return { value: op[1], done: false };\n                            case 5: _.label++; y = op[1]; op = [0]; continue;\n                            case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                            default:\n                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                                if (t[2]) _.ops.pop();\n                                _.trys.pop(); continue;\n                        }\n                        op = body.call(thisArg, _);\n                    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n                    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n                }\n            };"
                },
                "importStarHelper": {
                    "name": "typescript:commonjsimportstar",
                    "importName": "__importStar",
                    "scoped": false,
                    "text": "\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};"
                },
                "importDefaultHelper": {
                    "name": "typescript:commonjsimportdefault",
                    "importName": "__importDefault",
                    "scoped": false,
                    "text": "\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};"
                },
                "noTransformers": {
                    "scriptTransformers": [],
                    "declarationTransformers": []
                },
                "notImplementedResolver": {},
                "ConfigFileProgramReloadLevel": {
                    "0": "None",
                    "1": "Partial",
                    "2": "Full",
                    "None": 0,
                    "Partial": 1,
                    "Full": 2
                },
                "WatchLogLevel": {
                    "0": "None",
                    "1": "TriggerOnly",
                    "2": "Verbose",
                    "None": 0,
                    "TriggerOnly": 1,
                    "Verbose": 2
                },
                "ForegroundColorEscapeSequences": {
                    "Grey": "\u001b[90m",
                    "Red": "\u001b[91m",
                    "Yellow": "\u001b[93m",
                    "Blue": "\u001b[94m",
                    "Cyan": "\u001b[96m"
                },
                "inferredTypesContainingFile": "__inferred type names__.ts",
                "BuilderState": {},
                "BuilderFileEmit": {
                    "0": "DtsOnly",
                    "1": "Full",
                    "DtsOnly": 0,
                    "Full": 1
                },
                "BuilderProgramKind": {
                    "0": "SemanticDiagnosticsBuilderProgram",
                    "1": "EmitAndSemanticDiagnosticsBuilderProgram",
                    "SemanticDiagnosticsBuilderProgram": 0,
                    "EmitAndSemanticDiagnosticsBuilderProgram": 1
                },
                "maxNumberOfFilesToIterateForInvalidation": 256,
                "moduleSpecifiers": {},
                "screenStartingMessageCodes": [
                    6031,
                    6032
                ],
                "noopFileWatcher": {},
                "WatchType": {
                    "ConfigFile": "Config file",
                    "SourceFile": "Source file",
                    "MissingFile": "Missing file",
                    "WildcardDirectory": "Wild card directory",
                    "FailedLookupLocations": "Failed Lookup Locations",
                    "TypeRoots": "Type roots"
                },
                "UpToDateStatusType": {
                    "0": "Unbuildable",
                    "1": "UpToDate",
                    "2": "UpToDateWithUpstreamTypes",
                    "3": "OutOfDateWithPrepend",
                    "4": "OutputMissing",
                    "5": "OutOfDateWithSelf",
                    "6": "OutOfDateWithUpstream",
                    "7": "UpstreamOutOfDate",
                    "8": "UpstreamBlocked",
                    "9": "ComputingUpstream",
                    "10": "TsVersionOutputOfDate",
                    "11": "ContainerOnly",
                    "Unbuildable": 0,
                    "UpToDate": 1,
                    "UpToDateWithUpstreamTypes": 2,
                    "OutOfDateWithPrepend": 3,
                    "OutputMissing": 4,
                    "OutOfDateWithSelf": 5,
                    "OutOfDateWithUpstream": 6,
                    "UpstreamOutOfDate": 7,
                    "UpstreamBlocked": 8,
                    "ComputingUpstream": 9,
                    "TsVersionOutputOfDate": 10,
                    "ContainerOnly": 11
                },
                "InvalidatedProjectKind": {
                    "0": "Build",
                    "1": "UpdateBundle",
                    "2": "UpdateOutputFileStamps",
                    "Build": 0,
                    "UpdateBundle": 1,
                    "UpdateOutputFileStamps": 2
                },
                "server": {
                    "ActionSet": "action::set",
                    "ActionInvalidate": "action::invalidate",
                    "ActionPackageInstalled": "action::packageInstalled",
                    "EventTypesRegistry": "event::typesRegistry",
                    "EventBeginInstallTypes": "event::beginInstallTypes",
                    "EventEndInstallTypes": "event::endInstallTypes",
                    "EventInitializationFailed": "event::initializationFailed",
                    "Arguments": {
                        "GlobalCacheLocation": "--globalTypingsCacheLocation",
                        "LogFile": "--logFile",
                        "EnableTelemetry": "--enableTelemetry",
                        "TypingSafeListLocation": "--typingSafeListLocation",
                        "TypesMapLocation": "--typesMapLocation",
                        "NpmLocation": "--npmLocation",
                        "ValidateDefaultNpmLocation": "--validateDefaultNpmLocation"
                    }
                },
                "JsTyping": {
                    "nodeCoreModuleList": [
                        "assert",
                        "async_hooks",
                        "buffer",
                        "child_process",
                        "cluster",
                        "console",
                        "constants",
                        "crypto",
                        "dgram",
                        "dns",
                        "domain",
                        "events",
                        "fs",
                        "http",
                        "https",
                        "http2",
                        "inspector",
                        "net",
                        "os",
                        "path",
                        "perf_hooks",
                        "process",
                        "punycode",
                        "querystring",
                        "readline",
                        "repl",
                        "stream",
                        "string_decoder",
                        "timers",
                        "tls",
                        "tty",
                        "url",
                        "util",
                        "v8",
                        "vm",
                        "zlib"
                    ],
                    "nodeCoreModules": {},
                    "NameValidationResult": {
                        "0": "Ok",
                        "1": "EmptyName",
                        "2": "NameTooLong",
                        "3": "NameStartsWithDot",
                        "4": "NameStartsWithUnderscore",
                        "5": "NameContainsNonURISafeCharacters",
                        "Ok": 0,
                        "EmptyName": 1,
                        "NameTooLong": 2,
                        "NameStartsWithDot": 3,
                        "NameStartsWithUnderscore": 4,
                        "NameContainsNonURISafeCharacters": 5
                    }
                },
                "ScriptSnapshot": {},
                "PackageJsonDependencyGroup": {
                    "1": "Dependencies",
                    "2": "DevDependencies",
                    "4": "PeerDependencies",
                    "8": "OptionalDependencies",
                    "15": "All",
                    "Dependencies": 1,
                    "DevDependencies": 2,
                    "PeerDependencies": 4,
                    "OptionalDependencies": 8,
                    "All": 15
                },
                "emptyOptions": {},
                "HighlightSpanKind": {
                    "none": "none",
                    "definition": "definition",
                    "reference": "reference",
                    "writtenReference": "writtenReference"
                },
                "IndentStyle": {
                    "0": "None",
                    "1": "Block",
                    "2": "Smart",
                    "None": 0,
                    "Block": 1,
                    "Smart": 2
                },
                "SemicolonPreference": {
                    "Ignore": "ignore",
                    "Insert": "insert",
                    "Remove": "remove"
                },
                "testFormatSettings": {
                    "indentSize": 4,
                    "tabSize": 4,
                    "newLineCharacter": "\n",
                    "convertTabsToSpaces": true,
                    "indentStyle": 2,
                    "insertSpaceAfterConstructor": false,
                    "insertSpaceAfterCommaDelimiter": true,
                    "insertSpaceAfterSemicolonInForStatements": true,
                    "insertSpaceBeforeAndAfterBinaryOperators": true,
                    "insertSpaceAfterKeywordsInControlFlowStatements": true,
                    "insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
                    "insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
                    "insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
                    "insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
                    "insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
                    "insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
                    "insertSpaceBeforeFunctionParenthesis": false,
                    "placeOpenBraceOnNewLineForFunctions": false,
                    "placeOpenBraceOnNewLineForControlBlocks": false,
                    "semicolons": "ignore"
                },
                "SymbolDisplayPartKind": {
                    "0": "aliasName",
                    "1": "className",
                    "2": "enumName",
                    "3": "fieldName",
                    "4": "interfaceName",
                    "5": "keyword",
                    "6": "lineBreak",
                    "7": "numericLiteral",
                    "8": "stringLiteral",
                    "9": "localName",
                    "10": "methodName",
                    "11": "moduleName",
                    "12": "operator",
                    "13": "parameterName",
                    "14": "propertyName",
                    "15": "punctuation",
                    "16": "space",
                    "17": "text",
                    "18": "typeParameterName",
                    "19": "enumMemberName",
                    "20": "functionName",
                    "21": "regularExpressionLiteral",
                    "aliasName": 0,
                    "className": 1,
                    "enumName": 2,
                    "fieldName": 3,
                    "interfaceName": 4,
                    "keyword": 5,
                    "lineBreak": 6,
                    "numericLiteral": 7,
                    "stringLiteral": 8,
                    "localName": 9,
                    "methodName": 10,
                    "moduleName": 11,
                    "operator": 12,
                    "parameterName": 13,
                    "propertyName": 14,
                    "punctuation": 15,
                    "space": 16,
                    "text": 17,
                    "typeParameterName": 18,
                    "enumMemberName": 19,
                    "functionName": 20,
                    "regularExpressionLiteral": 21
                },
                "OutliningSpanKind": {
                    "Comment": "comment",
                    "Region": "region",
                    "Code": "code",
                    "Imports": "imports"
                },
                "OutputFileType": {
                    "0": "JavaScript",
                    "1": "SourceMap",
                    "2": "Declaration",
                    "JavaScript": 0,
                    "SourceMap": 1,
                    "Declaration": 2
                },
                "EndOfLineState": {
                    "0": "None",
                    "1": "InMultiLineCommentTrivia",
                    "2": "InSingleQuoteStringLiteral",
                    "3": "InDoubleQuoteStringLiteral",
                    "4": "InTemplateHeadOrNoSubstitutionTemplate",
                    "5": "InTemplateMiddleOrTail",
                    "6": "InTemplateSubstitutionPosition",
                    "None": 0,
                    "InMultiLineCommentTrivia": 1,
                    "InSingleQuoteStringLiteral": 2,
                    "InDoubleQuoteStringLiteral": 3,
                    "InTemplateHeadOrNoSubstitutionTemplate": 4,
                    "InTemplateMiddleOrTail": 5,
                    "InTemplateSubstitutionPosition": 6
                },
                "TokenClass": {
                    "0": "Punctuation",
                    "1": "Keyword",
                    "2": "Operator",
                    "3": "Comment",
                    "4": "Whitespace",
                    "5": "Identifier",
                    "6": "NumberLiteral",
                    "7": "BigIntLiteral",
                    "8": "StringLiteral",
                    "9": "RegExpLiteral",
                    "Punctuation": 0,
                    "Keyword": 1,
                    "Operator": 2,
                    "Comment": 3,
                    "Whitespace": 4,
                    "Identifier": 5,
                    "NumberLiteral": 6,
                    "BigIntLiteral": 7,
                    "StringLiteral": 8,
                    "RegExpLiteral": 9
                },
                "ScriptElementKind": {
                    "unknown": "",
                    "warning": "warning",
                    "keyword": "keyword",
                    "scriptElement": "script",
                    "moduleElement": "module",
                    "classElement": "class",
                    "localClassElement": "local class",
                    "interfaceElement": "interface",
                    "typeElement": "type",
                    "enumElement": "enum",
                    "enumMemberElement": "enum member",
                    "variableElement": "var",
                    "localVariableElement": "local var",
                    "functionElement": "function",
                    "localFunctionElement": "local function",
                    "memberFunctionElement": "method",
                    "memberGetAccessorElement": "getter",
                    "memberSetAccessorElement": "setter",
                    "memberVariableElement": "property",
                    "constructorImplementationElement": "constructor",
                    "callSignatureElement": "call",
                    "indexSignatureElement": "index",
                    "constructSignatureElement": "construct",
                    "parameterElement": "parameter",
                    "typeParameterElement": "type parameter",
                    "primitiveType": "primitive type",
                    "label": "label",
                    "alias": "alias",
                    "constElement": "const",
                    "letElement": "let",
                    "directory": "directory",
                    "externalModuleName": "external module name",
                    "jsxAttribute": "JSX attribute",
                    "string": "string"
                },
                "ScriptElementKindModifier": {
                    "none": "",
                    "publicMemberModifier": "public",
                    "privateMemberModifier": "private",
                    "protectedMemberModifier": "protected",
                    "exportedModifier": "export",
                    "ambientModifier": "declare",
                    "staticModifier": "static",
                    "abstractModifier": "abstract",
                    "optionalModifier": "optional",
                    "dtsModifier": ".d.ts",
                    "tsModifier": ".ts",
                    "tsxModifier": ".tsx",
                    "jsModifier": ".js",
                    "jsxModifier": ".jsx",
                    "jsonModifier": ".json"
                },
                "ClassificationTypeNames": {
                    "comment": "comment",
                    "identifier": "identifier",
                    "keyword": "keyword",
                    "numericLiteral": "number",
                    "bigintLiteral": "bigint",
                    "operator": "operator",
                    "stringLiteral": "string",
                    "whiteSpace": "whitespace",
                    "text": "text",
                    "punctuation": "punctuation",
                    "className": "class name",
                    "enumName": "enum name",
                    "interfaceName": "interface name",
                    "moduleName": "module name",
                    "typeParameterName": "type parameter name",
                    "typeAliasName": "type alias name",
                    "parameterName": "parameter name",
                    "docCommentTagName": "doc comment tag name",
                    "jsxOpenTagName": "jsx open tag name",
                    "jsxCloseTagName": "jsx close tag name",
                    "jsxSelfClosingTagName": "jsx self closing tag name",
                    "jsxAttribute": "jsx attribute",
                    "jsxText": "jsx text",
                    "jsxAttributeStringLiteralValue": "jsx attribute string literal value"
                },
                "ClassificationType": {
                    "1": "comment",
                    "2": "identifier",
                    "3": "keyword",
                    "4": "numericLiteral",
                    "5": "operator",
                    "6": "stringLiteral",
                    "7": "regularExpressionLiteral",
                    "8": "whiteSpace",
                    "9": "text",
                    "10": "punctuation",
                    "11": "className",
                    "12": "enumName",
                    "13": "interfaceName",
                    "14": "moduleName",
                    "15": "typeParameterName",
                    "16": "typeAliasName",
                    "17": "parameterName",
                    "18": "docCommentTagName",
                    "19": "jsxOpenTagName",
                    "20": "jsxCloseTagName",
                    "21": "jsxSelfClosingTagName",
                    "22": "jsxAttribute",
                    "23": "jsxText",
                    "24": "jsxAttributeStringLiteralValue",
                    "25": "bigintLiteral",
                    "comment": 1,
                    "identifier": 2,
                    "keyword": 3,
                    "numericLiteral": 4,
                    "operator": 5,
                    "stringLiteral": 6,
                    "regularExpressionLiteral": 7,
                    "whiteSpace": 8,
                    "text": 9,
                    "punctuation": 10,
                    "className": 11,
                    "enumName": 12,
                    "interfaceName": 13,
                    "moduleName": 14,
                    "typeParameterName": 15,
                    "typeAliasName": 16,
                    "parameterName": 17,
                    "docCommentTagName": 18,
                    "jsxOpenTagName": 19,
                    "jsxCloseTagName": 20,
                    "jsxSelfClosingTagName": 21,
                    "jsxAttribute": 22,
                    "jsxText": 23,
                    "jsxAttributeStringLiteralValue": 24,
                    "bigintLiteral": 25
                },
                "scanner": {},
                "SemanticMeaning": {
                    "0": "None",
                    "1": "Value",
                    "2": "Type",
                    "4": "Namespace",
                    "7": "All",
                    "None": 0,
                    "Value": 1,
                    "Type": 2,
                    "Namespace": 4,
                    "All": 7
                },
                "typeKeywords": [
                    124,
                    150,
                    127,
                    90,
                    133,
                    136,
                    99,
                    139,
                    140,
                    137,
                    142,
                    143,
                    105,
                    109,
                    145,
                    146,
                    147
                ],
                "QuotePreference": {
                    "0": "Single",
                    "1": "Double",
                    "Single": 0,
                    "Double": 1
                },
                "Completions": {
                    "StringCompletions": {},
                    "SortText": {
                        "LocationPriority": "0",
                        "OptionalMember": "1",
                        "MemberDeclaredBySpreadAssignment": "2",
                        "SuggestedClassMembers": "3",
                        "GlobalsOrKeywords": "4",
                        "AutoImportSuggestions": "5",
                        "JavascriptIdentifiers": "6"
                    },
                    "CompletionKind": {
                        "0": "ObjectPropertyDeclaration",
                        "1": "Global",
                        "2": "PropertyAccess",
                        "3": "MemberLike",
                        "4": "String",
                        "5": "None",
                        "ObjectPropertyDeclaration": 0,
                        "Global": 1,
                        "PropertyAccess": 2,
                        "MemberLike": 3,
                        "String": 4,
                        "None": 5
                    }
                },
                "DocumentHighlights": {},
                "FindAllReferences": {
                    "ExportKind": {
                        "0": "Named",
                        "1": "Default",
                        "2": "ExportEquals",
                        "Named": 0,
                        "Default": 1,
                        "ExportEquals": 2
                    },
                    "ImportExport": {
                        "0": "Import",
                        "1": "Export",
                        "Import": 0,
                        "Export": 1
                    },
                    "DefinitionKind": {
                        "0": "Symbol",
                        "1": "Label",
                        "2": "Keyword",
                        "3": "This",
                        "4": "String",
                        "Symbol": 0,
                        "Label": 1,
                        "Keyword": 2,
                        "This": 3,
                        "String": 4
                    },
                    "EntryKind": {
                        "0": "Span",
                        "1": "Node",
                        "2": "StringLiteral",
                        "3": "SearchedLocalFoundProperty",
                        "4": "SearchedPropertyFoundLocal",
                        "Span": 0,
                        "Node": 1,
                        "StringLiteral": 2,
                        "SearchedLocalFoundProperty": 3,
                        "SearchedPropertyFoundLocal": 4
                    },
                    "Core": {}
                },
                "GoToDefinition": {},
                "JsDoc": {},
                "NavigateTo": {},
                "NavigationBar": {},
                "OrganizeImports": {},
                "OutliningElementsCollector": {},
                "PatternMatchKind": {
                    "0": "exact",
                    "1": "prefix",
                    "2": "substring",
                    "3": "camelCase",
                    "exact": 0,
                    "prefix": 1,
                    "substring": 2,
                    "camelCase": 3
                },
                "Rename": {},
                "SmartSelectionRange": {},
                "SignatureHelp": {},
                "SymbolDisplay": {},
                "formatting": {
                    "FormattingRequestKind": {
                        "0": "FormatDocument",
                        "1": "FormatSelection",
                        "2": "FormatOnEnter",
                        "3": "FormatOnSemicolon",
                        "4": "FormatOnOpeningCurlyBrace",
                        "5": "FormatOnClosingCurlyBrace",
                        "FormatDocument": 0,
                        "FormatSelection": 1,
                        "FormatOnEnter": 2,
                        "FormatOnSemicolon": 3,
                        "FormatOnOpeningCurlyBrace": 4,
                        "FormatOnClosingCurlyBrace": 5
                    },
                    "anyContext": [],
                    "RuleAction": {
                        "1": "StopProcessingSpaceActions",
                        "2": "StopProcessingTokenActions",
                        "3": "StopAction",
                        "4": "InsertSpace",
                        "8": "InsertNewLine",
                        "16": "DeleteSpace",
                        "28": "ModifySpaceAction",
                        "32": "DeleteToken",
                        "64": "InsertTrailingSemicolon",
                        "96": "ModifyTokenAction",
                        "StopProcessingSpaceActions": 1,
                        "StopProcessingTokenActions": 2,
                        "InsertSpace": 4,
                        "InsertNewLine": 8,
                        "DeleteSpace": 16,
                        "DeleteToken": 32,
                        "InsertTrailingSemicolon": 64,
                        "StopAction": 3,
                        "ModifySpaceAction": 28,
                        "ModifyTokenAction": 96
                    },
                    "RuleFlags": {
                        "0": "None",
                        "1": "CanDeleteNewLines",
                        "None": 0,
                        "CanDeleteNewLines": 1
                    },
                    "SmartIndenter": {}
                },
                "textChanges": {
                    "LeadingTriviaOption": {
                        "0": "Exclude",
                        "1": "IncludeAll",
                        "Exclude": 0,
                        "IncludeAll": 1
                    },
                    "TrailingTriviaOption": {
                        "0": "Exclude",
                        "1": "Include",
                        "Exclude": 0,
                        "Include": 1
                    }
                },
                "codefix": {
                    "importFixId": "fixMissingImport"
                },
                "refactor": {
                    "extractSymbol": {
                        "Messages": {
                            "cannotExtractRange": {
                                "message": "Cannot extract range.",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract range."
                            },
                            "cannotExtractImport": {
                                "message": "Cannot extract import statement.",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract import statement."
                            },
                            "cannotExtractSuper": {
                                "message": "Cannot extract super call.",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract super call."
                            },
                            "cannotExtractJSDoc": {
                                "message": "Cannot extract JSDoc.",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract JSDoc."
                            },
                            "cannotExtractEmpty": {
                                "message": "Cannot extract empty range.",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract empty range."
                            },
                            "expressionExpected": {
                                "message": "expression expected.",
                                "code": 0,
                                "category": 3,
                                "key": "expression expected."
                            },
                            "uselessConstantType": {
                                "message": "No reason to extract constant of type.",
                                "code": 0,
                                "category": 3,
                                "key": "No reason to extract constant of type."
                            },
                            "statementOrExpressionExpected": {
                                "message": "Statement or expression expected.",
                                "code": 0,
                                "category": 3,
                                "key": "Statement or expression expected."
                            },
                            "cannotExtractRangeContainingConditionalBreakOrContinueStatements": {
                                "message": "Cannot extract range containing conditional break or continue statements.",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract range containing conditional break or continue statements."
                            },
                            "cannotExtractRangeContainingConditionalReturnStatement": {
                                "message": "Cannot extract range containing conditional return statement.",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract range containing conditional return statement."
                            },
                            "cannotExtractRangeContainingLabeledBreakOrContinueStatementWithTargetOutsideOfTheRange": {
                                "message": "Cannot extract range containing labeled break or continue with target outside of the range.",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract range containing labeled break or continue with target outside of the range."
                            },
                            "cannotExtractRangeThatContainsWritesToReferencesLocatedOutsideOfTheTargetRangeInGenerators": {
                                "message": "Cannot extract range containing writes to references located outside of the target range in generators.",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract range containing writes to references located outside of the target range in generators."
                            },
                            "typeWillNotBeVisibleInTheNewScope": {
                                "message": "Type will not visible in the new scope.",
                                "code": 0,
                                "category": 3,
                                "key": "Type will not visible in the new scope."
                            },
                            "functionWillNotBeVisibleInTheNewScope": {
                                "message": "Function will not visible in the new scope.",
                                "code": 0,
                                "category": 3,
                                "key": "Function will not visible in the new scope."
                            },
                            "cannotExtractIdentifier": {
                                "message": "Select more than a single identifier.",
                                "code": 0,
                                "category": 3,
                                "key": "Select more than a single identifier."
                            },
                            "cannotExtractExportedEntity": {
                                "message": "Cannot extract exported declaration",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract exported declaration"
                            },
                            "cannotWriteInExpression": {
                                "message": "Cannot write back side-effects when extracting an expression",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot write back side-effects when extracting an expression"
                            },
                            "cannotExtractReadonlyPropertyInitializerOutsideConstructor": {
                                "message": "Cannot move initialization of read-only class property outside of the constructor",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot move initialization of read-only class property outside of the constructor"
                            },
                            "cannotExtractAmbientBlock": {
                                "message": "Cannot extract code from ambient contexts",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract code from ambient contexts"
                            },
                            "cannotAccessVariablesFromNestedScopes": {
                                "message": "Cannot access variables from nested scopes",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot access variables from nested scopes"
                            },
                            "cannotExtractToOtherFunctionLike": {
                                "message": "Cannot extract method to a function-like scope that is not a function",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract method to a function-like scope that is not a function"
                            },
                            "cannotExtractToJSClass": {
                                "message": "Cannot extract constant to a class scope in JS",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract constant to a class scope in JS"
                            },
                            "cannotExtractToExpressionArrowFunction": {
                                "message": "Cannot extract constant to an arrow function without a block",
                                "code": 0,
                                "category": 3,
                                "key": "Cannot extract constant to an arrow function without a block"
                            }
                        }
                    },
                    "generateGetAccessorAndSetAccessor": {},
                    "addOrRemoveBracesToArrowFunction": {},
                    "convertParamsToDestructuredObject": {}
                },
                "servicesVersion": "0.8",
                "disableIncrementalParsing": false,
                "BreakpointResolver": {}
            },
            "typescriptPath": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/node_modules/typescript/lib/typescript.js",
            "typescriptVersion": "3.7.4",
            "tsconfig": "/Users/lucabeurer-kellner/Documents/Programmieren/quantifiers/tsconfig.json",
            "compilerOptions": {},
            "vue": {
                "compiler": "vue-template-compiler",
                "enabled": false
            },
            "useTypescriptIncrementalApi": true,
            "measureTime": false
        }
    ],
    "node": {
        "module": "empty",
        "dgram": "empty",
        "dns": "mock",
        "fs": "empty",
        "http2": "empty",
        "net": "empty",
        "tls": "empty",
        "child_process": "empty"
    },
    "performance": false
}