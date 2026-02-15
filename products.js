const productsData = {
    "COSRX": [
        {
            name: "Advanced Snail 96 Mucin Power Essence",
            tagline: "Light-weight essence for a natural glow from the inside.",
            description: "Created from nutritious, low-stimulation filtered snail mucin to keep your skin moisturized and illuminated all day.",
            price: "87dt",
            originalPrice: "120dt",
            image: "assets/products/cosrx_snail_essence_1770468689697.png",
            sizes: []
        },
        {
            name: "Advanced Snail 92 All in one Cream",
            tagline: "An all-in-one solution cream that repairs and soothes irritated, sensitized skin after breakouts.",
            description: "A rich gel-type cream absorbs instantly into the skin with a full of nourishment while leaving your skin feeling fresh and comfortable.",
            price: "95dt",
            originalPrice: "134dt",
            image: "assets/products/cosrx_snail_cream.jpg",
            sizes: []
        },
        {
            name: "Acne Pimple Master Patch",
            tagline: "Quick acne healing overnight",
            description: "Hydrocolloid patches that protect wounded or troubled area from getting worse while maintaining humidity of skin to prevent further breakouts. (24 patches)",
            price: "29dt",
            originalPrice: "",
            image: "assets/products/cosrx_acne_patch.jpg",
            sizes: []
        }
    ],
    "SKIN 1004": [
        {
            name: "Centella Toning Toner",
            tagline: "A gentle PHA exfoliating toner that can be used daily to thoroughly improve skin texture.",
            description: "Product Benefits: Calming, Soothing, Mild exfoliating. Skin Type: Normal, Sensitive.",
            price: "66dt",
            originalPrice: "77dt",
            image: "assets/products/centella_toner.jpg",
            collection: "Centella",
            sizes: [
                { label: "210ml", price: "66dt", originalPrice: "77dt" },
                { label: "400ml", price: "105dt", originalPrice: "110dt" }
            ]
        },
        {
            name: "Hyalu-Cica Water-Fit Sun Serum UV",
            tagline: "A serum-like chemical sunscreen that is super lightweight, hydrating, and quickly absorbed.",
            description: "Product Benefits: Moisturizing, Soothing, UV Protection. Skin Type: Sensitive, Normal, Dry.",
            price: "81dt",
            originalPrice: "",
            image: "assets/products/skin1004_sun_serum.jpg",
            collection: "Hyalu-Cica",
            sizes: []
        },
        {
            name: "Centella Quick Calming Pad",
            tagline: "An essence-rich toner pad with Centella and Panthenol soothes and hydrates the skin in a simple 2-minute step.",
            description: "Product Benefits: Calming, Hydrating. Skin Type: Normal, Sensitive, Combination.",
            price: "70dt",
            originalPrice: "",
            image: "assets/products/skin1004-mask-pad-70-pads-130ml-centella-quick-calming-pad-38409144566006_1440x.webp",
            collection: "Centella",
            sizes: []
        },
        {
            name: "Centella Ampoule",
            tagline: "An all-rounder ampoule formulated to help soothe visible redness and comfort sensitive-looking skin.",
            description: "Product Benefits: Soothing, Calming. Skin Type: Sensitive, Normal.",
            price: "80dt",
            originalPrice: "98dt",
            image: "assets/products/skin1004-ampoule-serum-centella-ampoule-38409088401654_1440x.webp",
            collection: "Centella",
            sizes: []
        },
        {
            name: "Centella Light Cleansing Oil",
            tagline: "Centella and 6 plant-derived oils gently dissolve makeup, sunscreen and excess sebum on the skin, leaving a refreshing, oil-free finish.",
            description: "Product Benefits: Calming, Hydrating, Mild exfoliating. Skin Type: Normal, Dry, Sensitive.",
            price: "78dt",
            originalPrice: "90dt",
            image: "assets/products/skin1004-cleanser-centella-light-cleansing-oil-38409133490422_1440x.webp",
            collection: "Centella",
            sizes: []
        },
        {
            name: "Centella Ampoule Foam",
            tagline: "A pH-balanced (pH 5) cleanser formulated with coconut-derived surfactants and citric acid that gently cleanses the skin without leaving it feeling dry or tight.",
            description: "Product Benefits: Calming, Hydrating, Mild exfoliating. Skin Type: Normal, Dry, Sensitive.",
            price: "63dt",
            originalPrice: "",
            image: "assets/products/skin1004-cleanser-madagascar-centella-ampoule-foam-36436059226358_1440x.jpg",
            collection: "Centella",
            sizes: []
        },
        {
            name: "Centella Travel Kit",
            tagline: "A full Centella skincare routine set with 5 mini-sized products for travel or trial of the Centella line. (Only one left in stock!)",
            description: "",
            price: "90dt",
            originalPrice: "125dt",
            image: "assets/products/skin1004-others-centella-travel-kit-40032160940278_1440x.webp",
            collection: "Centella",
            sizes: []
        },
        {
            name: "Tone Brightening Capsule Ampoule",
            tagline: "An ampoule for daily use, formulated with Niacinamide, Tranexamic Acid, and encapsulated Madewhite™ to help improve the look of uneven skin tone and dullness for a more radiant-looking complexion.",
            description: "Product Benefits: Brightening, Soothing, Hydrating. Skin Type: Sensitive, Normal.",
            price: "67dt",
            originalPrice: "115dt",
            image: "assets/products/skin1004-ampoule-serum-100ml-madagascar-centella-tone-brightening-capsule-ampoule-36440330895606_1440x.webp",
            collection: "Tone Brightening",
            sizes: []
        },
        {
            name: "Poremizing Quick Clay Stick Mask",
            tagline: "A convenient clay mask stick with 5 types of clay (including 18% Kaolin) to absorb excess sebum and clarify pores.",
            description: "Product Benefits: Pore Tightening, Sebum Control, Mild Exfoliation. Skin Type: Oily, Combination, Normal.",
            price: "65dt",
            originalPrice: "105dt",
            image: "assets/products/skin1004-poremizing-quick-clay-stick-mask-39362357494006_1440x.webp",
            collection: "Poremizing",
            sizes: []
        },
        {
            name: "Madagascar Centella Poremizing Deep Cleansing Foam",
            tagline: "A deep-cleansing foam with pink Himalayan salt to remove impurities and tighten pores.",
            description: "Product Benefits: Deep Cleansing, Pore Tightening, Sebum Control. Skin Type: Oily, Combination, Normal.",
            price: "69dt",
            originalPrice: "79dt",
            image: "assets/products/skin1004-poremizing-deep-cleansing-foam-38642870223094_1440x.webp",
            collection: "Poremizing",
            sizes: []
        },
        {
            name: "Centella Ampoule Kit",
            tagline: "A collection of SKIN1004's signature ampoules in travel-friendly sizes.",
            description: "Product Benefits: Soothing, Brightening, Pore Tightening, Hydrating. Includes 4 of SKIN1004's best-selling ampoules.",
            price: "98dt",
            originalPrice: "134dt",
            image: "assets/products/skin1004_ampoule_kit.webp",
            collection: "Centella",
            sizes: []
        }
    ],
    "Mixsoon": [
        {
            name: "Bean Essence",
            tagline: "A multi-tasking essence that helps to strengthen and hydrate skin while providing gentle exfoliation.",
            description: "Formulated with fermented bean, barley, pomegranate, and pear to texture skin and improve vitality.",
            price: "117dt",
            originalPrice: "167dt",
            image: "assets/products/beanessencebestseller.webp",
            sizes: []
        },
        {
            name: "Bean Cream",
            tagline: "A rich, nourishing cream that helps to strengthen the skin barrier and provide deep hydration.",
            description: "Enriched with fermented bean extract for a smooth, glowing complexion without stickiness.",
            price: "117dt",
            originalPrice: "167dt",
            image: "assets/products/MX_1x1_beancream-background.webp",
            sizes: []
        },
        {
            name: "Glacier Water Hyaluronic Acid Serum",
            tagline: "A deep hydrating serum with glacier water and 3 types of hyaluronic acid.",
            description: "Provides instant moisture and forms a protective hydration film on the skin.",
            price: "134dt",
            originalPrice: "182dt",
            image: "assets/products/300ml___1_4d05e0a2-ad7d-4dff-a7fb-9941b7393b23.webp",
            sizes: []
        }
    ],
    "Anua": [
        {
            name: "Heartleaf Quercetinol Pore Deep Cleansing Foam",
            tagline: "A deep-cleansing foam infused with heartleaf and quercetinol.",
            description: "Formulated with 3,000ppm of Heartleaf Powder and Quercetinol to effectively clean pores and soothe the skin.",
            price: "62dt",
            originalPrice: "96dt",
            image: "assets/products/anua-us-cleanser-150ml-heartleaf-quercetinol-pore-deep-cleansing-foam-1161173162.webp",
            sizes: []
        },
        {
            name: "Heartleaf Pore Control Cleansing Oil",
            tagline: "A mild cleansing oil that helps to eliminate blackheads.",
            description: "This cleansing oil is specially formulated to remove makeup, SPF, and impurities while targeting blackheads and congestion.",
            price: "80dt",
            originalPrice: "96dt",
            image: "assets/products/anua-us-cleanser-200ml-heartleaf-pore-control-cleansing-oil-1161173148.webp",
            sizes: []
        }
    ],
    "Dr. Althea": [
        {
            name: "345 Relief Cream",
            tagline: "A lightweight regenerating ointment-gel cream for post-acne skin.",
            description: "Enriched with Niacinamide, Panthenol, and Centella Asiatica for soothing and skin barrier repair.",
            price: "110dt",
            originalPrice: "135dt",
            image: "assets/products/345cream.webp",
            sizes: []
        },
        {
            name: "147 Barrier Relief Cream",
            tagline: "A deep-hydrating moisturizer designed to strengthen the skin barrier and provide long-lasting moisture.",
            description: "Formulated with a seven-layer hyaluronic acid complex and 4 nourishing natural extracts.",
            price: "110dt",
            originalPrice: "135dt",
            image: "assets/products/147cream.webp",
            sizes: []
        }
    ],
    "Glow Recipe": [
        {
            name: "Watermelon Glow Niacinamide Dew Drops",
            tagline: "A multi-use highlighting serum that hydrates and visibly reduces the look of hyperpigmentation for a dewy glow.",
            description: "Clinically effective for a natural, healthy-looking glow without mica, glitter, or gray cast.",
            price: "167dt",
            originalPrice: "",
            image: "assets/products/10_21_2410_21_24_WM_DEWDROPS-_1.webp",
            sizes: []
        },
        {
            name: "Watermelon Glow PHA + BHA Pore-Tight Toner",
            tagline: "A PHA- and BHA-infused watermelon toner that hydrates skin and minimizes the appearance of pores.",
            description: "Balance, hydrate, and achieve ultra-smooth skin with this gentle, bouncy toner.",
            price: "172dt",
            originalPrice: "",
            image: "assets/products/PDP_IMAGES_Watermelon-Glow-PHA_BHA-Pore-Tight-Toner-5_8726c95e-05a9-4c53-af63-80a8b9926ae7.webp",
            sizes: []
        },
        {
            name: "Plum Plump Hyaluronic Cream",
            tagline: "A whipped-gel cream moisturizer that hydrates and visibly plumps skin with polyglutamic acid and multi-weight hyaluronic acid.",
            description: "Gives skin a dewy, bouncy look while supporting the skin barrier.",
            price: "191dt",
            originalPrice: "",
            image: "assets/products/NEW5_14_24_PDP_CLAIM_REFRESH_PLUM_CREAM-01.webp",
            sizes: []
        }
    ],
    "Fino": [
        {
            name: "Premium Touch Hair Mask",
            tagline: "A rinse-off treatment that repairs damaged hair for a smooth, shiny finish.",
            description: "Product Benefits: Damage Repair, Moisturizing, Smoothing. Hair Type: All, Especially Damaged.",
            price: "67dt",
            originalPrice: "",
            image: "assets/products/fino_hair_mask.jpg",
            sizes: []
        }
    ],
    "The Ordinary": [
        {
            name: "Glycolic Acid 7% Exfoliating Toner",
            tagline: "A daily AHA exfoliating toner that gently resurfaces the skin.",
            description: "This toner offers mild exfoliation for improved skin radiance and visible clarity.",
            price: "45dt",
            originalPrice: "",
            image: "assets/products/rdn-glycolic-acid-7pct-exfoliating-toner-100ml.webp",
            sizes: [
                { label: "100ml", price: "45dt", originalPrice: "" },
                { label: "240ml", price: "65dt", originalPrice: "" }
            ]
        },
        {
            name: "Hyaluronic Acid 2% + B5",
            tagline: "A hydration support formula with ultra-pure, vegan hyaluronic acid.",
            description: "This formulation combines low-, medium- and high-molecular weight hyaluronic acid to offer multi-depth hydration.",
            price: "47dt",
            originalPrice: "",
            image: "assets/products/ord-hyaluronic-acid-2pct-B5-30ml-Clr-Acu.webp",
            sizes: [
                { label: "30ml", price: "47dt", originalPrice: "" },
                { label: "60ml", price: "84dt", originalPrice: "" }
            ]
        },
        {
            name: "Niacinamide 10% + Zinc 1%",
            tagline: "A high-strength vitamin and mineral blemish formula.",
            description: "Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin blemishes and congestion.",
            price: "29dt",
            originalPrice: "",
            image: "assets/products/rdn-niacinamide-10pct-zinc-1pct-30ml.webp",
            sizes: [
                { label: "30ml", price: "29dt", originalPrice: "" },
                { label: "60ml", price: "52dt", originalPrice: "" }
            ]
        },
        {
            name: "AHA 30% + BHA 2% Peeling Solution",
            tagline: "A 10-minute exfoliating facial.",
            description: "Advanced-level exfoliating solution with 30% AHA and 2% BHA to target dullness.",
            price: "45dt",
            originalPrice: "",
            image: "assets/products/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.webp",
            sizes: []
        },
        {
            name: "Salicylic Acid 2% Solution",
            tagline: "A water-based exfoliant.",
            description: "This solution targets skin congestion and visible irregularities.",
            price: "38dt",
            originalPrice: "",
            image: "assets/products/rdn-salicylic-acid-2pct-solution-otc.webp",
            sizes: []
        },
        {
            name: "Caffeine Solution 5% + EGCG",
            tagline: "A depuffing solution for tired eyes.",
            description: "This light-textured formula contains an extremely high 5% concentration of caffeine, supplemented with highly-purified EGCG.",
            price: "44dt",
            originalPrice: "",
            image: "assets/products/rdn-caffeine-solution-5pct-egcg-30ml.webp",
            sizes: []
        },
        {
            name: "UV Filters SPF 45 Serum",
            tagline: "A lightweight, invisible sunscreen serum.",
            description: "Broad spectrum protection with antioxidants. Provides high protection against UVA and UVB rays while maintaining a serum-like finish.",
            price: "91dt",
            originalPrice: "",
            image: "assets/products/ord-uv-filters-spf-45-serum-usa-60ml.webp",
            sizes: []
        }
    ],
    "EQQUALBERRY": [
        {
            name: "Vitamin Illuminating Serum",
            tagline: "Glow Filter - For a natural, radiant complexion.",
            description: "A serum infused with vitamins to illuminate and refine skin texture.",
            price: "96dt",
            originalPrice: "120dt",
            image: "assets/products/eqb_serum.webp",
            sizes: []
        },
        {
            name: "Vitamin Illuminating Cream",
            tagline: "Glow Filter - Skin energy boost.",
            description: "A nourishing cream that helps to illuminate and vitalize skin for a healthy glow.",
            price: "125dt",
            originalPrice: "",
            image: "assets/products/eqb_cream.webp",
            sizes: []
        }
    ]
};
