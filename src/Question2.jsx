// making API calls from React
// ex02: API call on button click - console#
// understanding#
// handleData fetches data from a fake API endpoint using fakeFetch.
// The function first tries to fetch the data using a try-catch block. If the data is successfully fetched, then the employee data is logged in the console.
// If there's an error, then the error message is caught in the catch block.

// challenge#
// Add an onclick event on the button with the text "get employee details" to call the handleData function. The handleData function should use the fakeFetch function to retrieve employee data from https://example.com/api/employees.

// If the response status is 200, the function should log the employee data to the console.

// https://codesandbox.io/s/api-call-on-button-click-console-challenge-etbb1h

// solution#
// https://codesandbox.io/s/api-call-on-button-click-console-solution-udh6lw

export const Question2 = () => {
  return (
    <>
      <a
        href="https://codesandbox.io/s/api-call-on-button-click-view-challenge-forked-g5yxcy?file=/src/App.jsx"
        rel="noopener noreferrer"
      >
        Solution of Question 2
      </a>
    </>
  );
};
