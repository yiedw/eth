var contractAddress="0x4087457f363c3c9f61385f5edeb282fb5f0091dc";
var abi=[
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
			],
			"name": "Failed",
			"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "inputNum",
				"type": "uint256"
			}
			],
			"name": "game1",
			"outputs": [],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
			],
			"name": "Successed",
			"type": "event"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "checkBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	}
	];
var temp;
var tx;
var txInfo={
		"from":"",
		"value":""
}
var txList=txList=["0","1","2","3","4","5","6","7","8","9"];


window.addEventListener('load',function(){
	if(typeof web3 !=='undefined'){
		window.web3=new Web3(web3.currentProvider);
	} else{
		console.log('No web3? you should consider trying MetaMask!')
		window.web3== new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	}
	startApp();
});


function startApp(){
	legContract=web3.eth.contract(abi);
	leg=legContract.at(contractAddress);
	web3.eth.getBalance(contractAddress,(e,r)=>{
		document.getElementById('maxBet').innerHTML=web3.fromWei(r.toNumber(),'ether')/2;
	});
	web3.eth.getAccounts(function(e,r){
		web3.eth.getBalance(r[0],(e,b)=>{
			document.getElementById('accountMount').innerHTML=web3.fromWei(b.toNumber(),'ether');
		})
	});
	getTx(tx);
};

function getLink(addr){
	return '<a target="_blank" href=https://rinkeby.etherscan.io/address/' + addr + '>' + addr +'</a>';
}

function getTx(tx){
	web3.eth.getTransaction(tx,(e,r)=>{
		document.from=r.from;
		document.value=r.value.c[0]/1000;
	})
	txList.shift();
	txList.push(tx);
}

function bet() {
	var betPrice=document.getElementById("betPrice").value;
	temp=betPrice;
	leg.game1(document.getElementById("percent").value
			,{value: web3.toWei(temp, 'ether')},function(e,r){
				tx=r;
					document.getElementById("txhash" + [0]).innerHTML=getLink(txList[0])
					document.getElementById("txhash" + [1]).innerHTML=getLink(txList[1])
					document.getElementById("txhash" + [2]).innerHTML=getLink(txList[2])
					document.getElementById("txhash" + [3]).innerHTML=getLink(txList[3])
					document.getElementById("txhash" + [4]).innerHTML=getLink(txList[4])
					document.getElementById("txhash" + [5]).innerHTML=getLink(txList[5])
					document.getElementById("txhash" + [6]).innerHTML=getLink(txList[6])
					document.getElementById("txhash" + [7]).innerHTML=getLink(txList[7])
					document.getElementById("txhash" + [8]).innerHTML=getLink(txList[8])
					document.getElementById("txhash" + [9]).innerHTML=getLink(txList[9])
			});
}