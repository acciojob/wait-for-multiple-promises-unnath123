//your JS code here. If required.let arr
let tdata= document.getElementById("output")
let tr1= document.createElement("tr")
let td1= document.createElement("td")
let td2= document.createElement("td")
tr1.id="loading"
td1.setAttribute("colspan","2")
td1.innerText="loading...."
tr1.appendChild(td1);
tdata.appendChild(tr1)

let promise1 = new Promise((resolve,reject)=>{
	let starttime1= performance.now()
	setTimeout(()=>{
		let endtime1=performance.now()
		resolve(endtime1 - starttime1); 
	},1000)
})

let promise2 = new Promise((resolve,reject)=>{
	let starttime2= performance.now()
	setTimeout(()=>{
		let endtime2=performance.now()
		resolve(endtime2 - starttime2); 
		
	},3000)
})

 let promise3 = new Promise((resolve,reject)=>{
	let starttime3= performance.now()
	setTimeout(()=>{
		let endtime3=performance.now()
		resolve(endtime3 - starttime3);
		
	},2000)
})


  let promises=[promise1, promise2, promise3];
// let promises = [
//   new Promise((resolve,reject) => setTimeout(() => resolve("Promise 1"), 1000),
//   new Promise((resolve,reject) => setTimeout(() => resolve("Promise 2"), 3000),
//   new Promise((resolve,reject) => setTimeout(() => resolve("Promise 3"), 2000),
// ];
// const promises = [
//   new Promise((resolve) => setTimeout(() => resolve("2"), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve("1"), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve("3"), 3000  )),
// ]

let totaltime=0
Promise.all(promises)
.then((data)=>{
	tr1.remove()
	// tdata.innerText = data
	console.log(data);
	let i=1
	 data.forEach((element)=>{
	let row1=document.createElement("tr")
	let col11=document.createElement("td")
	let col12=document.createElement("td")

	col11.innerText= `Promise ${i}`
	col12.innerText= element
	
	row1.append(col11,col12)
	tdata.appendChild(row1)
		i++

		 totaltime+=element
	})

		let row1=document.createElement("tr")
	let col11=document.createElement("td")
	let col12=document.createElement("td")

	col11.innerText= "Total"
	col12.innerText= totaltime
	
	row1.append(col11,col12)
	tdata.appendChild(row1)
})



