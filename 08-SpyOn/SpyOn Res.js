function spyOn(fn) {
    // Your code here:
  
    let callCount = 0;
    let calledWith = new Map();
    let returned = new Map();
  
    const spy = (...args) => {
      const result = fn(...args);
      callCount++;
      for (const arg of args) {
        calledWith.set(arg, true);
      }
      returned.set(result, true);
      return result;
    };
  
    spy.getCallCount = () => callCount;
    spy.wasCalledWith = (value) => {
      return calledWith.get(value) ? true : false;
    };
    spy.returned = (value) => {
      return returned.get(value) ? true : false;
    };
  
    return spy;
  }
  const adder = (n1, n2, n3, n4) => {
    return n1 + n2;
  };
  
  let adderSpy = spyOn(adder);
  
  //! GETCALLCOUNT
  
  console.log(adderSpy);
  console.log(adderSpy.getCallCount()); //(0)
  adderSpy(2, 3);
  console.log(adderSpy.getCallCount()); //(1)
  adderSpy(4, 5);
  adderSpy(5, 6);
  console.log(adderSpy.getCallCount()); //(3)
  
  //! WASCALLEDWITH
  // adderSpy(2, 3);
  // console.log(adderSpy.wasCalledWith(2)); //(true)
  // console.log(adderSpy.wasCalledWith(3)); //(true)
  // adderSpy(2, 3);
  
  // console.log(adderSpy.wasCalledWith(4)); //(false)
  // console.log(adderSpy.wasCalledWith(5)); //(false)
  
  //! HASRETURNED
  
  // adderSpy(2, 3);
  // adderSpy(2, 4);
  // console.log(adderSpy.returned(5)); //(true)
  // console.log(adderSpy.returned(6)); //(true)
  // adderSpy(2, 3);
  // console.log(adderSpy.returned(8)); //(false)
  // console.log(adderSpy.returned(7)); //(false)
  
  module.exports = spyOn;
  