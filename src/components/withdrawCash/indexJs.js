function ResetData(array){
	array.forEach(function(val){
		var recordStatusDesc = val.recordStatusDesc;
		if(recordStatusDesc != undefined){
			if(recordStatusDesc == "10"){
				val.recordStatusDesA = "待到账";
			}else if(recordStatusDesc == "20"){
				val.recordStatusDesA = "提现成功";
			}else if(recordStatusDesc == "21"){
				val.recordStatusDesA = "提现失败";
				val.fontColor = "#f00";
			}else if(recordStatusDesc == "22"){
				val.recordStatusDesA = "提现处理中";
				val.fontColor = "#ccc";
			}else if(recordStatusDesc == "30"){
				val.recordStatusDesA = "已到帐";
			}else{
				val.recordStatusDesA = "未知";
			}
		}
	})
	return array;
}
export default {
	ResetData
}