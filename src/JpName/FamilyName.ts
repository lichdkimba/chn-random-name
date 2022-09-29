// 整理自 https://myoji-yurai.net/prefectureRanking.htm?prefecture=%E5%85%A8%E5%9B%BD&page=0

const JpFamilyNameData: [string[], number][] = [
  [['佐藤', 'Satou'], 185.3],
  [['鈴木', 'Suzuki'], 363.9],
  [['高橋', 'Takahashi'], 503.8],
  [['田中', 'Tanaka'], 636.4],
  [['伊藤', 'Itou'], 742.9],
  [['渡辺', 'Watanabe'], 848.4],
  [['山本', 'Yamamoto'], 952.5],
  [['中村', 'Nakamura'], 1056.2],
  [['小林', 'Kobayashi'], 1158.3],
  [['加藤', 'Katou'], 1246.5],
  [['吉田', 'Yoshida'], 1328.8],
  [['山田', 'Yamada'], 1409.6],
  [['佐々木', 'Sasaki'], 1476.1],
  [['山口', 'Yamaguchi'], 1539.9],
  [['松本', 'Matsumoto'], 1602.1],
  [['井上', 'Inoue'], 1663.1],
  [['木村', 'Kimura'], 1720.2],
  [['林', 'Hayashi'], 1774.3],
  [['斎藤', 'Saitou'], 1828.1],
  [['清水', 'Shimizu'], 1881.0],
  [['山崎', 'Yamazaki'], 1928.9],
  [['森', 'Mori'], 1975.1],
  [['池田', 'Ikeda'], 2019.7],
  [['橋本', 'Hashimoto'], 2064.1],
  [['阿部', 'Abe'], 2107.9],
  [['石川', 'Ishikawa'], 2150.3],
  [['山下', 'Yamashita'], 2191.8],
  [['中島', 'Nakajima'], 2231.6],
  [['石井', 'Ishii'], 2271.1],
  [['小川', 'Ogawa'], 2310.4],
  [['前田', 'Maeda'], 2348.2],
  [['岡田', 'Okada'], 2385.8],
  [['長谷川', 'Hasegawa'], 2423.2],
  [['藤田', 'Fujita'], 2460.2],
  [['後藤', 'Gotou'], 2497.0],
  [['近藤', 'Kondou'], 2533.6],
  [['村上', 'Murakami'], 2568.7],
  [['遠藤', 'Endou'], 2601.7],
  [['青木', 'Aoki'], 2634.4],
  [['坂本', 'Sakamoto'], 2666.7],
  [['斉藤', 'Saitou'], 2698.7],
  [['福田', 'Fukuda'], 2729.6],
  [['太田', 'Oota'], 2760.3],
  [['西村', 'Nishimura'], 2790.8],
  [['藤井', 'Fujii'], 2821.3],
  [['金子', 'Kaneko'], 2850.7],
  [['岡本', 'Okamoto'], 2880.1],
  [['藤原', 'Fujiwara'], 2909.4],
  [['中野', 'Nakano'], 2938.5],
  [['三浦', 'Miura'], 2967.6],
  [['原田', 'Harada'], 2996.4],
  [['中川', 'Nakagawa'], 3025.2],
  [['松田', 'Matsuda'], 3053.8],
  [['竹内', 'Takeuchi'], 3082.2],
  [['小野', 'Ono'], 3109.9],
  [['田村', 'Tamura'], 3137.5],
  [['中山', 'Nakayama'], 3164.2],
  [['和田', 'Wada'], 3190.6],
  [['石田', 'Ishida'], 3216.9],
  [['森田', 'Morita'], 3242.7],
  [['上田', 'Ueda'], 3267.2],
  [['原', 'Hara'], 3291.6],
  [['内田', 'Uchida'], 3315.9],
  [['柴田', 'Shibata'], 3339.9],
  [['酒井', 'Sakai'], 3363.7],
  [['宮崎', 'Miyazaki'], 3387.2],
  [['横山', 'Yokoyama'], 3410.6],
  [['高木', 'Takagi'], 3433.8],
  [['安藤', 'Andou'], 3456.7],
  [['宮本', 'Miyamoto'], 3479.3],
  [['大野', 'Oono'], 3501.2],
  [['小島', 'Kojima'], 3522.7],
  [['谷口', 'Taniguchi'], 3544.0],
  [['今井', 'Imai'], 3565.1],
  [['工藤', 'Kudou'], 3586.2],
  [['高田', 'Takada'], 3607.0],
  [['増田', 'Masuda'], 3627.7],
  [['丸山', 'Maruyama'], 3648.3],
  [['杉山', 'Sugiyama'], 3668.8],
  [['村田', 'Murata'], 3689.2],
  [['大塚', 'Ootsuka'], 3709.5],
  [['新井', 'Arai'], 3729.8],
  [['小山', 'Koyama'], 3750.0],
  [['平野', 'Hirano'], 3770.2],
  [['藤本', 'Fujimoto'], 3790.2],
  [['河野', 'Kouno'], 3810.0],
  [['上野', 'Ueno'], 3829.8],
  [['野口', 'Noguchi'], 3849.5],
  [['武田', 'Takeda'], 3869.2],
  [['松井', 'Matsui'], 3888.4],
  [['千葉', 'Chiba'], 3907.5],
  [['岩崎', 'Iwasaki'], 3926.5],
  [['菅原', 'Sugawara'], 3945.4],
  [['木下', 'Kinoshita'], 3964.0],
  [['久保', 'Kubo'], 3982.5],
  [['佐野', 'Sano'], 4000.9],
  [['野村', 'Nomura'], 4019.3],
  [['松尾', 'Matsuo'], 4037.4],
  [['市川', 'Ichikawa'], 4055.4],
  [['菊地', 'Kikuchi'], 4073.4],
  [['杉本', 'Sugimoto'], 4091.4],
  [['古川', 'Furukawa'], 4108.9],
  [['大西', 'Oonishi'], 4126.3],
  [['島田', 'Shimada'], 4143.7],
  [['水野', 'Mizuno'], 4161.0],
  [['桜井', 'Sakurai'], 4178.2],
  [['高野', 'Takano'], 4195.2],
  [['渡部', 'Watanabe'], 4212.1],
  [['吉川', 'Yoshikawa'], 4229.0],
  [['山内', 'Yamauchi'], 4245.2],
  [['西田', 'Nishida'], 4261.3],
  [['飯田', 'Iida'], 4277.4],
  [['菊池', 'Kikuchi'], 4293.3],
  [['西川', 'Nishikawa'], 4309.2],
  [['小松', 'Komatsu'], 4325.0],
  [['北村', 'Kitamura'], 4340.6],
  [['安田', 'Yasuda'], 4356.2],
  [['五十嵐', 'Igarashi'], 4371.7],
  [['川口', 'Kawaguchi'], 4387.1],
  [['平田', 'Hirata'], 4402.3],
  [['関', 'Seki'], 4417.5],
  [['中田', 'Nakata'], 4432.6],
  [['久保田', 'Kubota'], 4447.7],
  [['服部', 'Hattori'], 4462.6],
  [['東', 'Higashi'], 4477.5],
  [['岩田', 'Iwata'], 4492.3],
  [['土屋', 'Tsuchiya'], 4507.1],
  [['川崎', 'Kawasaki'], 4521.9],
  [['福島', 'Fukushima'], 4536.7],
  [['本田', 'Honda'], 4551.3],
  [['辻', 'Tsuji'], 4565.9],
  [['樋口', 'Higuchi'], 4580.5],
  [['秋山', 'Akiyama'], 4595.0],
  [['田口', 'Taguchi'], 4609.5],
  [['永井', 'Nagai'], 4624.0],
  [['山中', 'Yamanaka'], 4638.4],
  [['中西', 'Nakanishi'], 4652.7],
  [['吉村', 'Yoshimura'], 4667.0],
  [['川上', 'Kawakami'], 4681.2],
  [['石原', 'Ishihara'], 4695.2],
  [['大橋', 'Oohashi'], 4709.2],
  [['松岡', 'Matsuoka'], 4723.2],
  [['馬場', 'Baba'], 4737.1],
  [['浜田', 'Hamada'], 4751.0],
  [['森本', 'Morimoto'], 4764.7],
  [['星野', 'Hoshino'], 4778.4],
  [['矢野', 'Yano'], 4792.0],
  [['浅野', 'Asano'], 4805.6],
  [['大久保', 'Ookubo'], 4819.2],
  [['松下', 'Matsushita'], 4832.8],
  [['吉岡', 'Yoshioka'], 4846.3],
  [['小池', 'Koike'], 4859.8],
  [['野田', 'Noda'], 4873.1],
  [['荒木', 'Araki'], 4886.1],
  [['大谷', 'Ooya'], 4899.1],
  [['内藤', 'Naitou'], 4912.1],
  [['松浦', 'Matsuura'], 4925.1],
  [['熊谷', 'Kumagai'], 4938.0],
  [['黒田', 'Kuroda'], 4950.7],
  [['尾崎', 'Ozaki'], 4963.2],
  [['永田', 'Nagata'], 4975.6],
  [['川村', 'Kawamura'], 4988.0],
  [['望月', 'Mochizuki'], 5000.4],
  [['田辺', 'Tanabe'], 5012.7],
  [['松村', 'Matsumura'], 5025.0],
  [['荒井', 'Arai'], 5037.3],
  [['堀', 'Hori'], 5049.6],
  [['大島', 'Ooshima'], 5061.9],
  [['平井', 'Hirai'], 5074.1],
  [['早川', 'Hayakawa'], 5086.3],
  [['菅野', 'Kanno'], 5098.5],
  [['栗原', 'Kurihara'], 5110.7],
  [['西山', 'Nishiyama'], 5122.9],
  [['広瀬', 'Hirose'], 5135.0],
  [['横田', 'Yokota'], 5146.7],
  [['石橋', 'Ishibashi'], 5158.4],
  [['萩原', 'Hagihara'], 5170.0],
  [['岩本', 'Iwamoto'], 5181.6],
  [['片山', 'Katayama'], 5193.1],
  [['関口', 'Sekiguchi'], 5204.6],
  [['宮田', 'Miyata'], 5216.0],
  [['大石', 'Ooishi'], 5227.2],
  [['高山', 'Takayama'], 5238.3],
  [['本間', 'Honma'], 5249.4],
  [['吉野', 'Yoshino'], 5260.5],
  [['須藤', 'Sudou'], 5271.6],
  [['岡崎', 'Okazaki'], 5282.6],
  [['小田', 'Oda'], 5293.6],
  [['伊東', 'Itou'], 5304.5],
  [['鎌田', 'Kamata'], 5315.4],
  [['上原', 'Uehara'], 5326.2],
  [['篠原', 'Shinohara'], 5337.0],
  [['小西', 'Konishi'], 5347.7],
  [['松原', 'Matsubara'], 5358.3],
  [['福井', 'Fukui'], 5368.9],
  [['古賀', 'Koga'], 5379.5],
  [['大森', 'Oomori'], 5390.0],
  [['小泉', 'Koizumi'], 5400.5],
  [['成田', 'Narita'], 5411.0],
  [['南', 'Minami'], 5421.5],
  [['奥村', 'Okumura'], 5431.9],
  [['内山', 'Uchiyama'], 5442.3],
  [['沢田', 'Sawada'], 5452.6],
  [['川島', 'Kawashima'], 5462.9],
  [['桑原', 'Kuwahara'], 5473.2],
  [['三宅', 'Miyake'], 5483.5],
  [['片岡', 'Kataoka'], 5493.8],
  [['富田', 'Tomita'], 5504.0],
  [['杉浦', 'Sugiura'], 5514.2],
  [['岡', 'Oka'], 5524.4],
  [['八木', 'Yagi'], 5534.6],
  [['奥田', 'Okuda'], 5544.7],
  [['小沢', 'Ozawa'], 5554.8],
  [['松永', 'Matsunaga'], 5564.9],
  [['北川', 'Kitagawa'], 5575.0],
  [['関根', 'Sekine'], 5585.0],
  [['河合', 'Kawai'], 5594.99],
  [['平山', 'Hirayama'], 5604.98],
  [['牧野', 'Makino'], 5614.92],
  [['白石', 'Shiraishi'], 5624.78],
  [['今村', 'Imamura'], 5634.5],
  [['寺田', 'Terada'], 5644.22],
  [['青山', 'Aoyama'], 5653.9],
  [['中尾', 'Nakao'], 5663.45],
  [['小倉', 'Ogura'], 5672.99],
  [['渋谷', 'Shibuya'], 5682.49],
  [['上村', 'Uemura'], 5691.94],
  [['小野寺', 'Onodera'], 5701.37],
  [['大山', 'Daisen'], 5710.78],
  [['足立', 'Adachi'], 5720.14],
  [['岡村', 'Okamura'], 5729.5],
  [['坂口', 'Sakaguchi'], 5738.84],
  [['天野', 'Amano'], 5748.16],
  [['多田', 'Tada'], 5757.42],
  [['佐久間', 'Sakuma'], 5766.61],
  [['根本', 'Konpon'], 5775.79],
  [['豊田', 'Toyoda'], 5784.9],
  [['田島', 'Tajima'], 5793.98],
  [['飯塚', 'Iizuka'], 5803.05],
  [['角田', 'Tsunoda'], 5812.1],
  [['村山', 'Murayama'], 5821.15],
  [['武藤', 'Mutou'], 5830.13],
  [['西', 'Nishi'], 5839.09],
  [['白井', 'Shirai'], 5848.05],
  [['竹田', 'Taketa'], 5856.97],
  [['宮下', 'Miyashita'], 5865.88],
  [['塚本', 'Tsukamoto'], 5874.77],
  [['榎本', 'Enomoto'], 5883.65],
  [['神谷', 'Kamiya'], 5892.49],
  [['坂田', 'Sakata'], 5901.33],
  [['児玉', 'Kodama'], 5910.14],
  [['水谷', 'Mizutani'], 5918.94],
  [['坂井', 'Sakai'], 5927.72],
  [['齋藤', 'Saitou'], 5936.37],
  [['小原', 'Ohara'], 5944.93],
  [['浅井', 'Asai'], 5953.49],
  [['岡部', 'Okabe'], 5962.03],
  [['森下', 'Morishita'], 5970.53],
  [['小笠原', 'Ogasawara'], 5979.03],
  [['神田', 'Kanda'], 5987.52],
  [['中井', 'Nakai'], 5995.99],
  [['植田', 'Ueda'], 6004.46],
  [['河村', 'Kawamura'], 6012.84],
  [['宮川', 'Miyagawa'], 6021.19],
  [['稲垣', 'Inagaki'], 6029.54],
  [['前川', 'Maekawa'], 6037.86],
  [['大川', 'Ookawa'], 6046.13],
  [['松崎', 'Matsuzaki'], 6054.27],
  [['長田', 'Osada'], 6062.4],
  [['若林', 'Wakabayashi'], 6070.52],
  [['飯島', 'Iijima'], 6078.63],
  [['谷', 'Tani'], 6086.64],
  [['大沢', 'Oosawa'], 6094.61],
  [['石塚', 'Ishizuka'], 6102.57],
  [['安部', 'Abe'], 6110.49],
  [['堀内', 'Horiuchi'], 6118.34],
  [['及川', 'Oikawa'], 6126.16],
  [['田代', 'Tashiro'], 6133.95],
  [['中嶋', 'Nakajima'], 6141.71],
  [['江口', 'Eguchi'], 6149.45],
  [['山根', 'Yamane'], 6157.15],
  [['中谷', 'Nakatani'], 6164.84],
  [['岸本', 'Kishimoto'], 6172.48],
  [['荒川', 'Arakawa'], 6180.1],
  [['本多', 'Honda'], 6187.72],
  [['西尾', 'Nishio'], 6195.32],
  [['森山', 'Moriyama'], 6202.87],
  [['岡野', 'Okano'], 6210.4],
  [['金井', 'Kanai'], 6217.91],
  [['細川', 'Hosokawa'], 6225.41],
  [['今野', 'Konno'], 6232.9],
  [['戸田', 'Toda'], 6240.34],
  [['稲葉', 'Inaba'], 6247.77],
  [['安達', 'Adachi'], 6255.19],
  [['津田', 'Tsuda'], 6262.6],
  [['森川', 'Morikawa'], 6269.99],
  [['落合', 'Ochiai'], 6277.37],
  [['土井', 'Doi'], 6284.74],
  [['村松', 'Muramatsu'], 6292.09],
  [['星', 'Hoshi'], 6299.42],
  [['町田', 'Machida'], 6306.71],
  [['三上', 'Mikami'], 6313.96],
  [['畠山', 'Hatakeyama'], 6321.2],
  [['岩井', 'Iwai'], 6328.37],
  [['長尾', 'Nagao'], 6335.5],
  [['堤', 'Tsutsumi'], 6342.62],
  [['中原', 'Nakahara'], 6349.73],
  [['野崎', 'Nozaki'], 6356.72],
  [['中沢', 'Nakazawa'], 6363.64],
  [['金田', 'Kaneda'], 6370.55],
  [['米田', 'Yoneda'], 6377.43],
  [['松山', 'Matsuyama'], 6384.29],
  [['杉田', 'Sugita'], 6391.13],
  [['堀田', 'Hotta'], 6397.97],
  [['西野', 'Nishino'], 6404.76],
  [['三好', 'Miyoshi'], 6411.55],
  [['山岸', 'Yamagishi'], 6418.31],
  [['佐伯', 'Saeki'], 6425.05],
  [['黒川', 'Kurokawa'], 6431.69],
  [['西岡', 'Nishioka'], 6438.32],
  [['泉', 'Izumi'], 6444.87],
  [['大竹', 'Ootake'], 6451.42],
  [['甲斐', 'Kai'], 6457.94],
  [['笠原', 'Kasahara'], 6464.41],
  [['大木', 'Taiboku'], 6470.87],
  [['堀江', 'Horie'], 6477.31],
  [['岸', 'Kishi'], 6483.74],
  [['徳永', 'Tokunaga'], 6490.16],
  [['川田', 'Kawata'], 6496.58],
  [['須田', 'Suda'], 6502.99],
  [['黒木', 'Kuroki'], 6509.39],
  [['山川', 'Yamakawa'], 6515.78],
  [['古田', 'Furuta'], 6522.13],
  [['榊原', 'Sakakibara'], 6528.46],
  [['梅田', 'Umeda'], 6534.79],
  [['新田', 'Shinta'], 6541.1],
  [['三木', 'Miki'], 6547.4],
  [['野中', 'Nonaka'], 6553.69],
  [['大城', 'Ooshiro'], 6559.9],
  [['村井', 'Murai'], 6566.1],
  [['奥山', 'Okuyama'], 6572.26],
  [['金城', 'Kinjou'], 6578.42],
  [['土田', 'Tsuchita'], 6584.56],
  [['滝沢', 'Takizawa'], 6590.65],
  [['大村', 'Oomura'], 6596.73],
  [['川端', 'Kawabata'], 6602.75],
  [['井口', 'Iguchi'], 6608.72],
  [['梶原', 'Kajiwara'], 6614.66],
  [['大場', 'Ooba'], 6620.56],
  [['宮城', 'Miyagi'], 6626.4],
  [['長島', 'Nagashima'], 6632.16],
  [['比嘉', 'Hika'], 6637.92],
  [['吉原', 'Yoshiwara'], 6643.68],
  [['宮内', 'Kunai'], 6649.41],
  [['金沢', 'Kanazawa'], 6655.13],
  [['安井', 'Yasui'], 6660.83],
  [['庄司', 'Shouji'], 6666.48],
  [['大内', 'Oouchi'], 6672.12],
  [['茂木', 'Shigeki'], 6677.73],
  [['荻野', 'Ogino'], 6683.32],
  [['日高', 'Hidaka'], 6688.89],
  [['松島', 'Matsushima'], 6694.45],
  [['向井', 'Mukai'], 6700.01],
  [['下田', 'Shimoda'], 6705.57],
  [['塚田', 'Tsukada'], 6711.11],
  [['石黒', 'Ishiguro'], 6716.65],
  [['西本', 'Nishimoto'], 6722.18],
  [['奥野', 'Okuno'], 6727.7],
  [['竹中', 'Takenaka'], 6733.21],
  [['広田', 'Hirota'], 6738.71],
  [['嶋田', 'Shimada'], 6744.2],
  [['栗田', 'Kurita'], 6749.67],
  [['藤川', 'Fujikawa'], 6755.14],
  [['福本', 'Fukumoto'], 6760.61],
  [['北野', 'Kitano'], 6766.05],
  [['宇野', 'Uno'], 6771.47],
  [['藤野', 'Fujino'], 6776.88],
  [['川原', 'Kawara'], 6782.29],
  [['谷川', 'Tanigawa'], 6787.69],
  [['丹羽', 'Niwa'], 6793.08],
  [['小谷', 'Otani'], 6798.47],
  [['吉本', 'Yoshimoto'], 6803.82],
  [['青柳', 'Aoyagi'], 6809.17],
  [['藤岡', 'Fujioka'], 6814.51],
  [['竹本', 'Takemoto'], 6819.85],
  [['竹下', 'Takeshita'], 6825.19],
  [['古谷', 'Furuya'], 6830.51],
  [['緒方', 'Ogata'], 6835.82],
  [['藤村', 'Fujimura'], 6841.1],
  [['平川', 'Hyuugawa'], 6846.37],
  [['亀井', 'Kamei'], 6851.64],
  [['高島', 'Takashima'], 6856.9],
  [['三輪', 'Sanrin'], 6862.15],
  [['藤沢', 'Fujisawa'], 6867.35],
  [['篠崎', 'Shinozaki'], 6872.54],
  [['窪田', 'Kubota'], 6877.71],
  [['宮原', 'Miyahara'], 6882.86],
  [['高井', 'Takai'], 6887.97],
  [['根岸', 'Negishi'], 6893.07],
  [['下村', 'Shimomura'], 6898.15],
  [['高瀬', 'Takase'], 6903.22],
  [['山村', 'Sanson'], 6908.27],
  [['川本', 'Kawamoto'], 6913.31],
  [['柳沢', 'Yanagisawa'], 6918.33],
  [['横井', 'Yokoi'], 6923.34],
  [['小澤', 'Ozawa'], 6928.35],
  [['出口', 'Deguchi'], 6933.35],
  [['吉沢', 'Yoshizawa'], 6938.34],
  [['武井', 'Takei'], 6943.32],
  [['小森', 'Komori'], 6948.29],
  [['竹村', 'Takemura'], 6953.22],
  [['長野', 'Nagano'], 6958.15],
  [['宮沢', 'Miyazawa'], 6963.02],
  [['志村', 'Shimura'], 6967.87],
  [['平松', 'Hiramatsu'], 6972.71],
  [['臼井', 'Usui'], 6977.53],
  [['福岡', 'Fukuoka'], 6982.35],
  [['黒沢', 'Kurosawa'], 6987.17],
  [['溝口', 'Mizoguchi'], 6991.97],
  [['田原', 'Tahara'], 6996.75],
  [['稲田', 'Inada'], 7001.52],
  [['浅田', 'Asada'], 7006.25],
  [['筒井', 'Tsutsui'], 7010.96],
  [['柳田', 'Yanagida'], 7015.66],
  [['奧村', 'Okumura'], 7020.36],
  [['大原', 'Oohara'], 7025.05],
  [['永野', 'Nagano'], 7029.74],
  [['林田', 'Hayashida'], 7034.41],
  [['冨田', 'Tomita'], 7039.08],
  [['大平', 'Oohira'], 7043.75],
  [['瀬戸', 'Seto'], 7048.41],
  [['手塚', 'Tezuka'], 7053.05],
  [['入江', 'Irie'], 7057.69],
  [['篠田', 'Shinoda'], 7062.32],
  [['福永', 'Fukunaga'], 7066.95],
  [['北原', 'Kitahara'], 7071.57],
  [['富永', 'Tominaga'], 7076.18],
  [['矢島', 'Yajima'], 7080.77],
  [['小出', 'Koide'], 7085.36],
  [['湯浅', 'Yuasa'], 7089.95],
  [['鶴田', 'Tsuruta'], 7094.53],
  [['沼田', 'Numata'], 7099.09],
  [['高松', 'Takamatsu'], 7103.64],
  [['長岡', 'Nagaoka'], 7108.18],
  [['堀口', 'Horiguchi'], 7112.72],
  [['岩瀬', 'Iwase'], 7117.24],
  [['山岡', 'Yamaoka'], 7121.76],
  [['大田', 'Oota'], 7126.26],
  [['石崎', 'Ishizaki'], 7130.72],
  [['大槻', 'Ootsuki'], 7135.18],
  [['澤田', 'Sawada'], 7139.64],
  [['石山', 'Ishiyama'], 7144.08],
  [['池上', 'Ikegami'], 7148.49],
  [['堀川', 'Horikawa'], 7152.87],
  [['二宮', 'Ninomiya'], 7157.25],
  [['相馬', 'Souma'], 7161.63],
  [['園田', 'Sonoda'], 7166.0],
  [['柏木', 'Kashiwagi'], 7170.36],
  [['島崎', 'Shimazaki'], 7174.71],
  [['奧田', 'Okuda'], 7179.06],
  [['平岡', 'Hiraoka'], 7183.41],
  [['花田', 'Hanada'], 7187.74],
  [['杉原', 'Sugihara'], 7192.04],
  [['加納', 'Kanou'], 7196.33],
  [['村瀬', 'Murase'], 7200.61],
  [['川野', 'Kawano'], 7204.89],
  [['片桐', 'Katagiri'], 7209.15],
  [['内海', 'Naikai'], 7213.41],
  [['長沢', 'Nagasawa'], 7217.67],
  [['倉田', 'Kurata'], 7221.92],
  [['野沢', 'Nozawa'], 7226.16],
  [['河原', 'Kawahara'], 7230.39],
  [['福原', 'Fukuhara'], 7234.62],
  [['秋元', 'Akimoto'], 7238.84],
  [['越智', 'Ochi'], 7243.06],
  [['西原', 'Nishihara'], 7247.26],
  [['松野', 'Matsuno'], 7251.46],
  [['笠井', 'Kasai'], 7255.65],
  [['小坂', 'Kosaka'], 7259.79],
  [['田畑', 'Tahata'], 7263.92],
  [['日野', 'Hino'], 7268.02],
  [['北島', 'Kitajima'], 7272.12],
  [['渡邊', 'Watanabe'], 7276.22],
  [['谷本', 'Tanimoto'], 7280.32],
  [['千田', 'Senda'], 7284.4],
  [['吉井', 'Yoshii'], 7288.48],
  [['深沢', 'Fukazawa'], 7292.54],
  [['西沢', 'Nishisawa'], 7296.59],
  [['相沢', 'Aizawa'], 7300.63],
  [['徳田', 'Tokuda'], 7304.66],
  [['原口', 'Haraguchi'], 7308.66],
  [['小柳', 'Koyanagi'], 7312.65],
  [['米山', 'Yoneyama'], 7316.63],
  [['新谷', 'Shintani'], 7320.61],
  [['細谷', 'Hosoya'], 7324.59],
  [['田上', 'Taue'], 7328.57],
  [['今泉', 'Imaizumi'], 7332.53],
  [['菅', 'Kan'], 7336.49],
  [['浜野', 'Hamano'], 7340.44],
  [['森岡', 'Morioka'], 7344.37],
]

export { JpFamilyNameData }
