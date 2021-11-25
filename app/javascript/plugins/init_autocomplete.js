import places from "places.js";

const initAutocomplete = () => {
  const addressInput = document.getElementById("user_address");
  if (addressInput) {
    places({ container: addressInput });
  }
  const searchInput = document.getElementById("search-input");
  console.log("searchInput is: ", searchInput);
  if (searchInput) {
    places({ container: searchInput });
  }
};

export { initAutocomplete };
