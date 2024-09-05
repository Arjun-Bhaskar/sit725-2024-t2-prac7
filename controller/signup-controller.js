const signUpService = require('../services/signup-service');

module.exports = (req, res) => {
    const request = req.body;
    console.log(request);
    if(request.fullName && request.email && request.phoneNo && request.password){
        console.log("everthing fine")
        const phoneNo = parseInt(request.phoneNo, 10);

        if (isNaN(phoneNo)) {

            return res.status(400).json({ message: "Invalid phone number format" });
        }
    const obj = signUpService.createObj(request);
    signUpService.saveData(obj).then((user) => {
        res.send({ message: "Data added successfully",
            fullName: user.fullName,
            email: user.email,
            phoneNo: user.phoneNo,
            password: user.password 
        });
    }).catch((err) => {
        console.error('Error details:', err); 

        res.status(500).send({ message });
    });
}
else{
        
    res.status(401).send({message: "Invalid Data!!"})

}
}
