(() => {
  type UserID = string | number;

  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  //shirtSize = 'AS'; Error

  const clotheShop = (userId: UserID, size: Sizes) => {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toUpperCase()}`);
    }
  }
  clotheShop(10, 'M');

}) ();
