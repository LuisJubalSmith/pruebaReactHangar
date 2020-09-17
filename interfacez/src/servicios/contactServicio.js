import axios from 'axios';

export const registar_datos = async(pname, pemail, pphoneNumber, pmessage) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registar-datos',
            responseType: 'json',
            data: {
                name: pname,
                email: pemail,
                phoneNumber: pphoneNumber,
                message: pmessage,
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};