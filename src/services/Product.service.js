
const API_LIST_PRODUCT = "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"

export const fetchProductList = async () => {
    try {
        const response = await fetch(API_LIST_PRODUCT).then((res) => res.json());
        console.log(response);
        return response

    } catch (error) {
        console.error(error)
        return [];
    }
}