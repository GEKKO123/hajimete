<!--
var xml = {};

function StationGroup(code){
if (code==0){
document.getElementById("s_group").innerHTML = "";
} else {
var s = document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));
s.type = "text/javascript";
s.charset = "utf-8";
s.src = "http://www.ekidata.jp/api/g/" + code + ".json";	//駅グループJSONデータURL

var str = "";
xml.onload = function(data){
var station_g = data["station_g"];
if(station_g != null){
for( i=0; i<station_g.length; i++){
str = str + station_g[i].line_name + " ";
str = str + station_g[i].station_name + "<br />";
}
}
document.getElementById("s_group").innerHTML = str;
}
}
}

// -->

if(typeof(xml)=='undefined') xml = {};
xml.data = {"station_join":[{"station_cd1":1130229,"station_cd2":1130201,"station_name1":"品川","station_name2":"大崎","lat1":35.62876,"lon1":139.738999,"lat2":35.619772,"lon2":139.728439},{"station_cd1":1130228,"station_cd2":1130229,"station_name1":"田町","station_name2":"品川","lat1":35.645736,"lon1":139.747575,"lat2":35.62876,"lon2":139.738999},{"station_cd1":1130227,"station_cd2":1130228,"station_name1":"浜松町","station_name2":"田町","lat1":35.655391,"lon1":139.757135,"lat2":35.645736,"lon2":139.747575},{"station_cd1":1130226,"station_cd2":1130227,"station_name1":"新橋","station_name2":"浜松町","lat1":35.666195,"lon1":139.758587,"lat2":35.655391,"lon2":139.757135},{"station_cd1":1130225,"station_cd2":1130226,"station_name1":"有楽町","station_name2":"新橋","lat1":35.675441,"lon1":139.763806,"lat2":35.666195,"lon2":139.758587},{"station_cd1":1130224,"station_cd2":1130225,"station_name1":"東京","station_name2":"有楽町","lat1":35.681391,"lon1":139.766103,"lat2":35.675441,"lon2":139.763806},{"station_cd1":1130223,"station_cd2":1130224,"station_name1":"神田","station_name2":"東京","lat1":35.691173,"lon1":139.770641,"lat2":35.681391,"lon2":139.766103},{"station_cd1":1130222,"station_cd2":1130223,"station_name1":"秋葉原","station_name2":"神田","lat1":35.698619,"lon1":139.773288,"lat2":35.691173,"lon2":139.770641},{"station_cd1":1130221,"station_cd2":1130222,"station_name1":"御徒町","station_name2":"秋葉原","lat1":35.707282,"lon1":139.774727,"lat2":35.698619,"lon2":139.773288},{"station_cd1":1130220,"station_cd2":1130221,"station_name1":"上野","station_name2":"御徒町","lat1":35.71379,"lon1":139.777043,"lat2":35.707282,"lon2":139.774727},{"station_cd1":1130219,"station_cd2":1130220,"station_name1":"鶯谷","station_name2":"上野","lat1":35.721484,"lon1":139.778015,"lat2":35.71379,"lon2":139.777043},{"station_cd1":1130218,"station_cd2":1130219,"station_name1":"日暮里","station_name2":"鶯谷","lat1":35.727908,"lon1":139.771287,"lat2":35.721484,"lon2":139.778015},{"station_cd1":1130217,"station_cd2":1130218,"station_name1":"西日暮里","station_name2":"日暮里","lat1":35.731954,"lon1":139.766857,"lat2":35.727908,"lon2":139.771287},{"station_cd1":1130216,"station_cd2":1130217,"station_name1":"田端","station_name2":"西日暮里","lat1":35.737781,"lon1":139.761229,"lat2":35.731954,"lon2":139.766857},{"station_cd1":1130215,"station_cd2":1130216,"station_name1":"駒込","station_name2":"田端","lat1":35.736825,"lon1":139.748053,"lat2":35.737781,"lon2":139.761229},{"station_cd1":1130214,"station_cd2":1130215,"station_name1":"巣鴨","station_name2":"駒込","lat1":35.733445,"lon1":139.739303,"lat2":35.736825,"lon2":139.748053},{"station_cd1":1130213,"station_cd2":1130214,"station_name1":"大塚","station_name2":"巣鴨","lat1":35.731412,"lon1":139.728584,"lat2":35.733445,"lon2":139.739303},{"station_cd1":1130212,"station_cd2":1130213,"station_name1":"池袋","station_name2":"大塚","lat1":35.730256,"lon1":139.711086,"lat2":35.731412,"lon2":139.728584},{"station_cd1":1130211,"station_cd2":1130212,"station_name1":"目白","station_name2":"池袋","lat1":35.720476,"lon1":139.706228,"lat2":35.730256,"lon2":139.711086},{"station_cd1":1130210,"station_cd2":1130211,"station_name1":"高田馬場","station_name2":"目白","lat1":35.712677,"lon1":139.703715,"lat2":35.720476,"lon2":139.706228},{"station_cd1":1130209,"station_cd2":1130210,"station_name1":"新大久保","station_name2":"高田馬場","lat1":35.700875,"lon1":139.700261,"lat2":35.712677,"lon2":139.703715},{"station_cd1":1130208,"station_cd2":1130209,"station_name1":"新宿","station_name2":"新大久保","lat1":35.689729,"lon1":139.700464,"lat2":35.700875,"lon2":139.700261},{"station_cd1":1130207,"station_cd2":1130208,"station_name1":"代々木","station_name2":"新宿","lat1":35.683061,"lon1":139.702042,"lat2":35.689729,"lon2":139.700464},{"station_cd1":1130206,"station_cd2":1130207,"station_name1":"原宿","station_name2":"代々木","lat1":35.670646,"lon1":139.702592,"lat2":35.683061,"lon2":139.702042},{"station_cd1":1130205,"station_cd2":1130206,"station_name1":"渋谷","station_name2":"原宿","lat1":35.658871,"lon1":139.701238,"lat2":35.670646,"lon2":139.702592},{"station_cd1":1130204,"station_cd2":1130205,"station_name1":"恵比寿","station_name2":"渋谷","lat1":35.646685,"lon1":139.71007,"lat2":35.658871,"lon2":139.701238},{"station_cd1":1130203,"station_cd2":1130204,"station_name1":"目黒","station_name2":"恵比寿","lat1":35.633923,"lon1":139.715775,"lat2":35.646685,"lon2":139.71007},{"station_cd1":1130202,"station_cd2":1130203,"station_name1":"五反田","station_name2":"目黒","lat1":35.625974,"lon1":139.723822,"lat2":35.633923,"lon2":139.715775},{"station_cd1":1130201,"station_cd2":1130202,"station_name1":"大崎","station_name2":"五反田","lat1":35.619772,"lon1":139.728439,"lat2":35.625974,"lon2":139.723822}]}
if(typeof(xml.onload)=='function') xml.onload(xml.data);


//# sourceMappingURL=timedate.map