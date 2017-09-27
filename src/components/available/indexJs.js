import zfb from './images/icon_zhifubao.png'
import wx from './images/shouru_weixin.png'
import yhk from './images/shouru_bank.png'
import ye from './images/shouru_yue.png'
import qq from './images/icon_qq.png'
import jd from './images/icon_jdzf-@2x.png'
import bd from './images/shouru_baidu.png'
import pos from './images/shouru_shuaka.png'
function ResetData(array){
	array.forEach(function(val){
		//console.log(val)
		if (val.payType == '01') {
			val.logo = zfb
			val.payName = '支付宝支付'
		}else if(val.payType == '02'){
			val.logo = wx
			val.payName = '微信宝支付'
		}else if(val.payType == '03'){
			val.logo = yhk
			val.payName = '银行卡支付'
		}else if(val.payType == '04'){
			val.logo = ye
			val.payName = '余额支付'
		}else if(val.payType == '05'){
			val.logo = qq
			val.payName = 'QQ钱包支付'
		}else if(val.payType == '06'){
			val.logo = jd
			val.payName = '京东钱包支付'
		}else if(val.payType == '07'){
			val.logo = bd
			val.payName = '百度钱包支付'
		}else if(val.payType == '08'){
			val.logo = pos
			val.payName = 'POS刷卡支付'
		}else{
			val.payName = '未知支付'
		};
	})
	return array;
}

export default {
	ResetData
}