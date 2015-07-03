function IslandInfo(name,link,price,b2btime,date,activity,related,similiar,friends,visa,tips,suitfamily){
	return {
		name:name,
		link:link,
		price:price,
		b2btime:b2btime,
		date:date,
		activity:activity,
		suitfamily:suitfamily,
		related:related,
		similiar:similiar,
		friends:friends,
		visa:visa,
		tips:tips
	}
}

function GetIslandsList()
{ 
	islandsTableElem = document.getElementById('islands_list');
	var islandsTableHeader=new Array("岛名","价格（一家三口）","床到床时间","适宜旅行时间","典型活动","适宜家庭","相关景点","类似景点","去过的兄弟","签证是否","特别提示");
	var islands=new Array();
	islands[0]  = new IslandInfo("济州岛", "jeju/jejudo.html", "2万/4天", "7小时", "5月-9月", "海滩，观光","牛岛", "", "贺敏", "落地签", "邮轮", ">4岁");
	islands[1]  = new IslandInfo("冲绳","okinawa.html","","","","","","", "", "是","","");
	islands[2]  = new IslandInfo("普吉岛","phuket/phuket.html","2.5万/5天","10小时","11月-4月","寺庙，表演，潜水，攀牙湾","皮皮岛,皇帝岛","巴厘岛,塞班岛","贺敏，邓海军，田锐","是","",">4岁");
	islands[3]  = new IslandInfo("塞班岛","saipan/saipan.html","3万/4天","12小时","12月-6月","潜水，水上运动","军舰岛","普吉岛,巴厘岛","刘军,邓海军","落地签","",">4岁");
	islands[4]  = new IslandInfo("巴厘岛","bali/bali.html","2万/5天","14小时","6月-9月","","","普吉岛,塞班岛","郝又超，王爱华，汪超，何剑峰","落地签","",">4岁");
	islands[5] 	= new IslandInfo("新加坡","singapore/singapore.html","2.5万/4天","11小时","6月-9月","动物园，圣淘沙","巴丹岛","香港","贺敏，邓海军，李红君","是","",">6岁");
	islands[6] 	= new IslandInfo("民丹岛","pulaubintan.html","","","","","","","贺敏，李红君","落地签","",">6岁");
	islands[7] 	= new IslandInfo("马尔代夫","maledive/maledive.html","4.5万/4天","11小时 (Male)","5月-10月","潜水、钓鱼、海洋动物","","帕劳","邓海军，谈猛刚，王盈","免签","",">8岁");
	islands[8] 	= new IslandInfo("帕劳","palau.html","","","","潜水","","马尔代夫","","免签","",">8岁");
	islands[9] 	= new IslandInfo("沙巴","sabah.html","","","","","","","温胤欣","是","安全顾虑","");
	islands[10] = new IslandInfo("长滩","boracay.html","2万/5天","12小时","","海滩，性价比高","","","于川","是","","");
	islands[11] = new IslandInfo("圣托里尼","santorini/santorini.html","5万/8天","15-20小时 (雅典)","5月-10月","历史，摄影","雅典","扎金索斯, 米诺克斯","邓海军","是","",">10岁");
	islands[12] = new IslandInfo("大堡礁","GreatBarrierReef.html","","","","","","","代刚","是","",">8岁");
	islands[13] = new IslandInfo("塞舌尔","seychelles.html","6万/8天","","","","","","丁硕","免签","","");
	islands[14] = new IslandInfo("夏威夷","hawaii.html","","","","","","","","是","","");
	islands[15] = new IslandInfo("毛里求斯","mauritius.html","5万/8天","","","","","","","免签","","");
	islands[16] = new IslandInfo("斐济","fiji.html","","","","","","瓦努阿图","","免签","","");
	islands[17] = new IslandInfo("塔希提","tahiti.html","8万/8天","","","","","","","是","","");
	islands[18] = new IslandInfo("冰岛","iceland.html","","","","","","","","是","","");
	islands[19] = new IslandInfo("新西兰","newzealand.html","7万/10天","22小时（基督城）","2月，5月","","","","贺敏","是","",">10岁");
	islands[20] = new IslandInfo("斯里兰卡","srilanka.html","","","","","","","","免签","","");
	islands[21] = new IslandInfo("台湾","taiwan/taiwan.html","","","","","","","安志鹏、王爱华，郭湘黎","赴台证、入台证","",">10岁");
	islands[22] = new IslandInfo("苏梅","samui.html","","","","","","","","是","",">4岁");
	headerCol = document.createElement('tr');
	for ( headTitle in islandsTableHeader) {
		headerCellElem = document.createElement('th');
		headerCellElem.appendChild(document.createTextNode(islandsTableHeader[headTitle]));
		headerCol.appendChild(headerCellElem);
	}
	islandsTableElem.appendChild(headerCol);
	for(island in islands)
	{
		islandCol = document.createElement('tr');
		for (attr in islands[island])
		{
			
			if(attr=="name")
			{
				dataCellElem = document.createElement('td');
				nameCellElem = document.createElement('a');
				if(islands[island].link.search(/\//)<0)
					nameCellElem.appendChild(document.createTextNode(" "+islands[island].name+" "));
				else
				{
					strongNameCellElem = document.createElement('strong');
					strongNameCellElem.appendChild(document.createTextNode(" "+islands[island].name+" "));
					nameCellElem.appendChild(strongNameCellElem);
				}
				nameCellElem.setAttribute("href", islands[island].link);
				dataCellElem.appendChild(nameCellElem);
				islandCol.appendChild(dataCellElem);
			}
			else if (attr!="link")
			{
				attrCellElem = document.createElement('td');
				if(typeof(islands[island][attr])!="undefined")
					attrCellElem.appendChild(document.createTextNode(" "+islands[island][attr]+" "));
				else
					attrCellElem.appendChild(document.createTextNode("  "));
				islandCol.appendChild(attrCellElem);
			}
		}
		
		islandsTableElem.appendChild(islandCol);
	}		
}