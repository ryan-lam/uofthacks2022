
const thing = { data: 'WORKING test' };

// const response = fetch("http://localhost:3000/test", {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(thing),
// }).then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// });

const fetchResponsePromise = fetch("http://localhost:3000/test", {
                method: 'POST',
                headers: {
                   'Content-Type': 'application/json',
                },
                body: JSON.stringify(thing),
             
            }).then(data => {console.log(data); });