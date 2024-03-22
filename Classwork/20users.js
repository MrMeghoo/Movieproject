   // Fetched 20 random users from the API
fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data => {
        // User info displayed from the fetch
        const users = data.results.map(user => {
            return {
                firstName: user.name.first,
                lastName: user.name.last,
                phoneNumber: user.phone,
                email: user.email,
                picture: user.picture.medium,
                address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`
            };
        });

    
        console.log(users);
    })
   
