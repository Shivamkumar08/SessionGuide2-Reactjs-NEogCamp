// ex03: API call on button click - view#
// understanding#
// handleData fetches data from a fake API endpoint using fakeFetch.

// The function first tries to fetch the data using a try-catch block. If the data is successfully fetched, then the product data is logged in the console and the state is updated with the product data and displayed on the screen using a map.

// If there's an error, then the error message is caught in the catch bloc.

// challenge#
// Add an onclick event on the button with the text "get products details" to call the handleData function.

// The handleData function should use the fakeFetch function to retrieve product data from https://example.com/api/products.

// If the response status is 200, the function should update the state with the product data and display it on the screen. Each product item should display the name, price, and quantity.

// https://codesandbox.io/s/api-call-on-button-click-view-challenge-rve802

// solution#
// https://codesandbox.io/s/api-call-on-button-click-view-solution-xm0207

export const Question3 = () => {
  return (
    <>
      <a href="https://codesandbox.io/s/api-call-on-button-click-view-challenge-forked-g5yxcy">
        Solution of Question 3
      </a>
    </>
  );
};
