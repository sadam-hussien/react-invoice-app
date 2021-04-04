const GenerateId = () => {


    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const nums = "1234567890";

    const idLength = 6;

    const charsCount = 2;

    const numsCount = idLength - charsCount;

    let charsId = "";

    let numsId = "";

    let finalId = "";

    // generate chars
    for (let i = 0; i < charsCount; i++) {

        let charsRandom = Math.floor(Math.random() * chars.length);

        charsId += chars[charsRandom];

    }

    // generate nums
    for (let y = 0; y < numsCount; y++) {

        let numsRandom = Math.floor(Math.random() * nums.length);

        numsId += nums[numsRandom];

    }

    finalId += charsId + numsId;

    return finalId;
    

}

export default GenerateId;