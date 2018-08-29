var contractAddress="0x206b3bbcec2377612b277273f3edc00843da7feb";
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
	};

function getLink(addr){
	  return '<a target="_blank" href=https://rinkeby.etherscan.io/address/' + addr + '>' + addr +'</a>';
	}

function getTx(){
	
}

function bet() {
	var betPrice=document.getElementById("betPrice").value;
	temp=betPrice;
    leg.game1(document.getElementById("percent").value
    		,{value: web3.toWei(temp, 'ether')},function(e,r){
    			tx=r;
        document.getElementById("txhash").innerHTML=getLink(tx)
      });
}