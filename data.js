const products = {
    'keychain': {
        name: 'NACHONEKOキーホルダー',
        price: '¥1,000',
        image: 'https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_360x.png?v=1687767322',
        description: 'なちょねこの可愛いアクリルキーホルダーです。カバンや鍵につけて、いつでもなちょと一緒に過ごせます。',
        details: ['サイズ：約50mm x 50mm', '素材：アクリル、金属', '原産国：日本'],
        en: {
            name: 'NACHONEKO Keychain',
            description: 'Cute acrylic keychain of Nachoneko. Attach it to your bag or keys and spend time with Nacho anywhere.',
            details: ['Size: Approx. 50mm x 50mm', 'Material: Acrylic, Metal', 'Country of Origin: Japan']
        }
    },
    'gaming-cushion': {
        name: 'NACHONEKOゲーミングクッション',
        price: '¥6,500',
        image: 'https://cdn.shopify.com/s/files/1/0608/1973/4744/files/d2a865b4f104b1b81ff2e1b5d0786480_360x.png?v=1687746505',
        description: '長時間のゲームプレイをサポートする、座り心地抜群のゲーミングクッションです。',
        details: ['サイズ：40cm x 40cm', '素材：ポリエステル', '高反発ウレタン使用'],
        en: {
            name: 'NACHONEKO Gaming Cushion',
            description: 'A gaming cushion with excellent seating comfort that supports long hours of gameplay.',
            details: ['Size: 40cm x 40cm', 'Material: Polyester', 'Uses high-rebound urethane']
        }
    },
    'tapestry-horizontal': {
        name: 'NACHONEKOタペストリー（B2横）',
        price: '¥3,500',
        image: 'https://cdn.shopify.com/s/files/1/0608/1973/4744/files/006a704d20615d9781a9022c66d721c2_360x.png?v=1686555046',
        description: '描き下ろしイラストを使用したB2サイズの横型タペストリーです。お部屋の壁を華やかに彩ります。',
        details: ['サイズ：B2 (728mm x 515mm)', '素材：ダブルスエード', '上下パイプ・紐付き'],
        en: {
            name: 'NACHONEKO Tapestry (B2 Horizontal)',
            description: 'A B2-size horizontal tapestry using newly drawn illustrations. It will brightly decorate your room walls.',
            details: ['Size: B2 (728mm x 515mm)', 'Material: Double Suede', 'Includes top/bottom pipes and string']
        }
    },
    'sticker-set': {
        name: 'ステッカー２枚セット',
        price: '¥700',
        image: 'https://cdn.shopify.com/s/files/1/0608/1973/4744/files/4e6385739c21c056e3a21b02a8aced21_360x.png?v=1686553142',
        description: 'なちょねこの可愛いイラストがステッカーになりました。PCやスマホに貼るのにぴったりのサイズです。',
        details: ['内容：2枚入り', '素材：耐水性塩化ビニール', 'サイズ：約60mm'],
        en: {
            name: 'Sticker Set (2-piece)',
            description: 'Cute illustrations of Nachoneko are now stickers. Perfect size for sticking on PCs or smartphones.',
            details: ['Contents: 2 stickers included', 'Material: Waterproof vinyl', 'Size: Approx. 60mm']
        }
    },
    'plushie-set': {
        name: 'HENNYANOぬいぐるみセット',
        price: '¥5,500',
        image: 'https://nanyanostore.com/cdn/shop/files/4ae3e89975448e1d52422623feb41fda_360x.png?v=1691130799',
        description: 'へんやのの可愛いぬいぐるみセット。触り心地がよく、飾っても抱きしめても癒されます。',
        details: ['サイズ：約200mm', '素材：ソフトボア', 'セット内容：2体'],
        en: {
            name: 'HENNYANO Plushie Set',
            description: 'Cute plushie set of Hennyano. Soft to the touch, it is soothing whether displayed or hugged.',
            details: ['Size: Approx. 200mm', 'Material: Soft boa', 'Set contents: 2 figures']
        }
    },
    'eye-mask': {
        name: 'NACHONEKOアイマスク',
        price: '¥3,200',
        image: 'https://nanyanostore.com/cdn/shop/files/74d0518c9c86d4b743376f3e50e81275_360x.png?v=1691129630',
        description: '快適な眠りをサポートするなちょねこデザインのアイマスクです。旅行やリラックスタイムに。',
        details: ['サイズ：フリーサイズ', '素材：シルク、ポリエステル', '調整可能なストラップ'],
        en: {
            name: 'NACHONEKO Eye Mask',
            description: 'An eye mask with a Nachoneko design that supports comfortable sleep. For travel or relaxation time.',
            details: ['Size: Free size', 'Material: Silk, Polyester', 'Adjustable strap']
        }
    },
    'tapestry-vertical': {
        name: 'NACHONEKOタペストリー（B2縦）',
        price: '¥3,000',
        image: 'https://cdn.shopify.com/s/files/1/0608/1973/4744/products/1_360x.png?v=1665409104',
        description: '鮮やかなイラストが映えるB2サイズの縦型タペストリーです。',
        details: ['サイズ：B2 (515mm x 728mm)', '素材：スエード', '上下パイプ付き'],
        en: {
            name: 'NACHONEKO Tapestry (B2 Vertical)',
            description: 'A B2-size vertical tapestry featuring vivid illustrations.',
            details: ['Size: B2 (515mm x 728mm)', 'Material: Suede', 'Includes top and bottom pipes']
        }
    },
    'glass': {
        name: 'NACHONEKOグラスコップ',
        price: '¥1,500',
        image: 'https://cdn.shopify.com/s/files/1/0608/1973/4744/products/2_b8b3c8ac-1897-4e2f-8bc6-b194f4da57d4_360x.png?v=1670480571',
        description: '日常使いにぴったりのなちょねこロゴ入りグラスです。',
        details: ['容量：300ml', '素材：ガラス', '耐熱：不可']
    },
    'acrylic-figure': {
        name: 'アクリルフィギュア（なちょが見てる）',
        price: '¥1,830',
        image: 'https://cdn.shopify.com/s/files/1/0608/1973/4744/products/1b92f94ba8792294e151e7d6b2cdcbd0_360x.png?v=1640231506',
        description: '「なちょが見てる」シリーズのアクリルスタンドです。デスクの上に置いて楽しみましょう。',
        details: ['サイズ：全高約120mm', '素材：アクリル', '台座付き']
    }
    // More products can be added as needed
};

// Export for use in main.js
if (typeof module !== 'undefined') {
    module.exports = products;
}
