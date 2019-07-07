var map;
var osm;
var zindex = 1;
var loadNameNumber;
var loadnorthmain;
var loadsouth;
var loadconnect;
var point1, point2, point3, point4, point5, point6, point7;
var waterAll;
var campPoint1, campPoint2, campPoint3, campPoint4, campPoint5, campPoint6, campPoint7, campPoint8;
var campAll;

function loadMap(){
	 map = L.map('map',{
		center: [23.6523, 120.9375],
		zoom: 7
	});
	 osm = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
		/*layers: 'EMAP',
		version:'1.0',
		transparent: true,
		format:'image/jpeg',*/
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://gis.rchss.sinica.edu.tw/mapdap/">通用版電子地圖</a> contributors'
	}).addTo(map);
	
	//點地圖跳出經緯度資訊
	var popup = L.popup();
	function onMapClick(e){
		popup
			.setLatLng(e.latlng)
			.setContent("經緯度: "+e.latlng.lat.toFixed(4)+", "+e.latlng.lng.toFixed(4))
			.openOn(map)
		
	}
    map.on('click',onMapClick);
}
function loadName1(){
	document.getElementById("name").innerHTML = '<font size="6" face = "DFKai-sb">奇萊主北</font>';
	loadNameNumber = 1;
	loadnorthmain = L.geoJson(northmain,{
		style: function(feature){
			return{
				color: feature.properties.stroke,
			}
		}
	});
	map.flyTo([24.11158282658836, 121.31185054779051], 14);
	map.addLayer(loadnorthmain);
	map.removeLayer(loadconnect);
	map.removeLayer(loadsouth);
}
function loadName2(){
	document.getElementById("name").innerHTML = '<font size="6" face = "DFKai-sb">奇萊連峰</font>';
	loadNameNumber = 2;
	loadconnect = L.geoJson(connect,{
		style: function(feature){
			return{
				color: feature.properties.stroke,
			}
		}
	});
	map.flyTo([24.088783246283963, 121.27841949462889], 12);
	map.addLayer(loadconnect);
	map.removeLayer(loadnorthmain);
	map.removeLayer(loadsouth);
}
function loadName3(){
	document.getElementById("name").innerHTML = '<font size="6" face = "DFKai-sb">奇萊南華</font>';
	loadNameNumber = 3;
	loadsouth = L.geoJson(south,{
		style: function(feature){
			return{
				color: feature.properties.stroke,
			}
		}
	});
	map.flyTo([24.044288883543565, 121.25200510025024], 14);
	map.addLayer(loadsouth);
	map.removeLayer(loadconnect);
	map.removeLayer(loadnorthmain);
}
//客製化Icon
var waterIcon = L.icon({
		iconUrl: 'water.png',
		iconSize: [30,30],
		/*iconAnchor: [32,64],
		popupAnchor:[-18,-42]*/
	});
var campIcon = L.icon({
		iconUrl: 'tent.png',
		iconSize: [30,30]
	});
	
function loadWater(){  /*做與地圖的連結，秀資訊*/

	point1 = L.marker([24.11594053168165,121.31901741027832],{
		icon:waterIcon,
	});
	point1.bindPopup("<font size='5' face = 'DFKai-sb'>濁水溪源頭</font>");
	point2 = L.marker([24.108512758765603,121.32897913455962],{
		icon:waterIcon,
	});
	point2.bindPopup("<font size='5' face = 'DFKai-sb'>龍溪</font>");
	point3 = L.marker([24.056614054375665,121.285103559494],{
		icon:waterIcon,
	});
	point3.bindPopup("<font size='5' face = 'DFKai-sb'>塔羅灣溪</font>");
	point4 = L.marker([24.045151096144064,121.27961039543152],{
		icon:waterIcon,
	});
	point4.bindPopup("<font size='5' face = 'DFKai-sb'>天池山莊山屋水</font>");
	point5 = L.marker([24.047762193308845,121.27927780151367],{
		icon:waterIcon,
	});
	point5.bindPopup("<font size='5' face = 'DFKai-sb'>能高瀑布</font>");
	point6 = L.marker([24.04801693165292,121.27692282199858],{
		icon:waterIcon,
	});
	point6.bindPopup("<font size='5' face = 'DFKai-sb'>12.9K水源</font>");
	point7 = L.marker([24.046561977003137,121.23636782169343],{
		icon:waterIcon,
	});
	point7.bindPopup("<font size='5' face = 'DFKai-sb'>雲海保線所水管水</font>");
	waterAll = L.layerGroup([point1, point2, point3, point4, point5, point6, point7]);
	map.addLayer(waterAll);
}
//載入營地
function loadCamp(){
	campPoint1 = L.marker([24.12065060336929,121.31197929382323],{
		icon:campIcon,
	});
	campPoint1.bindPopup("<font size='5' face = 'DFKai-sb'>黑水塘山屋</font>");
	campPoint2 = L.marker([24.116067833195657,121.31858825683592],{
		icon:campIcon,
	});
	campPoint2.bindPopup("<font size='5' face = 'DFKai-sb'>成功山屋<br>成功二號堡</font>");
	campPoint3 = L.marker([24.108693929086215,121.32696747779845],{
		icon:campIcon,
	});
	campPoint3.bindPopup("<font size='5' face = 'DFKai-sb'>稜線山屋<br>山屋旁營地</font>");
	campPoint4 = L.marker([24.056682633096763,121.28501772880553],{
		icon:campIcon,
	});
	campPoint4.bindPopup("<font size='5' face = 'DFKai-sb'>奇萊南峰岔口營地</font>");
	campPoint5 = L.marker([24.05062307183018,121.28410577774049],{
		icon:campIcon,
	});
	campPoint5.bindPopup("<font size='5' face = 'DFKai-sb'>天池停機坪</font>");
	campPoint6 = L.marker([24.0453764462104,121.27962112426756],{
		icon:campIcon,
	});
	campPoint6.bindPopup("<font size='5' face = 'DFKai-sb'>天池山莊</font>");
	campPoint7 = L.marker([24.046748133736646,121.23626053333282],{
		icon:campIcon,
	});
	campPoint7.bindPopup("<font size='5' face = 'DFKai-sb'>雲海保線所</font>");
	campPoint8 = L.marker([24.11430518558748,121.32081985473633],{
		icon:campIcon,
	});
	campPoint8.bindPopup("<font size='5' face = 'DFKai-sb'>成功一號堡</font>");
	campAll = L.layerGroup([campPoint1, campPoint2, campPoint3, campPoint4, campPoint5, campPoint6, campPoint7, campPoint8]);
	map.addLayer(campAll);
}

var insertPoint
function insertWaterData(){  /*將水資料加入table和地圖*/
	
	var waterOption1 = document.getElementById("waterOption1").value;
	var waterOption2 = document.getElementById("waterOption2").value;
	var waterOption3 = document.getElementById("waterOption3").value;
	var waterOption4 = document.getElementById("waterOption4").value;

	
		var waterLatLng = waterOption4.split(",");
		insertPoint = L.marker([waterLatLng[0], waterLatLng[1]],{
			icon:waterIcon,
		});
		insertPoint.bindPopup(waterOption1);
	
	if(loadNameNumber == 1){
		var table = document.getElementById("waterTable1");
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.id = waterOption1;
		cell1.innerHTML = waterOption1;
		cell2.innerHTML = waterOption2;
		cell3.innerHTML = waterOption3;
		cell4.innerHTML = waterOption4;
		map.addLayer(insertPoint);
	}else if(loadNameNumber == 2){
		var table = document.getElementById("waterTable2");
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = waterOption1;
		cell2.innerHTML = waterOption2;
		cell3.innerHTML = waterOption3;
		cell4.innerHTML = waterOption4;
		map.addLayer(insertPoint);
	}else if(loadNameNumber == 3){
		var table = document.getElementById("waterTable3");
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = waterOption1;
		cell2.innerHTML = waterOption2;
		cell3.innerHTML = waterOption3;
		cell4.innerHTML = waterOption4;
		map.addLayer(insertPoint);
	}
	
}

function insertCampData(){  /*將營地資料加入table和地圖*/
	
	var campOption1 = document.getElementById("campOption1").value;
	var campOption2 = document.getElementById("campOption2").value;
	var campOption3 = document.getElementById("campOption3").value;
	var campOption4 = document.getElementById("campOption4").value;

	
		var campLatLng = campOption4.split(",");
		var insertCampPoint = L.marker([campLatLng[0], campLatLng[1]],{
			icon:campIcon,
		});
		insertCampPoint.bindPopup(campOption1);
	if(loadNameNumber == 1){
		var table = document.getElementById("campTable1");
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = campOption1;
		cell2.innerHTML = campOption2;
		cell3.innerHTML = campOption3;
		cell4.innerHTML = campOption4;
		map.addLayer(insertCampPoint);
	}else if(loadNameNumber == 2){
		var table = document.getElementById("campTable2");
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = campOption1;
		cell2.innerHTML = campOption2;
		cell3.innerHTML = campOption3;
		cell4.innerHTML = campOption4;
		map.addLayer(insertCampPoint);
	}else if(loadNameNumber == 3){
		var table = document.getElementById("campTable3");
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = campOption1;
		cell2.innerHTML = campOption2;
		cell3.innerHTML = campOption3;
		cell4.innerHTML = campOption4;
		map.addLayer(insertCampPoint);
	}
	
}


//jquery的執行
//當點水源時，執行water div的z-index
$(document).ready(function(){
	$("a[target='waterButton']").click(function(){
		zindex = zindex + 1;
		$("#water").css("z-index", zindex);
	});	
});
//當點營地時，執行camp div的z-index
$(document).ready(function(){
	$("a[target='campButton']").click(function(){
		zindex = zindex + 1;
		$("#camp").css("z-index", zindex);
	});	
});
//當點選山名稱時，執行秀出該山的水源、營地、路程時間
$(document).ready(function(){
	$("a[target='name1']").on({
		click: function(){
			$("#waterTable1").show();
			$("#waterTable2").hide();
			$("#waterTable3").hide();
			$("#waterOption").show();
			$("#campTable1").show();
			$("#campTable2").hide();
			$("#campTable3").hide();
			$("#campOption").show();
		}
		
	});
});
$(document).ready(function(){
	$("a[target='name2']").click(function(){
		$("#waterTable1").hide();
		$("#waterTable2").show();
		$("#waterTable3").hide();
		$("#waterOption").show();
		$("#campTable1").hide();
		$("#campTable2").show();
		$("#campTable3").hide();
		$("#campOption").show();
	});
});
$(document).ready(function(){
	$("a[target='name3']").click(function(){
		$("#waterTable1").hide();
		$("#waterTable2").hide();
		$("#waterTable3").show();
		$("#waterOption").show();
		$("#campTable1").hide();
		$("#campTable2").hide();
		$("#campTable3").show();
		$("#campOption").show();
	});
});
$(document).ready(function(){
	$("td.first").click(function(){
		point1.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.second").click(function(){
		point2.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.third").click(function(){
		point3.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.fourth").click(function(){
		point4.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.fifth").click(function(){
		point5.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.sixth").click(function(){
		point6.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.seventh").click(function(){
		point7.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.one").click(function(){
		campPoint1.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.two").click(function(){
		campPoint2.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.three").click(function(){
		campPoint3.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.four").click(function(){
		campPoint4.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.five").click(function(){
		campPoint5.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.six").click(function(){
		campPoint6.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.seven").click(function(){
		campPoint7.openPopup();
		
	});
});
$(document).ready(function(){
	$("td.eight").click(function(){
		campPoint8.openPopup();
		
	});
});
$(document).ready(function(){
	$("a[target='waterButton']").dblclick(function(){
		map.removeLayer(waterAll);
	});
});

