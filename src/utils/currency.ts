const toRupiah = (val: number) => {
    const priceInString = `${val}`;
    const prefix = 'Rp';
    let result = '';

    for (let i = 3 ; i < priceInString.length; i+=3) {
        const maxRange = priceInString.length-(i-3);
        const minRange = priceInString.length-i;
        let slicedPrice = "." + priceInString.slice(minRange, maxRange);

        if(i < priceInString.length) {
            result = slicedPrice + result;
        }
    }
    
    result = priceInString.slice(0, priceInString.length-(result.length-(result.length%3))) + result;

    return prefix + ' ' + result;
};

export default toRupiah;