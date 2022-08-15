// each gpu model goes into the square brackets inside quotes (single or double quotes) and are separated by commas


const gpuClipDirections = {

    fanClips: [
        // 3090ti
        'NVIDIA GeForce RTX 3090 Ti Founders Edition', 'Asus GeForce RTX 3090 Ti STRIX LC GAMING OC', 'EVGA GeForce RTX 3090 Ti FTW3 ULTRA GAMING', 'GALAX GeForce RTX 3090 Ti EX Gamer ST (1-Click OC)', 'Gigabyte GeForce RTX 3090 Ti AORUS XTREME WATERFORCE', 'Gigabyte GeForce RTX 3090 Ti GAMING OC', 'Inno3D GeForce RTX 3090 Ti X3 OC', 'KFA2 GeForce RTX 3090 Ti EX Gamer ST (1-Click OC)', 'MSI GeForce RTX 3090 Ti GAMING X TRIO', 'MSI GeForce RTX 3090 Ti  SUPRIM X', 'Palit GeForce RTX 3090 Ti GameRock OC', 'PNY GeForce RTX 3090 Ti XLR8 Gaming UPRISING EPIC-X RGB OC', 'Zotac GeForce RTX 3090 Ti AMP Extreme Holo',
        // 3090
        'NVIDIA GeForce RTX 3090 Founders Edition', 'Asus GeForce RTX 3090 Turbo', 'Asus GeForce RTX 3090 Turbo', 'EVGA GeForce RTX 3090 XC3 Ultra Gaming', 'EVGA GeForce RTX 3090 FTW3 Ultra', 'Gainward GeForce RTX 3090 Phoenix GS', 'GALAX GeForce RTX 3090 EX', 'GALAX GeForce RTX 3090 SG', 'KFA2 GeForce RTX 3090 SG', 'KFA2 GeForce RTX 3090 EX', 'Palit GeForce RTX 3090 GamingPro OC', 'PNY GeForce RTX 3090 XLR8 Gaming EPIC-X RGB', 'PNY GeForce RTX 3090 XLR8 Gaming EPIC-X RGB',
        // 3080ti
        'NVIDIA GeForce RTX 3080 Ti Founders Edition', 'EVGA GeForce RTX 3080 Ti FTW3 Ultra Gaming', 'EVGA GeForce RTX 3080 Ti XC3 GAMING', 'GALAX GeForce RTX 3080 Ti SG (1-Click OC)', 'GALAX GeForce RTX 3080 Ti EXG (1-Click OC)', 'Inno3D GeForce RTX 3080 Ti iChill X4', 'PNY GeForce RTX 3080 Ti XLR8 Gaming UPRISING EPIC-X RGB',
        // 6950xt
        'ASRock Radeon RX 6950 XT OC',
        // 6900xt
        'Radeon RX 6900 XT - Reference Model', 'PowerColor Radeon RX 6900 XT Red Devil Limited Edition',
        // 6800xt
        'AMD Radeon RX 6800 XT - Reference Model', 'ASRock Radeon RX 6800 XT Phantom Gaming D OC', 'PowerColor Radeon RX 6800 XT Red Devil LE', 'PowerColor Radeon RX 6800 XT Red Devil OC', 'PowerColor Radeon RX 6800 XT Red Dragon OC', 'PowerColor Radeon RX 6800 XT Red Dragon OC', 'PowerColor Radeon RX 6800 XT Liquid Devil',
        // 6800
        'ASRock Radeon RX 6800', 'Asus Radeon RX 6800', 'XFX Radeon RX 6800', 'Gigabyte Radeon RX 6800', 'MSI Radeon RX 6800', 'PowerColor Radeon RX 6800 Fighter OC', 'PowerColor Radeon RX 6800 Red Devil LE OC', 'PowerColor Radeon RX 6800 Red Dragon OC', 'Sapphire Radeon RX 6800', 'Sapphire Radeon RX 6800 Pulse',
        // 3080
        'NVIDIA GeForce RTX 3080 Founders Edition', 'EVGA GeForce RTX 3080 FTW3 Ultra Hybrid', 'EVGA GeForce RTX 3080 XC3 Gaming Ultra Hybrid', 'GALAX GeForce RTX 3080 SG', 'GALAX GeForce RTX 3080 EX', 'KFA2 GeForce RTX 3080 EX Gamer', 'KFA2 GeForce RTX 3080 SG (1-Click OC)', 'Palit GeForce RTX 3080 GamingPro OC', 'PNY GeForce RTX 3080 XLR8 Gaming REVEL EPIC-X RGB', 'EVGA GeForce RTX 3080 FTW3 Ultra', 'EVGA GeForce RTX 3080 XC3 Gaming Ultra', 'Gainward GeForce RTX 3080 Phoenix',
        //6750xt
        'Biostar Radeon RX 6750 XT', 'PowerColor Radeon RX 6750 XT Red Devil OC', 
        // 6700 XT
        'Gigabyte Radeon RX 6700 XT',
        // 3070ti
        'NVIDIA GeForce RTX 3070 Ti Founders Edition', 'EVGA GeForce RTX 3070 Ti FTW3 ULTRA GAMING', 'EVGA GeForce RTX 3070 Ti XC3 ULTRA GAMING', 'Palit GeForce RTX 3070 Ti GameRock OC', 'Palit GeForce RTX 3070 Ti GamingPro', 'PNY GeForce RTX 3070 Ti XLR8 Gaming REVEL EPIC-X RGB',
        // 3070
        'NVIDIA GeForce RTX 3070 Founders Edition', 'EVGA GeForce RTX 3070 FTW3 Ultra Gaming', 'EVGA GeForce RTX 3070 XC3 Ultra Gaming', 'GALAX GeForce RTX 3070 SG', 'Inno3D GeForce RTX 3070 LHR iChill X4', 'KFA2 GeForce RTX 3070 SG', 'Palit GeForce RTX 3070 LHR GameRock OC', 'Palit GeForce RTX 3070 LHR GamingPro OC', 'Palit GeForce RTX 3070 LHR JetStream OC', 'PNY GeForce RTX 3070 Uprising', 'PNY GeForce RTX 3070 XLR8 Gaming Revel Epic-X RGB',
        // 3060ti
        'NVIDIA GeForce RTX 3060 Ti Founders Edition', 'EVGA GeForce RTX 3060 Ti FTW3 Ultra GAMING iCX3', 'EVGA GeForce RTX 3060 Ti XC GAMING', 'Inno3D GeForce RTX 3060 Ti Twin X2 OC', 'Palit GeForce RTX 3060 Ti LHR Dual OC', 'Palit GeForce RTX 3060 Ti LHR GamingPro', 'PNY GeForce RTX 3060 Ti UPRISING', 'PNY GeForce RTX 3060 Ti XLR8 Gaming REVEL EPIC-X',
        // 3060
        'EVGA GeForce RTX 3060 XC GAMING', 'Gainward GeForce RTX 3060 Ghost', 'GALAX GeForce RTX 3060 (1-click OC)', 'Inno3D GeForce RTX 3060 iChill X3 RED', 'KFA2 GeForce RTX 3060 (1-Click OC)', 'Palit GeForce RTX 3060 Dual OC', 'Palit GeForce RTX 3060 StormX OC', 'PNY GeForce RTX 3060 UPRISING', 'PNY GeForce RTX 3060 XLR8 Gaming REVEL EPIC-X RGB',
        // 6650xt
        'Biostar Radeon RX 6650 XT', ',PowerColor Radeon RX 6650 XT Red Devil OC',
        // 6600xt
        'PowerColor Radeon RX 6600 XT Red Devil',
        // 3050
        'EVGA GeForce RTX 3050 XC GAMING', 'Gainward GeForce RTX 3050 Ghost OC', 'Gainward GeForce RTX 3050 Pegasus OC', 'GALAX GeForce RTX 3050 EX (1-Click OC)', 'Inno3D GeForce RTX 3050 Gaming OC X2', 'Inno3D GeForce RTX 3050 Twin X2 OC', 'Palit GeForce RTX 3050 Dual OC', 'Palit GeForce RTX 3050 StormX OC', 'PNY GeForce RTX 3050 UPRISING', 'PNY GeForce RTX 3050 XLR8 Gaming REVEL EPIC-X RGB',
        // vega64
        'ASRock Radeon RX VEGA 64 Phantom Gaming', 'Gigabyte Radeon RX VEGA 64 Blower', 'HIS Radeon RX VEGA 64 AIR', 'HIS Radeon RX VEGA 64 Limited Edition', 'MSI Radeon RX VEGA 64', 'MSI Radeon RX VEGA 64 AIR BOOST OC', 'MSI Radeon RX VEGA 64 IRON', 'MSI Radeon RX VEGA 64 WAVE', 'PowerColor Radeon RX VEGA 64', 'Sapphire Radeon RX VEGA 64', 'XFX Radeon RX VEGA 64',
        // radeon VII
        'Radeon VII - Reference Model',
        // vega 56
        'ASRock Radeon RX VEGA 56 Phantom Gaming X', 'MSI Radeon RX VEGA 56 AIR BOOST OC', 'MSI Radeon RX VEGA 56', 'PowerColor Radeon RX VEGA 56', 'PowerColor Radeon RX VEGA 56 NANO', 'Sapphire Radeon RX VEGA 56', 'Sapphire Radeon RX VEGA 56', 'Sapphire Radeon RX VEGA 56 PULSE', 'XFX Radeon RX VEGA 56 Blower',
        // 2080ti
        'Asus GeForce RTX 2080 Ti DUAL Advanced', 'Asus GeForce RTX 2080 Ti Turbo', 'EVGA GeForce RTX 2080 Ti Black', 'EVGA GeForce RTX 2080 Ti FTW3 ULTRA GAMING', 'EVGA GeForce RTX 2080 Ti GAMING Blower', 'EVGA GeForce RTX 2080 Ti K|NGP|N GAMING', 'EVGA GeForce RTX 2080 Ti XC2 Ultra', 'Gainward GeForce RTX 2080 Ti Phoenix', 'Gigabyte GeForce RTX 2080 Ti WINDFORCE OC', 'Inno3D GeForce RTX 2080 Ti GAMING OC', 'Inno3D GeForce RTX 2080 Ti iChill Black', 'Inno3D GeForce RTX 2080 Ti  Twin X2', 'MSI GeForce RTX 2080 Ti AERO', 'MSI GeForce RTX 2080 Ti SEA HAWK X', 'MSI GeForce RTX 2080 Ti VENTUS OC', 'MSI GeForce RTX 2080 Ti VENTUS GP OC', 'NVIDIA GeForce RTX 2080 Ti Founders Edition', 'Palit GeForce RTX 2080 Ti Dual', 'Palit GeForce RTX 2080 Ti GamingPro OC', 'Palit GeForce RTX 2080 Ti X', 'PNY GeForce RTX 2080 Ti Blower', 'PNY GeForce RTX 2080 Ti XLR8 Gaming Overclocked Edition', 'Zotac GeForce RTX 2080 Ti Blower', 'Zotac GeForce RTX 2080 Ti GAMING Triple Fan', 'Zotac GeForce RTX 2080 Ti Twin',
        // 2080 super
        'Asus GeForce RTX 2080 SUPER DUAL EVO OC', 'Asus GeForce RTX 2080 SUPER Turbo EVO', 'EVGA GeForce RTX 2080 SUPER BLACK GAMING', 'EVGA GeForce RTX 2080 SUPER FTW3 ULTRA', 'EVGA GeForce RTX 2080 SUPER  FTW3HYBRID GAMING', 'EVGA GeForce RTX 2080 SUPER GAMING', 'EVGA GeForce RTX 2080 SUPER XC ULTRA', 'EVGA GeForce RTX 2080 SUPER KO GAMING', 'EVGA GeForce RTX 2080 SUPER XC HYBRID GAMING', 'EVGA GeForce RTX 2080 SUPER XC HYBRID GAMING', 'Inno3D GeForce RTX 2080 SUPER Gaming OC X3', 'Inno3D GeForce RTX 2080 SUPER iChill Black', 'Inno3D GeForce RTX 2080 SUPER iChill X3', 'Inno3D GeForce RTX 2080 SUPER JET', 'Inno3D GeForce RTX 2080 SUPER Twin X2 OC', 'MSI GeForce RTX 2080 SUPER AERO', 'MSI GeForce RTX 2080 SUPER SEA HAWK X', 'NVIDIA GeForce RTX 2080 SUPER  Founders Edition', 'Palit GeForce RTX 2080 SUPER GP OC', 'PNY GeForce RTX 2080 SUPER Blower', 'PNY GeForce RTX 2080 SUPER XLR8 Gaming Overclocked Edition', 'Zotac GeForce RTX 2080 SUPER GAMING', 'Zotac GeForce RTX 2080 SUPER GAMING AMP',
        // 2080
        'Asus GeForce RTX 2080 DUAL Advanced', 'Asus GeForce RTX 2080 DUAL EVO OC', 'Asus GeForce RTX 2080 Turbo EVO', 'EVGA GeForce RTX 2080 Black', 'EVGA GeForce RTX 2080 FTW3 ULTRA', 'EVGA GeForce RTX 2080 FTW3 ULTRA HYBRID GAMING', 'EVGA GeForce RTX 2080 GAMING', 'EVGA GeForce RTX 2080 XC ULTRA', 'EVGA GeForce RTX 2080 XC2 ULTRA', 'EVGA GeForce RTX 2080 XC HYBRID GAMING', 'Gainward GeForce RTX 2080 Phoenix GS', 'Gainward GeForce RTX 2080 TRIPLE', 'Gainward GeForce RTX 2080 TRIPLE', 'GALAX GeForce RTX 2080 OC', 'Gigabyte GeForce RTX 2080 GAMING OC', 'Gigabyte GeForce RTX 2080 WINDFORCE OC', 'Inno3D GeForce RTX 2080 GAMING OC', 'Inno3D GeForce RTX 2080 JET', 'Inno3D GeForce RTX 2080 Twin X2', 'MSI GeForce RTX 2080 AERO', 'MSI GeForce RTX 2080 DUKE', 'MSI GeForce RTX 2080 SEA HAWK X', 'MSI GeForce RTX 2080 VENTUS OC', 'NVIDIA GeForce RTX 2080 Founders Edition', 'Palit GeForce RTX 2080 GamingPro OC', 'PNY GeForce RTX 2080 Blower', 'PNY GeForce RTX 2080 XLR8 Gaming Overclocked Edition', 'Zotac GeForce RTX 2080 AMP MAXX', 'Zotac GeForce RTX 2080 Blower', 'Zotac GeForce RTX 2080 GAMING AMP',
        // 2070 
        'Asus GeForce RTX 2070 SUPER DUAL EVO OC', 'Asus GeForce RTX 2070 SUPER Turbo EVO', 'EVGA GeForce RTX 2070 SUPER BLACK GAMING', 'EVGA GeForce RTX 2070 SUPER FTW3 ULTRA+', 'EVGA GeForce RTX 2070 SUPER GAMING', 'EVGA GeForce RTX 2070 SUPER KO GAMING', 'EVGA GeForce RTX 2070 SUPER XC GAMING', 'EVGA GeForce RTX 2070 SUPER XC HYBRID GAMING', 'EVGA GeForce RTX 2070 SUPER XC ULTRA+', 'Inno3D GeForce RTX 2070 SUPER Gaming OC X2', 'Inno3D GeForce RTX 2070 SUPER iChill Black', 'Inno3D GeForce RTX 2070 SUPER JET', 'Inno3D GeForce RTX 2070 SUPER Twin X2 OC', 'NVIDIA GeForce RTX 2070 SUPER Founders Edition', 'Palit GeForce RTX 2070 SUPER GamingPro', 'PNY GeForce RTX 2070 SUPER Blower', 'PNY GeForce RTX 2070 SUPER XLR8 Gaming Overclocked Edition', 'Zotac GeForce RTX 2070 SUPER GAMING AMP', 'Zotac GeForce RTX 2070 SUPER GAMING Twin', 'Zotac GeForce RTX 2070 SUPER MINI', 'Asus GeForce RTX 2070 DUAL Advanced', 'Asus GeForce RTX 2070 DUAL OC', 'EVGA GeForce RTX 2070 Black', 'EVGA GeForce RTX 2070 FTW3 ULTRA GAMING', 'EVGA GeForce RTX 2070 GAMING', 'EVGA GeForce RTX 2070 XC ULTRA GAMING', 'Inno3D GeForce RTX 2070 Twin X2', 'KFA2 GeForce RTX 2070 OC', 'MSI GeForce RTX 2070 AERO', 'MSI GeForce RTX 2070 DUKE OC', 'NVIDIA GeForce RTX 2070 Founders Edition', 'Zotac GeForce RTX 2070 AMP Extreme', 'Zotac GeForce RTX 2070 GAMING AMP',
        // 2060 super
        'Asus GeForce RTX 2060 SUPER Turbo EVO', 'EVGA GeForce RTX 2060 SUPER SC ULTRA GAMING', 'EVGA GeForce RTX 2060 SUPER XC ULTRA GAMING', 'Inno3D GeForce RTX 2060 SUPER Compact', 'Inno3D GeForce RTX 2060 SUPER Twin X2 OC RGB', 'NVIDIA GeForce RTX 2060 SUPER Founders Edition', 'PNY GeForce RTX 2060 SUPER Blower', 'EVGA GeForce RTX 2060 GAMING', 'EVGA GeForce RTX 2060 KO ULTRA GAMING', 'EVGA GeForce RTX 2060 SC ULTRA GAMING', 'EVGA GeForce RTX 2060 XC ULTRA GAMING', 'Inno3D GeForce RTX 2060 Twin X2', 'KFA2 GeForce RTX 2060', 'NVIDIA GeForce RTX 2060 Founders Edition',
        // 1660ti
        'EVGA GeForce GTX 1660 Ti SC ULTRA GAMING', 'EVGA GeForce GTX 1660 Ti XC ULTRA GAMING', 'GALAX GeForce GTX 1660 Ti  (1-click OC)', 'Inno3D GeForce GTX 1660 Ti Twin X2', 'EVGA GeForce GTX 1660 SUPER SC Ultra Black', 'EVGA GeForce GTX 1660 SUPER SC ULTRA GAMING', 'EVGA GeForce GTX 1660 SC ULTRA GAMING', 'EVGA GeForce GTX 1660 XC GAMING', 'EVGA GeForce GTX 1660  XC ULTRA GAMING', 'KFA2 GeForce GTX 1660', 'KFA2 GeForce GTX 1660 White MINI',
        // 1080ti
        'EVGA GeForce GTX 1080 Ti FTW3 ELITE GAMING', 'EVGA GeForce GTX 1080 Ti FTW3 HYBRID GAMING', 'EVGA GeForce GTX 1080 Ti  iCX GAMING', 'EVGA GeForce GTX 1080 Ti K|NGP|N GAMING', 'EVGA GeForce GTX 1080 Ti SC2 ELITE GAMING', 'EVGA GeForce GTX 1080 Ti SC2 HYBRID GAMING', 'GALAX GeForce GTX 1080 Ti EX OC', 'GALAX GeForce GTX 1080 Ti EX OC', 'Gigabyte GeForce GTX 1080 Ti TURBO', 'Inno3D GeForce GTX 1080 Ti iChill', 'KFA2 GeForce GTX 1080 Ti Blower', 'KFA2 GeForce GTX 1080 Ti EX', 'KFA2 GeForce GTX 1080 Ti HOF', 'MSI GeForce GTX 1080 Ti AERO', 'MSI GeForce GTX 1080 Ti SEA HAWK X', 'NVIDIA GeForce GTX 1080 Ti Founders Edition', 'OcUK GeForce GTX 1080 Ti Blower Edition', 'PNY GeForce GTX 1080 Ti Blower', 'PNY GeForce GTX 1080 Ti XLR8 Gaming Overclocked Edition', 'Zotac GeForce GTX 1080 Ti AMP Extreme', 'Zotac GeForce GTX 1080 Ti Blower',
        // 1080 
        'NVIDIA GeForce GTX 1080 Founders Edition', 'Corsair GeForce GTX 1080', 'EVGA GeForce GTX 1080', 'EVGA GeForce GTX 1080 ACX 3.0', 'EVGA GeForce GTX 1080 FTW GAMING ACX 3.0', 'EVGA GeForce GTX 1080 FTW2 DT Gaming iCX', 'EVGA GeForce GTX 1080 FTW3 HYBRID GAMING', 'EVGA GeForce GTX 1080 8 GB SC GAMING ACX 3.0', 'EVGA GeForce GTX 1080 SC2 Gaming iCX', 'EVGA GeForce GTX 1080 SC2 Gaming iCX', 'EVGA GeForce GTX 1080 CLASSIFIED GAMING ACX 3.0', 'GALAX GeForce GTX 1080 Virtual Edition', 'Gigabyte GeForce GTX 1080 TURBO OC', 'Inno3D GeForce GTX 1080 iChill X4', 'Inno3D GeForce GTX 1080 Twin X2', 'MSI GeForce GTX 1080 AERO', 'MSI GeForce GTX 1080 SEA HAWK X', 'PNY GeForce GTX 1080 XLR8', 'EVGA GeForce GTX 1080 HYBRID GAMING',
        // 1070ti
        'EVGA GeForce GTX 1070 Ti', 'EVGA GeForce GTX 1070 Ti FTW ULTRA SILENT GAMING', 'EVGA GeForce GTX 1070 Ti FTW2 GAMING iCX', 'EVGA GeForce GTX 1070 Ti GAMING', 'EVGA GeForce GTX 1070 Ti SC GAMING', 'EVGA GeForce GTX 1070 Ti SC HYBRID GAMING', 'Inno3D GeForce GTX 1070 Ti HerculeZ Twin X2', 'Inno3D GeForce GTX 1070 Ti iChill X3', 'Inno3D GeForce GTX 1070 Ti iChill X4', 'Inno3D GeForce GTX 1070 Ti JET', 'MSI GeForce GTX 1070 Ti AERO', 'NVIDIA GeForce GTX 1070 Ti Founders Edition',
        // 1070
        'EVGA GeForce GTX 1070', 'EVGA GeForce GTX 1070 DT Gaming iCX', 'EVGA GeForce GTX 1070 FTW DT GAMING ACX 3.0', 'EVGA GeForce GTX 1070 ACX 3.0', 'EVGA GeForce GTX 1070 FTW HYBRID', 'EVGA GeForce GTX 1070 FTW HYBRID', 'EVGA GeForce GTX 1070 FTW2 GAMING iCX', 'EVGA GeForce GTX 1070 GAMING', 'EVGA GeForce GTX 1070 HYBRID GAMING', 'EVGA GeForce GTX 1070 SC GAMING ACX 3.0', 'EVGA GeForce GTX 1070 SC2 Gaming iCX', 'Inno3D GeForce GTX 1070 iChill X3', 'Inno3D GeForce GTX 1070 iChill X4', 'KFA2 GeForce GTX 1070 OC', 'KFA2 GeForce GTX 1070 Virtual Edition', 'MSI GeForce GTX 1070 SEA HAWK X', 'NVIDIA GeForce GTX 1070 Founders Edition', 'PNY GeForce GTX 1070', 'Zotac GeForce GTX 1070', 'ASRock Radeon RX 5700 XT',
        // 5700xt
        'Asus Radeon RX 5700 XT', 'HIS Radeon RX 5700 XT', 'MSI Radeon RX 5700 XT EVOKE OC', 'MSI Radeon RX 5700 XT MECH OC', 'MSI Radeon RX 5700 XT', 'PowerColor Radeon RX 5700 XT', 'PowerColor Radeon RX 5700 XT Red Devil', 'PowerColor Radeon RX 5700 XT Red Dragon', 'Sapphire Radeon RX 5700 XT', 'VisionTek Radeon RX 5700 XT', 'XFX Radeon RX 5700 XT',
        // 5700
        'ASRock Radeon RX 5700', 'Gigabyte Radeon RX 5700', 'HIS Radeon RX 5700', 'MSI Radeon RX 5700 EVOKE OC', 'MSI Radeon RX 5700 MECH OC', 'MSI Radeon RX 5700', 'PowerColor Radeon RX 5700', 'PowerColor Radeon RX 5700 ITX 2DH', 'PowerColor Radeon RX 5700 Red Devil', 'PowerColor Radeon RX 5700 Red Dragon', 'Sapphire Radeon RX 5700', 'Sapphire Radeon RX 5700 PULSE', 'VisionTek Radeon RX 5700', 'XFX Radeon RX 5700', 'EVGA GeForce GTX Titan',
        // Titan
        'Gigabyte GeForce GTX Titan X XTREME', 'NVIDIA GeForce GTX Titan', 'NVIDIA GeForce GTX Titan Black', 'NVIDIA GeForce GTX Titan X', 'NVIDIA GeForce GTX Titan Z', 'NVIDIA TITAN RTX', 'NVIDIA Titan V', 'NVIDIA Titan Xp', 'Zotac GeForce GTX Titan X ArcticStorm',
        // 580
        'Diamond Radeon RX 580', 'MSI Radeon RX 580', 'MSI Radeon RX 580',
        // 570
        'MSI Radeon RX 570 GT OC',

        // others
        'Evga 1080 ti SC2', 'Evga SC2', 'EVGA RTX 3080 XC3 Black', 'Powercolor 6600XT', 'EVGA RTX 3080 XC3 Ultra', 'EVGA 3080 FTW3', 'Amd radeon 6900 xt', 'PNY XLR8 Gaming REVEL EPIC-X RGB', "NVIDIA GeForce RTX 2080 SUPER Founders Edition"
    ],

    backplateClips: [
        // 3090
        'Asus GeForce RTX 3090 Strix Gaming OC', 'Asus GeForce RTX 3090 TUF Gaming OC', 'Gainward GeForce RTX 3090 Phantom GS', 'Gigabyte GeForce RTX 3090 Aorus Master Xtreme', 'Gigabyte GeForce RTX 3090 GAMING OC', 'MSI GeForce RTX 3090 Gaming X Trio Suprim', 'MSI GeForce RTX 3090 Ventus 3X OC', 'Palit GeForce RTX 3090 GameRock', 'Zotac GeForce RTX 3090 Gaming Trinity', 'Zotac GeForce RTX 3090 GAMING AMP Extreme Holo', 'ZOTAC GAMING GeForce RTX 3090 ArcticStorm', 'Gigabyte GeForce RTX 3090 Aorus Xtreme',
        // 3080ti
        'Asus GeForce RTX 3080 Ti ROG Strix Gaming OC', 'Asus GeForce RTX 3080 Ti TUF GAMING OC', 'Colorful GeForce RTX 3080 Ti iGame Advanced OC-V', 'Colorful GeForce RTX 3080 Ti iGame Vulcan OC-V', 'Colorful GeForce RTX 3080 Ti NB-V', 'Gigabyte GeForce RTX 3080 Ti Aorus Master Xtreme', 'Gigabyte GeForce RTX 3080 Ti Eagle OC', 'Gigabyte GeForce RTX 3080 Ti GAMING OC', 'Gigabyte GeForce RTX 3080 Ti Vision OC', 'KFA2 GeForce RTX 3080 Ti EXG (1-Click OC)', 'KFA2 GeForce RTX 3080 Ti SG (1-Click OC)', 'MSI GeForce RTX 3080 Ti Gaming X Trio', 'MSI GeForce RTX 3080 Ti Suprim X', 'MSI GeForce RTX 3080 Ti Ventus 3x OC', 'Palit GeForce RTX 3080 Ti GameRock', 'Palit GeForce RTX 3080 Ti GameRock', 'Zotac GeForce RTX 3080 Ti Gaming Trinity OC', 'Zotac GeForce RTX 3080 Ti Gaming Trinity OC',
        // 6950xt
        'Asus Radeon RX 6950 XT ROG STRIX LC GAMING OC', 'Asus Radeon RX 6950 XT ROG STRIX LC GAMING OC', 'Gigabyte Radeon RX 6950 XT GAMING OC', 'MSI Radeon RX 6950 XT GAMING X TRIO', 'Sapphire Radeon RX 6950 XT NITRO+', 'Sapphire Radeon RX 6950 XT TOXIC Limited Edition',
        // 6900xt
        'Asus RX 6900 XT STRIX LC GAMING OC', 'Asus Radeon RX 6900 XT TUF GAMING OC', 'Sapphire Radeon RX 6900 XT NITRO+', 'XFX Radeon RX 6900 XT Speedster MERC 319 Ultra',
        // 6800xt
        'ASRock Radeon RX 6800 XT Taichi X OC ', 'Asus Radeon RX 6800 XT Strix LC Gaming OC', 'ASUS Radeon RX 6800 XT TUF Gaming', 'MSI Radeon RX 6800 XT Gaming X Trio', 'Sapphire Radeon RX 6800 XT NITRO+', 'Sapphire Radeon RX 6800 XT NITRO+ SE', 'Sapphire Radeon RX 6800 XT Pulse',
        // 6800
        'ASRock Radeon RX 6800 Challenger Pro OC', 'ASRock Radeon RX 6800 Phantom Gaming D OC', 'Asus Radeon RX 6800 Strix Gaming OC', 'Asus Radeon RX 6800 TUF Gaming OC', 'Gigabyte Radeon RX 6800 Gaming OC', 'PowerColor Radeon RX 6800', 'Sapphire Radeon RX 6800 NITRO+',
        // 3080
        'Asus GeForce RTX 3080 Strix Gaming OC', 'Asus GeForce RTX 3080 TUF Gaming OC', 'Gigabyte GeForce RTX 3080 Aorus Master', 'Gigabyte GeForce RTX 3080 Aorus Xtreme', 'Gigabyte GeForce RTX 3080 Aorus Xtreme Waterforce', 'Gigabyte GeForce RTX 3080 Eagle OC', 'Gigabyte GeForce RTX 3080 Gaming OC', 'Gigabyte GeForce RTX 3080 Vision OC', 'MSI GeForce RTX 3080 Gaming X Trio', 'MSI GeForce RTX 3080 Suprim X', 'MSI GeForce RTX 3080 Ventus 3X OC', 'Palit GeForce RTX 3080 GameRock', 'Zotac GeForce RTX 3080 Gaming Amp Holo', 'Zotac GeForce RTX 3080 Trinity OC',
        // 6750xt
        'ASRock Radeon RX 6750 XT Challenger Pro OC', 'ASRock Radeon RX 6750 XT Phantom Gaming D OC', 'Asus Radeon RX 6750 XT DUAL OC', 'Asus Radeon RX 6750 XT ROG STRIX GAMING OC', 'Gigabyte Radeon RX 6750 XT AORUS ELITE', 'Gigabyte Radeon RX 6750 XT GAMING OC', 'MSI Radeon RX 6750 XT GAMING X TRIO', 'MSI Radeon RX 6750 XT MECH 2X OC', 'Sapphire Radeon RX 6750 XT NITRO+', 'Sapphire Radeon RX 6750 XT NITRO+', 'XFX Radeon RX 6750 XT Speedster MERC 319 Black', 'XFX Radeon RX 6750 XT Speedster QICK 319 Ultra',
        // 6700xt 
        'Asus Radeon RX 6700 XT Dual', 'Asus Radeon RX 6700 XT ROG Strix Gaming OC', 'Asus Radeon RX 6700 XT TUF Gaming OC', 'Gigabyte Radeon RX 6700 XT Aorus Elite', 'Gigabyte Radeon RX 6700 XT Eagle', 'Gigabyte Radeon RX 6700 XT Gaming OC', 'MSI Radeon RX 6700 XT Gaming X', 'MSI Radeon RX 6700 XT Mech 2X OC', 'Sapphire Radeon RX 6700 XT PULSE', 'XFX Radeon RX 6700 XT Speedster MERC 319',
        // 3070ti
        'Asus GeForce RTX 3070 Ti ROG Strix Gaming OC', 'Asus GeForce RTX 3070 Ti TUF GAMING OC', 'GALAX GeForce RTX 3070 Ti EXG (1-Click OC)', 'GALAX GeForce RTX 3070 Ti SG (1-Click OC)', 'Gigabyte GeForce RTX 3070 Ti Aorus Master', 'Gigabyte GeForce RTX 3070 Ti Eagle OC', 'Gigabyte GeForce RTX 3070 Ti Gaming OC', 'Gigabyte GeForce RTX 3070 Ti Vision OC', 'Inno3D GeForce RTX 3070 Ti  iChill X4', 'Inno3D GeForce RTX 3070 Ti X3 OC', 'KFA2 GeForce RTX 3070 Ti (1-Click OC)', 'KFA2 GeForce RTX 3070 Ti EXG (1-Click OC)', 'KFA2 GeForce RTX 3070 Ti SG (1-Click OC)', 'MSI GeForce RTX 3070 Ti Gaming X Trio', 'MSI GeForce RTX 3070 Ti Suprim X', 'MSI GeForce RTX 3070 Ti Ventus 3X OC', 'Zotac GeForce RTX 3070 Ti Gaming Amp Holo', 'Zotac GeForce RTX 3070 Ti Gaming Trinity',
        // 3070
        'Gigabyte GeForce RTX 3070 Eagle OC', 'Gigabyte GeForce RTX 3070 Vision OC', 'Asus GeForce RTX 3070 Dual OC', 'Asus GeForce RTX 3070 KO Gaming OC', 'Asus GeForce RTX 3070 Strix Gaming', 'Asus GeForce RTX 3070 TUF Gaming OC', 'Colorful GeForce RTX 3070 iGame Advanced OC-V', 'GALAX GeForce RTX 3070 EX', 'Gigabyte GeForce RTX 3070 Aorus Master', 'Inno3D GeForce RTX 3070 iChill X3', 'KFA2 GeForce RTX 3070 EX', 'KFA2 GeForce RTX 3070 EX Gamer', 'MSI GeForce RTX 3070 Gaming X Trio', 'MSI GeForce RTX 3070 Suprim X', 'MSI GeForce RTX 3070 Ventus 2X OC', 'MSI GeForce RTX 3070 Ventus 3X OC', 'Zotac GeForce RTX 3070 Gaming Twin Edge OC', 'Inno3D GeForce RTX 3070 Twin X2 OC',
        // 3060ti
        'Asus GeForce RTX 3060 Ti DUAL OC', 'Asus GeForce RTX 3060 Ti KO OC', 'Asus GeForce RTX 3060 Ti OG STRIX GAMING OC', 'Asus GeForce RTX 3060 Ti TUF GAMING OC', 'GALAX GeForce RTX 3060 Ti (1-click OC)', 'GALAX GeForce RTX 3060 Ti EX', 'Gigabyte GeForce RTX 3060 Ti AORUS MASTER', 'Gigabyte GeForce RTX 3060 Ti EAGLE OC', 'Inno3D GeForce RTX 3060 Ti iChill X3', 'KFA2 GeForce RTX 3060 Ti (1-Click OC)', 'KFA2 GeForce RTX 3060 Ti EX', 'MSI GeForce RTX 3060 Ti GAMING X TRIO', 'MSI GeForce RTX 3060 Ti TWIN FAN OC', 'MSI GeForce RTX 3060 Ti VENTUS 2X OC', 'MSI GeForce RTX 3060 Ti', 'VENTUS 3X OC', 'Zotac GeForce RTX 3060 Ti Twin Edge',
        // 3060
        'Asus GeForce RTX 3060 DUAL OC', 'Asus GeForce RTX 3060 Phoenix ', 'Asus GeForce RTX 3060 ROG STRIX GAMING OC', 'Asus GeForce RTX 3060 TUF GAMING OC', 'GALAX GeForce RTX 3060  EX (1-Click OC)', 'Gigabyte GeForce RTX 3060 AORUS ELITE', 'Gigabyte GeForce RTX 3060 Eagle OC', 'Gigabyte GeForce RTX 3060 GAMING OC', 'Gigabyte GeForce RTX 3060 Vision OC', 'KFA2 GeForce RTX 3060 EX (1-Click OC)', 'MSI GeForce RTX 3060 AERO ITX OC', 'MSI GeForce RTX 3060 GAMING X', 'MSI GeForce RTX 3060 GAMING X TRIO', 'MSI GeForce RTX 3060 VENTUS 2X OC', 'MSI GeForce RTX 3060 VENTUS 3X OC', 'Zotac GeForce RTX 3060 GAMING AMP', 'Zotac GeForce RTX 3060 GAMING Twin Edge OC',
        // 6650xt
        'ASRock Radeon RX 6650 XT Challenger D OC', 'ASRock Radeon RX 6650 XT Phantom Gaming D OC', 'Asus Radeon RX 6650 XT 8 GB DUAL', 'Asus Radeon RX 6650 XT ROG STRIX GAMING OC', 'Gigabyte Radeon RX 6650 XT EAGLE', 'Gigabyte Radeon RX 6650 XT GAMING OC', 'MSI Radeon RX 6650 XT GAMING X', 'MSI Radeon RX 6650 XT MECH 2X OC', 'PowerColor Radeon RX 6650 XT Hellhound', 'Sapphire Radeon RX 6650 XT NITRO+', 'Sapphire Radeon RX 6650 XT PULSE', 'XFX Radeon RX 6650 XT Speedster MERC 308 Black', 'XFX Radeon RX 6650 XT Speedster QICK 308 ULTRA', 'XFX Radeon RX 6650 XT Speedster SWFT 210 Core',
        // 6600xt
        'ASRock Radeon RX 6600 XT Challenger D OC ', 'ASRock Radeon RX 6600 XT Challenger ITX', 'ASRock Radeon RX 6600 XT Challenger Pro OC', 'ASRock Radeon RX 6600 XT Phantom Gaming D OC', 'Asus Radeon RX 6600 XT DUAL OC', 'Asus Radeon RX 6600 XT ROG STRIX GAMING OC', 'Gigabyte Radeon RX 6600 XT EAGLE', 'Gigabyte Radeon RX 6600 XT GAMING OC Pro', 'MSI Radeon RX 6600 XT GAMING X', 'MSI Radeon RX 6600 XT MECH 2X OC', 'PowerColor Radeon RX 6600 XT Fighter', 'PowerColor Radeon RX 6600 XT Hellhound', 'Sapphire Radeon RX 6600 XT NITRO+', 'Sapphire Radeon RX 6600 XT PULSE', 'XFX Radeon RX 6600 XT Speedster MERC 308', 'XFX Radeon RX 6600 XT Speedster SWFT 210',
        // 6600
        'ASRock Radeon RX 6600 Challenger D', 'ASRock Radeon RX 6600 Challenger ITX', 'Asus Radeon RX 6600 DUAL', 'Gigabyte Radeon RX 6600 EAGLE', 'MSI Radeon RX 6600 ARMOR', 'MSI Radeon RX 6600 MECH 2X', 'PowerColor Radeon RX 6600 Fighter', 'PowerColor Radeon RX 6600 Hellhound', 'Sapphire Radeon RX 6600', 'Sapphire Radeon RX 6600 PULSE', 'XFX Radeon RX 6600 Speedster SWFT 210',
        // 3050
        'Asus GeForce RTX 3050 8GB DUAL OC', 'Asus GeForce RTX 3050 8GB Phoenix', 'Asus GeForce RTX 3050 8GB ROG STRIX GAMING OC', 'Gigabyte GeForce RTX 3050 EAGLE OC', 'Gigabyte GeForce RTX 3050 GAMING OC', 'MSI GeForce RTX 3050 AERO ITX OC', 'MSI GeForce RTX 3050 GAMING', 'MSI GeForce RTX 3050 GAMING X', 'MSI GeForce RTX 3050 VENTUS 2X OC', '   Zotac GeForce RTX 3050 8GB 8 GB GAMING Twin Edge OC',
        // Vega
        'Asus Radeon RX VEGA 64 AREZ STRIX OC', 'Asus Radeon RX VEGA 64 ROG STRIX', 'Gigabyte Radeon RX VEGA 64', 'PowerColor Radeon RX VEGA 64 Red Devil', 'Sapphire Radeon RX VEGA 64 NITRO+', 'Asus Radeon RX VEGA 56 AREZ STRIX', 'Asus Radeon RX VEGA 56 ROG STRIX', 'Gigabyte Radeon RX VEGA 56', 'PowerColor Radeon RX VEGA 56 Red Devil', 'PowerColor Radeon RX VEGA 56 Red Dragon', 'Sapphire Radeon RX VEGA 56 NITRO+', 'XFX Radeon RX VEGA 56',
        // 2080ti
        'Asus GeForce RTX 2080 Ti MATRIX', 'Asus GeForce RTX 2080 Ti STRIX GAMING OC', 'GALAX GeForce RTX 2080 Ti HOF', 'Gigabyte AORUS GeForce RTX 2080 Ti AORUS Xtreme', 'Gigabyte GeForce RTX 2080 Ti AORUS XTREME WATERFORCE', 'Gigabyte GeForce RTX 2080 Ti GAMING OC', 'Gigabyte GeForce RTX 2080 Ti TURBO', 'MSI GeForce RTX 2080 Ti DUKE', 'MSI GeForce RTX 2080 Ti GAMING X TRIO', 'MSI GeForce RTX 2080 Ti LIGHTNING Z', 'Zotac GeForce RTX 2080 Ti AMP Extreme', 'Zotac GeForce RTX 2080 Ti AMP MAXX',
        // 2080 super
        'Asus GeForce RTX 2080 SUPER STRIX GAMING ADVANCED', 'Asus GeForce RTX 2080 SUPER STRIX GAMING OC', 'Gainward GeForce RTX 2080 SUPER Phantom GLH', 'GALAX GeForce RTX 2080 SUPER EX', 'Gigabyte GeForce RTX 2080 SUPER AORUS', 'Gigabyte GeForce RTX 2080 SUPER AORUS WATERFORCE', 'Gigabyte GeForce RTX 2080 SUPER GAMING OC', ' Gigabyte GeForce RTX 2080 SUPER TURBO', 'Gigabyte GeForce RTX 2080 SUPER WINDFORCE OC', 'Inno3D GeForce RTX 2080 SUPER iChill X3 Ultra', 'KFA2 GeForce RTX 2080 SUPER EX', 'KFA2 GeForce RTX 2080 SUPER Work The Frames Edition', 'MSI GeForce RTX 2080 SUPER GAMING X TRIO', 'MSI GeForce RTX 2080 SUPER VENTUS OC', 'Palit GeForce RTX 2080 SUPER GameRock', 'Zotac GeForce RTX 2080 SUPER AMP Extreme',
        // 2080
        'Asus GeForce RTX 2080 STRIX GAMING OC', 'Asus GeForce RTX 2080 STRIX GAMING ADVANCED', 'Gainward GeForce RTX 2080 Phantom GS', 'Gigabyte GeForce RTX 2080 AORUS XTREME', 'Gigabyte GeForce RTX 2080 AORUS XTREME WATERFORCE', 'Gigabyte GeForce RTX 2080 TURBO OC', 'KFA2 GeForce RTX 2080 OC', 'MSI GeForce RTX 2080 GAMING X TRIO', 'Palit GeForce RTX 2080 JetStream', 'Zotac GeForce RTX 2080 AMP Extreme', 'Zotac GeForce RTX 2080',
        // 2070 super
        'Asus GeForce RTX 2070 SUPER STRIX GAMING OC', 'EVGA GeForce RTX 2070 SUPER XC ULTRA GAMING', 'Gainward GeForce RTX 2070 SUPER Phantom GS', 'GALAX GeForce RTX 2070 SUPER EX', 'Gigabyte GeForce RTX 2070 SUPER AORUS', 'Gigabyte GeForce RTX 2070 SUPER WINDFORCE OC 3X', 'Inno3D GeForce RTX 2070 SUPER Gaming OC X3', 'Inno3D GeForce RTX 2070 SUPER iChill X3 Ultra', 'KFA2 GeForce RTX 2070 SUPER EX', 'KFA2 GeForce RTX 2070 SUPER Work The Frames Edition', 'MSI GeForce RTX 2070 SUPER ARMOR OC', 'MSI GeForce RTX 2070 SUPER GAMING TRIO', 'MSI GeForce RTX 2070 SUPER GAMING X TRIO', 'MSI GeForce RTX 2070 SUPER GAMING Z TRIO', 'MSI GeForce RTX 2070 SUPER VENTUS GP OC', 'MSI GeForce RTX 2070 SUPER VENTUS OC', 'Palit GeForce RTX 2070 SUPER GameRock Premium', 'Palit GeForce RTX 2070 SUPER JetStream', 'Zotac GeForce RTX 2070 SUPER AMP Extreme',
        // 2070
        'Asus GeForce RTX 2070 DUAL EVO OC', 'Asus GeForce RTX 2070 DUAL MINI OC', 'Asus GeForce RTX 2070 STRIX GAMING Advanced', 'Asus GeForce RTX 2070 STRIX GAMING OC', 'Asus GeForce RTX 2070 Turbo EVO', 'GALAX GeForce RTX 2070 EX', 'Gigabyte GeForce RTX 2070 AORUS', 'Gigabyte GeForce RTX 2070 GAMING OC', 'Gigabyte GeForce RTX 2070 MINI ITX', 'Gigabyte GeForce RTX 2070 WINDFORCE 2X', 'Gigabyte GeForce RTX 2070 XTREME', 'KFA2 GeForce RTX 2070 EX', 'MSI GeForce RTX 2070 AERO ITX', 'MSI GeForce RTX 2070 ARMOR', 'MSI GeForce RTX 2070 GAMING Z', 'MSI GeForce RTX 2070 TRI FROZR', 'MSI GeForce RTX 2070 VENTUS GP', 'Palit GeForce RTX 2070 Dual', 'Palit GeForce RTX 2070 JetStream', 'PNY GeForce RTX 2070 Blower', 'PNY GeForce RTX 2070 XLR8 Gaming Overclocked Edition', 'Zotac GeForce RTX 2070', 'Zotac GeForce RTX 2070 GAMING OC MINI',
        // 2060 super
        'Asus GeForce RTX 2060 SUPER DUAL EVO OC', 'Asus GeForce RTX 2060 SUPER STRIX GAMING OC', 'GALAX GeForce RTX 2060 SUPER EX', 'Gigabyte GeForce RTX 2060 SUPER GAMING OC', 'Gigabyte GeForce RTX 2060 SUPER AORUS', 'Gigabyte GeForce RTX 2060 SUPER GAMING OC', 'Gigabyte GeForce RTX 2060 SUPER GAMING OC 3X', 'Gigabyte GeForce RTX 2060 SUPER WINDFORCE OC', 'Inno3D GeForce RTX 2060 SUPER Gaming X2 OC', 'Inno3D GeForce RTX 2060 SUPER iChill X3 Ultra', 'KFA2 GeForce RTX 2060 SUPER (1-Click OC)', 'KFA2 GeForce RTX 2060 SUPER EX', 'MSI GeForce RTX 2060 SUPER AERO ITX', 'MSI GeForce RTX 2060 SUPER ARMOR OC', 'MSI GeForce RTX 2060 SUPER GAMING X', 'MSI GeForce RTX 2060 SUPER VENTUS GP OC', 'Palit GeForce RTX 2060 SUPER JetStream', 'PNY GeForce RTX 2060 SUPER Dual Gaming OC', 'Zotac GeForce RTX 2060 SUPER AMP', 'Zotac GeForce RTX 2060 SUPER GAMING AMP Extreme', 'Zotac GeForce RTX 2060 SUPER MINI',
        // 2060
        'Asus GeForce RTX 2060 DUAL EVO OC', 'Asus GeForce RTX 2060 DUAL MINI OC', 'Asus GeForce RTX 2060 DUAL OC', 'Asus GeForce RTX 2060 Phoenix Fan', 'Asus GeForce RTX 2060 STRIX GAMING OC', 'Asus GeForce RTX 2060 TUF OC', 'Asus GeForce RTX 2060 Turbo', 'Gainward GeForce RTX 2060 Phoenix GS', 'GALAX GeForce RTX 2060', 'GALAX GeForce RTX 2060 EX', 'Gigabyte GeForce RTX 2060 AORUS XTREME', 'Gigabyte GeForce RTX 2060 D6 Rev 2.0', 'Gigabyte GeForce RTX 2060 GAMING OC PRO', 'Gigabyte GeForce RTX 2060 MINI ITX OC', 'Gigabyte GeForce RTX 2060 OC', 'Gigabyte GeForce RTX 2060 WINDFORCE OC', 'Gigabyte GeForce RTX 2060 XTREME Rev 2.0', 'MSI GeForce RTX 2060 AERO ITX OC', 'MSI GeForce RTX 2060 GAMING Z', 'MSI GeForce RTX 2060 VENTUS OC', 'MSI GeForce RTX 2060 VENTUS XS OC', 'Palit GeForce RTX 2060 GamingPro OC', 'Palit GeForce RTX 2060 StormX OC', 'PNY GeForce RTX 2060 Blower', 'PNY GeForce RTX 2060 XLR8 Gaming Overclocked Edition', 'Zotac GeForce RTX 2060 GAMING AMP',
        // 1660ti
        'Asus GeForce GTX 1660 Ti DUAL OC', 'Asus GeForce GTX 1660 Ti Phoenix OC', 'Asus GeForce GTX 1660 Ti STRIX GAMING OC', 'Asus GeForce GTX 1660 Ti TUF OC', 'Gainward GeForce GTX 1660 Ti Pegasus OC', 'GALAX GeForce GTX 1660 Ti EX', 'Gigabyte GeForce GTX 1660 Ti AORUS', 'Gigabyte GeForce GTX 1660 Ti GAMING OC', 'Gigabyte GeForce GTX 1660 Ti MINI ITX OC', 'Gigabyte GeForce GTX 1660 Ti OC', 'Gigabyte GeForce GTX 1660 Ti WINDFORCE OC', 'KFA2 GeForce GTX 1660 Ti (1-Click OC)', 'KFA2 GeForce GTX 1660 Ti EX', 'MSI GeForce GTX 1660 Ti AERO ITX OC', 'MSI GeForce GTX 1660 Ti ARMOR OC', 'MSI GeForce GTX 1660 Ti GAMING X', 'MSI GeForce GTX 1660 Ti VENTUS XS OC', 'Palit GeForce GTX 1660 Ti StormX OC', 'PNY GeForce GTX 1660 Ti Blower', 'PNY GeForce GTX 1660 Ti XLR8 Gaming Overclocked Edition', 'Zotac GeForce GTX 1660 Ti GAMING', 'Zotac GeForce GTX 1660 Ti GAMING AMP',
        // 1660 super
        'Asus GeForce GTX 1660 SUPER DUAL EVO OC', 'Asus GeForce GTX 1660 SUPER DUAL MINI OC', 'Asus GeForce GTX 1660 SUPER Phoenix OC', 'Asus GeForce GTX 1660 SUPER Phoenix OC', 'Asus GeForce GTX 1660 SUPER TUF GAMING OC', 'Asus GeForce GTX 1660 SUPER TUF Gaming X3 OC', 'Gainward GeForce GTX 1660 SUPER Pegasus OC', 'GALAX GeForce GTX 1660 SUPER EX', 'Gigabyte GeForce GTX 1660 SUPER GAMING OC', 'Gigabyte GeForce GTX 1660 SUPER MINI ITX OC', 'Gigabyte GeForce GTX 1660 SUPER OC', 'KFA2 GeForce GTX 1660 SUPER (1-Click OC)', 'MSI GeForce GTX 1660 SUPER AERO ITX OC', 'MSI GeForce GTX 1660 SUPER GAMING X', 'MSI GeForce GTX 1660 SUPER VENTUS XS OC', 'Palit GeForce GTX 1660 SUPER GamingPro OC', 'Palit GeForce GTX 1660 SUPER StormX OC', 'PNY GeForce GTX 1660 SUPER Blower', 'PNY GeForce GTX 1660 SUPER Dual', 'PNY GeForce GTX 1660 SUPER', 'Zotac GeForce GTX 1660 SUPER GAMING AMP', 'Zotac GeForce GTX 1660 SUPER GAMING Twin Fan',
        // 1660
        'Asus GeForce GTX 1660 Phoenix OC', 'Asus GeForce GTX 1660 TUF GAMING OC', 'Asus GeForce GTX 1660 TUF OC', 'Gainward GeForce GTX 1660 Ghost OC', 'Gainward GeForce GTX 1660 Pegasus OC', 'GALAX GeForce GTX 1660 (1-click OC)', 'GALAX GeForce GTX 1660 EX', 'Gigabyte GeForce GTX 1660 GAMING OC', 'Gigabyte GeForce GTX 1660 MINI ITX OC', 'Gigabyte GeForce GTX 1660 OC', 'KFA2 GeForce GTX 1660 EX', 'MSI GeForce GTX 1660 ARMOR OC', 'MSI GeForce GTX 1660 GAMING X', 'MSI GeForce GTX 1660 VENTUS XS OC', 'PNY GeForce GTX 1660 XLR8 Gaming Overclocked Edition', 'PNY GeForce GTX 1660 Blower', 'PNY GeForce GTX 1660 XLR8 Gaming Overclocked Edition', 'PNY GeForce GTX 1660 XLR8 Gaming Overclocked Edition', 'Zotac GeForce GTX 1660 GAMING Twin Fan',
        // 1080ti
        'Asus GeForce GTX 1080 Ti POSEIDON', 'Asus GeForce GTX 1080 Ti STRIX GAMING', 'Asus GeForce GTX 1080 Ti Turbo', 'Colorful GeForce GTX 1080 Ti Vulcan X OC', 'Corsair GeForce GTX 1080 Ti', 'Gigabyte GeForce GTX 1080 Ti AORUS WATERFORCE', 'Gigabyte GeForce GTX 1080 Ti AORUS XTREME', 'Gigabyte GeForce GTX 1080 Ti GAMING', 'MSI GeForce GTX 1080 Ti DUKE OC', 'MSI GeForce GTX 1080 Ti GAMING X', 'MSI GeForce GTX 1080 Ti GAMING X TRIO', 'MSI GeForce GTX 1080 Ti LIGHTNING X', 'MSI GeForce GTX 1080 Ti 11 GB LIGHTNING Z', 'Palit GeForce GTX 1080 Ti Super JetStream', 'Zotac GeForce GTX 1080 Ti MINI',
        // 1080
        'Asus GeForce GTX 1080 ROG STRIX', 'Asus GeForce GTX 1080 Turbo', 'Gainward GeForce GTX 1080 Phoenix GLH', 'GALAX GeForce GTX 1080 EX OC', 'GALAX GeForce GTX 1080 HOF', 'Gigabyte GeForce GTX 1080 AORUS XTREME', 'Gigabyte GeForce GTX 1080 XTREME', 'Gigabyte GeForce GTX 1080 D5X', 'Gigabyte GeForce GTX 1080 WINDFORCE OC', 'Gigabyte GeForce GTX 1080 MINI ITX', 'KFA2 GeForce GTX 1080', 'MSI GeForce GTX 1080 GAMING X+', 'MSI GeForce GTX 1080 ARMOR OC', 'MSI GeForce GTX 1080 DUKE OC', 'Palit GeForce GTX 1080 GameRock Premium', 'Palit GeForce GTX 1080 Super JetStream', 'Palit GeForce GTX 1080 Dual', 'Zotac GeForce GTX 1080 AMP Extreme', 'Zotac GeForce GTX 1080 MINI',
        // 1070ti
        'Asus GeForce GTX 1070 Ti CERBERUS', 'Asus GeForce GTX 1070 Ti ROG STRIX', 'Asus GeForce GTX 1070 Ti Turbo', 'GALAX GeForce GTX 1070 Ti EX SNPR', 'GALAX GeForce GTX 1070 Ti HOF', 'Gigabyte GeForce GTX 1070 Ti AORUS', 'Gigabyte GeForce GTX 1070 Ti WINDFORCE', 'KFA2 GeForce GTX 1070 Ti EX', 'MSI GeForce GTX 1070 Ti ARMOR', 'MSI GeForce GTX 1070 Ti DUKE', 'MSI GeForce GTX 1070 Ti GAMING', 'Palit GeForce GTX 1070 Ti Dual', 'Palit GeForce GTX 1070 Ti JetStream', 'PNY GeForce GTX 1070 Ti', 'Zotac GeForce GTX 1070 Ti AMP', 'Zotac GeForce GTX 1070 Ti AMP Extreme', 'Zotac GeForce GTX 1070 Ti MINI',
        // 1070
        'Asus GeForce GTX 1070 Dual', 'Asus GeForce GTX 1070', 'Asus GeForce GTX 1070 STRIX', 'Asus GeForce GTX 1070', 'Gainward GeForce GTX 1070 Founders Edition', 'Gainward GeForce GTX 1070', 'Gainward GeForce GTX 1070 Phoenix', 'GALAX GeForce GTX 1070 EX OC', 'GALAX GeForce GTX 1070 EX OC SNPR', 'GALAX GeForce GTX 1070 HOF', 'GALAX GeForce GTX 1070 KATANA', 'GALAX GeForce GTX 1070 OC', 'GALAX GeForce GTX 1070 Virtual Edition', 'Gigabyte GeForce GTX 1070 AORUS', 'Gigabyte GeForce GTX 1070 G1 ROCK', 'Gigabyte GeForce GTX 1070 GAMING', 'Gigabyte GeForce GTX 1070 MINI ITX OC', 'Gigabyte GeForce GTX 1070 WINDFORCE OC', 'Gigabyte GeForce GTX 1070 XTREME', 'MSI GeForce GTX 1070 AERO', 'MSI GeForce GTX 1070 AERO ITX OC', 'MSI GeForce GTX 1070 ARMOR OC', 'MSI GeForce GTX 1070 DUKE OC', 'MSI GeForce GTX 1070 GAMING X', 'MSI GeForce GTX 1070 GAMING Z', 'MSI GeForce GTX 1070 QUICK SILVER OC', 'Palit GeForce GTX 1070 Dual', 'Palit GeForce GTX 1070 GameRock Premium', 'Palit GeForce GTX 1070 Super JetStream', 'PNY GeForce GTX 1070 XLR8', 'Zotac GeForce GTX 1070 AMP Extreme', 'Zotac GeForce GTX 1070 MINI',
        // 5700xt
        'ASRock Radeon RX 5700 XT Challenger D OC', 'ASRock Radeon RX 5700 XT Challenger Pro OC', 'ASRock Radeon RX 5700 XT Phantom Gaming D OC', 'ASRock Radeon RX 5700 XT Taichi X OC+', 'Asus Radeon RX 5700 XT STRIX GAMING OC', 'Asus Radeon RX 5700 XT TUF Gaming X3 EVO OC', 'Gigabyte Radeon RX 5700 XT AORUS', 'Gigabyte Radeon RX 5700 XT GAMING OC', 'MSI Radeon RX 5700 XT GAMING X', 'Sapphire Radeon RX 5700 XT NITRO+ SE', 'Sapphire Radeon RX 5700 XT PULSE', 'XFX Radeon RX 5700 XT DD', 'XFX Radeon RX 5700 XT RAW II', 'XFX Radeon RX 5700 XT THICC II Ultra', 'XFX Radeon RX 5700 XT THICC III Ultra', 'XFX Radeon RX 5700 XT Triple Dissipation',
        // 5700
        'ASRock Radeon RX 5700 Challenger D OC', 'ASRock Radeon RX 5700 Phantom Gaming D OC', 'Asus Radeon RX 5700 DUAL EVO OC', 'Asus Radeon RX 5700', 'Asus Radeon RX 5700 STRIX GAMING OC', 'Asus Radeon RX 5700 TUF Gaming X3 OC', 'Gigabyte Radeon RX 5700 GAMING OC', 'MSI Radeon RX 5700 GAMING X', 'XFX Radeon RX 5700 DD Ultra',
        // 590
        'ASRock Radeon RX 590 Phantom Gaming U OC', 'ASRock Radeon RX 590 Phantom Gaming X', 'Asus Radeon RX 590 STRIX GAMING', 'Gigabyte Radeon RX 590 GAMING 8G', 'MSI Radeon RX 590 ARMOR OC', 'PowerColor Radeon RX 590 Red Devil', 'PowerColor Radeon RX 590 Red Dragon', 'Sapphire Radeon RX 590 NITRO+ SE', 'Sapphire Radeon RX 590 PULSE', 'XFX Radeon RX 590 8 GB FATBOY OC+',
        // 580
        'ASRock Radeon RX 580  Phantom Gaming D', 'ASRock Radeon RX 580 Phantom Gaming X', 'Asus Radeon RX 580 AREZ Dual OC', 'Asus Radeon RX 580 AREZ STRIX OC', 'Asus Radeon RX 580 ROG STRIX TOP', 'Gigabyte Radeon RX 580 AORUS XTREME', 'Gigabyte Radeon RX 580 GAMING MI', 'MSI Radeon RX 580 ARMOR MK2 OC', 'MSI Radeon RX 580 ARMOR OC', 'MSI Radeon RX 580 ARMOR X', 'MSI Radeon RX 580 GAMING X+', 'MSI Radeon RX 580 GT', 'PowerColor Radeon RX 580', 'PowerColor Radeon RX 580 Red Devil', 'PowerColor Radeon RX 580 Red Dragon', 'Sapphire Radeon RX 580 NITRO+', 'Sapphire Radeon RX 580 PULSE', 'XFX Radeon RX 580 Black Edition', 'XFX Radeon RX 580 DD', 'XFX Radeon RX 580 GTR XXX', 'XFX Radeon RX 580 GTR-S', 'XFX Radeon RX 580 GTS XXX', 'XFX Radeon RX 580',
        // 570
        'ASRock Radeon RX 570 Phantom Gaming D', 'ASRock Radeon RX 570 Phantom Gaming X', 'Asus Radeon RX 570 AREZ Expedition', 'Asus Radeon RX 570 AREZ STRIX OC', 'Asus Radeon RX 570 Expedition', 'Asus Radeon RX 570 ROG STRIX', 'Asus Radeon RX 570 STRIX GAMING OC', 'Gigabyte Radeon RX 570 GAMING 8G', 'Gigabyte Radeon RX 570 AORUS', 'Gigabyte Radeon RX 570 GAMING MI', 'MSI Radeon RX 570 ARMOR OC', 'MSI Radeon RX 570 GAMING X', 'PowerColor Radeon RX 570', 'PowerColor Radeon RX 570 Red Devil', 'PowerColor Radeon RX 570 Red Dragon', 'Sapphire Radeon RX 570 NITRO+', 'Sapphire Radeon RX 570 PULSE', 'Sapphire Radeon RX 570 PULSE ITX', 'Sapphire Radeon RX 570 PULSE UEFI', 'VisionTek Radeon RX 570', 'XFX Radeon RX 570 Black Edition', 'XFX Radeon RX 570 RS XXX', 'XFX Radeon RX 570', 'XFX Radeon RX 570 XXX', ~

        // others
        'asus tuf 3070ti', 'asus ', 'ASUS TUF Gaming GeForce RTX 3070 8GB GDDR6', 'TUF-RTX3070TI-O8G-GAMING', "MSI GeForce RTX 3060 Ti 'VENTUS 3X OC", 'msi nvidia geforce gtx 1080', 'GIGABYTE GeForce RTX 3080', 'Sapphire TOXIC AMD Radeon RX 6900 XT Air Cooled', 'zotac GeForce RTX 3080 Trinity OC White Edition LHR', 'v850 SFX COOLERMASTER', 'MSI RX580 8GB ARMOR OC', 'Gigabyte GeForce RTX 3060 GAMING OC ']
}

module.exports = gpuClipDirections
