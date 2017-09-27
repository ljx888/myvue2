function ResetData(array){
	array.forEach(function(val){
		// 修正支付类型
		var payType = val.payType;
		if(payType == "01"){
			val.payTypeStr = "账户支付";
		}else if(payType == "02"){
			val.payTypeStr = "银联支付";
		}else if(payType == "03"){
			val.payTypeStr = "账户银联组合支付";
		}else if(payType == "04"){
			val.payTypeStr = "NFC支付";
		}else if(payType == "05"|| payType == "29"){
			val.payTypeStr = "快捷支付";
		}else if(payType == "06"){
			val.payTypeStr = "ApplePay";
		}else if(payType == "07"|| payType == "22"){
			val.payTypeStr = "微信APP支付";
		}else if(payType == "08" || payType == "14"|| payType == "17"|| payType == "26"){
			val.payTypeStr = "微信扫码支付";
		}else if(payType == "09"|| payType == "15" || payType == "16" || payType == "27"){
			val.payTypeStr = "微信条码支付";
		}else if(payType == "10"|| payType == "20"|| payType == "28"){
			val.payTypeStr = "微信网页支付";
		}else if(payType == "11"|| payType == "23"){
			val.payTypeStr = "支付宝APP支付";
		}else if(payType == "12"|| payType == "19"|| payType == "24"){
			val.payTypeStr = "支付宝扫码支付";
		}else if(payType == "13" || payType == "18"|| payType == "25"){
			val.payTypeStr = "支付宝条码支付";
		}else if(payType == "21"){
			val.payTypeStr = "支付宝网页支付";
		}else if(payType == "30"){
			val.payTypeStr = "QQ钱包扫码支付";
		}else if(payType == "31"){
			val.payTypeStr = "QQ钱包条码支付";
		}else if(payType == "32"){
			val.payTypeStr = "京东钱包扫码支付";
		}else if(payType == "33"){
			val.payTypeStr = "京东钱包条码支付";
		}else if(payType == "34"){
			val.payTypeStr = "百度钱包扫码支付";
		}else if(payType == "35"){
			val.payTypeStr = "百度钱包条码支付";
		}else if(payType == "36"){
			val.payTypeStr = "POS刷卡支付";
		}else{
			val.payTypeStr = "未知支付方式";
		}
		// 修正到账状态
		var recordStatusDesc = val.recordStatusDesc;
		if(recordStatusDesc == "10"){
			val.recordStatusDesA = "待到账";
			val.fontColor = '#f01a37'
		}else if(recordStatusDesc == "20"){
			val.recordStatusDesA = "提现成功";
		}else if(recordStatusDesc == "30"){
			val.recordStatusDesA = "已到帐";
		}
		
	})
	return array;
}

export default {
	ResetData
}