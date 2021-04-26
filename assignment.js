// 1. Convert Kilometer to Meter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
      return 'Please Enter more then Zero';
    }
    // 1 km = 1000 m
    return kilometer * 1000;
  }
  
  const meter = kilometerToMeter(5);
  console.log(meter);
  
  // 2. Budget Calculator
  function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
      return 'Please Enter more then Zero';
    }
    // watch price = $50
    const totalWatch = watch * 50;
    // phone price = $100
    const totalPhone = phone * 100;
    // laptop price = $500
    const totalLaptop = laptop * 500;
  
    return totalWatch + totalPhone + totalLaptop;
  }
  
  const total = budgetCalculator(2, 3, 1);
  console.log(total);
  
  // 3. Hotel Cost
  function hotelCost(day) {
    let money = 0;
  
    if (day < 0) {
      return 'Please Enter more then Zero';
    } else if (day <= 10) {
      // 1st: 1day - 10day => 1day = 100
      money = day * 100;
    } else if (day <= 20) {
      const firstPart = 10 * 100;
      const remaining = day - 10;
      // 2nd: 11day - 20day => 1day = 80
      const secondPart = remaining * 80;
      money = firstPart + secondPart;
    } else {
      const firstPart = 10 * 100;
      const secondPart = 10 * 80;
      const remaining = day - 20;
      // 3rd: 21day - 21+..day => 1day = 50
      const thirdPart = remaining * 50;
      money = firstPart + secondPart + thirdPart;
    }
  
    return money;
  }
  
  console.log(hotelCost(15));
  
  // 4. Mega Friend
  function megaFriend(friends) {
    let longName = '';
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].length <= 0) {
        return 'Unexpected Value';
      } else if (friends[i].length > longName.length) {
        longName = friends[i];
      }
    }
    return longName;
  }
  
  console.log(megaFriend(['Rakib', 'Tanjil', 'Shahed', 'Masum', 'Rohan', 'Robin']));