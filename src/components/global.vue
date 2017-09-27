<script type="text/javascript">
	/*
	{
		userId 用户id
	}
	 */
	function setStorage(name,val){
		var obj = JSON.parse(localStorage.storeData);
		obj[name] = val;
		localStorage.storeData = JSON.stringify(obj);
	}
	function getStorage(name){
		var obj = JSON.parse(localStorage.storeData);
		return obj[name];
	}
	
	export default {
		setStorage,
		getStorage
	}
</script>