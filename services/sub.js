export const addToCart = async (product, user) => {
  console.log("onclick worked and add to cart now have result about try error")
  try {
    console.log("add to cart try working now")
    const userId = user?.uid || getGuestId();

    const cartRef = doc(db, "carts", userId);

    // 🔍 1. Get existing cart
    const cartSnap = await getDoc(cartRef);

    //let cartItems = [];
    //here if cart already existing
    if (cartSnap.exists()) {
      //cartItems = cartSnap.data().items || [];
      let items = snap.data().items
      const existing = items.find(i => i.productId === product.id)
      //hee if product already existing
      if(existing){
        existing.quantity+=1
        //below elese if cart existin and prosuct is not already exising
      }else{ 
       items.push({ ...product, quantity: 1 })
      }
      await updateDoc(cartRef, { items })
    }else{
        await setDoc(cartRef, {
      items: [{...product,quantity: 1 }]
    });
    }

     alert("Added successfully!");
    return { success: true };

  } catch (error) {
    console.log("add to cart error catch working now and error is ",error)
    console.error(error);
    return { success: false, error: error.message };
  }
};