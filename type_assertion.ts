let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
//second way
let alternativeWay = (message as string).endsWith('c');
