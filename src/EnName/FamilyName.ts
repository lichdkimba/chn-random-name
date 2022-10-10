// 英文姓氏
// 来源: https://web.archive.org/web/20081209221654if_/http://www.census.gov:80/genealogy/www/Top1000.xls
const EnFamilyNameData: [string[], number][] = [[["SMITH", "史密斯"], 237.62], [["JOHNSON", "约翰逊"], 423.34], [["WILLIAMS", "威廉姆斯"], 576.74], [["BROWN", "布朗"], 714.75], [["JONES", "琼斯"], 851.03], [["MILLER", "米勒"], 963.81], [["DAVIS", "戴维斯"], 1071.04], [["GARCIA", "加西亚"], 1156.87], [["RODRIGUEZ", "罗德里格斯"], 1237.29], [["WILSON", "威尔逊"], 1315.6], [["MARTINEZ", "马丁内斯"], 1393.11], [["ANDERSON", "安德森"], 1469.35], [["TAYLOR", "泰勒"], 1541.39], [["THOMAS", "托马斯"], 1612.46], [["HERNANDEZ", "埃尔南德斯"], 1683.1], [["MOORE", "摩尔"], 1752.97], [["MARTIN", "马丁"], 1820.24], [["JACKSON", "杰克逊"], 1886.85], [["THOMPSON", "汤普森"], 1951.29], [["WHITE", "怀特"], 2015.24], [["LOPEZ", "洛佩兹"], 2077.39], [["LEE", "李"], 2137.98], [["GONZALEZ", "冈萨雷斯"], 2197.75], [["HARRIS", "哈里斯"], 2257.1], [["CLARK", "克拉克"], 2311.94], [["LEWIS", "刘易斯"], 2362.93], [["ROBINSON", "罗宾逊"], 2413.23], [["WALKER", "沃克"], 2463.36], [["PEREZ", "佩雷斯"], 2512.21], [["HALL", "霍尔"], 2559.57], [["YOUNG", "杨"], 2606.16], [["ALLEN", "艾伦"], 2652.5], [["SANCHEZ", "桑切斯"], 2696.62], [["WRIGHT", "赖特"], 2740.66], [["KING", "金"], 2784.56], [["SCOTT", "斯科特"], 2826.57], [["GREEN", "格林"], 2867.92], [["BAKER", "贝克"], 2909.26], [["ADAMS", "亚当斯"], 2950.57], [["NELSON", "尼尔森"], 2991.79], [["HILL", "希尔"], 3032.97], [["RAMIREZ", "拉米雷斯"], 3071.87], [["CAMPBELL", "坎贝尔"], 3109.07], [["MITCHELL", "米切尔"], 3145.81], [["ROBERTS", "罗伯茨"], 3182.43], [["CARTER", "卡特"], 3218.68], [["PHILLIPS", "菲利普斯"], 3253.86], [["EVANS", "埃文斯"], 3288.08], [["TURNER", "特纳"], 3321.65], [["TORRES", "托雷斯"], 3354.17], [["PARKER", "帕克"], 3386.59], [["COLLINS", "柯林斯"], 3418.37], [["EDWARDS", "爱德华兹"], 3450.08], [["STEWART", "斯图尔特"], 3481.37], [["FLORES", "弗洛雷斯"], 3512.63], [["MORRIS", "莫里斯"], 3543.81], [["NGUYEN", "阮"], 3574.82], [["MURPHY", "墨菲"], 3604.87], [["RIVERA", "里维拉"], 3634.82], [["COOK", "库克"], 3664.3], [["ROGERS", "罗杰斯"], 3693.74], [["MORGAN", "摩根"], 3721.38], [["PETERSON", "森"], 3748.88], [["COOPER", "库珀"], 3775.89], [["REED", "里德"], 3802.63], [["BAILEY", "贝利"], 3829.22], [["BELL", "贝尔"], 3855.7], [["GOMEZ", "戈麦斯"], 3882.06], [["KELLY", "凯利"], 3908.1], [["HOWARD", "霍华德"], 3933.58], [["WARD", "沃德"], 3958.99], [["COX", "考克斯"], 3984.37], [["DIAZ", "迪亚兹"], 4009.55], [["RICHARDSON", "理查森"], 4034.5], [["WOOD", "伍德"], 4059.23], [["WATSON", "沃森"], 4083.47], [["BROOKS", "布鲁克斯"], 4107.55], [["BENNETT", "贝内特"], 4131.46], [["GRAY", "格雷"], 4155.13], [["JAMES", "詹姆斯"], 4178.45], [["REYES", "雷耶斯"], 4201.7], [["CRUZ", "克鲁兹"], 4224.81], [["HUGHES", "休斯"], 4247.75], [["PRICE", "普莱斯"], 4270.63], [["MYERS", "迈尔斯"], 4293.11], [["LONG", "朗"], 4315.46], [["FOSTER", "福斯特"], 4337.56], [["SANDERS", "桑德斯"], 4359.65], [["ROSS", "罗斯"], 4381.65], [["MORALES", "莫拉莱斯"], 4403.41], [["POWELL", "鲍威尔"], 4425.07], [["SULLIVAN", "沙利文"], 4446.63], [["RUSSELL", "罗素"], 4468.17], [["ORTIZ", "奥尔蒂斯"], 4489.64], [["JENKINS", "詹金斯"], 4511.01], [["GUTIERREZ", "古铁雷斯"], 4532.3], [["PERRY", "佩里"], 4553.56], [["BUTLER", "巴特勒"], 4574.65], [["BARNES", "巴恩斯"], 4595.69], [["FISHER", "费希尔"], 4616.72], [["HENDERSON", "亨德森"], 4637.73], [["COLEMAN", "科尔曼"], 4658.59], [["SIMMONS", "西蒙斯"], 4678.75], [["PATTERSON", "帕特森"], 4698.61], [["JORDAN", "乔丹"], 4718.33], [["REYNOLDS", "雷诺兹"], 4737.89], [["HAMILTON", "汉密尔顿"], 4757.32], [["GRAHAM", "格雷厄姆"], 4776.73], [["KIM", "金"], 4796.14], [["GONZALES", "冈萨雷斯"], 4815.53], [["ALEXANDER", "亚历山大"], 4834.87], [["RAMOS", "拉莫斯"], 4854.18], [["WALLACE", "华莱士"], 4873.26], [["GRIFFIN", "格里芬"], 4892.32], [["WEST", "韦斯特"], 4911.17], [["COLE", "科尔"], 4929.95], [["HAYES", "海斯"], 4948.7], [["CHAVEZ", "查韦斯"], 4967.29], [["GIBSON", "吉布森"], 4985.73], [["BRYANT", "布莱恩特"], 5004.11], [["ELLIS", "埃利斯"], 5022.3], [["STEVENS", "史蒂文斯"], 5040.44], [["MURRAY", "默里"], 5058.28], [["FORD", "福特"], 5076.12], [["MARSHALL", "马歇尔"], 5093.84], [["OWENS", "欧文斯"], 5111.47], [["MCDONALD", "麦克唐纳"], 5129.08], [["HARRISON", "哈里森"], 5146.64], [["RUIZ", "鲁伊兹"], 5164.18], [["KENNEDY", "肯尼迪"], 5181.34], [["WELLS", "威尔斯"], 5198.4], [["ALVAREZ", "阿尔瓦雷斯"], 5215.28], [["WOODS", "伍兹"], 5232.16], [["MENDOZA", "门多萨"], 5249.02], [["CASTILLO", "卡斯蒂略"], 5265.57], [["OLSON", "奥尔森"], 5281.92], [["WEBB", "韦伯"], 5298.27], [["WASHINGTON", "华盛顿"], 5314.57], [["TUCKER", "塔克"], 5330.86], [["FREEMAN", "弗里曼"], 5347.13], [["BURNS", "伯恩斯"], 5363.35], [["HENRY", "亨利"], 5379.49], [["VASQUEZ", "巴斯克斯"], 5395.49], [["SNYDER", "斯奈德"], 5411.43], [["SIMPSON", "辛普森"], 5427.25], [["CRAWFORD", "克劳福德"], 5443.06], [["JIMENEZ", "希门尼斯"], 5458.81], [["PORTER", "波特"], 5474.49], [["MASON", "梅森"], 5490.04], [["SHAW", "肖"], 5505.56], [["GORDON", "戈登"], 5521.05], [["WAGNER", "瓦格纳"], 5536.5], [["HUNTER", "亨特"], 5551.94], [["ROMERO", "罗梅罗"], 5567.32], [["HICKS", "希克斯"], 5582.68], [["DIXON", "迪克森"], 5597.88], [["HUNT", "亨特"], 5613.08], [["PALMER", "帕尔默"], 5628.12], [["ROBERTSON", "罗伯森"], 5643.15], [["BLACK", "布莱克"], 5658.17], [["HOLMES", "福尔摩斯"], 5673.19], [["STONE", "斯通"], 5688.17], [["MEYER", "迈耶"], 5703.14], [["BOYD", "博伊德"], 5718.09], [["MILLS", "米尔斯"], 5732.88], [["WARREN", "沃伦"], 5747.67], [["FOX", "福克斯"], 5762.41], [["ROSE", "罗斯"], 5777.1], [["RICE", "赖斯"], 5791.74], [["MORENO", "莫雷诺"], 5806.35], [["SCHMIDT", "施密特"], 5820.91], [["PATEL", "帕特尔"], 5835.42], [["FERGUSON", "弗格森"], 5849.65], [["NICHOLS", "尼科尔斯"], 5863.84], [["HERRERA", "埃雷拉"], 5877.92], [["MEDINA", "梅迪纳"], 5891.86], [["RYAN", "瑞安"], 5905.79], [["FERNANDEZ", "费尔南德斯"], 5919.72], [["WEAVER", "韦弗"], 5933.6], [["DANIELS", "丹尼尔斯"], 5947.48], [["STEPHENS", "斯蒂芬斯"], 5961.35], [["GARDNER", "加德纳"], 5975.22], [["PAYNE", "佩恩"], 5989.02], [["KELLEY", "凯利"], 6002.78], [["DUNN", "邓恩"], 6016.48], [["PIERCE", "皮尔斯"], 6030.13], [["ARNOLD", "阿诺德"], 6043.76], [["TRAN", "陈"], 6057.37], [["SPENCER", "斯宾塞"], 6070.81], [["PETERS", "斯"], 6084.23], [["HAWKINS", "霍金斯"], 6097.64], [["GRANT", "格兰特"], 6111.04], [["HANSEN", "汉森"], 6124.39], [["CASTRO", "卡斯特罗"], 6137.72], [["HOFFMAN", "霍夫曼"], 6150.98], [["HART", "哈特"], 6164.23], [["ELLIOTT", "艾略特"], 6177.48], [["CUNNINGHAM", "坎宁安"], 6190.67], [["KNIGHT", "骑士"], 6203.86], [["BRADLEY", "布拉德利"], 6216.99], [["CARROLL", "卡罗尔"], 6230.09], [["HUDSON", "哈德森"], 6243.17], [["DUNCAN", "邓肯"], 6256.21], [["ARMSTRONG", "阿姆斯特朗"], 6269.21], [["BERRY", "贝瑞"], 6282.15], [["ANDREWS", "安德鲁斯"], 6295.08], [["JOHNSTON", "约翰斯顿"], 6307.97], [["RAY", "雷"], 6320.85], [["LANE", "莱恩"], 6333.72], [["RILEY", "赖利"], 6346.52], [["CARPENTER", "卡彭特"], 6359.23], [["PERKINS", "帕金斯"], 6371.93], [["AGUILAR", "阿吉拉尔"], 6384.57], [["SILVA", "席尔瓦"], 6397.19], [["RICHARDS", "理查兹"], 6409.76], [["WILLIS", "威利斯"], 6422.32], [["MATTHEWS", "马修斯"], 6434.8], [["CHAPMAN", "查普曼"], 6447.26], [["LAWRENCE", "劳伦斯"], 6459.69], [["GARZA", "加尔萨"], 6472.1], [["VARGAS", "瓦加斯"], 6484.5], [["WATKINS", "沃特金斯"], 6496.74], [["WHEELER", "惠勒"], 6508.91], [["LARSON", "拉森"], 6521.02], [["CARLSON", "卡尔森"], 6533.03], [["HARPER", "哈珀"], 6545.02], [["GEORGE", "乔治"], 6557.0], [["GREENE", "格林"], 6568.96], [["BURKE", "伯克"], 6580.88], [["GUZMAN", "古兹曼"], 6592.72], [["MORRISON", "莫里森"], 6604.51], [["MUNOZ", "穆诺兹"], 6616.29], [["JACOBS", "雅各布斯"], 6627.84], [["OBRIEN", "奥布莱恩"], 6639.38], [["LAWSON", "劳森"], 6650.9], [["FRANKLIN", "富兰克林"], 6662.39], [["LYNCH", "林奇"], 6673.83], [["BISHOP", "毕肖普"], 6685.23], [["CARR", "卡尔"], 6696.62], [["SALAZAR", "萨拉扎"], 6707.97], [["AUSTIN", "奥斯汀"], 6719.29], [["MENDEZ", "门德斯"], 6730.56], [["GILBERT", "吉尔伯特"], 6741.8], [["JENSEN", "詹森"], 6753.03], [["WILLIAMSON", "威廉森"], 6764.25], [["MONTGOMERY", "蒙哥马利"], 6775.46], [["HARVEY", "哈维"], 6786.67], [["OLIVER", "奥利弗"], 6797.83], [["HOWELL", "豪威尔"], 6808.79], [["DEAN", "迪恩"], 6819.71], [["HANSON", "汉森"], 6830.62], [["WEBER", "韦伯"], 6841.41], [["GARRETT", "加勒特"], 6852.19], [["SIMS", "西姆斯"], 6862.91], [["BURTON", "伯顿"], 6873.63], [["FULLER", "富勒"], 6884.3], [["SOTO", "索托"], 6894.96], [["MCCOY", "麦考伊"], 6905.61], [["WELCH", "韦尔奇"], 6916.19], [["CHEN", "陈"], 6926.74], [["SCHULTZ", "舒尔茨"], 6937.24], [["WALTERS", "沃尔特斯"], 6947.67], [["REID", "里德"], 6958.07], [["FIELDS", "菲尔兹"], 6968.39], [["WALSH", "沃尔什"], 6978.71], [["LITTLE", "利特尔"], 6988.98], [["FOWLER", "福勒"], 6999.24], [["BOWMAN", "鲍曼"], 7009.46], [["DAVIDSON", "戴维森"], 7019.66], [["MAY", "梅"], 7029.83], [["DAY", "戴"], 7040.0], [["SCHNEIDER", "施耐德"], 7050.06], [["NEWMAN", "纽曼"], 7060.11], [["BREWER", "布鲁尔"], 7070.16], [["LUCAS", "卢卡斯"], 7080.2], [["HOLLAND", "霍兰德"], 7090.19], [["WONG", "黄"], 7100.13], [["BANKS", "班克斯"], 7110.06], [["SANTOS", "桑托斯"], 7119.96], [["CURTIS", "柯蒂斯"], 7129.86], [["PEARSON", "皮尔森"], 7139.73], [["DELGADO", "德尔加多"], 7149.6], [["VALDEZ", "瓦尔迪兹"], 7159.46], [["PENA", "佩纳"], 7169.29], [["RIOS", "里奥斯"], 7178.95], [["DOUGLAS", "道格拉斯"], 7188.59], [["SANDOVAL", "桑多瓦尔"], 7198.22], [["BARRETT", "巴雷特"], 7207.81], [["HOPKINS", "霍普金斯"], 7217.27], [["KELLER", "凯勒"], 7226.7], [["GUERRERO", "格雷罗"], 7236.12], [["STANLEY", "斯坦利"], 7245.5], [["BATES", "贝茨"], 7254.87], [["ALVARADO", "阿尔瓦拉多"], 7264.24], [["BECK", "贝克"], 7273.56], [["ORTEGA", "奥尔特加"], 7282.87], [["WADE", "韦德"], 7292.15], [["ESTRADA", "埃斯特拉达"], 7301.43], [["CONTRERAS", "康特拉斯"], 7310.7], [["BARNETT", "巴内特"], 7319.93], [["CALDWELL", "考德威尔"], 7329.06], [["SANTIAGO", "圣地亚哥"], 7338.16], [["LAMBERT", "兰伯特"], 7347.22], [["POWERS", "鲍尔斯"], 7356.26], [["CHAMBERS", "钱伯斯"], 7365.29], [["NUNEZ", "努内兹"], 7374.31], [["CRAIG", "克雷格"], 7383.27], [["LEONARD", "伦纳德"], 7392.19], [["LOWE", "洛"], 7401.11], [["RHODES", "罗德斯"], 7410.0], [["BYRD", "伯德"], 7418.88], [["GREGORY", "格雷戈里"], 7427.76], [["SHELTON", "谢尔顿"], 7436.59], [["FRAZIER", "弗雷泽"], 7445.42], [["BECKER", "贝克尔"], 7454.23], [["MALDONADO", "马尔多纳多"], 7463.03], [["FLEMING", "弗莱明"], 7471.82], [["VEGA", "维加"], 7480.59], [["SUTTON", "萨顿"], 7489.33], [["COHEN", "科恩"], 7498.05], [["JENNINGS", "詹宁斯"], 7506.75], [["PARKS", "帕克斯"], 7515.38], [["MCDANIEL", "麦克丹尼尔"], 7524.01], [["WATTS", "沃茨"], 7532.63], [["BARKER", "巴克"], 7541.15], [["NORRIS", "诺里斯"], 7549.67], [["VAUGHN", "沃恩"], 7558.17], [["VAZQUEZ", "巴斯克斯"], 7566.66], [["HOLT", "霍尔特"], 7575.13], [["SCHWARTZ", "施瓦茨"], 7583.6], [["STEELE", "斯蒂尔"], 7592.04], [["BENSON", "本森"], 7600.46], [["NEAL", "尼尔"], 7608.84], [["DOMINGUEZ", "多明格斯"], 7617.21], [["HORTON", "霍顿"], 7625.56], [["TERRY", "特里"], 7633.9], [["WOLFE", "沃尔夫"], 7642.21], [["HALE", "黑尔"], 7650.51], [["LYONS", "莱昂斯"], 7658.74], [["GRAVES", "格雷夫斯"], 7666.96], [["HAYNES", "海恩斯"], 7675.16], [["MILES", "迈尔斯"], 7683.35], [["PARK", "公园"], 7691.54], [["WARNER", "华纳"], 7699.72], [["PADILLA", "帕迪拉"], 7707.9], [["BUSH", "布什"], 7716.05], [["THORNTON", "桑顿"], 7724.17], [["MCCARTHY", "麦卡锡"], 7732.27], [["MANN", "曼"], 7740.37], [["ZIMMERMAN", "齐默尔曼"], 7748.46], [["ERICKSON", "埃里克森"], 7756.55], [["FLETCHER", "弗莱彻"], 7764.64], [["MCKINNEY", "麦金尼"], 7772.7], [["PAGE", "页"], 7780.75], [["DAWSON", "道森"], 7788.77], [["JOSEPH", "约瑟夫"], 7796.77], [["MARQUEZ", "马尔克斯"], 7804.77], [["REEVES", "里维斯"], 7812.75], [["KLEIN", "克莱因"], 7820.72], [["ESPINOZA", "埃斯皮诺萨"], 7828.65], [["BALDWIN", "鲍德温"], 7836.57], [["MORAN", "莫兰"], 7844.42], [["LOVE", "爱"], 7852.25], [["ROBBINS", "罗宾斯"], 7860.06], [["HIGGINS", "希金斯"], 7867.87], [["BALL", "鲍尔"], 7875.63], [["CORTEZ", "科尔特斯"], 7883.38], [["LE", "勒"], 7891.13], [["GRIFFITH", "格里菲斯"], 7898.87], [["BOWEN", "鲍文"], 7906.58], [["SHARP", "夏普"], 7914.27], [["CUMMINGS", "卡明斯"], 7921.94], [["RAMSEY", "拉姆齐"], 7929.6], [["HARDY", "哈迪"], 7937.26], [["SWANSON", "斯旺森"], 7944.91], [["BARBER", "巴伯"], 7952.56], [["ACOSTA", "阿科斯塔"], 7960.21], [["LUNA", "卢娜"], 7967.82], [["CHANDLER", "钱德勒"], 7975.43], [["BLAIR", "布莱尔"], 7982.94], [["DANIEL", "丹尼尔"], 7990.45], [["CROSS", "克罗斯"], 7997.96], [["SIMON", "西莫"], 8005.44], [["DENNIS", "丹尼斯"], 8012.92], [["OCONNOR", "奥康纳"], 8020.4], [["QUINN", "奎恩"], 8027.85], [["GROSS", "格罗斯"], 8035.28], [["NAVARRO", "纳瓦罗"], 8042.68], [["MOSS", "莫斯"], 8050.06], [["FITZGERALD", "菲茨杰拉德"], 8057.41], [["DOYLE", "多伊尔"], 8064.76], [["MCLAUGHLIN", "麦克劳林"], 8072.07], [["ROJAS", "罗哈斯"], 8079.38], [["RODGERS", "罗杰斯"], 8086.68], [["STEVENSON", "史蒂文森"], 8093.97], [["SINGH", "辛格"], 8101.23], [["YANG", "杨"], 8108.49], [["FIGUEROA", "菲格罗亚"], 8115.74], [["HARMON", "哈蒙"], 8122.98], [["NEWTON", "牛顿"], 8130.21]]

export { EnFamilyNameData }
