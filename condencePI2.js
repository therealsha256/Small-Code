function main(nums){
    while(nums.length > 1){
        let condensed = [];
        for(let i = 0; i < nums.length - 1; i ++){
            condensed.push(nums[i] + nums[i + 1]);
        }
        nums = condensed; 

    }
    console.log(nums + '');

}