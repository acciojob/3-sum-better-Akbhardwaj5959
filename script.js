function threeSum(arr, target) {
// write your code here
	let n=arr.length;
	let intialdeff= Infinity , ans=-1;
	for(let i=0; i<=n-3; i++){
		for(let j=i+1; j<=n-2; j++){
			for(let k= j+1; k<=n-1; k++){
				let sum = arr[i]+arr[j]=arr[k];
				let deff = Math.abs(sum-target);
				if(intialdeff >diff){
					ans=sum;
				}
				
			}
		}
	}
	console.log(ans);
  
}

module.exports = threeSum;
